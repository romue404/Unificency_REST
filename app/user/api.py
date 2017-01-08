from flask import Blueprint, make_response
from flask_restful import Api, Resource, reqparse, marshal_with
from app import db
from app.university import model as university_model
import model
from app.validation import email as validator
from sqlalchemy.exc import IntegrityError

user_blueprint = Blueprint('user', __name__)
api = Api(user_blueprint)


class SingleUser(Resource):
    def post_parser(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str, required=True, help='you have to provide a username for this user')
        parser.add_argument('email', type=validator.email, required=True, help='you have to provide a valid email for this user')
        parser.add_argument('university', type=str, required=True, help='you have to provide a university for this user')
        parser.add_argument('password', type=str, default=None)
        parser.add_argument('major', type=str, default=None)
        return parser

    def put_parser(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str)
        parser.add_argument('email', type=validator.email, required=True, help='you have to provide a valid email for this user')
        parser.add_argument('university', type=str)
        parser.add_argument('password', type=str)
        parser.add_argument('major', type=str)
        return parser

    def delete_parser(self):
        parser = reqparse.RequestParser()
        # authorization has to be added
        parser.add_argument('email', type=validator.email, required=True, help='you have to provide a valid email for this user')
        return parser


    def post(self):
        parser = self.post_parser()
        args = parser.parse_args()
        parent_uni = university_model.University.query.filter_by(name=args['university']).first()
        if parent_uni:
            new_user = model.User(username=args['username'], email=args['email'], major=args['major'])
            new_user.owner = parent_uni
            try:
                db.session.add(new_user)
                db.session.commit()
                return make_response('user was created', 201)
            except IntegrityError as error:
                s = ""
                if "Duplicate entry" in error.message:
                    s = "this user already exists"
                    return make_response(s, 404)
                else:
                    s = "an error occured, the user could not be saved"
                    return make_response(s, 500)
        return make_response('no such university', 404)

    def put(self):
        test = ""
        parser = self.put_parser()
        args = parser.parse_args()
        # get user, if no email is provided, a 404 is returned right here
        user_to_update = model.User.query.filter_by(email=args['email']).first()
        if user_to_update:
            for key, value in args.iteritems():
                # last part is to fix requests that have a key but null as a value for that key
                #setattr(user_to_update(user_to_update, k, v if v else getattr(user_to_update,k)))
                if value:
                    setattr(user_to_update, key, value)
            db.session.commit()
            return make_response('updated major' + test, 200)
        return make_response("no such user", 404)

    def delete(self):
        parser = self.delete_parser()
        args = parser.parse_args()
        # try to delete if exists
        user_to_delete = model.User.query.filter_by(email=args['email']).first()
        if user_to_delete:
            db.session.delete(user_to_delete)
            db.session.commit()
            return make_response('user deleted', 200)
        return make_response('no such user', 404)


class UserList(Resource):
    @marshal_with(model.User.fields)
    def get(self, university):
        parent_uni = university_model.University.query.filter_by(name=university).first()
        if parent_uni:
            return parent_uni.users.all()
        return make_response('no such university', 404)


api.add_resource(SingleUser, '/users/')
api.add_resource(UserList, '/users/<string:university>')
define({ "api": [  {    "version": "0.1.0",    "type": "get",    "url": "/buildings/{university}",    "title": "All buildings from a university.",    "name": "CreateABuilding",    "group": "Buildings",    "description": "<p>Create a new Building.</p>",    "filename": "./app/building/api.py",    "groupTitle": "Buildings",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "UserAlreadyExists",            "description": "<p>No Resource for the provided properties (unique keys) exists in the database. You are trying t o access a Resource object, possibly to update some information on it or some information that are associated with it. Therefor this resource must be present in the first place.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "CouldNotBeSavedError",            "description": "<p>There was an internal server error. Saving your data was not successful.</p>"          }        ]      },      "examples": [        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        },        {          "title": "NoSuchResourceError:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"message that specifies the error\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Error while saving\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "SuccessfulEmpty",            "description": "<p>There were no errors, your request was successfully carried out. The resource was created.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK\n{\n  \"message:\"\"(user {user} added to group {group})+. ({key} set to {value})*\"\n  }",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "get",    "url": "/buildings/{university}",    "title": "All buildings from a university.",    "name": "GetAllBuildingsFromUniversity",    "group": "Buildings",    "description": "<p>Get a list of all buildings at a university. The university has to be in the database.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "address",            "description": "<p>The address</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "name",            "description": "<p>The name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": true,            "field": "description",            "description": "<p>The description HTTP/1.1 200 OK { 'name of university': [{ &quot;id&quot;: the buildings id, &quot;address&quot;: the buildings address, &quot;name&quot;: the buildings name, &quot;description&quot;: the buildings description }, ...]</p>"          }        ]      }    },    "filename": "./app/building/api.py",    "groupTitle": "Buildings",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          }        ]      },      "examples": [        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "post",    "url": "/groups/",    "title": "Create a new user",    "name": "CreateGroup",    "group": "Groups",    "description": "<p>Create a new group.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "user_id",            "description": "<p>Unique id for the user who tries to create a new group.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "group_name",            "description": "<p>A unique name for the group. You cant change this afterwards.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "topic_area",            "description": "<p>A topic area which describes the purpose of this group.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "password",            "description": "<p>The groups password.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>A description for group.</p>"          }        ]      }    },    "filename": "./app/group/api.py",    "groupTitle": "Groups",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserAlreadyExists",            "description": "<p>A user for the provided properties already exists in the database. Maybe you should try to modify instead of creating something new. Take a look at the put methods.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "CouldNotBeSavedError",            "description": "<p>There was an internal server error. Saving your data was not successful.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\":\"this user already exists\"\n}",          "type": "json"        },        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        },        {          "title": "ResourceAlreadyExistsError:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"message that specifies the error\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Error while saving\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "SuccessfulEmpty",            "description": "<p>There were no errors, your request was successfully carried out. The resource was created.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK\n{\n  \"message:\"\"(user {user} added to group {group})+. ({key} set to {value})*\"\n  }",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "get",    "url": "/groups/{id}",    "title": "Get group at id.",    "name": "GetGroupAtId",    "group": "Groups",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "200",            "description": "<p>message Success message for group creation.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  'id': the groups id,\n  'name': the groups name,\n  'topic_area': the groups area of topic,\n  'description': the groups description,\n  'members': [{name: users who are members of the group}]\n  }",          "type": "json"        }      ]    },    "filename": "./app/group/api.py",    "groupTitle": "Groups",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "UserAlreadyExists",            "description": "<p>No Resource for the provided properties (unique keys) exists in the database. You are trying t o access a Resource object, possibly to update some information on it or some information that are associated with it. Therefor this resource must be present in the first place.</p>"          }        ]      },      "examples": [        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        },        {          "title": "NoSuchResourceError:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"message that specifies the error\"\n}",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "get",    "url": "/groups/{university}",    "title": "Get all groups at a university.",    "name": "GetGroupsAtUniversity",    "group": "Groups",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "200",            "description": "<p>message Success message for group creation.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 200 OK\n{\n  'id': the groups id,\n  'name': the groups name,\n  'topic_area': the groups area of topic,\n  'description': the groups description,\n  'members': [{name: users who are members of the group}]\n  }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NoSuchResourceError",            "description": ""          },          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          }        ]      },      "examples": [        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        }      ]    },    "filename": "./app/group/api.py",    "groupTitle": "Groups"  },  {    "version": "0.1.0",    "type": "put",    "url": "/groups/",    "title": "Modify a user",    "name": "ModifyGroup",    "group": "Groups",    "description": "<p>Create a new user. Note that you have to provide a unique email and a unique username.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": true,            "field": "user_id",            "description": "<p>Unique id for the user who tries to create a new group.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "group_name",            "description": "<p>A unique name for the group. You cant change this afterwards.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "topic_area",            "description": "<p>A topic area which describes the purpose of this group.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "password",            "description": "<p>The groups password.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "description",            "description": "<p>A description for group.</p>"          }        ]      }    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "200",            "description": "<p>ModifiedGroup was successfully modified.</p>"          }        ]      },      "examples": [        {          "title": "ModifiedGroup:",          "content": "HTTP/1.1 200 OK\n{\n  \"message:\"\"(user {user} added to group {group})+. ({key} set to {value})*\"\n  }",          "type": "json"        }      ]    },    "filename": "./app/group/api.py",    "groupTitle": "Groups",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "NoSuchUserError",            "description": "<p>There is no such user in the database. You are trying to access a user object, possibly to update some information on the user or some information that are associated with the user. Therefor a user object must be present in the first place.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          }        ]      },      "examples": [        {          "title": "NoSuchUserError:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"this user does not exist\"\n}",          "type": "json"        },        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "post",    "url": "/notes/",    "title": "Create a note.",    "name": "CreateNote",    "group": "Notes",    "description": "<p>Create a new Note.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "user_id",            "description": "<p>Unique id for the user who tries to create a new note.</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "group_id",            "description": "<p>A unique id for the group in which the note is posted.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>The notes name.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "content",            "description": "<p>The notes content.</p>"          }        ]      }    },    "filename": "./app/note/api.py",    "groupTitle": "Notes",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "NoSuchUserError",            "description": "<p>There is no such user in the database. You are trying to access a user object, possibly to update some information on the user or some information that are associated with the user. Therefor a user object must be present in the first place.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "CouldNotBeSavedError",            "description": "<p>There was an internal server error. Saving your data was not successful.</p>"          }        ]      },      "examples": [        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        },        {          "title": "NoSuchUserError:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"this user does not exist\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Error while saving\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "SuccessfulEmpty",            "description": "<p>There were no errors, your request was successfully carried out. The resource was created.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK\n{\n  \"message:\"\"(user {user} added to group {group})+. ({key} set to {value})*\"\n  }",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "delete",    "url": "/notes/{id}",    "title": "Delete a note.",    "name": "DeleteNote",    "group": "Notes",    "description": "<p>Delete a note.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "200",            "description": "<p>Success-Response:</p>"          },          {            "group": "Success 200",            "optional": false,            "field": "SuccessfullyDeleted",            "description": "<p>There were no errors, your request was successfully carried out. The resource was deleted.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK\n{\n  \"message:\" \"resource deleted\"\n  }",          "type": "json"        }      ]    },    "filename": "./app/note/api.py",    "groupTitle": "Notes",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "UserAlreadyExists",            "description": "<p>No Resource for the provided properties (unique keys) exists in the database. You are trying t o access a Resource object, possibly to update some information on it or some information that are associated with it. Therefor this resource must be present in the first place.</p>"          }        ]      },      "examples": [        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        },        {          "title": "NoSuchResourceError:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"message that specifies the error\"\n}",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "get",    "url": "/notes/{group_id}",    "title": "Get a groups notes.",    "name": "GetGroupNotes",    "group": "Notes",    "description": "<p>Get a groups notes.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "200",            "description": "<p>Success-Response:</p>"          }        ]      },      "examples": [        {          "title": "Success-Response",          "content": "HTTP/1.1 200 OK\n{\n  [\n  {\n  'name': the groups name,\n  'topic': the groups topic,\n  'content': the groups content\n  }, ...]\n  }",          "type": "json"        }      ]    },    "filename": "./app/note/api.py",    "groupTitle": "Notes",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          }        ]      },      "examples": [        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "post",    "url": "/universities/",    "title": "Get all universities",    "name": "GetAllUnis",    "group": "Universities",    "description": "<p>Returns a list of all universities in the database.</p>",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "AllUnisSuccess",            "description": ""          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The unis id.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>The unis name.</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "city",            "description": "<p>The city the uni is located.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "country",            "description": "<p>The country the uni is located</p>"          }        ]      },      "examples": [        {          "title": "AllUnisSuccess:",          "content": "HTTP/1.1 200 OK\n{\n  [{\"id:\" \"The unis id\",\n  \"name:\" \"The unis name\",\n  \"city:\" \"The city the uni is located\",\n  \"country:\" \"The country the uni is located\"\n  },...]",          "type": "json"        }      ]    },    "filename": "./app/university/api.py",    "groupTitle": "Universities",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserAlreadyExists",            "description": "<p>No Resource for the provided properties (unique keys) exists in the database. You are trying t o access a Resource object, possibly to update some information on it or some information that are associated with it. Therefor this resource must be present in the first place.</p>"          }        ]      },      "examples": [        {          "title": "NoSuchResourceError:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"message that specifies the error\"\n}",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "post",    "url": "/users/",    "title": "Create a new user",    "name": "CreateUser",    "group": "Users",    "description": "<p>Create a new user. Note that you have to provide a unique email and a uniwue username.s</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": "<p>Unique nickname/username for the new user.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>The users unique email.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "university",            "description": "<p>The university the user is enrolled in. The university must be present in the db.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "password",            "description": "<p>The users password.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "major",            "description": "<p>The subject the new user is majoring in.</p>"          }        ]      }    },    "filename": "./app/user/api.py",    "groupTitle": "Users",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "UserAlreadyExists",            "description": "<p>A user for the provided properties already exists in the database. Maybe you should try to modify instead of creating something new. Take a look at the put methods.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "CouldNotBeSavedError",            "description": "<p>There was an internal server error. Saving your data was not successful.</p>"          }        ]      },      "examples": [        {          "title": "Error-Response:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\":\"this user already exists\"\n}",          "type": "json"        },        {          "title": "NoSuchResourceError:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"message that specifies the error\"\n}",          "type": "json"        },        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        },        {          "title": "Error-Response:",          "content": "HTTP/1.1 500 Internal Server Error\n{\n  \"message\": \"Error while saving\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "SuccessfulEmpty",            "description": "<p>There were no errors, your request was successfully carried out. The resource was created.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK\n{\n  \"message:\"\"(user {user} added to group {group})+. ({key} set to {value})*\"\n  }",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "delete",    "url": "/users/",    "title": "Delete a user",    "name": "DeleteUser",    "group": "Users",    "description": "<p>Delete a users. Implementation is NOT done. There may be errors because auf unimplemented cascading behavior.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The users unique id.</p>"          }        ]      }    },    "filename": "./app/user/api.py",    "groupTitle": "Users",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "NoSuchUserError",            "description": "<p>There is no such user in the database. You are trying to access a user object, possibly to update some information on the user or some information that are associated with the user. Therefor a user object must be present in the first place.</p>"          }        ]      },      "examples": [        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        },        {          "title": "NoSuchUserError:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"this user does not exist\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "SuccessfullyDeleted",            "description": "<p>There were no errors, your request was successfully carried out. The resource was deleted.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK\n{\n  \"message:\" \"resource deleted\"\n  }",          "type": "json"        }      ]    }  },  {    "version": "0.1.0",    "type": "post",    "url": "/users/",    "title": "Modify a user",    "name": "ModifyUser",    "group": "Users",    "description": "<p>Modify a users information. You may receive an error when trying to set new informations that another user already has, like email.</p>",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "id",            "description": "<p>The users unique id.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "email",            "description": "<p>The users unique email.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "university",            "description": "<p>The university the user is enrolled in. The university must be present in the db.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "password",            "description": "<p>The users password.</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": true,            "field": "major",            "description": "<p>The subject the new user is majoring in.</p>"          }        ]      }    },    "filename": "./app/user/api.py",    "groupTitle": "Users",    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "optional": false,            "field": "BadRequest",            "description": "<p>The provided arguments are not valid. Look at the specification, you might not have provided enough fields in your request or you might not have provided a valid value for a field.</p>"          },          {            "group": "Error 4xx",            "optional": false,            "field": "NoSuchUserError",            "description": "<p>There is no such user in the database. You are trying to access a user object, possibly to update some information on the user or some information that are associated with the user. Therefor a user object must be present in the first place.</p>"          }        ]      },      "examples": [        {          "title": "BadRequest:",          "content": "HTTP/1.1 400 Bad Request\n{\n    \"field_1\": \"error message for this field\",\n    \"field_2\": \"error message for this field\",\n    \"field_3\": \"...\"\n}",          "type": "json"        },        {          "title": "NoSuchUserError:",          "content": "HTTP/1.1 404 Not Found\n{\n    \"message\": \"this user does not exist\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "SuccessfulEmpty",            "description": "<p>There were no errors, your request was successfully carried out. The resource was created.</p>"          }        ]      },      "examples": [        {          "title": "Success-Response:",          "content": "HTTP/1.1 201 OK\n{\n  \"message:\"\"(user {user} added to group {group})+. ({key} set to {value})*\"\n  }",          "type": "json"        }      ]    }  },  {    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "optional": false,            "field": "varname1",            "description": "<p>No type.</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "varname2",            "description": "<p>With type.</p>"          }        ]      }    },    "type": "",    "url": "",    "version": "0.0.0",    "filename": "./doc/main.js",    "group": "_Users_robertMueller_PycharmProjects_unificencyREST_doc_main_js",    "groupTitle": "_Users_robertMueller_PycharmProjects_unificencyREST_doc_main_js",    "name": ""  }] });

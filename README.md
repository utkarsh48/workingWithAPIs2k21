# This API works on a list of users.

## GETTING DATA
### All Users
To get all of the data at once make a `GET` request to:

```
https://workingWithAPIs.utkarshdhiman.repl.co/api/users
```

#### Response
JSON array of objects


### One Users
To get one user only make a `GET` request to:

```
https://workingWithAPIs.utkarshdhiman.repl.co/api/users/:id
```

using route parameter `:id`
eg:

```
https://workingWithAPIs.utkarshdhiman.repl.co/api/users/8fb6706a8d2c01ee02fd18311779784a
```

#### Response
JSON object


### Query Data
To query the data make a `GET` request to:

```
https://workingWithAPIs.utkarshdhiman.repl.co/api/users?key=value
```

List of keys and possible common values if any.
- `id`
- `first_name`
- `last_name`
- `email`
- `gender` "Male", "Female"
- `username`

eg:

```
https://workingWithAPIs.utkarshdhiman.repl.co/api/users?gender=Female
```


#### Response
JSON array of objects


## ADDING DATA
### Add user
To add a new user make a `POST` request to:

```
https://workingWithAPIs.utkarshdhiman.repl.co/api/users
```

with request body eg:

```
{
    "first_name": "Post",
    "last_name": "Man",
    "email": "postman@cycle.com",
    "gender": "Male",
    "username": "dakia"
} 
```
> You don't need to provide `id` explicitly.

#### Response
JSON object


## UPDATING DATA
You can either override a subset of properties of user or the whole user.

### Update some property
To update a subset of properties make a `PATCH` request to:

```
https://workingWithAPIs.utkarshdhiman.repl.co/api/users/:id
```

with route parameter `:id`
and body containing updated data
eg:

```
{
    "username": "dakiaa"
} 
```

#### Response
JSON object


### Override user
To override data make a `PUT` request to:

```
https://workingWithAPIs.utkarshdhiman.repl.co/api/users/:id
```

with route parameter `:id`
and body containing updated data
eg:

```
{
    "first_name": "Post",
    "last_name": "Man",
    "email": "postman@cycle.com",
    "gender": "Male",
    "username": "dakia"
} 
```

#### Response
JSON object


## DELETING DATA
### Delete user
To delete a user make a `DELETE` request to:

```
https://workingWithAPIs.utkarshdhiman.repl.co/api/users/:id
```

with route parameter `:id`

#### Response
JSON object
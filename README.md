# Backend API Documentation

## User Registration Endpoint

### Endpoint
**POST** `/users/register`

This endpoint registers a new user.

### Required Request Payload

The request body must be in JSON format and include:

```json
{
  "fullname": {
    "firstname": "string (required, at least 3 characters)",
    "lastname": "string (optional, at least 3 characters if provided)"
  },
  "email": "string (required, valid email)",
  "password": "string (required, at least 6 characters)"
}
---
sidebar_position: 1
---

# Login

## Introduction

This API is used to login a user who is not an admin. This API is only
accessible to non-admin users.

## Request

_🛠️ NOTE: Modify it so that login can be made for specific resource too not only
for default resource._

### Request URL

```bash
{YOUR-SHIELD-URL}/realms/:realm_id/clients/:client_id/credentials-login
```

Replace `:realm_id` with your realm ID and `:client_id` with your client ID.

### Request Headers

| Header       | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

### Request Body

```json
{
  "email": "test@example.com",
  "password": "password"
}
```

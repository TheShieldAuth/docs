---
sidebar_position: 1
---

# Admin Login

The Admin Login API is used to authenticate the admin user. For this api only
the user having `realm admin role` is going to be considered as admin.

## Endpoint

```bash
{YOUR-SHIELD-URL}/realms/:realm_id/clients/:client_id/admin-login
```

Replace `:realm_id` with your realm ID and `:client_id` with your client ID.

Example curl command:

```bash
curl -X POST \
  https://shield.example.com/realms/:realm_id/clients/:client_id/admin-login \
  -H 'Content-Type: application/json' \
  -d '{
    "email": "admin@admin.com",
    "password": "12345"
  }'
```

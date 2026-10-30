[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSession

A credential for the /v1/me routes that acts as one customer. Unless it came from an access link, its secret can read and change that customer's orders, payments, subscriptions, saved payment methods, addresses, returns, and invoices, and request account deletion.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | When the session was created. Format: `date-time`. |
| `customer_id` | Required | string |  |
| `customer_session_id` | Required | string |  |
| `expires_at` | Required | string | When the current secret stops authenticating account calls. Format: `date-time`. |
| `refresh_token_expires_at` | Required | string | When the refresh token expires. Format: `date-time`. |
| `revoked_at` | Optional | string | When the session was first revoked. Present exactly when status is revoked. Format: `date-time`. |
| `status` | Required | string | active means the session can be refreshed and its secret works until expires_at; revoked means none of its credentials work. Values: `"active"`, `"revoked"`. |


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CustomerSession

A credential for the /v1/me routes that acts as one customer. By default it can read and change the customer's account and commerce data, including saved payment methods and account deletion requests. Explicit capabilities or access-link resource grants narrow that authority.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `capabilities` | Required | Array of string | Granted operation capabilities. Default sessions report the full capability catalog. Refresh never widens an explicit grant. |
| `created_at` | Required | string | When the session was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `customer_id` | Required | string | ID of the customer the session acts as. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `customer_session_id` | Required | string | ID of this session. Use it to tell sessions apart; it is not a credential. Example: `"cses_01KEZF7C00FBVRP25FZTW7KWZV"`. |
| `expires_at` | Required | string | When the current secret stops authenticating account calls. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `refresh_token_expires_at` | Required | string | When the refresh token expires. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `revoked_at` | Optional | string | When the session was first revoked. Present exactly when status is revoked. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | active means the session can be refreshed and its secret works until expires_at; revoked means none of its credentials work. Values: `"active"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now, independent of the caller's permissions. Contains revoke for active and revoked sessions because repeating a revocation succeeds. Items values: `"revoke"`. |


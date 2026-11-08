[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## User

A user with access to merchant accounts.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `default_merchant_id` | Optional | string | Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `email` | Required | string | Email address the user signs in with. |
| `first_name` | Required | string | The user's first name. |
| `last_name` | Required | string | The user's last name. |
| `status` | Required | string | Values: `"active"`, `"deactivated"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `user_id` | Required | string | Unique identifier for this user, prefixed `usr_`. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |


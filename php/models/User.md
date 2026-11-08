[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## User

A user with access to merchant accounts.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `default_merchant_id` | Optional | string |  |
| `email` | Required | string | Email address the user signs in with. |
| `first_name` | Required | string | The user's first name. |
| `last_name` | Required | string | The user's last name. |
| `status` | Required | string | Values: `"active"`, `"deactivated"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `user_id` | Required | string | Unique identifier for this user, prefixed `usr_`. |


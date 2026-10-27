[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UserInput

A user with access to merchant accounts.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `default_merchant_id` | Optional | string |  |
| `email` | Required | string |  |
| `first_name` | Required | string |  |
| `last_name` | Required | string |  |
| `status` | Required | string | Values: `"active"`, `"deactivated"`. |
| `updated_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `user_id` | Required | string |  |


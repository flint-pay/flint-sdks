[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EmailChangeRequest

A request to change a customer's email address.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `confirmed` | Required | boolean |  |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_email_confirmation_required` | Required | boolean |  |
| `customer_id` | Required | string |  |
| `email_change_request_id` | Required | string |  |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `new_email` | Required | string |  |


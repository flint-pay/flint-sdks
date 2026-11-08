[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EmailChangeRequest

A request to change a customer's email address.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `confirmed` | Required | boolean | Whether both addresses have been confirmed, which completes the change. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `current_email_confirmation_required` | Required | boolean | Whether the code sent to the current address must also be confirmed. `false` for a customer with no email on file. |
| `customer_id` | Required | string | ID of the customer whose email is changing. |
| `email_change_request_id` | Required | string | Unique identifier for this email change request, prefixed `cecr_`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `new_email` | Required | string | The address the email is changing to. |


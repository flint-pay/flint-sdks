[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EmailChangeRequest

Nested child of Customer. A request to change this customer's sign-in email. Only one request can be pending per customer.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Required | string or null | When a person canceled this request or a newer request replaced it. Null when it has not been canceled or replaced. Format: `date-time`. |
| `confirmed_at` | Required | string or null | When the customer email changed. Null when the request has not been confirmed. Format: `date-time`. |
| `created_at` | Required | string | When Flint recorded the request. Format: `date-time`. |
| `current_email_confirmation_required` | Required | boolean | Whether the customer must also confirm a code sent to their current address. False for requests started by store staff or integrations. |
| `customer_id` | Required | string | Flint ID of the customer whose email would change. |
| `email_change_request_id` | Required | string | Flint ID of this customer's email change request. |
| `expires_at` | Required | string | When the request expires if it has not been confirmed or canceled. Format: `date-time`. |
| `flint_wallet_outcome` | Optional | string | Returned only by confirm, to customer sessions that can access cards saved with Flint after a live email-code sign-in at a Flint-hosted account. Omitted when the previous email had no saved cards. Never returned to merchant credentials. Values: `"moved"`, `"kept"`, `"new_email_has_wallet"`. |
| `new_email` | Required | string or null | The proposed email address. Null when the request is confirmed, canceled, or expired. Format: `email`. |
| `requested_by` | Required | string | Who started this email change request. Values: `"buyer"`, `"merchant"`, `"integration"`. |
| `status` | Required | string | The request's current confirmation state. Values: `"pending"`, `"confirmed"`, `"canceled"`, `"expired"`. |
| `supported_actions` | Required | Array of string | Actions available for this request in its current state. Empty when the request is final. Items values: `"cancel"`. |


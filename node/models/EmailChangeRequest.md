[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## EmailChangeRequest

A request to change a customer's email address.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `confirmed` | Required | boolean | Whether both addresses have been confirmed, which completes the change. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_email_confirmation_required` | Required | boolean | Whether the code sent to the current address must also be confirmed. `false` for a customer with no email on file. |
| `customer_id` | Required | string | ID of the customer whose email is changing. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `email_change_request_id` | Required | string | Unique identifier for this email change request, prefixed `cecr_`. Example: `"cecr_01KEZF7C00B8VJX4M828K0430H"`. |
| `expires_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `flint_wallet_outcome` | Optional | string | Returned only by confirm, to customer sessions that can access cards saved with Flint after a live email-code sign-in at a Flint-hosted account. Omitted when the previous email had no saved cards. Never returned to merchant credentials. Values: `"moved"`, `"kept"`, `"new_email_has_wallet"`. |
| `new_email` | Required | string | The address the email is changing to. |


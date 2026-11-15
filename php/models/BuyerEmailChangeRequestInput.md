[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerEmailChangeRequestInput

Nested child of Customer. A request to change this customer's sign-in email. Only one request can be pending per customer.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `canceled_at` | Required | string or null | When a person canceled this request or a newer request replaced it. Null when it has not been canceled or replaced. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `confirmed_at` | Required | string or null | When the customer email changed. Null when the request has not been confirmed. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_at` | Required | string | When Flint recorded the request. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `current_email_confirmation_required` | Required | boolean | Whether the customer must also confirm a code sent to their current address. False for requests started by store staff or integrations. |
| `customer_id` | Required | string | Flint ID of the customer whose email would change. Example: `"cus_01KEZF7C006X9JK6NZNA2SM9XD"`. |
| `email_change_request_id` | Required | string | Flint ID of this customer's email change request. Example: `"cecr_01KEZF7C00B8VJX4M828K0430H"`. |
| `expires_at` | Required | string | When the request expires if it has not been confirmed or canceled. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `flint_wallet_outcome` | Optional | string | Returned only by confirm, to customer sessions that can access cards saved with Flint after a live email-code sign-in at a Flint-hosted account. Omitted when the previous email had no saved cards. Never returned to merchant credentials. Values: `"moved"`, `"kept"`, `"new_email_has_wallet"`. |
| `new_email` | Required | string or null | The proposed email address. Null when the request is confirmed, canceled, or expired. Format: `email`. Example: `"buyer@example.com"`. |
| `requested_by` | Required | string | Who started this email change request. Values: `"buyer"`, `"merchant"`, `"integration"`. |
| `status` | Required | string | The request's current confirmation state. Values: `"pending"`, `"confirmed"`, `"canceled"`, `"expired"`. |


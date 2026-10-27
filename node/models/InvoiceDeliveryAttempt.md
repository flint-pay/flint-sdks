[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttempt

One attempt to deliver an invoice by email, either the original send or a reminder, with its recipients and status.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string |  |
| `channel` | Required | string | Values: `"email"`. |
| `created_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_type` | Required | string | Values: `"send"`, `"reminder"`. |
| `failure_reason` | Optional | string | Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Values: `"rejected"`, `"delivery_unknown"`, `"canceled"`. |
| `invoice_delivery_attempt_id` | Required | string |  |
| `invoice_id` | Required | string | ID of the invoice this delivery attempt belongs to. |
| `sent_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. |
| `suppression_reason` | Optional | string | Present only when status is suppressed. Values: `"merchant_managed_email"`, `"recipient_unsubscribed"`. |
| `to_email` | Required | string or null | Address the invoice was sent to. `null` after the customer was deleted. |


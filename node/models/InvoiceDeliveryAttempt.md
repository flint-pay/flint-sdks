[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## InvoiceDeliveryAttempt

One attempt to email an invoice or an invoice reminder.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `cc_emails` | Optional | Array of string | Addresses copied on this email. Absent when none were copied. |
| `channel` | Required | string | How Flint delivered the invoice. Values: `"email"`. |
| `created_at` | Required | string | When the attempt was created. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_type` | Required | string | Whether this attempt is the invoice email sent at issue or a reminder. Values: `"send"`, `"reminder"`. |
| `failure_reason` | Optional | string | Present only when status is failed. Legacy failed attempts without a stored reason return rejected. Values: `"rejected"`, `"delivery_unknown"`, `"canceled"`. |
| `invoice_delivery_attempt_id` | Required | string | Flint invoice delivery attempt ID. Example: `"indel_01KEZF7C001BBS41T0ZVY8VMEQ"`. |
| `invoice_id` | Required | string | ID of the invoice this delivery attempt belongs to. Example: `"inv_01KEZF7C00A5GEBMWHEAJFSAR4"`. |
| `sent_at` | Optional | string | When the email service accepted the message. Absent until it does. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | The outcome of this attempt. sent means the email service accepted the message. Values: `"pending"`, `"sent"`, `"failed"`, `"suppressed"`. |
| `suppression_reason` | Optional | string | Present only when status is suppressed. Values: `"merchant_managed_email"`, `"recipient_unsubscribed"`, `"sandbox_daily_limit_reached"`. |
| `to_email` | Required | string or null | Address the invoice was sent to. `null` when the customer was deleted. |


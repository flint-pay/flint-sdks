[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryEventInput

A delivery event for a gift card notification email, such as accepted, delivered, bounced, or dropped, with when it occurred and was received.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_attempt_id` | Required | string | ID of the delivery attempt the event belongs to. Example: `"edat_01KEZF7C00AX45366QP3FMY6VH"`. |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `received_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `type` | Required | string | accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Values: `"accepted"`, `"delivered"`, `"bounced"`, `"dropped"`. |


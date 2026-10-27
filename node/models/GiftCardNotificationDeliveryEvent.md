[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryEvent

A delivery event for a gift card notification email, such as accepted, delivered, bounced, or dropped, with when it occurred and was received.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `delivery_attempt_id` | Required | string |  |
| `occurred_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `received_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `type` | Required | string | accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Values: `"accepted"`, `"delivered"`, `"bounced"`, `"dropped"`. |


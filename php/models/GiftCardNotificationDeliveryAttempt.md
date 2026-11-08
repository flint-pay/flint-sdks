[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryAttempt

One attempt to send a gift card notification email, with its attempt number, status, and start and completion times.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempt_number` | Required | integer | Which attempt this is for the notification, starting at 1. Format: `int64`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_attempt_id` | Required | string | ID of this delivery attempt. |
| `started_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Where this delivery attempt stands. Values: `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`. |


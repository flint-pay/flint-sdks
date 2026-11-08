[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryAttempt

One attempt to send a gift card notification email, with its attempt number, status, and start and completion times.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempt_number` | Required | integer | Which attempt this is for the notification, starting at 1. Format: `int64`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `delivery_attempt_id` | Required | string | ID of this delivery attempt. Example: `"edat_01KEZF7C00AX45366QP3FMY6VH"`. |
| `started_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `status` | Required | string | Where this delivery attempt stands. Values: `"pending"`, `"sent"`, `"failed"`, `"unconfirmed"`. |


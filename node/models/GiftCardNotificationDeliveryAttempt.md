[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## GiftCardNotificationDeliveryAttempt

One attempt to send a gift card notification email, with its attempt number, status, and start and completion times.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `attempt_number` | Required | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `completed_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. |
| `delivery_attempt_id` | Required | string |  |
| `started_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `status` | Required | string | Values: `"started"`, `"sent"`, `"failed"`, `"abandoned"`. |


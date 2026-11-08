[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ScheduleFulfillmentRequest

Sets the start and end of a service fulfillment's appointment window.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_notification_behavior` | Optional | string | Whether to send or suppress the buyer notification for this action. Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |
| `scheduled_end_at` | Required | string | End of the service appointment window, after scheduled_start_at, as an RFC 3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `scheduled_start_at` | Required | string | Start of the service appointment window, as an RFC 3339 timestamp. Format: `date-time`. minLength: `1`. Example: `"2026-08-02T16:00:00Z"`. |
| `timezone` | Optional | string | IANA timezone of the service appointment. minLength: `1`. |


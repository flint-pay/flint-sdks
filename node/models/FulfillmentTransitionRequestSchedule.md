[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentTransitionRequestSchedule

The `schedule` variant of `FulfillmentTransitionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"schedule"`. |
| `buyer_notification_behavior` | Optional | string | Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer string | Resource version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |
| `scheduled_end_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `scheduled_start_at` | Required | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `timezone` | Optional | string | IANA timezone of the service appointment. minLength: `1`. |


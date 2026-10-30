[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentTransitionRequestStart

The `start` variant of `FulfillmentTransitionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"start"`. |
| `buyer_notification_behavior` | Optional | string | Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |


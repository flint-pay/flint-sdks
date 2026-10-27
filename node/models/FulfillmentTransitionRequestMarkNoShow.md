[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentTransitionRequestMarkNoShow

The `mark_no_show` variant of `FulfillmentTransitionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"mark_no_show"`. |
| `buyer_notification_behavior` | Optional | string | Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer string | Resource version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason` | Required | string | Values: `"customer_no_show"`, `"provider_no_show"`, `"location_unavailable"`, `"scheduling_error"`, `"other"`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |


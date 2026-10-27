[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentTransitionRequestReleaseHold

The `release_hold` variant of `FulfillmentTransitionRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"release_hold"`. |
| `expected_version` | Optional | integer string | Resource version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |


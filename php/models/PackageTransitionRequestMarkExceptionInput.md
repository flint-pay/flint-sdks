[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageTransitionRequestMarkExceptionInput

The `mark_exception` variant of `PackageTransitionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"mark_exception"`. |
| `buyer_notification_behavior` | Optional | string | Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer string | Resource version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |


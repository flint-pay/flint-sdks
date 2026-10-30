[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageTransitionRequestMarkShippedInput

The `mark_shipped` variant of `PackageTransitionRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string | Values: `"mark_shipped"`. |
| `buyer_notification_behavior` | Optional | string | Values: `"send"`, `"suppress"`. |
| `carrier` | Optional | string | minLength: `1`. maxLength: `100`. |
| `expected_delivery_at` | Optional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `expected_version` | Optional | integer | Resource version the caller last read. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |
| `service_code` | Optional | string | minLength: `1`. maxLength: `100`. |
| `tracking_number` | Optional | string | minLength: `1`. maxLength: `255`. |
| `tracking_url` | Optional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. maxLength: `2048`. |


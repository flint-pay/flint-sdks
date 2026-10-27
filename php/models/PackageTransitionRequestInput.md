[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PackageTransitionRequestInput

The request body for: Transition package.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string |  |
| `buyer_notification_behavior` | Optional | string | Values: `"send"`, `"suppress"`. |
| `expected_version` | Optional | integer string | Resource version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |
| `expected_delivery_at` | Conditional | string or null | When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: `date-time`. minLength: `1`. |
| `carrier` | Conditional | string | minLength: `1`. maxLength: `100`. |
| `service_code` | Conditional | string | minLength: `1`. maxLength: `100`. |
| `tracking_number` | Conditional | string | minLength: `1`. maxLength: `255`. |
| `tracking_url` | Conditional | string | Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: `1`. maxLength: `2048`. |

### PackageTransitionRequestInput variant 1: `action` = `"mark_delivered"`

oneOf variant 1: The `mark_delivered` variant of `PackageTransitionRequest`..

- Undeclared: `expected_delivery_at`, `carrier`, `service_code`, `tracking_number`, `tracking_url`.
- Constraints for `action`: Values: `"mark_delivered"`.

### PackageTransitionRequestInput variant 2: `action` = `"mark_delivery_attempted"`

oneOf variant 2: The `mark_delivery_attempted` variant of `PackageTransitionRequest`..

- Undeclared: `expected_delivery_at`, `carrier`, `service_code`, `tracking_number`, `tracking_url`.
- Constraints for `action`: Values: `"mark_delivery_attempted"`.

### PackageTransitionRequestInput variant 3: `action` = `"mark_exception"`

oneOf variant 3: The `mark_exception` variant of `PackageTransitionRequest`..

- Undeclared: `expected_delivery_at`, `carrier`, `service_code`, `tracking_number`, `tracking_url`.
- Constraints for `action`: Values: `"mark_exception"`.

### PackageTransitionRequestInput variant 4: `action` = `"mark_in_transit"`

oneOf variant 4: The `mark_in_transit` variant of `PackageTransitionRequest`..

- Optional: `expected_delivery_at`.
- Undeclared: `carrier`, `service_code`, `tracking_number`, `tracking_url`.
- Constraints for `action`: Values: `"mark_in_transit"`.

### PackageTransitionRequestInput variant 5: `action` = `"mark_out_for_delivery"`

oneOf variant 5: The `mark_out_for_delivery` variant of `PackageTransitionRequest`..

- Optional: `expected_delivery_at`.
- Undeclared: `carrier`, `service_code`, `tracking_number`, `tracking_url`.
- Constraints for `action`: Values: `"mark_out_for_delivery"`.

### PackageTransitionRequestInput variant 6: `action` = `"mark_packed"`

oneOf variant 6: The `mark_packed` variant of `PackageTransitionRequest`..

- Undeclared: `expected_delivery_at`, `carrier`, `service_code`, `tracking_number`, `tracking_url`.
- Constraints for `action`: Values: `"mark_packed"`.

### PackageTransitionRequestInput variant 7: `action` = `"mark_returned"`

oneOf variant 7: The `mark_returned` variant of `PackageTransitionRequest`..

- Undeclared: `expected_delivery_at`, `carrier`, `service_code`, `tracking_number`, `tracking_url`.
- Constraints for `action`: Values: `"mark_returned"`.

### PackageTransitionRequestInput variant 8: `action` = `"mark_shipped"`

oneOf variant 8: The `mark_shipped` variant of `PackageTransitionRequest`..

- Optional: `carrier`, `expected_delivery_at`, `service_code`, `tracking_number`, `tracking_url`.
- Constraints for `action`: Values: `"mark_shipped"`.


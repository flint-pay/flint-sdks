[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## FulfillmentTransitionRequestInput

The request body for: Transition fulfillment.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `action` | Required | string |  |
| `expected_version` | Optional | integer string | Resource version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `occurred_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `reason_message` | Optional | string | Your note explaining this transition. minLength: `1`. maxLength: `500`. |
| `buyer_notification_behavior` | Conditional | string | Values: `"send"`, `"suppress"`. |
| `reason` | Conditional | string |  |
| `release_quantity` | Conditional | boolean |  |
| `scheduled_end_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `scheduled_start_at` | Conditional | string | RFC3339 timestamp. Format: `date-time`. minLength: `1`. |
| `timezone` | Conditional | string | IANA timezone of the service appointment. minLength: `1`. |

### FulfillmentTransitionRequestInput variant 1: `action` = `"release_hold"`

oneOf variant 1: The `release_hold` variant of `FulfillmentTransitionRequest`..

- Undeclared: `buyer_notification_behavior`, `reason`, `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"release_hold"`.

### FulfillmentTransitionRequestInput variant 2: `action` = `"complete"`

oneOf variant 2: The `complete` variant of `FulfillmentTransitionRequest`..

- Optional: `buyer_notification_behavior`.
- Undeclared: `reason`, `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"complete"`.

### FulfillmentTransitionRequestInput variant 3: `action` = `"cancel"`

oneOf variant 3: The `cancel` variant of `FulfillmentTransitionRequest`..

- Optional: `buyer_notification_behavior`.
- Undeclared: `reason`, `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"cancel"`.

### FulfillmentTransitionRequestInput variant 4: `action` = `"hold"`

oneOf variant 4: The `hold` variant of `FulfillmentTransitionRequest`..

- Required: `reason`.
- Optional: `buyer_notification_behavior`.
- Undeclared: `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"hold"`.
- Constraints for `reason`: Values: `"payment_review"`, `"inventory_issue"`, `"address_issue"`, `"customer_request"`, `"provider_issue"`, `"scheduling_issue"`, `"fraud_review"`, `"other"`.

### FulfillmentTransitionRequestInput variant 5: `action` = `"start"`

oneOf variant 5: The `start` variant of `FulfillmentTransitionRequest`..

- Optional: `buyer_notification_behavior`.
- Undeclared: `reason`, `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"start"`.

### FulfillmentTransitionRequestInput variant 6: `action` = `"mark_ready"`

oneOf variant 6: The `mark_ready` variant of `FulfillmentTransitionRequest`..

- Optional: `buyer_notification_behavior`.
- Undeclared: `reason`, `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"mark_ready"`.

### FulfillmentTransitionRequestInput variant 7: `action` = `"fail"`

oneOf variant 7: The `fail` variant of `FulfillmentTransitionRequest`..

- Required: `release_quantity`.
- Optional: `buyer_notification_behavior`.
- Undeclared: `reason`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"fail"`.

### FulfillmentTransitionRequestInput variant 8: `action` = `"schedule"`

oneOf variant 8: The `schedule` variant of `FulfillmentTransitionRequest`..

- Required: `scheduled_end_at`, `scheduled_start_at`.
- Optional: `buyer_notification_behavior`, `timezone`.
- Undeclared: `reason`, `release_quantity`.
- Constraints for `action`: Values: `"schedule"`.

### FulfillmentTransitionRequestInput variant 9: `action` = `"accept"`

oneOf variant 9: The `accept` variant of `FulfillmentTransitionRequest`..

- Optional: `buyer_notification_behavior`.
- Undeclared: `reason`, `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"accept"`.

### FulfillmentTransitionRequestInput variant 10: `action` = `"mark_preparing"`

oneOf variant 10: The `mark_preparing` variant of `FulfillmentTransitionRequest`..

- Optional: `buyer_notification_behavior`.
- Undeclared: `reason`, `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"mark_preparing"`.

### FulfillmentTransitionRequestInput variant 11: `action` = `"mark_picked"`

oneOf variant 11: The `mark_picked` variant of `FulfillmentTransitionRequest`..

- Optional: `buyer_notification_behavior`.
- Undeclared: `reason`, `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"mark_picked"`.

### FulfillmentTransitionRequestInput variant 12: `action` = `"mark_packed"`

oneOf variant 12: The `mark_packed` variant of `FulfillmentTransitionRequest`..

- Optional: `buyer_notification_behavior`.
- Undeclared: `reason`, `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"mark_packed"`.

### FulfillmentTransitionRequestInput variant 13: `action` = `"dispatch"`

oneOf variant 13: The `dispatch` variant of `FulfillmentTransitionRequest`..

- Optional: `buyer_notification_behavior`.
- Undeclared: `reason`, `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"dispatch"`.

### FulfillmentTransitionRequestInput variant 14: `action` = `"mark_no_show"`

oneOf variant 14: The `mark_no_show` variant of `FulfillmentTransitionRequest`..

- Required: `reason`.
- Optional: `buyer_notification_behavior`.
- Undeclared: `release_quantity`, `scheduled_end_at`, `scheduled_start_at`, `timezone`.
- Constraints for `action`: Values: `"mark_no_show"`.
- Constraints for `reason`: Values: `"customer_no_show"`, `"provider_no_show"`, `"location_unavailable"`, `"scheduling_error"`, `"other"`.


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateSubscriptionBillingScheduleRequestInput

A closed owner-specific billing schedule update.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `billing_anchor_day` | Conditional | integer | UTC day of the month used for monthly and yearly billing. Overrides the day inferred from a moved next_billing_at. Format: `int32`. minimum: `1`. maximum: `31`. |
| `expected_version` | Optional | integer string | Use an integer string (decimal digits), not a floating-point number. Format: `uint64`. minimum: `1`. |
| `next_billing_at` | Conditional | Varies by condition | Format: `date-time`. minLength: `1`. |
| `owner` | Required | string |  |

### UpdateSubscriptionBillingScheduleRequestInput variant 1: `owner` = `"flint"`

oneOf variant 1: The `flint` variant of `UpdateSubscriptionBillingScheduleRequest`..

- Required: `next_billing_at`.
- Optional: `billing_anchor_day`.
- Constraints for `next_billing_at`: string. Future date at which Flint attempts the next charge.
- Constraints for `owner`: Values: `"flint"`.

### UpdateSubscriptionBillingScheduleRequestInput variant 2: `owner` = `"external"`

oneOf variant 2: The `external` variant of `UpdateSubscriptionBillingScheduleRequest`..

- Optional: `next_billing_at`.
- Undeclared: `billing_anchor_day`.
- Constraints for `next_billing_at`: string or null. Future date at which Flint attempts the next charge. Omit to preserve the date or send null to clear it.
- Constraints for `owner`: Values: `"external"`.


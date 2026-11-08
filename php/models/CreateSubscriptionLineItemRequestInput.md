[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateSubscriptionLineItemRequestInput

The request body for: Add subscription line item.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | minLength: `1`. pattern: `^bun_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `expected_version` | Optional | integer | Version last read from the resource returned in `data` (the primary resource for a result object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on the operation and fields being changed. Format: `uint64`. minimum: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. minimum: `1`. maximum: `9999`. |
| `type` | Required | string | The catalog source of the new line: variant or bundle. Values: `"variant"`, `"bundle"`. |
| `variant_id` | Conditional | string | minLength: `1`. pattern: `^var_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### CreateSubscriptionLineItemRequestInput variant 1: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `CreateSubscriptionLineItemRequest`..

- Condition: not (present(`bundle_id`)).
- Required: `variant_id`.
- Optional: `bundle_id`.
- Constraints for `type`: Values: `"variant"`.

### CreateSubscriptionLineItemRequestInput variant 2: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `CreateSubscriptionLineItemRequest`..

- Condition: not (present(`variant_id`)).
- Required: `bundle_id`.
- Optional: `variant_id`.
- Constraints for `type`: Values: `"bundle"`.


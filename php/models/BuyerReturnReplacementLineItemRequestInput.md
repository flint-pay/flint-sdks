[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnReplacementLineItemRequestInput

A catalog variant or bundle and quantity the buyer requests as a replacement in a Return resolution preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. |
| `type` | Required | string | The catalog source of the replacement merchandise. Values: `"variant"`, `"bundle"`. |
| `variant_id` | Conditional | string | minLength: `1`. |

### BuyerReturnReplacementLineItemRequestInput variant 1: `type` = `"variant"`

oneOf variant 1: The `variant` variant of `BuyerReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`bundle_id`))).
- Required: `variant_id`.
- Optional: `bundle_id`.
- Constraints for `type`: Values: `"variant"`.

### BuyerReturnReplacementLineItemRequestInput variant 2: `type` = `"bundle"`

oneOf variant 2: The `bundle` variant of `BuyerReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`variant_id`))).
- Required: `bundle_id`.
- Optional: `variant_id`.
- Constraints for `type`: Values: `"bundle"`.


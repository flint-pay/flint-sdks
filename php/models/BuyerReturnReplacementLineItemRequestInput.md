[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerReturnReplacementLineItemRequestInput

A catalog variant or bundle and quantity the buyer requests as a replacement in a Return resolution preview.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | ID of the bundle to send. Used when `type` is `bundle`. minLength: `1`. Example: `"bun_01KEZF7C00TQ6S76Z6CVQF5SVN"`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. minimum: `1`. |
| `type` | Required | string | The catalog source of the replacement merchandise. Values: `"variant"`, `"bundle"`. |
| `variant_id` | Conditional | string | ID of the variant to send. Used when `type` is `variant`. minLength: `1`. Example: `"var_01KEZF7C004GSH2KT8CNYVMHGX"`. |

### BuyerReturnReplacementLineItemRequestInput variant 1: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `BuyerReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`bundle_id`))).
- Required: `variant_id`.
- Optional: `bundle_id`.
- Constraints for `type`: Values: `"variant"`.

### BuyerReturnReplacementLineItemRequestInput variant 2: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `BuyerReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`variant_id`))).
- Required: `bundle_id`.
- Optional: `variant_id`.
- Constraints for `type`: Values: `"bundle"`.


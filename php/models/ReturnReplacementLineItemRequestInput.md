[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementLineItemRequestInput

A replacement item to include in a return resolution, from a variant, a bundle, or a custom name and price.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `name` | Conditional | string | minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `sku` | Optional | string | minLength: `1`. |
| `type` | Required | string | The source of the replacement merchandise: variant, bundle, or custom. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string | minLength: `1`. |

### ReturnReplacementLineItemRequestInput variant 1: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `ReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`bundle_id`); present(`name`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `name`.
- Constraints for `type`: Values: `"variant"`.

### ReturnReplacementLineItemRequestInput variant 2: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `ReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`name`))).
- Required: `bundle_id`.
- Optional: `name`, `variant_id`.
- Constraints for `type`: Values: `"bundle"`.

### ReturnReplacementLineItemRequestInput variant 3: `type` = `"custom"`

oneOf with type: "custom": The `custom` variant of `ReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `type`: Values: `"custom"`.


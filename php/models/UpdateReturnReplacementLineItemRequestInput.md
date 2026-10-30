[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnReplacementLineItemRequestInput

A replacement item to keep or add when updating a return resolution. Include `return_replacement_line_item_id` to keep an existing one.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `name` | Conditional | string | minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_replacement_line_item_id` | Optional | string | minLength: `1`. |
| `sku` | Optional | string | minLength: `1`. |
| `type` | Required | string | The source of the replacement merchandise: variant, bundle, or custom. Values: `"variant"`, `"bundle"`, `"custom"`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Conditional | string | minLength: `1`. |

### UpdateReturnReplacementLineItemRequestInput variant 1: `type` = `"variant"`

oneOf with type: "variant": The `variant` variant of `UpdateReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`bundle_id`); present(`name`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `name`.
- Constraints for `type`: Values: `"variant"`.

### UpdateReturnReplacementLineItemRequestInput variant 2: `type` = `"bundle"`

oneOf with type: "bundle": The `bundle` variant of `UpdateReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`name`))).
- Required: `bundle_id`.
- Optional: `name`, `variant_id`.
- Constraints for `type`: Values: `"bundle"`.

### UpdateReturnReplacementLineItemRequestInput variant 3: `type` = `"custom"`

oneOf with type: "custom": The `custom` variant of `UpdateReturnReplacementLineItemInput`..

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`.
- Optional: `bundle_id`, `variant_id`.
- Constraints for `type`: Values: `"custom"`.


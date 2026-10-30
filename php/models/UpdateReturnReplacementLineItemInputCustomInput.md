[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnReplacementLineItemInputCustomInput

The `custom` variant of `UpdateReturnReplacementLineItemInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int64`. |
| `return_replacement_line_item_id` | Optional | string | minLength: `1`. |
| `sku` | Optional | string | minLength: `1`. |
| `type` | Required | string | The source of the replacement merchandise: variant, bundle, or custom. Values: `"custom"`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | minLength: `1`. |


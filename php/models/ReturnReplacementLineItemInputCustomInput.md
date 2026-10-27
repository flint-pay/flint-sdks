[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnReplacementLineItemInputCustomInput

The `custom` variant of `ReturnReplacementLineItemInput`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `sku` | Optional | string | minLength: `1`. |
| `type` | Required | string | The source of the replacement merchandise: variant, bundle, or custom. Values: `"custom"`. |
| `unit_price_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `variant_id` | Optional | string | minLength: `1`. |


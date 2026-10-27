[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnReplacementLineItemInputCustom

The `custom` variant of `UpdateReturnReplacementLineItemInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Optional | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `name` | Required | string | minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_replacement_line_item_id` | Optional | string | minLength: `1`. |
| `sku` | Optional | string | minLength: `1`. |
| `type` | Required | string | The source of the replacement merchandise: variant, bundle, or custom. Values: `"custom"`. |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `variant_id` | Optional | string | minLength: `1`. |

### UpdateReturnReplacementLineItemInputCustom.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).


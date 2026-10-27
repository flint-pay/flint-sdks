[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## UpdateReturnReplacementLineItemRequest

A replacement item to keep or add when updating a return resolution. Include `return_replacement_line_item_id` to keep an existing one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `bundle_id` | Conditional | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. |
| `name` | Conditional | string | minLength: `1`. |
| `quantity` | Required | integer string | Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. |
| `return_replacement_line_item_id` | Optional | string | minLength: `1`. |
| `sku` | Optional | string | minLength: `1`. |
| `unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `variant_id` | Conditional | string | minLength: `1`. |

### UpdateReturnReplacementLineItemRequest variant 1

oneOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`))).
- Required: `variant_id`.
- Optional: `bundle_id`, `name`.

### UpdateReturnReplacementLineItemRequest variant 2

oneOf variant 2.

- Condition: not (at least one(present(`variant_id`); present(`name`))).
- Required: `bundle_id`.
- Optional: `name`, `variant_id`.

### UpdateReturnReplacementLineItemRequest variant 3

oneOf variant 3.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`.
- Optional: `bundle_id`, `variant_id`.

### UpdateReturnReplacementLineItemRequest.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).


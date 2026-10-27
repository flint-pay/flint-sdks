[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItemPatchRequest

A line item in a payment link update. Include its ID to change an existing line item, or omit the ID to add a new one.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean |  |
| `allow_unit_price_adjustment` | Conditional | boolean |  |
| `bundle_id` | Conditional | string | minLength: `1`. |
| `description` | Optional | string | minLength: `1`. maxLength: `2048`. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. minLength: `1`. maxLength: `100`. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `max_unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `min_unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `name` | Conditional | string | minLength: `1`. maxLength: `255`. |
| `payment_link_line_item_id` | Optional | string | Stable ID of an existing line item. Omit it to create a new line item. minLength: `1`. |
| `quantity` | Optional | integer | Whole-number default quantity; fractional quantities are not supported. Omission uses 1. Must be at least 1 for standard links; event tiers also accept 0. Format: `int32`. Default: `1`. |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `suggested_unit_price_money_options[]`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | A line item's tax category and whether it is taxable. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `variant_id` | Conditional | string | minLength: `1`. |

### PaymentLinkLineItemPatchRequest variant 1

oneOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`))).
- Required: `variant_id`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`.

### PaymentLinkLineItemPatchRequest variant 2

oneOf variant 2.

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`))).
- Required: `bundle_id`.
- Optional: `allow_unit_price_adjustment`, `name`, `unit_price_money`, `variant_id`.

### PaymentLinkLineItemPatchRequest variant 3

oneOf variant 3.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `variant_id`.

### PaymentLinkLineItemPatchRequest variant 4: `allow_unit_price_adjustment` = `true`

oneOf variant 4.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `allow_unit_price_adjustment`, `name`.
- Optional: `bundle_id`, `unit_price_money`, `variant_id`.
- Constraints for `allow_unit_price_adjustment`: Values: `true`.

### PaymentLinkLineItemPatchRequest.max_unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PaymentLinkLineItemPatchRequest.min_unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PaymentLinkLineItemPatchRequest.suggested_unit_price_money_options[]

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PaymentLinkLineItemPatchRequest.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentLinkLineItem

A line item on a payment link, sold from a catalog variant, a bundle, or an ad hoc name and price, with quantity and price rules.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `allow_quantity_adjustment` | Optional | boolean |  |
| `allow_unit_price_adjustment` | Conditional | boolean |  |
| `bundle_id` | Conditional | string |  |
| `description` | Optional | string |  |
| `is_catalog_item_unavailable` | Required | boolean | True when this line item references a variant or bundle that is missing, deleted, or inactive, so it cannot be sold right now. Always false on ad-hoc line items. |
| `key` | Optional | string | Keys the resolve override maps. Stable line item key used in checkout overrides. Must not have leading or trailing whitespace. Assigned as line_item_1, line_item_2, and so on when omitted, skipping numbers already used by explicit keys; retained for an existing line item when omitted on update. |
| `max_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `max_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `max_unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `min_quantity` | Optional | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `min_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `min_unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `name` | Conditional | string |  |
| `payment_link_line_item_id` | Required | string |  |
| `quantity` | Required | integer | Whole-number quantity; fractional quantities are not supported. Format: `int32`. |
| `resolved_name` | Optional | string | Current catalog name of the referenced variant or bundle. A variant reads as the product name, plus the variant name when the variant is a named option combination. This is the catalog value at read time, not a stored snapshot: checkout resolves it again when a buyer opens the link. Absent on ad-hoc line items and when the catalog object no longer exists. |
| `resolved_unit_price_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Current catalog unit price of the referenced variant or bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items and when the catalog object no longer exists. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `resolved_unit_price_money`: [field definitions](../models/PaymentLinkLineItem.md#paymentlinklineitemresolved_unit_price_money). |
| `suggested_unit_price_money_options` | Optional | Array of [MoneyValue](../models/MoneyValue.md#moneyvalue) | `suggested_unit_price_money_options[]`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `tax` | Optional | [OrderLineItemTax](../models/OrderLineItemTax.md#orderlineitemtax) | A line item's tax category and whether it is taxable. |
| `unit_price_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `unit_price_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `variant_id` | Conditional | string |  |

### PaymentLinkLineItem variant 1

oneOf variant 1.

- Condition: not (at least one(present(`bundle_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`))).
- Required: `variant_id`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `name`, `unit_price_money`.

### PaymentLinkLineItem variant 2

oneOf variant 2.

- Condition: not (at least one(present(`variant_id`); present(`name`); present(`unit_price_money`); present(`description`); present(`tax`); present(`allow_unit_price_adjustment`); present(`min_unit_price_money`); present(`max_unit_price_money`); present(`suggested_unit_price_money_options`))).
- Required: `bundle_id`.
- Optional: `allow_unit_price_adjustment`, `name`, `unit_price_money`, `variant_id`.

### PaymentLinkLineItem variant 3

oneOf variant 3.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `name`, `unit_price_money`.
- Optional: `allow_unit_price_adjustment`, `bundle_id`, `variant_id`.

### PaymentLinkLineItem variant 4: `allow_unit_price_adjustment` = `true`

oneOf variant 4.

- Condition: not (at least one(present(`variant_id`); present(`bundle_id`))).
- Required: `allow_unit_price_adjustment`, `name`.
- Optional: `bundle_id`, `unit_price_money`, `variant_id`.
- Constraints for `allow_unit_price_adjustment`: Values: `true`.

### PaymentLinkLineItem.max_unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PaymentLinkLineItem.min_unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PaymentLinkLineItem.resolved_unit_price_money

Current catalog unit price of the referenced variant or bundle. This is the catalog value at read time, not a stored snapshot: checkout resolves the price again when a buyer opens the link, so the amount a buyer pays can differ. Absent on ad-hoc line items and when the catalog object no longer exists. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).

### PaymentLinkLineItem.suggested_unit_price_money_options[]

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### PaymentLinkLineItem.unit_price_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).


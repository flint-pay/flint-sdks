[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxBreakdown

The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | Values: `"percentage"`, `"flat_amount"`. |
| `flat_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `fulfillment_choice_group_id` | Optional | string |  |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | A taxing jurisdiction with its level, such as state or city, name, state, and country. `jurisdiction`: [field definitions](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsjurisdiction). |
| `location_id` | Optional | string |  |
| `order_charge_id` | Optional | string |  |
| `order_line_item_id` | Optional | string |  |
| `percent` | Conditional | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |
| `tax_breakdown_id` | Required | string |  |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`. |
| `taxability_reason` | Required | string | Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`. |
| `taxable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `taxable_money`: [field definitions](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money). |

### TaxBreakdown variant 1: `calculation_type` = `"percentage"`

oneOf variant 1: The `percentage` variant of `TaxBreakdown`..

- Condition: not (present(`flat_money`)).
- Required: `percent`.
- Optional: `flat_money`.
- Constraints for `calculation_type`: Values: `"percentage"`.

### TaxBreakdown variant 2: `calculation_type` = `"flat_amount"`

oneOf variant 2: The `flat_amount` variant of `TaxBreakdown`..

- Condition: not (present(`percent`)).
- Required: `flat_money`.
- Optional: `percent`.
- Constraints for `calculation_type`: Values: `"flat_amount"`.

### TaxBreakdown.flat_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### TaxBreakdown.jurisdiction

Field definitions: [BuyerOrderLineItem.tax.calculation.components[].jurisdiction](../models/BuyerOrderLineItem.md#buyerorderlineitemtaxcalculationcomponentsjurisdiction).

### TaxBreakdown.tax_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).

### TaxBreakdown.taxable_money

Field definitions: [AddLineItemsRequest.line_items[] variant 1.tax.calculation.components[].flat_money](../models/AddLineItemsRequest.md#addlineitemsrequestline_items-variant-1taxcalculationcomponentsflat_money).


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTax

An order's tax state, including its mode, price mode, status, location, exemption, and tax breakdowns.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `automatic_profile` | Optional | string | Identifies which automatic tax behavior applies to this order. connected means the account's tax connection calculated it. standard marks an order calculated before automatic tax required a tax connection. Values: `"standard"`, `"connected"`. |
| `available_location_inputs` | Optional | Array of string |  |
| `enabled` | Required | boolean |  |
| `exemption` | Optional | [OrderTaxExemption](../models/OrderTaxExemption.md#ordertaxexemption) | Whether an order is tax exempt, and the customer it was assessed from. |
| `location` | Optional | [OrderTaxLocation](../models/OrderTaxLocation.md#ordertaxlocation) | The location Flint uses to calculate tax on an order, with its address, address type, and where the address came from. |
| `mode` | Required | string | Values: `"automatic"`, `"external"`. |
| `price_mode` | Optional | string | Whether the order's prices include tax (`inclusive`) or tax is added to them (`additive`). Present on every order Flint renders after 2026-10-20; a response replayed for an idempotent retry of an earlier request omits it. Each line item and charge also states its own mode in `tax.calculation.price_mode`, which decides that item's tax. Values: `"additive"`, `"inclusive"`. |
| `status` | Required | string | Values: `"not_required"`, `"requires_location"`, `"calculated"`, `"exempt"`, `"incomplete"`. |
| `tax_breakdowns` | Optional | Array of (object and Alternative shapes (see declared variants)) | `tax_breakdowns[]`: [declared alternatives](../models/OrderTax.md#ordertaxtax_breakdowns). |

### OrderTax.tax_breakdowns[]

The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | Values: `"percentage"`, `"flat_amount"`. |
| `flat_money` | Conditional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `fulfillment_choice_group_id` | Optional | string |  |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | A taxing jurisdiction with its level, such as state or city, name, state, and country. |
| `location_id` | Optional | string |  |
| `order_charge_id` | Optional | string |  |
| `order_line_item_id` | Optional | string |  |
| `percent` | Conditional | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |
| `tax_breakdown_id` | Required | string |  |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`. |
| `taxability_reason` | Required | string | Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`. |
| `taxable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### OrderTax.tax_breakdowns[] variant 1: `calculation_type` = `"percentage"`

oneOf with calculation_type: "percentage": The `percentage` variant of `TaxBreakdown`..

- Condition: not (present(`flat_money`)).
- Required: `percent`.
- Optional: `flat_money`.
- Constraints for `calculation_type`: Values: `"percentage"`.

### OrderTax.tax_breakdowns[] variant 2: `calculation_type` = `"flat_amount"`

oneOf with calculation_type: "flat_amount": The `flat_amount` variant of `TaxBreakdown`..

- Condition: not (present(`percent`)).
- Required: `flat_money`.
- Optional: `percent`.
- Constraints for `calculation_type`: Values: `"flat_amount"`.


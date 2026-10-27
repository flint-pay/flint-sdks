[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxBreakdownInput

The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | Values: `"percentage"`, `"flat_amount"`. |
| `flat_money` | Conditional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `fulfillment_choice_group_id` | Optional | string |  |
| `jurisdiction` | Required | [TaxJurisdictionInput](../models/TaxJurisdictionInput.md#taxjurisdictioninput) | A taxing jurisdiction with its level, such as state or city, name, state, and country. |
| `location_id` | Optional | string |  |
| `order_charge_id` | Optional | string |  |
| `order_line_item_id` | Optional | string |  |
| `percent` | Conditional | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |
| `tax_breakdown_id` | Required | string |  |
| `tax_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`. |
| `taxability_reason` | Required | string | Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`. |
| `taxable_money` | Required | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |

### TaxBreakdownInput variant 1: `calculation_type` = `"percentage"`

oneOf variant 1: The `percentage` variant of `TaxBreakdown`..

- Condition: not (present(`flat_money`)).
- Required: `percent`.
- Optional: `flat_money`.
- Constraints for `calculation_type`: Values: `"percentage"`.

### TaxBreakdownInput variant 2: `calculation_type` = `"flat_amount"`

oneOf variant 2: The `flat_amount` variant of `TaxBreakdown`..

- Condition: not (present(`percent`)).
- Required: `flat_money`.
- Optional: `percent`.
- Constraints for `calculation_type`: Values: `"flat_amount"`.


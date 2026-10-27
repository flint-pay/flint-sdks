[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxTaxBreakdownsItemFlatAmount

The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.

The `flat_amount` variant of `TaxBreakdown`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | Values: `"flat_amount"`. |
| `flat_money` | Required | [OrderTaxTaxBreakdownsItemFlatAmountFlatMoney](../models/OrderTaxTaxBreakdownsItemFlatAmountFlatMoney.md#ordertaxtaxbreakdownsitemflatamountflatmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `fulfillment_choice_group_id` | Optional | string |  |
| `jurisdiction` | Required | [OrderTaxTaxBreakdownsItemFlatAmountJurisdiction](../models/OrderTaxTaxBreakdownsItemFlatAmountJurisdiction.md#ordertaxtaxbreakdownsitemflatamountjurisdiction) | A taxing jurisdiction with its level, such as state or city, name, state, and country. |
| `location_id` | Optional | string |  |
| `order_charge_id` | Optional | string |  |
| `order_line_item_id` | Optional | string |  |
| `percent` | Optional | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `price_mode` | Required | string | Values: `"additive"`, `"inclusive"`. |
| `tax_breakdown_id` | Required | string |  |
| `tax_money` | Required | [OrderTaxTaxBreakdownsItemFlatAmountTaxMoney](../models/OrderTaxTaxBreakdownsItemFlatAmountTaxMoney.md#ordertaxtaxbreakdownsitemflatamounttaxmoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`. |
| `taxability_reason` | Required | string | Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`. |
| `taxable_money` | Required | [OrderTaxTaxBreakdownsItemFlatAmountTaxableMoney](../models/OrderTaxTaxBreakdownsItemFlatAmountTaxableMoney.md#ordertaxtaxbreakdownsitemflatamounttaxablemoney) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxTaxBreakdownsItemFlatAmount

The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.

The `flat_amount` variant of `TaxBreakdown`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"flat_amount"`. |
| `flat_money` | Required | [OrderTaxTaxBreakdownsItemFlatAmountFlatMoney](../models/OrderTaxTaxBreakdownsItemFlatAmountFlatMoney.md#ordertaxtaxbreakdownsitemflatamountflatmoney) | The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `fulfillment_choice_group_id` | Optional | string | ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. |
| `jurisdiction` | Required | [OrderTaxTaxBreakdownsItemFlatAmountJurisdiction](../models/OrderTaxTaxBreakdownsItemFlatAmountJurisdiction.md#ordertaxtaxbreakdownsitemflatamountjurisdiction) | The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such as state or city, name, state, and country. |
| `location_id` | Optional | string | ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. |
| `order_charge_id` | Optional | string | ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. |
| `order_id` | Required | string | ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. |
| `order_line_item_id` | Optional | string | ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. |
| `percent` | Optional | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `price_mode` | Required | string | Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`. |
| `tax_breakdown_id` | Required | string | ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. |
| `tax_money` | Required | [OrderTaxTaxBreakdownsItemFlatAmountTaxMoney](../models/OrderTaxTaxBreakdownsItemFlatAmountTaxMoney.md#ordertaxtaxbreakdownsitemflatamounttaxmoney) | The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_type` | Required | string | The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Required | string | Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`. |
| `taxable_money` | Required | [OrderTaxTaxBreakdownsItemFlatAmountTaxableMoney](../models/OrderTaxTaxBreakdownsItemFlatAmountTaxableMoney.md#ordertaxtaxbreakdownsitemflatamounttaxablemoney) | The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |


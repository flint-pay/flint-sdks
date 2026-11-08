[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## BuyerOrderTaxTaxBreakdownsItemPercentage

The tax calculated for one jurisdiction on an order, line item, or charge, with the taxable amount, rate or flat amount, and tax.

The `percentage` variant of `TaxBreakdown`.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`. |
| `flat_money` | Optional | [BuyerOrderTaxTaxBreakdownsItemPercentageFlatMoney](../models/BuyerOrderTaxTaxBreakdownsItemPercentageFlatMoney.md#buyerordertaxtaxbreakdownsitempercentageflatmoney) | The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `fulfillment_choice_group_id` | Optional | string |  |
| `jurisdiction` | Required | [BuyerOrderTaxTaxBreakdownsItemPercentageJurisdiction](../models/BuyerOrderTaxTaxBreakdownsItemPercentageJurisdiction.md#buyerordertaxtaxbreakdownsitempercentagejurisdiction) | The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such as state or city, name, state, and country. |
| `location_id` | Optional | string |  |
| `order_charge_id` | Optional | string | ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. |
| `order_line_item_id` | Optional | string | ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. |
| `percent` | Required | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `price_mode` | Required | string | Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`. |
| `tax_breakdown_id` | Required | string | ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. |
| `tax_money` | Required | [BuyerOrderTaxTaxBreakdownsItemPercentageTaxMoney](../models/BuyerOrderTaxTaxBreakdownsItemPercentageTaxMoney.md#buyerordertaxtaxbreakdownsitempercentagetaxmoney) | The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `tax_type` | Required | string | The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Required | string | Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`. |
| `taxable_money` | Required | [BuyerOrderTaxTaxBreakdownsItemPercentageTaxableMoney](../models/BuyerOrderTaxTaxBreakdownsItemPercentageTaxableMoney.md#buyerordertaxtaxbreakdownsitempercentagetaxablemoney) | The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxBreakdownPercentage

The `percentage` variant of `TaxBreakdown`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The fixed tax amount. Present on `flat_amount` rows. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/TaxBreakdown.md#taxbreakdownflat_money). |
| `fulfillment_choice_group_id` | Optional | string | Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | The taxing authority this row's tax is owed to. A taxing jurisdiction with its level, such as state or city, name, state, and country. `jurisdiction`: [field definitions](../models/TaxBreakdown.md#taxbreakdownjurisdiction). |
| `location_id` | Optional | string | Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. |
| `order_charge_id` | Optional | string | ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. |
| `order_id` | Required | string | ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. |
| `order_line_item_id` | Optional | string | ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. |
| `percent` | Required | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `price_mode` | Required | string | Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`. |
| `tax_breakdown_id` | Required | string | ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. |
| `tax_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `tax_money`: [field definitions](../models/TaxBreakdown.md#taxbreakdowntax_money). |
| `tax_type` | Required | string | The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Required | string | Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`. |
| `taxable_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `taxable_money`: [field definitions](../models/TaxBreakdown.md#taxbreakdowntaxable_money). |

### TaxBreakdownPercentage.flat_money

Field definitions: [TaxBreakdown.flat_money](../models/TaxBreakdown.md#taxbreakdownflat_money).

### TaxBreakdownPercentage.jurisdiction

Field definitions: [TaxBreakdown.jurisdiction](../models/TaxBreakdown.md#taxbreakdownjurisdiction).

### TaxBreakdownPercentage.tax_money

Field definitions: [TaxBreakdown.tax_money](../models/TaxBreakdown.md#taxbreakdowntax_money).

### TaxBreakdownPercentage.taxable_money

Field definitions: [TaxBreakdown.taxable_money](../models/TaxBreakdown.md#taxbreakdowntaxable_money).


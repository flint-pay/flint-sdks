[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxBreakdownPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | (string or null) | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`, `"flat_amount"`. `calculation_type`: [declared alternatives](../models/TaxBreakdownPreviousAttributesInput.md#taxbreakdownpreviousattributesinput-variant-1calculation_type), [declared alternatives](../models/TaxBreakdownPreviousAttributesInput.md#taxbreakdownpreviousattributesinput-variant-2calculation_type). |
| `flat_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The fixed tax amount. Present on `flat_amount` rows. |
| `fulfillment_choice_group_id` | Optional | string or null | ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. `fulfillment_choice_group_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputfulfillment_choice_group_id). |
| `jurisdiction` | Optional | [TaxJurisdictionPreviousAttributesInput](../models/TaxJurisdictionPreviousAttributesInput.md#taxjurisdictionpreviousattributesinput) or null | The taxing authority this row's tax is owed to. |
| `location_id` | Optional | string or null | ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. `location_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputlocation_id). |
| `order_charge_id` | Optional | string or null | ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. `order_charge_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. `order_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. `order_line_item_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputorder_line_item_id). |
| `percent` | Optional | number or null | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. `percent`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputpercent). |
| `price_mode` | Optional | string or null | Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputprice_mode). |
| `tax_breakdown_id` | Optional | string or null | ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. `tax_breakdown_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputtax_breakdown_id). |
| `tax_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. |
| `tax_type` | Optional | string or null | The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. `tax_type`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputtax_type). |
| `taxability_reason` | Optional | string or null | Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`. `taxability_reason`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputtaxability_reason). |
| `taxable_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. |

### TaxBreakdownPreviousAttributesInput variant 1: `calculation_type` = `"percentage"`

anyOf TaxBreakdownPercentagePreviousAttributes.

- Constraints for `calculation_type`: Values: `"percentage"`.

### TaxBreakdownPreviousAttributesInput variant 2: `calculation_type` = `"flat_amount"`

anyOf TaxBreakdownFlatAmountPreviousAttributes.

- Constraints for `calculation_type`: Values: `"flat_amount"`.

### TaxBreakdownPreviousAttributesInput variant 1.calculation_type

### TaxBreakdownPreviousAttributesInput variant 1.calculation_type variant 1

anyOf group 1 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`, `"flat_amount"`.

### TaxBreakdownPreviousAttributesInput variant 1.calculation_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the tax is figured: a percentage of the taxable amount, or a fixed amount. 

### TaxBreakdownPreviousAttributesInput variant 1.calculation_type variant 3

anyOf group 2 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`.

### TaxBreakdownPreviousAttributesInput.fulfillment_choice_group_id

Declared alternatives: [TaxBreakdownFlatAmountPreviousAttributesInput.fulfillment_choice_group_id](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputfulfillment_choice_group_id).

### TaxBreakdownPreviousAttributesInput.location_id

Declared alternatives: [TaxBreakdownFlatAmountPreviousAttributesInput.location_id](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputlocation_id).

### TaxBreakdownPreviousAttributesInput.order_charge_id

Declared alternatives: [TaxBreakdownFlatAmountPreviousAttributesInput.order_charge_id](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputorder_charge_id).

### TaxBreakdownPreviousAttributesInput.order_id

Declared alternatives: [TaxBreakdownFlatAmountPreviousAttributesInput.order_id](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputorder_id).

### TaxBreakdownPreviousAttributesInput.order_line_item_id

Declared alternatives: [TaxBreakdownFlatAmountPreviousAttributesInput.order_line_item_id](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputorder_line_item_id).

### TaxBreakdownPreviousAttributesInput.percent

Declared alternatives: [TaxBreakdownFlatAmountPreviousAttributesInput.percent](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputpercent).

### TaxBreakdownPreviousAttributesInput.price_mode

Declared alternatives: [TaxBreakdownFlatAmountPreviousAttributesInput.price_mode](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputprice_mode).

### TaxBreakdownPreviousAttributesInput.tax_breakdown_id

Declared alternatives: [TaxBreakdownFlatAmountPreviousAttributesInput.tax_breakdown_id](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputtax_breakdown_id).

### TaxBreakdownPreviousAttributesInput.tax_type

Declared alternatives: [TaxBreakdownFlatAmountPreviousAttributesInput.tax_type](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputtax_type).

### TaxBreakdownPreviousAttributesInput.taxability_reason

Declared alternatives: [TaxBreakdownFlatAmountPreviousAttributesInput.taxability_reason](../models/TaxBreakdownFlatAmountPreviousAttributesInput.md#taxbreakdownflatamountpreviousattributesinputtaxability_reason).

### TaxBreakdownPreviousAttributesInput variant 2.calculation_type

### TaxBreakdownPreviousAttributesInput variant 2.calculation_type variant 1

anyOf group 1 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`, `"flat_amount"`.

### TaxBreakdownPreviousAttributesInput variant 2.calculation_type variant 2, 4

anyOf group 1 variant 2; anyOf group 2 variant 2.

- Value shape: null. How the tax is figured: a percentage of the taxable amount, or a fixed amount. 

### TaxBreakdownPreviousAttributesInput variant 2.calculation_type variant 3

anyOf group 2 variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"flat_amount"`.


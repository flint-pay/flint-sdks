[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxBreakdownFlatAmountPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string or null | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"flat_amount"`. `calculation_type`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributescalculation_type). |
| `flat_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fixed tax amount. Present on `flat_amount` rows. `flat_money`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributesflat_money). |
| `fulfillment_choice_group_id` | Optional | string or null | ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. `fulfillment_choice_group_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributesfulfillment_choice_group_id). |
| `jurisdiction` | Optional | [TaxJurisdictionPreviousAttributes](../models/TaxJurisdictionPreviousAttributes.md#taxjurisdictionpreviousattributes) or null | The taxing authority this row's tax is owed to. |
| `location_id` | Optional | string or null | ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. `location_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributeslocation_id). |
| `order_charge_id` | Optional | string or null | ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. `order_charge_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributesorder_charge_id). |
| `order_id` | Optional | string or null | ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. `order_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributesorder_id). |
| `order_line_item_id` | Optional | string or null | ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. `order_line_item_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributesorder_line_item_id). |
| `percent` | Optional | number or null | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. `percent`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributespercent). |
| `price_mode` | Optional | string or null | Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`. `price_mode`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributesprice_mode). |
| `tax_breakdown_id` | Optional | string or null | ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. `tax_breakdown_id`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributestax_breakdown_id). |
| `tax_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. `tax_money`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributestax_money). |
| `tax_type` | Optional | string or null | The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. `tax_type`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributestax_type). |
| `taxability_reason` | Optional | string or null | Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`. `taxability_reason`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributestaxability_reason). |
| `taxable_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. `taxable_money`: [declared alternatives](../models/TaxBreakdownFlatAmountPreviousAttributes.md#taxbreakdownflatamountpreviousattributestaxable_money). |

### TaxBreakdownFlatAmountPreviousAttributes.calculation_type

### TaxBreakdownFlatAmountPreviousAttributes.calculation_type variant 1

anyOf variant 1: How the tax is figured: a percentage of the taxable amount, or a fixed amount..

- Value shape: string. How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"flat_amount"`.

### TaxBreakdownFlatAmountPreviousAttributes.calculation_type variant 2

anyOf variant 2.

- Value shape: null. How the tax is figured: a percentage of the taxable amount, or a fixed amount. 

### TaxBreakdownFlatAmountPreviousAttributes.flat_money

The fixed tax amount. Present on `flat_amount` rows.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TaxBreakdownFlatAmountPreviousAttributes.flat_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TaxBreakdownFlatAmountPreviousAttributes.flat_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fixed tax amount. Present on `flat_amount` rows. 

### TaxBreakdownFlatAmountPreviousAttributes.flat_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### TaxBreakdownFlatAmountPreviousAttributes.flat_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### TaxBreakdownFlatAmountPreviousAttributes.fulfillment_choice_group_id

### TaxBreakdownFlatAmountPreviousAttributes.fulfillment_choice_group_id variant 1

anyOf variant 1: ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row..

- Value shape: string. ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. Example: `"dcgrp_01KEZF7C00KYKJQ897HWM86AT8"`. 

### TaxBreakdownFlatAmountPreviousAttributes.fulfillment_choice_group_id variant 2

anyOf variant 2.

- Value shape: null. ID of the delivery choice group whose delivery this row's tax covers. On a line item row, the row taxes the share of the line item that group delivers. On a charge row, it taxes that group's delivery charge. Set only on automatic tax rows outside the US, and only when delivery was chosen from a delivery quote. A delivery charge's row gets it only when the `delivery_charge_tax_basis` setting applied as the row was calculated, and a row frozen by payment or by issuing an invoice keeps the value it had. A delivery charge priced with `taxable_items_share` after its delivery choice is no longer available can carry the ID of the fulfillment that holds the charge instead. Omitted on external tax rows and on every other row. 

### TaxBreakdownFlatAmountPreviousAttributes.location_id

### TaxBreakdownFlatAmountPreviousAttributes.location_id variant 1

anyOf variant 1: ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row..

- Value shape: string. ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. Example: `"loc_01KEZF7C00CMHRRYA3MV996JB2"`. 

### TaxBreakdownFlatAmountPreviousAttributes.location_id variant 2

anyOf variant 2.

- Value shape: null. ID of the location whose address was the seller origin for this row's tax: the location the goods leave from, or the pickup location. Set only on automatic tax rows outside the US, for goods and charges that a fulfillment sends from one location. Separate shares of a line item can have different origin locations. Omitted when the tax was sourced from the merchant's legal origin, which covers services, goods with no fulfilling location yet, goods whose fulfillments can't be split by location, a charge whose fulfillments leave from more than one location, and every external tax row. 

### TaxBreakdownFlatAmountPreviousAttributes.order_charge_id

### TaxBreakdownFlatAmountPreviousAttributes.order_charge_id variant 1

anyOf variant 1: ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax..

- Value shape: string. ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. Example: `"och_01KEZF7C00XX8AKACP0GHKFWWT"`. 

### TaxBreakdownFlatAmountPreviousAttributes.order_charge_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order charge this row taxes. Absent on rows for a line item or a flat order tax. 

### TaxBreakdownFlatAmountPreviousAttributes.order_id

### TaxBreakdownFlatAmountPreviousAttributes.order_id variant 1

anyOf variant 1: ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference..

- Value shape: string. ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. Example: `"ord_01KEZF7C0054GQKJ142A8X367A"`. 

### TaxBreakdownFlatAmountPreviousAttributes.order_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order this tax row belongs to, including the parent of any order_line_item_id or order_charge_id reference. 

### TaxBreakdownFlatAmountPreviousAttributes.order_line_item_id

### TaxBreakdownFlatAmountPreviousAttributes.order_line_item_id variant 1

anyOf variant 1: ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax..

- Value shape: string. ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. Example: `"li_01KEZF7C008YPRCK7VDKTGWR31"`. 

### TaxBreakdownFlatAmountPreviousAttributes.order_line_item_id variant 2

anyOf variant 2.

- Value shape: null. ID of the order line item this row taxes. Absent on rows for a charge or a flat order tax. 

### TaxBreakdownFlatAmountPreviousAttributes.percent

### TaxBreakdownFlatAmountPreviousAttributes.percent variant 1

anyOf variant 1: Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows..

- Value shape: number. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. 

### TaxBreakdownFlatAmountPreviousAttributes.percent variant 2

anyOf variant 2.

- Value shape: null. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Present on `percentage` rows. 

### TaxBreakdownFlatAmountPreviousAttributes.price_mode

### TaxBreakdownFlatAmountPreviousAttributes.price_mode variant 1

anyOf variant 1: Whether the price this row taxes already includes the tax..

- Value shape: string. Whether the price this row taxes already includes the tax. Values: `"additive"`, `"inclusive"`.

### TaxBreakdownFlatAmountPreviousAttributes.price_mode variant 2

anyOf variant 2.

- Value shape: null. Whether the price this row taxes already includes the tax. 

### TaxBreakdownFlatAmountPreviousAttributes.tax_breakdown_id

### TaxBreakdownFlatAmountPreviousAttributes.tax_breakdown_id variant 1

anyOf variant 1: ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax..

- Value shape: string. ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. Example: `"txb_01KEZF7C00SHMN8QWCA8PT1HSB"`. 

### TaxBreakdownFlatAmountPreviousAttributes.tax_breakdown_id variant 2

anyOf variant 2.

- Value shape: null. ID of this tax row. A refund names it in `tax_breakdown_refunds` to reverse this row's tax. 

### TaxBreakdownFlatAmountPreviousAttributes.tax_money

The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TaxBreakdownFlatAmountPreviousAttributes.tax_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TaxBreakdownFlatAmountPreviousAttributes.tax_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The tax this row adds up to. Zero when the amount isn't taxable or the customer is tax-exempt. 

### TaxBreakdownFlatAmountPreviousAttributes.tax_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### TaxBreakdownFlatAmountPreviousAttributes.tax_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### TaxBreakdownFlatAmountPreviousAttributes.tax_type

### TaxBreakdownFlatAmountPreviousAttributes.tax_type variant 1

anyOf variant 1: The kind of tax this row collects..

- Value shape: string. The kind of tax this row collects. Values: `"sales_tax"`, `"use_tax"`, `"retail_delivery_fee"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`.

### TaxBreakdownFlatAmountPreviousAttributes.tax_type variant 2

anyOf variant 2.

- Value shape: null. The kind of tax this row collects. 

### TaxBreakdownFlatAmountPreviousAttributes.taxability_reason

### TaxBreakdownFlatAmountPreviousAttributes.taxability_reason variant 1

anyOf variant 1: Why the row's tax is what it is..

- Value shape: string. Why the row's tax is what it is. Values: `"standard_rated"`, `"not_taxable"`, `"customer_exempt"`, `"tax_disabled"`, `"location_required"`, `"calculation_incomplete"`, `"reverse_charge"`.

### TaxBreakdownFlatAmountPreviousAttributes.taxability_reason variant 2

anyOf variant 2.

- Value shape: null. Why the row's tax is what it is. 

### TaxBreakdownFlatAmountPreviousAttributes.taxable_money

The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TaxBreakdownFlatAmountPreviousAttributes.taxable_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TaxBreakdownFlatAmountPreviousAttributes.taxable_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The amount this row's tax is based on. On an additive percentage row it is the price, on an inclusive row it is the price minus the tax in it, and on a flat row it is the order's taxable amount. Zero when the amount isn't taxable. 

### TaxBreakdownFlatAmountPreviousAttributes.taxable_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### TaxBreakdownFlatAmountPreviousAttributes.taxable_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).


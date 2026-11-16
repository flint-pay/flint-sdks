[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxComponentRequestPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string or null | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Values: `"percentage"`. `calculation_type`: [declared alternatives](../models/TaxBreakdownPercentagePreviousAttributes.md#taxbreakdownpercentagepreviousattributescalculation_type). |
| `flat_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it. `flat_money`: [declared alternatives](../models/TaxComponentRequestPreviousAttributes.md#taxcomponentrequestpreviousattributesflat_money). |
| `jurisdiction` | Optional | [TaxJurisdictionPreviousAttributes](../models/TaxJurisdictionPreviousAttributes.md#taxjurisdictionpreviousattributes) or null | The taxing jurisdiction this component's tax is owed to. |
| `percent` | Optional | number or null | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. `percent`: [declared alternatives](../models/TaxComponentRequestPreviousAttributes.md#taxcomponentrequestpreviousattributespercent). |
| `tax_type` | Optional | string or null | The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. `tax_type`: [declared alternatives](../models/TaxComponentRequestPreviousAttributes.md#taxcomponentrequestpreviousattributestax_type). |
| `taxability_reason` | Optional | string or null | Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`. `taxability_reason`: [declared alternatives](../models/TaxComponentRequestPreviousAttributes.md#taxcomponentrequestpreviousattributestaxability_reason). |

### TaxComponentRequestPreviousAttributes.calculation_type

Declared alternatives: [TaxBreakdownPercentagePreviousAttributes.calculation_type](../models/TaxBreakdownPercentagePreviousAttributes.md#taxbreakdownpercentagepreviousattributescalculation_type).

### TaxComponentRequestPreviousAttributes.flat_money

The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TaxComponentRequestPreviousAttributes.flat_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TaxComponentRequestPreviousAttributes.flat_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it. 

### TaxComponentRequestPreviousAttributes.flat_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### TaxComponentRequestPreviousAttributes.flat_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### TaxComponentRequestPreviousAttributes.percent

### TaxComponentRequestPreviousAttributes.percent variant 1

anyOf variant 1: Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it..

- Value shape: number. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. 

### TaxComponentRequestPreviousAttributes.percent variant 2

anyOf variant 2.

- Value shape: null. Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. 

### TaxComponentRequestPreviousAttributes.tax_type

### TaxComponentRequestPreviousAttributes.tax_type variant 1

anyOf variant 1: The kind of tax this component collects..

- Value shape: string. The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`.

### TaxComponentRequestPreviousAttributes.tax_type variant 2

anyOf variant 2.

- Value shape: null. The kind of tax this component collects. 

### TaxComponentRequestPreviousAttributes.taxability_reason

### TaxComponentRequestPreviousAttributes.taxability_reason variant 1

anyOf variant 1: Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction..

- Value shape: string. Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`.

### TaxComponentRequestPreviousAttributes.taxability_reason variant 2

anyOf variant 2.

- Value shape: null. Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. 


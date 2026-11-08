[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxComponentRequestModelInput

Request input. Response: [TaxComponentRequest](../models/TaxComponentRequest.md#taxcomponentrequest).

One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | The fixed tax amount in the order currency. Send it with a `flat_amount` component; a `percentage` component doesn't take it. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `jurisdiction` | Required | [TaxJurisdictionRequestModelInput](../models/TaxJurisdictionRequestModelInput.md#taxjurisdictionrequestmodelinput) | The taxing jurisdiction this component's tax is owed to. A taxing jurisdiction with its level, such as state or city, name, state, and country. |
| `percent` | Required | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Optional | string | Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`. |


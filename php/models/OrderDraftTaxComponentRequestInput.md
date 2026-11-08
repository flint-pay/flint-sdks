[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDraftTaxComponentRequestInput

One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | How the tax is figured: a percentage of the taxable amount, or a fixed amount. Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Flat tax amount. The amount and every computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field. Lower payment option limits can apply. Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `jurisdiction` | Required | [OrderDraftTaxJurisdictionRequestInput](../models/OrderDraftTaxJurisdictionRequestInput.md#orderdrafttaxjurisdictionrequestinput) | The taxing jurisdiction this component's tax is owed to. The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country. |
| `percent` | Required | number | Tax rate in percentage points, from 0 to 100 with up to four decimal places: `6.5` is 6.5%. Send it with a `percentage` component; a `flat_amount` component doesn't take it. minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | The kind of tax this component collects. Values: `"sales_tax"`, `"use_tax"`, `"vat"`, `"gst"`, `"hst"`, `"pst"`, `"qst"`. |
| `taxability_reason` | Optional | string | Optional reverse-charge treatment. Requires percent 0 and a non-US jurisdiction. Values: `"reverse_charge"`. |


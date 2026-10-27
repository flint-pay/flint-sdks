[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderDraftTaxComponentRequestInput

One tax component of a draft line item calculation, with its jurisdiction, tax type, and percentage or flat amount.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Default: `"percentage"`. Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `jurisdiction` | Required | [OrderDraftTaxJurisdictionRequestInput](../models/OrderDraftTaxJurisdictionRequestInput.md#orderdrafttaxjurisdictionrequestinput) | The taxing jurisdiction of a draft tax component, identified by code, level, name, state, and country. |
| `percent` | Required | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`. |


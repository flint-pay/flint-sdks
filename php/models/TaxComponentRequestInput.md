[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxComponentRequestInput

One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValueInput](../models/MoneyValueInput.md#moneyvalueinput) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `jurisdiction` | Required | [TaxJurisdictionInput](../models/TaxJurisdictionInput.md#taxjurisdictioninput) | A taxing jurisdiction with its level, such as state or city, name, state, and country. |
| `percent` | Required | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`. |


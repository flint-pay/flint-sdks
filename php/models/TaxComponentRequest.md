[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TaxComponentRequest

One tax component in a `TaxCalculationInput`: a jurisdiction, tax type, and percent.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Values: `"percentage"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `jurisdiction` | Required | [TaxJurisdiction](../models/TaxJurisdiction.md#taxjurisdiction) | A taxing jurisdiction with its level, such as state or city, name, state, and country. |
| `percent` | Required | number | minimum: `0`. maximum: `100`. multipleOf: `0.0001`. |
| `tax_type` | Required | string | Values: `"sales_tax"`, `"use_tax"`. |


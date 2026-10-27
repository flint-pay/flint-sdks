[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderTaxComponentRequest

One externally supplied order tax component, with its jurisdiction and either a flat amount or a percentage.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Optional | string | Default: `"flat_amount"`. Values: `"flat_amount"`. |
| `flat_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_FLAT_TAX. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_FLAT_TAX. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `flat_money`: [field definitions](../models/OrderTaxComponentRequest.md#ordertaxcomponentrequestflat_money). |
| `jurisdiction` | Required | [OrderTaxJurisdictionRequest](../models/OrderTaxJurisdictionRequest.md#ordertaxjurisdictionrequest) | The taxing jurisdiction of an externally supplied tax component, identified by code, level, name, state, and country. |
| `percent` | Optional | number | multipleOf: `0.0001`. |
| `tax_type` | Optional | string | Default: `"retail_delivery_fee"`. Values: `"retail_delivery_fee"`. |

### OrderTaxComponentRequest.flat_money

Flat tax in the order currency. The amount must be at least 1 minor unit; otherwise, Flint returns INVALID_FLAT_TAX. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money).


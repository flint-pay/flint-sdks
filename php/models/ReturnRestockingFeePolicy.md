[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ReturnRestockingFeePolicy

A restocking fee in a return policy, charged as a flat amount or a percent.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `calculation_type` | Required | string | Values: `"flat"`, `"percent"`. |
| `flat_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent` | Optional | number | Format: `double`. multipleOf: `0.0001`. |


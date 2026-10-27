[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferDiscount

The discount a subscription offer gives, as a fixed amount or a percentage.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_off_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. |
| `percent_off` | Optional | number | multipleOf: `0.0001`. |


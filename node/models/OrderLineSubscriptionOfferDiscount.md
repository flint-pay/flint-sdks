[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferDiscount

The discount a subscription offer gives, as a fixed amount or a percentage.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_off_money` | Optional | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Fixed amount the promotion is set to take off, in the order's currency. Depending on the promotion's allocation it can apply to each eligible unit, so a charge can take off more. Present for an amount-off promotion, and absent for a percentage. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_off_money`: [field definitions](../models/OrderLineSubscriptionOfferDiscount.md#orderlinesubscriptionofferdiscountamount_off_money). |
| `percent_off` | Optional | number | Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. multipleOf: `0.0001`. |

### OrderLineSubscriptionOfferDiscount.amount_off_money

Fixed amount the promotion is set to take off, in the order's currency. Depending on the promotion's allocation it can apply to each eligible unit, so a charge can take off more. Present for an amount-off promotion, and absent for a percentage. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).


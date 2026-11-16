[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferDiscountPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed amount the promotion is set to take off, in the order's currency. Depending on the promotion's allocation it can apply to each eligible unit, so a charge can take off more. Present for an amount-off promotion, and absent for a percentage. |
| `percent_off` | Optional | number or null | Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. `percent_off`: [declared alternatives](../models/OrderLineSubscriptionOfferDiscountPreviousAttributes.md#orderlinesubscriptionofferdiscountpreviousattributespercent_off). |

### OrderLineSubscriptionOfferDiscountPreviousAttributes.percent_off

### OrderLineSubscriptionOfferDiscountPreviousAttributes.percent_off variant 1

anyOf variant 1: Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount..

- Value shape: number. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. multipleOf: `0.0001`. 

### OrderLineSubscriptionOfferDiscountPreviousAttributes.percent_off variant 2

anyOf variant 2.

- Value shape: null. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. 


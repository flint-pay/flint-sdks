[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderLineSubscriptionOfferDiscountPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_off_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | Fixed amount the promotion is set to take off, in the order's currency. Depending on the promotion's allocation it can apply to each eligible unit, so a charge can take off more. Present for an amount-off promotion, and absent for a percentage. `amount_off_money`: [declared alternatives](../models/OrderLineSubscriptionOfferDiscountPreviousAttributes.md#orderlinesubscriptionofferdiscountpreviousattributesamount_off_money). |
| `percent_off` | Optional | number or null | Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. `percent_off`: [declared alternatives](../models/OrderLineSubscriptionOfferDiscountPreviousAttributes.md#orderlinesubscriptionofferdiscountpreviousattributespercent_off). |

### OrderLineSubscriptionOfferDiscountPreviousAttributes.amount_off_money

Fixed amount the promotion is set to take off, in the order's currency. Depending on the promotion's allocation it can apply to each eligible unit, so a charge can take off more. Present for an amount-off promotion, and absent for a percentage.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### OrderLineSubscriptionOfferDiscountPreviousAttributes.amount_off_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### OrderLineSubscriptionOfferDiscountPreviousAttributes.amount_off_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. Fixed amount the promotion is set to take off, in the order's currency. Depending on the promotion's allocation it can apply to each eligible unit, so a charge can take off more. Present for an amount-off promotion, and absent for a percentage. 

### OrderLineSubscriptionOfferDiscountPreviousAttributes.amount_off_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### OrderLineSubscriptionOfferDiscountPreviousAttributes.amount_off_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### OrderLineSubscriptionOfferDiscountPreviousAttributes.percent_off

### OrderLineSubscriptionOfferDiscountPreviousAttributes.percent_off variant 1

anyOf variant 1: Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount..

- Value shape: number. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. multipleOf: `0.0001`. 

### OrderLineSubscriptionOfferDiscountPreviousAttributes.percent_off variant 2

anyOf variant 2.

- Value shape: null. Percentage the promotion takes off each charge. Present for a percent-off promotion, and absent for a fixed amount. 


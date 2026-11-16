[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipPaymentIntentAllocationPreviousAttributes







| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the tip this payment intent paid. `amount_money`: [declared alternatives](../models/TipPaymentIntentAllocationPreviousAttributes.md#tippaymentintentallocationpreviousattributesamount_money). |
| `payment_intent_id` | Optional | string or null | ID of the payment intent that paid this part of the tip. `payment_intent_id`: [declared alternatives](../models/TipPaymentIntentAllocationPreviousAttributes.md#tippaymentintentallocationpreviousattributespayment_intent_id). |

### TipPaymentIntentAllocationPreviousAttributes.amount_money

The part of the tip this payment intent paid.

Field definitions: [shared fields](PromotionRuleValuePreviousAttributes.md#promotionrulevaluepreviousattributes).

### TipPaymentIntentAllocationPreviousAttributes.amount_money variant 1

anyOf MoneyValuePreviousAttributes.

- Optional: `amount`, `currency`.

### TipPaymentIntentAllocationPreviousAttributes.amount_money variant 2

anyOf variant 2.

- Undeclared: `amount`, `currency`.
- Value shape: null. The part of the tip this payment intent paid. 

### TipPaymentIntentAllocationPreviousAttributes.amount_money variant 1.amount

Declared alternatives: [BalanceUpdatedInstalledMerchantsEvent.data.previous_attributes.held_money variant 1.amount](../models/BalanceUpdatedInstalledMerchantsEvent.md#balanceupdatedinstalledmerchantseventdataprevious_attributesheld_money-variant-1amount).

### TipPaymentIntentAllocationPreviousAttributes.amount_money variant 1.currency

Declared alternatives: [BalanceTransactionUpdatedInstalledMerchantsEvent.data.previous_attributes.amount_money variant 1.currency](../models/BalanceTransactionUpdatedInstalledMerchantsEvent.md#balancetransactionupdatedinstalledmerchantseventdataprevious_attributesamount_money-variant-1currency).

### TipPaymentIntentAllocationPreviousAttributes.payment_intent_id

### TipPaymentIntentAllocationPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent that paid this part of the tip..

- Value shape: string. ID of the payment intent that paid this part of the tip. ID of the payment intent that paid this part of the tip. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### TipPaymentIntentAllocationPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent that paid this part of the tip. 


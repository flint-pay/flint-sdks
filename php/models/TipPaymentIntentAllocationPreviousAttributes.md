[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipPaymentIntentAllocationPreviousAttributes



Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributes](../models/MoneyValuePreviousAttributes.md#moneyvaluepreviousattributes) or null | The part of the tip this payment intent paid. |
| `payment_intent_id` | Optional | string or null | ID of the payment intent that paid this part of the tip. `payment_intent_id`: [declared alternatives](../models/TipPaymentIntentAllocationPreviousAttributes.md#tippaymentintentallocationpreviousattributespayment_intent_id). |

### TipPaymentIntentAllocationPreviousAttributes.payment_intent_id

### TipPaymentIntentAllocationPreviousAttributes.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent that paid this part of the tip..

- Value shape: string. ID of the payment intent that paid this part of the tip. 

### TipPaymentIntentAllocationPreviousAttributes.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent that paid this part of the tip. 


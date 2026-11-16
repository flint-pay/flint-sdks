[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipPaymentIntentAllocationPreviousAttributesInput



Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Optional | [MoneyValuePreviousAttributesInput](../models/MoneyValuePreviousAttributesInput.md#moneyvaluepreviousattributesinput) or null | The part of the tip this payment intent paid. |
| `payment_intent_id` | Optional | string or null | ID of the payment intent that paid this part of the tip. `payment_intent_id`: [declared alternatives](../models/TipPaymentIntentAllocationPreviousAttributesInput.md#tippaymentintentallocationpreviousattributesinputpayment_intent_id). |

### TipPaymentIntentAllocationPreviousAttributesInput.payment_intent_id

### TipPaymentIntentAllocationPreviousAttributesInput.payment_intent_id variant 1

anyOf variant 1: ID of the payment intent that paid this part of the tip..

- Value shape: string. ID of the payment intent that paid this part of the tip. ID of the payment intent that paid this part of the tip. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. 

### TipPaymentIntentAllocationPreviousAttributesInput.payment_intent_id variant 2

anyOf variant 2.

- Value shape: null. ID of the payment intent that paid this part of the tip. 


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## TipPaymentIntentAllocation

The part of a tip paid through one payment intent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | The part of the tip this payment intent paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/TipPaymentIntentAllocation.md#tippaymentintentallocationamount_money). |
| `payment_intent_id` | Required | string | ID of the payment intent that paid this part of the tip. Example: `"pi_01KEZF7C00G8H9D509YEV22P7R"`. |

### TipPaymentIntentAllocation.amount_money

The part of the tip this payment intent paid. Monetary amount represented as integer minor units plus an ISO 4217 currency code.

Field definitions: [shared fields](MoneyValueInput.md#moneyvalueinput).


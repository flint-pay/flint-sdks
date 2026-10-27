[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTenderAllocationInputPaymentIntent

The `payment_intent` variant of `RefundTenderAllocationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money). |
| `destination` | Optional | string | Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `gift_card_redemption_id` | Optional | string | The captured redemption to refund. Required for tender_type gift_card_redemption. minLength: `1`. pattern: `^gcr_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `payment_intent_id` | Required | string | The succeeded payment intent to refund. Required for tender_type payment_intent. minLength: `1`. pattern: `^pi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `tender_type` | Required | string | Values: `"payment_intent"`. |

### RefundTenderAllocationInputPaymentIntent.amount_money

Field definitions: [CreateGiftCardLoadRequest.value_money](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money).


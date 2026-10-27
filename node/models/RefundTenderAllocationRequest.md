[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTenderAllocationRequest

Where part of a refund goes: back to a payment intent or to a gift card redemption, with the amount.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money), [field definitions](../models/RefundTenderAllocationInputGiftCardRedemption.md#refundtenderallocationinputgiftcardredemptionamount_money). |
| `destination` | Optional | string | Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `gift_card_redemption_id` | Conditional | string | The captured redemption to refund. Required for tender_type gift_card_redemption. minLength: `1`. pattern: `^gcr_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `payment_intent_id` | Conditional | string | The succeeded payment intent to refund. Required for tender_type payment_intent. minLength: `1`. pattern: `^pi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `tender_type` | Required | string | Values: `"payment_intent"`, `"gift_card_redemption"`. |

### RefundTenderAllocationRequest variant 1: `tender_type` = `"payment_intent"`

oneOf variant 1: The `payment_intent` variant of `RefundTenderAllocationInput`..

- Condition: not (present(`gift_card_redemption_id`)).
- Required: `payment_intent_id`.
- Optional: `gift_card_redemption_id`.
- Constraints for `tender_type`: Values: `"payment_intent"`.

### RefundTenderAllocationRequest variant 2: `tender_type` = `"gift_card_redemption"`

oneOf variant 2: The `gift_card_redemption` variant of `RefundTenderAllocationInput`..

- Condition: not (present(`payment_intent_id`)).
- Required: `gift_card_redemption_id`.
- Optional: `payment_intent_id`.
- Constraints for `tender_type`: Values: `"gift_card_redemption"`.

### RefundTenderAllocationRequest variant 1.amount_money

Field definitions: [CreateGiftCardLoadRequest.value_money](../models/CreateGiftCardLoadRequest.md#creategiftcardloadrequestvalue_money).

### RefundTenderAllocationRequest variant 2.amount_money

Field definitions: [RefundTenderAllocationInputGiftCardRedemption.amount_money](../models/RefundTenderAllocationInputGiftCardRedemption.md#refundtenderallocationinputgiftcardredemptionamount_money).


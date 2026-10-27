[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundTenderAllocationInputGiftCardRedemption

The `gift_card_redemption` variant of `RefundTenderAllocationInput`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount_money` | Required | [MoneyValue](../models/MoneyValue.md#moneyvalue) | Monetary amount represented as integer minor units plus an ISO 4217 currency code. `amount_money`: [field definitions](../models/RefundTenderAllocationInputGiftCardRedemption.md#refundtenderallocationinputgiftcardredemptionamount_money). |
| `destination` | Optional | string | Where this allocation is refunded. original returns value to the tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `gift_card_redemption_id` | Required | string | The captured redemption to refund. Required for tender_type gift_card_redemption. minLength: `1`. pattern: `^gcr_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `payment_intent_id` | Optional | string | The succeeded payment intent to refund. Required for tender_type payment_intent. minLength: `1`. pattern: `^pi_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `tender_type` | Required | string | Values: `"gift_card_redemption"`. |

### RefundTenderAllocationInputGiftCardRedemption.amount_money

Monetary amount represented as integer minor units plus an ISO 4217 currency code.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `amount` | Required | integer string | Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. minimum: `0`. Amount in the currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a floating-point number. Format: `int64`. minimum: `1`. minimum: `0`. |
| `currency` | Required | string | ISO 4217 currency code for this amount. minLength: `3`. maxLength: `3`. pattern: `^[A-Z]{3}$`. Values: `"USD"`. |


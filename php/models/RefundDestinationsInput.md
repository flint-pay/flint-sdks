[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## RefundDestinationsInput

Default refund destinations for payment intent and gift card redemption allocations planned by Flint. Each tender type defaults to original when omitted.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `gift_card_redemption` | Optional | string | Where gift card redemption value is refunded. original credits the original gift card; new_gift_card issues new gift cards, including when the original is closed or cannot accept the full credit. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |
| `payment_intent` | Optional | string | Default destination for every payment intent allocation Flint plans for this refund. original returns value to the payment; new_gift_card issues store credit on new Flint gift cards. Payment intent store credit requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments, and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment chargebacks use the existing dispute refusal. Gift card redemption destinations are unaffected by the payment restrictions. Default: `"original"`. Values: `"original"`, `"new_gift_card"`. |


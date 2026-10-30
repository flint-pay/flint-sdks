[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmPaymentIntentRequestStripeConfirmationToken

The `stripe_confirmation_token` variant of `ConfirmPaymentIntentRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"stripe_confirmation_token"`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `save_payment_method` | Optional | boolean | On /confirm, saves cards only for standalone payment intents. Saves the card this confirmation collects for the payment intent's customer, with usage off_session, so you can charge it later without the buyer: subscriptions, automatic invoices, or the customer's default. Send true only when the buyer agreed to that on your page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token (created with setup_future_usage off_session) or payment_source_token, and payments.payment_methods.write. Flint saves the card once the payment is approved, sends payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks the buyer to authenticate, current_payment_action carries it; that one authentication also covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards using the checkout session's own credential. Default: `false`. |
| `stripe` | Required | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe). |

### ConfirmPaymentIntentRequestStripeConfirmationToken.stripe

Field definitions: [ConfirmPaymentIntentRequest variant 3.stripe](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe).


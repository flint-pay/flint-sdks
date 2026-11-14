[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmPaymentIntentRequestInput

Request input. Response: [ConfirmPaymentIntentRequest](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest).

The request body for: Confirm payment intent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_ip_address` | Optional | string | The buyer's IP address, for risk screening, when your server pays on the buyer's behalf. Write-only. minLength: `1`. maxLength: `64`. Input only. |
| `client_action_type` | Optional | string | How to complete the authentication step. Flint's API returns a Stripe client secret only for client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned. The Stripe secret can also confirm the payment with another card, so use it only with handleNextAction. Reader credentials do not support url; omit client_action_type or send stripe for reader payments. Defaults to stripe for a new confirmation; omission on a continuation keeps the existing type. Default: `"stripe"`. Values: `"url"`, `"stripe"`. |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `payment_return_url` | Optional | string | Where Flint sends the buyer after a redirect or authentication step, adding only payment_intent_id for a payment, or payment_method_id for a setup. The completion message uses type flint.payment_action.completed and exactly that one subject key. Without it, the step ends on a Flint page that tells the parent or opener the step completed. Accepts an absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript, data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode also accepts HTTP loopback URLs. With a checkout credential on order pay, omit payment_return_url; checkout sessions use their own configured return URL. minLength: `1`. maxLength: `2048`. |
| `payment_source` | Optional | [PaymentSourceCredentialInput](../models/PaymentSourceCredentialInput.md#paymentsourcecredentialinput) | Credential to confirm this payment. Omit it to continue with the attached source: confirm requires_confirmation, or refresh requires_action without starting another payment. Required when no source is attached. The credential you provide to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation token. |
| `save_payment_method` | Optional | boolean | Saves the card this confirmation collects for the standalone payment intent's customer or the owning order's customer, with usage off_session, so you can charge it later without the buyer: subscriptions, automatic invoices, or the customer's default. Send true only when the buyer agreed to that on your page. Requires customer_id on the standalone payment intent or owning order (otherwise configuration_required names that resource), a card, Apple Pay, or Google Pay credential in payment_source.stripe.confirmation_token (created with setup_future_usage off_session) or payment_source.stripe.payment_method, and payments.payment_methods.write. Flint saves the card once the payment is approved, sends payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks the buyer to authenticate, current_payment_action carries it; that one authentication also covers the saved card. A continuation keeps the original save choice. Order pay keeps its separate on-session checkout card-saving behavior. Default: `false`. |


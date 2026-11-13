[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmPaymentIntentRequestInput

The request body for: Confirm payment intent.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_ip_address` | Optional | string | minLength: `1`. maxLength: `64`. Input only. |
| `client_action_type` | Optional | string | How to complete the authentication step. Flint's API returns a Stripe client secret only for client_action_type stripe. A url action opens in a redirect, popup, or iframe; Stripe's authentication page receives what it needs to run the challenge, including the client secret for hosted 3DS2. If a payment is confirmed with a payment method Flint didn't approve, Flint doesn't count the charge, returns it to the buyer, and the payment intent ends canceled with cancellation_reason payment_returned. The Stripe secret can also confirm the payment with another card, so use it only with handleNextAction. Reader credentials do not support url; omit client_action_type or send stripe for reader payments. Defaults to stripe for a new confirmation; omission on a continuation keeps the existing type. Default: `"stripe"`. Values: `"url"`, `"stripe"`. |
| `credential_type` | Required | string |  |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `payment_return_url` | Optional | string | Where Flint sends the buyer after a redirect or authentication step, adding only payment_intent_id for a payment, or payment_method_id for a setup. The completion message uses type flint.payment_action.completed and exactly that one subject key. Without it, the step ends on a Flint page that tells the parent or opener the step completed. Accepts an absolute HTTPS URL or an app return URL with a custom scheme other than http, javascript, data, file, blob, or about. Cannot contain credentials, a query, or a fragment. Test mode also accepts HTTP loopback URLs. With a checkout credential on order pay, omit payment_return_url; checkout sessions use their own configured return URL. minLength: `1`. maxLength: `2048`. |
| `payment_source_token` | Conditional | string | Opaque processor or browser payment source token. minLength: `1`. |
| `save_payment_method` | Optional | boolean | Default: `false`. |
| `customer_presence` | Conditional | string | Whether the customer is present for this payment. Defaults to present. Send absent to charge a saved card while the customer is away, such as for a no-show fee, damages, or a top-up. Flint then sends the charge to the card network as merchant-initiated, using the card's stored credential, so the bank can't ask the customer to authenticate. absent can be sent only with an API key or partner token, and only for a saved card whose usage is off_session; a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason payment_method_not_reusable. If the bank still requires authentication, the payment fails with status requires_payment_method and last_payment_error.code authentication_required. Ask the customer to pay while present instead of retrying. Default: `"present"`. Values: `"present"`, `"absent"`. |
| `payment_method_id` | Conditional | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `stripe` | Conditional | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe). |
| `reader_id` | Conditional | string | Active reader in this merchant and environment. Requires payments.readers.write in addition to this operation’s scopes. minLength: `1`. pattern: `^rdr_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"rdr_01KEZF7C007JA0G24M7SD6P46C"`. |
| `tip` | Conditional | [ReaderPaymentSourceTipInput](../models/ReaderPaymentSourceTipInput.md#readerpaymentsourcetipinput) | Optional tip collection on a supported smart reader. Tip collection settings for a payment presented on a smart reader. |

### ConfirmPaymentIntentRequestInput variant 1: `credential_type` = `"token"`

oneOf with credential_type: "token": The `token` variant of `ConfirmPaymentIntentRequest`..

- Required: `payment_source_token`.
- Undeclared: `customer_presence`, `payment_method_id`, `stripe`, `reader_id`, `tip`.
- Constraints for `buyer_ip_address`: The buyer's IP address, for risk screening, when your server pays on the buyer's behalf. Write-only.
- Constraints for `credential_type`: Values: `"token"`.
- Constraints for `save_payment_method`: On /confirm, saves cards only for standalone payment intents. Saves the card this confirmation collects for the payment intent's customer, with usage off_session, so you can charge it later without the buyer: subscriptions, automatic invoices, or the customer's default. Send true only when the buyer agreed to that on your page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token (created with setup_future_usage off_session) or payment_source_token, and payments.payment_methods.write. Flint saves the card once the payment is approved, sends payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks the buyer to authenticate, current_payment_action carries it; that one authentication also covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards using the checkout session's own credential.

### ConfirmPaymentIntentRequestInput variant 2: `credential_type` = `"payment_method"`, `save_payment_method` = `false`

oneOf with credential_type: "payment_method": The `payment_method` variant of `ConfirmPaymentIntentRequest`..

- Required: `payment_method_id`.
- Optional: `customer_presence`.
- Undeclared: `payment_source_token`, `stripe`, `reader_id`, `tip`.
- Constraints for `buyer_ip_address`: The buyer's IP address, for risk screening, when your server pays on the buyer's behalf. Write-only.
- Constraints for `credential_type`: Values: `"payment_method"`.
- Constraints for `save_payment_method`: On /confirm, saves cards only for standalone payment intents. Saves the card this confirmation collects for the payment intent's customer, with usage off_session, so you can charge it later without the buyer: subscriptions, automatic invoices, or the customer's default. Send true only when the buyer agreed to that on your page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token (created with setup_future_usage off_session) or payment_source_token, and payments.payment_methods.write. Flint saves the card once the payment is approved, sends payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks the buyer to authenticate, current_payment_action carries it; that one authentication also covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards using the checkout session's own credential. Values: `false`.

### ConfirmPaymentIntentRequestInput variant 3: `credential_type` = `"stripe_confirmation_token"`

oneOf with credential_type: "stripe_confirmation_token": The `stripe_confirmation_token` variant of `ConfirmPaymentIntentRequest`..

- Required: `stripe`.
- Undeclared: `payment_source_token`, `customer_presence`, `payment_method_id`, `reader_id`, `tip`.
- Constraints for `buyer_ip_address`: The buyer's IP address, for risk screening, when your server pays on the buyer's behalf. Write-only.
- Constraints for `credential_type`: Values: `"stripe_confirmation_token"`.
- Constraints for `save_payment_method`: On /confirm, saves cards only for standalone payment intents. Saves the card this confirmation collects for the payment intent's customer, with usage off_session, so you can charge it later without the buyer: subscriptions, automatic invoices, or the customer's default. Send true only when the buyer agreed to that on your page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token (created with setup_future_usage off_session) or payment_source_token, and payments.payment_methods.write. Flint saves the card once the payment is approved, sends payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks the buyer to authenticate, current_payment_action carries it; that one authentication also covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards using the checkout session's own credential.

### ConfirmPaymentIntentRequestInput variant 4: `credential_type` = `"attached"`, `save_payment_method` = `false`

oneOf with credential_type: "attached": Confirm using the payment source already attached..

- Undeclared: `payment_source_token`, `customer_presence`, `payment_method_id`, `stripe`, `reader_id`, `tip`.
- Constraints for `buyer_ip_address`: The buyer's IP address, for risk screening, when your server pays on the buyer's behalf. Write-only.
- Constraints for `credential_type`: Values: `"attached"`.
- Constraints for `save_payment_method`: On /confirm, saves cards only for standalone payment intents. Saves the card this confirmation collects for the payment intent's customer, with usage off_session, so you can charge it later without the buyer: subscriptions, automatic invoices, or the customer's default. Send true only when the buyer agreed to that on your page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token (created with setup_future_usage off_session) or payment_source_token, and payments.payment_methods.write. Flint saves the card once the payment is approved, sends payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks the buyer to authenticate, current_payment_action carries it; that one authentication also covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards using the checkout session's own credential. Values: `false`.

### ConfirmPaymentIntentRequestInput variant 5: `credential_type` = `"reader"`

oneOf with credential_type: "reader": The `reader` variant of `ConfirmPaymentIntentRequest`..

- Condition: not (present(`save_payment_method`) and `save_payment_method`: Values: `true`.).
- Condition: not (present(`buyer_ip_address`)).
- Required: `reader_id`.
- Optional: `tip`.
- Undeclared: `payment_source_token`, `customer_presence`, `payment_method_id`, `stripe`.
- Constraints for `buyer_ip_address`: Not accepted for a payment presented on a reader.
- Constraints for `credential_type`: Selects payment collection on a reader. Values: `"reader"`.
- Constraints for `save_payment_method`: Send false or omit it. A card read on a reader isn't saved.

### ConfirmPaymentIntentRequestInput variant 3.stripe

Stripe credential collected for this payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `confirmation_token` | Required | string | Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength: `1`. |


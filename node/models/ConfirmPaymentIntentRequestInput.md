[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## ConfirmPaymentIntentRequestInput

Request input. Response: [ConfirmPaymentIntentRequest](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest).

The request body for: Confirm payment intent.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `buyer_ip_address` | Optional | string | The buyer's IP address, for risk screening, when your server pays on the buyer's behalf. Write-only. minLength: `1`. maxLength: `64`. Input only. |
| `credential_type` | Required | string |  |
| `expected_version` | Optional | integer | Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: `uint64`. minimum: `1`. |
| `payment_source_token` | Conditional | string | Opaque processor or browser payment source token. minLength: `1`. |
| `save_payment_method` | Optional | boolean | On /confirm, saves cards only for standalone payment intents. Saves the card this confirmation collects for the payment intent's customer, with usage off_session, so you can charge it later without the buyer: subscriptions, automatic invoices, or the customer's default. Send true only when the buyer agreed to that on your page. Requires customer_id on the payment intent, a card, Apple Pay, or Google Pay credential in stripe.confirmation_token (created with setup_future_usage off_session) or payment_source_token, and payments.payment_methods.write. Flint saves the card once the payment is approved, sends payment_method.activated, and sets payment_source.card.payment_method_id. If the bank asks the buyer to authenticate, current_payment_action carries it; that one authentication also covers the saved card. For order-owned payment intents, POST /v1/orders/{order_id}/pay saves only on_session cards using the checkout session's own credential. Default: `false`. |
| `customer_presence` | Conditional | string | Whether the customer is present for this payment. Defaults to present. Send absent to charge a saved card while the customer is away, such as for a no-show fee, damages, or a top-up. Flint then sends the charge to the card network as merchant-initiated, using the card's stored credential, so the bank can't ask the customer to authenticate. absent can be sent only with an API key or partner token, and only for a saved card whose usage is off_session; a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason payment_method_not_reusable. If the bank still requires authentication, the payment fails with status requires_payment_method and last_payment_error.code authentication_required. Ask the customer to pay while present instead of retrying. Default: `"present"`. Values: `"present"`, `"absent"`. |
| `payment_method_id` | Conditional | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `stripe` | Conditional | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe). |

### ConfirmPaymentIntentRequestInput variant 1: `credential_type` = `"token"`

oneOf with credential_type: "token": The `token` variant of `ConfirmPaymentIntentRequest`..

- Required: `payment_source_token`.
- Undeclared: `customer_presence`, `payment_method_id`, `stripe`.
- Constraints for `credential_type`: Values: `"token"`.

### ConfirmPaymentIntentRequestInput variant 2: `credential_type` = `"payment_method"`, `save_payment_method` = `false`

oneOf with credential_type: "payment_method": The `payment_method` variant of `ConfirmPaymentIntentRequest`..

- Required: `payment_method_id`.
- Optional: `customer_presence`.
- Undeclared: `payment_source_token`, `stripe`.
- Constraints for `credential_type`: Values: `"payment_method"`.
- Constraints for `save_payment_method`: Values: `false`.

### ConfirmPaymentIntentRequestInput variant 3: `credential_type` = `"stripe_confirmation_token"`

oneOf with credential_type: "stripe_confirmation_token": The `stripe_confirmation_token` variant of `ConfirmPaymentIntentRequest`..

- Required: `stripe`.
- Undeclared: `payment_source_token`, `customer_presence`, `payment_method_id`.
- Constraints for `credential_type`: Values: `"stripe_confirmation_token"`.

### ConfirmPaymentIntentRequestInput variant 4: `credential_type` = `"attached"`, `save_payment_method` = `false`

oneOf with credential_type: "attached": Confirm using the payment source already attached..

- Undeclared: `payment_source_token`, `customer_presence`, `payment_method_id`, `stripe`.
- Constraints for `credential_type`: Values: `"attached"`.
- Constraints for `save_payment_method`: Values: `false`.

### ConfirmPaymentIntentRequestInput variant 3.stripe

Stripe credential collected for this payment.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `confirmation_token` | Required | string | Stripe confirmation token you created with Stripe.js from `payment_collection.stripe`. minLength: `1`. |


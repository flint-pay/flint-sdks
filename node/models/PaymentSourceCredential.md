[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredential

The credential you provide to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation token.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string |  |
| `token` | Conditional | string | Opaque processor or browser payment source token. minLength: `1`. |
| `customer_presence` | Conditional | string | Whether the customer is present for this payment. Defaults to present. Send absent to charge a saved card while the customer is away, such as for a no-show fee, damages, or a top-up. Flint then sends the charge to the card network as merchant-initiated, using the card's stored credential, so the bank can't ask the customer to authenticate. absent can be sent only with an API key or partner token, and only for a saved card whose usage is off_session; a card the customer saved for checkout only returns 409 ACTION_NOT_ALLOWED with reason payment_method_not_reusable. If the bank still requires authentication, the payment fails with status requires_payment_method and last_payment_error.code authentication_required. Ask the customer to pay while present instead of retrying. Default: `"present"`. Values: `"present"`, `"absent"`. |
| `payment_method_id` | Conditional | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. Example: `"pm_01KEZF7C0034B248TXXE4NXYFZ"`. |
| `stripe` | Conditional | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe). |

### PaymentSourceCredential variant 1: `credential_type` = `"token"`

oneOf with credential_type: "token": The `token` variant of `PaymentSourceCredential`..

- Required: `token`.
- Undeclared: `customer_presence`, `payment_method_id`, `stripe`.
- Constraints for `credential_type`: Values: `"token"`.

### PaymentSourceCredential variant 2: `credential_type` = `"payment_method"`

oneOf with credential_type: "payment_method": The `payment_method` variant of `PaymentSourceCredential`..

- Required: `payment_method_id`.
- Optional: `customer_presence`.
- Undeclared: `token`, `stripe`.
- Constraints for `credential_type`: Values: `"payment_method"`.

### PaymentSourceCredential variant 3: `credential_type` = `"stripe_confirmation_token"`

oneOf with credential_type: "stripe_confirmation_token": The `stripe_confirmation_token` variant of `PaymentSourceCredential`..

- Required: `stripe`.
- Undeclared: `token`, `customer_presence`, `payment_method_id`.
- Constraints for `credential_type`: Values: `"stripe_confirmation_token"`.

### PaymentSourceCredential variant 3.stripe

Field definitions: [ConfirmPaymentIntentRequest variant 3.stripe](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe).


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredential

The credential you provide to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation token.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string |  |
| `token` | Conditional | string | Opaque processor or browser payment source token. minLength: `1`. |
| `payment_method_id` | Conditional | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. |
| `stripe` | Conditional | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe). |

### PaymentSourceCredential variant 1: `credential_type` = `"token"`

oneOf variant 1: The `token` variant of `PaymentSourceCredential`..

- Required: `token`.
- Undeclared: `payment_method_id`, `stripe`.
- Constraints for `credential_type`: Values: `"token"`.

### PaymentSourceCredential variant 2: `credential_type` = `"payment_method"`

oneOf variant 2: The `payment_method` variant of `PaymentSourceCredential`..

- Required: `payment_method_id`.
- Undeclared: `token`, `stripe`.
- Constraints for `credential_type`: Values: `"payment_method"`.

### PaymentSourceCredential variant 3: `credential_type` = `"stripe_confirmation_token"`

oneOf variant 3: The `stripe_confirmation_token` variant of `PaymentSourceCredential`..

- Required: `stripe`.
- Undeclared: `token`, `payment_method_id`.
- Constraints for `credential_type`: Values: `"stripe_confirmation_token"`.

### PaymentSourceCredential variant 3.stripe

Field definitions: [ConfirmPaymentIntentRequest variant 3.stripe](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe).


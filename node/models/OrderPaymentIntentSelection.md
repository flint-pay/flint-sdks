[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelection

Identifies a payment intent to confirm for an order and the credential to use: a token, a saved payment method, a Stripe confirmation token, or the attached source.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string |  |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. |
| `token` | Conditional | string | Opaque processor or browser payment source token. minLength: `1`. |
| `payment_method_id` | Conditional | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. |
| `stripe` | Conditional | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe). |

### OrderPaymentIntentSelection variant 1: `credential_type` = `"token"`

oneOf with credential_type: "token": The `token` variant of `OrderPaymentIntentSelection`..

- Required: `token`.
- Undeclared: `payment_method_id`, `stripe`.
- Constraints for `credential_type`: Values: `"token"`.

### OrderPaymentIntentSelection variant 2: `credential_type` = `"payment_method"`

oneOf with credential_type: "payment_method": The `payment_method` variant of `OrderPaymentIntentSelection`..

- Required: `payment_method_id`.
- Undeclared: `token`, `stripe`.
- Constraints for `credential_type`: Values: `"payment_method"`.

### OrderPaymentIntentSelection variant 3: `credential_type` = `"stripe_confirmation_token"`

oneOf with credential_type: "stripe_confirmation_token": The `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`..

- Required: `stripe`.
- Undeclared: `token`, `payment_method_id`.
- Constraints for `credential_type`: Values: `"stripe_confirmation_token"`.

### OrderPaymentIntentSelection variant 4: `credential_type` = `"attached"`

oneOf with credential_type: "attached": Confirm using the payment source already attached..

- Undeclared: `token`, `payment_method_id`, `stripe`.
- Constraints for `credential_type`: Values: `"attached"`.

### OrderPaymentIntentSelection variant 3.stripe

Field definitions: [ConfirmPaymentIntentRequest variant 3.stripe](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe).


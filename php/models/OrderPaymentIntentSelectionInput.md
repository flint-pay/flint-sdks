[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelectionInput

Identifies a payment intent to confirm for an order and the credential to use: a token, a saved payment method, a Stripe confirmation token, or the attached source.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string |  |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. |
| `token` | Conditional | string | Opaque processor or browser payment source token. minLength: `1`. |
| `payment_method_id` | Conditional | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. |
| `stripe` | Conditional | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe). |

### OrderPaymentIntentSelectionInput variant 1: `credential_type` = `"token"`

oneOf variant 1: The `token` variant of `OrderPaymentIntentSelection`..

- Required: `token`.
- Undeclared: `payment_method_id`, `stripe`.
- Constraints for `credential_type`: Values: `"token"`.

### OrderPaymentIntentSelectionInput variant 2: `credential_type` = `"payment_method"`

oneOf variant 2: The `payment_method` variant of `OrderPaymentIntentSelection`..

- Required: `payment_method_id`.
- Undeclared: `token`, `stripe`.
- Constraints for `credential_type`: Values: `"payment_method"`.

### OrderPaymentIntentSelectionInput variant 3: `credential_type` = `"stripe_confirmation_token"`

oneOf variant 3: The `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`..

- Required: `stripe`.
- Undeclared: `token`, `payment_method_id`.
- Constraints for `credential_type`: Values: `"stripe_confirmation_token"`.

### OrderPaymentIntentSelectionInput variant 4: `credential_type` = `"attached"`

oneOf variant 4: Confirm using the payment source already attached..

- Undeclared: `token`, `payment_method_id`, `stripe`.
- Constraints for `credential_type`: Values: `"attached"`.

### OrderPaymentIntentSelectionInput variant 3.stripe

Field definitions: [ConfirmPaymentIntentRequestInput variant 3.stripe](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe).


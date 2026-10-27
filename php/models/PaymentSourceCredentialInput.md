[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialInput

The credential you provide to pay an order: a payment source token, a saved payment method ID, or a Stripe confirmation token.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `token` | Conditional | string | Opaque processor or browser payment source token. minLength: `1`. |
| `payment_method_id` | Conditional | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. |
| `stripe` | Conditional | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe). |

### PaymentSourceCredentialInput variant 1

oneOf variant 1.

- Required: `token`.
- Undeclared: `payment_method_id`, `stripe`.

### PaymentSourceCredentialInput variant 2

oneOf variant 2.

- Required: `payment_method_id`.
- Undeclared: `token`, `stripe`.

### PaymentSourceCredentialInput variant 3

oneOf variant 3.

- Required: `stripe`.
- Undeclared: `token`, `payment_method_id`.

### PaymentSourceCredentialInput variant 3.stripe

Field definitions: [ConfirmPaymentIntentRequestInput variant 3.stripe](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe).


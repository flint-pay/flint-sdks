[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelection

Identifies a payment intent to confirm for an order and the credential to use: a token, a saved payment method, a Stripe confirmation token, or the attached source.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. |
| `token` | Conditional | string | Opaque processor or browser payment source token. minLength: `1`. |
| `payment_method_id` | Conditional | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. |
| `stripe` | Conditional | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe). |

### OrderPaymentIntentSelection variant 1

oneOf variant 1.

- Required: `token`.
- Undeclared: `payment_method_id`, `stripe`.

### OrderPaymentIntentSelection variant 2

oneOf variant 2.

- Required: `payment_method_id`.
- Undeclared: `token`, `stripe`.

### OrderPaymentIntentSelection variant 3

oneOf variant 3.

- Required: `stripe`.
- Undeclared: `token`, `payment_method_id`.

### OrderPaymentIntentSelection variant 4

oneOf variant 4: Confirm using the payment source already attached..

- Undeclared: `token`, `payment_method_id`, `stripe`.

### OrderPaymentIntentSelection variant 3.stripe

Field definitions: [ConfirmPaymentIntentRequest variant 3.stripe](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe).


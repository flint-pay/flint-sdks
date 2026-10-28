[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelectionStripeConfirmationToken

The `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"stripe_confirmation_token"`. |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. |
| `stripe` | Required | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe). |

### OrderPaymentIntentSelectionStripeConfirmationToken.stripe

Field definitions: [ConfirmPaymentIntentRequest variant 3.stripe](../models/ConfirmPaymentIntentRequest.md#confirmpaymentintentrequest-variant-3stripe).


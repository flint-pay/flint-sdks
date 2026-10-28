[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OrderPaymentIntentSelectionStripeConfirmationTokenInput

The `stripe_confirmation_token` variant of `OrderPaymentIntentSelection`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"stripe_confirmation_token"`. |
| `payment_intent_id` | Required | string | Payment intent to confirm. minLength: `1`. |
| `stripe` | Required | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe). |

### OrderPaymentIntentSelectionStripeConfirmationTokenInput.stripe

Field definitions: [ConfirmPaymentIntentRequestInput variant 3.stripe](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe).


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialStripeConfirmationTokenInput

The `stripe_confirmation_token` variant of `PaymentSourceCredential`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"stripe_confirmation_token"`. |
| `stripe` | Required | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe). |

### PaymentSourceCredentialStripeConfirmationTokenInput.stripe

Field definitions: [ConfirmPaymentIntentRequestInput variant 3.stripe](../models/ConfirmPaymentIntentRequestInput.md#confirmpaymentintentrequestinput-variant-3stripe).


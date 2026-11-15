[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialStripeConfirmationTokenInput

The `stripe_confirmation_token` variant of `PaymentSourceCredential`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Selects the credential supplied for this payment. Values: `"stripe_confirmation_token"`. |
| `stripe` | Required | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/PaymentSourceCredentialInput.md#paymentsourcecredentialinput-variant-2stripe). |

### PaymentSourceCredentialStripeConfirmationTokenInput.stripe

Field definitions: [PaymentSourceCredentialInput variant 2.stripe](../models/PaymentSourceCredentialInput.md#paymentsourcecredentialinput-variant-2stripe).


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialStripePaymentMethodInput

The `stripe_payment_method` variant of `PaymentSourceCredential`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Selects the credential supplied for this payment. Values: `"stripe_payment_method"`. |
| `stripe` | Required | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/PaymentSourceCredentialInput.md#paymentsourcecredentialinput-variant-3stripe). |

### PaymentSourceCredentialStripePaymentMethodInput.stripe

Field definitions: [PaymentSourceCredentialInput variant 3.stripe](../models/PaymentSourceCredentialInput.md#paymentsourcecredentialinput-variant-3stripe).


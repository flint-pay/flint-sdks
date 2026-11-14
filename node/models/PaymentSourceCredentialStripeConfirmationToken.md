[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialStripeConfirmationToken

The `stripe_confirmation_token` variant of `PaymentSourceCredential`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Selects the credential supplied for this payment. Values: `"stripe_confirmation_token"`. |
| `stripe` | Required | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/PaymentSourceCredential.md#paymentsourcecredential-variant-2stripe). |

### PaymentSourceCredentialStripeConfirmationToken.stripe

Field definitions: [PaymentSourceCredential variant 2.stripe](../models/PaymentSourceCredential.md#paymentsourcecredential-variant-2stripe).


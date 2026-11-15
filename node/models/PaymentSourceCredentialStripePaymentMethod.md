[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialStripePaymentMethod

The `stripe_payment_method` variant of `PaymentSourceCredential`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Selects the credential supplied for this payment. Values: `"stripe_payment_method"`. |
| `stripe` | Required | object | Stripe credential collected for this payment. `stripe`: [field definitions](../models/PaymentSourceCredential.md#paymentsourcecredential-variant-3stripe). |

### PaymentSourceCredentialStripePaymentMethod.stripe

Field definitions: [PaymentSourceCredential variant 3.stripe](../models/PaymentSourceCredential.md#paymentsourcecredential-variant-3stripe).


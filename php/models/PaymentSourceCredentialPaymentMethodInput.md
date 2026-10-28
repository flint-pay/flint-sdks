[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialPaymentMethodInput

The `payment_method` variant of `PaymentSourceCredential`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"payment_method"`. |
| `payment_method_id` | Required | string | Saved Flint payment method ID belonging to the customer making this payment. minLength: `1`. |


[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialTokenInput

The `token` variant of `PaymentSourceCredential`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"token"`. |
| `token` | Required | string | Opaque processor or browser payment source token. minLength: `1`. |


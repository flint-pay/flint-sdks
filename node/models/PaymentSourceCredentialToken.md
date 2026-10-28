[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PaymentSourceCredentialToken

The `token` variant of `PaymentSourceCredential`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `credential_type` | Required | string | Values: `"token"`. |
| `token` | Required | string | Opaque processor or browser payment source token. minLength: `1`. |


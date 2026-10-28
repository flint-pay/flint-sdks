[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppCredentialPublicKeyRequestInput

The `public_key` variant of `CreatePartnerAppCredentialRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `public_key` | Required | [PartnerAppCredentialPublicKeyRequestInput](../models/PartnerAppCredentialPublicKeyRequestInput.md#partnerappcredentialpublickeyrequestinput) | The public JSON Web Key to register for client authentication. |
| `type` | Required | string | Credential type. Values: `"public_key"`. |


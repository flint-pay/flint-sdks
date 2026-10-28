[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppCredentialPublicKeyRequest

The `public_key` variant of `CreatePartnerAppCredentialRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `public_key` | Required | [PartnerAppCredentialPublicKeyRequest](../models/PartnerAppCredentialPublicKeyRequest.md#partnerappcredentialpublickeyrequest) | The public JSON Web Key to register for client authentication. |
| `type` | Required | string | Credential type. Values: `"public_key"`. |


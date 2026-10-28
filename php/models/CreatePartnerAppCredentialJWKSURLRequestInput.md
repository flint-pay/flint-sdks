[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppCredentialJWKSURLRequestInput

The `jwks_url` variant of `CreatePartnerAppCredentialRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `jwks_url` | Required | [PartnerAppCredentialJWKSURLRequestInput](../models/PartnerAppCredentialJWKSURLRequestInput.md#partnerappcredentialjwksurlrequestinput) | A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the credential. |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `type` | Required | string | Credential type. Values: `"jwks_url"`. |


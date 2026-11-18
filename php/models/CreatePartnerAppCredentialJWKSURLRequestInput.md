[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppCredentialJWKSURLRequestInput

The `jwks_url` variant of `CreatePartnerAppCredentialRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `jwks_url` | Required | [PartnerAppCredentialJWKSURLRequestInput](../models/PartnerAppCredentialJWKSURLRequestInput.md#partnerappcredentialjwksurlrequestinput) | The JSON Web Key Set URL to register. Required when type is jwks_url and not accepted otherwise. A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the credential. |
| `modes` | Optional | Array of string | Modes this credential can mint partner app tokens for, with grant_type=client_credentials or an authorization code exchange. Defaults to ["live", "test"]. Send ["test"] for a staging or CI deployment so its key can't mint live tokens. A mint for another mode returns 400 unauthorized_client. Can't be changed after creation. minItems: `1`. maxItems: `2`. uniqueItems: `true`. Items values: `"live"`, `"test"`. |
| `name` | Optional | string | Optional name to identify this credential. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: `1`. maxLength: `100`. |
| `type` | Required | string | Credential type. Values: `"jwks_url"`. |


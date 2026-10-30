[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppCredentialRequestInput

An immutable public key, JWKS URL, or workload identity credential for partner app client authentication.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `public_key` | Conditional | [PartnerAppCredentialPublicKeyRequestInput](../models/PartnerAppCredentialPublicKeyRequestInput.md#partnerappcredentialpublickeyrequestinput) | The public JSON Web Key to register for client authentication. |
| `type` | Required | string | Credential type. |
| `jwks_url` | Conditional | [PartnerAppCredentialJWKSURLRequestInput](../models/PartnerAppCredentialJWKSURLRequestInput.md#partnerappcredentialjwksurlrequestinput) | A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the credential. |
| `workload_identity` | Conditional | [PartnerAppCredentialWorkloadIdentityRequestInput](../models/PartnerAppCredentialWorkloadIdentityRequestInput.md#partnerappcredentialworkloadidentityrequestinput) | An external OIDC identity whose subject and claim conditions must match exactly the registered policy. |

### CreatePartnerAppCredentialRequestInput variant 1: `type` = `"public_key"`

oneOf with type: "public_key": The `public_key` variant of `CreatePartnerAppCredentialRequest`..

- Required: `public_key`.
- Undeclared: `jwks_url`, `workload_identity`.
- Constraints for `type`: Values: `"public_key"`.

### CreatePartnerAppCredentialRequestInput variant 2: `type` = `"jwks_url"`

oneOf with type: "jwks_url": The `jwks_url` variant of `CreatePartnerAppCredentialRequest`..

- Required: `jwks_url`.
- Undeclared: `public_key`, `workload_identity`.
- Constraints for `type`: Values: `"jwks_url"`.

### CreatePartnerAppCredentialRequestInput variant 3: `type` = `"workload_identity"`

oneOf with type: "workload_identity": The `workload_identity` variant of `CreatePartnerAppCredentialRequest`..

- Required: `workload_identity`.
- Undeclared: `public_key`, `jwks_url`.
- Constraints for `type`: Values: `"workload_identity"`.


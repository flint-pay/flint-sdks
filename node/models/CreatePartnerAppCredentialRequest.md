[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreatePartnerAppCredentialRequest

An immutable public key, JWKS URL, or workload identity credential for partner app client authentication.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `name` | Optional | string | Optional name to identify this credential. minLength: `1`. maxLength: `100`. |
| `public_key` | Conditional | [PartnerAppCredentialPublicKeyRequest](../models/PartnerAppCredentialPublicKeyRequest.md#partnerappcredentialpublickeyrequest) | The public JSON Web Key to register for client authentication. |
| `type` | Required | string | Credential type. |
| `jwks_url` | Conditional | [CheckoutGiftCardChallenge](../models/CheckoutGiftCardChallenge.md#checkoutgiftcardchallenge) | A public HTTPS JSON Web Key Set URL. Flint validates and fetches it before registering the credential. `jwks_url`: [field definitions](../models/CreatePartnerAppCredentialJWKSURLRequest.md#createpartnerappcredentialjwksurlrequestjwks_url). |
| `workload_identity` | Conditional | [PartnerAppCredentialWorkloadIdentityRequest](../models/PartnerAppCredentialWorkloadIdentityRequest.md#partnerappcredentialworkloadidentityrequest) | An external OIDC identity whose subject and claim conditions must match exactly the registered policy. |

### CreatePartnerAppCredentialRequest variant 1: `type` = `"public_key"`

oneOf variant 1: The `public_key` variant of `CreatePartnerAppCredentialRequest`..

- Required: `public_key`.
- Undeclared: `jwks_url`, `workload_identity`.
- Constraints for `type`: Values: `"public_key"`.

### CreatePartnerAppCredentialRequest variant 2: `type` = `"jwks_url"`

oneOf variant 2: The `jwks_url` variant of `CreatePartnerAppCredentialRequest`..

- Required: `jwks_url`.
- Undeclared: `public_key`, `workload_identity`.
- Constraints for `type`: Values: `"jwks_url"`.

### CreatePartnerAppCredentialRequest variant 3: `type` = `"workload_identity"`

oneOf variant 3: The `workload_identity` variant of `CreatePartnerAppCredentialRequest`..

- Required: `workload_identity`.
- Undeclared: `public_key`, `jwks_url`.
- Constraints for `type`: Values: `"workload_identity"`.

### CreatePartnerAppCredentialRequest variant 2.jwks_url

Field definitions: [CreatePartnerAppCredentialJWKSURLRequest.jwks_url](../models/CreatePartnerAppCredentialJWKSURLRequest.md#createpartnerappcredentialjwksurlrequestjwks_url).


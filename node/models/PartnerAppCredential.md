[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredential

An immutable partner app credential, including its authentication status and usage timestamps.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. |
| `jwks_url` | Optional | [PartnerAppCredentialJWKSURL](../models/PartnerAppCredentialJWKSURL.md#partnerappcredentialjwksurl) | A registered JWKS URL and its most recent successful fetch. |
| `last_used_at` | Required | string or null | When the credential last authenticated the app. Updated at most once an hour, so it can lag the latest use by up to an hour. `null` when the credential has never been used. Format: `date-time`. |
| `name` | Required | string or null | Name given to the credential when it was created. `null` when it has no name. |
| `partner_app_credential_id` | Required | string |  |
| `partner_app_id` | Required | string |  |
| `public_key` | Optional | [PartnerAppCredentialPublicKey](../models/PartnerAppCredentialPublicKey.md#partnerappcredentialpublickey) | A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint. |
| `status` | Required | string | Values: `"active"`, `"removed"`. |
| `type` | Required | string | Credential type. Currently public_key, jwks_url, or workload_identity. Values: `"public_key"`, `"jwks_url"`, `"workload_identity"`. |
| `workload_identity` | Optional | [PartnerAppCredentialWorkloadIdentity](../models/PartnerAppCredentialWorkloadIdentity.md#partnerappcredentialworkloadidentity) | The registered external OIDC issuer, exact subject, audience, and claim conditions. |


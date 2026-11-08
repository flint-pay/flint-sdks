[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppCredentialResponse

A response containing `PartnerAppCredential` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [PartnerAppCredential](../models/PartnerAppCredential.md#partnerappcredential) | Resource, collection, or operation result returned by this request. An immutable partner app credential, including its authentication status and usage timestamps. `data`: [field definitions](../models/PartnerAppCredentialResponse.md#partnerappcredentialresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### PartnerAppCredentialResponse.data

Resource, collection, or operation result returned by this request. An immutable partner app credential, including its authentication status and usage timestamps.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `jwks_url` | Optional | [PartnerAppCredentialJWKSURL](../models/PartnerAppCredentialJWKSURL.md#partnerappcredentialjwksurl) | A registered JWKS URL and its most recent successful fetch. `jwks_url`: [field definitions](../models/PartnerAppCredentialResponse.md#partnerappcredentialresponsedatajwks_url). |
| `last_used_at` | Required | string or null | When the credential last authenticated the app. Updated at most once an hour, so it can lag the latest use by up to an hour. `null` when the credential has never been used. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `name` | Required | string or null | Name given to the credential when it was created. `null` when it has no name. |
| `partner_app_credential_id` | Required | string | Unique identifier for this partner app credential, prefixed `pacr_`. Example: `"pacr_01KEZF7C005RDK44XFG5WF94BB"`. |
| `partner_app_id` | Required | string | Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `public_key` | Optional | [PartnerAppCredentialPublicKey](../models/PartnerAppCredentialPublicKey.md#partnerappcredentialpublickey) | A registered public JSON Web Key and its RFC 7638 SHA-256 thumbprint. |
| `status` | Required | string | Values: `"active"`, `"removed"`. |
| `type` | Required | string | Credential type. Currently public_key, jwks_url, or workload_identity. Values: `"public_key"`, `"jwks_url"`, `"workload_identity"`. |
| `workload_identity` | Optional | [PartnerAppCredentialWorkloadIdentity](../models/PartnerAppCredentialWorkloadIdentity.md#partnerappcredentialworkloadidentity) | The registered external OIDC issuer, exact subject, audience, and claim conditions. |

### PartnerAppCredentialResponse.data.jwks_url

A registered JWKS URL and its most recent successful fetch.

Field definitions: [shared fields](PartnerAppCredentialJWKSURLInput.md#partnerappcredentialjwksurlinput).

### PartnerAppCredentialResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).


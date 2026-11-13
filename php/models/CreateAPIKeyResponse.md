[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CreateAPIKeyResponse

A response containing `APIKeyWithSecret` data.

Response model.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `data` | Required | [APIKeyWithSecret](../models/APIKeyWithSecret.md#apikeywithsecret) | Resource, collection, or operation result returned by this request. An API key including its `secret_key`, returned by the calls that create or issue a key. A credential used to authenticate API requests. A credential used to authenticate API requests. `data`: [field definitions](../models/CreateAPIKeyResponse.md#createapikeyresponsedata). |
| `meta` | Optional | [ResponseMeta](../models/ResponseMeta.md#responsemeta) | Additional information about this response. Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings. `meta`: [field definitions](../models/DisputeResponse.md#disputeresponsemeta). |
| `request_id` | Required | string | Identifier of this API request, used to correlate logs and support requests. maxLength: `128`. pattern: `^req_[0-9A-HJKMNP-TV-Z]{26}$`. |

### CreateAPIKeyResponse.data

Resource, collection, or operation result returned by this request. An API key including its `secret_key`, returned by the calls that create or issue a key. A credential used to authenticate API requests.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Key access. Full and read_only resolve from the current scope catalog for the key's mode; restricted holds only its listed scopes. Granting full or read_only requires a freshly verified authorized user session, or a full-access API key in the key's mode or a live full-access key granting a test key. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `api_key_id` | Required | string | Unique identifier for this api key, prefixed `key_`. Example: `"key_01KEZF7C008CTC2G5V6J08M6S7"`. |
| `created_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `created_by` | Optional | [ResourceReference](../models/ResourceReference.md#resourcereference) | Who created this key: the API key or workload identity whose credential made the request, or else the user, including through the Dashboard, a CLI login, or an onboarding session. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Keys a workload token created before Flint recorded workload identity creators name the user who set up that workload identity. Filter the list with `created_by_type` and `created_by_id`. Absent when the creator is unavailable. A reference to another resource by `resource_type` and `resource_id`. `created_by`: [field definitions](../models/CreateAPIKeyResponse.md#createapikeyresponsedatacreated_by). |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `key_prefix` | Required | string |  |
| `last_used_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `name` | Required | string | maxLength: `100`. |
| `partner_app_install_id` | Required | string or null | The connected app install this key is linked to. The key is revoked when that install is revoked or loses its grant for this key's environment. Null when the key is unlinked. Never changes. pattern: `^pinst_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `revoked_at` | Optional | string | When this key was revoked, in RFC 3339 format. Present only for revoked keys. For keys revoked before revocation timestamps were recorded, this is the last update time. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Required | Array of string | The scopes the key holds now. For full and read_only keys this list grows when Flint adds scopes. Items values: [102 declared values](APIKeyInput.md#apikeyinput-scopes--values). |
| `status` | Required | string | Current key status. A non-revoked key is expired when expires_at is at or before the current time; otherwise it is active. Revoked keys remain revoked regardless of expires_at. Values: `"active"`, `"expired"`, `"revoked"`. |
| `supported_actions` | Required | Array of string | Lifecycle actions Flint accepts now. Active and expired keys can be revoked; revoked keys accept none. Items values: `"revoke"`. |
| `updated_at` | Required | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `version` | Required | integer | Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: `uint64`. minimum: `1`. |
| `secret_key` | Required | string | One-time secret returned only when the API key is created. |

### CreateAPIKeyResponse.data.created_by

Who created this key: the API key or workload identity whose credential made the request, or else the user, including through the Dashboard, a CLI login, or an onboarding session. An API key creator can belong to another mode, such as a live key that creates a sandbox key. Keys a workload token created before Flint recorded workload identity creators name the user who set up that workload identity. Filter the list with `created_by_type` and `created_by_id`. Absent when the creator is unavailable. A reference to another resource by `resource_type` and `resource_id`.

Field definitions: [shared fields](ResourceReferenceInput.md#resourcereferenceinput).

### CreateAPIKeyResponse.meta

Field definitions: [DisputeResponse.meta](../models/DisputeResponse.md#disputeresponsemeta).


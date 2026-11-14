[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## APIKeyAuthContext

Non-secret metadata for the calling credential, selected by auth_type.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Access level; scoped tokens always have restricted access. Values: `"full"`, `"read_only"`, `"restricted"`. |
| `api_key_id` | Required | string | ID of the API key. Example: `"key_01KEZF7C008CTC2G5V6J08M6S7"`. |
| `auth_type` | Required | string | Credential type that selects this object's fields. Values: `"api_key"`. |
| `expires_at` | Optional | string | Time the credential expires; absent for keys without an expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_id` | Required | string | Merchant the credential acts for. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Whether the credential acts in test or live mode. Values: `"test"`, `"live"`. |
| `name` | Required | string | Name of the key, CLI context, or workload identity. |
| `organization_id` | Optional | string | Organization selected by the key's access scope, when available. Example: `"org_01KEZF7C00EA57F19C2ZFWA7HJ"`. |
| `partner_app_install_id` | Required | string or null | ID of the partner app install. Null when the API key is not linked to an install. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `sandbox_id` | Optional | string | Sandbox the credential is bound to, present only in test mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Required | Array of string | Current granted API scopes, resolved at request time for full and read_only keys. |


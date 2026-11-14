[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## WorkloadIdentityAuthContext

Non-secret metadata for the calling credential, selected by auth_type.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Access level; scoped tokens always have restricted access. Values: `"restricted"`. |
| `auth_type` | Required | string | Credential type that selects this object's fields. Values: `"workload_identity"`. |
| `expires_at` | Required | string | Time the credential expires; absent for keys without an expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_id` | Required | string | Merchant the credential acts for. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Whether the credential acts in test or live mode. Values: `"test"`, `"live"`. |
| `name` | Required | string | Name of the key, CLI context, or workload identity. |
| `sandbox_id` | Optional | string | Sandbox the credential is bound to, present only in test mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Required | Array of string | Current granted API scopes, resolved at request time for full and read_only keys. |
| `workload_identity_id` | Required | string | ID of the workload identity. Example: `"wid_01KEZF7C00GKCN7Y1482VY8TWP"`. |


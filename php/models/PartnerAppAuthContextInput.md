[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## PartnerAppAuthContextInput

Non-secret metadata for the calling credential, selected by auth_type.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Access level; scoped tokens always have restricted access. Values: `"restricted"`. |
| `auth_type` | Required | string | Credential type that selects this object's fields. Values: `"partner_app"`. |
| `expires_at` | Required | string | Time the credential expires; absent for keys without an expiry. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_id` | Required | string | Merchant the credential acts for. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Whether the credential acts in test or live mode. Values: `"test"`, `"live"`. |
| `partner_app_id` | Required | string | ID of the partner app. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_install_id` | Required | (string or null) and string | ID of the partner app install. Null when the API key is not linked to an install. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `sandbox_id` | Optional | string | Sandbox the credential is bound to, present only in test mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Required | Array of string | Current granted API scopes, resolved at request time for full and read_only keys. |


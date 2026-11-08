[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## AuthContext

Identity and access of the current developer credential: whether it is an API key or OAuth, its merchant, environment, sandbox, and scopes.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `api_key_id` | Optional | string | Example: `"key_01KEZF7C008CTC2G5V6J08M6S7"`. |
| `auth_type` | Required | string | Values: `"api_key"`, `"oauth"`, `"workload_identity"`, `"partner_app"`. |
| `context_id` | Optional | string | Example: `"ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"`. |
| `environment` | Required | string | Values: `"sandbox"`, `"live"`. |
| `expires_at` | Optional | string | RFC3339 timestamp. Format: `date-time`. Example: `"2026-08-02T16:00:00Z"`. |
| `merchant_id` | Required | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `name` | Optional | string |  |
| `oauth_grant_id` | Optional | string | Example: `"clg_01KEZF7C00F8Q8XM1TZ6Y1GB31"`. |
| `oauth_session_id` | Optional | string | Example: `"session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"`. |
| `organization_id` | Optional | string | Example: `"org_01KEZF7C00EA57F19C2ZFWA7HJ"`. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Required | Array of string |  |
| `workload_identity_id` | Optional | string | Example: `"wid_01KEZF7C00GKCN7Y1482VY8TWP"`. |


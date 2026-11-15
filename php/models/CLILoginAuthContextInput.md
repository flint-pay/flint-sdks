[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLILoginAuthContextInput

Non-secret metadata for the calling credential, selected by auth_type.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access` | Required | string | Access level; scoped tokens always have restricted access. Values: `"restricted"`. |
| `auth_type` | Required | string | Credential type that selects this object's fields. Values: `"cli_login"`. |
| `context_id` | Required | string | ID of the selected CLI context. Example: `"ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"`. |
| `merchant_id` | Required | string | Merchant the credential acts for. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Required | string | Whether the credential acts in test or live mode. Values: `"test"`, `"live"`. |
| `name` | Required | string | Name of the key, CLI context, or workload identity. |
| `oauth_grant_id` | Required | string | ID of the CLI login grant. Example: `"clg_01KEZF7C00F8Q8XM1TZ6Y1GB31"`. |
| `oauth_session_id` | Required | string | ID of the CLI session. Example: `"session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"`. |
| `sandbox_id` | Optional | string | Sandbox the credential is bound to, present only in test mode. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scopes` | Required | Array of string | Current granted API scopes, resolved at request time for full and read_only keys. |
| `user_id` | Required | string | User the session acts for. Example: `"usr_01KEZF7C00YC8757ZYP9727JM0"`. |


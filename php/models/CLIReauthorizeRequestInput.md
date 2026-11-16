[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## CLIReauthorizeRequestInput

The request body for: Review CLI session consent.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | The public client ID, always `flint-cli`. The client has no secret: a client_secret field or an Authorization header returns invalid_client. Example: `"flint-cli"`. Values: `"flint-cli"`. |
| `context_id` | Optional | string | ID of one of the session's contexts, from the `id` of an entry in the contexts list. An ID that isn't in the session returns invalid_context. Required with scope_mode. minLength: `1`. Example: `"ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"`. |
| `device_name` | Optional | string | Optional compatibility field for the computer name sent by released Flint CLI versions. Accepted and ignored. |
| `merchant_id` | Optional | string | ID of the merchant this resource belongs to. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Optional | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `platform` | Optional | string | Optional compatibility field for the operating system sent by released Flint CLI versions. Accepted and ignored. |
| `refresh_token` | Required | string | The session's current refresh token. This request reads the session and doesn't rotate the token. An unknown, expired, or revoked token returns invalid_grant. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scope` | Required | string | Required space-separated public API scope names. Only requested scopes approved in the browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: `1`. |
| `scope_mode` | Optional | string | Set to `additive` to ask for more scopes in the one context named by context_id. The approved scopes are added to the scopes the context already has, and the session's other contexts are kept. Set to `preserve` to review every context starting from its current permissions; scopes can be retained only in the same active context. Requires context_id. Values: `"additive"`, `"preserve"`. |
| `session_mode` | Required | string | Required, and must be `contexts`. Unless scope_mode is `additive`, the contexts the user approves become the session's contexts: any other context is removed and its tokens stop working. Values: `"contexts"`. |


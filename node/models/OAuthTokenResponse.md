[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OAuthTokenResponse

The response for: Exchange an OAuth token.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access_token` | Required | string | The access token. Send it as a bearer token. Partner app tokens start with `fpat_` and workload identity tokens with `fwat_`. minLength: `1`. |
| `context_id` | Optional | string | ID of the CLI context the access token is for. minLength: `1`. Example: `"ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"`. |
| `environment_grant_id` | Optional | string | ID of the grant that authorizes the partner app in this environment, from a code exchange. Each mode has its own grant. Example: `"egrt_01KEZF7C00MQQDDB7YWGXV3MXY"`. |
| `expires_in` | Required | integer | Seconds until the access token expires, from 1 to 86400. Partner app tokens last 900 and workload identity tokens at most 3600. minimum: `1`. maximum: `86400`. |
| `issued_token_type` | Optional | string | Present for workload identity token exchange. Identifies the issued credential as an access token. Values: `"urn:ietf:params:oauth:token-type:access_token"`. |
| `merchant_id` | Optional | string | Merchant the token acts for: the installing merchant for a code exchange, the bound merchant for a merchant-bound partner app token, or the workload identity's merchant. Absent from an app-level partner app token, which names the merchant per request. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Optional | string | The token's mode, live or test. Present for partner app tokens and workload access tokens. Values: `"test"`, `"live"`. |
| `oauth_session_id` | Optional | string | ID of the CLI OAuth session. It stays the same through every refresh. minLength: `1`. Example: `"session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"`. |
| `partner_app_id` | Optional | string | ID of the partner app the token was issued to. Example: `"papp_01KEZF7C00Y8VMXYZ1GNPP3WHV"`. |
| `partner_app_install_id` | Optional | string | ID of the partner app's install on this merchant, from a code exchange. Example: `"pinst_01KEZF7C003HVKZR3GZAW6AFAZ"`. |
| `refresh_token` | Optional | string | Rotating flint-cli refresh token. Absent for partner app tokens and workload access tokens. minLength: `1`. |
| `sandbox_id` | Optional | string | Present exactly when mode is test, except for partner app tokens from client_credentials, which use each merchant's test grant. Example: `"test_01KEZF7C00JC77HTMTB2XHNPE0"`. |
| `scope` | Optional | string | Space-separated granted scope, in the vocabulary the client requested: permission IDs for a partner code exchange, API scope names for flint-cli and workload identities. Empty when a workload identity has no scopes. Absent from client_credentials responses, because a partner app token's scopes are each install's grant. |
| `token_type` | Required | string | The token type, as RFC 6749 defines it. Values: `"Bearer"`. |
| `workload_identity_id` | Optional | string | Workload identity that authorized the token exchange. Present only for workload access tokens. Example: `"wid_01KEZF7C00GKCN7Y1482VY8TWP"`. |


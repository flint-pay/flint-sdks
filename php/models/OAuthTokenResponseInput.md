[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OAuthTokenResponseInput

The response for: Exchange an OAuth token.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `access_token` | Required | string | minLength: `1`. |
| `context_id` | Optional | string | minLength: `1`. |
| `environment_grant_id` | Optional | string |  |
| `expires_in` | Required | integer | minimum: `1`. maximum: `86400`. |
| `issued_token_type` | Optional | string | Present for workload identity token exchange. Identifies the issued credential as an access token. Values: `"urn:ietf:params:oauth:token-type:access_token"`. |
| `merchant_id` | Optional | string |  |
| `mode` | Optional | string | Values: `"test"`, `"live"`. |
| `oauth_session_id` | Optional | string | minLength: `1`. |
| `partner_app_id` | Optional | string |  |
| `partner_app_install_id` | Optional | string |  |
| `refresh_token` | Optional | string | Rotating refresh token for partner apps and flint-cli. Absent for workload access tokens. minLength: `1`. |
| `sandbox_id` | Optional | string | Present exactly when mode is test. |
| `scope` | Required | string | Space-separated granted scope, in the vocabulary the client requested: permission IDs for partner apps, API scope names for flint-cli and workload identities. Empty when a workload identity has no scopes. |
| `token_type` | Required | string | Values: `"Bearer"`. |
| `workload_identity_id` | Optional | string | Workload identity that authorized the token exchange. Present only for workload access tokens. |


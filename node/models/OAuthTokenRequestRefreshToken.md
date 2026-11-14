[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OAuthTokenRequestRefreshToken

The `refresh_token` variant of `OAuthTokenRequest`.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_assertion` | Optional | string | Signed RFC 7523 JWT for partner client authentication. Send client_id and client_assertion_type, without HTTP Basic or client_secret. minLength: `1`. maxLength: `8192`. |
| `client_assertion_type` | Optional | string | Required with client_assertion for partner private_key_jwt authentication. Values: `"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"`. |
| `client_id` | Optional | string | Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange. Example: `"flint-cli"`. |
| `client_secret` | Optional | string | Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends a secret. Forbidden for workload identity token exchange. |
| `code` | Optional | string | Partner authorization code, required for authorization_code. |
| `code_verifier` | Optional | string | Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength: `43`. maxLength: `128`. pattern: `^[A-Za-z0-9\-._~]+$`. |
| `context_id` | Optional | string | flint-cli only. Example: `"ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"`. |
| `device_code` | Optional | string | flint-cli device code, required for the device_code grant. |
| `grant_type` | Required | string | OAuth grant to exchange. Partner apps use client_credentials or authorization_code; flint-cli uses device_code or refresh_token; workload identities use token-exchange. Values: `"refresh_token"`. |
| `merchant_id` | Optional | string | Binds the minted partner app token to this merchant, for client_credentials. Omit for an app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks only the ID's format here. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Optional | string | Mode of the partner app token to mint, test or live. Required for client_credentials. Each token is for one mode. Values: `"test"`, `"live"`. |
| `redirect_uri` | Optional | string | The redirect URI the authorization request used, character for character. Required for a code from the consent screen. Omit it for a code from a merchant signup, which had no authorization request: a signup code sent with one, or a consent-screen code sent without one, returns invalid_grant. |
| `refresh_token` | Required | string | flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh tokens; a partner client that sends this grant gets unauthorized_client. |
| `requested_token_type` | Optional | string | Optional requested credential type for token exchange. Only access tokens are supported. Values: `"urn:ietf:params:oauth:token-type:access_token"`. |
| `scope` | Optional | string | flint-cli and workload identities: optional subset of API scope names for this access token. Partner apps: omit. Partner app tokens carry each install's granted permissions, and client_credentials refuses scope with invalid_scope. |
| `subject_token` | Optional | string | JWT from the workload identity's external issuer. Required for token exchange. minLength: `1`. maxLength: `8192`. |
| `subject_token_type` | Optional | string | Format of subject_token. Required for token exchange. Values: `"urn:ietf:params:oauth:token-type:jwt"`, `"urn:ietf:params:oauth:token-type:id_token"`. |
| `workload_identity_id` | Optional | string | Configured workload identity to match against the verified subject token. Required for token exchange. Example: `"wid_01KEZF7C00GKCN7Y1482VY8TWP"`. |


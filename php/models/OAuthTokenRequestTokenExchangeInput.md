[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OAuthTokenRequestTokenExchangeInput

The `urn:ietf:params:oauth:grant-type:token-exchange` variant of `OAuthTokenRequest`.

Request input.

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_assertion` | Optional | string | Signed RFC 7523 JWT for partner client authentication. Send client_id and client_assertion_type, without HTTP Basic or client_secret. minLength: `1`. maxLength: `8192`. |
| `client_assertion_type` | Optional | string | Required with client_assertion for partner private_key_jwt authentication. Values: `"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"`. |
| `client_id` | Optional | string | Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange. |
| `client_secret` | Optional | string | Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends a secret. Forbidden for workload identity token exchange. |
| `code` | Optional | string | Partner authorization code, required for authorization_code. |
| `code_verifier` | Optional | string | Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength: `43`. maxLength: `128`. pattern: `^[A-Za-z0-9\-._~]+$`. |
| `context_id` | Optional | string | flint-cli only. |
| `device_code` | Optional | string | flint-cli device code, required for the device_code grant. |
| `grant_type` | Required | string | OAuth grant to exchange. Partner apps use authorization_code or refresh_token; flint-cli uses device_code or refresh_token; workload identities use token-exchange. Values: `"urn:ietf:params:oauth:grant-type:token-exchange"`. |
| `redirect_uri` | Optional | string | Partner redirect URI used in authorization, required for authorization_code. |
| `refresh_token` | Optional | string | Partner or flint-cli refresh token, required for refresh_token. |
| `requested_token_type` | Optional | string | Optional requested credential type for token exchange. Only access tokens are supported. Values: `"urn:ietf:params:oauth:token-type:access_token"`. |
| `scope` | Optional | string | flint-cli and workload identities: optional subset of API scope names for this access token. Partner apps: omit, or send exactly the granted permission IDs. |
| `subject_token` | Required | string | JWT from the workload identity's external issuer. Required for token exchange. minLength: `1`. maxLength: `8192`. |
| `subject_token_type` | Required | string | Format of subject_token. Required for token exchange. Values: `"urn:ietf:params:oauth:token-type:jwt"`, `"urn:ietf:params:oauth:token-type:id_token"`. |
| `workload_identity_id` | Required | string | Configured workload identity to match against the verified subject token. Required for token exchange. |


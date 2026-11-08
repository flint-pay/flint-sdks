[Model index](../MODELS.md) · [Runtime guide](../RUNTIME.md)

## OAuthTokenRequest

The request body for: Exchange an OAuth token.





| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_assertion` | Optional | string | Signed RFC 7523 JWT for partner client authentication. Send client_id and client_assertion_type, without HTTP Basic or client_secret. minLength: `1`. maxLength: `8192`. |
| `client_assertion_type` | Optional | string | Required with client_assertion for partner private_key_jwt authentication. Values: `"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"`. |
| `client_id` | Optional | string | Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange. Example: `"flint-cli"`. |
| `client_secret` | Optional | string | Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends a secret. Forbidden for workload identity token exchange. |
| `code` | Conditional | string | Partner authorization code, required for authorization_code. |
| `code_verifier` | Conditional | string | Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength: `43`. maxLength: `128`. pattern: `^[A-Za-z0-9\-._~]+$`. |
| `context_id` | Optional | string | flint-cli only. Example: `"ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"`. |
| `device_code` | Conditional | string | flint-cli device code, required for the device_code grant. |
| `grant_type` | Required | string | OAuth grant to exchange. Partner apps use client_credentials or authorization_code; flint-cli uses device_code or refresh_token; workload identities use token-exchange. Values: [5 declared values](#oauthtokenrequest-grant_type-values). |
| `merchant_id` | Optional | string | Binds the minted partner app token to this merchant, for client_credentials. Omit for an app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks only the ID's format here. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. Example: `"mer_01KEZF7C00KPYH1DDFPCCX3B6E"`. |
| `mode` | Conditional | string | Mode of the partner app token to mint, test or live. Required for client_credentials. Each token is for one mode. Values: `"test"`, `"live"`. |
| `redirect_uri` | Conditional | string | Partner redirect URI used in authorization, required for authorization_code. |
| `refresh_token` | Conditional | string | flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh tokens; a partner client that sends this grant gets unauthorized_client. |
| `requested_token_type` | Optional | string | Optional requested credential type for token exchange. Only access tokens are supported. Values: `"urn:ietf:params:oauth:token-type:access_token"`. |
| `scope` | Optional | string | flint-cli and workload identities: optional subset of API scope names for this access token. Partner apps: omit. Partner app tokens carry each install's granted permissions, and client_credentials refuses scope with invalid_scope. |
| `subject_token` | Conditional | string | JWT from the workload identity's external issuer. Required for token exchange. minLength: `1`. maxLength: `8192`. |
| `subject_token_type` | Conditional | string | Format of subject_token. Required for token exchange. Values: `"urn:ietf:params:oauth:token-type:jwt"`, `"urn:ietf:params:oauth:token-type:id_token"`. |
| `workload_identity_id` | Conditional | string | Configured workload identity to match against the verified subject token. Required for token exchange. Example: `"wid_01KEZF7C00GKCN7Y1482VY8TWP"`. |

#### OAuthTokenRequest grant_type values

- `"authorization_code"`
- `"client_credentials"`
- `"refresh_token"`
- `"urn:ietf:params:oauth:grant-type:device_code"`
- `"urn:ietf:params:oauth:grant-type:token-exchange"`

### OAuthTokenRequest variant 1: `client_assertion_type` = `"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"`, `grant_type` = `"authorization_code"`, `requested_token_type` = `"urn:ietf:params:oauth:token-type:access_token"`

oneOf with grant_type: "authorization_code": The `authorization_code` variant of `OAuthTokenRequest`..

- Required: `code`, `code_verifier`, `redirect_uri`.
- Optional: `device_code`, `mode`, `refresh_token`, `subject_token`, `subject_token_type`, `workload_identity_id`.
- Constraints for `client_id`: Example: `"fpc_00112233445566778899aabbccddeeff"`.
- Constraints for `grant_type`: Values: `"authorization_code"`.

### OAuthTokenRequest variant 2: `client_assertion_type` = `"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"`, `grant_type` = `"client_credentials"`, `requested_token_type` = `"urn:ietf:params:oauth:token-type:access_token"`

oneOf with grant_type: "client_credentials": The `client_credentials` variant of `OAuthTokenRequest`..

- Required: `mode`.
- Optional: `code`, `code_verifier`, `device_code`, `redirect_uri`, `refresh_token`, `subject_token`, `subject_token_type`, `workload_identity_id`.
- Constraints for `client_id`: Example: `"fpc_00112233445566778899aabbccddeeff"`.
- Constraints for `grant_type`: Values: `"client_credentials"`.

### OAuthTokenRequest variant 3: `client_assertion_type` = `"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"`, `grant_type` = `"refresh_token"`, `requested_token_type` = `"urn:ietf:params:oauth:token-type:access_token"`

oneOf with grant_type: "refresh_token": The `refresh_token` variant of `OAuthTokenRequest`..

- Required: `refresh_token`.
- Optional: `code`, `code_verifier`, `device_code`, `mode`, `redirect_uri`, `subject_token`, `subject_token_type`, `workload_identity_id`.
- Constraints for `grant_type`: Values: `"refresh_token"`.

### OAuthTokenRequest variant 4: `client_assertion_type` = `"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"`, `grant_type` = `"urn:ietf:params:oauth:grant-type:device_code"`, `requested_token_type` = `"urn:ietf:params:oauth:token-type:access_token"`

oneOf with grant_type: "urn:ietf:params:oauth:grant-type:device_code": The `urn:ietf:params:oauth:grant-type:device_code` variant of `OAuthTokenRequest`..

- Required: `device_code`.
- Optional: `code`, `code_verifier`, `mode`, `redirect_uri`, `refresh_token`, `subject_token`, `subject_token_type`, `workload_identity_id`.
- Constraints for `grant_type`: Values: `"urn:ietf:params:oauth:grant-type:device_code"`.

### OAuthTokenRequest variant 5: `client_assertion_type` = `"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"`, `grant_type` = `"urn:ietf:params:oauth:grant-type:token-exchange"`, `requested_token_type` = `"urn:ietf:params:oauth:token-type:access_token"`

oneOf with grant_type: "urn:ietf:params:oauth:grant-type:token-exchange": The `urn:ietf:params:oauth:grant-type:token-exchange` variant of `OAuthTokenRequest`..

- Required: `subject_token`, `subject_token_type`, `workload_identity_id`.
- Optional: `code`, `code_verifier`, `device_code`, `mode`, `redirect_uri`, `refresh_token`.
- Constraints for `grant_type`: Values: `"urn:ietf:params:oauth:grant-type:token-exchange"`.


[API index](../REFERENCE.md) · [Models](../MODELS.md) · [Runtime guide](../RUNTIME.md)

# oauth

### oauth.authorizeCLIDevice

First-party public client flint-cli. Uses application/x-www-form-urlencoded and flat OAuth JSON. Repeated Authorization fields return 400 INVALID_REQUEST with a NOT_ALLOWED detail at Authorization in the Flint error envelope. No client secret or HTTP Basic authentication. Requests are not replayed through idempotency caching. Send session_mode=contexts for a session that supports additive reauthorization. The required scope field contains the full requested set as space-separated names. Normal login sends the unchanged x-flint-cli-bootstrap-scopes; login with extra permissions sends the desired baseline and additions. No scopes are implicitly added. The browser may approve a subset per context; token scope reports the approved set. Unknown scopes return HTTP 400 invalid_scope. Selected scopes are checked against the selected merchant and environment before approval.

`POST /v1/oauth/device/authorize`

Signature: `authorizeCLIDevice(params: OauthAuthorizeCLIDeviceParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CLIDeviceRequestInput](../models/CLIDeviceRequest.md#clidevicerequest) | The request body for: Start CLI browser login. |

Body model: [CLIDeviceRequestInput](../models/CLIDeviceRequest.md#clidevicerequest).

#### oauth.authorizeCLIDevice body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | Values: `"flint-cli"`. |
| `device_name` | Optional | string | Optional compatibility field for the computer name sent by released Flint CLI versions. Accepted and ignored. |
| `merchant_id` | Optional | string | ID of the merchant this resource belongs to. |
| `mode` | Optional | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `platform` | Optional | string | Optional compatibility field for the operating system sent by released Flint CLI versions. Accepted and ignored. |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. |
| `scope` | Required | string | Required space-separated public API scope names. Only requested scopes approved in the browser are granted. Normal login sends x-flint-cli-bootstrap-scopes; explicit requests may use x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: `1`. |
| `session_mode` | Optional | string | Creates a session with selectable merchant and environment contexts. Defaults to contexts when omitted. Default: `"contexts"`. Values: `"contexts"`. |

#### Response

Returned payload: [CLIDeviceResponse](../models/CLIDeviceResponse.md#clideviceresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 429 | RateLimitError |
| 500 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.oauth.authorizeCLIDevice({client_id: "flint-cli", scope: "example"}, {  });
```

[Complete runnable example](../examples/oauth-authorizeCLIDevice.mjs)

### oauth.exchangeToken

Partner apps authenticate with client assertions, HTTP Basic, or client_secret_post. Assertions require client_id, client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer, and client_assertion; never mix them with a secret or HTTP Basic. Self-signed private_key_jwt assertions are verified against the app's public_key and jwks_url credentials. They require iss=sub=client_id, a single-string aud equal to the Flint issuer, exp no more than five minutes ahead, and a single-use jti, signed with ES256, ES384, PS256, RS256 (RSA keys of 2048 to 4096 bits and exponent 65537), or EdDSA. Workload identity assertions are tokens from the external issuer of a workload_identity credential: iss is that issuer, and Flint verifies them with the issuer's published keys. They must match the credential's subject, audience, and claim conditions, be signed with RS256, RS384, RS512, PS256, PS384, PS512, ES256, ES384, or ES512, and expire no more than one hour and 60 seconds ahead; Flint does not require a jti. Assertion replay storage outages, and JWKS URL or issuer outages that leave no usable keys, return 503 temporarily_unavailable. Partner apps get partner app tokens: opaque fpat_ Bearer tokens for one mode that last 900 seconds, with no refresh token. grant_type=client_credentials mints one with the app's client authentication; mode (test or live) is required, and merchant_id optionally binds the token to one merchant, checked for format only. scope is refused with invalid_scope, because each request uses the selected merchant's grant. Only server apps can mint, and a partner client that sends grant_type=refresh_token gets unauthorized_client. The response has access_token, token_type, expires_in, partner_app_id, mode, and merchant_id for a merchant-bound token. Each app can mint 600 tokens per minute after client authentication, beside the per-IP budget; over it returns HTTP 429 temporarily_unavailable with Retry-After and Flint-Rate-Limited-Reason: resource. Cache one token per mode and mint again when it expires. grant_type=authorization_code exchanges a 5-minute, single-use code with S256 PKCE, activates the install and environment grant, and returns a partner app token bound to the installing merchant and the grant's mode, with scope (the granted permission IDs), merchant_id, partner_app_install_id, environment_grant_id, mode, and sandbox_id in test mode. Reusing a code returns invalid_grant and revokes the token its first exchange minted; the grant stays. Deleting the credential that minted a token, disabling the client secret, rotating it with an immediate expiry, and archiving the app revoke the affected tokens. This endpoint follows OAuth token endpoint conventions: send application/x-www-form-urlencoded only. Failures return OAuth token error objects. Repeated Authorization fields return 400 INVALID_REQUEST with a NOT_ALLOWED detail at Authorization in the Flint error envelope before client authentication.

The public client flint-cli supports the RFC 8628 device_code grant and rotating refresh tokens. Pending device requests return authorization_pending; early polling returns slow_down and increases the required interval by five seconds; denial returns access_denied; expired or consumed codes return expired_token. CLI access tokens last 15 minutes. CLI sessions expire after 30 days idle or 90 days total. Reusing a rotated CLI refresh token revokes its family, including when the previous response was lost. A fresh browser login is then required.

With session_mode=contexts at CLI authorization, tokens include oauth_session_id and context_id. CLI refresh requires an explicitly authorized context_id; invalid_context and context_access_denied do not consume the refresh token. Each CLI access token is limited to one context. Ordinary CLI rotation preserves other unexpired access tokens; removing consent immediately invalidates affected tokens. CLI refresh scope may request a subset of the selected grant or context scopes. Only the issued access token is narrowed; consent and other tokens are unchanged. A later refresh without scope restores the full consented scopes. Legacy CLI sessions retain their original response shape. Request rate limits return HTTP 429 temporarily_unavailable with Retry-After and Flint-Rate-Limited-Reason. Device-code token polling returns HTTP 400 slow_down for both early polls and request rate limits.

Workload identities use grant_type=urn:ietf:params:oauth:grant-type:token-exchange with subject_token, subject_token_type, and workload_identity_id. subject_token_type must be urn:ietf:params:oauth:token-type:jwt or urn:ietf:params:oauth:token-type:id_token. Optional scope narrows the identity scopes for this token; requested_token_type, if supplied, must be urn:ietf:params:oauth:token-type:access_token. Client authentication, client_id, actor_token, resource, audience, and unrecognized fields are forbidden and return invalid_request. The response includes an opaque fwat_ access token, issued_token_type, workload_identity_id, merchant_id, mode, and sandbox_id in test mode, without a refresh token. The token expires after the shorter of one hour and the remaining subject-token lifetime. Identity deactivation, archive, and scope narrowing take effect on the next API request. Exchange errors use invalid_request, invalid_grant, invalid_scope, unsupported_grant_type, temporarily_unavailable, and server_error. Limits are 300 requests per minute per IP and 600 per minute per identity after signature verification; exceeding either returns HTTP 429 temporarily_unavailable with Retry-After and Flint-Rate-Limited-Reason. No usable external issuer keys returns HTTP 503 temporarily_unavailable.

`POST /v1/oauth/token`

Signature: `exchangeToken(params: OauthExchangeTokenParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [OAuthTokenRequestInput](../models/OAuthTokenRequest.md#oauthtokenrequest) | The request body for: Exchange an OAuth token. |

Body model: [OAuthTokenRequestInput](../models/OAuthTokenRequest.md#oauthtokenrequest).

#### oauth.exchangeToken body fields

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
| `grant_type` | Required | string | OAuth grant to exchange. Partner apps use client_credentials or authorization_code; flint-cli uses device_code or refresh_token; workload identities use token-exchange. Values: [5 declared values](#oauthexchangetoken-body-grant_type-values). |
| `merchant_id` | Optional | string | Binds the minted partner app token to this merchant, for client_credentials. Omit for an app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks only the ID's format here. pattern: `^mer_[0-9A-HJKMNP-TV-Z]{26}$`. |
| `mode` | Optional | string | Mode of the partner app token to mint, test or live. Required for client_credentials. Each token is for one mode. Values: `"test"`, `"live"`. |
| `redirect_uri` | Optional | string | Partner redirect URI used in authorization, required for authorization_code. |
| `refresh_token` | Optional | string | flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh tokens; a partner client that sends this grant gets unauthorized_client. |
| `requested_token_type` | Optional | string | Optional requested credential type for token exchange. Only access tokens are supported. Values: `"urn:ietf:params:oauth:token-type:access_token"`. |
| `scope` | Optional | string | flint-cli and workload identities: optional subset of API scope names for this access token. Partner apps: omit. Partner app tokens carry each install's granted permissions, and client_credentials refuses scope with invalid_scope. |
| `subject_token` | Optional | string | JWT from the workload identity's external issuer. Required for token exchange. minLength: `1`. maxLength: `8192`. |
| `subject_token_type` | Optional | string | Format of subject_token. Required for token exchange. Values: `"urn:ietf:params:oauth:token-type:jwt"`, `"urn:ietf:params:oauth:token-type:id_token"`. |
| `workload_identity_id` | Optional | string | Configured workload identity to match against the verified subject token. Required for token exchange. |

#### oauth.exchangeToken body grant_type values

- `"authorization_code"`
- `"client_credentials"`
- `"refresh_token"`
- `"urn:ietf:params:oauth:grant-type:device_code"`
- `"urn:ietf:params:oauth:grant-type:token-exchange"`

#### oauth.exchangeToken with `grant_type: "authorization_code"`

The `authorization_code` variant of `OAuthTokenRequest`.

Body model: [OAuthTokenRequestAuthorizationCodeInput](../models/OAuthTokenRequestAuthorizationCode.md#oauthtokenrequestauthorizationcode).

#### oauth.exchangeToken with `grant_type: "client_credentials"`

The `client_credentials` variant of `OAuthTokenRequest`.

Body model: [OAuthTokenRequestClientCredentialsInput](../models/OAuthTokenRequestClientCredentials.md#oauthtokenrequestclientcredentials).

#### oauth.exchangeToken with `grant_type: "refresh_token"`

The `refresh_token` variant of `OAuthTokenRequest`.

Body model: [OAuthTokenRequestRefreshTokenInput](../models/OAuthTokenRequestRefreshToken.md#oauthtokenrequestrefreshtoken).

#### oauth.exchangeToken with `grant_type: "urn:ietf:params:oauth:grant-type:device_code"`

The `urn:ietf:params:oauth:grant-type:device_code` variant of `OAuthTokenRequest`.

Body model: [OAuthTokenRequestDeviceCodeInput](../models/OAuthTokenRequestDeviceCode.md#oauthtokenrequestdevicecode).

#### oauth.exchangeToken with `grant_type: "urn:ietf:params:oauth:grant-type:token-exchange"`

The `urn:ietf:params:oauth:grant-type:token-exchange` variant of `OAuthTokenRequest`.

Body model: [OAuthTokenRequestTokenExchangeInput](../models/OAuthTokenRequestTokenExchange.md#oauthtokenrequesttokenexchange).

#### Response

Returned payload: [OAuthTokenResponse](../models/OAuthTokenResponse.md#oauthtokenresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.oauth.exchangeToken({grant_type: "authorization_code", code: "example", redirect_uri: "example", code_verifier: "examplexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"}, {  });
```

[Complete runnable example](../examples/oauth-exchangeToken.mjs)

### oauth.listCLIContexts

First-party public client flint-cli. Uses application/x-www-form-urlencoded and flat OAuth JSON. Repeated Authorization fields return 400 INVALID_REQUEST with a NOT_ALLOWED detail at Authorization in the Flint error envelope. No client secret or HTTP Basic authentication. Requests are not replayed through idempotency caching. Flint session control extension. Authenticates the current refresh token without consuming or rotating it. Returns only currently authorized contexts, including an empty list. Listing does not change consent, revoke contexts, or update session state. Read approved scopes from the selected context's token response or /v1/auth-context. No business access is granted. Default order: the order of the contexts approved at the latest consent.

`POST /v1/oauth/contexts`

Signature: `listCLIContexts(params: OauthListCLIContextsParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CLIContextsRequestInput](../models/CLIContextsRequest.md#clicontextsrequest) | The request body for: List authorized CLI contexts. |

Body model: [CLIContextsRequestInput](../models/CLIContextsRequest.md#clicontextsrequest).

#### oauth.listCLIContexts body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | Values: `"flint-cli"`. |
| `refresh_token` | Required | string |  |

#### Response

Returned payload: [CLIContextsResponse](../models/CLIContextsResponse.md#clicontextsresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 429 | RateLimitError |
| 500 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.oauth.listCLIContexts({client_id: "flint-cli", refresh_token: "example"}, {  });
```

[Complete runnable example](../examples/oauth-listCLIContexts.mjs)

### oauth.previewPartnerInstallAuthorization

Validates the install link inputs and returns the partner app metadata and requested permissions for the consent screen. This route takes no credential, and Flint ignores a single Authorization header, as GET /v1/oauth/authorize does. Repeated Authorization fields return 400 INVALID_REQUEST with a NOT_ALLOWED detail at Authorization. Flint ignores unrecognized parameters.

`GET /v1/oauth/authorize/preview`

Signature:

```typescript
previewPartnerInstallAuthorization(params: OauthPreviewPartnerInstallAuthorizationParams,
 options?: _SdkWithoutIdempotency<RequestOptions<never>>)
```

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `response_type` | Optional | string | OAuth response type. Must be code. Values: `"code"`. |
| `client_id` | Required | string | Partner app client ID. |
| `redirect_uri` | Required | string | Registered redirect URI for the partner app. |
| `mode` | Required | string | Install mode. Values: `"test"`, `"live"`. |
| `code_challenge` | Optional | string | Base64url-encoded SHA-256 hash of your code_verifier, without padding (RFC 7636). |
| `code_challenge_method` | Optional | string | PKCE challenge method. Values: `"S256"`. |
| `scope` | Optional | string | Space-separated permission IDs from your app's permission manifest. Omit to request default_requested_permissions. Required permissions are always granted. |
| `sandbox_id` | Optional | string | Optional active merchant sandbox ID, accepted only with mode=test. When omitted in test mode, Flint uses the merchant's default sandbox. |
| `state` | Optional | string | Opaque state value returned to the partner callback. |

#### Response

Returned payload: [PartnerAuthorizePreview](../models/PartnerAuthorizePreview.md#partnerauthorizepreview).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 404 | NotFoundError |
| 429 | RateLimitError |
| 500 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 3; retry statuses: 429, 500, 502, 503, 504; transport retries: enabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.oauth.previewPartnerInstallAuthorization({client_id: "fpc_00112233445566778899aabbccddeeff", redirect_uri: "example", mode: "test"}, {  });
```

[Complete runnable example](../examples/oauth-previewPartnerInstallAuthorization.mjs)

### oauth.reauthorizeCLIDevice

First-party public client flint-cli. Uses application/x-www-form-urlencoded and flat OAuth JSON. Repeated Authorization fields return 400 INVALID_REQUEST with a NOT_ALLOWED detail at Authorization in the Flint error envelope. No client secret or HTTP Basic authentication. Requests are not replayed through idempotency caching. Flint session control extension. Starts device consent bound to the current session and user without consuming the refresh token. Without scope_mode, approval replaces consent; denial or expiry leaves consent unchanged. Redeem using the device_code grant to rotate the latest family token. Set scope_mode=additive and context_id to request additional space-separated scope names for one existing context. Merchant and environment are derived from that context; conflicting hints return invalid_context. Approval unions only browser-approved additions with that context's existing scopes and preserves all other contexts. No implicit bootstrap scopes are added. Unsupported or environment-disallowed scopes return HTTP 400 invalid_scope; browser denial returns access_denied when polling. Partial approval succeeds and scope in the token response is authoritative. A superseded consent review returns expired_token when its device code is redeemed; start a new review. The existing session remains active.

`POST /v1/oauth/device/reauthorize`

Signature: `reauthorizeCLIDevice(params: OauthReauthorizeCLIDeviceParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [CLIReauthorizeRequestInput](../models/CLIReauthorizeRequest.md#clireauthorizerequest) | The request body for: Review CLI session consent. |

Body model: [CLIReauthorizeRequestInput](../models/CLIReauthorizeRequest.md#clireauthorizerequest).

#### oauth.reauthorizeCLIDevice body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_id` | Required | string | Values: `"flint-cli"`. |
| `context_id` | Optional | string | minLength: `1`. |
| `device_name` | Optional | string | Optional compatibility field for the computer name sent by released Flint CLI versions. Accepted and ignored. |
| `merchant_id` | Optional | string | ID of the merchant this resource belongs to. |
| `mode` | Optional | string | Environment used for this resource or request. Values: `"test"`, `"live"`. |
| `platform` | Optional | string | Optional compatibility field for the operating system sent by released Flint CLI versions. Accepted and ignored. |
| `refresh_token` | Required | string |  |
| `sandbox_id` | Optional | string | ID of the sandbox this resource belongs to. |
| `scope` | Required | string | Required space-separated public API scope names. Only requested scopes approved in the browser are granted. Normal login sends x-flint-cli-bootstrap-scopes; explicit requests may use x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: `1`. |
| `scope_mode` | Optional | string | Values: `"additive"`. |
| `session_mode` | Required | string | Values: `"contexts"`. |

#### Response

Returned payload: [CLIDeviceResponse](../models/CLIDeviceResponse.md#clideviceresponse).

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 429 | RateLimitError |
| 500 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Complete body and metadata: lastResponse. See [response modes](../RUNTIME.md#responses-and-errors).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.oauth.reauthorizeCLIDevice({client_id: "flint-cli", refresh_token: "example", scope: "example", session_mode: "contexts"}, {  });
```

[Complete runnable example](../examples/oauth-reauthorizeCLIDevice.mjs)

### oauth.revokeToken

RFC 7009 token revocation for partner apps and flint-cli. Partner apps authenticate with client assertions, HTTP Basic, or client_secret. Assertion rules match the token endpoint. Self-signed private_key_jwt assertions (iss=sub=client_id; ES256, ES384, PS256, RS256, or EdDSA; a single-use jti; exp at most five minutes ahead) are verified against public_key or jwks_url credentials, so sign a fresh one with a new jti for each request. Workload identity assertions have the external issuer as iss and are verified with that issuer's published keys; they use RS256, RS384, RS512, PS256, PS384, PS512, ES256, ES384, or ES512, expire no more than one hour and 60 seconds ahead, and need no jti. Revoking a partner app token ends that token only; token_type_hint is only a hint. Unknown, expired, and other clients' tokens return 200 with no change. Revoking a token never changes an install or grant.

For flint-cli, revoking an access or refresh token ends its CLI session and invalidates the session's tokens. The public client sends client_id=flint-cli without a secret or Authorization header. Send application/x-www-form-urlencoded; success has an empty body. Repeated Authorization fields return 400 INVALID_REQUEST with a NOT_ALLOWED detail at Authorization in the Flint error envelope.

`POST /v1/oauth/revoke`

Signature: `revokeToken(params: OauthRevokeTokenParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>)`

#### Request fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `body` | Required | [OAuthRevokeRequestInput](../models/OAuthRevokeRequest.md#oauthrevokerequest) | The request body for: Revoke an OAuth token. |

Body model: [OAuthRevokeRequestInput](../models/OAuthRevokeRequest.md#oauthrevokerequest).

#### oauth.revokeToken body fields

| Field | Presence | Type | Description |
| --- | --- | --- | --- |
| `client_assertion` | Optional | string | Signed RFC 7523 JWT for partner client authentication. Send client_id and client_assertion_type, without HTTP Basic or client_secret. minLength: `1`. maxLength: `8192`. |
| `client_assertion_type` | Optional | string | Required with client_assertion for partner private_key_jwt authentication. Values: `"urn:ietf:params:oauth:client-assertion-type:jwt-bearer"`. |
| `client_id` | Optional | string | Partner client ID for client_secret_post, or flint-cli for the public CLI client. |
| `client_secret` | Optional | string | Partner client secret for client_secret_post. Omit when using HTTP Basic; flint-cli never sends a secret. |
| `token` | Required | string | Partner app token, or flint-cli access or refresh token, to revoke. |
| `token_type_hint` | Optional | string | Optional token lookup hint. Values: `"refresh_token"`, `"access_token"`. |

#### Response

Response body (inside Result.data): undefined.

#### Errors

| Status | Error class |
| --- | --- |
| 400 | InvalidRequestError |
| 401 | AuthenticationError |
| 413 | ApiError |
| 429 | RateLimitError |
| 500 | ServerError |
| 503 | ServerError |

Other failures: [runtime error reference](../RUNTIME.md#error-reference).

#### Request behavior

Attempt limit: 1; retry statuses: none; transport retries: disabled. See [retries and idempotency](../RUNTIME.md#retries-and-idempotency).

Authentication modes: none (anonymous). [Credential setup](../RUNTIME.md#authentication).

#### Example

```typescript
const result = await client.oauth.revokeToken({token: "example"}, {  });
```

[Complete runnable example](../examples/oauth-revokeToken.mjs)


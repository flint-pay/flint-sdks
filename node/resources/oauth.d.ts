import type { Result, WithResponseInfo } from '../runtime.js';
import type { CLIContextsResponse, CLIDeviceResponse } from '../declarations/types-4.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    OAuthTokenResponse,
    OauthAuthorizeCLIDeviceParams,
    OauthExchangeTokenParams,
    OauthListCLIContextsParams,
    OauthPreviewPartnerInstallAuthorizationParams,
    OauthReauthorizeCLIDeviceParams,
    OauthRevokeTokenParams,
    OauthRevokeTokenResponse
} from '../declarations/types-39.js';
import type { PartnerAuthorizePreview, PartnerAuthorizePreviewResponse } from '../declarations/types-44.js';
import type { RequestOptions } from '../declarations/types-54.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    ResponseInfo,
    WithResponseInfo,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type {
    OauthAuthorizeCLIDeviceParams,
    OauthExchangeTokenParams,
    OAuthTokenResponse,
    OauthListCLIContextsParams,
    OauthPreviewPartnerInstallAuthorizationParams,
    OauthReauthorizeCLIDeviceParams,
    OauthRevokeTokenParams,
    OauthRevokeTokenResponse,
    OAuthTokenRequestInput,
    OAuthTokenRequestAuthorizationCodeInput,
    OAuthTokenRequestClientCredentialsInput,
    OAuthTokenRequestRefreshTokenInput,
    OAuthTokenRequestDeviceCodeInput,
    OAuthTokenRequestTokenExchangeInput,
    MoneyValue,
    NextAction,
    OAuthRevokeRequestInput
} from '../declarations/types-39.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type {
    CLIDeviceResponse,
    CLIContextsResponse,
    CLIDeviceRequestInput,
    CLIContextsRequestInput,
    CLIReauthorizeRequestInput
} from '../declarations/types-4.js';
export type { PartnerAuthorizePreview, PartnerAuthorizePreviewResponse } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { ContextSummary } from '../declarations/types-7.js';
export type { PartnerAppPaymentSplits, PartnerAppPermissionManifestEntry } from '../declarations/types-43.js';
export type { PlatformFeeCap } from '../declarations/types-49.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeCLIContextsRequest, makeCLIDeviceRequest, makeCLIReauthorizeRequest } from '../declarations/types-71.js';
export {
    makeMoneyValue,
    makeOAuthRevokeRequest,
    makeOAuthTokenRequest,
    makeOAuthTokenRequestAuthorizationCode,
    makeOAuthTokenRequestClientCredentials,
    makeOAuthTokenRequestDeviceCode,
    makeOAuthTokenRequestRefreshToken,
    makeOAuthTokenRequestTokenExchange
} from '../declarations/types-79.js';
export interface OauthResource {
    /**
 * First-party public client flint-cli. Uses application/x-www-form-urlencoded and flat OAuth JSON.
 * Repeated Authorization fields return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
 * Authorization in the Flint error envelope. No client secret or HTTP Basic authentication.
 * Requests are not replayed through idempotency caching. Send session_mode=contexts for a session
 * that supports additive reauthorization. The required scope field contains the full requested set
 * as space-separated names. Login sends the scopes it needs, and login with extra permissions
 * sends those plus the additions. No scopes are implicitly added. The browser may approve a subset
 * per context; token scope reports the approved set. Unknown scopes return HTTP 400 invalid_scope.
 * Selected scopes are checked against the selected merchant and environment before approval.
 *
 * `POST /v1/oauth/device/authorize`
 * @see https://developers.withflintpay.com/docs/api/cli-oauth#authorizeCLIDevice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.oauth.authorizeCLIDevice({client_id: "flint-cli", scope: "example"})
 */
    authorizeCLIDevice(params: OauthAuthorizeCLIDeviceParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<WithResponseInfo<CLIDeviceResponse, CLIDeviceResponse>>;
    /**
 * Partner apps authenticate with client assertions, HTTP Basic, or client_secret_post. Assertions
 * require client_id, client_assertion_type=urn:ietf:params:oauth:client-assertion-type:jwt-bearer,
 * and client_assertion; never mix them with a secret or HTTP Basic. Self-signed private_key_jwt
 * assertions are verified against the app's public_key and jwks_url credentials. They require
 * iss=sub=client_id, a single-string aud equal to the Flint issuer, exp no more than five minutes
 * ahead, and a single-use jti, signed with ES256, ES384, PS256, RS256 (RSA keys of 2048 to 4096
 * bits and exponent 65537), or EdDSA. Workload identity assertions are tokens from the external
 * issuer of a workload_identity credential: iss is that issuer, and Flint verifies them with the
 * issuer's published keys. They must match the credential's subject, audience, and claim
 * conditions, be signed with RS256, RS384, RS512, PS256, PS384, PS512, ES256, ES384, or ES512, and
 * expire no more than one hour and 60 seconds ahead; Flint does not require a jti. Assertion
 * replay storage outages, and JWKS URL or issuer outages that leave no usable keys, return 503
 * temporarily_unavailable. Partner apps get partner app tokens: opaque fpat_ Bearer tokens for one
 * mode that last 900 seconds, with no refresh token. grant_type=client_credentials mints one with
 * the app's client authentication; mode (test or live) is required, and merchant_id optionally
 * binds the token to one merchant, checked for format only. scope is refused with invalid_scope,
 * because each request uses the selected merchant's grant. Only server apps can mint, and a
 * partner client that sends grant_type=refresh_token gets unauthorized_client. The response has
 * access_token, token_type, expires_in, partner_app_id, mode, and merchant_id for a merchant-bound
 * token. Each app can mint 600 tokens per minute after client authentication, beside the per-IP
 * budget; over it returns HTTP 429 temporarily_unavailable with Retry-After and
 * Flint-Rate-Limited-Reason: resource. Cache one token per mode and mint again when it expires.
 * grant_type=authorization_code exchanges a 5-minute, single-use code with S256 PKCE, activates
 * the install and environment grant, and returns a partner app token bound to the installing
 * merchant and the grant's mode, with scope (the granted permission IDs), merchant_id,
 * partner_app_install_id, environment_grant_id, mode, and sandbox_id in test mode. Reusing a code
 * returns invalid_grant and revokes the token its first exchange minted; the grant stays. Deleting
 * the credential that minted a token, disabling the client secret, rotating it with an immediate
 * expiry, and archiving the app revoke the affected tokens. This endpoint follows OAuth token
 * endpoint conventions: send application/x-www-form-urlencoded only. Failures return OAuth token
 * error objects. Repeated Authorization fields return 400 INVALID_REQUEST with a NOT_ALLOWED
 * detail at Authorization in the Flint error envelope before client authentication. The public
 * client flint-cli supports the RFC 8628 device_code grant and rotating refresh tokens. Pending
 * device requests return authorization_pending; early polling returns slow_down and increases the
 * required interval by five seconds; denial returns access_denied; expired or consumed codes
 * return expired_token. CLI access tokens last 15 minutes. CLI sessions expire after 30 days idle
 * or 90 days total. Reusing a rotated CLI refresh token revokes its family, including when the
 * previous response was lost. A fresh browser login is then required. With session_mode=contexts
 * at CLI authorization, tokens include oauth_session_id and context_id. CLI refresh requires an
 * explicitly authorized context_id; invalid_context and context_access_denied do not consume the
 * refresh token. Each CLI access token is limited to one context. Ordinary CLI rotation preserves
 * other unexpired access tokens; removing consent immediately invalidates affected tokens. CLI
 * refresh scope may request a subset of the selected grant or context scopes. Only the issued
 * access token is narrowed; consent and other tokens are unchanged. A later refresh without scope
 * restores the full consented scopes. Legacy CLI sessions retain their original response shape.
 * Request rate limits return HTTP 429 temporarily_unavailable with Retry-After and
 * Flint-Rate-Limited-Reason. Device-code token polling returns HTTP 400 slow_down for both early
 * polls and request rate limits. Workload identities use
 * grant_type=urn:ietf:params:oauth:grant-type:token-exchange with subject_token,
 * subject_token_type, and workload_identity_id. subject_token_type must be
 * urn:ietf:params:oauth:token-type:jwt or urn:ietf:params:oauth:token-type:id_token. Optional
 * scope narrows the identity scopes for this token; requested_token_type, if supplied, must be
 * urn:ietf:params:oauth:token-type:access_token. Client authentication, client_id, actor_token,
 * resource, audience, and unrecognized fields are forbidden and return invalid_request. The
 * response includes an opaque fwat_ access token, issued_token_type, workload_identity_id,
 * merchant_id, mode, and sandbox_id in test mode, without a refresh token. The token expires after
 * the shorter of one hour and the remaining subject-token lifetime. Identity deactivation,
 * archive, and scope narrowing take effect on the next API request. Exchange errors use
 * invalid_request, invalid_grant, invalid_scope, unsupported_grant_type, temporarily_unavailable,
 * and server_error. Limits are 300 requests per minute per IP and 600 per minute per identity
 * after signature verification; exceeding either returns HTTP 429 temporarily_unavailable with
 * Retry-After and Flint-Rate-Limited-Reason. No usable external issuer keys returns HTTP 503
 * temporarily_unavailable.
 *
 * `POST /v1/oauth/token`
 * @see https://developers.withflintpay.com/docs/api/oauth#exchangeOAuthToken
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.oauth.exchangeToken({grant_type: "authorization_code", code: "example", code_verifier:
 * "examplexxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"})
 */
    exchangeToken(params: OauthExchangeTokenParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<WithResponseInfo<OAuthTokenResponse, OAuthTokenResponse>>;
    /**
 * First-party public client flint-cli. Uses application/x-www-form-urlencoded and flat OAuth JSON.
 * Repeated Authorization fields return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
 * Authorization in the Flint error envelope. No client secret or HTTP Basic authentication.
 * Requests are not replayed through idempotency caching. Flint session control extension.
 * Authenticates the current refresh token without consuming or rotating it. Returns only currently
 * authorized contexts, including an empty list. Listing does not change consent, revoke contexts,
 * or update session state. Read approved scopes from the selected context's token response or
 * /v1/auth-context. No business access is granted. Default order: the order of the contexts
 * approved at the latest consent.
 *
 * `POST /v1/oauth/contexts`
 * @see https://developers.withflintpay.com/docs/api/cli-oauth#listCLIContexts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.oauth.listCLIContexts({client_id: "flint-cli", refresh_token: "example"})
 */
    listCLIContexts(params: OauthListCLIContextsParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<WithResponseInfo<CLIContextsResponse, CLIContextsResponse>>;
    /**
 * Validates the install link inputs and returns the partner app metadata and requested permissions
 * for the consent screen. This route takes no credential, and Flint ignores a single Authorization
 * header, as GET /v1/oauth/authorize does. Repeated Authorization fields return 400
 * INVALID_REQUEST with a NOT_ALLOWED detail at Authorization. Flint ignores unrecognized
 * parameters.
 *
 * `GET /v1/oauth/authorize/preview`
 * @see
 * https://developers.withflintpay.com/docs/api/partner-oauth#previewPartnerInstallAuthorization
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.oauth.previewPartnerInstallAuthorization({client_id:
 * "fpc_00112233445566778899aabbccddeeff", redirect_uri: "example", mode: "test"})
 */
    previewPartnerInstallAuthorization(params: OauthPreviewPartnerInstallAuthorizationParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<WithResponseInfo<PartnerAuthorizePreview, PartnerAuthorizePreviewResponse>>;
    /**
 * First-party public client flint-cli. Uses application/x-www-form-urlencoded and flat OAuth JSON.
 * Repeated Authorization fields return 400 INVALID_REQUEST with a NOT_ALLOWED detail at
 * Authorization in the Flint error envelope. No client secret or HTTP Basic authentication.
 * Requests are not replayed through idempotency caching. Flint session control extension. Starts
 * device consent bound to the current session and user without consuming the refresh token.
 * Without scope_mode, approval replaces consent; denial or expiry leaves consent unchanged. Redeem
 * using the device_code grant to rotate the latest family token. Set scope_mode=additive and
 * context_id to request additional space-separated scope names for one existing context. Merchant
 * and environment are derived from that context; conflicting hints return invalid_context.
 * Approval unions only browser-approved additions with that context's existing scopes and
 * preserves all other contexts. No implicit bootstrap scopes are added. Unsupported or
 * environment-disallowed scopes return HTTP 400 invalid_scope; browser denial returns
 * access_denied when polling. Partial approval succeeds and scope in the token response is
 * authoritative. A superseded consent review returns expired_token when its device code is
 * redeemed; start a new review. The existing session remains active.
 *
 * `POST /v1/oauth/device/reauthorize`
 * @see https://developers.withflintpay.com/docs/api/cli-oauth#reauthorizeCLIDevice
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.oauth.reauthorizeCLIDevice({client_id: "flint-cli", refresh_token: "example", scope:
 * "example", session_mode: "contexts"})
 */
    reauthorizeCLIDevice(params: OauthReauthorizeCLIDeviceParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<WithResponseInfo<CLIDeviceResponse, CLIDeviceResponse>>;
    /**
 * RFC 7009 token revocation for partner apps and flint-cli. Partner apps authenticate with client
 * assertions, HTTP Basic, or client_secret. Assertion rules match the token endpoint. Self-signed
 * private_key_jwt assertions (iss=sub=client_id; ES256, ES384, PS256, RS256, or EdDSA; a
 * single-use jti; exp at most five minutes ahead) are verified against public_key or jwks_url
 * credentials, so sign a fresh one with a new jti for each request. Workload identity assertions
 * have the external issuer as iss and are verified with that issuer's published keys; they use
 * RS256, RS384, RS512, PS256, PS384, PS512, ES256, ES384, or ES512, expire no more than one hour
 * and 60 seconds ahead, and need no jti. Revoking a partner app token ends that token only;
 * token_type_hint is only a hint. Unknown, expired, and other clients' tokens return 200 with no
 * change. Revoking a token never changes an install or grant. For flint-cli, revoking an access or
 * refresh token ends its CLI session and invalidates the session's tokens. The public client sends
 * client_id=flint-cli without a secret or Authorization header. Send
 * application/x-www-form-urlencoded; success has an empty body. Repeated Authorization fields
 * return 400 INVALID_REQUEST with a NOT_ALLOWED detail at Authorization in the Flint error
 * envelope.
 *
 * `POST /v1/oauth/revoke`
 * @see https://developers.withflintpay.com/docs/api/oauth#revokeOAuthToken
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.oauth.revokeToken({token: "example"})
 */
    revokeToken(params: OauthRevokeTokenParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<Result<OauthRevokeTokenResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly oauth: OauthResource;
}

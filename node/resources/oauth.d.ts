export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { Result, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { OauthAuthorizePartnerInstallInput } from '../declarations/OauthAuthorizePartnerInstallInput.js';
import type { OauthAuthorizePartnerInstallResponse } from '../declarations/OauthAuthorizePartnerInstallResponse.js';
import type { OauthExchangePartnerInstallTokenInput } from '../declarations/OauthExchangePartnerInstallTokenInput.js';
import type { OauthExchangePartnerInstallTokenResponse } from '../declarations/OauthExchangePartnerInstallTokenResponse.js';
import type { OauthPreviewPartnerInstallAuthorizationInput } from '../declarations/OauthPreviewPartnerInstallAuthorizationInput.js';
import type { OauthPreviewPartnerInstallAuthorizationResponse } from '../declarations/OauthPreviewPartnerInstallAuthorizationResponse.js';
import type { PartnerAuthorizePreviewResponse } from '../declarations/PartnerAuthorizePreviewResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface OauthResource {
    /**
 * Authenticates the merchant in Flint, validates the requested partner app install, and redirects back to the partner's redirect_uri with an authorization code.
 * GET /v1/oauth/authorize
 * @example
 * client.oauth.authorizePartnerInstall({response_type: "code", client_id: "example", redirect_uri: "example", mode: "test", state: "example"})
 */
    authorizePartnerInstall(params: { "response_type": InputValue<"code">; "client_id": InputValue<string>; "redirect_uri": InputValue<string>; "mode": InputValue<"test" | "live">; "permission_ids"?: InputValue<string>; "environment_id"?: InputValue<string>; "merchant_id"?: InputValue<string>; "state": InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<Result<OauthAuthorizePartnerInstallResponse>>;
    /**
 * Exchanges an authorization code or refresh token for an installation-scoped bearer token. This endpoint follows OAuth token endpoint conventions: it accepts application/x-www-form-urlencoded requests as well as JSON and returns OAuth token error objects for token exchange failures instead of the normal Flint error envelope. The public client flint-cli also supports the RFC 8628 device_code grant and rotating refresh tokens using form requests. Pending device requests return authorization_pending; early polling returns slow_down and increases the required interval by five seconds; denial returns access_denied; expired or consumed codes return expired_token. Access tokens last 15 minutes. CLI sessions expire after 30 days idle or 90 days total. Reusing a rotated refresh token revokes its family, including when the previous response was lost. A fresh browser login is then required. With session_mode=contexts at authorization, tokens include oauth_session_id and context_id. Refresh requires an explicitly authorized context_id; invalid_context and context_access_denied do not consume the refresh token. Each access token is limited to one context. Ordinary rotation preserves other unexpired access tokens; removing consent immediately invalidates affected tokens. Legacy sessions retain their original response and authorization semantics.
 * POST /v1/oauth/token
 * @example
 * client.oauth.exchangePartnerInstallToken({client_id: "example", client_secret: "example", grant_type: "example"})
 */
    exchangePartnerInstallToken(params: (InputValue<{ "client_id": string; "client_secret": string; "code"?: string; "grant_type": string; "redirect_uri"?: string; "refresh_token"?: string; }>) & { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<Result<OauthExchangePartnerInstallTokenResponse>>;
    /**
 * Validates the install link inputs and returns the partner app metadata and requested permissions for the consent screen.
 * GET /v1/oauth/authorize/preview
 * @example
 * client.oauth.previewPartnerInstallAuthorization({client_id: "example", redirect_uri: "example", mode: "test"})
 */
    previewPartnerInstallAuthorization(params: { "client_id": InputValue<string>; "redirect_uri": InputValue<string>; "mode": InputValue<"test" | "live">; "permission_ids"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<_SdkPayloadAt<PartnerAuthorizePreviewResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    previewPartnerInstallAuthorizationWithResponse(params: { "client_id": InputValue<string>; "redirect_uri": InputValue<string>; "mode": InputValue<"test" | "live">; "permission_ids"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<SdkResponse<OauthPreviewPartnerInstallAuthorizationResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly oauth: OauthResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { OauthAuthorizePartnerInstallResponse } from '../declarations/OauthAuthorizePartnerInstallResponse.js';
export type { OauthExchangePartnerInstallTokenResponse } from '../declarations/OauthExchangePartnerInstallTokenResponse.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { PartnerAuthorizePreviewResponse } from '../declarations/PartnerAuthorizePreviewResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { OauthPreviewPartnerInstallAuthorizationResponse } from '../declarations/OauthPreviewPartnerInstallAuthorizationResponse.js';
export type { OauthAuthorizePartnerInstallInput } from '../declarations/OauthAuthorizePartnerInstallInput.js';
export type { OauthExchangePartnerInstallTokenInput } from '../declarations/OauthExchangePartnerInstallTokenInput.js';
export type { OauthPreviewPartnerInstallAuthorizationInput } from '../declarations/OauthPreviewPartnerInstallAuthorizationInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { PartnerAuthorizePreview } from '../declarations/PartnerAuthorizePreview.js';
export type { PartnerAuthorizePreviewPermission } from '../declarations/PartnerAuthorizePreviewPermission.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { PartnerTokenRequestInput } from '../declarations/PartnerTokenRequestInput.js';
export { makePartnerAuthorizePreviewResponse } from '../declarations/makePartnerAuthorizePreviewResponse.js';
export { makePartnerAuthorizePreview } from '../declarations/makePartnerAuthorizePreview.js';
export { makePartnerAuthorizePreviewPermission } from '../declarations/makePartnerAuthorizePreviewPermission.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';

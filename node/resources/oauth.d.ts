import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type { OauthPreviewPartnerInstallAuthorizationParams } from '../declarations/types-35.js';
import type { PartnerAuthorizePreview, PartnerAuthorizePreviewResponse } from '../declarations/types-40.js';
import type { RequestOptions } from '../declarations/types-47.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
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
export type { OauthPreviewPartnerInstallAuthorizationParams, NextAction, MoneyValue } from '../declarations/types-35.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { PartnerAuthorizePreview, PartnerAuthorizePreviewResponse } from '../declarations/types-40.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { PartnerAppPermissionManifestEntry } from '../declarations/types-39.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface OauthResource {
    /**
 * Validates the install link inputs and returns the partner app metadata and requested permissions
 * for the consent screen. This route takes no credential. Flint ignores an Authorization header,
 * except that a partner install access token is refused with 401. Flint ignores unrecognized
 * parameters.
 *
 * `GET /v1/oauth/authorize/preview`
 * @see
 * https://developers.withflintpay.com/docs/api/partner-oauth#previewPartnerInstallAuthorization
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.oauth.previewPartnerInstallAuthorization({client_id: "example", redirect_uri: "example",
 * mode: "test"})
 */
    previewPartnerInstallAuthorization(params: OauthPreviewPartnerInstallAuthorizationParams, options?: _SdkWithoutIdempotency<RequestOptions<never>>): Promise<WithResponseInfo<PartnerAuthorizePreview, PartnerAuthorizePreviewResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly oauth: OauthResource;
}

import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    PartnerAppInstall,
    PartnerAppInstallListResponse,
    PartnerAppInstallWithEndedAccess,
    PartnerAppInstallWithEndedAccessResponse,
    PartnerAppInstallsListParams,
    PartnerAppInstallsRevokeParams
} from '../declarations/types-43.js';
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
    PartnerAppInstallsListParams,
    PartnerAppInstallListResponse,
    PartnerAppInstall,
    PartnerAppInstallsRevokeParams,
    PartnerAppInstallWithEndedAccess,
    PartnerAppInstallWithEndedAccessResponse,
    PartnerAppMerchantReadiness,
    PartnerAppMerchantReadinessAxis
} from '../declarations/types-43.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export type { PartnerEnvironmentGrant, PartnerAppPermissionManifestEntry, PartnerEnvironmentGrantPaymentSplits } from '../declarations/types-44.js';
export type { PlatformFeeCap } from '../declarations/types-49.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export interface PartnerAppInstallsResource {
    /**
 * Lists partner app installs on the authenticated merchant, across live and test mode. Requires a
 * live API key. Default order: partner_app_install_id ascending; this key uniquely orders the
 * results.
 *
 * `GET /v1/partner-app-installs`
 * @see
 * https://developers.withflintpay.com/docs/api/partner-app-installs#listMerchantPartnerAppInstalls
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.partnerAppInstalls.list()
 */
    list(params?: PartnerAppInstallsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PartnerAppInstallListResponse, PartnerAppInstallListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/partner-app-installs#listMerchantPartnerAppInstalls
     */
    listPages(params?: PartnerAppInstallsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PartnerAppInstallListResponse, PartnerAppInstallListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/partner-app-installs#listMerchantPartnerAppInstalls
     */
    listItems(params?: PartnerAppInstallsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PartnerAppInstall>;
    /**
 * Disconnects a partner app from the authenticated merchant: revokes the install, its environment
 * grants, its refresh tokens and linked API keys, and deletes linked webhook endpoints. The app is
 * sent partner_app_install.revoked with revoked_by: merchant. A new request against an already
 * revoked install returns empty ended-access arrays. Unlinked API keys and webhook endpoints keep
 * working. To reconnect, install the app again.
 *
 * `POST /v1/partner-app-installs/{partner_app_install_id}/revoke`
 * @param partner_app_install_id Flint partner app install ID.
 * @see
 * https://developers.withflintpay.com/docs/api/partner-app-installs#revokeMerchantPartnerAppInstall
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerAppInstalls.revoke("pinst_01KEZF7C003HVKZR3GZAW6AFAZ", {}, { idempotencyKey:
 * idempotencyKey })
 */
    revoke(partner_app_install_id: InputValue<string>, params?: PartnerAppInstallsRevokeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppInstallWithEndedAccess, PartnerAppInstallWithEndedAccessResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly partnerAppInstalls: PartnerAppInstallsResource;
}

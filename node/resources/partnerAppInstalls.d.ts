import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-5.js';
import type {
    PartnerAppInstall,
    PartnerAppInstallListResponse,
    PartnerAppInstallResponse,
    PartnerAppInstallsListParams,
    PartnerAppInstallsRevokeParams
} from '../declarations/types-39.js';
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
export type {
    PartnerAppInstallsListParams,
    PartnerAppInstallListResponse,
    PartnerAppInstall,
    PartnerAppInstallsRevokeParams,
    PartnerAppInstallResponse,
    PartnerAppPermissionManifestEntry
} from '../declarations/types-39.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions } from '../declarations/types-47.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-12.js';
export type { ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { NextAction, MoneyValue } from '../declarations/types-35.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export type { PartnerEnvironmentGrant } from '../declarations/types-40.js';
export { makeMoneyValue } from '../declarations/types-69.js';
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
 * grants and its refresh tokens. The app is sent partner_app_install.revoked with revoked_by:
 * merchant. Revoking a revoked install returns it unchanged. To reconnect, install the app again.
 *
 * `POST /v1/partner-app-installs/{partner_app_install_id}/revoke`
 * @param partner_app_install_id Flint partner app install ID.
 * @see
 * https://developers.withflintpay.com/docs/api/partner-app-installs#revokeMerchantPartnerAppInstall
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerAppInstalls.revoke("pinst_01ARZ3NDEKTSV4RRFFQ69G5FAV", {}, { idempotencyKey:
 * idempotencyKey })
 */
    revoke(partner_app_install_id: InputValue<string>, params?: PartnerAppInstallsRevokeParams, options?: RequestOptions<"merchant">): Promise<WithResponseInfo<PartnerAppInstall, PartnerAppInstallResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly partnerAppInstalls: PartnerAppInstallsResource;
}

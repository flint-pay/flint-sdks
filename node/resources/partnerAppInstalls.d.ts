import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    PartnerAppInstall,
    PartnerAppInstallListResponse,
    PartnerAppInstallResponse,
    PartnerAppInstallsListInput,
    PartnerAppInstallsRevokeInput
} from '../declarations/types-34.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-43.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails
} from '../runtime.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    PartnerAppInstallListResponse,
    PartnerAppInstall,
    PartnerAppInstallResponse,
    PartnerAppInstallsListInput,
    PartnerAppInstallsRevokeInput,
    PartnerAppPermissionManifestEntry
} from '../declarations/types-34.js';
export type { SdkResponse } from '../declarations/types-43.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-9.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-31.js';
export type { PartnerEnvironmentGrant } from '../declarations/types-35.js';
export type { DeveloperListPartnerInstallsInput } from '../declarations/types-15.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export { makePartnerAppPermissionManifestEntry } from '../declarations/types-69.js';
export interface PartnerAppInstallsResource {
    /**
 * Lists partner app installs on the authenticated merchant, across live and test mode. Requires a
 * live API key.
 * @see reference/partnerAppInstalls.md#partnerappinstallslist
 * GET /v1/partner-app-installs
 * @example
 * client.partnerAppInstalls.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "partner_app_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PartnerAppInstallListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/partnerAppInstalls.md#partnerappinstallslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "partner_app_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PartnerAppInstallListResponse>>;
    /** Iterate pages lazily.
     * @see reference/partnerAppInstalls.md#partnerappinstallslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "partner_app_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PartnerAppInstallListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/partnerAppInstalls.md#partnerappinstallslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "partner_app_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PartnerAppInstallListResponse>>;
    /** Iterate items lazily.
     * @see reference/partnerAppInstalls.md#partnerappinstallslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "partner_app_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending_exchange" | "active" | "revoked">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PartnerAppInstall>;
    /**
 * Disconnects a partner app from the authenticated merchant: revokes the install, its environment
 * grants and its refresh tokens. The app is sent partner_app_install.revoked with revoked_by:
 * merchant. Revoking a revoked install returns it unchanged. To reconnect, install the app again.
 * @see reference/partnerAppInstalls.md#partnerappinstallsrevoke
 * POST /v1/partner-app-installs/{partner_app_install_id}/revoke
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.partnerAppInstalls.revoke("example", {}, { idempotencyKey: idempotencyKey })
 */
    revoke(partner_app_install_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<PartnerAppInstall>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/partnerAppInstalls.md#partnerappinstallsrevoke
     */
    revokeWithResponse(partner_app_install_id: InputValue<string>, params?: {
        "Idempotency-Key"?: InputValue<string>;
    }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PartnerAppInstallResponse>>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly partnerAppInstalls: PartnerAppInstallsResource;
}

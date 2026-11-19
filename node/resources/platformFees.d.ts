import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-7.js';
import type { PlatformFee } from '../declarations/types-55.js';
import type { PlatformFeeListResponse, PlatformFeeResponse, PlatformFeesGetParams, PlatformFeesListParams } from '../declarations/types-56.js';
import type { RequestOptions } from '../declarations/types-62.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
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
export type { PlatformFeesGetParams, PlatformFeeResponse, PlatformFeesListParams, PlatformFeeListResponse } from '../declarations/types-56.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-80.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-62.js';
export type { PlatformFee } from '../declarations/types-55.js';
export type { ClientOptions } from '../declarations/types-7.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-15.js';
export type { MoneyValue, NextAction } from '../declarations/types-44.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-60.js';
export { makeMoneyValue } from '../declarations/types-88.js';
export interface PlatformFeesResource {
    /**
 * Returns one platform fee. Reads the merchant that owns the partner app, with its own credentials
 * and money_movement.platform_fees.read; partner app tokens can't. Live records are in your live
 * environment. Test records are in your default sandbox at the time the payment was created. A
 * merchant that owns no partner app gets an empty list.
 *
 * `GET /v1/platform-fees/{platform_fee_id}`
 * @param platform_fee_id Flint platform fee ID. Must be a valid ID with prefix pfee_. Malformed
 * IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist
 * return 404 RESOURCE_NOT_FOUND.
 * @see https://developers.withflintpay.com/docs/api/platform-fees#getPlatformFee
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.platformFees.get("pfee_01KEZF7C00JHAZN19B3MMW0R3A")
 */
    get(platform_fee_id: InputValue<string>, params?: PlatformFeesGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PlatformFee, PlatformFeeResponse>>;
    /**
 * Lists the platform fees your partner apps charged, newest first, then by platform_fee_id. Reads
 * the merchant that owns the partner app, with its own credentials and
 * money_movement.platform_fees.read; partner app tokens can't. Live records are in your live
 * environment. Test records are in your default sandbox at the time the payment was created. A
 * merchant that owns no partner app gets an empty list. Default order: created_at descending, then
 * platform_fee_id descending.
 *
 * `GET /v1/platform-fees`
 * @see https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFees
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.platformFees.list()
 */
    list(params?: PlatformFeesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PlatformFeeListResponse, PlatformFeeListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFees
     */
    listPages(params?: PlatformFeesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PlatformFeeListResponse, PlatformFeeListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFees
     */
    listItems(params?: PlatformFeesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PlatformFee>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly platformFees: PlatformFeesResource;
}

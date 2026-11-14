import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    PlatformFeePayout,
    PlatformFeePayoutListResponse,
    PlatformFeePayoutResponse,
    PlatformFeePayoutsGetParams,
    PlatformFeePayoutsListParams
} from '../declarations/types-49.js';
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
    PlatformFeePayoutsGetParams,
    PlatformFeePayout,
    PlatformFeePayoutResponse,
    PlatformFeePayoutsListParams,
    PlatformFeePayoutListResponse
} from '../declarations/types-49.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MoneyValue, NextAction } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export interface PlatformFeePayoutsResource {
    /**
 * Returns one platform fee payout. Reads the merchant that owns the partner app, with its own
 * credentials and money_movement.platform_fees.read; partner app tokens can't. Live records are in
 * your live environment. Test records are in your default sandbox at the time the payment was
 * created. A merchant that owns no partner app gets an empty list.
 *
 * `GET /v1/platform-fee-payouts/{platform_fee_payout_id}`
 * @param platform_fee_payout_id Flint platform fee payout ID.
 * @see https://developers.withflintpay.com/docs/api/platform-fees#getPlatformFeePayout
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.platformFeePayouts.get("pfpo_01KEZF7C00H58B147FK286D4A4")
 */
    get(platform_fee_payout_id: InputValue<string>, params?: PlatformFeePayoutsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PlatformFeePayout, PlatformFeePayoutResponse>>;
    /**
 * Lists payouts from your partner apps' fee balances to your merchant balance, newest first, then
 * by platform_fee_payout_id. Reads the merchant that owns the partner app, with its own
 * credentials and money_movement.platform_fees.read; partner app tokens can't. Live records are in
 * your live environment. Test records are in your default sandbox at the time the payment was
 * created. A merchant that owns no partner app gets an empty list. Default order: created_at
 * descending, then platform_fee_payout_id descending.
 *
 * `GET /v1/platform-fee-payouts`
 * @see https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFeePayouts
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.platformFeePayouts.list()
 */
    list(params?: PlatformFeePayoutsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PlatformFeePayoutListResponse, PlatformFeePayoutListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFeePayouts
     */
    listPages(params?: PlatformFeePayoutsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PlatformFeePayoutListResponse, PlatformFeePayoutListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFeePayouts
     */
    listItems(params?: PlatformFeePayoutsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PlatformFeePayout>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly platformFeePayouts: PlatformFeePayoutsResource;
}

import type { WithResponseInfo } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type { PlatformFeeBalance, PlatformFeeBalanceListResponse, PlatformFeeBalancesListParams } from '../declarations/types-49.js';
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
export type { PlatformFeeBalancesListParams, PlatformFeeBalanceListResponse, PlatformFeeBalance } from '../declarations/types-49.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-70.js';
export type { RequestOptions, ResponseMeta, ResponseWarning, ResourceReference } from '../declarations/types-54.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { NextAction, MoneyValue } from '../declarations/types-39.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeMoneyValue } from '../declarations/types-79.js';
export interface PlatformFeeBalancesResource {
    /**
 * Lists your partner apps' platform fee balances, one per partner app and currency, newest first.
 * Reads the merchant that owns the partner app, with its own credentials and
 * money_movement.platform_fees.read; partner app tokens can't. Live records are in your live
 * environment. Test records are in your default sandbox at the time the payment was created. A
 * merchant that owns no partner app gets an empty list. Default order: time Flint opened the
 * balance (descending), then platform_fee_balance_id descending.
 *
 * `GET /v1/platform-fee-balances`
 * @see https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFeeBalances
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.platformFeeBalances.list()
 */
    list(params?: PlatformFeeBalancesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PlatformFeeBalanceListResponse, PlatformFeeBalanceListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFeeBalances
     */
    listPages(params?: PlatformFeeBalancesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PlatformFeeBalanceListResponse, PlatformFeeBalanceListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFeeBalances
     */
    listItems(params?: PlatformFeeBalancesListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PlatformFeeBalance>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly platformFeeBalances: PlatformFeeBalancesResource;
}

import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-6.js';
import type {
    PlatformFeeBalanceTransaction,
    PlatformFeeBalanceTransactionListResponse,
    PlatformFeeBalanceTransactionResponse,
    PlatformFeeBalanceTransactionsGetParams,
    PlatformFeeBalanceTransactionsListParams
} from '../declarations/types-48.js';
import type { RequestOptions } from '../declarations/types-53.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
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
    PlatformFeeBalanceTransactionsGetParams,
    PlatformFeeBalanceTransaction,
    PlatformFeeBalanceTransactionResponse,
    PlatformFeeBalanceTransactionsListParams,
    PlatformFeeBalanceTransactionListResponse
} from '../declarations/types-48.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { AuthMode } from '../declarations/types-1.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MoneyValue, NextAction } from '../declarations/types-38.js';
export type { ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export interface PlatformFeeBalanceTransactionsResource {
    /**
 * Returns one entry of your partner apps' platform fee ledger. Reads the merchant that owns the
 * partner app, with its own credentials and money_movement.platform_fees.read; partner app tokens
 * can't. Live records are in your live environment. Test records are in your default sandbox at
 * the time the payment was created. A merchant that owns no partner app gets an empty list.
 *
 * `GET /v1/platform-fee-balance-transactions/{platform_fee_balance_transaction_id}`
 * @param platform_fee_balance_transaction_id Flint platform fee balance transaction ID.
 * @see https://developers.withflintpay.com/docs/api/platform-fees#getPlatformFeeBalanceTransaction
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.platformFeeBalanceTransactions.get("pfbt_01KEZF7C0079KPKMAHC7C60G1T")
 */
    get(platform_fee_balance_transaction_id: InputValue<string>, params?: PlatformFeeBalanceTransactionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PlatformFeeBalanceTransaction, PlatformFeeBalanceTransactionResponse>>;
    /**
 * Lists your partner apps' platform fee ledger, newest occurred_at first, then by
 * platform_fee_balance_transaction_id. Reads the merchant that owns the partner app, with its own
 * credentials and money_movement.platform_fees.read; partner app tokens can't. Live records are in
 * your live environment. Test records are in your default sandbox at the time the payment was
 * created. A merchant that owns no partner app gets an empty list. Default order: occurred_at
 * descending, then platform_fee_balance_transaction_id descending.
 *
 * `GET /v1/platform-fee-balance-transactions`
 * @see
 * https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFeeBalanceTransactions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.platformFeeBalanceTransactions.list()
 */
    list(params?: PlatformFeeBalanceTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<PlatformFeeBalanceTransactionListResponse, PlatformFeeBalanceTransactionListResponse>>;
    /** Iterate pages lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFeeBalanceTransactions
     */
    listPages(params?: PlatformFeeBalanceTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<PlatformFeeBalanceTransactionListResponse, PlatformFeeBalanceTransactionListResponse>>;
    /** Iterate items lazily.
     * @see
     * https://developers.withflintpay.com/docs/api/platform-fees#listPlatformFeeBalanceTransactions
     */
    listItems(params?: PlatformFeeBalanceTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<PlatformFeeBalanceTransaction>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly platformFeeBalanceTransactions: PlatformFeeBalanceTransactionsResource;
}

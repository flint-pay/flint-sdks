import type { WithResponseInfo, InputValue } from '../runtime.js';
import type {
    BalanceTransaction,
    BalanceTransactionListResponse,
    BalanceTransactionResponse,
    BalanceTransactionsGetParams,
    BalanceTransactionsListParams
} from '../declarations/types-1.js';
import type { ClientOptions } from '../declarations/types-6.js';
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
    BalanceTransactionsGetParams,
    BalanceTransaction,
    BalanceTransactionResponse,
    BalanceTransactionsListParams,
    BalanceTransactionListResponse,
    AuthMode
} from '../declarations/types-1.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-69.js';
export type { RequestOptions } from '../declarations/types-53.js';
export type { ClientOptions } from '../declarations/types-6.js';
export type { Credentials } from '../declarations/types-14.js';
export type { MoneyValue, NextAction, MoneyMovementListMeta, MoneyMovementHistoryMeta } from '../declarations/types-38.js';
export type { ExpandedOrderSummary } from '../declarations/types-24.js';
export type { CheckoutBuyerContact } from '../declarations/types-5.js';
export type { DeferredPromotion } from '../declarations/types-16.js';
export type { PricingAmounts } from '../declarations/types-49.js';
export type { OrderSettlementAmounts } from '../declarations/types-41.js';
export type { SettlementAmounts } from '../declarations/types-59.js';
export type { ResourceReference, ResponseMeta, ResponseWarning } from '../declarations/types-54.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-52.js';
export { makeMoneyValue } from '../declarations/types-78.js';
export interface BalanceTransactionsResource {
    /**
 * Returns one balance transaction by ID, with optional related order expansion.
 *
 * `GET /v1/balance-transactions/{balance_transaction_id}`
 * @param balance_transaction_id Flint balance transaction ID.
 * @see https://developers.withflintpay.com/docs/api/money-movement#getBalanceTransaction
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.balanceTransactions.get("btxn_01KEZF7C00H1Z82CMFWWXMZGHZ")
 */
    get(balance_transaction_id: InputValue<string>, params?: BalanceTransactionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<BalanceTransaction, BalanceTransactionResponse>>;
    /**
 * Returns a paginated ledger of balance-affecting transactions, including availability timing and
 * related public resources. Default order: occurred_at descending, then balance_transaction_id
 * descending.
 *
 * `GET /v1/balance-transactions`
 * @see https://developers.withflintpay.com/docs/api/money-movement#listBalanceTransactions
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.balanceTransactions.list()
 */
    list(params?: BalanceTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<BalanceTransactionListResponse, BalanceTransactionListResponse>>;
    /** Iterate pages lazily.
     * @see https://developers.withflintpay.com/docs/api/money-movement#listBalanceTransactions
     */
    listPages(params?: BalanceTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<WithResponseInfo<BalanceTransactionListResponse, BalanceTransactionListResponse>>;
    /** Iterate items lazily.
     * @see https://developers.withflintpay.com/docs/api/money-movement#listBalanceTransactions
     */
    listItems(params?: BalanceTransactionsListParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<BalanceTransaction>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly balanceTransactions: BalanceTransactionsResource;
}

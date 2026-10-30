import type { WithResponseInfo, InputValue } from '../runtime.js';
import type { BalanceTransaction, BalanceTransactionListResponse, BalanceTransactionResponse } from '../declarations/types-0.js';
import type { BalanceTransactionsGetParams, BalanceTransactionsListParams } from '../declarations/types-1.js';
import type { ClientOptions } from '../declarations/types-5.js';
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
export type { BalanceTransactionsGetParams, BalanceTransactionsListParams } from '../declarations/types-1.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-61.js';
export type { RequestOptions, ResourceReference } from '../declarations/types-47.js';
export type { BalanceTransaction, BalanceTransactionResponse, BalanceTransactionListResponse, AuthMode } from '../declarations/types-0.js';
export type { ClientOptions } from '../declarations/types-5.js';
export type { Credentials } from '../declarations/types-12.js';
export type { MoneyValue, NextAction, MoneyMovementListMeta, MoneyMovementHistoryMeta } from '../declarations/types-35.js';
export type { ExpandedOrderSummary } from '../declarations/types-21.js';
export type { CheckoutBuyerContact } from '../declarations/types-4.js';
export type { PricingAmounts } from '../declarations/types-43.js';
export type { SettlementAmounts } from '../declarations/types-53.js';
export type { ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-48.js';
export type { ReadinessMerchantAccountSession } from '../declarations/types-46.js';
export { makeMoneyValue } from '../declarations/types-69.js';
export interface BalanceTransactionsResource {
    /**
 * Returns one balance transaction by ID, with optional related order expansion.
 *
 * `GET /v1/balance-transactions/{balance_transaction_id}`
 * @param balance_transaction_id Flint balance transaction ID.
 * @see https://developers.withflintpay.com/docs/api/money-movement#getBalanceTransaction
 * @throws {SdkError} When the request fails; inspect `kind`, `code` and `outcome`.
 * @example
 * client.balanceTransactions.get("btxn_01ARZ3NDEKTSV4RRFFQ69G5FAV")
 */
    get(balance_transaction_id: InputValue<string>, params?: BalanceTransactionsGetParams, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<WithResponseInfo<BalanceTransaction, BalanceTransactionResponse>>;
    /**
 * Returns a paginated ledger of balance-affecting transactions, including availability timing and
 * related public resources. Default order: created_at descending, then balance_transaction_id
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

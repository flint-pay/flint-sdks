import type { InputValue } from '../runtime.js';
import type {
    BalanceTransaction,
    BalanceTransactionListResponse,
    BalanceTransactionResponse,
    BalanceTransactionsGetInput,
    BalanceTransactionsListInput
} from '../declarations/types-0.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type { RequestOptions } from '../declarations/types-40.js';
import type { SdkResponse } from '../declarations/types-44.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
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
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-62.js';
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta, ResponseWarning } from '../declarations/types-40.js';
export type {
    BalanceTransaction,
    BalanceTransactionResponse,
    BalanceTransactionListResponse,
    BalanceTransactionsGetInput,
    BalanceTransactionsListInput,
    AuthMode
} from '../declarations/types-0.js';
export type { SdkResponse, SettlementAmounts } from '../declarations/types-44.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { Credentials } from '../declarations/types-9.js';
export type {
    MoneyValue,
    NextAction,
    NextActionMerchantAccountSession,
    MoneyMovementListMeta,
    MoneyMovementHistoryMeta
} from '../declarations/types-31.js';
export type { ExpandedOrderSummary } from '../declarations/types-16.js';
export type { CheckoutBuyerContact } from '../declarations/types-3.js';
export type { PricingAmounts } from '../declarations/types-37.js';
export { makeMoneyValue } from '../declarations/types-68.js';
export interface BalanceTransactionsResource {
    /**
 * Returns one balance transaction by ID, with optional related order expansion.
 * @see reference/balanceTransactions.md#balancetransactionsget
 * GET /v1/balance-transactions/{balance_transaction_id}
 * @example
 * client.balanceTransactions.get("example")
 */
    get(balance_transaction_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<BalanceTransaction>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/balanceTransactions.md#balancetransactionsget
     */
    getWithResponse(balance_transaction_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"order">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<BalanceTransactionResponse>>;
    /**
 * Returns a paginated ledger of balance-affecting transactions, including availability timing and
 * related public resources.
 * @see reference/balanceTransactions.md#balancetransactionslist
 * GET /v1/balance-transactions
 * @example
 * client.balanceTransactions.list()
 */
    list(params?: {
        "currency"?: InputValue<string>;
        "payout_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
        "type"?: InputValue<Array<"payment"
            | "refund"
            | "dispute"
            | "dispute_reversal"
            | "return"
            | "recovery"
            | "payout"
            | "payout_failure"
            | "payout_cancellation"
            | "payout_reversal"
            | "payout_advance"
            | "payout_advance_funding"
            | "reserve_hold"
            | "reserve_release"
            | "adjustment"
            | "merchant_billing_collection"
            | "merchant_billing_collection_reversal">>;
        "related_resource_type"?: InputValue<Array<"payment_intent"
            | "refund"
            | "dispute"
            | "payout"
            | "payout_destination"
            | "merchant_billing_invoice">>;
        "related_resource_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "available">>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "available_after"?: InputValue<string | globalThis.Date>;
        "available_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<BalanceTransactionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/balanceTransactions.md#balancetransactionslist
     */
    listWithResponse(params?: {
        "currency"?: InputValue<string>;
        "payout_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
        "type"?: InputValue<Array<"payment"
            | "refund"
            | "dispute"
            | "dispute_reversal"
            | "return"
            | "recovery"
            | "payout"
            | "payout_failure"
            | "payout_cancellation"
            | "payout_reversal"
            | "payout_advance"
            | "payout_advance_funding"
            | "reserve_hold"
            | "reserve_release"
            | "adjustment"
            | "merchant_billing_collection"
            | "merchant_billing_collection_reversal">>;
        "related_resource_type"?: InputValue<Array<"payment_intent"
            | "refund"
            | "dispute"
            | "payout"
            | "payout_destination"
            | "merchant_billing_invoice">>;
        "related_resource_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "available">>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "available_after"?: InputValue<string | globalThis.Date>;
        "available_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<BalanceTransactionListResponse>>;
    /** Iterate pages lazily.
     * @see reference/balanceTransactions.md#balancetransactionslist
     */
    listPages(params?: {
        "currency"?: InputValue<string>;
        "payout_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
        "type"?: InputValue<Array<"payment"
            | "refund"
            | "dispute"
            | "dispute_reversal"
            | "return"
            | "recovery"
            | "payout"
            | "payout_failure"
            | "payout_cancellation"
            | "payout_reversal"
            | "payout_advance"
            | "payout_advance_funding"
            | "reserve_hold"
            | "reserve_release"
            | "adjustment"
            | "merchant_billing_collection"
            | "merchant_billing_collection_reversal">>;
        "related_resource_type"?: InputValue<Array<"payment_intent"
            | "refund"
            | "dispute"
            | "payout"
            | "payout_destination"
            | "merchant_billing_invoice">>;
        "related_resource_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "available">>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "available_after"?: InputValue<string | globalThis.Date>;
        "available_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<BalanceTransactionListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/balanceTransactions.md#balancetransactionslist
     */
    listPagesWithResponse(params?: {
        "currency"?: InputValue<string>;
        "payout_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
        "type"?: InputValue<Array<"payment"
            | "refund"
            | "dispute"
            | "dispute_reversal"
            | "return"
            | "recovery"
            | "payout"
            | "payout_failure"
            | "payout_cancellation"
            | "payout_reversal"
            | "payout_advance"
            | "payout_advance_funding"
            | "reserve_hold"
            | "reserve_release"
            | "adjustment"
            | "merchant_billing_collection"
            | "merchant_billing_collection_reversal">>;
        "related_resource_type"?: InputValue<Array<"payment_intent"
            | "refund"
            | "dispute"
            | "payout"
            | "payout_destination"
            | "merchant_billing_invoice">>;
        "related_resource_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "available">>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "available_after"?: InputValue<string | globalThis.Date>;
        "available_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<BalanceTransactionListResponse>>;
    /** Iterate items lazily.
     * @see reference/balanceTransactions.md#balancetransactionslist
     */
    listItems(params?: {
        "currency"?: InputValue<string>;
        "payout_id"?: InputValue<string>;
        "order_id"?: InputValue<string>;
        "expand"?: InputValue<Array<"order">>;
        "type"?: InputValue<Array<"payment"
            | "refund"
            | "dispute"
            | "dispute_reversal"
            | "return"
            | "recovery"
            | "payout"
            | "payout_failure"
            | "payout_cancellation"
            | "payout_reversal"
            | "payout_advance"
            | "payout_advance_funding"
            | "reserve_hold"
            | "reserve_release"
            | "adjustment"
            | "merchant_billing_collection"
            | "merchant_billing_collection_reversal">>;
        "related_resource_type"?: InputValue<Array<"payment_intent"
            | "refund"
            | "dispute"
            | "payout"
            | "payout_destination"
            | "merchant_billing_invoice">>;
        "related_resource_id"?: InputValue<string>;
        "status"?: InputValue<Array<"pending" | "available">>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "available_after"?: InputValue<string | globalThis.Date>;
        "available_before"?: InputValue<string | globalThis.Date>;
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<BalanceTransaction>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly balanceTransactions: BalanceTransactionsResource;
}

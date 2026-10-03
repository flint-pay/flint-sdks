export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { BalanceTransaction } from '../declarations/BalanceTransaction.js';
import type { BalanceTransactionListResponse } from '../declarations/BalanceTransactionListResponse.js';
import type { BalanceTransactionResponse } from '../declarations/BalanceTransactionResponse.js';
import type { BalanceTransactionsGetInput } from '../declarations/BalanceTransactionsGetInput.js';
import type { BalanceTransactionsGetResponse } from '../declarations/BalanceTransactionsGetResponse.js';
import type { BalanceTransactionsListInput } from '../declarations/BalanceTransactionsListInput.js';
import type { BalanceTransactionsListResponse } from '../declarations/BalanceTransactionsListResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface BalanceTransactionsResource {
    /**
 * Returns one balance transaction by ID, with optional related order expansion.
 * GET /v1/balance-transactions/{balance_transaction_id}
 * @example
 * client.balanceTransactions.get("example")
 */
    get(balance_transaction_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"order">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<BalanceTransactionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(balance_transaction_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"order">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<BalanceTransactionsGetResponse>>;
    /**
 * Returns a paginated ledger of balance-affecting transactions, including availability timing and related public resources.
 * GET /v1/balance-transactions
 * @example
 * client.balanceTransactions.list()
 */
    list(params?: { "currency"?: InputValue<string>; "type"?: InputValue<"payment" | "refund" | "dispute" | "dispute_reversal" | "return" | "recovery" | "payout" | "payout_failure" | "payout_cancellation" | "payout_reversal" | "payout_advance" | "payout_advance_funding" | "reserve_hold" | "reserve_release" | "payout_hold" | "payout_hold_release" | "adjustment" | "merchant_billing_payment" | "merchant_billing_payment_reversal">; "related_object_type"?: InputValue<"payment_intent" | "refund" | "dispute" | "payout" | "payout_destination" | "reserve" | "adjustment" | "merchant_subscription_invoice">; "related_object_id"?: InputValue<string>; "status"?: InputValue<"pending" | "available" | "reserved" | "reversed" | "failed" | "superseded">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "available_after"?: InputValue<string | globalThis.Date>; "available_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<BalanceTransactionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "currency"?: InputValue<string>; "type"?: InputValue<"payment" | "refund" | "dispute" | "dispute_reversal" | "return" | "recovery" | "payout" | "payout_failure" | "payout_cancellation" | "payout_reversal" | "payout_advance" | "payout_advance_funding" | "reserve_hold" | "reserve_release" | "payout_hold" | "payout_hold_release" | "adjustment" | "merchant_billing_payment" | "merchant_billing_payment_reversal">; "related_object_type"?: InputValue<"payment_intent" | "refund" | "dispute" | "payout" | "payout_destination" | "reserve" | "adjustment" | "merchant_subscription_invoice">; "related_object_id"?: InputValue<string>; "status"?: InputValue<"pending" | "available" | "reserved" | "reversed" | "failed" | "superseded">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "available_after"?: InputValue<string | globalThis.Date>; "available_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<BalanceTransactionsListResponse>>;
    listPages(params?: { "currency"?: InputValue<string>; "type"?: InputValue<"payment" | "refund" | "dispute" | "dispute_reversal" | "return" | "recovery" | "payout" | "payout_failure" | "payout_cancellation" | "payout_reversal" | "payout_advance" | "payout_advance_funding" | "reserve_hold" | "reserve_release" | "payout_hold" | "payout_hold_release" | "adjustment" | "merchant_billing_payment" | "merchant_billing_payment_reversal">; "related_object_type"?: InputValue<"payment_intent" | "refund" | "dispute" | "payout" | "payout_destination" | "reserve" | "adjustment" | "merchant_subscription_invoice">; "related_object_id"?: InputValue<string>; "status"?: InputValue<"pending" | "available" | "reserved" | "reversed" | "failed" | "superseded">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "available_after"?: InputValue<string | globalThis.Date>; "available_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<BalanceTransactionListResponse>;
    listPagesWithResponse(params?: { "currency"?: InputValue<string>; "type"?: InputValue<"payment" | "refund" | "dispute" | "dispute_reversal" | "return" | "recovery" | "payout" | "payout_failure" | "payout_cancellation" | "payout_reversal" | "payout_advance" | "payout_advance_funding" | "reserve_hold" | "reserve_release" | "payout_hold" | "payout_hold_release" | "adjustment" | "merchant_billing_payment" | "merchant_billing_payment_reversal">; "related_object_type"?: InputValue<"payment_intent" | "refund" | "dispute" | "payout" | "payout_destination" | "reserve" | "adjustment" | "merchant_subscription_invoice">; "related_object_id"?: InputValue<string>; "status"?: InputValue<"pending" | "available" | "reserved" | "reversed" | "failed" | "superseded">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "available_after"?: InputValue<string | globalThis.Date>; "available_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<BalanceTransactionsListResponse>>;
    listItems(params?: { "currency"?: InputValue<string>; "type"?: InputValue<"payment" | "refund" | "dispute" | "dispute_reversal" | "return" | "recovery" | "payout" | "payout_failure" | "payout_cancellation" | "payout_reversal" | "payout_advance" | "payout_advance_funding" | "reserve_hold" | "reserve_release" | "payout_hold" | "payout_hold_release" | "adjustment" | "merchant_billing_payment" | "merchant_billing_payment_reversal">; "related_object_type"?: InputValue<"payment_intent" | "refund" | "dispute" | "payout" | "payout_destination" | "reserve" | "adjustment" | "merchant_subscription_invoice">; "related_object_id"?: InputValue<string>; "status"?: InputValue<"pending" | "available" | "reserved" | "reversed" | "failed" | "superseded">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "available_after"?: InputValue<string | globalThis.Date>; "available_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<BalanceTransaction>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly balanceTransactions: BalanceTransactionsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { BalanceTransactionResponse } from '../declarations/BalanceTransactionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { BalanceTransactionsGetResponse } from '../declarations/BalanceTransactionsGetResponse.js';
export type { BalanceTransactionListResponse } from '../declarations/BalanceTransactionListResponse.js';
export type { BalanceTransactionsListResponse } from '../declarations/BalanceTransactionsListResponse.js';
export type { BalanceTransaction } from '../declarations/BalanceTransaction.js';
export type { BalanceTransactionsGetInput } from '../declarations/BalanceTransactionsGetInput.js';
export type { BalanceTransactionsListInput } from '../declarations/BalanceTransactionsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { MoneyMovementListMeta } from '../declarations/MoneyMovementListMeta.js';
export type { MoneyMovementHistoryMeta } from '../declarations/MoneyMovementHistoryMeta.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { PricingAmounts } from '../declarations/PricingAmounts.js';
export type { SettlementAmounts } from '../declarations/SettlementAmounts.js';
export type { SignedMoney } from '../declarations/SignedMoney.js';
export { makeBalanceTransactionResponse } from '../declarations/makeBalanceTransactionResponse.js';
export { makeBalanceTransactionListResponse } from '../declarations/makeBalanceTransactionListResponse.js';
export { makeBalanceTransaction } from '../declarations/makeBalanceTransaction.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeMoneyMovementListMeta } from '../declarations/makeMoneyMovementListMeta.js';
export { makeMoneyMovementHistoryMeta } from '../declarations/makeMoneyMovementHistoryMeta.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makePricingAmounts } from '../declarations/makePricingAmounts.js';
export { makeSettlementAmounts } from '../declarations/makeSettlementAmounts.js';
export { makeSignedMoney } from '../declarations/makeSignedMoney.js';

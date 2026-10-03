export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
import type { Payout } from '../declarations/Payout.js';
import type { PayoutEntry } from '../declarations/PayoutEntry.js';
import type { PayoutEntryListResponse } from '../declarations/PayoutEntryListResponse.js';
import type { PayoutListResponse } from '../declarations/PayoutListResponse.js';
import type { PayoutResponse } from '../declarations/PayoutResponse.js';
import type { PayoutsCancelInput } from '../declarations/PayoutsCancelInput.js';
import type { PayoutsCancelResponse } from '../declarations/PayoutsCancelResponse.js';
import type { PayoutsCreateInput } from '../declarations/PayoutsCreateInput.js';
import type { PayoutsCreateResponse } from '../declarations/PayoutsCreateResponse.js';
import type { PayoutsGetInput } from '../declarations/PayoutsGetInput.js';
import type { PayoutsGetResponse } from '../declarations/PayoutsGetResponse.js';
import type { PayoutsListEntriesInput } from '../declarations/PayoutsListEntriesInput.js';
import type { PayoutsListEntriesResponse } from '../declarations/PayoutsListEntriesResponse.js';
import type { PayoutsListInput } from '../declarations/PayoutsListInput.js';
import type { PayoutsListResponse } from '../declarations/PayoutsListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface PayoutsResource {
    /**
 * Cancels an eligible payout before it leaves Flint-controlled processing and returns the resulting payout.
 * POST /v1/payouts/{payout_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payouts.cancel("example", {}, { idempotencyKey: idempotencyKey })
 */
    cancel(payout_id: InputValue<string>, params: (InputValue<{  [key: string]: unknown; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PayoutResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelWithResponse(payout_id: InputValue<string>, params: (InputValue<{  [key: string]: unknown; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PayoutsCancelResponse>>;
    /**
 * Creates a payout from an available balance to an eligible payout destination. Safe to retry with the same Idempotency-Key.
 * POST /v1/payouts
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.payouts.create({amount_money: {amount: "0", currency: "USD"}}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "amount_money": MoneyValueInput; "balance_source_type"?: "card" | "bank_account" | "fpx"; "description"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string>; "method"?: "standard"; "payout_destination_id"?: string; "statement_descriptor"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<PayoutResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "amount_money": MoneyValueInput; "balance_source_type"?: "card" | "bank_account" | "fpx"; "description"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string>; "method"?: "standard"; "payout_destination_id"?: string; "statement_descriptor"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<PayoutsCreateResponse>>;
    /**
 * Returns one payout by ID, with optional related payout and payout destination expansions.
 * GET /v1/payouts/{payout_id}
 * @example
 * client.payouts.get("example")
 */
    get(payout_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<PayoutResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(payout_id: InputValue<string>, params?: { "expand"?: InputValue<Array<"original_payout" | "payout_destination" | "reversed_by_payout">>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PayoutsGetResponse>>;
    /**
 * Lists the authoritative balance-transaction allocations for a payout in ascending occurrence order. A paid payout returns an unavailable error instead of incomplete or inferred entries.
 * GET /v1/payouts/{payout_id}/entries
 * @example
 * client.payouts.listEntries("example")
 */
    listEntries(payout_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PayoutEntryListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listEntriesWithResponse(payout_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PayoutsListEntriesResponse>>;
    listEntriesPages(payout_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PayoutEntryListResponse>;
    listEntriesPagesWithResponse(payout_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PayoutsListEntriesResponse>>;
    listEntriesItems(payout_id: InputValue<string>, params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PayoutEntry>;
    /**
 * Returns a paginated list of payouts with optional filters for status, currency, destination, method, and timing.
 * GET /v1/payouts
 * @example
 * client.payouts.list()
 */
    list(params?: { "currency"?: InputValue<string>; "method"?: InputValue<"standard">; "balance_source_type"?: InputValue<"card" | "bank_account" | "fpx">; "payout_destination_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "paid" | "failed" | "canceled">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "arrival_after"?: InputValue<string | globalThis.Date>; "arrival_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<PayoutListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "currency"?: InputValue<string>; "method"?: InputValue<"standard">; "balance_source_type"?: InputValue<"card" | "bank_account" | "fpx">; "payout_destination_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "paid" | "failed" | "canceled">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "arrival_after"?: InputValue<string | globalThis.Date>; "arrival_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<PayoutsListResponse>>;
    listPages(params?: { "currency"?: InputValue<string>; "method"?: InputValue<"standard">; "balance_source_type"?: InputValue<"card" | "bank_account" | "fpx">; "payout_destination_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "paid" | "failed" | "canceled">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "arrival_after"?: InputValue<string | globalThis.Date>; "arrival_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<PayoutListResponse>;
    listPagesWithResponse(params?: { "currency"?: InputValue<string>; "method"?: InputValue<"standard">; "balance_source_type"?: InputValue<"card" | "bank_account" | "fpx">; "payout_destination_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "paid" | "failed" | "canceled">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "arrival_after"?: InputValue<string | globalThis.Date>; "arrival_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<PayoutsListResponse>>;
    listItems(params?: { "currency"?: InputValue<string>; "method"?: InputValue<"standard">; "balance_source_type"?: InputValue<"card" | "bank_account" | "fpx">; "payout_destination_id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "status"?: InputValue<"pending" | "in_transit" | "paid" | "failed" | "canceled">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "arrival_after"?: InputValue<string | globalThis.Date>; "arrival_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "X-Request-Id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<Payout>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly payouts: PayoutsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { PayoutResponse } from '../declarations/PayoutResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { PayoutsCancelResponse } from '../declarations/PayoutsCancelResponse.js';
export type { MoneyValueInput } from '../declarations/MoneyValueInput.js';
export type { PayoutsCreateResponse } from '../declarations/PayoutsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { PayoutsGetResponse } from '../declarations/PayoutsGetResponse.js';
export type { PayoutEntryListResponse } from '../declarations/PayoutEntryListResponse.js';
export type { PayoutsListEntriesResponse } from '../declarations/PayoutsListEntriesResponse.js';
export type { PayoutEntry } from '../declarations/PayoutEntry.js';
export type { PayoutListResponse } from '../declarations/PayoutListResponse.js';
export type { PayoutsListResponse } from '../declarations/PayoutsListResponse.js';
export type { Payout } from '../declarations/Payout.js';
export type { PayoutsCancelInput } from '../declarations/PayoutsCancelInput.js';
export type { PayoutsCreateInput } from '../declarations/PayoutsCreateInput.js';
export type { PayoutsGetInput } from '../declarations/PayoutsGetInput.js';
export type { PayoutsListEntriesInput } from '../declarations/PayoutsListEntriesInput.js';
export type { PayoutsListInput } from '../declarations/PayoutsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { MoneyMovementListMeta } from '../declarations/MoneyMovementListMeta.js';
export type { MoneyMovementHistoryMeta } from '../declarations/MoneyMovementHistoryMeta.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { CancelPayoutRequestInput } from '../declarations/CancelPayoutRequestInput.js';
export type { CreatePayoutRequestInput } from '../declarations/CreatePayoutRequestInput.js';
export { makePayoutResponse } from '../declarations/makePayoutResponse.js';
export { makePayoutEntryListResponse } from '../declarations/makePayoutEntryListResponse.js';
export { makePayoutEntry } from '../declarations/makePayoutEntry.js';
export { makePayoutListResponse } from '../declarations/makePayoutListResponse.js';
export { makePayout } from '../declarations/makePayout.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeMoneyMovementListMeta } from '../declarations/makeMoneyMovementListMeta.js';
export { makeMoneyMovementHistoryMeta } from '../declarations/makeMoneyMovementHistoryMeta.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';

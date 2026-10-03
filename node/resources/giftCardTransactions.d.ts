export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { GiftCardTransaction } from '../declarations/GiftCardTransaction.js';
import type { GiftCardTransactionListResponse } from '../declarations/GiftCardTransactionListResponse.js';
import type { GiftCardTransactionsListInput } from '../declarations/GiftCardTransactionsListInput.js';
import type { GiftCardTransactionsListResponse } from '../declarations/GiftCardTransactionsListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface GiftCardTransactionsResource {
    /**
 * Lists immutable financial entries across the merchant in ascending merchant_sequence order. Per-card sequences and balance snapshots support reconciliation. Reservations and code replacement never create financial debits.
 * GET /v1/gift-card-transactions
 * @example
 * client.giftCardTransactions.list()
 */
    list(params?: { "X-Request-Id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "from_at"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_id"?: InputValue<string>; "source_type"?: InputValue<string>; "until_at"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<GiftCardTransactionListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "from_at"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_id"?: InputValue<string>; "source_type"?: InputValue<string>; "until_at"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<GiftCardTransactionsListResponse>>;
    listPages(params?: { "X-Request-Id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "from_at"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_id"?: InputValue<string>; "source_type"?: InputValue<string>; "until_at"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardTransactionListResponse>;
    listPagesWithResponse(params?: { "X-Request-Id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "from_at"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_id"?: InputValue<string>; "source_type"?: InputValue<string>; "until_at"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<GiftCardTransactionsListResponse>>;
    listItems(params?: { "X-Request-Id"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "from_at"?: InputValue<string | globalThis.Date>; "gift_card_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "order_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "source_id"?: InputValue<string>; "source_type"?: InputValue<string>; "until_at"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<GiftCardTransaction>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly giftCardTransactions: GiftCardTransactionsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { GiftCardTransactionListResponse } from '../declarations/GiftCardTransactionListResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { GiftCardTransactionsListResponse } from '../declarations/GiftCardTransactionsListResponse.js';
export type { GiftCardTransaction } from '../declarations/GiftCardTransaction.js';
export type { GiftCardTransactionsListInput } from '../declarations/GiftCardTransactionsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export { makeGiftCardTransactionListResponse } from '../declarations/makeGiftCardTransactionListResponse.js';
export { makeGiftCardTransaction } from '../declarations/makeGiftCardTransaction.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';

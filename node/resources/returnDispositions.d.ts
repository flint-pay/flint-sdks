export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { CancelReturnDispositionResponse } from '../declarations/CancelReturnDispositionResponse.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { ListReturnDispositionsResponse } from '../declarations/ListReturnDispositionsResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ReturnDisposition } from '../declarations/ReturnDisposition.js';
import type { ReturnDispositionsCancelInput } from '../declarations/ReturnDispositionsCancelInput.js';
import type { ReturnDispositionsCancelResponse } from '../declarations/ReturnDispositionsCancelResponse.js';
import type { ReturnDispositionsGetInput } from '../declarations/ReturnDispositionsGetInput.js';
import type { ReturnDispositionsGetResponse } from '../declarations/ReturnDispositionsGetResponse.js';
import type { ReturnDispositionsListInput } from '../declarations/ReturnDispositionsListInput.js';
import type { ReturnDispositionsListResponse } from '../declarations/ReturnDispositionsListResponse.js';
import type { ReturnDispositionsRetryInput } from '../declarations/ReturnDispositionsRetryInput.js';
import type { ReturnDispositionsRetryResponse } from '../declarations/ReturnDispositionsRetryResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReturnDispositionsResource {
    /**
 * Cancel a disposition that has not started its inventory effect. Cancellation is refused once the effect is processing.
 * POST /v1/return-dispositions/{return_disposition_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnDispositions.cancel("example", {reason: "created_in_error"}, { idempotencyKey: idempotencyKey })
 */
    cancel(return_disposition_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelReturnDispositionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelWithResponse(return_disposition_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnDispositionsCancelResponse>>;
    /**
 * Retrieve one disposition with its type, destination, quantity, status, and any linked inventory effect.
 * GET /v1/return-dispositions/{return_disposition_id}
 * @example
 * client.returnDispositions.get("example")
 */
    get(return_disposition_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CancelReturnDispositionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(return_disposition_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnDispositionsGetResponse>>;
    /**
 * List merchandise dispositions. Omitting return_id lists dispositions across every Return for the merchant.
 * GET /v1/return-dispositions
 * @example
 * client.returnDispositions.list()
 */
    list(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "disposition_type"?: InputValue<"sellable" | "quality_control" | "damaged" | "quarantined" | "repair" | "refurbish" | "liquidate" | "donate" | "discard" | "return_to_buyer" | "lost">; "external_reference_id"?: InputValue<string>; "inventory_location_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "replaces_return_disposition_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_inspection_line_item_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_receipt_line_item_id"?: InputValue<string>; "status"?: InputValue<"pending" | "succeeded" | "failed" | "canceled">; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnDispositionsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "disposition_type"?: InputValue<"sellable" | "quality_control" | "damaged" | "quarantined" | "repair" | "refurbish" | "liquidate" | "donate" | "discard" | "return_to_buyer" | "lost">; "external_reference_id"?: InputValue<string>; "inventory_location_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "replaces_return_disposition_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_inspection_line_item_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_receipt_line_item_id"?: InputValue<string>; "status"?: InputValue<"pending" | "succeeded" | "failed" | "canceled">; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnDispositionsListResponse>>;
    listPages(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "disposition_type"?: InputValue<"sellable" | "quality_control" | "damaged" | "quarantined" | "repair" | "refurbish" | "liquidate" | "donate" | "discard" | "return_to_buyer" | "lost">; "external_reference_id"?: InputValue<string>; "inventory_location_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "replaces_return_disposition_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_inspection_line_item_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_receipt_line_item_id"?: InputValue<string>; "status"?: InputValue<"pending" | "succeeded" | "failed" | "canceled">; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnDispositionsResponse>;
    listPagesWithResponse(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "disposition_type"?: InputValue<"sellable" | "quality_control" | "damaged" | "quarantined" | "repair" | "refurbish" | "liquidate" | "donate" | "discard" | "return_to_buyer" | "lost">; "external_reference_id"?: InputValue<string>; "inventory_location_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "replaces_return_disposition_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_inspection_line_item_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_receipt_line_item_id"?: InputValue<string>; "status"?: InputValue<"pending" | "succeeded" | "failed" | "canceled">; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReturnDispositionsListResponse>>;
    listItems(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "disposition_type"?: InputValue<"sellable" | "quality_control" | "damaged" | "quarantined" | "repair" | "refurbish" | "liquidate" | "donate" | "discard" | "return_to_buyer" | "lost">; "external_reference_id"?: InputValue<string>; "inventory_location_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "replaces_return_disposition_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_inspection_line_item_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_receipt_line_item_id"?: InputValue<string>; "status"?: InputValue<"pending" | "succeeded" | "failed" | "canceled">; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnDisposition>;
    /**
 * Retry a failed disposition with the same immutable intent. Disposition and effect identities are preserved, so a retry does not move stock twice.
 * POST /v1/return-dispositions/{return_disposition_id}/retry
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnDispositions.retry("example", {reason: "dependency_recovered"}, { idempotencyKey: idempotencyKey })
 */
    retry(return_disposition_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CancelReturnDispositionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    retryWithResponse(return_disposition_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "reason": "dependency_recovered" | "mapping_corrected" | "operator_retry" | "other"; "reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnDispositionsRetryResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly returnDispositions: ReturnDispositionsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CancelReturnDispositionResponse } from '../declarations/CancelReturnDispositionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ReturnDispositionsCancelResponse } from '../declarations/ReturnDispositionsCancelResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ReturnDispositionsGetResponse } from '../declarations/ReturnDispositionsGetResponse.js';
export type { ListReturnDispositionsResponse } from '../declarations/ListReturnDispositionsResponse.js';
export type { ReturnDispositionsListResponse } from '../declarations/ReturnDispositionsListResponse.js';
export type { ReturnDisposition } from '../declarations/ReturnDisposition.js';
export type { ReturnDispositionsRetryResponse } from '../declarations/ReturnDispositionsRetryResponse.js';
export type { ReturnDispositionsCancelInput } from '../declarations/ReturnDispositionsCancelInput.js';
export type { ReturnDispositionsGetInput } from '../declarations/ReturnDispositionsGetInput.js';
export type { ReturnDispositionsListInput } from '../declarations/ReturnDispositionsListInput.js';
export type { ReturnDispositionsRetryInput } from '../declarations/ReturnDispositionsRetryInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { ReturnActor } from '../declarations/ReturnActor.js';
export type { CancelReturnDispositionRequestInput } from '../declarations/CancelReturnDispositionRequestInput.js';
export type { RetryReturnDispositionRequestInput } from '../declarations/RetryReturnDispositionRequestInput.js';
export { makeCancelReturnDispositionResponse } from '../declarations/makeCancelReturnDispositionResponse.js';
export { makeListReturnDispositionsResponse } from '../declarations/makeListReturnDispositionsResponse.js';
export { makeReturnDisposition } from '../declarations/makeReturnDisposition.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeReturnActor } from '../declarations/makeReturnActor.js';

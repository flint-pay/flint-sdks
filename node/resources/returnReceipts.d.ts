export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateReturnReceiptResponse } from '../declarations/CreateReturnReceiptResponse.js';
import type { ListReturnReceiptsResponse } from '../declarations/ListReturnReceiptsResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ReturnReceipt } from '../declarations/ReturnReceipt.js';
import type { ReturnReceiptsGetInput } from '../declarations/ReturnReceiptsGetInput.js';
import type { ReturnReceiptsGetResponse } from '../declarations/ReturnReceiptsGetResponse.js';
import type { ReturnReceiptsListInput } from '../declarations/ReturnReceiptsListInput.js';
import type { ReturnReceiptsListResponse } from '../declarations/ReturnReceiptsListResponse.js';
import type { ReturnReceiptsVerifyLineItemInput } from '../declarations/ReturnReceiptsVerifyLineItemInput.js';
import type { ReturnReceiptsVerifyLineItemResponse } from '../declarations/ReturnReceiptsVerifyLineItemResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReturnReceiptsResource {
    /**
 * Retrieve one merchandise receipt with its line items and its current or superseded observation status.
 * GET /v1/return-receipts/{return_receipt_id}
 * @example
 * client.returnReceipts.get("example")
 */
    get(return_receipt_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CreateReturnReceiptResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(return_receipt_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnReceiptsGetResponse>>;
    /**
 * List merchandise receipts. Omitting return_id lists receipts across every Return for the merchant.
 * GET /v1/return-receipts
 * @example
 * client.returnReceipts.list()
 */
    list(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "received_after"?: InputValue<string | globalThis.Date>; "received_before"?: InputValue<string | globalThis.Date>; "receiving_location_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "other" | "flint">; "status"?: InputValue<"current" | "superseded">; "verification_status"?: InputValue<"matched" | "unverified" | "excess">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnReceiptsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "received_after"?: InputValue<string | globalThis.Date>; "received_before"?: InputValue<string | globalThis.Date>; "receiving_location_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "other" | "flint">; "status"?: InputValue<"current" | "superseded">; "verification_status"?: InputValue<"matched" | "unverified" | "excess">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnReceiptsListResponse>>;
    listPages(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "received_after"?: InputValue<string | globalThis.Date>; "received_before"?: InputValue<string | globalThis.Date>; "receiving_location_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "other" | "flint">; "status"?: InputValue<"current" | "superseded">; "verification_status"?: InputValue<"matched" | "unverified" | "excess">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnReceiptsResponse>;
    listPagesWithResponse(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "received_after"?: InputValue<string | globalThis.Date>; "received_before"?: InputValue<string | globalThis.Date>; "receiving_location_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "other" | "flint">; "status"?: InputValue<"current" | "superseded">; "verification_status"?: InputValue<"matched" | "unverified" | "excess">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReturnReceiptsListResponse>>;
    listItems(params?: { "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "received_after"?: InputValue<string | globalThis.Date>; "received_before"?: InputValue<string | globalThis.Date>; "receiving_location_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "shipment_id"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "other" | "flint">; "status"?: InputValue<"current" | "superseded">; "verification_status"?: InputValue<"matched" | "unverified" | "excess">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnReceipt>;
    /**
 * Establish the Return line identity for receipt quantity that arrived without one. Unverified quantity counts toward no line and releases no refund timing gate until it is verified.
 * POST /v1/return-receipts/{return_receipt_id}/line-items/{return_receipt_line_item_id}/verify
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReceipts.verifyLineItem("example", "example", {return_line_item_id: "example", verification_reason: "order_match_confirmed"}, { idempotencyKey: idempotencyKey })
 */
    verifyLineItem(return_receipt_id: InputValue<string>, return_receipt_line_item_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "return_line_item_id": string; "verification_reason": "order_match_confirmed" | "sku_match_confirmed" | "inspection_confirmed" | "merchant_review" | "other"; "verification_reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnReceiptResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    verifyLineItemWithResponse(return_receipt_id: InputValue<string>, return_receipt_line_item_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "return_line_item_id": string; "verification_reason": "order_match_confirmed" | "sku_match_confirmed" | "inspection_confirmed" | "merchant_review" | "other"; "verification_reason_message"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnReceiptsVerifyLineItemResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly returnReceipts: ReturnReceiptsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreateReturnReceiptResponse } from '../declarations/CreateReturnReceiptResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ReturnReceiptsGetResponse } from '../declarations/ReturnReceiptsGetResponse.js';
export type { ListReturnReceiptsResponse } from '../declarations/ListReturnReceiptsResponse.js';
export type { ReturnReceiptsListResponse } from '../declarations/ReturnReceiptsListResponse.js';
export type { ReturnReceipt } from '../declarations/ReturnReceipt.js';
export type { ReturnReceiptsVerifyLineItemResponse } from '../declarations/ReturnReceiptsVerifyLineItemResponse.js';
export type { ReturnReceiptsGetInput } from '../declarations/ReturnReceiptsGetInput.js';
export type { ReturnReceiptsListInput } from '../declarations/ReturnReceiptsListInput.js';
export type { ReturnReceiptsVerifyLineItemInput } from '../declarations/ReturnReceiptsVerifyLineItemInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { ReturnDisposition } from '../declarations/ReturnDisposition.js';
export type { ReturnActor } from '../declarations/ReturnActor.js';
export type { ReturnReceiptLineItem } from '../declarations/ReturnReceiptLineItem.js';
export type { ReturnUnverifiedItem } from '../declarations/ReturnUnverifiedItem.js';
export type { VerifyReturnReceiptLineItemRequestInput } from '../declarations/VerifyReturnReceiptLineItemRequestInput.js';
export { makeCreateReturnReceiptResponse } from '../declarations/makeCreateReturnReceiptResponse.js';
export { makeListReturnReceiptsResponse } from '../declarations/makeListReturnReceiptsResponse.js';
export { makeReturnReceipt } from '../declarations/makeReturnReceipt.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeReturnDisposition } from '../declarations/makeReturnDisposition.js';
export { makeReturnActor } from '../declarations/makeReturnActor.js';
export { makeReturnReceiptLineItem } from '../declarations/makeReturnReceiptLineItem.js';
export { makeReturnUnverifiedItem } from '../declarations/makeReturnUnverifiedItem.js';

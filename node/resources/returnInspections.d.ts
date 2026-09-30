export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateReturnInspectionResponse } from '../declarations/CreateReturnInspectionResponse.js';
import type { ListReturnInspectionsResponse } from '../declarations/ListReturnInspectionsResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ReturnInspection } from '../declarations/ReturnInspection.js';
import type { ReturnInspectionsDecideLineItemInput } from '../declarations/ReturnInspectionsDecideLineItemInput.js';
import type { ReturnInspectionsDecideLineItemResponse } from '../declarations/ReturnInspectionsDecideLineItemResponse.js';
import type { ReturnInspectionsGetInput } from '../declarations/ReturnInspectionsGetInput.js';
import type { ReturnInspectionsGetResponse } from '../declarations/ReturnInspectionsGetResponse.js';
import type { ReturnInspectionsListInput } from '../declarations/ReturnInspectionsListInput.js';
import type { ReturnInspectionsListResponse } from '../declarations/ReturnInspectionsListResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReturnInspectionsResource {
    /**
 * Record the accept or reject outcome for inspected quantity. Accepted quantity becomes dispositionable and satisfies after_inspection refund timing.
 * POST /v1/return-inspections/{return_inspection_id}/line-items/{return_inspection_line_item_id}/decide
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnInspections.decideLineItem("example", "example", {acceptance_decision_reason: "inspection_result", acceptance_status: "accepted", "Idempotency-Key": idempotencyKey})
 */
    decideLineItem(return_inspection_id: InputValue<string>, return_inspection_line_item_id: InputValue<string>, params: (InputValue<{ "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other"; "acceptance_decision_reason_message"?: string; "acceptance_status": "accepted" | "rejected" | "review_required"; "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnInspectionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    decideLineItemWithResponse(return_inspection_id: InputValue<string>, return_inspection_line_item_id: InputValue<string>, params: (InputValue<{ "acceptance_decision_reason": "inspection_result" | "return_policy" | "manual_review" | "other"; "acceptance_decision_reason_message"?: string; "acceptance_status": "accepted" | "rejected" | "review_required"; "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnInspectionsDecideLineItemResponse>>;
    /**
 * Retrieve one inspection with its line items, findings, and current or superseded observation status.
 * GET /v1/return-inspections/{return_inspection_id}
 * @example
 * client.returnInspections.get("example", {})
 */
    get(return_inspection_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CreateReturnInspectionResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(return_inspection_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnInspectionsGetResponse>>;
    /**
 * List inspection observations. Omitting return_id lists inspections across every Return for the merchant.
 * GET /v1/return-inspections
 * @example
 * client.returnInspections.list({})
 */
    list(params?: { "acceptance_status"?: InputValue<"accepted" | "rejected" | "review_required">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "inspected_after"?: InputValue<string | globalThis.Date>; "inspected_before"?: InputValue<string | globalThis.Date>; "location_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_receipt_id"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "other" | "flint">; "status"?: InputValue<"current" | "superseded">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnInspectionsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "acceptance_status"?: InputValue<"accepted" | "rejected" | "review_required">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "inspected_after"?: InputValue<string | globalThis.Date>; "inspected_before"?: InputValue<string | globalThis.Date>; "location_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_receipt_id"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "other" | "flint">; "status"?: InputValue<"current" | "superseded">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnInspectionsListResponse>>;
    listPages(params?: { "acceptance_status"?: InputValue<"accepted" | "rejected" | "review_required">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "inspected_after"?: InputValue<string | globalThis.Date>; "inspected_before"?: InputValue<string | globalThis.Date>; "location_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_receipt_id"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "other" | "flint">; "status"?: InputValue<"current" | "superseded">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnInspectionsResponse>;
    listPagesWithResponse(params?: { "acceptance_status"?: InputValue<"accepted" | "rejected" | "review_required">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "inspected_after"?: InputValue<string | globalThis.Date>; "inspected_before"?: InputValue<string | globalThis.Date>; "location_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_receipt_id"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "other" | "flint">; "status"?: InputValue<"current" | "superseded">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReturnInspectionsListResponse>>;
    listItems(params?: { "acceptance_status"?: InputValue<"accepted" | "rejected" | "review_required">; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "external_reference_id"?: InputValue<string>; "inspected_after"?: InputValue<string | globalThis.Date>; "inspected_before"?: InputValue<string | globalThis.Date>; "location_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "return_id"?: InputValue<string>; "return_line_item_id"?: InputValue<string>; "return_receipt_id"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "other" | "flint">; "status"?: InputValue<"current" | "superseded">; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnInspection>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly returnInspections: ReturnInspectionsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreateReturnInspectionResponse } from '../declarations/CreateReturnInspectionResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ReturnInspectionsDecideLineItemResponse } from '../declarations/ReturnInspectionsDecideLineItemResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ReturnInspectionsGetResponse } from '../declarations/ReturnInspectionsGetResponse.js';
export type { ListReturnInspectionsResponse } from '../declarations/ListReturnInspectionsResponse.js';
export type { ReturnInspectionsListResponse } from '../declarations/ReturnInspectionsListResponse.js';
export type { ReturnInspection } from '../declarations/ReturnInspection.js';
export type { ReturnInspectionsDecideLineItemInput } from '../declarations/ReturnInspectionsDecideLineItemInput.js';
export type { ReturnInspectionsGetInput } from '../declarations/ReturnInspectionsGetInput.js';
export type { ReturnInspectionsListInput } from '../declarations/ReturnInspectionsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { ReturnDisposition } from '../declarations/ReturnDisposition.js';
export type { ReturnActor } from '../declarations/ReturnActor.js';
export type { ReturnInspectionLineItem } from '../declarations/ReturnInspectionLineItem.js';
export type { DecideReturnInspectionLineItemRequestInput } from '../declarations/DecideReturnInspectionLineItemRequestInput.js';
export { makeCreateReturnInspectionResponse } from '../declarations/makeCreateReturnInspectionResponse.js';
export { makeListReturnInspectionsResponse } from '../declarations/makeListReturnInspectionsResponse.js';
export { makeReturnInspection } from '../declarations/makeReturnInspection.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeReturnDisposition } from '../declarations/makeReturnDisposition.js';
export { makeReturnActor } from '../declarations/makeReturnActor.js';
export { makeReturnInspectionLineItem } from '../declarations/makeReturnInspectionLineItem.js';

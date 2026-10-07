export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { CreateReturnReasonResponse } from '../declarations/CreateReturnReasonResponse.js';
import type { ListReturnReasonsResponse } from '../declarations/ListReturnReasonsResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { ReturnReason } from '../declarations/ReturnReason.js';
import type { ReturnReasonsCreateInput } from '../declarations/ReturnReasonsCreateInput.js';
import type { ReturnReasonsCreateResponse } from '../declarations/ReturnReasonsCreateResponse.js';
import type { ReturnReasonsGetInput } from '../declarations/ReturnReasonsGetInput.js';
import type { ReturnReasonsGetResponse } from '../declarations/ReturnReasonsGetResponse.js';
import type { ReturnReasonsListInput } from '../declarations/ReturnReasonsListInput.js';
import type { ReturnReasonsListResponse } from '../declarations/ReturnReasonsListResponse.js';
import type { ReturnReasonsRemoveInput } from '../declarations/ReturnReasonsRemoveInput.js';
import type { ReturnReasonsRemoveResponse } from '../declarations/ReturnReasonsRemoveResponse.js';
import type { ReturnReasonsUpdateInput } from '../declarations/ReturnReasonsUpdateInput.js';
import type { ReturnReasonsUpdateResponse } from '../declarations/ReturnReasonsUpdateResponse.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface ReturnReasonsResource {
    /**
 * Create a merchant Return reason buyers can select. Buyer reasons are distinct from inspection findings, decline reasons, and Refund reasons.
 * POST /v1/return-reasons
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReasons.create({handle: "example", name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "category_handles"?: Array<string>; "description"?: string; "external_reference_id"?: string; "handle": string; "is_note_required"?: boolean; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnReasonResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "category_handles"?: Array<string>; "description"?: string; "external_reference_id"?: string; "handle": string; "is_note_required"?: boolean; "name": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnReasonsCreateResponse>>;
    /**
 * Retire a Return reason so buyers can no longer select it. Returns that already recorded it keep the frozen reason name.
 * DELETE /v1/return-reasons/{return_reason_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReasons.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(return_reason_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnReasonResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(return_reason_id: InputValue<string>, params?: { "expected_version"?: InputValue<string>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnReasonsRemoveResponse>>;
    /**
 * Retrieve one Return reason with its handle, category handles, and status.
 * GET /v1/return-reasons/{return_reason_id}
 * @example
 * client.returnReasons.get("example")
 */
    get(return_reason_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<_SdkPayloadAt<CreateReturnReasonResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    getWithResponse(return_reason_id: InputValue<string>, params?: { "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnReasonsGetResponse>>;
    /**
 * List Return reasons, including Flint-provided defaults and merchant-defined reasons.
 * GET /v1/return-reasons
 * @example
 * client.returnReasons.list()
 */
    list(params?: { "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "source"?: InputValue<"flint" | "merchant">; "status"?: InputValue<Array<"active" | "archived">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<ListReturnReasonsResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "source"?: InputValue<"flint" | "merchant">; "status"?: InputValue<Array<"active" | "archived">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<ReturnReasonsListResponse>>;
    listPages(params?: { "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "source"?: InputValue<"flint" | "merchant">; "status"?: InputValue<Array<"active" | "archived">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ListReturnReasonsResponse>;
    listPagesWithResponse(params?: { "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "source"?: InputValue<"flint" | "merchant">; "status"?: InputValue<Array<"active" | "archived">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<ReturnReasonsListResponse>>;
    listItems(params?: { "external_reference_id"?: InputValue<string>; "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "query"?: InputValue<string>; "source"?: InputValue<"flint" | "merchant">; "status"?: InputValue<Array<"active" | "archived">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<ReturnReason>;
    /**
 * Update a Return reason. Send null to clear description. A present category_handles array replaces the existing set.
 * PATCH /v1/return-reasons/{return_reason_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.returnReasons.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(return_reason_id: InputValue<string>, params: (InputValue<({ "category_handles"?: Array<string>; "description"?: string | null; "expected_version"?: string; "external_reference_id"?: string | null; "is_note_required"?: boolean; "name"?: string; }) & (((({ "category_handles"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<CreateReturnReasonResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(return_reason_id: InputValue<string>, params: (InputValue<({ "category_handles"?: Array<string>; "description"?: string | null; "expected_version"?: string; "external_reference_id"?: string | null; "is_note_required"?: boolean; "name"?: string; }) & (((({ "category_handles"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<ReturnReasonsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly returnReasons: ReturnReasonsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { CreateReturnReasonResponse } from '../declarations/CreateReturnReasonResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { ReturnReasonsCreateResponse } from '../declarations/ReturnReasonsCreateResponse.js';
export type { ReturnReasonsRemoveResponse } from '../declarations/ReturnReasonsRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { ReturnReasonsGetResponse } from '../declarations/ReturnReasonsGetResponse.js';
export type { ListReturnReasonsResponse } from '../declarations/ListReturnReasonsResponse.js';
export type { ReturnReasonsListResponse } from '../declarations/ReturnReasonsListResponse.js';
export type { ReturnReason } from '../declarations/ReturnReason.js';
export type { ReturnReasonsUpdateResponse } from '../declarations/ReturnReasonsUpdateResponse.js';
export type { ReturnReasonsCreateInput } from '../declarations/ReturnReasonsCreateInput.js';
export type { ReturnReasonsRemoveInput } from '../declarations/ReturnReasonsRemoveInput.js';
export type { ReturnReasonsGetInput } from '../declarations/ReturnReasonsGetInput.js';
export type { ReturnReasonsListInput } from '../declarations/ReturnReasonsListInput.js';
export type { ReturnReasonsUpdateInput } from '../declarations/ReturnReasonsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { CreateReturnReasonRequestInput } from '../declarations/CreateReturnReasonRequestInput.js';
export type { UpdateReturnReasonRequestInput } from '../declarations/UpdateReturnReasonRequestInput.js';
export { makeCreateReturnReasonResponse } from '../declarations/makeCreateReturnReasonResponse.js';
export { makeListReturnReasonsResponse } from '../declarations/makeListReturnReasonsResponse.js';
export { makeReturnReason } from '../declarations/makeReturnReason.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';

export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { InventoryCount } from '../declarations/InventoryCount.js';
import type { InventoryCountListResponse } from '../declarations/InventoryCountListResponse.js';
import type { InventoryCountObservationRequestInput } from '../declarations/InventoryCountObservationRequestInput.js';
import type { InventoryCountResponse } from '../declarations/InventoryCountResponse.js';
import type { InventoryCountResultResponse } from '../declarations/InventoryCountResultResponse.js';
import type { InventoryCountsApplyInput } from '../declarations/InventoryCountsApplyInput.js';
import type { InventoryCountsApplyResponse } from '../declarations/InventoryCountsApplyResponse.js';
import type { InventoryCountsCancelInput } from '../declarations/InventoryCountsCancelInput.js';
import type { InventoryCountsCancelResponse } from '../declarations/InventoryCountsCancelResponse.js';
import type { InventoryCountsCreateInput } from '../declarations/InventoryCountsCreateInput.js';
import type { InventoryCountsCreateResponse } from '../declarations/InventoryCountsCreateResponse.js';
import type { InventoryCountsListInput } from '../declarations/InventoryCountsListInput.js';
import type { InventoryCountsListResponse } from '../declarations/InventoryCountsListResponse.js';
import type { InventoryCountsUpdateInput } from '../declarations/InventoryCountsUpdateInput.js';
import type { InventoryCountsUpdateResponse } from '../declarations/InventoryCountsUpdateResponse.js';
import type { InventorySourceSystemRequestInput } from '../declarations/InventorySourceSystemRequestInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface InventoryCountsResource {
    /**
 * Apply a completed physical count to inventory levels.
 * POST /v1/inventory-counts/{inventory_count_id}/apply
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.apply("example", {"Idempotency-Key": idempotencyKey})
 */
    apply(inventory_count_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryCountResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    applyWithResponse(inventory_count_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryCountsApplyResponse>>;
    /**
 * Cancel an open physical count without changing inventory levels.
 * POST /v1/inventory-counts/{inventory_count_id}/cancel
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.cancel("example", {"Idempotency-Key": idempotencyKey})
 */
    cancel(inventory_count_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryCountResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    cancelWithResponse(inventory_count_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryCountsCancelResponse>>;
    /**
 * Open a physical count for selected inventory items at one Location.
 * POST /v1/inventory-counts
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.create({inventory_item_ids: ["example"], location_id: "example", "Idempotency-Key": idempotencyKey})
 */
    create(params: (InputValue<{ "inventory_item_ids": Array<string>; "location_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryCountResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "inventory_item_ids": Array<string>; "location_id": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryCountsCreateResponse>>;
    /**
 * List inventory counts.
 * GET /v1/inventory-counts
 * @example
 * client.inventoryCounts.list({})
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "status"?: InputValue<"draft" | "applied" | "canceled">; "idempotency_key"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "applied_after"?: InputValue<string | globalThis.Date>; "applied_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryCountListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "status"?: InputValue<"draft" | "applied" | "canceled">; "idempotency_key"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "applied_after"?: InputValue<string | globalThis.Date>; "applied_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryCountsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "status"?: InputValue<"draft" | "applied" | "canceled">; "idempotency_key"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "applied_after"?: InputValue<string | globalThis.Date>; "applied_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryCountListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "status"?: InputValue<"draft" | "applied" | "canceled">; "idempotency_key"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "applied_after"?: InputValue<string | globalThis.Date>; "applied_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryCountsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "status"?: InputValue<"draft" | "applied" | "canceled">; "idempotency_key"?: InputValue<string>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "applied_after"?: InputValue<string | globalThis.Date>; "applied_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryCount>;
    /**
 * Replace a count's observations atomically. Send expected_version to reject concurrent changes.
 * PATCH /v1/inventory-counts/{inventory_count_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryCounts.update("example", {expected_version: "2", observations: [{counted_damaged_quantity: "0", counted_on_hand_quantity: "12", counted_quality_control_quantity: "0", counted_quarantined_quantity: "0", inventory_item_id: "invi_01K0P7W6A4N9F3J2T8Q5R1C6XM"}], source_system: {type: "manual"}, "Idempotency-Key": idempotencyKey})
 */
    update(inventory_count_id: InputValue<string>, params: (InputValue<({ "expected_version"?: string; "external_actor_id"?: string; "observations": Array<InventoryCountObservationRequestInput>; "occurred_at"?: string | globalThis.Date; "source_system"?: InventorySourceSystemRequestInput; }) & (((({ "observations"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryCountResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(inventory_count_id: InputValue<string>, params: (InputValue<({ "expected_version"?: string; "external_actor_id"?: string; "observations": Array<InventoryCountObservationRequestInput>; "occurred_at"?: string | globalThis.Date; "source_system"?: InventorySourceSystemRequestInput; }) & (((({ "observations"?: never })) | ({ "expected_version": unknown; })))>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryCountsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly inventoryCounts: InventoryCountsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { InventoryCountResultResponse } from '../declarations/InventoryCountResultResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { InventoryCountsApplyResponse } from '../declarations/InventoryCountsApplyResponse.js';
export type { InventoryCountsCancelResponse } from '../declarations/InventoryCountsCancelResponse.js';
export type { InventoryCountResponse } from '../declarations/InventoryCountResponse.js';
export type { InventoryCountsCreateResponse } from '../declarations/InventoryCountsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { InventoryCountListResponse } from '../declarations/InventoryCountListResponse.js';
export type { InventoryCountsListResponse } from '../declarations/InventoryCountsListResponse.js';
export type { InventoryCount } from '../declarations/InventoryCount.js';
export type { InventoryCountObservationRequestInput } from '../declarations/InventoryCountObservationRequestInput.js';
export type { InventorySourceSystemRequestInput } from '../declarations/InventorySourceSystemRequestInput.js';
export type { InventoryCountsUpdateResponse } from '../declarations/InventoryCountsUpdateResponse.js';
export type { InventoryCountsApplyInput } from '../declarations/InventoryCountsApplyInput.js';
export type { InventoryCountsCancelInput } from '../declarations/InventoryCountsCancelInput.js';
export type { InventoryCountsCreateInput } from '../declarations/InventoryCountsCreateInput.js';
export type { InventoryCountsListInput } from '../declarations/InventoryCountsListInput.js';
export type { InventoryCountsUpdateInput } from '../declarations/InventoryCountsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { InventoryCountResult } from '../declarations/InventoryCountResult.js';
export type { InventoryLevel } from '../declarations/InventoryLevel.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { InventoryCountLine } from '../declarations/InventoryCountLine.js';
export type { CountProvenance } from '../declarations/CountProvenance.js';
export type { InventoryCountTransitionRequestInput } from '../declarations/InventoryCountTransitionRequestInput.js';
export type { CreateInventoryCountRequestInput } from '../declarations/CreateInventoryCountRequestInput.js';
export type { UpdateInventoryCountRequestInput } from '../declarations/UpdateInventoryCountRequestInput.js';
export { makeInventoryCountResultResponse } from '../declarations/makeInventoryCountResultResponse.js';
export { makeInventoryCountResponse } from '../declarations/makeInventoryCountResponse.js';
export { makeInventoryCountListResponse } from '../declarations/makeInventoryCountListResponse.js';
export { makeInventoryCount } from '../declarations/makeInventoryCount.js';
export { makeInventoryCountResult } from '../declarations/makeInventoryCountResult.js';
export { makeInventoryLevel } from '../declarations/makeInventoryLevel.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeInventoryCountLine } from '../declarations/makeInventoryCountLine.js';
export { makeCountProvenance } from '../declarations/makeCountProvenance.js';

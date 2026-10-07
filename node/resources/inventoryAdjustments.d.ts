export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { InventoryAdjustment } from '../declarations/InventoryAdjustment.js';
import type { InventoryAdjustmentLineRequestInput } from '../declarations/InventoryAdjustmentLineRequestInput.js';
import type { InventoryAdjustmentListResponse } from '../declarations/InventoryAdjustmentListResponse.js';
import type { InventoryAdjustmentResultResponse } from '../declarations/InventoryAdjustmentResultResponse.js';
import type { InventoryAdjustmentsCreateInput } from '../declarations/InventoryAdjustmentsCreateInput.js';
import type { InventoryAdjustmentsCreateResponse } from '../declarations/InventoryAdjustmentsCreateResponse.js';
import type { InventoryAdjustmentsListInput } from '../declarations/InventoryAdjustmentsListInput.js';
import type { InventoryAdjustmentsListResponse } from '../declarations/InventoryAdjustmentsListResponse.js';
import type { InventorySourceSystemRequestInput } from '../declarations/InventorySourceSystemRequestInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface InventoryAdjustmentsResource {
    /**
 * Record a physical stock change as signed deltas. Returns the created adjustment, its movement IDs, and the resulting level for every level touched.
 * POST /v1/inventory-adjustments
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryAdjustments.create({lines: [], reason: "received_stock"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "external_actor_id"?: string; "lines": Array<InventoryAdjustmentLineRequestInput>; "note"?: string; "occurred_at"?: string | globalThis.Date; "reason": "received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other"; "source_system"?: InventorySourceSystemRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryAdjustmentResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "external_actor_id"?: string; "lines": Array<InventoryAdjustmentLineRequestInput>; "note"?: string; "occurred_at"?: string | globalThis.Date; "reason": "received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other"; "source_system"?: InventorySourceSystemRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryAdjustmentsCreateResponse>>;
    /**
 * List inventory adjustments.
 * GET /v1/inventory-adjustments
 * @example
 * client.inventoryAdjustments.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "reason"?: InputValue<"received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other">; "idempotency_key"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryAdjustmentListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "reason"?: InputValue<"received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other">; "idempotency_key"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryAdjustmentsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "reason"?: InputValue<"received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other">; "idempotency_key"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryAdjustmentListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "reason"?: InputValue<"received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other">; "idempotency_key"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryAdjustmentsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "reason"?: InputValue<"received_stock" | "damage" | "condition_changed" | "theft" | "loss" | "manual_correction" | "other">; "idempotency_key"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryAdjustment>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly inventoryAdjustments: InventoryAdjustmentsResource;
}
export type { InventoryAdjustmentLineRequestInput } from '../declarations/InventoryAdjustmentLineRequestInput.js';
export type { InventorySourceSystemRequestInput } from '../declarations/InventorySourceSystemRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { InventoryAdjustmentResultResponse } from '../declarations/InventoryAdjustmentResultResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { InventoryAdjustmentsCreateResponse } from '../declarations/InventoryAdjustmentsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { InventoryAdjustmentListResponse } from '../declarations/InventoryAdjustmentListResponse.js';
export type { InventoryAdjustmentsListResponse } from '../declarations/InventoryAdjustmentsListResponse.js';
export type { InventoryAdjustment } from '../declarations/InventoryAdjustment.js';
export type { InventoryAdjustmentsCreateInput } from '../declarations/InventoryAdjustmentsCreateInput.js';
export type { InventoryAdjustmentsListInput } from '../declarations/InventoryAdjustmentsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { InventoryAdjustmentResult } from '../declarations/InventoryAdjustmentResult.js';
export type { InventoryLevel } from '../declarations/InventoryLevel.js';
export type { InventoryItem } from '../declarations/InventoryItem.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { NextActionMerchantAccountSession } from '../declarations/NextActionMerchantAccountSession.js';
export type { MoneyValue } from '../declarations/MoneyValue.js';
export type { AdjustmentLine } from '../declarations/AdjustmentLine.js';
export type { CreateInventoryAdjustmentRequestInput } from '../declarations/CreateInventoryAdjustmentRequestInput.js';
export { makeInventoryAdjustmentResultResponse } from '../declarations/makeInventoryAdjustmentResultResponse.js';
export { makeInventoryAdjustmentListResponse } from '../declarations/makeInventoryAdjustmentListResponse.js';
export { makeInventoryAdjustment } from '../declarations/makeInventoryAdjustment.js';
export { makeInventoryAdjustmentResult } from '../declarations/makeInventoryAdjustmentResult.js';
export { makeInventoryLevel } from '../declarations/makeInventoryLevel.js';
export { makeInventoryItem } from '../declarations/makeInventoryItem.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeNextActionMerchantAccountSession } from '../declarations/makeNextActionMerchantAccountSession.js';
export { makeMoneyValue } from '../declarations/makeMoneyValue.js';
export { makeAdjustmentLine } from '../declarations/makeAdjustmentLine.js';

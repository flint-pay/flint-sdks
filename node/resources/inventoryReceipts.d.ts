export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { InventoryReceipt } from '../declarations/InventoryReceipt.js';
import type { InventoryReceiptLineRequestInput } from '../declarations/InventoryReceiptLineRequestInput.js';
import type { InventoryReceiptListResponse } from '../declarations/InventoryReceiptListResponse.js';
import type { InventoryReceiptResultResponse } from '../declarations/InventoryReceiptResultResponse.js';
import type { InventoryReceiptsCreateInput } from '../declarations/InventoryReceiptsCreateInput.js';
import type { InventoryReceiptsCreateResponse } from '../declarations/InventoryReceiptsCreateResponse.js';
import type { InventoryReceiptsListInput } from '../declarations/InventoryReceiptsListInput.js';
import type { InventoryReceiptsListResponse } from '../declarations/InventoryReceiptsListResponse.js';
import type { InventorySourceSystemRequestInput } from '../declarations/InventorySourceSystemRequestInput.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface InventoryReceiptsResource {
    /**
 * Record a completed inventory receipt and disposition. This is a downstream stock effect, not the customer Return lifecycle.
 * POST /v1/inventory-receipts
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryReceipts.create({lines: []}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "external_actor_id"?: string; "lines": Array<InventoryReceiptLineRequestInput>; "occurred_at"?: string | globalThis.Date; "source_system"?: InventorySourceSystemRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryReceiptResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "external_actor_id"?: string; "lines": Array<InventoryReceiptLineRequestInput>; "occurred_at"?: string | globalThis.Date; "source_system"?: InventorySourceSystemRequestInput; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryReceiptsCreateResponse>>;
    /**
 * List completed inventory receipt effects. Use typed Return filters for reconciliation when the receipt was created by Returns.
 * GET /v1/inventory-receipts
 * @example
 * client.inventoryReceipts.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "inventory_reservation_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_disposition_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryReceiptListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "inventory_reservation_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_disposition_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryReceiptsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "inventory_reservation_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_disposition_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryReceiptListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "inventory_reservation_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_disposition_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryReceiptsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "receiving_location_id"?: InputValue<string>; "inventory_reservation_id"?: InputValue<string>; "return_id"?: InputValue<string>; "return_disposition_id"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryReceipt>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly inventoryReceipts: InventoryReceiptsResource;
}
export type { InventoryReceiptLineRequestInput } from '../declarations/InventoryReceiptLineRequestInput.js';
export type { InventorySourceSystemRequestInput } from '../declarations/InventorySourceSystemRequestInput.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { InventoryReceiptResultResponse } from '../declarations/InventoryReceiptResultResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { InventoryReceiptsCreateResponse } from '../declarations/InventoryReceiptsCreateResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { InventoryReceiptListResponse } from '../declarations/InventoryReceiptListResponse.js';
export type { InventoryReceiptsListResponse } from '../declarations/InventoryReceiptsListResponse.js';
export type { InventoryReceipt } from '../declarations/InventoryReceipt.js';
export type { InventoryReceiptsCreateInput } from '../declarations/InventoryReceiptsCreateInput.js';
export type { InventoryReceiptsListInput } from '../declarations/InventoryReceiptsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { InventoryReceiptResult } from '../declarations/InventoryReceiptResult.js';
export type { InventoryLevel } from '../declarations/InventoryLevel.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { InventoryReceiptLine } from '../declarations/InventoryReceiptLine.js';
export type { CreateInventoryReceiptRequestInput } from '../declarations/CreateInventoryReceiptRequestInput.js';
export { makeInventoryReceiptResultResponse } from '../declarations/makeInventoryReceiptResultResponse.js';
export { makeInventoryReceiptListResponse } from '../declarations/makeInventoryReceiptListResponse.js';
export { makeInventoryReceipt } from '../declarations/makeInventoryReceipt.js';
export { makeInventoryReceiptResult } from '../declarations/makeInventoryReceiptResult.js';
export { makeInventoryLevel } from '../declarations/makeInventoryLevel.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeInventoryReceiptLine } from '../declarations/makeInventoryReceiptLine.js';

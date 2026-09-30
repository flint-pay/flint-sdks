export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { InventoryMovement } from '../declarations/InventoryMovement.js';
import type { InventoryMovementListResponse } from '../declarations/InventoryMovementListResponse.js';
import type { InventoryMovementsListInput } from '../declarations/InventoryMovementsListInput.js';
import type { InventoryMovementsListResponse } from '../declarations/InventoryMovementsListResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface InventoryMovementsResource {
    /**
 * List inventory movements, oldest recorded first. Send expand=inventory_item to render each movement's inventory item inline, so a history table needs no read per row. Filter by idempotency_key to recover the movements a command produced. Send order=desc to read the newest movements first.
 * GET /v1/inventory-movements
 * @example
 * client.inventoryMovements.list({})
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "type"?: InputValue<string>; "reason"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "return_id"?: InputValue<string>; "return_disposition_id"?: InputValue<string>; "order"?: InputValue<"asc" | "desc">; "expand"?: InputValue<Array<"inventory_item">>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "source_reference_type"?: InputValue<string>; "source_reference_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryMovementListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "type"?: InputValue<string>; "reason"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "return_id"?: InputValue<string>; "return_disposition_id"?: InputValue<string>; "order"?: InputValue<"asc" | "desc">; "expand"?: InputValue<Array<"inventory_item">>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "source_reference_type"?: InputValue<string>; "source_reference_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryMovementsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "type"?: InputValue<string>; "reason"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "return_id"?: InputValue<string>; "return_disposition_id"?: InputValue<string>; "order"?: InputValue<"asc" | "desc">; "expand"?: InputValue<Array<"inventory_item">>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "source_reference_type"?: InputValue<string>; "source_reference_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryMovementListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "type"?: InputValue<string>; "reason"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "return_id"?: InputValue<string>; "return_disposition_id"?: InputValue<string>; "order"?: InputValue<"asc" | "desc">; "expand"?: InputValue<Array<"inventory_item">>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "source_reference_type"?: InputValue<string>; "source_reference_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryMovementsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "type"?: InputValue<string>; "reason"?: InputValue<string>; "idempotency_key"?: InputValue<string>; "return_id"?: InputValue<string>; "return_disposition_id"?: InputValue<string>; "order"?: InputValue<"asc" | "desc">; "expand"?: InputValue<Array<"inventory_item">>; "source_system_type"?: InputValue<"manual" | "pos" | "wms" | "erp" | "flint" | "other">; "external_source_id"?: InputValue<string>; "external_actor_id"?: InputValue<string>; "occurred_after"?: InputValue<string | globalThis.Date>; "occurred_before"?: InputValue<string | globalThis.Date>; "created_after"?: InputValue<string | globalThis.Date>; "created_before"?: InputValue<string | globalThis.Date>; "source_reference_type"?: InputValue<string>; "source_reference_id"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryMovement>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly inventoryMovements: InventoryMovementsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { InventoryMovementListResponse } from '../declarations/InventoryMovementListResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { InventoryMovementsListResponse } from '../declarations/InventoryMovementsListResponse.js';
export type { InventoryMovement } from '../declarations/InventoryMovement.js';
export type { InventoryMovementsListInput } from '../declarations/InventoryMovementsListInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { InventoryLevel } from '../declarations/InventoryLevel.js';
export type { InventorySourceReference } from '../declarations/InventorySourceReference.js';
export { makeInventoryMovementListResponse } from '../declarations/makeInventoryMovementListResponse.js';
export { makeInventoryMovement } from '../declarations/makeInventoryMovement.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeInventoryLevel } from '../declarations/makeInventoryLevel.js';
export { makeInventorySourceReference } from '../declarations/makeInventorySourceReference.js';

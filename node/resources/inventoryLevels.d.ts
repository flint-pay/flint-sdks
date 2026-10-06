export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { InventoryLevel } from '../declarations/InventoryLevel.js';
import type { InventoryLevelListResponse } from '../declarations/InventoryLevelListResponse.js';
import type { InventoryLevelUpdateResultResponse } from '../declarations/InventoryLevelUpdateResultResponse.js';
import type { InventoryLevelsListInput } from '../declarations/InventoryLevelsListInput.js';
import type { InventoryLevelsListResponse } from '../declarations/InventoryLevelsListResponse.js';
import type { InventoryLevelsUpdateInput } from '../declarations/InventoryLevelsUpdateInput.js';
import type { InventoryLevelsUpdateResponse } from '../declarations/InventoryLevelsUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface InventoryLevelsResource {
    /**
 * List inventory levels. Send expand=inventory_item to render each level's inventory item inline, so a stock table needs no read per row. Filter by inventory_item_status to see only the levels behind items that can be sold. Levels are strongly consistent individually, but pages may reflect different committed instants.
 * GET /v1/inventory-levels
 * @example
 * client.inventoryLevels.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "inventory_item_status"?: InputValue<"active" | "inactive" | "archived">; "has_available_quantity"?: InputValue<boolean>; "has_unavailable_condition"?: InputValue<boolean>; "has_shortage"?: InputValue<boolean>; "query"?: InputValue<string>; "min_available_quantity"?: InputValue<string>; "max_available_quantity"?: InputValue<string>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expand"?: InputValue<Array<"inventory_item">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryLevelListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "inventory_item_status"?: InputValue<"active" | "inactive" | "archived">; "has_available_quantity"?: InputValue<boolean>; "has_unavailable_condition"?: InputValue<boolean>; "has_shortage"?: InputValue<boolean>; "query"?: InputValue<string>; "min_available_quantity"?: InputValue<string>; "max_available_quantity"?: InputValue<string>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expand"?: InputValue<Array<"inventory_item">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryLevelsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "inventory_item_status"?: InputValue<"active" | "inactive" | "archived">; "has_available_quantity"?: InputValue<boolean>; "has_unavailable_condition"?: InputValue<boolean>; "has_shortage"?: InputValue<boolean>; "query"?: InputValue<string>; "min_available_quantity"?: InputValue<string>; "max_available_quantity"?: InputValue<string>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expand"?: InputValue<Array<"inventory_item">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryLevelListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "inventory_item_status"?: InputValue<"active" | "inactive" | "archived">; "has_available_quantity"?: InputValue<boolean>; "has_unavailable_condition"?: InputValue<boolean>; "has_shortage"?: InputValue<boolean>; "query"?: InputValue<string>; "min_available_quantity"?: InputValue<string>; "max_available_quantity"?: InputValue<string>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expand"?: InputValue<Array<"inventory_item">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryLevelsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "inventory_item_id"?: InputValue<string>; "location_id"?: InputValue<string>; "inventory_item_status"?: InputValue<"active" | "inactive" | "archived">; "has_available_quantity"?: InputValue<boolean>; "has_unavailable_condition"?: InputValue<boolean>; "has_shortage"?: InputValue<boolean>; "query"?: InputValue<string>; "min_available_quantity"?: InputValue<string>; "max_available_quantity"?: InputValue<string>; "updated_after"?: InputValue<string | globalThis.Date>; "updated_before"?: InputValue<string | globalThis.Date>; "expand"?: InputValue<Array<"inventory_item">>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryLevel>;
    /**
 * Set one inventory level's safety_stock_quantity. Returns the updated level with durable command evidence.
 * PATCH /v1/inventory-levels/{inventory_level_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryLevels.update("example", {safety_stock_quantity: "0"}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_level_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "safety_stock_quantity": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryLevelUpdateResultResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(inventory_level_id: InputValue<string>, params: (InputValue<{ "expected_version"?: string; "safety_stock_quantity": string; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryLevelsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly inventoryLevels: InventoryLevelsResource;
}
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { InventoryLevelListResponse } from '../declarations/InventoryLevelListResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { InventoryLevelsListResponse } from '../declarations/InventoryLevelsListResponse.js';
export type { InventoryLevel } from '../declarations/InventoryLevel.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { InventoryLevelUpdateResultResponse } from '../declarations/InventoryLevelUpdateResultResponse.js';
export type { InventoryLevelsUpdateResponse } from '../declarations/InventoryLevelsUpdateResponse.js';
export type { InventoryLevelsListInput } from '../declarations/InventoryLevelsListInput.js';
export type { InventoryLevelsUpdateInput } from '../declarations/InventoryLevelsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { InventoryLevelUpdateResult } from '../declarations/InventoryLevelUpdateResult.js';
export type { UpdateInventoryLevelRequestInput } from '../declarations/UpdateInventoryLevelRequestInput.js';
export { makeInventoryLevelListResponse } from '../declarations/makeInventoryLevelListResponse.js';
export { makeInventoryLevel } from '../declarations/makeInventoryLevel.js';
export { makeInventoryLevelUpdateResultResponse } from '../declarations/makeInventoryLevelUpdateResultResponse.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';
export { makeInventoryLevelUpdateResult } from '../declarations/makeInventoryLevelUpdateResult.js';

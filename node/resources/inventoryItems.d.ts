export { SdkError, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type { Result, Metadata, ErrorKind, DiagnosticEvent, InputValue, ServerSentEvent } from '../runtime.js';
import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/ClientOptions.js';
import type { InventoryItem } from '../declarations/InventoryItem.js';
import type { InventoryItemListResponse } from '../declarations/InventoryItemListResponse.js';
import type { InventoryItemResponse } from '../declarations/InventoryItemResponse.js';
import type { InventoryItemsCreateInput } from '../declarations/InventoryItemsCreateInput.js';
import type { InventoryItemsCreateResponse } from '../declarations/InventoryItemsCreateResponse.js';
import type { InventoryItemsListInput } from '../declarations/InventoryItemsListInput.js';
import type { InventoryItemsListResponse } from '../declarations/InventoryItemsListResponse.js';
import type { InventoryItemsRemoveInput } from '../declarations/InventoryItemsRemoveInput.js';
import type { InventoryItemsRemoveResponse } from '../declarations/InventoryItemsRemoveResponse.js';
import type { InventoryItemsUpdateInput } from '../declarations/InventoryItemsUpdateInput.js';
import type { InventoryItemsUpdateResponse } from '../declarations/InventoryItemsUpdateResponse.js';
import type { RequestOptions } from '../declarations/RequestOptions.js';
import type { SdkResponse } from '../declarations/SdkResponse.js';
import type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
import type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export interface InventoryItemsResource {
    /**
 * Create an inventory item. SKU and barcode are searchable attributes, not identity: they are not required to be unique.
 * POST /v1/inventory-items
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryItems.create({name: "example"}, { idempotencyKey: idempotencyKey })
 */
    create(params: (InputValue<{ "barcode"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "sku"?: string; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    createWithResponse(params: (InputValue<{ "barcode"?: string; "external_reference_id"?: string; "metadata"?: Record<string, string>; "name": string; "sku"?: string; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryItemsCreateResponse>>;
    /**
 * Retire an inventory item. keeps the archived resource available in list results.
 * DELETE /v1/inventory-items/{inventory_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryItems.remove("example", {}, { idempotencyKey: idempotencyKey })
 */
    remove(inventory_item_id: InputValue<string>, params?: { "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    removeWithResponse(inventory_item_id: InputValue<string>, params?: { "expected_version"?: InputValue<number>; "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryItemsRemoveResponse>>;
    /**
 * List inventory items.
 * GET /v1/inventory-items
 * @example
 * client.inventoryItems.list()
 */
    list(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sku"?: InputValue<string>; "barcode"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<InventoryItemListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    listWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sku"?: InputValue<string>; "barcode"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): Promise<SdkResponse<InventoryItemsListResponse>>;
    listPages(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sku"?: InputValue<string>; "barcode"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryItemListResponse>;
    listPagesWithResponse(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sku"?: InputValue<string>; "barcode"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<SdkResponse<InventoryItemsListResponse>>;
    listItems(params?: { "page_size"?: InputValue<number>; "page_token"?: InputValue<string>; "status"?: InputValue<"active" | "inactive" | "archived">; "sku"?: InputValue<string>; "barcode"?: InputValue<string>; "external_reference_id"?: InputValue<string>; "query"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant" | "merchantKey">>): AsyncGenerator<InventoryItem>;
    /**
 * Update an inventory item. accepts status active or inactive. Send sku or barcode as null to clear.
 * PATCH /v1/inventory-items/{inventory_item_id}
 * @example
 * // Persist this key with the action before sending; reuse it for every resubmission.
 * const idempotencyKey = crypto.randomUUID();
 * client.inventoryItems.update("example", {}, { idempotencyKey: idempotencyKey })
 */
    update(inventory_item_id: InputValue<string>, params: (InputValue<{ "barcode"?: string | null; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "sku"?: string | null; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<_SdkPayloadAt<InventoryItemResponse, ["data"]>>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping. */
    updateWithResponse(inventory_item_id: InputValue<string>, params: (InputValue<{ "barcode"?: string | null; "expected_version"?: string; "external_reference_id"?: string | null; "metadata"?: Record<string, string | null> | null; "name"?: string; "sku"?: string | null; "status"?: "active" | "inactive"; }>) & { "Idempotency-Key"?: InputValue<string>; "Flint-Version"?: InputValue<string> }, options?: RequestOptions<"merchant" | "merchantKey">): Promise<SdkResponse<InventoryItemsUpdateResponse>>;
  }
export declare class Client {

  constructor(options?: ClientOptions);

  close(): Promise<void>;
readonly inventoryItems: InventoryItemsResource;
}
export type { RequestOptions } from '../declarations/RequestOptions.js';
export type { _SdkPayloadAt } from '../declarations/_SdkPayloadAt.js';
export type { InventoryItemResponse } from '../declarations/InventoryItemResponse.js';
export type { SdkResponse } from '../declarations/SdkResponse.js';
export type { InventoryItemsCreateResponse } from '../declarations/InventoryItemsCreateResponse.js';
export type { InventoryItemsRemoveResponse } from '../declarations/InventoryItemsRemoveResponse.js';
export type { _SdkWithoutIdempotency } from '../declarations/_SdkWithoutIdempotency.js';
export type { InventoryItemListResponse } from '../declarations/InventoryItemListResponse.js';
export type { InventoryItemsListResponse } from '../declarations/InventoryItemsListResponse.js';
export type { InventoryItem } from '../declarations/InventoryItem.js';
export type { InventoryItemsUpdateResponse } from '../declarations/InventoryItemsUpdateResponse.js';
export type { InventoryItemsCreateInput } from '../declarations/InventoryItemsCreateInput.js';
export type { InventoryItemsRemoveInput } from '../declarations/InventoryItemsRemoveInput.js';
export type { InventoryItemsListInput } from '../declarations/InventoryItemsListInput.js';
export type { InventoryItemsUpdateInput } from '../declarations/InventoryItemsUpdateInput.js';
export type { ClientOptions } from '../declarations/ClientOptions.js';
export type { AuthMode } from '../declarations/AuthMode.js';
export type { Credentials } from '../declarations/Credentials.js';
export type { ResponseMeta } from '../declarations/ResponseMeta.js';
export type { ResponseWarning } from '../declarations/ResponseWarning.js';
export type { NextAction } from '../declarations/NextAction.js';
export type { CreateInventoryItemRequestInput } from '../declarations/CreateInventoryItemRequestInput.js';
export type { UpdateInventoryItemRequestInput } from '../declarations/UpdateInventoryItemRequestInput.js';
export { makeInventoryItemResponse } from '../declarations/makeInventoryItemResponse.js';
export { makeInventoryItemListResponse } from '../declarations/makeInventoryItemListResponse.js';
export { makeInventoryItem } from '../declarations/makeInventoryItem.js';
export { makeResponseMeta } from '../declarations/makeResponseMeta.js';
export { makeResponseWarning } from '../declarations/makeResponseWarning.js';
export { makeNextAction } from '../declarations/makeNextAction.js';

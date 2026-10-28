import type { InputValue } from '../runtime.js';
import type { ClientOptions } from '../declarations/types-4.js';
import type {
    InventoryMovement,
    InventoryMovementListResponse,
    InventoryMovementResponse,
    InventoryMovementsGetInput,
    InventoryMovementsListInput
} from '../declarations/types-26.js';
import type { RequestOptions } from '../declarations/types-42.js';
import type { SdkResponse } from '../declarations/types-46.js';
import type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export { SdkError, errors, Model, EventStream, ExactNumber, serialize, parseExact, redact } from '../runtime.js';
export type {
    Result,
    Metadata,
    ErrorKind,
    DiagnosticEvent,
    InputValue,
    CredentialProvider,
    ServerSentEvent,
    SdkErrorCode,
    SdkErrorDetails,
    WorkloadIdentityOptions,
    WorkloadIdentitySource
} from '../runtime.js';
export type { _SdkWithoutIdempotency } from '../declarations/types-65.js';
export type { RequestOptions, ResourceReference, ResourceType, ResponseMeta } from '../declarations/types-42.js';
export type {
    InventoryMovement,
    InventoryMovementResponse,
    InventoryMovementListResponse,
    InventoryMovementsGetInput,
    InventoryMovementsListInput,
    InventoryItem,
    InventoryLevel
} from '../declarations/types-26.js';
export type { SdkResponse } from '../declarations/types-46.js';
export type { ClientOptions } from '../declarations/types-4.js';
export type { AuthMode } from '../declarations/types-0.js';
export type { Credentials } from '../declarations/types-11.js';
export type { MetadataMap } from '../declarations/types-32.js';
export type { InventorySourceSystem } from '../declarations/types-27.js';
export type { ResponseWarning } from '../declarations/types-43.js';
export type { NextAction, NextActionMerchantAccountSession, MoneyValue } from '../declarations/types-33.js';
export { makeMoneyValue } from '../declarations/types-73.js';
export interface InventoryMovementsResource {
    /**
 * Retrieve an inventory movement and its stock changes by ID.
 * @see reference/inventoryMovements.md#inventorymovementsget
 * GET /v1/inventory-movements/{inventory_movement_id}
 * @example
 * client.inventoryMovements.get("example")
 */
    get(inventory_movement_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"inventory_item">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryMovement>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryMovements.md#inventorymovementsget
     */
    getWithResponse(inventory_movement_id: InputValue<string>, params?: {
        "expand"?: InputValue<Array<"inventory_item">>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryMovementResponse>>;
    /**
 * List inventory movements, oldest recorded first. Send expand=inventory_item to render each
 * movement's inventory item inline, so a history table needs no read per row. Filter by
 * idempotency_key to recover the movements a command produced. Send sort_direction=desc to read
 * the newest movements first. Default order: created_at ascending, then inventory_movement_id
 * ascending.
 * @see reference/inventoryMovements.md#inventorymovementslist
 * GET /v1/inventory-movements
 * @example
 * client.inventoryMovements.list()
 */
    list(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "type"?: InputValue<Array<"adjustment"
            | "count_applied"
            | "reservation_consumed"
            | "reservation_committed"
            | "reservation_commitment_released"
            | "reservation_expired"
            | "reservation_held"
            | "reservation_hold_released"
            | "reservation_reallocated_in"
            | "reservation_reallocated_out"
            | "return_received"
            | "safety_stock_change"
            | "transfer_departed"
            | "transfer_received"
            | "transfer_returned"
            | "transfer_lost">>;
        "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
        "idempotency_key"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_disposition_id"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "expand"?: InputValue<Array<"inventory_item">>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "source_reference_type"?: InputValue<Array<"fulfillment"
            | "inventory_adjustment"
            | "inventory_count"
            | "inventory_level"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_transfer">>;
        "source_reference_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<InventoryMovementListResponse>;
    /** Complete decoded body and HTTP metadata, without payload unwrapping.
     * @see reference/inventoryMovements.md#inventorymovementslist
     */
    listWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "type"?: InputValue<Array<"adjustment"
            | "count_applied"
            | "reservation_consumed"
            | "reservation_committed"
            | "reservation_commitment_released"
            | "reservation_expired"
            | "reservation_held"
            | "reservation_hold_released"
            | "reservation_reallocated_in"
            | "reservation_reallocated_out"
            | "return_received"
            | "safety_stock_change"
            | "transfer_departed"
            | "transfer_received"
            | "transfer_returned"
            | "transfer_lost">>;
        "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
        "idempotency_key"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_disposition_id"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "expand"?: InputValue<Array<"inventory_item">>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "source_reference_type"?: InputValue<Array<"fulfillment"
            | "inventory_adjustment"
            | "inventory_count"
            | "inventory_level"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_transfer">>;
        "source_reference_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): Promise<SdkResponse<InventoryMovementListResponse>>;
    /** Iterate pages lazily.
     * @see reference/inventoryMovements.md#inventorymovementslist
     */
    listPages(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "type"?: InputValue<Array<"adjustment"
            | "count_applied"
            | "reservation_consumed"
            | "reservation_committed"
            | "reservation_commitment_released"
            | "reservation_expired"
            | "reservation_held"
            | "reservation_hold_released"
            | "reservation_reallocated_in"
            | "reservation_reallocated_out"
            | "return_received"
            | "safety_stock_change"
            | "transfer_departed"
            | "transfer_received"
            | "transfer_returned"
            | "transfer_lost">>;
        "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
        "idempotency_key"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_disposition_id"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "expand"?: InputValue<Array<"inventory_item">>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "source_reference_type"?: InputValue<Array<"fulfillment"
            | "inventory_adjustment"
            | "inventory_count"
            | "inventory_level"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_transfer">>;
        "source_reference_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryMovementListResponse>;
    /** Iterate complete page bodies with HTTP metadata.
     * @see reference/inventoryMovements.md#inventorymovementslist
     */
    listPagesWithResponse(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "type"?: InputValue<Array<"adjustment"
            | "count_applied"
            | "reservation_consumed"
            | "reservation_committed"
            | "reservation_commitment_released"
            | "reservation_expired"
            | "reservation_held"
            | "reservation_hold_released"
            | "reservation_reallocated_in"
            | "reservation_reallocated_out"
            | "return_received"
            | "safety_stock_change"
            | "transfer_departed"
            | "transfer_received"
            | "transfer_returned"
            | "transfer_lost">>;
        "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
        "idempotency_key"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_disposition_id"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "expand"?: InputValue<Array<"inventory_item">>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "source_reference_type"?: InputValue<Array<"fulfillment"
            | "inventory_adjustment"
            | "inventory_count"
            | "inventory_level"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_transfer">>;
        "source_reference_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<SdkResponse<InventoryMovementListResponse>>;
    /** Iterate items lazily.
     * @see reference/inventoryMovements.md#inventorymovementslist
     */
    listItems(params?: {
        "page_size"?: InputValue<number>;
        "page_token"?: InputValue<string>;
        "inventory_item_id"?: InputValue<string>;
        "location_id"?: InputValue<string>;
        "type"?: InputValue<Array<"adjustment"
            | "count_applied"
            | "reservation_consumed"
            | "reservation_committed"
            | "reservation_commitment_released"
            | "reservation_expired"
            | "reservation_held"
            | "reservation_hold_released"
            | "reservation_reallocated_in"
            | "reservation_reallocated_out"
            | "return_received"
            | "safety_stock_change"
            | "transfer_departed"
            | "transfer_received"
            | "transfer_returned"
            | "transfer_lost">>;
        "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
        "idempotency_key"?: InputValue<string>;
        "return_id"?: InputValue<string>;
        "return_disposition_id"?: InputValue<string>;
        "sort_direction"?: InputValue<"asc" | "desc">;
        "expand"?: InputValue<Array<"inventory_item">>;
        "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
        "external_source_id"?: InputValue<string>;
        "external_actor_id"?: InputValue<string>;
        "occurred_after"?: InputValue<string | globalThis.Date>;
        "occurred_before"?: InputValue<string | globalThis.Date>;
        "created_after"?: InputValue<string | globalThis.Date>;
        "created_before"?: InputValue<string | globalThis.Date>;
        "source_reference_type"?: InputValue<Array<"fulfillment"
            | "inventory_adjustment"
            | "inventory_count"
            | "inventory_level"
            | "inventory_receipt"
            | "inventory_reservation"
            | "inventory_transfer">>;
        "source_reference_id"?: InputValue<string>;
    }, options?: _SdkWithoutIdempotency<RequestOptions<"merchant">>): AsyncGenerator<InventoryMovement>;
}
/** API client; see README.md and RUNTIME.md#clientoptions. */
export declare class Client {
    constructor(options?: ClientOptions);
    close(): Promise<void>;
    readonly inventoryMovements: InventoryMovementsResource;
}

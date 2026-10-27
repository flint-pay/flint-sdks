import type { InputValue } from '../runtime.js';
import type { UpdateInventoryLevelRequestInput, UpdateInventoryReservationRequestInput } from './types-48.js';
import type { InventoryItem, InventoryLevel } from './types-24.js';
import type { ResourceReference, ResponseMeta, ResourceType } from './types-40.js';
import type { CreateInventoryReceiptRequestInput, CreateInventoryReservationRequestInput } from './types-7.js';
import type { InventoryActionRequired } from './types-23.js';
import type { InventoryTransferLine } from './types-26.js';
import type { ErrorDetail } from './types-16.js';
export type InventoryLevelsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "inventory_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "location_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "inventory_item_status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): boolean. */
    "has_available_quantity"?: InputValue<boolean>;
    /** Shape $ (Value): boolean. */
    "has_unavailable_condition"?: InputValue<boolean>;
    /** Shape $ (Value): boolean. */
    "has_shortage"?: InputValue<boolean>;
    /** Shape $ (Value): string. maxLength: 255. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "min_available_quantity"?: InputValue<`${bigint}` | bigint>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "max_available_quantity"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "inventory_item". Shape $[] (Value): string.
     * Value enum: "inventory_item".
     */
    "expand"?: InputValue<Array<"inventory_item">>;
};
export type InventoryLevelsUpdateInput = {
    /** Shape $ (Value): string. */
    "inventory_level_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateInventoryLevelRequestInput}. The request body for: Update
     * inventory level.
     */
    "body": InputValue<UpdateInventoryLevelRequestInput>;
};
/**
 * Shape $ (Value): {@link InventoryMovement}. An immutable record of a single quantity change,
 * including the level state it produced.
 */
export type InventoryMovement = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "committed_quantity_delta": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ResourceReference} or null. The credential that recorded this
     * movement. null when Flint recorded it on its own, such as an expired hold or a fulfillment
     * handoff. Shape $.anyOf[1] (Value): {@link ResourceReference}. A reference to another
     * resource by `resource_type` and `resource_id`. Shape $.anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "damaged_quantity_delta": `${bigint}`;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "held_quantity_delta": `${bigint}`;
    /**
     * Shape $ (Value): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "incoming_quantity_delta": `${bigint}`;
    /**
     * Shape $ (Value): {@link InventoryItem}. The inventory item this movement is about. Present
     * only when the list request asked for expand=inventory_item. A stock-keeping unit that
     * inventory quantities are tracked against. Catalog variants reference an inventory item
     * rather than carrying their own counter.
     */
    "inventory_item"?: InventoryItem;
    /** Shape $ (Value): string. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): integer string. Claim version of the inventory level after this movement.
     * Advances when held or committed quantities change. Use an integer string (decimal digits),
     * not a floating-point number. Format: uint64. minimum: 0.
     */
    "inventory_level_claim_version": `${bigint}`;
    /** Shape $ (Value): string. */
    "inventory_level_id": string;
    /**
     * Shape $ (Value): integer string. Physical version of the inventory level after this
     * movement. Advances when on-hand or condition quantities change. Use an integer string
     * (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "inventory_level_physical_version": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Version of the inventory level after this movement. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     */
    "inventory_level_version": `${bigint}`;
    /** Shape $ (Value): string. */
    "inventory_movement_id": string;
    /** Shape $ (Value): string. */
    "location_id": string;
    /** Shape $ (Value): string. */
    "note"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "on_hand_quantity_delta": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quality_control_quantity_delta": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quarantined_quantity_delta": `${bigint}`;
    /**
     * Shape $ (Value): string. The adjustment's reason. Present only on adjustment movements;
     * other movement types already describe what happened. Value enum: "received", "returned",
     * "sold", "theft", "loss", "condition_changed", "counted", "correction".
     */
    "reason"?: "received"
        | "returned"
        | "sold"
        | "theft"
        | "loss"
        | "condition_changed"
        | "counted"
        | "correction"
        | (string & {});
    /**
     * Shape $ (Value): {@link InventoryLevel}. The quantity state of one inventory item at one
     * Location.
     */
    "resulting_inventory_level": InventoryLevel;
    /** Shape $ (Value): string. */
    "return_disposition_id"?: string;
    /** Shape $ (Value): string. */
    "return_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "safety_stock_quantity_delta": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "source_observation_sequence"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link ResourceReference}. The GET-able resource whose write recorded this
     * movement. A reference to another resource by `resource_type` and `resource_id`.
     */
    "source_reference": ResourceReference;
    /**
     * Shape $ (Value): {@link InventorySourceSystem} or null. Shape $.anyOf[1] (Value): {@link
     * InventorySourceSystem}. The system an inventory event came from, such as manual entry, a
     * point of sale, a warehouse system, or Flint, with your source identifier when it applies.
     * Shape $.anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
    /**
     * Shape $ (Value): string. Value enum: "adjustment", "count_applied", "reservation_consumed",
     * "reservation_committed", "reservation_commitment_released", "reservation_expired",
     * "reservation_held", "reservation_hold_released", "reservation_reallocated_in",
     * "reservation_reallocated_out", "return_received", "safety_stock_change",
     * "transfer_departed", "transfer_received", "transfer_returned", "transfer_lost".
     */
    "type": "adjustment"
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
        | "transfer_lost"
        | (string & {});
};
/**
 * Shape $ (Value): {@link InventoryMovementListResponse}. A page of `InventoryMovement` objects.
 */
export type InventoryMovementListResponse = {
    /**
     * Shape $ (Value): Array of {@link InventoryMovement}. Shape $[] (Value): {@link
     * InventoryMovement}. An immutable record of a single quantity change, including the level
     * state it produced.
     */
    "data": Array<InventoryMovement>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link InventoryMovementResponse}. A response containing `InventoryMovement`
 * data.
 */
export type InventoryMovementResponse = {
    /**
     * Shape $ (Value): {@link InventoryMovement}. An immutable record of a single quantity change,
     * including the level state it produced.
     */
    "data": InventoryMovement;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type InventoryMovementsGetInput = {
    /**
     * Shape $ (Value): Array of string. [] enum: "inventory_item". Shape $[] (Value): string.
     * Value enum: "inventory_item".
     */
    "expand"?: InputValue<Array<"inventory_item">>;
    /** Shape $ (Value): string. */
    "inventory_movement_id": InputValue<string>;
};
export type InventoryMovementsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "inventory_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "location_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "adjustment", "count_applied",
     * "reservation_consumed", "reservation_committed", "reservation_commitment_released",
     * "reservation_expired", "reservation_held", "reservation_hold_released",
     * "reservation_reallocated_in", "reservation_reallocated_out", "return_received",
     * "safety_stock_change", "transfer_departed", "transfer_received", "transfer_returned",
     * "transfer_lost". Shape $[] (Value): string. Value enum: "adjustment", "count_applied",
     * "reservation_consumed", "reservation_committed", "reservation_commitment_released",
     * "reservation_expired", "reservation_held", "reservation_hold_released",
     * "reservation_reallocated_in", "reservation_reallocated_out", "return_received",
     * "safety_stock_change", "transfer_departed", "transfer_received", "transfer_returned",
     * "transfer_lost".
     */
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
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "received", "returned", "sold",
     * "theft", "loss", "condition_changed", "counted", "correction". Shape $[] (Value): string.
     * Value enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted",
     * "correction".
     */
    "reason"?: InputValue<Array<"received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_disposition_id"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "asc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Shape $ (Value): Array of string. [] enum: "inventory_item". Shape $[] (Value): string.
     * Value enum: "inventory_item".
     */
    "expand"?: InputValue<Array<"inventory_item">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms", "erp",
     * "flint", "other". Shape $[] (Value): string. Value enum: "manual", "pos", "wms", "erp",
     * "flint", "other".
     */
    "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
    /** Shape $ (Value): string. */
    "external_source_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "external_actor_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "fulfillment",
     * "inventory_adjustment", "inventory_count", "inventory_level", "inventory_receipt",
     * "inventory_reservation", "inventory_transfer". Shape $[] (Value): string. Value enum:
     * "fulfillment", "inventory_adjustment", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer".
     */
    "source_reference_type"?: InputValue<Array<"fulfillment"
        | "inventory_adjustment"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_transfer">>;
    /** Shape $ (Value): string. */
    "source_reference_id"?: InputValue<string>;
};
/**
 * Shape $ (Value): {@link InventoryOriginPolicy}. How Flint handles inventory failures for one
 * order source: the action after a post-payment inventory failure and for a blocked subscription.
 */
export type InventoryOriginPolicy = {
    /** Shape $ (Value): string.  Value enum: "exception_state", "auto_refund". */
    "post_payment_inventory_failure_action"?: "exception_state" | "auto_refund" | (string & {});
    /**
     * Shape $ (Value): string. What happens when a subscription renewal cannot get stock.
     * inventory_blocked_open_invoice creates an open invoice with collection_block_status
     * inventory_blocked, external collection, caller-managed delivery, and no due date. past_due
     * moves the subscription to past due. Value enum: "inventory_blocked_open_invoice",
     * "past_due".
     */
    "subscription_inventory_block_action"?: "inventory_blocked_open_invoice" | "past_due" | (string & {});
};
/**
 * Shape $ (Value): {@link InventoryOriginPolicyInput}. How Flint handles inventory failures for
 * one order source: the action after a post-payment inventory failure and for a blocked
 * subscription.
 */
export type InventoryOriginPolicyInput = {
    /** Shape $ (Value): string.  Value enum: "exception_state", "auto_refund". */
    "post_payment_inventory_failure_action"?: "exception_state" | "auto_refund";
    /**
     * Shape $ (Value): string. What happens when a subscription renewal cannot get stock.
     * inventory_blocked_open_invoice creates an open invoice with collection_block_status
     * inventory_blocked, external collection, caller-managed delivery, and no due date. past_due
     * moves the subscription to past due. Value enum: "inventory_blocked_open_invoice",
     * "past_due".
     */
    "subscription_inventory_block_action"?: "inventory_blocked_open_invoice" | "past_due";
};
/**
 * Shape $ (Value): {@link InventoryProvenanceRequest}. Where and when an inventory event happened:
 * the source system, external actor, and time.
 */
export type InventoryProvenanceRequest = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
     * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/**
 * Shape $ (Value): {@link InventoryProvenanceRequestInput}. Where and when an inventory event
 * happened: the source system, external actor, and time.
 */
export type InventoryProvenanceRequestInput = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for
     * an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it
     * applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/**
 * Shape $ (Value): {@link InventoryReceipt}. Returned units received into Inventory, from a Return
 * disposition or against the reservation line that consumed them.
 */
export type InventoryReceipt = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /** Shape $ (Value): string. */
    "inventory_receipt_id": string;
    /**
     * Shape $ (Value): Array of {@link InventoryReceiptLine}. Shape $[] (Value): {@link
     * InventoryReceiptLine}. One line of an inventory receipt: a quantity of an item received at a
     * Location with its disposition.
     */
    "lines": Array<InventoryReceiptLine>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Shape $ (Value): string. */
    "return_disposition_id"?: string;
    /** Shape $ (Value): string. */
    "return_id"?: string;
    /**
     * Shape $ (Value): {@link InventorySourceSystem} or null. Shape $.anyOf[1] (Value): {@link
     * InventorySourceSystem}. The system an inventory event came from, such as manual entry, a
     * point of sale, a warehouse system, or Flint, with your source identifier when it applies.
     * Shape $.anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
};
/**
 * Shape $ (Value): {@link InventoryReceiptLine}. One line of an inventory receipt: a quantity of
 * an item received at a Location with its disposition.
 */
export type InventoryReceiptLine = {
    /**
     * Shape $ (Value): string. sellable adds on-hand stock available for sale. quality_control,
     * damaged, and quarantined add on-hand stock to the matching condition bucket. lost records
     * returned units that were lost and changes no stock quantity. Value enum: "sellable",
     * "quality_control", "damaged", "quarantined", "lost".
     */
    "disposition": "sellable" | "quality_control" | "damaged" | "quarantined" | "lost" | (string & {});
    /** Shape $ (Value): string. */
    "inventory_item_id": string;
    /** Shape $ (Value): string. */
    "inventory_movement_id"?: string;
    /** Shape $ (Value): string. */
    "inventory_receipt_line_id": string;
    /** Shape $ (Value): string. */
    "inventory_reservation_id"?: string;
    /** Shape $ (Value): string. */
    "inventory_reservation_line_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "receiving_location_id": string;
    /** Shape $ (Value): string. */
    "return_disposition_id"?: string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
};
/**
 * Shape $ (Value): {@link InventoryReceiptLineRequest}. One line of an inventory receipt you
 * supply: a quantity of an item received at a Location with its disposition.
 */
export type InventoryReceiptLineRequest = {
    /**
     * Shape $ (Value): string. sellable adds on-hand stock available for sale. quality_control,
     * damaged, and quarantined add on-hand stock to the matching condition bucket. lost records
     * returned units that were lost and changes no stock quantity. Value enum: "sellable",
     * "quality_control", "damaged", "quarantined", "lost".
     */
    "disposition": "sellable" | "quality_control" | "damaged" | "quarantined" | "lost" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): string. The reservation whose consumed stock is being returned. minLength:
     * 1.
     */
    "inventory_reservation_id": string;
    /**
     * Shape $ (Value): string. The consumed reservation line. Received quantity cannot exceed
     * consumed quantity less prior receipts. minLength: 1.
     */
    "inventory_reservation_line_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "receiving_location_id": string;
};
/**
 * Shape $ (Value): {@link InventoryReceiptLineRequestInput}. One line of an inventory receipt you
 * supply: a quantity of an item received at a Location with its disposition.
 */
export type InventoryReceiptLineRequestInput = {
    /**
     * Shape $ (Value): string. sellable adds on-hand stock available for sale. quality_control,
     * damaged, and quarantined add on-hand stock to the matching condition bucket. lost records
     * returned units that were lost and changes no stock quantity. Value enum: "sellable",
     * "quality_control", "damaged", "quarantined", "lost".
     */
    "disposition": "sellable" | "quality_control" | "damaged" | "quarantined" | "lost";
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): string. The reservation whose consumed stock is being returned. minLength:
     * 1.
     */
    "inventory_reservation_id": string;
    /**
     * Shape $ (Value): string. The consumed reservation line. Received quantity cannot exceed
     * consumed quantity less prior receipts. minLength: 1.
     */
    "inventory_reservation_line_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "receiving_location_id": string;
};
/** Shape $ (Value): {@link InventoryReceiptListResponse}. A page of `InventoryReceipt` objects. */
export type InventoryReceiptListResponse = {
    /**
     * Shape $ (Value): Array of {@link InventoryReceipt}. Shape $[] (Value): {@link
     * InventoryReceipt}. Returned units received into Inventory, from a Return disposition or
     * against the reservation line that consumed them.
     */
    "data": Array<InventoryReceipt>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link InventoryReceiptResponse}. A response containing `InventoryReceipt`
 * data.
 */
export type InventoryReceiptResponse = {
    /**
     * Shape $ (Value): {@link InventoryReceipt}. Returned units received into Inventory, from a
     * Return disposition or against the reservation line that consumed them.
     */
    "data": InventoryReceipt;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link InventoryReceiptResult}. Inventory receipt and the levels it changed.
 * inventory_receipt is the primary resource and expected_version target.
 */
export type InventoryReceiptResult = {
    /**
     * Shape $ (Value): Array of {@link InventoryLevel}. Post-commit state of every level this
     * command touched, one entry per level. A replay returns the levels the original command
     * produced. Empty when no levels changed. Shape $[] (Value): {@link InventoryLevel}. The
     * quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
    /**
     * Shape $ (Value): {@link InventoryReceipt}. Returned units received into Inventory, from a
     * Return disposition or against the reservation line that consumed them.
     */
    "inventory_receipt": InventoryReceipt;
};
/**
 * Shape $ (Value): {@link InventoryReceiptResultResponse}. A response containing
 * `InventoryReceiptResult` data.
 */
export type InventoryReceiptResultResponse = {
    /**
     * Shape $ (Value): {@link InventoryReceiptResult}. Inventory receipt and the levels it
     * changed. inventory_receipt is the primary resource and expected_version target.
     */
    "data": InventoryReceiptResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
export type InventoryReceiptsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateInventoryReceiptRequestInput}. The request body for: Create
     * inventory receipt.
     */
    "body": InputValue<CreateInventoryReceiptRequestInput>;
};
export type InventoryReceiptsGetInput = {
    /** Shape $ (Value): string. */
    "inventory_receipt_id": InputValue<string>;
};
export type InventoryReceiptsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "inventory_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "receiving_location_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "inventory_reservation_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_disposition_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms", "erp",
     * "flint", "other". Shape $[] (Value): string. Value enum: "manual", "pos", "wms", "erp",
     * "flint", "other".
     */
    "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "flint" | "other">>;
    /** Shape $ (Value): string. */
    "external_source_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "external_actor_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
/**
 * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from held to
 * committed to consumed, and can be released or reallocated.
 */
export type InventoryReservation = {
    /**
     * Shape $ (Value): string or null. How the reservation ended. mixed when more than one
     * terminal outcome applied. Value enum: "consumed", "released", "expired", "reallocated",
     * "mixed", null.
     */
    "closed_reason"?: "consumed" | "released" | "expired" | "reallocated" | "mixed" | null | (string & {}) | null;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string or null. When held quantity is released if it isn't committed first.
     * null once no line holds quantity. Committed and consumed quantity never expire. Format:
     * date-time.
     */
    "expires_at": string | null;
    /**
     * Shape $ (Value): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /**
     * Shape $ (Value): {@link InventoryActionRequired}. Present when the claim needs a merchant
     * action before commerce can continue. Says that an inventory reservation needs action, with
     * the `reason` and the reservation lines affected.
     */
    "inventory_action_required"?: InventoryActionRequired;
    /** Shape $ (Value): string. */
    "inventory_reservation_id": string;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Where an order, payment link, or
     * reservation routes inventory from: a fixed Location, an inventory allocation policy, or one
     * policy revision.
     */
    "inventory_routing_source": InventoryRoutingSource;
    /**
     * Shape $ (Value): Array of {@link InventoryReservationLine}. Shape $[] (Value): {@link
     * InventoryReservationLine}. One item's location allocation within a reservation.
     */
    "lines": Array<InventoryReservationLine>;
    /**
     * Shape $ (Value): {@link InventoryReservationOwner}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     */
    "owner": InventoryReservationOwner;
    /**
     * Shape $ (Value): string. Set on a reservation whose claim Flint moved when it rerouted an
     * order: the replacement reservation that now holds the quantity named in this reservation's
     * reallocated_quantity.
     */
    "replacement_inventory_reservation_id"?: string;
    /**
     * Shape $ (Value): string. Set on a replacement reservation: the reservation whose claim Flint
     * moved here when it rerouted an order. This reservation holds the quantity that reservation
     * reports as reallocated_quantity.
     */
    "source_inventory_reservation_id"?: string;
    /**
     * Shape $ (Value): string. active while any held or committed quantity remains; closed once
     * none does. Value enum: "active", "closed".
     */
    "status": "active" | "closed" | (string & {});
    /**
     * Shape $ (Value): Array of string. Actions that can change this reservation now. Empty for a
     * closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release". Shape $[]
     * (Value): string. Value enum: "commit", "consume", "release".
     */
    "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. The reservation version. Send it as expected_version to
     * reject a write if the reservation changed. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link InventoryReservationLine}. One item's location allocation within a
 * reservation.
 */
export type InventoryReservationLine = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "allocated_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "at_risk_committed_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "at_risk_held_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "bundle_component_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "committed_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "consumed_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "demand_key": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "held_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "inventory_item_id": string;
    /** Shape $ (Value): string. */
    "inventory_reservation_line_id": string;
    /** Shape $ (Value): string. */
    "location_id": string;
    /** Shape $ (Value): string. */
    "order_line_item_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "reallocated_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "released_from_committed_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "released_from_held_quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link InventoryReservationListResponse}. A page of `InventoryReservation`
 * objects.
 */
export type InventoryReservationListResponse = {
    /**
     * Shape $ (Value): Array of {@link InventoryReservation}. Shape $[] (Value): {@link
     * InventoryReservation}. A claim on stock. Quantity moves from held to committed to consumed,
     * and can be released or reallocated.
     */
    "data": Array<InventoryReservation>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link InventoryReservationOwner}. Who holds an inventory reservation: either a
 * merchant claim identified by your `key`, or an order.
 */
export type InventoryReservationOwner = ((InventoryReservationOwnerMerchant) | (InventoryReservationOwnerOrder) | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InventoryReservationOwnerMerchant}. The `merchant` variant of
 * `InventoryReservationOwner`.
 */
export type InventoryReservationOwnerMerchant = {
    /** Shape $ (Value): string. */
    "key": string;
    /** Shape $ (Value): string.  Value enum: "merchant". */
    "type": "merchant" | (string & {});
};
/**
 * Shape $ (Value): {@link InventoryReservationOwnerOrder}. The `order` variant of
 * `InventoryReservationOwner`.
 */
export type InventoryReservationOwnerOrder = {
    /**
     * Shape $ (Value): string. The order Flint holds the stock for. Absent only on a closed
     * reservation whose order Flint can no longer identify.
     */
    "order_id"?: string;
    /** Shape $ (Value): string.  Value enum: "order". */
    "type": "order" | (string & {});
};
/**
 * Shape $ (Value): {@link InventoryReservationOwnerRequest}. The owner of a merchant inventory
 * reservation you create: your `key` for what holds the stock.
 */
export type InventoryReservationOwnerRequest = {
    /**
     * Shape $ (Value): string. Your stable identifier for what holds the stock, such as a cart ID.
     * One active reservation per key. minLength: 1.
     */
    "key": string;
};
/**
 * Shape $ (Value): {@link InventoryReservationOwnerRequestInput}. The owner of a merchant
 * inventory reservation you create: your `key` for what holds the stock.
 */
export type InventoryReservationOwnerRequestInput = InventoryReservationOwnerRequest;
/**
 * Shape $ (Value): {@link InventoryReservationResponse}. A response containing
 * `InventoryReservation` data.
 */
export type InventoryReservationResponse = {
    /**
     * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from held to
     * committed to consumed, and can be released or reallocated.
     */
    "data": InventoryReservation;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link InventoryReservationResult}. inventory_reservation is the primary
 * resource and expected_version target. Stock-moving transitions return this result instead of a
 * resource alone.
 */
export type InventoryReservationResult = {
    /**
     * Shape $ (Value): Array of {@link InventoryLevel}. Post-commit state of every level this
     * command touched, so no follow-up read is needed. A replay returns the levels the original
     * command produced. Shape $[] (Value): {@link InventoryLevel}. The quantity state of one
     * inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
    /**
     * Shape $ (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from held to
     * committed to consumed, and can be released or reallocated.
     */
    "inventory_reservation": InventoryReservation;
};
/**
 * Shape $ (Value): {@link InventoryReservationResultResponse}. A response containing
 * `InventoryReservationResult` data.
 */
export type InventoryReservationResultResponse = {
    /**
     * Shape $ (Value): {@link InventoryReservationResult}. inventory_reservation is the primary
     * resource and expected_version target. Stock-moving transitions return this result instead of
     * a resource alone.
     */
    "data": InventoryReservationResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link InventoryReservationTransitionRequest}. The request body for: Transition
 * inventory reservation.
 */
export type InventoryReservationTransitionRequest = ((InventoryReservationTransitionRequestCommit)
    | (InventoryReservationTransitionRequestConsume)
    | (InventoryReservationTransitionRequestRelease)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InventoryReservationTransitionRequestCommit}. The `commit` variant of
 * `InventoryReservationTransitionRequest`.
 */
export type InventoryReservationTransitionRequestCommit = {
    /** Shape $ (Value): string.  Value enum: "commit". */
    "action": "commit" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional resource version the caller last read. Enforced
     * when sent. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_reservation_line_id (Required): string. Line being transitioned.
     * minLength: 1. Shape $[].target_committed_quantity (Required): integer string. Cumulative
     * whole-number quantity that should have reached this target. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_committed_quantity": `${bigint}`;
    }>;
};
/**
 * Shape $ (Value): {@link InventoryReservationTransitionRequestCommitInput}. The `commit` variant
 * of `InventoryReservationTransitionRequest`.
 */
export type InventoryReservationTransitionRequestCommitInput = {
    /** Shape $ (Value): string.  Value enum: "commit". */
    "action": "commit";
    /**
     * Shape $ (Value): integer string. Optional resource version the caller last read. Enforced
     * when sent. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_reservation_line_id (Required): string. Line being transitioned.
     * minLength: 1. Shape $[].target_committed_quantity (Required): integer string. Cumulative
     * whole-number quantity that should have reached this target. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_committed_quantity": `${bigint}` | bigint;
    }>;
};
/**
 * Shape $ (Value): {@link InventoryReservationTransitionRequestConsume}. The `consume` variant of
 * `InventoryReservationTransitionRequest`.
 */
export type InventoryReservationTransitionRequestConsume = {
    /** Shape $ (Value): string.  Value enum: "consume". */
    "action": "consume" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional resource version the caller last read. Enforced
     * when sent. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_reservation_line_id (Required): string. Line being transitioned.
     * minLength: 1. Shape $[].target_consumed_quantity (Required): integer string. Cumulative
     * whole-number quantity that should have reached this target. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_consumed_quantity": `${bigint}`;
    }>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequest}. When and where the physical handoff
     * happened. When omitted, occurred_at is the command receipt time and source_system is null.
     * Where and when an inventory event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/**
 * Shape $ (Value): {@link InventoryReservationTransitionRequestConsumeInput}. The `consume`
 * variant of `InventoryReservationTransitionRequest`.
 */
export type InventoryReservationTransitionRequestConsumeInput = {
    /** Shape $ (Value): string.  Value enum: "consume". */
    "action": "consume";
    /**
     * Shape $ (Value): integer string. Optional resource version the caller last read. Enforced
     * when sent. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of object. minItems: 1. maxItems: 100. Shape $[] (Value): object.
     * Shape $[].inventory_reservation_line_id (Required): string. Line being transitioned.
     * minLength: 1. Shape $[].target_consumed_quantity (Required): integer string. Cumulative
     * whole-number quantity that should have reached this target. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /** Shape $ (Value): string. Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_consumed_quantity": `${bigint}` | bigint;
    }>;
    /**
     * Shape $ (Value): {@link InventoryProvenanceRequestInput}. When and where the physical
     * handoff happened. When omitted, occurred_at is the command receipt time and source_system is
     * null. Where and when an inventory event happened: the source system, external actor, and
     * time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/**
 * Shape $ (Value): {@link InventoryReservationTransitionRequestInput}. The request body for:
 * Transition inventory reservation.
 */
export type InventoryReservationTransitionRequestInput = ((InventoryReservationTransitionRequestCommitInput)
    | (InventoryReservationTransitionRequestConsumeInput)
    | (InventoryReservationTransitionRequestReleaseInput));
/**
 * Shape $ (Value): {@link InventoryReservationTransitionRequestRelease}. The `release` variant of
 * `InventoryReservationTransitionRequest`.
 */
export type InventoryReservationTransitionRequestRelease = {
    /** Shape $ (Value): string.  Value enum: "release". */
    "action": "release" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional resource version the caller last read. Enforced
     * when sent. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of (object and Alternative shapes (see declared variants)). minItems:
     * 1. maxItems: 100. Shape $[] (Value): object and Alternative shapes (see declared variants).
     * Shape $[].inventory_reservation_line_id (Required): string. Line being transitioned.
     * minLength: 1. Shape $[].target_released_from_committed_quantity (Optional): integer string.
     * Cumulative whole-number quantity that should have reached this target. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape
     * $[].target_released_from_held_quantity (Optional): integer string. Cumulative whole-number
     * quantity that should have reached this target. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $[].anyOf[1] (Value): any. Shape
     * $[].anyOf[2] (Value): any.
     */
    "lines": Array<({
        /** Shape $ (Value): string. Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_released_from_committed_quantity"?: `${bigint}`;
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_released_from_held_quantity"?: `${bigint}`;
    })
        & (({
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_released_from_held_quantity": `${bigint}`;
    })
        | ({
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_released_from_committed_quantity": `${bigint}`;
    })
        | (Record<string, unknown>))>;
};
/**
 * Shape $ (Value): {@link InventoryReservationTransitionRequestReleaseInput}. The `release`
 * variant of `InventoryReservationTransitionRequest`.
 */
export type InventoryReservationTransitionRequestReleaseInput = {
    /** Shape $ (Value): string.  Value enum: "release". */
    "action": "release";
    /**
     * Shape $ (Value): integer string. Optional resource version the caller last read. Enforced
     * when sent. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of (object and Alternative shapes (see declared variants)). minItems:
     * 1. maxItems: 100. Shape $[] (Value): object and Alternative shapes (see declared variants).
     * Shape $[].inventory_reservation_line_id (Required): string. Line being transitioned.
     * minLength: 1. Shape $[].target_released_from_committed_quantity (Optional): integer string.
     * Cumulative whole-number quantity that should have reached this target. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0. Shape
     * $[].target_released_from_held_quantity (Optional): integer string. Cumulative whole-number
     * quantity that should have reached this target. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0. Shape $[].anyOf[1] (Value): any. Shape
     * $[].anyOf[2] (Value): any.
     */
    "lines": Array<({
        /** Shape $ (Value): string. Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_released_from_committed_quantity"?: `${bigint}` | bigint;
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_released_from_held_quantity"?: `${bigint}` | bigint;
    })
        & (({
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_released_from_held_quantity": `${bigint}` | bigint;
    })
        | ({
        /**
         * Shape $ (Value): integer string. Cumulative whole-number quantity that should have
         * reached this target. Use an integer string (decimal digits), not a floating-point
         * number. Format: int64. minimum: 0.
         */
        "target_released_from_committed_quantity": `${bigint}` | bigint;
    }))>;
};
export type InventoryReservationsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateInventoryReservationRequestInput}. The request body for:
     * Create inventory reservation.
     */
    "body": InputValue<CreateInventoryReservationRequestInput>;
};
export type InventoryReservationsGetInput = {
    /** Shape $ (Value): string. */
    "inventory_reservation_id": InputValue<string>;
};
export type InventoryReservationsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "inventory_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "location_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "closed". Shape $[]
     * (Value): string. Value enum: "active", "closed".
     */
    "status"?: InputValue<Array<"active" | "closed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "merchant", "order". Shape $[]
     * (Value): string. Value enum: "merchant", "order".
     */
    "owner_type"?: InputValue<Array<"merchant" | "order">>;
    /** Shape $ (Value): string. */
    "owner_key"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): boolean. */
    "has_at_risk_quantity"?: InputValue<boolean>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "consumed", "released", "expired",
     * "reallocated", "mixed". Shape $[] (Value): string. Value enum: "consumed", "released",
     * "expired", "reallocated", "mixed".
     */
    "closed_reason"?: InputValue<Array<"consumed" | "released" | "expired" | "reallocated" | "mixed">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "expires_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "expires_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type InventoryReservationsTransitionInput = {
    /** Shape $ (Value): string. */
    "inventory_reservation_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link InventoryReservationTransitionRequestInput}. The request body for:
     * Transition inventory reservation.
     */
    "body": InputValue<InventoryReservationTransitionRequestInput>;
};
export type InventoryReservationsUpdateInput = {
    /** Shape $ (Value): string. */
    "inventory_reservation_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateInventoryReservationRequestInput}. The request body for:
     * Update inventory reservation.
     */
    "body": InputValue<UpdateInventoryReservationRequestInput>;
};
/**
 * Shape $ (Value): {@link InventoryRoutingDemand}. Stock you ask to reserve for one item: the item
 * and quantity, plus optional Location limits and splitting behavior.
 */
export type InventoryRoutingDemand = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "allowed_location_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Your identifier for this demand. Defaults to inventory_item_id.
     * Required on every demand when an inventory_item_id occurs more than once. minLength: 1.
     */
    "demand_key"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "forced_location_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Optional demand constraint intersected with the routing source
     * rule. Omission uses split_when_required and leaves the routing source rule in control. Value
     * enum: "single_location", "split_when_required".
     */
    "splitting_behavior"?: "single_location" | "split_when_required" | (string & {});
};
/**
 * Shape $ (Value): {@link InventoryRoutingDemandInput}. Stock you ask to reserve for one item: the
 * item and quantity, plus optional Location limits and splitting behavior.
 */
export type InventoryRoutingDemandInput = {
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "allowed_location_ids"?: Array<string>;
    /**
     * Shape $ (Value): string. Your identifier for this demand. Defaults to inventory_item_id.
     * Required on every demand when an inventory_item_id occurs more than once. minLength: 1.
     */
    "demand_key"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "forced_location_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Optional demand constraint intersected with the routing source
     * rule. Omission uses split_when_required and leaves the routing source rule in control. Value
     * enum: "single_location", "split_when_required".
     */
    "splitting_behavior"?: "single_location" | "split_when_required";
};
/**
 * Shape $ (Value): {@link InventoryRoutingSource}. Where an order, payment link, or reservation
 * routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.
 */
export type InventoryRoutingSource = {
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_id"?: string;
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_revision_id"?: string;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string.  Value enum: "fixed_location", "policy", "policy_revision". */
    "type": "fixed_location" | "policy" | "policy_revision" | (string & {});
};
/**
 * Shape $ (Value): {@link InventoryRoutingSourceInputFixedLocation}. The `fixed_location` variant
 * of `InventoryRoutingSourceInput`.
 */
export type InventoryRoutingSourceInputFixedLocation = {
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /** Shape $ (Value): string.  Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
};
/**
 * Shape $ (Value): {@link InventoryRoutingSourceInputFixedLocationInput}. The `fixed_location`
 * variant of `InventoryRoutingSourceInput`.
 */
export type InventoryRoutingSourceInputFixedLocationInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
    /** Shape $ (Value): string.  Value enum: "fixed_location". */
    "type": "fixed_location";
};
/**
 * Shape $ (Value): {@link InventoryRoutingSourceInputPolicy}. The `policy` variant of
 * `InventoryRoutingSourceInput`.
 */
export type InventoryRoutingSourceInputPolicy = {
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_allocation_policy_id": string;
    /** Shape $ (Value): string.  Value enum: "policy". */
    "type": "policy" | (string & {});
};
/**
 * Shape $ (Value): {@link InventoryRoutingSourceInputPolicyInput}. The `policy` variant of
 * `InventoryRoutingSourceInput`.
 */
export type InventoryRoutingSourceInputPolicyInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_allocation_policy_id": string;
    /** Shape $ (Value): string.  Value enum: "policy". */
    "type": "policy";
};
/**
 * Shape $ (Value): {@link InventoryRoutingSourceInputPolicyRevision}. The `policy_revision`
 * variant of `InventoryRoutingSourceInput`.
 */
export type InventoryRoutingSourceInputPolicyRevision = {
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_allocation_policy_revision_id": string;
    /** Shape $ (Value): string.  Value enum: "policy_revision". */
    "type": "policy_revision" | (string & {});
};
/**
 * Shape $ (Value): {@link InventoryRoutingSourceInputPolicyRevisionInput}. The `policy_revision`
 * variant of `InventoryRoutingSourceInput`.
 */
export type InventoryRoutingSourceInputPolicyRevisionInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_allocation_policy_revision_id": string;
    /** Shape $ (Value): string.  Value enum: "policy_revision". */
    "type": "policy_revision";
};
/**
 * Shape $ (Value): {@link InventoryRoutingSourceRequest}. Where you want inventory routed from: a
 * fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
 */
export type InventoryRoutingSourceRequest = ((InventoryRoutingSourceInputFixedLocation)
    | (InventoryRoutingSourceInputPolicy)
    | (InventoryRoutingSourceInputPolicyRevision)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InventoryRoutingSourceRequestInput}. Where you want inventory routed
 * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
 * `type`.
 */
export type InventoryRoutingSourceRequestInput = ((InventoryRoutingSourceInputFixedLocationInput)
    | (InventoryRoutingSourceInputPolicyInput)
    | (InventoryRoutingSourceInputPolicyRevisionInput));
/**
 * Shape $ (Value): {@link InventorySettings}. Inventory settings: the `low_stock_threshold` and
 * how inventory failures are handled for each order source.
 */
export type InventorySettings = {
    /** Shape $ (Value): integer. Format: int32. */
    "low_stock_threshold"?: number;
    /**
     * Shape $ (Value): Map of {@link InventoryOriginPolicy}. Map replaced as a whole: the keys you
     * send become the full map. Inventory failure handling keyed by order source: checkout,
     * payment_link, api, subscription, virtual_terminal, or default. The source-specific entry
     * wins; default applies to the rest. Shape $.* (Value): {@link InventoryOriginPolicy}. How
     * Flint handles inventory failures for one order source: the action after a post-payment
     * inventory failure and for a blocked subscription.
     */
    "origin_policies"?: Record<string, InventoryOriginPolicy>;
};
/**
 * Shape $ (Value): {@link InventorySettingsInput}. Inventory settings: the `low_stock_threshold`
 * and how inventory failures are handled for each order source.
 */
export type InventorySettingsInput = {
    /** Shape $ (Value): integer. Format: int32. */
    "low_stock_threshold"?: number;
    /**
     * Shape $ (Value): Map of {@link InventoryOriginPolicyInput}. Map replaced as a whole: the
     * keys you send become the full map. Inventory failure handling keyed by order source:
     * checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific
     * entry wins; default applies to the rest. Shape $.* (Value): {@link
     * InventoryOriginPolicyInput}. How Flint handles inventory failures for one order source: the
     * action after a post-payment inventory failure and for a blocked subscription.
     */
    "origin_policies"?: Record<string, InventoryOriginPolicyInput>;
};
/**
 * Shape $ (Value): {@link InventorySourceSystem}. The system an inventory event came from, such as
 * manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it
 * applies.
 */
export type InventorySourceSystem = ({
    /**
     * Shape $ (Value): string. Your source system's identifier. Required when type is pos, wms,
     * erp, or other; not allowed when type is manual. Don't put secrets in this field. maxLength:
     * 255.
     */
    "external_source_id"?: string;
    /**
     * Shape $ (Value): string. Source of the event: manual for a manual entry, pos for a point of
     * sale, wms for a warehouse management system, erp for an enterprise resource planning system,
     * or other for another external system. Flint-authored events use flint in responses. Value
     * enum: "manual", "pos", "wms", "erp", "flint", "other".
     */
    "type": "manual" | "pos" | "wms" | "erp" | "flint" | "other" | (string & {});
});
/**
 * Shape $ (Value): {@link InventorySourceSystemRequest}. The source system you report for an
 * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies.
 */
export type InventorySourceSystemRequest = ({
    /**
     * Shape $ (Value): string. Your source system's identifier. Required when type is pos, wms,
     * erp, or other; not allowed when type is manual. Don't put secrets in this field. minLength:
     * 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Shape $ (Value): string. Source of the event: manual for a manual entry, pos for a point of
     * sale, wms for a warehouse management system, erp for an enterprise resource planning system,
     * or other for another external system. Flint-authored events use flint in responses. Value
     * enum: "manual", "pos", "wms", "erp", "other".
     */
    "type": "manual" | "pos" | "wms" | "erp" | "other" | (string & {});
});
/**
 * Shape $ (Value): {@link InventorySourceSystemRequestInput}. The source system you report for an
 * inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies.
 */
export type InventorySourceSystemRequestInput = ({
    /**
     * Shape $ (Value): string. Your source system's identifier. Required when type is pos, wms,
     * erp, or other; not allowed when type is manual. Don't put secrets in this field. minLength:
     * 1. maxLength: 255.
     */
    "external_source_id"?: string;
    /**
     * Shape $ (Value): string. Source of the event: manual for a manual entry, pos for a point of
     * sale, wms for a warehouse management system, erp for an enterprise resource planning system,
     * or other for another external system. Flint-authored events use flint in responses. Value
     * enum: "manual", "pos", "wms", "erp", "other".
     */
    "type": "manual" | "pos" | "wms" | "erp" | "other";
});
/** Shape $ (Value): {@link InventoryTransfer}. Stock moving between locations. */
export type InventoryTransfer = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "closed_at"?: string;
    /**
     * Shape $ (Value): string or null. Value enum: "received", "canceled",
     * "received_with_cancellation", "returned", "lost", "mixed", null.
     */
    "closed_reason"?: "received"
        | "canceled"
        | "received_with_cancellation"
        | "returned"
        | "lost"
        | "mixed"
        | null
        | (string & {})
        | null;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "departed_at"?: string;
    /** Shape $ (Value): string. */
    "destination_location_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /** Shape $ (Value): string. */
    "inventory_transfer_id": string;
    /**
     * Shape $ (Value): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection. Shape $[]
     * (Value): {@link InventoryTransferLine}. One line of an inventory transfer, with the
     * requested quantity and how much has departed, been received by condition, canceled, lost, or
     * returned.
     */
    "lines": Array<InventoryTransferLine>;
    /** Shape $ (Value): string. */
    "note"?: string;
    /** Shape $ (Value): string. */
    "origin_location_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "received_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "draft", "in_transit", "partially_resolved", "closed".
     */
    "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". Shape $[] (Value): string. Value enum: "depart", "receive",
     * "return_to_origin", "report_loss", "cancel".
     */
    "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link InventoryTransferActionConflictErrorDetail}. An error detail returned
 * when an inventory transfer action conflicts with the transfer's current state. One specific
 * failure within an error, with a `code` and `message` plus fields that depend on the code, such
 * as the `param`, resource, quantity, or amount involved.
 */
export type InventoryTransferActionConflictErrorDetail = (Exclude<ErrorDetail & object, readonly unknown[]>)
    & ({
    /** Shape $ (Value): string.  Value enum: "ACTION_NOT_ALLOWED". */
    "code": "ACTION_NOT_ALLOWED" | (string & {});
    /**
     * Shape $ (Value): string. Current transfer status. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed".
     */
    "current_status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
    /**
     * Shape $ (Value): integer string. Current transfer version. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "current_version": `${bigint}`;
    /** Shape $ (Value): string. */
    "message": string;
    /** Shape $ (Value): string.  Value enum: "action". */
    "param": "action" | (string & {});
    /** Shape $ (Value): string. */
    "resource_id"?: string;
    /**
     * Shape $ (Value): {@link ResourceType}. Public resource type: the resource's ID field name
     * without `_id`. Clients must accept values added in future releases. Value enum: "api_key",
     * "api_request_log", "balance", "balance_transaction", "bundle", "bundle_component",
     * "category", "checkout_session", "checkout_session_customer_verification", "credit_note",
     * "credit_note_allocation", "custom_domain", "customer", "customer_address",
     * "customer_deletion_request", "customer_email_preferences", "customer_session",
     * "customer_verification", "delivery_location_set", "delivery_method", "delivery_profile",
     * "delivery_quote", "delivery_rate", "delivery_rate_callback", "delivery_revocation",
     * "delivery_selection", "delivery_zone", "device", "discount", "dispute",
     * "email_change_request", "environment_grant", "feedback_report", "file", "flint_wallet",
     * "flint_wallet_card", "fraud_warning", "fulfillment", "fulfillment_event",
     * "fulfillment_notification", "gift_card", "gift_card_funding_disposition", "gift_card_load",
     * "gift_card_notification", "gift_card_redemption", "gift_card_transaction",
     * "inventory_adjustment", "inventory_allocation_policy",
     * "inventory_allocation_policy_revision", "inventory_count", "inventory_item",
     * "inventory_level", "inventory_movement", "inventory_receipt", "inventory_reservation",
     * "inventory_reservation_line", "inventory_transfer", "inventory_transfer_line", "invoice",
     * "invoice_delivery_attempt", "invoice_late_fee", "invoice_line_item",
     * "invoice_manual_payment", "invoice_payment_attempt", "invoice_payment_term", "location",
     * "merchant", "merchant_billing_balance", "merchant_billing_entry",
     * "merchant_billing_invoice", "modifier", "modifier_group", "modifier_set", "order",
     * "order_charge", "order_line_item", "order_line_item_modifier", "order_payment_attempt",
     * "organization", "package", "package_item", "partner_app", "partner_app_install",
     * "payment_intent", "payment_link", "payment_link_custom_field", "payment_link_line_item",
     * "payment_method", "payment_method_domain", "payment_review", "payout", "payout_destination",
     * "payout_settings", "product", "product_option", "product_option_value", "product_variant",
     * "promotion", "promotion_code", "purchase_refund_allocation", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item", "user",
     * "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type"?: ResourceType;
    /**
     * Shape $ (Value): Array of string. Transfer actions accepted in the current state. A closed
     * transfer returns an empty array. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". Shape $[] (Value): string. Value enum: "depart", "receive",
     * "return_to_origin", "report_loss", "cancel".
     */
    "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
    /**
     * Shape $ (Value): string. Stable Flint reason associated with this error. When code is
     * ACTION_NOT_ALLOWED, one of: already_applied, archived, authorization_expired,
     * bank_return_not_contestable, cancellation_scheduled, configuration_required,
     * credit_exceeds_charge, credit_note_tax_reconciliation_required,
     * customer_account_mode_conflict, delivery_hold, delivery_requirement_changes,
     * derived_from_packages, destination_not_served, dispute_payment_unavailable,
     * existing_order_checkout, external_billing_schedule, field_locked,
     * image_ingestion_restart_required, in_progress, initial_payment_pending, inventory_wait,
     * invoice_finalized, managed_by_owner, managed_externally, merchant_hosted_customer_accounts,
     * merchant_managed_receipts, method_unavailable, not_itemized, not_offered, not_paused,
     * offer_subscription, on_hold, order_owned, payment_collected, payment_disputed,
     * payment_required, payout_defaults_managed_externally, payout_delay, payout_frequency,
     * period_end_unavailable, reconciliation_required, refund_created, refund_unavailable,
     * return_checkout, return_tax_mismatch, status_not_reached, store_credit_unavailable,
     * subscription_terms_locked, terminal_status, test_event, trial_in_progress,
     * unsupported_state, verification_required. When code is ALREADY_EXISTS, one of:
     * hardware_fingerprint_already_exists. When code is CHECKOUT_SESSION_MODIFIERS_READ_ONLY, one
     * of: existing_order_checkout, invoice_finalized, subscription_terms_locked. When code is
     * CONCURRENT_MODIFICATION, one of: credit_note_creditable_value_changed,
     * credit_note_refund_retry_exhausted. When code is DELIVERY_REQUOTE_REQUIRED, one of:
     * calculation_expired, caller_rates_required, destination_changed, option_expired,
     * quote_expired, quote_revoked, quote_stale, selection_changed, selection_expired,
     * window_expired. When code is EXTERNAL_SERVICE_ERROR, one of:
     * image_ingestion_restart_required, rate_unavailable. When code is FORBIDDEN, one of:
     * checkout_launch_token_restricted, checkout_recovery_attempt_mismatch,
     * checkout_recovery_restricted, checkout_session_order_mismatch,
     * checkout_session_payment_required, demo_session_route_not_allowed, direct_owner_required,
     * environment_mismatch, expansion_not_permitted, live_mode_required, merchant_access_required,
     * merchant_credential_required, merchant_role_insufficient, not_checkout_session,
     * not_permitted, oauth_context_mismatch, organization_live_mode_required,
     * organization_membership_required, organization_role_insufficient, owner_workflow_required,
     * partner_app_management_requires_live_key, request_blocked, role_not_assignable,
     * sandbox_management_requires_live_key, sandbox_not_accessible, sandbox_selection_forbidden,
     * self_role_edit_forbidden. When code is FULFILLMENT_METHOD_UNAVAILABLE, one of: active,
     * archived, inactive, invalid_configuration, not_found, not_publishable, revision_unavailable,
     * unsupported_evaluation_schema. When code is GIFT_CARD_CHALLENGE_REQUIRED, one of:
     * page_origin_required, proof_rejected, proof_required. When code is
     * GIFT_CARD_FUNDING_LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily,
     * merchant_adjustments_daily, merchant_imports_daily. When code is IMAGE_INGESTION_EXPIRED,
     * one of: image_ingestion_restart_required. When code is IMAGE_INGESTION_IN_PROGRESS, one of:
     * image_ingestion_restart_required. When code is IMAGE_INGESTION_RESTART_REQUIRED, one of:
     * image_ingestion_restart_required. When code is IMAGE_PROCESSING_CAPACITY_EXCEEDED, one of:
     * image_ingestion_restart_required. When code is IMAGE_PROCESSING_FAILED, one of:
     * image_ingestion_restart_required. When code is IMAGE_PROCESSING_TIMEOUT, one of:
     * image_ingestion_restart_required. When code is IMAGE_SOURCE_TIMEOUT, one of:
     * image_ingestion_restart_required. When code is IMAGE_SOURCE_UNAVAILABLE, one of:
     * image_ingestion_restart_required. When code is IMAGE_STORAGE_QUOTA_EXCEEDED, one of:
     * image_ingestion_restart_required. When code is INTERNAL_ERROR, one of:
     * image_ingestion_restart_required, repair_required. When code is INVALID_CREDENTIAL, one of:
     * expired, malformed, mode_mismatch, revoked, session_ended, unknown, wrong_credential_type.
     * When code is INVALID_REQUEST, one of: image_ingestion_restart_required. When code is
     * INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is
     * LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, merchant_adjustments_daily,
     * merchant_imports_daily. When code is LIMIT_REACHED, one of: checkout_tax_calculations,
     * consecutive_skips, daily_gift_card_purchases, delivery_selection_replacements,
     * enabled_risk_rules, external_paid_orders, image_storage, monthly_tax_calculations,
     * payment_intents_per_order, payment_link_completions, payment_retries_per_period,
     * receipt_recipients, saved_card_codes, verification_attempts, verification_codes,
     * workload_identities. When code is MERCHANT_NOT_READY, one of: account_sessions_unavailable,
     * account_setup_repair_required, account_setup_unavailable, billing_suspended,
     * capability_blocked, capability_not_requested, capability_pending, capability_unavailable,
     * default_environment_required, disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled, onboarding_required,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * pricing_not_authorized, processing_not_enabled, processing_restricted,
     * processor_not_configured, requirements_due, tax_category_required, under_review. When code
     * is MONEY_MOVEMENT_OPERATION_BLOCKED, one of: capability_blocked, capability_pending,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due. When code is ORDER_DELIVERY_DESTINATION_REPRICE_REQUIRED, one of:
     * method_unavailable, shipping_changed, tax_changed. When code is ORDER_TAX_NOT_READY, one of:
     * return_tax_mismatch. When code is PAYMENT_INTENT_DISPUTED, one of: payment_disputed. When
     * code is PAYMENT_OPTION_NOT_READY, one of: amount_out_of_range,
     * bounded_inventory_guarantee_not_supported, capability_blocked, capability_pending,
     * checkout_order_ownership_required, country_not_supported, country_required,
     * currency_not_supported, disabled_by_merchant_settings, disabled_by_platform_policy,
     * limited_benefit_capacity_not_supported, manual_capture_not_supported,
     * merchant_account_action_required, merchant_payments_disabled, not_supported,
     * off_session_not_supported, payment_account_context_invalid,
     * payment_account_setup_incomplete, payment_option_access_not_provisioned,
     * payment_option_activation_pending, payment_option_not_available, payment_option_not_in_plan,
     * recurring_ach_not_supported, recurring_not_supported, redirects_required, requirements_due,
     * source_delayed_settlement_not_supported, source_not_supported, split_payment_not_supported,
     * surface_not_supported, unsupported_use. When code is PAYMENT_OPTION_UNAVAILABLE, one of:
     * action_window_too_short, amount_out_of_range, capability_blocked, capability_pending,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is
     * PAYMENT_PROCESSING_UNAVAILABLE, one of: capability_blocked, capability_pending,
     * disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due. When code is PROMOTION_DECLINED, one of: already_applied,
     * automatic_disabled, buy_item_missing, code_invalid, code_required, codes_disabled,
     * currency_mismatch, exhausted, expired, inactive, max_promotions_reached, minimum_not_met,
     * no_discountable_balance, not_combinable, not_eligible, not_yet_started, superseded,
     * superseded_by_better_offer, superseded_by_higher_priority, unknown_type. When code is
     * PROMOTION_NOT_REDEEMABLE, one of: already_applied, automatic_disabled, buy_item_missing,
     * code_invalid, code_required, codes_disabled, currency_mismatch, exhausted, expired,
     * inactive, max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable,
     * not_eligible, not_yet_started, superseded, superseded_by_better_offer,
     * superseded_by_higher_priority, unknown_type. When code is REQUEST_TIMEOUT, one of:
     * image_ingestion_restart_required. When code is RESOURCE_IN_USE, one of:
     * selected_by_active_variants. When code is RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_FLOW, one
     * of: allow, block, require_3ds, review. When code is
     * RISK_ACTION_NOT_SUPPORTED_FOR_PAYMENT_OPTION, one of: allow, block, require_3ds, review.
     * When code is SAVE_PAYMENT_METHOD_NOT_OFFERED, one of: card_unavailable,
     * customer_unavailable, ineligible_origin, merchant_hosted_customer_accounts,
     * not_checkout_session, partial_payment, return_checkout, session_not_open, setting_off,
     * subscription_checkout. When code is SERVICE_UNAVAILABLE, one of:
     * image_ingestion_restart_required, outcome_unknown, repair_required. When code is
     * SUBSCRIPTION_DELIVERY_UNAVAILABLE, one of: configuration_required, destination_not_served,
     * method_unavailable, rate_unavailable. When code is SUBSCRIPTION_OFFER_PROMOTION_UNAVAILABLE,
     * one of: already_applied, archived, automatic_disabled, buy_item_missing, code_invalid,
     * code_required, codes_disabled, currency_mismatch, exhausted, expired, inactive,
     * max_promotions_reached, minimum_not_met, no_discountable_balance, not_combinable,
     * not_eligible, not_yet_started, superseded, superseded_by_better_offer,
     * superseded_by_higher_priority, unknown_type. Additional reasons may be added. Value enum:
     * "account_sessions_unavailable", "account_setup_repair_required",
     * "account_setup_unavailable", "action_window_too_short", "active", "allow",
     * "already_applied", "amount_out_of_range", "archived", "authorization_expired",
     * "automatic_disabled", "bank_return_not_contestable", "billing_suspended", "block",
     * "bounded_inventory_guarantee_not_supported", "buy_item_missing", "buyer_daily",
     * "calculation_expired", "caller_rates_required", "cancellation_scheduled",
     * "capability_blocked", "capability_not_requested", "capability_pending",
     * "capability_unavailable", "card_balance", "card_daily", "card_unavailable",
     * "checkout_launch_token_restricted", "checkout_order_ownership_required",
     * "checkout_recovery_attempt_mismatch", "checkout_recovery_restricted",
     * "checkout_session_order_mismatch", "checkout_session_payment_required",
     * "checkout_tax_calculations", "code_invalid", "code_required", "codes_disabled",
     * "configuration_required", "consecutive_skips", "country_not_supported", "country_required",
     * "credit_exceeds_charge", "credit_note_creditable_value_changed",
     * "credit_note_refund_retry_exhausted", "credit_note_tax_reconciliation_required",
     * "currency_mismatch", "currency_not_supported", "customer_account_mode_conflict",
     * "customer_unavailable", "daily_gift_card_purchases", "default_environment_required",
     * "delivery_hold", "delivery_requirement_changes", "delivery_selection_replacements",
     * "demo_session_route_not_allowed", "derived_from_packages", "destination_changed",
     * "destination_not_served", "direct_owner_required", "disabled_by_merchant_settings",
     * "disabled_by_platform_policy", "dispute_payment_unavailable", "enabled_risk_rules",
     * "environment_mismatch", "exhausted", "existing_order_checkout", "expansion_not_permitted",
     * "expired", "external_billing_schedule", "external_paid_orders", "field_locked",
     * "hardware_fingerprint_already_exists", "image_ingestion_restart_required", "image_storage",
     * "in_progress", "inactive", "ineligible_origin", "initial_payment_pending",
     * "invalid_configuration", "inventory_wait", "invoice_finalized",
     * "limited_benefit_capacity_not_supported", "live_mode_required", "location_ineligible",
     * "location_limit", "malformed", "managed_by_owner", "managed_externally",
     * "manual_capture_not_supported", "max_promotions_reached", "merchant_access_required",
     * "merchant_account_action_required", "merchant_adjustments_daily",
     * "merchant_credential_required", "merchant_hosted_customer_accounts",
     * "merchant_imports_daily", "merchant_managed_receipts", "merchant_payments_disabled",
     * "merchant_role_insufficient", "method_unavailable", "minimum_not_met", "mode_mismatch",
     * "monthly_tax_calculations", "no_discountable_balance", "not_checkout_session",
     * "not_combinable", "not_eligible", "not_found", "not_itemized", "not_offered", "not_paused",
     * "not_permitted", "not_publishable", "not_supported", "not_yet_started",
     * "oauth_context_mismatch", "off_session_not_supported", "offer_subscription", "on_hold",
     * "onboarding_required", "option_expired", "order_owned", "organization_live_mode_required",
     * "organization_membership_required", "organization_role_insufficient", "outcome_unknown",
     * "owner_workflow_required", "page_origin_required", "partial_payment",
     * "partner_app_management_requires_live_key", "payment_account_context_invalid",
     * "payment_account_setup_incomplete", "payment_collected", "payment_disputed",
     * "payment_intents_per_order", "payment_link_completions",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_available", "payment_option_not_in_plan", "payment_required",
     * "payment_retries_per_period", "payout_defaults_managed_externally", "payout_delay",
     * "payout_frequency", "period_end_unavailable", "platform_funding_unavailable",
     * "pricing_not_authorized", "processing_not_enabled", "processing_restricted",
     * "processor_not_configured", "proof_rejected", "proof_required", "quote_expired",
     * "quote_revoked", "quote_stale", "rate_unavailable", "receipt_recipients",
     * "reconciliation_required", "recurring_ach_not_supported", "recurring_not_supported",
     * "redirects_required", "refund_created", "refund_unavailable", "repair_required",
     * "request_blocked", "require_3ds", "requirements_due", "return_checkout",
     * "return_tax_mismatch", "review", "revision_unavailable", "revoked",
     * "risk_action_unsupported", "role_not_assignable", "sandbox_management_requires_live_key",
     * "sandbox_not_accessible", "sandbox_selection_forbidden", "saved_card_codes",
     * "selected_by_active_variants", "selection_changed", "selection_expired",
     * "self_role_edit_forbidden", "session_ended", "session_not_open", "setting_off",
     * "shipping_changed", "source_delayed_settlement_not_supported", "source_not_supported",
     * "split_payment_not_supported", "status_not_reached", "store_credit_unavailable",
     * "subscription_checkout", "subscription_terms_locked", "superseded",
     * "superseded_by_better_offer", "superseded_by_higher_priority", "surface_not_supported",
     * "tax_category_required", "tax_changed", "terminal_status", "test_event",
     * "transaction_purpose_unresolved", "trial_in_progress", "under_review", "unknown",
     * "unknown_type", "unsupported_evaluation_schema", "unsupported_state", "unsupported_use",
     * "verification_attempts", "verification_codes", "verification_required", "window_expired",
     * "workload_identities", "wrong_credential_type".
     */
    "reason": "account_sessions_unavailable"
        | "account_setup_repair_required"
        | "account_setup_unavailable"
        | "action_window_too_short"
        | "active"
        | "allow"
        | "already_applied"
        | "amount_out_of_range"
        | "archived"
        | "authorization_expired"
        | "automatic_disabled"
        | "bank_return_not_contestable"
        | "billing_suspended"
        | "block"
        | "bounded_inventory_guarantee_not_supported"
        | "buy_item_missing"
        | "buyer_daily"
        | "calculation_expired"
        | "caller_rates_required"
        | "cancellation_scheduled"
        | "capability_blocked"
        | "capability_not_requested"
        | "capability_pending"
        | "capability_unavailable"
        | "card_balance"
        | "card_daily"
        | "card_unavailable"
        | "checkout_launch_token_restricted"
        | "checkout_order_ownership_required"
        | "checkout_recovery_attempt_mismatch"
        | "checkout_recovery_restricted"
        | "checkout_session_order_mismatch"
        | "checkout_session_payment_required"
        | "checkout_tax_calculations"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "configuration_required"
        | "consecutive_skips"
        | "country_not_supported"
        | "country_required"
        | "credit_exceeds_charge"
        | "credit_note_creditable_value_changed"
        | "credit_note_refund_retry_exhausted"
        | "credit_note_tax_reconciliation_required"
        | "currency_mismatch"
        | "currency_not_supported"
        | "customer_account_mode_conflict"
        | "customer_unavailable"
        | "daily_gift_card_purchases"
        | "default_environment_required"
        | "delivery_hold"
        | "delivery_requirement_changes"
        | "delivery_selection_replacements"
        | "demo_session_route_not_allowed"
        | "derived_from_packages"
        | "destination_changed"
        | "destination_not_served"
        | "direct_owner_required"
        | "disabled_by_merchant_settings"
        | "disabled_by_platform_policy"
        | "dispute_payment_unavailable"
        | "enabled_risk_rules"
        | "environment_mismatch"
        | "exhausted"
        | "existing_order_checkout"
        | "expansion_not_permitted"
        | "expired"
        | "external_billing_schedule"
        | "external_paid_orders"
        | "field_locked"
        | "hardware_fingerprint_already_exists"
        | "image_ingestion_restart_required"
        | "image_storage"
        | "in_progress"
        | "inactive"
        | "ineligible_origin"
        | "initial_payment_pending"
        | "invalid_configuration"
        | "inventory_wait"
        | "invoice_finalized"
        | "limited_benefit_capacity_not_supported"
        | "live_mode_required"
        | "location_ineligible"
        | "location_limit"
        | "malformed"
        | "managed_by_owner"
        | "managed_externally"
        | "manual_capture_not_supported"
        | "max_promotions_reached"
        | "merchant_access_required"
        | "merchant_account_action_required"
        | "merchant_adjustments_daily"
        | "merchant_credential_required"
        | "merchant_hosted_customer_accounts"
        | "merchant_imports_daily"
        | "merchant_managed_receipts"
        | "merchant_payments_disabled"
        | "merchant_role_insufficient"
        | "method_unavailable"
        | "minimum_not_met"
        | "mode_mismatch"
        | "monthly_tax_calculations"
        | "no_discountable_balance"
        | "not_checkout_session"
        | "not_combinable"
        | "not_eligible"
        | "not_found"
        | "not_itemized"
        | "not_offered"
        | "not_paused"
        | "not_permitted"
        | "not_publishable"
        | "not_supported"
        | "not_yet_started"
        | "oauth_context_mismatch"
        | "off_session_not_supported"
        | "offer_subscription"
        | "on_hold"
        | "onboarding_required"
        | "option_expired"
        | "order_owned"
        | "organization_live_mode_required"
        | "organization_membership_required"
        | "organization_role_insufficient"
        | "outcome_unknown"
        | "owner_workflow_required"
        | "page_origin_required"
        | "partial_payment"
        | "partner_app_management_requires_live_key"
        | "payment_account_context_invalid"
        | "payment_account_setup_incomplete"
        | "payment_collected"
        | "payment_disputed"
        | "payment_intents_per_order"
        | "payment_link_completions"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_available"
        | "payment_option_not_in_plan"
        | "payment_required"
        | "payment_retries_per_period"
        | "payout_defaults_managed_externally"
        | "payout_delay"
        | "payout_frequency"
        | "period_end_unavailable"
        | "platform_funding_unavailable"
        | "pricing_not_authorized"
        | "processing_not_enabled"
        | "processing_restricted"
        | "processor_not_configured"
        | "proof_rejected"
        | "proof_required"
        | "quote_expired"
        | "quote_revoked"
        | "quote_stale"
        | "rate_unavailable"
        | "receipt_recipients"
        | "reconciliation_required"
        | "recurring_ach_not_supported"
        | "recurring_not_supported"
        | "redirects_required"
        | "refund_created"
        | "refund_unavailable"
        | "repair_required"
        | "request_blocked"
        | "require_3ds"
        | "requirements_due"
        | "return_checkout"
        | "return_tax_mismatch"
        | "review"
        | "revision_unavailable"
        | "revoked"
        | "risk_action_unsupported"
        | "role_not_assignable"
        | "sandbox_management_requires_live_key"
        | "sandbox_not_accessible"
        | "sandbox_selection_forbidden"
        | "saved_card_codes"
        | "selected_by_active_variants"
        | "selection_changed"
        | "selection_expired"
        | "self_role_edit_forbidden"
        | "session_ended"
        | "session_not_open"
        | "setting_off"
        | "shipping_changed"
        | "source_delayed_settlement_not_supported"
        | "source_not_supported"
        | "split_payment_not_supported"
        | "status_not_reached"
        | "store_credit_unavailable"
        | "subscription_checkout"
        | "subscription_terms_locked"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "surface_not_supported"
        | "tax_category_required"
        | "tax_changed"
        | "terminal_status"
        | "test_event"
        | "transaction_purpose_unresolved"
        | "trial_in_progress"
        | "under_review"
        | "unknown"
        | "unknown_type"
        | "unsupported_evaluation_schema"
        | "unsupported_state"
        | "unsupported_use"
        | "verification_attempts"
        | "verification_codes"
        | "verification_required"
        | "window_expired"
        | "workload_identities"
        | "wrong_credential_type"
        | (string & {});
});

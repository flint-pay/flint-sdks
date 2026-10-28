import type { DeliveryFulfillmentDetails } from './types-13.js';
import type { DigitalFulfillmentDetails } from './types-17.js';
import type { ExpandedOrderSummary, ExpandedPackageSummary, ExpandedShipmentSummary } from './types-18.js';
import type { MetadataMap, MetadataRequestInput } from './types-32.js';
import type { PickupFulfillmentDetails } from './types-39.js';
import type {
    ServiceFulfillmentDetails,
    ShipmentFulfillmentDetails,
    SinglePackageCreateRequest,
    SinglePackageCreateRequestInput
} from './types-47.js';
import type { ResponseMeta } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CreatePackageItemRequest, CreatePackageItemRequestInput } from './types-8.js';
import type { PackageCreateRequest, PackageCreateRequestInput, PackageTransitionRequestMarkPacked } from './types-36.js';
import type { OrderLineItemModifier } from './types-34.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { CreateFulfillmentEventRequestInput } from './types-6.js';
import type { CreateShipmentRequestInput } from './types-10.js';
/** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
export type Fulfillment = {
    /**
     * Shape $ (Value): {@link FulfillmentHold}. Current hold details. Present exactly when status
     * is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became
     * active.
     */
    "active_hold"?: FulfillmentHold;
    /**
     * Shape $ (Value): Array of {@link FulfillmentChargeLink}. Order charges associated with this
     * fulfillment. Shape $[] (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an
     * order charge by `order_charge_id`.
     */
    "charges"?: Array<FulfillmentChargeLink>;
    /** Shape $ (Value): string. Completion evidence timestamp. Format: date-time. */
    "completed_at"?: string;
    /**
     * Shape $ (Value): string. When the fulfillment was created, in RFC3339 format. Format:
     * date-time.
     */
    "created_at"?: string;
    /** Shape $ (Value): string. Customer receiving this fulfillment, when one is set. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string or null. Delivery choice group that created this fulfillment. Null
     * for fulfillments created by the merchant or through checkout without a delivery quote.
     */
    "delivery_choice_group_id": string | null;
    /**
     * Shape $ (Value): string or null. Execution leg of the selected delivery option that created
     * this fulfillment. Null for fulfillments created by the merchant or through checkout without
     * a delivery quote.
     */
    "delivery_execution_leg_id": string | null;
    /**
     * Shape $ (Value): string or null. Delivery method chosen for this fulfillment. Null for
     * fulfillments created by the merchant or through checkout without a delivery quote. Also null
     * for fulfillments created before this field was added.
     */
    "delivery_method_id": string | null;
    /**
     * Shape $ (Value): string or null. Delivery selection that created this fulfillment. Null for
     * fulfillments created by the merchant or through checkout without a delivery quote.
     */
    "delivery_selection_id": string | null;
    /** Shape $ (Value): string. Device associated with the fulfillment, when one is recorded. */
    "device_id"?: string;
    /**
     * Shape $ (Value): {@link DigitalFulfillmentDetails}. Delivery URL and completion time for a
     * digital fulfillment. Details of a digital fulfillment: when it was delivered
     * (`delivered_at`) and its `delivery_url`.
     */
    "digital_details"?: DigitalFulfillmentDetails;
    /**
     * Shape $ (Value): string. First time this fulfillment reached dispatched. Format: date-time.
     */
    "dispatched_at"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. Stable identifier of the fulfillment. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated
     * to this fulfillment. Shape $[] (Value): {@link FulfillmentLineItem}. An order line item and
     * quantity included in a fulfillment, with the modifiers applied to it.
     */
    "line_items": Array<FulfillmentLineItem>;
    /**
     * Shape $ (Value): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
     * details for a local delivery fulfillment. Details of a local delivery fulfillment: courier,
     * timing window, instructions, and tracking. Some fields are omitted for credentials that
     * don't act for the verified customer.
     */
    "local_delivery_details"?: DeliveryFulfillmentDetails;
    /** Shape $ (Value): string. Merchant location responsible for this fulfillment. */
    "location_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value metadata associated with the
     * fulfillment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Order summary returned when the order
     * relationship is expanded. Shape $.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. Order whose items this fulfillment delivers. */
    "order_id": string;
    /**
     * Shape $ (Value): string. Human-readable number of the order this fulfillment belongs to.
     * Omitted when the order has no number.
     */
    "order_number"?: string;
    /**
     * Shape $ (Value): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
     * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with
     * its reason, notes, and when it occurred.
     */
    "outcome"?: FulfillmentOutcome;
    /**
     * Shape $ (Value): Array of {@link ExpandedPackageSummary}. Packages associated with this
     * fulfillment. Shape $[] (Value): {@link ExpandedPackageSummary}. A package's summary fields,
     * including carrier, tracking, status, and supported actions, returned when the package is
     * expanded.
     */
    "packages"?: Array<ExpandedPackageSummary>;
    /** Shape $ (Value): string. First time this fulfillment reached packed. Format: date-time. */
    "packed_at"?: string;
    /** Shape $ (Value): string. First time this fulfillment reached picked. Format: date-time. */
    "picked_at"?: string;
    /**
     * Shape $ (Value): {@link PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff
     * times for a pickup fulfillment. Pickup details. For a pickup that checkout creates,
     * location_name, address, and instructions name the store the buyer chose and the delivery
     * method's pickup instructions. The note the buyer left for the store is in
     * recipient.instructions.
     */
    "pickup_details"?: PickupFulfillmentDetails;
    /**
     * Shape $ (Value): {@link FulfillmentRecipient}. Omitted for a checkout session credential
     * that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with
     * name, email, phone, address, and handling instructions.
     */
    "recipient"?: FulfillmentRecipient;
    /**
     * Shape $ (Value): string or null. Derived start of the service schedule or pickup, local
     * delivery, or shipment window. Null when no schedule is booked, including digital
     * fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending
     * and last descending, then by fulfillment_id in the same direction. Format: date-time.
     */
    "scheduled_start_at": string | null;
    /**
     * Shape $ (Value): {@link ServiceFulfillmentDetails}. Schedule and completion details for a
     * service fulfillment. Details of a service fulfillment: the scheduled start and end,
     * timezone, completion time, and notes.
     */
    "service_details"?: ServiceFulfillmentDetails;
    /**
     * Shape $ (Value): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier.
     */
    "shipment_details"?: ShipmentFulfillmentDetails;
    /**
     * Shape $ (Value): Array of {@link ExpandedShipmentSummary}. Shipments associated with this
     * fulfillment. Shape $[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary
     * fields, including direction, status, and package count, returned when the shipment is
     * expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /**
     * Shape $ (Value): string. Current fulfillment lifecycle status. Read supported_actions for
     * available transitions. - `pending`: Work has not started and has not been accepted. Approval
     * may be required before work can begin. - `accepted`: The provider accepted the fulfillment;
     * work has not started. - `on_hold`: Work is paused. Release the hold to restore
     * active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has
     * started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup,
     * handoff, or completion. - `completed`: All fulfillment work completed successfully. -
     * `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`:
     * The fulfillment could not be completed. Resolve the recorded reason before creating
     * replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service
     * window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The
     * assigned items have been picked. - `packed`: The assigned items have been packed. -
     * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: The
     * pickup or appointment was missed. Read outcome for the recorded reason. Value enum:
     * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     */
    "status": "pending"
        | "accepted"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | (string & {});
    /**
     * Shape $ (Value): Array of string. Read-only actions currently supported for this
     * fulfillment. [] enum: "complete", "cancel", "hold", "start", "mark_ready", "fail",
     * "schedule", "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch",
     * "mark_no_show", "release_hold". Shape $[] (Value): string. Value enum: "complete", "cancel",
     * "hold", "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing",
     * "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold".
     */
    "supported_actions": Array<"complete"
        | "cancel"
        | "hold"
        | "start"
        | "mark_ready"
        | "fail"
        | "schedule"
        | "accept"
        | "mark_preparing"
        | "mark_picked"
        | "mark_packed"
        | "dispatch"
        | "mark_no_show"
        | "release_hold"
        | (string & {})>;
    /**
     * Shape $ (Value): string. When the fulfillment entered a terminal state: completed, canceled,
     * failed, or no_show. This records the state transition; completed_at records completion
     * evidence supplied for the fulfillment. Format: date-time.
     */
    "terminal_at"?: string;
    /**
     * Shape $ (Value): string. How the items are delivered: shipment, pickup, local delivery,
     * digital delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
    /**
     * Shape $ (Value): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Monotonic fulfillment version for expected_version checks.
     * Use an integer string (decimal digits), not a floating-point number. Format: uint64.
     * minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
 * `order_charge_id`.
 */
export type FulfillmentChargeLink = {
    /** Shape $ (Value): string. Order charge associated with this fulfillment. */
    "order_charge_id": string;
};
/** Shape $ (Value): {@link FulfillmentEvent}. An action recorded during an order's fulfillment. */
export type FulfillmentEvent = {
    /**
     * Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when
     * recipient, template, and deduplication rules allow it. Use suppress when another system owns
     * buyer messaging. Value enum: "send", "suppress".
     */
    "buyer_notification_behavior": "send" | "suppress" | (string & {});
    /** Shape $ (Value): string. Timeline entry creation timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "pending", "on_hold", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "current_status"?: "pending"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | "created"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "custom_details"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Value enum: "carrier_scan", "status_changed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated",
     * "exception", "returned", "custom", "accepted", "preparing", "picked", "packed", "ready",
     * "dispatched", "completed", "canceled", "failed", "no_show".
     */
    "event_type": "carrier_scan"
        | "status_changed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "tracking_updated"
        | "exception"
        | "returned"
        | "custom"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "ready"
        | "dispatched"
        | "completed"
        | "canceled"
        | "failed"
        | "no_show"
        | (string & {});
    /** Shape $ (Value): string. */
    "external_event_id"?: string;
    /** Shape $ (Value): string. */
    "external_status"?: string;
    /** Shape $ (Value): string. */
    "external_system"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_event_id": string;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /** Shape $ (Value): string. */
    "location_description"?: string;
    /** Shape $ (Value): string. */
    "message"?: string;
    /** Shape $ (Value): string. Provider event timestamp. Format: date-time. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): string. */
    "package_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "pending", "on_hold", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided".
     */
    "previous_status"?: "pending"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | "created"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "exception"
        | "returned"
        | "voided"
        | (string & {});
    /** Shape $ (Value): string.  Value enum: "preserve", "fulfill", "release". */
    "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "address_issue", "customer_no_show",
     * "customer_request", "fraud_review", "inventory_issue", "location_unavailable", "other",
     * "payment_review", "provider_issue", "provider_no_show", "scheduling_error",
     * "scheduling_issue".
     */
    "reason"?: "address_issue"
        | "customer_no_show"
        | "customer_request"
        | "fraud_review"
        | "inventory_issue"
        | "location_unavailable"
        | "other"
        | "payment_review"
        | "provider_issue"
        | "provider_no_show"
        | "scheduling_error"
        | "scheduling_issue"
        | (string & {});
    /** Shape $ (Value): string. The note supplied when this action was requested. */
    "reason_message"?: string;
    /** Shape $ (Value): string. Flint receive timestamp. Format: date-time. */
    "received_at"?: string;
    /** Shape $ (Value): string. */
    "shipment_id"?: string;
    /** Shape $ (Value): string.  Value enum: "fulfillment", "shipment", "package". */
    "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
};
/** Shape $ (Value): {@link FulfillmentEventListResponse}. A page of `FulfillmentEvent` objects. */
export type FulfillmentEventListResponse = {
    /**
     * Shape $ (Value): Array of {@link FulfillmentEvent}. Shape $[] (Value): {@link
     * FulfillmentEvent}. An action recorded during an order's fulfillment.
     */
    "data": Array<FulfillmentEvent>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link FulfillmentEventResourceResponse}. A response containing
 * `FulfillmentEvent` data.
 */
export type FulfillmentEventResourceResponse = {
    /**
     * Shape $ (Value): {@link FulfillmentEvent}. An action recorded during an order's fulfillment.
     */
    "data": FulfillmentEvent;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type FulfillmentEventsGetInput = {
    /** Shape $ (Value): string. */
    "fulfillment_event_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
};
export type FulfillmentEventsListInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "shipment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "package_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "carrier_scan", "status_changed",
     * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
     * "tracking_updated", "exception", "returned", "custom". Shape $[] (Value): string. Value
     * enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
     */
    "event_type"?: InputValue<Array<"carrier_scan"
        | "status_changed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "tracking_updated"
        | "exception"
        | "returned"
        | "custom">>;
    /** Shape $ (Value): string. */
    "external_system"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "external_event_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): string. Default: "received_at". Value enum: "received_at", "occurred_at".
     */
    "sort_by"?: InputValue<"received_at" | "occurred_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
};
/**
 * Shape $ (Value): {@link FulfillmentHold}. A hold on a fulfillment, with its reason, who placed
 * it, and when it became active.
 */
export type FulfillmentHold = {
    /** Shape $ (Value): string. Time the hold became active. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. Explanation of the hold suitable for display to the merchant. */
    "display_reason"?: string;
    /** Shape $ (Value): string. Actor that placed the fulfillment on hold. */
    "held_by"?: string;
    /**
     * Shape $ (Value): string. Status before this hold. Never on_hold or terminal. The
     * release_hold action restores this status. Value enum: "pending", "accepted", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing",
     * "picked", "packed", "dispatched", "no_show".
     */
    "previous_status": "pending"
        | "accepted"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show"
        | (string & {});
    /**
     * Shape $ (Value): string. Machine-readable reason fulfillment work is paused. Value enum:
     * "payment_review", "inventory_issue", "address_issue", "customer_request", "provider_issue",
     * "scheduling_issue", "fraud_review", "other".
     */
    "reason": "payment_review"
        | "inventory_issue"
        | "address_issue"
        | "customer_request"
        | "provider_issue"
        | "scheduling_issue"
        | "fraud_review"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. Additional notes explaining the hold. */
    "reason_notes"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentItemizedPackagesRequest}. The `itemized` variant of
 * `FulfillmentPackagingInput`.
 */
export type FulfillmentItemizedPackagesRequest = ({
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data for a new or replaced map.
     * Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link SinglePackageCreateRequest}. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequest;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequest}. minItems: 1. maxItems: 20. Shape $[]
     * (Value): {@link PackageCreateRequest}. The request body for: Create package. Shape
     * $[].buyer_notification_behavior (Optional): string. Controls buyer email handling. Omit or
     * use send to send when recipient, template, and deduplication rules allow it. Use suppress
     * when another system owns buyer messaging. Value enum: "send", "suppress". Shape $[].carrier
     * (Optional): string. minLength: 1. Shape $[].dimensions (Optional): {@link Dimensions}.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`. Shape
     * $[].expected_delivery_at (Optional): string or null. When the carrier or merchant expects
     * this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it
     * unchanged on updates and transitions. Format: date-time. minLength: 1. Shape
     * $[].external_reference_id (Optional): string. Caller-owned identifier for this resource in
     * an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Shape $[].external_system
     * (Optional): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1. Shape
     * $[].items (Required): Array of {@link CreatePackageItemRequest}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. Shape $[].items[] (Value): {@link CreatePackageItemRequest}. The request
     * body for: Create package item. Shape $[].label_url (Optional): string. Merchant or
     * integration supplied HTTPS shipping-label URL for authenticated merchant workflows.
     * Non-Flint URLs must include external_system for provenance. Flint does not currently manage
     * label file hosting or buyer-facing label downloads. minLength: 1. Shape $[].metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * Shape $[].return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. Shape
     * $[].return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}. A return line and
     * the quantity placed in a return shipment or package. Shape $[].service_code (Optional):
     * string. minLength: 1. Shape $[].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * Shape $[].status (Required): string. Value enum: "created", "shipped". Shape
     * $[].status_reason (Optional): string. minLength: 1. Shape $[].tracking_number (Optional):
     * string. minLength: 1. Shape $[].tracking_url (Optional): string. Absolute HTTPS carrier
     * tracking URL. Embedded URL credentials are rejected. minLength: 1. Shape $[].weight
     * (Optional): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration. Shape $[].oneOf[1] (Value): {@link
     * PackageCreateInputCreated}. The `created` variant of `PackageCreateInput`. Shape
     * $[].oneOf[2] (Value): {@link PackageCreateInputShipped}. The `shipped` variant of
     * `PackageCreateInput`.
     */
    "packages": Array<({
        /**
         * Shape $ (Value): Array of {@link CreatePackageItemRequest}. Independent package-item
         * collection. Inline creation uses the child-create shape and commits atomically; edit
         * items through the package item routes after creation. Each order line may appear once.
         * minItems: 1. maxItems: 100. Shape $[] (Value): {@link CreatePackageItemRequest}. The
         * request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequest>;
    })
        & (Exclude<PackageCreateRequest & object, readonly unknown[]>)>;
    /** Shape $ (Value): string.  Value enum: "itemized". */
    "packaging": "itemized" | (string & {});
});
/**
 * Shape $ (Value): {@link FulfillmentItemizedPackagesRequestInput}. The `itemized` variant of
 * `FulfillmentPackagingInput`.
 */
export type FulfillmentItemizedPackagesRequestInput = ({
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): {@link SinglePackageCreateRequestInput}. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequestInput;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequestInput}. minItems: 1. maxItems: 20.
     * Shape $[] (Value): {@link PackageCreateRequestInput}. The request body for: Create package.
     * Shape $[].buyer_notification_behavior (Optional): string. Controls buyer email handling.
     * Omit or use send to send when recipient, template, and deduplication rules allow it. Use
     * suppress when another system owns buyer messaging. Value enum: "send", "suppress". Shape
     * $[].carrier (Optional): string. minLength: 1. Shape $[].dimensions (Optional): {@link
     * DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given
     * `unit`. Shape $[].expected_delivery_at (Optional): string or null. When the carrier or
     * merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit
     * to leave it unchanged on updates and transitions. Format: date-time. minLength: 1. Shape
     * $[].external_reference_id (Optional): string. Caller-owned identifier for this resource in
     * an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Shape $[].external_system
     * (Optional): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1. Shape
     * $[].items (Required): Array of {@link CreatePackageItemRequestInput}. Independent
     * package-item collection. Inline creation uses the child-create shape and commits atomically;
     * edit items through the package item routes after creation. Each order line may appear once.
     * minItems: 1. maxItems: 100. Shape $[].items[] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item. Shape
     * $[].label_url (Optional): string. Merchant or integration supplied HTTPS shipping-label URL
     * for authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1. Shape $[].metadata (Optional): {@link MetadataRequestInput}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. Shape $[].return_line_items
     * (Optional): Array of {@link ReturnShipmentLineItemAllocationRequestRequestInput}. Required
     * for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. Shape
     * $[].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestRequestInput}. A return line and the quantity placed
     * in a return shipment or package. Shape $[].service_code (Optional): string. minLength: 1.
     * Shape $[].shipped_at (Optional): string. Package handoff time. Defaults to request time.
     * Only allowed with status shipped. Format: date-time. minLength: 1. Shape $[].status
     * (Required): string. Value enum: "created", "shipped". Shape $[].status_reason (Optional):
     * string. minLength: 1. Shape $[].tracking_number (Optional): string. minLength: 1. Shape
     * $[].tracking_url (Optional): string. Absolute HTTPS carrier tracking URL. Embedded URL
     * credentials are rejected. minLength: 1. Shape $[].weight (Optional): {@link WeightInput}. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * Shape $[].oneOf[1] (Value): {@link PackageCreateInputCreatedInput}. The `created` variant of
     * `PackageCreateInput`. Shape $[].oneOf[2] (Value): {@link PackageCreateInputShippedInput}.
     * The `shipped` variant of `PackageCreateInput`.
     */
    "packages": Array<({
        /**
         * Shape $ (Value): Array of {@link CreatePackageItemRequestInput}. Independent
         * package-item collection. Inline creation uses the child-create shape and commits
         * atomically; edit items through the package item routes after creation. Each order line
         * may appear once. minItems: 1. maxItems: 100. Shape $[] (Value): {@link
         * CreatePackageItemRequestInput}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequestInput>;
    })
        & (Exclude<PackageCreateRequestInput & object, readonly unknown[]>)>;
    /** Shape $ (Value): string.  Value enum: "itemized". */
    "packaging": "itemized";
})
    & (({
    "package"?: never;
}));
/**
 * Shape $ (Value): {@link FulfillmentLineItem}. An order line item and quantity included in a
 * fulfillment, with the modifiers applied to it.
 */
export type FulfillmentLineItem = {
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. Modifier selections snapshotted
     * from the order line for fulfillment. Shape $[] (Value): {@link OrderLineItemModifier}. A
     * modifier selected on an order line item, with its quantity, price change, total, and display
     * flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. Order line whose quantity is allocated to the fulfillment. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link FulfillmentLineItemRequest}. An order line item and quantity to include
 * when creating a fulfillment.
 */
export type FulfillmentLineItemRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link FulfillmentLineItemRequestInput}. An order line item and quantity to
 * include when creating a fulfillment.
 */
export type FulfillmentLineItemRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
};
/** Shape $ (Value): {@link FulfillmentListResponse}. A page of `Fulfillment` objects. */
export type FulfillmentListResponse = {
    /**
     * Shape $ (Value): Array of {@link Fulfillment}. Shape $[] (Value): {@link Fulfillment}. Work
     * required to deliver an order's items.
     */
    "data": Array<Fulfillment>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link FulfillmentNotification}. A message sent about an order's fulfillment.
 */
export type FulfillmentNotification = {
    /** Shape $ (Value): string.  Value enum: "email". */
    "channel": "email" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "failed_at"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_event_id"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /** Shape $ (Value): string. */
    "fulfillment_notification_id": string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. Value enum: "fulfillment_ready", "fulfillment_dispatched",
     * "fulfillment_completed", "fulfillment_canceled", "fulfillment_failed",
     * "fulfillment_no_show", "fulfillment_shipped", "fulfillment_delivered", "shipment_shipped",
     * "shipment_out_for_delivery", "shipment_delivered", "shipment_delivery_attempted",
     * "shipment_exception", "shipment_returned".
     */
    "notification_type": "fulfillment_ready"
        | "fulfillment_dispatched"
        | "fulfillment_completed"
        | "fulfillment_canceled"
        | "fulfillment_failed"
        | "fulfillment_no_show"
        | "fulfillment_shipped"
        | "fulfillment_delivered"
        | "shipment_shipped"
        | "shipment_out_for_delivery"
        | "shipment_delivered"
        | "shipment_delivery_attempted"
        | "shipment_exception"
        | "shipment_returned"
        | (string & {});
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id": string;
    /** Shape $ (Value): string. */
    "package_id"?: string;
    /** Shape $ (Value): string. */
    "recipient_customer_id"?: string;
    /** Shape $ (Value): string. */
    "recipient_email"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "sent_at"?: string;
    /** Shape $ (Value): string. */
    "shipment_id"?: string;
    /** Shape $ (Value): string.  Value enum: "pending", "sent", "failed", "suppressed". */
    "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "source_suppressed", "default_suppressed",
     * "recipient_missing", "template_not_configured", "merchant_managed_email",
     * "recipient_unsubscribed".
     */
    "suppression_reason"?: "source_suppressed"
        | "default_suppressed"
        | "recipient_missing"
        | "template_not_configured"
        | "merchant_managed_email"
        | "recipient_unsubscribed"
        | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "fulfillment_status_updated",
     * "fulfillment_event_created".
     */
    "trigger_type": "fulfillment_status_updated" | "fulfillment_event_created" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentNotificationListResponse}. A page of
 * `FulfillmentNotification` objects.
 */
export type FulfillmentNotificationListResponse = {
    /**
     * Shape $ (Value): Array of {@link FulfillmentNotification}. Shape $[] (Value): {@link
     * FulfillmentNotification}. A message sent about an order's fulfillment.
     */
    "data": Array<FulfillmentNotification>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link FulfillmentNotificationResponse}. A response containing
 * `FulfillmentNotification` data.
 */
export type FulfillmentNotificationResponse = {
    /**
     * Shape $ (Value): {@link FulfillmentNotification}. A message sent about an order's
     * fulfillment.
     */
    "data": FulfillmentNotification;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type FulfillmentNotificationsGetInput = {
    /** Shape $ (Value): string. */
    "fulfillment_notification_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
};
export type FulfillmentNotificationsListInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "fulfillment_event_id"?: InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "email". Shape $[] (Value): string.
     * Value enum: "email".
     */
    "channel"?: InputValue<Array<"email">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "sent", "failed",
     * "suppressed". Shape $[] (Value): string. Value enum: "pending", "sent", "failed",
     * "suppressed".
     */
    "status"?: InputValue<Array<"pending" | "sent" | "failed" | "suppressed">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "fulfillment_canceled",
     * "fulfillment_completed", "fulfillment_delivered", "fulfillment_dispatched",
     * "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped",
     * "shipment_delivered", "shipment_delivery_attempted", "shipment_exception",
     * "shipment_out_for_delivery", "shipment_returned", "shipment_shipped". Shape $[] (Value):
     * string. Value enum: "fulfillment_canceled", "fulfillment_completed",
     * "fulfillment_delivered", "fulfillment_dispatched", "fulfillment_failed",
     * "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped", "shipment_delivered",
     * "shipment_delivery_attempted", "shipment_exception", "shipment_out_for_delivery",
     * "shipment_returned", "shipment_shipped".
     */
    "notification_type"?: InputValue<Array<"fulfillment_canceled"
        | "fulfillment_completed"
        | "fulfillment_delivered"
        | "fulfillment_dispatched"
        | "fulfillment_failed"
        | "fulfillment_no_show"
        | "fulfillment_ready"
        | "fulfillment_shipped"
        | "shipment_delivered"
        | "shipment_delivery_attempted"
        | "shipment_exception"
        | "shipment_out_for_delivery"
        | "shipment_returned"
        | "shipment_shipped">>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
};
/**
 * Shape $ (Value): {@link FulfillmentOutcome}. The terminal outcome recorded for a fulfillment,
 * such as a no-show, with its reason, notes, and when it occurred.
 */
export type FulfillmentOutcome = {
    /** Shape $ (Value): string. Additional notes about the fulfillment outcome. */
    "notes"?: string;
    /** Shape $ (Value): string. Time the terminal outcome occurred. Format: date-time. */
    "occurred_at": string;
    /**
     * Shape $ (Value): string. Recorded fulfillment outcome, such as a missed service appointment.
     * Value enum: "no_show".
     */
    "outcome_type": "no_show" | (string & {});
    /**
     * Shape $ (Value): string. Machine-readable reason for the recorded outcome. Value enum:
     * "customer_no_show", "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
};
/**
 * Shape $ (Value): {@link FulfillmentPackagingRequest}. Creates an outbound shipment with one
 * package using `packaging: single_package`, or 1 to 20 packages with explicit items using
 * `packaging: itemized`. External reference and metadata are optional.
 */
export type FulfillmentPackagingRequest = ({
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data for a new or replaced map.
     * Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link SinglePackageCreateRequest}. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequest;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequest}. minItems: 1. maxItems: 20. Shape $[]
     * (Value): {@link PackageCreateRequest}. The request body for: Create package. Shape
     * $[].buyer_notification_behavior (Optional): string. Controls buyer email handling. Omit or
     * use send to send when recipient, template, and deduplication rules allow it. Use suppress
     * when another system owns buyer messaging. Value enum: "send", "suppress". Shape $[].carrier
     * (Optional): string. minLength: 1. Shape $[].dimensions (Optional): {@link Dimensions}.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`. Shape
     * $[].expected_delivery_at (Optional): string or null. When the carrier or merchant expects
     * this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it
     * unchanged on updates and transitions. Format: date-time. minLength: 1. Shape
     * $[].external_reference_id (Optional): string. Caller-owned identifier for this resource in
     * an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Shape $[].external_system
     * (Optional): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1. Shape
     * $[].items (Required): Array of {@link CreatePackageItemRequest}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. Shape $[].items[] (Value): {@link CreatePackageItemRequest}. The request
     * body for: Create package item. Shape $[].label_url (Optional): string. Merchant or
     * integration supplied HTTPS shipping-label URL for authenticated merchant workflows.
     * Non-Flint URLs must include external_system for provenance. Flint does not currently manage
     * label file hosting or buyer-facing label downloads. minLength: 1. Shape $[].metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * Shape $[].return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. Shape
     * $[].return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}. A return line and
     * the quantity placed in a return shipment or package. Shape $[].service_code (Optional):
     * string. minLength: 1. Shape $[].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * Shape $[].status (Required): string. Value enum: "created", "shipped". Shape
     * $[].status_reason (Optional): string. minLength: 1. Shape $[].tracking_number (Optional):
     * string. minLength: 1. Shape $[].tracking_url (Optional): string. Absolute HTTPS carrier
     * tracking URL. Embedded URL credentials are rejected. minLength: 1. Shape $[].weight
     * (Optional): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration. Shape $[].oneOf[1] (Value): {@link
     * PackageCreateInputCreated}. The `created` variant of `PackageCreateInput`. Shape
     * $[].oneOf[2] (Value): {@link PackageCreateInputShipped}. The `shipped` variant of
     * `PackageCreateInput`.
     */
    "packages"?: Array<({
        /**
         * Shape $ (Value): Array of {@link CreatePackageItemRequest}. Independent package-item
         * collection. Inline creation uses the child-create shape and commits atomically; edit
         * items through the package item routes after creation. Each order line may appear once.
         * minItems: 1. maxItems: 100. Shape $[] (Value): {@link CreatePackageItemRequest}. The
         * request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequest>;
    })
        & (Exclude<PackageCreateRequest & object, readonly unknown[]>)>;
    /** Shape $ (Value): string.  Value enum: "single_package", "itemized". */
    "packaging": "single_package" | "itemized" | (string & {});
})
    & ((Exclude<FulfillmentSinglePackageRequest & object, readonly unknown[]>)
    | (Exclude<FulfillmentItemizedPackagesRequest & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link FulfillmentPackagingRequestInput}. Creates an outbound shipment with one
 * package using `packaging: single_package`, or 1 to 20 packages with explicit items using
 * `packaging: itemized`. External reference and metadata are optional.
 */
export type FulfillmentPackagingRequestInput = ({
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): {@link SinglePackageCreateRequestInput}. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequestInput;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequestInput}. minItems: 1. maxItems: 20.
     * Shape $[] (Value): {@link PackageCreateRequestInput}. The request body for: Create package.
     * Shape $[].buyer_notification_behavior (Optional): string. Controls buyer email handling.
     * Omit or use send to send when recipient, template, and deduplication rules allow it. Use
     * suppress when another system owns buyer messaging. Value enum: "send", "suppress". Shape
     * $[].carrier (Optional): string. minLength: 1. Shape $[].dimensions (Optional): {@link
     * DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given
     * `unit`. Shape $[].expected_delivery_at (Optional): string or null. When the carrier or
     * merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit
     * to leave it unchanged on updates and transitions. Format: date-time. minLength: 1. Shape
     * $[].external_reference_id (Optional): string. Caller-owned identifier for this resource in
     * an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Shape $[].external_system
     * (Optional): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1. Shape
     * $[].items (Required): Array of {@link CreatePackageItemRequestInput}. Independent
     * package-item collection. Inline creation uses the child-create shape and commits atomically;
     * edit items through the package item routes after creation. Each order line may appear once.
     * minItems: 1. maxItems: 100. Shape $[].items[] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item. Shape
     * $[].label_url (Optional): string. Merchant or integration supplied HTTPS shipping-label URL
     * for authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1. Shape $[].metadata (Optional): {@link MetadataRequestInput}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. Shape $[].return_line_items
     * (Optional): Array of {@link ReturnShipmentLineItemAllocationRequestRequestInput}. Required
     * for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. Shape
     * $[].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestRequestInput}. A return line and the quantity placed
     * in a return shipment or package. Shape $[].service_code (Optional): string. minLength: 1.
     * Shape $[].shipped_at (Optional): string. Package handoff time. Defaults to request time.
     * Only allowed with status shipped. Format: date-time. minLength: 1. Shape $[].status
     * (Required): string. Value enum: "created", "shipped". Shape $[].status_reason (Optional):
     * string. minLength: 1. Shape $[].tracking_number (Optional): string. minLength: 1. Shape
     * $[].tracking_url (Optional): string. Absolute HTTPS carrier tracking URL. Embedded URL
     * credentials are rejected. minLength: 1. Shape $[].weight (Optional): {@link WeightInput}. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * Shape $[].oneOf[1] (Value): {@link PackageCreateInputCreatedInput}. The `created` variant of
     * `PackageCreateInput`. Shape $[].oneOf[2] (Value): {@link PackageCreateInputShippedInput}.
     * The `shipped` variant of `PackageCreateInput`.
     */
    "packages"?: Array<({
        /**
         * Shape $ (Value): Array of {@link CreatePackageItemRequestInput}. Independent
         * package-item collection. Inline creation uses the child-create shape and commits
         * atomically; edit items through the package item routes after creation. Each order line
         * may appear once. minItems: 1. maxItems: 100. Shape $[] (Value): {@link
         * CreatePackageItemRequestInput}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequestInput>;
    })
        & (Exclude<PackageCreateRequestInput & object, readonly unknown[]>)>;
    /** Shape $ (Value): string.  Value enum: "single_package", "itemized". */
    "packaging": "single_package" | "itemized";
})
    & ((Exclude<FulfillmentSinglePackageRequestInput & object, readonly unknown[]>)
    | (Exclude<FulfillmentItemizedPackagesRequestInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link FulfillmentRecipient}. The recipient of a fulfillment, with name, email,
 * phone, address, and handling instructions.
 */
export type FulfillmentRecipient = {
    /**
     * Shape $ (Value): {@link Address}. Postal address where the recipient receives the items. A
     * postal address. Every address has country. Addresses Flint checked as complete (customer and
     * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Shape $ (Value): string. Recipient's contact email address. */
    "email"?: string;
    /**
     * Shape $ (Value): string. Instructions for handling the recipient's order. For a pickup that
     * checkout creates, this is the note the buyer left for the store, such as the car to look
     * for.
     */
    "instructions"?: string;
    /** Shape $ (Value): string. Recipient's name for delivery or pickup. */
    "name"?: string;
    /** Shape $ (Value): string. Recipient's contact phone number. */
    "phone"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentRecipientRequest}. Recipient details you supply when creating
 * or updating a fulfillment: name, email, phone, address, and handling instructions.
 */
export type FulfillmentRecipientRequest = {
    /**
     * Shape $ (Value): {@link AddressRequest}. Postal address where the recipient receives the
     * items. A complete postal address. State and postal_code are required for US addresses and
     * optional for other countries. Send null or omit line2, state, and postal_code when the
     * address has none.
     */
    "address"?: AddressRequest;
    /** Shape $ (Value): string. Recipient's contact email address. minLength: 1. */
    "email"?: string;
    /**
     * Shape $ (Value): string. Instructions for handling the recipient's order. For a pickup that
     * checkout creates, this is the note the buyer left for the store, such as the car to look
     * for. minLength: 1.
     */
    "instructions"?: string;
    /** Shape $ (Value): string. Recipient's name for delivery or pickup. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string. Recipient's contact phone number. minLength: 1. */
    "phone"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentRecipientRequestInput}. Recipient details you supply when
 * creating or updating a fulfillment: name, email, phone, address, and handling instructions.
 */
export type FulfillmentRecipientRequestInput = {
    /**
     * Shape $ (Value): {@link AddressRequestInput}. Postal address where the recipient receives
     * the items. A complete postal address. State and postal_code are required for US addresses
     * and optional for other countries. Send null or omit line2, state, and postal_code when the
     * address has none.
     */
    "address"?: AddressRequestInput;
    /** Shape $ (Value): string. Recipient's contact email address. minLength: 1. */
    "email"?: string;
    /**
     * Shape $ (Value): string. Instructions for handling the recipient's order. For a pickup that
     * checkout creates, this is the note the buyer left for the store, such as the car to look
     * for. minLength: 1.
     */
    "instructions"?: string;
    /** Shape $ (Value): string. Recipient's name for delivery or pickup. minLength: 1. */
    "name"?: string;
    /** Shape $ (Value): string. Recipient's contact phone number. minLength: 1. */
    "phone"?: string;
};
/** Shape $ (Value): {@link FulfillmentResponse}. A response containing `Fulfillment` data. */
export type FulfillmentResponse = {
    /** Shape $ (Value): {@link Fulfillment}. Work required to deliver an order's items. */
    "data": Fulfillment;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Shape $ (Value): {@link FulfillmentSettings}. Merchant fulfillment settings, including whether
 * fulfillments require approval (`approval_required`).
 */
export type FulfillmentSettings = {
    /** Shape $ (Value): boolean. */
    "approval_required"?: boolean;
};
/**
 * Shape $ (Value): {@link FulfillmentSettingsRequestRequestInput}. Merchant fulfillment settings,
 * including whether fulfillments require approval (`approval_required`).
 */
export type FulfillmentSettingsRequestRequestInput = FulfillmentSettings;
/**
 * Shape $ (Value): {@link FulfillmentSinglePackageRequest}. The `single_package` variant of
 * `FulfillmentPackagingInput`.
 */
export type FulfillmentSinglePackageRequest = ({
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data for a new or replaced map.
     * Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points,
     * values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8
     * bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint.
     * maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link SinglePackageCreateRequest}. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package": SinglePackageCreateRequest;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequest}. minItems: 1. maxItems: 20. Shape $[]
     * (Value): {@link PackageCreateRequest}. The request body for: Create package. Shape
     * $[].buyer_notification_behavior (Optional): string. Controls buyer email handling. Omit or
     * use send to send when recipient, template, and deduplication rules allow it. Use suppress
     * when another system owns buyer messaging. Value enum: "send", "suppress". Shape $[].carrier
     * (Optional): string. minLength: 1. Shape $[].dimensions (Optional): {@link Dimensions}.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`. Shape
     * $[].expected_delivery_at (Optional): string or null. When the carrier or merchant expects
     * this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it
     * unchanged on updates and transitions. Format: date-time. minLength: 1. Shape
     * $[].external_reference_id (Optional): string. Caller-owned identifier for this resource in
     * an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Shape $[].external_system
     * (Optional): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1. Shape
     * $[].items (Required): Array of {@link CreatePackageItemRequest}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. Shape $[].items[] (Value): {@link CreatePackageItemRequest}. The request
     * body for: Create package item. Shape $[].label_url (Optional): string. Merchant or
     * integration supplied HTTPS shipping-label URL for authenticated merchant workflows.
     * Non-Flint URLs must include external_system for provenance. Flint does not currently manage
     * label file hosting or buyer-facing label downloads. minLength: 1. Shape $[].metadata
     * (Optional): {@link MetadataMap}. Caller-owned metadata. Values can't be empty strings. Keys
     * starting with flint_ are reserved for Flint, are not returned, and cannot be written through
     * the public API. Caller-owned key-value data for a new or replaced map. Omit it for no
     * metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to
     * 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't
     * be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * Shape $[].return_line_items (Optional): Array of {@link ReturnResolutionLineItemRequest}.
     * Required for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. Shape
     * $[].return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}. A return line and
     * the quantity placed in a return shipment or package. Shape $[].service_code (Optional):
     * string. minLength: 1. Shape $[].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * Shape $[].status (Required): string. Value enum: "created", "shipped". Shape
     * $[].status_reason (Optional): string. minLength: 1. Shape $[].tracking_number (Optional):
     * string. minLength: 1. Shape $[].tracking_url (Optional): string. Absolute HTTPS carrier
     * tracking URL. Embedded URL credentials are rejected. minLength: 1. Shape $[].weight
     * (Optional): {@link Weight}. A weight value in grams, kilograms, ounces, or pounds, used in
     * delivery profile configuration. Shape $[].oneOf[1] (Value): {@link
     * PackageCreateInputCreated}. The `created` variant of `PackageCreateInput`. Shape
     * $[].oneOf[2] (Value): {@link PackageCreateInputShipped}. The `shipped` variant of
     * `PackageCreateInput`.
     */
    "packages"?: Array<({
        /**
         * Shape $ (Value): Array of {@link CreatePackageItemRequest}. Independent package-item
         * collection. Inline creation uses the child-create shape and commits atomically; edit
         * items through the package item routes after creation. Each order line may appear once.
         * minItems: 1. maxItems: 100. Shape $[] (Value): {@link CreatePackageItemRequest}. The
         * request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequest>;
    })
        & (Exclude<PackageCreateRequest & object, readonly unknown[]>)>;
    /** Shape $ (Value): string.  Value enum: "single_package". */
    "packaging": "single_package" | (string & {});
});
/**
 * Shape $ (Value): {@link FulfillmentSinglePackageRequestInput}. The `single_package` variant of
 * `FulfillmentPackagingInput`.
 */
export type FulfillmentSinglePackageRequestInput = ({
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "external_system"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): {@link SinglePackageCreateRequestInput}. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package": SinglePackageCreateRequestInput;
    /**
     * Shape $ (Value): Array of {@link PackageCreateRequestInput}. minItems: 1. maxItems: 20.
     * Shape $[] (Value): {@link PackageCreateRequestInput}. The request body for: Create package.
     * Shape $[].buyer_notification_behavior (Optional): string. Controls buyer email handling.
     * Omit or use send to send when recipient, template, and deduplication rules allow it. Use
     * suppress when another system owns buyer messaging. Value enum: "send", "suppress". Shape
     * $[].carrier (Optional): string. minLength: 1. Shape $[].dimensions (Optional): {@link
     * DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given
     * `unit`. Shape $[].expected_delivery_at (Optional): string or null. When the carrier or
     * merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit
     * to leave it unchanged on updates and transitions. Format: date-time. minLength: 1. Shape
     * $[].external_reference_id (Optional): string. Caller-owned identifier for this resource in
     * an external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Shape $[].external_system
     * (Optional): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1. Shape
     * $[].items (Required): Array of {@link CreatePackageItemRequestInput}. Independent
     * package-item collection. Inline creation uses the child-create shape and commits atomically;
     * edit items through the package item routes after creation. Each order line may appear once.
     * minItems: 1. maxItems: 100. Shape $[].items[] (Value): {@link
     * CreatePackageItemRequestInput}. The request body for: Create package item. Shape
     * $[].label_url (Optional): string. Merchant or integration supplied HTTPS shipping-label URL
     * for authenticated merchant workflows. Non-Flint URLs must include external_system for
     * provenance. Flint does not currently manage label file hosting or buyer-facing label
     * downloads. minLength: 1. Shape $[].metadata (Optional): {@link MetadataRequestInput}.
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. Shape $[].return_line_items
     * (Optional): Array of {@link ReturnShipmentLineItemAllocationRequestRequestInput}. Required
     * for a package on a return shipment: allocates quantities from the shipment's
     * return_line_items to this parcel. Rejected on outbound shipments. Shape
     * $[].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestRequestInput}. A return line and the quantity placed
     * in a return shipment or package. Shape $[].service_code (Optional): string. minLength: 1.
     * Shape $[].shipped_at (Optional): string. Package handoff time. Defaults to request time.
     * Only allowed with status shipped. Format: date-time. minLength: 1. Shape $[].status
     * (Required): string. Value enum: "created", "shipped". Shape $[].status_reason (Optional):
     * string. minLength: 1. Shape $[].tracking_number (Optional): string. minLength: 1. Shape
     * $[].tracking_url (Optional): string. Absolute HTTPS carrier tracking URL. Embedded URL
     * credentials are rejected. minLength: 1. Shape $[].weight (Optional): {@link WeightInput}. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * Shape $[].oneOf[1] (Value): {@link PackageCreateInputCreatedInput}. The `created` variant of
     * `PackageCreateInput`. Shape $[].oneOf[2] (Value): {@link PackageCreateInputShippedInput}.
     * The `shipped` variant of `PackageCreateInput`.
     */
    "packages"?: Array<({
        /**
         * Shape $ (Value): Array of {@link CreatePackageItemRequestInput}. Independent
         * package-item collection. Inline creation uses the child-create shape and commits
         * atomically; edit items through the package item routes after creation. Each order line
         * may appear once. minItems: 1. maxItems: 100. Shape $[] (Value): {@link
         * CreatePackageItemRequestInput}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequestInput>;
    })
        & (Exclude<PackageCreateRequestInput & object, readonly unknown[]>)>;
    /** Shape $ (Value): string.  Value enum: "single_package". */
    "packaging": "single_package";
})
    & (({
    "packages"?: never;
}));
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequest}. The request body for: Transition
 * fulfillment.
 */
export type FulfillmentTransitionRequest = ((FulfillmentTransitionRequestReleaseHold)
    | (FulfillmentTransitionRequestComplete)
    | (FulfillmentTransitionRequestCancel)
    | (FulfillmentTransitionRequestHold)
    | (FulfillmentTransitionRequestStart)
    | (FulfillmentTransitionRequestMarkReady)
    | (FulfillmentTransitionRequestFail)
    | (FulfillmentTransitionRequestSchedule)
    | (FulfillmentTransitionRequestAccept)
    | (FulfillmentTransitionRequestMarkPreparing)
    | (FulfillmentTransitionRequestMarkPicked)
    | (PackageTransitionRequestMarkPacked)
    | (FulfillmentTransitionRequestDispatch)
    | (FulfillmentTransitionRequestMarkNoShow)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestAccept}. The `accept` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestAccept = {
    /** Shape $ (Value): string.  Value enum: "accept". */
    "action": "accept" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestAcceptInput}. The `accept` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestAcceptInput = {
    /** Shape $ (Value): string.  Value enum: "accept". */
    "action": "accept";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestCancel}. The `cancel` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestCancel = {
    /** Shape $ (Value): string.  Value enum: "cancel". */
    "action": "cancel" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestCancelInput}. The `cancel` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestCancelInput = {
    /** Shape $ (Value): string.  Value enum: "cancel". */
    "action": "cancel";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestComplete}. The `complete` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestComplete = {
    /** Shape $ (Value): string.  Value enum: "complete". */
    "action": "complete" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestCompleteInput}. The `complete` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestCompleteInput = {
    /** Shape $ (Value): string.  Value enum: "complete". */
    "action": "complete";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestDispatch}. The `dispatch` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestDispatch = {
    /** Shape $ (Value): string.  Value enum: "dispatch". */
    "action": "dispatch" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestDispatchInput}. The `dispatch` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestDispatchInput = {
    /** Shape $ (Value): string.  Value enum: "dispatch". */
    "action": "dispatch";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestFail}. The `fail` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestFail = {
    /** Shape $ (Value): string.  Value enum: "fail". */
    "action": "fail" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
    /** Shape $ (Value): boolean. */
    "release_quantity": boolean;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestFailInput}. The `fail` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestFailInput = {
    /** Shape $ (Value): string.  Value enum: "fail". */
    "action": "fail";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
    /** Shape $ (Value): boolean. */
    "release_quantity": boolean;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestHold}. The `hold` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestHold = {
    /** Shape $ (Value): string.  Value enum: "hold". */
    "action": "hold" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "payment_review", "inventory_issue", "address_issue",
     * "customer_request", "provider_issue", "scheduling_issue", "fraud_review", "other".
     */
    "reason": "payment_review"
        | "inventory_issue"
        | "address_issue"
        | "customer_request"
        | "provider_issue"
        | "scheduling_issue"
        | "fraud_review"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestHoldInput}. The `hold` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestHoldInput = {
    /** Shape $ (Value): string.  Value enum: "hold". */
    "action": "hold";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Value enum: "payment_review", "inventory_issue", "address_issue",
     * "customer_request", "provider_issue", "scheduling_issue", "fraud_review", "other".
     */
    "reason": "payment_review"
        | "inventory_issue"
        | "address_issue"
        | "customer_request"
        | "provider_issue"
        | "scheduling_issue"
        | "fraud_review"
        | "other";
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestInput}. The request body for: Transition
 * fulfillment.
 */
export type FulfillmentTransitionRequestInput = ((FulfillmentTransitionRequestReleaseHoldInput)
    | (FulfillmentTransitionRequestCompleteInput)
    | (FulfillmentTransitionRequestCancelInput)
    | (FulfillmentTransitionRequestHoldInput)
    | (FulfillmentTransitionRequestStartInput)
    | (FulfillmentTransitionRequestMarkReadyInput)
    | (FulfillmentTransitionRequestFailInput)
    | (FulfillmentTransitionRequestScheduleInput)
    | (FulfillmentTransitionRequestAcceptInput)
    | (FulfillmentTransitionRequestMarkPreparingInput)
    | (FulfillmentTransitionRequestMarkPickedInput)
    | (FulfillmentTransitionRequestMarkPackedInput)
    | (FulfillmentTransitionRequestDispatchInput)
    | (FulfillmentTransitionRequestMarkNoShowInput));
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkNoShow}. The `mark_no_show` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkNoShow = {
    /** Shape $ (Value): string.  Value enum: "mark_no_show". */
    "action": "mark_no_show" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "customer_no_show", "provider_no_show",
     * "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkNoShowInput}. The `mark_no_show` variant
 * of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkNoShowInput = {
    /** Shape $ (Value): string.  Value enum: "mark_no_show". */
    "action": "mark_no_show";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Value enum: "customer_no_show", "provider_no_show",
     * "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show" | "provider_no_show" | "location_unavailable" | "scheduling_error" | "other";
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkPackedInput}. The `mark_packed` variant
 * of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkPackedInput = {
    /** Shape $ (Value): string.  Value enum: "mark_packed". */
    "action": "mark_packed";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkPicked}. The `mark_picked` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkPicked = {
    /** Shape $ (Value): string.  Value enum: "mark_picked". */
    "action": "mark_picked" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkPickedInput}. The `mark_picked` variant
 * of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkPickedInput = {
    /** Shape $ (Value): string.  Value enum: "mark_picked". */
    "action": "mark_picked";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkPreparing}. The `mark_preparing` variant
 * of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkPreparing = {
    /** Shape $ (Value): string.  Value enum: "mark_preparing". */
    "action": "mark_preparing" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkPreparingInput}. The `mark_preparing`
 * variant of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkPreparingInput = {
    /** Shape $ (Value): string.  Value enum: "mark_preparing". */
    "action": "mark_preparing";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkReady}. The `mark_ready` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkReady = {
    /** Shape $ (Value): string.  Value enum: "mark_ready". */
    "action": "mark_ready" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestMarkReadyInput}. The `mark_ready` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestMarkReadyInput = {
    /** Shape $ (Value): string.  Value enum: "mark_ready". */
    "action": "mark_ready";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestReleaseHold}. The `release_hold` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestReleaseHold = {
    /** Shape $ (Value): string.  Value enum: "release_hold". */
    "action": "release_hold" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestReleaseHoldInput}. The `release_hold`
 * variant of `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestReleaseHoldInput = {
    /** Shape $ (Value): string.  Value enum: "release_hold". */
    "action": "release_hold";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestSchedule}. The `schedule` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestSchedule = {
    /** Shape $ (Value): string.  Value enum: "schedule". */
    "action": "schedule" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_end_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_start_at": string;
    /** Shape $ (Value): string. IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestScheduleInput}. The `schedule` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestScheduleInput = {
    /** Shape $ (Value): string.  Value enum: "schedule". */
    "action": "schedule";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_end_at": string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "scheduled_start_at": string | globalThis.Date;
    /** Shape $ (Value): string. IANA timezone of the service appointment. minLength: 1. */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestStart}. The `start` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestStart = {
    /** Shape $ (Value): string.  Value enum: "start". */
    "action": "start" | (string & {});
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link FulfillmentTransitionRequestStartInput}. The `start` variant of
 * `FulfillmentTransitionRequest`.
 */
export type FulfillmentTransitionRequestStartInput = {
    /** Shape $ (Value): string.  Value enum: "start". */
    "action": "start";
    /** Shape $ (Value): string.  Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /**
     * Shape $ (Value): integer string. Resource version the caller last read. Use an integer
     * string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     */
    "reason_message"?: string;
};
export type FulfillmentsCreateEventInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateFulfillmentEventRequestInput}. The request body for: Create
     * fulfillment event.
     */
    "body": InputValue<CreateFulfillmentEventRequestInput>;
};
export type FulfillmentsCreateShipmentInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateShipmentRequestInput}. The request body for: Create shipment.
     */
    "body": InputValue<CreateShipmentRequestInput>;
};
export type FulfillmentsGetInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order", "packages", "shipments". Shape $[]
     * (Value): string. Value enum: "order", "packages", "shipments".
     */
    "expand"?: InputValue<Array<"order" | "packages" | "shipments">>;
};
export type FulfillmentsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "order". Shape $[] (Value): string. Value enum:
     * "order".
     */
    "expand"?: InputValue<Array<"order">>;
    /** Shape $ (Value): string. */
    "order_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "pending", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
     * "packed", "dispatched", "no_show". Shape $[] (Value): string. Value enum: "pending",
     * "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled",
     * "accepted", "preparing", "picked", "packed", "dispatched", "no_show".
     */
    "status"?: InputValue<Array<"pending"
        | "on_hold"
        | "in_progress"
        | "ready"
        | "completed"
        | "canceled"
        | "failed"
        | "scheduled"
        | "accepted"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | "no_show">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "shipment", "pickup",
     * "local_delivery", "digital", "service". Shape $[] (Value): string. Value enum: "shipment",
     * "pickup", "local_delivery", "digital", "service".
     */
    "type"?: InputValue<Array<"shipment" | "pickup" | "local_delivery" | "digital" | "service">>;
    /** Shape $ (Value): string. */
    "location_id"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at",
     * "scheduled_start_at", "terminal_at".
     */
    "sort_by"?: InputValue<"created_at" | "scheduled_start_at" | "terminal_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
};
export type FulfillmentsTransitionInput = {
    /** Shape $ (Value): string. */
    "fulfillment_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link FulfillmentTransitionRequestInput}. The request body for: Transition
     * fulfillment.
     */
    "body": InputValue<FulfillmentTransitionRequestInput>;
};

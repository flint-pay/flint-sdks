import type { DeliveryFulfillmentDetails } from './types-16.js';
import type { DigitalFulfillmentDetails, DispatchFulfillmentRequestInput } from './types-22.js';
import type {
    ExpandedOrderSummary,
    ExpandedPackageSummary,
    ExpandedShipmentSummary,
    FailFulfillmentRequestInput
} from './types-23.js';
import type { MetadataMap, MerchantWebhookEnvelope, MetadataRequestInput } from './types-36.js';
import type { PickupFulfillmentDetails } from './types-47.js';
import type { ServiceFulfillmentDetails, ShipmentFulfillmentDetails } from './types-56.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { ResponseMeta } from './types-51.js';
import type { InputValue } from '../runtime.js';
import type { CreatePackageItemRequest, CreatePackageItemRequestInput } from './types-10.js';
import type { PackageCreateRequest, PackageCreateRequestInput } from './types-41.js';
import type { SinglePackageCreateRequest, SinglePackageCreateRequestInput } from './types-57.js';
import type { OrderLineItemModifier } from './types-39.js';
import type { Address, AddressRequest, AddressRequestInput, AcceptFulfillmentRequestInput } from './types-0.js';
import type { CancelFulfillmentRequestInput } from './types-4.js';
import type { CompleteFulfillmentRequestInput } from './types-6.js';
import type { CreateFulfillmentEventRequestInput } from './types-8.js';
import type { CreateShipmentRequestInput } from './types-12.js';
import type { HoldFulfillmentRequestInput } from './types-27.js';
import type {
    MarkFulfillmentNoShowRequestInput,
    MarkFulfillmentPackedRequestInput,
    MarkFulfillmentPickedRequestInput,
    MarkFulfillmentPreparingRequestInput,
    MarkFulfillmentReadyRequestInput
} from './types-34.js';
import type { ReleaseFulfillmentHoldRequestInput } from './types-50.js';
/** The merchant freeze reason and an optional version fence for the gift card. */
export type FreezeGiftCardRequestInput = {
    /**
     * The gift card version last read. The command changes this card only when its current version
     * matches. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why the merchant is freezing spending. Value enum: "suspicious_activity",
     * "customer_request", "support_issue".
     */
    "reason": "suspicious_activity" | "customer_request" | "support_issue";
};
/** Work required to deliver an order's items. */
export type Fulfillment = {
    /**
     * Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with
     * its reason, who placed it, and when it became active.
     */
    "active_hold"?: FulfillmentHold;
    /**
     * Order charges associated with this fulfillment. [] (Value): {@link FulfillmentChargeLink}.
     * Links a fulfillment to an order charge by `order_charge_id`.
     */
    "charges"?: Array<FulfillmentChargeLink>;
    /**
     * When the fulfillment was completed. Mirrors the completion time for its type: delivered_at
     * for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "completed_at"?: string;
    /**
     * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Customer receiving this fulfillment, when one is set. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string;
    /**
     * Delivery choice group that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string | null;
    /**
     * Execution leg of the selected delivery option that created this fulfillment. `null` when the
     * merchant created the fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
     */
    "delivery_execution_leg_id": string | null;
    /**
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "delivery_method_id": string | null;
    /**
     * Delivery selection that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
     */
    "delivery_selection_id": string | null;
    /**
     * Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * Delivery URL and completion time for a digital fulfillment. Details of a digital
     * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
     */
    "digital_details"?: DigitalFulfillmentDetails;
    /**
     * First time this fulfillment reached dispatched. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "dispatched_at"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /**
     * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
     * FulfillmentLineItem}. An order line item and quantity included in a fulfillment, with the
     * modifiers applied to it.
     */
    "line_items": Array<FulfillmentLineItem>;
    /**
     * Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a
     * local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields
     * are omitted for credentials that don't act for the verified customer.
     */
    "local_delivery_details"?: DeliveryFulfillmentDetails;
    /**
     * Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value):
     * {@link ExpandedOrderSummary}. An order's summary fields, including status, payment and
     * refund status, and pricing and settlement amounts, returned when the order is expanded.
     * anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Order whose items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * Human-readable number of the order this fulfillment belongs to. Omitted when the order has
     * no number.
     */
    "order_number"?: string;
    /**
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     */
    "outcome"?: FulfillmentOutcome;
    /**
     * Packages associated with this fulfillment. [] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded.
     */
    "packages"?: Array<ExpandedPackageSummary>;
    /**
     * First time this fulfillment reached packed. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "packed_at"?: string;
    /**
     * First time this fulfillment reached picked. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "picked_at"?: string;
    /**
     * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For
     * a pickup that checkout creates, location_name, address, and instructions name the store the
     * buyer chose and the delivery method's pickup instructions. The note the buyer left for the
     * store is in recipient.instructions.
     */
    "pickup_details"?: PickupFulfillmentDetails;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. The recipient of a fulfillment, with name, email, phone, address, and handling
     * instructions.
     */
    "recipient"?: FulfillmentRecipient;
    /**
     * Derived start of the service schedule or pickup, local delivery, or shipment window. Null
     * when no schedule is booked, including digital fulfillments. Details remain the authoritative
     * schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in
     * the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "scheduled_start_at": string | null;
    /**
     * Schedule and completion details for a service fulfillment. Details of a service fulfillment:
     * the scheduled start and end, timezone, completion time, and notes.
     */
    "service_details"?: ServiceFulfillmentDetails;
    /**
     * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
     * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
     * window, timezone, and when the shipment was handed to the carrier.
     */
    "shipment_details"?: ShipmentFulfillmentDetails;
    /**
     * Shipments associated with this fulfillment. [] (Value): {@link ExpandedShipmentSummary}. A
     * shipment's summary fields, including direction, status, and package count, returned when the
     * shipment is expanded.
     */
    "shipments"?: Array<ExpandedShipmentSummary>;
    /**
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show".
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
     * Read-only lifecycle actions accepted now, based on the fulfillment, its order payment
     * status, holds, and shipment progress. Empty when none are available. Values name the verb
     * route with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
     * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". [] (Value): string. Value enum: "accept",
     * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
     * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
     */
    "supported_actions": Array<"accept"
        | "cancel"
        | "complete"
        | "dispatch"
        | "fail"
        | "hold"
        | "mark_no_show"
        | "mark_packed"
        | "mark_picked"
        | "mark_preparing"
        | "mark_ready"
        | "release_hold"
        | "schedule"
        | "start"
        | (string & {})>;
    /**
     * When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
     * records the state transition; completed_at records completion evidence supplied for the
     * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "terminal_at"?: string;
    /**
     * How the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
     * Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
    /**
     * When the fulfillment was last updated, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /** Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
export type FulfillmentCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id": string | null;
            "delivery_execution_leg_id": string | null;
            "delivery_method_id": string | null;
            "delivery_selection_id": string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Fulfillment>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id": string | null;
            "delivery_execution_leg_id": string | null;
            "delivery_method_id": string | null;
            "delivery_selection_id": string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Fulfillment>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment.canceled";
});
/**
 * The `fulfillment.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment reached
     * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items
     * (Required): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated to
     * this fulfillment. object.line_items[] (Value): {@link FulfillmentLineItem}. An order line
     * item and quantity included in a fulfillment, with the modifiers applied to it.
     * object.local_delivery_details (Optional): {@link DeliveryFulfillmentDetails}. Courier,
     * delivery window, and handoff details for a local delivery fulfillment. Details of a local
     * delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer. object.location_id
     * (Optional): string. Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_details (Optional): {@link ServiceFulfillmentDetails}. Schedule and
     * completion details for a service fulfillment. Details of a service fulfillment: the
     * scheduled start and end, timezone, completion time, and notes. object.shipment_details
     * (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier. object.shipments (Optional): Array of {@link ExpandedShipmentSummary}.
     * Shipments associated with this fulfillment. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". object.supported_actions (Required): Array of string. Read-only
     * lifecycle actions accepted now, based on the fulfillment, its order payment status, holds,
     * and shipment progress. Empty when none are available. Values name the verb route with
     * hyphens replaced by underscores. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". object.updated_at
     * (Required): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Required): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_execution_leg_id (Required): string or
         * null. Execution leg of the selected delivery option that created this fulfillment.
         * `null` when the merchant created the fulfillment or checkout created it without a
         * delivery quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Required): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id (Required): string or null.
         * Delivery selection that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first
         * ascending and last descending, then by fulfillment_id in the same direction. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". service_details (Optional): {@link
         * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
         * Details of a service fulfillment: the scheduled start and end, timezone, completion
         * time, and notes. shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
         * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
         * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
         * window, timezone, and when the shipment was handed to the carrier. shipments (Optional):
         * Array of {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Required): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
         * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
         * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". supported_actions[]
         * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
         * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
         * "release_hold", "schedule", "start". terminal_at (Optional): string. When the
         * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". type (Required):
         * string. How the items are delivered: shipment, pickup, local delivery, digital delivery,
         * or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
         * updated_at (Required): string. When the fulfillment was last updated, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Example:
             * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id": string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id": string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id": string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id": string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Nulls sort first ascending and last descending, then
             * by fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. [] enum: "accept",
             * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
             * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
             * [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start".
             */
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Fulfillment>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment.canceled". */
    "event_type"?: "fulfillment.canceled";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `fulfillment.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment reached
     * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items
     * (Required): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated to
     * this fulfillment. object.line_items[] (Value): {@link FulfillmentLineItem}. An order line
     * item and quantity included in a fulfillment, with the modifiers applied to it.
     * object.local_delivery_details (Optional): {@link DeliveryFulfillmentDetails}. Courier,
     * delivery window, and handoff details for a local delivery fulfillment. Details of a local
     * delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer. object.location_id
     * (Optional): string. Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_details (Optional): {@link ServiceFulfillmentDetails}. Schedule and
     * completion details for a service fulfillment. Details of a service fulfillment: the
     * scheduled start and end, timezone, completion time, and notes. object.shipment_details
     * (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier. object.shipments (Optional): Array of {@link ExpandedShipmentSummary}.
     * Shipments associated with this fulfillment. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". object.supported_actions (Required): Array of string. Read-only
     * lifecycle actions accepted now, based on the fulfillment, its order payment status, holds,
     * and shipment progress. Empty when none are available. Values name the verb route with
     * hyphens replaced by underscores. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". object.updated_at
     * (Required): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Required): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_execution_leg_id (Required): string or
         * null. Execution leg of the selected delivery option that created this fulfillment.
         * `null` when the merchant created the fulfillment or checkout created it without a
         * delivery quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Required): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id (Required): string or null.
         * Delivery selection that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first
         * ascending and last descending, then by fulfillment_id in the same direction. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". service_details (Optional): {@link
         * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
         * Details of a service fulfillment: the scheduled start and end, timezone, completion
         * time, and notes. shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
         * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
         * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
         * window, timezone, and when the shipment was handed to the carrier. shipments (Optional):
         * Array of {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Required): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
         * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
         * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". supported_actions[]
         * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
         * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
         * "release_hold", "schedule", "start". terminal_at (Optional): string. When the
         * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". type (Required):
         * string. How the items are delivered: shipment, pickup, local delivery, digital delivery,
         * or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
         * updated_at (Required): string. When the fulfillment was last updated, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Example:
             * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id": string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id": string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id": string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id": string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Nulls sort first ascending and last descending, then
             * by fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. [] enum: "accept",
             * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
             * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
             * [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start".
             */
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Fulfillment>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment.canceled". */
    "event_type"?: "fulfillment.canceled";
});
/** Links a fulfillment to an order charge by `order_charge_id`. */
export type FulfillmentChargeLink = {
    /** Order charge associated with this fulfillment. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT". */
    "order_charge_id": string;
};
export type FulfillmentCompletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id": string | null;
            "delivery_execution_leg_id": string | null;
            "delivery_method_id": string | null;
            "delivery_selection_id": string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Fulfillment>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment.completed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id": string | null;
            "delivery_execution_leg_id": string | null;
            "delivery_method_id": string | null;
            "delivery_selection_id": string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Fulfillment>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment.completed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment.completed";
});
/**
 * The `fulfillment.completed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentCompletedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment reached
     * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items
     * (Required): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated to
     * this fulfillment. object.line_items[] (Value): {@link FulfillmentLineItem}. An order line
     * item and quantity included in a fulfillment, with the modifiers applied to it.
     * object.local_delivery_details (Optional): {@link DeliveryFulfillmentDetails}. Courier,
     * delivery window, and handoff details for a local delivery fulfillment. Details of a local
     * delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer. object.location_id
     * (Optional): string. Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_details (Optional): {@link ServiceFulfillmentDetails}. Schedule and
     * completion details for a service fulfillment. Details of a service fulfillment: the
     * scheduled start and end, timezone, completion time, and notes. object.shipment_details
     * (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier. object.shipments (Optional): Array of {@link ExpandedShipmentSummary}.
     * Shipments associated with this fulfillment. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". object.supported_actions (Required): Array of string. Read-only
     * lifecycle actions accepted now, based on the fulfillment, its order payment status, holds,
     * and shipment progress. Empty when none are available. Values name the verb route with
     * hyphens replaced by underscores. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". object.updated_at
     * (Required): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Required): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_execution_leg_id (Required): string or
         * null. Execution leg of the selected delivery option that created this fulfillment.
         * `null` when the merchant created the fulfillment or checkout created it without a
         * delivery quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Required): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id (Required): string or null.
         * Delivery selection that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first
         * ascending and last descending, then by fulfillment_id in the same direction. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". service_details (Optional): {@link
         * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
         * Details of a service fulfillment: the scheduled start and end, timezone, completion
         * time, and notes. shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
         * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
         * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
         * window, timezone, and when the shipment was handed to the carrier. shipments (Optional):
         * Array of {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Required): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
         * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
         * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". supported_actions[]
         * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
         * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
         * "release_hold", "schedule", "start". terminal_at (Optional): string. When the
         * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". type (Required):
         * string. How the items are delivered: shipment, pickup, local delivery, digital delivery,
         * or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
         * updated_at (Required): string. When the fulfillment was last updated, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Example:
             * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id": string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id": string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id": string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id": string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Nulls sort first ascending and last descending, then
             * by fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. [] enum: "accept",
             * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
             * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
             * [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start".
             */
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Fulfillment>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment.completed". */
    "event_type"?: "fulfillment.completed";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `fulfillment.completed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentCompletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment reached
     * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items
     * (Required): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated to
     * this fulfillment. object.line_items[] (Value): {@link FulfillmentLineItem}. An order line
     * item and quantity included in a fulfillment, with the modifiers applied to it.
     * object.local_delivery_details (Optional): {@link DeliveryFulfillmentDetails}. Courier,
     * delivery window, and handoff details for a local delivery fulfillment. Details of a local
     * delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer. object.location_id
     * (Optional): string. Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_details (Optional): {@link ServiceFulfillmentDetails}. Schedule and
     * completion details for a service fulfillment. Details of a service fulfillment: the
     * scheduled start and end, timezone, completion time, and notes. object.shipment_details
     * (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier. object.shipments (Optional): Array of {@link ExpandedShipmentSummary}.
     * Shipments associated with this fulfillment. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". object.supported_actions (Required): Array of string. Read-only
     * lifecycle actions accepted now, based on the fulfillment, its order payment status, holds,
     * and shipment progress. Empty when none are available. Values name the verb route with
     * hyphens replaced by underscores. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". object.updated_at
     * (Required): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Required): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_execution_leg_id (Required): string or
         * null. Execution leg of the selected delivery option that created this fulfillment.
         * `null` when the merchant created the fulfillment or checkout created it without a
         * delivery quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Required): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id (Required): string or null.
         * Delivery selection that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first
         * ascending and last descending, then by fulfillment_id in the same direction. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". service_details (Optional): {@link
         * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
         * Details of a service fulfillment: the scheduled start and end, timezone, completion
         * time, and notes. shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
         * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
         * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
         * window, timezone, and when the shipment was handed to the carrier. shipments (Optional):
         * Array of {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Required): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
         * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
         * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". supported_actions[]
         * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
         * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
         * "release_hold", "schedule", "start". terminal_at (Optional): string. When the
         * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". type (Required):
         * string. How the items are delivered: shipment, pickup, local delivery, digital delivery,
         * or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
         * updated_at (Required): string. When the fulfillment was last updated, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Example:
             * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id": string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id": string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id": string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id": string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Nulls sort first ascending and last descending, then
             * by fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. [] enum: "accept",
             * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
             * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
             * [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start".
             */
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Fulfillment>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment.completed". */
    "event_type"?: "fulfillment.completed";
});
export type FulfillmentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id": string | null;
            "delivery_execution_leg_id": string | null;
            "delivery_method_id": string | null;
            "delivery_selection_id": string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id": string | null;
            "delivery_execution_leg_id": string | null;
            "delivery_method_id": string | null;
            "delivery_selection_id": string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment.created";
});
/**
 * The `fulfillment.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment reached
     * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items
     * (Required): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated to
     * this fulfillment. object.line_items[] (Value): {@link FulfillmentLineItem}. An order line
     * item and quantity included in a fulfillment, with the modifiers applied to it.
     * object.local_delivery_details (Optional): {@link DeliveryFulfillmentDetails}. Courier,
     * delivery window, and handoff details for a local delivery fulfillment. Details of a local
     * delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer. object.location_id
     * (Optional): string. Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_details (Optional): {@link ServiceFulfillmentDetails}. Schedule and
     * completion details for a service fulfillment. Details of a service fulfillment: the
     * scheduled start and end, timezone, completion time, and notes. object.shipment_details
     * (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier. object.shipments (Optional): Array of {@link ExpandedShipmentSummary}.
     * Shipments associated with this fulfillment. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". object.supported_actions (Required): Array of string. Read-only
     * lifecycle actions accepted now, based on the fulfillment, its order payment status, holds,
     * and shipment progress. Empty when none are available. Values name the verb route with
     * hyphens replaced by underscores. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". object.updated_at
     * (Required): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Required): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_execution_leg_id (Required): string or
         * null. Execution leg of the selected delivery option that created this fulfillment.
         * `null` when the merchant created the fulfillment or checkout created it without a
         * delivery quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Required): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id (Required): string or null.
         * Delivery selection that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first
         * ascending and last descending, then by fulfillment_id in the same direction. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". service_details (Optional): {@link
         * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
         * Details of a service fulfillment: the scheduled start and end, timezone, completion
         * time, and notes. shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
         * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
         * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
         * window, timezone, and when the shipment was handed to the carrier. shipments (Optional):
         * Array of {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Required): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
         * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
         * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". supported_actions[]
         * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
         * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
         * "release_hold", "schedule", "start". terminal_at (Optional): string. When the
         * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". type (Required):
         * string. How the items are delivered: shipment, pickup, local delivery, digital delivery,
         * or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
         * updated_at (Required): string. When the fulfillment was last updated, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Example:
             * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id": string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id": string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id": string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id": string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Nulls sort first ascending and last descending, then
             * by fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. [] enum: "accept",
             * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
             * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
             * [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start".
             */
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment.created". */
    "event_type"?: "fulfillment.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `fulfillment.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment reached
     * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items
     * (Required): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated to
     * this fulfillment. object.line_items[] (Value): {@link FulfillmentLineItem}. An order line
     * item and quantity included in a fulfillment, with the modifiers applied to it.
     * object.local_delivery_details (Optional): {@link DeliveryFulfillmentDetails}. Courier,
     * delivery window, and handoff details for a local delivery fulfillment. Details of a local
     * delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer. object.location_id
     * (Optional): string. Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_details (Optional): {@link ServiceFulfillmentDetails}. Schedule and
     * completion details for a service fulfillment. Details of a service fulfillment: the
     * scheduled start and end, timezone, completion time, and notes. object.shipment_details
     * (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier. object.shipments (Optional): Array of {@link ExpandedShipmentSummary}.
     * Shipments associated with this fulfillment. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". object.supported_actions (Required): Array of string. Read-only
     * lifecycle actions accepted now, based on the fulfillment, its order payment status, holds,
     * and shipment progress. Empty when none are available. Values name the verb route with
     * hyphens replaced by underscores. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". object.updated_at
     * (Required): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Required): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_execution_leg_id (Required): string or
         * null. Execution leg of the selected delivery option that created this fulfillment.
         * `null` when the merchant created the fulfillment or checkout created it without a
         * delivery quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Required): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id (Required): string or null.
         * Delivery selection that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first
         * ascending and last descending, then by fulfillment_id in the same direction. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". service_details (Optional): {@link
         * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
         * Details of a service fulfillment: the scheduled start and end, timezone, completion
         * time, and notes. shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
         * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
         * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
         * window, timezone, and when the shipment was handed to the carrier. shipments (Optional):
         * Array of {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Required): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
         * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
         * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". supported_actions[]
         * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
         * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
         * "release_hold", "schedule", "start". terminal_at (Optional): string. When the
         * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". type (Required):
         * string. How the items are delivered: shipment, pickup, local delivery, digital delivery,
         * or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
         * updated_at (Required): string. When the fulfillment was last updated, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Example:
             * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id": string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id": string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id": string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id": string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Nulls sort first ascending and last descending, then
             * by fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. [] enum: "accept",
             * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
             * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
             * [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start".
             */
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment.created". */
    "event_type"?: "fulfillment.created";
});
/** An action recorded during an order's fulfillment. */
export type FulfillmentEvent = {
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior": "send" | "suppress" | (string & {});
    /** Timeline entry creation timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Subject status after the recorded transition. Value enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
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
    /** Free-form details attached to the event. * (Value): string. */
    "custom_details"?: Record<string, string>;
    /**
     * The delivery or fulfillment event recorded by this entry. Value enum: "carrier_scan",
     * "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
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
        | (string & {});
    /** Event identifier assigned by that integration. Example: "warehouse-1842". */
    "external_event_id"?: string;
    /** Status supplied by that integration before mapping to Flint's public status. */
    "external_status"?: string;
    /** Integration that supplied the event. */
    "external_system"?: string;
    /**
     * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
     * "fev_01KEZF7C002XK9D7X3239ERT51".
     */
    "fulfillment_event_id": string;
    /** ID of the fulfillment the event belongs to. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id": string;
    /** Where the event happened, such as `Louisville, KY`. */
    "location_description"?: string;
    /** Human-readable text describing the event. */
    "message"?: string;
    /** Provider event timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at"?: string;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** ID of the order the fulfillment belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * ID of the package the event is attached to. Absent when it isn't attached to a package.
     * Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
    "package_id"?: string;
    /**
     * Subject status before the recorded transition. Value enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided".
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
    /**
     * How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity assigned
     * without marking it fulfilled. - `fulfill`: Moves the quantity from assigned to fulfilled. -
     * `release`: Returns the assigned quantity for reassignment. Value enum: "preserve",
     * "fulfill", "release".
     */
    "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
    /**
     * Why the fulfillment was paused or an appointment was missed, when the transition recorded a
     * reason. Value enum: "address_issue", "customer_no_show", "customer_request", "fraud_review",
     * "inventory_issue", "location_unavailable", "other", "payment_review", "provider_issue",
     * "provider_no_show", "scheduling_error", "scheduling_issue".
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
    /** The note supplied when this action was requested. */
    "reason_message"?: string;
    /** Flint receive timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "received_at"?: string;
    /**
     * ID of the shipment the event is attached to. Absent when it isn't attached to a shipment.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
    /**
     * Which resource current_status and previous_status describe. - `fulfillment`: The status
     * belongs to the fulfillment named by fulfillment_id. - `shipment`: The status belongs to the
     * shipment named by shipment_id. - `package`: The status belongs to the package named by
     * package_id. Value enum: "fulfillment", "shipment", "package".
     */
    "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
};
export type FulfillmentEventCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_notification_behavior": "send" | "suppress" | (string & {});
            "created_at": string;
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
            "custom_details"?: Record<string, string>;
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
                | (string & {});
            "external_event_id"?: string;
            "external_status"?: string;
            "external_system"?: string;
            "fulfillment_event_id": string;
            "fulfillment_id": string;
            "location_description"?: string;
            "message"?: string;
            "occurred_at"?: string;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id"?: string;
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
            "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
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
            "reason_message"?: string;
            "received_at"?: string;
            "shipment_id"?: string;
            "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment_event.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_notification_behavior": "send" | "suppress" | (string & {});
            "created_at": string;
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
            "custom_details"?: Record<string, string>;
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
                | (string & {});
            "external_event_id"?: string;
            "external_status"?: string;
            "external_system"?: string;
            "fulfillment_event_id": string;
            "fulfillment_id": string;
            "location_description"?: string;
            "message"?: string;
            "occurred_at"?: string;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "package_id"?: string;
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
            "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
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
            "reason_message"?: string;
            "received_at"?: string;
            "shipment_id"?: string;
            "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment_event.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment_event.created";
});
/**
 * The `fulfillment_event.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type FulfillmentEventCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_notification_behavior (Required): string. Controls buyer
     * email handling. Omit or use send to send when recipient, template, and deduplication rules
     * allow it. Use suppress when another system owns buyer messaging. Value enum: "send",
     * "suppress". object.created_at (Required): string. Timeline entry creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_status (Optional): string.
     * Subject status after the recorded transition. Value enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.custom_details (Optional): Map of string. Free-form details
     * attached to the event. object.custom_details.* (Value): string. object.event_type
     * (Required): string. The delivery or fulfillment event recorded by this entry. Value enum:
     * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
     * object.external_event_id (Optional): string. Event identifier assigned by that integration.
     * Example: "warehouse-1842". object.external_status (Optional): string. Status supplied by
     * that integration before mapping to Flint's public status. object.external_system (Optional):
     * string. Integration that supplied the event. object.fulfillment_event_id (Required): string.
     * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
     * "fev_01KEZF7C002XK9D7X3239ERT51". object.fulfillment_id (Required): string. ID of the
     * fulfillment the event belongs to. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * object.location_description (Optional): string. Where the event happened, such as
     * `Louisville, KY`. object.message (Optional): string. Human-readable text describing the
     * event. object.occurred_at (Optional): string. Provider event timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary} or
     * null. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order.anyOf[2] (Value): null.
     * object.order_id (Required): string. ID of the order the fulfillment belongs to. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Optional): string. ID of the package
     * the event is attached to. Absent when it isn't attached to a package. Example:
     * "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". object.previous_status (Optional): string. Subject status
     * before the recorded transition. Value enum: "pending", "on_hold", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided". object.quantity_effect
     * (Optional): string. How the transition changes fulfillment quantities. - `preserve`: Keeps
     * the quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from
     * assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment. Value
     * enum: "preserve", "fulfill", "release". object.reason (Optional): string. Why the
     * fulfillment was paused or an appointment was missed, when the transition recorded a reason.
     * Value enum: "address_issue", "customer_no_show", "customer_request", "fraud_review",
     * "inventory_issue", "location_unavailable", "other", "payment_review", "provider_issue",
     * "provider_no_show", "scheduling_error", "scheduling_issue". object.reason_message
     * (Optional): string. The note supplied when this action was requested. object.received_at
     * (Optional): string. Flint receive timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.shipment_id (Optional): string. ID of the shipment the event
     * is attached to. Absent when it isn't attached to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.subject_type (Required): string. Which resource
     * current_status and previous_status describe. - `fulfillment`: The status belongs to the
     * fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment named
     * by shipment_id. - `package`: The status belongs to the package named by package_id. Value
     * enum: "fulfillment", "shipment", "package".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_notification_behavior (Required): string. Controls buyer email handling. Omit or
         * use send to send when recipient, template, and deduplication rules allow it. Use
         * suppress when another system owns buyer messaging. Value enum: "send", "suppress".
         * created_at (Required): string. Timeline entry creation timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". current_status (Optional): string. Subject status after
         * the recorded transition. Value enum: "pending", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
         * "packed", "dispatched", "no_show", "created", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". custom_details (Optional): Map of string. Free-form details attached to the
         * event. custom_details.* (Value): string. event_type (Required): string. The delivery or
         * fulfillment event recorded by this entry. Value enum: "carrier_scan", "status_changed",
         * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
         * "tracking_updated", "exception", "returned", "custom". external_event_id (Optional):
         * string. Event identifier assigned by that integration. Example: "warehouse-1842".
         * external_status (Optional): string. Status supplied by that integration before mapping
         * to Flint's public status. external_system (Optional): string. Integration that supplied
         * the event. fulfillment_event_id (Required): string. Unique identifier for this
         * fulfillment event, prefixed `fev_`. Example: "fev_01KEZF7C002XK9D7X3239ERT51".
         * fulfillment_id (Required): string. ID of the fulfillment the event belongs to. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". location_description (Optional): string. Where the
         * event happened, such as `Louisville, KY`. message (Optional): string. Human-readable
         * text describing the event. occurred_at (Optional): string. Provider event timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. ID of the order the
         * fulfillment belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_id
         * (Optional): string. ID of the package the event is attached to. Absent when it isn't
         * attached to a package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". previous_status
         * (Optional): string. Subject status before the recorded transition. Value enum:
         * "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show",
         * "created", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". quantity_effect (Optional):
         * string. How the transition changes fulfillment quantities. - `preserve`: Keeps the
         * quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from
         * assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment.
         * Value enum: "preserve", "fulfill", "release". reason (Optional): string. Why the
         * fulfillment was paused or an appointment was missed, when the transition recorded a
         * reason. Value enum: "address_issue", "customer_no_show", "customer_request",
         * "fraud_review", "inventory_issue", "location_unavailable", "other", "payment_review",
         * "provider_issue", "provider_no_show", "scheduling_error", "scheduling_issue".
         * reason_message (Optional): string. The note supplied when this action was requested.
         * received_at (Optional): string. Flint receive timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". shipment_id (Optional): string. ID of the shipment the event is
         * attached to. Absent when it isn't attached to a shipment. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". subject_type (Required): string. Which resource
         * current_status and previous_status describe. - `fulfillment`: The status belongs to the
         * fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment
         * named by shipment_id. - `package`: The status belongs to the package named by
         * package_id. Value enum: "fulfillment", "shipment", "package".
         */
        "object": {
            /**
             * Controls buyer email handling. Omit or use send to send when recipient, template,
             * and deduplication rules allow it. Use suppress when another system owns buyer
             * messaging. Value enum: "send", "suppress".
             */
            "buyer_notification_behavior": "send" | "suppress" | (string & {});
            /**
             * Timeline entry creation timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Subject status after the recorded transition. Value enum: "pending", "on_hold",
             * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
             * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
             * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
             * "returned", "voided".
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
            /** Free-form details attached to the event. * (Value): string. */
            "custom_details"?: Record<string, string>;
            /**
             * The delivery or fulfillment event recorded by this entry. Value enum:
             * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "tracking_updated", "exception", "returned",
             * "custom".
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
                | (string & {});
            /** Event identifier assigned by that integration. Example: "warehouse-1842". */
            "external_event_id"?: string;
            /** Status supplied by that integration before mapping to Flint's public status. */
            "external_status"?: string;
            /** Integration that supplied the event. */
            "external_system"?: string;
            /**
             * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
             * "fev_01KEZF7C002XK9D7X3239ERT51".
             */
            "fulfillment_event_id": string;
            /**
             * ID of the fulfillment the event belongs to. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /** Where the event happened, such as `Louisville, KY`. */
            "location_description"?: string;
            /** Human-readable text describing the event. */
            "message"?: string;
            /** Provider event timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at"?: string;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the fulfillment belongs to. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * ID of the package the event is attached to. Absent when it isn't attached to a
             * package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
             */
            "package_id"?: string;
            /**
             * Subject status before the recorded transition. Value enum: "pending", "on_hold",
             * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
             * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
             * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
             * "returned", "voided".
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
            /**
             * How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity
             * assigned without marking it fulfilled. - `fulfill`: Moves the quantity from assigned
             * to fulfilled. - `release`: Returns the assigned quantity for reassignment. Value
             * enum: "preserve", "fulfill", "release".
             */
            "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
            /**
             * Why the fulfillment was paused or an appointment was missed, when the transition
             * recorded a reason. Value enum: "address_issue", "customer_no_show",
             * "customer_request", "fraud_review", "inventory_issue", "location_unavailable",
             * "other", "payment_review", "provider_issue", "provider_no_show", "scheduling_error",
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
            /** The note supplied when this action was requested. */
            "reason_message"?: string;
            /** Flint receive timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * ID of the shipment the event is attached to. Absent when it isn't attached to a
             * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * Which resource current_status and previous_status describe. - `fulfillment`: The
             * status belongs to the fulfillment named by fulfillment_id. - `shipment`: The status
             * belongs to the shipment named by shipment_id. - `package`: The status belongs to the
             * package named by package_id. Value enum: "fulfillment", "shipment", "package".
             */
            "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment_event.created". */
    "event_type"?: "fulfillment_event.created";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `fulfillment_event.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type FulfillmentEventCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_notification_behavior (Required): string. Controls buyer
     * email handling. Omit or use send to send when recipient, template, and deduplication rules
     * allow it. Use suppress when another system owns buyer messaging. Value enum: "send",
     * "suppress". object.created_at (Required): string. Timeline entry creation timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_status (Optional): string.
     * Subject status after the recorded transition. Value enum: "pending", "on_hold",
     * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
     * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
     * "returned", "voided". object.custom_details (Optional): Map of string. Free-form details
     * attached to the event. object.custom_details.* (Value): string. object.event_type
     * (Required): string. The delivery or fulfillment event recorded by this entry. Value enum:
     * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
     * object.external_event_id (Optional): string. Event identifier assigned by that integration.
     * Example: "warehouse-1842". object.external_status (Optional): string. Status supplied by
     * that integration before mapping to Flint's public status. object.external_system (Optional):
     * string. Integration that supplied the event. object.fulfillment_event_id (Required): string.
     * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
     * "fev_01KEZF7C002XK9D7X3239ERT51". object.fulfillment_id (Required): string. ID of the
     * fulfillment the event belongs to. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     * object.location_description (Optional): string. Where the event happened, such as
     * `Louisville, KY`. object.message (Optional): string. Human-readable text describing the
     * event. object.occurred_at (Optional): string. Provider event timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.order (Optional): {@link ExpandedOrderSummary} or
     * null. Present only when `expand` includes `order`; `null` when expanded and there is no
     * related order. object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's
     * summary fields, including status, payment and refund status, and pricing and settlement
     * amounts, returned when the order is expanded. object.order.anyOf[2] (Value): null.
     * object.order_id (Required): string. ID of the order the fulfillment belongs to. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.package_id (Optional): string. ID of the package
     * the event is attached to. Absent when it isn't attached to a package. Example:
     * "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". object.previous_status (Optional): string. Subject status
     * before the recorded transition. Value enum: "pending", "on_hold", "in_progress", "ready",
     * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed",
     * "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery",
     * "delivered", "delivery_attempted", "exception", "returned", "voided". object.quantity_effect
     * (Optional): string. How the transition changes fulfillment quantities. - `preserve`: Keeps
     * the quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from
     * assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment. Value
     * enum: "preserve", "fulfill", "release". object.reason (Optional): string. Why the
     * fulfillment was paused or an appointment was missed, when the transition recorded a reason.
     * Value enum: "address_issue", "customer_no_show", "customer_request", "fraud_review",
     * "inventory_issue", "location_unavailable", "other", "payment_review", "provider_issue",
     * "provider_no_show", "scheduling_error", "scheduling_issue". object.reason_message
     * (Optional): string. The note supplied when this action was requested. object.received_at
     * (Optional): string. Flint receive timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.shipment_id (Optional): string. ID of the shipment the event
     * is attached to. Absent when it isn't attached to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.subject_type (Required): string. Which resource
     * current_status and previous_status describe. - `fulfillment`: The status belongs to the
     * fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment named
     * by shipment_id. - `package`: The status belongs to the package named by package_id. Value
     * enum: "fulfillment", "shipment", "package".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_notification_behavior (Required): string. Controls buyer email handling. Omit or
         * use send to send when recipient, template, and deduplication rules allow it. Use
         * suppress when another system owns buyer messaging. Value enum: "send", "suppress".
         * created_at (Required): string. Timeline entry creation timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". current_status (Optional): string. Subject status after
         * the recorded transition. Value enum: "pending", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
         * "packed", "dispatched", "no_show", "created", "shipped", "in_transit",
         * "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned",
         * "voided". custom_details (Optional): Map of string. Free-form details attached to the
         * event. custom_details.* (Value): string. event_type (Required): string. The delivery or
         * fulfillment event recorded by this entry. Value enum: "carrier_scan", "status_changed",
         * "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted",
         * "tracking_updated", "exception", "returned", "custom". external_event_id (Optional):
         * string. Event identifier assigned by that integration. Example: "warehouse-1842".
         * external_status (Optional): string. Status supplied by that integration before mapping
         * to Flint's public status. external_system (Optional): string. Integration that supplied
         * the event. fulfillment_event_id (Required): string. Unique identifier for this
         * fulfillment event, prefixed `fev_`. Example: "fev_01KEZF7C002XK9D7X3239ERT51".
         * fulfillment_id (Required): string. ID of the fulfillment the event belongs to. Example:
         * "ful_01KEZF7C00F24WVSTTWR1FQX5T". location_description (Optional): string. Where the
         * event happened, such as `Louisville, KY`. message (Optional): string. Human-readable
         * text describing the event. occurred_at (Optional): string. Provider event timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". order (Optional): {@link
         * ExpandedOrderSummary} or null. Present only when `expand` includes `order`; `null` when
         * expanded and there is no related order. order.anyOf[1] (Value): {@link
         * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
         * status, and pricing and settlement amounts, returned when the order is expanded.
         * order.anyOf[2] (Value): null. order_id (Required): string. ID of the order the
         * fulfillment belongs to. Example: "ord_01KEZF7C0054GQKJ142A8X367A". package_id
         * (Optional): string. ID of the package the event is attached to. Absent when it isn't
         * attached to a package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". previous_status
         * (Optional): string. Subject status before the recorded transition. Value enum:
         * "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
         * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show",
         * "created", "shipped", "in_transit", "out_for_delivery", "delivered",
         * "delivery_attempted", "exception", "returned", "voided". quantity_effect (Optional):
         * string. How the transition changes fulfillment quantities. - `preserve`: Keeps the
         * quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from
         * assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment.
         * Value enum: "preserve", "fulfill", "release". reason (Optional): string. Why the
         * fulfillment was paused or an appointment was missed, when the transition recorded a
         * reason. Value enum: "address_issue", "customer_no_show", "customer_request",
         * "fraud_review", "inventory_issue", "location_unavailable", "other", "payment_review",
         * "provider_issue", "provider_no_show", "scheduling_error", "scheduling_issue".
         * reason_message (Optional): string. The note supplied when this action was requested.
         * received_at (Optional): string. Flint receive timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". shipment_id (Optional): string. ID of the shipment the event is
         * attached to. Absent when it isn't attached to a shipment. Example:
         * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". subject_type (Required): string. Which resource
         * current_status and previous_status describe. - `fulfillment`: The status belongs to the
         * fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment
         * named by shipment_id. - `package`: The status belongs to the package named by
         * package_id. Value enum: "fulfillment", "shipment", "package".
         */
        "object": {
            /**
             * Controls buyer email handling. Omit or use send to send when recipient, template,
             * and deduplication rules allow it. Use suppress when another system owns buyer
             * messaging. Value enum: "send", "suppress".
             */
            "buyer_notification_behavior": "send" | "suppress" | (string & {});
            /**
             * Timeline entry creation timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Subject status after the recorded transition. Value enum: "pending", "on_hold",
             * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
             * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
             * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
             * "returned", "voided".
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
            /** Free-form details attached to the event. * (Value): string. */
            "custom_details"?: Record<string, string>;
            /**
             * The delivery or fulfillment event recorded by this entry. Value enum:
             * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery",
             * "delivered", "delivery_attempted", "tracking_updated", "exception", "returned",
             * "custom".
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
                | (string & {});
            /** Event identifier assigned by that integration. Example: "warehouse-1842". */
            "external_event_id"?: string;
            /** Status supplied by that integration before mapping to Flint's public status. */
            "external_status"?: string;
            /** Integration that supplied the event. */
            "external_system"?: string;
            /**
             * Unique identifier for this fulfillment event, prefixed `fev_`. Example:
             * "fev_01KEZF7C002XK9D7X3239ERT51".
             */
            "fulfillment_event_id": string;
            /**
             * ID of the fulfillment the event belongs to. Example:
             * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
             */
            "fulfillment_id": string;
            /** Where the event happened, such as `Louisville, KY`. */
            "location_description"?: string;
            /** Human-readable text describing the event. */
            "message"?: string;
            /** Provider event timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at"?: string;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the order the fulfillment belongs to. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * ID of the package the event is attached to. Absent when it isn't attached to a
             * package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
             */
            "package_id"?: string;
            /**
             * Subject status before the recorded transition. Value enum: "pending", "on_hold",
             * "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted",
             * "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped",
             * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception",
             * "returned", "voided".
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
            /**
             * How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity
             * assigned without marking it fulfilled. - `fulfill`: Moves the quantity from assigned
             * to fulfilled. - `release`: Returns the assigned quantity for reassignment. Value
             * enum: "preserve", "fulfill", "release".
             */
            "quantity_effect"?: "preserve" | "fulfill" | "release" | (string & {});
            /**
             * Why the fulfillment was paused or an appointment was missed, when the transition
             * recorded a reason. Value enum: "address_issue", "customer_no_show",
             * "customer_request", "fraud_review", "inventory_issue", "location_unavailable",
             * "other", "payment_review", "provider_issue", "provider_no_show", "scheduling_error",
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
            /** The note supplied when this action was requested. */
            "reason_message"?: string;
            /** Flint receive timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /**
             * ID of the shipment the event is attached to. Absent when it isn't attached to a
             * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * Which resource current_status and previous_status describe. - `fulfillment`: The
             * status belongs to the fulfillment named by fulfillment_id. - `shipment`: The status
             * belongs to the shipment named by shipment_id. - `package`: The status belongs to the
             * package named by package_id. Value enum: "fulfillment", "shipment", "package".
             */
            "subject_type": "fulfillment" | "shipment" | "package" | (string & {});
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment_event.created". */
    "event_type"?: "fulfillment_event.created";
});
/** A page of `FulfillmentEvent` objects. */
export type FulfillmentEventListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * FulfillmentEvent}. An action recorded during an order's fulfillment.
     */
    "data": Array<FulfillmentEvent>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `FulfillmentEvent` data. */
export type FulfillmentEventResourceResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An action recorded
     * during an order's fulfillment.
     */
    "data": FulfillmentEvent;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type FulfillmentEventsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: order. Expansion requires
     * commerce.orders.read. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentEventsListParams = {
    /** Optional fulfillment ID filter. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id"?: InputValue<string>;
    /** Optional shipment ID filter. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". */
    "shipment_id"?: InputValue<string>;
    /** Optional package ID filter. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". */
    "package_id"?: InputValue<string>;
    /** Optional order ID filter. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by fulfillment event type. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "carrier_scan", "status_changed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception",
     * "returned", "custom". Value enum: "carrier_scan", "status_changed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception",
     * "returned", "custom". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom". anyOf[1][]
     * (Value): string. Value enum: "carrier_scan", "status_changed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception",
     * "returned", "custom". anyOf[2] (Value): string. Value enum: "carrier_scan",
     * "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
     */
    "event_type"?: InputValue<("carrier_scan"
        | "status_changed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "tracking_updated"
        | "exception"
        | "returned"
        | "custom")
        | readonly ("carrier_scan"
        | "status_changed"
        | "shipped"
        | "in_transit"
        | "out_for_delivery"
        | "delivered"
        | "delivery_attempted"
        | "tracking_updated"
        | "exception"
        | "returned"
        | "custom")[]>;
    /** Filter by external system identifier. */
    "external_system"?: InputValue<string>;
    /** Filter by external provider event ID. Example: "warehouse-1842". */
    "external_event_id"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /**
     * Field to sort by. Defaults to received_at; ties are broken by fulfillment_event_id. Default:
     * "received_at". Value enum: "received_at", "occurred_at".
     */
    "sort_by"?: InputValue<"received_at" | "occurred_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id": string | null;
            "delivery_execution_leg_id": string | null;
            "delivery_method_id": string | null;
            "delivery_selection_id": string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Fulfillment>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id": string | null;
            "delivery_execution_leg_id": string | null;
            "delivery_method_id": string | null;
            "delivery_selection_id": string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Fulfillment>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment.failed";
});
/**
 * The `fulfillment.failed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment reached
     * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items
     * (Required): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated to
     * this fulfillment. object.line_items[] (Value): {@link FulfillmentLineItem}. An order line
     * item and quantity included in a fulfillment, with the modifiers applied to it.
     * object.local_delivery_details (Optional): {@link DeliveryFulfillmentDetails}. Courier,
     * delivery window, and handoff details for a local delivery fulfillment. Details of a local
     * delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer. object.location_id
     * (Optional): string. Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_details (Optional): {@link ServiceFulfillmentDetails}. Schedule and
     * completion details for a service fulfillment. Details of a service fulfillment: the
     * scheduled start and end, timezone, completion time, and notes. object.shipment_details
     * (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier. object.shipments (Optional): Array of {@link ExpandedShipmentSummary}.
     * Shipments associated with this fulfillment. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". object.supported_actions (Required): Array of string. Read-only
     * lifecycle actions accepted now, based on the fulfillment, its order payment status, holds,
     * and shipment progress. Empty when none are available. Values name the verb route with
     * hyphens replaced by underscores. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". object.updated_at
     * (Required): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Required): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_execution_leg_id (Required): string or
         * null. Execution leg of the selected delivery option that created this fulfillment.
         * `null` when the merchant created the fulfillment or checkout created it without a
         * delivery quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Required): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id (Required): string or null.
         * Delivery selection that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first
         * ascending and last descending, then by fulfillment_id in the same direction. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". service_details (Optional): {@link
         * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
         * Details of a service fulfillment: the scheduled start and end, timezone, completion
         * time, and notes. shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
         * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
         * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
         * window, timezone, and when the shipment was handed to the carrier. shipments (Optional):
         * Array of {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Required): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
         * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
         * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". supported_actions[]
         * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
         * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
         * "release_hold", "schedule", "start". terminal_at (Optional): string. When the
         * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". type (Required):
         * string. How the items are delivered: shipment, pickup, local delivery, digital delivery,
         * or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
         * updated_at (Required): string. When the fulfillment was last updated, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Example:
             * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id": string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id": string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id": string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id": string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Nulls sort first ascending and last descending, then
             * by fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. [] enum: "accept",
             * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
             * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
             * [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start".
             */
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Fulfillment>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment.failed". */
    "event_type"?: "fulfillment.failed";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `fulfillment.failed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment reached
     * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items
     * (Required): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated to
     * this fulfillment. object.line_items[] (Value): {@link FulfillmentLineItem}. An order line
     * item and quantity included in a fulfillment, with the modifiers applied to it.
     * object.local_delivery_details (Optional): {@link DeliveryFulfillmentDetails}. Courier,
     * delivery window, and handoff details for a local delivery fulfillment. Details of a local
     * delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer. object.location_id
     * (Optional): string. Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_details (Optional): {@link ServiceFulfillmentDetails}. Schedule and
     * completion details for a service fulfillment. Details of a service fulfillment: the
     * scheduled start and end, timezone, completion time, and notes. object.shipment_details
     * (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier. object.shipments (Optional): Array of {@link ExpandedShipmentSummary}.
     * Shipments associated with this fulfillment. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". object.supported_actions (Required): Array of string. Read-only
     * lifecycle actions accepted now, based on the fulfillment, its order payment status, holds,
     * and shipment progress. Empty when none are available. Values name the verb route with
     * hyphens replaced by underscores. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". object.updated_at
     * (Required): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Required): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_execution_leg_id (Required): string or
         * null. Execution leg of the selected delivery option that created this fulfillment.
         * `null` when the merchant created the fulfillment or checkout created it without a
         * delivery quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Required): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id (Required): string or null.
         * Delivery selection that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first
         * ascending and last descending, then by fulfillment_id in the same direction. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". service_details (Optional): {@link
         * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
         * Details of a service fulfillment: the scheduled start and end, timezone, completion
         * time, and notes. shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
         * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
         * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
         * window, timezone, and when the shipment was handed to the carrier. shipments (Optional):
         * Array of {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Required): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
         * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
         * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". supported_actions[]
         * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
         * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
         * "release_hold", "schedule", "start". terminal_at (Optional): string. When the
         * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". type (Required):
         * string. How the items are delivered: shipment, pickup, local delivery, digital delivery,
         * or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
         * updated_at (Required): string. When the fulfillment was last updated, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Example:
             * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id": string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id": string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id": string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id": string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Nulls sort first ascending and last descending, then
             * by fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. [] enum: "accept",
             * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
             * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
             * [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start".
             */
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Fulfillment>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment.failed". */
    "event_type"?: "fulfillment.failed";
});
/** A hold on a fulfillment, with its reason, who placed it, and when it became active. */
export type FulfillmentHold = {
    /** Time the hold became active. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Explanation of the hold suitable for display to the merchant. */
    "display_reason"?: string;
    /** Actor that placed the fulfillment on hold. */
    "held_by"?: string;
    /**
     * Who placed this hold: merchant for the merchant or its integration, or flint for a Flint
     * payment hold. Value enum: "merchant", "flint".
     */
    "initiated_by": "merchant" | "flint" | (string & {});
    /**
     * Status before this hold. Never on_hold or terminal. The release_hold action restores this
     * status. Value enum: "pending", "accepted", "in_progress", "ready", "scheduled", "preparing",
     * "picked", "packed", "dispatched".
     */
    "previous_status": "pending"
        | "accepted"
        | "in_progress"
        | "ready"
        | "scheduled"
        | "preparing"
        | "picked"
        | "packed"
        | "dispatched"
        | (string & {});
    /**
     * Machine-readable reason fulfillment work is paused. Value enum: "payment_review",
     * "inventory_issue", "address_issue", "customer_request", "provider_issue",
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
    /** Additional notes explaining the hold. */
    "reason_notes"?: string;
};
/** The `itemized` variant of `FulfillmentPackagingInput`. */
export type FulfillmentItemizedPackagesRequest = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequest;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequest}. The request body for: Create
     * package. [].buyer_notification_behavior (Optional): string. Controls buyer email handling.
     * Omit or use send to send when recipient, template, and deduplication rules allow it. Use
     * suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. Carrier that handles the package. minLength: 1. [].dimensions
     * (Optional): {@link Dimensions}. Dimensions of the package. Package or item dimensions as
     * `length`, `width`, and `height` in the given `unit`. [].expected_delivery_at (Optional):
     * string or null. When the carrier or merchant expects this package to arrive. Past dates are
     * allowed. Send null to clear it; omit to leave it unchanged on updates and transitions.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". [].external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255. Example: "warehouse-1842". [].external_system
     * (Optional): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1. [].items
     * (Required): Array of {@link CreatePackageItemRequest}. Independent package-item collection.
     * Inline creation uses the child-create shape and commits atomically; edit items through the
     * package item routes after creation. Each order line may appear once. minItems: 1. maxItems:
     * 100. [].items[] (Value): {@link CreatePackageItemRequest}. The request body for: Create
     * package item. [].label_url (Optional): string. HTTPS shipping-label URL supplied by your
     * integration. Non-Flint URLs require external_system for provenance. Flint does not host the
     * label file. minLength: 1. [].metadata (Optional): {@link MetadataMap}. Caller-owned
     * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Caller-owned key-value data
     * for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to
     * 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values
     * total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with
     * flint_ are reserved for Flint. maxProperties: 50. [].return_line_items (Optional): Array of
     * {@link ReturnResolutionLineItemRequest}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}.
     * A return line and the quantity placed in a return shipment or package. [].service_code
     * (Optional): string. Carrier's code for the shipping service used. minLength: 1.
     * [].shipped_at (Optional): string. Package handoff time. Defaults to request time. Only
     * allowed with status shipped. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start as created
     * or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link Weight}. Weight of the package. A weight value in grams, kilograms,
     * ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value): {@link
     * PackageCreateInputCreated}. The `created` variant of `PackageCreateInput`. [].oneOf[2]
     * (Value): {@link PackageCreateInputShipped}. The `shipped` variant of `PackageCreateInput`.
     */
    "packages": Array<({
        /**
         * Independent package-item collection. Inline creation uses the child-create shape and
         * commits atomically; edit items through the package item routes after creation. Each
         * order line may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
         * CreatePackageItemRequest}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequest>;
    })
        & (Exclude<PackageCreateRequest & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "itemized". */
    "packaging": "itemized" | (string & {});
});
/** The `itemized` variant of `FulfillmentPackagingInput`. */
export type FulfillmentItemizedPackagesRequestInput = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequestInput;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequestInput}. The request body for: Create
     * package. [].buyer_notification_behavior (Optional): string. Controls buyer email handling.
     * Omit or use send to send when recipient, template, and deduplication rules allow it. Use
     * suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. Carrier that handles the package. minLength: 1. [].dimensions
     * (Optional): {@link DimensionsRequestInput}. Dimensions of the package. Package or item
     * dimensions as `length`, `width`, and `height` in the given `unit`. [].expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and
     * transitions. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * [].external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. minLength: 1. [].items (Required): Array of {@link
     * CreatePackageItemRequestInput}. Independent package-item collection. Inline creation uses
     * the child-create shape and commits atomically; edit items through the package item routes
     * after creation. Each order line may appear once. minItems: 1. maxItems: 100. [].items[]
     * (Value): {@link CreatePackageItemRequestInput}. The request body for: Create package item.
     * [].label_url (Optional): string. HTTPS shipping-label URL supplied by your integration.
     * Non-Flint URLs require external_system for provenance. Flint does not host the label file.
     * minLength: 1. [].metadata (Optional): {@link MetadataRequestInput}. Caller-owned metadata.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Caller-owned key-value data for a
     * new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256
     * Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at
     * most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are
     * reserved for Flint. maxProperties: 50. [].return_line_items (Optional): Array of {@link
     * ReturnShipmentLineItemAllocationRequestInput}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package. [].service_code (Optional): string. Carrier's code for the
     * shipping service used. minLength: 1. [].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start
     * as created or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link WeightRequestInput}. Weight of the package. A weight value in grams,
     * kilograms, ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value):
     * {@link PackageCreateInputCreatedInput}. The `created` variant of `PackageCreateInput`.
     * [].oneOf[2] (Value): {@link PackageCreateInputShippedInput}. The `shipped` variant of
     * `PackageCreateInput`.
     */
    "packages": Array<({
        /**
         * Independent package-item collection. Inline creation uses the child-create shape and
         * commits atomically; edit items through the package item routes after creation. Each
         * order line may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
         * CreatePackageItemRequestInput}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequestInput>;
    })
        & (Exclude<PackageCreateRequestInput & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "itemized". */
    "packaging": "itemized";
})
    & (({
    "package"?: never;
}));
/** An order line item and quantity included in a fulfillment, with the modifiers applied to it. */
export type FulfillmentLineItem = {
    /**
     * Modifier selections snapshotted from the order line for fulfillment. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    /**
     * Order line whose quantity is allocated to the fulfillment. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/** An order line item and quantity to include when creating a fulfillment. */
export type FulfillmentLineItemRequestInput = {
    /**
     * Order line whose quantity is allocated. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/** A page of `Fulfillment` objects. */
export type FulfillmentListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Fulfillment}. Work required to deliver an order's items.
     */
    "data": Array<Fulfillment>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A message sent about an order's fulfillment. */
export type FulfillmentNotification = {
    /**
     * How Flint sends this notification. - `email`: Sends the notification to recipient_email.
     * Value enum: "email".
     */
    "channel": "email" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "failed_at"?: string;
    /**
     * ID of the fulfillment event that triggered the notification. Example:
     * "fev_01KEZF7C002XK9D7X3239ERT51".
     */
    "fulfillment_event_id"?: string;
    /**
     * ID of the fulfillment the notification is about. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /**
     * Unique identifier for this fulfillment notification, prefixed `fnt_`. Example:
     * "fnt_01KEZF7C00QD91RXQH2E7H9K5E".
     */
    "fulfillment_notification_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * The buyer update this notification communicates. - `fulfillment_ready`: The fulfillment is
     * ready for pickup. - `fulfillment_dispatched`: The fulfillment was dispatched. -
     * `fulfillment_completed`: The fulfillment was completed. - `fulfillment_canceled`: The
     * fulfillment was canceled. - `fulfillment_failed`: The fulfillment failed. -
     * `fulfillment_no_show`: A service appointment was missed. - `fulfillment_shipped`: The
     * fulfillment was shipped. - `fulfillment_delivered`: The fulfillment was delivered. -
     * `shipment_shipped`: A shipment was shipped. - `shipment_out_for_delivery`: A shipment is out
     * for delivery. - `shipment_delivered`: A shipment was delivered. -
     * `shipment_delivery_attempted`: A carrier attempted to deliver a shipment. -
     * `shipment_exception`: A shipment has a delivery exception. - `shipment_returned`: A shipment
     * was returned. Value enum: "fulfillment_ready", "fulfillment_dispatched",
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
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** ID of the order the notification is about. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /**
     * ID of the package the notification is about, when it concerns a package. Example:
     * "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R".
     */
    "package_id"?: string;
    /**
     * ID of the customer the notification was sent to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "recipient_customer_id"?: string;
    /** Email address the notification was sent to. */
    "recipient_email"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "sent_at"?: string;
    /**
     * ID of the shipment the notification is about, when it concerns a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
    /**
     * Whether the notification's email is waiting to send, was sent, failed, or was suppressed.
     * Value enum: "pending", "sent", "failed", "suppressed".
     */
    "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
    /**
     * Why Flint chose not to send this notification. - `source_suppressed`: The originating
     * request suppressed buyer messaging. - `default_suppressed`: The configured default
     * suppressed buyer messaging. - `recipient_missing`: No usable recipient was available. -
     * `template_not_configured`: No notification template was configured. -
     * `merchant_managed_email`: The merchant's integration owns this email. -
     * `recipient_unsubscribed`: The recipient opted out of this notification. -
     * `sandbox_daily_limit_reached`: Not sent because the sandbox reached its daily limit of buyer
     * emails to addresses outside your team. Send to a team address, or wait for the next UTC day.
     * Value enum: "source_suppressed", "default_suppressed", "recipient_missing",
     * "template_not_configured", "merchant_managed_email", "recipient_unsubscribed",
     * "sandbox_daily_limit_reached".
     */
    "suppression_reason"?: "source_suppressed"
        | "default_suppressed"
        | "recipient_missing"
        | "template_not_configured"
        | "merchant_managed_email"
        | "recipient_unsubscribed"
        | "sandbox_daily_limit_reached"
        | (string & {});
    /**
     * What created this notification. - `fulfillment_status_updated`: Created by a fulfillment
     * status transition. - `fulfillment_event_created`: Created by a fulfillment timeline event.
     * Value enum: "fulfillment_status_updated", "fulfillment_event_created".
     */
    "trigger_type": "fulfillment_status_updated" | "fulfillment_event_created" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** A page of `FulfillmentNotification` objects. */
export type FulfillmentNotificationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * FulfillmentNotification}. A message sent about an order's fulfillment.
     */
    "data": Array<FulfillmentNotification>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Opaque token to send as `page_token` to retrieve the next page. Omitted when there is no
     * next page.
     */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `FulfillmentNotification` data. */
export type FulfillmentNotificationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A message sent about an
     * order's fulfillment.
     */
    "data": FulfillmentNotification;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type FulfillmentNotificationsGetParams = FulfillmentEventsGetParams;
export type FulfillmentNotificationsListParams = {
    /** Optional fulfillment ID filter. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
    "fulfillment_id"?: InputValue<string>;
    /** Optional order ID filter. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /** Optional fulfillment event ID filter. Example: "fev_01KEZF7C002XK9D7X3239ERT51". */
    "fulfillment_event_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by notification channel. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "email". Value enum: "email". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "email". anyOf[1][] (Value): string. Value enum: "email". anyOf[2]
     * (Value): string. Value enum: "email".
     */
    "channel"?: InputValue<("email") | readonly ("email")[]>;
    /**
     * Filter by notification status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "pending", "sent", "failed", "suppressed". Value enum: "pending",
     * "sent", "failed", "suppressed". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "pending", "sent", "failed", "suppressed". anyOf[1][] (Value): string. Value enum:
     * "pending", "sent", "failed", "suppressed". anyOf[2] (Value): string. Value enum: "pending",
     * "sent", "failed", "suppressed".
     */
    "status"?: InputValue<("pending" | "sent" | "failed" | "suppressed")
        | readonly ("pending" | "sent" | "failed" | "suppressed")[]>;
    /**
     * Filter by notification type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered",
     * "fulfillment_dispatched", "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready",
     * "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted",
     * "shipment_exception", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped".
     * Value enum: "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered",
     * "fulfillment_dispatched", "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready",
     * "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted",
     * "shipment_exception", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "fulfillment_canceled",
     * "fulfillment_completed", "fulfillment_delivered", "fulfillment_dispatched",
     * "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped",
     * "shipment_delivered", "shipment_delivery_attempted", "shipment_exception",
     * "shipment_out_for_delivery", "shipment_returned", "shipment_shipped". anyOf[1][] (Value):
     * string. Value enum: "fulfillment_canceled", "fulfillment_completed",
     * "fulfillment_delivered", "fulfillment_dispatched", "fulfillment_failed",
     * "fulfillment_no_show", "fulfillment_ready", "fulfillment_shipped", "shipment_delivered",
     * "shipment_delivery_attempted", "shipment_exception", "shipment_out_for_delivery",
     * "shipment_returned", "shipment_shipped". anyOf[2] (Value): string. Value enum:
     * "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered",
     * "fulfillment_dispatched", "fulfillment_failed", "fulfillment_no_show", "fulfillment_ready",
     * "fulfillment_shipped", "shipment_delivered", "shipment_delivery_attempted",
     * "shipment_exception", "shipment_out_for_delivery", "shipment_returned", "shipment_shipped".
     */
    "notification_type"?: InputValue<("fulfillment_canceled"
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
        | "shipment_shipped")
        | readonly ("fulfillment_canceled"
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
        | "shipment_shipped")[]>;
    /**
     * Include related objects in the response. Supported expansions: order. Include the requested
     * related resources using scoped batch reads for this page. Each relationship requires its
     * existing target read scopes. Expansion changes the representation without changing
     * pagination tokens. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
/**
 * The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
 * when it occurred.
 */
export type FulfillmentOutcome = {
    /** Additional notes about the fulfillment outcome. */
    "notes"?: string;
    /** Time the terminal outcome occurred. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * Recorded fulfillment outcome, such as a missed service appointment. Value enum: "no_show".
     */
    "outcome_type": "no_show" | (string & {});
    /**
     * Machine-readable reason for the recorded outcome. Value enum: "customer_no_show",
     * "provider_no_show", "location_unavailable", "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
};
/**
 * Creates an outbound shipment with one package using `packaging: single_package`, or 1 to 20
 * packages with explicit items using `packaging: itemized`. External reference and metadata are
 * optional.
 */
export type FulfillmentPackagingRequest = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequest;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequest}. The request body for: Create
     * package. [].buyer_notification_behavior (Optional): string. Controls buyer email handling.
     * Omit or use send to send when recipient, template, and deduplication rules allow it. Use
     * suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. Carrier that handles the package. minLength: 1. [].dimensions
     * (Optional): {@link Dimensions}. Dimensions of the package. Package or item dimensions as
     * `length`, `width`, and `height` in the given `unit`. [].expected_delivery_at (Optional):
     * string or null. When the carrier or merchant expects this package to arrive. Past dates are
     * allowed. Send null to clear it; omit to leave it unchanged on updates and transitions.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". [].external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255. Example: "warehouse-1842". [].external_system
     * (Optional): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1. [].items
     * (Required): Array of {@link CreatePackageItemRequest}. Independent package-item collection.
     * Inline creation uses the child-create shape and commits atomically; edit items through the
     * package item routes after creation. Each order line may appear once. minItems: 1. maxItems:
     * 100. [].items[] (Value): {@link CreatePackageItemRequest}. The request body for: Create
     * package item. [].label_url (Optional): string. HTTPS shipping-label URL supplied by your
     * integration. Non-Flint URLs require external_system for provenance. Flint does not host the
     * label file. minLength: 1. [].metadata (Optional): {@link MetadataMap}. Caller-owned
     * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Caller-owned key-value data
     * for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to
     * 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values
     * total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with
     * flint_ are reserved for Flint. maxProperties: 50. [].return_line_items (Optional): Array of
     * {@link ReturnResolutionLineItemRequest}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}.
     * A return line and the quantity placed in a return shipment or package. [].service_code
     * (Optional): string. Carrier's code for the shipping service used. minLength: 1.
     * [].shipped_at (Optional): string. Package handoff time. Defaults to request time. Only
     * allowed with status shipped. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start as created
     * or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link Weight}. Weight of the package. A weight value in grams, kilograms,
     * ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value): {@link
     * PackageCreateInputCreated}. The `created` variant of `PackageCreateInput`. [].oneOf[2]
     * (Value): {@link PackageCreateInputShipped}. The `shipped` variant of `PackageCreateInput`.
     */
    "packages"?: Array<({
        /**
         * Independent package-item collection. Inline creation uses the child-create shape and
         * commits atomically; edit items through the package item routes after creation. Each
         * order line may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
         * CreatePackageItemRequest}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequest>;
    })
        & (Exclude<PackageCreateRequest & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "single_package", "itemized". */
    "packaging": "single_package" | "itemized" | (string & {});
})
    & ((Exclude<FulfillmentSinglePackageRequest & object, readonly unknown[]>)
    | (Exclude<FulfillmentItemizedPackagesRequest & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Creates an outbound shipment with one package using `packaging: single_package`, or 1 to 20
 * packages with explicit items using `packaging: itemized`. External reference and metadata are
 * optional.
 */
export type FulfillmentPackagingRequestInput = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package"?: SinglePackageCreateRequestInput;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequestInput}. The request body for: Create
     * package. [].buyer_notification_behavior (Optional): string. Controls buyer email handling.
     * Omit or use send to send when recipient, template, and deduplication rules allow it. Use
     * suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. Carrier that handles the package. minLength: 1. [].dimensions
     * (Optional): {@link DimensionsRequestInput}. Dimensions of the package. Package or item
     * dimensions as `length`, `width`, and `height` in the given `unit`. [].expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and
     * transitions. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * [].external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. minLength: 1. [].items (Required): Array of {@link
     * CreatePackageItemRequestInput}. Independent package-item collection. Inline creation uses
     * the child-create shape and commits atomically; edit items through the package item routes
     * after creation. Each order line may appear once. minItems: 1. maxItems: 100. [].items[]
     * (Value): {@link CreatePackageItemRequestInput}. The request body for: Create package item.
     * [].label_url (Optional): string. HTTPS shipping-label URL supplied by your integration.
     * Non-Flint URLs require external_system for provenance. Flint does not host the label file.
     * minLength: 1. [].metadata (Optional): {@link MetadataRequestInput}. Caller-owned metadata.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Caller-owned key-value data for a
     * new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256
     * Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at
     * most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are
     * reserved for Flint. maxProperties: 50. [].return_line_items (Optional): Array of {@link
     * ReturnShipmentLineItemAllocationRequestInput}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package. [].service_code (Optional): string. Carrier's code for the
     * shipping service used. minLength: 1. [].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start
     * as created or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link WeightRequestInput}. Weight of the package. A weight value in grams,
     * kilograms, ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value):
     * {@link PackageCreateInputCreatedInput}. The `created` variant of `PackageCreateInput`.
     * [].oneOf[2] (Value): {@link PackageCreateInputShippedInput}. The `shipped` variant of
     * `PackageCreateInput`.
     */
    "packages"?: Array<({
        /**
         * Independent package-item collection. Inline creation uses the child-create shape and
         * commits atomically; edit items through the package item routes after creation. Each
         * order line may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
         * CreatePackageItemRequestInput}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequestInput>;
    })
        & (Exclude<PackageCreateRequestInput & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "single_package", "itemized". */
    "packaging": "single_package" | "itemized";
})
    & ((Exclude<FulfillmentSinglePackageRequestInput & object, readonly unknown[]>)
    | (Exclude<FulfillmentItemizedPackagesRequestInput & object, readonly unknown[]>));
/** The recipient of a fulfillment, with name, email, phone, address, and handling instructions. */
export type FulfillmentRecipient = {
    /**
     * Postal address where the recipient receives the items. A postal address. Every address has
     * country. Addresses Flint checked as complete (customer and saved addresses, merchant,
     * location, invoice, order delivery destination, tax identity, fulfillment recipient and
     * pickup addresses) always have line1 and city, and US ones always have state and postal_code.
     * Delivery quote destinations, buyer locations and postal-code tax locations hold only what
     * was provided, such as postal_code and country.
     */
    "address"?: Address;
    /** Recipient's contact email address. */
    "email"?: string;
    /**
     * Instructions for handling the recipient's order. For a pickup that checkout creates, this is
     * the note the buyer left for the store, such as the car to look for.
     */
    "instructions"?: string;
    /** Recipient's name for delivery or pickup. */
    "name"?: string;
    /** Recipient's contact phone number. */
    "phone"?: string;
};
/**
 * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
 * address, and handling instructions.
 */
export type FulfillmentRecipientRequest = {
    /**
     * Postal address where the recipient receives the items. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "address"?: AddressRequest;
    /** Recipient's contact email address. minLength: 1. */
    "email"?: string;
    /**
     * Instructions for handling the recipient's order. For a pickup that checkout creates, this is
     * the note the buyer left for the store, such as the car to look for. minLength: 1.
     */
    "instructions"?: string;
    /** Recipient's name for delivery or pickup. minLength: 1. */
    "name"?: string;
    /** Recipient's contact phone number. minLength: 1. */
    "phone"?: string;
};
/**
 * Recipient details you supply when creating or updating a fulfillment: name, email, phone,
 * address, and handling instructions.
 */
export type FulfillmentRecipientRequestInput = {
    /**
     * Postal address where the recipient receives the items. A complete postal address. State and
     * postal_code are required for US addresses and optional for other countries. Send null or
     * omit line2, state, and postal_code when the address has none.
     */
    "address"?: AddressRequestInput;
    /** Recipient's contact email address. minLength: 1. */
    "email"?: string;
    /**
     * Instructions for handling the recipient's order. For a pickup that checkout creates, this is
     * the note the buyer left for the store, such as the car to look for. minLength: 1.
     */
    "instructions"?: string;
    /** Recipient's name for delivery or pickup. minLength: 1. */
    "name"?: string;
    /** Recipient's contact phone number. minLength: 1. */
    "phone"?: string;
};
/** A response containing `Fulfillment` data. */
export type FulfillmentResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Work required to deliver
     * an order's items.
     */
    "data": Fulfillment;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, used to correlate logs and support requests. maxLength: 128.
     * pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Merchant fulfillment settings, including whether fulfillments require approval
 * (`approval_required`).
 */
export type FulfillmentSettings = {
    /**
     * Whether a new fulfillment must be accepted before it can move into preparation, movement, or
     * completion. Defaults to false.
     */
    "approval_required"?: boolean;
};
/**
 * Merchant fulfillment settings, including whether fulfillments require approval
 * (`approval_required`).
 */
export type FulfillmentSettingsRequestInput = FulfillmentSettings;
/** The `single_package` variant of `FulfillmentPackagingInput`. */
export type FulfillmentSinglePackageRequest = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package": SinglePackageCreateRequest;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequest}. The request body for: Create
     * package. [].buyer_notification_behavior (Optional): string. Controls buyer email handling.
     * Omit or use send to send when recipient, template, and deduplication rules allow it. Use
     * suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. Carrier that handles the package. minLength: 1. [].dimensions
     * (Optional): {@link Dimensions}. Dimensions of the package. Package or item dimensions as
     * `length`, `width`, and `height` in the given `unit`. [].expected_delivery_at (Optional):
     * string or null. When the carrier or merchant expects this package to arrive. Past dates are
     * allowed. Send null to clear it; omit to leave it unchanged on updates and transitions.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". [].external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * Requires external_system. External references are not unique. Use Idempotency-Key for
     * retries. minLength: 1. maxLength: 255. Example: "warehouse-1842". [].external_system
     * (Optional): string. Name of the external system that external_reference_id belongs to.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1. [].items
     * (Required): Array of {@link CreatePackageItemRequest}. Independent package-item collection.
     * Inline creation uses the child-create shape and commits atomically; edit items through the
     * package item routes after creation. Each order line may appear once. minItems: 1. maxItems:
     * 100. [].items[] (Value): {@link CreatePackageItemRequest}. The request body for: Create
     * package item. [].label_url (Optional): string. HTTPS shipping-label URL supplied by your
     * integration. Non-Flint URLs require external_system for provenance. Flint does not host the
     * label file. minLength: 1. [].metadata (Optional): {@link MetadataMap}. Caller-owned
     * metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint,
     * are not returned, and cannot be written through the public API. Caller-owned key-value data
     * for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to
     * 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values
     * total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with
     * flint_ are reserved for Flint. maxProperties: 50. [].return_line_items (Optional): Array of
     * {@link ReturnResolutionLineItemRequest}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link ReturnResolutionLineItemRequest}.
     * A return line and the quantity placed in a return shipment or package. [].service_code
     * (Optional): string. Carrier's code for the shipping service used. minLength: 1.
     * [].shipped_at (Optional): string. Package handoff time. Defaults to request time. Only
     * allowed with status shipped. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start as created
     * or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link Weight}. Weight of the package. A weight value in grams, kilograms,
     * ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value): {@link
     * PackageCreateInputCreated}. The `created` variant of `PackageCreateInput`. [].oneOf[2]
     * (Value): {@link PackageCreateInputShipped}. The `shipped` variant of `PackageCreateInput`.
     */
    "packages"?: Array<({
        /**
         * Independent package-item collection. Inline creation uses the child-create shape and
         * commits atomically; edit items through the package item routes after creation. Each
         * order line may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
         * CreatePackageItemRequest}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequest>;
    })
        & (Exclude<PackageCreateRequest & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "single_package". */
    "packaging": "single_package" | (string & {});
});
/** The `single_package` variant of `FulfillmentPackagingInput`. */
export type FulfillmentSinglePackageRequestInput = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Name of the external system that `external_reference_id` belongs to. minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The one package that holds every submitted line quantity. The single package created with a
     * shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to
     * created or shipped; items and return_line_items are not accepted.
     */
    "package": SinglePackageCreateRequestInput;
    /**
     * Packages for an itemized shipment, from 1 to 20, each listing the items it holds. minItems:
     * 1. maxItems: 20. [] (Value): {@link PackageCreateRequestInput}. The request body for: Create
     * package. [].buyer_notification_behavior (Optional): string. Controls buyer email handling.
     * Omit or use send to send when recipient, template, and deduplication rules allow it. Use
     * suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. Carrier that handles the package. minLength: 1. [].dimensions
     * (Optional): {@link DimensionsRequestInput}. Dimensions of the package. Package or item
     * dimensions as `length`, `width`, and `height` in the given `unit`. [].expected_delivery_at
     * (Optional): string or null. When the carrier or merchant expects this package to arrive.
     * Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and
     * transitions. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. Example: "warehouse-1842".
     * [].external_system (Optional): string. Name of the external system that
     * external_reference_id belongs to. External references are not unique. Use Idempotency-Key
     * for retries. minLength: 1. [].items (Required): Array of {@link
     * CreatePackageItemRequestInput}. Independent package-item collection. Inline creation uses
     * the child-create shape and commits atomically; edit items through the package item routes
     * after creation. Each order line may appear once. minItems: 1. maxItems: 100. [].items[]
     * (Value): {@link CreatePackageItemRequestInput}. The request body for: Create package item.
     * [].label_url (Optional): string. HTTPS shipping-label URL supplied by your integration.
     * Non-Flint URLs require external_system for provenance. Flint does not host the label file.
     * minLength: 1. [].metadata (Optional): {@link MetadataRequestInput}. Caller-owned metadata.
     * Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not
     * returned, and cannot be written through the public API. Caller-owned key-value data for a
     * new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256
     * Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at
     * most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are
     * reserved for Flint. maxProperties: 50. [].return_line_items (Optional): Array of {@link
     * ReturnShipmentLineItemAllocationRequestInput}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package. [].service_code (Optional): string. Carrier's code for the
     * shipping service used. minLength: 1. [].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z". [].status (Required): string. Outbound packages can start
     * as created or shipped. Return packages must start as created, omit items, and include
     * return_line_items. Use mark_shipped after the buyer hands over the return package. Value
     * enum: "created", "shipped". [].status_reason (Optional): string. Additional explanation of
     * the package's starting status. minLength: 1. [].tracking_number (Optional): string. Carrier
     * tracking number for the package. minLength: 1. [].tracking_url (Optional): string. Absolute
     * HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight
     * (Optional): {@link WeightRequestInput}. Weight of the package. A weight value in grams,
     * kilograms, ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value):
     * {@link PackageCreateInputCreatedInput}. The `created` variant of `PackageCreateInput`.
     * [].oneOf[2] (Value): {@link PackageCreateInputShippedInput}. The `shipped` variant of
     * `PackageCreateInput`.
     */
    "packages"?: Array<({
        /**
         * Independent package-item collection. Inline creation uses the child-create shape and
         * commits atomically; edit items through the package item routes after creation. Each
         * order line may appear once. minItems: 1. maxItems: 100. [] (Value): {@link
         * CreatePackageItemRequestInput}. The request body for: Create package item.
         */
        "items": Array<CreatePackageItemRequestInput>;
    })
        & (Exclude<PackageCreateRequestInput & object, readonly unknown[]>)>;
    /** How the shipment's packages are described. Value enum: "single_package". */
    "packaging": "single_package";
})
    & (({
    "packages"?: never;
}));
export type FulfillmentUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id": string | null;
            "delivery_execution_leg_id": string | null;
            "delivery_method_id": string | null;
            "delivery_selection_id": string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Fulfillment>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "fulfillment.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "active_hold"?: FulfillmentHold;
            "charges"?: Array<FulfillmentChargeLink>;
            "completed_at"?: string;
            "created_at": string;
            "customer_id"?: string;
            "delivery_choice_group_id": string | null;
            "delivery_execution_leg_id": string | null;
            "delivery_method_id": string | null;
            "delivery_selection_id": string | null;
            "device_id"?: string;
            "digital_details"?: DigitalFulfillmentDetails;
            "dispatched_at"?: string;
            "external_reference_id"?: string;
            "fulfillment_id": string;
            "line_items": Array<FulfillmentLineItem>;
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            "location_id"?: string;
            "metadata"?: MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "order_number"?: string;
            "outcome"?: FulfillmentOutcome;
            "packages"?: Array<ExpandedPackageSummary>;
            "packed_at"?: string;
            "picked_at"?: string;
            "pickup_details"?: PickupFulfillmentDetails;
            "recipient"?: FulfillmentRecipient;
            "scheduled_start_at": string | null;
            "service_details"?: ServiceFulfillmentDetails;
            "shipment_details"?: ShipmentFulfillmentDetails;
            "shipments"?: Array<ExpandedShipmentSummary>;
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
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            "terminal_at"?: string;
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Fulfillment>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "fulfillment.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "fulfillment.updated";
});
/**
 * The `fulfillment.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FulfillmentUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment reached
     * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items
     * (Required): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated to
     * this fulfillment. object.line_items[] (Value): {@link FulfillmentLineItem}. An order line
     * item and quantity included in a fulfillment, with the modifiers applied to it.
     * object.local_delivery_details (Optional): {@link DeliveryFulfillmentDetails}. Courier,
     * delivery window, and handoff details for a local delivery fulfillment. Details of a local
     * delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer. object.location_id
     * (Optional): string. Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_details (Optional): {@link ServiceFulfillmentDetails}. Schedule and
     * completion details for a service fulfillment. Details of a service fulfillment: the
     * scheduled start and end, timezone, completion time, and notes. object.shipment_details
     * (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier. object.shipments (Optional): Array of {@link ExpandedShipmentSummary}.
     * Shipments associated with this fulfillment. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". object.supported_actions (Required): Array of string. Read-only
     * lifecycle actions accepted now, based on the fulfillment, its order payment status, holds,
     * and shipment progress. Empty when none are available. Values name the verb route with
     * hyphens replaced by underscores. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". object.updated_at
     * (Required): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Required): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_execution_leg_id (Required): string or
         * null. Execution leg of the selected delivery option that created this fulfillment.
         * `null` when the merchant created the fulfillment or checkout created it without a
         * delivery quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Required): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id (Required): string or null.
         * Delivery selection that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first
         * ascending and last descending, then by fulfillment_id in the same direction. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". service_details (Optional): {@link
         * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
         * Details of a service fulfillment: the scheduled start and end, timezone, completion
         * time, and notes. shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
         * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
         * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
         * window, timezone, and when the shipment was handed to the carrier. shipments (Optional):
         * Array of {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Required): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
         * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
         * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". supported_actions[]
         * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
         * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
         * "release_hold", "schedule", "start". terminal_at (Optional): string. When the
         * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". type (Required):
         * string. How the items are delivered: shipment, pickup, local delivery, digital delivery,
         * or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
         * updated_at (Required): string. When the fulfillment was last updated, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Example:
             * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id": string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id": string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id": string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id": string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Nulls sort first ascending and last descending, then
             * by fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. [] enum: "accept",
             * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
             * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
             * [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start".
             */
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Fulfillment>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "fulfillment.updated". */
    "event_type"?: "fulfillment.updated";
    /**
     *  environment_grant_id (Required): string. The grant authorizing delivery from this merchant
     * environment. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". merchant_id (Required): string. The
     * merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". mode (Required):
     * string. Whether the installed merchant event came from live mode or a sandbox. Value enum:
     * "test", "live". partner_app_install_id (Required): string. The install connecting the
     * merchant to the partner app. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". sandbox_id
     * (Optional): string. The sandbox the event came from, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "source"?: ({
        /**
         * The grant authorizing delivery from this merchant environment. Example:
         * "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
         */
        "environment_grant_id": string;
        /** The merchant the event concerns. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
        "merchant_id": string;
        /**
         * Whether the installed merchant event came from live mode or a sandbox. Value enum:
         * "test", "live".
         */
        "mode": "test" | "live" | (string & {});
        /**
         * The install connecting the merchant to the partner app. Example:
         * "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
         */
        "partner_app_install_id": string;
        /**
         * The sandbox the event came from, present only in test mode. Example:
         * "test_01KEZF7C00JC77HTMTB2XHNPE0".
         */
        "sandbox_id"?: string;
    });
});
/**
 * The `fulfillment.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.active_hold (Optional): {@link FulfillmentHold}. Current hold
     * details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason,
     * who placed it, and when it became active. object.charges (Optional): Array of {@link
     * FulfillmentChargeLink}. Order charges associated with this fulfillment. object.charges[]
     * (Value): {@link FulfillmentChargeLink}. Links a fulfillment to an order charge by
     * `order_charge_id`. object.completed_at (Optional): string. When the fulfillment was
     * completed. Mirrors the completion time for its type: delivered_at for shipment, local
     * delivery, and digital fulfillments, picked_up_at for pickup, and
     * service_details.completed_at for service fulfillments. Omitted until a completion time is
     * recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required):
     * string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.customer_id (Optional): string. Customer receiving this
     * fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.delivery_choice_group_id (Required): string or null. Delivery choice group that
     * created this fulfillment. `null` when the merchant created the fulfillment or checkout
     * created it without a delivery quote. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     * object.delivery_execution_leg_id (Required): string or null. Execution leg of the selected
     * delivery option that created this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Example:
     * "dleg_01KEZF7C00VB59BKTRC8W4KR4M". object.delivery_method_id (Required): string or null.
     * Delivery method chosen for this fulfillment. `null` when the merchant created the
     * fulfillment or checkout created it without a delivery quote. Also `null` when it was created
     * before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     * object.delivery_selection_id (Required): string or null. Delivery selection that created
     * this fulfillment. `null` when the merchant created the fulfillment or checkout created it
     * without a delivery quote. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". object.device_id
     * (Optional): string. Device associated with the fulfillment, when one is recorded. Example:
     * "dev_01KEZF7C0051ZP8MZSGHP989F6". object.digital_details (Optional): {@link
     * DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment.
     * Details of a digital fulfillment: when it was delivered (`delivered_at`) and its
     * `delivery_url`. object.dispatched_at (Optional): string. First time this fulfillment reached
     * dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". object.external_reference_id
     * (Optional): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255. Example: "warehouse-1842". object.fulfillment_id (Required): string. Stable
     * identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". object.line_items
     * (Required): Array of {@link FulfillmentLineItem}. Order lines and quantities allocated to
     * this fulfillment. object.line_items[] (Value): {@link FulfillmentLineItem}. An order line
     * item and quantity included in a fulfillment, with the modifiers applied to it.
     * object.local_delivery_details (Optional): {@link DeliveryFulfillmentDetails}. Courier,
     * delivery window, and handoff details for a local delivery fulfillment. Details of a local
     * delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are
     * omitted for credentials that don't act for the verified customer. object.location_id
     * (Optional): string. Merchant location responsible for this fulfillment. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.metadata (Optional): {@link MetadataMap}.
     * Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null.
     * Order summary returned when the order relationship is expanded. Present only when `expand`
     * includes `order`; `null` when expanded and there is no related order. object.order.anyOf[1]
     * (Value): {@link ExpandedOrderSummary}. An order's summary fields, including status, payment
     * and refund status, and pricing and settlement amounts, returned when the order is expanded.
     * object.order.anyOf[2] (Value): null. object.order_id (Required): string. Order whose items
     * this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". object.order_number
     * (Optional): string. Human-readable number of the order this fulfillment belongs to. Omitted
     * when the order has no number. object.outcome (Optional): {@link FulfillmentOutcome}.
     * Terminal outcome details. Present exactly when status is no_show. The terminal outcome
     * recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * object.packages (Optional): Array of {@link ExpandedPackageSummary}. Packages associated
     * with this fulfillment. object.packages[] (Value): {@link ExpandedPackageSummary}. A
     * package's summary fields, including carrier, tracking, status, and supported actions,
     * returned when the package is expanded. object.packed_at (Optional): string. First time this
     * fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.picked_at (Optional): string. First time this fulfillment reached picked. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.pickup_details (Optional): {@link
     * PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup
     * fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and
     * instructions name the store the buyer chose and the delivery method's pickup instructions.
     * The note the buyer left for the store is in recipient.instructions. object.recipient
     * (Optional): {@link FulfillmentRecipient}. Omitted for a checkout session credential that
     * doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name,
     * email, phone, address, and handling instructions. object.scheduled_start_at (Required):
     * string or null. Derived start of the service schedule or pickup, local delivery, or shipment
     * window. Null when no schedule is booked, including digital fulfillments. Details remain the
     * authoritative schedule inputs. Nulls sort first ascending and last descending, then by
     * fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_details (Optional): {@link ServiceFulfillmentDetails}. Schedule and
     * completion details for a service fulfillment. Details of a service fulfillment: the
     * scheduled start and end, timezone, completion time, and notes. object.shipment_details
     * (Optional): {@link ShipmentFulfillmentDetails}. Shipping schedule and ship time for a
     * shipment fulfillment. Present only on shipment fulfillments with at least one value. Details
     * of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed
     * to the carrier. object.shipments (Optional): Array of {@link ExpandedShipmentSummary}.
     * Shipments associated with this fulfillment. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Current fulfillment lifecycle status. Read supported_actions for available transitions. -
     * `pending`: Work has not started and has not been accepted. Approval may be required before
     * work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. -
     * `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a
     * supported forward action. - `in_progress`: Work has started and is not yet ready or
     * complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. -
     * `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was
     * intentionally canceled and will not continue. - `failed`: The fulfillment could not be
     * completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The
     * fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or
     * provider preparation is underway. - `picked`: The assigned items have been picked. -
     * `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its
     * origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome
     * for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
     * "dispatched", "no_show". object.supported_actions (Required): Array of string. Read-only
     * lifecycle actions accepted now, based on the fulfillment, its order payment status, holds,
     * and shipment progress. Empty when none are available. Values name the verb route with
     * hyphens replaced by underscores. [] enum: "accept", "cancel", "complete", "dispatch",
     * "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
     * "mark_ready", "release_hold", "schedule", "start". object.supported_actions[] (Value):
     * string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
     * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
     * "release_hold", "schedule", "start". object.terminal_at (Optional): string. When the
     * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records
     * the state transition; completed_at records completion evidence supplied for the fulfillment.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.type (Required): string. How the
     * items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value
     * enum: "shipment", "pickup", "local_delivery", "digital", "service". object.updated_at
     * (Required): string. When the fulfillment was last updated, in RFC3339 format. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.version (Required): integer. Monotonic
     * fulfillment version for expected_version checks. Format: uint64. minimum: 1.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * active_hold (Optional): {@link FulfillmentHold}. Current hold details. Present exactly
         * when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and
         * when it became active. charges (Optional): Array of {@link FulfillmentChargeLink}. Order
         * charges associated with this fulfillment. charges[] (Value): {@link
         * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
         * completed_at (Optional): string. When the fulfillment was completed. Mirrors the
         * completion time for its type: delivered_at for shipment, local delivery, and digital
         * fulfillments, picked_up_at for pickup, and service_details.completed_at for service
         * fulfillments. Omitted until a completion time is recorded. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. When the fulfillment was created,
         * in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". customer_id
         * (Optional): string. Customer receiving this fulfillment, when one is set. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". delivery_choice_group_id (Required): string or null.
         * Delivery choice group that created this fulfillment. `null` when the merchant created
         * the fulfillment or checkout created it without a delivery quote. Example:
         * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". delivery_execution_leg_id (Required): string or
         * null. Execution leg of the selected delivery option that created this fulfillment.
         * `null` when the merchant created the fulfillment or checkout created it without a
         * delivery quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". delivery_method_id
         * (Required): string or null. Delivery method chosen for this fulfillment. `null` when the
         * merchant created the fulfillment or checkout created it without a delivery quote. Also
         * `null` when it was created before this field was added. Example:
         * "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". delivery_selection_id (Required): string or null.
         * Delivery selection that created this fulfillment. `null` when the merchant created the
         * fulfillment or checkout created it without a delivery quote. Example:
         * "dsel_01KEZF7C00QC35XBXVXQSCEB2D". device_id (Optional): string. Device associated with
         * the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
         * digital_details (Optional): {@link DigitalFulfillmentDetails}. Delivery URL and
         * completion time for a digital fulfillment. Details of a digital fulfillment: when it was
         * delivered (`delivered_at`) and its `delivery_url`. dispatched_at (Optional): string.
         * First time this fulfillment reached dispatched. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". fulfillment_id (Required): string. Stable identifier of the
         * fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". line_items (Required): Array of
         * {@link FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment.
         * line_items[] (Value): {@link FulfillmentLineItem}. An order line item and quantity
         * included in a fulfillment, with the modifiers applied to it. local_delivery_details
         * (Optional): {@link DeliveryFulfillmentDetails}. Courier, delivery window, and handoff
         * details for a local delivery fulfillment. Details of a local delivery fulfillment:
         * courier, timing window, instructions, and tracking. Some fields are omitted for
         * credentials that don't act for the verified customer. location_id (Optional): string.
         * Merchant location responsible for this fulfillment. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". metadata (Optional): {@link MetadataMap}. Caller-owned
         * key-value metadata associated with the fulfillment. Caller-owned key-value data stored
         * on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
         * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before
         * those limits may not satisfy them. order (Optional): {@link ExpandedOrderSummary} or
         * null. Order summary returned when the order relationship is expanded. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. Order whose items this fulfillment delivers. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". order_number (Optional): string. Human-readable number
         * of the order this fulfillment belongs to. Omitted when the order has no number. outcome
         * (Optional): {@link FulfillmentOutcome}. Terminal outcome details. Present exactly when
         * status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show,
         * with its reason, notes, and when it occurred. packages (Optional): Array of {@link
         * ExpandedPackageSummary}. Packages associated with this fulfillment. packages[] (Value):
         * {@link ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
         * status, and supported actions, returned when the package is expanded. packed_at
         * (Optional): string. First time this fulfillment reached packed. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". picked_at (Optional): string. First time this
         * fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * pickup_details (Optional): {@link PickupFulfillmentDetails}. Pickup window, pickup mode,
         * and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout
         * creates, location_name, address, and instructions name the store the buyer chose and the
         * delivery method's pickup instructions. The note the buyer left for the store is in
         * recipient.instructions. recipient (Optional): {@link FulfillmentRecipient}. Omitted for
         * a checkout session credential that doesn't act for the customer the buyer verified. The
         * recipient of a fulfillment, with name, email, phone, address, and handling instructions.
         * scheduled_start_at (Required): string or null. Derived start of the service schedule or
         * pickup, local delivery, or shipment window. Null when no schedule is booked, including
         * digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first
         * ascending and last descending, then by fulfillment_id in the same direction. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". service_details (Optional): {@link
         * ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment.
         * Details of a service fulfillment: the scheduled start and end, timezone, completion
         * time, and notes. shipment_details (Optional): {@link ShipmentFulfillmentDetails}.
         * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
         * fulfillments with at least one value. Details of a shipment fulfillment: the shipping
         * window, timezone, and when the shipment was handed to the carrier. shipments (Optional):
         * Array of {@link ExpandedShipmentSummary}. Shipments associated with this fulfillment.
         * shipments[] (Value): {@link ExpandedShipmentSummary}. A shipment's summary fields,
         * including direction, status, and package count, returned when the shipment is expanded.
         * status (Required): string. Current fulfillment lifecycle status. Read supported_actions
         * for available transitions. - `pending`: Work has not started and has not been accepted.
         * Approval may be required before work can begin. - `accepted`: The provider accepted the
         * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
         * restore active_hold.previous_status, or use a supported forward action. - `in_progress`:
         * Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready
         * for pickup, handoff, or completion. - `completed`: All fulfillment work completed
         * successfully. - `canceled`: The fulfillment was intentionally canceled and will not
         * continue. - `failed`: The fulfillment could not be completed. Resolve the recorded
         * reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for
         * its recorded service window. - `preparing`: Warehouse or provider preparation is
         * underway. - `picked`: The assigned items have been picked. - `packed`: The assigned
         * items have been packed. - `dispatched`: The fulfillment left its origin for delivery or
         * handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded
         * reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready",
         * "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed",
         * "dispatched", "no_show". supported_actions (Required): Array of string. Read-only
         * lifecycle actions accepted now, based on the fulfillment, its order payment status,
         * holds, and shipment progress. Empty when none are available. Values name the verb route
         * with hyphens replaced by underscores. [] enum: "accept", "cancel", "complete",
         * "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked",
         * "mark_preparing", "mark_ready", "release_hold", "schedule", "start". supported_actions[]
         * (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold",
         * "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready",
         * "release_hold", "schedule", "start". terminal_at (Optional): string. When the
         * fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
         * records the state transition; completed_at records completion evidence supplied for the
         * fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". type (Required):
         * string. How the items are delivered: shipment, pickup, local delivery, digital delivery,
         * or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
         * updated_at (Required): string. When the fulfillment was last updated, in RFC3339 format.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required): integer.
         * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Current hold details. Present exactly when status is on_hold. A hold on a
             * fulfillment, with its reason, who placed it, and when it became active.
             */
            "active_hold"?: FulfillmentHold;
            /**
             * Order charges associated with this fulfillment. [] (Value): {@link
             * FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
             */
            "charges"?: Array<FulfillmentChargeLink>;
            /**
             * When the fulfillment was completed. Mirrors the completion time for its type:
             * delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at
             * for pickup, and service_details.completed_at for service fulfillments. Omitted until
             * a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "completed_at"?: string;
            /**
             * When the fulfillment was created, in RFC3339 format. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at": string;
            /**
             * Customer receiving this fulfillment, when one is set. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
             */
            "customer_id"?: string;
            /**
             * Delivery choice group that created this fulfillment. `null` when the merchant
             * created the fulfillment or checkout created it without a delivery quote. Example:
             * "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
             */
            "delivery_choice_group_id": string | null;
            /**
             * Execution leg of the selected delivery option that created this fulfillment. `null`
             * when the merchant created the fulfillment or checkout created it without a delivery
             * quote. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M".
             */
            "delivery_execution_leg_id": string | null;
            /**
             * Delivery method chosen for this fulfillment. `null` when the merchant created the
             * fulfillment or checkout created it without a delivery quote. Also `null` when it was
             * created before this field was added. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
             */
            "delivery_method_id": string | null;
            /**
             * Delivery selection that created this fulfillment. `null` when the merchant created
             * the fulfillment or checkout created it without a delivery quote. Example:
             * "dsel_01KEZF7C00QC35XBXVXQSCEB2D".
             */
            "delivery_selection_id": string | null;
            /**
             * Device associated with the fulfillment, when one is recorded. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6".
             */
            "device_id"?: string;
            /**
             * Delivery URL and completion time for a digital fulfillment. Details of a digital
             * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
             */
            "digital_details"?: DigitalFulfillmentDetails;
            /**
             * First time this fulfillment reached dispatched. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "dispatched_at"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /** Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". */
            "fulfillment_id": string;
            /**
             * Order lines and quantities allocated to this fulfillment. [] (Value): {@link
             * FulfillmentLineItem}. An order line item and quantity included in a fulfillment,
             * with the modifiers applied to it.
             */
            "line_items": Array<FulfillmentLineItem>;
            /**
             * Courier, delivery window, and handoff details for a local delivery fulfillment.
             * Details of a local delivery fulfillment: courier, timing window, instructions, and
             * tracking. Some fields are omitted for credentials that don't act for the verified
             * customer.
             */
            "local_delivery_details"?: DeliveryFulfillmentDetails;
            /**
             * Merchant location responsible for this fulfillment. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id"?: string;
            /**
             * Caller-owned key-value metadata associated with the fulfillment. Caller-owned
             * key-value data stored on a resource. Keys starting with flint_ are reserved for
             * Flint and are not returned. Writes follow the limits on MetadataInput and
             * MetadataPatchInput; maps written before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * Order summary returned when the order relationship is expanded. Present only when
             * `expand` includes `order`; `null` when expanded and there is no related order.
             * anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
             * status, payment and refund status, and pricing and settlement amounts, returned when
             * the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /**
             * Order whose items this fulfillment delivers. Example:
             * "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "order_id": string;
            /**
             * Human-readable number of the order this fulfillment belongs to. Omitted when the
             * order has no number.
             */
            "order_number"?: string;
            /**
             * Terminal outcome details. Present exactly when status is no_show. The terminal
             * outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
             * when it occurred.
             */
            "outcome"?: FulfillmentOutcome;
            /**
             * Packages associated with this fulfillment. [] (Value): {@link
             * ExpandedPackageSummary}. A package's summary fields, including carrier, tracking,
             * status, and supported actions, returned when the package is expanded.
             */
            "packages"?: Array<ExpandedPackageSummary>;
            /**
             * First time this fulfillment reached packed. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "packed_at"?: string;
            /**
             * First time this fulfillment reached picked. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "picked_at"?: string;
            /**
             * Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup
             * details. For a pickup that checkout creates, location_name, address, and
             * instructions name the store the buyer chose and the delivery method's pickup
             * instructions. The note the buyer left for the store is in recipient.instructions.
             */
            "pickup_details"?: PickupFulfillmentDetails;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The recipient of a fulfillment, with name, email, phone, address,
             * and handling instructions.
             */
            "recipient"?: FulfillmentRecipient;
            /**
             * Derived start of the service schedule or pickup, local delivery, or shipment window.
             * Null when no schedule is booked, including digital fulfillments. Details remain the
             * authoritative schedule inputs. Nulls sort first ascending and last descending, then
             * by fulfillment_id in the same direction. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_start_at": string | null;
            /**
             * Schedule and completion details for a service fulfillment. Details of a service
             * fulfillment: the scheduled start and end, timezone, completion time, and notes.
             */
            "service_details"?: ServiceFulfillmentDetails;
            /**
             * Shipping schedule and ship time for a shipment fulfillment. Present only on shipment
             * fulfillments with at least one value. Details of a shipment fulfillment: the
             * shipping window, timezone, and when the shipment was handed to the carrier.
             */
            "shipment_details"?: ShipmentFulfillmentDetails;
            /**
             * Shipments associated with this fulfillment. [] (Value): {@link
             * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status,
             * and package count, returned when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Current fulfillment lifecycle status. Read supported_actions for available
             * transitions. - `pending`: Work has not started and has not been accepted. Approval
             * may be required before work can begin. - `accepted`: The provider accepted the
             * fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to
             * restore active_hold.previous_status, or use a supported forward action. -
             * `in_progress`: Work has started and is not yet ready or complete. - `ready`: The
             * fulfillment is ready for pickup, handoff, or completion. - `completed`: All
             * fulfillment work completed successfully. - `canceled`: The fulfillment was
             * intentionally canceled and will not continue. - `failed`: The fulfillment could not
             * be completed. Resolve the recorded reason before creating replacement work. -
             * `scheduled`: The fulfillment is scheduled for its recorded service window. -
             * `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned
             * items have been picked. - `packed`: The assigned items have been packed. -
             * `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`:
             * A service appointment was missed. Read outcome for the recorded reason. Value enum:
             * "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled",
             * "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
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
             * Read-only lifecycle actions accepted now, based on the fulfillment, its order
             * payment status, holds, and shipment progress. Empty when none are available. Values
             * name the verb route with hyphens replaced by underscores. [] enum: "accept",
             * "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed",
             * "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start".
             * [] (Value): string. Value enum: "accept", "cancel", "complete", "dispatch", "fail",
             * "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing",
             * "mark_ready", "release_hold", "schedule", "start".
             */
            "supported_actions": Array<"accept"
                | "cancel"
                | "complete"
                | "dispatch"
                | "fail"
                | "hold"
                | "mark_no_show"
                | "mark_packed"
                | "mark_picked"
                | "mark_preparing"
                | "mark_ready"
                | "release_hold"
                | "schedule"
                | "start"
                | (string & {})>;
            /**
             * When the fulfillment entered a terminal state: completed, canceled, failed, or
             * no_show. This records the state transition; completed_at records completion evidence
             * supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "terminal_at"?: string;
            /**
             * How the items are delivered: shipment, pickup, local delivery, digital delivery, or
             * service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
             */
            "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
            /**
             * When the fulfillment was last updated, in RFC3339 format. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at": string;
            /**
             * Monotonic fulfillment version for expected_version checks. Format: uint64. minimum:
             * 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Fulfillment>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "fulfillment.updated". */
    "event_type"?: "fulfillment.updated";
});
export type FulfillmentsAcceptParams = (InputValue<AcceptFulfillmentRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsCancelParams = (InputValue<CancelFulfillmentRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsCompleteParams = (InputValue<CompleteFulfillmentRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsCreateEventParams = (InputValue<CreateFulfillmentEventRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsCreateShipmentParams = (CreateShipmentRequestInput)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsDispatchParams = (InputValue<DispatchFulfillmentRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsFailParams = (InputValue<FailFulfillmentRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: order, packages, shipments.
     * Expansion requires commerce.orders.read. Limits: at most 10 unique expand paths per request.
     * To-many expansions are capped at 20 related objects per path. [] enum: "order", "packages",
     * "shipments". Value enum: "order", "packages", "shipments". anyOf[1] (Value): Array of
     * string. [] enum: "order", "packages", "shipments". anyOf[1][] (Value): string. Value enum:
     * "order", "packages", "shipments". anyOf[2] (Value): string. Value enum: "order", "packages",
     * "shipments".
     */
    "expand"?: InputValue<("order" | "packages" | "shipments") | readonly ("order" | "packages" | "shipments")[]>;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsHoldParams = (InputValue<HoldFulfillmentRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsListParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Include related objects in the response. Supported expansions: order. Expansion requires
     * commerce.orders.read. Limits: at most 10 unique expand paths per request. [] enum: "order".
     * Value enum: "order". anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][]
     * (Value): string. Value enum: "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
    /** Filter by order ID. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: InputValue<string>;
    /** Exact match on customer_id. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
    "customer_id"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across fulfillment_id and external_reference_id. Also matches an exact order number.
     * Text fields match any part of the value, and %, _ and \ are ordinary characters, not
     * wildcards. IDs match from the start and need the type prefix, such as ful_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter by exact fulfillment status. Values within this filter are ORed; combined with other
     * filters using AND. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show". Value
     * enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed",
     * "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "pending", "on_hold", "in_progress",
     * "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked",
     * "packed", "dispatched", "no_show". anyOf[1][] (Value): string. Value enum: "pending",
     * "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled",
     * "accepted", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[2] (Value):
     * string. Value enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled",
     * "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show".
     */
    "status"?: InputValue<("pending"
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
        | "no_show")
        | readonly ("pending"
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
        | "no_show")[]>;
    /**
     * Filter by fulfillment type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "shipment", "pickup", "local_delivery", "digital", "service". Value enum:
     * "shipment", "pickup", "local_delivery", "digital", "service". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "shipment", "pickup", "local_delivery", "digital", "service".
     * anyOf[1][] (Value): string. Value enum: "shipment", "pickup", "local_delivery", "digital",
     * "service". anyOf[2] (Value): string. Value enum: "shipment", "pickup", "local_delivery",
     * "digital", "service".
     */
    "type"?: InputValue<("shipment" | "pickup" | "local_delivery" | "digital" | "service")
        | readonly ("shipment" | "pickup" | "local_delivery" | "digital" | "service")[]>;
    /** Filter by assigned Location ID. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by fulfillment_id. Default:
     * "created_at". Value enum: "created_at", "scheduled_start_at", "terminal_at".
     */
    "sort_by"?: InputValue<"created_at" | "scheduled_start_at" | "terminal_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsMarkNoShowParams = (InputValue<MarkFulfillmentNoShowRequestInput>)
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsMarkPackedParams = (InputValue<MarkFulfillmentPackedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsMarkPickedParams = (InputValue<MarkFulfillmentPickedRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsMarkPreparingParams = (InputValue<MarkFulfillmentPreparingRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsMarkReadyParams = (InputValue<MarkFulfillmentReadyRequestInput>
    | {
    "buyer_notification_behavior"?: never;
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};
export type FulfillmentsReleaseHoldParams = (InputValue<ReleaseFulfillmentHoldRequestInput>
    | {
    "expected_version"?: never;
    "occurred_at"?: never;
    "reason_message"?: never;
})
    & {
    /**
     * Merchant this request acts for. Required with an app-level partner app token; optional with
     * a merchant-bound one, which it must match. Other credentials may send it only with their own
     * merchant. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Merchant-Id"?: InputValue<string>;
    /**
     * Mode of the request context, live or test. Optional; it must match the credential's mode.
     * Value enum: "test", "live".
     */
    "Flint-Mode"?: InputValue<"test" | "live">;
    /**
     * Sandbox of the request context in test mode. Optional; with a partner app token it must name
     * the sandbox the merchant granted the app, and a live token can't send it. Send it in test
     * mode so a grant moved to another sandbox can't silently change where you write. pattern:
     * ^test_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "Flint-Sandbox-Id"?: InputValue<string>;
};

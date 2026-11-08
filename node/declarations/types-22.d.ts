import type { FraudWarning, ExpandedOrderSummary, ExpandedPackageSummary, ExpandedShipmentSummary } from './types-21.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-35.js';
import type { InputValue } from '../runtime.js';
import type { DeliveryFulfillmentDetails } from './types-15.js';
import type { DigitalFulfillmentDetails } from './types-20.js';
import type { PickupFulfillmentDetails } from './types-44.js';
import type { ServiceFulfillmentDetails, ShipmentFulfillmentDetails } from './types-53.js';
import type { ResponseMeta } from './types-48.js';
import type { CreatePackageItemRequest, CreatePackageItemRequestInput } from './types-9.js';
import type { PackageCreateRequest, PackageCreateRequestInput, PackageTransitionRequestMarkPacked } from './types-39.js';
import type { SinglePackageCreateRequest, SinglePackageCreateRequestInput } from './types-54.js';
import type { OrderLineItemModifier } from './types-37.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type {
    FulfillmentTransitionRequestMarkPicked,
    FulfillmentTransitionRequestMarkPreparing,
    FulfillmentTransitionRequestMarkReady,
    FulfillmentTransitionRequestReleaseHold,
    FulfillmentTransitionRequestSchedule,
    FulfillmentTransitionRequestStart,
    FulfillmentTransitionRequestMarkNoShowInput,
    FulfillmentTransitionRequestMarkPackedInput,
    FulfillmentTransitionRequestMarkPickedInput,
    FulfillmentTransitionRequestMarkPreparingInput,
    FulfillmentTransitionRequestMarkReadyInput,
    FulfillmentTransitionRequestReleaseHoldInput,
    FulfillmentTransitionRequestScheduleInput,
    FulfillmentTransitionRequestStartInput
} from './types-23.js';
/**
 * The `fraud_warning.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type FraudWarningUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link FraudWarning}. A notice that a payment may be fraudulent. */
    "data"?: {
        /** A notice that a payment may be fraudulent. */
        "object": FraudWarning;
    };
    /** Value enum: "fraud_warning.updated". */
    "event_type"?: "fraud_warning.updated";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `fraud_warning.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FraudWarningUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link FraudWarning}. A notice that a payment may be fraudulent. */
    "data"?: {
        /** A notice that a payment may be fraudulent. */
        "object": FraudWarning;
    };
    /** Value enum: "fraud_warning.updated". */
    "event_type"?: "fraud_warning.updated";
});
export type FraudWarningsGetParams = {
    /**
     * Supported expansions: dispute, payment_intent. Expansion requires risk.read plus the read
     * scope for each expanded resource. Limits: at most 10 unique expand paths per request. Repeat
     * expand, for example expand=dispute&expand=payment_intent, or pass one comma-separated value.
     * [] enum: "dispute", "payment_intent". Value enum: "dispute", "payment_intent". anyOf[1]
     * (Value): Array of string. [] enum: "dispute", "payment_intent". anyOf[1][] (Value): string.
     * Value enum: "dispute", "payment_intent". anyOf[2] (Value): string. Value enum: "dispute",
     * "payment_intent".
     */
    "expand"?: InputValue<("dispute" | "payment_intent") | readonly ("dispute" | "payment_intent")[]>;
};
export type FraudWarningsListParams = {
    /** Filter by whether a proactive fraudulent refund can still prevent a dispute. */
    "is_actionable"?: InputValue<boolean>;
    /** Filter by Flint payment intent ID. Example: "pi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "payment_intent_id"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Supported expansions: dispute, payment_intent. Include the requested related resources using
     * scoped batch reads for this page. Each relationship requires its existing target read
     * scopes. Expansion changes the representation without changing pagination tokens. Limits: at
     * most 10 unique expand paths per request. Repeat expand, for example
     * expand=dispute&expand=payment_intent, or pass one comma-separated value. [] enum: "dispute",
     * "payment_intent". Value enum: "dispute", "payment_intent". anyOf[1] (Value): Array of
     * string. [] enum: "dispute", "payment_intent". anyOf[1][] (Value): string. Value enum:
     * "dispute", "payment_intent". anyOf[2] (Value): string. Value enum: "dispute",
     * "payment_intent".
     */
    "expand"?: InputValue<("dispute" | "payment_intent") | readonly ("dispute" | "payment_intent")[]>;
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
     * recorded. Format: date-time.
     */
    "completed_at"?: string;
    /** When the fulfillment was created, in RFC3339 format. Format: date-time. */
    "created_at"?: string;
    /** Customer receiving this fulfillment, when one is set. */
    "customer_id"?: string;
    /**
     * Delivery choice group that created this fulfillment. Null for fulfillments created by the
     * merchant or through checkout without a delivery quote.
     */
    "delivery_choice_group_id": string | null;
    /**
     * Execution leg of the selected delivery option that created this fulfillment. Null for
     * fulfillments created by the merchant or through checkout without a delivery quote.
     */
    "delivery_execution_leg_id": string | null;
    /**
     * Delivery method chosen for this fulfillment. Null for fulfillments created by the merchant
     * or through checkout without a delivery quote. Also null for fulfillments created before this
     * field was added.
     */
    "delivery_method_id": string | null;
    /**
     * Delivery selection that created this fulfillment. Null for fulfillments created by the
     * merchant or through checkout without a delivery quote.
     */
    "delivery_selection_id": string | null;
    /** Device associated with the fulfillment, when one is recorded. */
    "device_id"?: string;
    /**
     * Delivery URL and completion time for a digital fulfillment. Details of a digital
     * fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
     */
    "digital_details"?: DigitalFulfillmentDetails;
    /** First time this fulfillment reached dispatched. Format: date-time. */
    "dispatched_at"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /** Stable identifier of the fulfillment. */
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
    /** Merchant location responsible for this fulfillment. */
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
    /** Order whose items this fulfillment delivers. */
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
    /** First time this fulfillment reached packed. Format: date-time. */
    "packed_at"?: string;
    /** First time this fulfillment reached picked. Format: date-time. */
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
     * the same direction. Format: date-time.
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
     * Read-only actions currently supported for this fulfillment. [] enum: "complete", "cancel",
     * "hold", "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing",
     * "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold". [] (Value):
     * string. Value enum: "complete", "cancel", "hold", "start", "mark_ready", "fail", "schedule",
     * "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch", "mark_no_show",
     * "release_hold".
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
     * When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This
     * records the state transition; completed_at records completion evidence supplied for the
     * fulfillment. Format: date-time.
     */
    "terminal_at"?: string;
    /**
     * How the items are delivered: shipment, pickup, local delivery, digital delivery, or service.
     * Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     */
    "type": "shipment" | "pickup" | "local_delivery" | "digital" | "service" | (string & {});
    /** When the fulfillment was last updated, in RFC3339 format. Format: date-time. */
    "updated_at"?: string;
    /** Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1. */
    "version": number;
};
export type FulfillmentCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.canceled". */
    "event_type"?: "fulfillment.canceled";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `fulfillment.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.canceled". */
    "event_type"?: "fulfillment.canceled";
});
/** Links a fulfillment to an order charge by `order_charge_id`. */
export type FulfillmentChargeLink = {
    /** Order charge associated with this fulfillment. */
    "order_charge_id": string;
};
export type FulfillmentCompletedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.completed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.completed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.completed". */
    "event_type"?: "fulfillment.completed";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `fulfillment.completed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentCompletedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.completed". */
    "event_type"?: "fulfillment.completed";
});
export type FulfillmentCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.created". */
    "event_type"?: "fulfillment.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `fulfillment.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
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
    /** Timeline entry creation timestamp. Format: date-time. */
    "created_at"?: string;
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
    /**  * (Value): string. */
    "custom_details"?: Record<string, string>;
    /**
     * The delivery or fulfillment event recorded by this entry. Value enum: "carrier_scan",
     * "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom", "accepted",
     * "preparing", "picked", "packed", "ready", "dispatched", "completed", "canceled", "failed",
     * "no_show".
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
    /** Event identifier assigned by that integration. */
    "external_event_id"?: string;
    /** Status supplied by that integration before mapping to Flint's public status. */
    "external_status"?: string;
    /** Integration that supplied the event. */
    "external_system"?: string;
    "fulfillment_event_id": string;
    "fulfillment_id": string;
    "location_description"?: string;
    "message"?: string;
    /** Provider event timestamp. Format: date-time. */
    "occurred_at"?: string;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    "order_id": string;
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
     * Value enum: "address_issue", "customer_no_show", "customer_request", "fraud_review",
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
    /** Flint receive timestamp. Format: date-time. */
    "received_at"?: string;
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
        "object": FulfillmentEvent;
    };
    "event_type"?: "fulfillment_event.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": FulfillmentEvent;
    };
    "event_type"?: "fulfillment_event.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
     *  object (Required): {@link FulfillmentEvent}. An action recorded during an order's
     * fulfillment.
     */
    "data"?: {
        /** An action recorded during an order's fulfillment. */
        "object": FulfillmentEvent;
    };
    /** Value enum: "fulfillment_event.created". */
    "event_type"?: "fulfillment_event.created";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `fulfillment_event.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type FulfillmentEventCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link FulfillmentEvent}. An action recorded during an order's
     * fulfillment.
     */
    "data"?: {
        /** An action recorded during an order's fulfillment. */
        "object": FulfillmentEvent;
    };
    /** Value enum: "fulfillment_event.created". */
    "event_type"?: "fulfillment_event.created";
});
/** A page of `FulfillmentEvent` objects. */
export type FulfillmentEventListResponse = {
    /**  [] (Value): {@link FulfillmentEvent}. An action recorded during an order's fulfillment. */
    "data": Array<FulfillmentEvent>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `FulfillmentEvent` data. */
export type FulfillmentEventResourceResponse = {
    /** An action recorded during an order's fulfillment. */
    "data": FulfillmentEvent;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type FulfillmentEventsGetParams = {
    /**
     * Supported expansions: order. Expansion requires commerce.orders.read. Limits: at most 10
     * unique expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order".
     * anyOf[1] (Value): Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum:
     * "order". anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
};
export type FulfillmentEventsListParams = {
    /** Optional fulfillment ID filter. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
    /** Optional shipment ID filter. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "shipment_id"?: InputValue<string>;
    /** Optional package ID filter. Example: "pkg_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "package_id"?: InputValue<string>;
    /** Optional order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by fulfillment event type. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom". Value enum:
     * "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "carrier_scan", "status_changed", "shipped",
     * "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated",
     * "exception", "returned", "custom". anyOf[1][] (Value): string. Value enum: "carrier_scan",
     * "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered",
     * "delivery_attempted", "tracking_updated", "exception", "returned", "custom". anyOf[2]
     * (Value): string. Value enum: "carrier_scan", "status_changed", "shipped", "in_transit",
     * "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception",
     * "returned", "custom".
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
    /** Filter by external provider event ID. */
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
     * Supported expansions: order. Include the requested related resources using scoped batch
     * reads for this page. Each relationship requires its existing target read scopes. Expansion
     * changes the representation without changing pagination tokens. Limits: at most 10 unique
     * expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1]
     * (Value): Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum: "order".
     * anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
};
export type FulfillmentFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Fulfillment;
    };
    "event_type"?: "fulfillment.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        "type": "installed_merchants" | (string & {});
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
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.failed". */
    "event_type"?: "fulfillment.failed";
    /**
     *  environment_grant_id (Required): string. merchant_id (Required): string. mode (Required):
     * string. Value enum: "test", "live". partner_app_install_id (Required): string. sandbox_id
     * (Optional): string. type (Required): string. Value enum: "installed_merchants".
     */
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        /** Value enum: "test", "live". */
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
        /** Value enum: "installed_merchants". */
        "type": "installed_merchants" | (string & {});
    });
});
/**
 * The `fulfillment.failed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type FulfillmentFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Fulfillment}. Work required to deliver an order's items. */
    "data"?: {
        /** Work required to deliver an order's items. */
        "object": Fulfillment;
    };
    /** Value enum: "fulfillment.failed". */
    "event_type"?: "fulfillment.failed";
});
/** A hold on a fulfillment, with its reason, who placed it, and when it became active. */
export type FulfillmentHold = {
    /** Time the hold became active. Format: date-time. */
    "created_at": string;
    /** Explanation of the hold suitable for display to the merchant. */
    "display_reason"?: string;
    /** Actor that placed the fulfillment on hold. */
    "held_by"?: string;
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
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The single package created with a shipment fulfillment. It receives the submitted
     * fulfillment line quantities. Set status to created or shipped; items and return_line_items
     * are not accepted.
     */
    "package"?: SinglePackageCreateRequest;
    /**
     * minItems: 1. maxItems: 20. [] (Value): {@link PackageCreateRequest}. The request body for:
     * Create package. [].buyer_notification_behavior (Optional): string. Controls buyer email
     * handling. Omit or use send to send when recipient, template, and deduplication rules allow
     * it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. minLength: 1. [].dimensions (Optional): {@link Dimensions}.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * [].expected_delivery_at (Optional): string or null. When the carrier or merchant expects
     * this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it
     * unchanged on updates and transitions. Format: date-time. minLength: 1.
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. [].external_system (Optional):
     * string. Name of the external system that external_reference_id belongs to. External
     * references are not unique. Use Idempotency-Key for retries. minLength: 1. [].items
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
     * (Optional): string. minLength: 1. [].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * [].status (Required): string. Outbound packages can start as created or shipped. Return
     * packages must start as created, omit items, and include return_line_items. Use mark_shipped
     * after the buyer hands over the return package. Value enum: "created", "shipped".
     * [].status_reason (Optional): string. minLength: 1. [].tracking_number (Optional): string.
     * minLength: 1. [].tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. minLength: 1. [].weight (Optional): {@link Weight}. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * [].oneOf[1] (Value): {@link PackageCreateInputCreated}. The `created` variant of
     * `PackageCreateInput`. [].oneOf[2] (Value): {@link PackageCreateInputShipped}. The `shipped`
     * variant of `PackageCreateInput`.
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
    /** Value enum: "itemized". */
    "packaging": "itemized" | (string & {});
});
/** The `itemized` variant of `FulfillmentPackagingInput`. */
export type FulfillmentItemizedPackagesRequestInput = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The single package created with a shipment fulfillment. It receives the submitted
     * fulfillment line quantities. Set status to created or shipped; items and return_line_items
     * are not accepted.
     */
    "package"?: SinglePackageCreateRequestInput;
    /**
     * minItems: 1. maxItems: 20. [] (Value): {@link PackageCreateRequestInput}. The request body
     * for: Create package. [].buyer_notification_behavior (Optional): string. Controls buyer email
     * handling. Omit or use send to send when recipient, template, and deduplication rules allow
     * it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. minLength: 1. [].dimensions (Optional): {@link
     * DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given
     * `unit`. [].expected_delivery_at (Optional): string or null. When the carrier or merchant
     * expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave
     * it unchanged on updates and transitions. Format: date-time. minLength: 1.
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. [].external_system (Optional):
     * string. Name of the external system that external_reference_id belongs to. External
     * references are not unique. Use Idempotency-Key for retries. minLength: 1. [].items
     * (Required): Array of {@link CreatePackageItemRequestInput}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. [].items[] (Value): {@link CreatePackageItemRequestInput}. The request
     * body for: Create package item. [].label_url (Optional): string. HTTPS shipping-label URL
     * supplied by your integration. Non-Flint URLs require external_system for provenance. Flint
     * does not host the label file. minLength: 1. [].metadata (Optional): {@link
     * MetadataRequestInput}. Caller-owned metadata. Values can't be empty strings. Keys starting
     * with flint_ are reserved for Flint, are not returned, and cannot be written through the
     * public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata.
     * Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096
     * Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].return_line_items (Optional): Array of {@link
     * ReturnShipmentLineItemAllocationRequestInput}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package. [].service_code (Optional): string. minLength: 1. [].shipped_at
     * (Optional): string. Package handoff time. Defaults to request time. Only allowed with status
     * shipped. Format: date-time. minLength: 1. [].status (Required): string. Outbound packages
     * can start as created or shipped. Return packages must start as created, omit items, and
     * include return_line_items. Use mark_shipped after the buyer hands over the return package.
     * Value enum: "created", "shipped". [].status_reason (Optional): string. minLength: 1.
     * [].tracking_number (Optional): string. minLength: 1. [].tracking_url (Optional): string.
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1.
     * [].weight (Optional): {@link WeightInput}. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration. [].oneOf[1] (Value): {@link
     * PackageCreateInputCreatedInput}. The `created` variant of `PackageCreateInput`. [].oneOf[2]
     * (Value): {@link PackageCreateInputShippedInput}. The `shipped` variant of
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
    /** Value enum: "itemized". */
    "packaging": "itemized";
})
    & (({
    "package"?: never;
}));
/** An order line item and quantity included in a fulfillment, with the modifiers applied to it. */
export type FulfillmentLineItem = {
    /**
     * Modifier selections snapshotted from the order line for fulfillment. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price
     * change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    /** Order line whose quantity is allocated to the fulfillment. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/** An order line item and quantity to include when creating a fulfillment. */
export type FulfillmentLineItemRequest = {
    /** minLength: 1. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
};
/** An order line item and quantity to include when creating a fulfillment. */
export type FulfillmentLineItemRequestInput = FulfillmentLineItemRequest;
/** A page of `Fulfillment` objects. */
export type FulfillmentListResponse = {
    /**  [] (Value): {@link Fulfillment}. Work required to deliver an order's items. */
    "data": Array<Fulfillment>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
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
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "failed_at"?: string;
    "fulfillment_event_id"?: string;
    "fulfillment_id": string;
    "fulfillment_notification_id": string;
    /**
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
    "order_id": string;
    "package_id"?: string;
    "recipient_customer_id"?: string;
    "recipient_email"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "sent_at"?: string;
    "shipment_id"?: string;
    /** Value enum: "pending", "sent", "failed", "suppressed". */
    "status": "pending" | "sent" | "failed" | "suppressed" | (string & {});
    /**
     * Why Flint chose not to send this notification. - `source_suppressed`: The originating
     * request suppressed buyer messaging. - `default_suppressed`: The configured default
     * suppressed buyer messaging. - `recipient_missing`: No usable recipient was available. -
     * `template_not_configured`: No notification template was configured. -
     * `merchant_managed_email`: The merchant's integration owns this email. -
     * `recipient_unsubscribed`: The recipient opted out of this notification. Value enum:
     * "source_suppressed", "default_suppressed", "recipient_missing", "template_not_configured",
     * "merchant_managed_email", "recipient_unsubscribed".
     */
    "suppression_reason"?: "source_suppressed"
        | "default_suppressed"
        | "recipient_missing"
        | "template_not_configured"
        | "merchant_managed_email"
        | "recipient_unsubscribed"
        | (string & {});
    /**
     * What created this notification. - `fulfillment_status_updated`: Created by a fulfillment
     * status transition. - `fulfillment_event_created`: Created by a fulfillment timeline event.
     * Value enum: "fulfillment_status_updated", "fulfillment_event_created".
     */
    "trigger_type": "fulfillment_status_updated" | "fulfillment_event_created" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
};
/** A page of `FulfillmentNotification` objects. */
export type FulfillmentNotificationListResponse = {
    /**
     *  [] (Value): {@link FulfillmentNotification}. A message sent about an order's fulfillment.
     */
    "data": Array<FulfillmentNotification>;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    "next_page_token"?: string;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** A response containing `FulfillmentNotification` data. */
export type FulfillmentNotificationResponse = {
    /** A message sent about an order's fulfillment. */
    "data": FulfillmentNotification;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
export type FulfillmentNotificationsGetParams = FulfillmentEventsGetParams;
export type FulfillmentNotificationsListParams = {
    /** Optional fulfillment ID filter. Example: "ful_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_id"?: InputValue<string>;
    /** Optional order ID filter. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "order_id"?: InputValue<string>;
    /** Optional fulfillment event ID filter. Example: "fev_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "fulfillment_event_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum:
     * 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /**
     * Filter by notification channel. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "email".
     * Value enum: "email". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "email".
     * anyOf[1][] (Value): string. Value enum: "email". anyOf[2] (Value): string. Value enum:
     * "email".
     */
    "channel"?: InputValue<("email") | readonly ("email")[]>;
    /**
     * Filter by notification status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "pending", "sent", "failed", "suppressed". Value enum: "pending", "sent", "failed",
     * "suppressed". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "sent",
     * "failed", "suppressed". anyOf[1][] (Value): string. Value enum: "pending", "sent", "failed",
     * "suppressed". anyOf[2] (Value): string. Value enum: "pending", "sent", "failed",
     * "suppressed".
     */
    "status"?: InputValue<("pending" | "sent" | "failed" | "suppressed")
        | readonly ("pending" | "sent" | "failed" | "suppressed")[]>;
    /**
     * Filter by notification type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "fulfillment_canceled", "fulfillment_completed", "fulfillment_delivered",
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
     * Supported expansions: order. Include the requested related resources using scoped batch
     * reads for this page. Each relationship requires its existing target read scopes. Expansion
     * changes the representation without changing pagination tokens. Limits: at most 10 unique
     * expand paths per request. Pass expand=order. [] enum: "order". Value enum: "order". anyOf[1]
     * (Value): Array of string. [] enum: "order". anyOf[1][] (Value): string. Value enum: "order".
     * anyOf[2] (Value): string. Value enum: "order".
     */
    "expand"?: InputValue<("order") | readonly ("order")[]>;
};
/**
 * The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and
 * when it occurred.
 */
export type FulfillmentOutcome = {
    /** Additional notes about the fulfillment outcome. */
    "notes"?: string;
    /** Time the terminal outcome occurred. Format: date-time. */
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
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The single package created with a shipment fulfillment. It receives the submitted
     * fulfillment line quantities. Set status to created or shipped; items and return_line_items
     * are not accepted.
     */
    "package"?: SinglePackageCreateRequest;
    /**
     * minItems: 1. maxItems: 20. [] (Value): {@link PackageCreateRequest}. The request body for:
     * Create package. [].buyer_notification_behavior (Optional): string. Controls buyer email
     * handling. Omit or use send to send when recipient, template, and deduplication rules allow
     * it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. minLength: 1. [].dimensions (Optional): {@link Dimensions}.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * [].expected_delivery_at (Optional): string or null. When the carrier or merchant expects
     * this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it
     * unchanged on updates and transitions. Format: date-time. minLength: 1.
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. [].external_system (Optional):
     * string. Name of the external system that external_reference_id belongs to. External
     * references are not unique. Use Idempotency-Key for retries. minLength: 1. [].items
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
     * (Optional): string. minLength: 1. [].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * [].status (Required): string. Outbound packages can start as created or shipped. Return
     * packages must start as created, omit items, and include return_line_items. Use mark_shipped
     * after the buyer hands over the return package. Value enum: "created", "shipped".
     * [].status_reason (Optional): string. minLength: 1. [].tracking_number (Optional): string.
     * minLength: 1. [].tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. minLength: 1. [].weight (Optional): {@link Weight}. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * [].oneOf[1] (Value): {@link PackageCreateInputCreated}. The `created` variant of
     * `PackageCreateInput`. [].oneOf[2] (Value): {@link PackageCreateInputShipped}. The `shipped`
     * variant of `PackageCreateInput`.
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
    /** Value enum: "single_package", "itemized". */
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
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The single package created with a shipment fulfillment. It receives the submitted
     * fulfillment line quantities. Set status to created or shipped; items and return_line_items
     * are not accepted.
     */
    "package"?: SinglePackageCreateRequestInput;
    /**
     * minItems: 1. maxItems: 20. [] (Value): {@link PackageCreateRequestInput}. The request body
     * for: Create package. [].buyer_notification_behavior (Optional): string. Controls buyer email
     * handling. Omit or use send to send when recipient, template, and deduplication rules allow
     * it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. minLength: 1. [].dimensions (Optional): {@link
     * DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given
     * `unit`. [].expected_delivery_at (Optional): string or null. When the carrier or merchant
     * expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave
     * it unchanged on updates and transitions. Format: date-time. minLength: 1.
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. [].external_system (Optional):
     * string. Name of the external system that external_reference_id belongs to. External
     * references are not unique. Use Idempotency-Key for retries. minLength: 1. [].items
     * (Required): Array of {@link CreatePackageItemRequestInput}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. [].items[] (Value): {@link CreatePackageItemRequestInput}. The request
     * body for: Create package item. [].label_url (Optional): string. HTTPS shipping-label URL
     * supplied by your integration. Non-Flint URLs require external_system for provenance. Flint
     * does not host the label file. minLength: 1. [].metadata (Optional): {@link
     * MetadataRequestInput}. Caller-owned metadata. Values can't be empty strings. Keys starting
     * with flint_ are reserved for Flint, are not returned, and cannot be written through the
     * public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata.
     * Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096
     * Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].return_line_items (Optional): Array of {@link
     * ReturnShipmentLineItemAllocationRequestInput}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package. [].service_code (Optional): string. minLength: 1. [].shipped_at
     * (Optional): string. Package handoff time. Defaults to request time. Only allowed with status
     * shipped. Format: date-time. minLength: 1. [].status (Required): string. Outbound packages
     * can start as created or shipped. Return packages must start as created, omit items, and
     * include return_line_items. Use mark_shipped after the buyer hands over the return package.
     * Value enum: "created", "shipped". [].status_reason (Optional): string. minLength: 1.
     * [].tracking_number (Optional): string. minLength: 1. [].tracking_url (Optional): string.
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1.
     * [].weight (Optional): {@link WeightInput}. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration. [].oneOf[1] (Value): {@link
     * PackageCreateInputCreatedInput}. The `created` variant of `PackageCreateInput`. [].oneOf[2]
     * (Value): {@link PackageCreateInputShippedInput}. The `shipped` variant of
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
    /** Value enum: "single_package", "itemized". */
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
    /** Work required to deliver an order's items. */
    "data": Fulfillment;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * Merchant fulfillment settings, including whether fulfillments require approval
 * (`approval_required`).
 */
export type FulfillmentSettings = {
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
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * The single package created with a shipment fulfillment. It receives the submitted
     * fulfillment line quantities. Set status to created or shipped; items and return_line_items
     * are not accepted.
     */
    "package": SinglePackageCreateRequest;
    /**
     * minItems: 1. maxItems: 20. [] (Value): {@link PackageCreateRequest}. The request body for:
     * Create package. [].buyer_notification_behavior (Optional): string. Controls buyer email
     * handling. Omit or use send to send when recipient, template, and deduplication rules allow
     * it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. minLength: 1. [].dimensions (Optional): {@link Dimensions}.
     * Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * [].expected_delivery_at (Optional): string or null. When the carrier or merchant expects
     * this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it
     * unchanged on updates and transitions. Format: date-time. minLength: 1.
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. [].external_system (Optional):
     * string. Name of the external system that external_reference_id belongs to. External
     * references are not unique. Use Idempotency-Key for retries. minLength: 1. [].items
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
     * (Optional): string. minLength: 1. [].shipped_at (Optional): string. Package handoff time.
     * Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * [].status (Required): string. Outbound packages can start as created or shipped. Return
     * packages must start as created, omit items, and include return_line_items. Use mark_shipped
     * after the buyer hands over the return package. Value enum: "created", "shipped".
     * [].status_reason (Optional): string. minLength: 1. [].tracking_number (Optional): string.
     * minLength: 1. [].tracking_url (Optional): string. Absolute HTTPS carrier tracking URL.
     * Embedded URL credentials are rejected. minLength: 1. [].weight (Optional): {@link Weight}. A
     * weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * [].oneOf[1] (Value): {@link PackageCreateInputCreated}. The `created` variant of
     * `PackageCreateInput`. [].oneOf[2] (Value): {@link PackageCreateInputShipped}. The `shipped`
     * variant of `PackageCreateInput`.
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
    /** Value enum: "single_package". */
    "packaging": "single_package" | (string & {});
});
/** The `single_package` variant of `FulfillmentPackagingInput`. */
export type FulfillmentSinglePackageRequestInput = ({
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "external_system"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * The single package created with a shipment fulfillment. It receives the submitted
     * fulfillment line quantities. Set status to created or shipped; items and return_line_items
     * are not accepted.
     */
    "package": SinglePackageCreateRequestInput;
    /**
     * minItems: 1. maxItems: 20. [] (Value): {@link PackageCreateRequestInput}. The request body
     * for: Create package. [].buyer_notification_behavior (Optional): string. Controls buyer email
     * handling. Omit or use send to send when recipient, template, and deduplication rules allow
     * it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * [].carrier (Optional): string. minLength: 1. [].dimensions (Optional): {@link
     * DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given
     * `unit`. [].expected_delivery_at (Optional): string or null. When the carrier or merchant
     * expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave
     * it unchanged on updates and transitions. Format: date-time. minLength: 1.
     * [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an
     * external system. Requires external_system. External references are not unique. Use
     * Idempotency-Key for retries. minLength: 1. maxLength: 255. [].external_system (Optional):
     * string. Name of the external system that external_reference_id belongs to. External
     * references are not unique. Use Idempotency-Key for retries. minLength: 1. [].items
     * (Required): Array of {@link CreatePackageItemRequestInput}. Independent package-item
     * collection. Inline creation uses the child-create shape and commits atomically; edit items
     * through the package item routes after creation. Each order line may appear once. minItems:
     * 1. maxItems: 100. [].items[] (Value): {@link CreatePackageItemRequestInput}. The request
     * body for: Create package item. [].label_url (Optional): string. HTTPS shipping-label URL
     * supplied by your integration. Non-Flint URLs require external_system for provenance. Flint
     * does not host the label file. minLength: 1. [].metadata (Optional): {@link
     * MetadataRequestInput}. Caller-owned metadata. Values can't be empty strings. Keys starting
     * with flint_ are reserved for Flint, are not returned, and cannot be written through the
     * public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata.
     * Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096
     * Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be
     * empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * [].return_line_items (Optional): Array of {@link
     * ReturnShipmentLineItemAllocationRequestInput}. Required for a package on a return shipment:
     * allocates quantities from the shipment's return_line_items to this parcel. Rejected on
     * outbound shipments. [].return_line_items[] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package. [].service_code (Optional): string. minLength: 1. [].shipped_at
     * (Optional): string. Package handoff time. Defaults to request time. Only allowed with status
     * shipped. Format: date-time. minLength: 1. [].status (Required): string. Outbound packages
     * can start as created or shipped. Return packages must start as created, omit items, and
     * include return_line_items. Use mark_shipped after the buyer hands over the return package.
     * Value enum: "created", "shipped". [].status_reason (Optional): string. minLength: 1.
     * [].tracking_number (Optional): string. minLength: 1. [].tracking_url (Optional): string.
     * Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1.
     * [].weight (Optional): {@link WeightInput}. A weight value in grams, kilograms, ounces, or
     * pounds, used in delivery profile configuration. [].oneOf[1] (Value): {@link
     * PackageCreateInputCreatedInput}. The `created` variant of `PackageCreateInput`. [].oneOf[2]
     * (Value): {@link PackageCreateInputShippedInput}. The `shipped` variant of
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
    /** Value enum: "single_package". */
    "packaging": "single_package";
})
    & (({
    "packages"?: never;
}));
/** The request body for: Transition fulfillment. */
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
/** The `accept` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestAccept = {
    /** Value enum: "accept". */
    "action": "accept" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `accept` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestAcceptInput = {
    /** Value enum: "accept". */
    "action": "accept";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `cancel` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestCancel = {
    /** Value enum: "cancel". */
    "action": "cancel" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `cancel` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestCancelInput = {
    /** Value enum: "cancel". */
    "action": "cancel";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `complete` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestComplete = {
    /** Value enum: "complete". */
    "action": "complete" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `complete` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestCompleteInput = {
    /** Value enum: "complete". */
    "action": "complete";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `dispatch` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestDispatch = {
    /** Value enum: "dispatch". */
    "action": "dispatch" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `dispatch` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestDispatchInput = {
    /** Value enum: "dispatch". */
    "action": "dispatch";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `fail` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestFail = {
    /** Value enum: "fail". */
    "action": "fail" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    "release_quantity": boolean;
};
/** The `fail` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestFailInput = {
    /** Value enum: "fail". */
    "action": "fail";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
    "release_quantity": boolean;
};
/** The `hold` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestHold = {
    /** Value enum: "hold". */
    "action": "hold" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Value enum: "payment_review", "inventory_issue", "address_issue", "customer_request",
     * "provider_issue", "scheduling_issue", "fraud_review", "other".
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
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The `hold` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestHoldInput = {
    /** Value enum: "hold". */
    "action": "hold";
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string | globalThis.Date;
    /**
     * Value enum: "payment_review", "inventory_issue", "address_issue", "customer_request",
     * "provider_issue", "scheduling_issue", "fraud_review", "other".
     */
    "reason": "payment_review"
        | "inventory_issue"
        | "address_issue"
        | "customer_request"
        | "provider_issue"
        | "scheduling_issue"
        | "fraud_review"
        | "other";
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};
/** The request body for: Transition fulfillment. */
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
/** The `mark_no_show` variant of `FulfillmentTransitionRequest`. */
export type FulfillmentTransitionRequestMarkNoShow = {
    /** Value enum: "mark_no_show". */
    "action": "mark_no_show" | (string & {});
    /** Value enum: "send", "suppress". */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** Resource version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at"?: string;
    /**
     * Value enum: "customer_no_show", "provider_no_show", "location_unavailable",
     * "scheduling_error", "other".
     */
    "reason": "customer_no_show"
        | "provider_no_show"
        | "location_unavailable"
        | "scheduling_error"
        | "other"
        | (string & {});
    /** Your note explaining this transition. minLength: 1. maxLength: 500. */
    "reason_message"?: string;
};

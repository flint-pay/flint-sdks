import type { InventoryActionRequired } from './types-28.js';
import type { InventoryReservation, InventoryLevel, InventoryOriginPolicy, InventoryOriginPolicyRequestInput } from './types-29.js';
import type { MerchantWebhookEnvelope } from './types-37.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { ResponseMeta, ResourceType } from './types-54.js';
import type { InputValue } from '../runtime.js';
import type { CommitInventoryReservationRequestInput, ConsumeInventoryReservationRequestInput } from './types-7.js';
import type { CreateInventoryReservationRequestInput } from './types-10.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { ReleaseInventoryReservationRequestInput } from './types-53.js';
import type { UpdateInventoryReservationRequestInput } from './types-66.js';
import type { ErrorDetail, ErrorObject } from './types-24.js';
export type InventoryReservationHoldExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "expires_at": string | null;
            "idempotency_key"?: string;
            "inventory_action_required"?: InventoryActionRequired;
            "inventory_reservation_id": string;
            "inventory_routing_source": InventoryRoutingSource;
            "lines": Array<InventoryReservationLine>;
            "owner": InventoryReservationOwner;
            "replacement_inventory_reservation_id"?: string;
            "source_inventory_reservation_id"?: string;
            "status": "active" | "closed" | (string & {});
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_reservation.hold_expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "expires_at": string | null;
            "idempotency_key"?: string;
            "inventory_action_required"?: InventoryActionRequired;
            "inventory_reservation_id": string;
            "inventory_routing_source": InventoryRoutingSource;
            "lines": Array<InventoryReservationLine>;
            "owner": InventoryReservationOwner;
            "replacement_inventory_reservation_id"?: string;
            "source_inventory_reservation_id"?: string;
            "status": "active" | "closed" | (string & {});
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_reservation.hold_expired";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_reservation.hold_expired";
});
/**
 * The `inventory_reservation.hold_expired` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InventoryReservationHoldExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_reason (Optional): string or null. How the reservation
     * ended. adopted when its remaining held stock moved to a delivery selection. mixed when more
     * than one terminal outcome applied. `null` when the reservation isn't closed. Value enum:
     * "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When held quantity is
     * released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet
     * carries the same deadline. Committed and consumed quantity never expire. `null` when no line
     * holds quantity or has unconfirmed backordered quantity. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.idempotency_key (Optional): string. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. object.inventory_action_required (Optional): {@link
     * InventoryActionRequired}. Present when the claim needs a merchant action before commerce can
     * continue. Says that an inventory reservation needs action, with the `reason` and the
     * reservation lines affected. object.inventory_reservation_id (Required): string. Unique
     * identifier for this inventory reservation, prefixed `invr_`. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.inventory_routing_source (Required): {@link
     * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
     * fixed Location, an allocation policy, or a specific policy revision. Where an order, payment
     * link, or reservation routes inventory from: a fixed Location, an inventory allocation
     * policy, or one policy revision. object.lines (Required): Array of {@link
     * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
     * Location. object.lines[] (Value): {@link InventoryReservationLine}. One item's location
     * allocation within a reservation. object.owner (Required): {@link InventoryReservationOwner}.
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who
     * holds an inventory reservation: either a merchant claim identified by your `key`, or an
     * order. object.replacement_inventory_reservation_id (Optional): string. Set on a reservation
     * whose claim Flint moved when it rerouted an order: the replacement reservation that now
     * holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.source_inventory_reservation_id (Optional):
     * string. Set on a replacement reservation: the reservation whose claim Flint moved here when
     * it rerouted an order. This reservation holds the quantity that reservation reports as
     * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". object.status (Required):
     * string. active while any held, committed, or backordered quantity remains; closed once none
     * does. Value enum: "active", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this reservation now. Empty for a closed reservation and for one
     * Flint holds for an order. Resending targets already applied succeeds in any status. Computed
     * when Flint produced this response or event, so replays and webhooks keep their original
     * value. [] enum: "commit", "consume", "release". object.supported_actions[] (Value): string.
     * Value enum: "commit", "consume", "release". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. The reservation version. Send it as expected_version to reject a write if the
     * reservation changed. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * closed_reason (Optional): string or null. How the reservation ended. adopted when its
         * remaining held stock moved to a delivery selection. mixed when more than one terminal
         * outcome applied. `null` when the reservation isn't closed. Value enum: "consumed",
         * "released", "expired", "reallocated", "adopted", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * expires_at (Required): string or null. When held quantity is released if it isn't
         * committed first. Backordered quantity that payment hasn't confirmed yet carries the same
         * deadline. Committed and consumed quantity never expire. `null` when no line holds
         * quantity or has unconfirmed backordered quantity. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". idempotency_key (Optional): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. inventory_action_required (Optional): {@link
         * InventoryActionRequired}. Present when the claim needs a merchant action before commerce
         * can continue. Says that an inventory reservation needs action, with the `reason` and the
         * reservation lines affected. inventory_reservation_id (Required): string. Unique
         * identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_routing_source (Required): {@link
         * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
         * fixed Location, an allocation policy, or a specific policy revision. Where an order,
         * payment link, or reservation routes inventory from: a fixed Location, an inventory
         * allocation policy, or one policy revision. lines (Required): Array of {@link
         * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
         * Location. lines[] (Value): {@link InventoryReservationLine}. One item's location
         * allocation within a reservation. owner (Required): {@link InventoryReservationOwner}.
         * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for.
         * Who holds an inventory reservation: either a merchant claim identified by your `key`, or
         * an order. replacement_inventory_reservation_id (Optional): string. Set on a reservation
         * whose claim Flint moved when it rerouted an order: the replacement reservation that now
         * holds the quantity named in this reservation's reallocated_quantity. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id (Optional): string.
         * Set on a replacement reservation: the reservation whose claim Flint moved here when it
         * rerouted an order. This reservation holds the quantity that reservation reports as
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". status (Required):
         * string. active while any held, committed, or backordered quantity remains; closed once
         * none does. Value enum: "active", "closed". supported_actions (Required): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release". supported_actions[]
         * (Value): string. Value enum: "commit", "consume", "release". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. The reservation version. Send it as expected_version to reject a
         * write if the reservation changed. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null.
             */
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Present when the claim needs a merchant action before commerce can continue. Says
             * that an inventory reservation needs action, with the `reason` and the reservation
             * lines affected.
             */
            "inventory_action_required"?: InventoryActionRequired;
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id": string;
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. Where an order, payment link, or
             * reservation routes inventory from: a fixed Location, an inventory allocation policy,
             * or one policy revision.
             */
            "inventory_routing_source": InventoryRoutingSource;
            /**
             * Allocations of the reserved stock, one for each item and Location. [] (Value):
             * {@link InventoryReservationLine}. One item's location allocation within a
             * reservation.
             */
            "lines": Array<InventoryReservationLine>;
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. Who holds an inventory reservation: either a merchant claim identified by your
             * `key`, or an order.
             */
            "owner": InventoryReservationOwner;
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "replacement_inventory_reservation_id"?: string;
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "source_inventory_reservation_id"?: string;
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed".
             */
            "status": "active" | "closed" | (string & {});
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". [] (Value):
             * string. Value enum: "commit", "consume", "release".
             */
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_reservation.hold_expired". */
    "event_type"?: "inventory_reservation.hold_expired";
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
 * The `inventory_reservation.hold_expired` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationHoldExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_reason (Optional): string or null. How the reservation
     * ended. adopted when its remaining held stock moved to a delivery selection. mixed when more
     * than one terminal outcome applied. `null` when the reservation isn't closed. Value enum:
     * "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When held quantity is
     * released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet
     * carries the same deadline. Committed and consumed quantity never expire. `null` when no line
     * holds quantity or has unconfirmed backordered quantity. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.idempotency_key (Optional): string. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. object.inventory_action_required (Optional): {@link
     * InventoryActionRequired}. Present when the claim needs a merchant action before commerce can
     * continue. Says that an inventory reservation needs action, with the `reason` and the
     * reservation lines affected. object.inventory_reservation_id (Required): string. Unique
     * identifier for this inventory reservation, prefixed `invr_`. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.inventory_routing_source (Required): {@link
     * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
     * fixed Location, an allocation policy, or a specific policy revision. Where an order, payment
     * link, or reservation routes inventory from: a fixed Location, an inventory allocation
     * policy, or one policy revision. object.lines (Required): Array of {@link
     * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
     * Location. object.lines[] (Value): {@link InventoryReservationLine}. One item's location
     * allocation within a reservation. object.owner (Required): {@link InventoryReservationOwner}.
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who
     * holds an inventory reservation: either a merchant claim identified by your `key`, or an
     * order. object.replacement_inventory_reservation_id (Optional): string. Set on a reservation
     * whose claim Flint moved when it rerouted an order: the replacement reservation that now
     * holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.source_inventory_reservation_id (Optional):
     * string. Set on a replacement reservation: the reservation whose claim Flint moved here when
     * it rerouted an order. This reservation holds the quantity that reservation reports as
     * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". object.status (Required):
     * string. active while any held, committed, or backordered quantity remains; closed once none
     * does. Value enum: "active", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this reservation now. Empty for a closed reservation and for one
     * Flint holds for an order. Resending targets already applied succeeds in any status. Computed
     * when Flint produced this response or event, so replays and webhooks keep their original
     * value. [] enum: "commit", "consume", "release". object.supported_actions[] (Value): string.
     * Value enum: "commit", "consume", "release". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. The reservation version. Send it as expected_version to reject a write if the
     * reservation changed. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * closed_reason (Optional): string or null. How the reservation ended. adopted when its
         * remaining held stock moved to a delivery selection. mixed when more than one terminal
         * outcome applied. `null` when the reservation isn't closed. Value enum: "consumed",
         * "released", "expired", "reallocated", "adopted", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * expires_at (Required): string or null. When held quantity is released if it isn't
         * committed first. Backordered quantity that payment hasn't confirmed yet carries the same
         * deadline. Committed and consumed quantity never expire. `null` when no line holds
         * quantity or has unconfirmed backordered quantity. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". idempotency_key (Optional): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. inventory_action_required (Optional): {@link
         * InventoryActionRequired}. Present when the claim needs a merchant action before commerce
         * can continue. Says that an inventory reservation needs action, with the `reason` and the
         * reservation lines affected. inventory_reservation_id (Required): string. Unique
         * identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_routing_source (Required): {@link
         * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
         * fixed Location, an allocation policy, or a specific policy revision. Where an order,
         * payment link, or reservation routes inventory from: a fixed Location, an inventory
         * allocation policy, or one policy revision. lines (Required): Array of {@link
         * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
         * Location. lines[] (Value): {@link InventoryReservationLine}. One item's location
         * allocation within a reservation. owner (Required): {@link InventoryReservationOwner}.
         * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for.
         * Who holds an inventory reservation: either a merchant claim identified by your `key`, or
         * an order. replacement_inventory_reservation_id (Optional): string. Set on a reservation
         * whose claim Flint moved when it rerouted an order: the replacement reservation that now
         * holds the quantity named in this reservation's reallocated_quantity. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id (Optional): string.
         * Set on a replacement reservation: the reservation whose claim Flint moved here when it
         * rerouted an order. This reservation holds the quantity that reservation reports as
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". status (Required):
         * string. active while any held, committed, or backordered quantity remains; closed once
         * none does. Value enum: "active", "closed". supported_actions (Required): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release". supported_actions[]
         * (Value): string. Value enum: "commit", "consume", "release". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. The reservation version. Send it as expected_version to reject a
         * write if the reservation changed. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null.
             */
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Present when the claim needs a merchant action before commerce can continue. Says
             * that an inventory reservation needs action, with the `reason` and the reservation
             * lines affected.
             */
            "inventory_action_required"?: InventoryActionRequired;
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id": string;
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. Where an order, payment link, or
             * reservation routes inventory from: a fixed Location, an inventory allocation policy,
             * or one policy revision.
             */
            "inventory_routing_source": InventoryRoutingSource;
            /**
             * Allocations of the reserved stock, one for each item and Location. [] (Value):
             * {@link InventoryReservationLine}. One item's location allocation within a
             * reservation.
             */
            "lines": Array<InventoryReservationLine>;
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. Who holds an inventory reservation: either a merchant claim identified by your
             * `key`, or an order.
             */
            "owner": InventoryReservationOwner;
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "replacement_inventory_reservation_id"?: string;
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "source_inventory_reservation_id"?: string;
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed".
             */
            "status": "active" | "closed" | (string & {});
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". [] (Value):
             * string. Value enum: "commit", "consume", "release".
             */
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_reservation.hold_expired". */
    "event_type"?: "inventory_reservation.hold_expired";
});
/** One item's location allocation within a reservation. */
export type InventoryReservationLine = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "allocated_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "at_risk_committed_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "at_risk_held_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "backordered_quantity": number;
    /**
     * ID of the bundle component this line covers. Absent when the line isn't for a bundle
     * component. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     */
    "bundle_component_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "committed_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "consumed_quantity": number;
    /**
     * Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item
     * ID when you sent none.
     */
    "demand_key": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "held_quantity": number;
    /** ID of the inventory item to reserve. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
    "inventory_item_id": string;
    /**
     * Unique identifier for this inventory reservation line, prefixed `invrln_`. Example:
     * "invrln_01KEZF7C002JCDA729XDSNWGY5".
     */
    "inventory_reservation_line_id": string;
    /**
     * ID of the Location the stock is allocated from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Order that owns this record or its referenced line item and charge. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * ID of the order line item this line covers. Absent unless an order holds the reservation.
     * Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "reallocated_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "released_from_backordered_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "released_from_committed_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "released_from_held_quantity": number;
};
/** A page of `InventoryReservation` objects. */
export type InventoryReservationListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryReservation}. A claim on stock. Quantity moves from held to committed to consumed,
     * and can be released or reallocated.
     */
    "data": Array<InventoryReservation>;
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
/**
 * Who holds an inventory reservation: either a merchant claim identified by your `key`, or an
 * order.
 */
export type InventoryReservationOwner = ((InventoryReservationOwnerMerchant) | (InventoryReservationOwnerOrder) | (Record<string, unknown>));
/** The `merchant` variant of `InventoryReservationOwner`. */
export type InventoryReservationOwnerMerchant = {
    /** Your identifier for the claim that holds the stock. */
    "key": string;
    /** Who holds the reservation. Value enum: "merchant". */
    "type": "merchant" | (string & {});
};
/** The `order` variant of `InventoryReservationOwner`. */
export type InventoryReservationOwnerOrder = {
    /**
     * The order Flint holds the stock for. Absent only on a closed reservation whose order Flint
     * can no longer identify. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /** Who holds the reservation. Value enum: "order". */
    "type": "order" | (string & {});
};
/**
 * The owner of a merchant inventory reservation you create: your `key` for what holds the stock.
 */
export type InventoryReservationOwnerRequest = {
    /**
     * Your stable identifier for what holds the stock, such as a cart ID. One active reservation
     * per key. minLength: 1. maxLength: 255.
     */
    "key": string;
};
/**
 * The owner of a merchant inventory reservation you create: your `key` for what holds the stock.
 */
export type InventoryReservationOwnerRequestInput = InventoryReservationOwnerRequest;
export type InventoryReservationReleasedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "expires_at": string | null;
            "idempotency_key"?: string;
            "inventory_action_required"?: InventoryActionRequired;
            "inventory_reservation_id": string;
            "inventory_routing_source": InventoryRoutingSource;
            "lines": Array<InventoryReservationLine>;
            "owner": InventoryReservationOwner;
            "replacement_inventory_reservation_id"?: string;
            "source_inventory_reservation_id"?: string;
            "status": "active" | "closed" | (string & {});
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_reservation.released";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "expires_at": string | null;
            "idempotency_key"?: string;
            "inventory_action_required"?: InventoryActionRequired;
            "inventory_reservation_id": string;
            "inventory_routing_source": InventoryRoutingSource;
            "lines": Array<InventoryReservationLine>;
            "owner": InventoryReservationOwner;
            "replacement_inventory_reservation_id"?: string;
            "source_inventory_reservation_id"?: string;
            "status": "active" | "closed" | (string & {});
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_reservation.released";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_reservation.released";
});
/**
 * The `inventory_reservation.released` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationReleasedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_reason (Optional): string or null. How the reservation
     * ended. adopted when its remaining held stock moved to a delivery selection. mixed when more
     * than one terminal outcome applied. `null` when the reservation isn't closed. Value enum:
     * "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When held quantity is
     * released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet
     * carries the same deadline. Committed and consumed quantity never expire. `null` when no line
     * holds quantity or has unconfirmed backordered quantity. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.idempotency_key (Optional): string. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. object.inventory_action_required (Optional): {@link
     * InventoryActionRequired}. Present when the claim needs a merchant action before commerce can
     * continue. Says that an inventory reservation needs action, with the `reason` and the
     * reservation lines affected. object.inventory_reservation_id (Required): string. Unique
     * identifier for this inventory reservation, prefixed `invr_`. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.inventory_routing_source (Required): {@link
     * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
     * fixed Location, an allocation policy, or a specific policy revision. Where an order, payment
     * link, or reservation routes inventory from: a fixed Location, an inventory allocation
     * policy, or one policy revision. object.lines (Required): Array of {@link
     * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
     * Location. object.lines[] (Value): {@link InventoryReservationLine}. One item's location
     * allocation within a reservation. object.owner (Required): {@link InventoryReservationOwner}.
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who
     * holds an inventory reservation: either a merchant claim identified by your `key`, or an
     * order. object.replacement_inventory_reservation_id (Optional): string. Set on a reservation
     * whose claim Flint moved when it rerouted an order: the replacement reservation that now
     * holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.source_inventory_reservation_id (Optional):
     * string. Set on a replacement reservation: the reservation whose claim Flint moved here when
     * it rerouted an order. This reservation holds the quantity that reservation reports as
     * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". object.status (Required):
     * string. active while any held, committed, or backordered quantity remains; closed once none
     * does. Value enum: "active", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this reservation now. Empty for a closed reservation and for one
     * Flint holds for an order. Resending targets already applied succeeds in any status. Computed
     * when Flint produced this response or event, so replays and webhooks keep their original
     * value. [] enum: "commit", "consume", "release". object.supported_actions[] (Value): string.
     * Value enum: "commit", "consume", "release". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. The reservation version. Send it as expected_version to reject a write if the
     * reservation changed. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * closed_reason (Optional): string or null. How the reservation ended. adopted when its
         * remaining held stock moved to a delivery selection. mixed when more than one terminal
         * outcome applied. `null` when the reservation isn't closed. Value enum: "consumed",
         * "released", "expired", "reallocated", "adopted", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * expires_at (Required): string or null. When held quantity is released if it isn't
         * committed first. Backordered quantity that payment hasn't confirmed yet carries the same
         * deadline. Committed and consumed quantity never expire. `null` when no line holds
         * quantity or has unconfirmed backordered quantity. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". idempotency_key (Optional): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. inventory_action_required (Optional): {@link
         * InventoryActionRequired}. Present when the claim needs a merchant action before commerce
         * can continue. Says that an inventory reservation needs action, with the `reason` and the
         * reservation lines affected. inventory_reservation_id (Required): string. Unique
         * identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_routing_source (Required): {@link
         * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
         * fixed Location, an allocation policy, or a specific policy revision. Where an order,
         * payment link, or reservation routes inventory from: a fixed Location, an inventory
         * allocation policy, or one policy revision. lines (Required): Array of {@link
         * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
         * Location. lines[] (Value): {@link InventoryReservationLine}. One item's location
         * allocation within a reservation. owner (Required): {@link InventoryReservationOwner}.
         * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for.
         * Who holds an inventory reservation: either a merchant claim identified by your `key`, or
         * an order. replacement_inventory_reservation_id (Optional): string. Set on a reservation
         * whose claim Flint moved when it rerouted an order: the replacement reservation that now
         * holds the quantity named in this reservation's reallocated_quantity. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id (Optional): string.
         * Set on a replacement reservation: the reservation whose claim Flint moved here when it
         * rerouted an order. This reservation holds the quantity that reservation reports as
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". status (Required):
         * string. active while any held, committed, or backordered quantity remains; closed once
         * none does. Value enum: "active", "closed". supported_actions (Required): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release". supported_actions[]
         * (Value): string. Value enum: "commit", "consume", "release". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. The reservation version. Send it as expected_version to reject a
         * write if the reservation changed. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null.
             */
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Present when the claim needs a merchant action before commerce can continue. Says
             * that an inventory reservation needs action, with the `reason` and the reservation
             * lines affected.
             */
            "inventory_action_required"?: InventoryActionRequired;
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id": string;
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. Where an order, payment link, or
             * reservation routes inventory from: a fixed Location, an inventory allocation policy,
             * or one policy revision.
             */
            "inventory_routing_source": InventoryRoutingSource;
            /**
             * Allocations of the reserved stock, one for each item and Location. [] (Value):
             * {@link InventoryReservationLine}. One item's location allocation within a
             * reservation.
             */
            "lines": Array<InventoryReservationLine>;
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. Who holds an inventory reservation: either a merchant claim identified by your
             * `key`, or an order.
             */
            "owner": InventoryReservationOwner;
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "replacement_inventory_reservation_id"?: string;
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "source_inventory_reservation_id"?: string;
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed".
             */
            "status": "active" | "closed" | (string & {});
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". [] (Value):
             * string. Value enum: "commit", "consume", "release".
             */
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_reservation.released". */
    "event_type"?: "inventory_reservation.released";
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
 * The `inventory_reservation.released` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationReleasedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_reason (Optional): string or null. How the reservation
     * ended. adopted when its remaining held stock moved to a delivery selection. mixed when more
     * than one terminal outcome applied. `null` when the reservation isn't closed. Value enum:
     * "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When held quantity is
     * released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet
     * carries the same deadline. Committed and consumed quantity never expire. `null` when no line
     * holds quantity or has unconfirmed backordered quantity. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.idempotency_key (Optional): string. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. object.inventory_action_required (Optional): {@link
     * InventoryActionRequired}. Present when the claim needs a merchant action before commerce can
     * continue. Says that an inventory reservation needs action, with the `reason` and the
     * reservation lines affected. object.inventory_reservation_id (Required): string. Unique
     * identifier for this inventory reservation, prefixed `invr_`. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.inventory_routing_source (Required): {@link
     * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
     * fixed Location, an allocation policy, or a specific policy revision. Where an order, payment
     * link, or reservation routes inventory from: a fixed Location, an inventory allocation
     * policy, or one policy revision. object.lines (Required): Array of {@link
     * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
     * Location. object.lines[] (Value): {@link InventoryReservationLine}. One item's location
     * allocation within a reservation. object.owner (Required): {@link InventoryReservationOwner}.
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who
     * holds an inventory reservation: either a merchant claim identified by your `key`, or an
     * order. object.replacement_inventory_reservation_id (Optional): string. Set on a reservation
     * whose claim Flint moved when it rerouted an order: the replacement reservation that now
     * holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.source_inventory_reservation_id (Optional):
     * string. Set on a replacement reservation: the reservation whose claim Flint moved here when
     * it rerouted an order. This reservation holds the quantity that reservation reports as
     * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". object.status (Required):
     * string. active while any held, committed, or backordered quantity remains; closed once none
     * does. Value enum: "active", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this reservation now. Empty for a closed reservation and for one
     * Flint holds for an order. Resending targets already applied succeeds in any status. Computed
     * when Flint produced this response or event, so replays and webhooks keep their original
     * value. [] enum: "commit", "consume", "release". object.supported_actions[] (Value): string.
     * Value enum: "commit", "consume", "release". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. The reservation version. Send it as expected_version to reject a write if the
     * reservation changed. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * closed_reason (Optional): string or null. How the reservation ended. adopted when its
         * remaining held stock moved to a delivery selection. mixed when more than one terminal
         * outcome applied. `null` when the reservation isn't closed. Value enum: "consumed",
         * "released", "expired", "reallocated", "adopted", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * expires_at (Required): string or null. When held quantity is released if it isn't
         * committed first. Backordered quantity that payment hasn't confirmed yet carries the same
         * deadline. Committed and consumed quantity never expire. `null` when no line holds
         * quantity or has unconfirmed backordered quantity. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". idempotency_key (Optional): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. inventory_action_required (Optional): {@link
         * InventoryActionRequired}. Present when the claim needs a merchant action before commerce
         * can continue. Says that an inventory reservation needs action, with the `reason` and the
         * reservation lines affected. inventory_reservation_id (Required): string. Unique
         * identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_routing_source (Required): {@link
         * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
         * fixed Location, an allocation policy, or a specific policy revision. Where an order,
         * payment link, or reservation routes inventory from: a fixed Location, an inventory
         * allocation policy, or one policy revision. lines (Required): Array of {@link
         * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
         * Location. lines[] (Value): {@link InventoryReservationLine}. One item's location
         * allocation within a reservation. owner (Required): {@link InventoryReservationOwner}.
         * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for.
         * Who holds an inventory reservation: either a merchant claim identified by your `key`, or
         * an order. replacement_inventory_reservation_id (Optional): string. Set on a reservation
         * whose claim Flint moved when it rerouted an order: the replacement reservation that now
         * holds the quantity named in this reservation's reallocated_quantity. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id (Optional): string.
         * Set on a replacement reservation: the reservation whose claim Flint moved here when it
         * rerouted an order. This reservation holds the quantity that reservation reports as
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". status (Required):
         * string. active while any held, committed, or backordered quantity remains; closed once
         * none does. Value enum: "active", "closed". supported_actions (Required): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release". supported_actions[]
         * (Value): string. Value enum: "commit", "consume", "release". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. The reservation version. Send it as expected_version to reject a
         * write if the reservation changed. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null.
             */
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Present when the claim needs a merchant action before commerce can continue. Says
             * that an inventory reservation needs action, with the `reason` and the reservation
             * lines affected.
             */
            "inventory_action_required"?: InventoryActionRequired;
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id": string;
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. Where an order, payment link, or
             * reservation routes inventory from: a fixed Location, an inventory allocation policy,
             * or one policy revision.
             */
            "inventory_routing_source": InventoryRoutingSource;
            /**
             * Allocations of the reserved stock, one for each item and Location. [] (Value):
             * {@link InventoryReservationLine}. One item's location allocation within a
             * reservation.
             */
            "lines": Array<InventoryReservationLine>;
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. Who holds an inventory reservation: either a merchant claim identified by your
             * `key`, or an order.
             */
            "owner": InventoryReservationOwner;
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "replacement_inventory_reservation_id"?: string;
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "source_inventory_reservation_id"?: string;
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed".
             */
            "status": "active" | "closed" | (string & {});
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". [] (Value):
             * string. Value enum: "commit", "consume", "release".
             */
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_reservation.released". */
    "event_type"?: "inventory_reservation.released";
});
/** A response containing `InventoryReservation` data. */
export type InventoryReservationResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A claim on stock.
     * Quantity moves from held to committed to consumed, and can be released or reallocated.
     */
    "data": InventoryReservation;
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
 * inventory_reservation is the primary resource and expected_version target. Stock-moving actions
 * return this result instead of a resource alone.
 */
export type InventoryReservationResult = {
    /**
     * Post-commit state of every level this command touched, so no follow-up read is needed. A
     * replay returns the levels the original command produced. [] (Value): {@link InventoryLevel}.
     * The quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
    /**
     * The inventory reservation. A claim on stock. Quantity moves from held to committed to
     * consumed, and can be released or reallocated.
     */
    "inventory_reservation": InventoryReservation;
};
/** A response containing `InventoryReservationResult` data. */
export type InventoryReservationResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. inventory_reservation is
     * the primary resource and expected_version target. Stock-moving actions return this result
     * instead of a resource alone.
     */
    "data": InventoryReservationResult;
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
export type InventoryReservationUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "expires_at": string | null;
            "idempotency_key"?: string;
            "inventory_action_required"?: InventoryActionRequired;
            "inventory_reservation_id": string;
            "inventory_routing_source": InventoryRoutingSource;
            "lines": Array<InventoryReservationLine>;
            "owner": InventoryReservationOwner;
            "replacement_inventory_reservation_id"?: string;
            "source_inventory_reservation_id"?: string;
            "status": "active" | "closed" | (string & {});
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_reservation.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "expires_at": string | null;
            "idempotency_key"?: string;
            "inventory_action_required"?: InventoryActionRequired;
            "inventory_reservation_id": string;
            "inventory_routing_source": InventoryRoutingSource;
            "lines": Array<InventoryReservationLine>;
            "owner": InventoryReservationOwner;
            "replacement_inventory_reservation_id"?: string;
            "source_inventory_reservation_id"?: string;
            "status": "active" | "closed" | (string & {});
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_reservation.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_reservation.updated";
});
/**
 * The `inventory_reservation.updated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_reason (Optional): string or null. How the reservation
     * ended. adopted when its remaining held stock moved to a delivery selection. mixed when more
     * than one terminal outcome applied. `null` when the reservation isn't closed. Value enum:
     * "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When held quantity is
     * released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet
     * carries the same deadline. Committed and consumed quantity never expire. `null` when no line
     * holds quantity or has unconfirmed backordered quantity. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.idempotency_key (Optional): string. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. object.inventory_action_required (Optional): {@link
     * InventoryActionRequired}. Present when the claim needs a merchant action before commerce can
     * continue. Says that an inventory reservation needs action, with the `reason` and the
     * reservation lines affected. object.inventory_reservation_id (Required): string. Unique
     * identifier for this inventory reservation, prefixed `invr_`. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.inventory_routing_source (Required): {@link
     * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
     * fixed Location, an allocation policy, or a specific policy revision. Where an order, payment
     * link, or reservation routes inventory from: a fixed Location, an inventory allocation
     * policy, or one policy revision. object.lines (Required): Array of {@link
     * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
     * Location. object.lines[] (Value): {@link InventoryReservationLine}. One item's location
     * allocation within a reservation. object.owner (Required): {@link InventoryReservationOwner}.
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who
     * holds an inventory reservation: either a merchant claim identified by your `key`, or an
     * order. object.replacement_inventory_reservation_id (Optional): string. Set on a reservation
     * whose claim Flint moved when it rerouted an order: the replacement reservation that now
     * holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.source_inventory_reservation_id (Optional):
     * string. Set on a replacement reservation: the reservation whose claim Flint moved here when
     * it rerouted an order. This reservation holds the quantity that reservation reports as
     * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". object.status (Required):
     * string. active while any held, committed, or backordered quantity remains; closed once none
     * does. Value enum: "active", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this reservation now. Empty for a closed reservation and for one
     * Flint holds for an order. Resending targets already applied succeeds in any status. Computed
     * when Flint produced this response or event, so replays and webhooks keep their original
     * value. [] enum: "commit", "consume", "release". object.supported_actions[] (Value): string.
     * Value enum: "commit", "consume", "release". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. The reservation version. Send it as expected_version to reject a write if the
     * reservation changed. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * closed_reason (Optional): string or null. How the reservation ended. adopted when its
         * remaining held stock moved to a delivery selection. mixed when more than one terminal
         * outcome applied. `null` when the reservation isn't closed. Value enum: "consumed",
         * "released", "expired", "reallocated", "adopted", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * expires_at (Required): string or null. When held quantity is released if it isn't
         * committed first. Backordered quantity that payment hasn't confirmed yet carries the same
         * deadline. Committed and consumed quantity never expire. `null` when no line holds
         * quantity or has unconfirmed backordered quantity. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". idempotency_key (Optional): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. inventory_action_required (Optional): {@link
         * InventoryActionRequired}. Present when the claim needs a merchant action before commerce
         * can continue. Says that an inventory reservation needs action, with the `reason` and the
         * reservation lines affected. inventory_reservation_id (Required): string. Unique
         * identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_routing_source (Required): {@link
         * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
         * fixed Location, an allocation policy, or a specific policy revision. Where an order,
         * payment link, or reservation routes inventory from: a fixed Location, an inventory
         * allocation policy, or one policy revision. lines (Required): Array of {@link
         * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
         * Location. lines[] (Value): {@link InventoryReservationLine}. One item's location
         * allocation within a reservation. owner (Required): {@link InventoryReservationOwner}.
         * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for.
         * Who holds an inventory reservation: either a merchant claim identified by your `key`, or
         * an order. replacement_inventory_reservation_id (Optional): string. Set on a reservation
         * whose claim Flint moved when it rerouted an order: the replacement reservation that now
         * holds the quantity named in this reservation's reallocated_quantity. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id (Optional): string.
         * Set on a replacement reservation: the reservation whose claim Flint moved here when it
         * rerouted an order. This reservation holds the quantity that reservation reports as
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". status (Required):
         * string. active while any held, committed, or backordered quantity remains; closed once
         * none does. Value enum: "active", "closed". supported_actions (Required): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release". supported_actions[]
         * (Value): string. Value enum: "commit", "consume", "release". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. The reservation version. Send it as expected_version to reject a
         * write if the reservation changed. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null.
             */
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Present when the claim needs a merchant action before commerce can continue. Says
             * that an inventory reservation needs action, with the `reason` and the reservation
             * lines affected.
             */
            "inventory_action_required"?: InventoryActionRequired;
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id": string;
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. Where an order, payment link, or
             * reservation routes inventory from: a fixed Location, an inventory allocation policy,
             * or one policy revision.
             */
            "inventory_routing_source": InventoryRoutingSource;
            /**
             * Allocations of the reserved stock, one for each item and Location. [] (Value):
             * {@link InventoryReservationLine}. One item's location allocation within a
             * reservation.
             */
            "lines": Array<InventoryReservationLine>;
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. Who holds an inventory reservation: either a merchant claim identified by your
             * `key`, or an order.
             */
            "owner": InventoryReservationOwner;
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "replacement_inventory_reservation_id"?: string;
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "source_inventory_reservation_id"?: string;
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed".
             */
            "status": "active" | "closed" | (string & {});
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". [] (Value):
             * string. Value enum: "commit", "consume", "release".
             */
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_reservation.updated". */
    "event_type"?: "inventory_reservation.updated";
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
 * The `inventory_reservation.updated` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_reason (Optional): string or null. How the reservation
     * ended. adopted when its remaining held stock moved to a delivery selection. mixed when more
     * than one terminal outcome applied. `null` when the reservation isn't closed. Value enum:
     * "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.expires_at (Required): string or null. When held quantity is
     * released if it isn't committed first. Backordered quantity that payment hasn't confirmed yet
     * carries the same deadline. Committed and consumed quantity never expire. `null` when no line
     * holds quantity or has unconfirmed backordered quantity. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.idempotency_key (Optional): string. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. object.inventory_action_required (Optional): {@link
     * InventoryActionRequired}. Present when the claim needs a merchant action before commerce can
     * continue. Says that an inventory reservation needs action, with the `reason` and the
     * reservation lines affected. object.inventory_reservation_id (Required): string. Unique
     * identifier for this inventory reservation, prefixed `invr_`. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.inventory_routing_source (Required): {@link
     * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
     * fixed Location, an allocation policy, or a specific policy revision. Where an order, payment
     * link, or reservation routes inventory from: a fixed Location, an inventory allocation
     * policy, or one policy revision. object.lines (Required): Array of {@link
     * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
     * Location. object.lines[] (Value): {@link InventoryReservationLine}. One item's location
     * allocation within a reservation. object.owner (Required): {@link InventoryReservationOwner}.
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who
     * holds an inventory reservation: either a merchant claim identified by your `key`, or an
     * order. object.replacement_inventory_reservation_id (Optional): string. Set on a reservation
     * whose claim Flint moved when it rerouted an order: the replacement reservation that now
     * holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12". object.source_inventory_reservation_id (Optional):
     * string. Set on a replacement reservation: the reservation whose claim Flint moved here when
     * it rerouted an order. This reservation holds the quantity that reservation reports as
     * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". object.status (Required):
     * string. active while any held, committed, or backordered quantity remains; closed once none
     * does. Value enum: "active", "closed". object.supported_actions (Required): Array of string.
     * Actions that can change this reservation now. Empty for a closed reservation and for one
     * Flint holds for an order. Resending targets already applied succeeds in any status. Computed
     * when Flint produced this response or event, so replays and webhooks keep their original
     * value. [] enum: "commit", "consume", "release". object.supported_actions[] (Value): string.
     * Value enum: "commit", "consume", "release". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. The reservation version. Send it as expected_version to reject a write if the
     * reservation changed. Format: uint64. minimum: 1. previous_attributes (Optional): object.
     * Previous values of changed top-level fields in data.object, at this delivery's API version.
     * Nested changes include the whole previous top-level value. A value is null when the field
     * was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * closed_reason (Optional): string or null. How the reservation ended. adopted when its
         * remaining held stock moved to a delivery selection. mixed when more than one terminal
         * outcome applied. `null` when the reservation isn't closed. Value enum: "consumed",
         * "released", "expired", "reallocated", "adopted", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * expires_at (Required): string or null. When held quantity is released if it isn't
         * committed first. Backordered quantity that payment hasn't confirmed yet carries the same
         * deadline. Committed and consumed quantity never expire. `null` when no line holds
         * quantity or has unconfirmed backordered quantity. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". idempotency_key (Optional): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. inventory_action_required (Optional): {@link
         * InventoryActionRequired}. Present when the claim needs a merchant action before commerce
         * can continue. Says that an inventory reservation needs action, with the `reason` and the
         * reservation lines affected. inventory_reservation_id (Required): string. Unique
         * identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_routing_source (Required): {@link
         * InventoryRoutingSource}. How Flint chooses the Locations that serve the reservation: one
         * fixed Location, an allocation policy, or a specific policy revision. Where an order,
         * payment link, or reservation routes inventory from: a fixed Location, an inventory
         * allocation policy, or one policy revision. lines (Required): Array of {@link
         * InventoryReservationLine}. Allocations of the reserved stock, one for each item and
         * Location. lines[] (Value): {@link InventoryReservationLine}. One item's location
         * allocation within a reservation. owner (Required): {@link InventoryReservationOwner}.
         * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for.
         * Who holds an inventory reservation: either a merchant claim identified by your `key`, or
         * an order. replacement_inventory_reservation_id (Optional): string. Set on a reservation
         * whose claim Flint moved when it rerouted an order: the replacement reservation that now
         * holds the quantity named in this reservation's reallocated_quantity. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id (Optional): string.
         * Set on a replacement reservation: the reservation whose claim Flint moved here when it
         * rerouted an order. This reservation holds the quantity that reservation reports as
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". status (Required):
         * string. active while any held, committed, or backordered quantity remains; closed once
         * none does. Value enum: "active", "closed". supported_actions (Required): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release". supported_actions[]
         * (Value): string. Value enum: "commit", "consume", "release". updated_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version
         * (Required): integer. The reservation version. Send it as expected_version to reject a
         * write if the reservation changed. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null.
             */
            "closed_reason"?: "consumed"
                | "released"
                | "expired"
                | "reallocated"
                | "adopted"
                | "mixed"
                | null
                | (string & {})
                | null;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Present when the claim needs a merchant action before commerce can continue. Says
             * that an inventory reservation needs action, with the `reason` and the reservation
             * lines affected.
             */
            "inventory_action_required"?: InventoryActionRequired;
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "inventory_reservation_id": string;
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. Where an order, payment link, or
             * reservation routes inventory from: a fixed Location, an inventory allocation policy,
             * or one policy revision.
             */
            "inventory_routing_source": InventoryRoutingSource;
            /**
             * Allocations of the reserved stock, one for each item and Location. [] (Value):
             * {@link InventoryReservationLine}. One item's location allocation within a
             * reservation.
             */
            "lines": Array<InventoryReservationLine>;
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. Who holds an inventory reservation: either a merchant claim identified by your
             * `key`, or an order.
             */
            "owner": InventoryReservationOwner;
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "replacement_inventory_reservation_id"?: string;
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
             */
            "source_inventory_reservation_id"?: string;
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed".
             */
            "status": "active" | "closed" | (string & {});
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". [] (Value):
             * string. Value enum: "commit", "consume", "release".
             */
            "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryReservation>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_reservation.updated". */
    "event_type"?: "inventory_reservation.updated";
});
export type InventoryReservationsCommitParams = (InputValue<CommitInventoryReservationRequestInput>)
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
export type InventoryReservationsConsumeParams = (InputValue<ConsumeInventoryReservationRequestInput>)
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
export type InventoryReservationsCreateParams = (InputValue<CreateInventoryReservationRequestInput>)
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
export type InventoryReservationsGetParams = DisputesAcceptParams;
export type InventoryReservationsListParams = {
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
     * Filter by an inventory item on a reservation line. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Filter by a location on a reservation line. Combined with inventory_item_id, the same line
     * must match both. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
    /**
     * Filter by the reservation's resolved owner order. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by reservation status. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "active", "closed". Value enum: "active", "closed". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "active", "closed". anyOf[1][] (Value): string. Value enum:
     * "active", "closed". anyOf[2] (Value): string. Value enum: "active", "closed".
     */
    "status"?: InputValue<("active" | "closed") | readonly ("active" | "closed")[]>;
    /**
     * Filter by merchant or order ownership. Omit to return every owner type. Values are trimmed
     * and deduplicated in first-seen order; empty or unknown entries are rejected. Values within
     * this filter are ORed; separate filters are ANDed. [] enum: "merchant", "order". Value enum:
     * "merchant", "order". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "merchant",
     * "order". anyOf[1][] (Value): string. Value enum: "merchant", "order". anyOf[2] (Value):
     * string. Value enum: "merchant", "order".
     */
    "owner_type"?: InputValue<("merchant" | "order") | readonly ("merchant" | "order")[]>;
    /**
     * Filter merchant-owned reservations by exact owner key. Combined with owner_type=order,
     * returns an empty page.
     */
    "owner_key"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * True selects reservations with at-risk quantity; false selects reservations with none on any
     * line. Omit for all reservations.
     */
    "has_at_risk_quantity"?: InputValue<boolean>;
    /**
     * Filter by how the reservation ended. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "consumed", "released", "expired", "reallocated", "mixed",
     * "adopted". Value enum: "consumed", "released", "expired", "reallocated", "mixed", "adopted".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "consumed", "released", "expired",
     * "reallocated", "mixed", "adopted". anyOf[1][] (Value): string. Value enum: "consumed",
     * "released", "expired", "reallocated", "mixed", "adopted". anyOf[2] (Value): string. Value
     * enum: "consumed", "released", "expired", "reallocated", "mixed", "adopted".
     */
    "closed_reason"?: InputValue<("consumed" | "released" | "expired" | "reallocated" | "mixed" | "adopted")
        | readonly ("consumed" | "released" | "expired" | "reallocated" | "mixed" | "adopted")[]>;
    /** Inclusive lower bound on expires_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "expires_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on expires_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "expires_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
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
export type InventoryReservationsReleaseParams = (InputValue<ReleaseInventoryReservationRequestInput>)
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
export type InventoryReservationsUpdateParams = (InputValue<UpdateInventoryReservationRequestInput>)
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
/**
 * Stock you ask to reserve for one item: the item and quantity, plus optional Location limits and
 * splitting behavior.
 */
export type InventoryRoutingDemand = {
    /**
     * Limits this demand to these Locations. Omit it or send an empty list to allow any Location
     * permitted by the routing source. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "allowed_location_ids"?: Array<string>;
    /**
     * Your identifier for this demand. Defaults to inventory_item_id. Required on every demand
     * when an inventory_item_id occurs more than once. minLength: 1.
     */
    "demand_key"?: string;
    /**
     * Requires this demand to use this Location. The Location must also satisfy
     * allowed_location_ids and the routing source. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "forced_location_id"?: string;
    /**
     * ID of the inventory item to reserve. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Optional demand constraint intersected with the routing source rule. Omission uses
     * split_when_required and leaves the routing source rule in control. Value enum:
     * "single_location", "split_when_required".
     */
    "splitting_behavior"?: "single_location" | "split_when_required" | (string & {});
};
/**
 * Stock you ask to reserve for one item: the item and quantity, plus optional Location limits and
 * splitting behavior.
 */
export type InventoryRoutingDemandInput = {
    /**
     * Limits this demand to these Locations. Omit it or send an empty list to allow any Location
     * permitted by the routing source. [] (Value): string. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "allowed_location_ids"?: Array<string>;
    /**
     * Your identifier for this demand. Defaults to inventory_item_id. Required on every demand
     * when an inventory_item_id occurs more than once. minLength: 1.
     */
    "demand_key"?: string;
    /**
     * Requires this demand to use this Location. The Location must also satisfy
     * allowed_location_ids and the routing source. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "forced_location_id"?: string;
    /**
     * ID of the inventory item to reserve. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Optional demand constraint intersected with the routing source rule. Omission uses
     * split_when_required and leaves the routing source rule in control. Value enum:
     * "single_location", "split_when_required".
     */
    "splitting_behavior"?: "single_location" | "split_when_required";
};
/**
 * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
 * inventory allocation policy, or one policy revision.
 */
export type InventoryRoutingSource = {
    /**
     * ID of the allocation policy that routes demand. Example: "invp_01KEZF7C0076BZX855WAGC5SQK".
     */
    "inventory_allocation_policy_id"?: string;
    /**
     * ID of the allocation policy revision that routes demand. Example:
     * "invpv_01KEZF7C00JSFTTBKC1JY614JJ".
     */
    "inventory_allocation_policy_revision_id"?: string;
    /**
     * ID of the fixed Location that serves all demand. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: string;
    /**
     * How Flint routes demand to Locations. Value enum: "fixed_location", "policy",
     * "policy_revision".
     */
    "type": "fixed_location" | "policy" | "policy_revision" | (string & {});
};
/** The `fixed_location` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputFixedLocation = {
    /**
     * ID of the fixed Location that serves all demand. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /** How Flint routes demand to Locations. Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
};
/** The `fixed_location` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputFixedLocationInput = {
    /**
     * ID of the fixed Location that serves all demand. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /** How Flint routes demand to Locations. Value enum: "fixed_location". */
    "type": "fixed_location";
};
/** The `policy` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputPolicy = {
    /**
     * ID of the allocation policy that routes demand. minLength: 1. Example:
     * "invp_01KEZF7C0076BZX855WAGC5SQK".
     */
    "inventory_allocation_policy_id": string;
    /** How Flint routes demand to Locations. Value enum: "policy". */
    "type": "policy" | (string & {});
};
/** The `policy` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputPolicyInput = {
    /**
     * ID of the allocation policy that routes demand. minLength: 1. Example:
     * "invp_01KEZF7C0076BZX855WAGC5SQK".
     */
    "inventory_allocation_policy_id": string;
    /** How Flint routes demand to Locations. Value enum: "policy". */
    "type": "policy";
};
/** The `policy_revision` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputPolicyRevision = {
    /**
     * ID of the allocation policy revision that routes demand. minLength: 1. Example:
     * "invpv_01KEZF7C00JSFTTBKC1JY614JJ".
     */
    "inventory_allocation_policy_revision_id": string;
    /** How Flint routes demand to Locations. Value enum: "policy_revision". */
    "type": "policy_revision" | (string & {});
};
/** The `policy_revision` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputPolicyRevisionInput = {
    /**
     * ID of the allocation policy revision that routes demand. minLength: 1. Example:
     * "invpv_01KEZF7C00JSFTTBKC1JY614JJ".
     */
    "inventory_allocation_policy_revision_id": string;
    /** How Flint routes demand to Locations. Value enum: "policy_revision". */
    "type": "policy_revision";
};
/**
 * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one
 * policy revision, selected by `type`.
 */
export type InventoryRoutingSourceRequest = ((InventoryRoutingSourceInputFixedLocation)
    | (InventoryRoutingSourceInputPolicy)
    | (InventoryRoutingSourceInputPolicyRevision)
    | (Record<string, unknown>));
/**
 * Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one
 * policy revision, selected by `type`.
 */
export type InventoryRoutingSourceRequestInput = ((InventoryRoutingSourceInputFixedLocationInput)
    | (InventoryRoutingSourceInputPolicyInput)
    | (InventoryRoutingSourceInputPolicyRevisionInput));
/**
 * Inventory settings: the `low_stock_threshold`, how inventory failures are handled for each order
 * source, and the `default_routing_source` for requests that omit one.
 */
export type InventorySettings = {
    /**
     * Where tracked demand is routed when a request omits `inventory_routing_source`: a fixed
     * Location, an allocation policy, or one policy revision. It applies to orders, line items
     * added to orders, quick pay invoices, payment links, subscription plans, inventory
     * reservations, and delivery previews. The request stores the resolved source on the resource
     * it creates or changes, as if the caller had sent it, so changing or clearing this default
     * never moves routing for existing orders, payment links, plans, or reservations. A source the
     * request sends always wins. `null` when no default is set, which means callers must send
     * `inventory_routing_source` on each request with tracked items. anyOf[1] (Value): {@link
     * InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory from:
     * a fixed Location, an inventory allocation policy, or one policy revision. anyOf[2] (Value):
     * null.
     */
    "default_routing_source"?: ((InventoryRoutingSource) | (null));
    /**
     * Available quantity your team treats as low stock, zero or greater. The Dashboard shows this
     * setting. It does not change allocation, filter API results, or send events. Format: int32.
     * minimum: 0.
     */
    "low_stock_threshold"?: number;
    /**
     * Inventory failure handling keyed by order source: checkout, payment_link, api, subscription,
     * virtual_terminal, or default. The source-specific entry wins; default applies to the rest. *
     * (Value): {@link InventoryOriginPolicy}. How Flint handles inventory failures for one order
     * source: the action after a post-payment inventory failure and for a blocked subscription.
     */
    "origin_policies"?: Record<string, InventoryOriginPolicy>;
};
/**
 * Inventory settings to change: the `low_stock_threshold`, how inventory failures are handled for
 * each order source, and the `default_routing_source` for requests that omit one.
 */
export type InventorySettingsRequest = {
    /**
     * Where tracked demand is routed when a request omits `inventory_routing_source`: a fixed
     * Location, an allocation policy, or one policy revision. It applies to orders, line items
     * added to orders, quick pay invoices, payment links, subscription plans, inventory
     * reservations, and delivery previews. The request stores the resolved source on the resource
     * it creates or changes, as if the caller had sent it, so changing or clearing this default
     * never moves routing for existing orders, payment links, plans, or reservations. A source the
     * request sends always wins. `null` when no default is set, which means callers must send
     * `inventory_routing_source` on each request with tracked items. Send null to clear it.
     * anyOf[1] (Value): {@link InventoryRoutingSourceRequest}. Where you want inventory routed
     * from: a fixed Location, an inventory allocation policy, or one policy revision, selected by
     * `type`. anyOf[2] (Value): null.
     */
    "default_routing_source"?: ((InventoryRoutingSourceRequest) | (null) | (unknown));
    /**
     * Available quantity your team treats as low stock, zero or greater. The Dashboard shows this
     * setting. It does not change allocation, filter API results, or send events. Format: int32.
     * minimum: 0.
     */
    "low_stock_threshold"?: number;
    /**
     * Map replaced as a whole: the keys you send become the full map. Inventory failure handling
     * keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or
     * default. The source-specific entry wins; default applies to the rest. * (Value): {@link
     * InventoryOriginPolicy}. How Flint handles inventory failures for one order source: the
     * action after a post-payment inventory failure and for a blocked subscription.
     */
    "origin_policies"?: Record<string, InventoryOriginPolicy>;
};
/**
 * Inventory settings to change: the `low_stock_threshold`, how inventory failures are handled for
 * each order source, and the `default_routing_source` for requests that omit one.
 */
export type InventorySettingsRequestInput = {
    /**
     * Where tracked demand is routed when a request omits `inventory_routing_source`: a fixed
     * Location, an allocation policy, or one policy revision. It applies to orders, line items
     * added to orders, quick pay invoices, payment links, subscription plans, inventory
     * reservations, and delivery previews. The request stores the resolved source on the resource
     * it creates or changes, as if the caller had sent it, so changing or clearing this default
     * never moves routing for existing orders, payment links, plans, or reservations. A source the
     * request sends always wins. `null` when no default is set, which means callers must send
     * `inventory_routing_source` on each request with tracked items. Send null to clear it.
     * anyOf[1] (Value): {@link InventoryRoutingSourceRequestInput}. Where you want inventory
     * routed from: a fixed Location, an inventory allocation policy, or one policy revision,
     * selected by `type`. anyOf[2] (Value): null.
     */
    "default_routing_source"?: ((InventoryRoutingSourceRequestInput) | (null));
    /**
     * Available quantity your team treats as low stock, zero or greater. The Dashboard shows this
     * setting. It does not change allocation, filter API results, or send events. Format: int32.
     * minimum: 0.
     */
    "low_stock_threshold"?: number;
    /**
     * Map replaced as a whole: the keys you send become the full map. Inventory failure handling
     * keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or
     * default. The source-specific entry wins; default applies to the rest. * (Value): {@link
     * InventoryOriginPolicyRequestInput}. How Flint handles inventory failures for one order
     * source: the action after a post-payment inventory failure and for a blocked subscription.
     */
    "origin_policies"?: Record<string, InventoryOriginPolicyRequestInput>;
};
/**
 * The system an inventory event came from, such as manual entry, a point of sale, a warehouse
 * system, or Flint, with your source identifier when it applies.
 */
export type InventorySourceSystem = ({
    /**
     * Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed
     * when type is manual. Don't put secrets in this field. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "flint", "other".
     */
    "type": "manual" | "pos" | "wms" | "erp" | "flint" | "other" | (string & {});
});
/**
 * The source system you report for an inventory event, such as manual, pos, wms, erp, or other,
 * with your identifier when it applies.
 */
export type InventorySourceSystemRequest = ({
    /**
     * Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed
     * when type is manual. Don't put secrets in this field. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other".
     */
    "type": "manual" | "pos" | "wms" | "erp" | "other" | (string & {});
});
/**
 * The source system you report for an inventory event, such as manual, pos, wms, erp, or other,
 * with your identifier when it applies.
 */
export type InventorySourceSystemRequestInput = ({
    /**
     * Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed
     * when type is manual. Don't put secrets in this field. minLength: 1. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_source_id"?: string;
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "other".
     */
    "type": "manual" | "pos" | "wms" | "erp" | "other";
});
/** Stock moving between locations. */
export type InventoryTransfer = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "closed_at"?: string;
    /**
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "departed_at"?: string;
    /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "destination_location_id": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /**
     * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
     * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
     */
    "inventory_transfer_id": string;
    /**
     * Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH
     * replaces the full collection. [] (Value): {@link InventoryTransferLine}. One line of an
     * inventory transfer, with its quantities.
     */
    "lines": Array<InventoryTransferLine>;
    /** Free-text note about the transfer. */
    "note"?: string;
    /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "origin_location_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "received_at"?: string;
    /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
    "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
    /**
     * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". [] (Value):
     * string. Value enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
     */
    "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * The inventory transfer state, version, and supported actions for a refused action. One specific
 * failure within an error, with a `code` and `message` plus fields that depend on the code, such
 * as the `param`, resource, quantity, or amount involved.
 */
export type InventoryTransferActionConflictErrorDetail = (Exclude<ErrorDetail & object, readonly unknown[]>)
    & ({
    /** Value enum: "ACTION_NOT_ALLOWED". */
    "code": "ACTION_NOT_ALLOWED" | (string & {});
    /**
     * Current transfer status. Value enum: "draft", "in_transit", "partially_resolved", "closed".
     */
    "current_status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
    /** Current transfer version. Format: uint64. minimum: 1. */
    "current_version": number;
    "message": string;
    /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "resource_id"?: string;
    /**
     * Public resource type: the resource's ID field name without `_id`. Clients must accept values
     * added in future releases. Example: "order". Public resource type: the resource's ID field
     * name without `_id`. Clients must accept values added in future releases. Value enum:
     * "api_key", "api_request_log", "balance", "balance_transaction", "bundle",
     * "bundle_component", "category", "checkout_session",
     * "checkout_session_customer_verification", "credit_note", "credit_note_allocation",
     * "custom_domain", "customer", "customer_address", "customer_deletion_request",
     * "customer_email_preferences", "customer_session", "customer_tax_exemption",
     * "customer_verification", "delivery_choice_group", "delivery_location_set",
     * "delivery_method", "delivery_profile", "delivery_quote", "delivery_rate",
     * "delivery_rate_callback", "delivery_revocation", "delivery_selection", "delivery_zone",
     * "demo_session", "device", "discount", "dispute", "email_change_request",
     * "environment_grant", "feedback_report", "file", "flint_wallet", "flint_wallet_card",
     * "fraud_warning", "fulfillment", "fulfillment_event", "fulfillment_notification",
     * "gift_card", "gift_card_funding_disposition", "gift_card_load", "gift_card_notification",
     * "gift_card_redemption", "gift_card_transaction", "image", "inventory_adjustment",
     * "inventory_allocation_policy", "inventory_allocation_policy_revision", "inventory_count",
     * "inventory_item", "inventory_level", "inventory_movement", "inventory_receipt",
     * "inventory_reservation", "inventory_reservation_line", "inventory_transfer",
     * "inventory_transfer_line", "invoice", "invoice_delivery_attempt", "invoice_late_fee",
     * "invoice_line_item", "invoice_manual_payment", "invoice_payment_attempt",
     * "invoice_payment_term", "location", "merchant", "merchant_billing_balance",
     * "merchant_billing_entry", "merchant_billing_invoice", "merchant_signup", "modifier",
     * "modifier_group", "modifier_set", "order", "order_charge", "order_edit", "order_line_item",
     * "order_line_item_modifier", "order_payment_attempt", "package", "package_item",
     * "partner_app", "partner_app_credential", "partner_app_install", "payment_intent",
     * "payment_link", "payment_link_custom_field", "payment_link_line_item", "payment_method",
     * "payment_method_domain", "payment_review", "payment_split", "payout", "payout_destination",
     * "payout_settings", "platform_fee", "platform_fee_balance_transaction",
     * "platform_fee_payout", "price_list", "price_list_price", "product", "product_option",
     * "product_option_value", "product_variant", "promotion", "promotion_code",
     * "purchase_refund_allocation", "reader", "refund", "refund_allocation",
     * "refund_line_item_adjustment", "report", "report_download", "return", "return_activity",
     * "return_disposition", "return_inspection", "return_inspection_line_item",
     * "return_line_item", "return_policy", "return_policy_revision", "return_reason",
     * "return_receipt", "return_receipt_line_item", "return_resolution", "risk_list",
     * "risk_list_item", "risk_rule", "sandbox", "settings", "shipment", "subscription",
     * "subscription_delivery_migration", "subscription_line_item", "subscription_offer",
     * "subscription_payment_retry", "subscription_plan", "subscription_plan_line_item",
     * "tax_calculation_callback", "tax_connection", "tax_registration", "test_clock", "ticket",
     * "user", "webhook_delivery", "webhook_endpoint", "webhook_event", "workload_identity".
     */
    "resource_type"?: ResourceType;
    /**
     * Transfer actions accepted in the current state. A closed transfer returns an empty array. []
     * enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". [] (Value): string.
     * Value enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
     */
    "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
    /**
     * Stable Flint reason associated with this error. When code is ACTION_NOT_ALLOWED, one of:
     * advance_limit_exceeded, already_applied, archived, authorization_expired,
     * bank_return_not_contestable, cancellation_scheduled, choice_group_unavailable,
     * configuration_required, confirmation_token_unusable, credit_exceeds_charge,
     * credit_note_tax_reconciliation_required, customer_account_mode_conflict, delivery_hold,
     * delivery_requirement_changes, dependency_revoked, derived_from_packages,
     * destination_not_served, disclosure_changed, dispute_payment_unavailable, end_after_reached,
     * environment_not_granted, existing_order_checkout, external_billing_schedule, field_locked,
     * first_period_unpaid, frozen_at_not_later, image_ingestion_restart_required, in_progress,
     * inventory_wait, invoice_finalized, jwt_signing_not_enabled, managed_by_owner,
     * managed_externally, merchant_hosted_customer_accounts, merchant_managed_email,
     * method_unavailable, minimum_charge, mixed_tax_treatment, not_itemized, not_offered,
     * not_paused, offer_subscription, on_hold, order_owned, out_of_order, owner_identity_conflict,
     * paid_period_required, payload_expired, payment_collected, payment_disputed,
     * payment_method_not_reusable, payment_required, payment_split_consent_required,
     * payout_defaults_managed_externally, payout_delay, payout_frequency, period_end_unavailable,
     * plan_change_scheduled, platform_capability_inactive, platform_fee_consent_required,
     * platform_onboarding_required, platform_pending_review, platform_rejected,
     * prepaid_deliveries_remaining, previous_refund_failed, provider_action_unsupported,
     * quantity_not_carried, reader_offline, reader_type_not_supported, reader_unavailable,
     * reconciliation_required, refund_created, refund_unavailable, refund_window_expired,
     * restricted, return_checkout, return_owned, return_tax_mismatch, sandbox_reset_failed,
     * secret_not_issued, seller_not_ready, simulated_reader_required, status_not_reached,
     * stock_at_risk, store_credit_unavailable, subscription_owned, subscription_terms_locked,
     * terminal_status, test_event, trial_in_progress, unsupported_state, variant_not_targeted,
     * verification_required. When code is ALREADY_EXISTS, one of: dashboard_sign_in_required,
     * device_reader_already_exists, hardware_fingerprint_already_exists. When code is
     * CONCURRENT_MODIFICATION, one of: credit_note_refund_retry_exhausted. When code is
     * DELIVERY_REQUOTE_REQUIRED, one of: calculation_expired, caller_rates_required,
     * destination_changed, input_required, option_expired, quote_expired, quote_revoked,
     * quote_stale, selection_changed, selection_expired, window_expired. When code is
     * EXTERNAL_SERVICE_ERROR, one of: issuer_unavailable, outcome_unknown, rate_callback_failed,
     * rate_unavailable, tax_callback_failed. When code is FORBIDDEN, one of:
     * checkout_launch_token_restricted, checkout_recovery_attempt_mismatch,
     * checkout_recovery_restricted, checkout_session_order_mismatch,
     * checkout_session_payment_required, context_mismatch, demo_session_route_not_allowed,
     * direct_owner_required, environment_grant_required, environment_mismatch,
     * expansion_not_permitted, full_access_required, linked_key_not_allowed, live_mode_required,
     * merchant_access_required, merchant_credential_required, merchant_role_insufficient,
     * not_checkout_session, not_permitted, organization_membership_required,
     * organization_role_insufficient, owner_workflow_required, request_blocked,
     * role_not_assignable, sandbox_not_accessible, sandbox_selection_forbidden,
     * self_role_edit_forbidden, test_mode_required. When code is GIFT_CARD_CHALLENGE_REQUIRED, one
     * of: page_origin_required, proof_rejected, proof_required. When code is
     * IDEMPOTENCY_KEY_REUSED, one of: transport_mismatch. When code is INSUFFICIENT_SCOPE, one of:
     * install_scope_not_granted, scope_not_granted, scope_not_held. When code is INTERNAL_ERROR,
     * one of: repair_required. When code is INVALID_CREDENTIAL, one of: expired, malformed,
     * mode_mismatch, revoked, session_ended, unknown, wrong_credential_type. When code is
     * INVENTORY_INSUFFICIENT, one of: location_ineligible, location_limit. When code is
     * LIMIT_EXCEEDED, one of: buyer_daily, card_balance, card_daily, insufficient_available_value,
     * merchant_adjustments_daily, merchant_imports_daily, order_edit_balance_due. When code is
     * LIMIT_REACHED, one of: active_readers, checkout_tax_calculations, consecutive_skips,
     * customer_tax_exemptions, daily_demo_sessions, daily_gift_card_purchases,
     * delivery_selection_replacements, enabled_risk_rules, external_paid_orders, image_storage,
     * merchant_signups, monthly_tax_calculations, owned_merchants, partner_app_credentials,
     * partner_app_install_links, payment_intents_per_order, payment_link_completions,
     * payment_retries_per_period, pending_reports, price_list_prices, product_variants,
     * receipt_recipients, saved_card_codes, test_clock_subscriptions, verification_attempts,
     * verification_codes, webhook_event_streams, webhook_listener_signatures_daily,
     * workload_identities. When code is MERCHANT_NOT_READY, one of: account_sessions_unavailable,
     * account_setup_repair_required, account_setup_unavailable, billing_suspended,
     * capability_blocked, capability_not_requested, capability_pending, capability_unavailable,
     * default_environment_required, disabled_by_merchant_settings, disabled_by_platform_policy,
     * merchant_account_action_required, merchant_payments_disabled, onboarding_required,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, payment_splits_unavailable,
     * platform_funding_unavailable, platform_review, pricing_not_authorized,
     * processing_not_enabled, processing_restricted, processor_not_configured, requirements_due,
     * tax_category_required. When code is OPERATION_IN_PROGRESS, one of:
     * delivery_selection_materializing, reader_busy, sandbox_resetting. When code is
     * PAYMENT_OPTION_UNAVAILABLE, one of: action_window_too_short, amount_out_of_range,
     * capability_blocked, capability_pending, disabled_by_merchant_settings,
     * disabled_by_platform_policy, merchant_account_action_required, merchant_payments_disabled,
     * payment_account_context_invalid, payment_account_setup_incomplete,
     * payment_option_access_not_provisioned, payment_option_activation_pending,
     * payment_option_not_available, payment_option_not_in_plan, platform_funding_unavailable,
     * requirements_due, risk_action_unsupported, transaction_purpose_unresolved. When code is
     * PAYMENT_PROCESSING_UNAVAILABLE, one of: platform_funding_unavailable. When code is
     * PROMOTION_DECLINED, one of: already_applied, automatic_disabled, buy_item_missing,
     * code_invalid, code_required, codes_disabled, currency_mismatch, customer_limit_reached,
     * customer_mismatch, customer_required, exhausted, expired, inactive, max_promotions_reached,
     * minimum_not_met, no_discountable_balance, not_combinable, not_eligible, not_yet_started,
     * recurrence_completed, superseded, superseded_by_better_offer, superseded_by_higher_priority,
     * unknown_type. When code is RESOURCE_IN_USE, one of: selected_by_active_variants. When code
     * is RESOURCE_NOT_FOUND, one of: email_missing, resource_in_different_environment. When code
     * is SERVICE_UNAVAILABLE, one of: outcome_unknown, processor_unavailable, repair_required.
     * Additional reasons may be added. Value enum: "account_sessions_unavailable",
     * "account_setup_repair_required", "account_setup_unavailable", "action_window_too_short",
     * "active_readers", "advance_limit_exceeded", "already_applied", "amount_out_of_range",
     * "archived", "authorization_expired", "automatic_disabled", "bank_return_not_contestable",
     * "billing_suspended", "buy_item_missing", "buyer_daily", "calculation_expired",
     * "caller_rates_required", "cancellation_scheduled", "capability_blocked",
     * "capability_not_requested", "capability_pending", "capability_unavailable", "card_balance",
     * "card_daily", "checkout_launch_token_restricted", "checkout_recovery_attempt_mismatch",
     * "checkout_recovery_restricted", "checkout_session_order_mismatch",
     * "checkout_session_payment_required", "checkout_tax_calculations",
     * "choice_group_unavailable", "code_invalid", "code_required", "codes_disabled",
     * "configuration_required", "confirmation_token_unusable", "consecutive_skips",
     * "context_mismatch", "credit_exceeds_charge", "credit_note_refund_retry_exhausted",
     * "credit_note_tax_reconciliation_required", "currency_mismatch",
     * "customer_account_mode_conflict", "customer_limit_reached", "customer_mismatch",
     * "customer_required", "customer_tax_exemptions", "daily_demo_sessions",
     * "daily_gift_card_purchases", "dashboard_sign_in_required", "default_environment_required",
     * "delivery_hold", "delivery_requirement_changes", "delivery_selection_materializing",
     * "delivery_selection_replacements", "demo_session_route_not_allowed", "dependency_revoked",
     * "derived_from_packages", "destination_changed", "destination_not_served",
     * "device_reader_already_exists", "direct_owner_required", "disabled_by_merchant_settings",
     * "disabled_by_platform_policy", "disclosure_changed", "dispute_payment_unavailable",
     * "email_missing", "enabled_risk_rules", "end_after_reached", "environment_grant_required",
     * "environment_mismatch", "environment_not_granted", "exhausted", "existing_order_checkout",
     * "expansion_not_permitted", "expired", "external_billing_schedule", "external_paid_orders",
     * "field_locked", "first_period_unpaid", "frozen_at_not_later", "full_access_required",
     * "hardware_fingerprint_already_exists", "image_ingestion_restart_required", "image_storage",
     * "in_progress", "inactive", "input_required", "install_scope_not_granted",
     * "insufficient_available_value", "inventory_wait", "invoice_finalized", "issuer_unavailable",
     * "jwt_signing_not_enabled", "linked_key_not_allowed", "live_mode_required",
     * "location_ineligible", "location_limit", "malformed", "managed_by_owner",
     * "managed_externally", "max_promotions_reached", "merchant_access_required",
     * "merchant_account_action_required", "merchant_adjustments_daily",
     * "merchant_credential_required", "merchant_hosted_customer_accounts",
     * "merchant_imports_daily", "merchant_managed_email", "merchant_payments_disabled",
     * "merchant_role_insufficient", "merchant_signups", "method_unavailable", "minimum_charge",
     * "minimum_not_met", "mixed_tax_treatment", "mode_mismatch", "monthly_tax_calculations",
     * "no_discountable_balance", "not_checkout_session", "not_combinable", "not_eligible",
     * "not_itemized", "not_offered", "not_paused", "not_permitted", "not_yet_started",
     * "offer_subscription", "on_hold", "onboarding_required", "option_expired",
     * "order_edit_balance_due", "order_owned", "organization_membership_required",
     * "organization_role_insufficient", "out_of_order", "outcome_unknown", "owned_merchants",
     * "owner_identity_conflict", "owner_workflow_required", "page_origin_required",
     * "paid_period_required", "partner_app_credentials", "partner_app_install_links",
     * "payload_expired", "payment_account_context_invalid", "payment_account_setup_incomplete",
     * "payment_collected", "payment_disputed", "payment_intents_per_order",
     * "payment_link_completions", "payment_method_not_reusable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_available", "payment_option_not_in_plan", "payment_required",
     * "payment_retries_per_period", "payment_split_consent_required",
     * "payment_splits_unavailable", "payout_defaults_managed_externally", "payout_delay",
     * "payout_frequency", "pending_reports", "period_end_unavailable", "plan_change_scheduled",
     * "platform_capability_inactive", "platform_fee_consent_required",
     * "platform_funding_unavailable", "platform_onboarding_required", "platform_pending_review",
     * "platform_rejected", "platform_review", "prepaid_deliveries_remaining",
     * "previous_refund_failed", "price_list_prices", "pricing_not_authorized",
     * "processing_not_enabled", "processing_restricted", "processor_not_configured",
     * "processor_unavailable", "product_variants", "proof_rejected", "proof_required",
     * "provider_action_unsupported", "quantity_not_carried", "quote_expired", "quote_revoked",
     * "quote_stale", "rate_callback_failed", "rate_unavailable", "reader_busy", "reader_offline",
     * "reader_type_not_supported", "reader_unavailable", "receipt_recipients",
     * "reconciliation_required", "recurrence_completed", "refund_created", "refund_unavailable",
     * "refund_window_expired", "repair_required", "request_blocked", "requirements_due",
     * "resource_in_different_environment", "restricted", "return_checkout", "return_owned",
     * "return_tax_mismatch", "revoked", "risk_action_unsupported", "role_not_assignable",
     * "sandbox_not_accessible", "sandbox_reset_failed", "sandbox_resetting",
     * "sandbox_selection_forbidden", "saved_card_codes", "scope_not_granted", "scope_not_held",
     * "secret_not_issued", "selected_by_active_variants", "selection_changed",
     * "selection_expired", "self_role_edit_forbidden", "seller_not_ready", "session_ended",
     * "simulated_reader_required", "status_not_reached", "stock_at_risk",
     * "store_credit_unavailable", "subscription_owned", "subscription_terms_locked", "superseded",
     * "superseded_by_better_offer", "superseded_by_higher_priority", "tax_callback_failed",
     * "tax_category_required", "terminal_status", "test_clock_subscriptions", "test_event",
     * "test_mode_required", "transaction_purpose_unresolved", "transport_mismatch",
     * "trial_in_progress", "unknown", "unknown_type", "unsupported_state", "variant_not_targeted",
     * "verification_attempts", "verification_codes", "verification_required",
     * "webhook_event_streams", "webhook_listener_signatures_daily", "window_expired",
     * "workload_identities", "wrong_credential_type".
     */
    "reason": "account_sessions_unavailable"
        | "account_setup_repair_required"
        | "account_setup_unavailable"
        | "action_window_too_short"
        | "active_readers"
        | "advance_limit_exceeded"
        | "already_applied"
        | "amount_out_of_range"
        | "archived"
        | "authorization_expired"
        | "automatic_disabled"
        | "bank_return_not_contestable"
        | "billing_suspended"
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
        | "checkout_launch_token_restricted"
        | "checkout_recovery_attempt_mismatch"
        | "checkout_recovery_restricted"
        | "checkout_session_order_mismatch"
        | "checkout_session_payment_required"
        | "checkout_tax_calculations"
        | "choice_group_unavailable"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "configuration_required"
        | "confirmation_token_unusable"
        | "consecutive_skips"
        | "context_mismatch"
        | "credit_exceeds_charge"
        | "credit_note_refund_retry_exhausted"
        | "credit_note_tax_reconciliation_required"
        | "currency_mismatch"
        | "customer_account_mode_conflict"
        | "customer_limit_reached"
        | "customer_mismatch"
        | "customer_required"
        | "customer_tax_exemptions"
        | "daily_demo_sessions"
        | "daily_gift_card_purchases"
        | "dashboard_sign_in_required"
        | "default_environment_required"
        | "delivery_hold"
        | "delivery_requirement_changes"
        | "delivery_selection_materializing"
        | "delivery_selection_replacements"
        | "demo_session_route_not_allowed"
        | "dependency_revoked"
        | "derived_from_packages"
        | "destination_changed"
        | "destination_not_served"
        | "device_reader_already_exists"
        | "direct_owner_required"
        | "disabled_by_merchant_settings"
        | "disabled_by_platform_policy"
        | "disclosure_changed"
        | "dispute_payment_unavailable"
        | "email_missing"
        | "enabled_risk_rules"
        | "end_after_reached"
        | "environment_grant_required"
        | "environment_mismatch"
        | "environment_not_granted"
        | "exhausted"
        | "existing_order_checkout"
        | "expansion_not_permitted"
        | "expired"
        | "external_billing_schedule"
        | "external_paid_orders"
        | "field_locked"
        | "first_period_unpaid"
        | "frozen_at_not_later"
        | "full_access_required"
        | "hardware_fingerprint_already_exists"
        | "image_ingestion_restart_required"
        | "image_storage"
        | "in_progress"
        | "inactive"
        | "input_required"
        | "install_scope_not_granted"
        | "insufficient_available_value"
        | "inventory_wait"
        | "invoice_finalized"
        | "issuer_unavailable"
        | "jwt_signing_not_enabled"
        | "linked_key_not_allowed"
        | "live_mode_required"
        | "location_ineligible"
        | "location_limit"
        | "malformed"
        | "managed_by_owner"
        | "managed_externally"
        | "max_promotions_reached"
        | "merchant_access_required"
        | "merchant_account_action_required"
        | "merchant_adjustments_daily"
        | "merchant_credential_required"
        | "merchant_hosted_customer_accounts"
        | "merchant_imports_daily"
        | "merchant_managed_email"
        | "merchant_payments_disabled"
        | "merchant_role_insufficient"
        | "merchant_signups"
        | "method_unavailable"
        | "minimum_charge"
        | "minimum_not_met"
        | "mixed_tax_treatment"
        | "mode_mismatch"
        | "monthly_tax_calculations"
        | "no_discountable_balance"
        | "not_checkout_session"
        | "not_combinable"
        | "not_eligible"
        | "not_itemized"
        | "not_offered"
        | "not_paused"
        | "not_permitted"
        | "not_yet_started"
        | "offer_subscription"
        | "on_hold"
        | "onboarding_required"
        | "option_expired"
        | "order_edit_balance_due"
        | "order_owned"
        | "organization_membership_required"
        | "organization_role_insufficient"
        | "out_of_order"
        | "outcome_unknown"
        | "owned_merchants"
        | "owner_identity_conflict"
        | "owner_workflow_required"
        | "page_origin_required"
        | "paid_period_required"
        | "partner_app_credentials"
        | "partner_app_install_links"
        | "payload_expired"
        | "payment_account_context_invalid"
        | "payment_account_setup_incomplete"
        | "payment_collected"
        | "payment_disputed"
        | "payment_intents_per_order"
        | "payment_link_completions"
        | "payment_method_not_reusable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_available"
        | "payment_option_not_in_plan"
        | "payment_required"
        | "payment_retries_per_period"
        | "payment_split_consent_required"
        | "payment_splits_unavailable"
        | "payout_defaults_managed_externally"
        | "payout_delay"
        | "payout_frequency"
        | "pending_reports"
        | "period_end_unavailable"
        | "plan_change_scheduled"
        | "platform_capability_inactive"
        | "platform_fee_consent_required"
        | "platform_funding_unavailable"
        | "platform_onboarding_required"
        | "platform_pending_review"
        | "platform_rejected"
        | "platform_review"
        | "prepaid_deliveries_remaining"
        | "previous_refund_failed"
        | "price_list_prices"
        | "pricing_not_authorized"
        | "processing_not_enabled"
        | "processing_restricted"
        | "processor_not_configured"
        | "processor_unavailable"
        | "product_variants"
        | "proof_rejected"
        | "proof_required"
        | "provider_action_unsupported"
        | "quantity_not_carried"
        | "quote_expired"
        | "quote_revoked"
        | "quote_stale"
        | "rate_callback_failed"
        | "rate_unavailable"
        | "reader_busy"
        | "reader_offline"
        | "reader_type_not_supported"
        | "reader_unavailable"
        | "receipt_recipients"
        | "reconciliation_required"
        | "recurrence_completed"
        | "refund_created"
        | "refund_unavailable"
        | "refund_window_expired"
        | "repair_required"
        | "request_blocked"
        | "requirements_due"
        | "resource_in_different_environment"
        | "restricted"
        | "return_checkout"
        | "return_owned"
        | "return_tax_mismatch"
        | "revoked"
        | "risk_action_unsupported"
        | "role_not_assignable"
        | "sandbox_not_accessible"
        | "sandbox_reset_failed"
        | "sandbox_resetting"
        | "sandbox_selection_forbidden"
        | "saved_card_codes"
        | "scope_not_granted"
        | "scope_not_held"
        | "secret_not_issued"
        | "selected_by_active_variants"
        | "selection_changed"
        | "selection_expired"
        | "self_role_edit_forbidden"
        | "seller_not_ready"
        | "session_ended"
        | "simulated_reader_required"
        | "status_not_reached"
        | "stock_at_risk"
        | "store_credit_unavailable"
        | "subscription_owned"
        | "subscription_terms_locked"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "tax_callback_failed"
        | "tax_category_required"
        | "terminal_status"
        | "test_clock_subscriptions"
        | "test_event"
        | "test_mode_required"
        | "transaction_purpose_unresolved"
        | "transport_mismatch"
        | "trial_in_progress"
        | "unknown"
        | "unknown_type"
        | "unsupported_state"
        | "variant_not_targeted"
        | "verification_attempts"
        | "verification_codes"
        | "verification_required"
        | "webhook_event_streams"
        | "webhook_listener_signatures_daily"
        | "window_expired"
        | "workload_identities"
        | "wrong_credential_type"
        | (string & {});
});
/** An inventory transfer action refusal with the current state and supported actions. */
export type InventoryTransferActionConflictErrorEnvelope = {
    /**
     * An action-not-allowed error for the inventory transfer current state. The error returned for
     * a failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of
     * `details` for individual failures.
     */
    "error": InventoryTransferActionConflictErrorObject;
};
/**
 * An action-not-allowed error for the inventory transfer current state. The error returned for a
 * failed request: `type`, `code`, `message`, `remediation`, `request_id`, and a list of `details`
 * for individual failures.
 */
export type InventoryTransferActionConflictErrorObject = (Exclude<ErrorObject & object, readonly unknown[]>)
    & ({
    /** Value enum: "ACTION_NOT_ALLOWED". */
    "code": "ACTION_NOT_ALLOWED" | (string & {});
    /**
     * minItems: 1. [] (Value): {@link InventoryTransferActionConflictErrorDetail}. The inventory
     * transfer state, version, and supported actions for a refused action. One specific failure
     * within an error, with a `code` and `message` plus fields that depend on the code, such as
     * the `param`, resource, quantity, or amount involved.
     */
    "details": Array<InventoryTransferActionConflictErrorDetail>;
    /** Value enum: "conflict_error". */
    "type": "conflict_error" | (string & {});
    /**
     * Human-readable explanation for your logs. The wording can change, so branch on code, and do
     * not show it to buyers as is.
     */
    "message": string;
    /**
     * Error reference at https://developers.withflintpay.com/docs/errors# followed by the
     * lowercase error code.
     */
    "doc_url": string;
    /**
     * Who must act before the request can succeed. It depends only on code and details[0].reason;
     * the errors reference lists the value for each. Use it to route the failure, and code and
     * details[0].reason for the fix. Value enum: "caller", "merchant", "merchant_endpoint",
     * "flint".
     */
    "error_source": "caller" | "merchant" | "merchant_endpoint" | "flint" | (string & {});
});
export type InventoryTransferClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_transfer.closed";
});
/**
 * The `inventory_transfer.closed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryTransferClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.closed". */
    "event_type"?: "inventory_transfer.closed";
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
 * The `inventory_transfer.closed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.closed". */
    "event_type"?: "inventory_transfer.closed";
});
export type InventoryTransferDepartedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.departed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.departed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_transfer.departed";
});
/**
 * The `inventory_transfer.departed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryTransferDepartedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.departed". */
    "event_type"?: "inventory_transfer.departed";
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
 * The `inventory_transfer.departed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferDepartedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.departed". */
    "event_type"?: "inventory_transfer.departed";
});
/** One line of an inventory transfer, with its quantities. */
export type InventoryTransferLine = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "canceled_quantity": number;
    /**
     * Condition of the units being moved. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined".
     */
    "condition": "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "departed_quantity": number;
    /** ID of the inventory item to move. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
    "inventory_item_id": string;
    /**
     * Unique identifier for this inventory transfer line, prefixed `invtrln_`. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
     */
    "inventory_transfer_line_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "lost_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_damaged_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_quality_control_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_quarantined_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_sellable_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "returned_quantity": number;
};
/** One line of an inventory transfer you create: an item and the requested quantity. */
export type InventoryTransferLineRequest = {
    /**
     * Condition of the units being moved. Default: "sellable". Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined" | (string & {});
    /**
     * ID of the inventory item to move. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "requested_quantity": number;
};
/** One line of an inventory transfer you create: an item and the requested quantity. */
export type InventoryTransferLineRequestInput = {
    /**
     * Condition of the units being moved. Default: "sellable". Value enum: "sellable",
     * "quality_control", "damaged", "quarantined".
     */
    "condition"?: "sellable" | "quality_control" | "damaged" | "quarantined";
    /**
     * ID of the inventory item to move. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 1.
     */
    "requested_quantity": number;
};
/** A page of `InventoryTransfer` objects. */
export type InventoryTransferListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryTransfer}. Stock moving between locations.
     */
    "data": Array<InventoryTransfer>;
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
export type InventoryTransferLostEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.lost";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.lost";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_transfer.lost";
});
/**
 * The `inventory_transfer.lost` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InventoryTransferLostInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.lost". */
    "event_type"?: "inventory_transfer.lost";
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
 * The `inventory_transfer.lost` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InventoryTransferLostMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.lost". */
    "event_type"?: "inventory_transfer.lost";
});
export type InventoryTransferReceivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_transfer.received";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "closed_at"?: string;
            "closed_reason"?: "received"
                | "canceled"
                | "received_with_cancellation"
                | "returned"
                | "lost"
                | "mixed"
                | null
                | (string & {})
                | null;
            "created_at": string;
            "departed_at"?: string;
            "destination_location_id": string;
            "external_reference_id"?: string;
            "idempotency_key"?: string;
            "inventory_transfer_id": string;
            "lines": Array<InventoryTransferLine>;
            "note"?: string;
            "origin_location_id": string;
            "received_at"?: string;
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_transfer.received";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_transfer.received";
});
/**
 * The `inventory_transfer.received` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryTransferReceivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_transfer.received". */
    "event_type"?: "inventory_transfer.received";
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
 * The `inventory_transfer.received` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryTransferReceivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.closed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.closed_reason (Optional): string or null.
     * How the transfer ended. `null` when the transfer isn't closed. Value enum: "received",
     * "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.departed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.destination_location_id (Required):
     * string. ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_transfer_id (Required): string. Unique identifier for this inventory
     * transfer, prefixed `invtr_`. Example: "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". object.lines
     * (Required): Array of {@link InventoryTransferLine}. Owned collection of transfer lines.
     * Lines have no lifecycle outside this transfer; PATCH replaces the full collection.
     * object.lines[] (Value): {@link InventoryTransferLine}. One line of an inventory transfer,
     * with its quantities. object.note (Optional): string. Free-text note about the transfer.
     * object.origin_location_id (Required): string. ID of the Location the stock leaves. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.received_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required): string. Value
     * enum: "draft", "in_transit", "partially_resolved", "closed". object.supported_actions
     * (Required): Array of string. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". object.supported_actions[] (Value): string. Value enum: "depart",
     * "receive", "return_to_origin", "report_loss", "cancel". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields. closed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". closed_reason (Optional): string or null. How the transfer
         * ended. `null` when the transfer isn't closed. Value enum: "received", "canceled",
         * "received_with_cancellation", "returned", "lost", "mixed", null. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * departed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". destination_location_id (Required): string. ID of the Location
         * the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". external_reference_id
         * (Optional): string. Caller-owned identifier for this resource in an external system.
         * maxLength: 255. Example: "warehouse-1842". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_transfer_id (Required):
         * string. Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
         * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP". lines (Required): Array of {@link
         * InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle
         * outside this transfer; PATCH replaces the full collection. lines[] (Value): {@link
         * InventoryTransferLine}. One line of an inventory transfer, with its quantities. note
         * (Optional): string. Free-text note about the transfer. origin_location_id (Required):
         * string. ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
         * received_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "draft", "in_transit",
         * "partially_resolved", "closed". supported_actions (Required): Array of string. [] enum:
         * "depart", "receive", "return_to_origin", "report_loss", "cancel". supported_actions[]
         * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
         * "cancel". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "closed_at"?: string;
            /**
             * How the transfer ended. `null` when the transfer isn't closed. Value enum:
             * "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed",
             * null.
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
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "departed_at"?: string;
            /** ID of the Location the stock goes to. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "destination_location_id": string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory transfer, prefixed `invtr_`. Example:
             * "invtr_01KEZF7C00HKPTX1QRZ8Y1M6BP".
             */
            "inventory_transfer_id": string;
            /**
             * Owned collection of transfer lines. Lines have no lifecycle outside this transfer;
             * PATCH replaces the full collection. [] (Value): {@link InventoryTransferLine}. One
             * line of an inventory transfer, with its quantities.
             */
            "lines": Array<InventoryTransferLine>;
            /** Free-text note about the transfer. */
            "note"?: string;
            /** ID of the Location the stock leaves. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
            "origin_location_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at"?: string;
            /** Value enum: "draft", "in_transit", "partially_resolved", "closed". */
            "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
            /**
             * [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". []
             * (Value): string. Value enum: "depart", "receive", "return_to_origin", "report_loss",
             * "cancel".
             */
            "supported_actions": Array<"depart" | "receive" | "return_to_origin" | "report_loss" | "cancel" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryTransfer>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_transfer.received". */
    "event_type"?: "inventory_transfer.received";
});
/** A response containing `InventoryTransfer` data. */
export type InventoryTransferResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Stock moving between
     * locations.
     */
    "data": InventoryTransfer;
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

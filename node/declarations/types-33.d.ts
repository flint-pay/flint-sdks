import type { InventoryActionRequired, InventoryActionRequiredPreviousAttributes } from './types-31.js';
import type { MerchantWebhookEnvelope } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { InventoryReservation, InventoryLevel, InventoryOriginPolicy, InventoryOriginPolicyRequestInput } from './types-32.js';
import type { ResponseMeta } from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { CommitInventoryReservationRequestInput } from './types-7.js';
import type { ConsumeInventoryReservationRequestInput } from './types-8.js';
import type { CreateInventoryReservationRequestInput } from './types-10.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { ReleaseInventoryReservationRequestInput } from './types-61.js';
import type { UpdateInventoryReservationRequestInput } from './types-76.js';
import type { InventoryTransferLine } from './types-34.js';
export type InventoryReservationAtRiskEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_reservation.at_risk";
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_reservation.at_risk";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_reservation.at_risk";
});
/**
 * The `inventory_reservation.at_risk` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationAtRiskInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_reservation.at_risk". */
    "event_type"?: "inventory_reservation.at_risk";
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
 * The `inventory_reservation.at_risk` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationAtRiskMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_reservation.at_risk". */
    "event_type"?: "inventory_reservation.at_risk";
});
export type InventoryReservationClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_reservation.closed";
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_reservation.closed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_reservation.closed";
});
/**
 * The `inventory_reservation.closed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_reservation.closed". */
    "event_type"?: "inventory_reservation.closed";
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
 * The `inventory_reservation.closed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_reservation.closed". */
    "event_type"?: "inventory_reservation.closed";
});
export type InventoryReservationCommittedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_reservation.committed";
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_reservation.committed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_reservation.committed";
});
/**
 * The `inventory_reservation.committed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InventoryReservationCommittedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_reservation.committed". */
    "event_type"?: "inventory_reservation.committed";
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
 * The `inventory_reservation.committed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationCommittedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_reservation.committed". */
    "event_type"?: "inventory_reservation.committed";
});
export type InventoryReservationConsumedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_reservation.consumed";
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_reservation.consumed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_reservation.consumed";
});
/**
 * The `inventory_reservation.consumed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationConsumedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_reservation.consumed". */
    "event_type"?: "inventory_reservation.consumed";
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
 * The `inventory_reservation.consumed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationConsumedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_reservation.consumed". */
    "event_type"?: "inventory_reservation.consumed";
});
export type InventoryReservationCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_reservation.created";
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
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_reservation.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_reservation.created";
});
/**
 * The `inventory_reservation.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * reservation changed. Format: uint64. minimum: 1.
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
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_reservation.created". */
    "event_type"?: "inventory_reservation.created";
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
 * The `inventory_reservation.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * reservation changed. Format: uint64. minimum: 1.
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
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_reservation.created". */
    "event_type"?: "inventory_reservation.created";
});
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
export type InventoryReservationLinePreviousAttributes = {
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "allocated_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "at_risk_committed_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "at_risk_held_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * anyOf[2] (Value): null.
     */
    "backordered_quantity"?: ((number) | (null));
    /**
     * ID of the bundle component this line covers. Absent when the line isn't for a bundle
     * component. anyOf[1] (Value): string. ID of the bundle component this line covers. Absent
     * when the line isn't for a bundle component. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     * anyOf[2] (Value): null.
     */
    "bundle_component_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "committed_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "consumed_quantity"?: ((number) | (null));
    /**
     * Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item
     * ID when you sent none. anyOf[1] (Value): string. Key of the demand this line serves. Matches
     * the `demand_key` you sent, or the inventory item ID when you sent none. anyOf[2] (Value):
     * null.
     */
    "demand_key"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "held_quantity"?: ((number) | (null));
    /**
     * ID of the inventory item to reserve. anyOf[1] (Value): string. ID of the inventory item to
     * reserve. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". anyOf[2] (Value): null.
     */
    "inventory_item_id"?: ((string) | (null));
    /**
     * Unique identifier for this inventory reservation line, prefixed `invrln_`. anyOf[1] (Value):
     * string. Unique identifier for this inventory reservation line, prefixed `invrln_`. Example:
     * "invrln_01KEZF7C002JCDA729XDSNWGY5". anyOf[2] (Value): null.
     */
    "inventory_reservation_line_id"?: ((string) | (null));
    /**
     * ID of the Location the stock is allocated from. anyOf[1] (Value): string. ID of the Location
     * the stock is allocated from. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
     * null.
     */
    "location_id"?: ((string) | (null));
    /**
     * Order that owns this record or its referenced line item and charge. anyOf[1] (Value):
     * string. Order that owns this record or its referenced line item and charge. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * ID of the order line item this line covers. Absent unless an order holds the reservation.
     * anyOf[1] (Value): string. ID of the order line item this line covers. Absent unless an order
     * holds the reservation. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value): null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "reallocated_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * anyOf[2] (Value): null.
     */
    "released_from_backordered_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "released_from_committed_quantity"?: ((number) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "released_from_held_quantity"?: ((number) | (null));
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
export type InventoryReservationOwnerMerchantPreviousAttributes = {
    /**
     * Your identifier for the claim that holds the stock. anyOf[1] (Value): string. Your
     * identifier for the claim that holds the stock. anyOf[2] (Value): null.
     */
    "key"?: ((string) | (null));
    /**
     * Who holds the reservation. Value enum: "merchant". anyOf[1] (Value): string. Who holds the
     * reservation. Value enum: "merchant". anyOf[2] (Value): null.
     */
    "type"?: (("merchant" | (string & {})) | (null));
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
export type InventoryReservationOwnerOrderPreviousAttributes = {
    /**
     * The order Flint holds the stock for. Absent only on a closed reservation whose order Flint
     * can no longer identify. anyOf[1] (Value): string. The order Flint holds the stock for.
     * Absent only on a closed reservation whose order Flint can no longer identify. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * Who holds the reservation. Value enum: "order". anyOf[1] (Value): string. Who holds the
     * reservation. Value enum: "order". anyOf[2] (Value): null.
     */
    "type"?: (("order" | (string & {})) | (null));
};
/**
 * Who holds an inventory reservation: either a merchant claim identified by your `key`, or an
 * order.
 */
export type InventoryReservationOwnerPreviousAttributes = (((InventoryReservationOwnerMerchantPreviousAttributes)
    | (InventoryReservationOwnerOrderPreviousAttributes)
    | (unknown)));
/**
 * The owner of a merchant inventory reservation you create: your `key` for what holds the stock.
 */
export type InventoryReservationOwnerRequestInput = {
    /**
     * Your stable identifier for what holds the stock, such as a cart ID. One active reservation
     * per key. minLength: 1. maxLength: 255.
     */
    "key": string;
};
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            "created_at"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "idempotency_key"?: ((string) | (null));
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            "inventory_reservation_id"?: ((string) | (null));
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            "replacement_inventory_reservation_id"?: ((string) | (null));
            "source_inventory_reservation_id"?: ((string) | (null));
            "status"?: (("active" | "closed" | (string & {})) | (null));
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * including synthetic test events. previous_attributes.closed_reason (Optional): string or
     * null. How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null. previous_attributes.closed_reason.anyOf[1] (Value): string. How the
     * reservation ended. adopted when its remaining held stock moved to a delivery selection.
     * mixed when more than one terminal outcome applied. `null` when the reservation isn't closed.
     * Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
     * previous_attributes.closed_reason.anyOf[2] (Value): null. previous_attributes.created_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.created_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.expires_at
     * (Optional): string or null. When held quantity is released if it isn't committed first.
     * Backordered quantity that payment hasn't confirmed yet carries the same deadline. Committed
     * and consumed quantity never expire. `null` when no line holds quantity or has unconfirmed
     * backordered quantity. previous_attributes.expires_at.anyOf[1] (Value): string. When held
     * quantity is released if it isn't committed first. Backordered quantity that payment hasn't
     * confirmed yet carries the same deadline. Committed and consumed quantity never expire.
     * `null` when no line holds quantity or has unconfirmed backordered quantity. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.idempotency_key (Optional): string or null. The Idempotency-Key of
     * the request that created this resource; on a movement, of the command that wrote it. Omitted
     * when that request had no key. previous_attributes.idempotency_key.anyOf[1] (Value): string.
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     * previous_attributes.idempotency_key.anyOf[2] (Value): null.
     * previous_attributes.inventory_action_required (Optional): {@link
     * InventoryActionRequiredPreviousAttributes} or null. Present when the claim needs a merchant
     * action before commerce can continue. previous_attributes.inventory_action_required.anyOf[1]
     * (Value): {@link InventoryActionRequiredPreviousAttributes}.
     * previous_attributes.inventory_action_required.anyOf[2] (Value): null.
     * previous_attributes.inventory_reservation_id (Optional): string or null. Unique identifier
     * for this inventory reservation, prefixed `invr_`.
     * previous_attributes.inventory_reservation_id.anyOf[1] (Value): string. Unique identifier for
     * this inventory reservation, prefixed `invr_`. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.inventory_routing_source (Optional): {@link
     * InventoryRoutingSourcePreviousAttributes} or null. How Flint chooses the Locations that
     * serve the reservation: one fixed Location, an allocation policy, or a specific policy
     * revision. previous_attributes.inventory_routing_source.anyOf[1] (Value): {@link
     * InventoryRoutingSourcePreviousAttributes}.
     * previous_attributes.inventory_routing_source.anyOf[2] (Value): null.
     * previous_attributes.lines (Optional): Array of {@link
     * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock, one
     * for each item and Location. previous_attributes.lines.anyOf[1] (Value): Array of {@link
     * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each
     * item and Location. previous_attributes.lines.anyOf[1][] (Value): {@link
     * InventoryReservationLinePreviousAttributes}. previous_attributes.lines.anyOf[2] (Value):
     * null. previous_attributes.owner (Optional): {@link
     * InventoryReservationOwnerPreviousAttributes} or null. Who holds the reservation: a `key` you
     * choose, or an order Flint holds the stock for. previous_attributes.owner.anyOf[1] (Value):
     * {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation:
     * either a merchant claim identified by your `key`, or an order.
     * previous_attributes.owner.anyOf[2] (Value): null.
     * previous_attributes.replacement_inventory_reservation_id (Optional): string or null. Set on
     * a reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity.
     * previous_attributes.replacement_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * reservation whose claim Flint moved when it rerouted an order: the replacement reservation
     * that now holds the quantity named in this reservation's reallocated_quantity. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.replacement_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.source_inventory_reservation_id (Optional): string or null. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * previous_attributes.source_inventory_reservation_id.anyOf[1] (Value): string. Set on a
     * replacement reservation: the reservation whose claim Flint moved here when it rerouted an
     * order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * previous_attributes.source_inventory_reservation_id.anyOf[2] (Value): null.
     * previous_attributes.status (Optional): string or null. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[1] (Value): string. active while any held, committed, or
     * backordered quantity remains; closed once none does. Value enum: "active", "closed".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.supported_actions
     * (Optional): Array of string or null. Actions that can change this reservation now. Empty for
     * a closed reservation and for one Flint holds for an order. Resending targets already applied
     * succeeds in any status. Computed when Flint produced this response or event, so replays and
     * webhooks keep their original value. [] enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[1] (Value): Array of string. Actions that can
     * change this reservation now. Empty for a closed reservation and for one Flint holds for an
     * order. Resending targets already applied succeeds in any status. Computed when Flint
     * produced this response or event, so replays and webhooks keep their original value. [] enum:
     * "commit", "consume", "release". previous_attributes.supported_actions.anyOf[1][] (Value):
     * string. Value enum: "commit", "consume", "release".
     * previous_attributes.supported_actions.anyOf[2] (Value): null. previous_attributes.updated_at
     * (Optional): string or null. RFC3339 timestamp. previous_attributes.updated_at.anyOf[1]
     * (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. The reservation version. Send it as expected_version to reject
     * a write if the reservation changed. previous_attributes.version.anyOf[1] (Value): integer.
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
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
         * state, including synthetic test events. closed_reason (Optional): string or null. How
         * the reservation ended. adopted when its remaining held stock moved to a delivery
         * selection. mixed when more than one terminal outcome applied. `null` when the
         * reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated",
         * "adopted", "mixed", null. closed_reason.anyOf[1] (Value): string. How the reservation
         * ended. adopted when its remaining held stock moved to a delivery selection. mixed when
         * more than one terminal outcome applied. `null` when the reservation isn't closed. Value
         * enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null.
         * closed_reason.anyOf[2] (Value): null. created_at (Optional): string or null. RFC3339
         * timestamp. created_at.anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. expires_at
         * (Optional): string or null. When held quantity is released if it isn't committed first.
         * Backordered quantity that payment hasn't confirmed yet carries the same deadline.
         * Committed and consumed quantity never expire. `null` when no line holds quantity or has
         * unconfirmed backordered quantity. expires_at.anyOf[1] (Value): string. When held
         * quantity is released if it isn't committed first. Backordered quantity that payment
         * hasn't confirmed yet carries the same deadline. Committed and consumed quantity never
         * expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null.
         * idempotency_key (Optional): string or null. The Idempotency-Key of the request that
         * created this resource; on a movement, of the command that wrote it. Omitted when that
         * request had no key. idempotency_key.anyOf[1] (Value): string. The Idempotency-Key of the
         * request that created this resource; on a movement, of the command that wrote it. Omitted
         * when that request had no key. idempotency_key.anyOf[2] (Value): null.
         * inventory_action_required (Optional): {@link InventoryActionRequiredPreviousAttributes}
         * or null. Present when the claim needs a merchant action before commerce can continue.
         * inventory_action_required.anyOf[1] (Value): {@link
         * InventoryActionRequiredPreviousAttributes}. inventory_action_required.anyOf[2] (Value):
         * null. inventory_reservation_id (Optional): string or null. Unique identifier for this
         * inventory reservation, prefixed `invr_`. inventory_reservation_id.anyOf[1] (Value):
         * string. Unique identifier for this inventory reservation, prefixed `invr_`. Example:
         * "invr_01KEZF7C0041ENRR0C2NF3AP12". inventory_reservation_id.anyOf[2] (Value): null.
         * inventory_routing_source (Optional): {@link InventoryRoutingSourcePreviousAttributes} or
         * null. How Flint chooses the Locations that serve the reservation: one fixed Location, an
         * allocation policy, or a specific policy revision. inventory_routing_source.anyOf[1]
         * (Value): {@link InventoryRoutingSourcePreviousAttributes}.
         * inventory_routing_source.anyOf[2] (Value): null. lines (Optional): Array of {@link
         * InventoryReservationLinePreviousAttributes} or null. Allocations of the reserved stock,
         * one for each item and Location. lines.anyOf[1] (Value): Array of {@link
         * InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for
         * each item and Location. lines.anyOf[1][] (Value): {@link
         * InventoryReservationLinePreviousAttributes}. lines.anyOf[2] (Value): null. owner
         * (Optional): {@link InventoryReservationOwnerPreviousAttributes} or null. Who holds the
         * reservation: a `key` you choose, or an order Flint holds the stock for. owner.anyOf[1]
         * (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who holds an inventory
         * reservation: either a merchant claim identified by your `key`, or an order.
         * owner.anyOf[2] (Value): null. replacement_inventory_reservation_id (Optional): string or
         * null. Set on a reservation whose claim Flint moved when it rerouted an order: the
         * replacement reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. replacement_inventory_reservation_id.anyOf[1] (Value): string. Set
         * on a reservation whose claim Flint moved when it rerouted an order: the replacement
         * reservation that now holds the quantity named in this reservation's
         * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
         * replacement_inventory_reservation_id.anyOf[2] (Value): null.
         * source_inventory_reservation_id (Optional): string or null. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * source_inventory_reservation_id.anyOf[1] (Value): string. Set on a replacement
         * reservation: the reservation whose claim Flint moved here when it rerouted an order.
         * This reservation holds the quantity that reservation reports as reallocated_quantity.
         * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". source_inventory_reservation_id.anyOf[2]
         * (Value): null. status (Optional): string or null. active while any held, committed, or
         * backordered quantity remains; closed once none does. Value enum: "active", "closed".
         * status.anyOf[1] (Value): string. active while any held, committed, or backordered
         * quantity remains; closed once none does. Value enum: "active", "closed". status.anyOf[2]
         * (Value): null. supported_actions (Optional): Array of string or null. Actions that can
         * change this reservation now. Empty for a closed reservation and for one Flint holds for
         * an order. Resending targets already applied succeeds in any status. Computed when Flint
         * produced this response or event, so replays and webhooks keep their original value. []
         * enum: "commit", "consume", "release". supported_actions.anyOf[1] (Value): Array of
         * string. Actions that can change this reservation now. Empty for a closed reservation and
         * for one Flint holds for an order. Resending targets already applied succeeds in any
         * status. Computed when Flint produced this response or event, so replays and webhooks
         * keep their original value. [] enum: "commit", "consume", "release".
         * supported_actions.anyOf[1][] (Value): string. Value enum: "commit", "consume",
         * "release". supported_actions.anyOf[2] (Value): null. updated_at (Optional): string or
         * null. RFC3339 timestamp. updated_at.anyOf[1] (Value): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version
         * (Optional): integer or null. The reservation version. Send it as expected_version to
         * reject a write if the reservation changed. version.anyOf[1] (Value): integer. The
         * reservation version. Send it as expected_version to reject a write if the reservation
         * changed. Format: uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * How the reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the
             * reservation ended. adopted when its remaining held stock moved to a delivery
             * selection. mixed when more than one terminal outcome applied. `null` when the
             * reservation isn't closed. Value enum: "consumed", "released", "expired",
             * "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
             */
            "closed_reason"?: (("consumed" | "released" | "expired" | "reallocated" | "adopted" | "mixed" | null | (string & {}))
                | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * When held quantity is released if it isn't committed first. Backordered quantity
             * that payment hasn't confirmed yet carries the same deadline. Committed and consumed
             * quantity never expire. `null` when no line holds quantity or has unconfirmed
             * backordered quantity. anyOf[1] (Value): string. When held quantity is released if it
             * isn't committed first. Backordered quantity that payment hasn't confirmed yet
             * carries the same deadline. Committed and consumed quantity never expire. `null` when
             * no line holds quantity or has unconfirmed backordered quantity. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key. anyOf[1] (Value):
             * string. The Idempotency-Key of the request that created this resource; on a
             * movement, of the command that wrote it. Omitted when that request had no key.
             * anyOf[2] (Value): null.
             */
            "idempotency_key"?: ((string) | (null));
            /**
             * Present when the claim needs a merchant action before commerce can continue.
             * anyOf[1] (Value): {@link InventoryActionRequiredPreviousAttributes}. anyOf[2]
             * (Value): null.
             */
            "inventory_action_required"?: ((InventoryActionRequiredPreviousAttributes) | (null));
            /**
             * Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1]
             * (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "inventory_reservation_id"?: ((string) | (null));
            /**
             * How Flint chooses the Locations that serve the reservation: one fixed Location, an
             * allocation policy, or a specific policy revision. anyOf[1] (Value): {@link
             * InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
             */
            "inventory_routing_source"?: ((InventoryRoutingSourcePreviousAttributes) | (null));
            /**
             * Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value):
             * Array of {@link InventoryReservationLinePreviousAttributes}. Allocations of the
             * reserved stock, one for each item and Location. anyOf[1][] (Value): {@link
             * InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
             */
            "lines"?: ((Array<InventoryReservationLinePreviousAttributes>) | (null));
            /**
             * Who holds the reservation: a `key` you choose, or an order Flint holds the stock
             * for. anyOf[1] (Value): {@link InventoryReservationOwnerPreviousAttributes}. Who
             * holds an inventory reservation: either a merchant claim identified by your `key`, or
             * an order. anyOf[2] (Value): null.
             */
            "owner"?: ((InventoryReservationOwnerPreviousAttributes) | (null) | (unknown));
            /**
             * Set on a reservation whose claim Flint moved when it rerouted an order: the
             * replacement reservation that now holds the quantity named in this reservation's
             * reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim
             * Flint moved when it rerouted an order: the replacement reservation that now holds
             * the quantity named in this reservation's reallocated_quantity. Example:
             * "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "replacement_inventory_reservation_id"?: ((string) | (null));
            /**
             * Set on a replacement reservation: the reservation whose claim Flint moved here when
             * it rerouted an order. This reservation holds the quantity that reservation reports
             * as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation:
             * the reservation whose claim Flint moved here when it rerouted an order. This
             * reservation holds the quantity that reservation reports as reallocated_quantity.
             * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12". anyOf[2] (Value): null.
             */
            "source_inventory_reservation_id"?: ((string) | (null));
            /**
             * active while any held, committed, or backordered quantity remains; closed once none
             * does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any
             * held, committed, or backordered quantity remains; closed once none does. Value enum:
             * "active", "closed". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "closed" | (string & {})) | (null));
            /**
             * Actions that can change this reservation now. Empty for a closed reservation and for
             * one Flint holds for an order. Resending targets already applied succeeds in any
             * status. Computed when Flint produced this response or event, so replays and webhooks
             * keep their original value. [] enum: "commit", "consume", "release". anyOf[1]
             * (Value): Array of string. Actions that can change this reservation now. Empty for a
             * closed reservation and for one Flint holds for an order. Resending targets already
             * applied succeeds in any status. Computed when Flint produced this response or event,
             * so replays and webhooks keep their original value. [] enum: "commit", "consume",
             * "release". anyOf[1][] (Value): string. Value enum: "commit", "consume", "release".
             * anyOf[2] (Value): null.
             */
            "supported_actions"?: ((Array<"commit" | "consume" | "release" | (string & {})>) | (null));
            /**
             * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * The reservation version. Send it as expected_version to reject a write if the
             * reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as
             * expected_version to reject a write if the reservation changed. Format: uint64.
             * minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * exact and case-sensitive. Returns only resources created in your caller namespace, plus
     * resources created before caller scoping under the original key. Returns current authorized
     * resources, not the recorded response. A pending resource does not prove that the operation
     * succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength:
     * 255. pattern: ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
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
export type InventoryRoutingSourcePreviousAttributes = {
    /**
     * ID of the allocation policy that routes demand. anyOf[1] (Value): string. ID of the
     * allocation policy that routes demand. Example: "invp_01KEZF7C0076BZX855WAGC5SQK". anyOf[2]
     * (Value): null.
     */
    "inventory_allocation_policy_id"?: ((string) | (null));
    /**
     * ID of the allocation policy revision that routes demand. anyOf[1] (Value): string. ID of the
     * allocation policy revision that routes demand. Example: "invpv_01KEZF7C00JSFTTBKC1JY614JJ".
     * anyOf[2] (Value): null.
     */
    "inventory_allocation_policy_revision_id"?: ((string) | (null));
    /**
     * ID of the fixed Location that serves all demand. anyOf[1] (Value): string. ID of the fixed
     * Location that serves all demand. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2]
     * (Value): null.
     */
    "location_id"?: ((string) | (null));
    /**
     * How Flint routes demand to Locations. Value enum: "fixed_location", "policy",
     * "policy_revision". anyOf[1] (Value): string. How Flint routes demand to Locations. Value
     * enum: "fixed_location", "policy", "policy_revision". anyOf[2] (Value): null.
     */
    "type"?: (("fixed_location" | "policy" | "policy_revision" | (string & {})) | (null));
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
     * request sends always wins. `null` when no default is set. Orders, payment links, and
     * subscription plans then use the only active Location with inventory_allocation_enabled when
     * exactly one exists in the current environment. Links and plans do not store this implicit
     * source; it is resolved again when their demand is evaluated. With zero or multiple eligible
     * Locations, tracked demand still requires a source. anyOf[1] (Value): {@link
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
     * request sends always wins. `null` when no default is set. Orders, payment links, and
     * subscription plans then use the only active Location with inventory_allocation_enabled when
     * exactly one exists in the current environment. Links and plans do not store this implicit
     * source; it is resolved again when their demand is evaluated. With zero or multiple eligible
     * Locations, tracked demand still requires a source. Send null to clear it. anyOf[1] (Value):
     * {@link InventoryRoutingSourceRequest}. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * anyOf[2] (Value): null.
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
     * request sends always wins. `null` when no default is set. Orders, payment links, and
     * subscription plans then use the only active Location with inventory_allocation_enabled when
     * exactly one exists in the current environment. Links and plans do not store this implicit
     * source; it is resolved again when their demand is evaluated. With zero or multiple eligible
     * Locations, tracked demand still requires a source. Send null to clear it. anyOf[1] (Value):
     * {@link InventoryRoutingSourceRequestInput}. Where you want inventory routed from: a fixed
     * Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * anyOf[2] (Value): null.
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
export type InventorySourceSystemPreviousAttributes = ({
    /**
     * Your source system's identifier. Required when type is pos, wms, erp, or other; not allowed
     * when type is manual. Don't put secrets in this field. anyOf[1] (Value): string. Your source
     * system's identifier. Required when type is pos, wms, erp, or other; not allowed when type is
     * manual. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842". anyOf[2]
     * (Value): null.
     */
    "external_source_id"?: ((string) | (null));
    /**
     * Source of the event: manual for a manual entry, pos for a point of sale, wms for a warehouse
     * management system, erp for an enterprise resource planning system, or other for another
     * external system. Flint-authored events use flint in responses. Value enum: "manual", "pos",
     * "wms", "erp", "flint", "other". anyOf[1] (Value): string. Source of the event: manual for a
     * manual entry, pos for a point of sale, wms for a warehouse management system, erp for an
     * enterprise resource planning system, or other for another external system. Flint-authored
     * events use flint in responses. Value enum: "manual", "pos", "wms", "erp", "flint", "other".
     * anyOf[2] (Value): null.
     */
    "type"?: (("manual" | "pos" | "wms" | "erp" | "flint" | "other" | (string & {})) | (null));
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
    /**
     * Where the transfer stands, worked out from the quantities that have left the origin and have
     * since been received, returned, or reported lost. Value enum: "draft", "in_transit",
     * "partially_resolved", "closed".
     */
    "status": "draft" | "in_transit" | "partially_resolved" | "closed" | (string & {});
    /**
     * Actions that can change this transfer now. `depart` and `cancel` need units that haven't
     * left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit.
     * Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin",
     * "report_loss", "cancel". [] (Value): string. Value enum: "depart", "receive",
     * "return_to_origin", "report_loss", "cancel".
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

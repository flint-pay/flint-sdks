import type { InventoryLevel, InventoryReceipt, InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-26.js';
import type { ResponseMeta } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { CreateInventoryReceiptRequestInput, CreateInventoryReservationRequestInput } from './types-8.js';
import type { InventoryActionRequired } from './types-25.js';
import type { MerchantWebhookEnvelope } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { UpdateInventoryReservationRequestInput } from './types-58.js';
/**
 * Inventory receipt and the levels it changed. inventory_receipt is the primary resource and
 * expected_version target.
 */
export type InventoryReceiptResult = {
    /**
     * Post-commit state of every level this command touched, one entry per level. A replay returns
     * the levels the original command produced. Empty when no levels changed. [] (Value): {@link
     * InventoryLevel}. The quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
    /**
     * Returned units received into Inventory, from a Return disposition or against the reservation
     * line that consumed them.
     */
    "inventory_receipt": InventoryReceipt;
};
/** A response containing `InventoryReceiptResult` data. */
export type InventoryReceiptResultResponse = {
    /**
     * Inventory receipt and the levels it changed. inventory_receipt is the primary resource and
     * expected_version target.
     */
    "data": InventoryReceiptResult;
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
export type InventoryReceiptsCreateParams = (InputValue<CreateInventoryReceiptRequestInput>);
export type InventoryReceiptsGetParams = {};
export type InventoryReceiptsListParams = {
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
    /** Filter by inventory item. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "inventory_item_id"?: InputValue<string>;
    /** Filter by receiving Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "receiving_location_id"?: InputValue<string>;
    /** Filter by source reservation. Example: "invr_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "inventory_reservation_id"?: InputValue<string>;
    /**
     * Filter by the customer Return that produced the receipt. Example:
     * "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by the Return disposition that produced the receipt. Example:
     * "retdsp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "return_disposition_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by source-system type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "manual",
     * "pos", "wms", "erp", "flint", "other". Value enum: "manual", "pos", "wms", "erp", "flint",
     * "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms",
     * "erp", "flint", "other". anyOf[1][] (Value): string. Value enum: "manual", "pos", "wms",
     * "erp", "flint", "other". anyOf[2] (Value): string. Value enum: "manual", "pos", "wms",
     * "erp", "flint", "other".
     */
    "source_system_type"?: InputValue<("manual" | "pos" | "wms" | "erp" | "flint" | "other")
        | readonly ("manual" | "pos" | "wms" | "erp" | "flint" | "other")[]>;
    /** Filter by external source ID. */
    "external_source_id"?: InputValue<string>;
    /** Filter by external actor ID. */
    "external_actor_id"?: InputValue<string>;
    /** Inclusive lower bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on occurred_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "occurred_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
/**
 * A claim on stock. Quantity moves from held to committed to consumed, and can be released or
 * reallocated.
 */
export type InventoryReservation = {
    /**
     * How the reservation ended. mixed when more than one terminal outcome applied. Value enum:
     * "consumed", "released", "expired", "reallocated", "mixed", null.
     */
    "closed_reason"?: "consumed" | "released" | "expired" | "reallocated" | "mixed" | null | (string & {}) | null;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * When held quantity is released if it isn't committed first. null once no line holds
     * quantity. Committed and consumed quantity never expire. Format: date-time.
     */
    "expires_at": string | null;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /**
     * Present when the claim needs a merchant action before commerce can continue. Says that an
     * inventory reservation needs action, with the `reason` and the reservation lines affected.
     */
    "inventory_action_required"?: InventoryActionRequired;
    "inventory_reservation_id": string;
    /**
     * Where an order, payment link, or reservation routes inventory from: a fixed Location, an
     * inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source": InventoryRoutingSource;
    /**
     *  [] (Value): {@link InventoryReservationLine}. One item's location allocation within a
     * reservation.
     */
    "lines": Array<InventoryReservationLine>;
    /**
     * Who holds an inventory reservation: either a merchant claim identified by your `key`, or an
     * order.
     */
    "owner": InventoryReservationOwner;
    /**
     * Set on a reservation whose claim Flint moved when it rerouted an order: the replacement
     * reservation that now holds the quantity named in this reservation's reallocated_quantity.
     */
    "replacement_inventory_reservation_id"?: string;
    /**
     * Set on a replacement reservation: the reservation whose claim Flint moved here when it
     * rerouted an order. This reservation holds the quantity that reservation reports as
     * reallocated_quantity.
     */
    "source_inventory_reservation_id"?: string;
    /**
     * active while any held or committed quantity remains; closed once none does. Value enum:
     * "active", "closed".
     */
    "status": "active" | "closed" | (string & {});
    /**
     * Actions that can change this reservation now. Empty for a closed reservation and for one
     * Flint holds for an order. Resending targets already applied succeeds in any status. Computed
     * when Flint produced this response or event, so replays and webhooks keep their original
     * value. [] enum: "commit", "consume", "release". [] (Value): string. Value enum: "commit",
     * "consume", "release".
     */
    "supported_actions": Array<"commit" | "consume" | "release" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * The reservation version. Send it as expected_version to reject a write if the reservation
     * changed. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type InventoryReservationActionRequiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.action_required";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.action_required";
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
    "event_type": "inventory_reservation.action_required";
});
/**
 * The `inventory_reservation.action_required` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InventoryReservationActionRequiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.action_required". */
    "event_type"?: "inventory_reservation.action_required";
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
 * The `inventory_reservation.action_required` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type InventoryReservationActionRequiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.action_required". */
    "event_type"?: "inventory_reservation.action_required";
});
export type InventoryReservationAtRiskEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.at_risk";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.at_risk";
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
    "event_type": "inventory_reservation.at_risk";
});
/**
 * The `inventory_reservation.at_risk` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationAtRiskInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.at_risk". */
    "event_type"?: "inventory_reservation.at_risk";
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
 * The `inventory_reservation.at_risk` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationAtRiskMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.at_risk". */
    "event_type"?: "inventory_reservation.at_risk";
});
export type InventoryReservationClosedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.closed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.closed";
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
    "event_type": "inventory_reservation.closed";
});
/**
 * The `inventory_reservation.closed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationClosedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.closed". */
    "event_type"?: "inventory_reservation.closed";
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
 * The `inventory_reservation.closed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationClosedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.closed". */
    "event_type"?: "inventory_reservation.closed";
});
export type InventoryReservationCommittedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.committed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.committed";
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
    "event_type": "inventory_reservation.committed";
});
/**
 * The `inventory_reservation.committed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InventoryReservationCommittedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.committed". */
    "event_type"?: "inventory_reservation.committed";
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
 * The `inventory_reservation.committed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationCommittedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.committed". */
    "event_type"?: "inventory_reservation.committed";
});
export type InventoryReservationConsumedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.consumed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.consumed";
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
    "event_type": "inventory_reservation.consumed";
});
/**
 * The `inventory_reservation.consumed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationConsumedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.consumed". */
    "event_type"?: "inventory_reservation.consumed";
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
 * The `inventory_reservation.consumed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationConsumedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.consumed". */
    "event_type"?: "inventory_reservation.consumed";
});
export type InventoryReservationCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.created";
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
    "event_type": "inventory_reservation.created";
});
/**
 * The `inventory_reservation.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.created". */
    "event_type"?: "inventory_reservation.created";
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
 * The `inventory_reservation.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.created". */
    "event_type"?: "inventory_reservation.created";
});
export type InventoryReservationHoldExpiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.hold_expired";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.hold_expired";
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
    "event_type": "inventory_reservation.hold_expired";
});
/**
 * The `inventory_reservation.hold_expired` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InventoryReservationHoldExpiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.hold_expired". */
    "event_type"?: "inventory_reservation.hold_expired";
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
 * The `inventory_reservation.hold_expired` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationHoldExpiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
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
    "bundle_component_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "committed_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "consumed_quantity": number;
    "demand_key": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "held_quantity": number;
    "inventory_item_id": string;
    "inventory_reservation_line_id": string;
    "location_id": string;
    "order_line_item_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "reallocated_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "released_from_committed_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "released_from_held_quantity": number;
};
/** A page of `InventoryReservation` objects. */
export type InventoryReservationListResponse = {
    /**
     *  [] (Value): {@link InventoryReservation}. A claim on stock. Quantity moves from held to
     * committed to consumed, and can be released or reallocated.
     */
    "data": Array<InventoryReservation>;
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
/**
 * Who holds an inventory reservation: either a merchant claim identified by your `key`, or an
 * order.
 */
export type InventoryReservationOwner = ((InventoryReservationOwnerMerchant) | (InventoryReservationOwnerOrder) | (Record<string, unknown>));
/** The `merchant` variant of `InventoryReservationOwner`. */
export type InventoryReservationOwnerMerchant = {
    "key": string;
    /** Value enum: "merchant". */
    "type": "merchant" | (string & {});
};
/** The `order` variant of `InventoryReservationOwner`. */
export type InventoryReservationOwnerOrder = {
    /**
     * The order Flint holds the stock for. Absent only on a closed reservation whose order Flint
     * can no longer identify.
     */
    "order_id"?: string;
    /** Value enum: "order". */
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
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.released";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReservation;
    };
    "event_type"?: "inventory_reservation.released";
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
    "event_type": "inventory_reservation.released";
});
/**
 * The `inventory_reservation.released` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReservationReleasedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.released". */
    "event_type"?: "inventory_reservation.released";
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
 * The `inventory_reservation.released` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryReservationReleasedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReservation}. A claim on stock. Quantity moves from held
     * to committed to consumed, and can be released or reallocated.
     */
    "data"?: {
        /**
         * A claim on stock. Quantity moves from held to committed to consumed, and can be released
         * or reallocated.
         */
        "object": InventoryReservation;
    };
    /** Value enum: "inventory_reservation.released". */
    "event_type"?: "inventory_reservation.released";
});
/** A response containing `InventoryReservation` data. */
export type InventoryReservationResponse = {
    /**
     * A claim on stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "data": InventoryReservation;
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
 * inventory_reservation is the primary resource and expected_version target. Stock-moving
 * transitions return this result instead of a resource alone.
 */
export type InventoryReservationResult = {
    /**
     * Post-commit state of every level this command touched, so no follow-up read is needed. A
     * replay returns the levels the original command produced. [] (Value): {@link InventoryLevel}.
     * The quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
    /**
     * A claim on stock. Quantity moves from held to committed to consumed, and can be released or
     * reallocated.
     */
    "inventory_reservation": InventoryReservation;
};
/** A response containing `InventoryReservationResult` data. */
export type InventoryReservationResultResponse = {
    /**
     * inventory_reservation is the primary resource and expected_version target. Stock-moving
     * transitions return this result instead of a resource alone.
     */
    "data": InventoryReservationResult;
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
/** The request body for: Transition inventory reservation. */
export type InventoryReservationTransitionRequest = ((InventoryReservationTransitionRequestCommit)
    | (InventoryReservationTransitionRequestConsume)
    | (InventoryReservationTransitionRequestRelease)
    | (Record<string, unknown>));
/** The `commit` variant of `InventoryReservationTransitionRequest`. */
export type InventoryReservationTransitionRequestCommit = {
    /** Value enum: "commit". */
    "action": "commit" | (string & {});
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_reservation_line_id (Required):
     * string. Line being transitioned. minLength: 1. [].target_committed_quantity (Required):
     * integer. Cumulative whole-number quantity that should have reached this target. Format:
     * int64. minimum: 0.
     */
    "lines": Array<{
        /** Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_committed_quantity": number;
    }>;
};
/** The `commit` variant of `InventoryReservationTransitionRequest`. */
export type InventoryReservationTransitionRequestCommitInput = {
    /** Value enum: "commit". */
    "action": "commit";
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_reservation_line_id (Required):
     * string. Line being transitioned. minLength: 1. [].target_committed_quantity (Required):
     * integer. Cumulative whole-number quantity that should have reached this target. Format:
     * int64. minimum: 0.
     */
    "lines": Array<{
        /** Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_committed_quantity": number;
    }>;
};
/** The `consume` variant of `InventoryReservationTransitionRequest`. */
export type InventoryReservationTransitionRequestConsume = {
    /** Value enum: "consume". */
    "action": "consume" | (string & {});
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_reservation_line_id (Required):
     * string. Line being transitioned. minLength: 1. [].target_consumed_quantity (Required):
     * integer. Cumulative whole-number quantity that should have reached this target. Format:
     * int64. minimum: 0.
     */
    "lines": Array<{
        /** Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_consumed_quantity": number;
    }>;
    /**
     * When and where the physical handoff happened. When omitted, occurred_at is the command
     * receipt time and source_system is null. Where and when an inventory event happened: the
     * source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** The `consume` variant of `InventoryReservationTransitionRequest`. */
export type InventoryReservationTransitionRequestConsumeInput = {
    /** Value enum: "consume". */
    "action": "consume";
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object. [].inventory_reservation_line_id (Required):
     * string. Line being transitioned. minLength: 1. [].target_consumed_quantity (Required):
     * integer. Cumulative whole-number quantity that should have reached this target. Format:
     * int64. minimum: 0.
     */
    "lines": Array<{
        /** Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_consumed_quantity": number;
    }>;
    /**
     * When and where the physical handoff happened. When omitted, occurred_at is the command
     * receipt time and source_system is null. Where and when an inventory event happened: the
     * source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** The request body for: Transition inventory reservation. */
export type InventoryReservationTransitionRequestInput = ((InventoryReservationTransitionRequestCommitInput)
    | (InventoryReservationTransitionRequestConsumeInput)
    | (InventoryReservationTransitionRequestReleaseInput));
/** The `release` variant of `InventoryReservationTransitionRequest`. */
export type InventoryReservationTransitionRequestRelease = {
    /** Value enum: "release". */
    "action": "release" | (string & {});
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object and Alternative shapes (see declared
     * variants). [].inventory_reservation_line_id (Required): string. Line being transitioned.
     * minLength: 1. [].target_released_from_committed_quantity (Optional): integer. Cumulative
     * whole-number quantity that should have reached this target. Format: int64. minimum: 0.
     * [].target_released_from_held_quantity (Optional): integer. Cumulative whole-number quantity
     * that should have reached this target. Format: int64. minimum: 0. [].anyOf[1] (Value): any.
     * [].anyOf[2] (Value): any.
     */
    "lines": Array<({
        /** Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_committed_quantity"?: number;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_held_quantity"?: number;
    })
        & (({
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_held_quantity": number;
    })
        | ({
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_committed_quantity": number;
    })
        | (Record<string, unknown>))>;
};
/** The `release` variant of `InventoryReservationTransitionRequest`. */
export type InventoryReservationTransitionRequestReleaseInput = {
    /** Value enum: "release". */
    "action": "release";
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
    /**
     * minItems: 1. maxItems: 100. [] (Value): object and Alternative shapes (see declared
     * variants). [].inventory_reservation_line_id (Required): string. Line being transitioned.
     * minLength: 1. [].target_released_from_committed_quantity (Optional): integer. Cumulative
     * whole-number quantity that should have reached this target. Format: int64. minimum: 0.
     * [].target_released_from_held_quantity (Optional): integer. Cumulative whole-number quantity
     * that should have reached this target. Format: int64. minimum: 0. [].anyOf[1] (Value): any.
     * [].anyOf[2] (Value): any.
     */
    "lines": Array<({
        /** Line being transitioned. minLength: 1. */
        "inventory_reservation_line_id": string;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_committed_quantity"?: number;
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_held_quantity"?: number;
    })
        & (({
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_held_quantity": number;
    })
        | ({
        /**
         * Cumulative whole-number quantity that should have reached this target. Format: int64.
         * minimum: 0.
         */
        "target_released_from_committed_quantity": number;
    }))>;
};
export type InventoryReservationsCreateParams = (InputValue<CreateInventoryReservationRequestInput>);
export type InventoryReservationsGetParams = {};
export type InventoryReservationsListParams = {
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
     * Filter by an inventory item on a reservation line. Example:
     * "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Filter by a location on a reservation line. Combined with inventory_item_id, the same line
     * must match both. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "location_id"?: InputValue<string>;
    /**
     * Filter by the reservation's resolved owner order. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "order_id"?: InputValue<string>;
    /**
     * Filter by reservation status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "closed". Value enum: "active", "closed". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "active", "closed". anyOf[1][] (Value): string. Value enum: "active", "closed".
     * anyOf[2] (Value): string. Value enum: "active", "closed".
     */
    "status"?: InputValue<("active" | "closed") | readonly ("active" | "closed")[]>;
    /**
     * Filter by merchant or order ownership. Omit to return every owner type. Accepts repeated
     * keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "merchant", "order". Value enum: "merchant", "order". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "merchant", "order". anyOf[1][] (Value):
     * string. Value enum: "merchant", "order". anyOf[2] (Value): string. Value enum: "merchant",
     * "order".
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
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * True selects reservations with at-risk quantity; false selects reservations with none on any
     * line. Omit for all reservations.
     */
    "has_at_risk_quantity"?: InputValue<boolean>;
    /**
     * Filter by how the reservation ended. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "consumed", "released", "expired", "reallocated", "mixed". Value enum: "consumed",
     * "released", "expired", "reallocated", "mixed". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "consumed", "released", "expired", "reallocated", "mixed". anyOf[1][] (Value):
     * string. Value enum: "consumed", "released", "expired", "reallocated", "mixed". anyOf[2]
     * (Value): string. Value enum: "consumed", "released", "expired", "reallocated", "mixed".
     */
    "closed_reason"?: InputValue<("consumed" | "released" | "expired" | "reallocated" | "mixed")
        | readonly ("consumed" | "released" | "expired" | "reallocated" | "mixed")[]>;
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
};
export type InventoryReservationsTransitionParams = (InventoryReservationTransitionRequestInput);
export type InventoryReservationsUpdateParams = (InputValue<UpdateInventoryReservationRequestInput>);
/**
 * Stock you ask to reserve for one item: the item and quantity, plus optional Location limits and
 * splitting behavior.
 */
export type InventoryRoutingDemand = {
    /**
     * Limits this demand to these Locations. Omit it or send an empty list to allow any Location
     * permitted by the routing source. [] (Value): string. minLength: 1.
     */
    "allowed_location_ids"?: Array<string>;
    /**
     * Your identifier for this demand. Defaults to inventory_item_id. Required on every demand
     * when an inventory_item_id occurs more than once. minLength: 1.
     */
    "demand_key"?: string;
    /**
     * Requires this demand to use this Location. The Location must also satisfy
     * allowed_location_ids and the routing source. minLength: 1.
     */
    "forced_location_id"?: string;
    /** minLength: 1. */
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
     * permitted by the routing source. [] (Value): string. minLength: 1.
     */
    "allowed_location_ids"?: Array<string>;
    /**
     * Your identifier for this demand. Defaults to inventory_item_id. Required on every demand
     * when an inventory_item_id occurs more than once. minLength: 1.
     */
    "demand_key"?: string;
    /**
     * Requires this demand to use this Location. The Location must also satisfy
     * allowed_location_ids and the routing source. minLength: 1.
     */
    "forced_location_id"?: string;
    /** minLength: 1. */
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
    "inventory_allocation_policy_id"?: string;
    "inventory_allocation_policy_revision_id"?: string;
    "location_id"?: string;
    /** Value enum: "fixed_location", "policy", "policy_revision". */
    "type": "fixed_location" | "policy" | "policy_revision" | (string & {});
};
/** The `fixed_location` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputFixedLocation = {
    /** minLength: 1. */
    "location_id": string;
    /** Value enum: "fixed_location". */
    "type": "fixed_location" | (string & {});
};
/** The `fixed_location` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputFixedLocationInput = {
    /** minLength: 1. */
    "location_id": string;
    /** Value enum: "fixed_location". */
    "type": "fixed_location";
};
/** The `policy` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputPolicy = {
    /** minLength: 1. */
    "inventory_allocation_policy_id": string;
    /** Value enum: "policy". */
    "type": "policy" | (string & {});
};
/** The `policy` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputPolicyInput = {
    /** minLength: 1. */
    "inventory_allocation_policy_id": string;
    /** Value enum: "policy". */
    "type": "policy";
};
/** The `policy_revision` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputPolicyRevision = {
    /** minLength: 1. */
    "inventory_allocation_policy_revision_id": string;
    /** Value enum: "policy_revision". */
    "type": "policy_revision" | (string & {});
};
/** The `policy_revision` variant of `InventoryRoutingSourceInput`. */
export type InventoryRoutingSourceInputPolicyRevisionInput = {
    /** minLength: 1. */
    "inventory_allocation_policy_revision_id": string;
    /** Value enum: "policy_revision". */
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

import type { InventoryAllocationPolicyRevision, InventoryAllocationPoliciesDeleteParams } from './types-25.js';
import type { ResponseMeta } from './types-48.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { InventorySourceSystem, InventorySourceSystemRequest, InventorySourceSystemRequestInput } from './types-28.js';
import type { InputValue } from '../runtime.js';
import type { CreateInventoryCountRequestInput, CreateInventoryItemRequestInput } from './types-8.js';
import type {
    UpdateInventoryCountRequestInput,
    UpdateInventoryItemRequestInput,
    UpdateInventoryLevelRequestInput
} from './types-58.js';
import type { ResourceReference } from './types-47.js';
/** A response containing `InventoryAllocationPolicyRevision` data. */
export type InventoryAllocationPolicyRevisionResponse = {
    /**
     * An immutable routing configuration published when an allocation policy is created or its
     * configuration is replaced. Revisions remain readable after later policy edits.
     */
    "data": InventoryAllocationPolicyRevision;
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
/** A physical count used to reconcile stock. */
export type InventoryCount = {
    /** RFC3339 timestamp. Format: date-time. */
    "applied_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    "inventory_count_id": string;
    /**
     *  [] (Value): {@link InventoryCountLine}. One item's line in an inventory count, with the
     * quantities Flint expected, the quantities counted, and the variance applied.
     */
    "lines": Array<InventoryCountLine>;
    "location_id": string;
    /**
     * Where an inventory count came from: the source system, an external actor ID, and when the
     * event occurred.
     */
    "observation_provenance"?: InventoryCountObservationProvenance;
    /** Value enum: "draft", "applied", "canceled". */
    "status": "draft" | "applied" | "canceled" | (string & {});
    /**
     * Actions that can change this count now. A draft can be canceled, and applied once every line
     * has an observation. Empty after the count is applied or canceled. [] enum: "apply",
     * "cancel". [] (Value): string. Value enum: "apply", "cancel".
     */
    "supported_actions": Array<"apply" | "cancel" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: uint64. minimum: 1. */
    "version": number;
};
export type InventoryCountAppliedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryCount;
    };
    "event_type"?: "inventory_count.applied";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryCount;
    };
    "event_type"?: "inventory_count.applied";
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
    "event_type": "inventory_count.applied";
});
/**
 * The `inventory_count.applied` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InventoryCountAppliedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryCount}. A physical count used to reconcile stock. */
    "data"?: {
        /** A physical count used to reconcile stock. */
        "object": InventoryCount;
    };
    /** Value enum: "inventory_count.applied". */
    "event_type"?: "inventory_count.applied";
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
 * The `inventory_count.applied` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InventoryCountAppliedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link InventoryCount}. A physical count used to reconcile stock. */
    "data"?: {
        /** A physical count used to reconcile stock. */
        "object": InventoryCount;
    };
    /** Value enum: "inventory_count.applied". */
    "event_type"?: "inventory_count.applied";
});
/**
 * One item's line in an inventory count, with the quantities Flint expected, the quantities
 * counted, and the variance applied.
 */
export type InventoryCountLine = {
    /**
     * Physical version accepted with the latest saved observation. Meaningful once
     * counted_on_hand_quantity is present. Applying the count requires the same physical version.
     * Format: int64. minimum: 0.
     */
    "captured_physical_version": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "counted_damaged_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "counted_on_hand_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "counted_quality_control_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "counted_quarantined_quantity"?: number;
    /**
     * The difference this line applied to the damaged quantity. Present once the count is applied.
     * A draft or canceled count omits it. Format: int64.
     */
    "damaged_variance"?: number;
    /**
     * The damaged quantity Flint holds for this item at this location right now. Present while the
     * count is unapplied, on every line whether or not it has been counted. Applying the count
     * sets the level to the counted quantities, and the apply is rejected if the level changed
     * since the line was captured. An applied or canceled count omits it. Whole-number quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "expected_damaged_quantity"?: number;
    /**
     * The on-hand quantity Flint holds for this item at this location right now. Present while the
     * count is unapplied, on every line whether or not it has been counted. Applying the count
     * sets the level to the counted quantities, and the apply is rejected if the level changed
     * since the line was captured. An applied or canceled count omits it. Whole-number quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "expected_on_hand_quantity"?: number;
    /**
     * The quality-control quantity Flint holds for this item at this location right now. Present
     * while the count is unapplied, on every line whether or not it has been counted. Applying the
     * count sets the level to the counted quantities, and the apply is rejected if the level
     * changed since the line was captured. An applied or canceled count omits it. Whole-number
     * quantity; fractional quantities are not supported. Format: int64.
     */
    "expected_quality_control_quantity"?: number;
    /**
     * The quarantined quantity Flint holds for this item at this location right now. Present while
     * the count is unapplied, on every line whether or not it has been counted. Applying the count
     * sets the level to the counted quantities, and the apply is rejected if the level changed
     * since the line was captured. An applied or canceled count omits it. Whole-number quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "expected_quarantined_quantity"?: number;
    "inventory_count_line_id": string;
    "inventory_item_id": string;
    "inventory_movement_id"?: string;
    /**
     * The difference this line applied to the on-hand quantity. Present once the count is applied.
     * A draft or canceled count omits it. Format: int64.
     */
    "on_hand_variance"?: number;
    /**
     * The difference this line applied to the quality-control quantity. Present once the count is
     * applied. A draft or canceled count omits it. Format: int64.
     */
    "quality_control_variance"?: number;
    /**
     * The difference this line applied to the quarantined quantity. Present once the count is
     * applied. A draft or canceled count omits it. Format: int64.
     */
    "quarantined_variance"?: number;
    /** Format: int64. minimum: 0. */
    "source_observation_sequence"?: number;
};
/** A page of `InventoryCount` objects. */
export type InventoryCountListResponse = {
    /**  [] (Value): {@link InventoryCount}. A physical count used to reconcile stock. */
    "data": Array<InventoryCount>;
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
 * Where an inventory count came from: the source system, an external actor ID, and when the event
 * occurred.
 */
export type InventoryCountObservationProvenance = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time.
     */
    "occurred_at"?: string;
    /**
     *  anyOf[1] (Value): {@link InventorySourceSystem}. The system an inventory event came from,
     * such as manual entry, a point of sale, a warehouse system, or Flint, with your source
     * identifier when it applies. anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
});
/**
 * A counted quantity for one item in an inventory count, with the physical version it was read at.
 */
export type InventoryCountObservationRequest = {
    /**
     * Whole-number quantity; fractional quantities are not supported. When omitted, keeps the
     * line's expected_damaged_quantity from the same locked physical snapshot whose version was
     * checked; the saved line reports that value as counted. Format: int64. minimum: 0.
     */
    "counted_damaged_quantity"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "counted_on_hand_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. When omitted, keeps the
     * line's expected_quality_control_quantity from the same locked physical snapshot whose
     * version was checked; the saved line reports that value as counted. Format: int64. minimum:
     * 0.
     */
    "counted_quality_control_quantity"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. When omitted, keeps the
     * line's expected_quarantined_quantity from the same locked physical snapshot whose version
     * was checked; the saved line reports that value as counted. Format: int64. minimum: 0.
     */
    "counted_quarantined_quantity"?: number;
    /**
     * Physical version read before counting this item. Zero is valid for a missing level. Recount
     * after physical stock changes, even when the count is unchanged; never refresh only the
     * token. Format: int64. minimum: 0.
     */
    "expected_physical_version": number;
    /** minLength: 1. */
    "inventory_item_id": string;
    /** Format: int64. minimum: 0. */
    "source_observation_sequence"?: number;
};
/**
 * A counted quantity for one item in an inventory count, with the physical version it was read at.
 */
export type InventoryCountObservationRequestInput = InventoryCountObservationRequest;
/** A response containing `InventoryCount` data. */
export type InventoryCountResponse = {
    /** A physical count used to reconcile stock. */
    "data": InventoryCount;
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
 * inventory_count is the primary resource and expected_version target. Stock-moving transitions
 * return this result instead of a resource alone.
 */
export type InventoryCountResult = {
    /** A physical count used to reconcile stock. */
    "inventory_count": InventoryCount;
    /**
     * Post-commit state of every level this command touched, one entry per level. A replay returns
     * the levels the original command produced. Empty when no levels changed. [] (Value): {@link
     * InventoryLevel}. The quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
};
/** A response containing `InventoryCountResult` data. */
export type InventoryCountResultResponse = {
    /**
     * inventory_count is the primary resource and expected_version target. Stock-moving
     * transitions return this result instead of a resource alone.
     */
    "data": InventoryCountResult;
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
/** The request body for: Transition inventory count. */
export type InventoryCountTransitionRequest = ((InventoryCountTransitionRequestApply)
    | (InventoryCountTransitionRequestCancel)
    | (Record<string, unknown>));
/** The `apply` variant of `InventoryCountTransitionRequest`. */
export type InventoryCountTransitionRequestApply = {
    /** Value enum: "apply". */
    "action": "apply" | (string & {});
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
};
/** The `apply` variant of `InventoryCountTransitionRequest`. */
export type InventoryCountTransitionRequestApplyInput = {
    /** Value enum: "apply". */
    "action": "apply";
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
};
/** The `cancel` variant of `InventoryCountTransitionRequest`. */
export type InventoryCountTransitionRequestCancel = {
    /** Value enum: "cancel". */
    "action": "cancel" | (string & {});
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
};
/** The `cancel` variant of `InventoryCountTransitionRequest`. */
export type InventoryCountTransitionRequestCancelInput = {
    /** Value enum: "cancel". */
    "action": "cancel";
    /**
     * Optional resource version the caller last read. Enforced when sent. Format: uint64. minimum:
     * 1.
     */
    "expected_version"?: number;
};
/** The request body for: Transition inventory count. */
export type InventoryCountTransitionRequestInput = ((InventoryCountTransitionRequestApplyInput) | (InventoryCountTransitionRequestCancelInput));
export type InventoryCountsCreateParams = (InputValue<CreateInventoryCountRequestInput>);
export type InventoryCountsGetParams = {};
export type InventoryCountsListParams = {
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
    /** Filter by a counted inventory item. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "inventory_item_id"?: InputValue<string>;
    /** Filter by Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "location_id"?: InputValue<string>;
    /**
     * Filter by count status. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "draft", "applied",
     * "canceled". Value enum: "draft", "applied", "canceled". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "draft", "applied", "canceled". anyOf[1][] (Value): string. Value
     * enum: "draft", "applied", "canceled". anyOf[2] (Value): string. Value enum: "draft",
     * "applied", "canceled".
     */
    "status"?: InputValue<("draft" | "applied" | "canceled") | readonly ("draft" | "applied" | "canceled")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on applied_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "applied_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on applied_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "applied_before"?: InputValue<string | globalThis.Date>;
};
export type InventoryCountsTransitionParams = (InventoryCountTransitionRequestInput);
export type InventoryCountsUpdateParams = (InputValue<UpdateInventoryCountRequestInput>);
/**
 * A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference
 * an inventory item rather than carrying their own counter.
 */
export type InventoryItem = {
    /** Optional searchable barcode. */
    "barcode"?: string;
    /** Time the inventory item was created. Format: date-time. */
    "created_at": string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /** Stable inventory item ID. */
    "inventory_item_id": string;
    /**
     * Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with
     * flint_ are reserved for Flint and are not returned. Writes follow the limits on
     * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Merchant-facing inventory item name. */
    "name": string;
    /** Optional searchable stock-keeping unit. */
    "sku"?: string;
    /** Current inventory item lifecycle status. Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Time the inventory item last changed. Format: date-time. */
    "updated_at": string;
    /** Optimistic-concurrency version for item writes. Format: uint64. minimum: 1. */
    "version": number;
};
/**
 * Inventory item details you supply when creating an inventory item for a product variant: `name`,
 * `sku`, `barcode`, and metadata.
 */
export type InventoryItemCreateRequest = {
    /** Barcode assigned to the new inventory item. minLength: 1. maxLength: 255. */
    "barcode"?: string;
    /**
     * Caller-owned metadata for the new inventory item. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Name of the inventory item to create for this variant. minLength: 1. maxLength: 255. */
    "name": string;
    /** Stock keeping unit assigned to the new inventory item. minLength: 1. maxLength: 255. */
    "sku"?: string;
};
/**
 * Inventory item details you supply when creating an inventory item for a product variant: `name`,
 * `sku`, `barcode`, and metadata.
 */
export type InventoryItemCreateRequestInput = {
    /** Barcode assigned to the new inventory item. minLength: 1. maxLength: 255. */
    "barcode"?: string;
    /**
     * Caller-owned metadata for the new inventory item. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Name of the inventory item to create for this variant. minLength: 1. maxLength: 255. */
    "name": string;
    /** Stock keeping unit assigned to the new inventory item. minLength: 1. maxLength: 255. */
    "sku"?: string;
};
/** A page of `InventoryItem` objects. */
export type InventoryItemListResponse = {
    /**
     *  [] (Value): {@link InventoryItem}. A stock-keeping unit that inventory quantities are
     * tracked against. Catalog variants reference an inventory item rather than carrying their own
     * counter.
     */
    "data": Array<InventoryItem>;
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
/** A response containing `InventoryItem` data. */
export type InventoryItemResponse = {
    /**
     * A stock-keeping unit that inventory quantities are tracked against. Catalog variants
     * reference an inventory item rather than carrying their own counter.
     */
    "data": InventoryItem;
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
export type InventoryItemsCreateParams = (InputValue<CreateInventoryItemRequestInput>);
export type InventoryItemsDeleteParams = InventoryAllocationPoliciesDeleteParams;
export type InventoryItemsGetParams = {};
export type InventoryItemsListParams = {
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
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active",
     * "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "inactive", "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive",
     * "archived". anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /** Filter by exact SKU. */
    "sku"?: InputValue<string>;
    /** Filter by exact barcode. */
    "barcode"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Search inventory item ID, external reference ID, name, SKU, or barcode. maxLength: 255. */
    "query"?: InputValue<string>;
};
export type InventoryItemsUpdateParams = (InputValue<UpdateInventoryItemRequestInput>);
/** The quantity state of one inventory item at one Location. */
export type InventoryLevel = {
    /**
     * Derived and never written: on_hand minus unavailable, held, committed, and safety stock,
     * never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "available_quantity": number;
    /** Advances only when held or committed quantities change. Format: int64. minimum: 0. */
    "claim_version": number;
    /**
     * Units promised to accepted orders. Still physically present until fulfillment consumes them.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     */
    "committed_quantity": number;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "damaged_quantity": number;
    /**
     * Units claimed by an open reservation that has not been committed. Whole-number quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "held_quantity": number;
    /**
     * Units recorded as inbound but not yet on hand. Does not count toward availability.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     */
    "incoming_quantity": number;
    /**
     * The inventory item this level belongs to. Present only when the list request asked for
     * expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against.
     * Catalog variants reference an inventory item rather than carrying their own counter.
     */
    "inventory_item"?: InventoryItem;
    "inventory_item_id": string;
    "inventory_level_id": string;
    "location_id": string;
    /**
     * Units physically present at the Location, in any condition. Whole-number quantity;
     * fractional quantities are not supported. Format: int64.
     */
    "on_hand_quantity": number;
    /** Advances only when on-hand or condition quantities change. Format: int64. minimum: 0. */
    "physical_version": number;
    /**
     * On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "quality_control_quantity": number;
    /**
     * On-hand units isolated for review. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "quarantined_quantity": number;
    /**
     * Buffer withheld from allocation. Change it with PATCH
     * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are
     * not supported. Format: int64.
     */
    "safety_stock_quantity": number;
    /**
     * Derived: claims exceeding sellable physical stock. Positive only after stock is lost,
     * damaged, or corrected down. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "shortage_quantity": number;
    /**
     * Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "unavailable_on_hand_quantity": number;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Changes on every quantity or claim change at this level, including holds and commits. Read
     * it immediately before a PATCH. A level that a counted adjustment creates without a quantity
     * change starts at version 0. Format: int64. minimum: 0.
     */
    "version": number;
};
/** A page of `InventoryLevel` objects. */
export type InventoryLevelListResponse = {
    /**
     *  [] (Value): {@link InventoryLevel}. The quantity state of one inventory item at one
     * Location.
     */
    "data": Array<InventoryLevel>;
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
/** A response containing `InventoryLevel` data. */
export type InventoryLevelResponse = {
    /** The quantity state of one inventory item at one Location. */
    "data": InventoryLevel;
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
export type InventoryLevelShortageDetectedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryLevel;
    };
    "event_type"?: "inventory_level.shortage_detected";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryLevel;
    };
    "event_type"?: "inventory_level.shortage_detected";
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
    "event_type": "inventory_level.shortage_detected";
});
/**
 * The `inventory_level.shortage_detected` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type InventoryLevelShortageDetectedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryLevel}. The quantity state of one inventory item at one
     * Location.
     */
    "data"?: {
        /** The quantity state of one inventory item at one Location. */
        "object": InventoryLevel;
    };
    /** Value enum: "inventory_level.shortage_detected". */
    "event_type"?: "inventory_level.shortage_detected";
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
 * The `inventory_level.shortage_detected` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryLevelShortageDetectedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryLevel}. The quantity state of one inventory item at one
     * Location.
     */
    "data"?: {
        /** The quantity state of one inventory item at one Location. */
        "object": InventoryLevel;
    };
    /** Value enum: "inventory_level.shortage_detected". */
    "event_type"?: "inventory_level.shortage_detected";
});
export type InventoryLevelUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryLevel;
    };
    "event_type"?: "inventory_level.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryLevel;
    };
    "event_type"?: "inventory_level.updated";
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
    "event_type": "inventory_level.updated";
});
/**
 * The `inventory_level.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InventoryLevelUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryLevel}. The quantity state of one inventory item at one
     * Location.
     */
    "data"?: {
        /** The quantity state of one inventory item at one Location. */
        "object": InventoryLevel;
    };
    /** Value enum: "inventory_level.updated". */
    "event_type"?: "inventory_level.updated";
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
 * The `inventory_level.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InventoryLevelUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryLevel}. The quantity state of one inventory item at one
     * Location.
     */
    "data"?: {
        /** The quantity state of one inventory item at one Location. */
        "object": InventoryLevel;
    };
    /** Value enum: "inventory_level.updated". */
    "event_type"?: "inventory_level.updated";
});
export type InventoryLevelsGetParams = {
    /**
     * Supported expansions: inventory_item. Include the full inventory item with
     * expand=inventory_item. Requires commerce.inventory.read. Limits: at most 10 unique expand
     * paths per request. Pass expand=inventory_item. [] enum: "inventory_item". Value enum:
     * "inventory_item". anyOf[1] (Value): Array of string. [] enum: "inventory_item". anyOf[1][]
     * (Value): string. Value enum: "inventory_item". anyOf[2] (Value): string. Value enum:
     * "inventory_item".
     */
    "expand"?: InputValue<("inventory_item") | readonly ("inventory_item")[]>;
};
export type InventoryLevelsListParams = {
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
    /** Filter by Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "location_id"?: InputValue<string>;
    /**
     * Filter by the status of the inventory item the level belongs to. Only active items can be
     * routed or reserved. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "active", "inactive",
     * "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value): string. Value
     * enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum: "active",
     * "inactive", "archived".
     */
    "inventory_item_status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /**
     * True selects levels with available quantity; false selects levels with zero available
     * quantity. Omit for all levels.
     */
    "has_available_quantity"?: InputValue<boolean>;
    /**
     * True selects levels with unavailable physical stock; false selects levels with none. Omit
     * for all levels.
     */
    "has_unavailable_condition"?: InputValue<boolean>;
    /** True selects levels with a shortage; false selects levels with none. Omit for all levels. */
    "has_shortage"?: InputValue<boolean>;
    /**
     * Search inventory item ID, name, SKU, or barcode. Case-insensitive substring match.
     * maxLength: 255.
     */
    "query"?: InputValue<string>;
    /** Inclusive lower bound on available_quantity. Format: int64. minimum: 0. */
    "min_available_quantity"?: InputValue<number>;
    /** Inclusive upper bound on available_quantity. Format: int64. minimum: 0. */
    "max_available_quantity"?: InputValue<number>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: inventory_item. The expansion resolves with one batched lookup per
     * page. Expansion requires commerce.inventory.read. Limits: at most 10 unique expand paths per
     * request. Pass expand=inventory_item. [] enum: "inventory_item". Value enum:
     * "inventory_item". anyOf[1] (Value): Array of string. [] enum: "inventory_item". anyOf[1][]
     * (Value): string. Value enum: "inventory_item". anyOf[2] (Value): string. Value enum:
     * "inventory_item".
     */
    "expand"?: InputValue<("inventory_item") | readonly ("inventory_item")[]>;
};
export type InventoryLevelsUpdateParams = (InputValue<UpdateInventoryLevelRequestInput>);
/** An immutable record of a single quantity change, including the level state it produced. */
export type InventoryMovement = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "committed_quantity_delta": number;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * The credential that recorded this movement. null when Flint recorded it on its own, such as
     * an expired hold or a fulfillment handoff. anyOf[1] (Value): {@link ResourceReference}. A
     * reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "damaged_quantity_delta": number;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255.
     */
    "external_actor_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "held_quantity_delta": number;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "incoming_quantity_delta": number;
    /**
     * The inventory item this movement is about. Present only when the list request asked for
     * expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against.
     * Catalog variants reference an inventory item rather than carrying their own counter.
     */
    "inventory_item"?: InventoryItem;
    "inventory_item_id": string;
    /**
     * Claim version of the inventory level after this movement. Advances when held or committed
     * quantities change. Format: int64. minimum: 0.
     */
    "inventory_level_claim_version": number;
    "inventory_level_id": string;
    /**
     * Physical version of the inventory level after this movement. Advances when on-hand or
     * condition quantities change. Format: int64. minimum: 0.
     */
    "inventory_level_physical_version": number;
    /** Version of the inventory level after this movement. Format: int64. minimum: 1. */
    "inventory_level_version": number;
    "inventory_movement_id": string;
    "location_id": string;
    "note"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "on_hand_quantity_delta": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quality_control_quantity_delta": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quarantined_quantity_delta": number;
    /**
     * The adjustment's reason. Present only on adjustment movements; other movement types already
     * describe what happened. Value enum: "received", "returned", "sold", "theft", "loss",
     * "condition_changed", "counted", "correction".
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
    /** The quantity state of one inventory item at one Location. */
    "resulting_inventory_level": InventoryLevel;
    "return_disposition_id"?: string;
    "return_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "safety_stock_quantity_delta": number;
    /** Format: int64. minimum: 0. */
    "source_observation_sequence"?: number;
    /**
     * The GET-able resource whose write recorded this movement. A reference to another resource by
     * `resource_type` and `resource_id`.
     */
    "source_reference": ResourceReference;
    /**
     *  anyOf[1] (Value): {@link InventorySourceSystem}. The system an inventory event came from,
     * such as manual entry, a point of sale, a warehouse system, or Flint, with your source
     * identifier when it applies. anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
    /**
     * Value enum: "adjustment", "count_applied", "reservation_consumed", "reservation_committed",
     * "reservation_commitment_released", "reservation_expired", "reservation_held",
     * "reservation_hold_released", "reservation_reallocated_in", "reservation_reallocated_out",
     * "return_received", "safety_stock_change", "transfer_departed", "transfer_received",
     * "transfer_returned", "transfer_lost".
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
/** A page of `InventoryMovement` objects. */
export type InventoryMovementListResponse = {
    /**
     *  [] (Value): {@link InventoryMovement}. An immutable record of a single quantity change,
     * including the level state it produced.
     */
    "data": Array<InventoryMovement>;
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
/** A response containing `InventoryMovement` data. */
export type InventoryMovementResponse = {
    /** An immutable record of a single quantity change, including the level state it produced. */
    "data": InventoryMovement;
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
export type InventoryMovementsGetParams = InventoryLevelsGetParams;
export type InventoryMovementsListParams = {
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
    /** Filter by Location. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "location_id"?: InputValue<string>;
    /**
     * Filter by movement type. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "adjustment",
     * "count_applied", "reservation_consumed", "reservation_committed",
     * "reservation_commitment_released", "reservation_expired", "reservation_held",
     * "reservation_hold_released", "reservation_reallocated_in", "reservation_reallocated_out",
     * "return_received", "safety_stock_change", "transfer_departed", "transfer_received",
     * "transfer_returned", "transfer_lost". Value enum: "adjustment", "count_applied",
     * "reservation_consumed", "reservation_committed", "reservation_commitment_released",
     * "reservation_expired", "reservation_held", "reservation_hold_released",
     * "reservation_reallocated_in", "reservation_reallocated_out", "return_received",
     * "safety_stock_change", "transfer_departed", "transfer_received", "transfer_returned",
     * "transfer_lost". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "adjustment",
     * "count_applied", "reservation_consumed", "reservation_committed",
     * "reservation_commitment_released", "reservation_expired", "reservation_held",
     * "reservation_hold_released", "reservation_reallocated_in", "reservation_reallocated_out",
     * "return_received", "safety_stock_change", "transfer_departed", "transfer_received",
     * "transfer_returned", "transfer_lost". anyOf[1][] (Value): string. Value enum: "adjustment",
     * "count_applied", "reservation_consumed", "reservation_committed",
     * "reservation_commitment_released", "reservation_expired", "reservation_held",
     * "reservation_hold_released", "reservation_reallocated_in", "reservation_reallocated_out",
     * "return_received", "safety_stock_change", "transfer_departed", "transfer_received",
     * "transfer_returned", "transfer_lost". anyOf[2] (Value): string. Value enum: "adjustment",
     * "count_applied", "reservation_consumed", "reservation_committed",
     * "reservation_commitment_released", "reservation_expired", "reservation_held",
     * "reservation_hold_released", "reservation_reallocated_in", "reservation_reallocated_out",
     * "return_received", "safety_stock_change", "transfer_departed", "transfer_received",
     * "transfer_returned", "transfer_lost".
     */
    "type"?: InputValue<("adjustment"
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
        | "transfer_lost")
        | readonly ("adjustment"
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
        | "transfer_lost")[]>;
    /**
     * Filter adjustment movements by the adjustment reason. Accepts repeated keys, comma-separated
     * values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "received", "returned", "sold", "theft", "loss", "condition_changed",
     * "counted", "correction". Value enum: "received", "returned", "sold", "theft", "loss",
     * "condition_changed", "counted", "correction". anyOf[1] (Value): Array of string. minItems:
     * 1. [] enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted",
     * "correction". anyOf[1][] (Value): string. Value enum: "received", "returned", "sold",
     * "theft", "loss", "condition_changed", "counted", "correction". anyOf[2] (Value): string.
     * Value enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted",
     * "correction".
     */
    "reason"?: InputValue<("received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction")
        | readonly ("received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by the customer Return that produced the movement. Example:
     * "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by the Return disposition that produced the movement. Example:
     * "retdsp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "return_disposition_id"?: InputValue<string>;
    /** Sort direction. Defaults to asc. Default: "asc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Supported expansions: inventory_item. The expansion resolves with one batched lookup per
     * page. Expansion requires commerce.inventory.read. Limits: at most 10 unique expand paths per
     * request. Pass expand=inventory_item. [] enum: "inventory_item". Value enum:
     * "inventory_item". anyOf[1] (Value): Array of string. [] enum: "inventory_item". anyOf[1][]
     * (Value): string. Value enum: "inventory_item". anyOf[2] (Value): string. Value enum:
     * "inventory_item".
     */
    "expand"?: InputValue<("inventory_item") | readonly ("inventory_item")[]>;
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
    /**
     * Filter by source_reference.resource_type. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "fulfillment", "inventory_adjustment", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer". Value enum:
     * "fulfillment", "inventory_adjustment", "inventory_count", "inventory_level",
     * "inventory_receipt", "inventory_reservation", "inventory_transfer". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "fulfillment", "inventory_adjustment", "inventory_count",
     * "inventory_level", "inventory_receipt", "inventory_reservation", "inventory_transfer".
     * anyOf[1][] (Value): string. Value enum: "fulfillment", "inventory_adjustment",
     * "inventory_count", "inventory_level", "inventory_receipt", "inventory_reservation",
     * "inventory_transfer". anyOf[2] (Value): string. Value enum: "fulfillment",
     * "inventory_adjustment", "inventory_count", "inventory_level", "inventory_receipt",
     * "inventory_reservation", "inventory_transfer".
     */
    "source_reference_type"?: InputValue<("fulfillment"
        | "inventory_adjustment"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_transfer")
        | readonly ("fulfillment"
        | "inventory_adjustment"
        | "inventory_count"
        | "inventory_level"
        | "inventory_receipt"
        | "inventory_reservation"
        | "inventory_transfer")[]>;
    /** Filter by source_reference.resource_id. */
    "source_reference_id"?: InputValue<string>;
};
/**
 * How Flint handles inventory failures for one order source: the action after a post-payment
 * inventory failure and for a blocked subscription.
 */
export type InventoryOriginPolicy = {
    /** Value enum: "exception_state", "auto_refund". */
    "post_payment_inventory_failure_action"?: "exception_state" | "auto_refund" | (string & {});
    /**
     * What happens when a subscription renewal cannot get stock. inventory_blocked_open_invoice
     * creates an open invoice with collection_block_status inventory_blocked, external collection,
     * caller-managed delivery, and no due date. past_due moves the subscription to past due. Value
     * enum: "inventory_blocked_open_invoice", "past_due".
     */
    "subscription_inventory_block_action"?: "inventory_blocked_open_invoice" | "past_due" | (string & {});
};
/**
 * How Flint handles inventory failures for one order source: the action after a post-payment
 * inventory failure and for a blocked subscription.
 */
export type InventoryOriginPolicyRequestInput = {
    /** Value enum: "exception_state", "auto_refund". */
    "post_payment_inventory_failure_action"?: "exception_state" | "auto_refund";
    /**
     * What happens when a subscription renewal cannot get stock. inventory_blocked_open_invoice
     * creates an open invoice with collection_block_status inventory_blocked, external collection,
     * caller-managed delivery, and no due date. past_due moves the subscription to past due. Value
     * enum: "inventory_blocked_open_invoice", "past_due".
     */
    "subscription_inventory_block_action"?: "inventory_blocked_open_invoice" | "past_due";
};
/** Where and when an inventory event happened: the source system, external actor, and time. */
export type InventoryProvenanceRequest = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string;
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/** Where and when an inventory event happened: the source system, external actor, and time. */
export type InventoryProvenanceRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1.
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * The source system you report for an inventory event, such as manual, pos, wms, erp, or
     * other, with your identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/**
 * Returned units received into Inventory, from a Return disposition or against the reservation
 * line that consumed them.
 */
export type InventoryReceipt = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    "inventory_receipt_id": string;
    /**
     *  [] (Value): {@link InventoryReceiptLine}. One line of an inventory receipt: a quantity of
     * an item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLine>;
    /** RFC3339 timestamp. Format: date-time. */
    "occurred_at": string;
    "return_disposition_id"?: string;
    "return_id"?: string;
    /**
     *  anyOf[1] (Value): {@link InventorySourceSystem}. The system an inventory event came from,
     * such as manual entry, a point of sale, a warehouse system, or Flint, with your source
     * identifier when it applies. anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
};
export type InventoryReceiptCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReceipt;
    };
    "event_type"?: "inventory_receipt.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": InventoryReceipt;
    };
    "event_type"?: "inventory_receipt.created";
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
    "event_type": "inventory_receipt.created";
});
/**
 * The `inventory_receipt.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type InventoryReceiptCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReceipt}. Returned units received into Inventory, from a
     * Return disposition or against the reservation line that consumed them.
     */
    "data"?: {
        /**
         * Returned units received into Inventory, from a Return disposition or against the
         * reservation line that consumed them.
         */
        "object": InventoryReceipt;
    };
    /** Value enum: "inventory_receipt.created". */
    "event_type"?: "inventory_receipt.created";
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
 * The `inventory_receipt.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryReceiptCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link InventoryReceipt}. Returned units received into Inventory, from a
     * Return disposition or against the reservation line that consumed them.
     */
    "data"?: {
        /**
         * Returned units received into Inventory, from a Return disposition or against the
         * reservation line that consumed them.
         */
        "object": InventoryReceipt;
    };
    /** Value enum: "inventory_receipt.created". */
    "event_type"?: "inventory_receipt.created";
});
/**
 * One line of an inventory receipt: a quantity of an item received at a Location with its
 * disposition.
 */
export type InventoryReceiptLine = {
    /**
     * sellable adds on-hand stock available for sale. quality_control, damaged, and quarantined
     * add on-hand stock to the matching condition bucket. lost records returned units that were
     * lost and changes no stock quantity. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "lost".
     */
    "disposition": "sellable" | "quality_control" | "damaged" | "quarantined" | "lost" | (string & {});
    "inventory_item_id": string;
    "inventory_movement_id"?: string;
    "inventory_receipt_line_id": string;
    "inventory_reservation_id"?: string;
    "inventory_reservation_line_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    "receiving_location_id": string;
    "return_disposition_id"?: string;
    "return_line_item_id"?: string;
};
/**
 * One line of an inventory receipt you supply: a quantity of an item received at a Location with
 * its disposition.
 */
export type InventoryReceiptLineRequest = {
    /**
     * sellable adds on-hand stock available for sale. quality_control, damaged, and quarantined
     * add on-hand stock to the matching condition bucket. lost records returned units that were
     * lost and changes no stock quantity. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "lost".
     */
    "disposition": "sellable" | "quality_control" | "damaged" | "quarantined" | "lost" | (string & {});
    /** minLength: 1. */
    "inventory_item_id": string;
    /** The reservation whose consumed stock is being returned. minLength: 1. */
    "inventory_reservation_id": string;
    /**
     * The consumed reservation line. Received quantity cannot exceed consumed quantity less prior
     * receipts. minLength: 1.
     */
    "inventory_reservation_line_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "receiving_location_id": string;
};
/**
 * One line of an inventory receipt you supply: a quantity of an item received at a Location with
 * its disposition.
 */
export type InventoryReceiptLineRequestInput = {
    /**
     * sellable adds on-hand stock available for sale. quality_control, damaged, and quarantined
     * add on-hand stock to the matching condition bucket. lost records returned units that were
     * lost and changes no stock quantity. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "lost".
     */
    "disposition": "sellable" | "quality_control" | "damaged" | "quarantined" | "lost";
    /** minLength: 1. */
    "inventory_item_id": string;
    /** The reservation whose consumed stock is being returned. minLength: 1. */
    "inventory_reservation_id": string;
    /**
     * The consumed reservation line. Received quantity cannot exceed consumed quantity less prior
     * receipts. minLength: 1.
     */
    "inventory_reservation_line_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "receiving_location_id": string;
};
/** A page of `InventoryReceipt` objects. */
export type InventoryReceiptListResponse = {
    /**
     *  [] (Value): {@link InventoryReceipt}. Returned units received into Inventory, from a Return
     * disposition or against the reservation line that consumed them.
     */
    "data": Array<InventoryReceipt>;
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
/** A response containing `InventoryReceipt` data. */
export type InventoryReceiptResponse = {
    /**
     * Returned units received into Inventory, from a Return disposition or against the reservation
     * line that consumed them.
     */
    "data": InventoryReceipt;
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

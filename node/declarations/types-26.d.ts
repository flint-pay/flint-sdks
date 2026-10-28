import type { InputValue } from '../runtime.js';
import type {
    UpdateInventoryAllocationPolicyRequestInput,
    UpdateInventoryCountRequestInput,
    UpdateInventoryItemRequestInput,
    UpdateInventoryLevelRequestInput
} from './types-51.js';
import type { MetadataMap, MetadataRequestInput } from './types-32.js';
import type { ResponseMeta, ResourceReference } from './types-42.js';
import type { InventoryAllocationConfigurationValue } from './types-25.js';
import type { InventorySourceSystem, InventorySourceSystemRequest, InventorySourceSystemRequestInput } from './types-27.js';
import type { CreateInventoryCountRequestInput, CreateInventoryItemRequestInput } from './types-7.js';
export type InventoryAllocationPoliciesGetInput = {
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_id": InputValue<string>;
};
export type InventoryAllocationPoliciesGetRevisionInput = {
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_revision_id": InputValue<string>;
};
export type InventoryAllocationPoliciesListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "query"?: InputValue<string>;
};
export type InventoryAllocationPoliciesListRevisionsInput = {
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
};
export type InventoryAllocationPoliciesRemoveInput = {
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type InventoryAllocationPoliciesUpdateInput = {
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateInventoryAllocationPolicyRequestInput}. The request body for:
     * Update inventory allocation policy.
     */
    "body": InputValue<UpdateInventoryAllocationPolicyRequestInput>;
};
/**
 * Shape $ (Value): {@link InventoryAllocationPolicy}. Named, version-fenced rules that decide
 * which Locations serve demand and in what order.
 */
export type InventoryAllocationPolicy = {
    /**
     * Shape $ (Value): object. Shape $.location_groups (Required): Array of {@link
     * InventoryAllocationPolicyLocation}. Locations ranked into priority groups. Routing prefers
     * the lowest group priority, then the lowest location ID. minItems: 1. maxItems: 25. Shape
     * $.location_groups[] (Value): {@link InventoryAllocationPolicyLocation}. A Location in an
     * inventory allocation policy and the priority group it belongs to. Shape
     * $.maximum_locations_per_assignment (Required): integer. Upper bound on how many Locations
     * one assignment may use. Defaults to 1 for single_location and 10 for split_when_required.
     * single_location requires 1 when sent. Format: int32. minimum: 1. maximum: 10. Shape
     * $.splitting_behavior (Required): string. single_location fails rather than splitting demand
     * across Locations; split_when_required allows a split when no single Location can serve the
     * whole request. Value enum: "single_location", "split_when_required". Shape
     * $.within_group_order (Required): string. Tie-break inside a priority group. Ascending
     * location ID keeps assignments reproducible. Value enum: "location_id_ascending".
     */
    "configuration": {
        /**
         * Shape $ (Value): Array of {@link InventoryAllocationPolicyLocation}. Locations ranked
         * into priority groups. Routing prefers the lowest group priority, then the lowest
         * location ID. minItems: 1. maxItems: 25. Shape $[] (Value): {@link
         * InventoryAllocationPolicyLocation}. A Location in an inventory allocation policy and the
         * priority group it belongs to.
         */
        "location_groups": Array<InventoryAllocationPolicyLocation>;
        /**
         * Shape $ (Value): integer. Upper bound on how many Locations one assignment may use.
         * Defaults to 1 for single_location and 10 for split_when_required. single_location
         * requires 1 when sent. Format: int32. minimum: 1. maximum: 10.
         */
        "maximum_locations_per_assignment": number;
        /**
         * Shape $ (Value): string. single_location fails rather than splitting demand across
         * Locations; split_when_required allows a split when no single Location can serve the
         * whole request. Value enum: "single_location", "split_when_required".
         */
        "splitting_behavior": "single_location" | "split_when_required" | (string & {});
        /**
         * Shape $ (Value): string. Tie-break inside a priority group. Ascending location ID keeps
         * assignments reproducible. Value enum: "location_id_ascending".
         */
        "within_group_order": "location_id_ascending" | (string & {});
    };
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. The immutable revision containing this policy's current routing
     * configuration. Replacing configuration publishes a new revision; other policy edits keep
     * this ID.
     */
    "current_inventory_allocation_policy_revision_id": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_id": string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata": MetadataMap;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive", "archived". */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link InventoryAllocationPolicyListResponse}. A page of
 * `InventoryAllocationPolicy` objects.
 */
export type InventoryAllocationPolicyListResponse = {
    /**
     * Shape $ (Value): Array of {@link InventoryAllocationPolicy}. Shape $[] (Value): {@link
     * InventoryAllocationPolicy}. Named, version-fenced rules that decide which Locations serve
     * demand and in what order.
     */
    "data": Array<InventoryAllocationPolicy>;
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
 * Shape $ (Value): {@link InventoryAllocationPolicyLocation}. A Location in an inventory
 * allocation policy and the priority group it belongs to.
 */
export type InventoryAllocationPolicyLocation = {
    /** Shape $ (Value): integer. Format: int32. minimum: 1. */
    "group_priority": number;
    /** Shape $ (Value): string. minLength: 1. */
    "location_id": string;
};
/**
 * Shape $ (Value): {@link InventoryAllocationPolicyLocationInput}. A Location in an inventory
 * allocation policy and the priority group it belongs to.
 */
export type InventoryAllocationPolicyLocationInput = InventoryAllocationPolicyLocation;
/**
 * Shape $ (Value): {@link InventoryAllocationPolicyResponse}. A response containing
 * `InventoryAllocationPolicy` data.
 */
export type InventoryAllocationPolicyResponse = {
    /**
     * Shape $ (Value): {@link InventoryAllocationPolicy}. Named, version-fenced rules that decide
     * which Locations serve demand and in what order.
     */
    "data": InventoryAllocationPolicy;
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
 * Shape $ (Value): {@link InventoryAllocationPolicyRevision}. An immutable routing configuration
 * published when an allocation policy is created or its configuration is replaced. Revisions
 * remain readable after later policy edits.
 */
export type InventoryAllocationPolicyRevision = {
    /**
     * Shape $ (Value): {@link InventoryAllocationConfigurationValue}. Routing rules for an
     * inventory allocation policy: ranked groups of Locations, whether demand can be split, and
     * how many Locations one assignment may use.
     */
    "configuration": InventoryAllocationConfigurationValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_id": string;
    /** Shape $ (Value): string. */
    "inventory_allocation_policy_revision_id": string;
};
/**
 * Shape $ (Value): {@link InventoryAllocationPolicyRevisionListResponse}. A page of
 * `InventoryAllocationPolicyRevision` objects.
 */
export type InventoryAllocationPolicyRevisionListResponse = {
    /**
     * Shape $ (Value): Array of {@link InventoryAllocationPolicyRevision}. Shape $[] (Value):
     * {@link InventoryAllocationPolicyRevision}. An immutable routing configuration published when
     * an allocation policy is created or its configuration is replaced. Revisions remain readable
     * after later policy edits.
     */
    "data": Array<InventoryAllocationPolicyRevision>;
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
 * Shape $ (Value): {@link InventoryAllocationPolicyRevisionResponse}. A response containing
 * `InventoryAllocationPolicyRevision` data.
 */
export type InventoryAllocationPolicyRevisionResponse = {
    /**
     * Shape $ (Value): {@link InventoryAllocationPolicyRevision}. An immutable routing
     * configuration published when an allocation policy is created or its configuration is
     * replaced. Revisions remain readable after later policy edits.
     */
    "data": InventoryAllocationPolicyRevision;
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
/** Shape $ (Value): {@link InventoryCount}. A physical count used to reconcile stock. */
export type InventoryCount = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "applied_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /** Shape $ (Value): string. */
    "inventory_count_id": string;
    /**
     * Shape $ (Value): Array of {@link InventoryCountLine}. Shape $[] (Value): {@link
     * InventoryCountLine}. One item's line in an inventory count, with the quantities Flint
     * expected, the quantities counted, and the variance applied.
     */
    "lines": Array<InventoryCountLine>;
    /** Shape $ (Value): string. */
    "location_id": string;
    /**
     * Shape $ (Value): {@link InventoryCountObservationProvenance}. Where an inventory count came
     * from: the source system, an external actor ID, and when the event occurred.
     */
    "observation_provenance"?: InventoryCountObservationProvenance;
    /** Shape $ (Value): string.  Value enum: "draft", "applied", "canceled". */
    "status": "draft" | "applied" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. Actions that can change this count now. A draft can be
     * canceled, and applied once every line has an observation. Empty after the count is applied
     * or canceled. [] enum: "apply", "cancel". Shape $[] (Value): string. Value enum: "apply",
     * "cancel".
     */
    "supported_actions": Array<"apply" | "cancel" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link InventoryCountLine}. One item's line in an inventory count, with the
 * quantities Flint expected, the quantities counted, and the variance applied.
 */
export type InventoryCountLine = {
    /**
     * Shape $ (Value): integer string. Physical version accepted with the latest saved
     * observation. Meaningful once counted_on_hand_quantity is present. Applying the count
     * requires the same physical version. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "captured_physical_version": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "counted_damaged_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "counted_on_hand_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "counted_quality_control_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "counted_quarantined_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. The difference this line applied to the damaged quantity.
     * Present once the count is applied. A draft or canceled count omits it. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "damaged_variance"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. The damaged quantity Flint holds for this item at this
     * location right now. Present while the count is unapplied, on every line whether or not it
     * has been counted. Applying the count sets the level to the counted quantities, and the apply
     * is rejected if the level changed since the line was captured. An applied or canceled count
     * omits it. Whole-number quantity; fractional quantities are not supported. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64.
     */
    "expected_damaged_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. The on-hand quantity Flint holds for this item at this
     * location right now. Present while the count is unapplied, on every line whether or not it
     * has been counted. Applying the count sets the level to the counted quantities, and the apply
     * is rejected if the level changed since the line was captured. An applied or canceled count
     * omits it. Whole-number quantity; fractional quantities are not supported. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64.
     */
    "expected_on_hand_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. The quality-control quantity Flint holds for this item at
     * this location right now. Present while the count is unapplied, on every line whether or not
     * it has been counted. Applying the count sets the level to the counted quantities, and the
     * apply is rejected if the level changed since the line was captured. An applied or canceled
     * count omits it. Whole-number quantity; fractional quantities are not supported. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "expected_quality_control_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. The quarantined quantity Flint holds for this item at this
     * location right now. Present while the count is unapplied, on every line whether or not it
     * has been counted. Applying the count sets the level to the counted quantities, and the apply
     * is rejected if the level changed since the line was captured. An applied or canceled count
     * omits it. Whole-number quantity; fractional quantities are not supported. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64.
     */
    "expected_quarantined_quantity"?: `${bigint}`;
    /** Shape $ (Value): string. */
    "inventory_count_line_id": string;
    /** Shape $ (Value): string. */
    "inventory_item_id": string;
    /** Shape $ (Value): string. */
    "inventory_movement_id"?: string;
    /**
     * Shape $ (Value): integer string. The difference this line applied to the on-hand quantity.
     * Present once the count is applied. A draft or canceled count omits it. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "on_hand_variance"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. The difference this line applied to the quality-control
     * quantity. Present once the count is applied. A draft or canceled count omits it. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "quality_control_variance"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. The difference this line applied to the quarantined
     * quantity. Present once the count is applied. A draft or canceled count omits it. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "quarantined_variance"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "source_observation_sequence"?: `${bigint}`;
};
/** Shape $ (Value): {@link InventoryCountListResponse}. A page of `InventoryCount` objects. */
export type InventoryCountListResponse = {
    /**
     * Shape $ (Value): Array of {@link InventoryCount}. Shape $[] (Value): {@link InventoryCount}.
     * A physical count used to reconcile stock.
     */
    "data": Array<InventoryCount>;
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
 * Shape $ (Value): {@link InventoryCountObservationProvenance}. Where an inventory count came
 * from: the source system, an external actor ID, and when the event occurred.
 */
export type InventoryCountObservationProvenance = ({
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Required
     * when source_system.type is pos, wms, erp, or other. Format: date-time.
     */
    "occurred_at"?: string;
    /**
     * Shape $ (Value): {@link InventorySourceSystem} or null. Shape $.anyOf[1] (Value): {@link
     * InventorySourceSystem}. The system an inventory event came from, such as manual entry, a
     * point of sale, a warehouse system, or Flint, with your source identifier when it applies.
     * Shape $.anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
});
/**
 * Shape $ (Value): {@link InventoryCountObservationRequest}. A counted quantity for one item in an
 * inventory count, with the physical version it was read at.
 */
export type InventoryCountObservationRequest = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. When omitted, keeps the line's expected_damaged_quantity from the same locked
     * physical snapshot whose version was checked; the saved line reports that value as counted.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "counted_damaged_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0.
     */
    "counted_on_hand_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. When omitted, keeps the line's expected_quality_control_quantity from the same
     * locked physical snapshot whose version was checked; the saved line reports that value as
     * counted. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0.
     */
    "counted_quality_control_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. When omitted, keeps the line's expected_quarantined_quantity from the same locked
     * physical snapshot whose version was checked; the saved line reports that value as counted.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "counted_quarantined_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Physical version read before counting this item. Zero is
     * valid for a missing level. Recount after physical stock changes, even when the count is
     * unchanged; never refresh only the token. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "expected_physical_version": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "source_observation_sequence"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link InventoryCountObservationRequestInput}. A counted quantity for one item
 * in an inventory count, with the physical version it was read at.
 */
export type InventoryCountObservationRequestInput = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. When omitted, keeps the line's expected_damaged_quantity from the same locked
     * physical snapshot whose version was checked; the saved line reports that value as counted.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "counted_damaged_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64. minimum: 0.
     */
    "counted_on_hand_quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. When omitted, keeps the line's expected_quality_control_quantity from the same
     * locked physical snapshot whose version was checked; the saved line reports that value as
     * counted. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * minimum: 0.
     */
    "counted_quality_control_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. When omitted, keeps the line's expected_quarantined_quantity from the same locked
     * physical snapshot whose version was checked; the saved line reports that value as counted.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "counted_quarantined_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Physical version read before counting this item. Zero is
     * valid for a missing level. Recount after physical stock changes, even when the count is
     * unchanged; never refresh only the token. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "expected_physical_version": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "source_observation_sequence"?: `${bigint}` | bigint;
};
/** Shape $ (Value): {@link InventoryCountResponse}. A response containing `InventoryCount` data. */
export type InventoryCountResponse = {
    /** Shape $ (Value): {@link InventoryCount}. A physical count used to reconcile stock. */
    "data": InventoryCount;
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
 * Shape $ (Value): {@link InventoryCountResult}. inventory_count is the primary resource and
 * expected_version target. Stock-moving transitions return this result instead of a resource
 * alone.
 */
export type InventoryCountResult = {
    /** Shape $ (Value): {@link InventoryCount}. A physical count used to reconcile stock. */
    "inventory_count": InventoryCount;
    /**
     * Shape $ (Value): Array of {@link InventoryLevel}. Post-commit state of every level this
     * command touched, one entry per level. A replay returns the levels the original command
     * produced. Empty when no levels changed. Shape $[] (Value): {@link InventoryLevel}. The
     * quantity state of one inventory item at one Location.
     */
    "inventory_levels": Array<InventoryLevel>;
};
/**
 * Shape $ (Value): {@link InventoryCountResultResponse}. A response containing
 * `InventoryCountResult` data.
 */
export type InventoryCountResultResponse = {
    /**
     * Shape $ (Value): {@link InventoryCountResult}. inventory_count is the primary resource and
     * expected_version target. Stock-moving transitions return this result instead of a resource
     * alone.
     */
    "data": InventoryCountResult;
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
 * Shape $ (Value): {@link InventoryCountTransitionRequest}. The request body for: Transition
 * inventory count.
 */
export type InventoryCountTransitionRequest = ((InventoryCountTransitionRequestApply)
    | (InventoryCountTransitionRequestCancel)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link InventoryCountTransitionRequestApply}. The `apply` variant of
 * `InventoryCountTransitionRequest`.
 */
export type InventoryCountTransitionRequestApply = {
    /** Shape $ (Value): string.  Value enum: "apply". */
    "action": "apply" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional resource version the caller last read. Enforced
     * when sent. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link InventoryCountTransitionRequestApplyInput}. The `apply` variant of
 * `InventoryCountTransitionRequest`.
 */
export type InventoryCountTransitionRequestApplyInput = {
    /** Shape $ (Value): string.  Value enum: "apply". */
    "action": "apply";
    /**
     * Shape $ (Value): integer string. Optional resource version the caller last read. Enforced
     * when sent. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link InventoryCountTransitionRequestCancel}. The `cancel` variant of
 * `InventoryCountTransitionRequest`.
 */
export type InventoryCountTransitionRequestCancel = {
    /** Shape $ (Value): string.  Value enum: "cancel". */
    "action": "cancel" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional resource version the caller last read. Enforced
     * when sent. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link InventoryCountTransitionRequestCancelInput}. The `cancel` variant of
 * `InventoryCountTransitionRequest`.
 */
export type InventoryCountTransitionRequestCancelInput = {
    /** Shape $ (Value): string.  Value enum: "cancel". */
    "action": "cancel";
    /**
     * Shape $ (Value): integer string. Optional resource version the caller last read. Enforced
     * when sent. Use an integer string (decimal digits), not a floating-point number. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link InventoryCountTransitionRequestInput}. The request body for: Transition
 * inventory count.
 */
export type InventoryCountTransitionRequestInput = ((InventoryCountTransitionRequestApplyInput) | (InventoryCountTransitionRequestCancelInput));
export type InventoryCountsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateInventoryCountRequestInput}. The request body for: Create
     * inventory count.
     */
    "body": InputValue<CreateInventoryCountRequestInput>;
};
export type InventoryCountsGetInput = {
    /** Shape $ (Value): string. */
    "inventory_count_id": InputValue<string>;
};
export type InventoryCountsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "inventory_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "location_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "draft", "applied", "canceled".
     * Shape $[] (Value): string. Value enum: "draft", "applied", "canceled".
     */
    "status"?: InputValue<Array<"draft" | "applied" | "canceled">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "applied_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "applied_before"?: InputValue<string | globalThis.Date>;
};
export type InventoryCountsTransitionInput = {
    /** Shape $ (Value): string. */
    "inventory_count_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link InventoryCountTransitionRequestInput}. The request body for:
     * Transition inventory count.
     */
    "body": InputValue<InventoryCountTransitionRequestInput>;
};
export type InventoryCountsUpdateInput = {
    /** Shape $ (Value): string. */
    "inventory_count_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateInventoryCountRequestInput}. The request body for: Update
     * inventory count.
     */
    "body": InputValue<UpdateInventoryCountRequestInput>;
};
/**
 * Shape $ (Value): {@link InventoryItem}. A stock-keeping unit that inventory quantities are
 * tracked against. Catalog variants reference an inventory item rather than carrying their own
 * counter.
 */
export type InventoryItem = {
    /** Shape $ (Value): string. Optional searchable barcode. */
    "barcode"?: string;
    /** Shape $ (Value): string. Time the inventory item was created. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. Stable inventory item ID. */
    "inventory_item_id": string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata. Caller-owned key-value data
     * stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned.
     * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those
     * limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Shape $ (Value): string. Merchant-facing inventory item name. */
    "name": string;
    /** Shape $ (Value): string. Optional searchable stock-keeping unit. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Current inventory item lifecycle status. Value enum: "active",
     * "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. Time the inventory item last changed. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Optimistic-concurrency version for item writes. Use an
     * integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link InventoryItemCreateRequest}. Inventory item details you supply when
 * creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata.
 */
export type InventoryItemCreateRequest = {
    /**
     * Shape $ (Value): string. Barcode assigned to the new inventory item. minLength: 1.
     * maxLength: 255.
     */
    "barcode"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata for the new inventory item.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): string. Name of the inventory item to create for this variant. minLength:
     * 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to the new inventory item. minLength:
     * 1. maxLength: 255.
     */
    "sku"?: string;
};
/**
 * Shape $ (Value): {@link InventoryItemCreateRequestInput}. Inventory item details you supply when
 * creating an inventory item for a product variant: `name`, `sku`, `barcode`, and metadata.
 */
export type InventoryItemCreateRequestInput = {
    /**
     * Shape $ (Value): string. Barcode assigned to the new inventory item. minLength: 1.
     * maxLength: 255.
     */
    "barcode"?: string;
    /**
     * Shape $ (Value): {@link MetadataRequestInput}. Caller-owned metadata for the new inventory
     * item. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to
     * 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Shape $ (Value): string. Name of the inventory item to create for this variant. minLength:
     * 1. maxLength: 255.
     */
    "name": string;
    /**
     * Shape $ (Value): string. Stock keeping unit assigned to the new inventory item. minLength:
     * 1. maxLength: 255.
     */
    "sku"?: string;
};
/** Shape $ (Value): {@link InventoryItemListResponse}. A page of `InventoryItem` objects. */
export type InventoryItemListResponse = {
    /**
     * Shape $ (Value): Array of {@link InventoryItem}. Shape $[] (Value): {@link InventoryItem}. A
     * stock-keeping unit that inventory quantities are tracked against. Catalog variants reference
     * an inventory item rather than carrying their own counter.
     */
    "data": Array<InventoryItem>;
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
/** Shape $ (Value): {@link InventoryItemResponse}. A response containing `InventoryItem` data. */
export type InventoryItemResponse = {
    /**
     * Shape $ (Value): {@link InventoryItem}. A stock-keeping unit that inventory quantities are
     * tracked against. Catalog variants reference an inventory item rather than carrying their own
     * counter.
     */
    "data": InventoryItem;
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
export type InventoryItemsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateInventoryItemRequestInput}. The request body for: Create
     * inventory item.
     */
    "body": InputValue<CreateInventoryItemRequestInput>;
};
export type InventoryItemsGetInput = {
    /** Shape $ (Value): string. */
    "inventory_item_id": InputValue<string>;
};
export type InventoryItemsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): string. */
    "sku"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "barcode"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "query"?: InputValue<string>;
};
export type InventoryItemsRemoveInput = {
    /** Shape $ (Value): string. */
    "inventory_item_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type InventoryItemsUpdateInput = {
    /** Shape $ (Value): string. */
    "inventory_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateInventoryItemRequestInput}. The request body for: Update
     * inventory item.
     */
    "body": InputValue<UpdateInventoryItemRequestInput>;
};
/**
 * Shape $ (Value): {@link InventoryLevel}. The quantity state of one inventory item at one
 * Location.
 */
export type InventoryLevel = {
    /**
     * Shape $ (Value): integer string. Derived and never written: on_hand minus unavailable, held,
     * committed, and safety stock, never below 0. See shortage_quantity for the excess.
     * Whole-number quantity; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "available_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Advances only when held or committed quantities change. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "claim_version": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Units promised to accepted orders. Still physically present
     * until fulfillment consumes them. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "committed_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): integer string. On-hand units known to be damaged. Not sellable.
     * Whole-number quantity; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "damaged_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Units claimed by an open reservation that has not been
     * committed. Whole-number quantity; fractional quantities are not supported. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64.
     */
    "held_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Units recorded as inbound but not yet on hand. Does not
     * count toward availability. Whole-number quantity; fractional quantities are not supported.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "incoming_quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link InventoryItem}. The inventory item this level belongs to. Present
     * only when the list request asked for expand=inventory_item. A stock-keeping unit that
     * inventory quantities are tracked against. Catalog variants reference an inventory item
     * rather than carrying their own counter.
     */
    "inventory_item"?: InventoryItem;
    /** Shape $ (Value): string. */
    "inventory_item_id": string;
    /** Shape $ (Value): string. */
    "inventory_level_id": string;
    /** Shape $ (Value): string. */
    "location_id": string;
    /**
     * Shape $ (Value): integer string. Units physically present at the Location, in any condition.
     * Whole-number quantity; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "on_hand_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Advances only when on-hand or condition quantities change.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum:
     * 0.
     */
    "physical_version": `${bigint}`;
    /**
     * Shape $ (Value): integer string. On-hand units awaiting inspection. Not sellable.
     * Whole-number quantity; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "quality_control_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. On-hand units isolated for review. Not sellable.
     * Whole-number quantity; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "quarantined_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Buffer withheld from allocation. Change it with PATCH
     * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are
     * not supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "safety_stock_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Derived: claims exceeding sellable physical stock. Positive
     * only after stock is lost, damaged, or corrected down. Whole-number quantity; fractional
     * quantities are not supported. Use an integer string (decimal digits), not a floating-point
     * number. Format: int64.
     */
    "shortage_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Derived: quality_control + damaged + quarantined.
     * Whole-number quantity; fractional quantities are not supported. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "unavailable_on_hand_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Changes on every quantity or claim change at this level,
     * including holds and commits. Read it immediately before a PATCH. A level that a counted
     * adjustment creates without a quantity change starts at version 0. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link InventoryLevelListResponse}. A page of `InventoryLevel` objects. */
export type InventoryLevelListResponse = {
    /**
     * Shape $ (Value): Array of {@link InventoryLevel}. Shape $[] (Value): {@link InventoryLevel}.
     * The quantity state of one inventory item at one Location.
     */
    "data": Array<InventoryLevel>;
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
/** Shape $ (Value): {@link InventoryLevelResponse}. A response containing `InventoryLevel` data. */
export type InventoryLevelResponse = {
    /**
     * Shape $ (Value): {@link InventoryLevel}. The quantity state of one inventory item at one
     * Location.
     */
    "data": InventoryLevel;
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
export type InventoryLevelsGetInput = {
    /**
     * Shape $ (Value): Array of string. [] enum: "inventory_item". Shape $[] (Value): string.
     * Value enum: "inventory_item".
     */
    "expand"?: InputValue<Array<"inventory_item">>;
    /** Shape $ (Value): string. */
    "inventory_level_id": InputValue<string>;
};
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
     * not a floating-point number. Format: int64. minimum: 0.
     */
    "inventory_level_claim_version": `${bigint}`;
    /** Shape $ (Value): string. */
    "inventory_level_id": string;
    /**
     * Shape $ (Value): integer string. Physical version of the inventory level after this
     * movement. Advances when on-hand or condition quantities change. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "inventory_level_physical_version": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Version of the inventory level after this movement. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
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
     * floating-point number. Format: int64. minimum: 0.
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
    "request_id": string;
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
    "request_id": string;
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
 * Shape $ (Value): {@link InventoryOriginPolicyRequestRequestInput}. How Flint handles inventory
 * failures for one order source: the action after a post-payment inventory failure and for a
 * blocked subscription.
 */
export type InventoryOriginPolicyRequestRequestInput = {
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
    "request_id": string;
};

import type { InventoryCount, InventoryAllocationPoliciesDeleteParams, InventoryActionRequired } from './types-28.js';
import type { ResponseMeta, ResourceReference } from './types-54.js';
import type {
    InventorySourceSystem,
    InventorySourceSystemRequest,
    InventorySourceSystemRequestInput,
    InventoryReservationLine,
    InventoryReservationOwner,
    InventoryRoutingSource
} from './types-30.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-38.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { InputValue } from '../runtime.js';
import type { ApplyInventoryCountRequestInput } from './types-0.js';
import type { CancelInventoryCountRequestInput } from './types-4.js';
import type {
    CreateInventoryCountRequestInput,
    CreateInventoryItemRequestInput,
    CreateInventoryReceiptRequestInput
} from './types-10.js';
import type { DisputesAcceptParams } from './types-24.js';
import type {
    UpdateInventoryCountRequestInput,
    UpdateInventoryItemRequestInput,
    UpdateInventoryLevelRequestInput
} from './types-67.js';
import type { BackorderPolicy } from './types-1.js';
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
    /**
     * Unique identifier for this inventory count line, prefixed `invcln_`. Example:
     * "invcln_01KEZF7C00BJK1S36219KK040Q".
     */
    "inventory_count_line_id": string;
    /** ID of the inventory item counted. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
    "inventory_item_id": string;
    /**
     * Movement this line wrote when the count was applied. Absent on a draft or canceled count.
     * Example: "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     */
    "inventory_movement_id"?: string;
    /**
     * The difference this line applied to the on-hand quantity. Present once the count is applied.
     * A draft or canceled count omits it. Format: int64.
     */
    "on_hand_variance"?: number;
    /**
     * Live physical version of the level, read alongside expected quantities on draft lines.
     * Evidence of current stock, not a fence captured at count creation. `null` when the count is
     * applied or canceled. Format: uint64. minimum: 0. maximum: 9007199254740991.
     */
    "physical_version": number | null;
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
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryCount}. A physical count used to reconcile stock.
     */
    "data": Array<InventoryCount>;
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
 * Where an inventory count came from: the source system, an external actor ID, and when the event
 * occurred.
 */
export type InventoryCountObservationProvenance = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * System the change came from, such as a point-of-sale or warehouse system. `null` when the
     * request named no source system. anyOf[1] (Value): {@link InventorySourceSystem}. The system
     * an inventory event came from, such as manual entry, a point of sale, a warehouse system, or
     * Flint, with your source identifier when it applies. anyOf[2] (Value): null.
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
    /**
     * ID of the inventory item counted. minLength: 1. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
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
    /**
     * Resource, collection, or operation result returned by this request. A physical count used to
     * reconcile stock.
     */
    "data": InventoryCount;
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
 * inventory_count is the primary resource and expected_version target. Stock-moving actions return
 * this result instead of a resource alone.
 */
export type InventoryCountResult = {
    /** The inventory count. A physical count used to reconcile stock. */
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
     * Resource, collection, or operation result returned by this request. inventory_count is the
     * primary resource and expected_version target. Stock-moving actions return this result
     * instead of a resource alone.
     */
    "data": InventoryCountResult;
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
export type InventoryCountUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "applied_at"?: string;
            "created_at": string;
            "idempotency_key"?: string;
            "inventory_count_id": string;
            "lines": Array<InventoryCountLine>;
            "location_id": string;
            "observation_provenance"?: InventoryCountObservationProvenance;
            "status": "draft" | "applied" | "canceled" | (string & {});
            "supported_actions": Array<"apply" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryCount>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_count.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "applied_at"?: string;
            "created_at": string;
            "idempotency_key"?: string;
            "inventory_count_id": string;
            "lines": Array<InventoryCountLine>;
            "location_id": string;
            "observation_provenance"?: InventoryCountObservationProvenance;
            "status": "draft" | "applied" | "canceled" | (string & {});
            "supported_actions": Array<"apply" | "cancel" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryCount>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_count.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_count.updated";
});
/**
 * The `inventory_count.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type InventoryCountUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.applied_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_count_id (Required): string. Unique identifier for this inventory count,
     * prefixed `invc_`. Example: "invc_01KEZF7C00B47NXRE3ET37QQ59". object.lines (Required): Array
     * of {@link InventoryCountLine}. Count lines, one for each inventory item being counted.
     * object.lines[] (Value): {@link InventoryCountLine}. One item's line in an inventory count,
     * with the quantities Flint expected, the quantities counted, and the variance applied.
     * object.location_id (Required): string. ID of the Location whose stock is counted. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.observation_provenance (Optional): {@link
     * InventoryCountObservationProvenance}. Source system, actor, and time reported with the
     * count's observations. Where an inventory count came from: the source system, an external
     * actor ID, and when the event occurred. object.status (Required): string. Value enum:
     * "draft", "applied", "canceled". object.supported_actions (Required): Array of string.
     * Actions that can change this count now. A draft can be canceled, and applied once every line
     * has an observation. Empty after the count is applied or canceled. [] enum: "apply",
     * "cancel". object.supported_actions[] (Value): string. Value enum: "apply", "cancel".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * applied_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_count_id (Required):
         * string. Unique identifier for this inventory count, prefixed `invc_`. Example:
         * "invc_01KEZF7C00B47NXRE3ET37QQ59". lines (Required): Array of {@link
         * InventoryCountLine}. Count lines, one for each inventory item being counted. lines[]
         * (Value): {@link InventoryCountLine}. One item's line in an inventory count, with the
         * quantities Flint expected, the quantities counted, and the variance applied. location_id
         * (Required): string. ID of the Location whose stock is counted. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". observation_provenance (Optional): {@link
         * InventoryCountObservationProvenance}. Source system, actor, and time reported with the
         * count's observations. Where an inventory count came from: the source system, an external
         * actor ID, and when the event occurred. status (Required): string. Value enum: "draft",
         * "applied", "canceled". supported_actions (Required): Array of string. Actions that can
         * change this count now. A draft can be canceled, and applied once every line has an
         * observation. Empty after the count is applied or canceled. [] enum: "apply", "cancel".
         * supported_actions[] (Value): string. Value enum: "apply", "cancel". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "applied_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory count, prefixed `invc_`. Example:
             * "invc_01KEZF7C00B47NXRE3ET37QQ59".
             */
            "inventory_count_id": string;
            /**
             * Count lines, one for each inventory item being counted. [] (Value): {@link
             * InventoryCountLine}. One item's line in an inventory count, with the quantities
             * Flint expected, the quantities counted, and the variance applied.
             */
            "lines": Array<InventoryCountLine>;
            /**
             * ID of the Location whose stock is counted. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Source system, actor, and time reported with the count's observations. Where an
             * inventory count came from: the source system, an external actor ID, and when the
             * event occurred.
             */
            "observation_provenance"?: InventoryCountObservationProvenance;
            /** Value enum: "draft", "applied", "canceled". */
            "status": "draft" | "applied" | "canceled" | (string & {});
            /**
             * Actions that can change this count now. A draft can be canceled, and applied once
             * every line has an observation. Empty after the count is applied or canceled. []
             * enum: "apply", "cancel". [] (Value): string. Value enum: "apply", "cancel".
             */
            "supported_actions": Array<"apply" | "cancel" | (string & {})>;
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
        "previous_attributes"?: Partial<InventoryCount>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_count.updated". */
    "event_type"?: "inventory_count.updated";
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
 * The `inventory_count.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InventoryCountUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.applied_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.idempotency_key
     * (Optional): string. The Idempotency-Key of the request that created this resource; on a
     * movement, of the command that wrote it. Omitted when that request had no key.
     * object.inventory_count_id (Required): string. Unique identifier for this inventory count,
     * prefixed `invc_`. Example: "invc_01KEZF7C00B47NXRE3ET37QQ59". object.lines (Required): Array
     * of {@link InventoryCountLine}. Count lines, one for each inventory item being counted.
     * object.lines[] (Value): {@link InventoryCountLine}. One item's line in an inventory count,
     * with the quantities Flint expected, the quantities counted, and the variance applied.
     * object.location_id (Required): string. ID of the Location whose stock is counted. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". object.observation_provenance (Optional): {@link
     * InventoryCountObservationProvenance}. Source system, actor, and time reported with the
     * count's observations. Where an inventory count came from: the source system, an external
     * actor ID, and when the event occurred. object.status (Required): string. Value enum:
     * "draft", "applied", "canceled". object.supported_actions (Required): Array of string.
     * Actions that can change this count now. A draft can be canceled, and applied once every line
     * has an observation. Empty after the count is applied or canceled. [] enum: "apply",
     * "cancel". object.supported_actions[] (Value): string. Value enum: "apply", "cancel".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: uint64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * applied_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". idempotency_key (Optional): string. The
         * Idempotency-Key of the request that created this resource; on a movement, of the command
         * that wrote it. Omitted when that request had no key. inventory_count_id (Required):
         * string. Unique identifier for this inventory count, prefixed `invc_`. Example:
         * "invc_01KEZF7C00B47NXRE3ET37QQ59". lines (Required): Array of {@link
         * InventoryCountLine}. Count lines, one for each inventory item being counted. lines[]
         * (Value): {@link InventoryCountLine}. One item's line in an inventory count, with the
         * quantities Flint expected, the quantities counted, and the variance applied. location_id
         * (Required): string. ID of the Location whose stock is counted. Example:
         * "loc_01KEZF7C00CMHRRYA3MV996JB2". observation_provenance (Optional): {@link
         * InventoryCountObservationProvenance}. Source system, actor, and time reported with the
         * count's observations. Where an inventory count came from: the source system, an external
         * actor ID, and when the event occurred. status (Required): string. Value enum: "draft",
         * "applied", "canceled". supported_actions (Required): Array of string. Actions that can
         * change this count now. A draft can be canceled, and applied once every line has an
         * observation. Empty after the count is applied or canceled. [] enum: "apply", "cancel".
         * supported_actions[] (Value): string. Value enum: "apply", "cancel". updated_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: uint64. minimum: 1.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "applied_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory count, prefixed `invc_`. Example:
             * "invc_01KEZF7C00B47NXRE3ET37QQ59".
             */
            "inventory_count_id": string;
            /**
             * Count lines, one for each inventory item being counted. [] (Value): {@link
             * InventoryCountLine}. One item's line in an inventory count, with the quantities
             * Flint expected, the quantities counted, and the variance applied.
             */
            "lines": Array<InventoryCountLine>;
            /**
             * ID of the Location whose stock is counted. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Source system, actor, and time reported with the count's observations. Where an
             * inventory count came from: the source system, an external actor ID, and when the
             * event occurred.
             */
            "observation_provenance"?: InventoryCountObservationProvenance;
            /** Value enum: "draft", "applied", "canceled". */
            "status": "draft" | "applied" | "canceled" | (string & {});
            /**
             * Actions that can change this count now. A draft can be canceled, and applied once
             * every line has an observation. Empty after the count is applied or canceled. []
             * enum: "apply", "cancel". [] (Value): string. Value enum: "apply", "cancel".
             */
            "supported_actions": Array<"apply" | "cancel" | (string & {})>;
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
        "previous_attributes"?: Partial<InventoryCount>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_count.updated". */
    "event_type"?: "inventory_count.updated";
});
export type InventoryCountsApplyParams = (InputValue<ApplyInventoryCountRequestInput> | {
    "expected_version"?: never;
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
export type InventoryCountsCancelParams = (InputValue<CancelInventoryCountRequestInput> | {
    "expected_version"?: never;
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
export type InventoryCountsCreateParams = (InputValue<CreateInventoryCountRequestInput>)
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
export type InventoryCountsGetParams = DisputesAcceptParams;
export type InventoryCountsListParams = {
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
     * Filter by a counted inventory item. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Filter by Location. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
    /**
     * Filter by count status. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "draft", "applied", "canceled". Value enum: "draft", "applied", "canceled".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "draft", "applied", "canceled".
     * anyOf[1][] (Value): string. Value enum: "draft", "applied", "canceled". anyOf[2] (Value):
     * string. Value enum: "draft", "applied", "canceled".
     */
    "status"?: InputValue<("draft" | "applied" | "canceled") | readonly ("draft" | "applied" | "canceled")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
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
export type InventoryCountsUpdateParams = (InputValue<UpdateInventoryCountRequestInput>)
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
 * A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference
 * an inventory item rather than carrying their own counter.
 */
export type InventoryItem = {
    /**
     * Backorder settings shared by every variant using this inventory item. Backorder settings
     * shared by every variant using an inventory item.
     */
    "backorder": BackorderPolicy;
    /** Optional searchable barcode. */
    "barcode"?: string;
    /** Time the inventory item was created. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /** Stable inventory item ID. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
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
    /** Time the inventory item last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryItem}. A stock-keeping unit that inventory quantities are tracked against. Catalog
     * variants reference an inventory item rather than carrying their own counter.
     */
    "data": Array<InventoryItem>;
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
/** A response containing `InventoryItem` data. */
export type InventoryItemResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A stock-keeping unit
     * that inventory quantities are tracked against. Catalog variants reference an inventory item
     * rather than carrying their own counter.
     */
    "data": InventoryItem;
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
export type InventoryItemsCreateParams = (InputValue<CreateInventoryItemRequestInput>)
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
export type InventoryItemsDeleteParams = InventoryAllocationPoliciesDeleteParams;
export type InventoryItemsGetParams = DisputesAcceptParams;
export type InventoryItemsListParams = {
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
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value):
     * string. Value enum: "active", "inactive", "archived". anyOf[2] (Value): string. Value enum:
     * "active", "inactive", "archived".
     */
    "status"?: InputValue<("active" | "inactive" | "archived") | readonly ("active" | "inactive" | "archived")[]>;
    /** Filter by exact SKU. */
    "sku"?: InputValue<string>;
    /** Filter by exact barcode. */
    "barcode"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /** Search inventory item ID, external reference ID, name, SKU, or barcode. maxLength: 255. */
    "query"?: InputValue<string>;
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
export type InventoryItemsUpdateParams = (InputValue<UpdateInventoryItemRequestInput>)
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
/** The quantity state of one inventory item at one Location. */
export type InventoryLevel = {
    /**
     * Derived and never written: on_hand minus unavailable, held, committed, and safety stock,
     * never below 0. See shortage_quantity for the excess. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "available_quantity": number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "backordered_quantity": number;
    /** Advances only when held or committed quantities change. Format: int64. minimum: 0. */
    "claim_version": number;
    /**
     * Units promised to accepted orders. Still physically present until fulfillment consumes them.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     */
    "committed_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
    /** ID of the inventory item the stock is for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
    "inventory_item_id": string;
    /**
     * Unique identifier for this inventory level, prefixed `invl_`. Example:
     * "invl_01KEZF7C00H201XZXKRX5KMDDE".
     */
    "inventory_level_id": string;
    /** ID of the Location that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryLevel}. The quantity state of one inventory item at one Location.
     */
    "data": Array<InventoryLevel>;
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
/** A response containing `InventoryLevel` data. */
export type InventoryLevelResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The quantity state of
     * one inventory item at one Location.
     */
    "data": InventoryLevel;
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
export type InventoryLevelShortageDetectedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "backordered_quantity": number;
            "claim_version": number;
            "committed_quantity": number;
            "created_at": string;
            "damaged_quantity": number;
            "held_quantity": number;
            "incoming_quantity": number;
            "inventory_item"?: InventoryItem;
            "inventory_item_id": string;
            "inventory_level_id": string;
            "location_id": string;
            "on_hand_quantity": number;
            "physical_version": number;
            "quality_control_quantity": number;
            "quarantined_quantity": number;
            "safety_stock_quantity": number;
            "shortage_quantity": number;
            "unavailable_on_hand_quantity": number;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryLevel>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_level.shortage_detected";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "backordered_quantity": number;
            "claim_version": number;
            "committed_quantity": number;
            "created_at": string;
            "damaged_quantity": number;
            "held_quantity": number;
            "incoming_quantity": number;
            "inventory_item"?: InventoryItem;
            "inventory_item_id": string;
            "inventory_level_id": string;
            "location_id": string;
            "on_hand_quantity": number;
            "physical_version": number;
            "quality_control_quantity": number;
            "quarantined_quantity": number;
            "safety_stock_quantity": number;
            "shortage_quantity": number;
            "unavailable_on_hand_quantity": number;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryLevel>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_level.shortage_detected";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Derived and never written:
     * on_hand minus unavailable, held, committed, and safety stock, never below 0. See
     * shortage_quantity for the excess. Whole-number quantity; fractional quantities are not
     * supported. Format: int64. object.backordered_quantity (Required): integer. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * object.claim_version (Required): integer. Advances only when held or committed quantities
     * change. Format: int64. minimum: 0. object.committed_quantity (Required): integer. Units
     * promised to accepted orders. Still physically present until fulfillment consumes them.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.damaged_quantity (Required): integer. On-hand units known to
     * be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. object.held_quantity (Required): integer. Units claimed by an open
     * reservation that has not been committed. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. object.incoming_quantity (Required): integer. Units recorded
     * as inbound but not yet on hand. Does not count toward availability. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. object.inventory_item (Optional):
     * {@link InventoryItem}. The inventory item this level belongs to. Present only when the list
     * request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are
     * tracked against. Catalog variants reference an inventory item rather than carrying their own
     * counter. object.inventory_item_id (Required): string. ID of the inventory item the stock is
     * for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". object.inventory_level_id (Required):
     * string. Unique identifier for this inventory level, prefixed `invl_`. Example:
     * "invl_01KEZF7C00H201XZXKRX5KMDDE". object.location_id (Required): string. ID of the Location
     * that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.on_hand_quantity
     * (Required): integer. Units physically present at the Location, in any condition.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.physical_version (Required): integer. Advances only when on-hand or condition
     * quantities change. Format: int64. minimum: 0. object.quality_control_quantity (Required):
     * integer. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. object.quarantined_quantity (Required):
     * integer. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. object.safety_stock_quantity (Required):
     * integer. Buffer withheld from allocation. Change it with PATCH
     * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. object.shortage_quantity (Required): integer. Derived: claims
     * exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected
     * down. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.unavailable_on_hand_quantity (Required): integer. Derived: quality_control + damaged
     * + quarantined. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Changes on every quantity or
     * claim change at this level, including holds and commits. Read it immediately before a PATCH.
     * A level that a counted adjustment creates without a quantity change starts at version 0.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Derived and never written: on_hand minus
         * unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for
         * the excess. Whole-number quantity; fractional quantities are not supported. Format:
         * int64. backordered_quantity (Required): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0. claim_version (Required):
         * integer. Advances only when held or committed quantities change. Format: int64. minimum:
         * 0. committed_quantity (Required): integer. Units promised to accepted orders. Still
         * physically present until fulfillment consumes them. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". damaged_quantity
         * (Required): integer. On-hand units known to be damaged. Not sellable. Whole-number
         * quantity; fractional quantities are not supported. Format: int64. held_quantity
         * (Required): integer. Units claimed by an open reservation that has not been committed.
         * Whole-number quantity; fractional quantities are not supported. Format: int64.
         * incoming_quantity (Required): integer. Units recorded as inbound but not yet on hand.
         * Does not count toward availability. Whole-number quantity; fractional quantities are not
         * supported. Format: int64. inventory_item (Optional): {@link InventoryItem}. The
         * inventory item this level belongs to. Present only when the list request asked for
         * expand=inventory_item. A stock-keeping unit that inventory quantities are tracked
         * against. Catalog variants reference an inventory item rather than carrying their own
         * counter. inventory_item_id (Required): string. ID of the inventory item the stock is
         * for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". inventory_level_id (Required): string.
         * Unique identifier for this inventory level, prefixed `invl_`. Example:
         * "invl_01KEZF7C00H201XZXKRX5KMDDE". location_id (Required): string. ID of the Location
         * that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". on_hand_quantity
         * (Required): integer. Units physically present at the Location, in any condition.
         * Whole-number quantity; fractional quantities are not supported. Format: int64.
         * physical_version (Required): integer. Advances only when on-hand or condition quantities
         * change. Format: int64. minimum: 0. quality_control_quantity (Required): integer. On-hand
         * units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. quarantined_quantity (Required): integer. On-hand
         * units isolated for review. Not sellable. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. safety_stock_quantity (Required): integer. Buffer
         * withheld from allocation. Change it with PATCH
         * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. shortage_quantity (Required): integer. Derived: claims
         * exceeding sellable physical stock. Positive only after stock is lost, damaged, or
         * corrected down. Whole-number quantity; fractional quantities are not supported. Format:
         * int64. unavailable_on_hand_quantity (Required): integer. Derived: quality_control +
         * damaged + quarantined. Whole-number quantity; fractional quantities are not supported.
         * Format: int64. updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Changes on every quantity
         * or claim change at this level, including holds and commits. Read it immediately before a
         * PATCH. A level that a counted adjustment creates without a quantity change starts at
         * version 0. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Derived and never written: on_hand minus unavailable, held, committed, and safety
             * stock, never below 0. See shortage_quantity for the excess. Whole-number quantity;
             * fractional quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /**
             * Whole-number quantity; fractional quantities are not supported. Format: int64.
             * minimum: 0.
             */
            "backordered_quantity": number;
            /**
             * Advances only when held or committed quantities change. Format: int64. minimum: 0.
             */
            "claim_version": number;
            /**
             * Units promised to accepted orders. Still physically present until fulfillment
             * consumes them. Whole-number quantity; fractional quantities are not supported.
             * Format: int64.
             */
            "committed_quantity": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "damaged_quantity": number;
            /**
             * Units claimed by an open reservation that has not been committed. Whole-number
             * quantity; fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Units recorded as inbound but not yet on hand. Does not count toward availability.
             * Whole-number quantity; fractional quantities are not supported. Format: int64.
             */
            "incoming_quantity": number;
            /**
             * The inventory item this level belongs to. Present only when the list request asked
             * for expand=inventory_item. A stock-keeping unit that inventory quantities are
             * tracked against. Catalog variants reference an inventory item rather than carrying
             * their own counter.
             */
            "inventory_item"?: InventoryItem;
            /**
             * ID of the inventory item the stock is for. Example:
             * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
             */
            "inventory_item_id": string;
            /**
             * Unique identifier for this inventory level, prefixed `invl_`. Example:
             * "invl_01KEZF7C00H201XZXKRX5KMDDE".
             */
            "inventory_level_id": string;
            /**
             * ID of the Location that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Units physically present at the Location, in any condition. Whole-number quantity;
             * fractional quantities are not supported. Format: int64.
             */
            "on_hand_quantity": number;
            /**
             * Advances only when on-hand or condition quantities change. Format: int64. minimum:
             * 0.
             */
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
             * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "safety_stock_quantity": number;
            /**
             * Derived: claims exceeding sellable physical stock. Positive only after stock is
             * lost, damaged, or corrected down. Whole-number quantity; fractional quantities are
             * not supported. Format: int64.
             */
            "shortage_quantity": number;
            /**
             * Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "unavailable_on_hand_quantity": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Changes on every quantity or claim change at this level, including holds and
             * commits. Read it immediately before a PATCH. A level that a counted adjustment
             * creates without a quantity change starts at version 0. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryLevel>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_level.shortage_detected". */
    "event_type"?: "inventory_level.shortage_detected";
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
 * The `inventory_level.shortage_detected` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type InventoryLevelShortageDetectedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Derived and never written:
     * on_hand minus unavailable, held, committed, and safety stock, never below 0. See
     * shortage_quantity for the excess. Whole-number quantity; fractional quantities are not
     * supported. Format: int64. object.backordered_quantity (Required): integer. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * object.claim_version (Required): integer. Advances only when held or committed quantities
     * change. Format: int64. minimum: 0. object.committed_quantity (Required): integer. Units
     * promised to accepted orders. Still physically present until fulfillment consumes them.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.damaged_quantity (Required): integer. On-hand units known to
     * be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. object.held_quantity (Required): integer. Units claimed by an open
     * reservation that has not been committed. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. object.incoming_quantity (Required): integer. Units recorded
     * as inbound but not yet on hand. Does not count toward availability. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. object.inventory_item (Optional):
     * {@link InventoryItem}. The inventory item this level belongs to. Present only when the list
     * request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are
     * tracked against. Catalog variants reference an inventory item rather than carrying their own
     * counter. object.inventory_item_id (Required): string. ID of the inventory item the stock is
     * for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". object.inventory_level_id (Required):
     * string. Unique identifier for this inventory level, prefixed `invl_`. Example:
     * "invl_01KEZF7C00H201XZXKRX5KMDDE". object.location_id (Required): string. ID of the Location
     * that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.on_hand_quantity
     * (Required): integer. Units physically present at the Location, in any condition.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.physical_version (Required): integer. Advances only when on-hand or condition
     * quantities change. Format: int64. minimum: 0. object.quality_control_quantity (Required):
     * integer. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. object.quarantined_quantity (Required):
     * integer. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. object.safety_stock_quantity (Required):
     * integer. Buffer withheld from allocation. Change it with PATCH
     * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. object.shortage_quantity (Required): integer. Derived: claims
     * exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected
     * down. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.unavailable_on_hand_quantity (Required): integer. Derived: quality_control + damaged
     * + quarantined. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Changes on every quantity or
     * claim change at this level, including holds and commits. Read it immediately before a PATCH.
     * A level that a counted adjustment creates without a quantity change starts at version 0.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Derived and never written: on_hand minus
         * unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for
         * the excess. Whole-number quantity; fractional quantities are not supported. Format:
         * int64. backordered_quantity (Required): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0. claim_version (Required):
         * integer. Advances only when held or committed quantities change. Format: int64. minimum:
         * 0. committed_quantity (Required): integer. Units promised to accepted orders. Still
         * physically present until fulfillment consumes them. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". damaged_quantity
         * (Required): integer. On-hand units known to be damaged. Not sellable. Whole-number
         * quantity; fractional quantities are not supported. Format: int64. held_quantity
         * (Required): integer. Units claimed by an open reservation that has not been committed.
         * Whole-number quantity; fractional quantities are not supported. Format: int64.
         * incoming_quantity (Required): integer. Units recorded as inbound but not yet on hand.
         * Does not count toward availability. Whole-number quantity; fractional quantities are not
         * supported. Format: int64. inventory_item (Optional): {@link InventoryItem}. The
         * inventory item this level belongs to. Present only when the list request asked for
         * expand=inventory_item. A stock-keeping unit that inventory quantities are tracked
         * against. Catalog variants reference an inventory item rather than carrying their own
         * counter. inventory_item_id (Required): string. ID of the inventory item the stock is
         * for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". inventory_level_id (Required): string.
         * Unique identifier for this inventory level, prefixed `invl_`. Example:
         * "invl_01KEZF7C00H201XZXKRX5KMDDE". location_id (Required): string. ID of the Location
         * that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". on_hand_quantity
         * (Required): integer. Units physically present at the Location, in any condition.
         * Whole-number quantity; fractional quantities are not supported. Format: int64.
         * physical_version (Required): integer. Advances only when on-hand or condition quantities
         * change. Format: int64. minimum: 0. quality_control_quantity (Required): integer. On-hand
         * units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. quarantined_quantity (Required): integer. On-hand
         * units isolated for review. Not sellable. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. safety_stock_quantity (Required): integer. Buffer
         * withheld from allocation. Change it with PATCH
         * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. shortage_quantity (Required): integer. Derived: claims
         * exceeding sellable physical stock. Positive only after stock is lost, damaged, or
         * corrected down. Whole-number quantity; fractional quantities are not supported. Format:
         * int64. unavailable_on_hand_quantity (Required): integer. Derived: quality_control +
         * damaged + quarantined. Whole-number quantity; fractional quantities are not supported.
         * Format: int64. updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Changes on every quantity
         * or claim change at this level, including holds and commits. Read it immediately before a
         * PATCH. A level that a counted adjustment creates without a quantity change starts at
         * version 0. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Derived and never written: on_hand minus unavailable, held, committed, and safety
             * stock, never below 0. See shortage_quantity for the excess. Whole-number quantity;
             * fractional quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /**
             * Whole-number quantity; fractional quantities are not supported. Format: int64.
             * minimum: 0.
             */
            "backordered_quantity": number;
            /**
             * Advances only when held or committed quantities change. Format: int64. minimum: 0.
             */
            "claim_version": number;
            /**
             * Units promised to accepted orders. Still physically present until fulfillment
             * consumes them. Whole-number quantity; fractional quantities are not supported.
             * Format: int64.
             */
            "committed_quantity": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "damaged_quantity": number;
            /**
             * Units claimed by an open reservation that has not been committed. Whole-number
             * quantity; fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Units recorded as inbound but not yet on hand. Does not count toward availability.
             * Whole-number quantity; fractional quantities are not supported. Format: int64.
             */
            "incoming_quantity": number;
            /**
             * The inventory item this level belongs to. Present only when the list request asked
             * for expand=inventory_item. A stock-keeping unit that inventory quantities are
             * tracked against. Catalog variants reference an inventory item rather than carrying
             * their own counter.
             */
            "inventory_item"?: InventoryItem;
            /**
             * ID of the inventory item the stock is for. Example:
             * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
             */
            "inventory_item_id": string;
            /**
             * Unique identifier for this inventory level, prefixed `invl_`. Example:
             * "invl_01KEZF7C00H201XZXKRX5KMDDE".
             */
            "inventory_level_id": string;
            /**
             * ID of the Location that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Units physically present at the Location, in any condition. Whole-number quantity;
             * fractional quantities are not supported. Format: int64.
             */
            "on_hand_quantity": number;
            /**
             * Advances only when on-hand or condition quantities change. Format: int64. minimum:
             * 0.
             */
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
             * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "safety_stock_quantity": number;
            /**
             * Derived: claims exceeding sellable physical stock. Positive only after stock is
             * lost, damaged, or corrected down. Whole-number quantity; fractional quantities are
             * not supported. Format: int64.
             */
            "shortage_quantity": number;
            /**
             * Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "unavailable_on_hand_quantity": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Changes on every quantity or claim change at this level, including holds and
             * commits. Read it immediately before a PATCH. A level that a counted adjustment
             * creates without a quantity change starts at version 0. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryLevel>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_level.shortage_detected". */
    "event_type"?: "inventory_level.shortage_detected";
});
export type InventoryLevelUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "backordered_quantity": number;
            "claim_version": number;
            "committed_quantity": number;
            "created_at": string;
            "damaged_quantity": number;
            "held_quantity": number;
            "incoming_quantity": number;
            "inventory_item"?: InventoryItem;
            "inventory_item_id": string;
            "inventory_level_id": string;
            "location_id": string;
            "on_hand_quantity": number;
            "physical_version": number;
            "quality_control_quantity": number;
            "quarantined_quantity": number;
            "safety_stock_quantity": number;
            "shortage_quantity": number;
            "unavailable_on_hand_quantity": number;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryLevel>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_level.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "available_quantity": number;
            "backordered_quantity": number;
            "claim_version": number;
            "committed_quantity": number;
            "created_at": string;
            "damaged_quantity": number;
            "held_quantity": number;
            "incoming_quantity": number;
            "inventory_item"?: InventoryItem;
            "inventory_item_id": string;
            "inventory_level_id": string;
            "location_id": string;
            "on_hand_quantity": number;
            "physical_version": number;
            "quality_control_quantity": number;
            "quarantined_quantity": number;
            "safety_stock_quantity": number;
            "shortage_quantity": number;
            "unavailable_on_hand_quantity": number;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<InventoryLevel>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_level.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Derived and never written:
     * on_hand minus unavailable, held, committed, and safety stock, never below 0. See
     * shortage_quantity for the excess. Whole-number quantity; fractional quantities are not
     * supported. Format: int64. object.backordered_quantity (Required): integer. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * object.claim_version (Required): integer. Advances only when held or committed quantities
     * change. Format: int64. minimum: 0. object.committed_quantity (Required): integer. Units
     * promised to accepted orders. Still physically present until fulfillment consumes them.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.damaged_quantity (Required): integer. On-hand units known to
     * be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. object.held_quantity (Required): integer. Units claimed by an open
     * reservation that has not been committed. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. object.incoming_quantity (Required): integer. Units recorded
     * as inbound but not yet on hand. Does not count toward availability. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. object.inventory_item (Optional):
     * {@link InventoryItem}. The inventory item this level belongs to. Present only when the list
     * request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are
     * tracked against. Catalog variants reference an inventory item rather than carrying their own
     * counter. object.inventory_item_id (Required): string. ID of the inventory item the stock is
     * for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". object.inventory_level_id (Required):
     * string. Unique identifier for this inventory level, prefixed `invl_`. Example:
     * "invl_01KEZF7C00H201XZXKRX5KMDDE". object.location_id (Required): string. ID of the Location
     * that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.on_hand_quantity
     * (Required): integer. Units physically present at the Location, in any condition.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.physical_version (Required): integer. Advances only when on-hand or condition
     * quantities change. Format: int64. minimum: 0. object.quality_control_quantity (Required):
     * integer. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. object.quarantined_quantity (Required):
     * integer. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. object.safety_stock_quantity (Required):
     * integer. Buffer withheld from allocation. Change it with PATCH
     * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. object.shortage_quantity (Required): integer. Derived: claims
     * exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected
     * down. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.unavailable_on_hand_quantity (Required): integer. Derived: quality_control + damaged
     * + quarantined. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Changes on every quantity or
     * claim change at this level, including holds and commits. Read it immediately before a PATCH.
     * A level that a counted adjustment creates without a quantity change starts at version 0.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Derived and never written: on_hand minus
         * unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for
         * the excess. Whole-number quantity; fractional quantities are not supported. Format:
         * int64. backordered_quantity (Required): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0. claim_version (Required):
         * integer. Advances only when held or committed quantities change. Format: int64. minimum:
         * 0. committed_quantity (Required): integer. Units promised to accepted orders. Still
         * physically present until fulfillment consumes them. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". damaged_quantity
         * (Required): integer. On-hand units known to be damaged. Not sellable. Whole-number
         * quantity; fractional quantities are not supported. Format: int64. held_quantity
         * (Required): integer. Units claimed by an open reservation that has not been committed.
         * Whole-number quantity; fractional quantities are not supported. Format: int64.
         * incoming_quantity (Required): integer. Units recorded as inbound but not yet on hand.
         * Does not count toward availability. Whole-number quantity; fractional quantities are not
         * supported. Format: int64. inventory_item (Optional): {@link InventoryItem}. The
         * inventory item this level belongs to. Present only when the list request asked for
         * expand=inventory_item. A stock-keeping unit that inventory quantities are tracked
         * against. Catalog variants reference an inventory item rather than carrying their own
         * counter. inventory_item_id (Required): string. ID of the inventory item the stock is
         * for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". inventory_level_id (Required): string.
         * Unique identifier for this inventory level, prefixed `invl_`. Example:
         * "invl_01KEZF7C00H201XZXKRX5KMDDE". location_id (Required): string. ID of the Location
         * that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". on_hand_quantity
         * (Required): integer. Units physically present at the Location, in any condition.
         * Whole-number quantity; fractional quantities are not supported. Format: int64.
         * physical_version (Required): integer. Advances only when on-hand or condition quantities
         * change. Format: int64. minimum: 0. quality_control_quantity (Required): integer. On-hand
         * units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. quarantined_quantity (Required): integer. On-hand
         * units isolated for review. Not sellable. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. safety_stock_quantity (Required): integer. Buffer
         * withheld from allocation. Change it with PATCH
         * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. shortage_quantity (Required): integer. Derived: claims
         * exceeding sellable physical stock. Positive only after stock is lost, damaged, or
         * corrected down. Whole-number quantity; fractional quantities are not supported. Format:
         * int64. unavailable_on_hand_quantity (Required): integer. Derived: quality_control +
         * damaged + quarantined. Whole-number quantity; fractional quantities are not supported.
         * Format: int64. updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Changes on every quantity
         * or claim change at this level, including holds and commits. Read it immediately before a
         * PATCH. A level that a counted adjustment creates without a quantity change starts at
         * version 0. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Derived and never written: on_hand minus unavailable, held, committed, and safety
             * stock, never below 0. See shortage_quantity for the excess. Whole-number quantity;
             * fractional quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /**
             * Whole-number quantity; fractional quantities are not supported. Format: int64.
             * minimum: 0.
             */
            "backordered_quantity": number;
            /**
             * Advances only when held or committed quantities change. Format: int64. minimum: 0.
             */
            "claim_version": number;
            /**
             * Units promised to accepted orders. Still physically present until fulfillment
             * consumes them. Whole-number quantity; fractional quantities are not supported.
             * Format: int64.
             */
            "committed_quantity": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "damaged_quantity": number;
            /**
             * Units claimed by an open reservation that has not been committed. Whole-number
             * quantity; fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Units recorded as inbound but not yet on hand. Does not count toward availability.
             * Whole-number quantity; fractional quantities are not supported. Format: int64.
             */
            "incoming_quantity": number;
            /**
             * The inventory item this level belongs to. Present only when the list request asked
             * for expand=inventory_item. A stock-keeping unit that inventory quantities are
             * tracked against. Catalog variants reference an inventory item rather than carrying
             * their own counter.
             */
            "inventory_item"?: InventoryItem;
            /**
             * ID of the inventory item the stock is for. Example:
             * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
             */
            "inventory_item_id": string;
            /**
             * Unique identifier for this inventory level, prefixed `invl_`. Example:
             * "invl_01KEZF7C00H201XZXKRX5KMDDE".
             */
            "inventory_level_id": string;
            /**
             * ID of the Location that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Units physically present at the Location, in any condition. Whole-number quantity;
             * fractional quantities are not supported. Format: int64.
             */
            "on_hand_quantity": number;
            /**
             * Advances only when on-hand or condition quantities change. Format: int64. minimum:
             * 0.
             */
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
             * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "safety_stock_quantity": number;
            /**
             * Derived: claims exceeding sellable physical stock. Positive only after stock is
             * lost, damaged, or corrected down. Whole-number quantity; fractional quantities are
             * not supported. Format: int64.
             */
            "shortage_quantity": number;
            /**
             * Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "unavailable_on_hand_quantity": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Changes on every quantity or claim change at this level, including holds and
             * commits. Read it immediately before a PATCH. A level that a counted adjustment
             * creates without a quantity change starts at version 0. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryLevel>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_level.updated". */
    "event_type"?: "inventory_level.updated";
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
 * The `inventory_level.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type InventoryLevelUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.available_quantity (Required): integer. Derived and never written:
     * on_hand minus unavailable, held, committed, and safety stock, never below 0. See
     * shortage_quantity for the excess. Whole-number quantity; fractional quantities are not
     * supported. Format: int64. object.backordered_quantity (Required): integer. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * object.claim_version (Required): integer. Advances only when held or committed quantities
     * change. Format: int64. minimum: 0. object.committed_quantity (Required): integer. Units
     * promised to accepted orders. Still physically present until fulfillment consumes them.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.damaged_quantity (Required): integer. On-hand units known to
     * be damaged. Not sellable. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. object.held_quantity (Required): integer. Units claimed by an open
     * reservation that has not been committed. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. object.incoming_quantity (Required): integer. Units recorded
     * as inbound but not yet on hand. Does not count toward availability. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. object.inventory_item (Optional):
     * {@link InventoryItem}. The inventory item this level belongs to. Present only when the list
     * request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are
     * tracked against. Catalog variants reference an inventory item rather than carrying their own
     * counter. object.inventory_item_id (Required): string. ID of the inventory item the stock is
     * for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". object.inventory_level_id (Required):
     * string. Unique identifier for this inventory level, prefixed `invl_`. Example:
     * "invl_01KEZF7C00H201XZXKRX5KMDDE". object.location_id (Required): string. ID of the Location
     * that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.on_hand_quantity
     * (Required): integer. Units physically present at the Location, in any condition.
     * Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.physical_version (Required): integer. Advances only when on-hand or condition
     * quantities change. Format: int64. minimum: 0. object.quality_control_quantity (Required):
     * integer. On-hand units awaiting inspection. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. object.quarantined_quantity (Required):
     * integer. On-hand units isolated for review. Not sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. object.safety_stock_quantity (Required):
     * integer. Buffer withheld from allocation. Change it with PATCH
     * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. object.shortage_quantity (Required): integer. Derived: claims
     * exceeding sellable physical stock. Positive only after stock is lost, damaged, or corrected
     * down. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * object.unavailable_on_hand_quantity (Required): integer. Derived: quality_control + damaged
     * + quarantined. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Changes on every quantity or
     * claim change at this level, including holds and commits. Read it immediately before a PATCH.
     * A level that a counted adjustment creates without a quantity change starts at version 0.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * available_quantity (Required): integer. Derived and never written: on_hand minus
         * unavailable, held, committed, and safety stock, never below 0. See shortage_quantity for
         * the excess. Whole-number quantity; fractional quantities are not supported. Format:
         * int64. backordered_quantity (Required): integer. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0. claim_version (Required):
         * integer. Advances only when held or committed quantities change. Format: int64. minimum:
         * 0. committed_quantity (Required): integer. Units promised to accepted orders. Still
         * physically present until fulfillment consumes them. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". damaged_quantity
         * (Required): integer. On-hand units known to be damaged. Not sellable. Whole-number
         * quantity; fractional quantities are not supported. Format: int64. held_quantity
         * (Required): integer. Units claimed by an open reservation that has not been committed.
         * Whole-number quantity; fractional quantities are not supported. Format: int64.
         * incoming_quantity (Required): integer. Units recorded as inbound but not yet on hand.
         * Does not count toward availability. Whole-number quantity; fractional quantities are not
         * supported. Format: int64. inventory_item (Optional): {@link InventoryItem}. The
         * inventory item this level belongs to. Present only when the list request asked for
         * expand=inventory_item. A stock-keeping unit that inventory quantities are tracked
         * against. Catalog variants reference an inventory item rather than carrying their own
         * counter. inventory_item_id (Required): string. ID of the inventory item the stock is
         * for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". inventory_level_id (Required): string.
         * Unique identifier for this inventory level, prefixed `invl_`. Example:
         * "invl_01KEZF7C00H201XZXKRX5KMDDE". location_id (Required): string. ID of the Location
         * that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". on_hand_quantity
         * (Required): integer. Units physically present at the Location, in any condition.
         * Whole-number quantity; fractional quantities are not supported. Format: int64.
         * physical_version (Required): integer. Advances only when on-hand or condition quantities
         * change. Format: int64. minimum: 0. quality_control_quantity (Required): integer. On-hand
         * units awaiting inspection. Not sellable. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. quarantined_quantity (Required): integer. On-hand
         * units isolated for review. Not sellable. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. safety_stock_quantity (Required): integer. Buffer
         * withheld from allocation. Change it with PATCH
         * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional quantities
         * are not supported. Format: int64. shortage_quantity (Required): integer. Derived: claims
         * exceeding sellable physical stock. Positive only after stock is lost, damaged, or
         * corrected down. Whole-number quantity; fractional quantities are not supported. Format:
         * int64. unavailable_on_hand_quantity (Required): integer. Derived: quality_control +
         * damaged + quarantined. Whole-number quantity; fractional quantities are not supported.
         * Format: int64. updated_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". version (Required): integer. Changes on every quantity
         * or claim change at this level, including holds and commits. Read it immediately before a
         * PATCH. A level that a counted adjustment creates without a quantity change starts at
         * version 0. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Derived and never written: on_hand minus unavailable, held, committed, and safety
             * stock, never below 0. See shortage_quantity for the excess. Whole-number quantity;
             * fractional quantities are not supported. Format: int64.
             */
            "available_quantity": number;
            /**
             * Whole-number quantity; fractional quantities are not supported. Format: int64.
             * minimum: 0.
             */
            "backordered_quantity": number;
            /**
             * Advances only when held or committed quantities change. Format: int64. minimum: 0.
             */
            "claim_version": number;
            /**
             * Units promised to accepted orders. Still physically present until fulfillment
             * consumes them. Whole-number quantity; fractional quantities are not supported.
             * Format: int64.
             */
            "committed_quantity": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * On-hand units known to be damaged. Not sellable. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "damaged_quantity": number;
            /**
             * Units claimed by an open reservation that has not been committed. Whole-number
             * quantity; fractional quantities are not supported. Format: int64.
             */
            "held_quantity": number;
            /**
             * Units recorded as inbound but not yet on hand. Does not count toward availability.
             * Whole-number quantity; fractional quantities are not supported. Format: int64.
             */
            "incoming_quantity": number;
            /**
             * The inventory item this level belongs to. Present only when the list request asked
             * for expand=inventory_item. A stock-keeping unit that inventory quantities are
             * tracked against. Catalog variants reference an inventory item rather than carrying
             * their own counter.
             */
            "inventory_item"?: InventoryItem;
            /**
             * ID of the inventory item the stock is for. Example:
             * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
             */
            "inventory_item_id": string;
            /**
             * Unique identifier for this inventory level, prefixed `invl_`. Example:
             * "invl_01KEZF7C00H201XZXKRX5KMDDE".
             */
            "inventory_level_id": string;
            /**
             * ID of the Location that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "location_id": string;
            /**
             * Units physically present at the Location, in any condition. Whole-number quantity;
             * fractional quantities are not supported. Format: int64.
             */
            "on_hand_quantity": number;
            /**
             * Advances only when on-hand or condition quantities change. Format: int64. minimum:
             * 0.
             */
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
             * /v1/inventory-levels/{inventory_level_id}. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "safety_stock_quantity": number;
            /**
             * Derived: claims exceeding sellable physical stock. Positive only after stock is
             * lost, damaged, or corrected down. Whole-number quantity; fractional quantities are
             * not supported. Format: int64.
             */
            "shortage_quantity": number;
            /**
             * Derived: quality_control + damaged + quarantined. Whole-number quantity; fractional
             * quantities are not supported. Format: int64.
             */
            "unavailable_on_hand_quantity": number;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Changes on every quantity or claim change at this level, including holds and
             * commits. Read it immediately before a PATCH. A level that a counted adjustment
             * creates without a quantity change starts at version 0. Format: int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<InventoryLevel>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "inventory_level.updated". */
    "event_type"?: "inventory_level.updated";
});
export type InventoryLevelsGetParams = {
    /**
     * Include related objects in the response. Supported expansions: inventory_item. Include the
     * full inventory item with expand=inventory_item. Requires commerce.inventory.read. Limits: at
     * most 10 unique expand paths per request. [] enum: "inventory_item". Value enum:
     * "inventory_item". anyOf[1] (Value): Array of string. [] enum: "inventory_item". anyOf[1][]
     * (Value): string. Value enum: "inventory_item". anyOf[2] (Value): string. Value enum:
     * "inventory_item".
     */
    "expand"?: InputValue<("inventory_item") | readonly ("inventory_item")[]>;
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
export type InventoryLevelsListParams = {
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
     * Filter by inventory item. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Filter by Location. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
    /**
     * Filter by the status of the inventory item the level belongs to. Only active items can be
     * routed or reserved. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "active", "inactive", "archived". Value enum: "active", "inactive",
     * "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "inactive",
     * "archived". anyOf[1][] (Value): string. Value enum: "active", "inactive", "archived".
     * anyOf[2] (Value): string. Value enum: "active", "inactive", "archived".
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
     * Include related objects in the response. Supported expansions: inventory_item. The expansion
     * resolves with one batched lookup per page. Expansion requires commerce.inventory.read.
     * Limits: at most 10 unique expand paths per request. [] enum: "inventory_item". Value enum:
     * "inventory_item". anyOf[1] (Value): Array of string. [] enum: "inventory_item". anyOf[1][]
     * (Value): string. Value enum: "inventory_item". anyOf[2] (Value): string. Value enum:
     * "inventory_item".
     */
    "expand"?: InputValue<("inventory_item") | readonly ("inventory_item")[]>;
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
export type InventoryLevelsUpdateParams = (InputValue<UpdateInventoryLevelRequestInput>)
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
/** An immutable record of a single quantity change, including the level state it produced. */
export type InventoryMovement = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "backordered_quantity_delta": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "committed_quantity_delta": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The credential that recorded this movement. `null` when Flint recorded it on its own, such
     * as an expired hold or a fulfillment handoff. anyOf[1] (Value): {@link ResourceReference}. A
     * reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     */
    "created_by": ((ResourceReference) | (null));
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "damaged_quantity_delta": number;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842".
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
    /** ID of the inventory item the stock is for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
    "inventory_item_id": string;
    /**
     * Claim version of the inventory level after this movement. Advances when held or committed
     * quantities change. Format: int64. minimum: 0.
     */
    "inventory_level_claim_version": number;
    /**
     * ID of the inventory level this movement changed. Example: "invl_01KEZF7C00H201XZXKRX5KMDDE".
     */
    "inventory_level_id": string;
    /**
     * Physical version of the inventory level after this movement. Advances when on-hand or
     * condition quantities change. Format: int64. minimum: 0.
     */
    "inventory_level_physical_version": number;
    /** Version of the inventory level after this movement. Format: int64. minimum: 1. */
    "inventory_level_version": number;
    /**
     * Unique identifier for this inventory movement, prefixed `invm_`. Example:
     * "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     */
    "inventory_movement_id": string;
    /** ID of the Location that holds the stock. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** Note recorded with the command that wrote this movement. Absent when it had none. */
    "note"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
    /**
     * The inventory level as it stood after this movement. The quantity state of one inventory
     * item at one Location.
     */
    "resulting_inventory_level": InventoryLevel;
    /**
     * ID of the Return disposition whose receipt wrote this movement. Absent on other movements.
     * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "return_disposition_id"?: string;
    /**
     * ID of the Return whose receipt wrote this movement. Absent on other movements. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
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
     * System the change came from, such as a point-of-sale or warehouse system. `null` when the
     * request named no source system. anyOf[1] (Value): {@link InventorySourceSystem}. The system
     * an inventory event came from, such as manual entry, a point of sale, a warehouse system, or
     * Flint, with your source identifier when it applies. anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
    /**
     * What caused this movement. Value enum: "adjustment", "count_applied",
     * "reservation_consumed", "reservation_committed", "reservation_commitment_released",
     * "reservation_expired", "reservation_held", "reservation_hold_released",
     * "reservation_reallocated_in", "reservation_reallocated_out", "return_received",
     * "safety_stock_change", "transfer_departed", "transfer_received", "transfer_returned",
     * "transfer_lost".
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
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryMovement}. An immutable record of a single quantity change, including the level
     * state it produced.
     */
    "data": Array<InventoryMovement>;
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
/** A response containing `InventoryMovement` data. */
export type InventoryMovementResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An immutable record of a
     * single quantity change, including the level state it produced.
     */
    "data": InventoryMovement;
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
export type InventoryMovementsGetParams = InventoryLevelsGetParams;
export type InventoryMovementsListParams = {
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
     * Filter by inventory item. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Filter by Location. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id"?: InputValue<string>;
    /**
     * Filter by movement type. Values are trimmed and deduplicated in first-seen order; empty or
     * unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "adjustment", "count_applied", "reservation_consumed",
     * "reservation_committed", "reservation_commitment_released", "reservation_expired",
     * "reservation_held", "reservation_hold_released", "reservation_reallocated_in",
     * "reservation_reallocated_out", "return_received", "safety_stock_change",
     * "transfer_departed", "transfer_received", "transfer_returned", "transfer_lost". Value enum:
     * "adjustment", "count_applied", "reservation_consumed", "reservation_committed",
     * "reservation_commitment_released", "reservation_expired", "reservation_held",
     * "reservation_hold_released", "reservation_reallocated_in", "reservation_reallocated_out",
     * "return_received", "safety_stock_change", "transfer_departed", "transfer_received",
     * "transfer_returned", "transfer_lost". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "adjustment", "count_applied", "reservation_consumed", "reservation_committed",
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
     * Filter adjustment movements by the adjustment reason. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "received", "returned", "sold", "theft", "loss",
     * "condition_changed", "counted", "correction". Value enum: "received", "returned", "sold",
     * "theft", "loss", "condition_changed", "counted", "correction". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "received", "returned", "sold", "theft", "loss",
     * "condition_changed", "counted", "correction". anyOf[1][] (Value): string. Value enum:
     * "received", "returned", "sold", "theft", "loss", "condition_changed", "counted",
     * "correction". anyOf[2] (Value): string. Value enum: "received", "returned", "sold", "theft",
     * "loss", "condition_changed", "counted", "correction".
     */
    "reason"?: InputValue<("received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction")
        | readonly ("received" | "returned" | "sold" | "theft" | "loss" | "condition_changed" | "counted" | "correction")[]>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by the customer Return that produced the movement. pattern:
     * ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by the Return disposition that produced the movement. pattern:
     * ^retdsp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "return_disposition_id"?: InputValue<string>;
    /** Sort direction. Defaults to asc. Default: "asc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /**
     * Include related objects in the response. Supported expansions: inventory_item. The expansion
     * resolves with one batched lookup per page. Expansion requires commerce.inventory.read.
     * Limits: at most 10 unique expand paths per request. [] enum: "inventory_item". Value enum:
     * "inventory_item". anyOf[1] (Value): Array of string. [] enum: "inventory_item". anyOf[1][]
     * (Value): string. Value enum: "inventory_item". anyOf[2] (Value): string. Value enum:
     * "inventory_item".
     */
    "expand"?: InputValue<("inventory_item") | readonly ("inventory_item")[]>;
    /**
     * Filter by source-system type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "manual", "pos", "wms", "erp", "flint", "other". Value enum: "manual",
     * "pos", "wms", "erp", "flint", "other". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "manual", "pos", "wms", "erp", "flint", "other". anyOf[1][] (Value): string. Value
     * enum: "manual", "pos", "wms", "erp", "flint", "other". anyOf[2] (Value): string. Value enum:
     * "manual", "pos", "wms", "erp", "flint", "other".
     */
    "source_system_type"?: InputValue<("manual" | "pos" | "wms" | "erp" | "flint" | "other")
        | readonly ("manual" | "pos" | "wms" | "erp" | "flint" | "other")[]>;
    /** Filter by external source ID. Example: "warehouse-1842". */
    "external_source_id"?: InputValue<string>;
    /** Filter by external actor ID. Example: "warehouse-1842". */
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
     * Filter by source_reference.resource_type. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "fulfillment", "inventory_adjustment", "inventory_count",
     * "inventory_level", "inventory_receipt", "inventory_reservation", "inventory_transfer". Value
     * enum: "fulfillment", "inventory_adjustment", "inventory_count", "inventory_level",
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
    /**
     * Filter by source_reference.resource_id. pattern:
     * ^(ful|invadj|invc|invl|invr|invrea|invrec|invtr)_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "invadj_01KEZF7C00HFCAS32T4NVHX75M".
     */
    "source_reference_id"?: InputValue<string>;
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
 * How Flint handles inventory failures for one order source: the action after a post-payment
 * inventory failure and for a blocked subscription.
 */
export type InventoryOriginPolicy = {
    /**
     * What Flint does when it can't deduct stock for an order after the order is paid. Value enum:
     * "exception_state", "auto_refund".
     */
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
    /**
     * What Flint does when it can't deduct stock for an order after the order is paid. Value enum:
     * "exception_state", "auto_refund".
     */
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
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string;
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequest;
});
/** Where and when an inventory event happened: the source system, external actor, and time. */
export type InventoryProvenanceRequestInput = ({
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Required when source_system.type
     * is pos, wms, erp, or other. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "occurred_at"?: string | globalThis.Date;
    /**
     * System the change came from, such as a point-of-sale or warehouse system. The source system
     * you report for an inventory event, such as manual, pos, wms, erp, or other, with your
     * identifier when it applies.
     */
    "source_system"?: InventorySourceSystemRequestInput;
});
/**
 * Returned units received into Inventory, from a Return disposition or against the reservation
 * line that consumed them. For supplier deliveries, use POST /v1/inventory-adjustments with
 * reason: received.
 */
export type InventoryReceipt = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * The Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key.
     */
    "idempotency_key"?: string;
    /**
     * Unique identifier for this inventory receipt, prefixed `invrec_`. Example:
     * "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
     */
    "inventory_receipt_id": string;
    /**
     * Received lines, each with the item, receiving Location, quantity, and disposition. []
     * (Value): {@link InventoryReceiptLine}. One line of an inventory receipt: a quantity of an
     * item received at a Location with its disposition.
     */
    "lines": Array<InventoryReceiptLine>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * ID of the Return disposition this receipt records. Absent when the receipt isn't linked to a
     * Return. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "return_disposition_id"?: string;
    /**
     * ID of the Return these units came back on. Absent when the receipt isn't linked to a Return.
     * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * System the change came from, such as a point-of-sale or warehouse system. `null` when the
     * request named no source system. anyOf[1] (Value): {@link InventorySourceSystem}. The system
     * an inventory event came from, such as manual entry, a point of sale, a warehouse system, or
     * Flint, with your source identifier when it applies. anyOf[2] (Value): null.
     */
    "source_system": ((InventorySourceSystem) | (null));
};
export type InventoryReceiptCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "external_actor_id"?: string;
            "idempotency_key"?: string;
            "inventory_receipt_id": string;
            "lines": Array<InventoryReceiptLine>;
            "occurred_at": string;
            "return_disposition_id"?: string;
            "return_id"?: string;
            "source_system": ((InventorySourceSystem) | (null));
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "inventory_receipt.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "created_at": string;
            "external_actor_id"?: string;
            "idempotency_key"?: string;
            "inventory_receipt_id": string;
            "lines": Array<InventoryReceiptLine>;
            "occurred_at": string;
            "return_disposition_id"?: string;
            "return_id"?: string;
            "source_system": ((InventorySourceSystem) | (null));
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "inventory_receipt.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.external_actor_id (Optional): string.
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842". object.idempotency_key (Optional): string. The
     * Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key. object.inventory_receipt_id (Required):
     * string. Unique identifier for this inventory receipt, prefixed `invrec_`. Example:
     * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". object.lines (Required): Array of {@link
     * InventoryReceiptLine}. Received lines, each with the item, receiving Location, quantity, and
     * disposition. object.lines[] (Value): {@link InventoryReceiptLine}. One line of an inventory
     * receipt: a quantity of an item received at a Location with its disposition.
     * object.occurred_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.return_disposition_id (Optional): string. ID of the Return
     * disposition this receipt records. Absent when the receipt isn't linked to a Return. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_id (Optional): string. ID of the Return
     * these units came back on. Absent when the receipt isn't linked to a Return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.source_system (Required): {@link
     * InventorySourceSystem} or null. System the change came from, such as a point-of-sale or
     * warehouse system. `null` when the request named no source system.
     * object.source_system.anyOf[1] (Value): {@link InventorySourceSystem}. The system an
     * inventory event came from, such as manual entry, a point of sale, a warehouse system, or
     * Flint, with your source identifier when it applies. object.source_system.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_actor_id (Optional): string. Your identifier for the
         * actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example:
         * "warehouse-1842". idempotency_key (Optional): string. The Idempotency-Key of the request
         * that created this resource; on a movement, of the command that wrote it. Omitted when
         * that request had no key. inventory_receipt_id (Required): string. Unique identifier for
         * this inventory receipt, prefixed `invrec_`. Example:
         * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". lines (Required): Array of {@link
         * InventoryReceiptLine}. Received lines, each with the item, receiving Location, quantity,
         * and disposition. lines[] (Value): {@link InventoryReceiptLine}. One line of an inventory
         * receipt: a quantity of an item received at a Location with its disposition. occurred_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". return_disposition_id (Optional): string. ID of the Return
         * disposition this receipt records. Absent when the receipt isn't linked to a Return.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_id (Optional): string. ID of the
         * Return these units came back on. Absent when the receipt isn't linked to a Return.
         * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". source_system (Required): {@link
         * InventorySourceSystem} or null. System the change came from, such as a point-of-sale or
         * warehouse system. `null` when the request named no source system. source_system.anyOf[1]
         * (Value): {@link InventorySourceSystem}. The system an inventory event came from, such as
         * manual entry, a point of sale, a warehouse system, or Flint, with your source identifier
         * when it applies. source_system.anyOf[2] (Value): null.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory receipt, prefixed `invrec_`. Example:
             * "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
             */
            "inventory_receipt_id": string;
            /**
             * Received lines, each with the item, receiving Location, quantity, and disposition.
             * [] (Value): {@link InventoryReceiptLine}. One line of an inventory receipt: a
             * quantity of an item received at a Location with its disposition.
             */
            "lines": Array<InventoryReceiptLine>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at": string;
            /**
             * ID of the Return disposition this receipt records. Absent when the receipt isn't
             * linked to a Return. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_id"?: string;
            /**
             * ID of the Return these units came back on. Absent when the receipt isn't linked to a
             * Return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * System the change came from, such as a point-of-sale or warehouse system. `null`
             * when the request named no source system. anyOf[1] (Value): {@link
             * InventorySourceSystem}. The system an inventory event came from, such as manual
             * entry, a point of sale, a warehouse system, or Flint, with your source identifier
             * when it applies. anyOf[2] (Value): null.
             */
            "source_system": ((InventorySourceSystem) | (null));
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "inventory_receipt.created". */
    "event_type"?: "inventory_receipt.created";
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
 * The `inventory_receipt.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type InventoryReceiptCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.external_actor_id (Optional): string.
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842". object.idempotency_key (Optional): string. The
     * Idempotency-Key of the request that created this resource; on a movement, of the command
     * that wrote it. Omitted when that request had no key. object.inventory_receipt_id (Required):
     * string. Unique identifier for this inventory receipt, prefixed `invrec_`. Example:
     * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". object.lines (Required): Array of {@link
     * InventoryReceiptLine}. Received lines, each with the item, receiving Location, quantity, and
     * disposition. object.lines[] (Value): {@link InventoryReceiptLine}. One line of an inventory
     * receipt: a quantity of an item received at a Location with its disposition.
     * object.occurred_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.return_disposition_id (Optional): string. ID of the Return
     * disposition this receipt records. Absent when the receipt isn't linked to a Return. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_id (Optional): string. ID of the Return
     * these units came back on. Absent when the receipt isn't linked to a Return. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.source_system (Required): {@link
     * InventorySourceSystem} or null. System the change came from, such as a point-of-sale or
     * warehouse system. `null` when the request named no source system.
     * object.source_system.anyOf[1] (Value): {@link InventorySourceSystem}. The system an
     * inventory event came from, such as manual entry, a point of sale, a warehouse system, or
     * Flint, with your source identifier when it applies. object.source_system.anyOf[2] (Value):
     * null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_actor_id (Optional): string. Your identifier for the
         * actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example:
         * "warehouse-1842". idempotency_key (Optional): string. The Idempotency-Key of the request
         * that created this resource; on a movement, of the command that wrote it. Omitted when
         * that request had no key. inventory_receipt_id (Required): string. Unique identifier for
         * this inventory receipt, prefixed `invrec_`. Example:
         * "invrec_01KEZF7C00JXXCYA06SH8RCM2N". lines (Required): Array of {@link
         * InventoryReceiptLine}. Received lines, each with the item, receiving Location, quantity,
         * and disposition. lines[] (Value): {@link InventoryReceiptLine}. One line of an inventory
         * receipt: a quantity of an item received at a Location with its disposition. occurred_at
         * (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". return_disposition_id (Optional): string. ID of the Return
         * disposition this receipt records. Absent when the receipt isn't linked to a Return.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_id (Optional): string. ID of the
         * Return these units came back on. Absent when the receipt isn't linked to a Return.
         * Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". source_system (Required): {@link
         * InventorySourceSystem} or null. System the change came from, such as a point-of-sale or
         * warehouse system. `null` when the request named no source system. source_system.anyOf[1]
         * (Value): {@link InventorySourceSystem}. The system an inventory event came from, such as
         * manual entry, a point of sale, a warehouse system, or Flint, with your source identifier
         * when it applies. source_system.anyOf[2] (Value): null.
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * The Idempotency-Key of the request that created this resource; on a movement, of the
             * command that wrote it. Omitted when that request had no key.
             */
            "idempotency_key"?: string;
            /**
             * Unique identifier for this inventory receipt, prefixed `invrec_`. Example:
             * "invrec_01KEZF7C00JXXCYA06SH8RCM2N".
             */
            "inventory_receipt_id": string;
            /**
             * Received lines, each with the item, receiving Location, quantity, and disposition.
             * [] (Value): {@link InventoryReceiptLine}. One line of an inventory receipt: a
             * quantity of an item received at a Location with its disposition.
             */
            "lines": Array<InventoryReceiptLine>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "occurred_at": string;
            /**
             * ID of the Return disposition this receipt records. Absent when the receipt isn't
             * linked to a Return. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_id"?: string;
            /**
             * ID of the Return these units came back on. Absent when the receipt isn't linked to a
             * Return. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id"?: string;
            /**
             * System the change came from, such as a point-of-sale or warehouse system. `null`
             * when the request named no source system. anyOf[1] (Value): {@link
             * InventorySourceSystem}. The system an inventory event came from, such as manual
             * entry, a point of sale, a warehouse system, or Flint, with your source identifier
             * when it applies. anyOf[2] (Value): null.
             */
            "source_system": ((InventorySourceSystem) | (null));
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
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
    /** ID of the inventory item the stock is for. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". */
    "inventory_item_id": string;
    /**
     * Movement this line wrote. Absent when the line wrote none. Example:
     * "invm_01KEZF7C00DYPFT9PS0NZY805Z".
     */
    "inventory_movement_id"?: string;
    /**
     * Unique identifier for this inventory receipt line, prefixed `invrecln_`. Example:
     * "invrecln_01KEZF7C00CN4N90YY8T10462F".
     */
    "inventory_receipt_line_id": string;
    /**
     * ID of the reservation whose consumed stock these units came from. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id"?: string;
    /**
     * ID of the consumed reservation line these units came from. Example:
     * "invrln_01KEZF7C002JCDA729XDSNWGY5".
     */
    "inventory_reservation_line_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** ID of the Location that receives the units. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "receiving_location_id": string;
    /**
     * ID of the Return disposition this receipt records. Absent when the receipt isn't linked to a
     * Return. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "return_disposition_id"?: string;
    /**
     * Return that owns return_line_item_id. `null` when return_line_item_id is null. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string | null;
    /**
     * ID of the Return line item these units belong to. Absent when the line isn't linked to a
     * Return. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
    /**
     * ID of the inventory item the stock is for. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * The reservation whose consumed stock is being returned. minLength: 1. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id": string;
    /**
     * The consumed reservation line. Received quantity cannot exceed consumed quantity less prior
     * receipts. minLength: 1. Example: "invrln_01KEZF7C002JCDA729XDSNWGY5".
     */
    "inventory_reservation_line_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Location that receives the units. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
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
    /**
     * ID of the inventory item the stock is for. minLength: 1. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id": string;
    /**
     * The reservation whose consumed stock is being returned. minLength: 1. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id": string;
    /**
     * The consumed reservation line. Received quantity cannot exceed consumed quantity less prior
     * receipts. minLength: 1. Example: "invrln_01KEZF7C002JCDA729XDSNWGY5".
     */
    "inventory_reservation_line_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Location that receives the units. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id": string;
};
/** A page of `InventoryReceipt` objects. */
export type InventoryReceiptListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * InventoryReceipt}. Returned units received into Inventory, from a Return disposition or
     * against the reservation line that consumed them. For supplier deliveries, use POST
     * /v1/inventory-adjustments with reason: received.
     */
    "data": Array<InventoryReceipt>;
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
/** A response containing `InventoryReceipt` data. */
export type InventoryReceiptResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Returned units received
     * into Inventory, from a Return disposition or against the reservation line that consumed
     * them. For supplier deliveries, use POST /v1/inventory-adjustments with reason: received.
     */
    "data": InventoryReceipt;
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
     * The recorded receipt. Returned units received into Inventory, from a Return disposition or
     * against the reservation line that consumed them. For supplier deliveries, use POST
     * /v1/inventory-adjustments with reason: received.
     */
    "inventory_receipt": InventoryReceipt;
};
/** A response containing `InventoryReceiptResult` data. */
export type InventoryReceiptResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. Inventory receipt and
     * the levels it changed. inventory_receipt is the primary resource and expected_version
     * target.
     */
    "data": InventoryReceiptResult;
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
export type InventoryReceiptsCreateParams = (InputValue<CreateInventoryReceiptRequestInput>)
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
export type InventoryReceiptsGetParams = DisputesAcceptParams;
export type InventoryReceiptsListParams = {
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
     * Filter by inventory item. pattern: ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Filter by receiving Location. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: InputValue<string>;
    /**
     * Filter by source reservation. pattern: ^invr_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id"?: InputValue<string>;
    /**
     * Filter by the customer Return that produced the receipt. pattern:
     * ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by the Return disposition that produced the receipt. pattern:
     * ^retdsp_[0-9A-HJKMNP-TV-Z]{26}$. Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW".
     */
    "return_disposition_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Filter by source-system type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "manual", "pos", "wms", "erp", "flint", "other". Value enum: "manual",
     * "pos", "wms", "erp", "flint", "other". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "manual", "pos", "wms", "erp", "flint", "other". anyOf[1][] (Value): string. Value
     * enum: "manual", "pos", "wms", "erp", "flint", "other". anyOf[2] (Value): string. Value enum:
     * "manual", "pos", "wms", "erp", "flint", "other".
     */
    "source_system_type"?: InputValue<("manual" | "pos" | "wms" | "erp" | "flint" | "other")
        | readonly ("manual" | "pos" | "wms" | "erp" | "flint" | "other")[]>;
    /** Filter by external source ID. Example: "warehouse-1842". */
    "external_source_id"?: InputValue<string>;
    /** Filter by external actor ID. Example: "warehouse-1842". */
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
 * A claim on stock. Quantity moves from held to committed to consumed, and can be released or
 * reallocated.
 */
export type InventoryReservation = {
    /**
     * How the reservation ended. adopted when its remaining held stock moved to a delivery
     * selection. mixed when more than one terminal outcome applied. `null` when the reservation
     * isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted",
     * "mixed", null.
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
     * When held quantity is released if it isn't committed first. Backordered quantity that
     * payment hasn't confirmed yet carries the same deadline. Committed and consumed quantity
     * never expire. `null` when no line holds quantity or has unconfirmed backordered quantity.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
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
    /**
     * Unique identifier for this inventory reservation, prefixed `invr_`. Example:
     * "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "inventory_reservation_id": string;
    /**
     * How Flint chooses the Locations that serve the reservation: one fixed Location, an
     * allocation policy, or a specific policy revision. Where an order, payment link, or
     * reservation routes inventory from: a fixed Location, an inventory allocation policy, or one
     * policy revision.
     */
    "inventory_routing_source": InventoryRoutingSource;
    /**
     * Allocations of the reserved stock, one for each item and Location. [] (Value): {@link
     * InventoryReservationLine}. One item's location allocation within a reservation.
     */
    "lines": Array<InventoryReservationLine>;
    /**
     * Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. Who
     * holds an inventory reservation: either a merchant claim identified by your `key`, or an
     * order.
     */
    "owner": InventoryReservationOwner;
    /**
     * Set on a reservation whose claim Flint moved when it rerouted an order: the replacement
     * reservation that now holds the quantity named in this reservation's reallocated_quantity.
     * Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "replacement_inventory_reservation_id"?: string;
    /**
     * Set on a replacement reservation: the reservation whose claim Flint moved here when it
     * rerouted an order. This reservation holds the quantity that reservation reports as
     * reallocated_quantity. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     */
    "source_inventory_reservation_id"?: string;
    /**
     * active while any held, committed, or backordered quantity remains; closed once none does.
     * Value enum: "active", "closed".
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
    "event_type"?: "inventory_reservation.action_required";
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
    "event_type"?: "inventory_reservation.action_required";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "inventory_reservation.action_required";
});

import type { ReturnEligibilityPreview, ReturnLineItemRequest, ReturnLineItemRequestInput } from './types-52.js';
import type {
    ReturnResolutionPreview,
    ReturnSourceSystemRequest,
    ReturnSourceSystemRequestInput,
    ReturnReplacementLineItemRequest,
    ReturnResolutionAdjustmentRequest,
    ReturnResolutionLineItemRequest,
    ReturnResolutionAdjustmentRequestInput,
    ReturnReplacementLineItemRequestInput,
    ReturnResolutionLineItemRequestInput,
    ReturnShipmentLineItemAllocationRequestInput
} from './types-54.js';
import type { CreateReturnEligibilityPreviewRequest, CreateReturnEligibilityPreviewRequestInput } from './types-11.js';
import type { ResponseMeta } from './types-51.js';
import type {
    GetReturnReasonResponse,
    GetReturnReceiptResponse,
    GetReturnResolutionResponse,
    GetReturnResponse
} from './types-25.js';
import type { ReturnReceiptLineItemRequest, ReturnReceiptLineItemRequestInput } from './types-53.js';
import type { MetadataMap, MetadataRequestInput } from './types-36.js';
import type { RiskPredicateNodeRequest, RiskPredicateNodeRequestInput } from './types-55.js';
import type { PackageCreateRequest, PackageCreateRequestInput } from './types-41.js';
import type { SubscriptionIntervalOption, SubscriptionIntervalOptionRequestInput } from './types-58.js';
/**
 * A return preview, selected by `mode`: either the eligibility of the selected items or the
 * amounts of a resolution.
 */
export type CreateReturnPreviewData = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility"?: ReturnEligibilityPreview;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution"?: ReturnResolutionPreview;
})
    & ((Exclude<CreateReturnPreviewDataEligibility & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewDataResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `CreateReturnPreviewData`. */
export type CreateReturnPreviewDataEligibility = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility": ReturnEligibilityPreview;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution"?: ReturnResolutionPreview;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": unknown;
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility": ReturnEligibilityPreview;
}));
/** The `resolution` variant of `CreateReturnPreviewData`. */
export type CreateReturnPreviewDataResolution = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. The result of checking whether
     * an order's items can be returned: overall status, per-line eligibility, and the policy
     * evaluation.
     */
    "eligibility"?: ReturnEligibilityPreview;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution": ReturnResolutionPreview;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": unknown;
    /**
     * The priced resolution. Present when `mode` is `resolution`. A preview of a return resolution
     * before it is created: returned and replacement totals, adjustments, and amounts due to or
     * from the buyer.
     */
    "resolution": ReturnResolutionPreview;
}));
/** The request body for: Create return preview. */
export type CreateReturnPreviewRequest = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequest;
})
    & ((Exclude<CreateReturnPreviewRequestEligibility & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewRequestResolution & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `eligibility` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestEligibility = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequest;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": unknown;
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequest;
}));
/** The `eligibility` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestEligibilityInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Which preview to run. Value enum: "eligibility". */
    "mode": "eligibility";
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility": CreateReturnEligibilityPreviewRequestInput;
})
    & ({
    "resolution"?: never;
}));
/** The request body for: Create return preview. */
export type CreateReturnPreviewRequestInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "eligibility", "resolution". */
    "mode": "eligibility" | "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution"?: CreateReturnResolutionPreviewRequestInput;
})
    & ((Exclude<CreateReturnPreviewRequestEligibilityInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnPreviewRequestResolutionInput & object, readonly unknown[]>));
/** The `resolution` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestResolution = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequest;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution" | (string & {});
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequest;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": unknown;
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequest;
}));
/** The `resolution` variant of `CreateReturnPreviewRequest`. */
export type CreateReturnPreviewRequestResolutionInput = ({
    /**
     * The eligibility check. Present when `mode` is `eligibility`. A request to preview which
     * items of an order can be returned, given an order and a selection.
     */
    "eligibility"?: CreateReturnEligibilityPreviewRequestInput;
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequestInput;
})
    & (({
    /** Which preview to run. Value enum: "resolution". */
    "mode": "resolution";
    /**
     * The priced resolution. Present when `mode` is `resolution`. A request to preview the amounts
     * of a return resolution for a return, selected by `resolution_type`: refund, exchange,
     * replacement, no monetary action, or correction.
     */
    "resolution": CreateReturnResolutionPreviewRequestInput;
})
    & ({
    "eligibility"?: never;
}));
/** A response containing `CreateReturnPreviewData` data. */
export type CreateReturnPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A return preview,
     * selected by `mode`: either the eligibility of the selected items or the amounts of a
     * resolution.
     */
    "data": CreateReturnPreviewData;
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
/** The request body for: Create return reason. */
export type CreateReturnReasonRequest = {
    /**
     * Catalog category handles this reason applies to. A reason with categories is suggested, and
     * accepted from a customer session, only for order lines whose product is in one of them. A
     * reason with no categories applies to every line. Not product types or tags: use handles from
     * GET /v1/categories. Repeated handles are dropped. maxItems: 100. [] (Value): string.
     * minLength: 1.
     */
    "category_handles"?: Array<string>;
    /** Description, limited to 2048 bytes after trimming surrounding whitespace. minLength: 1. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Stable lower_snake_case identifier. After trimming surrounding whitespace, it must start
     * with a lowercase letter and contain only lowercase letters, digits, and underscores, with 1
     * through 100 characters. minLength: 1.
     */
    "handle": string;
    /**
     * Whether a Return line with this reason needs a buyer_note. Defaults to false. Default:
     * false.
     */
    "is_note_required"?: boolean;
    /**
     * Display name, limited to 1 through 255 bytes after trimming surrounding whitespace.
     * minLength: 1.
     */
    "name": string;
};
/** The request body for: Create return reason. */
export type CreateReturnReasonRequestInput = CreateReturnReasonRequest;
export type CreateReturnReasonResponse = GetReturnReasonResponse;
/** The request body for: Create return receipt. */
export type CreateReturnReceiptRequest = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Detail about `correction_reason`. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The lines recorded. minItems: 1. [] (Value): {@link ReturnReceiptLineItemRequest}. One line
     * of received merchandise: a matched return line, excess quantity, or an unverified item.
     */
    "line_items": Array<ReturnReceiptLineItemRequest>;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "received_at": string;
    /**
     * ID of the Location that received the goods. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id": string;
    /**
     * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
     * shipment. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. The system
     * a return event came from, such as a point of sale or warehouse system, with its own
     * identifier.
     */
    "source_system"?: ReturnSourceSystemRequest;
    /**
     * ID of the receipt this one corrects. minLength: 1. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "supersedes_return_receipt_id"?: string;
};
/** The request body for: Create return receipt. */
export type CreateReturnReceiptRequestInput = {
    /**
     * Why this observation replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other";
    /** Detail about `correction_reason`. minLength: 1. */
    "correction_reason_message"?: string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The lines recorded. minItems: 1. [] (Value): {@link ReturnReceiptLineItemRequestInput}. One
     * line of received merchandise: a matched return line, excess quantity, or an unverified item.
     */
    "line_items": Array<ReturnReceiptLineItemRequestInput>;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     * Example: "2026-08-02T16:00:00Z".
     */
    "received_at": string | globalThis.Date;
    /**
     * ID of the Location that received the goods. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id": string;
    /**
     * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
     * shipment. minLength: 1. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. The system
     * a return event came from, such as a point of sale or warehouse system, with its own
     * identifier.
     */
    "source_system"?: ReturnSourceSystemRequestInput;
    /**
     * ID of the receipt this one corrects. minLength: 1. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "supersedes_return_receipt_id"?: string;
};
export type CreateReturnReceiptResponse = GetReturnReceiptResponse;
/** The request body for: Create return. */
export type CreateReturnRequest = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The lines to check or return, each naming an order line item. minItems: 1. [] (Value):
     * {@link ReturnLineItemRequest}. An order line item to return, with the quantity, return
     * reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * ID of the Order to return items from. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
};
/** The request body for: Create return. */
export type CreateReturnRequestInput = {
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * The lines to check or return, each naming an order line item. minItems: 1. [] (Value):
     * {@link ReturnLineItemRequestInput}. An order line item to return, with the quantity, return
     * reason, and optionally a note and the resolution the buyer wants.
     */
    "line_items": Array<ReturnLineItemRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * ID of the Order to return items from. minLength: 1. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id": string;
};
/**
 * A request to preview the amounts of a return resolution for a return, selected by
 * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
 */
export type CreateReturnResolutionPreviewRequest = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & ((Exclude<CreateReturnResolutionPreviewRequestStandard & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionPreviewRequestCorrection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `correction` variant of `CreateReturnResolutionPreviewRequest`. */
export type CreateReturnResolutionPreviewRequestCorrection = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequest>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type": "correction" | (string & {});
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /** Fees and credits to apply to the resolution, at most 50. minItems: 1. */
    "adjustments": unknown;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type"?: unknown;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
}));
/** The `correction` variant of `CreateReturnResolutionPreviewRequest`. */
export type CreateReturnResolutionPreviewRequestCorrectionInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type": "correction";
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /** Fees and credits to apply to the resolution, at most 50. minItems: 1. */
    "adjustments": unknown;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type"?: "correction";
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
})
    & (({
    "line_items"?: never;
})
    & ({
    "replacement_line_items"?: never;
})
    & ({
    "pricing_basis"?: never;
})));
/**
 * A request to preview the amounts of a return resolution for a return, selected by
 * `resolution_type`: refund, exchange, replacement, no monetary action, or correction.
 */
export type CreateReturnResolutionPreviewRequestInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction";
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & ((Exclude<CreateReturnResolutionPreviewRequestStandardInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionPreviewRequestCorrectionInput & object, readonly unknown[]>));
/**
 * The `exchange` variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action`
 * variant of `CreateReturnResolutionPreviewRequest`. The `refund` variant of
 * `CreateReturnResolutionPreviewRequest`. The `replacement` variant of
 * `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of
 * `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestStandard = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: 1.
     */
    "line_items": unknown;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type"?: unknown;
}));
/**
 * The `exchange` variant of `CreateReturnResolutionPreviewRequest`. The `no_monetary_action`
 * variant of `CreateReturnResolutionPreviewRequest`. The `refund` variant of
 * `CreateReturnResolutionPreviewRequest`. The `replacement` variant of
 * `CreateReturnResolutionPreviewRequest`. The `store_credit` variant of
 * `CreateReturnResolutionPreviewRequest`.
 */
export type CreateReturnResolutionPreviewRequestStandardInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /**
     * ID of the Return the resolution is for. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
})
    & (({
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: 1.
     */
    "line_items": unknown;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & ({
    "corrects_return_resolution_id"?: never;
}));
/** The request body for: Create return resolution. */
export type CreateReturnResolutionRequest = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
})
    & ((Exclude<CreateReturnResolutionRequestStandard & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionRequestCorrection & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `correction` variant of `CreateReturnResolutionRequest`. */
export type CreateReturnResolutionRequestCorrection = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequest>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type": "correction" | (string & {});
})
    & (({
    /** Fees and credits to apply to the resolution, at most 50. minItems: 1. */
    "adjustments": unknown;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type"?: unknown;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
}));
/** The `correction` variant of `CreateReturnResolutionRequest`. */
export type CreateReturnResolutionRequestCorrectionInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments": Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type": "correction";
})
    & (({
    /** Fees and credits to apply to the resolution, at most 50. minItems: 1. */
    "adjustments": unknown;
    /** What the buyer gets for the approved quantity. Value enum: "correction". */
    "resolution_type"?: "correction";
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id": string;
})
    & (({
    "line_items"?: never;
})
    & ({
    "replacement_line_items"?: never;
})
    & ({
    "pricing_basis"?: never;
})));
/** The request body for: Create return resolution. */
export type CreateReturnResolutionRequestInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * ID of the settled resolution to correct. Send only with `resolution_type: correction`.
     * minLength: 1. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items"?: Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "store_credit" | "no_monetary_action" | "correction";
})
    & ((Exclude<CreateReturnResolutionRequestStandardInput & object, readonly unknown[]>)
    | (Exclude<CreateReturnResolutionRequestCorrectionInput & object, readonly unknown[]>));
/**
 * The `exchange` variant of `CreateReturnResolutionRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The
 * `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of
 * `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestStandard = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return resolution, with
     * the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequest>;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequest}. A return line and quantity to include in a return
     * resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequest>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
})
    & (({
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: 1.
     */
    "line_items": unknown;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type"?: unknown;
}));
/**
 * The `exchange` variant of `CreateReturnResolutionRequest`. The `no_monetary_action` variant of
 * `CreateReturnResolutionRequest`. The `refund` variant of `CreateReturnResolutionRequest`. The
 * `replacement` variant of `CreateReturnResolutionRequest`. The `store_credit` variant of
 * `CreateReturnResolutionRequest`.
 */
export type CreateReturnResolutionRequestStandardInput = ({
    /**
     * Fees and credits to apply to the resolution, at most 50. [] (Value): {@link
     * ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a return resolution,
     * with the assessed and applied amounts and whether it is applied or waived.
     */
    "adjustments"?: Array<ReturnResolutionAdjustmentRequestInput>;
    /**
     * Optional version of the parent Return. A stale value returns VERSION_CONFLICT with the
     * Return ID and its current version. Format: int64. minimum: 1.
     */
    "expected_return_version"?: number;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and conflicting_fields naming
     * resolution_type and gift_card_refund_destination. Store credit and its corrections always
     * issue new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. [] (Value):
     * {@link ReturnResolutionLineItemRequestInput}. A return line and quantity to include in a
     * return resolution.
     */
    "line_items": Array<ReturnResolutionLineItemRequestInput>;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Required for merchant exchange and replacement requests. original_price preserves the
     * selected units' net paid amounts using refund allocation; current_price uses catalog prices;
     * merchant_agreed_price uses each supplied unit_price_money. Buyer requests must omit
     * pricing_basis: replacements use original_price; exchanges use original_price when every
     * replacement matches selected returned merchandise by variant, bundle, or product, otherwise
     * current_price. Value enum: "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Merchandise the buyer receives instead, up to 100. Send with `exchange` or `replacement`. []
     * (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & (({
    /**
     * Return lines and quantities to cover, up to 100. Not allowed on a correction. minItems: 1.
     */
    "line_items": unknown;
    /**
     * What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
     */
    "resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
})
    & ({
    "corrects_return_resolution_id"?: never;
}));
export type CreateReturnResolutionResponse = GetReturnResolutionResponse;
export type CreateReturnResponse = GetReturnResponse;
/** The request body for: Create a risk list. */
export type CreateRiskListRequest = {
    /**
     * Name rules use to refer to this list: a lowercase letter, then up to 127 lowercase letters,
     * digits, or underscores. It can't be changed after creation. minLength: 1. pattern:
     * ^[a-z][a-z0-9_]{0,127}$.
     */
    "alias": string;
    /**
     * Values are trimmed and compared exactly after item-type normalization for deduplication and
     * membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID. Value enum: "card_fingerprint", "card_bin", "email", "email_domain",
     * "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     */
    "item_type": "card_fingerprint"
        | "card_bin"
        | "email"
        | "email_domain"
        | "ip_address"
        | "country"
        | "customer_id"
        | "string"
        | "case_sensitive_string"
        | (string & {});
    /** Display name of the list. minLength: 1. */
    "name": string;
};
/** The request body for: Create a risk list. */
export type CreateRiskListRequestInput = {
    /**
     * Name rules use to refer to this list: a lowercase letter, then up to 127 lowercase letters,
     * digits, or underscores. It can't be changed after creation. minLength: 1. pattern:
     * ^[a-z][a-z0-9_]{0,127}$.
     */
    "alias": string;
    /**
     * Values are trimmed and compared exactly after item-type normalization for deduplication and
     * membership. card_fingerprint is the 32-character hexadecimal value from
     * PaymentMethod.fingerprint and is lowercased; case_sensitive_string preserves case and
     * Unicode composition. string and email are lowercased, with accents preserved. email requires
     * a bare address. email_domain is lowercased, has one final dot removed, and converts
     * internationalized domains to ASCII. ip_address uses canonical IP form, including IPv4-mapped
     * IPv6 conversion to IPv4. country uses uppercase ISO codes. card_bin preserves 6 through 8
     * digits, including leading zeros, and matches the full value. customer_id preserves the
     * validated ID. Value enum: "card_fingerprint", "card_bin", "email", "email_domain",
     * "ip_address", "country", "customer_id", "string", "case_sensitive_string".
     */
    "item_type": "card_fingerprint"
        | "card_bin"
        | "email"
        | "email_domain"
        | "ip_address"
        | "country"
        | "customer_id"
        | "string"
        | "case_sensitive_string";
    /** Display name of the list. minLength: 1. */
    "name": string;
};
/** The request body for: Create a risk preview. */
export type CreateRiskPreviewRequest = ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum:
     * "allow", "block", "review", "require_3ds", null.
     */
    "action"?: "allow" | "block" | "review" | "require_3ds" | null | (string & {}) | null;
    /**
     * What to check: a rule in this request, or a saved rule. Value enum: "inline", "stored_rule".
     */
    "mode": "inline" | "stored_rule" | (string & {});
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequest}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate"?: ((RiskPredicateNodeRequest) | (null) | (unknown));
    /** ID of the saved rule to check. minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "risk_rule_id"?: string;
})
    & ((Exclude<CreateRiskPreviewRequestInline & object, readonly unknown[]>)
    | (Exclude<CreateRiskPreviewRequestStoredRule & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `inline` variant of `CreateRiskPreviewRequest`. */
export type CreateRiskPreviewRequestInline = ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum:
     * "allow", "block", "review", "require_3ds", null.
     */
    "action": "allow" | "block" | "review" | "require_3ds" | null | (string & {}) | null;
    /** What to check: a rule in this request, or a saved rule. Value enum: "inline". */
    "mode": "inline" | (string & {});
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequest}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate": ((RiskPredicateNodeRequest) | (null) | (unknown));
    /**
     * ID of a saved rule. Send it to check the action and predicate as an edit to that rule.
     * minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     */
    "risk_rule_id"?: string;
})
    & (({
    /** What to check: a rule in this request, or a saved rule. Value enum: "inline". */
    "mode": "inline" | (string & {});
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Action to
     * preview. In stored_rule mode, omitted or null keeps the saved action. minLength: 1. Value
     * enum: "allow", "block", "review", "require_3ds", null.
     */
    "action": ("allow" | "block" | "review" | "require_3ds" | null | (string & {}) | null) & (string);
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequest}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate": (((Exclude<RiskPredicateNodeRequest & object, readonly unknown[]>)
        | (null)
        | (Record<string, unknown>)))
        & ({});
})
    & ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. minLength:
     * 1.
     */
    "action"?: string;
    /** Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate. */
    "predicate"?: {
        [key: string]: unknown;
    };
}));
/** The `inline` variant of `CreateRiskPreviewRequest`. */
export type CreateRiskPreviewRequestInlineInput = ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum:
     * "allow", "block", "review", "require_3ds", null.
     */
    "action": "allow" | "block" | "review" | "require_3ds" | null;
    /** What to check: a rule in this request, or a saved rule. Value enum: "inline". */
    "mode": "inline";
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequestInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate": ((RiskPredicateNodeRequestInput) | (null));
    /**
     * ID of a saved rule. Send it to check the action and predicate as an edit to that rule.
     * minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319".
     */
    "risk_rule_id"?: string;
})
    & (({
    /** What to check: a rule in this request, or a saved rule. Value enum: "inline". */
    "mode": ("inline") & ("inline");
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Action to
     * preview. In stored_rule mode, omitted or null keeps the saved action. minLength: 1. Value
     * enum: "allow", "block", "review", "require_3ds", null.
     */
    "action": ("allow" | "block" | "review" | "require_3ds" | null) & (string);
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequestInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate": (((Exclude<RiskPredicateNodeRequestInput & object, readonly unknown[]>) | (null))) & ({});
})
    & ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. minLength:
     * 1.
     */
    "action"?: string;
    /** Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate. */
    "predicate"?: {
        [key: string]: unknown;
    };
}));
/** The request body for: Create a risk preview. */
export type CreateRiskPreviewRequestInput = ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum:
     * "allow", "block", "review", "require_3ds", null.
     */
    "action"?: "allow" | "block" | "review" | "require_3ds" | null;
    /**
     * What to check: a rule in this request, or a saved rule. Value enum: "inline", "stored_rule".
     */
    "mode": "inline" | "stored_rule";
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequestInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate"?: ((RiskPredicateNodeRequestInput) | (null));
    /** ID of the saved rule to check. minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "risk_rule_id"?: string;
})
    & ((Exclude<CreateRiskPreviewRequestInlineInput & object, readonly unknown[]>)
    | (Exclude<CreateRiskPreviewRequestStoredRuleInput & object, readonly unknown[]>));
/** The `stored_rule` variant of `CreateRiskPreviewRequest`. */
export type CreateRiskPreviewRequestStoredRule = ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum:
     * "allow", "block", "review", "require_3ds", null.
     */
    "action"?: "allow" | "block" | "review" | "require_3ds" | null | (string & {}) | null;
    /** What to check: a rule in this request, or a saved rule. Value enum: "stored_rule". */
    "mode": "stored_rule" | (string & {});
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequest}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate"?: ((RiskPredicateNodeRequest) | (null) | (unknown));
    /** ID of the saved rule to check. minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "risk_rule_id": string;
})
    & ({
    /** What to check: a rule in this request, or a saved rule. Value enum: "stored_rule". */
    "mode": "stored_rule" | (string & {});
    /** ID of the saved rule to check. minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "risk_rule_id": string;
});
/** The `stored_rule` variant of `CreateRiskPreviewRequest`. */
export type CreateRiskPreviewRequestStoredRuleInput = ({
    /**
     * Action to preview. In stored_rule mode, omitted or null keeps the saved action. Value enum:
     * "allow", "block", "review", "require_3ds", null.
     */
    "action"?: "allow" | "block" | "review" | "require_3ds" | null;
    /** What to check: a rule in this request, or a saved rule. Value enum: "stored_rule". */
    "mode": "stored_rule";
    /**
     * Predicate to preview. In stored_rule mode, omitted or null keeps the saved predicate.
     * anyOf[1] (Value): {@link RiskPredicateNodeRequestInput}. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes. anyOf[2]
     * (Value): null.
     */
    "predicate"?: ((RiskPredicateNodeRequestInput) | (null));
    /** ID of the saved rule to check. minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "risk_rule_id": string;
})
    & ({
    /** What to check: a rule in this request, or a saved rule. Value enum: "stored_rule". */
    "mode": ("stored_rule") & ("stored_rule");
    /** ID of the saved rule to check. minLength: 1. Example: "rule_01KEZF7C00FWGAQJXXA8CRA319". */
    "risk_rule_id": string;
});
/** The request body for: Create a risk rule. */
export type CreateRiskRuleRequest = {
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action": "allow" | "block" | "review" | "require_3ds" | (string & {});
    /**
     * Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading
     * and trailing whitespace is trimmed. minLength: 1. maxLength: 512.
     */
    "description": string;
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeRequest;
    /** Whether the rule runs. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
};
/** The request body for: Create a risk rule. */
export type CreateRiskRuleRequestInput = {
    /**
     * What Flint does with a payment the rule matches. Value enum: "allow", "block", "review",
     * "require_3ds".
     */
    "action": "allow" | "block" | "review" | "require_3ds";
    /**
     * Your note on what the rule is for. Limited to 512 characters (Unicode code points). Leading
     * and trailing whitespace is trimmed. minLength: 1. maxLength: 512.
     */
    "description": string;
    /**
     * The condition a payment must meet for the rule to match. A node in a risk rule condition: a
     * comparison of an attribute, or an `all`, `any`, or `not` group of other nodes.
     */
    "predicate": RiskPredicateNodeRequestInput;
    /** Whether the rule runs. Default: "active". Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
};
/** The request body for: Create sandbox. */
export type CreateSandboxRequest = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access"?: "full" | "read_only" | "restricted" | (string & {});
    /**
     * The onboarding state the sandbox starts in, and returns to when you reset it. `complete`
     * prefills a verified test identity; `not_started` leaves requirements due so you can rehearse
     * onboarding. Default: "complete". Value enum: "complete", "not_started".
     */
    "initial_onboarding"?: "complete" | "not_started" | (string & {});
    "issue_test_key"?: boolean;
    /** minLength: 1. */
    "name": string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
    /** minLength: 1. maxLength: 100. */
    "test_key_name"?: string;
})
    & ((({
    /** Value enum: true. */
    "issue_test_key": boolean;
})
    & ((({
    /** Value enum: "full". */
    "access": unknown;
}))
    | (({
    /** Value enum: "read_only". */
    "access": unknown;
}))
    | ({
    /** Value enum: "restricted". */
    "access": unknown;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write"
        | (string & {})>;
})
    | (Record<string, unknown>)))
    | (({
    /** Value enum: false. */
    "issue_test_key"?: boolean;
}))
    | (Record<string, unknown>));
/** The request body for: Create sandbox. */
export type CreateSandboxRequestInput = ({
    /**
     * Key access. Full and read_only resolve from the current scope catalog for the key's mode;
     * restricted holds only its listed scopes. Granting full or read_only requires a freshly
     * verified authorized user session, or a full-access API key in the key's mode or a live
     * full-access key granting a test key. Value enum: "full", "read_only", "restricted".
     */
    "access"?: "full" | "read_only" | "restricted";
    /**
     * The onboarding state the sandbox starts in, and returns to when you reset it. `complete`
     * prefills a verified test identity; `not_started` leaves requirements due so you can rehearse
     * onboarding. Default: "complete". Value enum: "complete", "not_started".
     */
    "initial_onboarding"?: "complete" | "not_started";
    "issue_test_key"?: boolean;
    /** minLength: 1. */
    "name": string;
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes"?: Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
    /** minLength: 1. maxLength: 100. */
    "test_key_name"?: string;
})
    & ((({
    /** Value enum: true. */
    "issue_test_key": true;
})
    & ((({
    /** Value enum: "full". */
    "access": ("full") & ("full");
})
    & ({
    "scopes"?: never;
}))
    | (({
    /** Value enum: "read_only". */
    "access": ("read_only") & ("read_only");
})
    & ({
    "scopes"?: never;
}))
    | ({
    /** Value enum: "restricted". */
    "access": ("restricted") & ("restricted");
    /**
     * The scopes to grant. Required only with access restricted; forbidden with full or read_only.
     * minItems: 1. uniqueItems: true. [] enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write". [] (Value): string. Value enum: "accounts.api_keys.read",
     * "accounts.api_keys.write", "accounts.devices.read", "accounts.devices.write",
     * "accounts.workload_identities.read", "accounts.workload_identities.write", "analytics.read",
     * "checkouts.checkout_sessions.read", "checkouts.checkout_sessions.write",
     * "checkouts.payment_links.read", "checkouts.payment_links.write", "commerce.bundles.read",
     * "commerce.bundles.write", "commerce.catalog.read", "commerce.catalog.write",
     * "commerce.credit_notes.read", "commerce.credit_notes.write", "commerce.delivery.read",
     * "commerce.delivery.write", "commerce.gift_cards.adjustments.write",
     * "commerce.gift_cards.read", "commerce.gift_cards.redemptions.write",
     * "commerce.gift_cards.secrets.write", "commerce.gift_cards.write",
     * "commerce.inventory.allocation.write", "commerce.inventory.policies.write",
     * "commerce.inventory.read", "commerce.inventory.write", "commerce.invoices.read",
     * "commerce.invoices.write", "commerce.orders.read", "commerce.orders.write",
     * "commerce.products.read", "commerce.products.write", "commerce.promotions.read",
     * "commerce.promotions.write", "commerce.refunds.read",
     * "commerce.refunds.tax_overrides.write", "commerce.refunds.write",
     * "commerce.returns.operations.write", "commerce.returns.policies.write",
     * "commerce.returns.read", "commerce.returns.reasons.write",
     * "commerce.returns.resolutions.write", "commerce.returns.write",
     * "commerce.subscription_plans.read", "commerce.subscription_plans.write",
     * "commerce.subscriptions.read", "commerce.subscriptions.write", "commerce.tickets.read",
     * "commerce.tickets.write", "customers.read", "customers.sessions.write", "customers.write",
     * "developer.feedback_reports.read", "developer.feedback_reports.write",
     * "developer.request_logs.read", "developer.request_logs.self.read",
     * "developer.resource_timelines.read", "developer.test_clocks.read",
     * "developer.test_clocks.write", "merchant_billing.read", "merchants.account_sessions.write",
     * "merchants.locations.read", "merchants.locations.write", "merchants.onboarding.read",
     * "merchants.onboarding.write", "merchants.profile.read", "merchants.profile.write",
     * "money_movement.balance_transactions.read", "money_movement.balances.read",
     * "money_movement.payout_settings.read", "money_movement.payout_settings.write",
     * "money_movement.payouts.read", "money_movement.payouts.write", "payments.disputes.read",
     * "payments.disputes.write", "payments.payment_intents.read",
     * "payments.payment_intents.write", "payments.payment_method_domains.read",
     * "payments.payment_method_domains.write", "payments.payment_methods.read",
     * "payments.payment_methods.write", "reports.read", "reports.write", "risk.controls.write",
     * "risk.read", "risk.reviews.write", "settings.read", "settings.write", "webhooks.read",
     * "webhooks.write".
     */
    "scopes": Array<"accounts.api_keys.read"
        | "accounts.api_keys.write"
        | "accounts.devices.read"
        | "accounts.devices.write"
        | "accounts.workload_identities.read"
        | "accounts.workload_identities.write"
        | "analytics.read"
        | "checkouts.checkout_sessions.read"
        | "checkouts.checkout_sessions.write"
        | "checkouts.payment_links.read"
        | "checkouts.payment_links.write"
        | "commerce.bundles.read"
        | "commerce.bundles.write"
        | "commerce.catalog.read"
        | "commerce.catalog.write"
        | "commerce.credit_notes.read"
        | "commerce.credit_notes.write"
        | "commerce.delivery.read"
        | "commerce.delivery.write"
        | "commerce.gift_cards.adjustments.write"
        | "commerce.gift_cards.read"
        | "commerce.gift_cards.redemptions.write"
        | "commerce.gift_cards.secrets.write"
        | "commerce.gift_cards.write"
        | "commerce.inventory.allocation.write"
        | "commerce.inventory.policies.write"
        | "commerce.inventory.read"
        | "commerce.inventory.write"
        | "commerce.invoices.read"
        | "commerce.invoices.write"
        | "commerce.orders.read"
        | "commerce.orders.write"
        | "commerce.products.read"
        | "commerce.products.write"
        | "commerce.promotions.read"
        | "commerce.promotions.write"
        | "commerce.refunds.read"
        | "commerce.refunds.tax_overrides.write"
        | "commerce.refunds.write"
        | "commerce.returns.operations.write"
        | "commerce.returns.policies.write"
        | "commerce.returns.read"
        | "commerce.returns.reasons.write"
        | "commerce.returns.resolutions.write"
        | "commerce.returns.write"
        | "commerce.subscription_plans.read"
        | "commerce.subscription_plans.write"
        | "commerce.subscriptions.read"
        | "commerce.subscriptions.write"
        | "commerce.tickets.read"
        | "commerce.tickets.write"
        | "customers.read"
        | "customers.sessions.write"
        | "customers.write"
        | "developer.feedback_reports.read"
        | "developer.feedback_reports.write"
        | "developer.request_logs.read"
        | "developer.request_logs.self.read"
        | "developer.resource_timelines.read"
        | "developer.test_clocks.read"
        | "developer.test_clocks.write"
        | "merchant_billing.read"
        | "merchants.account_sessions.write"
        | "merchants.locations.read"
        | "merchants.locations.write"
        | "merchants.onboarding.read"
        | "merchants.onboarding.write"
        | "merchants.profile.read"
        | "merchants.profile.write"
        | "money_movement.balance_transactions.read"
        | "money_movement.balances.read"
        | "money_movement.payout_settings.read"
        | "money_movement.payout_settings.write"
        | "money_movement.payouts.read"
        | "money_movement.payouts.write"
        | "payments.disputes.read"
        | "payments.disputes.write"
        | "payments.payment_intents.read"
        | "payments.payment_intents.write"
        | "payments.payment_method_domains.read"
        | "payments.payment_method_domains.write"
        | "payments.payment_methods.read"
        | "payments.payment_methods.write"
        | "reports.read"
        | "reports.write"
        | "risk.controls.write"
        | "risk.read"
        | "risk.reviews.write"
        | "settings.read"
        | "settings.write"
        | "webhooks.read"
        | "webhooks.write">;
})))
    | (({
    /** Value enum: false. */
    "issue_test_key"?: false;
})
    & (({
    "access"?: never;
}) & ({
    "scopes"?: never;
}) & ({
    "test_key_name"?: never;
}))));
/**
 * Service details you supply when creating a fulfillment: the scheduled start and end, timezone,
 * and notes.
 */
export type CreateServiceFulfillmentDetails = {
    /** Additional instructions or notes for performing the service. minLength: 1. */
    "notes"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "scheduled_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "scheduled_start_at"?: string;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
};
/**
 * Service details you supply when creating a fulfillment: the scheduled start and end, timezone,
 * and notes.
 */
export type CreateServiceFulfillmentDetailsInput = {
    /** Additional instructions or notes for performing the service. minLength: 1. */
    "notes"?: string;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "scheduled_end_at"?: string | globalThis.Date;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "scheduled_start_at"?: string | globalThis.Date;
    /** Uses an IANA time zone name. minLength: 1. */
    "timezone"?: string;
};
/** The request body for: Create shipment. */
export type CreateShipmentRequest = ({
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound", "return".
     */
    "direction": "outbound" | "return" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Creates packages atomically with an outbound shipment. Items are optional per package.
     * Created packages are included in the response. minItems: 1. maxItems: 20. [] (Value): {@link
     * PackageCreateRequest}. The request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequest>;
    /**
     * Return associated with this shipment, when its direction is return. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return lines and quantities the shipment carries. minItems: 1. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
})
    & ((Exclude<CreateShipmentRequestOutbound & object, readonly unknown[]>)
    | (Exclude<CreateShipmentRequestReturn & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The request body for: Create shipment. */
export type CreateShipmentRequestInput = ({
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound", "return".
     */
    "direction": "outbound" | "return";
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Creates packages atomically with an outbound shipment. Items are optional per package.
     * Created packages are included in the response. minItems: 1. maxItems: 20. [] (Value): {@link
     * PackageCreateRequestInput}. The request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequestInput>;
    /**
     * Return associated with this shipment, when its direction is return. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return lines and quantities the shipment carries. minItems: 1. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
})
    & ((Exclude<CreateShipmentRequestOutboundInput & object, readonly unknown[]>)
    | (Exclude<CreateShipmentRequestReturnInput & object, readonly unknown[]>));
/** The `outbound` variant of `CreateShipmentRequest`. */
export type CreateShipmentRequestOutbound = ({
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound".
     */
    "direction": "outbound" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Creates packages atomically with an outbound shipment. Items are optional per package.
     * Created packages are included in the response. minItems: 1. maxItems: 20. [] (Value): {@link
     * PackageCreateRequest}. The request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequest>;
    /**
     * Return associated with this shipment, when its direction is return. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return lines and quantities the shipment carries. minItems: 1. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items"?: Array<ReturnResolutionLineItemRequest>;
});
/** The `outbound` variant of `CreateShipmentRequest`. */
export type CreateShipmentRequestOutboundInput = ({
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "outbound".
     */
    "direction": "outbound";
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Creates packages atomically with an outbound shipment. Items are optional per package.
     * Created packages are included in the response. minItems: 1. maxItems: 20. [] (Value): {@link
     * PackageCreateRequestInput}. The request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequestInput>;
    /**
     * Return associated with this shipment, when its direction is return. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: string;
    /**
     * Return lines and quantities the shipment carries. minItems: 1. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package.
     */
    "return_line_items"?: Array<ReturnShipmentLineItemAllocationRequestInput>;
})
    & (({
    "return_id"?: never;
}))
    & (({
    "return_line_items"?: never;
}));
/** The `return` variant of `CreateShipmentRequest`. */
export type CreateShipmentRequestReturn = ({
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "return".
     */
    "direction": "return" | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Creates packages atomically with an outbound shipment. Items are optional per package.
     * Created packages are included in the response. minItems: 1. maxItems: 20. [] (Value): {@link
     * PackageCreateRequest}. The request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequest>;
    /**
     * Return associated with this shipment, when its direction is return. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * Return lines and quantities the shipment carries. minItems: 1. [] (Value): {@link
     * ReturnResolutionLineItemRequest}. A return line and the quantity placed in a return shipment
     * or package.
     */
    "return_line_items": Array<ReturnResolutionLineItemRequest>;
});
/** The `return` variant of `CreateShipmentRequest`. */
export type CreateShipmentRequestReturnInput = ({
    /**
     * Whether the shipment sends items to the buyer or returns items to the merchant. Value enum:
     * "return".
     */
    "direction": "return";
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Creates packages atomically with an outbound shipment. Items are optional per package.
     * Created packages are included in the response. minItems: 1. maxItems: 20. [] (Value): {@link
     * PackageCreateRequestInput}. The request body for: Create package.
     */
    "packages"?: Array<PackageCreateRequestInput>;
    /**
     * Return associated with this shipment, when its direction is return. minLength: 1. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id": string;
    /**
     * Return lines and quantities the shipment carries. minItems: 1. [] (Value): {@link
     * ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a
     * return shipment or package.
     */
    "return_line_items": Array<ReturnShipmentLineItemAllocationRequestInput>;
})
    & (({
    "packages"?: never;
}));
/**
 * The access a subscription link gives its buyer. Omit the body or purpose for read-only access.
 */
export type CreateSubscriptionAccessLinkRequest = {
    /**
     * subscription_view opens the subscription read-only. subscription_manage also lets the buyer
     * cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the
     * subscription's state; it requires commerce.subscriptions.write. Both work for 14 days or 5
     * opens. Default: "subscription_view". Value enum: "subscription_view", "subscription_manage".
     */
    "purpose"?: "subscription_view" | "subscription_manage" | (string & {});
    /**
     * Where the buyer can return to on your site. Kept for the browser session this link starts,
     * until sign-out or session end. Absolute HTTPS URL without credentials; test mode also
     * accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed.
     * Omit it for no return destination. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
};
/**
 * The access a subscription link gives its buyer. Omit the body or purpose for read-only access.
 */
export type CreateSubscriptionAccessLinkRequestInput = {
    /**
     * subscription_view opens the subscription read-only. subscription_manage also lets the buyer
     * cancel, pause, or undo a scheduled cancellation, subject to your store's policy and the
     * subscription's state; it requires commerce.subscriptions.write. Both work for 14 days or 5
     * opens. Default: "subscription_view". Value enum: "subscription_view", "subscription_manage".
     */
    "purpose"?: "subscription_view" | "subscription_manage";
    /**
     * Where the buyer can return to on your site. Kept for the browser session this link starts,
     * until sign-out or session end. Absolute HTTPS URL without credentials; test mode also
     * accepts HTTP loopback URLs. Up to 2,048 characters. Query strings and fragments are allowed.
     * Omit it for no return destination. Format: uri. minLength: 1. maxLength: 2048. Example:
     * "https://example.com/receipt".
     */
    "return_url"?: string;
};
/** The request body for: Move subscribers to another delivery method. */
export type CreateSubscriptionDeliveryMigrationRequest = {
    /** minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
    "from_delivery_method_id": string;
    /**
     * Limit the migration to this plan's live subscriptions. minLength: 1. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id"?: string;
    /** minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
    "to_delivery_method_id": string;
};
/** The request body for: Move subscribers to another delivery method. */
export type CreateSubscriptionDeliveryMigrationRequestInput = CreateSubscriptionDeliveryMigrationRequest;
/** The request body for: Add subscription line item. */
export type CreateSubscriptionLineItemRequest = ({
    /**
     * minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /** The catalog source of the new line: variant or bundle. Value enum: "variant", "bundle". */
    "type": "variant" | "bundle" | (string & {});
    /**
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<CreateSubscriptionLineItemRequestVariant & object, readonly unknown[]>)
    | (Exclude<CreateSubscriptionLineItemRequestBundle & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `bundle` variant of `CreateSubscriptionLineItemRequest`. */
export type CreateSubscriptionLineItemRequestBundle = ({
    /**
     * minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /** The catalog source of the new line: variant or bundle. Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
});
/** The `bundle` variant of `CreateSubscriptionLineItemRequest`. */
export type CreateSubscriptionLineItemRequestBundleInput = ({
    /**
     * minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /** The catalog source of the new line: variant or bundle. Value enum: "bundle". */
    "type": "bundle";
    /**
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    "variant_id"?: never;
}));
/** The request body for: Add subscription line item. */
export type CreateSubscriptionLineItemRequestInput = ({
    /**
     * minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /** The catalog source of the new line: variant or bundle. Value enum: "variant", "bundle". */
    "type": "variant" | "bundle";
    /**
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<CreateSubscriptionLineItemRequestVariantInput & object, readonly unknown[]>)
    | (Exclude<CreateSubscriptionLineItemRequestBundleInput & object, readonly unknown[]>));
/** The `variant` variant of `CreateSubscriptionLineItemRequest`. */
export type CreateSubscriptionLineItemRequestVariant = ({
    /**
     * minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /** The catalog source of the new line: variant or bundle. Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
});
/** The `variant` variant of `CreateSubscriptionLineItemRequest`. */
export type CreateSubscriptionLineItemRequestVariantInput = ({
    /**
     * minLength: 1. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /** The catalog source of the new line: variant or bundle. Value enum: "variant". */
    "type": "variant";
    /**
     * minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}));
/** The request body for: Create subscription offer. */
export type CreateSubscriptionOfferRequest = {
    /**
     * Offered billing interval and count pairs. Every option bills the same catalog line prices
     * once per period; changing cadence does not scale prices. minItems: 1. maxItems: 12.
     * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence offered
     * by a subscription plan or offer. Every option bills the same line prices once per period;
     * prices are not scaled by the interval. For a different price per interval, create separate
     * plans.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Products whose active variants the offer covers, including variants added later. At most
     * 100. Send at least one product or variant. Each product must be active and physical,
     * digital, or a service. A variant can be in only one active offer; an overlap returns `409
     * ALREADY_EXISTS` naming the other offer. maxItems: 100. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it. minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string | null;
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Individual variants the offer covers. At most 100. Send at least one product or variant. A
     * variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the
     * other offer. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
};
/** The request body for: Create subscription offer. */
export type CreateSubscriptionOfferRequestInput = {
    /**
     * Offered billing interval and count pairs. Every option bills the same catalog line prices
     * once per period; changing cadence does not scale prices. minItems: 1. maxItems: 12.
     * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOptionRequestInput}. A billing
     * cadence offered by a subscription plan or offer. Every option bills the same line prices
     * once per period; prices are not scaled by the interval. For a different price per interval,
     * create separate plans.
     */
    "billing_interval_options": Array<SubscriptionIntervalOptionRequestInput>;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. maxLength: 255. */
    "name": string;
    /**
     * Products whose active variants the offer covers, including variants added later. At most
     * 100. Send at least one product or variant. Each product must be active and physical,
     * digital, or a service. A variant can be in only one active offer; an overlap returns `409
     * ALREADY_EXISTS` naming the other offer. maxItems: 100. uniqueItems: true. [] (Value):
     * string. minLength: 1. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * An active promotion with forever recurrence. On PATCH, null removes the discount for new
     * signups; omission keeps it. minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string | null;
    /** Use active or inactive. Archive the offer with DELETE. Value enum: "active", "inactive". */
    "status"?: "active" | "inactive";
    /**
     * Delivery methods offered at signup. An empty array uses the store's checkout defaults.
     * Existing subscriptions keep their selected method. maxItems: 25. uniqueItems: true. []
     * (Value): string. minLength: 1. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0".
     */
    "subscription_delivery_method_ids"?: Array<string>;
    /**
     * Individual variants the offer covers. At most 100. Send at least one product or variant. A
     * variant can be in only one active offer; an overlap returns `409 ALREADY_EXISTS` naming the
     * other offer. maxItems: 100. uniqueItems: true. [] (Value): string. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
};

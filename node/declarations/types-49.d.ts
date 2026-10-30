import type { ReturnActor, ReturnInspection, ReturnDisposition } from './types-48.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-34.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { DecideReturnInspectionLineItemRequestInput } from './types-14.js';
import type { BundleComponent } from './types-1.js';
import type { Fulfillment } from './types-21.js';
import type { Image } from './types-25.js';
import type { OrderLineItemModifier } from './types-37.js';
import type { SelectedProductOption } from './types-53.js';
import type { MoneyValue } from './types-35.js';
import type { CreateReturnPolicyRequestInput, CreateReturnPreviewRequestInput, CreateReturnReasonRequestInput } from './types-10.js';
import type { PublishReturnPolicyRevisionRequestInput } from './types-46.js';
import type { UpdateReturnPolicyRequestInput, UpdateReturnReasonRequestInput } from './types-59.js';
import type {
    ReturnRestockingFeePolicy,
    ReturnShippingPolicy,
    ReturnRestockingFeePolicyInput,
    ReturnShippingPolicyInput,
    ReturnSourceSystemRequest,
    ReturnSourceSystemRequestInput,
    ReturnReplacementLineItemRequest,
    ReturnReplacementLineItemRequestInput,
    ReturnResolution,
    ReturnResource,
    ReturnReceiptLineItem,
    ReturnSourceSystem
} from './types-50.js';
import type { ReturnWindow, ReturnWindowInput } from './types-51.js';
/** The inspection result for a returned item. */
export type ReturnInspectionLineItem = {
    /** RFC3339 timestamp. Format: date-time. */
    "acceptance_decided_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "acceptance_decided_by"?: ReturnActor;
    /** Value enum: "inspection_result", "return_policy", "manual_review", "other". */
    "acceptance_decision_reason"?: "inspection_result" | "return_policy" | "manual_review" | "other" | (string & {});
    "acceptance_decision_reason_message"?: string;
    /** Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "available_disposition_quantity": number;
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used",
     * "missing_parts", "empty_package", "counterfeit_suspected", "other". [] (Value): string.
     * Value enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used",
     * "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes": Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    "internal_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    "return_inspection_id": string;
    "return_inspection_line_item_id": string;
    "return_line_item_id"?: string;
    "return_receipt_line_item_id": string;
    /** [] enum: "decide". [] (Value): string.  Value enum: "decide". */
    "supported_actions": Array<"decide" | (string & {})>;
};
/**
 * The inspection result for one received return line: acceptance status, condition, and findings.
 */
export type ReturnInspectionLineItemRequest = {
    /** Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used",
     * "missing_parts", "empty_package", "counterfeit_suspected", "other". [] (Value): string.
     * Value enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used",
     * "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    /** minLength: 1. */
    "internal_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_line_item_id"?: string;
    /** minLength: 1. */
    "return_receipt_line_item_id": string;
    /**
     * Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed",
     * "merchant_review", "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "verification_reason_message"?: string;
};
/**
 * The inspection result for one received return line: acceptance status, condition, and findings.
 */
export type ReturnInspectionLineItemRequestInput = {
    /** Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required";
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new" | "unopened" | "opened" | "used" | "damaged" | "defective" | "incomplete" | "undetermined";
    /**
     * [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used",
     * "missing_parts", "empty_package", "counterfeit_suspected", "other". [] (Value): string.
     * Value enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used",
     * "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other">;
    /** minLength: 1. */
    "internal_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "return_line_item_id"?: string;
    /** minLength: 1. */
    "return_receipt_line_item_id": string;
    /**
     * Value enum: "order_match_confirmed", "sku_match_confirmed", "inspection_confirmed",
     * "merchant_review", "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other";
    /** minLength: 1. */
    "verification_reason_message"?: string;
};
export type ReturnInspectionSupersededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.superseded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnInspection;
    };
    "event_type"?: "return_inspection.superseded";
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
    "event_type": "return_inspection.superseded";
});
/**
 * The `return_inspection.superseded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnInspectionSupersededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnInspection}. An assessment of the condition of returned
     * items.
     */
    "data"?: {
        /** An assessment of the condition of returned items. */
        "object": ReturnInspection;
    };
    /** Value enum: "return_inspection.superseded". */
    "event_type"?: "return_inspection.superseded";
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
 * The `return_inspection.superseded` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type ReturnInspectionSupersededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnInspection}. An assessment of the condition of returned
     * items.
     */
    "data"?: {
        /** An assessment of the condition of returned items. */
        "object": ReturnInspection;
    };
    /** Value enum: "return_inspection.superseded". */
    "event_type"?: "return_inspection.superseded";
});
export type ReturnInspectionsDecideLineItemParams = (InputValue<DecideReturnInspectionLineItemRequestInput>);
export type ReturnInspectionsGetParams = {};
export type ReturnInspectionsListParams = {
    /**
     * Filter by acceptance status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "accepted", "rejected", "review_required". Value enum: "accepted", "rejected",
     * "review_required". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "accepted",
     * "rejected", "review_required". anyOf[1][] (Value): string. Value enum: "accepted",
     * "rejected", "review_required". anyOf[2] (Value): string. Value enum: "accepted", "rejected",
     * "review_required".
     */
    "acceptance_status"?: InputValue<("accepted" | "rejected" | "review_required")
        | readonly ("accepted" | "rejected" | "review_required")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Inclusive lower bound on inspected_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "inspected_after"?: InputValue<string | globalThis.Date>;
    /**
     * Exclusive upper bound on inspected_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     */
    "inspected_before"?: InputValue<string | globalThis.Date>;
    /** Filter by inspection location id. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "inspection_location_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return inspection ID or external reference ID. */
    "query"?: InputValue<string>;
    /** Filter by return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /** Filter by return line item id. Example: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_line_item_id"?: InputValue<string>;
    /** Filter by return receipt id. Example: "retrc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_receipt_id"?: InputValue<string>;
    /**
     * Filter by source system type. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "manual",
     * "pos", "wms", "erp", "other", "flint". Value enum: "manual", "pos", "wms", "erp", "other",
     * "flint". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms",
     * "erp", "other", "flint". anyOf[1][] (Value): string. Value enum: "manual", "pos", "wms",
     * "erp", "other", "flint". anyOf[2] (Value): string. Value enum: "manual", "pos", "wms",
     * "erp", "other", "flint".
     */
    "source_system_type"?: InputValue<("manual" | "pos" | "wms" | "erp" | "other" | "flint")
        | readonly ("manual" | "pos" | "wms" | "erp" | "other" | "flint")[]>;
    /**
     * Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "current", "superseded".
     * Value enum: "current", "superseded". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "current", "superseded". anyOf[1][] (Value): string. Value enum: "current",
     * "superseded". anyOf[2] (Value): string. Value enum: "current", "superseded".
     */
    "status"?: InputValue<("current" | "superseded") | readonly ("current" | "superseded")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
/**
 * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
 * policy evaluation and the proposal can be built. Otherwise start with return_required_quantity
 * equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement,
 * no_monetary_action, and store_credit in that order regardless of whether the original payment is
 * refundable, no automatic_resolution_type, is_inspection_required false, and no
 * receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types
 * replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null
 * to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise
 * is required and inspection is required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required. Validate the merged decision for
 * quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A
 * pinned policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
 */
export type ReturnLineDecision = ({
    /**
     * Optional replacement for the entire starting list. Defaults to the buildable pinned policy
     * proposal; otherwise refund, exchange, replacement, no_monetary_action, and store_credit in
     * that order, independent of the original payment's refundability. The resulting list must be
     * valid and non-empty when approved_quantity is above zero. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Required whole-number quantity from zero through the line's requested_quantity; fractional
     * quantities are not supported. When approved_quantity is below requested_quantity, send
     * decline_reason; decline_reason_message is optional. Both decline fields are forbidden when
     * all requested quantity is approved. Format: int64. minimum: 0.
     */
    "approved_quantity": number;
    /**
     * Optional refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically. Omit to keep the policy proposal's value, or the absent value from no-policy
     * defaults. Send null to resolve the line manually; clearing a policy proposal's automatic
     * value requires override_reason. Must be in the resulting allowed_resolution_types. Exchange
     * and replacement cannot be automated. An unavailable automatic refund or store credit fails
     * with 409 ACTION_NOT_ALLOWED and reason refund_unavailable or store_credit_unavailable. Value
     * enum: "refund", "store_credit", "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null | (string & {}) | null;
    /**
     * Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Optional explanation accompanying decline_reason, up to 2048 characters (Unicode code
     * points), counted before normalization. Requires decline_reason and is forbidden when all
     * requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Optional inspection requirement. Defaults to the buildable pinned policy proposal or false
     * when no proposal can be built. The resulting requirement must be reachable with the merged
     * merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Optional explanation accompanying override_reason. Requires override_reason and is forbidden
     * without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Optional receiving Location with a postal address. Defaults to the buildable pinned policy
     * proposal or no location when no proposal can be built. Required when the resulting
     * return_required_quantity is above zero and there is no starting location. A process receipt
     * does not supply the decision's location. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Optional gate for every resolution type. Defaults to the policy proposal's timing when set.
     * After merging supplied fields, an unset timing becomes after_inspection when
     * return_required_quantity is above zero and inspection is required, after_receipt when
     * return_required_quantity is above zero without inspection, or after_approval when
     * return_required_quantity is zero. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** minLength: 1. */
    "return_line_item_id": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: number;
})
    & (((unknown)
    | ({
    /**
     * Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other".
     */
    "decline_reason": "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
})
    | (Record<string, unknown>)))
    & (((unknown)
    | ({
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason": "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
})
    | (Record<string, unknown>)));
/**
 * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
 * policy evaluation and the proposal can be built. Otherwise start with return_required_quantity
 * equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement,
 * no_monetary_action, and store_credit in that order regardless of whether the original payment is
 * refundable, no automatic_resolution_type, is_inspection_required false, and no
 * receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types
 * replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null
 * to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise
 * is required and inspection is required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required. Validate the merged decision for
 * quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A
 * pinned policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
 */
export type ReturnLineDecisionInput = ({
    /**
     * Optional replacement for the entire starting list. Defaults to the buildable pinned policy
     * proposal; otherwise refund, exchange, replacement, no_monetary_action, and store_credit in
     * that order, independent of the original payment's refundability. The resulting list must be
     * valid and non-empty when approved_quantity is above zero. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Required whole-number quantity from zero through the line's requested_quantity; fractional
     * quantities are not supported. When approved_quantity is below requested_quantity, send
     * decline_reason; decline_reason_message is optional. Both decline fields are forbidden when
     * all requested quantity is approved. Format: int64. minimum: 0.
     */
    "approved_quantity": number;
    /**
     * Optional refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically. Omit to keep the policy proposal's value, or the absent value from no-policy
     * defaults. Send null to resolve the line manually; clearing a policy proposal's automatic
     * value requires override_reason. Must be in the resulting allowed_resolution_types. Exchange
     * and replacement cannot be automated. An unavailable automatic refund or store credit fails
     * with 409 ACTION_NOT_ALLOWED and reason refund_unavailable or store_credit_unavailable. Value
     * enum: "refund", "store_credit", "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null;
    /**
     * Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
    /**
     * Optional explanation accompanying decline_reason, up to 2048 characters (Unicode code
     * points), counted before normalization. Requires decline_reason and is forbidden when all
     * requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Optional inspection requirement. Defaults to the buildable pinned policy proposal or false
     * when no proposal can be built. The resulting requirement must be reachable with the merged
     * merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
    /**
     * Optional explanation accompanying override_reason. Requires override_reason and is forbidden
     * without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Optional receiving Location with a postal address. Defaults to the buildable pinned policy
     * proposal or no location when no proposal can be built. Required when the resulting
     * return_required_quantity is above zero and there is no starting location. A process receipt
     * does not supply the decision's location. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Optional gate for every resolution type. Defaults to the policy proposal's timing when set.
     * After merging supplied fields, an unset timing becomes after_inspection when
     * return_required_quantity is above zero and inspection is required, after_receipt when
     * return_required_quantity is above zero without inspection, or after_approval when
     * return_required_quantity is zero. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** minLength: 1. */
    "return_line_item_id": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: number;
})
    & (((({
    "decline_reason_message"?: never;
}))
    | ({
    /**
     * Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other".
     */
    "decline_reason": "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
})))
    & (((({
    "override_reason_message"?: never;
}))
    | ({
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason": "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
})));
/** An item included in a return request. */
export type ReturnLineItem = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "accepted_quantity": number;
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "approved_quantity": number;
    /**
     * The refund, store_credit, or no_monetary_action resolution Flint creates and confirms
     * automatically. Absent when the merchant resolves manually. Example: "refund". Value enum:
     * "refund", "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Approved quantity that can still be assigned to a new resolution. Every non-canceled
     * resolution reserves its line quantity, including proposed, pending, action-required, failed,
     * and fulfilled resolutions. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "available_resolution_quantity": number;
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components": Array<BundleComponent>;
    "bundle_id"?: string;
    "buyer_note"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "canceled_quantity": number;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "decided_by"?: ReturnActor;
    /** RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /**
     * Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    "decline_reason_message"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "declined_quantity": number;
    "description"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "dispositioned_quantity": number;
    /**
     * Whether a return line is eligible under policy, with the eligible quantity, allowed
     * resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /**
     * Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there
     * is no related fulfillment. anyOf[1] (Value): {@link Fulfillment}. Work required to deliver
     * an order's items. anyOf[2] (Value): null.
     */
    "fulfillment"?: ((Fulfillment) | (null));
    "fulfillment_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "handed_off_quantity": number;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "inspected_quantity": number;
    /** RFC3339 timestamp. Format: date-time. */
    "inspection_waived_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "inspection_waived_by"?: ReturnActor;
    /** Value enum: "policy_override", "trusted_in_store_handoff", "merchant_review", "other". */
    "inspection_waiver_reason"?: "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    "inspection_waiver_reason_message"?: string;
    "is_inspection_required"?: boolean;
    "is_policy_overridden": boolean;
    /**
     * Value enum: "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved".
     */
    "merchandise_status": "not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | (string & {});
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    "name": string;
    "order_line_item_id": string;
    /** RFC3339 timestamp. Format: date-time. */
    "overridden_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "overridden_by"?: ReturnActor;
    /**
     * Value enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    "override_reason_message"?: string;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "received_quantity": number;
    "receiving_location_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "rejected_quantity": number;
    /**
     * Committed resolution execution gate, filled for every approved line: after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required, unless the policy or
     * decision sets a timing explicitly. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** Value enum: "not_selected", "pending", "requires_action", "fulfilled", "failed". */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "fulfilled" | "failed" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "resolved_quantity": number;
    "return_id": string;
    "return_line_item_id": string;
    /**
     * Present only when `expand` includes `line_items.return_reason`; `null` when expanded and
     * there is no related return reason. anyOf[1] (Value): {@link ReturnReason}. A reason
     * customers can select when requesting a return. anyOf[2] (Value): null.
     */
    "return_reason"?: ((ReturnReason) | (null));
    /**
     * Handle of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_handle": string;
    /** ID of the reason chosen for this line. */
    "return_reason_id": string;
    /**
     * Name of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it.
     */
    "return_reason_name": string;
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64.
     */
    "return_required_quantity": number;
    /**
     * IDs of the resolutions that include this line, oldest first, including failed and canceled
     * resolutions. [] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /** The value of a return line: unit price, subtotal, discount, tax, and total. */
    "return_value": ReturnLineItemValue;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "review_required_quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "requested", "open", "completed", "declined", "canceled". */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * [] enum: "cancel", "waive_inspection". [] (Value): string. Value enum: "cancel",
     * "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    "variant_id"?: string;
};
/**
 * The pinned policy decision recomputed for based_on_quantity. A decide with only
 * approved_quantity commits these values. Policy automatic resolution selects the policy
 * automatic_resolution_type for policy_default or the line's requested_resolution_type for
 * buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still
 * exists without automatic_resolution_type, so resolution is manual. Manual policy resolution also
 * has no automatic_resolution_type. An unset release_timing is filled with after_inspection when
 * merchandise and inspection are required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required.
 */
export type ReturnLineItemDecisionProposal = {
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * The refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically, using the policy default or buyer request according to the policy selection
     * mode. Absent for manual resolution, including buyer_requested when the line has no
     * requested_resolution_type. Example: "refund". Value enum: "refund", "store_credit",
     * "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "based_on_quantity": number;
    "is_inspection_required": boolean;
    "receiving_location_id"?: string;
    /**
     * The policy timing, or after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when no
     * merchandise is required. This fill never counts as a policy deviation. Applies to every
     * resolution type, including exchanges and replacements. manual is held until a merchant calls
     * POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "return_required_quantity": number;
};
/**
 * Whether a return line is eligible under policy, with the eligible quantity, allowed resolution
 * types, and any policy adjustments.
 */
export type ReturnLineItemEligibility = {
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * The pinned policy decision recomputed for based_on_quantity. A decide with only
     * approved_quantity commits these values. Policy automatic resolution selects the policy
     * automatic_resolution_type for policy_default or the line's requested_resolution_type for
     * buyer_requested. When buyer_requested has no requested_resolution_type, the proposal still
     * exists without automatic_resolution_type, so resolution is manual. Manual policy resolution
     * also has no automatic_resolution_type. An unset release_timing is filled with
     * after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required.
     */
    "decision_proposal"?: ReturnLineItemDecisionProposal;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "eligible_quantity": number;
    /** RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     *  [] (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy
     * proposes for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired",
     * "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed",
     * "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    "reason_message": string;
    "return_policy_id"?: string;
    "return_policy_revision_id"?: string;
    /** Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * An order line item to return, with the quantity, return reason, and optionally a note and the
 * resolution the buyer wants.
 */
export type ReturnLineItemRequest = {
    /** minLength: 1. */
    "buyer_note"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /** minLength: 1. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** minLength: 1. */
    "return_reason_id": string;
};
/**
 * An order line item to return, with the quantity, return reason, and optionally a note and the
 * resolution the buyer wants.
 */
export type ReturnLineItemRequestInput = {
    /** minLength: 1. */
    "buyer_note"?: string;
    /** minLength: 1. */
    "fulfillment_id"?: string;
    /** minLength: 1. */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** minLength: 1. */
    "return_reason_id": string;
};
/** The value of a return line: unit price, subtotal, discount, tax, and total. */
export type ReturnLineItemValue = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "discount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "subtotal_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "total_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
};
export type ReturnPoliciesCreateParams = (InputValue<CreateReturnPolicyRequestInput>);
export type ReturnPoliciesCreateRevisionParams = (InputValue<PublishReturnPolicyRevisionRequestInput>);
export type ReturnPoliciesDeleteParams = {
    /**
     * Optional. The policy's current version. If it changed, the archive fails with 409
     * VERSION_CONFLICT and nothing changes. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type ReturnPoliciesGetParams = {
    /**
     * Supported expansions: current_revision. Expanded relationships are returned only when
     * explicitly requested and authorized. Limits: at most 10 unique expand paths per request.
     * Pass expand=current_revision. [] enum: "current_revision". Value enum: "current_revision".
     * anyOf[1] (Value): Array of string. [] enum: "current_revision". anyOf[1][] (Value): string.
     * Value enum: "current_revision". anyOf[2] (Value): string. Value enum: "current_revision".
     */
    "expand"?: InputValue<("current_revision") | readonly ("current_revision")[]>;
};
export type ReturnPoliciesGetRevisionParams = {};
export type ReturnPoliciesListParams = {
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return policy ID, name, or external reference ID. */
    "query"?: InputValue<string>;
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
    /**
     * Supported expansions: current_revision. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. Pass expand=current_revision. [] enum: "current_revision".
     * Value enum: "current_revision". anyOf[1] (Value): Array of string. [] enum:
     * "current_revision". anyOf[1][] (Value): string. Value enum: "current_revision". anyOf[2]
     * (Value): string. Value enum: "current_revision".
     */
    "expand"?: InputValue<("current_revision") | readonly ("current_revision")[]>;
};
export type ReturnPoliciesListRevisionsParams = {
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
};
export type ReturnPoliciesUpdateParams = (InputValue<UpdateReturnPolicyRequestInput>);
/** Rules governing whether and how purchased items can be returned. */
export type ReturnPolicy = {
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    "current_return_policy_revision_id": string;
    /**
     * Present only when `expand` includes `current_revision`; `null` when expanded and there is no
     * related return policy revision. anyOf[1] (Value): {@link ReturnPolicyRevision}. A saved
     * revision of a return policy. anyOf[2] (Value): null.
     */
    "current_revision"?: ((ReturnPolicyRevision) | (null));
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    "name": string;
    "return_policy_id": string;
    /**
     * active policies apply to new Returns; inactive policies do not. Toggle active and inactive
     * with PATCH status. Retire either with DELETE /v1/return-policies/{return_policy_id}. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. minimum: 0. */
    "version": number;
};
/**
 * A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.
 */
export type ReturnPolicyAdjustmentProposal = {
    /**
     * Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit",
     * "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "based_on_quantity"?: number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "calculated_amount_money"?: MoneyValue;
    /** Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "flat_money"?: MoneyValue;
    /** Format: double. multipleOf: 0.0001. */
    "percent"?: number;
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
};
/**
 * How a return policy evaluated a return request: overall status and reason, the policy revision
 * used, and per-line results.
 */
export type ReturnPolicyEvaluation = {
    /** RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     *  [] (Value): {@link ReturnPolicyEvaluationLineItem}. The policy result for one return line:
     * status, eligible quantity, allowed resolution types, and handling requirements such as
     * inspection.
     */
    "line_items": Array<ReturnPolicyEvaluationLineItem>;
    /**
     * Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired",
     * "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed",
     * "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    "reason_message": string;
    "return_policy_id"?: string;
    "return_policy_revision_id"?: string;
    /** Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * The policy result for one return line: status, eligible quantity, allowed resolution types, and
 * handling requirements such as inspection.
 */
export type ReturnPolicyEvaluationLineItem = {
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components": Array<BundleComponent>;
    "bundle_id"?: string;
    "description"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "eligible_quantity": number;
    /** RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    "fulfillment_id": string;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    "is_inspection_required": boolean;
    "is_merchandise_return_required": boolean;
    /**
     *  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item, with
     * its quantity, price change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    "name": string;
    "order_line_item_id": string;
    /**
     *  [] (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy
     * proposes for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    "product_id"?: string;
    /**
     * Value enum: "eligible_under_policy", "manual_review_required", "return_window_expired",
     * "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed",
     * "policy_conflict", "no_matching_policy".
     */
    "reason": "eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {});
    "receiving_location_id"?: string;
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release.
     * Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection",
     * "manual".
     */
    "release_timing": "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /** Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then
     * reasons with no categories, each group sorted by handle. [] (Value): string.
     */
    "suggested_return_reason_ids": Array<string>;
    "variant_id"?: string;
};
/** A saved revision of a return policy. */
export type ReturnPolicyRevision = {
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** RFC3339 timestamp. Format: date-time. */
    "effective_at"?: string;
    /** Value enum: "eligible", "ineligible", "review_required". */
    "eligibility_result": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    "is_inspection_required"?: boolean;
    "is_merchandise_return_required": boolean;
    /** Format: int32. */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a successful sellable
     * disposition at the receiving location. For tracked merchandise, it also creates an inventory
     * receipt and movement. Untracked merchandise has no inventory effect. If the Return line
     * requires inspection, creation waits for an accepted inspection. manual leaves inventory
     * unchanged until an explicit disposition succeeds. When omitted, the value defaults to
     * automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode": "automatic" | "manual" | (string & {});
    "receiving_location_id"?: string;
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release.
     * Value enum: "after_approval", "after_handoff", "after_receipt", "after_inspection",
     * "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /** A restocking fee in a return policy, charged as a flat amount or a percent. */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    "return_policy_id": string;
    "return_policy_revision_id": string;
    /** Who pays for return shipping in a return policy: the merchant or the buyer. */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * The products, variants, categories, channels, or locations a return policy revision applies
     * to, or all of them.
     */
    "scope": ReturnPolicyScope;
};
/** The `ineligible` variant of `ReturnPolicyRevisionInput`. */
export type ReturnPolicyRevisionInputIneligible = ({
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "ineligible".
     */
    "eligibility_result": "ineligible" | (string & {});
    /**
     * Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    "is_inspection_required"?: boolean;
    "is_merchandise_return_required": boolean;
    /** Format: int32. */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a successful sellable
     * disposition at the receiving location. For tracked merchandise, it also creates an inventory
     * receipt and movement. Untracked merchandise has no inventory effect. If the Return line
     * requires inspection, creation waits for an accepted inspection. manual leaves inventory
     * unchanged until an explicit disposition succeeds. When omitted, the value defaults to
     * automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /** Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /** A restocking fee in a return policy, charged as a flat amount or a percent. */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /** Who pays for return shipping in a return policy: the merchant or the buyer. */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * The products, variants, categories, channels, or locations a return policy revision applies
     * to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & (({
    /** Value enum: "ineligible". */
    "eligibility_result": unknown;
}));
/** The `ineligible` variant of `ReturnPolicyRevisionInput`. */
export type ReturnPolicyRevisionInputIneligibleInput = ({
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /** Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "ineligible".
     */
    "eligibility_result": "ineligible";
    /**
     * Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    "is_inspection_required"?: boolean;
    "is_merchandise_return_required": boolean;
    /** Format: int32. */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a successful sellable
     * disposition at the receiving location. For tracked merchandise, it also creates an inventory
     * receipt and movement. Untracked merchandise has no inventory effect. If the Return line
     * requires inspection, creation waits for an accepted inspection. manual leaves inventory
     * unchanged until an explicit disposition succeeds. When omitted, the value defaults to
     * automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /** Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /** A restocking fee in a return policy, charged as a flat amount or a percent. */
    "restocking_fee"?: ReturnRestockingFeePolicyInput;
    /** Who pays for return shipping in a return policy: the merchant or the buyer. */
    "return_shipping"?: ReturnShippingPolicyInput;
    /**
     * How long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindowInput;
    /**
     * The products, variants, categories, channels, or locations a return policy revision applies
     * to, or all of them.
     */
    "scope": ReturnPolicyScopeInput;
})
    & (({
    /** Value enum: "ineligible". */
    "eligibility_result": "ineligible";
})
    & (({
    "allowed_resolution_types"?: never;
})
    & ({
    "resolution_mode"?: never;
})
    & ({
    "release_timing"?: never;
})
    & ({
    "completion_mode"?: never;
})));
/**
 * The `eligible` variant of `ReturnPolicyRevisionInput`. The `review_required` variant of
 * `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputReturnable = ({
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic" | (string & {});
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "eligible",
     * "review_required".
     */
    "eligibility_result": "eligible" | "review_required" | (string & {});
    /**
     * Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    "is_inspection_required"?: boolean;
    "is_merchandise_return_required": boolean;
    /** Format: int32. */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a successful sellable
     * disposition at the receiving location. For tracked merchandise, it also creates an inventory
     * receipt and movement. Untracked merchandise has no inventory effect. If the Return line
     * requires inspection, creation waits for an accepted inspection. manual leaves inventory
     * unchanged until an explicit disposition succeeds. When omitted, the value defaults to
     * automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Required whenever allowed_resolution_types contains refund or store_credit. For other types,
     * an omitted timing defaults to after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when
     * merchandise is not required. after_handoff and after_receipt require
     * is_merchandise_return_required, and after_inspection also requires is_inspection_required.
     * Applies to every resolution type, including exchanges and replacements. manual is held until
     * a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval",
     * "after_handoff", "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual" | (string & {});
    /** Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /** A restocking fee in a return policy, charged as a flat amount or a percent. */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /** Who pays for return shipping in a return policy: the merchant or the buyer. */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * The products, variants, categories, channels, or locations a return policy revision applies
     * to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & (({
    /** Value enum: "eligible", "review_required". */
    "eligibility_result": unknown;
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /** Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual" | (string & {});
    /** Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic" | (string & {});
})
    & (((({
    /** Value enum: "manual". */
    "resolution_mode"?: unknown;
}))
    | ({
    /** Value enum: "automatic". */
    "resolution_mode"?: unknown;
    /** Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode": "policy_default" | "buyer_requested" | (string & {});
})
    | (Record<string, unknown>)))
    & ((({
    /** Value enum: false. */
    "is_merchandise_return_required"?: unknown;
})
    | ({
    /** Value enum: true. */
    "is_merchandise_return_required"?: unknown;
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1.
     */
    "receiving_location_id": string;
})
    | (Record<string, unknown>))));
/**
 * The `eligible` variant of `ReturnPolicyRevisionInput`. The `review_required` variant of
 * `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputReturnableInput = ({
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /** Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /** Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic";
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "eligible",
     * "review_required".
     */
    "eligibility_result": "eligible" | "review_required";
    /**
     * Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    "is_inspection_required"?: boolean;
    "is_merchandise_return_required": boolean;
    /** Format: int32. */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a successful sellable
     * disposition at the receiving location. For tracked merchandise, it also creates an inventory
     * receipt and movement. Untracked merchandise has no inventory effect. If the Return line
     * requires inspection, creation waits for an accepted inspection. manual leaves inventory
     * unchanged until an explicit disposition succeeds. When omitted, the value defaults to
     * automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Required whenever allowed_resolution_types contains refund or store_credit. For other types,
     * an omitted timing defaults to after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when
     * merchandise is not required. after_handoff and after_receipt require
     * is_merchandise_return_required, and after_inspection also requires is_inspection_required.
     * Applies to every resolution type, including exchanges and replacements. manual is held until
     * a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval",
     * "after_handoff", "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual";
    /** Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /** A restocking fee in a return policy, charged as a flat amount or a percent. */
    "restocking_fee"?: ReturnRestockingFeePolicyInput;
    /** Who pays for return shipping in a return policy: the merchant or the buyer. */
    "return_shipping"?: ReturnShippingPolicyInput;
    /**
     * How long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindowInput;
    /**
     * The products, variants, categories, channels, or locations a return policy revision applies
     * to, or all of them.
     */
    "scope": ReturnPolicyScopeInput;
})
    & (({
    /** Value enum: "eligible", "review_required". */
    "eligibility_result": "eligible" | "review_required";
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /** Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual";
    /** Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic";
})
    & (((({
    /** Value enum: "manual". */
    "resolution_mode"?: "manual";
})
    & (({
    "resolution_selection_mode"?: never;
}) & ({
    "automatic_resolution_type"?: never;
})))
    | ({
    /** Value enum: "automatic". */
    "resolution_mode"?: "automatic";
    /** Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode": "policy_default" | "buyer_requested";
})))
    & ((({
    /** Value enum: false. */
    "is_merchandise_return_required"?: false;
})
    | ({
    /** Value enum: true. */
    "is_merchandise_return_required"?: true;
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1.
     */
    "receiving_location_id": string;
}))));
/**
 * The rules for a return policy revision: scope, eligibility, return window, approval and
 * resolution modes, shipping, and restocking fee.
 */
export type ReturnPolicyRevisionRequest = ({
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "eligible",
     * "ineligible", "review_required".
     */
    "eligibility_result": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    "is_inspection_required"?: boolean;
    "is_merchandise_return_required": boolean;
    /** Format: int32. */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a successful sellable
     * disposition at the receiving location. For tracked merchandise, it also creates an inventory
     * receipt and movement. Untracked merchandise has no inventory effect. If the Return line
     * requires inspection, creation waits for an accepted inspection. manual leaves inventory
     * unchanged until an explicit disposition succeeds. When omitted, the value defaults to
     * automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Required whenever allowed_resolution_types contains refund or store_credit. For other types,
     * an omitted timing defaults to after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when
     * merchandise is not required. after_handoff and after_receipt require
     * is_merchandise_return_required, and after_inspection also requires is_inspection_required.
     * Applies to every resolution type, including exchanges and replacements. manual is held until
     * a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval",
     * "after_handoff", "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /** A restocking fee in a return policy, charged as a flat amount or a percent. */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /** Who pays for return shipping in a return policy: the merchant or the buyer. */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * The products, variants, categories, channels, or locations a return policy revision applies
     * to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & ((Exclude<ReturnPolicyRevisionInputIneligible & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyRevisionInputReturnable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The rules for a return policy revision: scope, eligibility, return window, approval and
 * resolution modes, shipping, and restocking fee.
 */
export type ReturnPolicyRevisionRequestInput = ({
    /**
     * [] enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". []
     * (Value): string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /** Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /** Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "eligible",
     * "ineligible", "review_required".
     */
    "eligibility_result": "eligible" | "ineligible" | "review_required";
    /**
     * Value enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    "is_inspection_required"?: boolean;
    "is_merchandise_return_required": boolean;
    /** Format: int32. */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a successful sellable
     * disposition at the receiving location. For tracked merchandise, it also creates an inventory
     * receipt and movement. Untracked merchandise has no inventory effect. If the Return line
     * requires inspection, creation waits for an accepted inspection. manual leaves inventory
     * unchanged until an explicit disposition succeeds. When omitted, the value defaults to
     * automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Required whenever allowed_resolution_types contains refund or store_credit. For other types,
     * an omitted timing defaults to after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when
     * merchandise is not required. after_handoff and after_receipt require
     * is_merchandise_return_required, and after_inspection also requires is_inspection_required.
     * Applies to every resolution type, including exchanges and replacements. manual is held until
     * a merchant calls POST /v1/return-resolutions/{id}/release. Value enum: "after_approval",
     * "after_handoff", "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual";
    /** Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /** A restocking fee in a return policy, charged as a flat amount or a percent. */
    "restocking_fee"?: ReturnRestockingFeePolicyInput;
    /** Who pays for return shipping in a return policy: the merchant or the buyer. */
    "return_shipping"?: ReturnShippingPolicyInput;
    /**
     * How long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindowInput;
    /**
     * The products, variants, categories, channels, or locations a return policy revision applies
     * to, or all of them.
     */
    "scope": ReturnPolicyScopeInput;
})
    & ((Exclude<ReturnPolicyRevisionInputIneligibleInput & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyRevisionInputReturnableInput & object, readonly unknown[]>));
/**
 * The products, variants, categories, channels, or locations a return policy revision applies to,
 * or all of them.
 */
export type ReturnPolicyScope = ({
    /**  [] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all", "include".
     */
    "match_type": "all" | "include" | (string & {});
    /**  [] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<ReturnPolicyScopeAll & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyScopeInclude & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `all` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeAll = ({
    /**  [] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all".
     */
    "match_type": "all" | (string & {});
    /**  [] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & ({
    /** maxItems: 0. */
    "category_handles"?: unknown;
    /** maxItems: 0. */
    "channel_types"?: unknown;
    /** maxItems: 0. */
    "location_ids"?: unknown;
    /** Value enum: "all". */
    "match_type": unknown;
    /** maxItems: 0. */
    "product_ids"?: unknown;
    /** maxItems: 0. */
    "variant_ids"?: unknown;
});
/** The `all` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeAllInput = ({
    /**  [] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all".
     */
    "match_type": "all";
    /**  [] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & ({
    /** maxItems: 0. */
    "category_handles"?: unknown;
    /** maxItems: 0. */
    "channel_types"?: unknown;
    /** maxItems: 0. */
    "location_ids"?: unknown;
    /** Value enum: "all". */
    "match_type": "all";
    /** maxItems: 0. */
    "product_ids"?: unknown;
    /** maxItems: 0. */
    "variant_ids"?: unknown;
});
/** The `include` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeInclude = ({
    /**  [] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "include".
     */
    "match_type": "include" | (string & {});
    /**  [] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "include". */
    "match_type": unknown;
})
    & (({
    /** minItems: 1. */
    "product_ids": unknown;
})
    | ({
    /** minItems: 1. */
    "variant_ids": unknown;
})
    | ({
    /** minItems: 1. */
    "category_handles": unknown;
})
    | ({
    /** minItems: 1. */
    "location_ids": unknown;
})
    | ({
    /** minItems: 1. */
    "channel_types": unknown;
})
    | (Record<string, unknown>)));
/** The `include` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeIncludeInput = ({
    /**  [] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "include".
     */
    "match_type": "include";
    /**  [] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Value enum: "include". */
    "match_type": "include";
})
    & (({
    /** minItems: 1. */
    "product_ids": unknown;
})
    | ({
    /** minItems: 1. */
    "variant_ids": unknown;
})
    | ({
    /** minItems: 1. */
    "category_handles": unknown;
})
    | ({
    /** minItems: 1. */
    "location_ids": unknown;
})
    | ({
    /** minItems: 1. */
    "channel_types": unknown;
})));
/**
 * The products, variants, categories, channels, or locations a return policy revision applies to,
 * or all of them.
 */
export type ReturnPolicyScopeInput = ({
    /**  [] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all", "include".
     */
    "match_type": "all" | "include";
    /**  [] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /**  [] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<ReturnPolicyScopeAllInput & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyScopeIncludeInput & object, readonly unknown[]>));
export type ReturnPreviewsCreateParams = (CreateReturnPreviewRequestInput);
/**
 * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
 * policy evaluation and the proposal can be built. Otherwise start with return_required_quantity
 * equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement,
 * no_monetary_action, and store_credit in that order regardless of whether the original payment is
 * refundable, no automatic_resolution_type, is_inspection_required false, and no
 * receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types
 * replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null
 * to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise
 * is required and inspection is required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required. Validate the merged decision for
 * quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A
 * pinned policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
 */
export type ReturnProcessDecision = ({
    /**
     * Optional replacement for the entire starting list. Defaults to the buildable pinned policy
     * proposal; otherwise refund, exchange, replacement, no_monetary_action, and store_credit in
     * that order, independent of the original payment's refundability. The resulting list must be
     * valid and non-empty when approved_quantity is above zero. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Required whole-number quantity from zero through the line's requested_quantity; fractional
     * quantities are not supported. When approved_quantity is below requested_quantity, send
     * decline_reason; decline_reason_message is optional. Both decline fields are forbidden when
     * all requested quantity is approved. Format: int64. minimum: 0.
     */
    "approved_quantity": number;
    /**
     * Optional refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically. Omit to keep the policy proposal's value, or the absent value from no-policy
     * defaults. Send null to resolve the line manually; clearing a policy proposal's automatic
     * value requires override_reason. Must be in the resulting allowed_resolution_types. Exchange
     * and replacement cannot be automated. An unavailable automatic refund or store credit fails
     * with 409 ACTION_NOT_ALLOWED and reason refund_unavailable or store_credit_unavailable. Value
     * enum: "refund", "store_credit", "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null | (string & {}) | null;
    /**
     * Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Optional explanation accompanying decline_reason, up to 2048 characters (Unicode code
     * points), counted before normalization. Requires decline_reason and is forbidden when all
     * requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Optional inspection requirement. Defaults to the buildable pinned policy proposal or false
     * when no proposal can be built. The resulting requirement must be reachable with the merged
     * merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Optional explanation accompanying override_reason. Requires override_reason and is forbidden
     * without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Optional receiving Location with a postal address. Defaults to the buildable pinned policy
     * proposal or no location when no proposal can be built. Required when the resulting
     * return_required_quantity is above zero and there is no starting location. A process receipt
     * does not supply the decision's location. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Optional gate for every resolution type. Defaults to the policy proposal's timing when set.
     * After merging supplied fields, an unset timing becomes after_inspection when
     * return_required_quantity is above zero and inspection is required, after_receipt when
     * return_required_quantity is above zero without inspection, or after_approval when
     * return_required_quantity is zero. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: number;
})
    & (((unknown)
    | ({
    /**
     * Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other".
     */
    "decline_reason": "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
})
    | (Record<string, unknown>)))
    & (((unknown)
    | ({
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason": "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
})
    | (Record<string, unknown>)));
/**
 * Start from the pinned policy proposal recomputed for approved_quantity when the line has a
 * policy evaluation and the proposal can be built. Otherwise start with return_required_quantity
 * equal to approved_quantity, allowed_resolution_types containing refund, exchange, replacement,
 * no_monetary_action, and store_credit in that order regardless of whether the original payment is
 * refundable, no automatic_resolution_type, is_inspection_required false, and no
 * receiving_location_id. Each supplied field replaces its starting value; allowed_resolution_types
 * replaces the whole list. Omit automatic_resolution_type to keep its starting value, or send null
 * to resolve manually. Then fill an omitted release_timing with after_inspection when merchandise
 * is required and inspection is required, after_receipt when merchandise is required without
 * inspection, or after_approval when no merchandise is required. Validate the merged decision for
 * quantity bounds, allowed resolution types, and reachable timing and inspection requirements. A
 * pinned policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
 */
export type ReturnProcessDecisionInput = ({
    /**
     * Optional replacement for the entire starting list. Defaults to the buildable pinned policy
     * proposal; otherwise refund, exchange, replacement, no_monetary_action, and store_credit in
     * that order, independent of the original payment's refundability. The resulting list must be
     * valid and non-empty when approved_quantity is above zero. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Required whole-number quantity from zero through the line's requested_quantity; fractional
     * quantities are not supported. When approved_quantity is below requested_quantity, send
     * decline_reason; decline_reason_message is optional. Both decline fields are forbidden when
     * all requested quantity is approved. Format: int64. minimum: 0.
     */
    "approved_quantity": number;
    /**
     * Optional refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically. Omit to keep the policy proposal's value, or the absent value from no-policy
     * defaults. Send null to resolve the line manually; clearing a policy proposal's automatic
     * value requires override_reason. Must be in the resulting allowed_resolution_types. Exchange
     * and replacement cannot be automated. An unavailable automatic refund or store credit fails
     * with 409 ACTION_NOT_ALLOWED and reason refund_unavailable or store_credit_unavailable. Value
     * enum: "refund", "store_credit", "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null;
    /**
     * Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
    /**
     * Optional explanation accompanying decline_reason, up to 2048 characters (Unicode code
     * points), counted before normalization. Requires decline_reason and is forbidden when all
     * requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Optional inspection requirement. Defaults to the buildable pinned policy proposal or false
     * when no proposal can be built. The resulting requirement must be reachable with the merged
     * merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
    /**
     * Optional explanation accompanying override_reason. Requires override_reason and is forbidden
     * without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Optional receiving Location with a postal address. Defaults to the buildable pinned policy
     * proposal or no location when no proposal can be built. Required when the resulting
     * return_required_quantity is above zero and there is no starting location. A process receipt
     * does not supply the decision's location. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Optional gate for every resolution type. Defaults to the policy proposal's timing when set.
     * After merging supplied fields, an unset timing becomes after_inspection when
     * return_required_quantity is above zero and inspection is required, after_receipt when
     * return_required_quantity is above zero without inspection, or after_approval when
     * return_required_quantity is zero. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: number;
})
    & (((({
    "decline_reason_message"?: never;
}))
    | ({
    /**
     * Value enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other".
     */
    "decline_reason": "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
})))
    & (((({
    "override_reason_message"?: never;
}))
    | ({
    /**
     * Required when a decision differs from a buildable pinned policy proposal. With a pinned
     * policy, also required whenever approved_quantity exceeds evaluated eligible_quantity, even
     * when no proposal can be built. The release timing fill also applies to the proposal and does
     * not count as a deviation. Otherwise optional when a pinned policy proposal cannot be built
     * or no deviation exists. Forbidden without a pinned policy. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason": "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
})));
/**
 * What was done with a returned item, such as restocked as sellable or sent for repair, supplied
 * when processing an existing return.
 */
export type ReturnProcessDispositionRequest = {
    /**
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "inventory_location_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string;
    /**
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
};
/**
 * What was done with a returned item, such as restocked as sellable or sent for repair, supplied
 * when processing an existing return.
 */
export type ReturnProcessDispositionRequestInput = {
    /**
     * Value enum: "sellable", "quality_control", "damaged", "quarantined", "repair", "refurbish",
     * "liquidate", "donate", "discard", "return_to_buyer", "lost".
     */
    "disposition_type": "sellable"
        | "quality_control"
        | "damaged"
        | "quarantined"
        | "repair"
        | "refurbish"
        | "liquidate"
        | "donate"
        | "discard"
        | "return_to_buyer"
        | "lost";
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /** minLength: 1. */
    "inventory_location_id"?: string;
    /**
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string | globalThis.Date;
    /**
     * Value enum: "inspection_result", "return_policy", "warehouse_override",
     * "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** minLength: 1. */
    "reason_message"?: string;
};
/** An inspection result for a returned item, supplied when processing an existing return. */
export type ReturnProcessInspectionRequest = {
    /** Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new"
        | "unopened"
        | "opened"
        | "used"
        | "damaged"
        | "defective"
        | "incomplete"
        | "undetermined"
        | (string & {});
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used",
     * "missing_parts", "empty_package", "counterfeit_suspected", "other". [] (Value): string.
     * Value enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used",
     * "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other"
        | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "inspected_at": string;
    /** minLength: 1. */
    "internal_note"?: string;
};
/** An inspection result for a returned item, supplied when processing an existing return. */
export type ReturnProcessInspectionRequestInput = {
    /** Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required";
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new" | "unopened" | "opened" | "used" | "damaged" | "defective" | "incomplete" | "undetermined";
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * [] enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used",
     * "missing_parts", "empty_package", "counterfeit_suspected", "other". [] (Value): string.
     * Value enum: "matches_expected_item", "wrong_item", "damaged", "defective", "used",
     * "missing_parts", "empty_package", "counterfeit_suspected", "other".
     */
    "finding_codes"?: Array<"matches_expected_item"
        | "wrong_item"
        | "damaged"
        | "defective"
        | "used"
        | "missing_parts"
        | "empty_package"
        | "counterfeit_suspected"
        | "other">;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. */
    "inspected_at": string | globalThis.Date;
    /** minLength: 1. */
    "internal_note"?: string;
};
/**
 * The receipt of returned merchandise, with when and where it was received, supplied when
 * processing an existing return.
 */
export type ReturnProcessReceiptRequest = {
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     */
    "received_at": string;
    /** minLength: 1. */
    "receiving_location_id": string;
    /**
     * The system a return event came from, such as a point of sale or warehouse system, with its
     * own identifier.
     */
    "source_system"?: ReturnSourceSystemRequest;
};
/**
 * The receipt of returned merchandise, with when and where it was received, supplied when
 * processing an existing return.
 */
export type ReturnProcessReceiptRequestInput = {
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
     */
    "external_reference_id"?: string;
    /**
     * When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     */
    "received_at": string | globalThis.Date;
    /** minLength: 1. */
    "receiving_location_id": string;
    /**
     * The system a return event came from, such as a point of sale or warehouse system, with its
     * own identifier.
     */
    "source_system"?: ReturnSourceSystemRequestInput;
};
/**
 * The resolution to apply to a returned item, such as refund or exchange, with the quantity and
 * any replacement items.
 */
export type ReturnProcessResolutionRequest = ({
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     *  [] (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a
     * return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
});
/**
 * The resolution to apply to a returned item, such as refund or exchange, with the quantity and
 * any replacement items.
 */
export type ReturnProcessResolutionRequestInput = ({
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255.
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
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     *  [] (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in
     * a return resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /** Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
});
/**
 * The return is the primary resource and expected_version target; the other resources report the
 * processing effects.
 */
export type ReturnProcessResult = {
    /** A request to send purchased items back. */
    "return": ReturnResource;
    /**
     *  [] (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled.
     */
    "return_dispositions": Array<ReturnDisposition>;
    /**  [] (Value): {@link ReturnInspection}. An assessment of the condition of returned items. */
    "return_inspections": Array<ReturnInspection>;
    /**  [] (Value): {@link ReturnReceipt}. A record of returned items arriving at a location. */
    "return_receipts": Array<ReturnReceipt>;
    /**
     *  [] (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "return_resolutions": Array<ReturnResolution>;
};
/** A reason customers can select when requesting a return. */
export type ReturnReason = {
    /**
     * Catalog category handles this reason applies to. A reason with categories is suggested, and
     * accepted from a customer session, only for order lines whose product is in one of them. A
     * reason with no categories applies to every line. Not product types or tags: use handles from
     * GET /v1/categories. [] (Value): string.
     */
    "category_handles": Array<string>;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Longer explanation of when to use the reason. */
    "description"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed
     * handles. Can't be changed after create, and an archived reason keeps its handle reserved.
     * minLength: 1. maxLength: 100. pattern: ^[a-z][a-z0-9_]{0,99}$.
     */
    "handle": string;
    /** Whether a Return line with this reason needs a buyer_note. */
    "is_note_required": boolean;
    /** Name buyers and staff see. */
    "name": string;
    /** Flint's ID for the reason. Send it as return_reason_id on a Return line. */
    "return_reason_id": string;
    /** Value enum: "flint", "merchant". */
    "source": "flint" | "merchant" | (string & {});
    /**
     * Whether the reason is offered. An active reason is offered and accepted on new Return lines.
     * An inactive reason is not offered or accepted until you set it back to active. An archived
     * reason is retired for good and stays readable on Returns that recorded it. Archive a
     * merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be
     * deleted, but you can set them inactive. Value enum: "active", "archived", "inactive".
     */
    "status": "active" | "archived" | "inactive" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Increases whenever the reason changes. Send it as expected_version to update or archive the
     * reason only if it hasn't changed since you read it. Format: int64. minimum: 1.
     */
    "version": number;
};
/**
 * A return reason a buyer can pick for a line, with its `handle` and whether a note is required.
 */
export type ReturnReasonSummary = {
    "handle": string;
    "is_note_required": boolean;
    "name": string;
    "return_reason_id": string;
};
export type ReturnReasonsCreateParams = (InputValue<CreateReturnReasonRequestInput>);
export type ReturnReasonsDeleteParams = {
    /**
     * Optional. The reason's current version. If it changed, the archive fails with 409
     * VERSION_CONFLICT and nothing changes. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<number>;
};
export type ReturnReasonsGetParams = {};
export type ReturnReasonsListParams = {
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /** Exact, case-sensitive match on the reason's handle, for Flint and merchant reasons. */
    "handle"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque next_page_token from the previous response. Omit on the first request. You may change
     * `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request
     * context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns
     * a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return reason ID, handle, name, description, or external reference ID. */
    "query"?: InputValue<string>;
    /**
     * Filter by source. Accepts repeated keys, comma-separated values, or mixtures. Values are
     * trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values
     * within this filter are ORed; separate filters are ANDed. [] enum: "flint", "merchant". Value
     * enum: "flint", "merchant". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "flint",
     * "merchant". anyOf[1][] (Value): string. Value enum: "flint", "merchant". anyOf[2] (Value):
     * string. Value enum: "flint", "merchant".
     */
    "source"?: InputValue<("flint" | "merchant") | readonly ("flint" | "merchant")[]>;
    /**
     * Filter by status. Repeat the parameter or send comma-separated values to match any of
     * several. Omitted, the list leaves out archived rows; name archived to include them. Accepts
     * repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "active", "archived", "inactive". Value enum: "active",
     * "archived", "inactive". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active",
     * "archived", "inactive". anyOf[1][] (Value): string. Value enum: "active", "archived",
     * "inactive". anyOf[2] (Value): string. Value enum: "active", "archived", "inactive".
     */
    "status"?: InputValue<("active" | "archived" | "inactive") | readonly ("active" | "archived" | "inactive")[]>;
};
export type ReturnReasonsUpdateParams = (InputValue<UpdateReturnReasonRequestInput>);
/** A record of returned items arriving at a location. */
export type ReturnReceipt = {
    /**
     * Value enum: "entry_error", "duplicate_observation", "source_correction",
     * "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    "correction_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255.
     */
    "external_actor_id"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     *  [] (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled.
     */
    "generated_dispositions": Array<ReturnDisposition>;
    /**  [] (Value): {@link ReturnReceiptLineItem}. A returned item recorded as received. */
    "line_items": Array<ReturnReceiptLineItem>;
    /** RFC3339 timestamp. Format: date-time. */
    "received_at": string;
    "receiving_location_id": string;
    "return_id": string;
    "return_receipt_id": string;
    "shipment_id"?: string;
    /**
     *  anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from, such as
     * a point of sale or warehouse system, with its own identifier. anyOf[2] (Value): null.
     */
    "source_system": ((ReturnSourceSystem) | (null));
    /** Value enum: "current", "superseded". */
    "status": "current" | "superseded" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "superseded_at"?: string;
    "superseded_by_return_receipt_id"?: string;
    "supersedes_return_receipt_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. minimum: 1. */
    "version": number;
};
export type ReturnReceiptCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.created";
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
    "event_type": "return_receipt.created";
});
/**
 * The `return_receipt.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ReturnReceiptCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnReceipt}. A record of returned items arriving at a
     * location.
     */
    "data"?: {
        /** A record of returned items arriving at a location. */
        "object": ReturnReceipt;
    };
    /** Value enum: "return_receipt.created". */
    "event_type"?: "return_receipt.created";
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

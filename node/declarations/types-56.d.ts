import type { InputValue } from '../runtime.js';
import type { CreateReturnPreviewRequestInput, CreateReturnReasonRequestInput } from './types-12.js';
import type { MetadataMap, MerchantWebhookEnvelope } from './types-37.js';
import type { MetadataRequestInput, MoneyValue, MoneyValueInput } from './types-38.js';
import type {
    ReturnSourceSystemRequest,
    ReturnSourceSystemRequestInput,
    ReturnResource,
    ReturnSourceSystem,
    ReturnUnverifiedItem,
    ReturnUnverifiedItemInput,
    ReturnResolutionExecutionBlocker,
    ReturnResolutionLineItem
} from './types-57.js';
import type { ReturnDisposition, ReturnActor, ReturnCompletionBlocker } from './types-54.js';
import type {
    ReturnInspection,
    ReturnFinancialSummary,
    ReturnHandoffRequirement,
    ReturnLineItem,
    ReturnPolicyEvaluation
} from './types-55.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { UpdateReturnReasonRequestInput } from './types-67.js';
import type { PartnerWebhookEnvelope } from './types-44.js';
import type { VerifyReturnReceiptLineItemRequestInput } from './types-68.js';
import type { BuyerAction } from './types-1.js';
import type {
    ExpandedCustomerSummary,
    ExpandedOrderSummary,
    ExpandedShipmentSummary,
    ExpandedPaymentIntentSummary
} from './types-24.js';
import type { LineItemFulfillmentRequest, LineItemFulfillmentRequestModelInput } from './types-35.js';
import type { Refund } from './types-52.js';
export type ReturnPreviewsCreateParams = (CreateReturnPreviewRequestInput)
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
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
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
     * does not supply the decision's location. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
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
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
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
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
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
     * does not supply the decision's location. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
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
     * Why the line's declined quantity is declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other".
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
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
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
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/**
 * What was done with a returned item, such as restocked as sellable or sent for repair, supplied
 * when processing an existing return.
 */
export type ReturnProcessDispositionRequestInput = {
    /**
     * What happens to the received units. Value enum: "sellable", "quality_control", "damaged",
     * "quarantined", "repair", "refurbish", "liquidate", "donate", "discard", "return_to_buyer",
     * "lost".
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
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * ID of the Location whose stock the disposition changes. Required for `sellable`,
     * `quality_control`, `damaged`, `quarantined`, and `lost`; rejected for the other types.
     * minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "inventory_location_id"?: string;
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "occurred_at": string | globalThis.Date;
    /**
     * Why the disposition was made. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** An inspection result for a returned item, supplied when processing an existing return. */
export type ReturnProcessInspectionRequest = {
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected", "review_required".
     */
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
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other". [] (Value): string. Value enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other".
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "inspected_at": string;
    /** Note for your own team about this line. minLength: 1. */
    "internal_note"?: string;
};
/** An inspection result for a returned item, supplied when processing an existing return. */
export type ReturnProcessInspectionRequestInput = {
    /**
     * Whether the inspected units were accepted, rejected, or need a merchant's decision. Value
     * enum: "accepted", "rejected", "review_required".
     */
    "acceptance_status": "accepted" | "rejected" | "review_required";
    /**
     * `undetermined`: The item's condition could not be assessed. Value enum: "new", "unopened",
     * "opened", "used", "damaged", "defective", "incomplete", "undetermined".
     */
    "condition": "new" | "unopened" | "opened" | "used" | "damaged" | "defective" | "incomplete" | "undetermined";
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * What the inspection found. Up to 50 values, none repeated. [] enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other". [] (Value): string. Value enum: "matches_expected_item",
     * "wrong_item", "damaged", "defective", "used", "missing_parts", "empty_package",
     * "counterfeit_suspected", "other".
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
    /** RFC3339 timestamp. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". */
    "inspected_at": string | globalThis.Date;
    /** Note for your own team about this line. minLength: 1. */
    "internal_note"?: string;
};
/**
 * The receipt of returned merchandise, with when and where it was received, supplied when
 * processing an existing return.
 */
export type ReturnProcessReceiptRequest = {
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
     * System that recorded the observation. `null` when no source system was recorded. The system
     * a return event came from, such as a point of sale or warehouse system, with its own
     * identifier.
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
     * minLength: 1. maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
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
     * System that recorded the observation. `null` when no source system was recorded. The system
     * a return event came from, such as a point of sale or warehouse system, with its own
     * identifier.
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
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
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
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
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
});
/**
 * The resolution to apply to a returned item, such as refund or exchange, with the quantity and
 * any replacement items.
 */
export type ReturnProcessResolutionRequestInput = ({
    /**
     * Caller-owned identifier for this resource in an external system. minLength: 1. maxLength:
     * 255. Example: "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /**
     * Caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50.
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
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
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
});
/**
 * The return is the primary resource and expected_version target; the other resources report the
 * processing effects.
 */
export type ReturnProcessResult = {
    /** The Return after this request's changes. A request to send purchased items back. */
    "return": ReturnResource;
    /**
     * Dispositions this request recorded, including any Flint created automatically. [] (Value):
     * {@link ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "return_dispositions": Array<ReturnDisposition>;
    /**
     * Inspections this request recorded. [] (Value): {@link ReturnInspection}. An assessment of
     * the condition of returned items.
     */
    "return_inspections": Array<ReturnInspection>;
    /**
     * Receipts this request recorded. [] (Value): {@link ReturnReceipt}. A record of returned
     * items arriving at a location.
     */
    "return_receipts": Array<ReturnReceipt>;
    /**
     * Resolutions this request created and confirmed. [] (Value): {@link ReturnResolution}. The
     * refund, exchange, or other outcome of a return.
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
    /**
     * When the reason was created. Built-in Flint reasons use their release time,
     * 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same
     * release time if unchanged. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /** Longer explanation of when to use the reason. */
    "description"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
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
    /**
     * Flint's ID for the reason. Send it as return_reason_id on a Return line. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id": string;
    /** Whether Flint provides the reason or you created it. Value enum: "flint", "merchant". */
    "source": "flint" | "merchant" | (string & {});
    /**
     * Whether the reason is offered. An active reason is offered and accepted on new Return lines.
     * An inactive reason is not offered or accepted until you set it back to active. An archived
     * reason is retired for good and stays readable on Returns that recorded it. Archive a
     * merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be
     * deleted, but you can set them inactive. Value enum: "active", "archived", "inactive".
     */
    "status": "active" | "archived" | "inactive" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
    /** Handle of the reason. */
    "handle": string;
    /** Whether a line that uses this reason needs a `buyer_note`. */
    "is_note_required": boolean;
    /** Name of the reason. */
    "name": string;
    /** ID of the reason. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". */
    "return_reason_id": string;
};
export type ReturnReasonsCreateParams = (InputValue<CreateReturnReasonRequestInput>)
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
export type ReturnReasonsDeleteParams = {
    /**
     * Optional. The reason's current version. If it changed, the archive fails with 409
     * VERSION_CONFLICT and nothing changes. Format: int64. minimum: 1. maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
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
export type ReturnReasonsGetParams = DisputesAcceptParams;
export type ReturnReasonsListParams = {
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
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
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return reason ID, handle, name, description, or external reference ID. */
    "query"?: InputValue<string>;
    /**
     * Filter by source. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "flint", "merchant". Value enum: "flint", "merchant". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "flint", "merchant". anyOf[1][] (Value): string. Value enum:
     * "flint", "merchant". anyOf[2] (Value): string. Value enum: "flint", "merchant".
     */
    "source"?: InputValue<("flint" | "merchant") | readonly ("flint" | "merchant")[]>;
    /**
     * Filter by status. Omitted, the list leaves out archived rows; name archived to include them.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active",
     * "archived", "inactive". Value enum: "active", "archived", "inactive". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "active", "archived", "inactive". anyOf[1][] (Value):
     * string. Value enum: "active", "archived", "inactive". anyOf[2] (Value): string. Value enum:
     * "active", "archived", "inactive".
     */
    "status"?: InputValue<("active" | "archived" | "inactive") | readonly ("active" | "archived" | "inactive")[]>;
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
export type ReturnReasonsUpdateParams = (InputValue<UpdateReturnReasonRequestInput>)
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
/** A record of returned items arriving at a location. */
export type ReturnReceipt = {
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
    /** Detail about `correction_reason`. */
    "correction_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Your identifier for the actor who recorded the event. Don't put secrets in this field.
     * maxLength: 255. Example: "warehouse-1842".
     */
    "external_actor_id"?: string;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. [] (Value): {@link ReturnDisposition}. A decision
     * about how returned merchandise will be handled.
     */
    "generated_dispositions": Array<ReturnDisposition>;
    /**
     * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item recorded as
     * received.
     */
    "line_items": Array<ReturnReceiptLineItem>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "received_at": string;
    /** ID of the Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "receiving_location_id": string;
    /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return receipt, prefixed `retrc_`. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "return_receipt_id": string;
    /**
     * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied to a
     * shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: string;
    /**
     * System that recorded the observation. `null` when no source system was recorded. anyOf[1]
     * (Value): {@link ReturnSourceSystem}. The system a return event came from, such as a point of
     * sale or warehouse system, with its own identifier. anyOf[2] (Value): null.
     */
    "source_system": ((ReturnSourceSystem) | (null));
    /**
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded".
     */
    "status": "current" | "superseded" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "superseded_at"?: string;
    /**
     * ID of the receipt that corrected this one. Absent while it is current. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     */
    "superseded_by_return_receipt_id"?: string;
    /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
    "supersedes_return_receipt_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 1.
     */
    "version": number;
};
export type ReturnReceiptCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "line_items": Array<ReturnReceiptLineItem>;
            "received_at": string;
            "receiving_location_id": string;
            "return_id": string;
            "return_receipt_id": string;
            "shipment_id"?: string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_receipt_id"?: string;
            "supersedes_return_receipt_id"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_receipt.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "line_items": Array<ReturnReceiptLineItem>;
            "received_at": string;
            "receiving_location_id": string;
            "return_id": string;
            "return_receipt_id": string;
            "shipment_id"?: string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_receipt_id"?: string;
            "supersedes_return_receipt_id"?: string;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_receipt.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
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
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines recorded.
     * object.line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded as
     * received. object.received_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.receiving_location_id (Required): string. ID of the
     * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.return_id (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_receipt_id (Required): string. Unique
     * identifier for this return receipt, prefixed `retrc_`. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id (Optional): string. ID of the return
     * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system (Required): {@link
     * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
     * system was recorded. object.source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
     * system a return event came from, such as a point of sale or warehouse system, with its own
     * identifier. object.source_system.anyOf[2] (Value): null. object.status (Required): string.
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded". object.superseded_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.superseded_by_return_receipt_id
     * (Optional): string. ID of the receipt that corrected this one. Absent while it is current.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.supersedes_return_receipt_id (Optional):
     * string. ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
         * recorded. line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded
         * as received. received_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". receiving_location_id (Required): string. ID of the
         * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_receipt_id (Required): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". shipment_id (Optional): string. ID of the return
         * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". source_system (Required): {@link
         * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
         * system was recorded. source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
         * system a return event came from, such as a point of sale or warehouse system, with its
         * own identifier. source_system.anyOf[2] (Value): null. status (Required): string. Whether
         * this is the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". superseded_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_by_return_receipt_id (Optional):
         * string. ID of the receipt that corrected this one. Absent while it is current. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". supersedes_return_receipt_id (Optional): string. ID
         * of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /**
             * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item
             * recorded as received.
             */
            "line_items": Array<ReturnReceiptLineItem>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at": string;
            /**
             * ID of the Location that received the goods. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "receiving_location_id": string;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string;
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the receipt that corrected this one. Absent while it is current. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "superseded_by_return_receipt_id"?: string;
            /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "supersedes_return_receipt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_receipt.created". */
    "event_type"?: "return_receipt.created";
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
 * The `return_receipt.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnReceiptCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines recorded.
     * object.line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded as
     * received. object.received_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.receiving_location_id (Required): string. ID of the
     * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.return_id (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_receipt_id (Required): string. Unique
     * identifier for this return receipt, prefixed `retrc_`. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id (Optional): string. ID of the return
     * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system (Required): {@link
     * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
     * system was recorded. object.source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
     * system a return event came from, such as a point of sale or warehouse system, with its own
     * identifier. object.source_system.anyOf[2] (Value): null. object.status (Required): string.
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded". object.superseded_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.superseded_by_return_receipt_id
     * (Optional): string. ID of the receipt that corrected this one. Absent while it is current.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.supersedes_return_receipt_id (Optional):
     * string. ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
         * recorded. line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded
         * as received. received_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". receiving_location_id (Required): string. ID of the
         * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_receipt_id (Required): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". shipment_id (Optional): string. ID of the return
         * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". source_system (Required): {@link
         * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
         * system was recorded. source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
         * system a return event came from, such as a point of sale or warehouse system, with its
         * own identifier. source_system.anyOf[2] (Value): null. status (Required): string. Whether
         * this is the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". superseded_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_by_return_receipt_id (Optional):
         * string. ID of the receipt that corrected this one. Absent while it is current. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". supersedes_return_receipt_id (Optional): string. ID
         * of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /**
             * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item
             * recorded as received.
             */
            "line_items": Array<ReturnReceiptLineItem>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at": string;
            /**
             * ID of the Location that received the goods. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "receiving_location_id": string;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string;
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the receipt that corrected this one. Absent while it is current. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "superseded_by_return_receipt_id"?: string;
            /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "supersedes_return_receipt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_receipt.created". */
    "event_type"?: "return_receipt.created";
});
/** A returned item recorded as received. */
export type ReturnReceiptLineItem = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "available_disposition_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * ID of the Return line the units were matched to. Absent for unverified units. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /** ID of the receipt the line belongs to. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
    "return_receipt_id": string;
    /**
     * Unique identifier for this return receipt line item, prefixed `retrcli_`. Example:
     * "retrcli_01KEZF7C00BCEA2ZKN4H8WYWXE".
     */
    "return_receipt_line_item_id": string;
    /** [] enum: "verify". [] (Value): string.  Value enum: "verify". */
    "supported_actions": Array<"verify" | (string & {})>;
    /**
     * What the operator recorded for units that match no line. Present on `unverified` lines.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
    /**
     * Why the units were verified against the line. Value enum: "order_match_confirmed",
     * "sku_match_confirmed", "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Detail about `verification_reason`. */
    "verification_reason_message"?: string;
    /** Whether the units are matched to a line. Value enum: "matched", "unverified", "excess". */
    "verification_status": "matched" | "unverified" | "excess" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "verified_at"?: string;
    /**
     * Who verified the line. Who performed a return action: a buyer, merchant, integration, or the
     * system, with an optional ID.
     */
    "verified_by"?: ReturnActor;
};
/** The `excess` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputExcess = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "excess".
     */
    "type": "excess" | (string & {});
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
})
    & (({
    /** Value enum: "excess". */
    "type": unknown;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
}));
/** The `excess` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputExcessInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "excess".
     */
    "type": "excess";
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItemInput;
})
    & (({
    /** Value enum: "excess". */
    "type": "excess";
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
})
    & ({
    "unverified_item"?: never;
}));
/** The `matched` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputMatched = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "matched".
     */
    "type": "matched" | (string & {});
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
})
    & (({
    /** Value enum: "matched". */
    "type": unknown;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
}));
/** The `matched` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputMatchedInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "matched".
     */
    "type": "matched";
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItemInput;
})
    & (({
    /** Value enum: "matched". */
    "type": "matched";
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id": string;
})
    & ({
    "unverified_item"?: never;
}));
/** The `unverified` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputUnverified = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "unverified".
     */
    "type": "unverified" | (string & {});
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item": ReturnUnverifiedItem;
})
    & (({
    /** Value enum: "unverified". */
    "type": unknown;
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item": ReturnUnverifiedItem;
}));
/** The `unverified` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputUnverifiedInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "unverified".
     */
    "type": "unverified";
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item": ReturnUnverifiedItemInput;
})
    & (({
    /** Value enum: "unverified". */
    "type": "unverified";
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item": ReturnUnverifiedItemInput;
})
    & ({
    "return_line_item_id"?: never;
}));
/**
 * One line of received merchandise: a matched return line, excess quantity, or an unverified item.
 */
export type ReturnReceiptLineItemRequest = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "matched", "unverified", "excess".
     */
    "type": "matched" | "unverified" | "excess" | (string & {});
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
})
    & ((Exclude<ReturnReceiptLineItemInputMatched & object, readonly unknown[]>)
    | (Exclude<ReturnReceiptLineItemInputUnverified & object, readonly unknown[]>)
    | (Exclude<ReturnReceiptLineItemInputExcess & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * One line of received merchandise: a matched return line, excess quantity, or an unverified item.
 */
export type ReturnReceiptLineItemRequestInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * The expected Return line. Required for matched and excess merchandise. minLength: 1.
     * Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Whether this observation matches a Return line, is unverified merchandise, or is known
     * excess merchandise. Value enum: "matched", "unverified", "excess".
     */
    "type": "matched" | "unverified" | "excess";
    /**
     * A buyer or catalog identity observation that has not been matched to a Return line.
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItemInput;
})
    & ((Exclude<ReturnReceiptLineItemInputMatchedInput & object, readonly unknown[]>)
    | (Exclude<ReturnReceiptLineItemInputUnverifiedInput & object, readonly unknown[]>)
    | (Exclude<ReturnReceiptLineItemInputExcessInput & object, readonly unknown[]>));
export type ReturnReceiptSupersededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "line_items": Array<ReturnReceiptLineItem>;
            "received_at": string;
            "receiving_location_id": string;
            "return_id": string;
            "return_receipt_id": string;
            "shipment_id"?: string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_receipt_id"?: string;
            "supersedes_return_receipt_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnReceipt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_receipt.superseded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "line_items": Array<ReturnReceiptLineItem>;
            "received_at": string;
            "receiving_location_id": string;
            "return_id": string;
            "return_receipt_id": string;
            "shipment_id"?: string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_receipt_id"?: string;
            "supersedes_return_receipt_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnReceipt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_receipt.superseded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_receipt.superseded";
});
/**
 * The `return_receipt.superseded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnReceiptSupersededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines recorded.
     * object.line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded as
     * received. object.received_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.receiving_location_id (Required): string. ID of the
     * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.return_id (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_receipt_id (Required): string. Unique
     * identifier for this return receipt, prefixed `retrc_`. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id (Optional): string. ID of the return
     * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system (Required): {@link
     * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
     * system was recorded. object.source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
     * system a return event came from, such as a point of sale or warehouse system, with its own
     * identifier. object.source_system.anyOf[2] (Value): null. object.status (Required): string.
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded". object.superseded_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.superseded_by_return_receipt_id
     * (Optional): string. ID of the receipt that corrected this one. Absent while it is current.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.supersedes_return_receipt_id (Optional):
     * string. ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
         * recorded. line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded
         * as received. received_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". receiving_location_id (Required): string. ID of the
         * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_receipt_id (Required): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". shipment_id (Optional): string. ID of the return
         * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". source_system (Required): {@link
         * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
         * system was recorded. source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
         * system a return event came from, such as a point of sale or warehouse system, with its
         * own identifier. source_system.anyOf[2] (Value): null. status (Required): string. Whether
         * this is the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". superseded_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_by_return_receipt_id (Optional):
         * string. ID of the receipt that corrected this one. Absent while it is current. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". supersedes_return_receipt_id (Optional): string. ID
         * of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /**
             * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item
             * recorded as received.
             */
            "line_items": Array<ReturnReceiptLineItem>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at": string;
            /**
             * ID of the Location that received the goods. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "receiving_location_id": string;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string;
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the receipt that corrected this one. Absent while it is current. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "superseded_by_return_receipt_id"?: string;
            /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "supersedes_return_receipt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnReceipt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_receipt.superseded". */
    "event_type"?: "return_receipt.superseded";
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
 * The `return_receipt.superseded` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnReceiptSupersededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines recorded.
     * object.line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded as
     * received. object.received_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.receiving_location_id (Required): string. ID of the
     * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.return_id (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_receipt_id (Required): string. Unique
     * identifier for this return receipt, prefixed `retrc_`. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id (Optional): string. ID of the return
     * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system (Required): {@link
     * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
     * system was recorded. object.source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
     * system a return event came from, such as a point of sale or warehouse system, with its own
     * identifier. object.source_system.anyOf[2] (Value): null. object.status (Required): string.
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded". object.superseded_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.superseded_by_return_receipt_id
     * (Optional): string. ID of the receipt that corrected this one. Absent while it is current.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.supersedes_return_receipt_id (Optional):
     * string. ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
         * recorded. line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded
         * as received. received_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". receiving_location_id (Required): string. ID of the
         * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_receipt_id (Required): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". shipment_id (Optional): string. ID of the return
         * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". source_system (Required): {@link
         * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
         * system was recorded. source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
         * system a return event came from, such as a point of sale or warehouse system, with its
         * own identifier. source_system.anyOf[2] (Value): null. status (Required): string. Whether
         * this is the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". superseded_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_by_return_receipt_id (Optional):
         * string. ID of the receipt that corrected this one. Absent while it is current. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". supersedes_return_receipt_id (Optional): string. ID
         * of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /**
             * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item
             * recorded as received.
             */
            "line_items": Array<ReturnReceiptLineItem>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at": string;
            /**
             * ID of the Location that received the goods. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "receiving_location_id": string;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string;
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the receipt that corrected this one. Absent while it is current. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "superseded_by_return_receipt_id"?: string;
            /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "supersedes_return_receipt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnReceipt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_receipt.superseded". */
    "event_type"?: "return_receipt.superseded";
});
export type ReturnReceiptVerifiedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "line_items": Array<ReturnReceiptLineItem>;
            "received_at": string;
            "receiving_location_id": string;
            "return_id": string;
            "return_receipt_id": string;
            "shipment_id"?: string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_receipt_id"?: string;
            "supersedes_return_receipt_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnReceipt>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_receipt.verified";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            "correction_reason_message"?: string;
            "created_at": string;
            "external_actor_id"?: string;
            "external_reference_id"?: string;
            "generated_dispositions": Array<ReturnDisposition>;
            "line_items": Array<ReturnReceiptLineItem>;
            "received_at": string;
            "receiving_location_id": string;
            "return_id": string;
            "return_receipt_id": string;
            "shipment_id"?: string;
            "source_system": ((ReturnSourceSystem) | (null));
            "status": "current" | "superseded" | (string & {});
            "superseded_at"?: string;
            "superseded_by_return_receipt_id"?: string;
            "supersedes_return_receipt_id"?: string;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnReceipt>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_receipt.verified";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_receipt.verified";
});
/**
 * The `return_receipt.verified` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ReturnReceiptVerifiedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines recorded.
     * object.line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded as
     * received. object.received_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.receiving_location_id (Required): string. ID of the
     * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.return_id (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_receipt_id (Required): string. Unique
     * identifier for this return receipt, prefixed `retrc_`. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id (Optional): string. ID of the return
     * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system (Required): {@link
     * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
     * system was recorded. object.source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
     * system a return event came from, such as a point of sale or warehouse system, with its own
     * identifier. object.source_system.anyOf[2] (Value): null. object.status (Required): string.
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded". object.superseded_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.superseded_by_return_receipt_id
     * (Optional): string. ID of the receipt that corrected this one. Absent while it is current.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.supersedes_return_receipt_id (Optional):
     * string. ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
         * recorded. line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded
         * as received. received_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". receiving_location_id (Required): string. ID of the
         * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_receipt_id (Required): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". shipment_id (Optional): string. ID of the return
         * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". source_system (Required): {@link
         * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
         * system was recorded. source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
         * system a return event came from, such as a point of sale or warehouse system, with its
         * own identifier. source_system.anyOf[2] (Value): null. status (Required): string. Whether
         * this is the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". superseded_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_by_return_receipt_id (Optional):
         * string. ID of the receipt that corrected this one. Absent while it is current. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". supersedes_return_receipt_id (Optional): string. ID
         * of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /**
             * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item
             * recorded as received.
             */
            "line_items": Array<ReturnReceiptLineItem>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at": string;
            /**
             * ID of the Location that received the goods. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "receiving_location_id": string;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string;
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the receipt that corrected this one. Absent while it is current. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "superseded_by_return_receipt_id"?: string;
            /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "supersedes_return_receipt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnReceipt>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_receipt.verified". */
    "event_type"?: "return_receipt.verified";
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
 * The `return_receipt.verified` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnReceiptVerifiedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.correction_reason (Optional): string. Why this observation
     * replaces an earlier one. Send with `supersedes_return_receipt_id` or
     * `supersedes_return_inspection_id`. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other". object.correction_reason_message
     * (Optional): string. Detail about `correction_reason`. object.created_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.external_actor_id (Optional): string. Your identifier for the actor who recorded the
     * event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.generated_dispositions (Required): Array of {@link ReturnDisposition}. Dispositions
     * Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     * object.line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines recorded.
     * object.line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded as
     * received. object.received_at (Required): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.receiving_location_id (Required): string. ID of the
     * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * object.return_id (Required): string. ID of the Return the goods belong to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_receipt_id (Required): string. Unique
     * identifier for this return receipt, prefixed `retrc_`. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id (Optional): string. ID of the return
     * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system (Required): {@link
     * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
     * system was recorded. object.source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
     * system a return event came from, such as a point of sale or warehouse system, with its own
     * identifier. object.source_system.anyOf[2] (Value): null. object.status (Required): string.
     * Whether this is the current observation of these units or a correction replaced it. Value
     * enum: "current", "superseded". object.superseded_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.superseded_by_return_receipt_id
     * (Optional): string. ID of the receipt that corrected this one. Absent while it is current.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.supersedes_return_receipt_id (Optional):
     * string. ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Current version of this
     * resource's owned state. Send it as `expected_version` when changing the resource to reject a
     * stale write. Format: int64. minimum: 1. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * correction_reason (Optional): string. Why this observation replaces an earlier one. Send
         * with `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
         * "entry_error", "duplicate_observation", "source_correction",
         * "reconciliation_correction", "other". correction_reason_message (Optional): string.
         * Detail about `correction_reason`. created_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". external_actor_id (Optional):
         * string. Your identifier for the actor who recorded the event. Don't put secrets in this
         * field. maxLength: 255. Example: "warehouse-1842". external_reference_id (Optional):
         * string. Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". generated_dispositions (Required): Array of {@link
         * ReturnDisposition}. Dispositions Flint created when it recorded this observation. Empty
         * unless the policy's `receipt_disposition_mode` is `automatic`. generated_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
         * recorded. line_items[] (Value): {@link ReturnReceiptLineItem}. A returned item recorded
         * as received. received_at (Required): string. RFC3339 timestamp. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". receiving_location_id (Required): string. ID of the
         * Location that received the goods. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". return_id
         * (Required): string. ID of the Return the goods belong to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_receipt_id (Required): string. Unique
         * identifier for this return receipt, prefixed `retrc_`. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". shipment_id (Optional): string. ID of the return
         * shipment the goods arrived in. Absent when the receipt isn't tied to a shipment.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". source_system (Required): {@link
         * ReturnSourceSystem} or null. System that recorded the observation. `null` when no source
         * system was recorded. source_system.anyOf[1] (Value): {@link ReturnSourceSystem}. The
         * system a return event came from, such as a point of sale or warehouse system, with its
         * own identifier. source_system.anyOf[2] (Value): null. status (Required): string. Whether
         * this is the current observation of these units or a correction replaced it. Value enum:
         * "current", "superseded". superseded_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". superseded_by_return_receipt_id (Optional):
         * string. ID of the receipt that corrected this one. Absent while it is current. Example:
         * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". supersedes_return_receipt_id (Optional): string. ID
         * of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 1.
         */
        "object": {
            /**
             * Why this observation replaces an earlier one. Send with
             * `supersedes_return_receipt_id` or `supersedes_return_inspection_id`. Value enum:
             * "entry_error", "duplicate_observation", "source_correction",
             * "reconciliation_correction", "other".
             */
            "correction_reason"?: "entry_error"
                | "duplicate_observation"
                | "source_correction"
                | "reconciliation_correction"
                | "other"
                | (string & {});
            /** Detail about `correction_reason`. */
            "correction_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Your identifier for the actor who recorded the event. Don't put secrets in this
             * field. maxLength: 255. Example: "warehouse-1842".
             */
            "external_actor_id"?: string;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Dispositions Flint created when it recorded this observation. Empty unless the
             * policy's `receipt_disposition_mode` is `automatic`. [] (Value): {@link
             * ReturnDisposition}. A decision about how returned merchandise will be handled.
             */
            "generated_dispositions": Array<ReturnDisposition>;
            /**
             * The lines recorded. [] (Value): {@link ReturnReceiptLineItem}. A returned item
             * recorded as received.
             */
            "line_items": Array<ReturnReceiptLineItem>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "received_at": string;
            /**
             * ID of the Location that received the goods. Example:
             * "loc_01KEZF7C00CMHRRYA3MV996JB2".
             */
            "receiving_location_id": string;
            /** ID of the Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
            "return_id": string;
            /**
             * Unique identifier for this return receipt, prefixed `retrc_`. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_id": string;
            /**
             * ID of the return shipment the goods arrived in. Absent when the receipt isn't tied
             * to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_id"?: string;
            /**
             * System that recorded the observation. `null` when no source system was recorded.
             * anyOf[1] (Value): {@link ReturnSourceSystem}. The system a return event came from,
             * such as a point of sale or warehouse system, with its own identifier. anyOf[2]
             * (Value): null.
             */
            "source_system": ((ReturnSourceSystem) | (null));
            /**
             * Whether this is the current observation of these units or a correction replaced it.
             * Value enum: "current", "superseded".
             */
            "status": "current" | "superseded" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "superseded_at"?: string;
            /**
             * ID of the receipt that corrected this one. Absent while it is current. Example:
             * "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "superseded_by_return_receipt_id"?: string;
            /** ID of the receipt this one corrects. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". */
            "supersedes_return_receipt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnReceipt>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_receipt.verified". */
    "event_type"?: "return_receipt.verified";
});
export type ReturnReceiptsGetParams = DisputesAcceptParams;
export type ReturnReceiptsListParams = {
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is
     * exact and case-sensitive. Returns current authorized resources, not the recorded response. A
     * pending resource does not prove that the operation succeeded, and an empty list does not
     * prove that it had no effect. minLength: 1. maxLength: 255. pattern:
     * ^[^\x00\r\n]*[^\x00\t\n\v\f\r ][^\x00\r\n]*$.
     */
    "idempotency_key"?: InputValue<string>;
    /**
     * Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum:
     * 1. maximum: 100. Default: 20.
     */
    "page_size"?: InputValue<number>;
    /**
     * Opaque, signed next_page_token from the previous response, bound to the list and caller.
     * Omit on the first request. You may change `page_size` between pages. Reuse it with the same
     * endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered,
     * invalid, expired, or mismatched token returns a validation error.
     */
    "page_token"?: InputValue<string>;
    /** Search by return receipt ID or external reference ID. */
    "query"?: InputValue<string>;
    /** Inclusive lower bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by receiving location id. pattern: ^loc_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: InputValue<string>;
    /**
     * Filter by return id. pattern: ^ret_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X".
     */
    "return_id"?: InputValue<string>;
    /**
     * Filter by return line item id. pattern: ^retli_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: InputValue<string>;
    /**
     * Filter by shipment id. pattern: ^shp_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
     */
    "shipment_id"?: InputValue<string>;
    /**
     * Filter by source system type. Values are trimmed and deduplicated in first-seen order; empty
     * or unknown entries are rejected. Values within this filter are ORed; separate filters are
     * ANDed. [] enum: "manual", "pos", "wms", "erp", "other", "flint". Value enum: "manual",
     * "pos", "wms", "erp", "other", "flint". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[1][] (Value): string. Value
     * enum: "manual", "pos", "wms", "erp", "other", "flint". anyOf[2] (Value): string. Value enum:
     * "manual", "pos", "wms", "erp", "other", "flint".
     */
    "source_system_type"?: InputValue<("manual" | "pos" | "wms" | "erp" | "other" | "flint")
        | readonly ("manual" | "pos" | "wms" | "erp" | "other" | "flint")[]>;
    /**
     * Filter by status. Values are trimmed and deduplicated in first-seen order; empty or unknown
     * entries are rejected. Values within this filter are ORed; separate filters are ANDed. []
     * enum: "current", "superseded". Value enum: "current", "superseded". anyOf[1] (Value): Array
     * of string. minItems: 1. [] enum: "current", "superseded". anyOf[1][] (Value): string. Value
     * enum: "current", "superseded". anyOf[2] (Value): string. Value enum: "current",
     * "superseded".
     */
    "status"?: InputValue<("current" | "superseded") | readonly ("current" | "superseded")[]>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Filter by verification status. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "matched", "unverified", "excess". Value enum: "matched", "unverified",
     * "excess". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "matched", "unverified",
     * "excess". anyOf[1][] (Value): string. Value enum: "matched", "unverified", "excess".
     * anyOf[2] (Value): string. Value enum: "matched", "unverified", "excess".
     */
    "verification_status"?: InputValue<("matched" | "unverified" | "excess") | readonly ("matched" | "unverified" | "excess")[]>;
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
export type ReturnReceiptsVerifyLineItemParams = (InputValue<VerifyReturnReceiptLineItemRequestInput>)
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
 * Estimated refund for the selected eligible quantities. The store's inspection and its final
 * decision can change the refund. Nothing is reserved.
 */
export type ReturnRefundEstimate = {
    /**
     * Returned total less policy deductions, floored at zero. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /**
     * Sum of the policy deduction proposals for this selection. Zero when none apply. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * What the buyer paid for these quantities after discounts, including tax. Uses the same
     * allocation as a return resolution. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * Estimated original-payment destinations in refund order. Amounts sum to
     * buyer_refund_amount_money. Empty when the refund amount is zero. [] (Value): {@link
     * ReturnRefundTenderEstimate}. One estimated original-payment destination for a return refund.
     */
    "tender_estimates": Array<ReturnRefundTenderEstimate>;
};
/** One estimated original-payment destination for a return refund. */
export type ReturnRefundTenderEstimate = ({
    /**
     * Estimated amount returned to this destination. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Original gift card. Present for gift_card_redemption tenders. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id"?: string;
    /**
     * Original payment intent. Present for payment_intent tenders. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Original payment destination receiving this estimated refund: a payment intent or a gift
     * card redemption. Value enum: "payment_intent", "gift_card_redemption".
     */
    "tender_type": "payment_intent" | "gift_card_redemption" | (string & {});
})
    & ((Exclude<ReturnRefundTenderEstimatePaymentIntent & object, readonly unknown[]>)
    | (Exclude<ReturnRefundTenderEstimateGiftCardRedemption & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** One estimated original-payment destination for a return refund. */
export type ReturnRefundTenderEstimateGiftCardRedemption = ({
    /**
     * Estimated amount returned to this destination. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Original gift card. Present for gift_card_redemption tenders. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Original payment intent. Present for payment_intent tenders. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /**
     * Original payment destination receiving this estimated refund: a payment intent or a gift
     * card redemption. Value enum: "gift_card_redemption".
     */
    "tender_type": "gift_card_redemption" | (string & {});
})
    & (({
    /**
     * Original payment destination receiving this estimated refund: a payment intent or a gift
     * card redemption. Value enum: "gift_card_redemption".
     */
    "tender_type": unknown;
    /**
     * Original gift card. Present for gift_card_redemption tenders. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /**
     * Estimated amount returned to this destination. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
/** One estimated original-payment destination for a return refund. */
export type ReturnRefundTenderEstimatePaymentIntent = ({
    /**
     * Estimated amount returned to this destination. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Original gift card. Present for gift_card_redemption tenders. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id"?: string;
    /**
     * Original payment intent. Present for payment_intent tenders. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Original payment destination receiving this estimated refund: a payment intent or a gift
     * card redemption. Value enum: "payment_intent".
     */
    "tender_type": "payment_intent" | (string & {});
})
    & (({
    /**
     * Original payment destination receiving this estimated refund: a payment intent or a gift
     * card redemption. Value enum: "payment_intent".
     */
    "tender_type": unknown;
    /**
     * Original payment intent. Present for payment_intent tenders. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id": string;
    /**
     * Estimated amount returned to this destination. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
}));
export type ReturnReopenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResource>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "buyer_actions": Array<BuyerAction>;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "completed_at"?: string;
            "completed_by"?: ReturnActor;
            "completion_blockers": Array<ReturnCompletionBlocker>;
            "completion_mode"?: "manual" | "automatic" | (string & {});
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            "completion_reason_message"?: string;
            "created_at": string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id"?: string;
            "decision_at"?: string;
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            "external_reference_id"?: string;
            "financial_summary": ReturnFinancialSummary;
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            "line_items": Array<ReturnLineItem>;
            "merchandise_status": "not_required"
                | "awaiting_handoff"
                | "in_transit"
                | "partially_received"
                | "inspection_required"
                | "partially_inspected"
                | "inspection_review_required"
                | "disposition_required"
                | "resolved"
                | "exception"
                | (string & {});
            "metadata": MetadataMap;
            "order"?: ((ExpandedOrderSummary) | (null));
            "order_id": string;
            "policy_evaluation"?: ReturnPolicyEvaluation;
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            "return_disposition_ids": Array<string>;
            "return_dispositions"?: Array<ReturnDisposition>;
            "return_id": string;
            "return_inspection_ids": Array<string>;
            "return_inspections"?: Array<ReturnInspection>;
            "return_number": string;
            "return_receipt_ids": Array<string>;
            "return_receipts"?: Array<ReturnReceipt>;
            "return_resolution_ids": Array<string>;
            "return_resolutions"?: Array<ReturnResolution>;
            "shipment_ids": Array<string>;
            "shipments"?: Array<ExpandedShipmentSummary>;
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<ReturnResource>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return.reopened";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return.reopened";
});
/**
 * The `return.reopened` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnReopenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
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
                | "exception"
                | (string & {});
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResource>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return.reopened". */
    "event_type"?: "return.reopened";
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
 * The `return.reopened` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.buyer_actions (Required): Array of {@link BuyerAction}. What the
     * buyer can do with the return, in this order: withdraw, ship_items, then pay_balance. A
     * buyer's read or change through a customer session on /v1/me, or in Flint's buyer account,
     * lists all three every time; merchant reads and webhooks get an empty list. ship_items is
     * required while handoff_requirements is not empty, due by the earliest expires_at there.
     * pay_balance is required while a resolution waits for the buyer's payment. Example: [].
     * object.buyer_actions[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the Return. Who performed a return action: a
     * buyer, merchant, integration, or the system, with an optional ID. object.cancellation_reason
     * (Optional): string. Why the Return was canceled. Value enum: "buyer_request",
     * "merchant_request", "duplicate", "expired", "created_in_error", "other".
     * object.cancellation_reason_message (Optional): string. Detail sent with the cancellation.
     * Merchant reads only. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.completed_by (Optional): {@link
     * ReturnActor}. Who completed the Return. `system` when Flint completed it automatically. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.completion_blockers (Required): Array of {@link ReturnCompletionBlocker}. What is
     * still owed before the Return can complete. Empty when nothing is.
     * object.completion_blockers[] (Value): {@link ReturnCompletionBlocker}. Something still owed
     * before a return can complete, with the return line or record it concerns.
     * object.completion_mode (Optional): string. automatic completes the Return when the last
     * completion blocker clears; manual waits for POST /v1/returns/{return_id}/complete. Reopening
     * a Return sets it to manual. Value enum: "manual", "automatic". object.completion_reason
     * (Optional): string. Why the Return was completed by hand. Absent when Flint completed it
     * automatically. Value enum: "manual_completion", "exception_waived", "other".
     * object.completion_reason_message (Optional): string. Detail sent when the Return was
     * completed by hand. object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link
     * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
     * when expanded and there is no related customer. object.customer.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. object.customer.anyOf[2] (Value): null. object.customer_id
     * (Optional): string. The customer the Return belongs to. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD". object.decision_at (Optional): string. RFC3339 timestamp.
     * Format: date-time. Example: "2026-08-02T16:00:00Z". object.decision_status (Required):
     * string. Whether the requested units were approved. `pending` until one decision covers every
     * line. Value enum: "pending", "approved", "partially_approved", "declined".
     * object.external_reference_id (Optional): string. Caller-owned identifier for this resource
     * in an external system. maxLength: 255. Example: "warehouse-1842". object.financial_summary
     * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value of
     * the returned lines, deductions and credits, and what has been refunded or collected. The
     * money for a return: returned value, deductions, credits, replacement total, and amounts due
     * to or from the buyer. object.handoff_requirements (Required): Array of {@link
     * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
     * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
     * buyer. object.handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the
     * buyer must do to hand merchandise back: the destination, instructions, line items, and
     * expiry. object.initiated_by (Required): string. Who created the Return, from the credential
     * that sent the request: buyer for a customer session on /v1/me or Flint's hosted account,
     * merchant for a Dashboard user, integration for an API key or partner app. It cannot be sent.
     * Value enum: "buyer", "merchant", "integration". object.line_items (Required): Array of
     * {@link ReturnLineItem}. The lines being returned. object.line_items[] (Value): {@link
     * ReturnLineItem}. An item included in a return request. object.merchandise_status (Required):
     * string. On the Return, the least-finished line's value. Value enum: "not_required",
     * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
     * "partially_inspected", "inspection_review_required", "disposition_required", "resolved",
     * "exception". object.metadata (Required): {@link MetadataMap}. Stored caller-owned key-value
     * data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored
     * on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them. object.order (Optional): {@link ExpandedOrderSummary} or null. Present
     * only when `expand` includes `order`; `null` when expanded and there is no related order.
     * object.order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. object.order.anyOf[2] (Value): null. object.order_id (Required):
     * string. ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * object.policy_evaluation (Optional): {@link ReturnPolicyEvaluation}. How your return
     * policies judged the request when the Return was created. How a return policy evaluated a
     * return request: overall status and reason, the policy revision used, and per-line results.
     * object.resolution_status (Required): string. Whether the buyer has received the value they
     * are owed. Combines the Return's resolutions and its unsettled corrections. Value enum:
     * "not_selected", "pending", "partially_fulfilled", "requires_action", "fulfilled", "failed".
     * object.return_disposition_ids (Required): Array of string. IDs of every disposition recorded
     * for this Return, oldest first, including failed and canceled dispositions. Expand
     * `return_dispositions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_disposition_ids[] (Value): string. Example:
     * "retdsp_01KEZF7C007H87J66PH2EEK1VW". object.return_dispositions (Optional): Array of {@link
     * ReturnDisposition}. Present only when `expand` includes `return_dispositions`. The
     * dispositions in `return_disposition_ids`, in the same order. object.return_dispositions[]
     * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.return_id (Required): string. Unique identifier for this return, prefixed
     * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_inspection_ids (Required):
     * Array of string. IDs of every inspection recorded for this Return, oldest first, including
     * superseded inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
     * them inline. object.return_inspection_ids[] (Value): string. Example:
     * "retins_01KEZF7C00WPB0BR4WTT7CMSB8". object.return_inspections (Optional): Array of {@link
     * ReturnInspection}. Present only when `expand` includes `return_inspections`. The inspections
     * in `return_inspection_ids`, in the same order. object.return_inspections[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items. object.return_number
     * (Required): string. Human-readable number for the Return. object.return_receipt_ids
     * (Required): Array of string. IDs of every receipt recorded for this Return, oldest first,
     * including superseded receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to
     * read them inline. object.return_receipt_ids[] (Value): string. Example:
     * "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.return_receipts (Optional): Array of {@link
     * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
     * `return_receipt_ids`, in the same order. object.return_receipts[] (Value): {@link
     * ReturnReceipt}. A record of returned items arriving at a location.
     * object.return_resolution_ids (Required): Array of string. IDs of every resolution created
     * for this Return, oldest first, including failed and canceled resolutions. Expand
     * `return_resolutions` on `GET /v1/returns/{return_id}` to read them inline.
     * object.return_resolution_ids[] (Value): string. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.return_resolutions (Optional): Array of {@link
     * ReturnResolution}. Present only when `expand` includes `return_resolutions`. The resolutions
     * in `return_resolution_ids`, in the same order. object.return_resolutions[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return. object.shipment_ids
     * (Required): Array of string. IDs of every shipment raised to send this Return's items back,
     * oldest first, including voided shipments. Expand `shipments` on `GET
     * /v1/returns/{return_id}` to read them inline. object.shipment_ids[] (Value): string.
     * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.shipments (Optional): Array of {@link
     * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of the
     * shipments in `shipment_ids`, in the same order. object.shipments[] (Value): {@link
     * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
     * package count, returned when the shipment is expanded. object.status (Required): string.
     * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
     * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
     * "declined", "canceled". object.supported_actions (Required): Array of string. [] enum:
     * "cancel", "complete", "decide", "reopen". object.supported_actions[] (Value): string. Value
     * enum: "cancel", "complete", "decide", "reopen". object.updated_at (Required): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version
     * (Required): integer. Goes up with every change to the Return. Each activity's
     * `return_version` is the version that activity produced. A write that takes
     * `expected_version` or `expected_return_version` for this Return compares it with this value.
     * Format: int64. minimum: 0. previous_attributes (Optional): object. Previous values of
     * changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * buyer_actions (Required): Array of {@link BuyerAction}. What the buyer can do with the
         * return, in this order: withdraw, ship_items, then pay_balance. A buyer's read or change
         * through a customer session on /v1/me, or in Flint's buyer account, lists all three every
         * time; merchant reads and webhooks get an empty list. ship_items is required while
         * handoff_requirements is not empty, due by the earliest expires_at there. pay_balance is
         * required while a resolution waits for the buyer's payment. Example: []. buyer_actions[]
         * (Value): {@link BuyerAction}. One thing a buyer can do with an order, subscription,
         * invoice or return they read through /v1/me. Show the actions with is_required as what
         * needs the buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. canceled_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". canceled_by (Optional): {@link
         * ReturnActor}. Who canceled the Return. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. completed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". completed_by (Optional): {@link ReturnActor}. Who completed the
         * Return. `system` when Flint completed it automatically. Who performed a return action: a
         * buyer, merchant, integration, or the system, with an optional ID. completion_blockers
         * (Required): Array of {@link ReturnCompletionBlocker}. What is still owed before the
         * Return can complete. Empty when nothing is. completion_blockers[] (Value): {@link
         * ReturnCompletionBlocker}. Something still owed before a return can complete, with the
         * return line or record it concerns. completion_mode (Optional): string. automatic
         * completes the Return when the last completion blocker clears; manual waits for POST
         * /v1/returns/{return_id}/complete. Reopening a Return sets it to manual. Value enum:
         * "manual", "automatic". completion_reason (Optional): string. Why the Return was
         * completed by hand. Absent when Flint completed it automatically. Value enum:
         * "manual_completion", "exception_waived", "other". completion_reason_message (Optional):
         * string. Detail sent when the Return was completed by hand. created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Optional): string. The customer the Return belongs to. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". decision_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". decision_status (Required): string.
         * Whether the requested units were approved. `pending` until one decision covers every
         * line. Value enum: "pending", "approved", "partially_approved", "declined".
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". financial_summary
         * (Required): {@link ReturnFinancialSummary}. The Return's money in one place: the value
         * of the returned lines, deductions and credits, and what has been refunded or collected.
         * The money for a return: returned value, deductions, credits, replacement total, and
         * amounts due to or from the buyer. handoff_requirements (Required): Array of {@link
         * ReturnHandoffRequirement}. What the buyer still has to send back and where. Each entry
         * leaves the list once it is satisfied, so an empty list means nothing is waiting on the
         * buyer. handoff_requirements[] (Value): {@link ReturnHandoffRequirement}. What the buyer
         * must do to hand merchandise back: the destination, instructions, line items, and expiry.
         * initiated_by (Required): string. Who created the Return, from the credential that sent
         * the request: buyer for a customer session on /v1/me or Flint's hosted account, merchant
         * for a Dashboard user, integration for an API key or partner app. It cannot be sent.
         * Value enum: "buyer", "merchant", "integration". line_items (Required): Array of {@link
         * ReturnLineItem}. The lines being returned. line_items[] (Value): {@link ReturnLineItem}.
         * An item included in a return request. merchandise_status (Required): string. On the
         * Return, the least-finished line's value. Value enum: "not_required", "awaiting_handoff",
         * "in_transit", "partially_received", "inspection_required", "partially_inspected",
         * "inspection_review_required", "disposition_required", "resolved", "exception". metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. order (Optional): {@link ExpandedOrderSummary} or null. Present only when
         * `expand` includes `order`; `null` when expanded and there is no related order.
         * order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
         * including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. order.anyOf[2] (Value): null. order_id (Required):
         * string. ID of the Order the Return is against. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". policy_evaluation (Optional): {@link
         * ReturnPolicyEvaluation}. How your return policies judged the request when the Return was
         * created. How a return policy evaluated a return request: overall status and reason, the
         * policy revision used, and per-line results. resolution_status (Required): string.
         * Whether the buyer has received the value they are owed. Combines the Return's
         * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
         * "partially_fulfilled", "requires_action", "fulfilled", "failed". return_disposition_ids
         * (Required): Array of string. IDs of every disposition recorded for this Return, oldest
         * first, including failed and canceled dispositions. Expand `return_dispositions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_disposition_ids[] (Value): string.
         * Example: "retdsp_01KEZF7C007H87J66PH2EEK1VW". return_dispositions (Optional): Array of
         * {@link ReturnDisposition}. Present only when `expand` includes `return_dispositions`.
         * The dispositions in `return_disposition_ids`, in the same order. return_dispositions[]
         * (Value): {@link ReturnDisposition}. A decision about how returned merchandise will be
         * handled. return_id (Required): string. Unique identifier for this return, prefixed
         * `ret_`. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". return_inspection_ids (Required):
         * Array of string. IDs of every inspection recorded for this Return, oldest first,
         * including superseded inspections. Expand `return_inspections` on `GET
         * /v1/returns/{return_id}` to read them inline. return_inspection_ids[] (Value): string.
         * Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8". return_inspections (Optional): Array of
         * {@link ReturnInspection}. Present only when `expand` includes `return_inspections`. The
         * inspections in `return_inspection_ids`, in the same order. return_inspections[] (Value):
         * {@link ReturnInspection}. An assessment of the condition of returned items.
         * return_number (Required): string. Human-readable number for the Return.
         * return_receipt_ids (Required): Array of string. IDs of every receipt recorded for this
         * Return, oldest first, including superseded receipts. Expand `return_receipts` on `GET
         * /v1/returns/{return_id}` to read them inline. return_receipt_ids[] (Value): string.
         * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". return_receipts (Optional): Array of {@link
         * ReturnReceipt}. Present only when `expand` includes `return_receipts`. The receipts in
         * `return_receipt_ids`, in the same order. return_receipts[] (Value): {@link
         * ReturnReceipt}. A record of returned items arriving at a location. return_resolution_ids
         * (Required): Array of string. IDs of every resolution created for this Return, oldest
         * first, including failed and canceled resolutions. Expand `return_resolutions` on `GET
         * /v1/returns/{return_id}` to read them inline. return_resolution_ids[] (Value): string.
         * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". return_resolutions (Optional): Array of
         * {@link ReturnResolution}. Present only when `expand` includes `return_resolutions`. The
         * resolutions in `return_resolution_ids`, in the same order. return_resolutions[] (Value):
         * {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
         * shipment_ids (Required): Array of string. IDs of every shipment raised to send this
         * Return's items back, oldest first, including voided shipments. Expand `shipments` on
         * `GET /v1/returns/{return_id}` to read them inline. shipment_ids[] (Value): string.
         * Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". shipments (Optional): Array of {@link
         * ExpandedShipmentSummary}. Present only when `expand` includes `shipments`. Summaries of
         * the shipments in `shipment_ids`, in the same order. shipments[] (Value): {@link
         * ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and
         * package count, returned when the shipment is expanded. status (Required): string. Where
         * the whole Return stands. Read `decision_status`, `merchandise_status`, and
         * `resolution_status` for the part you need. Value enum: "requested", "open", "completed",
         * "declined", "canceled". supported_actions (Required): Array of string. [] enum:
         * "cancel", "complete", "decide", "reopen". supported_actions[] (Value): string. Value
         * enum: "cancel", "complete", "decide", "reopen". updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the Return. Each activity's `return_version` is
         * the version that activity produced. A write that takes `expected_version` or
         * `expected_return_version` for this Return compares it with this value. Format: int64.
         * minimum: 0.
         */
        "object": {
            /**
             * What the buyer can do with the return, in this order: withdraw, ship_items, then
             * pay_balance. A buyer's read or change through a customer session on /v1/me, or in
             * Flint's buyer account, lists all three every time; merchant reads and webhooks get
             * an empty list. ship_items is required while handoff_requirements is not empty, due
             * by the earliest expires_at there. pay_balance is required while a resolution waits
             * for the buyer's payment. Example: []. [] (Value): {@link BuyerAction}. One thing a
             * buyer can do with an order, subscription, invoice or return they read through
             * /v1/me. Show the actions with is_required as what needs the buyer's attention, and
             * the first available action as the primary action on the resource's page in your
             * account.
             */
            "buyer_actions": Array<BuyerAction>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the Return. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the Return was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /**
             * Who completed the Return. `system` when Flint completed it automatically. Who
             * performed a return action: a buyer, merchant, integration, or the system, with an
             * optional ID.
             */
            "completed_by"?: ReturnActor;
            /**
             * What is still owed before the Return can complete. Empty when nothing is. []
             * (Value): {@link ReturnCompletionBlocker}. Something still owed before a return can
             * complete, with the return line or record it concerns.
             */
            "completion_blockers": Array<ReturnCompletionBlocker>;
            /**
             * automatic completes the Return when the last completion blocker clears; manual waits
             * for POST /v1/returns/{return_id}/complete. Reopening a Return sets it to manual.
             * Value enum: "manual", "automatic".
             */
            "completion_mode"?: "manual" | "automatic" | (string & {});
            /**
             * Why the Return was completed by hand. Absent when Flint completed it automatically.
             * Value enum: "manual_completion", "exception_waived", "other".
             */
            "completion_reason"?: "manual_completion" | "exception_waived" | "other" | (string & {});
            /** Detail sent when the Return was completed by hand. */
            "completion_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer the Return belongs to. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "decision_at"?: string;
            /**
             * Whether the requested units were approved. `pending` until one decision covers every
             * line. Value enum: "pending", "approved", "partially_approved", "declined".
             */
            "decision_status": "pending" | "approved" | "partially_approved" | "declined" | (string & {});
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * The Return's money in one place: the value of the returned lines, deductions and
             * credits, and what has been refunded or collected. The money for a return: returned
             * value, deductions, credits, replacement total, and amounts due to or from the buyer.
             */
            "financial_summary": ReturnFinancialSummary;
            /**
             * What the buyer still has to send back and where. Each entry leaves the list once it
             * is satisfied, so an empty list means nothing is waiting on the buyer. [] (Value):
             * {@link ReturnHandoffRequirement}. What the buyer must do to hand merchandise back:
             * the destination, instructions, line items, and expiry.
             */
            "handoff_requirements": Array<ReturnHandoffRequirement>;
            /**
             * Who created the Return, from the credential that sent the request: buyer for a
             * customer session on /v1/me or Flint's hosted account, merchant for a Dashboard user,
             * integration for an API key or partner app. It cannot be sent. Value enum: "buyer",
             * "merchant", "integration".
             */
            "initiated_by": "buyer" | "merchant" | "integration" | (string & {});
            /**
             * The lines being returned. [] (Value): {@link ReturnLineItem}. An item included in a
             * return request.
             */
            "line_items": Array<ReturnLineItem>;
            /**
             * On the Return, the least-finished line's value. Value enum: "not_required",
             * "awaiting_handoff", "in_transit", "partially_received", "inspection_required",
             * "partially_inspected", "inspection_review_required", "disposition_required",
             * "resolved", "exception".
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
                | "exception"
                | (string & {});
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**
             * Present only when `expand` includes `order`; `null` when expanded and there is no
             * related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
             * fields, including status, payment and refund status, and pricing and settlement
             * amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "order"?: ((ExpandedOrderSummary) | (null));
            /** ID of the Order the Return is against. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id": string;
            /**
             * How your return policies judged the request when the Return was created. How a
             * return policy evaluated a return request: overall status and reason, the policy
             * revision used, and per-line results.
             */
            "policy_evaluation"?: ReturnPolicyEvaluation;
            /**
             * Whether the buyer has received the value they are owed. Combines the Return's
             * resolutions and its unsettled corrections. Value enum: "not_selected", "pending",
             * "partially_fulfilled", "requires_action", "fulfilled", "failed".
             */
            "resolution_status": "not_selected"
                | "pending"
                | "partially_fulfilled"
                | "requires_action"
                | "fulfilled"
                | "failed"
                | (string & {});
            /**
             * IDs of every disposition recorded for this Return, oldest first, including failed
             * and canceled dispositions. Expand `return_dispositions` on `GET
             * /v1/returns/{return_id}` to read them inline. [] (Value): string. Example:
             * "retdsp_01KEZF7C007H87J66PH2EEK1VW".
             */
            "return_disposition_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_dispositions`. The dispositions in
             * `return_disposition_ids`, in the same order. [] (Value): {@link ReturnDisposition}.
             * A decision about how returned merchandise will be handled.
             */
            "return_dispositions"?: Array<ReturnDisposition>;
            /**
             * Unique identifier for this return, prefixed `ret_`. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /**
             * IDs of every inspection recorded for this Return, oldest first, including superseded
             * inspections. Expand `return_inspections` on `GET /v1/returns/{return_id}` to read
             * them inline. [] (Value): string. Example: "retins_01KEZF7C00WPB0BR4WTT7CMSB8".
             */
            "return_inspection_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_inspections`. The inspections in
             * `return_inspection_ids`, in the same order. [] (Value): {@link ReturnInspection}. An
             * assessment of the condition of returned items.
             */
            "return_inspections"?: Array<ReturnInspection>;
            /** Human-readable number for the Return. */
            "return_number": string;
            /**
             * IDs of every receipt recorded for this Return, oldest first, including superseded
             * receipts. Expand `return_receipts` on `GET /v1/returns/{return_id}` to read them
             * inline. [] (Value): string. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
             */
            "return_receipt_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_receipts`. The receipts in
             * `return_receipt_ids`, in the same order. [] (Value): {@link ReturnReceipt}. A record
             * of returned items arriving at a location.
             */
            "return_receipts"?: Array<ReturnReceipt>;
            /**
             * IDs of every resolution created for this Return, oldest first, including failed and
             * canceled resolutions. Expand `return_resolutions` on `GET /v1/returns/{return_id}`
             * to read them inline. [] (Value): string. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_ids": Array<string>;
            /**
             * Present only when `expand` includes `return_resolutions`. The resolutions in
             * `return_resolution_ids`, in the same order. [] (Value): {@link ReturnResolution}.
             * The refund, exchange, or other outcome of a return.
             */
            "return_resolutions"?: Array<ReturnResolution>;
            /**
             * IDs of every shipment raised to send this Return's items back, oldest first,
             * including voided shipments. Expand `shipments` on `GET /v1/returns/{return_id}` to
             * read them inline. [] (Value): string. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68".
             */
            "shipment_ids": Array<string>;
            /**
             * Present only when `expand` includes `shipments`. Summaries of the shipments in
             * `shipment_ids`, in the same order. [] (Value): {@link ExpandedShipmentSummary}. A
             * shipment's summary fields, including direction, status, and package count, returned
             * when the shipment is expanded.
             */
            "shipments"?: Array<ExpandedShipmentSummary>;
            /**
             * Where the whole Return stands. Read `decision_status`, `merchandise_status`, and
             * `resolution_status` for the part you need. Value enum: "requested", "open",
             * "completed", "declined", "canceled".
             */
            "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
            /**
             * [] enum: "cancel", "complete", "decide", "reopen". [] (Value): string. Value enum:
             * "cancel", "complete", "decide", "reopen".
             */
            "supported_actions": Array<"cancel" | "complete" | "decide" | "reopen" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the Return. Each activity's `return_version` is the
             * version that activity produced. A write that takes `expected_version` or
             * `expected_return_version` for this Return compares it with this value. Format:
             * int64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<ReturnResource>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return.reopened". */
    "event_type"?: "return.reopened";
});
/** A replacement item added to a return resolution, with its quantity and price totals. */
export type ReturnReplacementLineItem = ({
    /** ID of the bundle the replacement line is for. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** Description of the replacement item. */
    "description"?: string;
    /**
     * Discount on the replacement units. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** Name of the replacement item. */
    "name": string;
    /**
     * The product this replacement variant belongs to. Present whenever variant_id is present;
     * omitted for bundles and custom items. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Unique identifier for this return replacement line item, prefixed `retrepli_`. Example:
     * "retrepli_01KEZF7C00F6P8VWG80G0JC8W2".
     */
    "return_replacement_line_item_id": string;
    /** ID of the resolution the line belongs to. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". */
    "return_resolution_id": string;
    /** SKU of the replacement item. */
    "sku"?: string;
    /**
     * Subtotal of the replacement units, before discount and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on the replacement units. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Price of one replacement unit. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** ID of the variant the replacement line is for. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
});
/** The `bundle` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputBundle = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": unknown;
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** The `bundle` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputBundleInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle";
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "name"?: never;
}) & ({
    "fulfillment"?: never;
})));
/** The `custom` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputCustom = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": unknown;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name": string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequest;
}));
/** The `custom` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputCustomInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestModelInput;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom";
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name": string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment": LineItemFulfillmentRequestModelInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputVariant = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": unknown;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
}));
/** The `variant` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputVariantInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant";
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
}) & ({
    "fulfillment"?: never;
})));
/**
 * A replacement item to include in a return resolution, from a variant, a bundle, or a custom name
 * and price.
 */
export type ReturnReplacementLineItemRequest = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequest;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<ReturnReplacementLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A replacement item to include in a return resolution, from a variant, a bundle, or a custom name
 * and price.
 */
export type ReturnReplacementLineItemRequestInput = ({
    /**
     * ID of the bundle to send. Used when `type` is `bundle`. minLength: 1. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /** Description of the replacement item. minLength: 1. */
    "description"?: string;
    /**
     * Fulfillment requirements for custom replacement merchandise, using the same input as an
     * order line. Required for custom lines; catalog lines use their catalog fulfillment profile.
     * Fulfillment requirements you supply for an order line item, such as allowed fulfillment
     * types, package size and weight, and origin.
     */
    "fulfillment"?: LineItemFulfillmentRequestModelInput;
    /** Name of the replacement item. Required when `type` is `custom`. minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** SKU of the replacement item. minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /**
     * Price of one replacement unit. Required when `type` is `custom` or `pricing_basis` is
     * `merchant_agreed_price`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /**
     * ID of the variant to send. Used when `type` is `variant`. minLength: 1. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<ReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputCustomInput & object, readonly unknown[]>));
/** The refund, exchange, or other outcome of a return. */
export type ReturnResolution = {
    /**
     * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay the
     * exchange balance; manual_release means the merchant must release the resolution. Value enum:
     * "buyer_payment", "manual_release".
     */
    "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
    /**
     * Who has to act while the resolution's status is `requires_action`. Value enum: "buyer",
     * "merchant".
     */
    "action_required_by"?: "buyer" | "merchant" | (string & {});
    /**
     * Fees and credits applied to the resolution's amounts. [] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /**
     * Amount the buyer owes when deduction_money and replacement_total_money exceed
     * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund and
     * for no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Value returned to the buyer: returned_total_money plus credit_adjustment_money, minus
     * deduction_money and replacement_total_money, when that balance is zero or more. For
     * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "canceled_at"?: string;
    /**
     * Who canceled the resolution. Merchant reads only. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
     * "duplicate", "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Detail sent with the cancellation. Merchant reads only. */
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "confirmed_at"?: string;
    /**
     * Who confirmed the resolution. Who performed a return action: a buyer, merchant, integration,
     * or the system, with an optional ID.
     */
    "confirmed_by"?: ReturnActor;
    /**
     * ID of the settled resolution this correction adjusts. Present only when `resolution_type` is
     * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "corrects_return_resolution_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Who created the resolution. Who performed a return action: a buyer, merchant, integration,
     * or the system, with an optional ID.
     */
    "created_by": ReturnActor;
    /**
     * Credits added by the resolution's adjustments. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "credit_adjustment_money": MoneyValue;
    /**
     * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value): {@link
     * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can
     * finish.
     */
    "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Reason code for a failed Return resolution, when available. refund_line_value_unavailable
     * means another refund already returned part of an order line, so retrying cannot succeed;
     * cancel the resolution and resolve the line for fewer units or without a refund.
     * replacement_fulfillment_canceled means the replacement Order's fulfillment was canceled, so
     * it won't be sent. gift_card_refund_destination_required means the original gift card cannot
     * accept the refund; retry with gift_card_refund_destination set to new_gift_card.
     * store_credit_unavailable means the original payment cannot fund store credit; cancel the
     * resolution and create a refund resolution. Value enum:
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed".
     */
    "failure_code"?: "gift_card_refund_destination_required"
        | "store_credit_unavailable"
        | "refund_creation_failed"
        | "refund_failed"
        | "refund_line_value_unavailable"
        | "payment_intent_creation_failed"
        | "payment_failed"
        | "replacement_order_creation_failed"
        | "replacement_fulfillment_canceled"
        | "resolution_effect_failed"
        | (string & {});
    /** Explanation of a failed Return resolution, when available. */
    "failure_message"?: string;
    /** When the resolution became fulfilled. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "fulfilled_at"?: string;
    /**
     * Where the gift-card-paid portion is refunded. original credits the original gift card;
     * new_gift_card issues new gift cards. Accepted for refund, exchange, and correction, except a
     * correction of store_credit. Omit for store_credit, replacement, and no_monetary_action;
     * sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at gift_card_refund_destination
     * and conflicting_fields naming resolution_type. Store credit and its corrections always issue
     * new gift cards. PATCH can change it only while proposed. Retry persists the chosen
     * destination before starting the new attempt. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Return lines and quantities the resolution covers. Absent on a correction. [] (Value):
     * {@link ReturnResolutionLineItem}. A return line included in a resolution, with its quantity
     * and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /**  [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
    "payment_intent_ids": Array<string>;
    /**
     *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
     * including amount, status, and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * How replacement lines are priced. Present on exchanges and replacements. Value enum:
     * "original_price", "current_price", "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**  [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". */
    "refund_ids": Array<string>;
    /**  [] (Value): {@link Refund}. Money returned against a collected payment. */
    "refunds"?: Array<Refund>;
    /**
     * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Present only when `expand` includes `replacement_order`; `null` when expanded and there is
     * no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. anyOf[2] (Value): null.
     */
    "replacement_order"?: ((ExpandedOrderSummary) | (null));
    /**
     * ID of the replacement Order Flint created for an exchange or replacement. Absent until it
     * exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "replacement_order_id"?: string;
    /**
     * Total of the replacement items the buyer receives. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
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
    /** ID of the Return the resolution belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /** Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". */
    "return_policy_revision_id"?: string;
    /**
     * Unique identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_id": string;
    /**
     * Value of the returned units this resolution covers. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * fulfilled means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     */
    "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
    /**
     * Actions that can succeed now. Empty unless the parent Return is open, except
     * checkout_session. A failed resolution lists retry while it has a failed effect and its
     * failure code permits retry. It lists cancel when it never created a Refund, PaymentIntent,
     * or Order. [] enum: "cancel", "checkout_session", "confirm", "release", "retry". [] (Value):
     * string. Value enum: "cancel", "checkout_session", "confirm", "release", "retry".
     */
    "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 0.
     */
    "version": number;
};
/**
 * A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and
 * applied amounts and any waiver.
 */
export type ReturnResolutionAdjustment = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /** Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". */
    "return_policy_revision_id"?: string;
    /**
     * Unique identifier for this return resolution adjustment, prefixed `retadj_`. Example:
     * "retadj_01KEZF7C00EX1XSCX7WSCDKSZZ".
     */
    "return_resolution_adjustment_id": string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status": "applied" | "waived" | (string & {});
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "waived_at"?: string;
    /**
     * Who waived the adjustment. Who performed a return action: a buyer, merchant, integration, or
     * the system, with an optional ID.
     */
    "waived_by"?: ReturnActor;
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Detail about `waiver_reason`. */
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to apply to a return resolution, with the assessed and applied amounts and
 * whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequest = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status"?: "applied" | "waived" | (string & {});
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit" | (string & {});
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Detail about `waiver_reason`. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to apply to a return resolution, with the assessed and applied amounts and
 * whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequestInput = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /**
     * Amount that counts toward the resolution. It can't exceed `assessed_amount_money`, and is
     * zero when the adjustment is waived. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValueInput;
    /**
     * Amount the fee or credit comes to before any waiver. Same currency as
     * `applied_amount_money`. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Why the adjustment was made. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
    /**
     * ID of the Return line a deduction applies to. Absent when it applies to the resolution as a
     * whole. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
    "return_line_item_id"?: string;
    /**
     * Whether the adjustment counts toward the buyer's value. A waived adjustment applies zero.
     * Value enum: "applied", "waived".
     */
    "status"?: "applied" | "waived";
    /**
     * Whether the adjustment reduces or increases what the buyer receives. Value enum:
     * "deduction", "credit".
     */
    "value_effect": "deduction" | "credit";
    /**
     * Why the adjustment was waived. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** Detail about `waiver_reason`. minLength: 1. */
    "waiver_reason_message"?: string;
};
export type ReturnResolutionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            "adjustments": Array<ReturnResolutionAdjustment>;
            "buyer_payment_amount_money": MoneyValue;
            "buyer_refund_amount_money": MoneyValue;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "confirmed_at"?: string;
            "confirmed_by"?: ReturnActor;
            "corrects_return_resolution_id"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "credit_adjustment_money": MoneyValue;
            "deduction_money": MoneyValue;
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            "external_reference_id"?: string;
            "failure_code"?: "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {});
            "failure_message"?: string;
            "fulfilled_at"?: string;
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            "line_items": Array<ReturnResolutionLineItem>;
            "metadata": MetadataMap;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            "refund_ids": Array<string>;
            "refunds"?: Array<Refund>;
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            "replacement_order_id"?: string;
            "replacement_total_money": MoneyValue;
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            "return_id": string;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "return_resolution.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            "adjustments": Array<ReturnResolutionAdjustment>;
            "buyer_payment_amount_money": MoneyValue;
            "buyer_refund_amount_money": MoneyValue;
            "canceled_at"?: string;
            "canceled_by"?: ReturnActor;
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            "cancellation_reason_message"?: string;
            "confirmed_at"?: string;
            "confirmed_by"?: ReturnActor;
            "corrects_return_resolution_id"?: string;
            "created_at": string;
            "created_by": ReturnActor;
            "credit_adjustment_money": MoneyValue;
            "deduction_money": MoneyValue;
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            "external_reference_id"?: string;
            "failure_code"?: "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {});
            "failure_message"?: string;
            "fulfilled_at"?: string;
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            "line_items": Array<ReturnResolutionLineItem>;
            "metadata": MetadataMap;
            "payment_intent_ids": Array<string>;
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            "refund_ids": Array<string>;
            "refunds"?: Array<Refund>;
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            "replacement_order_id"?: string;
            "replacement_total_money": MoneyValue;
            "resolution_type": "refund"
                | "exchange"
                | "replacement"
                | "store_credit"
                | "no_monetary_action"
                | "correction"
                | (string & {});
            "return_id": string;
            "return_policy_revision_id"?: string;
            "return_resolution_id": string;
            "returned_total_money": MoneyValue;
            "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "return_resolution.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "return_resolution.created";
});
/**
 * The `return_resolution.created` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnResolutionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.action_reason (Optional): string. Why a requires_action resolution
     * is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release
     * means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". object.action_required_by (Optional): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * object.adjustments (Required): Array of {@link ReturnResolutionAdjustment}. Fees and credits
     * applied to the resolution's amounts. object.adjustments[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     * object.buyer_payment_amount_money (Required): {@link MoneyValue}. Amount the buyer owes when
     * deduction_money and replacement_total_money exceed returned_total_money plus
     * credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.buyer_refund_amount_money (Required): {@link MoneyValue}. Value returned to the
     * buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and
     * replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.canceled_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the resolution. Merchant reads only. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.cancellation_reason (Optional): string. Why the resolution was canceled. Value
     * enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other". object.cancellation_reason_message (Optional): string. Detail sent with the
     * cancellation. Merchant reads only. object.confirmed_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.confirmed_by
     * (Optional): {@link ReturnActor}. Who confirmed the resolution. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.corrects_return_resolution_id (Optional): string. ID of the settled resolution this
     * correction adjusts. Present only when `resolution_type` is `correction`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required):
     * {@link ReturnActor}. Who created the resolution. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID. object.credit_adjustment_money
     * (Required): {@link MoneyValue}. Credits added by the resolution's adjustments. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.deduction_money (Required): {@link MoneyValue}. Deductions taken by the resolution's
     * adjustments, such as a restocking fee. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.execution_blockers (Required): Array of {@link
     * ReturnResolutionExecutionBlocker}. What a confirmed resolution is still waiting for. Empty
     * when nothing is. object.execution_blockers[] (Value): {@link
     * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can
     * finish. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed Return resolution, when
     * available. refund_line_value_unavailable means another refund already returned part of an
     * order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer
     * units or without a refund. replacement_fulfillment_canceled means the replacement Order's
     * fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means
     * the original gift card cannot accept the refund; retry with gift_card_refund_destination set
     * to new_gift_card. store_credit_unavailable means the original payment cannot fund store
     * credit; cancel the resolution and create a refund resolution. Value enum:
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed". object.failure_message
     * (Optional): string. Explanation of a failed Return resolution, when available.
     * object.fulfilled_at (Optional): string. When the resolution became fulfilled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.gift_card_refund_destination (Optional):
     * string. Where the gift-card-paid portion is refunded. original credits the original gift
     * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction,
     * except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
     * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card". object.line_items (Required): Array of {@link
     * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on a
     * correction. object.line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
     * included in a resolution, with its quantity and returned total. object.metadata (Required):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.payment_intent_ids (Required): Array of string. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. object.payment_intents[] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded. object.pricing_basis
     * (Optional): string. How replacement lines are priced. Present on exchanges and replacements.
     * Value enum: "original_price", "current_price", "merchant_agreed_price". object.refund_ids
     * (Required): Array of string. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link Refund}.
     * object.refunds[] (Value): {@link Refund}. Money returned against a collected payment.
     * object.replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
     * Merchandise the buyer receives instead, for an exchange or replacement.
     * object.replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement
     * item added to a return resolution, with its quantity and price totals.
     * object.replacement_order (Optional): {@link ExpandedOrderSummary} or null. Present only when
     * `expand` includes `replacement_order`; `null` when expanded and there is no related order.
     * object.replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
     * fields, including status, payment and refund status, and pricing and settlement amounts,
     * returned when the order is expanded. object.replacement_order.anyOf[2] (Value): null.
     * object.replacement_order_id (Optional): string. ID of the replacement Order Flint created
     * for an exchange or replacement. Absent until it exists. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money (Required): {@link
     * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.resolution_type (Required):
     * string. What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". object.return_id
     * (Required): string. ID of the Return the resolution belongs to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_revision_id (Optional): string.
     * Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string.
     * Unique identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * fulfilled means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now. Empty
     * unless the parent Return is open, except checkout_session. A failed resolution lists retry
     * while it has a failed effect and its failure code permits retry. It lists cancel when it
     * never created a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session",
     * "confirm", "release", "retry". object.supported_actions[] (Value): string. Value enum:
     * "cancel", "checkout_session", "confirm", "release", "retry". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     * minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * action_reason (Optional): string. Why a requires_action resolution is waiting.
         * buyer_payment means the buyer must pay the exchange balance; manual_release means the
         * merchant must release the resolution. Value enum: "buyer_payment", "manual_release".
         * action_required_by (Optional): string. Who has to act while the resolution's status is
         * `requires_action`. Value enum: "buyer", "merchant". adjustments (Required): Array of
         * {@link ReturnResolutionAdjustment}. Fees and credits applied to the resolution's
         * amounts. adjustments[] (Value): {@link ReturnResolutionAdjustment}. A fee or credit
         * applied to a return resolution, such as a restocking fee, with the assessed and applied
         * amounts and any waiver. buyer_payment_amount_money (Required): {@link MoneyValue}.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. buyer_refund_amount_money (Required): {@link MoneyValue}. Value
         * returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. canceled_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * resolution. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. confirmed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". confirmed_by (Optional): {@link ReturnActor}. Who confirmed the
         * resolution. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. corrects_return_resolution_id (Optional): string. ID of the
         * settled resolution this correction adjusts. Present only when `resolution_type` is
         * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_by (Required): {@link ReturnActor}. Who created the resolution. Who performed a
         * return action: a buyer, merchant, integration, or the system, with an optional ID.
         * credit_adjustment_money (Required): {@link MoneyValue}. Credits added by the
         * resolution's adjustments. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. deduction_money (Required): {@link MoneyValue}. Deductions taken by
         * the resolution's adjustments, such as a restocking fee. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. execution_blockers (Required): Array
         * of {@link ReturnResolutionExecutionBlocker}. What a confirmed resolution is still
         * waiting for. Empty when nothing is. execution_blockers[] (Value): {@link
         * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
         * can finish. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". failure_code
         * (Optional): string. Reason code for a failed Return resolution, when available.
         * refund_line_value_unavailable means another refund already returned part of an order
         * line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer
         * units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "gift_card_refund_destination_required", "store_credit_unavailable",
         * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
         * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
         * "replacement_fulfillment_canceled", "resolution_effect_failed". failure_message
         * (Optional): string. Explanation of a failed Return resolution, when available.
         * fulfilled_at (Optional): string. When the resolution became fulfilled. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". gift_card_refund_destination (Optional):
         * string. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt.
         * Default: "original". Value enum: "original", "new_gift_card". line_items (Required):
         * Array of {@link ReturnResolutionLineItem}. Return lines and quantities the resolution
         * covers. Absent on a correction. line_items[] (Value): {@link ReturnResolutionLineItem}.
         * A return line included in a resolution, with its quantity and returned total. metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. payment_intent_ids (Required): Array of string. payment_intent_ids[]
         * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional):
         * Array of {@link ExpandedPaymentIntentSummary}. payment_intents[] (Value): {@link
         * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
         * status, and capture method, returned when the payment intent is expanded. pricing_basis
         * (Optional): string. How replacement lines are priced. Present on exchanges and
         * replacements. Value enum: "original_price", "current_price", "merchant_agreed_price".
         * refund_ids (Required): Array of string. refund_ids[] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds (Optional): Array of {@link Refund}. refunds[]
         * (Value): {@link Refund}. Money returned against a collected payment.
         * replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement item
         * added to a return resolution, with its quantity and price totals. replacement_order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `replacement_order`; `null` when expanded and there is no related order.
         * replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
         * fields, including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string. ID of the replacement Order Flint created for
         * an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_total_money (Required): {@link
         * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. resolution_type
         * (Required): string. What the buyer gets for the approved quantity. Value enum: "refund",
         * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". return_id
         * (Required): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_revision_id (Optional): string. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. fulfilled means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "fulfilled",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. Empty unless the parent Return is open, except checkout_session. A failed
         * resolution lists retry while it has a failed effect and its failure code permits retry.
         * It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions[]
         * (Value): string. Value enum: "cancel", "checkout_session", "confirm", "release",
         * "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release".
             */
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant".
             */
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            /**
             * Fees and credits applied to the resolution's amounts. [] (Value): {@link
             * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as
             * a restocking fee, with the assessed and applied amounts and any waiver.
             */
            "adjustments": Array<ReturnResolutionAdjustment>;
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "buyer_payment_amount_money": MoneyValue;
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "buyer_refund_amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the resolution. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "confirmed_at"?: string;
            /**
             * Who confirmed the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "confirmed_by"?: ReturnActor;
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "corrects_return_resolution_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * Credits added by the resolution's adjustments. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "credit_adjustment_money": MoneyValue;
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "deduction_money": MoneyValue;
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value):
             * {@link ReturnResolutionExecutionBlocker}. Work that must complete before a Return
             * resolution can finish.
             */
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_line_value_unavailable means another refund already returned part of an order
             * line, so retrying cannot succeed; cancel the resolution and resolve the line for
             * fewer units or without a refund. replacement_fulfillment_canceled means the
             * replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "gift_card_refund_destination_required", "store_credit_unavailable",
             * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
             * "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
             */
            "failure_code"?: "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {});
            /** Explanation of a failed Return resolution, when available. */
            "failure_message"?: string;
            /**
             * When the resolution became fulfilled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "fulfilled_at"?: string;
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card".
             */
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. []
             * (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution,
             * with its quantity and returned total.
             */
            "line_items": Array<ReturnResolutionLineItem>;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**  [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_ids": Array<string>;
            /**
             *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary
             * fields, including amount, status, and capture method, returned when the payment
             * intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**  [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". */
            "refund_ids": Array<string>;
            /**  [] (Value): {@link Refund}. Money returned against a collected payment. */
            "refunds"?: Array<Refund>;
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value):
             * {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
             * with its quantity and price totals.
             */
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "replacement_order_id"?: string;
            /**
             * Total of the replacement items the buyer receives. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "replacement_total_money": MoneyValue;
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
             * ID of the Return the resolution belongs to. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /** Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". */
            "return_policy_revision_id"?: string;
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id": string;
            /**
             * Value of the returned units this resolution covers. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "returned_total_money": MoneyValue;
            /**
             * fulfilled means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "fulfilled",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Empty unless the parent Return is open, except
             * checkout_session. A failed resolution lists retry while it has a failed effect and
             * its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". [] (Value): string. Value enum: "cancel", "checkout_session",
             * "confirm", "release", "retry".
             */
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "return_resolution.created". */
    "event_type"?: "return_resolution.created";
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
 * The `return_resolution.created` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnResolutionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.action_reason (Optional): string. Why a requires_action resolution
     * is waiting. buyer_payment means the buyer must pay the exchange balance; manual_release
     * means the merchant must release the resolution. Value enum: "buyer_payment",
     * "manual_release". object.action_required_by (Optional): string. Who has to act while the
     * resolution's status is `requires_action`. Value enum: "buyer", "merchant".
     * object.adjustments (Required): Array of {@link ReturnResolutionAdjustment}. Fees and credits
     * applied to the resolution's amounts. object.adjustments[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     * object.buyer_payment_amount_money (Required): {@link MoneyValue}. Amount the buyer owes when
     * deduction_money and replacement_total_money exceed returned_total_money plus
     * credit_adjustment_money. Zero when the buyer is owed a refund and for no_monetary_action.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.buyer_refund_amount_money (Required): {@link MoneyValue}. Value returned to the
     * buyer: returned_total_money plus credit_adjustment_money, minus deduction_money and
     * replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. object.canceled_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.canceled_by
     * (Optional): {@link ReturnActor}. Who canceled the resolution. Merchant reads only. Who
     * performed a return action: a buyer, merchant, integration, or the system, with an optional
     * ID. object.cancellation_reason (Optional): string. Why the resolution was canceled. Value
     * enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other". object.cancellation_reason_message (Optional): string. Detail sent with the
     * cancellation. Merchant reads only. object.confirmed_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.confirmed_by
     * (Optional): {@link ReturnActor}. Who confirmed the resolution. Who performed a return
     * action: a buyer, merchant, integration, or the system, with an optional ID.
     * object.corrects_return_resolution_id (Optional): string. ID of the settled resolution this
     * correction adjusts. Present only when `resolution_type` is `correction`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.created_by (Required):
     * {@link ReturnActor}. Who created the resolution. Who performed a return action: a buyer,
     * merchant, integration, or the system, with an optional ID. object.credit_adjustment_money
     * (Required): {@link MoneyValue}. Credits added by the resolution's adjustments. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     * object.deduction_money (Required): {@link MoneyValue}. Deductions taken by the resolution's
     * adjustments, such as a restocking fee. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. object.execution_blockers (Required): Array of {@link
     * ReturnResolutionExecutionBlocker}. What a confirmed resolution is still waiting for. Empty
     * when nothing is. object.execution_blockers[] (Value): {@link
     * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution can
     * finish. object.external_reference_id (Optional): string. Caller-owned identifier for this
     * resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.failure_code (Optional): string. Reason code for a failed Return resolution, when
     * available. refund_line_value_unavailable means another refund already returned part of an
     * order line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer
     * units or without a refund. replacement_fulfillment_canceled means the replacement Order's
     * fulfillment was canceled, so it won't be sent. gift_card_refund_destination_required means
     * the original gift card cannot accept the refund; retry with gift_card_refund_destination set
     * to new_gift_card. store_credit_unavailable means the original payment cannot fund store
     * credit; cancel the resolution and create a refund resolution. Value enum:
     * "gift_card_refund_destination_required", "store_credit_unavailable",
     * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
     * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
     * "replacement_fulfillment_canceled", "resolution_effect_failed". object.failure_message
     * (Optional): string. Explanation of a failed Return resolution, when available.
     * object.fulfilled_at (Optional): string. When the resolution became fulfilled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.gift_card_refund_destination (Optional):
     * string. Where the gift-card-paid portion is refunded. original credits the original gift
     * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and correction,
     * except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
     * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card". object.line_items (Required): Array of {@link
     * ReturnResolutionLineItem}. Return lines and quantities the resolution covers. Absent on a
     * correction. object.line_items[] (Value): {@link ReturnResolutionLineItem}. A return line
     * included in a resolution, with its quantity and returned total. object.metadata (Required):
     * {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
     * and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
     * are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.payment_intent_ids (Required): Array of string. object.payment_intent_ids[] (Value):
     * string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". object.payment_intents (Optional): Array
     * of {@link ExpandedPaymentIntentSummary}. object.payment_intents[] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded. object.pricing_basis
     * (Optional): string. How replacement lines are priced. Present on exchanges and replacements.
     * Value enum: "original_price", "current_price", "merchant_agreed_price". object.refund_ids
     * (Required): Array of string. object.refund_ids[] (Value): string. Example:
     * "ref_01KEZF7C003DTD59WKYHEXYQ1K". object.refunds (Optional): Array of {@link Refund}.
     * object.refunds[] (Value): {@link Refund}. Money returned against a collected payment.
     * object.replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
     * Merchandise the buyer receives instead, for an exchange or replacement.
     * object.replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement
     * item added to a return resolution, with its quantity and price totals.
     * object.replacement_order (Optional): {@link ExpandedOrderSummary} or null. Present only when
     * `expand` includes `replacement_order`; `null` when expanded and there is no related order.
     * object.replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
     * fields, including status, payment and refund status, and pricing and settlement amounts,
     * returned when the order is expanded. object.replacement_order.anyOf[2] (Value): null.
     * object.replacement_order_id (Optional): string. ID of the replacement Order Flint created
     * for an exchange or replacement. Absent until it exists. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.replacement_total_money (Required): {@link
     * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.resolution_type (Required):
     * string. What the buyer gets for the approved quantity. Value enum: "refund", "exchange",
     * "replacement", "store_credit", "no_monetary_action", "correction". object.return_id
     * (Required): string. ID of the Return the resolution belongs to. Example:
     * "ret_01KEZF7C00PG93650ZKVQNGF7X". object.return_policy_revision_id (Optional): string.
     * Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". object.return_resolution_id (Required): string.
     * Unique identifier for this return resolution, prefixed `retres_`. Example:
     * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". object.returned_total_money (Required): {@link
     * MoneyValue}. Value of the returned units this resolution covers. Monetary amount represented
     * as integer minor units plus an ISO 4217 currency code. object.status (Required): string.
     * fulfilled means the buyer has the value: every linked Refund succeeded, any balance was
     * collected, and any replacement Order's fulfillment_status is fulfilled or not_applicable.
     * Value enum: "proposed", "pending", "requires_action", "fulfilled", "failed", "canceled".
     * object.supported_actions (Required): Array of string. Actions that can succeed now. Empty
     * unless the parent Return is open, except checkout_session. A failed resolution lists retry
     * while it has a failed effect and its failure code permits retry. It lists cancel when it
     * never created a Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session",
     * "confirm", "release", "retry". object.supported_actions[] (Value): string. Value enum:
     * "cancel", "checkout_session", "confirm", "release", "retry". object.updated_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.version (Required): integer. Current version of this resource's owned state. Send it
     * as `expected_version` when changing the resource to reject a stale write. Format: int64.
     * minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * action_reason (Optional): string. Why a requires_action resolution is waiting.
         * buyer_payment means the buyer must pay the exchange balance; manual_release means the
         * merchant must release the resolution. Value enum: "buyer_payment", "manual_release".
         * action_required_by (Optional): string. Who has to act while the resolution's status is
         * `requires_action`. Value enum: "buyer", "merchant". adjustments (Required): Array of
         * {@link ReturnResolutionAdjustment}. Fees and credits applied to the resolution's
         * amounts. adjustments[] (Value): {@link ReturnResolutionAdjustment}. A fee or credit
         * applied to a return resolution, such as a restocking fee, with the assessed and applied
         * amounts and any waiver. buyer_payment_amount_money (Required): {@link MoneyValue}.
         * Amount the buyer owes when deduction_money and replacement_total_money exceed
         * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a refund
         * and for no_monetary_action. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. buyer_refund_amount_money (Required): {@link MoneyValue}. Value
         * returned to the buyer: returned_total_money plus credit_adjustment_money, minus
         * deduction_money and replacement_total_money, when that balance is zero or more. For
         * store_credit, the value issued on new gift cards. Zero for no_monetary_action. Monetary
         * amount represented as integer minor units plus an ISO 4217 currency code. canceled_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". canceled_by (Optional): {@link ReturnActor}. Who canceled the
         * resolution. Merchant reads only. Who performed a return action: a buyer, merchant,
         * integration, or the system, with an optional ID. cancellation_reason (Optional): string.
         * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
         * "duplicate", "expired", "created_in_error", "other". cancellation_reason_message
         * (Optional): string. Detail sent with the cancellation. Merchant reads only. confirmed_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". confirmed_by (Optional): {@link ReturnActor}. Who confirmed the
         * resolution. Who performed a return action: a buyer, merchant, integration, or the
         * system, with an optional ID. corrects_return_resolution_id (Optional): string. ID of the
         * settled resolution this correction adjusts. Present only when `resolution_type` is
         * `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". created_at (Required):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_by (Required): {@link ReturnActor}. Who created the resolution. Who performed a
         * return action: a buyer, merchant, integration, or the system, with an optional ID.
         * credit_adjustment_money (Required): {@link MoneyValue}. Credits added by the
         * resolution's adjustments. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. deduction_money (Required): {@link MoneyValue}. Deductions taken by
         * the resolution's adjustments, such as a restocking fee. Monetary amount represented as
         * integer minor units plus an ISO 4217 currency code. execution_blockers (Required): Array
         * of {@link ReturnResolutionExecutionBlocker}. What a confirmed resolution is still
         * waiting for. Empty when nothing is. execution_blockers[] (Value): {@link
         * ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
         * can finish. external_reference_id (Optional): string. Caller-owned identifier for this
         * resource in an external system. maxLength: 255. Example: "warehouse-1842". failure_code
         * (Optional): string. Reason code for a failed Return resolution, when available.
         * refund_line_value_unavailable means another refund already returned part of an order
         * line, so retrying cannot succeed; cancel the resolution and resolve the line for fewer
         * units or without a refund. replacement_fulfillment_canceled means the replacement
         * Order's fulfillment was canceled, so it won't be sent.
         * gift_card_refund_destination_required means the original gift card cannot accept the
         * refund; retry with gift_card_refund_destination set to new_gift_card.
         * store_credit_unavailable means the original payment cannot fund store credit; cancel the
         * resolution and create a refund resolution. Value enum:
         * "gift_card_refund_destination_required", "store_credit_unavailable",
         * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
         * "payment_intent_creation_failed", "payment_failed", "replacement_order_creation_failed",
         * "replacement_fulfillment_canceled", "resolution_effect_failed". failure_message
         * (Optional): string. Explanation of a failed Return resolution, when available.
         * fulfilled_at (Optional): string. When the resolution became fulfilled. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". gift_card_refund_destination (Optional):
         * string. Where the gift-card-paid portion is refunded. original credits the original gift
         * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
         * correction, except a correction of store_credit. Omit for store_credit, replacement, and
         * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail at
         * gift_card_refund_destination and conflicting_fields naming resolution_type. Store credit
         * and its corrections always issue new gift cards. PATCH can change it only while
         * proposed. Retry persists the chosen destination before starting the new attempt.
         * Default: "original". Value enum: "original", "new_gift_card". line_items (Required):
         * Array of {@link ReturnResolutionLineItem}. Return lines and quantities the resolution
         * covers. Absent on a correction. line_items[] (Value): {@link ReturnResolutionLineItem}.
         * A return line included in a resolution, with its quantity and returned total. metadata
         * (Required): {@link MetadataMap}. Stored caller-owned key-value data. See `MetadataInput`
         * for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys
         * starting with flint_ are reserved for Flint and are not returned. Writes follow the
         * limits on MetadataInput and MetadataPatchInput; maps written before those limits may not
         * satisfy them. payment_intent_ids (Required): Array of string. payment_intent_ids[]
         * (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". payment_intents (Optional):
         * Array of {@link ExpandedPaymentIntentSummary}. payment_intents[] (Value): {@link
         * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
         * status, and capture method, returned when the payment intent is expanded. pricing_basis
         * (Optional): string. How replacement lines are priced. Present on exchanges and
         * replacements. Value enum: "original_price", "current_price", "merchant_agreed_price".
         * refund_ids (Required): Array of string. refund_ids[] (Value): string. Example:
         * "ref_01KEZF7C003DTD59WKYHEXYQ1K". refunds (Optional): Array of {@link Refund}. refunds[]
         * (Value): {@link Refund}. Money returned against a collected payment.
         * replacement_line_items (Required): Array of {@link ReturnReplacementLineItem}.
         * Merchandise the buyer receives instead, for an exchange or replacement.
         * replacement_line_items[] (Value): {@link ReturnReplacementLineItem}. A replacement item
         * added to a return resolution, with its quantity and price totals. replacement_order
         * (Optional): {@link ExpandedOrderSummary} or null. Present only when `expand` includes
         * `replacement_order`; `null` when expanded and there is no related order.
         * replacement_order.anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary
         * fields, including status, payment and refund status, and pricing and settlement amounts,
         * returned when the order is expanded. replacement_order.anyOf[2] (Value): null.
         * replacement_order_id (Optional): string. ID of the replacement Order Flint created for
         * an exchange or replacement. Absent until it exists. Example:
         * "ord_01KEZF7C0054GQKJ142A8X367A". replacement_total_money (Required): {@link
         * MoneyValue}. Total of the replacement items the buyer receives. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. resolution_type
         * (Required): string. What the buyer gets for the approved quantity. Value enum: "refund",
         * "exchange", "replacement", "store_credit", "no_monetary_action", "correction". return_id
         * (Required): string. ID of the Return the resolution belongs to. Example:
         * "ret_01KEZF7C00PG93650ZKVQNGF7X". return_policy_revision_id (Optional): string. Example:
         * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". return_resolution_id (Required): string. Unique
         * identifier for this return resolution, prefixed `retres_`. Example:
         * "retres_01KEZF7C00C7RZJN31W9SGMEQ3". returned_total_money (Required): {@link
         * MoneyValue}. Value of the returned units this resolution covers. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code. status (Required):
         * string. fulfilled means the buyer has the value: every linked Refund succeeded, any
         * balance was collected, and any replacement Order's fulfillment_status is fulfilled or
         * not_applicable. Value enum: "proposed", "pending", "requires_action", "fulfilled",
         * "failed", "canceled". supported_actions (Required): Array of string. Actions that can
         * succeed now. Empty unless the parent Return is open, except checkout_session. A failed
         * resolution lists retry while it has a failed effect and its failure code permits retry.
         * It lists cancel when it never created a Refund, PaymentIntent, or Order. [] enum:
         * "cancel", "checkout_session", "confirm", "release", "retry". supported_actions[]
         * (Value): string. Value enum: "cancel", "checkout_session", "confirm", "release",
         * "retry". updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Current version of this resource's
         * owned state. Send it as `expected_version` when changing the resource to reject a stale
         * write. Format: int64. minimum: 0.
         */
        "object": {
            /**
             * Why a requires_action resolution is waiting. buyer_payment means the buyer must pay
             * the exchange balance; manual_release means the merchant must release the resolution.
             * Value enum: "buyer_payment", "manual_release".
             */
            "action_reason"?: "buyer_payment" | "manual_release" | (string & {});
            /**
             * Who has to act while the resolution's status is `requires_action`. Value enum:
             * "buyer", "merchant".
             */
            "action_required_by"?: "buyer" | "merchant" | (string & {});
            /**
             * Fees and credits applied to the resolution's amounts. [] (Value): {@link
             * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as
             * a restocking fee, with the assessed and applied amounts and any waiver.
             */
            "adjustments": Array<ReturnResolutionAdjustment>;
            /**
             * Amount the buyer owes when deduction_money and replacement_total_money exceed
             * returned_total_money plus credit_adjustment_money. Zero when the buyer is owed a
             * refund and for no_monetary_action. Monetary amount represented as integer minor
             * units plus an ISO 4217 currency code.
             */
            "buyer_payment_amount_money": MoneyValue;
            /**
             * Value returned to the buyer: returned_total_money plus credit_adjustment_money,
             * minus deduction_money and replacement_total_money, when that balance is zero or
             * more. For store_credit, the value issued on new gift cards. Zero for
             * no_monetary_action. Monetary amount represented as integer minor units plus an ISO
             * 4217 currency code.
             */
            "buyer_refund_amount_money": MoneyValue;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who canceled the resolution. Merchant reads only. Who performed a return action: a
             * buyer, merchant, integration, or the system, with an optional ID.
             */
            "canceled_by"?: ReturnActor;
            /**
             * Why the resolution was canceled. Value enum: "buyer_request", "merchant_request",
             * "duplicate", "expired", "created_in_error", "other".
             */
            "cancellation_reason"?: "buyer_request"
                | "merchant_request"
                | "duplicate"
                | "expired"
                | "created_in_error"
                | "other"
                | (string & {});
            /** Detail sent with the cancellation. Merchant reads only. */
            "cancellation_reason_message"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "confirmed_at"?: string;
            /**
             * Who confirmed the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "confirmed_by"?: ReturnActor;
            /**
             * ID of the settled resolution this correction adjusts. Present only when
             * `resolution_type` is `correction`. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "corrects_return_resolution_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /**
             * Who created the resolution. Who performed a return action: a buyer, merchant,
             * integration, or the system, with an optional ID.
             */
            "created_by": ReturnActor;
            /**
             * Credits added by the resolution's adjustments. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "credit_adjustment_money": MoneyValue;
            /**
             * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary
             * amount represented as integer minor units plus an ISO 4217 currency code.
             */
            "deduction_money": MoneyValue;
            /**
             * What a confirmed resolution is still waiting for. Empty when nothing is. [] (Value):
             * {@link ReturnResolutionExecutionBlocker}. Work that must complete before a Return
             * resolution can finish.
             */
            "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Reason code for a failed Return resolution, when available.
             * refund_line_value_unavailable means another refund already returned part of an order
             * line, so retrying cannot succeed; cancel the resolution and resolve the line for
             * fewer units or without a refund. replacement_fulfillment_canceled means the
             * replacement Order's fulfillment was canceled, so it won't be sent.
             * gift_card_refund_destination_required means the original gift card cannot accept the
             * refund; retry with gift_card_refund_destination set to new_gift_card.
             * store_credit_unavailable means the original payment cannot fund store credit; cancel
             * the resolution and create a refund resolution. Value enum:
             * "gift_card_refund_destination_required", "store_credit_unavailable",
             * "refund_creation_failed", "refund_failed", "refund_line_value_unavailable",
             * "payment_intent_creation_failed", "payment_failed",
             * "replacement_order_creation_failed", "replacement_fulfillment_canceled",
             * "resolution_effect_failed".
             */
            "failure_code"?: "gift_card_refund_destination_required"
                | "store_credit_unavailable"
                | "refund_creation_failed"
                | "refund_failed"
                | "refund_line_value_unavailable"
                | "payment_intent_creation_failed"
                | "payment_failed"
                | "replacement_order_creation_failed"
                | "replacement_fulfillment_canceled"
                | "resolution_effect_failed"
                | (string & {});
            /** Explanation of a failed Return resolution, when available. */
            "failure_message"?: string;
            /**
             * When the resolution became fulfilled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "fulfilled_at"?: string;
            /**
             * Where the gift-card-paid portion is refunded. original credits the original gift
             * card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
             * correction, except a correction of store_credit. Omit for store_credit, replacement,
             * and no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail
             * at gift_card_refund_destination and conflicting_fields naming resolution_type. Store
             * credit and its corrections always issue new gift cards. PATCH can change it only
             * while proposed. Retry persists the chosen destination before starting the new
             * attempt. Default: "original". Value enum: "original", "new_gift_card".
             */
            "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
            /**
             * Return lines and quantities the resolution covers. Absent on a correction. []
             * (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution,
             * with its quantity and returned total.
             */
            "line_items": Array<ReturnResolutionLineItem>;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata": MetadataMap;
            /**  [] (Value): string. Example: "pi_01KEZF7C00G8H9D509YEV22P7R". */
            "payment_intent_ids": Array<string>;
            /**
             *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary
             * fields, including amount, status, and capture method, returned when the payment
             * intent is expanded.
             */
            "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
            /**
             * How replacement lines are priced. Present on exchanges and replacements. Value enum:
             * "original_price", "current_price", "merchant_agreed_price".
             */
            "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
            /**  [] (Value): string. Example: "ref_01KEZF7C003DTD59WKYHEXYQ1K". */
            "refund_ids": Array<string>;
            /**  [] (Value): {@link Refund}. Money returned against a collected payment. */
            "refunds"?: Array<Refund>;
            /**
             * Merchandise the buyer receives instead, for an exchange or replacement. [] (Value):
             * {@link ReturnReplacementLineItem}. A replacement item added to a return resolution,
             * with its quantity and price totals.
             */
            "replacement_line_items": Array<ReturnReplacementLineItem>;
            /**
             * Present only when `expand` includes `replacement_order`; `null` when expanded and
             * there is no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An
             * order's summary fields, including status, payment and refund status, and pricing and
             * settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
             */
            "replacement_order"?: ((ExpandedOrderSummary) | (null));
            /**
             * ID of the replacement Order Flint created for an exchange or replacement. Absent
             * until it exists. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "replacement_order_id"?: string;
            /**
             * Total of the replacement items the buyer receives. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "replacement_total_money": MoneyValue;
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
             * ID of the Return the resolution belongs to. Example:
             * "ret_01KEZF7C00PG93650ZKVQNGF7X".
             */
            "return_id": string;
            /** Example: "rpolv_01KEZF7C007AWH6P4QC14Q25TC". */
            "return_policy_revision_id"?: string;
            /**
             * Unique identifier for this return resolution, prefixed `retres_`. Example:
             * "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
             */
            "return_resolution_id": string;
            /**
             * Value of the returned units this resolution covers. Monetary amount represented as
             * integer minor units plus an ISO 4217 currency code.
             */
            "returned_total_money": MoneyValue;
            /**
             * fulfilled means the buyer has the value: every linked Refund succeeded, any balance
             * was collected, and any replacement Order's fulfillment_status is fulfilled or
             * not_applicable. Value enum: "proposed", "pending", "requires_action", "fulfilled",
             * "failed", "canceled".
             */
            "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
            /**
             * Actions that can succeed now. Empty unless the parent Return is open, except
             * checkout_session. A failed resolution lists retry while it has a failed effect and
             * its failure code permits retry. It lists cancel when it never created a Refund,
             * PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
             * "release", "retry". [] (Value): string. Value enum: "cancel", "checkout_session",
             * "confirm", "release", "retry".
             */
            "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Current version of this resource's owned state. Send it as `expected_version` when
             * changing the resource to reject a stale write. Format: int64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "return_resolution.created". */
    "event_type"?: "return_resolution.created";
});

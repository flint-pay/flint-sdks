import type { BundleComponent } from './types-0.js';
import type { Fulfillment } from './types-17.js';
import type { Image } from './types-19.js';
import type { OrderLineItemModifier } from './types-32.js';
import type { ReturnActor, ReturnDisposition, ReturnInspection, ResourceReference } from './types-40.js';
import type { SelectedProductOption } from './types-43.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { InputValue } from '../runtime.js';
import type { CreateReturnPolicyRequestInput, CreateReturnPreviewRequestInput, CreateReturnReasonRequestInput } from './types-8.js';
import type { PublishReturnPolicyRevisionRequestInput } from './types-38.js';
import type {
    UpdateReturnPolicyRequestInput,
    UpdateReturnReasonRequestInput,
    VerifyReturnReceiptLineItemRequestInput
} from './types-49.js';
import type {
    ReturnRestockingFeePolicy,
    ReturnShippingPolicy,
    ReturnWindow,
    ReturnRestockingFeePolicyInput,
    ReturnShippingPolicyInput,
    ReturnWindowInput,
    ReturnSourceSystem,
    ReturnSourceSystemInput,
    ReturnResource,
    ReturnUnverifiedItem,
    ReturnUnverifiedItemInput
} from './types-42.js';
import type { ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-16.js';
import type { Refund } from './types-39.js';
/**
 * Shape $ (Value): {@link ReturnLineDecisionInput}. Start from the pinned policy proposal
 * recomputed for approved_quantity when the line has a policy evaluation and the proposal can be
 * built. Otherwise start with return_required_quantity equal to approved_quantity,
 * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
 * store_credit in that order regardless of whether the original payment is refundable, no
 * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
 * supplied field replaces its starting value; allowed_resolution_types replaces the whole list.
 * Omit automatic_resolution_type to keep its starting value, or send null to resolve manually.
 * Then fill an omitted release_timing with after_inspection when merchandise is required and
 * inspection is required, after_receipt when merchandise is required without inspection, or
 * after_approval when no merchandise is required. Validate the merged decision for quantity
 * bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned
 * policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ","return_line_item_id":"retli_01KEZF7C001NHF6JPD83VD0MRK"}.
 */
export type ReturnLineDecisionInput = ({
    /**
     * Shape $ (Value): Array of string. Optional replacement for the entire starting list.
     * Defaults to the buildable pinned policy proposal; otherwise refund, exchange, replacement,
     * no_monetary_action, and store_credit in that order, independent of the original payment's
     * refundability. The resulting list must be valid and non-empty when approved_quantity is
     * above zero. [] enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit". Shape $[] (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Shape $ (Value): integer string. Required whole-number quantity from zero through the line's
     * requested_quantity; fractional quantities are not supported. When approved_quantity is below
     * requested_quantity, send decline_reason; decline_reason_message is optional. Both decline
     * fields are forbidden when all requested quantity is approved. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "approved_quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Optional refund, store_credit, or no_monetary_action that
     * Flint creates and confirms automatically. Omit to keep the policy proposal's value, or the
     * absent value from no-policy defaults. Send null to resolve the line manually; clearing a
     * policy proposal's automatic value requires override_reason. Must be in the resulting
     * allowed_resolution_types. Exchange and replacement cannot be automated. An unavailable
     * automatic refund or store credit fails with 409 ACTION_NOT_ALLOWED and reason
     * refund_unavailable or store_credit_unavailable. Value enum: "refund", "store_credit",
     * "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null;
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
    /**
     * Shape $ (Value): string. Optional explanation accompanying decline_reason, up to 2048
     * characters (Unicode code points), counted before normalization. Requires decline_reason and
     * is forbidden when all requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Shape $ (Value): boolean. Optional inspection requirement. Defaults to the buildable pinned
     * policy proposal or false when no proposal can be built. The resulting requirement must be
     * reachable with the merged merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Shape $ (Value): string. Required when a decision differs from a buildable pinned policy
     * proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. The release timing fill also applies
     * to the proposal and does not count as a deviation. Otherwise optional when a pinned policy
     * proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value
     * enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
     */
    "override_reason"?: "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
    /**
     * Shape $ (Value): string. Optional explanation accompanying override_reason. Requires
     * override_reason and is forbidden without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Shape $ (Value): string. Optional receiving Location with a postal address. Defaults to the
     * buildable pinned policy proposal or no location when no proposal can be built. Required when
     * the resulting return_required_quantity is above zero and there is no starting location. A
     * process receipt does not supply the decision's location. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Optional gate for every resolution type. Defaults to the policy
     * proposal's timing when set. After merging supplied fields, an unset timing becomes
     * after_inspection when return_required_quantity is above zero and inspection is required,
     * after_receipt when return_required_quantity is above zero without inspection, or
     * after_approval when return_required_quantity is zero. Applies to every resolution type,
     * including exchanges and replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
    /**
     * Shape $ (Value): integer string. How much of the approved quantity the buyer must physically
     * send back; fractional quantities are not supported. Set 0 for a returnless refund, where the
     * buyer keeps the merchandise and the Return still settles the money. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: `${bigint}` | bigint;
})
    & (((({
    "decline_reason_message"?: never;
}))
    | ({
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
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
     * Shape $ (Value): string. Required when a decision differs from a buildable pinned policy
     * proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. The release timing fill also applies
     * to the proposal and does not count as a deviation. Otherwise optional when a pinned policy
     * proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value
     * enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
     */
    "override_reason": "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
})));
/** Shape $ (Value): {@link ReturnLineItem}. An item included in a return request. */
export type ReturnLineItem = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "accepted_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "approved_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. The refund, store_credit, or no_monetary_action resolution Flint
     * creates and confirms automatically. Absent when the merchant resolves manually. Example:
     * "refund". Value enum: "refund", "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Shape $ (Value): integer string. Approved quantity that can still be assigned to a new
     * resolution. Every non-canceled resolution reserves its line quantity, including proposed,
     * pending, action-required, failed, and fulfilled resolutions. Whole-number quantity;
     * fractional quantities are not supported. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "available_resolution_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "buyer_note"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "canceled_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "decided_by"?: ReturnActor;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "decision_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "decline_reason_message"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "declined_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "dispositioned_quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link ReturnLineItemEligibility}. Whether a return line is eligible under
     * policy, with the eligible quantity, allowed resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /**
     * Shape $ (Value): {@link Fulfillment} or null. Shape $.anyOf[1] (Value): {@link Fulfillment}.
     * Work required to deliver an order's items. Shape $.anyOf[2] (Value): null.
     */
    "fulfillment"?: ((Fulfillment) | (null));
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "handed_off_quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "inspected_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "inspection_waived_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "inspection_waived_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "trusted_in_store_handoff",
     * "merchant_review", "other".
     */
    "inspection_waiver_reason"?: "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "inspection_waiver_reason_message"?: string;
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_policy_overridden": boolean;
    /**
     * Shape $ (Value): string. Value enum: "not_required", "awaiting_handoff", "in_transit",
     * "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved", "exception".
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
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. Shape $[] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price
     * change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "overridden_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "overridden_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "customer_service_exception", "policy_correction",
     * "risk_review", "merchant_discretion", "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "override_reason_message"?: string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "received_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "rejected_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Committed resolution execution gate, filled for every approved
     * line: after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when merchandise is not
     * required, unless the policy or decision sets a timing explicitly. Applies to every
     * resolution type, including exchanges and replacements. manual is held until a merchant calls
     * POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "not_selected", "pending", "requires_action",
     * "fulfilled", "failed".
     */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "fulfilled" | "failed" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "resolved_quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_line_item_id": string;
    /**
     * Shape $ (Value): {@link ReturnReason} or null. Shape $.anyOf[1] (Value): {@link
     * ReturnReason}. A reason customers can select when requesting a return. Shape $.anyOf[2]
     * (Value): null.
     */
    "return_reason"?: ((ReturnReason) | (null));
    /** Shape $ (Value): string. */
    "return_reason_handle": string;
    /** Shape $ (Value): string. */
    "return_reason_id": string;
    /** Shape $ (Value): string. */
    "return_reason_name": string;
    /**
     * Shape $ (Value): integer string. How much of the approved quantity the buyer must physically
     * send back; fractional quantities are not supported. Set 0 for a returnless refund, where the
     * buyer keeps the merchandise and the Return still settles the money. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "return_required_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of string. IDs of the resolutions that include this line, oldest
     * first, including failed and canceled resolutions. Shape $[] (Value): string.
     */
    "return_resolution_ids": Array<string>;
    /**
     * Shape $ (Value): {@link ReturnLineItemValue}. The value of a return line: unit price,
     * subtotal, discount, tax, and total.
     */
    "return_value": ReturnLineItemValue;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "review_required_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): string. Value enum: "requested", "open", "completed", "declined",
     * "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "cancel", "waive_inspection". Shape $[] (Value):
     * string. Value enum: "cancel", "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnLineItemDecisionProposal}. The pinned policy decision recomputed
 * for based_on_quantity. A decide with only approved_quantity commits these values. Policy
 * automatic resolution selects the policy automatic_resolution_type for policy_default or the
 * line's requested_resolution_type for buyer_requested. When buyer_requested has no
 * requested_resolution_type, the proposal still exists without automatic_resolution_type, so
 * resolution is manual. Manual policy resolution also has no automatic_resolution_type. An unset
 * release_timing is filled with after_inspection when merchandise and inspection are required,
 * after_receipt when merchandise is required without inspection, or after_approval when no
 * merchandise is required.
 */
export type ReturnLineItemDecisionProposal = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): string. The refund, store_credit, or no_monetary_action that Flint creates
     * and confirms automatically, using the policy default or buyer request according to the
     * policy selection mode. Absent for manual resolution, including buyer_requested when the line
     * has no requested_resolution_type. Example: "refund". Value enum: "refund", "store_credit",
     * "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "based_on_quantity": `${bigint}`;
    /** Shape $ (Value): boolean. */
    "is_inspection_required": boolean;
    /** Shape $ (Value): string. */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. The policy timing, or after_inspection when merchandise and
     * inspection are required, after_receipt when merchandise is required without inspection, or
     * after_approval when no merchandise is required. This fill never counts as a policy
     * deviation. Applies to every resolution type, including exchanges and replacements. manual is
     * held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum:
     * "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "return_required_quantity": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnLineItemEligibility}. Whether a return line is eligible under
 * policy, with the eligible quantity, allowed resolution types, and any policy adjustments.
 */
export type ReturnLineItemEligibility = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): {@link ReturnLineItemDecisionProposal}. The pinned policy decision
     * recomputed for based_on_quantity. A decide with only approved_quantity commits these values.
     * Policy automatic resolution selects the policy automatic_resolution_type for policy_default
     * or the line's requested_resolution_type for buyer_requested. When buyer_requested has no
     * requested_resolution_type, the proposal still exists without automatic_resolution_type, so
     * resolution is manual. Manual policy resolution also has no automatic_resolution_type. An
     * unset release_timing is filled with after_inspection when merchandise and inspection are
     * required, after_receipt when merchandise is required without inspection, or after_approval
     * when no merchandise is required.
     */
    "decision_proposal"?: ReturnLineItemDecisionProposal;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "eligible_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. The matched policy's declared exclusion reason. Present exactly
     * when reason is policy_ineligible. Value enum: "final_sale", "product_excluded",
     * "category_excluded", "market_restricted", "channel_restricted", "outside_return_window",
     * "other".
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
     * Shape $ (Value): Array of {@link ReturnPolicyAdjustmentProposal}. Shape $[] (Value): {@link
     * ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes for a line,
     * calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
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
    /** Shape $ (Value): string. */
    "reason_message": string;
    /** Shape $ (Value): string. */
    "return_policy_id"?: string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnLineItemRequest}. An order line item to return, with the quantity,
 * return reason, and optionally a note and the resolution the buyer wants.
 */
export type ReturnLineItemRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "buyer_note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id": string;
};
/**
 * Shape $ (Value): {@link ReturnLineItemRequestInput}. An order line item to return, with the
 * quantity, return reason, and optionally a note and the resolution the buyer wants.
 */
export type ReturnLineItemRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "buyer_note"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "fulfillment_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** Shape $ (Value): string. minLength: 1. */
    "return_reason_id": string;
};
/**
 * Shape $ (Value): {@link ReturnLineItemValue}. The value of a return line: unit price, subtotal,
 * discount, tax, and total.
 */
export type ReturnLineItemValue = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
export type ReturnPoliciesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnPolicyRequestInput}. The request body for: Create return
     * policy.
     */
    "body": InputValue<CreateReturnPolicyRequestInput>;
};
export type ReturnPoliciesGetInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "current_revision". Shape $[] (Value): string.
     * Value enum: "current_revision".
     */
    "expand"?: InputValue<Array<"current_revision">>;
};
export type ReturnPoliciesGetRevisionInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_policy_revision_id": InputValue<string>;
};
export type ReturnPoliciesListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /**
     * Shape $ (Value): Array of string. [] enum: "current_revision". Shape $[] (Value): string.
     * Value enum: "current_revision".
     */
    "expand"?: InputValue<Array<"current_revision">>;
};
export type ReturnPoliciesListRevisionsInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
};
export type ReturnPoliciesPublishRevisionInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link PublishReturnPolicyRevisionRequestInput}. The request body for:
     * Publish return policy revision.
     */
    "body": InputValue<PublishReturnPolicyRevisionRequestInput>;
};
export type ReturnPoliciesRemoveInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ReturnPoliciesUpdateInput = {
    /** Shape $ (Value): string. */
    "return_policy_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateReturnPolicyRequestInput}. The request body for: Update return
     * policy.
     */
    "body": InputValue<UpdateReturnPolicyRequestInput>;
};
/**
 * Shape $ (Value): {@link ReturnPolicy}. Rules governing whether and how purchased items can be
 * returned.
 */
export type ReturnPolicy = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "current_return_policy_revision_id": string;
    /**
     * Shape $ (Value): {@link ReturnPolicyRevision} or null. Shape $.anyOf[1] (Value): {@link
     * ReturnPolicyRevision}. A saved revision of a return policy. Shape $.anyOf[2] (Value): null.
     */
    "current_revision"?: ((ReturnPolicyRevision) | (null));
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata": Record<string, string>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "return_policy_id": string;
    /**
     * Shape $ (Value): string. active policies apply to new Returns; inactive policies do not.
     * Toggle active and inactive with PATCH status. Retire either with DELETE
     * /v1/return-policies/{return_policy_id}. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy
 * proposes for a line, calculated as a flat amount or a percent.
 */
export type ReturnPolicyAdjustmentProposal = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "based_on_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "calculated_amount_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /** Shape $ (Value): number. Format: double. multipleOf: 0.0001. */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnPolicyEvaluation}. How a return policy evaluated a return request:
 * overall status and reason, the policy revision used, and per-line results.
 */
export type ReturnPolicyEvaluation = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "evaluated_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnPolicyEvaluationLineItem}. Shape $[] (Value): {@link
     * ReturnPolicyEvaluationLineItem}. The policy result for one return line: status, eligible
     * quantity, allowed resolution types, and handling requirements such as inspection.
     */
    "line_items": Array<ReturnPolicyEvaluationLineItem>;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
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
    /** Shape $ (Value): string. */
    "reason_message": string;
    /** Shape $ (Value): string. */
    "return_policy_id"?: string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * Shape $ (Value): {@link ReturnPolicyEvaluationLineItem}. The policy result for one return line:
 * status, eligible quantity, allowed resolution types, and handling requirements such as
 * inspection.
 */
export type ReturnPolicyEvaluationLineItem = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "eligible_quantity": `${bigint}`;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "expires_at"?: string;
    /** Shape $ (Value): string. */
    "fulfillment_id": string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): string. The matched policy's declared exclusion reason. Present exactly
     * when reason is policy_ineligible. Value enum: "final_sale", "product_excluded",
     * "category_excluded", "market_restricted", "channel_restricted", "outside_return_window",
     * "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /** Shape $ (Value): boolean. */
    "is_inspection_required": boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. Shape $[] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price
     * change, total, and display flags.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): Array of {@link ReturnPolicyAdjustmentProposal}. Shape $[] (Value): {@link
     * ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes for a line,
     * calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
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
    /** Shape $ (Value): string. */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Release gate for every resolution type, including exchanges and
     * replacements. Released after the Return is approved. Released after the buyer hands back the
     * required merchandise. Released after the required merchandise is received. Released after
     * the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing": "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "requested_quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "suggested_return_reason_ids": Array<string>;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/** Shape $ (Value): {@link ReturnPolicyRevision}. A saved revision of a return policy. */
export type ReturnPolicyRevision = {
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "effective_at"?: string;
    /** Shape $ (Value): string.  Value enum: "eligible", "ineligible", "review_required". */
    "eligibility_result": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
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
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string. */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Release gate for every resolution type, including exchanges and
     * replacements. Released after the Return is approved. Released after the buyer hands back the
     * required merchandise. Released after the required merchandise is received. Released after
     * the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicy}. A restocking fee in a return policy,
     * charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /** Shape $ (Value): string. */
    "return_policy_id": string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id": string;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicy}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * Shape $ (Value): {@link ReturnWindow}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Shape $ (Value): {@link ReturnPolicyScope}. The products, variants, categories, channels, or
     * locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
};
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionInputIneligible}. The `ineligible` variant of
 * `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputIneligible = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "ineligible".
     */
    "eligibility_result": "ineligible" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
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
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicy}. A restocking fee in a return policy,
     * charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicy}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * Shape $ (Value): {@link ReturnWindow}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Shape $ (Value): {@link ReturnPolicyScope}. The products, variants, categories, channels, or
     * locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "ineligible". */
    "eligibility_result": unknown;
}));
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionInputIneligibleInput}. The `ineligible` variant of
 * `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputIneligibleInput = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "ineligible".
     */
    "eligibility_result": "ineligible";
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicyInput}. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyInput;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicyInput}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyInput;
    /**
     * Shape $ (Value): {@link ReturnWindowInput}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindowInput;
    /**
     * Shape $ (Value): {@link ReturnPolicyScopeInput}. The products, variants, categories,
     * channels, or locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeInput;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "ineligible". */
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
 * Shape $ (Value): {@link ReturnPolicyRevisionInputReturnable}. The `eligible` variant of
 * `ReturnPolicyRevisionInput`. The `review_required` variant of `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputReturnable = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic" | (string & {});
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "eligible", "review_required".
     */
    "eligibility_result": "eligible" | "review_required" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
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
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicy}. A restocking fee in a return policy,
     * charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicy}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * Shape $ (Value): {@link ReturnWindow}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Shape $ (Value): {@link ReturnPolicyScope}. The products, variants, categories, channels, or
     * locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "eligible", "review_required". */
    "eligibility_result": unknown;
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic" | (string & {});
})
    & (((({
    /** Shape $ (Value): any.  Value enum: "manual". */
    "resolution_mode"?: unknown;
}))
    | ({
    /** Shape $ (Value): any.  Value enum: "automatic". */
    "resolution_mode"?: unknown;
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode": "policy_default" | "buyer_requested" | (string & {});
})
    | (Record<string, unknown>)))
    & ((({
    /** Shape $ (Value): any.  Value enum: false. */
    "is_merchandise_return_required"?: unknown;
})
    | ({
    /** Shape $ (Value): any.  Value enum: true. */
    "is_merchandise_return_required"?: unknown;
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id": string;
})
    | (Record<string, unknown>))));
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionInputReturnableInput}. The `eligible` variant of
 * `ReturnPolicyRevisionInput`. The `review_required` variant of `ReturnPolicyRevisionInput`.
 */
export type ReturnPolicyRevisionInputReturnableInput = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic";
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "eligible", "review_required".
     */
    "eligibility_result": "eligible" | "review_required";
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicyInput}. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyInput;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicyInput}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyInput;
    /**
     * Shape $ (Value): {@link ReturnWindowInput}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindowInput;
    /**
     * Shape $ (Value): {@link ReturnPolicyScopeInput}. The products, variants, categories,
     * channels, or locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeInput;
})
    & (({
    /** Shape $ (Value): any.  Value enum: "eligible", "review_required". */
    "eligibility_result": "eligible" | "review_required";
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode": "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode": "manual" | "automatic";
})
    & (((({
    /** Shape $ (Value): any.  Value enum: "manual". */
    "resolution_mode"?: "manual";
})
    & (({
    "resolution_selection_mode"?: never;
}) & ({
    "automatic_resolution_type"?: never;
})))
    | ({
    /** Shape $ (Value): any.  Value enum: "automatic". */
    "resolution_mode"?: "automatic";
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode": "policy_default" | "buyer_requested";
})))
    & ((({
    /** Shape $ (Value): any.  Value enum: false. */
    "is_merchandise_return_required"?: false;
})
    | ({
    /** Shape $ (Value): any.  Value enum: true. */
    "is_merchandise_return_required"?: true;
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id": string;
}))));
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionRequest}. The rules for a return policy revision:
 * scope, eligibility, return window, approval and resolution modes, shipping, and restocking fee.
 */
export type ReturnPolicyRevisionRequest = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "eligible", "ineligible", "review_required".
     */
    "eligibility_result": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
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
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicy}. A restocking fee in a return policy,
     * charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicy}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * Shape $ (Value): {@link ReturnWindow}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Shape $ (Value): {@link ReturnPolicyScope}. The products, variants, categories, channels, or
     * locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & ((Exclude<ReturnPolicyRevisionInputIneligible & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyRevisionInputReturnable & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ReturnPolicyRevisionRequestInput}. The rules for a return policy
 * revision: scope, eligibility, return window, approval and resolution modes, shipping, and
 * restocking fee.
 */
export type ReturnPolicyRevisionRequestInput = ({
    /**
     * Shape $ (Value): Array of string. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". Shape $[] (Value): string. Value enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Shape $ (Value): string. Whether Flint approves eligible lines automatically or waits for
     * merchant review. Automatic approval still waits for the buyer to request a Return. Value
     * enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "refund", "store_credit", "no_monetary_action". */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /** Shape $ (Value): string.  Value enum: "manual", "automatic". */
    "completion_mode"?: "manual" | "automatic";
    /**
     * Shape $ (Value): string. Whether merchandise matching this scope may be returned. An
     * ineligible revision commits no resolution behavior: allowed_resolution_types,
     * resolution_mode, release_timing, and completion_mode must all be omitted. Eligible and
     * review_required revisions require allowed_resolution_types, resolution_mode, and
     * completion_mode. Value enum: "eligible", "ineligible", "review_required".
     */
    "eligibility_result": "eligible" | "ineligible" | "review_required";
    /**
     * Shape $ (Value): string. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    /** Shape $ (Value): boolean. */
    "is_inspection_required"?: boolean;
    /** Shape $ (Value): boolean. */
    "is_merchandise_return_required": boolean;
    /** Shape $ (Value): integer. Format: int32. */
    "priority": number;
    /**
     * Shape $ (Value): string. Controls verified merchandise after receipt. automatic creates a
     * successful sellable disposition at the receiving location. For tracked merchandise, it also
     * creates an inventory receipt and movement. Untracked merchandise has no inventory effect. If
     * the Return line requires inspection, creation waits for an accepted inspection. manual
     * leaves inventory unchanged until an explicit disposition succeeds. When omitted, the value
     * defaults to automatic. Default: "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Shape $ (Value): string. Where returned merchandise is sent. Required when
     * is_merchandise_return_required is true. Presence is checked when the revision is written;
     * whether the Location exists, is active, and carries a postal address is checked when the
     * policy is activated. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Required whenever allowed_resolution_types contains refund or
     * store_credit. For other types, an omitted timing defaults to after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required. after_handoff and
     * after_receipt require is_merchandise_return_required, and after_inspection also requires
     * is_inspection_required. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /** Shape $ (Value): string.  Value enum: "automatic", "manual". */
    "resolution_mode"?: "automatic" | "manual";
    /** Shape $ (Value): string.  Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Shape $ (Value): {@link ReturnRestockingFeePolicyInput}. A restocking fee in a return
     * policy, charged as a flat amount or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyInput;
    /**
     * Shape $ (Value): {@link ReturnShippingPolicyInput}. Who pays for return shipping in a return
     * policy: the merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyInput;
    /**
     * Shape $ (Value): {@link ReturnWindowInput}. How long after an event, such as fulfillment or
     * delivery, an order can be returned under a return policy.
     */
    "return_window"?: ReturnWindowInput;
    /**
     * Shape $ (Value): {@link ReturnPolicyScopeInput}. The products, variants, categories,
     * channels, or locations a return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeInput;
})
    & ((Exclude<ReturnPolicyRevisionInputIneligibleInput & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyRevisionInputReturnableInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link ReturnPolicyScope}. The products, variants, categories, channels, or
 * locations a return policy revision applies to, or all of them.
 */
export type ReturnPolicyScope = ({
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "all", "include". */
    "match_type"?: "all" | "include" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): any. maxItems: 0. */
    "category_handles"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "channel_types"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "location_ids"?: unknown;
    /** Shape $ (Value): any.  Value enum: "all". */
    "match_type"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "product_ids"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "variant_ids"?: unknown;
})
    | (({
    /** Shape $ (Value): any.  Value enum: "include". */
    "match_type"?: unknown;
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "product_ids": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "variant_ids": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "category_handles": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "location_ids": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "channel_types": unknown;
})
    | (Record<string, unknown>)))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ReturnPolicyScopeInput}. The products, variants, categories, channels,
 * or locations a return policy revision applies to, or all of them.
 */
export type ReturnPolicyScopeInput = ({
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "category_handles"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "channel_types"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "location_ids"?: Array<string>;
    /** Shape $ (Value): string.  Value enum: "all", "include". */
    "match_type"?: "all" | "include";
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "product_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. minLength: 1. */
    "variant_ids"?: Array<string>;
})
    & (({
    /** Shape $ (Value): any. maxItems: 0. */
    "category_handles"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "channel_types"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "location_ids"?: unknown;
    /** Shape $ (Value): any.  Value enum: "all". */
    "match_type"?: "all";
    /** Shape $ (Value): any. maxItems: 0. */
    "product_ids"?: unknown;
    /** Shape $ (Value): any. maxItems: 0. */
    "variant_ids"?: unknown;
})
    | (({
    /** Shape $ (Value): any.  Value enum: "include". */
    "match_type"?: "include";
})
    & (({
    /** Shape $ (Value): any. minItems: 1. */
    "product_ids": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "variant_ids": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "category_handles": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "location_ids": unknown;
})
    | ({
    /** Shape $ (Value): any. minItems: 1. */
    "channel_types": unknown;
}))));
export type ReturnPreviewsCreateInput = {
    /**
     * Shape $ (Value): {@link CreateReturnPreviewRequestInput}. The request body for: Create
     * return preview.
     */
    "body": InputValue<CreateReturnPreviewRequestInput>;
};
/**
 * Shape $ (Value): {@link ReturnProcessDecision}. Start from the pinned policy proposal recomputed
 * for approved_quantity when the line has a policy evaluation and the proposal can be built.
 * Otherwise start with return_required_quantity equal to approved_quantity,
 * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
 * store_credit in that order regardless of whether the original payment is refundable, no
 * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
 * supplied field replaces its starting value; allowed_resolution_types replaces the whole list.
 * Omit automatic_resolution_type to keep its starting value, or send null to resolve manually.
 * Then fill an omitted release_timing with after_inspection when merchandise is required and
 * inspection is required, after_receipt when merchandise is required without inspection, or
 * after_approval when no merchandise is required. Validate the merged decision for quantity
 * bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned
 * policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
 */
export type ReturnProcessDecision = ({
    /**
     * Shape $ (Value): Array of string. Optional replacement for the entire starting list.
     * Defaults to the buildable pinned policy proposal; otherwise refund, exchange, replacement,
     * no_monetary_action, and store_credit in that order, independent of the original payment's
     * refundability. The resulting list must be valid and non-empty when approved_quantity is
     * above zero. [] enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit". Shape $[] (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Shape $ (Value): integer string. Required whole-number quantity from zero through the line's
     * requested_quantity; fractional quantities are not supported. When approved_quantity is below
     * requested_quantity, send decline_reason; decline_reason_message is optional. Both decline
     * fields are forbidden when all requested quantity is approved. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "approved_quantity": `${bigint}`;
    /**
     * Shape $ (Value): string or null. Optional refund, store_credit, or no_monetary_action that
     * Flint creates and confirms automatically. Omit to keep the policy proposal's value, or the
     * absent value from no-policy defaults. Send null to resolve the line manually; clearing a
     * policy proposal's automatic value requires override_reason. Must be in the resulting
     * allowed_resolution_types. Exchange and replacement cannot be automated. An unavailable
     * automatic refund or store credit fails with 409 ACTION_NOT_ALLOWED and reason
     * refund_unavailable or store_credit_unavailable. Value enum: "refund", "store_credit",
     * "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null | (string & {}) | null;
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Optional explanation accompanying decline_reason, up to 2048
     * characters (Unicode code points), counted before normalization. Requires decline_reason and
     * is forbidden when all requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Shape $ (Value): boolean. Optional inspection requirement. Defaults to the buildable pinned
     * policy proposal or false when no proposal can be built. The resulting requirement must be
     * reachable with the merged merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Shape $ (Value): string. Required when a decision differs from a buildable pinned policy
     * proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. The release timing fill also applies
     * to the proposal and does not count as a deviation. Otherwise optional when a pinned policy
     * proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value
     * enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): string. Optional explanation accompanying override_reason. Requires
     * override_reason and is forbidden without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Shape $ (Value): string. Optional receiving Location with a postal address. Defaults to the
     * buildable pinned policy proposal or no location when no proposal can be built. Required when
     * the resulting return_required_quantity is above zero and there is no starting location. A
     * process receipt does not supply the decision's location. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Optional gate for every resolution type. Defaults to the policy
     * proposal's timing when set. After merging supplied fields, an unset timing becomes
     * after_inspection when return_required_quantity is above zero and inspection is required,
     * after_receipt when return_required_quantity is above zero without inspection, or
     * after_approval when return_required_quantity is zero. Applies to every resolution type,
     * including exchanges and replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /**
     * Shape $ (Value): integer string. How much of the approved quantity the buyer must physically
     * send back; fractional quantities are not supported. Set 0 for a returnless refund, where the
     * buyer keeps the merchandise and the Return still settles the money. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: `${bigint}`;
})
    & (((unknown)
    | ({
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
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
     * Shape $ (Value): string. Required when a decision differs from a buildable pinned policy
     * proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. The release timing fill also applies
     * to the proposal and does not count as a deviation. Otherwise optional when a pinned policy
     * proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value
     * enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
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
 * Shape $ (Value): {@link ReturnProcessDecisionInput}. Start from the pinned policy proposal
 * recomputed for approved_quantity when the line has a policy evaluation and the proposal can be
 * built. Otherwise start with return_required_quantity equal to approved_quantity,
 * allowed_resolution_types containing refund, exchange, replacement, no_monetary_action, and
 * store_credit in that order regardless of whether the original payment is refundable, no
 * automatic_resolution_type, is_inspection_required false, and no receiving_location_id. Each
 * supplied field replaces its starting value; allowed_resolution_types replaces the whole list.
 * Omit automatic_resolution_type to keep its starting value, or send null to resolve manually.
 * Then fill an omitted release_timing with after_inspection when merchandise is required and
 * inspection is required, after_receipt when merchandise is required without inspection, or
 * after_approval when no merchandise is required. Validate the merged decision for quantity
 * bounds, allowed resolution types, and reachable timing and inspection requirements. A pinned
 * policy always requires override_reason when approved_quantity exceeds evaluated
 * eligible_quantity, even when no proposal can be built. With a pinned policy but no proposal,
 * other decision fields use these defaults and override_reason is otherwise optional. Example:
 * {"approved_quantity":1,"receiving_location_id":"loc_01KEZF7C005QW6QDMVP0P473FZ"}.
 */
export type ReturnProcessDecisionInput = ({
    /**
     * Shape $ (Value): Array of string. Optional replacement for the entire starting list.
     * Defaults to the buildable pinned policy proposal; otherwise refund, exchange, replacement,
     * no_monetary_action, and store_credit in that order, independent of the original payment's
     * refundability. The resulting list must be valid and non-empty when approved_quantity is
     * above zero. [] enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit". Shape $[] (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Shape $ (Value): integer string. Required whole-number quantity from zero through the line's
     * requested_quantity; fractional quantities are not supported. When approved_quantity is below
     * requested_quantity, send decline_reason; decline_reason_message is optional. Both decline
     * fields are forbidden when all requested quantity is approved. Use an integer string (decimal
     * digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "approved_quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string or null. Optional refund, store_credit, or no_monetary_action that
     * Flint creates and confirms automatically. Omit to keep the policy proposal's value, or the
     * absent value from no-policy defaults. Send null to resolve the line manually; clearing a
     * policy proposal's automatic value requires override_reason. Must be in the resulting
     * allowed_resolution_types. Exchange and replacement cannot be automated. An unavailable
     * automatic refund or store credit fails with 409 ACTION_NOT_ALLOWED and reason
     * refund_unavailable or store_credit_unavailable. Value enum: "refund", "store_credit",
     * "no_monetary_action", null.
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | null;
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
     */
    "decline_reason"?: "not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other";
    /**
     * Shape $ (Value): string. Optional explanation accompanying decline_reason, up to 2048
     * characters (Unicode code points), counted before normalization. Requires decline_reason and
     * is forbidden when all requested quantity is approved. minLength: 1. maxLength: 2048.
     */
    "decline_reason_message"?: string;
    /**
     * Shape $ (Value): boolean. Optional inspection requirement. Defaults to the buildable pinned
     * policy proposal or false when no proposal can be built. The resulting requirement must be
     * reachable with the merged merchandise quantity and release timing.
     */
    "is_inspection_required"?: boolean;
    /**
     * Shape $ (Value): string. Required when a decision differs from a buildable pinned policy
     * proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. The release timing fill also applies
     * to the proposal and does not count as a deviation. Otherwise optional when a pinned policy
     * proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value
     * enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
     */
    "override_reason"?: "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
    /**
     * Shape $ (Value): string. Optional explanation accompanying override_reason. Requires
     * override_reason and is forbidden without a pinned policy. minLength: 1.
     */
    "override_reason_message"?: string;
    /**
     * Shape $ (Value): string. Optional receiving Location with a postal address. Defaults to the
     * buildable pinned policy proposal or no location when no proposal can be built. Required when
     * the resulting return_required_quantity is above zero and there is no starting location. A
     * process receipt does not supply the decision's location. minLength: 1.
     */
    "receiving_location_id"?: string;
    /**
     * Shape $ (Value): string. Optional gate for every resolution type. Defaults to the policy
     * proposal's timing when set. After merging supplied fields, an unset timing becomes
     * after_inspection when return_required_quantity is above zero and inspection is required,
     * after_receipt when return_required_quantity is above zero without inspection, or
     * after_approval when return_required_quantity is zero. Applies to every resolution type,
     * including exchanges and replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual";
    /**
     * Shape $ (Value): integer string. How much of the approved quantity the buyer must physically
     * send back; fractional quantities are not supported. Set 0 for a returnless refund, where the
     * buyer keeps the merchandise and the Return still settles the money. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     */
    "return_required_quantity"?: `${bigint}` | bigint;
})
    & (((({
    "decline_reason_message"?: never;
}))
    | ({
    /**
     * Shape $ (Value): string. Value enum: "not_eligible", "quantity_unavailable",
     * "evidence_missing", "suspected_abuse", "merchant_discretion", "other".
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
     * Shape $ (Value): string. Required when a decision differs from a buildable pinned policy
     * proposal. With a pinned policy, also required whenever approved_quantity exceeds evaluated
     * eligible_quantity, even when no proposal can be built. The release timing fill also applies
     * to the proposal and does not count as a deviation. Otherwise optional when a pinned policy
     * proposal cannot be built or no deviation exists. Forbidden without a pinned policy. Value
     * enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other".
     */
    "override_reason": "customer_service_exception" | "policy_correction" | "risk_review" | "merchant_discretion" | "other";
})));
/**
 * Shape $ (Value): {@link ReturnProcessDispositionRequest}. What was done with a returned item,
 * such as restocked as sellable or sent for repair, supplied when processing an existing return.
 */
export type ReturnProcessDispositionRequest = {
    /**
     * Shape $ (Value): string. Value enum: "sellable", "quality_control", "damaged",
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
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_location_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string;
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result"
        | "return_policy"
        | "warehouse_override"
        | "safety_requirement"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReturnProcessDispositionRequestInput}. What was done with a returned
 * item, such as restocked as sellable or sent for repair, supplied when processing an existing
 * return.
 */
export type ReturnProcessDispositionRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "sellable", "quality_control", "damaged",
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
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "inventory_location_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "occurred_at": string | globalThis.Date;
    /**
     * Shape $ (Value): string. Value enum: "inspection_result", "return_policy",
     * "warehouse_override", "safety_requirement", "other".
     */
    "reason": "inspection_result" | "return_policy" | "warehouse_override" | "safety_requirement" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReturnProcessInspectionRequest}. An inspection result for a returned
 * item, supplied when processing an existing return.
 */
export type ReturnProcessInspectionRequest = {
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required" | (string & {});
    /**
     * Shape $ (Value): string. `undetermined`: The item's condition could not be assessed. Value
     * enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete",
     * "undetermined".
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
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of string. [] enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * Shape $[] (Value): string. Value enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "inspected_at": string;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
};
/**
 * Shape $ (Value): {@link ReturnProcessInspectionRequestInput}. An inspection result for a
 * returned item, supplied when processing an existing return.
 */
export type ReturnProcessInspectionRequestInput = {
    /** Shape $ (Value): string.  Value enum: "accepted", "rejected", "review_required". */
    "acceptance_status": "accepted" | "rejected" | "review_required";
    /**
     * Shape $ (Value): string. `undetermined`: The item's condition could not be assessed. Value
     * enum: "new", "unopened", "opened", "used", "damaged", "defective", "incomplete",
     * "undetermined".
     */
    "condition": "new" | "unopened" | "opened" | "used" | "damaged" | "defective" | "incomplete" | "undetermined";
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of string. [] enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
     * Shape $[] (Value): string. Value enum: "matches_expected_item", "wrong_item", "damaged",
     * "defective", "used", "missing_parts", "empty_package", "counterfeit_suspected", "other".
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "inspected_at": string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "internal_note"?: string;
};
/**
 * Shape $ (Value): {@link ReturnProcessReceiptRequest}. The receipt of returned merchandise, with
 * when and where it was received, supplied when processing an existing return.
 */
export type ReturnProcessReceiptRequest = {
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Format:
     * date-time. minLength: 1.
     */
    "received_at": string;
    /** Shape $ (Value): string. minLength: 1. */
    "receiving_location_id": string;
    /**
     * Shape $ (Value): {@link ReturnSourceSystem}. The system a return event came from, such as a
     * point of sale or warehouse system, with its own identifier.
     */
    "source_system"?: ReturnSourceSystem;
};
/**
 * Shape $ (Value): {@link ReturnProcessReceiptRequestInput}. The receipt of returned merchandise,
 * with when and where it was received, supplied when processing an existing return.
 */
export type ReturnProcessReceiptRequestInput = {
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. minLength: 1. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Format:
     * date-time. minLength: 1.
     */
    "received_at": string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "receiving_location_id": string;
    /**
     * Shape $ (Value): {@link ReturnSourceSystemInput}. The system a return event came from, such
     * as a point of sale or warehouse system, with its own identifier.
     */
    "source_system"?: ReturnSourceSystemInput;
};
/**
 * Shape $ (Value): {@link ReturnProcessResolutionRequest}. The resolution to apply to a returned
 * item, such as refund or exchange, with the quantity and any replacement items.
 */
export type ReturnProcessResolutionRequest = ({
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequest}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequest}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequest>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
});
/**
 * Shape $ (Value): {@link ReturnProcessResolutionRequestInput}. The resolution to apply to a
 * returned item, such as refund or exchange, with the quantity and any replacement items.
 */
export type ReturnProcessResolutionRequestInput = ({
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card";
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1. */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price";
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItemRequestInput}. Shape $[] (Value):
     * {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in a return
     * resolution, from a variant, a bundle, or a custom name and price.
     */
    "replacement_line_items"?: Array<ReturnReplacementLineItemRequestInput>;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit".
     */
    "resolution_type": "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
});
/**
 * Shape $ (Value): {@link ReturnProcessResult}. The return is the primary resource and
 * expected_version target; the other resources report the processing effects.
 */
export type ReturnProcessResult = {
    /** Shape $ (Value): {@link ReturnResource}. A request to send purchased items back. */
    "return": ReturnResource;
    /**
     * Shape $ (Value): Array of {@link ReturnDisposition}. Shape $[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "return_dispositions": Array<ReturnDisposition>;
    /**
     * Shape $ (Value): Array of {@link ReturnInspection}. Shape $[] (Value): {@link
     * ReturnInspection}. An assessment of the condition of returned items.
     */
    "return_inspections": Array<ReturnInspection>;
    /**
     * Shape $ (Value): Array of {@link ReturnReceipt}. Shape $[] (Value): {@link ReturnReceipt}. A
     * record of returned items arriving at a location.
     */
    "return_receipts": Array<ReturnReceipt>;
    /**
     * Shape $ (Value): Array of {@link ReturnResolution}. Shape $[] (Value): {@link
     * ReturnResolution}. The refund, exchange, or other outcome of a return.
     */
    "return_resolutions": Array<ReturnResolution>;
};
/**
 * Shape $ (Value): {@link ReturnReason}. A reason customers can select when requesting a return.
 */
export type ReturnReason = {
    /**
     * Shape $ (Value): Array of string. Catalog category handles this reason applies to. A reason
     * with categories is suggested, and accepted from a customer session, only for order lines
     * whose product is in one of them. A reason with no categories applies to every line. Not
     * product types or tags: use handles from GET /v1/categories. Shape $[] (Value): string.
     */
    "category_handles": Array<string>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /** Shape $ (Value): string. */
    "handle": string;
    /** Shape $ (Value): boolean. */
    "is_note_required": boolean;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "return_reason_id": string;
    /** Shape $ (Value): string.  Value enum: "flint", "merchant". */
    "source": "flint" | "merchant" | (string & {});
    /**
     * Shape $ (Value): string. Whether the reason is offered. An active reason is offered and
     * accepted on new Return lines. An inactive reason is not offered or accepted until you set it
     * back to active. An archived reason is retired for good and stays readable on Returns that
     * recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}.
     * Flint reasons cannot be deleted, but you can set them inactive. Value enum: "active",
     * "archived", "inactive".
     */
    "status": "active" | "archived" | "inactive" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnReasonSummary}. A return reason a buyer can pick for a line, with
 * its `handle` and whether a note is required.
 */
export type ReturnReasonSummary = {
    /** Shape $ (Value): string. */
    "handle": string;
    /** Shape $ (Value): boolean. */
    "is_note_required": boolean;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "return_reason_id": string;
};
export type ReturnReasonsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateReturnReasonRequestInput}. The request body for: Create return
     * reason.
     */
    "body": InputValue<CreateReturnReasonRequestInput>;
};
export type ReturnReasonsGetInput = {
    /** Shape $ (Value): string. */
    "return_reason_id": InputValue<string>;
};
export type ReturnReasonsListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "handle"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "flint", "merchant". Shape $[]
     * (Value): string. Value enum: "flint", "merchant".
     */
    "source"?: InputValue<Array<"flint" | "merchant">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "archived", "inactive".
     * Shape $[] (Value): string. Value enum: "active", "archived", "inactive".
     */
    "status"?: InputValue<Array<"active" | "archived" | "inactive">>;
};
export type ReturnReasonsRemoveInput = {
    /** Shape $ (Value): string. */
    "return_reason_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type ReturnReasonsUpdateInput = {
    /** Shape $ (Value): string. */
    "return_reason_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateReturnReasonRequestInput}. The request body for: Update return
     * reason.
     */
    "body": InputValue<UpdateReturnReasonRequestInput>;
};
/** Shape $ (Value): {@link ReturnReceipt}. A record of returned items arriving at a location. */
export type ReturnReceipt = {
    /**
     * Shape $ (Value): string. Value enum: "entry_error", "duplicate_observation",
     * "source_correction", "reconciliation_correction", "other".
     */
    "correction_reason"?: "entry_error"
        | "duplicate_observation"
        | "source_correction"
        | "reconciliation_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "correction_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put
     * secrets in this field. maxLength: 255.
     */
    "external_actor_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ReturnDisposition}. Shape $[] (Value): {@link
     * ReturnDisposition}. A decision about how returned merchandise will be handled.
     */
    "generated_dispositions": Array<ReturnDisposition>;
    /**
     * Shape $ (Value): Array of {@link ReturnReceiptLineItem}. Shape $[] (Value): {@link
     * ReturnReceiptLineItem}. A returned item recorded as received.
     */
    "line_items": Array<ReturnReceiptLineItem>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "received_at": string;
    /** Shape $ (Value): string. */
    "receiving_location_id": string;
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_receipt_id": string;
    /** Shape $ (Value): string. */
    "shipment_id"?: string;
    /**
     * Shape $ (Value): {@link ReturnSourceSystem} or null. Shape $.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. Shape $.anyOf[2] (Value): null.
     */
    "source_system": ((ReturnSourceSystem) | (null));
    /** Shape $ (Value): string.  Value enum: "current", "superseded". */
    "status": "current" | "superseded" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "superseded_at"?: string;
    /** Shape $ (Value): string. */
    "superseded_by_return_receipt_id"?: string;
    /** Shape $ (Value): string. */
    "supersedes_return_receipt_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link ReturnReceiptLineItem}. A returned item recorded as received. */
export type ReturnReceiptLineItem = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "available_disposition_quantity": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_receipt_id": string;
    /** Shape $ (Value): string. */
    "return_receipt_line_item_id": string;
    /**
     * Shape $ (Value): Array of string. [] enum: "verify". Shape $[] (Value): string. Value enum:
     * "verify".
     */
    "supported_actions": Array<"verify" | (string & {})>;
    /**
     * Shape $ (Value): {@link ReturnUnverifiedItem}. Merchandise received in a return that does
     * not match an expected return line, described by name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
    /**
     * Shape $ (Value): string. Value enum: "order_match_confirmed", "sku_match_confirmed",
     * "inspection_confirmed", "merchant_review", "other".
     */
    "verification_reason"?: "order_match_confirmed"
        | "sku_match_confirmed"
        | "inspection_confirmed"
        | "merchant_review"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "verification_reason_message"?: string;
    /** Shape $ (Value): string.  Value enum: "matched", "unverified", "excess". */
    "verification_status": "matched" | "unverified" | "excess" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "verified_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "verified_by"?: ReturnActor;
};
/**
 * Shape $ (Value): {@link ReturnReceiptLineItemRequest}. One line of received merchandise: a
 * matched return line, excess quantity, or an unverified item.
 */
export type ReturnReceiptLineItemRequest = ({
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. The expected Return line. Required for matched and explicitly
     * excess merchandise. minLength: 1.
     */
    "return_line_item_id"?: string;
    /**
     * Shape $ (Value): {@link ReturnUnverifiedItem}. A buyer or catalog identity observation that
     * has not been matched to a Return line. Merchandise received in a return that does not match
     * an expected return line, described by name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
    /**
     * Shape $ (Value): string. Set to excess only when the merchandise is known to exceed the
     * committed handback quantity for return_line_item_id. Omit for matched or unverified
     * merchandise. Value enum: "excess".
     */
    "verification_status"?: "excess" | (string & {});
})
    & ((({
    /**
     * Shape $ (Value): string. The expected Return line. Required for matched and explicitly
     * excess merchandise. minLength: 1.
     */
    "return_line_item_id": string;
}))
    | (({
    /**
     * Shape $ (Value): {@link ReturnUnverifiedItem}. A buyer or catalog identity observation that
     * has not been matched to a Return line. Merchandise received in a return that does not match
     * an expected return line, described by name, SKU, and description.
     */
    "unverified_item": ReturnUnverifiedItem;
}))
    | (({
    /** Shape $ (Value): any.  Value enum: "excess". */
    "verification_status": unknown;
    /**
     * Shape $ (Value): string. The expected Return line. Required for matched and explicitly
     * excess merchandise. minLength: 1.
     */
    "return_line_item_id": string;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ReturnReceiptLineItemRequestInput}. One line of received merchandise: a
 * matched return line, excess quantity, or an unverified item.
 */
export type ReturnReceiptLineItemRequestInput = ({
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. The expected Return line. Required for matched and explicitly
     * excess merchandise. minLength: 1.
     */
    "return_line_item_id"?: string;
    /**
     * Shape $ (Value): {@link ReturnUnverifiedItemInput}. A buyer or catalog identity observation
     * that has not been matched to a Return line. Merchandise received in a return that does not
     * match an expected return line, described by name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItemInput;
    /**
     * Shape $ (Value): string. Set to excess only when the merchandise is known to exceed the
     * committed handback quantity for return_line_item_id. Omit for matched or unverified
     * merchandise. Value enum: "excess".
     */
    "verification_status"?: "excess";
})
    & ((({
    /**
     * Shape $ (Value): string. The expected Return line. Required for matched and explicitly
     * excess merchandise. minLength: 1.
     */
    "return_line_item_id": string;
})
    & (({
    "unverified_item"?: never;
}) & ({
    "verification_status"?: never;
})))
    | (({
    /**
     * Shape $ (Value): {@link ReturnUnverifiedItemInput}. A buyer or catalog identity observation
     * that has not been matched to a Return line. Merchandise received in a return that does not
     * match an expected return line, described by name, SKU, and description.
     */
    "unverified_item": ReturnUnverifiedItemInput;
})
    & (({
    "return_line_item_id"?: never;
}) & ({
    "verification_status"?: never;
})))
    | (({
    /** Shape $ (Value): any.  Value enum: "excess". */
    "verification_status": "excess";
    /**
     * Shape $ (Value): string. The expected Return line. Required for matched and explicitly
     * excess merchandise. minLength: 1.
     */
    "return_line_item_id": string;
})
    & ({
    "unverified_item"?: never;
})));
export type ReturnReceiptsGetInput = {
    /** Shape $ (Value): string. */
    "return_receipt_id": InputValue<string>;
};
export type ReturnReceiptsListInput = {
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. */
    "receiving_location_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "shipment_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "manual", "pos", "wms", "erp",
     * "other", "flint". Shape $[] (Value): string. Value enum: "manual", "pos", "wms", "erp",
     * "other", "flint".
     */
    "source_system_type"?: InputValue<Array<"manual" | "pos" | "wms" | "erp" | "other" | "flint">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "current", "superseded". Shape $[]
     * (Value): string. Value enum: "current", "superseded".
     */
    "status"?: InputValue<Array<"current" | "superseded">>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "matched", "unverified", "excess".
     * Shape $[] (Value): string. Value enum: "matched", "unverified", "excess".
     */
    "verification_status"?: InputValue<Array<"matched" | "unverified" | "excess">>;
};
export type ReturnReceiptsVerifyLineItemInput = {
    /** Shape $ (Value): string. */
    "return_receipt_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "return_receipt_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link VerifyReturnReceiptLineItemRequestInput}. The request body for:
     * Verify return receipt line item.
     */
    "body": InputValue<VerifyReturnReceiptLineItemRequestInput>;
};
/**
 * Shape $ (Value): {@link ReturnReplacementLineItem}. A replacement item added to a return
 * resolution, with its quantity and price totals.
 */
export type ReturnReplacementLineItem = {
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. */
    "return_replacement_line_item_id": string;
    /** Shape $ (Value): string. */
    "return_resolution_id": string;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnReplacementLineItemRequest}. A replacement item to include in a
 * return resolution, from a variant, a bundle, or a custom name and price.
 */
export type ReturnReplacementLineItemRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link ReturnReplacementLineItemRequestInput}. A replacement item to include in
 * a return resolution, from a variant, a bundle, or a custom name and price.
 */
export type ReturnReplacementLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /** Shape $ (Value): string. minLength: 1. */
    "sku"?: string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "name"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
}))));
/**
 * Shape $ (Value): {@link ReturnResolution}. The refund, exchange, or other outcome of a return.
 */
export type ReturnResolution = {
    /**
     * Shape $ (Value): string. Value enum: "buyer_payment", "buyer_selection", "merchant_review",
     * "manual_release", "linked_effect_retry", "other".
     */
    "action_reason"?: "buyer_payment"
        | "buyer_selection"
        | "merchant_review"
        | "manual_release"
        | "linked_effect_retry"
        | "other"
        | (string & {});
    /** Shape $ (Value): string.  Value enum: "buyer", "merchant", "integration". */
    "action_required_by"?: "buyer" | "merchant" | "integration" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionAdjustment}. Shape $[] (Value): {@link
     * ReturnResolutionAdjustment}. A fee or credit applied to a return resolution, such as a
     * restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Value returned to the buyer. For store_credit, the
     * value issued on new gift cards. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "cancellation_reason_message"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "confirmed_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "confirmed_by"?: ReturnActor;
    /** Shape $ (Value): string. */
    "corrects_return_resolution_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "created_by": ReturnActor;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionExecutionBlocker}. Shape $[] (Value):
     * {@link ReturnResolutionExecutionBlocker}. Work that must complete before a Return resolution
     * can finish.
     */
    "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Reason code for a failed Return resolution, when available.
     * refund_line_value_unavailable means another refund already returned part of an order line,
     * so retrying cannot succeed; cancel the resolution and resolve the line for fewer units or
     * without a refund. replacement_fulfillment_canceled means the replacement Order's fulfillment
     * was canceled, so it won't be sent. gift_card_refund_destination_required means the original
     * gift card cannot accept the refund; retry with gift_card_refund_destination set to
     * new_gift_card. store_credit_unavailable means the original payment cannot fund store credit;
     * cancel the resolution and create a refund resolution. Value enum:
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
    /** Shape $ (Value): string. Explanation of a failed Return resolution, when available. */
    "failure_message"?: string;
    /** Shape $ (Value): string. When the resolution became fulfilled. Format: date-time. */
    "fulfilled_at"?: string;
    /**
     * Shape $ (Value): string. Where the gift-card-paid portion is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards. Accepted for refund, exchange, and
     * correction, except a correction of store_credit. Omit for store_credit, replacement, and
     * no_monetary_action; sending it returns INVALID_REQUEST with a NOT_ALLOWED detail and
     * conflicting_fields naming resolution_type and gift_card_refund_destination. Store credit and
     * its corrections always issue new gift cards. PATCH can change it only while proposed. Retry
     * persists the chosen destination before starting the new attempt. Default: "original". Value
     * enum: "original", "new_gift_card".
     */
    "gift_card_refund_destination"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReturnResolutionLineItem}. Shape $[] (Value): {@link
     * ReturnResolutionLineItem}. A return line included in a resolution, with its quantity and
     * returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata": Record<string, string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "payment_intent_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link ExpandedPaymentIntentSummary}. Shape $[] (Value): {@link
     * ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount, status,
     * and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /**
     * Shape $ (Value): string. Value enum: "original_price", "current_price",
     * "merchant_agreed_price".
     */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "refund_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link Refund}. Shape $[] (Value): {@link Refund}. Money returned
     * against a collected payment.
     */
    "refunds"?: Array<Refund>;
    /**
     * Shape $ (Value): Array of {@link ReturnReplacementLineItem}. Shape $[] (Value): {@link
     * ReturnReplacementLineItem}. A replacement item added to a return resolution, with its
     * quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "replacement_order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "replacement_order_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "refund", "exchange", "replacement", "store_credit",
     * "no_monetary_action", "correction".
     */
    "resolution_type": "refund"
        | "exchange"
        | "replacement"
        | "store_credit"
        | "no_monetary_action"
        | "correction"
        | (string & {});
    /** Shape $ (Value): string. */
    "return_id": string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
    /**
     * Shape $ (Value): string. fulfilled means the buyer has the value: every linked Refund
     * succeeded, any balance was collected, and any replacement Order's fulfillment_status is
     * fulfilled or not_applicable. Value enum: "proposed", "pending", "requires_action",
     * "fulfilled", "failed", "canceled".
     */
    "status": "proposed" | "pending" | "requires_action" | "fulfilled" | "failed" | "canceled" | (string & {});
    /**
     * Shape $ (Value): Array of string. Actions that can succeed now. Empty unless the parent
     * Return is open, except checkout_session. A failed resolution lists retry while it has a
     * failed effect and its failure code permits retry. It lists cancel when it never created a
     * Refund, PaymentIntent, or Order. [] enum: "cancel", "checkout_session", "confirm",
     * "release", "retry". Shape $[] (Value): string. Value enum: "cancel", "checkout_session",
     * "confirm", "release", "retry".
     */
    "supported_actions": Array<"cancel" | "checkout_session" | "confirm" | "release" | "retry" | (string & {})>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReturnResolutionAdjustment}. A fee or credit applied to a return
 * resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
 */
export type ReturnResolutionAdjustment = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "return_policy_revision_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_adjustment_id": string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status": "applied" | "waived" | (string & {});
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "waived_at"?: string;
    /**
     * Shape $ (Value): {@link ReturnActor}. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "waived_by"?: ReturnActor;
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Shape $ (Value): string. */
    "waiver_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionAdjustmentRequest}. A fee or credit to apply to a return
 * resolution, with the assessed and applied amounts and whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequest = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status"?: "applied" | "waived" | (string & {});
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionAdjustmentRequestInput}. A fee or credit to apply to a
 * return resolution, with the assessed and applied amounts and whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "applied_amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Value enum: "return_policy", "inspection_result",
     * "return_shipping_cost", "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id"?: string;
    /** Shape $ (Value): string.  Value enum: "applied", "waived". */
    "status"?: "applied" | "waived";
    /** Shape $ (Value): string.  Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit";
    /**
     * Shape $ (Value): string. Value enum: "policy_override", "merchant_review",
     * "customer_service", "other".
     */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionExecutionBlocker}. Work that must complete before a
 * Return resolution can finish.
 */
export type ReturnResolutionExecutionBlocker = {
    /**
     * Shape $ (Value): string. handoff_pending: The buyer has not handed off the required
     * merchandise. receipt_pending: Required merchandise has not been received.
     * inspection_pending: Required inspection is incomplete. manual_release_pending: The merchant
     * must release the resolution. buyer_payment_pending: The buyer's balance has not been
     * collected. refund_pending: A linked Refund has not succeeded. replacement_order_pending: The
     * replacement Order has not been created. fulfillment_pending: The replacement Order, in
     * linked_resource, has units not yet fulfilled. Value enum: "handoff_pending",
     * "receipt_pending", "inspection_pending", "manual_release_pending", "buyer_payment_pending",
     * "refund_pending", "replacement_order_pending", "fulfillment_pending".
     */
    "code": "handoff_pending"
        | "receipt_pending"
        | "inspection_pending"
        | "manual_release_pending"
        | "buyer_payment_pending"
        | "refund_pending"
        | "replacement_order_pending"
        | "fulfillment_pending"
        | (string & {});
    /**
     * Shape $ (Value): {@link ResourceReference}. A reference to another resource by
     * `resource_type` and `resource_id`.
     */
    "linked_resource"?: ResourceReference;
    /** Shape $ (Value): string. */
    "return_line_item_id"?: string;
};
/**
 * Shape $ (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution, with
 * its quantity and returned total.
 */
export type ReturnResolutionLineItem = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Release gate for every resolution type, including exchanges and
     * replacements. Released after the Return is approved. Released after the buyer hands back the
     * required merchandise. Released after the required merchandise is received. Released after
     * the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual".
     */
    "release_timing"?: "after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {});
    /** Shape $ (Value): string. */
    "return_line_item_id": string;
    /** Shape $ (Value): string. */
    "return_resolution_id": string;
    /** Shape $ (Value): string. */
    "return_resolution_line_item_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "returned_total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link ReturnResolutionLineItemRequest}. A return line and quantity to include
 * in a return resolution.
 */
export type ReturnResolutionLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /** Shape $ (Value): string. minLength: 1. */
    "return_line_item_id": string;
};

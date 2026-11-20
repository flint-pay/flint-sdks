import type { BundleComponent, BundleComponentPreviousAttributes } from './types-1.js';
import type { Fulfillment } from './types-27.js';
import type { Image, ImagePreviousAttributes } from './types-31.js';
import type { OrderLineItemModifier, OrderLineItemModifierPreviousAttributes } from './types-46.js';
import type { ReturnActor, ReturnActorPreviousAttributes } from './types-62.js';
import type { SelectedProductOption, SelectedProductOptionPreviousAttributes } from './types-68.js';
import type { FulfillmentPreviousAttributes } from './types-28.js';
import type { MoneyValue, MoneyValuePreviousAttributes } from './types-44.js';
import type { InputValue } from '../runtime.js';
import type { CreateReturnPolicyRequestInput, CreateReturnPreviewRequestInput, CreateReturnReasonRequestInput } from './types-13.js';
import type { PublishReturnPolicyRevisionRequestInput } from './types-59.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { UpdateReturnPolicyRequestInput, UpdateReturnReasonRequestInput } from './types-77.js';
import type { MetadataMap, MetadataRequestInput, MerchantWebhookEnvelope } from './types-43.js';
import type {
    ReturnRestockingFeePolicy,
    ReturnShippingPolicy,
    ReturnWindow,
    ReturnRestockingFeePolicyRequestInput,
    ReturnShippingPolicyRequestInput,
    ReturnWindowRequestInput,
    ReturnSourceSystemRequest,
    ReturnSourceSystemRequestInput,
    ReturnResource,
    ReturnSourceSystem
} from './types-66.js';
import type {
    ReturnReplacementLineItemRequest,
    ReturnReplacementLineItemRequestInput,
    ReturnResolution,
    ReturnReceiptLineItem
} from './types-65.js';
import type { ReturnDisposition, ReturnInspection } from './types-63.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { WebhookSnapshotReturnDisposition } from './types-79.js';
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
     * ID of the Return line to act on. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
     * ID of the Return line to act on. minLength: 1. Example: "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
/** An item included in a return request. */
export type ReturnLineItem = {
    /**
     * Inspected units that were accepted. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "accepted_quantity": number;
    /**
     * Resolution types that can settle this line's approved quantity. [] enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Units the decision approved. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
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
     * and completed resolutions. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "available_resolution_quantity": number;
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** Note the buyer gave about this line. Some return reasons require one. */
    "buyer_note"?: string;
    /**
     * Approved units canceled later. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "canceled_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Who recorded the decision on this line. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "decided_by"?: ReturnActor;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "decision_at"?: string;
    /**
     * Why the line's declined quantity was declined. Value enum: "not_eligible",
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
    /** Detail sent with the decline. */
    "decline_reason_message"?: string;
    /**
     * Units the decision declined. Whole-number quantity; fractional quantities are not supported.
     * Format: int64.
     */
    "declined_quantity": number;
    /** Description of the item as sold. */
    "description"?: string;
    /**
     * Units with a successful disposition. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "dispositioned_quantity": number;
    /**
     * How the pinned return policy judged this line when the Return was created, with the policy
     * revision it used. Whether a return line is eligible under policy, with the eligible
     * quantity, allowed resolution types, and any policy adjustments.
     */
    "eligibility": ReturnLineItemEligibility;
    /**
     * Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there
     * is no related fulfillment. anyOf[1] (Value): {@link Fulfillment}. Work required to deliver
     * an order's items. anyOf[2] (Value): null.
     */
    "fulfillment"?: ((Fulfillment) | (null));
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /**
     * Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities
     * are not supported. Format: int64.
     */
    "handed_off_quantity": number;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
    "image"?: Image;
    /**
     * Units that have been inspected. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "inspected_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "inspection_waived_at"?: string;
    /**
     * Who waived inspection for this line. Who performed a return action: a buyer, merchant,
     * integration, or the system, with an optional ID.
     */
    "inspection_waived_by"?: ReturnActor;
    /**
     * Why inspection was waived for this line. Value enum: "policy_override",
     * "trusted_in_store_handoff", "merchant_review", "other".
     */
    "inspection_waiver_reason"?: "policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {});
    /** Detail sent when inspection was waived. */
    "inspection_waiver_reason_message"?: string;
    /** Whether returned units of this line must be inspected. */
    "is_inspection_required"?: boolean;
    /**
     * Whether the decision overrode the pinned return policy's proposal. `override_reason` says
     * why.
     */
    "is_policy_overridden": boolean;
    /**
     * Where this line's merchandise stands, from handoff through disposition. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
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
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** Order that owns order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "overridden_at"?: string;
    /**
     * Who recorded the override. Who performed a return action: a buyer, merchant, integration, or
     * the system, with an optional ID.
     */
    "overridden_by"?: ReturnActor;
    /**
     * Why the decision overrode the pinned return policy's proposal. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other".
     */
    "override_reason"?: "customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {});
    /** Detail sent with the override. */
    "override_reason_message"?: string;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Units that arrived. Whole-number quantity; fractional quantities are not supported. Format:
     * int64.
     */
    "received_quantity": number;
    /**
     * ID of the Location the buyer sends the merchandise to. Absent when none has to come back.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Inspected units that were rejected. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
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
    /**
     * Units the request asked to return. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "requested_quantity": number;
    /**
     * Outcome requested for this line when it was created. Absent when none was requested. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /**
     * ID of the variant requested for this exchange. The merchant chooses the replacement and
     * confirms its price during resolution.
     */
    "requested_variant"?: string;
    /**
     * Whether the value for this line's approved quantity has been delivered. Value enum:
     * "not_selected", "pending", "requires_action", "completed", "failed".
     */
    "resolution_status": "not_selected" | "pending" | "requires_action" | "completed" | "failed" | (string & {});
    /**
     * Units whose resolution has finished. Whole-number quantity; fractional quantities are not
     * supported. Format: int64.
     */
    "resolved_quantity": number;
    /** ID of the Return this line belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". */
    "return_id": string;
    /**
     * Unique identifier for this return line item, prefixed `retli_`. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG".
     */
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
    /** ID of the reason chosen for this line. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". */
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
     * resolutions. [] (Value): string. Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3".
     */
    "return_resolution_ids": Array<string>;
    /**
     * Value of the line's units, fixed when the line was created: what the buyer paid for them,
     * less what was already refunded or returned. The value of a return line: unit price,
     * subtotal, discount, tax, and total.
     */
    "return_value": ReturnLineItemValue;
    /**
     * Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional
     * quantities are not supported. Format: int64.
     */
    "review_required_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Where this line stands. Same values and meanings as the Return's `status`, applied to the
     * line. Value enum: "requested", "open", "completed", "declined", "canceled".
     */
    "status": "requested" | "open" | "completed" | "declined" | "canceled" | (string & {});
    /**
     * Actions that can succeed now. Actions the API key or token doesn't have the scope for are
     * left out. For an open line with uncanceled approved quantity, `cancel` is listed while
     * approved quantity remains after accounting for handoff, receipt, inspection, disposition,
     * non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is
     * listed while inspection is required and no unit has been inspected. [] enum: "cancel",
     * "waive_inspection". [] (Value): string. Value enum: "cancel", "waive_inspection".
     */
    "supported_actions": Array<"cancel" | "waive_inspection" | (string & {})>;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
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
     * Resolution types the proposal allows. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". [] (Value): string. Value enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit".
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
    /** Whether the proposal requires inspection of the returned units. */
    "is_inspection_required": boolean;
    /**
     * ID of the Location the proposal sends returned merchandise to. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
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
export type ReturnLineItemDecisionProposalPreviousAttributes = {
    /**
     * Resolution types the proposal allows. [] enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string. Resolution types
     * the proposal allows. [] enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit". anyOf[1][] (Value): string. Value enum: "refund", "exchange", "replacement",
     * "no_monetary_action", "store_credit". anyOf[2] (Value): null.
     */
    "allowed_resolution_types"?: ((Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>)
        | (null));
    /**
     * The refund, store_credit, or no_monetary_action that Flint creates and confirms
     * automatically, using the policy default or buyer request according to the policy selection
     * mode. Absent for manual resolution, including buyer_requested when the line has no
     * requested_resolution_type. Value enum: "refund", "store_credit", "no_monetary_action".
     * anyOf[1] (Value): string. The refund, store_credit, or no_monetary_action that Flint creates
     * and confirms automatically, using the policy default or buyer request according to the
     * policy selection mode. Absent for manual resolution, including buyer_requested when the line
     * has no requested_resolution_type. Example: "refund". Value enum: "refund", "store_credit",
     * "no_monetary_action". anyOf[2] (Value): null.
     */
    "automatic_resolution_type"?: (("refund" | "store_credit" | "no_monetary_action" | (string & {})) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "based_on_quantity"?: ((number) | (null));
    /**
     * Whether the proposal requires inspection of the returned units. anyOf[1] (Value): boolean.
     * Whether the proposal requires inspection of the returned units. anyOf[2] (Value): null.
     */
    "is_inspection_required"?: ((boolean) | (null));
    /**
     * ID of the Location the proposal sends returned merchandise to. anyOf[1] (Value): string. ID
     * of the Location the proposal sends returned merchandise to. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "receiving_location_id"?: ((string) | (null));
    /**
     * The policy timing, or after_inspection when merchandise and inspection are required,
     * after_receipt when merchandise is required without inspection, or after_approval when no
     * merchandise is required. This fill never counts as a policy deviation. Applies to every
     * resolution type, including exchanges and replacements. manual is held until a merchant calls
     * POST /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual". anyOf[1] (Value): string. The policy timing,
     * or after_inspection when merchandise and inspection are required, after_receipt when
     * merchandise is required without inspection, or after_approval when no merchandise is
     * required. This fill never counts as a policy deviation. Applies to every resolution type,
     * including exchanges and replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual". anyOf[2] (Value): null.
     */
    "release_timing"?: (("after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {}))
        | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "return_required_quantity"?: ((number) | (null));
};
/**
 * Whether a return line is eligible under policy, with the eligible quantity, allowed resolution
 * types, and any policy adjustments.
 */
export type ReturnLineItemEligibility = {
    /**
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Terms the policy proposes if the line is approved. Absent when the policy can't propose any.
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
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
     * Fees or credits the policy proposes for this line, to add to a resolution as adjustments. []
     * (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes
     * for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required",
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
    /** Explanation of `reason`. */
    "reason_message": string;
    /**
     * ID of the policy that judged the line. Absent when none matched. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX".
     */
    "return_policy_id"?: string;
    /**
     * ID of the policy revision that judged the line. Absent when none matched. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id"?: string;
    /**
     * Who pays return shipping under the policy. Null when the line is not eligible, requires no
     * merchandise return, or the policy does not specify a payer. This field does not promise a
     * prepaid label. Value enum: "merchant", "buyer", null.
     */
    "return_shipping_payer": "merchant" | "buyer" | null | (string & {}) | null;
    /**
     * Whether the policy lets the buyer return this. `review_required` means the merchant decides.
     * Value enum: "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
export type ReturnLineItemEligibilityPreviousAttributes = {
    /**
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string.
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value):
     * null.
     */
    "allowed_resolution_types"?: ((Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>)
        | (null));
    /**
     * Terms the policy proposes if the line is approved. Absent when the policy can't propose any.
     * anyOf[1] (Value): {@link ReturnLineItemDecisionProposalPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "decision_proposal"?: ((ReturnLineItemDecisionProposalPreviousAttributes) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "eligible_quantity"?: ((number) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "evaluated_at"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[1]
     * (Value): string. The matched policy's declared exclusion reason. Present exactly when reason
     * is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[2]
     * (Value): null.
     */
    "ineligibility_reason"?: (("final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Fees or credits the policy proposes for this line, to add to a resolution as adjustments.
     * anyOf[1] (Value): Array of {@link ReturnPolicyAdjustmentProposalPreviousAttributes}. Fees or
     * credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1][]
     * (Value): {@link ReturnPolicyAdjustmentProposalPreviousAttributes}. anyOf[2] (Value): null.
     */
    "policy_adjustment_proposals"?: ((Array<ReturnPolicyAdjustmentProposalPreviousAttributes>) | (null));
    /**
     * Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     * anyOf[1] (Value): string. Why the line got this result. Value enum: "eligible_under_policy",
     * "manual_review_required", "return_window_expired", "quantity_unavailable",
     * "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict",
     * "no_matching_policy". anyOf[2] (Value): null.
     */
    "reason"?: (("eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {}))
        | (null));
    /**
     * Explanation of `reason`. anyOf[1] (Value): string. Explanation of `reason`. anyOf[2]
     * (Value): null.
     */
    "reason_message"?: ((string) | (null));
    /**
     * ID of the policy that judged the line. Absent when none matched. anyOf[1] (Value): string.
     * ID of the policy that judged the line. Absent when none matched. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX". anyOf[2] (Value): null.
     */
    "return_policy_id"?: ((string) | (null));
    /**
     * ID of the policy revision that judged the line. Absent when none matched. anyOf[1] (Value):
     * string. ID of the policy revision that judged the line. Absent when none matched. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
     */
    "return_policy_revision_id"?: ((string) | (null));
    /**
     * Who pays return shipping under the policy. Null when the line is not eligible, requires no
     * merchandise return, or the policy does not specify a payer. This field does not promise a
     * prepaid label. Value enum: "merchant", "buyer", null. anyOf[1] (Value): string. Who pays
     * return shipping under the policy. Null when the line is not eligible, requires no
     * merchandise return, or the policy does not specify a payer. This field does not promise a
     * prepaid label. Value enum: "merchant", "buyer", null. anyOf[2] (Value): null.
     */
    "return_shipping_payer"?: (("merchant" | "buyer" | null | (string & {})) | (null));
    /**
     * Whether the policy lets the buyer return this. `review_required` means the merchant decides.
     * Value enum: "eligible", "ineligible", "review_required". anyOf[1] (Value): string. Whether
     * the policy lets the buyer return this. `review_required` means the merchant decides. Value
     * enum: "eligible", "ineligible", "review_required". anyOf[2] (Value): null.
     */
    "status"?: (("eligible" | "ineligible" | "review_required" | (string & {})) | (null));
};
export type ReturnLineItemPreviousAttributes = {
    /**
     * Inspected units that were accepted. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Inspected units that were accepted. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "accepted_quantity"?: ((number) | (null));
    /**
     * Resolution types that can settle this line's approved quantity. [] enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of
     * string. Resolution types that can settle this line's approved quantity. [] enum: "refund",
     * "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string.
     * Value enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     * anyOf[2] (Value): null.
     */
    "allowed_resolution_types"?: ((Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>)
        | (null));
    /**
     * Units the decision approved. Whole-number quantity; fractional quantities are not supported.
     * anyOf[1] (Value): integer. Units the decision approved. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "approved_quantity"?: ((number) | (null));
    /**
     * The refund, store_credit, or no_monetary_action resolution Flint creates and confirms
     * automatically. Absent when the merchant resolves manually. Value enum: "refund",
     * "store_credit", "no_monetary_action". anyOf[1] (Value): string. The refund, store_credit, or
     * no_monetary_action resolution Flint creates and confirms automatically. Absent when the
     * merchant resolves manually. Example: "refund". Value enum: "refund", "store_credit",
     * "no_monetary_action". anyOf[2] (Value): null.
     */
    "automatic_resolution_type"?: (("refund" | "store_credit" | "no_monetary_action" | (string & {})) | (null));
    /**
     * Approved quantity that can still be assigned to a new resolution. Every non-canceled
     * resolution reserves its line quantity, including proposed, pending, action-required, failed,
     * and completed resolutions. Whole-number quantity; fractional quantities are not supported.
     * anyOf[1] (Value): integer. Approved quantity that can still be assigned to a new resolution.
     * Every non-canceled resolution reserves its line quantity, including proposed, pending,
     * action-required, failed, and completed resolutions. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "available_resolution_quantity"?: ((number) | (null));
    /**
     * Components of the bundle the line was sold from. anyOf[1] (Value): Array of {@link
     * BundleComponentPreviousAttributes}. Components of the bundle the line was sold from.
     * anyOf[1][] (Value): {@link BundleComponentPreviousAttributes}. anyOf[2] (Value): null.
     */
    "bundle_components"?: ((Array<BundleComponentPreviousAttributes>) | (null));
    /**
     * ID of the bundle the line was sold from. anyOf[1] (Value): string. ID of the bundle the line
     * was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Note the buyer gave about this line. Some return reasons require one. anyOf[1] (Value):
     * string. Note the buyer gave about this line. Some return reasons require one. anyOf[2]
     * (Value): null.
     */
    "buyer_note"?: ((string) | (null));
    /**
     * Approved units canceled later. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Approved units canceled later. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "canceled_quantity"?: ((number) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Who recorded the decision on this line. anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     */
    "decided_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "decision_at"?: ((string) | (null));
    /**
     * Why the line's declined quantity was declined. Value enum: "not_eligible",
     * "quantity_unavailable", "evidence_missing", "suspected_abuse", "merchant_discretion",
     * "other". anyOf[1] (Value): string. Why the line's declined quantity was declined. Value
     * enum: "not_eligible", "quantity_unavailable", "evidence_missing", "suspected_abuse",
     * "merchant_discretion", "other". anyOf[2] (Value): null.
     */
    "decline_reason"?: (("not_eligible"
        | "quantity_unavailable"
        | "evidence_missing"
        | "suspected_abuse"
        | "merchant_discretion"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Detail sent with the decline. anyOf[1] (Value): string. Detail sent with the decline.
     * anyOf[2] (Value): null.
     */
    "decline_reason_message"?: ((string) | (null));
    /**
     * Units the decision declined. Whole-number quantity; fractional quantities are not supported.
     * anyOf[1] (Value): integer. Units the decision declined. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "declined_quantity"?: ((number) | (null));
    /**
     * Description of the item as sold. anyOf[1] (Value): string. Description of the item as sold.
     * anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Units with a successful disposition. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Units with a successful disposition. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "dispositioned_quantity"?: ((number) | (null));
    /**
     * How the pinned return policy judged this line when the Return was created, with the policy
     * revision it used. anyOf[1] (Value): {@link ReturnLineItemEligibilityPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "eligibility"?: ((ReturnLineItemEligibilityPreviousAttributes) | (null));
    /**
     * Present only when `expand` includes `line_items.fulfillment`; `null` when expanded and there
     * is no related fulfillment. anyOf[1] (Value): {@link FulfillmentPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "fulfillment"?: ((FulfillmentPreviousAttributes) | (null));
    /**
     * ID of the fulfillment the units were delivered in. anyOf[1] (Value): string. ID of the
     * fulfillment the units were delivered in. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2]
     * (Value): null.
     */
    "fulfillment_id"?: ((string) | (null));
    /**
     * Units the buyer handed off for the trip back. Whole-number quantity; fractional quantities
     * are not supported. anyOf[1] (Value): integer. Units the buyer handed off for the trip back.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "handed_off_quantity"?: ((number) | (null));
    /**
     * Image of the item as sold. anyOf[1] (Value): {@link ImagePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "image"?: ((ImagePreviousAttributes) | (null));
    /**
     * Units that have been inspected. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Units that have been inspected. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "inspected_quantity"?: ((number) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "inspection_waived_at"?: ((string) | (null));
    /**
     * Who waived inspection for this line. anyOf[1] (Value): {@link
     * ReturnActorPreviousAttributes}. anyOf[2] (Value): null.
     */
    "inspection_waived_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Why inspection was waived for this line. Value enum: "policy_override",
     * "trusted_in_store_handoff", "merchant_review", "other". anyOf[1] (Value): string. Why
     * inspection was waived for this line. Value enum: "policy_override",
     * "trusted_in_store_handoff", "merchant_review", "other". anyOf[2] (Value): null.
     */
    "inspection_waiver_reason"?: (("policy_override" | "trusted_in_store_handoff" | "merchant_review" | "other" | (string & {}))
        | (null));
    /**
     * Detail sent when inspection was waived. anyOf[1] (Value): string. Detail sent when
     * inspection was waived. anyOf[2] (Value): null.
     */
    "inspection_waiver_reason_message"?: ((string) | (null));
    /**
     * Whether returned units of this line must be inspected. anyOf[1] (Value): boolean. Whether
     * returned units of this line must be inspected. anyOf[2] (Value): null.
     */
    "is_inspection_required"?: ((boolean) | (null));
    /**
     * Whether the decision overrode the pinned return policy's proposal. `override_reason` says
     * why. anyOf[1] (Value): boolean. Whether the decision overrode the pinned return policy's
     * proposal. `override_reason` says why. anyOf[2] (Value): null.
     */
    "is_policy_overridden"?: ((boolean) | (null));
    /**
     * Where this line's merchandise stands, from handoff through disposition. Value enum:
     * "not_required", "awaiting_handoff", "in_transit", "partially_received",
     * "inspection_required", "partially_inspected", "inspection_review_required",
     * "disposition_required", "resolved". anyOf[1] (Value): string. Where this line's merchandise
     * stands, from handoff through disposition. Value enum: "not_required", "awaiting_handoff",
     * "in_transit", "partially_received", "inspection_required", "partially_inspected",
     * "inspection_review_required", "disposition_required", "resolved". anyOf[2] (Value): null.
     */
    "merchandise_status"?: (("not_required"
        | "awaiting_handoff"
        | "in_transit"
        | "partially_received"
        | "inspection_required"
        | "partially_inspected"
        | "inspection_review_required"
        | "disposition_required"
        | "resolved"
        | (string & {}))
        | (null));
    /**
     * Modifiers selected on the order line, with their prices. anyOf[1] (Value): Array of {@link
     * OrderLineItemModifierPreviousAttributes}. Modifiers selected on the order line, with their
     * prices. anyOf[1][] (Value): {@link OrderLineItemModifierPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "modifiers"?: ((Array<OrderLineItemModifierPreviousAttributes>) | (null));
    /**
     * Name of the item as sold. anyOf[1] (Value): string. Name of the item as sold. anyOf[2]
     * (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Order that owns order_line_item_id. anyOf[1] (Value): string. Order that owns
     * order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * ID of the order line item the units come from. anyOf[1] (Value): string. ID of the order
     * line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value):
     * null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "overridden_at"?: ((string) | (null));
    /**
     * Who recorded the override. anyOf[1] (Value): {@link ReturnActorPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "overridden_by"?: ((ReturnActorPreviousAttributes) | (null));
    /**
     * Why the decision overrode the pinned return policy's proposal. Value enum:
     * "customer_service_exception", "policy_correction", "risk_review", "merchant_discretion",
     * "other". anyOf[1] (Value): string. Why the decision overrode the pinned return policy's
     * proposal. Value enum: "customer_service_exception", "policy_correction", "risk_review",
     * "merchant_discretion", "other". anyOf[2] (Value): null.
     */
    "override_reason"?: (("customer_service_exception"
        | "policy_correction"
        | "risk_review"
        | "merchant_discretion"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Detail sent with the override. anyOf[1] (Value): string. Detail sent with the override.
     * anyOf[2] (Value): null.
     */
    "override_reason_message"?: ((string) | (null));
    /**
     * ID of the catalog product the item was sold from. anyOf[1] (Value): string. ID of the
     * catalog product the item was sold from. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Units that arrived. Whole-number quantity; fractional quantities are not supported. anyOf[1]
     * (Value): integer. Units that arrived. Whole-number quantity; fractional quantities are not
     * supported. Format: int64. anyOf[2] (Value): null.
     */
    "received_quantity"?: ((number) | (null));
    /**
     * ID of the Location the buyer sends the merchandise to. Absent when none has to come back.
     * anyOf[1] (Value): string. ID of the Location the buyer sends the merchandise to. Absent when
     * none has to come back. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "receiving_location_id"?: ((string) | (null));
    /**
     * Inspected units that were rejected. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Inspected units that were rejected. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "rejected_quantity"?: ((number) | (null));
    /**
     * Committed resolution execution gate, filled for every approved line: after_inspection when
     * merchandise and inspection are required, after_receipt when merchandise is required without
     * inspection, or after_approval when merchandise is not required, unless the policy or
     * decision sets a timing explicitly. Applies to every resolution type, including exchanges and
     * replacements. manual is held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. Value enum: "after_approval", "after_handoff",
     * "after_receipt", "after_inspection", "manual". anyOf[1] (Value): string. Committed
     * resolution execution gate, filled for every approved line: after_inspection when merchandise
     * and inspection are required, after_receipt when merchandise is required without inspection,
     * or after_approval when merchandise is not required, unless the policy or decision sets a
     * timing explicitly. Applies to every resolution type, including exchanges and replacements.
     * manual is held until a merchant calls POST /v1/return-resolutions/{id}/release. Value enum:
     * "after_approval", "after_handoff", "after_receipt", "after_inspection", "manual". anyOf[2]
     * (Value): null.
     */
    "release_timing"?: (("after_approval" | "after_handoff" | "after_receipt" | "after_inspection" | "manual" | (string & {}))
        | (null));
    /**
     * Units the request asked to return. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Units the request asked to return. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "requested_quantity"?: ((number) | (null));
    /**
     * Outcome requested for this line when it was created. Absent when none was requested. Value
     * enum: "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[1]
     * (Value): string. Outcome requested for this line when it was created. Absent when none was
     * requested. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit". anyOf[2] (Value): null.
     */
    "requested_resolution_type"?: (("refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {}))
        | (null));
    /**
     * ID of the variant requested for this exchange. The merchant chooses the replacement and
     * confirms its price during resolution. anyOf[1] (Value): string. ID of the variant requested
     * for this exchange. The merchant chooses the replacement and confirms its price during
     * resolution. anyOf[2] (Value): null.
     */
    "requested_variant"?: ((string) | (null));
    /**
     * Whether the value for this line's approved quantity has been delivered. Value enum:
     * "not_selected", "pending", "requires_action", "completed", "failed". anyOf[1] (Value):
     * string. Whether the value for this line's approved quantity has been delivered. Value enum:
     * "not_selected", "pending", "requires_action", "completed", "failed". anyOf[2] (Value): null.
     */
    "resolution_status"?: (("not_selected" | "pending" | "requires_action" | "completed" | "failed" | (string & {})) | (null));
    /**
     * Units whose resolution has finished. Whole-number quantity; fractional quantities are not
     * supported. anyOf[1] (Value): integer. Units whose resolution has finished. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     */
    "resolved_quantity"?: ((number) | (null));
    /**
     * ID of the Return this line belongs to. anyOf[1] (Value): string. ID of the Return this line
     * belongs to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X". anyOf[2] (Value): null.
     */
    "return_id"?: ((string) | (null));
    /**
     * Unique identifier for this return line item, prefixed `retli_`. anyOf[1] (Value): string.
     * Unique identifier for this return line item, prefixed `retli_`. Example:
     * "retli_01KEZF7C00R813VR7ECXS062QG". anyOf[2] (Value): null.
     */
    "return_line_item_id"?: ((string) | (null));
    /**
     * Present only when `expand` includes `line_items.return_reason`; `null` when expanded and
     * there is no related return reason. anyOf[1] (Value): {@link ReturnReasonPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "return_reason"?: ((ReturnReasonPreviousAttributes) | (null));
    /**
     * Handle of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it. anyOf[1] (Value): string. Handle of the
     * chosen reason, captured when the line is created or its reason changes. Later renames,
     * deactivation or archiving don't change it. anyOf[2] (Value): null.
     */
    "return_reason_handle"?: ((string) | (null));
    /**
     * ID of the reason chosen for this line. anyOf[1] (Value): string. ID of the reason chosen for
     * this line. Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". anyOf[2] (Value): null.
     */
    "return_reason_id"?: ((string) | (null));
    /**
     * Name of the chosen reason, captured when the line is created or its reason changes. Later
     * renames, deactivation or archiving don't change it. anyOf[1] (Value): string. Name of the
     * chosen reason, captured when the line is created or its reason changes. Later renames,
     * deactivation or archiving don't change it. anyOf[2] (Value): null.
     */
    "return_reason_name"?: ((string) | (null));
    /**
     * How much of the approved quantity the buyer must physically send back; fractional quantities
     * are not supported. Set 0 for a returnless refund, where the buyer keeps the merchandise and
     * the Return still settles the money. anyOf[1] (Value): integer. How much of the approved
     * quantity the buyer must physically send back; fractional quantities are not supported. Set 0
     * for a returnless refund, where the buyer keeps the merchandise and the Return still settles
     * the money. Format: int64. anyOf[2] (Value): null.
     */
    "return_required_quantity"?: ((number) | (null));
    /**
     * IDs of the resolutions that include this line, oldest first, including failed and canceled
     * resolutions. anyOf[1] (Value): Array of string. IDs of the resolutions that include this
     * line, oldest first, including failed and canceled resolutions. anyOf[1][] (Value): string.
     * Example: "retres_01KEZF7C00C7RZJN31W9SGMEQ3". anyOf[2] (Value): null.
     */
    "return_resolution_ids"?: ((Array<string>) | (null));
    /**
     * Value of the line's units, fixed when the line was created: what the buyer paid for them,
     * less what was already refunded or returned. anyOf[1] (Value): {@link
     * ReturnLineItemValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "return_value"?: ((ReturnLineItemValuePreviousAttributes) | (null));
    /**
     * Inspected units still waiting for an acceptance decision. Whole-number quantity; fractional
     * quantities are not supported. anyOf[1] (Value): integer. Inspected units still waiting for
     * an acceptance decision. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. anyOf[2] (Value): null.
     */
    "review_required_quantity"?: ((number) | (null));
    /**
     * Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of
     * {@link SelectedProductOptionPreviousAttributes}. Variant options selected for the item, such
     * as size and color. anyOf[1][] (Value): {@link SelectedProductOptionPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "selected_options"?: ((Array<SelectedProductOptionPreviousAttributes>) | (null));
    /**
     * SKU of the item as sold. anyOf[1] (Value): string. SKU of the item as sold. anyOf[2]
     * (Value): null.
     */
    "sku"?: ((string) | (null));
    /**
     * Where this line stands. Same values and meanings as the Return's `status`, applied to the
     * line. Value enum: "requested", "open", "completed", "declined", "canceled". anyOf[1]
     * (Value): string. Where this line stands. Same values and meanings as the Return's `status`,
     * applied to the line. Value enum: "requested", "open", "completed", "declined", "canceled".
     * anyOf[2] (Value): null.
     */
    "status"?: (("requested" | "open" | "completed" | "declined" | "canceled" | (string & {})) | (null));
    /**
     * Actions that can succeed now. Actions the API key or token doesn't have the scope for are
     * left out. For an open line with uncanceled approved quantity, `cancel` is listed while
     * approved quantity remains after accounting for handoff, receipt, inspection, disposition,
     * non-canceled resolutions, and non-voided return shipment allocations. `waive_inspection` is
     * listed while inspection is required and no unit has been inspected. [] enum: "cancel",
     * "waive_inspection". anyOf[1] (Value): Array of string. Actions that can succeed now. Actions
     * the API key or token doesn't have the scope for are left out. For an open line with
     * uncanceled approved quantity, `cancel` is listed while approved quantity remains after
     * accounting for handoff, receipt, inspection, disposition, non-canceled resolutions, and
     * non-voided return shipment allocations. `waive_inspection` is listed while inspection is
     * required and no unit has been inspected. [] enum: "cancel", "waive_inspection". anyOf[1][]
     * (Value): string. Value enum: "cancel", "waive_inspection". anyOf[2] (Value): null.
     */
    "supported_actions"?: ((Array<"cancel" | "waive_inspection" | (string & {})>) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * ID of the catalog variant the item was sold from. anyOf[1] (Value): string. ID of the
     * catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
};
/**
 * An order line item to return, with the quantity, return reason, and optionally a note and the
 * resolution the buyer wants.
 */
export type ReturnLineItemRequest = {
    /**
     * Note about this line. Some return reasons require one. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1.
     */
    "buyer_note"?: string;
    /**
     * ID of the fulfillment the units were delivered in. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the order line item being returned. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Outcome requested for this line. Eligibility checks it against the policy's allowed
     * resolution types. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {});
    /** ID of one variant of the same product. Set only for an exchange request. minLength: 1. */
    "requested_variant"?: string;
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id": string;
};
/**
 * An order line item to return, with the quantity, return reason, and optionally a note and the
 * resolution the buyer wants.
 */
export type ReturnLineItemRequestInput = {
    /**
     * Note about this line. Some return reasons require one. Surrounding whitespace is trimmed
     * before length validation. A supplied value cannot be blank; use null where clearing is
     * supported. minLength: 1.
     */
    "buyer_note"?: string;
    /**
     * ID of the fulfillment the units were delivered in. minLength: 1. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id"?: string;
    /**
     * ID of the order line item being returned. minLength: 1. Example:
     * "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_id": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Outcome requested for this line. Eligibility checks it against the policy's allowed
     * resolution types. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "requested_resolution_type"?: "refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit";
    /** ID of one variant of the same product. Set only for an exchange request. minLength: 1. */
    "requested_variant"?: string;
    /**
     * ID of the return reason for this line. The reason must be active. minLength: 1. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "return_reason_id": string;
};
/** The value of a return line: unit price, subtotal, discount, tax, and total. */
export type ReturnLineItemValue = {
    /**
     * Discount on the returned units. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Subtotal of the returned units, before discount and tax. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Tax on the returned units. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "tax_money": MoneyValue;
    /**
     * Subtotal minus discount, plus tax. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
    /**
     * Price of one returned unit. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
export type ReturnLineItemValuePreviousAttributes = {
    /**
     * Discount on the returned units. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "discount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Subtotal of the returned units, before discount and tax. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "subtotal_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Tax on the returned units. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "tax_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Subtotal minus discount, plus tax. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "total_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Price of one returned unit. anyOf[1] (Value): {@link MoneyValuePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
};
export type ReturnPoliciesCreateParams = (InputValue<CreateReturnPolicyRequestInput>)
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
export type ReturnPoliciesCreateRevisionParams = (InputValue<PublishReturnPolicyRevisionRequestInput>)
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
export type ReturnPoliciesDeleteParams = {
    /**
     * Optional. The policy's current version. If it changed, the archive fails with 409
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
export type ReturnPoliciesGetParams = {
    /**
     * Include related objects in the response. Supported expansions: current_revision. Expanded
     * relationships are returned only when explicitly requested and authorized. Limits: at most 10
     * unique expand paths per request. [] enum: "current_revision". Value enum:
     * "current_revision". anyOf[1] (Value): Array of string. [] enum: "current_revision".
     * anyOf[1][] (Value): string. Value enum: "current_revision". anyOf[2] (Value): string. Value
     * enum: "current_revision".
     */
    "expand"?: InputValue<("current_revision") | readonly ("current_revision")[]>;
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
export type ReturnPoliciesGetRevisionParams = DisputesAcceptParams;
export type ReturnPoliciesListParams = {
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
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
    /**
     * Search by return_policy_id, name, or external_reference_id. Limited to 255 bytes after
     * trimming surrounding whitespace. A blank query is ignored.
     */
    "query"?: InputValue<string>;
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
    /**
     * Include related objects in the response. Supported expansions: current_revision. Include the
     * requested related resources using scoped batch reads for this page. Each relationship
     * requires its existing target read scopes. Expansion changes the representation without
     * changing pagination tokens. Limits: at most 10 unique expand paths per request. [] enum:
     * "current_revision". Value enum: "current_revision". anyOf[1] (Value): Array of string. []
     * enum: "current_revision". anyOf[1][] (Value): string. Value enum: "current_revision".
     * anyOf[2] (Value): string. Value enum: "current_revision".
     */
    "expand"?: InputValue<("current_revision") | readonly ("current_revision")[]>;
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
export type ReturnPoliciesListRevisionsParams = {
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
export type ReturnPoliciesUpdateParams = (InputValue<UpdateReturnPolicyRequestInput>)
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
/** Rules governing whether and how purchased items can be returned. */
export type ReturnPolicy = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * ID of the revision Flint judges new requests by. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "current_return_policy_revision_id": string;
    /**
     * Present only when `expand` includes `current_revision`; `null` when expanded and there is no
     * related return policy revision. anyOf[1] (Value): {@link ReturnPolicyRevision}. A saved
     * revision of a return policy. anyOf[2] (Value): null.
     */
    "current_revision"?: ((ReturnPolicyRevision) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /** Name of the policy. */
    "name": string;
    /**
     * Unique identifier for this return policy, prefixed `rpol_`. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX".
     */
    "return_policy_id": string;
    /**
     * active policies apply to new Returns; inactive policies do not. Toggle active and inactive
     * with PATCH status. Retire either with DELETE /v1/return-policies/{return_policy_id}. Value
     * enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64. minimum: 1.
     */
    "version": number;
};
/**
 * A fee or credit a return policy proposes for a line, calculated as a flat amount or a percent.
 */
export type ReturnPolicyAdjustmentProposal = {
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
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "based_on_quantity"?: number;
    /**
     * The amount worked out for the line's returned quantity. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "calculated_amount_money"?: MoneyValue;
    /** How the amount is worked out. Value enum: "flat", "percent". */
    "calculation_type": "flat" | "percent" | (string & {});
    /**
     * Fixed amount proposed for the line, whatever the quantity. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /**
     * Percentage points of the returned units' subtotal, such as `10` for 10%. Format: double.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * Whether the amount reduces or increases what the buyer receives. Value enum: "deduction",
     * "credit".
     */
    "value_effect": "deduction" | "credit" | (string & {});
};
export type ReturnPolicyAdjustmentProposalPreviousAttributes = {
    /**
     * What the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee",
     * "other_fee", "goodwill_credit", "price_correction", "other". anyOf[1] (Value): string. What
     * the fee or credit is for. Value enum: "return_shipping_fee", "restocking_fee", "other_fee",
     * "goodwill_credit", "price_correction", "other". anyOf[2] (Value): null.
     */
    "adjustment_type"?: (("return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "based_on_quantity"?: ((number) | (null));
    /**
     * The amount worked out for the line's returned quantity. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "calculated_amount_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * How the amount is worked out. Value enum: "flat", "percent". anyOf[1] (Value): string. How
     * the amount is worked out. Value enum: "flat", "percent". anyOf[2] (Value): null.
     */
    "calculation_type"?: (("flat" | "percent" | (string & {})) | (null));
    /**
     * Fixed amount proposed for the line, whatever the quantity. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "flat_money"?: ((MoneyValuePreviousAttributes) | (null));
    /**
     * Percentage points of the returned units' subtotal, such as `10` for 10%. anyOf[1] (Value):
     * number. Percentage points of the returned units' subtotal, such as `10` for 10%. Format:
     * double. multipleOf: 0.0001. anyOf[2] (Value): null.
     */
    "percent"?: ((number) | (null));
    /**
     * Whether the amount reduces or increases what the buyer receives. Value enum: "deduction",
     * "credit". anyOf[1] (Value): string. Whether the amount reduces or increases what the buyer
     * receives. Value enum: "deduction", "credit". anyOf[2] (Value): null.
     */
    "value_effect"?: (("deduction" | "credit" | (string & {})) | (null));
};
/**
 * How a return policy evaluated a return request: overall status and reason, the policy revision
 * used, and per-line results.
 */
export type ReturnPolicyEvaluation = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "evaluated_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * Eligibility of each line asked about. [] (Value): {@link ReturnPolicyEvaluationLineItem}.
     * The policy result for one return line: status, eligible quantity, allowed resolution types,
     * and handling requirements such as inspection.
     */
    "line_items": Array<ReturnPolicyEvaluationLineItem>;
    /**
     * Why the selection got this result. Value enum: "eligible_under_policy",
     * "manual_review_required", "return_window_expired", "quantity_unavailable",
     * "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict",
     * "no_matching_policy".
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
    /** Explanation of `reason`. */
    "reason_message": string;
    /**
     * ID of the policy that judged the lines. Absent when none matched. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX".
     */
    "return_policy_id"?: string;
    /**
     * ID of the policy revision that judged the lines. Absent when none matched. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id"?: string;
    /**
     * Overall result for the selection. `review_required` when the lines differ. Value enum:
     * "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
};
/**
 * The policy result for one return line: status, eligible quantity, allowed resolution types, and
 * handling requirements such as inspection.
 */
export type ReturnPolicyEvaluationLineItem = {
    /**
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". [] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Components of the bundle the line was sold from. [] (Value): {@link BundleComponent}. An
     * item included in a bundle.
     */
    "bundle_components": Array<BundleComponent>;
    /** ID of the bundle the line was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** Description of the item as sold. */
    "description"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "eligible_quantity": number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "expires_at"?: string;
    /**
     * ID of the fulfillment the units were delivered in. Example:
     * "ful_01KEZF7C00F24WVSTTWR1FQX5T".
     */
    "fulfillment_id": string;
    /** Image of the item as sold. An image with its URL, size, and alt text. */
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
    /** Whether the policy requires inspection of the returned units. */
    "is_inspection_required": boolean;
    /** Whether the policy requires the buyer to send the merchandise back. */
    "is_merchandise_return_required": boolean;
    /**
     * Modifiers selected on the order line, with their prices. [] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item.
     */
    "modifiers": Array<OrderLineItemModifier>;
    /** Name of the item as sold. */
    "name": string;
    /** Order that owns order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** ID of the order line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". */
    "order_line_item_id": string;
    /**
     * Fees or credits the policy proposes for this line, to add to a resolution as adjustments. []
     * (Value): {@link ReturnPolicyAdjustmentProposal}. A fee or credit a return policy proposes
     * for a line, calculated as a flat amount or a percent.
     */
    "policy_adjustment_proposals": Array<ReturnPolicyAdjustmentProposal>;
    /**
     * ID of the catalog product the item was sold from. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /**
     * Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required",
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
    /**
     * ID of the Location the policy sends returned merchandise to. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. The
     * policy evaluation did not assign a release gate to this line. Value enum: "after_approval",
     * "after_handoff", "after_receipt", "after_inspection", "manual", "unspecified".
     */
    "release_timing": "after_approval"
        | "after_handoff"
        | "after_receipt"
        | "after_inspection"
        | "manual"
        | "unspecified"
        | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "requested_quantity": number;
    /**
     * Variant options selected for the item, such as size and color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** SKU of the item as sold. */
    "sku"?: string;
    /**
     * Whether the policy lets the buyer return this. `review_required` means the merchant decides.
     * Value enum: "eligible", "ineligible", "review_required".
     */
    "status": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then
     * reasons with no categories, each group sorted by handle. [] (Value): string. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E".
     */
    "suggested_return_reason_ids": Array<string>;
    /**
     * ID of the catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
};
export type ReturnPolicyEvaluationLineItemPreviousAttributes = {
    /**
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". anyOf[1] (Value): Array of string.
     * Resolution types the policy allows for this line. [] enum: "refund", "exchange",
     * "replacement", "no_monetary_action", "store_credit". anyOf[1][] (Value): string. Value enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". anyOf[2] (Value):
     * null.
     */
    "allowed_resolution_types"?: ((Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>)
        | (null));
    /**
     * Components of the bundle the line was sold from. anyOf[1] (Value): Array of {@link
     * BundleComponentPreviousAttributes}. Components of the bundle the line was sold from.
     * anyOf[1][] (Value): {@link BundleComponentPreviousAttributes}. anyOf[2] (Value): null.
     */
    "bundle_components"?: ((Array<BundleComponentPreviousAttributes>) | (null));
    /**
     * ID of the bundle the line was sold from. anyOf[1] (Value): string. ID of the bundle the line
     * was sold from. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". anyOf[2] (Value): null.
     */
    "bundle_id"?: ((string) | (null));
    /**
     * Description of the item as sold. anyOf[1] (Value): string. Description of the item as sold.
     * anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "eligible_quantity"?: ((number) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * ID of the fulfillment the units were delivered in. anyOf[1] (Value): string. ID of the
     * fulfillment the units were delivered in. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2]
     * (Value): null.
     */
    "fulfillment_id"?: ((string) | (null));
    /**
     * Image of the item as sold. anyOf[1] (Value): {@link ImagePreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "image"?: ((ImagePreviousAttributes) | (null));
    /**
     * The matched policy's declared exclusion reason. Present exactly when reason is
     * policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[1]
     * (Value): string. The matched policy's declared exclusion reason. Present exactly when reason
     * is policy_ineligible. Value enum: "final_sale", "product_excluded", "category_excluded",
     * "market_restricted", "channel_restricted", "outside_return_window", "other". anyOf[2]
     * (Value): null.
     */
    "ineligibility_reason"?: (("final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {}))
        | (null));
    /**
     * Whether the policy requires inspection of the returned units. anyOf[1] (Value): boolean.
     * Whether the policy requires inspection of the returned units. anyOf[2] (Value): null.
     */
    "is_inspection_required"?: ((boolean) | (null));
    /**
     * Whether the policy requires the buyer to send the merchandise back. anyOf[1] (Value):
     * boolean. Whether the policy requires the buyer to send the merchandise back. anyOf[2]
     * (Value): null.
     */
    "is_merchandise_return_required"?: ((boolean) | (null));
    /**
     * Modifiers selected on the order line, with their prices. anyOf[1] (Value): Array of {@link
     * OrderLineItemModifierPreviousAttributes}. Modifiers selected on the order line, with their
     * prices. anyOf[1][] (Value): {@link OrderLineItemModifierPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "modifiers"?: ((Array<OrderLineItemModifierPreviousAttributes>) | (null));
    /**
     * Name of the item as sold. anyOf[1] (Value): string. Name of the item as sold. anyOf[2]
     * (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Order that owns order_line_item_id. anyOf[1] (Value): string. Order that owns
     * order_line_item_id. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     */
    "order_id"?: ((string) | (null));
    /**
     * ID of the order line item the units come from. anyOf[1] (Value): string. ID of the order
     * line item the units come from. Example: "li_01KEZF7C008YPRCK7VDKTGWR31". anyOf[2] (Value):
     * null.
     */
    "order_line_item_id"?: ((string) | (null));
    /**
     * Fees or credits the policy proposes for this line, to add to a resolution as adjustments.
     * anyOf[1] (Value): Array of {@link ReturnPolicyAdjustmentProposalPreviousAttributes}. Fees or
     * credits the policy proposes for this line, to add to a resolution as adjustments. anyOf[1][]
     * (Value): {@link ReturnPolicyAdjustmentProposalPreviousAttributes}. anyOf[2] (Value): null.
     */
    "policy_adjustment_proposals"?: ((Array<ReturnPolicyAdjustmentProposalPreviousAttributes>) | (null));
    /**
     * ID of the catalog product the item was sold from. anyOf[1] (Value): string. ID of the
     * catalog product the item was sold from. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". anyOf[2]
     * (Value): null.
     */
    "product_id"?: ((string) | (null));
    /**
     * Why the line got this result. Value enum: "eligible_under_policy", "manual_review_required",
     * "return_window_expired", "quantity_unavailable", "policy_ineligible",
     * "resolution_not_allowed", "reason_not_allowed", "policy_conflict", "no_matching_policy".
     * anyOf[1] (Value): string. Why the line got this result. Value enum: "eligible_under_policy",
     * "manual_review_required", "return_window_expired", "quantity_unavailable",
     * "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict",
     * "no_matching_policy". anyOf[2] (Value): null.
     */
    "reason"?: (("eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {}))
        | (null));
    /**
     * ID of the Location the policy sends returned merchandise to. anyOf[1] (Value): string. ID of
     * the Location the policy sends returned merchandise to. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     */
    "receiving_location_id"?: ((string) | (null));
    /**
     * Release gate for every resolution type, including exchanges and replacements. Released after
     * the Return is approved. Released after the buyer hands back the required merchandise.
     * Released after the required merchandise is received. Released after the required merchandise
     * passes inspection. Held until a merchant calls POST /v1/return-resolutions/{id}/release. The
     * policy evaluation did not assign a release gate to this line. Value enum: "after_approval",
     * "after_handoff", "after_receipt", "after_inspection", "manual", "unspecified". anyOf[1]
     * (Value): string. Release gate for every resolution type, including exchanges and
     * replacements. Released after the Return is approved. Released after the buyer hands back the
     * required merchandise. Released after the required merchandise is received. Released after
     * the required merchandise passes inspection. Held until a merchant calls POST
     * /v1/return-resolutions/{id}/release. The policy evaluation did not assign a release gate to
     * this line. Value enum: "after_approval", "after_handoff", "after_receipt",
     * "after_inspection", "manual", "unspecified". anyOf[2] (Value): null.
     */
    "release_timing"?: (("after_approval"
        | "after_handoff"
        | "after_receipt"
        | "after_inspection"
        | "manual"
        | "unspecified"
        | (string & {}))
        | (null));
    /**
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2]
     * (Value): null.
     */
    "requested_quantity"?: ((number) | (null));
    /**
     * Variant options selected for the item, such as size and color. anyOf[1] (Value): Array of
     * {@link SelectedProductOptionPreviousAttributes}. Variant options selected for the item, such
     * as size and color. anyOf[1][] (Value): {@link SelectedProductOptionPreviousAttributes}.
     * anyOf[2] (Value): null.
     */
    "selected_options"?: ((Array<SelectedProductOptionPreviousAttributes>) | (null));
    /**
     * SKU of the item as sold. anyOf[1] (Value): string. SKU of the item as sold. anyOf[2]
     * (Value): null.
     */
    "sku"?: ((string) | (null));
    /**
     * Whether the policy lets the buyer return this. `review_required` means the merchant decides.
     * Value enum: "eligible", "ineligible", "review_required". anyOf[1] (Value): string. Whether
     * the policy lets the buyer return this. `review_required` means the merchant decides. Value
     * enum: "eligible", "ineligible", "review_required". anyOf[2] (Value): null.
     */
    "status"?: (("eligible" | "ineligible" | "review_required" | (string & {})) | (null));
    /**
     * IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then
     * reasons with no categories, each group sorted by handle. anyOf[1] (Value): Array of string.
     * IDs of up to 20 active reasons that apply to this line: category-matched reasons first, then
     * reasons with no categories, each group sorted by handle. anyOf[1][] (Value): string.
     * Example: "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". anyOf[2] (Value): null.
     */
    "suggested_return_reason_ids"?: ((Array<string>) | (null));
    /**
     * ID of the catalog variant the item was sold from. anyOf[1] (Value): string. ID of the
     * catalog variant the item was sold from. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". anyOf[2]
     * (Value): null.
     */
    "variant_id"?: ((string) | (null));
};
export type ReturnPolicyEvaluationPreviousAttributes = {
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "evaluated_at"?: ((string) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * Eligibility of each line asked about. anyOf[1] (Value): Array of {@link
     * ReturnPolicyEvaluationLineItemPreviousAttributes}. Eligibility of each line asked about.
     * anyOf[1][] (Value): {@link ReturnPolicyEvaluationLineItemPreviousAttributes}. anyOf[2]
     * (Value): null.
     */
    "line_items"?: ((Array<ReturnPolicyEvaluationLineItemPreviousAttributes>) | (null));
    /**
     * Why the selection got this result. Value enum: "eligible_under_policy",
     * "manual_review_required", "return_window_expired", "quantity_unavailable",
     * "policy_ineligible", "resolution_not_allowed", "reason_not_allowed", "policy_conflict",
     * "no_matching_policy". anyOf[1] (Value): string. Why the selection got this result. Value
     * enum: "eligible_under_policy", "manual_review_required", "return_window_expired",
     * "quantity_unavailable", "policy_ineligible", "resolution_not_allowed", "reason_not_allowed",
     * "policy_conflict", "no_matching_policy". anyOf[2] (Value): null.
     */
    "reason"?: (("eligible_under_policy"
        | "manual_review_required"
        | "return_window_expired"
        | "quantity_unavailable"
        | "policy_ineligible"
        | "resolution_not_allowed"
        | "reason_not_allowed"
        | "policy_conflict"
        | "no_matching_policy"
        | (string & {}))
        | (null));
    /**
     * Explanation of `reason`. anyOf[1] (Value): string. Explanation of `reason`. anyOf[2]
     * (Value): null.
     */
    "reason_message"?: ((string) | (null));
    /**
     * ID of the policy that judged the lines. Absent when none matched. anyOf[1] (Value): string.
     * ID of the policy that judged the lines. Absent when none matched. Example:
     * "rpol_01KEZF7C00H8C042BEK6HBRANX". anyOf[2] (Value): null.
     */
    "return_policy_id"?: ((string) | (null));
    /**
     * ID of the policy revision that judged the lines. Absent when none matched. anyOf[1] (Value):
     * string. ID of the policy revision that judged the lines. Absent when none matched. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC". anyOf[2] (Value): null.
     */
    "return_policy_revision_id"?: ((string) | (null));
    /**
     * Overall result for the selection. `review_required` when the lines differ. Value enum:
     * "eligible", "ineligible", "review_required". anyOf[1] (Value): string. Overall result for
     * the selection. `review_required` when the lines differ. Value enum: "eligible",
     * "ineligible", "review_required". anyOf[2] (Value): null.
     */
    "status"?: (("eligible" | "ineligible" | "review_required" | (string & {})) | (null));
};
/** A saved revision of a return policy. */
export type ReturnPolicyRevision = {
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
    "completion_mode"?: "manual" | "automatic" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * When this revision started judging requests: when it became current on an active policy, or
     * when its policy was first activated. Absent if it was never current while the policy was
     * active. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "effective_at"?: string;
    /**
     * What the policy decides for items it covers. Value enum: "eligible", "ineligible",
     * "review_required".
     */
    "eligibility_result": "eligible" | "ineligible" | "review_required" | (string & {});
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
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
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32. minimum: 0.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode": "automatic" | "manual" | (string & {});
    /**
     * ID of the Location buyers send the merchandise to. Required when merchandise has to come
     * back. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
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
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible
     * revision, the fee is stored but ignored; its percent must still be from 1 through 100 with
     * at most four decimal places. A restocking fee in a return policy, charged as a flat amount
     * or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /** ID of the policy this revision belongs to. Example: "rpol_01KEZF7C00H8C042BEK6HBRANX". */
    "return_policy_id": string;
    /**
     * Unique identifier for this return policy revision, prefixed `rpolv_`. Example:
     * "rpolv_01KEZF7C007AWH6P4QC14Q25TC".
     */
    "return_policy_revision_id": string;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
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
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "ineligible".
     */
    "eligibility_result": "ineligible" | (string & {});
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason": "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32. minimum: 0.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible
     * revision, the fee is stored but ignored; its percent must still be from 1 through 100 with
     * at most four decimal places. A restocking fee in a return policy, charged as a flat amount
     * or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & (({
    /** What the policy decides for items it covers. Value enum: "ineligible". */
    "eligibility_result": unknown;
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason": "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other"
        | (string & {});
}));
/** The `ineligible` variant of `ReturnPolicyRevisionInput`. */
export type ReturnPolicyRevisionInputIneligibleInput = ({
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /**
     * Whether merchandise matching this scope may be returned. An ineligible revision commits no
     * resolution behavior: allowed_resolution_types, resolution_mode, release_timing, and
     * completion_mode must all be omitted. Eligible and review_required revisions require
     * allowed_resolution_types, resolution_mode, and completion_mode. Value enum: "ineligible".
     */
    "eligibility_result": "ineligible";
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason": "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32. minimum: 0.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id"?: string;
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible
     * revision, the fee is stored but ignored; its percent must still be from 1 through 100 with
     * at most four decimal places. A restocking fee in a return policy, charged as a flat amount
     * or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyRequestInput;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyRequestInput;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindowRequestInput;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeRequestInput;
})
    & (({
    /** What the policy decides for items it covers. Value enum: "ineligible". */
    "eligibility_result": "ineligible";
    /**
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason": "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
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
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
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
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32. minimum: 0.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
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
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode": "automatic" | "manual" | (string & {});
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible
     * revision, the fee is stored but ignored; its percent must still be from 1 through 100 with
     * at most four decimal places. A restocking fee in a return policy, charged as a flat amount
     * or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScope;
})
    & (({
    /** What the policy decides for items it covers. Value enum: "eligible", "review_required". */
    "eligibility_result": unknown;
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode": "automatic" | "manual" | (string & {});
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
    "completion_mode": "manual" | "automatic" | (string & {});
})
    & (((({
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "manual".
     */
    "resolution_mode"?: unknown;
}))
    | ({
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic".
     */
    "resolution_mode"?: unknown;
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode": "policy_default" | "buyer_requested" | (string & {});
})
    | (Record<string, unknown>)))
    & ((({
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money. Value enum: false.
     */
    "is_merchandise_return_required"?: unknown;
})
    | ({
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money. Value enum: true.
     */
    "is_merchandise_return_required"?: unknown;
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
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
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
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
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32. minimum: 0.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
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
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode": "automatic" | "manual";
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible
     * revision, the fee is stored but ignored; its percent must still be from 1 through 100 with
     * at most four decimal places. A restocking fee in a return policy, charged as a flat amount
     * or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyRequestInput;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyRequestInput;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindowRequestInput;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeRequestInput;
})
    & (({
    /** What the policy decides for items it covers. Value enum: "eligible", "review_required". */
    "eligibility_result": "eligible" | "review_required";
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types": Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode": "automatic" | "manual";
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
    "completion_mode": "manual" | "automatic";
})
    & (((({
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "manual".
     */
    "resolution_mode"?: "manual";
})
    & (({
    "resolution_selection_mode"?: never;
}) & ({
    "automatic_resolution_type"?: never;
})))
    | ({
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic".
     */
    "resolution_mode"?: "automatic";
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode": "policy_default" | "buyer_requested";
})))
    & ((({
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money. Value enum: false.
     */
    "is_merchandise_return_required"?: false;
})
    | ({
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money. Value enum: true.
     */
    "is_merchandise_return_required"?: true;
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "receiving_location_id": string;
})))
    & (({
    "ineligibility_reason"?: never;
})));
/**
 * The rules for a return policy revision: scope, eligibility, return window, approval and
 * resolution modes, shipping, and restocking fee.
 */
export type ReturnPolicyRevisionRequest = ({
    /**
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit" | (string & {})>;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual" | (string & {});
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action" | (string & {});
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
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
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
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
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32. minimum: 0.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual" | (string & {});
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
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
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode"?: "automatic" | "manual" | (string & {});
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested" | (string & {});
    /**
     * Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible
     * revision, the fee is stored but ignored; its percent must still be from 1 through 100 with
     * at most four decimal places. A restocking fee in a return policy, charged as a flat amount
     * or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicy;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicy;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindow;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
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
     * Resolution types a request can use under this policy. A value can't repeat. [] enum:
     * "refund", "exchange", "replacement", "no_monetary_action", "store_credit". [] (Value):
     * string. Value enum: "refund", "exchange", "replacement", "no_monetary_action",
     * "store_credit".
     */
    "allowed_resolution_types"?: Array<"refund" | "exchange" | "replacement" | "no_monetary_action" | "store_credit">;
    /**
     * Whether Flint approves eligible lines automatically or waits for merchant review. Automatic
     * approval still waits for the buyer to request a Return. Value enum: "automatic", "manual".
     */
    "approval_mode": "automatic" | "manual";
    /**
     * Outcome Flint creates and confirms itself when `resolution_selection_mode` is
     * `policy_default`. Must be one of `allowed_resolution_types`. Value enum: "refund",
     * "store_credit", "no_monetary_action".
     */
    "automatic_resolution_type"?: "refund" | "store_credit" | "no_monetary_action";
    /**
     * Whether Flint completes a Return judged under this policy when its last completion blocker
     * clears (`automatic`) or waits for you (`manual`). Value enum: "manual", "automatic".
     */
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
     * Why the policy refuses returns. Set only when `eligibility_result` is `ineligible`. Value
     * enum: "final_sale", "product_excluded", "category_excluded", "market_restricted",
     * "channel_restricted", "outside_return_window", "other".
     */
    "ineligibility_reason"?: "final_sale"
        | "product_excluded"
        | "category_excluded"
        | "market_restricted"
        | "channel_restricted"
        | "outside_return_window"
        | "other";
    /**
     * Whether returned merchandise must be inspected. Leave out when no merchandise has to come
     * back.
     */
    "is_inspection_required"?: boolean;
    /**
     * Whether the buyer has to send the merchandise back. When `false`, the buyer keeps it and the
     * Return settles the money.
     */
    "is_merchandise_return_required": boolean;
    /**
     * Which policy wins when several cover an item: the highest priority applies. Zero or higher.
     * Format: int32. minimum: 0.
     */
    "priority": number;
    /**
     * Controls verified merchandise after receipt. automatic creates a disposition at the
     * receiving location with reason inspection_result: sellable without inspection; after an
     * accepted inspection, new and unopened map to sellable, opened, used, incomplete, and
     * undetermined map to quality_control, and damaged and defective map to damaged. Successful
     * tracked dispositions also create an inventory receipt and movement. Untracked merchandise
     * has no inventory effect. If the inventory item is unmapped, the observation is recorded and
     * the generated disposition is failed with failure_code inventory_item_unmapped. Cancel it or
     * create a replacement; retry is unavailable. manual leaves inventory unchanged until an
     * explicit disposition succeeds. When omitted, the value defaults to automatic. Default:
     * "automatic". Value enum: "automatic", "manual".
     */
    "receipt_disposition_mode"?: "automatic" | "manual";
    /**
     * Where returned merchandise is sent. Required when is_merchandise_return_required is true.
     * Presence is checked when the revision is written; whether the Location exists, is active,
     * and carries a postal address is checked when the policy is activated. minLength: 1. Example:
     * "loc_01KEZF7C00CMHRRYA3MV996JB2".
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
    /**
     * Whether Flint creates the buyer's outcome itself (`automatic`) or leaves it to you
     * (`manual`). Value enum: "automatic", "manual".
     */
    "resolution_mode"?: "automatic" | "manual";
    /** Who picks an automatic outcome. Value enum: "policy_default", "buyer_requested". */
    "resolution_selection_mode"?: "policy_default" | "buyer_requested";
    /**
     * Fee proposed for each eligible line. Omitted when no fee was supplied. On an ineligible
     * revision, the fee is stored but ignored; its percent must still be from 1 through 100 with
     * at most four decimal places. A restocking fee in a return policy, charged as a flat amount
     * or a percent.
     */
    "restocking_fee"?: ReturnRestockingFeePolicyRequestInput;
    /**
     * Who pays for shipping the goods back. Who pays for return shipping in a return policy: the
     * merchant or the buyer.
     */
    "return_shipping"?: ReturnShippingPolicyRequestInput;
    /**
     * How long after its starting event a line can be returned. Leave out for no deadline. How
     * long after an event, such as fulfillment or delivery, an order can be returned under a
     * return policy.
     */
    "return_window"?: ReturnWindowRequestInput;
    /**
     * Which items the policy covers. The products, variants, categories, channels, or locations a
     * return policy revision applies to, or all of them.
     */
    "scope": ReturnPolicyScopeRequestInput;
})
    & ((Exclude<ReturnPolicyRevisionInputIneligibleInput & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyRevisionInputReturnableInput & object, readonly unknown[]>));
/**
 * The products, variants, categories, channels, or locations a return policy revision applies to,
 * or all of them.
 */
export type ReturnPolicyScope = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. maxItems: 100. uniqueItems: true. [] (Value): string. After trimming surrounding
     * whitespace, 1 through 100 ASCII characters: lowercase letters and digits separated by single
     * hyphens. Values must be unique after trimming. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. maxItems: 100. uniqueItems: true. [] enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription". [] (Value): string. minLength: 1.
     * maxLength: 255. Value enum: "checkout", "payment_link", "virtual_terminal", "api",
     * "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription" | (string & {})>;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 100.
     * uniqueItems: true. [] (Value): string. A nonblank value of at most 255 bytes, counted before
     * trimming. minLength: 1. maxLength: 255. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all", "include".
     */
    "match_type": "all" | "include" | (string & {});
    /**
     * IDs of the products the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<ReturnPolicyScopeAll & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyScopeInclude & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `all` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeAll = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. maxItems: 100. uniqueItems: true. [] (Value): string. After trimming surrounding
     * whitespace, 1 through 100 ASCII characters: lowercase letters and digits separated by single
     * hyphens. Values must be unique after trimming. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. maxItems: 100. uniqueItems: true. [] enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription". [] (Value): string. minLength: 1.
     * maxLength: 255. Value enum: "checkout", "payment_link", "virtual_terminal", "api",
     * "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription" | (string & {})>;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 100.
     * uniqueItems: true. [] (Value): string. A nonblank value of at most 255 bytes, counted before
     * trimming. minLength: 1. maxLength: 255. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all".
     */
    "match_type": "all" | (string & {});
    /**
     * IDs of the products the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. maxItems: 0.
     */
    "category_handles"?: unknown;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. maxItems: 0.
     */
    "channel_types"?: unknown;
    /** IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 0. */
    "location_ids"?: unknown;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all".
     */
    "match_type": unknown;
    /** IDs of the products the policy covers. Up to 100 values. maxItems: 0. */
    "product_ids"?: unknown;
    /** IDs of the variants the policy covers. Up to 100 values. maxItems: 0. */
    "variant_ids"?: unknown;
});
/** The `all` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeAllRequestInput = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. maxItems: 100. uniqueItems: true. [] (Value): string. After trimming surrounding
     * whitespace, 1 through 100 ASCII characters: lowercase letters and digits separated by single
     * hyphens. Values must be unique after trimming. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. maxItems: 100. uniqueItems: true. [] enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription". [] (Value): string. minLength: 1.
     * maxLength: 255. Value enum: "checkout", "payment_link", "virtual_terminal", "api",
     * "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription">;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 100.
     * uniqueItems: true. [] (Value): string. A nonblank value of at most 255 bytes, counted before
     * trimming. minLength: 1. maxLength: 255. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all".
     */
    "match_type": "all";
    /**
     * IDs of the products the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. maxItems: 0.
     */
    "category_handles"?: unknown;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. maxItems: 0.
     */
    "channel_types"?: unknown;
    /** IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 0. */
    "location_ids"?: unknown;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all".
     */
    "match_type": "all";
    /** IDs of the products the policy covers. Up to 100 values. maxItems: 0. */
    "product_ids"?: unknown;
    /** IDs of the variants the policy covers. Up to 100 values. maxItems: 0. */
    "variant_ids"?: unknown;
});
/** The `include` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeInclude = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. maxItems: 100. uniqueItems: true. [] (Value): string. After trimming surrounding
     * whitespace, 1 through 100 ASCII characters: lowercase letters and digits separated by single
     * hyphens. Values must be unique after trimming. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. maxItems: 100. uniqueItems: true. [] enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription". [] (Value): string. minLength: 1.
     * maxLength: 255. Value enum: "checkout", "payment_link", "virtual_terminal", "api",
     * "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription" | (string & {})>;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 100.
     * uniqueItems: true. [] (Value): string. A nonblank value of at most 255 bytes, counted before
     * trimming. minLength: 1. maxLength: 255. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "include".
     */
    "match_type": "include" | (string & {});
    /**
     * IDs of the products the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "include".
     */
    "match_type": unknown;
})
    & (({
    /** IDs of the products the policy covers. Up to 100 values. minItems: 1. */
    "product_ids": unknown;
})
    | ({
    /** IDs of the variants the policy covers. Up to 100 values. minItems: 1. */
    "variant_ids": unknown;
})
    | ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. minItems: 1.
     */
    "category_handles": unknown;
})
    | ({
    /** IDs of the Locations the item was fulfilled from. Up to 100 values. minItems: 1. */
    "location_ids": unknown;
})
    | ({
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. minItems: 1.
     */
    "channel_types": unknown;
})
    | (Record<string, unknown>)));
/** The `include` variant of `ReturnPolicyScope`. */
export type ReturnPolicyScopeIncludeRequestInput = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. maxItems: 100. uniqueItems: true. [] (Value): string. After trimming surrounding
     * whitespace, 1 through 100 ASCII characters: lowercase letters and digits separated by single
     * hyphens. Values must be unique after trimming. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. maxItems: 100. uniqueItems: true. [] enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription". [] (Value): string. minLength: 1.
     * maxLength: 255. Value enum: "checkout", "payment_link", "virtual_terminal", "api",
     * "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription">;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 100.
     * uniqueItems: true. [] (Value): string. A nonblank value of at most 255 bytes, counted before
     * trimming. minLength: 1. maxLength: 255. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "include".
     */
    "match_type": "include";
    /**
     * IDs of the products the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & (({
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "include".
     */
    "match_type": "include";
})
    & (({
    /** IDs of the products the policy covers. Up to 100 values. minItems: 1. */
    "product_ids": unknown;
})
    | ({
    /** IDs of the variants the policy covers. Up to 100 values. minItems: 1. */
    "variant_ids": unknown;
})
    | ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. minItems: 1.
     */
    "category_handles": unknown;
})
    | ({
    /** IDs of the Locations the item was fulfilled from. Up to 100 values. minItems: 1. */
    "location_ids": unknown;
})
    | ({
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. minItems: 1.
     */
    "channel_types": unknown;
})));
/**
 * The products, variants, categories, channels, or locations a return policy revision applies to,
 * or all of them.
 */
export type ReturnPolicyScopeRequestInput = ({
    /**
     * Handles of catalog categories. An item matches when any of its categories is listed. Up to
     * 100 values. maxItems: 100. uniqueItems: true. [] (Value): string. After trimming surrounding
     * whitespace, 1 through 100 ASCII characters: lowercase letters and digits separated by single
     * hyphens. Values must be unique after trimming. minLength: 1.
     */
    "category_handles"?: Array<string>;
    /**
     * Order origins the policy covers: `checkout`, `payment_link`, `virtual_terminal`, `api`, or
     * `subscription`. Up to 100 values. maxItems: 100. uniqueItems: true. [] enum: "checkout",
     * "payment_link", "virtual_terminal", "api", "subscription". [] (Value): string. minLength: 1.
     * maxLength: 255. Value enum: "checkout", "payment_link", "virtual_terminal", "api",
     * "subscription".
     */
    "channel_types"?: Array<"checkout" | "payment_link" | "virtual_terminal" | "api" | "subscription">;
    /**
     * IDs of the Locations the item was fulfilled from. Up to 100 values. maxItems: 100.
     * uniqueItems: true. [] (Value): string. A nonblank value of at most 255 bytes, counted before
     * trimming. minLength: 1. maxLength: 255. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_ids"?: Array<string>;
    /**
     * all covers every item and requires every selector to be empty. include covers only what the
     * selectors name and requires at least one nonempty selector. Value enum: "all", "include".
     */
    "match_type": "all" | "include";
    /**
     * IDs of the products the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_ids"?: Array<string>;
    /**
     * IDs of the variants the policy covers. Up to 100 values. maxItems: 100. uniqueItems: true.
     * [] (Value): string. A nonblank value of at most 255 bytes, counted before trimming.
     * minLength: 1. maxLength: 255. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_ids"?: Array<string>;
})
    & ((Exclude<ReturnPolicyScopeAllRequestInput & object, readonly unknown[]>)
    | (Exclude<ReturnPolicyScopeIncludeRequestInput & object, readonly unknown[]>));
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
    /**
     * Note for your own team about this line. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1.
     */
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
    /**
     * Note for your own team about this line. Surrounding whitespace is trimmed before length
     * validation. A supplied value cannot be blank; use null where clearing is supported.
     * minLength: 1.
     */
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
export type ReturnReasonPreviousAttributes = {
    /**
     * Catalog category handles this reason applies to. A reason with categories is suggested, and
     * accepted from a customer session, only for order lines whose product is in one of them. A
     * reason with no categories applies to every line. Not product types or tags: use handles from
     * GET /v1/categories. anyOf[1] (Value): Array of string. Catalog category handles this reason
     * applies to. A reason with categories is suggested, and accepted from a customer session,
     * only for order lines whose product is in one of them. A reason with no categories applies to
     * every line. Not product types or tags: use handles from GET /v1/categories. anyOf[1][]
     * (Value): string. anyOf[2] (Value): null.
     */
    "category_handles"?: ((Array<string>) | (null));
    /**
     * When the reason was created. Built-in Flint reasons use their release time,
     * 2026-07-27T00:00:00Z. Their updated_at is the merchant availability change time, or the same
     * release time if unchanged. anyOf[1] (Value): string. When the reason was created. Built-in
     * Flint reasons use their release time, 2026-07-27T00:00:00Z. Their updated_at is the merchant
     * availability change time, or the same release time if unchanged. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "created_at"?: ((string) | (null));
    /**
     * Longer explanation of when to use the reason. anyOf[1] (Value): string. Longer explanation
     * of when to use the reason. anyOf[2] (Value): null.
     */
    "description"?: ((string) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string.
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". anyOf[2] (Value): null.
     */
    "external_reference_id"?: ((string) | (null));
    /**
     * Lowercase snake_case identifier, unique among your reasons. Flint's own reasons have fixed
     * handles. Can't be changed after create, and an archived reason keeps its handle reserved.
     * anyOf[1] (Value): string. Lowercase snake_case identifier, unique among your reasons.
     * Flint's own reasons have fixed handles. Can't be changed after create, and an archived
     * reason keeps its handle reserved. minLength: 1. maxLength: 100. pattern:
     * ^[a-z][a-z0-9_]{0,99}$. anyOf[2] (Value): null.
     */
    "handle"?: ((string) | (null));
    /**
     * Whether a Return line with this reason needs a buyer_note. anyOf[1] (Value): boolean.
     * Whether a Return line with this reason needs a buyer_note. anyOf[2] (Value): null.
     */
    "is_note_required"?: ((boolean) | (null));
    /**
     * Name buyers and staff see. anyOf[1] (Value): string. Name buyers and staff see. anyOf[2]
     * (Value): null.
     */
    "name"?: ((string) | (null));
    /**
     * Flint's ID for the reason. Send it as return_reason_id on a Return line. anyOf[1] (Value):
     * string. Flint's ID for the reason. Send it as return_reason_id on a Return line. Example:
     * "rrsn_01KEZF7C00SEE2T4EYP1NXAH3E". anyOf[2] (Value): null.
     */
    "return_reason_id"?: ((string) | (null));
    /**
     * Whether Flint provides the reason or you created it. Value enum: "flint", "merchant".
     * anyOf[1] (Value): string. Whether Flint provides the reason or you created it. Value enum:
     * "flint", "merchant". anyOf[2] (Value): null.
     */
    "source"?: (("flint" | "merchant" | (string & {})) | (null));
    /**
     * Whether the reason is offered. An active reason is offered and accepted on new Return lines.
     * An inactive reason is not offered or accepted until you set it back to active. An archived
     * reason is retired for good and stays readable on Returns that recorded it. Archive a
     * merchant reason with DELETE /v1/return-reasons/{return_reason_id}. Flint reasons cannot be
     * deleted, but you can set them inactive. Value enum: "active", "archived", "inactive".
     * anyOf[1] (Value): string. Whether the reason is offered. An active reason is offered and
     * accepted on new Return lines. An inactive reason is not offered or accepted until you set it
     * back to active. An archived reason is retired for good and stays readable on Returns that
     * recorded it. Archive a merchant reason with DELETE /v1/return-reasons/{return_reason_id}.
     * Flint reasons cannot be deleted, but you can set them inactive. Value enum: "active",
     * "archived", "inactive". anyOf[2] (Value): null.
     */
    "status"?: (("active" | "archived" | "inactive" | (string & {})) | (null));
    /**
     * RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "updated_at"?: ((string) | (null));
    /**
     * Increases whenever the reason changes. Send it as expected_version to update or archive the
     * reason only if it hasn't changed since you read it. anyOf[1] (Value): integer. Increases
     * whenever the reason changes. Send it as expected_version to update or archive the reason
     * only if it hasn't changed since you read it. Format: int64. minimum: 1. anyOf[2] (Value):
     * null.
     */
    "version"?: ((number) | (null));
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
     * The Idempotency-Key of the request that created this resource. `null` when that request sent
     * no key, Flint created the resource, the reader isn't the caller that created it (another app
     * install, a buyer, or the merchant reading an app's or buyer's record), or the caller that
     * created an older record is unknown. Filter its list with `idempotency_key` to find it.
     * Recorded payloads, including replayed responses and webhook events, can return `null`. To
     * find a key that a replay returns as `null`, read the resource.
     */
    "idempotency_key": string | null;
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
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            "idempotency_key"?: string | null;
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
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            "idempotency_key"?: string | null;
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
     * object.generated_dispositions (Required): Array of {@link WebhookSnapshotReturnDisposition}.
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. object.line_items (Required): Array of {@link
     * ReturnReceiptLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnReceiptLineItem}. A returned item recorded as received. object.received_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.receiving_location_id (Required): string. ID of the Location that received the goods.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.return_id (Required): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_receipt_id (Required): string. Unique identifier for this return receipt,
     * prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id
     * (Optional): string. ID of the return shipment the goods arrived in. Absent when the receipt
     * isn't tied to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_receipt_id (Optional): string. ID of the receipt that corrected
     * this one. Absent while it is current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.supersedes_return_receipt_id (Optional): string. ID of the receipt this one corrects.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
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
         * WebhookSnapshotReturnDisposition}. Dispositions Flint created when it recorded this
         * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
         * generated_dispositions[] (Value): {@link WebhookSnapshotReturnDisposition}. A decision
         * about how returned merchandise will be handled. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
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
             * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
             * handled.
             */
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key"?: string | null;
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
     * object.generated_dispositions (Required): Array of {@link WebhookSnapshotReturnDisposition}.
     * Dispositions Flint created when it recorded this observation. Empty unless the policy's
     * `receipt_disposition_mode` is `automatic`. object.generated_dispositions[] (Value): {@link
     * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
     * handled. object.idempotency_key (Optional): string or null. The Idempotency-Key of the
     * request that created this resource. `null` when that request sent no key, Flint created the
     * resource, the reader isn't the caller that created it (another app install, a buyer, or the
     * merchant reading an app's or buyer's record), or the caller that created an older record is
     * unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including
     * replayed responses and webhook events, can return `null`. To find a key that a replay
     * returns as `null`, read the resource. object.line_items (Required): Array of {@link
     * ReturnReceiptLineItem}. The lines recorded. object.line_items[] (Value): {@link
     * ReturnReceiptLineItem}. A returned item recorded as received. object.received_at (Required):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.receiving_location_id (Required): string. ID of the Location that received the goods.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". object.return_id (Required): string. ID of the
     * Return the goods belong to. Example: "ret_01KEZF7C00PG93650ZKVQNGF7X".
     * object.return_receipt_id (Required): string. Unique identifier for this return receipt,
     * prefixed `retrc_`. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.shipment_id
     * (Optional): string. ID of the return shipment the goods arrived in. Absent when the receipt
     * isn't tied to a shipment. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". object.source_system
     * (Required): {@link ReturnSourceSystem} or null. System that recorded the observation. `null`
     * when no source system was recorded. object.source_system.anyOf[1] (Value): {@link
     * ReturnSourceSystem}. The system a return event came from, such as a point of sale or
     * warehouse system, with its own identifier. object.source_system.anyOf[2] (Value): null.
     * object.status (Required): string. Whether this is the current observation of these units or
     * a correction replaced it. Value enum: "current", "superseded". object.superseded_at
     * (Optional): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.superseded_by_return_receipt_id (Optional): string. ID of the receipt that corrected
     * this one. Absent while it is current. Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ".
     * object.supersedes_return_receipt_id (Optional): string. ID of the receipt this one corrects.
     * Example: "retrc_01KEZF7C0052GWDW41D9AJAVJZ". object.updated_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.version (Required):
     * integer. Current version of this resource's owned state. Send it as `expected_version` when
     * changing the resource to reject a stale write. Format: int64. minimum: 1.
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
         * WebhookSnapshotReturnDisposition}. Dispositions Flint created when it recorded this
         * observation. Empty unless the policy's `receipt_disposition_mode` is `automatic`.
         * generated_dispositions[] (Value): {@link WebhookSnapshotReturnDisposition}. A decision
         * about how returned merchandise will be handled. idempotency_key (Optional): string or
         * null. The Idempotency-Key of the request that created this resource. `null` when that
         * request sent no key, Flint created the resource, the reader isn't the caller that
         * created it (another app install, a buyer, or the merchant reading an app's or buyer's
         * record), or the caller that created an older record is unknown. Filter its list with
         * `idempotency_key` to find it. Recorded payloads, including replayed responses and
         * webhook events, can return `null`. To find a key that a replay returns as `null`, read
         * the resource. line_items (Required): Array of {@link ReturnReceiptLineItem}. The lines
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
             * WebhookSnapshotReturnDisposition}. A decision about how returned merchandise will be
             * handled.
             */
            "generated_dispositions": Array<WebhookSnapshotReturnDisposition>;
            /**
             * The Idempotency-Key of the request that created this resource. `null` when that
             * request sent no key, Flint created the resource, the reader isn't the caller that
             * created it (another app install, a buyer, or the merchant reading an app's or
             * buyer's record), or the caller that created an older record is unknown. Filter its
             * list with `idempotency_key` to find it. Recorded payloads, including replayed
             * responses and webhook events, can return `null`. To find a key that a replay returns
             * as `null`, read the resource.
             */
            "idempotency_key"?: string | null;
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

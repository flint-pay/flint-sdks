import type {
    ReturnPolicyRevisionInputIneligibleInput,
    ReturnPolicyRevisionInputReturnableInput,
    ReturnInspection
} from './types-49.js';
import type {
    ReturnRestockingFeePolicyInput,
    ReturnShippingPolicyInput,
    ReturnWindowInput,
    ReturnSourceSystemRequest,
    ReturnSourceSystemRequestInput,
    ReturnResource,
    ReturnSourceSystem,
    ReturnUnverifiedItem,
    ReturnUnverifiedItemInput,
    ReturnResolutionExecutionBlocker,
    ReturnResolutionLineItem
} from './types-51.js';
import type { CreateReturnPreviewRequestInput, CreateReturnReasonRequestInput } from './types-10.js';
import type { MetadataMap, MetadataRequestInput, MerchantWebhookEnvelope, MoneyValue, MoneyValueInput } from './types-35.js';
import type { ReturnDisposition, ReturnActor } from './types-48.js';
import type { InputValue } from '../runtime.js';
import type { UpdateReturnReasonRequestInput } from './types-60.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { VerifyReturnReceiptLineItemRequestInput } from './types-61.js';
import type { ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-21.js';
import type { Refund } from './types-46.js';
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
/**
 * The `return_receipt.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnReceiptCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
});
/** A returned item recorded as received. */
export type ReturnReceiptLineItem = {
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "available_disposition_quantity": number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    "return_line_item_id"?: string;
    "return_receipt_id": string;
    "return_receipt_line_item_id": string;
    /** [] enum: "verify". [] (Value): string.  Value enum: "verify". */
    "supported_actions": Array<"verify" | (string & {})>;
    /**
     * Merchandise received in a return that does not match an expected return line, described by
     * name, SKU, and description.
     */
    "unverified_item"?: ReturnUnverifiedItem;
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
    "verification_reason_message"?: string;
    /** Value enum: "matched", "unverified", "excess". */
    "verification_status": "matched" | "unverified" | "excess" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "verified_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "verified_by"?: ReturnActor;
};
/** The `excess` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputExcess = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
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
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
}));
/** The `excess` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputExcessInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
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
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
})
    & ({
    "unverified_item"?: never;
}));
/** The `matched` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputMatched = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
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
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
}));
/** The `matched` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputMatchedInput = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
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
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
    "return_line_item_id": string;
})
    & ({
    "unverified_item"?: never;
}));
/** The `unverified` variant of `ReturnReceiptLineItemInput`. */
export type ReturnReceiptLineItemInputUnverified = ({
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
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
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
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
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
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
    /** The expected Return line. Required for matched and excess merchandise. minLength: 1. */
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
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.superseded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.superseded";
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
    "event_type": "return_receipt.superseded";
});
/**
 * The `return_receipt.superseded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type ReturnReceiptSupersededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnReceipt}. A record of returned items arriving at a
     * location.
     */
    "data"?: {
        /** A record of returned items arriving at a location. */
        "object": ReturnReceipt;
    };
    /** Value enum: "return_receipt.superseded". */
    "event_type"?: "return_receipt.superseded";
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
 * The `return_receipt.superseded` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type ReturnReceiptSupersededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnReceipt}. A record of returned items arriving at a
     * location.
     */
    "data"?: {
        /** A record of returned items arriving at a location. */
        "object": ReturnReceipt;
    };
    /** Value enum: "return_receipt.superseded". */
    "event_type"?: "return_receipt.superseded";
});
export type ReturnReceiptVerifiedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.verified";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnReceipt;
    };
    "event_type"?: "return_receipt.verified";
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
    "event_type": "return_receipt.verified";
});
/**
 * The `return_receipt.verified` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ReturnReceiptVerifiedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnReceipt}. A record of returned items arriving at a
     * location.
     */
    "data"?: {
        /** A record of returned items arriving at a location. */
        "object": ReturnReceipt;
    };
    /** Value enum: "return_receipt.verified". */
    "event_type"?: "return_receipt.verified";
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
 * The `return_receipt.verified` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ReturnReceiptVerifiedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link ReturnReceipt}. A record of returned items arriving at a
     * location.
     */
    "data"?: {
        /** A record of returned items arriving at a location. */
        "object": ReturnReceipt;
    };
    /** Value enum: "return_receipt.verified". */
    "event_type"?: "return_receipt.verified";
});
export type ReturnReceiptsGetParams = {};
export type ReturnReceiptsListParams = {
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
    /** Search by return receipt ID or external reference ID. */
    "query"?: InputValue<string>;
    /** Inclusive lower bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on received_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "received_before"?: InputValue<string | globalThis.Date>;
    /** Filter by receiving location id. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "receiving_location_id"?: InputValue<string>;
    /** Filter by return id. Example: "ret_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_id"?: InputValue<string>;
    /** Filter by return line item id. Example: "retli_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "return_line_item_id"?: InputValue<string>;
    /** Filter by shipment id. Example: "shp_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "shipment_id"?: InputValue<string>;
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
    /**
     * Filter by verification status. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "matched", "unverified", "excess". Value enum: "matched", "unverified", "excess". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "matched", "unverified", "excess".
     * anyOf[1][] (Value): string. Value enum: "matched", "unverified", "excess". anyOf[2] (Value):
     * string. Value enum: "matched", "unverified", "excess".
     */
    "verification_status"?: InputValue<("matched" | "unverified" | "excess") | readonly ("matched" | "unverified" | "excess")[]>;
};
export type ReturnReceiptsVerifyLineItemParams = (InputValue<VerifyReturnReceiptLineItemRequestInput>);
export type ReturnReopenedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.reopened";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ReturnResource;
    };
    "event_type"?: "return.reopened";
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
    "event_type": "return.reopened";
});
/**
 * The `return.reopened` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReturnReopenedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.reopened". */
    "event_type"?: "return.reopened";
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
 * The `return.reopened` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReturnReopenedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ReturnResource}. A request to send purchased items back. */
    "data"?: {
        /** A request to send purchased items back. */
        "object": ReturnResource;
    };
    /** Value enum: "return.reopened". */
    "event_type"?: "return.reopened";
});
/** A replacement item added to a return resolution, with its quantity and price totals. */
export type ReturnReplacementLineItem = {
    "bundle_id"?: string;
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "discount_money": MoneyValue;
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    "return_replacement_line_item_id": string;
    "return_resolution_id": string;
    "sku"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "subtotal_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "tax_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "total_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    "variant_id"?: string;
};
/** The `bundle` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputBundle = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": unknown;
    /** minLength: 1. */
    "bundle_id": string;
}));
/** The `bundle` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputBundleInput = ({
    /** minLength: 1. */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "bundle".
     */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle";
    /** minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "name"?: never;
})));
/** The `custom` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputCustom = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": unknown;
    /** minLength: 1. */
    "name": string;
}));
/** The `custom` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputCustomInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum: "custom".
     */
    "type": "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom";
    /** minLength: 1. */
    "name": string;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputVariant = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": unknown;
    /** minLength: 1. */
    "variant_id": string;
}));
/** The `variant` variant of `ReturnReplacementLineItemInput`. */
export type ReturnReplacementLineItemInputVariantInput = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant".
     */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant";
    /** minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
}) & ({
    "name"?: never;
})));
/**
 * A replacement item to include in a return resolution, from a variant, a bundle, or a custom name
 * and price.
 */
export type ReturnReplacementLineItemRequest = ({
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. */
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
    /** minLength: 1. */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
    /** minLength: 1. */
    "name"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /** minLength: 1. */
    "sku"?: string;
    /**
     * The source of the replacement merchandise: variant, bundle, or custom. Value enum:
     * "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. */
    "variant_id"?: string;
})
    & ((Exclude<ReturnReplacementLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<ReturnReplacementLineItemInputCustomInput & object, readonly unknown[]>));
/** The refund, exchange, or other outcome of a return. */
export type ReturnResolution = {
    /**
     * Value enum: "buyer_payment", "buyer_selection", "merchant_review", "manual_release",
     * "linked_effect_retry", "other".
     */
    "action_reason"?: "buyer_payment"
        | "buyer_selection"
        | "merchant_review"
        | "manual_release"
        | "linked_effect_retry"
        | "other"
        | (string & {});
    /** Value enum: "buyer", "merchant". */
    "action_required_by"?: "buyer" | "merchant" | (string & {});
    /**
     *  [] (Value): {@link ReturnResolutionAdjustment}. A fee or credit applied to a return
     * resolution, such as a restocking fee, with the assessed and applied amounts and any waiver.
     */
    "adjustments": Array<ReturnResolutionAdjustment>;
    /**
     * Amount the buyer owes when deduction_money and replacement_total_money exceed
     * returned_total_money plus credit_money. Zero when the buyer is owed a refund and for
     * no_monetary_action. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "buyer_payment_amount_money": MoneyValue;
    /**
     * Value returned to the buyer: returned_total_money plus credit_money, minus deduction_money
     * and replacement_total_money, when that balance is zero or more. For store_credit, the value
     * issued on new gift cards. Zero for no_monetary_action. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "buyer_refund_amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "canceled_by"?: ReturnActor;
    /**
     * Value enum: "buyer_request", "merchant_request", "duplicate", "expired", "created_in_error",
     * "other".
     */
    "cancellation_reason"?: "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    "cancellation_reason_message"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "confirmed_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "confirmed_by"?: ReturnActor;
    "corrects_return_resolution_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "created_by": ReturnActor;
    /**
     * Credits added by the resolution's adjustments. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "credit_money": MoneyValue;
    /**
     * Deductions taken by the resolution's adjustments, such as a restocking fee. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "deduction_money": MoneyValue;
    /**
     *  [] (Value): {@link ReturnResolutionExecutionBlocker}. Work that must complete before a
     * Return resolution can finish.
     */
    "execution_blockers": Array<ReturnResolutionExecutionBlocker>;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
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
    /** When the resolution became fulfilled. Format: date-time. */
    "fulfilled_at"?: string;
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
     *  [] (Value): {@link ReturnResolutionLineItem}. A return line included in a resolution, with
     * its quantity and returned total.
     */
    "line_items": Array<ReturnResolutionLineItem>;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata": MetadataMap;
    /**  [] (Value): string. */
    "payment_intent_ids": Array<string>;
    /**
     *  [] (Value): {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields,
     * including amount, status, and capture method, returned when the payment intent is expanded.
     */
    "payment_intents"?: Array<ExpandedPaymentIntentSummary>;
    /** Value enum: "original_price", "current_price", "merchant_agreed_price". */
    "pricing_basis"?: "original_price" | "current_price" | "merchant_agreed_price" | (string & {});
    /**  [] (Value): string. */
    "refund_ids": Array<string>;
    /**  [] (Value): {@link Refund}. Money returned against a collected payment. */
    "refunds"?: Array<Refund>;
    /**
     *  [] (Value): {@link ReturnReplacementLineItem}. A replacement item added to a return
     * resolution, with its quantity and price totals.
     */
    "replacement_line_items": Array<ReturnReplacementLineItem>;
    /**
     * Present only when `expand` includes `replacement_order`; `null` when expanded and there is
     * no related order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields,
     * including status, payment and refund status, and pricing and settlement amounts, returned
     * when the order is expanded. anyOf[2] (Value): null.
     */
    "replacement_order"?: ((ExpandedOrderSummary) | (null));
    "replacement_order_id"?: string;
    /**
     * Total of the replacement items the buyer receives. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "replacement_total_money": MoneyValue;
    /**
     * Value enum: "refund", "exchange", "replacement", "store_credit", "no_monetary_action",
     * "correction".
     */
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
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /** Format: int64. minimum: 0. */
    "version": number;
};
/**
 * A fee or credit applied to a return resolution, such as a restocking fee, with the assessed and
 * applied amounts and any waiver.
 */
export type ReturnResolutionAdjustment = {
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValue;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    "reason_message"?: string;
    "return_line_item_id"?: string;
    "return_policy_revision_id"?: string;
    "return_resolution_adjustment_id": string;
    /** Value enum: "applied", "waived". */
    "status": "applied" | "waived" | (string & {});
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "waived_at"?: string;
    /**
     * Who performed a return action: a buyer, merchant, integration, or the system, with an
     * optional ID.
     */
    "waived_by"?: ReturnActor;
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other". */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to apply to a return resolution, with the assessed and applied amounts and
 * whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequest = {
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
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValue;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other"
        | (string & {});
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "return_line_item_id"?: string;
    /** Value enum: "applied", "waived". */
    "status"?: "applied" | "waived" | (string & {});
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit" | (string & {});
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other". */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other" | (string & {});
    /** minLength: 1. */
    "waiver_reason_message"?: string;
};
/**
 * A fee or credit to apply to a return resolution, with the assessed and applied amounts and
 * whether it is applied or waived.
 */
export type ReturnResolutionAdjustmentRequestInput = {
    /**
     * Value enum: "return_shipping_fee", "restocking_fee", "other_fee", "goodwill_credit",
     * "price_correction", "other".
     */
    "adjustment_type": "return_shipping_fee"
        | "restocking_fee"
        | "other_fee"
        | "goodwill_credit"
        | "price_correction"
        | "other";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "applied_amount_money": MoneyValueInput;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "assessed_amount_money": MoneyValueInput;
    /**
     * Value enum: "return_policy", "inspection_result", "return_shipping_cost",
     * "customer_service", "manual_correction", "other".
     */
    "reason": "return_policy"
        | "inspection_result"
        | "return_shipping_cost"
        | "customer_service"
        | "manual_correction"
        | "other";
    /** minLength: 1. */
    "reason_message"?: string;
    /** minLength: 1. */
    "return_line_item_id"?: string;
    /** Value enum: "applied", "waived". */
    "status"?: "applied" | "waived";
    /** Value enum: "deduction", "credit". */
    "value_effect": "deduction" | "credit";
    /** Value enum: "policy_override", "merchant_review", "customer_service", "other". */
    "waiver_reason"?: "policy_override" | "merchant_review" | "customer_service" | "other";
    /** minLength: 1. */
    "waiver_reason_message"?: string;
};

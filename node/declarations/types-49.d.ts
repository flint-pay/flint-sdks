import type {
    PromotionExclusivityPatch,
    Promotion,
    PromotionApplicationMethod,
    PromotionCode,
    PromotionCodesSummary,
    PromotionCombinesWith,
    PromotionExclusivity
} from './types-48.js';
import type { ResponseMeta } from './types-51.js';
import type { MoneyValue, MoneyValueInput } from './types-37.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-36.js';
import type { PartnerWebhookEnvelope } from './types-42.js';
import type { InputValue } from '../runtime.js';
import type { CreatePromotionRequestInput } from './types-11.js';
import type { CategoriesDeleteParams } from './types-4.js';
import type { DisputesAcceptParams } from './types-22.js';
import type { UpdatePromotionRequestInput } from './types-64.js';
import type { CheckoutCustomTextConfig, CheckoutPaymentConfig } from './types-5.js';
import type { Image } from './types-27.js';
import type { LegalSettings } from './types-34.js';
import type {
    PaymentLinkCustomField,
    PaymentLinkEventConfig,
    PaymentLinkLineItem,
    PaymentLinkSubscriptionPreview,
    PaymentLinkAvailableVariant,
    PaymentLinkProductOption
} from './types-44.js';
import type { ThemeConfig, TextModifierConfigRequest } from './types-62.js';
import type { CheckoutTheme } from './types-6.js';
import type { SelectedProductOption } from './types-56.js';
import type { ReturnPolicyRevisionRequest, ReturnPolicyRevisionRequestInput } from './types-53.js';
import type { GetReturnPolicyResponse } from './types-25.js';
import type { InventoryProvenanceRequest } from './types-28.js';
/**
 * Send only fields to change. Omitted fields keep their stored values. Send priority 0 to reset
 * it. An empty object is invalid. minProperties: 1.
 */
export type PromotionExclusivityPatchInput = PromotionExclusivityPatch;
/** Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. */
export type PromotionExclusivityRequest = {
    /**
     * Exact, case-sensitive group name, 1 to 100 characters after trimming. minLength: 1.
     * maxLength: 100.
     */
    "group": string;
    /**
     * Higher priority wins. Equal priorities favor the larger standalone discount, then the
     * earlier created_at, then the lower promotion_id. Format: int32. Default: 0.
     */
    "priority"?: number;
};
/** Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. */
export type PromotionExclusivityRequestInput = PromotionExclusivityRequest;
/** A page of `Promotion` objects. */
export type PromotionListResponse = {
    /**
     * Promotions returned in the requested sort order. [] (Value): {@link Promotion}. Promotion
     * evaluation order: manual discounts stay, do not count toward the cap, and are ignored by
     * combines_with. Frozen subscription-term promotions are admitted first and are exempt from
     * exclusivity, combines_with, and the cap. Candidates include codes being applied, existing
     * promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data": Array<Promotion>;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The `percent_off` variant of `PromotionApplicationMethod`. */
export type PromotionPercentOffMethod = {
    /**
     * How the effect is applied across the matched items or charges. each applies the effect to
     * every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items
     * discounts 30 USD, each capped at the item price), and a percent_off is taken from each item.
     * across applies the effect once to the matched set as a whole: a fixed amount_off is the
     * whole amount one time (10 USD off the group total, not prorated per item), and a percent_off
     * is taken from the combined subtotal. For percent_off the two produce the same total and
     * differ only in how the discount is attributed to individual line items; for amount_off they
     * differ by the number of matched items, so set it deliberately. Defaults to each for
     * line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroup;
    /**
     * Maximum number of matched units that receive the discount. Only valid when type is
     * percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns
     * `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are
     * not supported. Flint discounts the first matched units in line-item order (the order items
     * were added), not the cheapest. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number;
    /** Percentage to discount, from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001. */
    "percent_off": number;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Selects the percent_off discount effect and its allowed fields. Value enum: "percent_off".
     */
    "type": "percent_off" | (string & {});
};
/** The `percent_off` variant of `PromotionApplicationMethodInput`. */
export type PromotionPercentOffMethodRequest = {
    /**
     * How the effect is applied across the matched items or charges. each applies the effect to
     * every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items
     * discounts 30 USD, each capped at the item price), and a percent_off is taken from each item.
     * across applies the effect once to the matched set as a whole: a fixed amount_off is the
     * whole amount one time (10 USD off the group total, not prorated per item), and a percent_off
     * is taken from the combined subtotal. For percent_off the two produce the same total and
     * differ only in how the discount is attributed to individual line items; for amount_off they
     * differ by the number of matched items, so set it deliberately. Defaults to each for
     * line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequest;
    /**
     * Maximum number of matched units that receive the discount. Only valid when type is
     * percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns
     * `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are
     * not supported. Flint discounts the first matched units in line-item order (the order items
     * were added), not the cheapest. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number;
    /** Percentage to discount, from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001. */
    "percent_off": number;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Selects the percent_off discount effect and its allowed fields. Value enum: "percent_off".
     */
    "type": "percent_off" | (string & {});
};
/** The `percent_off` variant of `PromotionApplicationMethodInput`. */
export type PromotionPercentOffMethodRequestInput = {
    /**
     * How the effect is applied across the matched items or charges. each applies the effect to
     * every matched item independently: a fixed amount_off is charged per item (10 USD off 3 items
     * discounts 30 USD, each capped at the item price), and a percent_off is taken from each item.
     * across applies the effect once to the matched set as a whole: a fixed amount_off is the
     * whole amount one time (10 USD off the group total, not prorated per item), and a percent_off
     * is taken from the combined subtotal. For percent_off the two produce the same total and
     * differ only in how the discount is attributed to individual line items; for amount_off they
     * differ by the number of matched items, so set it deliberately. Defaults to each for
     * line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Maximum number of matched units that receive the discount. Only valid when type is
     * percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns
     * `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are
     * not supported. Flint discounts the first matched units in line-item order (the order items
     * were added), not the cheapest. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number;
    /** Percentage to discount, from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001. */
    "percent_off": number;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceRequestInput;
    /**
     * Selects the percent_off discount effect and its allowed fields. Value enum: "percent_off".
     */
    "type": "percent_off";
};
/**
 * How often a promotion's discount repeats on a subscription: once, for a number of charged
 * payments, or forever.
 */
export type PromotionRecurrence = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum: "once",
     * "repeating", "forever".
     */
    "type": "once" | "repeating" | "forever" | (string & {});
})
    & ((Exclude<PromotionRecurrenceOnce & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceRepeating & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceForever & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `forever` variant of `PromotionRecurrence`. */
export type PromotionRecurrenceForever = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum:
     * "forever".
     */
    "type": "forever" | (string & {});
})
    & (({
    /** Apply the promotion to every charged subscription payment. Value enum: "forever". */
    "type": unknown;
}));
/** The `forever` variant of `PromotionRecurrence`. */
export type PromotionRecurrenceForeverRequestInput = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum:
     * "forever".
     */
    "type": "forever";
})
    & (({
    /** Apply the promotion to every charged subscription payment. Value enum: "forever". */
    "type": ("forever") & ("forever");
})
    & ({
    "period_count"?: never;
}));
/** The `once` variant of `PromotionRecurrence`. */
export type PromotionRecurrenceOnce = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum: "once".
     */
    "type": "once" | (string & {});
})
    & (({
    /** Apply the promotion to the first charged subscription payment. Value enum: "once". */
    "type": unknown;
}));
/** The `once` variant of `PromotionRecurrence`. */
export type PromotionRecurrenceOnceRequestInput = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum: "once".
     */
    "type": "once";
})
    & (({
    /** Apply the promotion to the first charged subscription payment. Value enum: "once". */
    "type": ("once") & ("once");
})
    & ({
    "period_count"?: never;
}));
/** The `repeating` variant of `PromotionRecurrence`. */
export type PromotionRecurrenceRepeating = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     */
    "period_count": number;
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum:
     * "repeating".
     */
    "type": "repeating" | (string & {});
})
    & ({
    /**
     * Apply the promotion to period_count charged subscription payments. Value enum: "repeating".
     */
    "type": unknown;
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     */
    "period_count": number;
});
/** The `repeating` variant of `PromotionRecurrence`. */
export type PromotionRecurrenceRepeatingRequestInput = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     */
    "period_count": number;
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum:
     * "repeating".
     */
    "type": "repeating";
})
    & ({
    /**
     * Apply the promotion to period_count charged subscription payments. Value enum: "repeating".
     */
    "type": ("repeating") & ("repeating");
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     */
    "period_count": number;
});
/**
 * How often a promotion's discount repeats on a subscription: once, for a number of charged
 * payments, or forever.
 */
export type PromotionRecurrenceRequestInput = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum: "once",
     * "repeating", "forever".
     */
    "type": "once" | "repeating" | "forever";
})
    & ((Exclude<PromotionRecurrenceOnceRequestInput & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceRepeatingRequestInput & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceForeverRequestInput & object, readonly unknown[]>));
/** The `Promotion code` variant of `PromotionRefInput`. */
export type PromotionRefInputPromotionCode = ({
    /** Human-entered promotion code to apply. minLength: 1. */
    "promotion_code": string;
    /**
     * Promotion to apply by ID, including a code-gated promotion applied without a code. Counts
     * only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`.
     * minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string;
});
/** The `Promotion code` variant of `PromotionRefInput`. */
export type PromotionRefInputPromotionCodeInput = ({
    /** Human-entered promotion code to apply. minLength: 1. */
    "promotion_code": string;
    /**
     * Promotion to apply by ID, including a code-gated promotion applied without a code. Counts
     * only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`.
     * minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string;
})
    & (({
    "promotion_id"?: never;
}));
/** The `Promotion ID` variant of `PromotionRefInput`. */
export type PromotionRefInputPromotionID = ({
    /** Human-entered promotion code to apply. minLength: 1. */
    "promotion_code"?: string;
    /**
     * Promotion to apply by ID, including a code-gated promotion applied without a code. Counts
     * only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`.
     * minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
});
/** The `Promotion ID` variant of `PromotionRefInput`. */
export type PromotionRefInputPromotionIDInput = ({
    /** Human-entered promotion code to apply. minLength: 1. */
    "promotion_code"?: string;
    /**
     * Promotion to apply by ID, including a code-gated promotion applied without a code. Counts
     * only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`.
     * minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
})
    & (({
    "promotion_code"?: never;
}));
/** Identifies the promotion to apply, by promotion code or by promotion ID. */
export type PromotionRefRequest = ({
    /** Human-entered promotion code to apply. minLength: 1. */
    "promotion_code"?: string;
    /**
     * Promotion to apply by ID, including a code-gated promotion applied without a code. Counts
     * only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`.
     * minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string;
})
    & ((Exclude<PromotionRefInputPromotionID & object, readonly unknown[]>)
    | (Exclude<PromotionRefInputPromotionCode & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Identifies the promotion to apply, by promotion code or by promotion ID. */
export type PromotionRefRequestInput = ({
    /** Human-entered promotion code to apply. minLength: 1. */
    "promotion_code"?: string;
    /**
     * Promotion to apply by ID, including a code-gated promotion applied without a code. Counts
     * only toward the promotion's `max_uses`. Checkout credentials must use `promotion_code`.
     * minLength: 1. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: string;
})
    & ((Exclude<PromotionRefInputPromotionIDInput & object, readonly unknown[]>)
    | (Exclude<PromotionRefInputPromotionCodeInput & object, readonly unknown[]>));
/** A response containing `Promotion` data. */
export type PromotionResponse = {
    /**
     * The requested promotion. Promotion evaluation order: manual discounts stay, do not count
     * toward the cap, and are ignored by combines_with. Frozen subscription-term promotions are
     * admitted first and are exempt from exclusivity, combines_with, and the cap. Candidates
     * include codes being applied, existing promotion discounts, and qualifying automatic
     * promotions. Each exclusivity group keeps its highest-priority member, then the larger
     * standalone discount, earlier created_at, and lower promotion_id. Remaining candidates rank
     * by standalone discount, then earlier created_at and lower promotion_id; each is admitted
     * unless max_promotions_per_order is reached or both promotions do not allow each other's
     * discount class. Admitted promotions price line item first, then order, then service charge.
     * A zero-value promotion is dropped and selection runs again.
     */
    "data": Promotion;
    /**
     * Additional information about this response. Metadata returned with a response: the
     * `api_version`, `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Identifier of this API request, useful when contacting support. maxLength: 128. pattern:
     * ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example: "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/**
 * One condition in a promotion rule group, which tests an attribute with an operator and values.
 */
export type PromotionRule = {
    /**
     * Field the rule tests. The attribute fixes the value type and the operators that are legal
     * for it: money attributes accept comparison operators but not eq or in, booleans accept eq
     * only, and so on. The full attribute/type/operator matrix is machine-readable in
     * x-flint-rule-attributes on this schema. metadata.<key> reads a string from the customer's
     * metadata and accepts the string operators. A disallowed operator returns `400
     * INVALID_REQUEST` naming the operator, and the message lists the operators the attribute
     * allows. customer.paid_order_count counts the customer's other orders in the same merchant
     * and environment, with live and test mode counted separately, that have at least one
     * successfully settled payment above zero, including partial payments, or are completed
     * zero-total orders, including orders completed with a 100% promotion or gift card. Later
     * refunds and disputes do not remove an order. The current order, failed, canceled, or expired
     * attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked
     * through link_guest_purchases count; unlinked guest orders are never matched by email. The
     * order's customer takes precedence over a checkout session's merchant-named or email-verified
     * customer; typed email alone does not identify a customer. Without an identified customer the
     * promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for
     * a first-order guarantee across concurrent checkouts.
     */
    "attribute": string;
    /**
     * Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency
     * must match its key. * (Value): {@link MoneyValue}. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Comparison to apply to the attribute. The attribute determines which operators are allowed.
     * Value enum: "eq", "ne", "gt", "gte", "lt", "lte", "in", "contains", "is_defined".
     */
    "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined" | (string & {});
    /**
     * Comparison values with the type required by the attribute. Omit for is_defined, which tests
     * whether the attribute is present. [] (Value): {@link PromotionRuleValue}. Rule comparison
     * value. Use a primitive string, number, boolean, or a money object.
     */
    "values"?: Array<PromotionRuleValue>;
};
/**
 * A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
 * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules,
 * or send null where the field is clearable. Responses list rules before nested groups. Under any,
 * a nested group containing only one rule reads back as that rule. Under all, nested groups keep
 * their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
 * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
 * line_item.* rules in the same all group, including its nested groups.
 */
export type PromotionRuleGroup = (({
    /**
     * Rules and nested groups that must all match. minItems: 1. [] (Value): {@link PromotionRule}
     * or {@link PromotionRuleGroup}. [].oneOf[1] (Value): {@link PromotionRule}. One condition in
     * a promotion rule group, which tests an attribute with an operator and values. [].oneOf[2]
     * (Value): {@link PromotionRuleGroup}. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "all": Array<((PromotionRule) | (PromotionRuleGroup) | (unknown))>;
})
    | ({
    /**
     * Rules and nested groups of which at least one must match. minItems: 1. [] (Value): {@link
     * PromotionRule} or {@link PromotionRuleGroup}. [].oneOf[1] (Value): {@link PromotionRule}.
     * One condition in a promotion rule group, which tests an attribute with an operator and
     * values. [].oneOf[2] (Value): {@link PromotionRuleGroup}. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups.
     */
    "any": Array<((PromotionRule) | (PromotionRuleGroup) | (unknown))>;
})
    | (Record<string, unknown>));
/**
 * A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
 * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules,
 * or send null where the field is clearable. Responses list rules before nested groups. Under any,
 * a nested group containing only one rule reads back as that rule. Under all, nested groups keep
 * their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
 * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
 * line_item.* rules in the same all group, including its nested groups.
 */
export type PromotionRuleGroupRequest = (({
    /**
     * Rules and nested groups that must all match. minItems: 1. [] (Value): {@link PromotionRule}
     * or {@link PromotionRuleGroupRequest}. [].oneOf[1] (Value): {@link PromotionRule}. One
     * condition you set in a promotion rule group, which tests an attribute with an operator and
     * values. [].oneOf[2] (Value): {@link PromotionRuleGroupRequest}. A rule group is an object
     * with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays,
     * empty groups, and a rules key are invalid. Omit the field for no rules, or send null where
     * the field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups.
     */
    "all": Array<((PromotionRule) | (PromotionRuleGroupRequest) | (unknown))>;
})
    | ({
    /**
     * Rules and nested groups of which at least one must match. minItems: 1. [] (Value): {@link
     * PromotionRule} or {@link PromotionRuleGroupRequest}. [].oneOf[1] (Value): {@link
     * PromotionRule}. One condition you set in a promotion rule group, which tests an attribute
     * with an operator and values. [].oneOf[2] (Value): {@link PromotionRuleGroupRequest}. A rule
     * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     */
    "any": Array<((PromotionRule) | (PromotionRuleGroupRequest) | (unknown))>;
})
    | (Record<string, unknown>));
/**
 * A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
 * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules,
 * or send null where the field is clearable. Responses list rules before nested groups. Under any,
 * a nested group containing only one rule reads back as that rule. Under all, nested groups keep
 * their boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
 * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
 * line_item.* rules in the same all group, including its nested groups.
 */
export type PromotionRuleGroupRequestInput = (({
    /**
     * Rules and nested groups that must all match. minItems: 1. [] (Value): {@link
     * PromotionRuleRequestInput} or {@link PromotionRuleGroupRequestInput}. [].oneOf[1] (Value):
     * {@link PromotionRuleRequestInput}. One condition you set in a promotion rule group, which
     * tests an attribute with an operator and values. [].oneOf[2] (Value): {@link
     * PromotionRuleGroupRequestInput}. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "all": Array<((PromotionRuleRequestInput) | (PromotionRuleGroupRequestInput))>;
})
    | ({
    /**
     * Rules and nested groups of which at least one must match. minItems: 1. [] (Value): {@link
     * PromotionRuleRequestInput} or {@link PromotionRuleGroupRequestInput}. [].oneOf[1] (Value):
     * {@link PromotionRuleRequestInput}. One condition you set in a promotion rule group, which
     * tests an attribute with an operator and values. [].oneOf[2] (Value): {@link
     * PromotionRuleGroupRequestInput}. A rule group is an object with exactly one nonempty all
     * (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
     * invalid. Omit the field for no rules, or send null where the field is clearable. Responses
     * list rules before nested groups. Under any, a nested group containing only one rule reads
     * back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups.
     */
    "any": Array<((PromotionRuleRequestInput) | (PromotionRuleGroupRequestInput))>;
}));
/**
 * One condition you set in a promotion rule group, which tests an attribute with an operator and
 * values.
 */
export type PromotionRuleRequestInput = {
    /**
     * Field the rule tests. The attribute fixes the value type and the operators that are legal
     * for it: money attributes accept comparison operators but not eq or in, booleans accept eq
     * only, and so on. The full attribute/type/operator matrix is machine-readable in
     * x-flint-rule-attributes on this schema. metadata.<key> reads a string from the customer's
     * metadata and accepts the string operators. A disallowed operator returns `400
     * INVALID_REQUEST` naming the operator, and the message lists the operators the attribute
     * allows. customer.paid_order_count counts the customer's other orders in the same merchant
     * and environment, with live and test mode counted separately, that have at least one
     * successfully settled payment above zero, including partial payments, or are completed
     * zero-total orders, including orders completed with a 100% promotion or gift card. Later
     * refunds and disputes do not remove an order. The current order, failed, canceled, or expired
     * attempts, unpaid drafts, and unpaid open invoices do not count. Guest purchases linked
     * through link_guest_purchases count; unlinked guest orders are never matched by email. The
     * order's customer takes precedence over a checkout session's merchant-named or email-verified
     * customer; typed email alone does not identify a customer. Without an identified customer the
     * promotion is declined with customer_required. Combine eq 0 with max_uses_per_customer: 1 for
     * a first-order guarantee across concurrent checkouts. minLength: 1.
     */
    "attribute": string;
    /**
     * Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency
     * must match its key. * (Value): {@link MoneyValueInput}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Comparison to apply to the attribute. The attribute determines which operators are allowed.
     * Value enum: "eq", "ne", "gt", "gte", "lt", "lte", "in", "contains", "is_defined".
     */
    "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined";
    /**
     * Comparison values with the type required by the attribute. Omit for is_defined, which tests
     * whether the attribute is present. [] (Value): {@link PromotionRuleValueRequestInput}. Rule
     * comparison value. Use a primitive string, number, boolean, or a money object.
     */
    "values"?: Array<PromotionRuleValueRequestInput>;
};
/** Rule comparison value. Use a primitive string, number, boolean, or a money object. */
export type PromotionRuleValue = ((string) | (number) | (boolean) | (MoneyValue) | (unknown));
/** Rule comparison value. Use a primitive string, number, boolean, or a money object. */
export type PromotionRuleValueRequestInput = ((string) | (number) | (boolean) | (MoneyValueInput));
/**
 * When a promotion is active, with a start time, an end time, and the time zone it was entered in.
 */
export type PromotionSchedule = {
    /**
     * Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp.
     * Omitted when it has no end time. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ends_at"?: string;
    /**
     * Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has
     * no start time. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string;
    /**
     * IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute
     * timestamps, so this does not change when the promotion starts or ends. minLength: 1.
     * maxLength: 255.
     */
    "timezone"?: string;
};
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * subfields. An empty object is invalid. minProperties: 1.
 */
export type PromotionSchedulePatch = {
    /**
     * Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp.
     * Omission keeps the stored value; null clears it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ends_at"?: string | null;
    /**
     * Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omission keeps the
     * stored value; null clears it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string | null;
    /**
     * IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute
     * timestamps, so this does not change when the promotion starts or ends. Send null to clear
     * it. minLength: 1. maxLength: 255.
     */
    "timezone"?: string | null;
};
/**
 * Send only fields to change. Omitted fields keep their stored values. null clears nullable
 * subfields. An empty object is invalid. minProperties: 1.
 */
export type PromotionSchedulePatchInput = {
    /**
     * Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp.
     * Omission keeps the stored value; null clears it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ends_at"?: string | globalThis.Date | null;
    /**
     * Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omission keeps the
     * stored value; null clears it. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string | globalThis.Date | null;
    /**
     * IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute
     * timestamps, so this does not change when the promotion starts or ends. Send null to clear
     * it. minLength: 1. maxLength: 255.
     */
    "timezone"?: string | null;
};
/**
 * When a promotion is active, with a start time, an end time, and the time zone it was entered in.
 */
export type PromotionScheduleRequestInput = {
    /**
     * Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp.
     * Omitted when it has no end time. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "ends_at"?: string | globalThis.Date;
    /**
     * Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has
     * no start time. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string | globalThis.Date;
    /**
     * IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute
     * timestamps, so this does not change when the promotion starts or ends. minLength: 1.
     * maxLength: 255.
     */
    "timezone"?: string;
};
/**
 * Merchant promotion settings: whether automatic promotions and codes are enabled, and how many
 * promotions can apply to one order.
 */
export type PromotionSettings = {
    /**
     * Whether automatic promotions apply to this merchant's orders, checkout sessions and payment
     * links. Omitted means true. Explicit false stops them everywhere, and a checkout session or
     * payment link can't turn them back on.
     */
    "automatic_enabled"?: boolean;
    /**
     * Merchant promotion code redemption policy. Explicit false rejects promotion-code application
     * even when a checkout or payment link asks to show code entry.
     */
    "codes_enabled"?: boolean;
    /**
     * Maximum promotion discounts on an order, from 1 to 10, default 2. Manual discounts do not
     * count. See Promotion for the evaluation order. Format: int32. minimum: 1. maximum: 10.
     * Default: 2.
     */
    "max_promotions_per_order"?: number;
};
/**
 * Merchant promotion settings: whether automatic promotions and codes are enabled, and how many
 * promotions can apply to one order.
 */
export type PromotionSettingsRequestInput = PromotionSettings;
export type PromotionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "application_method": PromotionApplicationMethod;
            "available": boolean;
            "codes"?: Array<PromotionCode>;
            "codes_summary"?: PromotionCodesSummary;
            "combines_with": PromotionCombinesWith;
            "created_at"?: string;
            "description"?: string;
            "discount_class": "order" | "line_item" | "service_charge" | (string & {});
            "display_name": string;
            "eligibility_rules"?: PromotionRuleGroup;
            "exclusivity"?: PromotionExclusivity;
            "external_reference_id"?: string;
            "max_uses"?: number;
            "max_uses_per_customer": number | null;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "promotion_id": string;
            "redemption_type": "automatic" | "code" | (string & {});
            "schedule"?: PromotionSchedule;
            "status": "active" | "inactive" | "archived" | (string & {});
            "unavailable_reason"?: "inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {});
            "updated_at"?: string;
            "uses_count": number;
            "version": number;
        };
        "previous_attributes"?: Partial<Promotion>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "promotion.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "application_method": PromotionApplicationMethod;
            "available": boolean;
            "codes"?: Array<PromotionCode>;
            "codes_summary"?: PromotionCodesSummary;
            "combines_with": PromotionCombinesWith;
            "created_at"?: string;
            "description"?: string;
            "discount_class": "order" | "line_item" | "service_charge" | (string & {});
            "display_name": string;
            "eligibility_rules"?: PromotionRuleGroup;
            "exclusivity"?: PromotionExclusivity;
            "external_reference_id"?: string;
            "max_uses"?: number;
            "max_uses_per_customer": number | null;
            "merchant_id"?: string;
            "metadata"?: MetadataMap;
            "name": string;
            "promotion_id": string;
            "redemption_type": "automatic" | "code" | (string & {});
            "schedule"?: PromotionSchedule;
            "status": "active" | "inactive" | "archived" | (string & {});
            "unavailable_reason"?: "inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {});
            "updated_at"?: string;
            "uses_count": number;
            "version": number;
        };
        "previous_attributes"?: Partial<Promotion>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "promotion.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "promotion.updated";
});
/**
 * The `promotion.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `codes`. object.application_method (Required): {@link PromotionApplicationMethod}.
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields. object.available (Required): boolean. Whether the
     * promotion can apply right now: it is active, inside its schedule, under its max_uses, and,
     * when code-gated, has at least one redeemable code. object.codes (Optional): Array of {@link
     * PromotionCode}. The codes this request created, in request order. Present only on the `POST
     * /v1/promotions` response, where it is `[]` for a promotion created without codes. Read codes
     * later with `GET /v1/promotion-codes?promotion_id=`. object.codes[] (Value): {@link
     * PromotionCode}. A code a buyer enters to claim a promotion. object.codes_summary (Optional):
     * {@link PromotionCodesSummary}. Read-only rollup of this promotion's codes. Present only on
     * code-gated promotions; automatic promotions omit it. A count of a promotion's codes,
     * including how many are redeemable now and the newest redeemable code. object.combines_with
     * (Required): {@link PromotionCombinesWith}. Which promotion discount classes this promotion
     * may share an order with. Both promotions must allow each other's class. Manual discounts are
     * ignored. See Promotion for the evaluation order. Which kinds of discounts a promotion can
     * combine with: line item, order, and service charge discounts. object.created_at (Optional):
     * string. When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.description (Optional): string. Optional description of the
     * promotion for your own records. object.discount_class (Required): string. Whether the
     * promotion discounts the order, individual line items, or service charges. Value enum:
     * "order", "line_item", "service_charge". object.display_name (Required): string. Buyer-facing
     * promotion name shown in checkout and order discount surfaces. object.eligibility_rules
     * (Optional): {@link PromotionRuleGroup}. Conditions an order must satisfy for the promotion
     * to apply. Omitted when the promotion has no eligibility conditions. A rule group is an
     * object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups.
     * Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null
     * where the field is clearable. Responses list rules before nested groups. Under any, a nested
     * group containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. object.exclusivity
     * (Optional): {@link PromotionExclusivity}. Optional group and priority used to choose one
     * promotion from competing promotions in the same group. See Promotion for the evaluation
     * order. Only one promotion in an exclusivity group continues. See Promotion for the
     * evaluation order. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.max_uses (Optional): integer. Maximum number of redemptions across all codes and
     * automatic applications. Omitted when there is no redemption limit. Format: int64.
     * object.max_uses_per_customer (Required): integer or null. Maximum reserved and redeemed uses
     * per identified customer across every code and automatic or ID-based application. Checked
     * atomically when payment starts. Failed, canceled, or expired attempts release their
     * reservation; refunds do not restore uses. Counts only within the same merchant and
     * environment; live and test mode are separate. Without an identified customer, returns 409
     * PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit.
     * Format: int64. minimum: 1. object.merchant_id (Optional): string. Identifier of the merchant
     * that owns the promotion. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Key-value data you attach to the promotion. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.name (Required): string. Internal
     * promotion name for dashboards, searching, and reporting. object.promotion_id (Required):
     * string. Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * object.redemption_type (Required): string. Whether the promotion applies automatically when
     * its rules match or requires a promotion code. Value enum: "automatic", "code".
     * object.schedule (Optional): {@link PromotionSchedule}. Optional start and end times that
     * limit when the promotion can apply. When a promotion is active, with a start time, an end
     * time, and the time zone it was entered in. object.status (Required): string. Lifecycle
     * status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can
     * still be unavailable: read available. Value enum: "active", "inactive", "archived".
     * object.unavailable_reason (Optional): string. Why available is false. Present only when
     * available is false. Value enum: "inactive", "archived", "not_yet_started", "expired",
     * "exhausted", "no_active_codes". object.updated_at (Optional): string. When the promotion was
     * last updated, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.uses_count (Required): integer. Number of times the promotion has been redeemed.
     * Format: int64. object.version (Required): integer. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `codes`.
         * application_method (Required): {@link PromotionApplicationMethod}. Discount effect and
         * how it applies to eligible items or charges. A flat application method whose type
         * selects its effect fields. available (Required): boolean. Whether the promotion can
         * apply right now: it is active, inside its schedule, under its max_uses, and, when
         * code-gated, has at least one redeemable code. codes (Optional): Array of {@link
         * PromotionCode}. The codes this request created, in request order. Present only on the
         * `POST /v1/promotions` response, where it is `[]` for a promotion created without codes.
         * Read codes later with `GET /v1/promotion-codes?promotion_id=`. codes[] (Value): {@link
         * PromotionCode}. A code a buyer enters to claim a promotion. codes_summary (Optional):
         * {@link PromotionCodesSummary}. Read-only rollup of this promotion's codes. Present only
         * on code-gated promotions; automatic promotions omit it. A count of a promotion's codes,
         * including how many are redeemable now and the newest redeemable code. combines_with
         * (Required): {@link PromotionCombinesWith}. Which promotion discount classes this
         * promotion may share an order with. Both promotions must allow each other's class. Manual
         * discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts
         * a promotion can combine with: line item, order, and service charge discounts. created_at
         * (Optional): string. When the promotion was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Optional
         * description of the promotion for your own records. discount_class (Required): string.
         * Whether the promotion discounts the order, individual line items, or service charges.
         * Value enum: "order", "line_item", "service_charge". display_name (Required): string.
         * Buyer-facing promotion name shown in checkout and order discount surfaces.
         * eligibility_rules (Optional): {@link PromotionRuleGroup}. Conditions an order must
         * satisfy for the promotion to apply. Omitted when the promotion has no eligibility
         * conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR)
         * array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit
         * the field for no rules, or send null where the field is clearable. Responses list rules
         * before nested groups. Under any, a nested group containing only one rule reads back as
         * that rule. Under all, nested groups keep their boundaries to preserve
         * matched_items.subtotal scope. These deterministic normalizations stabilize after one
         * round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
         * in the same all group, including its nested groups. exclusivity (Optional): {@link
         * PromotionExclusivity}. Optional group and priority used to choose one promotion from
         * competing promotions in the same group. See Promotion for the evaluation order. Only one
         * promotion in an exclusivity group continues. See Promotion for the evaluation order.
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_uses (Optional):
         * integer. Maximum number of redemptions across all codes and automatic applications.
         * Omitted when there is no redemption limit. Format: int64. max_uses_per_customer
         * (Required): integer or null. Maximum reserved and redeemed uses per identified customer
         * across every code and automatic or ID-based application. Checked atomically when payment
         * starts. Failed, canceled, or expired attempts release their reservation; refunds do not
         * restore uses. Counts only within the same merchant and environment; live and test mode
         * are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason
         * customer_required. Null when there is no per-customer limit. Format: int64. minimum: 1.
         * merchant_id (Optional): string. Identifier of the merchant that owns the promotion.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}.
         * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Internal promotion name for
         * dashboards, searching, and reporting. promotion_id (Required): string. Unique identifier
         * for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". redemption_type
         * (Required): string. Whether the promotion applies automatically when its rules match or
         * requires a promotion code. Value enum: "automatic", "code". schedule (Optional): {@link
         * PromotionSchedule}. Optional start and end times that limit when the promotion can
         * apply. When a promotion is active, with a start time, an end time, and the time zone it
         * was entered in. status (Required): string. Lifecycle status. Set active or inactive with
         * PATCH; DELETE sets archived. An active promotion can still be unavailable: read
         * available. Value enum: "active", "inactive", "archived". unavailable_reason (Optional):
         * string. Why available is false. Present only when available is false. Value enum:
         * "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
         * updated_at (Optional): string. When the promotion was last updated, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". uses_count (Required):
         * integer. Number of times the promotion has been redeemed. Format: int64. version
         * (Required): integer. Persisted owned-state version. Clock-based availability and
         * expanded resources do not advance this counter. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Discount effect and how it applies to eligible items or charges. A flat application
             * method whose type selects its effect fields.
             */
            "application_method": PromotionApplicationMethod;
            /**
             * Whether the promotion can apply right now: it is active, inside its schedule, under
             * its max_uses, and, when code-gated, has at least one redeemable code.
             */
            "available": boolean;
            /**
             * The codes this request created, in request order. Present only on the `POST
             * /v1/promotions` response, where it is `[]` for a promotion created without codes.
             * Read codes later with `GET /v1/promotion-codes?promotion_id=`. [] (Value): {@link
             * PromotionCode}. A code a buyer enters to claim a promotion.
             */
            "codes"?: Array<PromotionCode>;
            /**
             * Read-only rollup of this promotion's codes. Present only on code-gated promotions;
             * automatic promotions omit it. A count of a promotion's codes, including how many are
             * redeemable now and the newest redeemable code.
             */
            "codes_summary"?: PromotionCodesSummary;
            /**
             * Which promotion discount classes this promotion may share an order with. Both
             * promotions must allow each other's class. Manual discounts are ignored. See
             * Promotion for the evaluation order. Which kinds of discounts a promotion can combine
             * with: line item, order, and service charge discounts.
             */
            "combines_with": PromotionCombinesWith;
            /**
             * When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /** Optional description of the promotion for your own records. */
            "description"?: string;
            /**
             * Whether the promotion discounts the order, individual line items, or service
             * charges. Value enum: "order", "line_item", "service_charge".
             */
            "discount_class": "order" | "line_item" | "service_charge" | (string & {});
            /** Buyer-facing promotion name shown in checkout and order discount surfaces. */
            "display_name": string;
            /**
             * Conditions an order must satisfy for the promotion to apply. Omitted when the
             * promotion has no eligibility conditions. A rule group is an object with exactly one
             * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
             * groups, and a rules key are invalid. Omit the field for no rules, or send null where
             * the field is clearable. Responses list rules before nested groups. Under any, a
             * nested group containing only one rule reads back as that rule. Under all, nested
             * groups keep their boundaries to preserve matched_items.subtotal scope. These
             * deterministic normalizations stabilize after one round trip. matched_items.subtotal
             * sums the line items matched by the line_item.* rules in the same all group,
             * including its nested groups.
             */
            "eligibility_rules"?: PromotionRuleGroup;
            /**
             * Optional group and priority used to choose one promotion from competing promotions
             * in the same group. See Promotion for the evaluation order. Only one promotion in an
             * exclusivity group continues. See Promotion for the evaluation order.
             */
            "exclusivity"?: PromotionExclusivity;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum number of redemptions across all codes and automatic applications. Omitted
             * when there is no redemption limit. Format: int64.
             */
            "max_uses"?: number;
            /**
             * Maximum reserved and redeemed uses per identified customer across every code and
             * automatic or ID-based application. Checked atomically when payment starts. Failed,
             * canceled, or expired attempts release their reservation; refunds do not restore
             * uses. Counts only within the same merchant and environment; live and test mode are
             * separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason
             * customer_required. Null when there is no per-customer limit. Format: int64. minimum:
             * 1.
             */
            "max_uses_per_customer": number | null;
            /**
             * Identifier of the merchant that owns the promotion. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
             * resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Internal promotion name for dashboards, searching, and reporting. */
            "name": string;
            /** Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". */
            "promotion_id": string;
            /**
             * Whether the promotion applies automatically when its rules match or requires a
             * promotion code. Value enum: "automatic", "code".
             */
            "redemption_type": "automatic" | "code" | (string & {});
            /**
             * Optional start and end times that limit when the promotion can apply. When a
             * promotion is active, with a start time, an end time, and the time zone it was
             * entered in.
             */
            "schedule"?: PromotionSchedule;
            /**
             * Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active
             * promotion can still be unavailable: read available. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Why available is false. Present only when available is false. Value enum:
             * "inactive", "archived", "not_yet_started", "expired", "exhausted",
             * "no_active_codes".
             */
            "unavailable_reason"?: "inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {});
            /**
             * When the promotion was last updated, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of times the promotion has been redeemed. Format: int64. */
            "uses_count": number;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Promotion>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "promotion.updated". */
    "event_type"?: "promotion.updated";
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
 * The `promotion.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit these
     * fields: `codes`. object.application_method (Required): {@link PromotionApplicationMethod}.
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields. object.available (Required): boolean. Whether the
     * promotion can apply right now: it is active, inside its schedule, under its max_uses, and,
     * when code-gated, has at least one redeemable code. object.codes (Optional): Array of {@link
     * PromotionCode}. The codes this request created, in request order. Present only on the `POST
     * /v1/promotions` response, where it is `[]` for a promotion created without codes. Read codes
     * later with `GET /v1/promotion-codes?promotion_id=`. object.codes[] (Value): {@link
     * PromotionCode}. A code a buyer enters to claim a promotion. object.codes_summary (Optional):
     * {@link PromotionCodesSummary}. Read-only rollup of this promotion's codes. Present only on
     * code-gated promotions; automatic promotions omit it. A count of a promotion's codes,
     * including how many are redeemable now and the newest redeemable code. object.combines_with
     * (Required): {@link PromotionCombinesWith}. Which promotion discount classes this promotion
     * may share an order with. Both promotions must allow each other's class. Manual discounts are
     * ignored. See Promotion for the evaluation order. Which kinds of discounts a promotion can
     * combine with: line item, order, and service charge discounts. object.created_at (Optional):
     * string. When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.description (Optional): string. Optional description of the
     * promotion for your own records. object.discount_class (Required): string. Whether the
     * promotion discounts the order, individual line items, or service charges. Value enum:
     * "order", "line_item", "service_charge". object.display_name (Required): string. Buyer-facing
     * promotion name shown in checkout and order discount surfaces. object.eligibility_rules
     * (Optional): {@link PromotionRuleGroup}. Conditions an order must satisfy for the promotion
     * to apply. Omitted when the promotion has no eligibility conditions. A rule group is an
     * object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups.
     * Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null
     * where the field is clearable. Responses list rules before nested groups. Under any, a nested
     * group containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. object.exclusivity
     * (Optional): {@link PromotionExclusivity}. Optional group and priority used to choose one
     * promotion from competing promotions in the same group. See Promotion for the evaluation
     * order. Only one promotion in an exclusivity group continues. See Promotion for the
     * evaluation order. object.external_reference_id (Optional): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * object.max_uses (Optional): integer. Maximum number of redemptions across all codes and
     * automatic applications. Omitted when there is no redemption limit. Format: int64.
     * object.max_uses_per_customer (Required): integer or null. Maximum reserved and redeemed uses
     * per identified customer across every code and automatic or ID-based application. Checked
     * atomically when payment starts. Failed, canceled, or expired attempts release their
     * reservation; refunds do not restore uses. Counts only within the same merchant and
     * environment; live and test mode are separate. Without an identified customer, returns 409
     * PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer limit.
     * Format: int64. minimum: 1. object.merchant_id (Optional): string. Identifier of the merchant
     * that owns the promotion. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata
     * (Optional): {@link MetadataMap}. Key-value data you attach to the promotion. Caller-owned
     * key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and
     * are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps
     * written before those limits may not satisfy them. object.name (Required): string. Internal
     * promotion name for dashboards, searching, and reporting. object.promotion_id (Required):
     * string. Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * object.redemption_type (Required): string. Whether the promotion applies automatically when
     * its rules match or requires a promotion code. Value enum: "automatic", "code".
     * object.schedule (Optional): {@link PromotionSchedule}. Optional start and end times that
     * limit when the promotion can apply. When a promotion is active, with a start time, an end
     * time, and the time zone it was entered in. object.status (Required): string. Lifecycle
     * status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can
     * still be unavailable: read available. Value enum: "active", "inactive", "archived".
     * object.unavailable_reason (Optional): string. Why available is false. Present only when
     * available is false. Value enum: "inactive", "archived", "not_yet_started", "expired",
     * "exhausted", "no_active_codes". object.updated_at (Optional): string. When the promotion was
     * last updated, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.uses_count (Required): integer. Number of times the promotion has been redeemed.
     * Format: int64. object.version (Required): integer. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter. Format: uint64.
     * minimum: 1. previous_attributes (Optional): object. Previous values of changed top-level
     * fields in data.object, at this delivery's API version. Nested changes include the whole
     * previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields: `codes`.
         * application_method (Required): {@link PromotionApplicationMethod}. Discount effect and
         * how it applies to eligible items or charges. A flat application method whose type
         * selects its effect fields. available (Required): boolean. Whether the promotion can
         * apply right now: it is active, inside its schedule, under its max_uses, and, when
         * code-gated, has at least one redeemable code. codes (Optional): Array of {@link
         * PromotionCode}. The codes this request created, in request order. Present only on the
         * `POST /v1/promotions` response, where it is `[]` for a promotion created without codes.
         * Read codes later with `GET /v1/promotion-codes?promotion_id=`. codes[] (Value): {@link
         * PromotionCode}. A code a buyer enters to claim a promotion. codes_summary (Optional):
         * {@link PromotionCodesSummary}. Read-only rollup of this promotion's codes. Present only
         * on code-gated promotions; automatic promotions omit it. A count of a promotion's codes,
         * including how many are redeemable now and the newest redeemable code. combines_with
         * (Required): {@link PromotionCombinesWith}. Which promotion discount classes this
         * promotion may share an order with. Both promotions must allow each other's class. Manual
         * discounts are ignored. See Promotion for the evaluation order. Which kinds of discounts
         * a promotion can combine with: line item, order, and service charge discounts. created_at
         * (Optional): string. When the promotion was created, as an RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". description (Optional): string. Optional
         * description of the promotion for your own records. discount_class (Required): string.
         * Whether the promotion discounts the order, individual line items, or service charges.
         * Value enum: "order", "line_item", "service_charge". display_name (Required): string.
         * Buyer-facing promotion name shown in checkout and order discount surfaces.
         * eligibility_rules (Optional): {@link PromotionRuleGroup}. Conditions an order must
         * satisfy for the promotion to apply. Omitted when the promotion has no eligibility
         * conditions. A rule group is an object with exactly one nonempty all (AND) or any (OR)
         * array of rules or nested groups. Arrays, empty groups, and a rules key are invalid. Omit
         * the field for no rules, or send null where the field is clearable. Responses list rules
         * before nested groups. Under any, a nested group containing only one rule reads back as
         * that rule. Under all, nested groups keep their boundaries to preserve
         * matched_items.subtotal scope. These deterministic normalizations stabilize after one
         * round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
         * in the same all group, including its nested groups. exclusivity (Optional): {@link
         * PromotionExclusivity}. Optional group and priority used to choose one promotion from
         * competing promotions in the same group. See Promotion for the evaluation order. Only one
         * promotion in an exclusivity group continues. See Promotion for the evaluation order.
         * external_reference_id (Optional): string. Caller-owned identifier for this resource in
         * an external system. maxLength: 255. Example: "warehouse-1842". max_uses (Optional):
         * integer. Maximum number of redemptions across all codes and automatic applications.
         * Omitted when there is no redemption limit. Format: int64. max_uses_per_customer
         * (Required): integer or null. Maximum reserved and redeemed uses per identified customer
         * across every code and automatic or ID-based application. Checked atomically when payment
         * starts. Failed, canceled, or expired attempts release their reservation; refunds do not
         * restore uses. Counts only within the same merchant and environment; live and test mode
         * are separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason
         * customer_required. Null when there is no per-customer limit. Format: int64. minimum: 1.
         * merchant_id (Optional): string. Identifier of the merchant that owns the promotion.
         * Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link MetadataMap}.
         * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
         * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
         * follow the limits on MetadataInput and MetadataPatchInput; maps written before those
         * limits may not satisfy them. name (Required): string. Internal promotion name for
         * dashboards, searching, and reporting. promotion_id (Required): string. Unique identifier
         * for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". redemption_type
         * (Required): string. Whether the promotion applies automatically when its rules match or
         * requires a promotion code. Value enum: "automatic", "code". schedule (Optional): {@link
         * PromotionSchedule}. Optional start and end times that limit when the promotion can
         * apply. When a promotion is active, with a start time, an end time, and the time zone it
         * was entered in. status (Required): string. Lifecycle status. Set active or inactive with
         * PATCH; DELETE sets archived. An active promotion can still be unavailable: read
         * available. Value enum: "active", "inactive", "archived". unavailable_reason (Optional):
         * string. Why available is false. Present only when available is false. Value enum:
         * "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
         * updated_at (Optional): string. When the promotion was last updated, as an RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". uses_count (Required):
         * integer. Number of times the promotion has been redeemed. Format: int64. version
         * (Required): integer. Persisted owned-state version. Clock-based availability and
         * expanded resources do not advance this counter. Format: uint64. minimum: 1.
         */
        "object": {
            /**
             * Discount effect and how it applies to eligible items or charges. A flat application
             * method whose type selects its effect fields.
             */
            "application_method": PromotionApplicationMethod;
            /**
             * Whether the promotion can apply right now: it is active, inside its schedule, under
             * its max_uses, and, when code-gated, has at least one redeemable code.
             */
            "available": boolean;
            /**
             * The codes this request created, in request order. Present only on the `POST
             * /v1/promotions` response, where it is `[]` for a promotion created without codes.
             * Read codes later with `GET /v1/promotion-codes?promotion_id=`. [] (Value): {@link
             * PromotionCode}. A code a buyer enters to claim a promotion.
             */
            "codes"?: Array<PromotionCode>;
            /**
             * Read-only rollup of this promotion's codes. Present only on code-gated promotions;
             * automatic promotions omit it. A count of a promotion's codes, including how many are
             * redeemable now and the newest redeemable code.
             */
            "codes_summary"?: PromotionCodesSummary;
            /**
             * Which promotion discount classes this promotion may share an order with. Both
             * promotions must allow each other's class. Manual discounts are ignored. See
             * Promotion for the evaluation order. Which kinds of discounts a promotion can combine
             * with: line item, order, and service charge discounts.
             */
            "combines_with": PromotionCombinesWith;
            /**
             * When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "created_at"?: string;
            /** Optional description of the promotion for your own records. */
            "description"?: string;
            /**
             * Whether the promotion discounts the order, individual line items, or service
             * charges. Value enum: "order", "line_item", "service_charge".
             */
            "discount_class": "order" | "line_item" | "service_charge" | (string & {});
            /** Buyer-facing promotion name shown in checkout and order discount surfaces. */
            "display_name": string;
            /**
             * Conditions an order must satisfy for the promotion to apply. Omitted when the
             * promotion has no eligibility conditions. A rule group is an object with exactly one
             * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
             * groups, and a rules key are invalid. Omit the field for no rules, or send null where
             * the field is clearable. Responses list rules before nested groups. Under any, a
             * nested group containing only one rule reads back as that rule. Under all, nested
             * groups keep their boundaries to preserve matched_items.subtotal scope. These
             * deterministic normalizations stabilize after one round trip. matched_items.subtotal
             * sums the line items matched by the line_item.* rules in the same all group,
             * including its nested groups.
             */
            "eligibility_rules"?: PromotionRuleGroup;
            /**
             * Optional group and priority used to choose one promotion from competing promotions
             * in the same group. See Promotion for the evaluation order. Only one promotion in an
             * exclusivity group continues. See Promotion for the evaluation order.
             */
            "exclusivity"?: PromotionExclusivity;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Maximum number of redemptions across all codes and automatic applications. Omitted
             * when there is no redemption limit. Format: int64.
             */
            "max_uses"?: number;
            /**
             * Maximum reserved and redeemed uses per identified customer across every code and
             * automatic or ID-based application. Checked atomically when payment starts. Failed,
             * canceled, or expired attempts release their reservation; refunds do not restore
             * uses. Counts only within the same merchant and environment; live and test mode are
             * separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason
             * customer_required. Null when there is no per-customer limit. Format: int64. minimum:
             * 1.
             */
            "max_uses_per_customer": number | null;
            /**
             * Identifier of the merchant that owns the promotion. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id"?: string;
            /**
             * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
             * resource. Keys starting with flint_ are reserved for Flint and are not returned.
             * Writes follow the limits on MetadataInput and MetadataPatchInput; maps written
             * before those limits may not satisfy them.
             */
            "metadata"?: MetadataMap;
            /** Internal promotion name for dashboards, searching, and reporting. */
            "name": string;
            /** Unique identifier for the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". */
            "promotion_id": string;
            /**
             * Whether the promotion applies automatically when its rules match or requires a
             * promotion code. Value enum: "automatic", "code".
             */
            "redemption_type": "automatic" | "code" | (string & {});
            /**
             * Optional start and end times that limit when the promotion can apply. When a
             * promotion is active, with a start time, an end time, and the time zone it was
             * entered in.
             */
            "schedule"?: PromotionSchedule;
            /**
             * Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active
             * promotion can still be unavailable: read available. Value enum: "active",
             * "inactive", "archived".
             */
            "status": "active" | "inactive" | "archived" | (string & {});
            /**
             * Why available is false. Present only when available is false. Value enum:
             * "inactive", "archived", "not_yet_started", "expired", "exhausted",
             * "no_active_codes".
             */
            "unavailable_reason"?: "inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {});
            /**
             * When the promotion was last updated, as an RFC3339 timestamp. Format: date-time.
             * Example: "2026-08-02T16:00:00Z".
             */
            "updated_at"?: string;
            /** Number of times the promotion has been redeemed. Format: int64. */
            "uses_count": number;
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. Format: uint64. minimum: 1.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Promotion>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "promotion.updated". */
    "event_type"?: "promotion.updated";
});
export type PromotionsCreateParams = (InputValue<CreatePromotionRequestInput>)
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
export type PromotionsDeleteParams = CategoriesDeleteParams;
export type PromotionsGetParams = DisputesAcceptParams;
export type PromotionsListParams = {
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
    /**
     * Filter by whether a promotion can apply now or why it cannot. available matches available:
     * true; every other value matches unavailable_reason. This filter is ANDed with status.
     * Archived promotions still require status=archived. Values are trimmed and deduplicated in
     * first-seen order; empty or unknown entries are rejected. Values within this filter are ORed;
     * separate filters are ANDed. [] enum: "available", "inactive", "archived", "not_yet_started",
     * "expired", "exhausted", "no_active_codes". Value enum: "available", "inactive", "archived",
     * "not_yet_started", "expired", "exhausted", "no_active_codes". anyOf[1] (Value): Array of
     * string. minItems: 1. [] enum: "available", "inactive", "archived", "not_yet_started",
     * "expired", "exhausted", "no_active_codes". anyOf[1][] (Value): string. Value enum:
     * "available", "inactive", "archived", "not_yet_started", "expired", "exhausted",
     * "no_active_codes". anyOf[2] (Value): string. Value enum: "available", "inactive",
     * "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     */
    "availability"?: InputValue<("available"
        | "inactive"
        | "archived"
        | "not_yet_started"
        | "expired"
        | "exhausted"
        | "no_active_codes")
        | readonly ("available"
        | "inactive"
        | "archived"
        | "not_yet_started"
        | "expired"
        | "exhausted"
        | "no_active_codes")[]>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across promotion ID, external reference ID, name, display name, description, and
     * promotion codes. Text fields match any part of the value, and %, _ and \ are ordinary
     * characters, not wildcards. IDs match from the start and need the type prefix, such as
     * promo_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter to promotions with an explicit product target rule. Universal promotions are not
     * included by catalog target filters. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: InputValue<string>;
    /**
     * Filter to promotions with an explicit variant target rule. Universal promotions are not
     * included by catalog target filters. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: InputValue<string>;
    /**
     * Filter to promotions with an explicit bundle target rule. Universal promotions are not
     * included by catalog target filters. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: InputValue<string>;
    /**
     * Filter to promotions with an explicit category target rule. Universal promotions are not
     * included by catalog target filters. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handle"?: InputValue<string>;
    /**
     * Filter by promotion redemption type. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "automatic", "code". Value enum: "automatic", "code". anyOf[1]
     * (Value): Array of string. minItems: 1. [] enum: "automatic", "code". anyOf[1][] (Value):
     * string. Value enum: "automatic", "code". anyOf[2] (Value): string. Value enum: "automatic",
     * "code".
     */
    "redemption_type"?: InputValue<("automatic" | "code") | readonly ("automatic" | "code")[]>;
    /**
     * Filter by promotion discount class. Values are trimmed and deduplicated in first-seen order;
     * empty or unknown entries are rejected. Values within this filter are ORed; separate filters
     * are ANDed. [] enum: "order", "line_item", "service_charge". Value enum: "order",
     * "line_item", "service_charge". anyOf[1] (Value): Array of string. minItems: 1. [] enum:
     * "order", "line_item", "service_charge". anyOf[1][] (Value): string. Value enum: "order",
     * "line_item", "service_charge". anyOf[2] (Value): string. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: InputValue<("order" | "line_item" | "service_charge") | readonly ("order" | "line_item" | "service_charge")[]>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by promotion_id. Default:
     * "created_at". Value enum: "name", "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
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
export type PromotionsUpdateParams = (InputValue<UpdatePromotionRequestInput>)
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
/** A temporary link for downloading a generated report. */
export type PublicDownload = {
    /**
     * When the download stops working: 24 hours after the report succeeded. The report keeps
     * status succeeded and this download object afterward; create a new report to get the file
     * again. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Identifier of this download, the last segment of url. pattern: ^rdl_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "rdl_01KEZF7C003GGGDW1N5QT46JDZ".
     */
    "report_download_id": string;
    /**
     * Flint API URL for the file, not the file itself. Call it with the same API key; Flint
     * answers 307 with a redirect to a private file URL that works for a few minutes. Request url
     * again each time you need the file.
     */
    "url": string;
};
/**
 * The buyer-facing view of a payment link, with its line items, custom fields, legal and payment
 * settings, and status.
 */
export type PublicPaymentLink = {
    /** Number of paid checkout sessions started from this link. Format: int32. */
    "completed_count": number;
    /**
     * Questions buyers answer before paying. Answers are recorded on the order and checkout
     * session in `custom_field_answers`. [] (Value): {@link PaymentLinkCustomField}. A custom
     * field on a payment link that collects an answer from the buyer.
     */
    "custom_fields"?: Array<PaymentLinkCustomField>;
    /**
     * Custom text for checkouts started from this link. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /** Text about what the link sells, returned to buyers when they open it. */
    "description"?: string;
    /**
     * Largest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValue;
    /**
     * Smallest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValue;
    /**
     * Amounts a donation link offers as one-tap choices. [] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Event details for an `event` link: when and where it takes place and how many tickets it
     * sells. Event settings on an event payment link, such as its date, venue, ticket limit, and
     * ticket emails.
     */
    "event_config"?: PaymentLinkEventConfig;
    /** Image shown to buyers with the link. An image with its URL, size, and alt text. */
    "image"?: Image;
    /** Message to show the buyer when the link is inactive. */
    "inactive_message"?: string;
    /**
     * The terms and policy links checkouts started from this link show the buyer. Legal settings
     * for a checkout: whether buyers must accept terms, and links to the terms, refund policy,
     * shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * What the link sells. [] (Value): {@link PaymentLinkLineItem}. A line item on a payment link.
     */
    "line_items"?: Array<PaymentLinkLineItem>;
    /**
     * Most payments the link accepts, counted by `completed_count`. Absent means no limit. Once
     * the limit is reached, resolving the link fails with a request error. It can't be set below
     * `completed_count`. Format: int32.
     */
    "max_completions"?: number;
    /** Name of the payment link. */
    "name": string;
    /** ID of the payment link. Example: "pl_01KEZF7C007WDMA5P9BPZ8J2AM". */
    "payment_link_id": string;
    /** What kind of link this is. Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Payment options for checkouts started from this link. Payment settings for a checkout: the
     * enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`. Unset means sales do not end on their own,
     * except that an event link without sales_end_at stops selling at event_config.event_at. A
     * checkout opened before the end can still start payment for up to 15 minutes after it.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "sales_end_at"?: string;
    /** Whether the link can start new checkouts. Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /** ID of the subscription plan the link sells. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id"?: string;
    /**
     * The title and colors for checkouts started from this link, over your branding settings.
     * Colors and title applied to a payment link's checkout page.
     */
    "theme"?: ThemeConfig;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: int64.
     */
    "version": number;
};
/** A response containing `PublicPaymentLinkResult` data. */
export type PublicPaymentLinkResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The result of resolving
     * a public payment link: the link, merchant branding, availability, resolved line items, and a
     * resolution context for starting checkout.
     */
    "data": PublicPaymentLinkResult;
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
 * The result of resolving a public payment link: the link, merchant branding, availability,
 * resolved line items, and a resolution context for starting checkout.
 */
export type PublicPaymentLinkResult = {
    /**
     * Start a new checkout before this instant. At or after it, read the public payment link again
     * for a new resolution_context; its credential expiry is resolution_context_expires_at.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "checkout_start_due_at": string;
    /**
     * The theme a checkout opened from this link uses: your checkout branding settings, with the
     * link's own `theme` over them. Use it to style a page that leads to the checkout.
     * `payment_link.theme` is the link's own theme alone. Omitted when neither sets a value. It
     * includes the branding settings' `background_color`, `text_color`, `font_family`, and
     * `corner_radius`. Colors, corner radius, font family, and title that style a checkout, taken
     * from the session or link theme or the merchant's branding settings.
     */
    "checkout_theme"?: CheckoutTheme;
    /**
     * True when the link's sales end has passed: payment_link.sales_end_at, or
     * event_config.event_at for an event link without sales_end_at. Resolve then fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`.
     */
    "is_past_sales_end": boolean;
    /**
     * True for an event with no tickets remaining. For other active links with
     * inventory_routing_source, true when any catalog line cannot be bought at its minimum
     * quantity from that source. Untracked and ad hoc lines do not count. A choice line counts
     * only when every offered variant is sold out. Fixed locations use available stock; policies
     * use their allocatable locations. Stock is not reserved by this read.
     */
    "is_sold_out": boolean;
    /** The merchant's icon. An image with its URL, size, and alt text. */
    "merchant_icon"?: Image;
    /** The merchant's logo. An image with its URL, size, and alt text. */
    "merchant_logo"?: Image;
    /** The merchant's name. */
    "merchant_name"?: string;
    /**
     * The payment link that was resolved. The buyer-facing view of a payment link, with its line
     * items, custom fields, legal and payment settings, and status.
     */
    "payment_link": PublicPaymentLink;
    /**
     * Event links with a ticket limit: tickets left after tickets sold and tickets held by
     * payments in progress. Absent when the event has no ticket limit. Whole-number quantity;
     * fractional quantities are not supported. Format: int32.
     */
    "remaining_quantity"?: number;
    /**
     * Private resolution context for this payment link. Send it unchanged to resolve the same link
     * before checkout_start_due_at. The credential expires at resolution_context_expires_at. Keep
     * the context private and do not cache this response; it is returned with Cache-Control:
     * private, no-store.
     */
    "resolution_context": string;
    /**
     * RFC3339 timestamp when the resolution_context credential expires. The earlier
     * checkout_start_due_at governs starting new checkouts; committed replay remains available
     * until this expiry. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "resolution_context_expires_at": string;
    /**
     * The link's line items with their current catalog values. [] (Value): {@link
     * PublicResolvedLineItemInfo}. Current catalog details for a payment link line item, such as
     * its name, price, image, available modifiers, and bundle components.
     */
    "resolved_line_items"?: Array<PublicResolvedLineItemInfo>;
    /**
     * Whether Flint's hosted pages show the Powered by Flint mark for this merchant. `false` when
     * the merchant's agreement with Flint removes it.
     */
    "show_flint_mark": boolean;
    /**
     * Present for active plan-backed payment links when authoritative subscription terms are
     * available. Subscription terms shown before an active plan-backed payment link creates a
     * checkout session.
     */
    "subscription_preview"?: PaymentLinkSubscriptionPreview;
};
/**
 * One component of a bundle on a resolved payment link line item, with its variant and quantity.
 */
export type PublicResolvedBundleComponent = {
    /** Position of the component within the bundle. Format: int32. */
    "position": number;
    /**
     * ID of the product the component's variant belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Summary of the component's variant. A summary of a bundle component's variant, with its
     * name, SKU, selected options, and whether it is available for sale.
     */
    "variant"?: PublicResolvedBundleVariantSummary;
    /** ID of the component's variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
};
/**
 * A summary of a bundle component's variant, with its name, SKU, selected options, and whether it
 * is available for sale.
 */
export type PublicResolvedBundleVariantSummary = {
    /** Whether the variant can be sold now. */
    "is_available_for_sale": boolean;
    /** Name of the variant. */
    "name"?: string;
    /**
     * Identifier of the product this resolved bundle component variant belongs to. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     * The product options the variant selects, such as size or color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** SKU of the variant. */
    "sku"?: string;
    /** ID of the variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
};
/**
 * Current catalog details for a payment link line item, such as its name, price, image, available
 * modifiers, and bundle components.
 */
export type PublicResolvedLineItemInfo = {
    /**
     * Modifier groups the buyer can choose from for this item. [] (Value): {@link
     * PublicResolvedModifierGroup}. A modifier group as resolved for a payment link line item,
     * with its selection limits, display flags, and options or text settings.
     */
    "available_modifiers"?: Array<PublicResolvedModifierGroup>;
    /**
     * Listed variants that can currently be sold in the line currency, in variant_ids order.
     * Inactive, archived, unsellable, and other-currency variants are omitted. Each variant
     * includes its advisory sold-out state and its own modifiers. Present only on variant_ids
     * lines. [] (Value): {@link PaymentLinkAvailableVariant}. A listed payment link variant that
     * can be sold in the line currency, with its current price, options, image, modifiers, and
     * advisory stock state.
     */
    "available_variants"?: Array<PaymentLinkAvailableVariant>;
    /**
     * The components of the bundle. Present for a bundle line item. [] (Value): {@link
     * PublicResolvedBundleComponent}. One component of a bundle on a resolved payment link line
     * item, with its variant and quantity.
     */
    "bundle_components"?: Array<PublicResolvedBundleComponent>;
    /** ID of the bundle this line item sells. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** What the line item sells. Value enum: "variant", "bundle". */
    "catalog_object_type"?: "variant" | "bundle" | (string & {});
    /** Image of the variant or bundle. An image with its URL, size, and alt text. */
    "image"?: Image;
    /** Whether Flint tracks stock for the item. */
    "is_inventory_tracked"?: boolean;
    /**
     * True when the fixed variant or bundle components cannot be bought at the line minimum
     * quantity from the link inventory_routing_source. The minimum is min_quantity when quantity
     * adjustment is enabled, otherwise quantity. For variant choice lines, true only when every
     * available_variants entry is sold out. Always false for untracked and ad hoc lines. Exposes
     * no stock counts and reserves no stock.
     */
    "is_sold_out": boolean;
    /** Key of the payment link line item this entry describes. */
    "key": string;
    /** ID of the product the variant belongs to. Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /**
     * Active product options for a variant_ids line, in option position order. Values include only
     * those used by available_variants and retain value position order. Empty when the product has
     * no options; omitted on fixed variant and bundle lines. [] (Value): {@link
     * PaymentLinkProductOption}. An active product option offered on a payment link, with values
     * used by its available variants.
     */
    "product_options"?: Array<PaymentLinkProductOption>;
    /**
     * Default quantity breaks for a fixed variant. Empty for bundles, variant choice lines, and ad
     * hoc lines. Each offered variant on a variant choice line has its own schedule in
     * available_variants. [] (Value): {@link QuantityPriceBreak}. A net unit price that applies
     * when one catalog line reaches minimum_quantity.
     */
    "quantity_price_breaks": Array<QuantityPriceBreak>;
    /** Current catalog description of the variant or bundle, as of this read. */
    "resolved_description"?: string;
    /** Current catalog name of the variant or bundle, as of this read. */
    "resolved_name"?: string;
    /**
     * Current catalog unit price of the variant or bundle, as of this read. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * The product options the variant selects, such as size or color. [] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** ID of the variant this line item sells. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
};
/**
 * A modifier group as resolved for a payment link line item, with its selection limits, display
 * flags, and options or text settings.
 */
export type PublicResolvedModifierGroup = {
    "allow_quantities"?: boolean;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "max_quantity"?: number;
    /** Format: int32. */
    "max_selected"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "max_total_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "min_quantity"?: number;
    /** Format: int32. */
    "min_selected"?: number;
    /** Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". */
    "modifier_group_id": string;
    /** Value enum: "list", "text". */
    "modifier_group_type": "list" | "text" | (string & {});
    "name": string;
    /**
     *  [] (Value): {@link PublicResolvedModifierOption}. One selectable option in a resolved
     * modifier group, with its price change, tax category, and whether it is available.
     */
    "options"?: Array<PublicResolvedModifierOption>;
    /** Format: int32. */
    "position"?: number;
    /** Value enum: "per_item". */
    "pricing_scope"?: "per_item" | (string & {});
    "show_on_fulfillment"?: boolean;
    "show_on_receipt"?: boolean;
    /**
     * Input rules for a free-text modifier group on a payment link line item: required, multiline,
     * and length limits.
     */
    "text"?: TextModifierConfigRequest;
};
/**
 * One selectable option in a resolved modifier group, with its price change, tax category, and
 * whether it is available.
 */
export type PublicResolvedModifierOption = {
    /** Whether the choice can be selected now. */
    "available": boolean;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "default_quantity"?: number;
    /**
     * Flint line-item tax category. Value enum: "general", "physical_goods", "digital_goods",
     * "software", "saas", "services", "professional_services", "food", "prepared_food",
     * "clothing", "medical_goods", "admission".
     */
    "line_item_tax_category"?: "general"
        | "physical_goods"
        | "digital_goods"
        | "software"
        | "saas"
        | "services"
        | "professional_services"
        | "food"
        | "prepared_food"
        | "clothing"
        | "medical_goods"
        | "admission"
        | (string & {});
    /** ID of the modifier this choice selects. Example: "mod_01KEZF7C00SAWDZBQJX5H0XW1S". */
    "modifier_id": string;
    /** Name of the choice. */
    "name": string;
    /** Position of the choice within its group. Format: int32. */
    "position"?: number;
    /** Whether the choice is selected when the buyer adds the item without choosing modifiers. */
    "selected_by_default"?: boolean;
    /** Whether the choice appears on fulfillment documents. */
    "show_on_fulfillment"?: boolean;
    /** Whether the choice appears on receipts. */
    "show_on_receipt"?: boolean;
    /** Whether the choice's price is subject to tax. */
    "taxable"?: boolean;
    /**
     * The amount the choice adds to the item's unit price. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/** The request body for: Publish return policy revision. */
export type PublishReturnPolicyRevisionRequest = {
    /**
     * Required current version of the Return policy. A stale value returns VERSION_CONFLICT.
     * Publishing increments the policy version. Format: int64. minimum: 1.
     */
    "expected_version": number;
    /**
     * The revision with the complete rules. A field you leave out doesn't carry over from the
     * previous revision. The rules for a return policy revision: scope, eligibility, return
     * window, approval and resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequest;
};
/** The request body for: Publish return policy revision. */
export type PublishReturnPolicyRevisionRequestInput = {
    /**
     * Required current version of the Return policy. A stale value returns VERSION_CONFLICT.
     * Publishing increments the policy version. Format: int64. minimum: 1.
     */
    "expected_version": number;
    /**
     * The revision with the complete rules. A field you leave out doesn't carry over from the
     * previous revision. The rules for a return policy revision: scope, eligibility, return
     * window, approval and resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequestInput;
};
export type PublishReturnPolicyRevisionResponse = GetReturnPolicyResponse;
/**
 * A gift card issued for one unit of a purchased order line item, with its last four code
 * characters and any card it replaced.
 */
export type PurchasedGiftCard = {
    /**
     * ID of the gift card issued for the purchased unit. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "gift_card_id": string;
    /** Last four characters of the card's current code. */
    "last4": string;
    /**
     * ID of the card that this card replaces. Set when restoring reversed value needed a
     * replacement card. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     */
    "original_gift_card_id"?: string;
    /**
     * What restored the reversed value onto a replacement card. Value enum: "manual_recollection",
     * "processor_recollection".
     */
    "restoration_reason"?: "manual_recollection" | "processor_recollection" | (string & {});
    /**
     * Which unit of the line item's quantity this card was issued for, starting at 1. Format:
     * int64. minimum: 1.
     */
    "unit_ordinal": number;
};
/** A net unit price that applies when one catalog line reaches minimum_quantity. */
export type QuantityPriceBreak = {
    /**
     * Minimum whole-number quantity on one line for this price to apply; fractional quantities are
     * not supported. Must strictly increase between entries. Format: int64. minimum: 2.
     */
    "minimum_quantity": number;
    /**
     * Net unit price in the base unit price's currency. Must be greater than zero and below the
     * preceding price, starting with the base unit price. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
};
/** A net unit price that applies when one catalog line reaches minimum_quantity. */
export type QuantityPriceBreakRequestInput = {
    /**
     * Minimum whole-number quantity on one line for this price to apply; fractional quantities are
     * not supported. Must strictly increase between entries. Format: int64. minimum: 2.
     */
    "minimum_quantity": number;
    /**
     * Net unit price in the base unit price's currency. Must be greater than zero and below the
     * preceding price, starting with the base unit price. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
};
/**
 * Storage usage and limits for a resource, returned in the error details when an image quota is
 * exhausted.
 */
export type QuotaDetails = {
    /** Maximum bytes available for the resource in the authenticated scope. Format: int64. */
    "limit_bytes": number;
    /**
     * RFC 3339 time when the next ready unattached image becomes eligible for cleanup, when known.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "next_expiration_at"?: string;
    /** Stored bytes held by completed images that are not attached to a resource. Format: int64. */
    "ready_unattached_bytes": number;
    /** Bytes reserved by in-progress resource mutations. Format: int64. */
    "reserved_bytes": number;
    /** Stable resource name whose quota was exhausted. */
    "resource": string;
    /** Bytes currently stored for the resource in the authenticated scope. Format: int64. */
    "used_bytes": number;
};
/**
 * A step that moves a merchant capability or readiness axis forward, with the party that must do
 * it (`owner`) and any required fields.
 */
export type ReadinessAction = {
    /**
     * The kind of step to take. Each value says what the step is and who carries it out. Value
     * enum: "advance_onboarding", "create_api_key", "create_merchant_account_session",
     * "wait_for_review", "settle_flint_balance", "set_tax_category", "contact_support", "other".
     */
    "action_type": "advance_onboarding"
        | "create_api_key"
        | "create_merchant_account_session"
        | "wait_for_review"
        | "settle_flint_balance"
        | "set_tax_category"
        | "contact_support"
        | "other"
        | (string & {});
    /**
     * Request body for `POST /v1/merchant-account-sessions`, on a
     * `create_merchant_account_session` action. Send it unchanged. Shared request body for
     * `create_merchant_account_session` next actions in readiness, onboarding, errors, and
     * warnings. Send unchanged to POST /v1/merchant-account-sessions; components and collection
     * policy describe which requirements to collect.
     */
    "merchant_account_session"?: ReadinessMerchantAccountSession;
    /** Who has to act on this step. Value enum: "integrator", "merchant", "flint". */
    "owner": "integrator" | "merchant" | "flint" | (string & {});
    /**
     * Paths in the action's target request body, using dotted JSON paths from the request root.
     * For advance_onboarding, profile fields use profile.website_url, profile.support_email,
     * profile.support_phone and profile.support_url. Top-level inputs such as country,
     * requested_capabilities and name stay bare. [] (Value): string.
     */
    "required_fields"?: Array<string>;
};
/**
 * Readiness for one area of a merchant account, with its `status`, the reason for it, and the
 * actions that would advance it.
 */
export type ReadinessAxis = {
    /**
     * Steps that move this area toward `ready`. Empty when there is nothing to do. [] (Value):
     * {@link ReadinessAction}. A step that moves a merchant capability or readiness axis forward,
     * with the party that must do it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /**
     * Whether this area works now. `status_reason` says why when the status is neither `ready` nor
     * `not_requested`. Value enum: "ready", "pending", "blocked", "not_requested",
     * "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Why readiness has its current status. MERCHANT_NOT_READY uses onboarding_required for
     * onboarding_not_started, requirements_due, requirements_past_due and pending_verification,
     * and platform_review for Flint's own review. `null` when no reason applies. Value enum:
     * "provisioning", "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other".
     */
    "status_reason"?: "provisioning"
        | "onboarding_not_started"
        | "requirements_due"
        | "requirements_past_due"
        | "pending_verification"
        | "account_rejected"
        | "disabled_by_platform_policy"
        | "billing_suspended"
        | "platform_review"
        | "processing_not_enabled"
        | "platform_funding_unavailable"
        | "tax_category_required"
        | "service_unavailable"
        | "payment_option_access_not_provisioned"
        | "payment_option_activation_pending"
        | "payment_option_not_in_plan"
        | "payment_option_not_available"
        | "capability_not_active"
        | "other"
        | (string & {});
};
/**
 * Shared request body for `create_merchant_account_session` next actions in readiness, onboarding,
 * errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions; components and
 * collection policy describe which requirements to collect.
 */
export type ReadinessMerchantAccountSession = {
    /**
     * How onboarding collects requirements. upfront asks for everything the account will
     * eventually need; incremental asks only for what is currently due. Value enum: "upfront",
     * "incremental".
     */
    "collection_strategy": "upfront" | "incremental" | (string & {});
    /**
     * Flint components to request. Send this list as components in POST
     * /v1/merchant-account-sessions. [] enum: "account_onboarding", "account_management",
     * "payouts", "balances", "tax_documents", "notification_banner", "payments". [] (Value):
     * string. Value enum: "account_onboarding", "account_management", "payouts", "balances",
     * "tax_documents", "notification_banner", "payments".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | "payments"
        | (string & {})>;
    /**
     * Whether onboarding also collects requirements the processor has scheduled for a future date.
     * include collects them now; omit leaves them until they are due. Value enum: "omit",
     * "include".
     */
    "future_requirements": "omit" | "include" | (string & {});
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "targeted_requirements"?: Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
};
/**
 * Account information requirements for a merchant, grouped as currently due, eventually due, past
 * due, and pending verification.
 */
export type ReadinessRequirements = {
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "currently_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
    /**
     * Why the account is disabled. Omitted when it isn't. Value enum:
     * "account_attention_required", "account_paused", "account_rejected",
     * "account_requirements_due", "account_under_review", "requirements_past_due",
     * "requirements_pending_verification".
     */
    "disabled_reason"?: "account_attention_required"
        | "account_paused"
        | "account_rejected"
        | "account_requirements_due"
        | "account_under_review"
        | "requirements_past_due"
        | "requirements_pending_verification"
        | (string & {});
    /**
     * Time by which the merchant must submit currently due onboarding requirements, as an RFC 3339
     * UTC timestamp. Omitted when no submission deadline is set. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "due_at"?: string;
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "eventually_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "past_due": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
    /**
     * Flint requirement codes. New codes can appear; treat an unknown code as
     * additional_account_information. [] enum: "additional_account_information",
     * "business_address", "business_description", "business_directors", "business_executives",
     * "business_name", "business_owners", "business_phone", "business_support_phone",
     * "business_support_url", "business_tax_id", "business_verification_document",
     * "business_website", "merchant_category_code", "owner_address",
     * "owner_additional_identity_document", "owner_date_of_birth", "owner_first_name",
     * "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four". [] (Value): string. Value enum:
     * "additional_account_information", "business_address", "business_description",
     * "business_directors", "business_executives", "business_name", "business_owners",
     * "business_phone", "business_support_phone", "business_support_url", "business_tax_id",
     * "business_verification_document", "business_website", "merchant_category_code",
     * "owner_address", "owner_additional_identity_document", "owner_date_of_birth",
     * "owner_first_name", "owner_identity_document", "owner_last_name", "owner_tax_id_last_four",
     * "payout_destination", "representative_address",
     * "representative_additional_identity_document", "representative_date_of_birth",
     * "representative_email", "representative_first_name", "representative_identity_document",
     * "representative_last_name", "representative_phone", "representative_tax_id",
     * "representative_tax_id_last_four".
     */
    "pending_verification": Array<"additional_account_information"
        | "business_address"
        | "business_description"
        | "business_directors"
        | "business_executives"
        | "business_name"
        | "business_owners"
        | "business_phone"
        | "business_support_phone"
        | "business_support_url"
        | "business_tax_id"
        | "business_verification_document"
        | "business_website"
        | "merchant_category_code"
        | "owner_address"
        | "owner_additional_identity_document"
        | "owner_date_of_birth"
        | "owner_first_name"
        | "owner_identity_document"
        | "owner_last_name"
        | "owner_tax_id_last_four"
        | "payout_destination"
        | "representative_address"
        | "representative_additional_identity_document"
        | "representative_date_of_birth"
        | "representative_email"
        | "representative_first_name"
        | "representative_identity_document"
        | "representative_last_name"
        | "representative_phone"
        | "representative_tax_id"
        | "representative_tax_id_last_four"
        | (string & {})>;
    /**
     * Who rejected the account. Present only when `disabled_reason` is `account_rejected`. Value
     * enum: "flint", "payment_processor".
     */
    "rejected_by"?: "flint" | "payment_processor" | (string & {});
};
/**
 * Adds in-transit stock to the destination location. Optional condition targets split the received
 * quantity by condition.
 */
export type ReceiveInventoryTransferRequest = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_received_damaged_quantity (Optional):
     * integer. Cumulative received quantity classified as damaged. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     * [].target_received_quality_control_quantity (Optional): integer. Cumulative received
     * quantity classified for quality control. Whole-number quantity; fractional quantities are
     * not supported. Format: int64. minimum: 0. [].target_received_quantity (Required): integer.
     * Cumulative quantity that should have been received at the destination. Whole-number
     * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * [].target_received_quarantined_quantity (Optional): integer. Cumulative received quantity
     * classified as quarantined. Whole-number quantity; fractional quantities are not supported.
     * Format: int64. minimum: 0. [].target_received_sellable_quantity (Optional): integer.
     * Cumulative received quantity classified as sellable. Whole-number quantity; fractional
     * quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<({
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative received quantity classified as damaged. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_damaged_quantity"?: number;
        /**
         * Cumulative received quantity classified for quality control. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quality_control_quantity"?: number;
        /**
         * Cumulative quantity that should have been received at the destination. Whole-number
         * quantity; fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quantity": number;
        /**
         * Cumulative received quantity classified as quarantined. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_quarantined_quantity"?: number;
        /**
         * Cumulative received quantity classified as sellable. Whole-number quantity; fractional
         * quantities are not supported. Format: int64. minimum: 0.
         */
        "target_received_sellable_quantity"?: number;
    })>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};

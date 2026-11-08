import type { PromotionRecurrenceForeverInput, Promotion } from './types-45.js';
import type { ResponseMeta } from './types-48.js';
import type { MoneyValue, MoneyValueInput, MerchantWebhookEnvelope, MetadataMap } from './types-35.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreatePromotionCodeRequestInput, CreatePromotionRequestInput } from './types-10.js';
import type { CategoriesDeleteParams, CheckoutCustomTextConfig, CheckoutPaymentConfig } from './types-4.js';
import type { UpdatePromotionCodeRequestInput, UpdatePromotionRequestInput } from './types-60.js';
import type { Image } from './types-25.js';
import type { LegalSettings } from './types-32.js';
import type { PaymentLinkCustomField, PaymentLinkAvailableVariant } from './types-41.js';
import type {
    PaymentLinkEventConfig,
    PaymentLinkLineItem,
    PaymentLinkSubscriptionPreview,
    PaymentLinkProductOption
} from './types-42.js';
import type { ThemeConfig, TextModifierConfigRequest } from './types-58.js';
import type { CheckoutTheme } from './types-5.js';
import type { SelectedProductOption } from './types-53.js';
import type { ReturnPolicyRevisionRequest } from './types-49.js';
import type { ReturnPolicyRevisionRequestInput } from './types-50.js';
import type { GetReturnPolicyResponse } from './types-23.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-21.js';
import type { PaymentRefund } from './types-43.js';
import type {
    RefundLineItemAllocation,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery
} from './types-47.js';
/**
 * How often a promotion's discount repeats on a subscription: once, for a number of charged
 * payments, or forever.
 */
export type PromotionRecurrenceInput = ({
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
    & ((Exclude<PromotionRecurrenceOnceInput & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceRepeatingInput & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceForeverInput & object, readonly unknown[]>));
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
export type PromotionRecurrenceOnceInput = ({
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
export type PromotionRecurrenceRepeatingInput = ({
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
/** The `Promotion code` variant of `PromotionRefInput`. */
export type PromotionRefInputPromotionCode = ({
    /**
     * Human-entered promotion code. Use this when redeeming a campaign code. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_code": string;
    /**
     * Use `promotion_id` for server-side apply flows where you already know the promotion,
     * including code-gated promotions, which then apply without a code and count only toward the
     * promotion's `max_uses`. Checkout credentials must use `promotion_code`. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_id"?: string;
});
/** The `Promotion code` variant of `PromotionRefInput`. */
export type PromotionRefInputPromotionCodeInput = ({
    /**
     * Human-entered promotion code. Use this when redeeming a campaign code. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_code": string;
    /**
     * Use `promotion_id` for server-side apply flows where you already know the promotion,
     * including code-gated promotions, which then apply without a code and count only toward the
     * promotion's `max_uses`. Checkout credentials must use `promotion_code`. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_id"?: string;
})
    & (({
    "promotion_id"?: never;
}));
/** The `Promotion ID` variant of `PromotionRefInput`. */
export type PromotionRefInputPromotionID = ({
    /**
     * Human-entered promotion code. Use this when redeeming a campaign code. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_code"?: string;
    /**
     * Use `promotion_id` for server-side apply flows where you already know the promotion,
     * including code-gated promotions, which then apply without a code and count only toward the
     * promotion's `max_uses`. Checkout credentials must use `promotion_code`. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_id": string;
});
/** The `Promotion ID` variant of `PromotionRefInput`. */
export type PromotionRefInputPromotionIDInput = ({
    /**
     * Human-entered promotion code. Use this when redeeming a campaign code. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_code"?: string;
    /**
     * Use `promotion_id` for server-side apply flows where you already know the promotion,
     * including code-gated promotions, which then apply without a code and count only toward the
     * promotion's `max_uses`. Checkout credentials must use `promotion_code`. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_id": string;
})
    & (({
    "promotion_code"?: never;
}));
/** Identifies the promotion to apply, by promotion code or by promotion ID. */
export type PromotionRefRequest = ({
    /**
     * Human-entered promotion code. Use this when redeeming a campaign code. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_code"?: string;
    /**
     * Use `promotion_id` for server-side apply flows where you already know the promotion,
     * including code-gated promotions, which then apply without a code and count only toward the
     * promotion's `max_uses`. Checkout credentials must use `promotion_code`. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_id"?: string;
})
    & ((Exclude<PromotionRefInputPromotionID & object, readonly unknown[]>)
    | (Exclude<PromotionRefInputPromotionCode & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Identifies the promotion to apply, by promotion code or by promotion ID. */
export type PromotionRefRequestInput = ({
    /**
     * Human-entered promotion code. Use this when redeeming a campaign code. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
     */
    "promotion_code"?: string;
    /**
     * Use `promotion_id` for server-side apply flows where you already know the promotion,
     * including code-gated promotions, which then apply without a code and count only toward the
     * promotion's `max_uses`. Checkout credentials must use `promotion_code`. Fixed promotion
     * amounts applied to orders must satisfy the order money ceiling. The amount and every
     * computed order amount must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects
     * an input or calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at
     * the responsible input field. Lower payment option limits can apply. minLength: 1.
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
     * metadata and accepts the string operators. A disallowed operator is rejected at create time
     * with INVALID_OPERATOR, whose message names the operators allowed for the attribute.
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
     * metadata and accepts the string operators. A disallowed operator is rejected at create time
     * with INVALID_OPERATOR, whose message names the operators allowed for the attribute.
     * minLength: 1.
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
     * Omitted when it has no end time. Format: date-time. minLength: 1.
     */
    "ends_at"?: string;
    /**
     * Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has
     * no start time. Format: date-time. minLength: 1.
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
     * Omission keeps the stored value; null clears it. Format: date-time. minLength: 1.
     */
    "ends_at"?: string | null;
    /**
     * Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omission keeps the
     * stored value; null clears it. Format: date-time. minLength: 1.
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
     * Omission keeps the stored value; null clears it. Format: date-time. minLength: 1.
     */
    "ends_at"?: string | globalThis.Date | null;
    /**
     * Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omission keeps the
     * stored value; null clears it. Format: date-time. minLength: 1.
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
     * Omitted when it has no end time. Format: date-time. minLength: 1.
     */
    "ends_at"?: string | globalThis.Date;
    /**
     * Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has
     * no start time. Format: date-time. minLength: 1.
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
        "object": Promotion;
    };
    "event_type"?: "promotion.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.updated";
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
    "event_type": "promotion.updated";
});
/**
 * The `promotion.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Promotion}. Promotion evaluation order: manual discounts stay, do
     * not count toward the cap, and are ignored by combines_with. Frozen subscription-term
     * promotions are admitted first and are exempt from exclusivity, combines_with, and the cap.
     * Candidates include codes being applied, existing promotion discounts, and qualifying
     * automatic promotions. Each exclusivity group keeps its highest-priority member, then the
     * larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates
     * rank by standalone discount, then earlier created_at and lower promotion_id; each is
     * admitted unless max_promotions_per_order is reached or both promotions do not allow each
     * other's discount class. Admitted promotions price line item first, then order, then service
     * charge. A zero-value promotion is dropped and selection runs again.
     */
    "data"?: {
        /**
         * Promotion evaluation order: manual discounts stay, do not count toward the cap, and are
         * ignored by combines_with. Frozen subscription-term promotions are admitted first and are
         * exempt from exclusivity, combines_with, and the cap. Candidates include codes being
         * applied, existing promotion discounts, and qualifying automatic promotions. Each
         * exclusivity group keeps its highest-priority member, then the larger standalone
         * discount, earlier created_at, and lower promotion_id. Remaining candidates rank by
         * standalone discount, then earlier created_at and lower promotion_id; each is admitted
         * unless max_promotions_per_order is reached or both promotions do not allow each other's
         * discount class. Admitted promotions price line item first, then order, then service
         * charge. A zero-value promotion is dropped and selection runs again.
         */
        "object": Promotion;
    };
    /** Value enum: "promotion.updated". */
    "event_type"?: "promotion.updated";
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
 * The `promotion.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link Promotion}. Promotion evaluation order: manual discounts stay, do
     * not count toward the cap, and are ignored by combines_with. Frozen subscription-term
     * promotions are admitted first and are exempt from exclusivity, combines_with, and the cap.
     * Candidates include codes being applied, existing promotion discounts, and qualifying
     * automatic promotions. Each exclusivity group keeps its highest-priority member, then the
     * larger standalone discount, earlier created_at, and lower promotion_id. Remaining candidates
     * rank by standalone discount, then earlier created_at and lower promotion_id; each is
     * admitted unless max_promotions_per_order is reached or both promotions do not allow each
     * other's discount class. Admitted promotions price line item first, then order, then service
     * charge. A zero-value promotion is dropped and selection runs again.
     */
    "data"?: {
        /**
         * Promotion evaluation order: manual discounts stay, do not count toward the cap, and are
         * ignored by combines_with. Frozen subscription-term promotions are admitted first and are
         * exempt from exclusivity, combines_with, and the cap. Candidates include codes being
         * applied, existing promotion discounts, and qualifying automatic promotions. Each
         * exclusivity group keeps its highest-priority member, then the larger standalone
         * discount, earlier created_at, and lower promotion_id. Remaining candidates rank by
         * standalone discount, then earlier created_at and lower promotion_id; each is admitted
         * unless max_promotions_per_order is reached or both promotions do not allow each other's
         * discount class. Admitted promotions price line item first, then order, then service
         * charge. A zero-value promotion is dropped and selection runs again.
         */
        "object": Promotion;
    };
    /** Value enum: "promotion.updated". */
    "event_type"?: "promotion.updated";
});
export type PromotionsCreateCodeParams = (InputValue<CreatePromotionCodeRequestInput>);
export type PromotionsCreateParams = (InputValue<CreatePromotionRequestInput>);
export type PromotionsDeleteCodeParams = CategoriesDeleteParams;
export type PromotionsDeleteParams = CategoriesDeleteParams;
export type PromotionsGetCodeParams = {};
export type PromotionsGetParams = {};
export type PromotionsListParams = {
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
    /**
     * Filter by whether a promotion can apply now or why it cannot. available matches available:
     * true; every other value matches unavailable_reason. Repeat the parameter or pass
     * comma-separated values; values are ORed. This filter is ANDed with status. Archived
     * promotions still require status=archived. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "available", "inactive", "archived", "not_yet_started", "expired", "exhausted",
     * "no_active_codes". Value enum: "available", "inactive", "archived", "not_yet_started",
     * "expired", "exhausted", "no_active_codes". anyOf[1] (Value): Array of string. minItems: 1.
     * [] enum: "available", "inactive", "archived", "not_yet_started", "expired", "exhausted",
     * "no_active_codes". anyOf[1][] (Value): string. Value enum: "available", "inactive",
     * "archived", "not_yet_started", "expired", "exhausted", "no_active_codes". anyOf[2] (Value):
     * string. Value enum: "available", "inactive", "archived", "not_yet_started", "expired",
     * "exhausted", "no_active_codes".
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
     * included by catalog target filters. Example: "prod_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "product_id"?: InputValue<string>;
    /**
     * Filter to promotions with an explicit variant target rule. Universal promotions are not
     * included by catalog target filters. Example: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "variant_id"?: InputValue<string>;
    /**
     * Filter to promotions with an explicit bundle target rule. Universal promotions are not
     * included by catalog target filters. Example: "bun_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "bundle_id"?: InputValue<string>;
    /**
     * Filter to promotions with an explicit category target rule. Universal promotions are not
     * included by catalog target filters. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     */
    "category_handle"?: InputValue<string>;
    /**
     * Filter by promotion redemption type. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "automatic", "code". Value enum: "automatic", "code". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "automatic", "code". anyOf[1][] (Value): string. Value enum:
     * "automatic", "code". anyOf[2] (Value): string. Value enum: "automatic", "code".
     */
    "redemption_type"?: InputValue<("automatic" | "code") | readonly ("automatic" | "code")[]>;
    /**
     * Filter by promotion discount class. Accepts repeated keys, comma-separated values, or
     * mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries
     * are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "order", "line_item", "service_charge". Value enum: "order", "line_item", "service_charge".
     * anyOf[1] (Value): Array of string. minItems: 1. [] enum: "order", "line_item",
     * "service_charge". anyOf[1][] (Value): string. Value enum: "order", "line_item",
     * "service_charge". anyOf[2] (Value): string. Value enum: "order", "line_item",
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
};
export type PromotionsUpdateCodeParams = (InputValue<UpdatePromotionCodeRequestInput>);
export type PromotionsUpdateParams = (InputValue<UpdatePromotionRequestInput>);
/** A temporary link for downloading a generated report. */
export type PublicDownload = {
    /**
     * When the download stops working: 24 hours after the report succeeded. The report keeps
     * status succeeded and this download object afterward; create a new report to get the file
     * again. Format: date-time.
     */
    "expires_at": string;
    /**
     * Identifier of this download, the last segment of url. pattern: ^rdl_[0-9A-HJKMNP-TV-Z]{26}$.
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
    /** Format: int32. */
    "completed_count": number;
    /**
     *  [] (Value): {@link PaymentLinkCustomField}. A custom field on a payment link that collects
     * an answer from the buyer, such as text, a dropdown, or a checkbox.
     */
    "custom_fields"?: Array<PaymentLinkCustomField>;
    /** Custom text shown in checkout: an order summary message and a shipping address label. */
    "custom_text"?: CheckoutCustomTextConfig;
    "description"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_max_amount_money"?: MoneyValue;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "donation_min_amount_money"?: MoneyValue;
    /**
     *  [] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Event settings on an event payment link, such as its date, venue, ticket limit, and ticket
     * emails.
     */
    "event_config"?: PaymentLinkEventConfig;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    "inactive_message"?: string;
    /**
     * Legal settings for a checkout: whether buyers must accept terms, and links to the terms,
     * refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     *  [] (Value): {@link PaymentLinkLineItem}. A line item on a payment link, sold from a catalog
     * variant, a bundle, or an ad hoc name and price, with quantity and price rules.
     */
    "line_items"?: Array<PaymentLinkLineItem>;
    /** Format: int32. */
    "max_completions"?: number;
    "name": string;
    "payment_link_id": string;
    /** Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Payment settings for a checkout: the enabled payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * RFC3339 timestamp after which the link stops starting checkouts and resolve returns
     * PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except that an event
     * link without sales_end_at stops selling at event_config.event_at. A checkout opened before
     * the end can still start payment for up to 15 minutes after it. Format: date-time.
     */
    "sales_end_at"?: string;
    /** Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    "subscription_plan_id"?: string;
    /** Colors and title applied to a payment link's checkout page. */
    "theme"?: ThemeConfig;
    /** Format: int64. */
    "version": number;
};
/** A response containing `PublicPaymentLinkResult` data. */
export type PublicPaymentLinkResponse = {
    /**
     * The result of resolving a public payment link: the link, merchant branding, availability,
     * resolved line items, and a resolution context for starting checkout.
     */
    "data": PublicPaymentLinkResult;
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
 * The result of resolving a public payment link: the link, merchant branding, availability,
 * resolved line items, and a resolution context for starting checkout.
 */
export type PublicPaymentLinkResult = {
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
     * True for an event with no tickets remaining. For other active links with
     * inventory_routing_source, true when any catalog line cannot be bought at its minimum
     * quantity from that source. Untracked and ad hoc lines do not count. A choice line counts
     * only when every offered variant is sold out. Fixed locations use available stock; policies
     * use their allocatable locations. Stock is not reserved by this read.
     */
    "is_sold_out": boolean;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "merchant_icon"?: Image;
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "merchant_logo"?: Image;
    "merchant_name"?: string;
    /**
     * The buyer-facing view of a payment link, with its line items, custom fields, legal and
     * payment settings, and status.
     */
    "payment_link": PublicPaymentLink;
    /**
     * Event links with a ticket limit: tickets left after tickets sold and tickets held by
     * payments in progress. Absent when the event has no ticket limit. Whole-number quantity;
     * fractional quantities are not supported. Format: int32.
     */
    "remaining_quantity"?: number;
    "resolution_context": string;
    /** RFC3339 timestamp. Format: date-time. */
    "resolution_context_expires_at": string;
    /** RFC3339 timestamp. Format: date-time. */
    "resolution_context_start_deadline_at": string;
    /**
     *  [] (Value): {@link PublicResolvedLineItemInfo}. Current catalog details for a payment link
     * line item, such as its name, price, image, available modifiers, and bundle components.
     */
    "resolved_line_items"?: Array<PublicResolvedLineItemInfo>;
    /**
     * True when the link's sales end has passed: payment_link.sales_end_at, or
     * event_config.event_at for an event link without sales_end_at. Resolve then returns
     * PAYMENT_LINK_SALES_ENDED.
     */
    "sales_ended": boolean;
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
    /** Format: int32. */
    "position": number;
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * A summary of a bundle component's variant, with its name, SKU, selected options, and whether
     * it is available for sale.
     */
    "variant"?: PublicResolvedBundleVariantSummary;
    "variant_id": string;
};
/**
 * A summary of a bundle component's variant, with its name, SKU, selected options, and whether it
 * is available for sale.
 */
export type PublicResolvedBundleVariantSummary = {
    "available_for_sale": boolean;
    "name"?: string;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    "variant_id": string;
};
/**
 * Current catalog details for a payment link line item, such as its name, price, image, available
 * modifiers, and bundle components.
 */
export type PublicResolvedLineItemInfo = {
    /**
     *  [] (Value): {@link PublicResolvedModifierGroup}. A modifier group as resolved for a payment
     * link line item, with its selection limits, display flags, and options or text settings.
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
     *  [] (Value): {@link PublicResolvedBundleComponent}. One component of a bundle on a resolved
     * payment link line item, with its variant and quantity.
     */
    "bundle_components"?: Array<PublicResolvedBundleComponent>;
    "bundle_id"?: string;
    /** Value enum: "variant", "bundle". */
    "catalog_object_type"?: "variant" | "bundle" | (string & {});
    /** An image with its `url`, `width`, and `height`, and optional `alt` text. */
    "image"?: Image;
    "is_inventory_tracked"?: boolean;
    /**
     * True when the fixed variant or bundle components cannot be bought at the line minimum
     * quantity from the link inventory_routing_source. The minimum is min_quantity when quantity
     * adjustment is enabled, otherwise quantity. For variant choice lines, true only when every
     * available_variants entry is sold out. Always false for untracked and ad hoc lines. Exposes
     * no stock counts and reserves no stock.
     */
    "is_sold_out": boolean;
    "key": string;
    "product_id"?: string;
    /**
     * Active product options for a variant_ids line, in option position order. Values include only
     * those used by available_variants and retain value position order. Empty when the product has
     * no options; omitted on fixed variant and bundle lines. [] (Value): {@link
     * PaymentLinkProductOption}. An active product option offered on a payment link, with values
     * used by its available variants.
     */
    "product_options"?: Array<PaymentLinkProductOption>;
    "resolved_description"?: string;
    "resolved_name"?: string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
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
    /** Value enum: "per_item", "per_line". */
    "pricing_scope"?: "per_item" | "per_line" | (string & {});
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
    "modifier_id": string;
    "name": string;
    /** Format: int32. */
    "position"?: number;
    "selected_by_default"?: boolean;
    "show_on_fulfillment"?: boolean;
    "show_on_receipt"?: boolean;
    "taxable"?: boolean;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
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
     * The rules for a return policy revision: scope, eligibility, return window, approval and
     * resolution modes, shipping, and restocking fee.
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
     * The rules for a return policy revision: scope, eligibility, return window, approval and
     * resolution modes, shipping, and restocking fee.
     */
    "revision": ReturnPolicyRevisionRequestInput;
};
export type PublishReturnPolicyRevisionResponse = GetReturnPolicyResponse;
/**
 * A gift card issued for one unit of a purchased order line item, with its last four code
 * characters and any card it replaced.
 */
export type PurchasedGiftCard = {
    "gift_card_id": string;
    /** Last four characters of the card's current code. */
    "last4": string;
    "original_gift_card_id"?: string;
    /** Value enum: "manual_recollection", "processor_recollection". */
    "restoration_reason"?: "manual_recollection" | "processor_recollection" | (string & {});
    /** Format: int64. minimum: 1. */
    "unit_ordinal": number;
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
     * Format: date-time.
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
     * Value enum: "advance_onboarding", "create_api_key", "create_merchant_account_session",
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
     * Shared request body for `create_merchant_account_session` next actions in readiness,
     * onboarding, errors, and warnings. Send unchanged to POST /v1/merchant-account-sessions;
     * components and collection policy describe which requirements to collect.
     */
    "merchant_account_session"?: ReadinessMerchantAccountSession;
    /** Value enum: "integrator", "merchant", "flint". */
    "owner": "integrator" | "merchant" | "flint" | (string & {});
    /**  [] (Value): string. */
    "required_fields"?: Array<string>;
};
/**
 * Readiness for one area of a merchant account, with its `status`, the reason for it, and the
 * actions that would advance it.
 */
export type ReadinessAxis = {
    /**
     *  [] (Value): {@link ReadinessAction}. A step that moves a merchant capability or readiness
     * axis forward, with the party that must do it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /** Value enum: "ready", "pending", "blocked", "not_requested", "not_available". */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Value enum: "onboarding_not_started", "requirements_due", "requirements_past_due",
     * "pending_verification", "account_rejected", "disabled_by_platform_policy",
     * "billing_suspended", "platform_review", "processing_not_enabled",
     * "platform_funding_unavailable", "tax_category_required", "service_unavailable",
     * "payment_option_access_not_provisioned", "payment_option_activation_pending",
     * "payment_option_not_in_plan", "payment_option_not_available", "capability_not_active",
     * "other".
     */
    "status_reason"?: "onboarding_not_started"
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
    /** Value enum: "upfront", "incremental". */
    "collection_strategy": "upfront" | "incremental" | (string & {});
    /**
     * [] enum: "account_onboarding", "account_management", "payouts", "balances", "tax_documents",
     * "notification_banner". [] (Value): string. Value enum: "account_onboarding",
     * "account_management", "payouts", "balances", "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {})>;
    /** Value enum: "omit", "include". */
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
    /** RFC3339 timestamp. Format: date-time. */
    "current_deadline_at"?: string;
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
     * Value enum: "account_attention_required", "account_paused", "account_rejected",
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
    /** Value enum: "flint", "payment_processor". */
    "rejected_by"?: "flint" | "payment_processor" | (string & {});
};
/**
 * Receipt settings: whether receipts are emailed automatically, whether they are itemized, and the
 * header and footer text.
 */
export type ReceiptSettings = {
    /** Whether Flint automatically emails a receipt after a successful payment. */
    "auto_email_enabled"?: boolean;
    "footer_text"?: string;
    "header_text"?: string;
    "is_itemized"?: boolean;
};
/**
 * Receipt settings to change when updating settings. Send null for `header_text` or `footer_text`
 * to clear it.
 */
export type ReceiptSettingsRequest = {
    /** Whether Flint automatically emails a receipt after a successful payment. */
    "auto_email_enabled"?: boolean;
    /** Send null to clear it. minLength: 1. */
    "footer_text"?: string | null;
    /** Send null to clear it. minLength: 1. */
    "header_text"?: string | null;
    "is_itemized"?: boolean;
};
/**
 * Receipt settings to change when updating settings. Send null for `header_text` or `footer_text`
 * to clear it.
 */
export type ReceiptSettingsRequestInput = ReceiptSettingsRequest;
/** The request body for: Refresh a customer session. */
export type RefreshCustomerSessionRequest = {
    /** minLength: 1. */
    "refresh_token": string;
};
/** The request body for: Refresh a customer session. */
export type RefreshCustomerSessionRequestInput = RefreshCustomerSessionRequest;
/** Money returned against a collected payment. */
export type Refund = {
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "amount_money": MoneyValue;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    "credit_note_id"?: string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    "customer_id"?: string;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Why a refund failed or a payment refund was canceled. Failed and canceled amounts become
     * refundable again. Fix the cause, then create a new refund with a new idempotency key.
     * Unknown provider values are returned as refund_failed. Value enum:
     * "expired_or_canceled_card", "lost_or_stolen_card", "insufficient_funds",
     * "insufficient_available_balance", "declined", "merchant_request", "payment_disputed",
     * "payment_refund_failed", "payment_refund_not_attempted", "refund_failed".
     */
    "failure_reason"?: "expired_or_canceled_card"
        | "lost_or_stolen_card"
        | "insufficient_funds"
        | "insufficient_available_balance"
        | "declined"
        | "merchant_request"
        | "payment_disputed"
        | "payment_refund_failed"
        | "payment_refund_not_attempted"
        | "refund_failed"
        | (string & {});
    /**
     * Present only on refunds created through POST /v1/credit-notes/{credit_note_id}/refunds or by
     * issuing a credit note with refund: the Idempotency-Key of that call. Use it with GET
     * /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create
     * response was lost.
     */
    "idempotency_key"?: string;
    "invoice_id"?: string;
    /**
     *  [] (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
     * quantity, refunded amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * Present only when `expand` includes `order`; `null` when expanded and there is no related
     * order. anyOf[1] (Value): {@link ExpandedOrderSummary}. An order's summary fields, including
     * status, payment and refund status, and pricing and settlement amounts, returned when the
     * order is expanded. anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    "order_id"?: string;
    /**
     * Present only when `expand` includes `payment_intent`; `null` when expanded and there is no
     * related payment intent. anyOf[1] (Value): {@link ExpandedPaymentIntentSummary}. A payment
     * intent's summary fields, including amount, status, and capture method, returned when the
     * payment intent is expanded. anyOf[2] (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    "payment_intent_id"?: string;
    /**
     *  [] (Value): {@link PaymentRefund}. The part of a refund returned through one payment, with
     * the amount, tip, status, and any failure reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    "payment_review_id"?: string;
    /**
     * Value enum: "duplicate", "fraudulent", "requested_by_customer", "defective_product",
     * "wrong_item_shipped", "never_received", "not_as_described", "arrived_too_late",
     * "customer_changed_mind", "better_price_found", "accidental_order", "other", null.
     */
    "reason": "duplicate"
        | "fraudulent"
        | "requested_by_customer"
        | "defective_product"
        | "wrong_item_shipped"
        | "never_received"
        | "not_as_described"
        | "arrived_too_late"
        | "customer_changed_mind"
        | "better_price_found"
        | "accidental_order"
        | "other"
        | null
        | (string & {})
        | null;
    "reason_message"?: string;
    "refund_id": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "refunded_tip_money": MoneyValue;
    "return_id"?: string;
    "return_resolution_id"?: string;
    /**
     * Summary of payment_refunds and tender_allocations. Only failed is final: succeeded and
     * partially_succeeded can still change when a bank rejects a refund after accepting it. Follow
     * refund.updated. Value enum: "pending", "succeeded", "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     *  [] (Value): {@link RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an
     * order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     *  [] (Value): {@link RefundTenderAllocation}. One tender's share of a refund, listed in the
     * refund's tender allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /**
     * Cash returned after an unissued gift card purchase refund failed. Return it through a new
     * refund against payment_intent_id and order_line_item_id. It does not issue another card.
     * Source remaining and pending amounts describe the entire original settlement allocation;
     * repeated entries for that source are not additive. [] (Value): {@link
     * RefundUnissuedGiftCardRecovery}. Details of a gift card purchase refunded before the card
     * was issued, including the amounts recovered.
     */
    "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
/**
 * Who made a manual tax adjustment on a refund line item and where it came from, for audit
 * purposes.
 */
export type RefundAdjustmentAudit = {
    /** minLength: 1. */
    "actor_id": string;
    /** Value enum: "user", "system", "admin". */
    "actor_type": "user" | "system" | "admin" | (string & {});
    /** minLength: 1. */
    "source": string;
};
/**
 * Who made a manual tax adjustment on a refund line item and where it came from, for audit
 * purposes.
 */
export type RefundAdjustmentAuditInput = {
    /** minLength: 1. */
    "actor_id": string;
    /** Value enum: "user", "system", "admin". */
    "actor_type": "user" | "system" | "admin";
    /** minLength: 1. */
    "source": string;
};
/**
 * The reason recorded for a refund line item adjustment, as a `code` with an optional description.
 */
export type RefundAdjustmentReason = {
    /**
     * Value enum: "customer_agreement", "jurisdiction_specific_rule", "merchant_policy",
     * "customer_request", "restocking_policy", "manual_tax_correction", "other".
     */
    "code": "customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other"
        | (string & {});
    "description"?: string;
};

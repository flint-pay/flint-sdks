import type {
    PromotionRefInputPromotionCode,
    PromotionRefInputPromotionID,
    PromotionRefInputPromotionCodeInput,
    PromotionRefInputPromotionIDInput,
    PromotionCodesSummaryPreviousAttributes,
    PromotionCombinesWithPreviousAttributes,
    PromotionExclusivityPreviousAttributes
} from './types-58.js';
import type { Promotion, PromotionApplicationMethodPreviousAttributes } from './types-57.js';
import type { ResponseMeta } from './types-62.js';
import type { MoneyValue, MoneyValuePreviousAttributes, MoneyValueInput } from './types-44.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { WebhookPromotion, WebhookReader } from './types-79.js';
import type { InputValue } from '../runtime.js';
import type { CreatePromotionRequestInput } from './types-12.js';
import type { CategoriesDeleteParams } from './types-5.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { UpdatePromotionRequestInput } from './types-77.js';
import type { CheckoutCustomTextConfig, CheckoutPaymentConfig, CheckoutMerchantSupport } from './types-6.js';
import type { Image } from './types-31.js';
import type { LegalSettings } from './types-39.js';
import type { PaymentLinkCustomField, PaymentLinkEventConfig, PaymentLinkLineItem, PaymentLinkAvailableVariant } from './types-52.js';
import type { ThemeConfig, TextModifierConfigRequest } from './types-75.js';
import type { CheckoutTheme } from './types-7.js';
import type { PaymentLinkSubscriptionPreview, PaymentLinkProductOption } from './types-53.js';
import type { BundleComponentVariantSummary } from './types-1.js';
import type { SelectedProductOption } from './types-68.js';
import type { ReturnPolicyRevisionRequest, ReturnPolicyRevisionRequestInput } from './types-64.js';
import type { GetReturnPolicyResponse } from './types-28.js';
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
export type PromotionRuleGroupPreviousAttributes = ((({
    /**
     * Rules and nested groups that must all match. anyOf[1] (Value): Array of (({@link
     * PromotionRulePreviousAttributes} or {@link PromotionRuleGroupPreviousAttributes})). Rules
     * and nested groups that must all match. minItems: 1. anyOf[1][] (Value): ({@link
     * PromotionRulePreviousAttributes} or {@link PromotionRuleGroupPreviousAttributes}).
     * anyOf[1][].anyOf[1] (Value): {@link PromotionRulePreviousAttributes}. anyOf[1][].anyOf[2]
     * (Value): {@link PromotionRuleGroupPreviousAttributes}. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. anyOf[2] (Value):
     * null.
     */
    "all"?: ((Array<(((PromotionRulePreviousAttributes) | (PromotionRuleGroupPreviousAttributes) | (unknown)))>)
        | (null));
})
    | ({
    /**
     * Rules and nested groups of which at least one must match. anyOf[1] (Value): Array of
     * (({@link PromotionRulePreviousAttributes} or {@link PromotionRuleGroupPreviousAttributes})).
     * Rules and nested groups of which at least one must match. minItems: 1. anyOf[1][] (Value):
     * ({@link PromotionRulePreviousAttributes} or {@link PromotionRuleGroupPreviousAttributes}).
     * anyOf[1][].anyOf[1] (Value): {@link PromotionRulePreviousAttributes}. anyOf[1][].anyOf[2]
     * (Value): {@link PromotionRuleGroupPreviousAttributes}. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. anyOf[2] (Value):
     * null.
     */
    "any"?: ((Array<(((PromotionRulePreviousAttributes) | (PromotionRuleGroupPreviousAttributes) | (unknown)))>)
        | (null));
})
    | (Record<string, unknown>)));
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
export type PromotionRulePreviousAttributes = {
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
     * a first-order guarantee across concurrent checkouts. anyOf[1] (Value): string. Field the
     * rule tests. The attribute fixes the value type and the operators that are legal for it:
     * money attributes accept comparison operators but not eq or in, booleans accept eq only, and
     * so on. The full attribute/type/operator matrix is machine-readable in
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
     * a first-order guarantee across concurrent checkouts. anyOf[2] (Value): null.
     */
    "attribute"?: ((string) | (null));
    /**
     * Alternative thresholds for money-valued rules, keyed by currency code. Each Money currency
     * must match its key. anyOf[1] (Value): Map of {@link MoneyValuePreviousAttributes}.
     * anyOf[1].* (Value): {@link MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "currency_options"?: ((Record<string, MoneyValuePreviousAttributes>) | (null));
    /**
     * Comparison to apply to the attribute. The attribute determines which operators are allowed.
     * Value enum: "eq", "ne", "gt", "gte", "lt", "lte", "in", "contains", "is_defined". anyOf[1]
     * (Value): string. Comparison to apply to the attribute. The attribute determines which
     * operators are allowed. Value enum: "eq", "ne", "gt", "gte", "lt", "lte", "in", "contains",
     * "is_defined". anyOf[2] (Value): null.
     */
    "operator"?: (("eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined" | (string & {}))
        | (null));
    /**
     * Comparison values with the type required by the attribute. Omit for is_defined, which tests
     * whether the attribute is present. anyOf[1] (Value): Array of {@link
     * PromotionRuleValuePreviousAttributes}. Comparison values with the type required by the
     * attribute. Omit for is_defined, which tests whether the attribute is present. anyOf[1][]
     * (Value): {@link PromotionRuleValuePreviousAttributes}. Rule comparison value. Use a
     * primitive string, number, boolean, or a money object. anyOf[2] (Value): null.
     */
    "values"?: ((Array<PromotionRuleValuePreviousAttributes>) | (null));
};
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
export type PromotionRuleValuePreviousAttributes = (((string) | (number) | (boolean) | (MoneyValuePreviousAttributes) | (unknown)));
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
export type PromotionSchedulePreviousAttributes = {
    /**
     * Time after which the promotion can no longer apply, as an absolute RFC3339 timestamp.
     * Omitted when it has no end time. anyOf[1] (Value): string. Time after which the promotion
     * can no longer apply, as an absolute RFC3339 timestamp. Omitted when it has no end time.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "ends_at"?: ((string) | (null));
    /**
     * Earliest time the promotion can apply, as an absolute RFC3339 timestamp. Omitted when it has
     * no start time. anyOf[1] (Value): string. Earliest time the promotion can apply, as an
     * absolute RFC3339 timestamp. Omitted when it has no start time. Format: date-time. minLength:
     * 1. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "starts_at"?: ((string) | (null));
    /**
     * IANA zone the schedule was entered in, used for display. starts_at and ends_at are absolute
     * timestamps, so this does not change when the promotion starts or ends. anyOf[1] (Value):
     * string. IANA zone the schedule was entered in, used for display. starts_at and ends_at are
     * absolute timestamps, so this does not change when the promotion starts or ends. minLength:
     * 1. maxLength: 255. anyOf[2] (Value): null.
     */
    "timezone"?: ((string) | (null));
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
        "object": WebhookPromotion;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "application_method"?: ((PromotionApplicationMethodPreviousAttributes) | (null) | (unknown));
            "available"?: ((boolean) | (null));
            "codes_summary"?: ((PromotionCodesSummaryPreviousAttributes) | (null));
            "combines_with"?: ((PromotionCombinesWithPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "description"?: ((string) | (null));
            "discount_class"?: (("order" | "line_item" | "service_charge" | (string & {})) | (null));
            "display_name"?: ((string) | (null));
            "eligibility_rules"?: ((PromotionRuleGroupPreviousAttributes) | (null) | (unknown));
            "exclusivity"?: ((PromotionExclusivityPreviousAttributes) | (null));
            "external_reference_id"?: ((string) | (null));
            "max_uses"?: ((number) | (null));
            "max_uses_per_customer"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "promotion_id"?: ((string) | (null));
            "redemption_type"?: (("automatic" | "code" | (string & {})) | (null));
            "schedule"?: ((PromotionSchedulePreviousAttributes) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "unavailable_reason"?: (("inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "uses_count"?: ((number) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "promotion.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPromotion;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "application_method"?: ((PromotionApplicationMethodPreviousAttributes) | (null) | (unknown));
            "available"?: ((boolean) | (null));
            "codes_summary"?: ((PromotionCodesSummaryPreviousAttributes) | (null));
            "combines_with"?: ((PromotionCombinesWithPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "description"?: ((string) | (null));
            "discount_class"?: (("order" | "line_item" | "service_charge" | (string & {})) | (null));
            "display_name"?: ((string) | (null));
            "eligibility_rules"?: ((PromotionRuleGroupPreviousAttributes) | (null) | (unknown));
            "exclusivity"?: ((PromotionExclusivityPreviousAttributes) | (null));
            "external_reference_id"?: ((string) | (null));
            "max_uses"?: ((number) | (null));
            "max_uses_per_customer"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "name"?: ((string) | (null));
            "promotion_id"?: ((string) | (null));
            "redemption_type"?: (("automatic" | "code" | (string & {})) | (null));
            "schedule"?: ((PromotionSchedulePreviousAttributes) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "unavailable_reason"?: (("inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "uses_count"?: ((number) | (null));
            "version"?: ((number) | (null));
        });
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
     *  object (Required): {@link WebhookPromotion}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `codes`. previous_attributes (Optional): object. Previous values
     * of changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.application_method (Optional): {@link
     * PromotionApplicationMethodPreviousAttributes} or null. Discount effect and how it applies to
     * eligible items or charges. previous_attributes.application_method.anyOf[1] (Value): {@link
     * PromotionApplicationMethodPreviousAttributes}. A flat application method whose type selects
     * its effect fields. previous_attributes.application_method.anyOf[2] (Value): null.
     * previous_attributes.available (Optional): boolean or null. Whether the promotion can apply
     * right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has
     * at least one redeemable code. previous_attributes.available.anyOf[1] (Value): boolean.
     * Whether the promotion can apply right now: it is active, inside its schedule, under its
     * max_uses, and, when code-gated, has at least one redeemable code.
     * previous_attributes.available.anyOf[2] (Value): null. previous_attributes.codes_summary
     * (Optional): {@link PromotionCodesSummaryPreviousAttributes} or null. Read-only rollup of
     * this promotion's codes. Present only on code-gated promotions; automatic promotions omit it.
     * previous_attributes.codes_summary.anyOf[1] (Value): {@link
     * PromotionCodesSummaryPreviousAttributes}. previous_attributes.codes_summary.anyOf[2]
     * (Value): null. previous_attributes.combines_with (Optional): {@link
     * PromotionCombinesWithPreviousAttributes} or null. Which promotion discount classes this
     * promotion may share an order with. Both promotions must allow each other's class. Manual
     * discounts are ignored. See Promotion for the evaluation order.
     * previous_attributes.combines_with.anyOf[1] (Value): {@link
     * PromotionCombinesWithPreviousAttributes}. previous_attributes.combines_with.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When the promotion
     * was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value):
     * string. When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.description (Optional): string or null. Optional description of the
     * promotion for your own records. previous_attributes.description.anyOf[1] (Value): string.
     * Optional description of the promotion for your own records.
     * previous_attributes.description.anyOf[2] (Value): null. previous_attributes.discount_class
     * (Optional): string or null. Whether the promotion discounts the order, individual line
     * items, or service charges. Value enum: "order", "line_item", "service_charge".
     * previous_attributes.discount_class.anyOf[1] (Value): string. Whether the promotion discounts
     * the order, individual line items, or service charges. Value enum: "order", "line_item",
     * "service_charge". previous_attributes.discount_class.anyOf[2] (Value): null.
     * previous_attributes.display_name (Optional): string or null. Buyer-facing promotion name
     * shown in checkout and order discount surfaces. previous_attributes.display_name.anyOf[1]
     * (Value): string. Buyer-facing promotion name shown in checkout and order discount surfaces.
     * previous_attributes.display_name.anyOf[2] (Value): null.
     * previous_attributes.eligibility_rules (Optional): {@link
     * PromotionRuleGroupPreviousAttributes} or null. Conditions an order must satisfy for the
     * promotion to apply. Omitted when the promotion has no eligibility conditions.
     * previous_attributes.eligibility_rules.anyOf[1] (Value): {@link
     * PromotionRuleGroupPreviousAttributes}. A rule group is an object with exactly one nonempty
     * all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key
     * are invalid. Omit the field for no rules, or send null where the field is clearable.
     * Responses list rules before nested groups. Under any, a nested group containing only one
     * rule reads back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups. previous_attributes.eligibility_rules.anyOf[2]
     * (Value): null. previous_attributes.exclusivity (Optional): {@link
     * PromotionExclusivityPreviousAttributes} or null. Optional group and priority used to choose
     * one promotion from competing promotions in the same group. See Promotion for the evaluation
     * order. previous_attributes.exclusivity.anyOf[1] (Value): {@link
     * PromotionExclusivityPreviousAttributes}. previous_attributes.exclusivity.anyOf[2] (Value):
     * null. previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.max_uses (Optional): integer or null. Maximum number of redemptions
     * across all codes and automatic applications. Omitted when there is no redemption limit.
     * previous_attributes.max_uses.anyOf[1] (Value): integer. Maximum number of redemptions across
     * all codes and automatic applications. Omitted when there is no redemption limit. Format:
     * int64. previous_attributes.max_uses.anyOf[2] (Value): null.
     * previous_attributes.max_uses_per_customer (Optional): integer or null. Maximum reserved and
     * redeemed uses per identified customer across every code and automatic or ID-based
     * application. Checked atomically when payment starts. Failed, canceled, or expired attempts
     * release their reservation; refunds do not restore uses. Counts only within the same merchant
     * and environment; live and test mode are separate. Without an identified customer, returns
     * 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer
     * limit. previous_attributes.max_uses_per_customer.anyOf[1] (Value): integer. Maximum reserved
     * and redeemed uses per identified customer across every code and automatic or ID-based
     * application. Checked atomically when payment starts. Failed, canceled, or expired attempts
     * release their reservation; refunds do not restore uses. Counts only within the same merchant
     * and environment; live and test mode are separate. Without an identified customer, returns
     * 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer
     * limit. Format: int64. minimum: 1. previous_attributes.max_uses_per_customer.anyOf[2]
     * (Value): null. previous_attributes.merchant_id (Optional): string or null. Identifier of the
     * merchant that owns the promotion. previous_attributes.merchant_id.anyOf[1] (Value): string.
     * Identifier of the merchant that owns the promotion. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Key-value data you
     * attach to the promotion. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Internal promotion name for dashboards, searching, and reporting.
     * previous_attributes.name.anyOf[1] (Value): string. Internal promotion name for dashboards,
     * searching, and reporting. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.promotion_id (Optional): string or null. Unique identifier for the
     * promotion. previous_attributes.promotion_id.anyOf[1] (Value): string. Unique identifier for
     * the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * previous_attributes.promotion_id.anyOf[2] (Value): null. previous_attributes.redemption_type
     * (Optional): string or null. Whether the promotion applies automatically when its rules match
     * or requires a promotion code. Value enum: "automatic", "code".
     * previous_attributes.redemption_type.anyOf[1] (Value): string. Whether the promotion applies
     * automatically when its rules match or requires a promotion code. Value enum: "automatic",
     * "code". previous_attributes.redemption_type.anyOf[2] (Value): null.
     * previous_attributes.schedule (Optional): {@link PromotionSchedulePreviousAttributes} or
     * null. Optional start and end times that limit when the promotion can apply.
     * previous_attributes.schedule.anyOf[1] (Value): {@link PromotionSchedulePreviousAttributes}.
     * previous_attributes.schedule.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived.
     * An active promotion can still be unavailable: read available. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Lifecycle
     * status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can
     * still be unavailable: read available. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.unavailable_reason
     * (Optional): string or null. Why available is false. Present only when available is false.
     * Value enum: "inactive", "archived", "not_yet_started", "expired", "exhausted",
     * "no_active_codes". previous_attributes.unavailable_reason.anyOf[1] (Value): string. Why
     * available is false. Present only when available is false. Value enum: "inactive",
     * "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     * previous_attributes.unavailable_reason.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the promotion was last
     * updated, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * When the promotion was last updated, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.uses_count (Optional): integer or null. Number of times the promotion
     * has been redeemed. previous_attributes.uses_count.anyOf[1] (Value): integer. Number of times
     * the promotion has been redeemed. Format: int64. previous_attributes.uses_count.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Persisted
     * owned-state version. Clock-based availability and expanded resources do not advance this
     * counter. previous_attributes.version.anyOf[1] (Value): integer. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `codes`. */
        "object": WebhookPromotion;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. application_method (Optional): {@link
         * PromotionApplicationMethodPreviousAttributes} or null. Discount effect and how it
         * applies to eligible items or charges. application_method.anyOf[1] (Value): {@link
         * PromotionApplicationMethodPreviousAttributes}. A flat application method whose type
         * selects its effect fields. application_method.anyOf[2] (Value): null. available
         * (Optional): boolean or null. Whether the promotion can apply right now: it is active,
         * inside its schedule, under its max_uses, and, when code-gated, has at least one
         * redeemable code. available.anyOf[1] (Value): boolean. Whether the promotion can apply
         * right now: it is active, inside its schedule, under its max_uses, and, when code-gated,
         * has at least one redeemable code. available.anyOf[2] (Value): null. codes_summary
         * (Optional): {@link PromotionCodesSummaryPreviousAttributes} or null. Read-only rollup of
         * this promotion's codes. Present only on code-gated promotions; automatic promotions omit
         * it. codes_summary.anyOf[1] (Value): {@link PromotionCodesSummaryPreviousAttributes}.
         * codes_summary.anyOf[2] (Value): null. combines_with (Optional): {@link
         * PromotionCombinesWithPreviousAttributes} or null. Which promotion discount classes this
         * promotion may share an order with. Both promotions must allow each other's class. Manual
         * discounts are ignored. See Promotion for the evaluation order. combines_with.anyOf[1]
         * (Value): {@link PromotionCombinesWithPreviousAttributes}. combines_with.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the promotion was created, as
         * an RFC3339 timestamp. created_at.anyOf[1] (Value): string. When the promotion was
         * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. description (Optional): string or null. Optional
         * description of the promotion for your own records. description.anyOf[1] (Value): string.
         * Optional description of the promotion for your own records. description.anyOf[2]
         * (Value): null. discount_class (Optional): string or null. Whether the promotion
         * discounts the order, individual line items, or service charges. Value enum: "order",
         * "line_item", "service_charge". discount_class.anyOf[1] (Value): string. Whether the
         * promotion discounts the order, individual line items, or service charges. Value enum:
         * "order", "line_item", "service_charge". discount_class.anyOf[2] (Value): null.
         * display_name (Optional): string or null. Buyer-facing promotion name shown in checkout
         * and order discount surfaces. display_name.anyOf[1] (Value): string. Buyer-facing
         * promotion name shown in checkout and order discount surfaces. display_name.anyOf[2]
         * (Value): null. eligibility_rules (Optional): {@link
         * PromotionRuleGroupPreviousAttributes} or null. Conditions an order must satisfy for the
         * promotion to apply. Omitted when the promotion has no eligibility conditions.
         * eligibility_rules.anyOf[1] (Value): {@link PromotionRuleGroupPreviousAttributes}. A rule
         * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
         * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
         * rules, or send null where the field is clearable. Responses list rules before nested
         * groups. Under any, a nested group containing only one rule reads back as that rule.
         * Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope.
         * These deterministic normalizations stabilize after one round trip.
         * matched_items.subtotal sums the line items matched by the line_item.* rules in the same
         * all group, including its nested groups. eligibility_rules.anyOf[2] (Value): null.
         * exclusivity (Optional): {@link PromotionExclusivityPreviousAttributes} or null. Optional
         * group and priority used to choose one promotion from competing promotions in the same
         * group. See Promotion for the evaluation order. exclusivity.anyOf[1] (Value): {@link
         * PromotionExclusivityPreviousAttributes}. exclusivity.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. max_uses
         * (Optional): integer or null. Maximum number of redemptions across all codes and
         * automatic applications. Omitted when there is no redemption limit. max_uses.anyOf[1]
         * (Value): integer. Maximum number of redemptions across all codes and automatic
         * applications. Omitted when there is no redemption limit. Format: int64.
         * max_uses.anyOf[2] (Value): null. max_uses_per_customer (Optional): integer or null.
         * Maximum reserved and redeemed uses per identified customer across every code and
         * automatic or ID-based application. Checked atomically when payment starts. Failed,
         * canceled, or expired attempts release their reservation; refunds do not restore uses.
         * Counts only within the same merchant and environment; live and test mode are separate.
         * Without an identified customer, returns 409 PROMOTION_DECLINED with reason
         * customer_required. Null when there is no per-customer limit.
         * max_uses_per_customer.anyOf[1] (Value): integer. Maximum reserved and redeemed uses per
         * identified customer across every code and automatic or ID-based application. Checked
         * atomically when payment starts. Failed, canceled, or expired attempts release their
         * reservation; refunds do not restore uses. Counts only within the same merchant and
         * environment; live and test mode are separate. Without an identified customer, returns
         * 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer
         * limit. Format: int64. minimum: 1. max_uses_per_customer.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Identifier of the merchant that owns the
         * promotion. merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns
         * the promotion. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. metadata (Optional): {@link MetadataMap} or null. Key-value data you attach to the
         * promotion. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value):
         * null. name (Optional): string or null. Internal promotion name for dashboards,
         * searching, and reporting. name.anyOf[1] (Value): string. Internal promotion name for
         * dashboards, searching, and reporting. name.anyOf[2] (Value): null. promotion_id
         * (Optional): string or null. Unique identifier for the promotion. promotion_id.anyOf[1]
         * (Value): string. Unique identifier for the promotion. Example:
         * "promo_01KEZF7C00QQ8EZ74BDYSZ315V". promotion_id.anyOf[2] (Value): null. redemption_type
         * (Optional): string or null. Whether the promotion applies automatically when its rules
         * match or requires a promotion code. Value enum: "automatic", "code".
         * redemption_type.anyOf[1] (Value): string. Whether the promotion applies automatically
         * when its rules match or requires a promotion code. Value enum: "automatic", "code".
         * redemption_type.anyOf[2] (Value): null. schedule (Optional): {@link
         * PromotionSchedulePreviousAttributes} or null. Optional start and end times that limit
         * when the promotion can apply. schedule.anyOf[1] (Value): {@link
         * PromotionSchedulePreviousAttributes}. schedule.anyOf[2] (Value): null. status
         * (Optional): string or null. Lifecycle status. Set active or inactive with PATCH; DELETE
         * sets archived. An active promotion can still be unavailable: read available. Value enum:
         * "active", "inactive", "archived". status.anyOf[1] (Value): string. Lifecycle status. Set
         * active or inactive with PATCH; DELETE sets archived. An active promotion can still be
         * unavailable: read available. Value enum: "active", "inactive", "archived".
         * status.anyOf[2] (Value): null. unavailable_reason (Optional): string or null. Why
         * available is false. Present only when available is false. Value enum: "inactive",
         * "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
         * unavailable_reason.anyOf[1] (Value): string. Why available is false. Present only when
         * available is false. Value enum: "inactive", "archived", "not_yet_started", "expired",
         * "exhausted", "no_active_codes". unavailable_reason.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the promotion was last updated, as an RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. When the promotion was last updated, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. uses_count (Optional): integer or null. Number of
         * times the promotion has been redeemed. uses_count.anyOf[1] (Value): integer. Number of
         * times the promotion has been redeemed. Format: int64. uses_count.anyOf[2] (Value): null.
         * version (Optional): integer or null. Persisted owned-state version. Clock-based
         * availability and expanded resources do not advance this counter. version.anyOf[1]
         * (Value): integer. Persisted owned-state version. Clock-based availability and expanded
         * resources do not advance this counter. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Discount effect and how it applies to eligible items or charges. anyOf[1] (Value):
             * {@link PromotionApplicationMethodPreviousAttributes}. A flat application method
             * whose type selects its effect fields. anyOf[2] (Value): null.
             */
            "application_method"?: ((PromotionApplicationMethodPreviousAttributes) | (null) | (unknown));
            /**
             * Whether the promotion can apply right now: it is active, inside its schedule, under
             * its max_uses, and, when code-gated, has at least one redeemable code. anyOf[1]
             * (Value): boolean. Whether the promotion can apply right now: it is active, inside
             * its schedule, under its max_uses, and, when code-gated, has at least one redeemable
             * code. anyOf[2] (Value): null.
             */
            "available"?: ((boolean) | (null));
            /**
             * Read-only rollup of this promotion's codes. Present only on code-gated promotions;
             * automatic promotions omit it. anyOf[1] (Value): {@link
             * PromotionCodesSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "codes_summary"?: ((PromotionCodesSummaryPreviousAttributes) | (null));
            /**
             * Which promotion discount classes this promotion may share an order with. Both
             * promotions must allow each other's class. Manual discounts are ignored. See
             * Promotion for the evaluation order. anyOf[1] (Value): {@link
             * PromotionCombinesWithPreviousAttributes}. anyOf[2] (Value): null.
             */
            "combines_with"?: ((PromotionCombinesWithPreviousAttributes) | (null));
            /**
             * When the promotion was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Optional description of the promotion for your own records. anyOf[1] (Value):
             * string. Optional description of the promotion for your own records. anyOf[2]
             * (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Whether the promotion discounts the order, individual line items, or service
             * charges. Value enum: "order", "line_item", "service_charge". anyOf[1] (Value):
             * string. Whether the promotion discounts the order, individual line items, or service
             * charges. Value enum: "order", "line_item", "service_charge". anyOf[2] (Value): null.
             */
            "discount_class"?: (("order" | "line_item" | "service_charge" | (string & {})) | (null));
            /**
             * Buyer-facing promotion name shown in checkout and order discount surfaces. anyOf[1]
             * (Value): string. Buyer-facing promotion name shown in checkout and order discount
             * surfaces. anyOf[2] (Value): null.
             */
            "display_name"?: ((string) | (null));
            /**
             * Conditions an order must satisfy for the promotion to apply. Omitted when the
             * promotion has no eligibility conditions. anyOf[1] (Value): {@link
             * PromotionRuleGroupPreviousAttributes}. A rule group is an object with exactly one
             * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
             * groups, and a rules key are invalid. Omit the field for no rules, or send null where
             * the field is clearable. Responses list rules before nested groups. Under any, a
             * nested group containing only one rule reads back as that rule. Under all, nested
             * groups keep their boundaries to preserve matched_items.subtotal scope. These
             * deterministic normalizations stabilize after one round trip. matched_items.subtotal
             * sums the line items matched by the line_item.* rules in the same all group,
             * including its nested groups. anyOf[2] (Value): null.
             */
            "eligibility_rules"?: ((PromotionRuleGroupPreviousAttributes) | (null) | (unknown));
            /**
             * Optional group and priority used to choose one promotion from competing promotions
             * in the same group. See Promotion for the evaluation order. anyOf[1] (Value): {@link
             * PromotionExclusivityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "exclusivity"?: ((PromotionExclusivityPreviousAttributes) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Maximum number of redemptions across all codes and automatic applications. Omitted
             * when there is no redemption limit. anyOf[1] (Value): integer. Maximum number of
             * redemptions across all codes and automatic applications. Omitted when there is no
             * redemption limit. Format: int64. anyOf[2] (Value): null.
             */
            "max_uses"?: ((number) | (null));
            /**
             * Maximum reserved and redeemed uses per identified customer across every code and
             * automatic or ID-based application. Checked atomically when payment starts. Failed,
             * canceled, or expired attempts release their reservation; refunds do not restore
             * uses. Counts only within the same merchant and environment; live and test mode are
             * separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason
             * customer_required. Null when there is no per-customer limit. anyOf[1] (Value):
             * integer. Maximum reserved and redeemed uses per identified customer across every
             * code and automatic or ID-based application. Checked atomically when payment starts.
             * Failed, canceled, or expired attempts release their reservation; refunds do not
             * restore uses. Counts only within the same merchant and environment; live and test
             * mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED
             * with reason customer_required. Null when there is no per-customer limit. Format:
             * int64. minimum: 1. anyOf[2] (Value): null.
             */
            "max_uses_per_customer"?: ((number) | (null));
            /**
             * Identifier of the merchant that owns the promotion. anyOf[1] (Value): string.
             * Identifier of the merchant that owns the promotion. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Key-value data you attach to the promotion. anyOf[1] (Value): {@link MetadataMap}.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Internal promotion name for dashboards, searching, and reporting. anyOf[1] (Value):
             * string. Internal promotion name for dashboards, searching, and reporting. anyOf[2]
             * (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Unique identifier for the promotion. anyOf[1] (Value): string. Unique identifier for
             * the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". anyOf[2] (Value): null.
             */
            "promotion_id"?: ((string) | (null));
            /**
             * Whether the promotion applies automatically when its rules match or requires a
             * promotion code. Value enum: "automatic", "code". anyOf[1] (Value): string. Whether
             * the promotion applies automatically when its rules match or requires a promotion
             * code. Value enum: "automatic", "code". anyOf[2] (Value): null.
             */
            "redemption_type"?: (("automatic" | "code" | (string & {})) | (null));
            /**
             * Optional start and end times that limit when the promotion can apply. anyOf[1]
             * (Value): {@link PromotionSchedulePreviousAttributes}. anyOf[2] (Value): null.
             */
            "schedule"?: ((PromotionSchedulePreviousAttributes) | (null));
            /**
             * Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active
             * promotion can still be unavailable: read available. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status. Set active or
             * inactive with PATCH; DELETE sets archived. An active promotion can still be
             * unavailable: read available. Value enum: "active", "inactive", "archived". anyOf[2]
             * (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * Why available is false. Present only when available is false. Value enum:
             * "inactive", "archived", "not_yet_started", "expired", "exhausted",
             * "no_active_codes". anyOf[1] (Value): string. Why available is false. Present only
             * when available is false. Value enum: "inactive", "archived", "not_yet_started",
             * "expired", "exhausted", "no_active_codes". anyOf[2] (Value): null.
             */
            "unavailable_reason"?: (("inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {}))
                | (null));
            /**
             * When the promotion was last updated, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the promotion was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Number of times the promotion has been redeemed. anyOf[1] (Value): integer. Number
             * of times the promotion has been redeemed. Format: int64. anyOf[2] (Value): null.
             */
            "uses_count"?: ((number) | (null));
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. anyOf[1] (Value): integer. Persisted owned-state version.
             * Clock-based availability and expanded resources do not advance this counter. Format:
             * uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     *  object (Required): {@link WebhookPromotion}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `codes`. previous_attributes (Optional): object. Previous values
     * of changed top-level fields in data.object, at this delivery's API version. Nested changes
     * include the whole previous top-level value. A value is null when the field was absent before
     * the change. Omitted when Flint did not record the previous state, including synthetic test
     * events. previous_attributes.application_method (Optional): {@link
     * PromotionApplicationMethodPreviousAttributes} or null. Discount effect and how it applies to
     * eligible items or charges. previous_attributes.application_method.anyOf[1] (Value): {@link
     * PromotionApplicationMethodPreviousAttributes}. A flat application method whose type selects
     * its effect fields. previous_attributes.application_method.anyOf[2] (Value): null.
     * previous_attributes.available (Optional): boolean or null. Whether the promotion can apply
     * right now: it is active, inside its schedule, under its max_uses, and, when code-gated, has
     * at least one redeemable code. previous_attributes.available.anyOf[1] (Value): boolean.
     * Whether the promotion can apply right now: it is active, inside its schedule, under its
     * max_uses, and, when code-gated, has at least one redeemable code.
     * previous_attributes.available.anyOf[2] (Value): null. previous_attributes.codes_summary
     * (Optional): {@link PromotionCodesSummaryPreviousAttributes} or null. Read-only rollup of
     * this promotion's codes. Present only on code-gated promotions; automatic promotions omit it.
     * previous_attributes.codes_summary.anyOf[1] (Value): {@link
     * PromotionCodesSummaryPreviousAttributes}. previous_attributes.codes_summary.anyOf[2]
     * (Value): null. previous_attributes.combines_with (Optional): {@link
     * PromotionCombinesWithPreviousAttributes} or null. Which promotion discount classes this
     * promotion may share an order with. Both promotions must allow each other's class. Manual
     * discounts are ignored. See Promotion for the evaluation order.
     * previous_attributes.combines_with.anyOf[1] (Value): {@link
     * PromotionCombinesWithPreviousAttributes}. previous_attributes.combines_with.anyOf[2]
     * (Value): null. previous_attributes.created_at (Optional): string or null. When the promotion
     * was created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value):
     * string. When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.description (Optional): string or null. Optional description of the
     * promotion for your own records. previous_attributes.description.anyOf[1] (Value): string.
     * Optional description of the promotion for your own records.
     * previous_attributes.description.anyOf[2] (Value): null. previous_attributes.discount_class
     * (Optional): string or null. Whether the promotion discounts the order, individual line
     * items, or service charges. Value enum: "order", "line_item", "service_charge".
     * previous_attributes.discount_class.anyOf[1] (Value): string. Whether the promotion discounts
     * the order, individual line items, or service charges. Value enum: "order", "line_item",
     * "service_charge". previous_attributes.discount_class.anyOf[2] (Value): null.
     * previous_attributes.display_name (Optional): string or null. Buyer-facing promotion name
     * shown in checkout and order discount surfaces. previous_attributes.display_name.anyOf[1]
     * (Value): string. Buyer-facing promotion name shown in checkout and order discount surfaces.
     * previous_attributes.display_name.anyOf[2] (Value): null.
     * previous_attributes.eligibility_rules (Optional): {@link
     * PromotionRuleGroupPreviousAttributes} or null. Conditions an order must satisfy for the
     * promotion to apply. Omitted when the promotion has no eligibility conditions.
     * previous_attributes.eligibility_rules.anyOf[1] (Value): {@link
     * PromotionRuleGroupPreviousAttributes}. A rule group is an object with exactly one nonempty
     * all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key
     * are invalid. Omit the field for no rules, or send null where the field is clearable.
     * Responses list rules before nested groups. Under any, a nested group containing only one
     * rule reads back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups. previous_attributes.eligibility_rules.anyOf[2]
     * (Value): null. previous_attributes.exclusivity (Optional): {@link
     * PromotionExclusivityPreviousAttributes} or null. Optional group and priority used to choose
     * one promotion from competing promotions in the same group. See Promotion for the evaluation
     * order. previous_attributes.exclusivity.anyOf[1] (Value): {@link
     * PromotionExclusivityPreviousAttributes}. previous_attributes.exclusivity.anyOf[2] (Value):
     * null. previous_attributes.external_reference_id (Optional): string or null. Caller-owned
     * identifier for this resource in an external system.
     * previous_attributes.external_reference_id.anyOf[1] (Value): string. Caller-owned identifier
     * for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * previous_attributes.external_reference_id.anyOf[2] (Value): null.
     * previous_attributes.max_uses (Optional): integer or null. Maximum number of redemptions
     * across all codes and automatic applications. Omitted when there is no redemption limit.
     * previous_attributes.max_uses.anyOf[1] (Value): integer. Maximum number of redemptions across
     * all codes and automatic applications. Omitted when there is no redemption limit. Format:
     * int64. previous_attributes.max_uses.anyOf[2] (Value): null.
     * previous_attributes.max_uses_per_customer (Optional): integer or null. Maximum reserved and
     * redeemed uses per identified customer across every code and automatic or ID-based
     * application. Checked atomically when payment starts. Failed, canceled, or expired attempts
     * release their reservation; refunds do not restore uses. Counts only within the same merchant
     * and environment; live and test mode are separate. Without an identified customer, returns
     * 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer
     * limit. previous_attributes.max_uses_per_customer.anyOf[1] (Value): integer. Maximum reserved
     * and redeemed uses per identified customer across every code and automatic or ID-based
     * application. Checked atomically when payment starts. Failed, canceled, or expired attempts
     * release their reservation; refunds do not restore uses. Counts only within the same merchant
     * and environment; live and test mode are separate. Without an identified customer, returns
     * 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer
     * limit. Format: int64. minimum: 1. previous_attributes.max_uses_per_customer.anyOf[2]
     * (Value): null. previous_attributes.merchant_id (Optional): string or null. Identifier of the
     * merchant that owns the promotion. previous_attributes.merchant_id.anyOf[1] (Value): string.
     * Identifier of the merchant that owns the promotion. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". previous_attributes.merchant_id.anyOf[2] (Value): null.
     * previous_attributes.metadata (Optional): {@link MetadataMap} or null. Key-value data you
     * attach to the promotion. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.name (Optional):
     * string or null. Internal promotion name for dashboards, searching, and reporting.
     * previous_attributes.name.anyOf[1] (Value): string. Internal promotion name for dashboards,
     * searching, and reporting. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.promotion_id (Optional): string or null. Unique identifier for the
     * promotion. previous_attributes.promotion_id.anyOf[1] (Value): string. Unique identifier for
     * the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * previous_attributes.promotion_id.anyOf[2] (Value): null. previous_attributes.redemption_type
     * (Optional): string or null. Whether the promotion applies automatically when its rules match
     * or requires a promotion code. Value enum: "automatic", "code".
     * previous_attributes.redemption_type.anyOf[1] (Value): string. Whether the promotion applies
     * automatically when its rules match or requires a promotion code. Value enum: "automatic",
     * "code". previous_attributes.redemption_type.anyOf[2] (Value): null.
     * previous_attributes.schedule (Optional): {@link PromotionSchedulePreviousAttributes} or
     * null. Optional start and end times that limit when the promotion can apply.
     * previous_attributes.schedule.anyOf[1] (Value): {@link PromotionSchedulePreviousAttributes}.
     * previous_attributes.schedule.anyOf[2] (Value): null. previous_attributes.status (Optional):
     * string or null. Lifecycle status. Set active or inactive with PATCH; DELETE sets archived.
     * An active promotion can still be unavailable: read available. Value enum: "active",
     * "inactive", "archived". previous_attributes.status.anyOf[1] (Value): string. Lifecycle
     * status. Set active or inactive with PATCH; DELETE sets archived. An active promotion can
     * still be unavailable: read available. Value enum: "active", "inactive", "archived".
     * previous_attributes.status.anyOf[2] (Value): null. previous_attributes.unavailable_reason
     * (Optional): string or null. Why available is false. Present only when available is false.
     * Value enum: "inactive", "archived", "not_yet_started", "expired", "exhausted",
     * "no_active_codes". previous_attributes.unavailable_reason.anyOf[1] (Value): string. Why
     * available is false. Present only when available is false. Value enum: "inactive",
     * "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     * previous_attributes.unavailable_reason.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the promotion was last
     * updated, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * When the promotion was last updated, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.uses_count (Optional): integer or null. Number of times the promotion
     * has been redeemed. previous_attributes.uses_count.anyOf[1] (Value): integer. Number of times
     * the promotion has been redeemed. Format: int64. previous_attributes.uses_count.anyOf[2]
     * (Value): null. previous_attributes.version (Optional): integer or null. Persisted
     * owned-state version. Clock-based availability and expanded resources do not advance this
     * counter. previous_attributes.version.anyOf[1] (Value): integer. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * Format: uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `codes`. */
        "object": WebhookPromotion;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. application_method (Optional): {@link
         * PromotionApplicationMethodPreviousAttributes} or null. Discount effect and how it
         * applies to eligible items or charges. application_method.anyOf[1] (Value): {@link
         * PromotionApplicationMethodPreviousAttributes}. A flat application method whose type
         * selects its effect fields. application_method.anyOf[2] (Value): null. available
         * (Optional): boolean or null. Whether the promotion can apply right now: it is active,
         * inside its schedule, under its max_uses, and, when code-gated, has at least one
         * redeemable code. available.anyOf[1] (Value): boolean. Whether the promotion can apply
         * right now: it is active, inside its schedule, under its max_uses, and, when code-gated,
         * has at least one redeemable code. available.anyOf[2] (Value): null. codes_summary
         * (Optional): {@link PromotionCodesSummaryPreviousAttributes} or null. Read-only rollup of
         * this promotion's codes. Present only on code-gated promotions; automatic promotions omit
         * it. codes_summary.anyOf[1] (Value): {@link PromotionCodesSummaryPreviousAttributes}.
         * codes_summary.anyOf[2] (Value): null. combines_with (Optional): {@link
         * PromotionCombinesWithPreviousAttributes} or null. Which promotion discount classes this
         * promotion may share an order with. Both promotions must allow each other's class. Manual
         * discounts are ignored. See Promotion for the evaluation order. combines_with.anyOf[1]
         * (Value): {@link PromotionCombinesWithPreviousAttributes}. combines_with.anyOf[2]
         * (Value): null. created_at (Optional): string or null. When the promotion was created, as
         * an RFC3339 timestamp. created_at.anyOf[1] (Value): string. When the promotion was
         * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. description (Optional): string or null. Optional
         * description of the promotion for your own records. description.anyOf[1] (Value): string.
         * Optional description of the promotion for your own records. description.anyOf[2]
         * (Value): null. discount_class (Optional): string or null. Whether the promotion
         * discounts the order, individual line items, or service charges. Value enum: "order",
         * "line_item", "service_charge". discount_class.anyOf[1] (Value): string. Whether the
         * promotion discounts the order, individual line items, or service charges. Value enum:
         * "order", "line_item", "service_charge". discount_class.anyOf[2] (Value): null.
         * display_name (Optional): string or null. Buyer-facing promotion name shown in checkout
         * and order discount surfaces. display_name.anyOf[1] (Value): string. Buyer-facing
         * promotion name shown in checkout and order discount surfaces. display_name.anyOf[2]
         * (Value): null. eligibility_rules (Optional): {@link
         * PromotionRuleGroupPreviousAttributes} or null. Conditions an order must satisfy for the
         * promotion to apply. Omitted when the promotion has no eligibility conditions.
         * eligibility_rules.anyOf[1] (Value): {@link PromotionRuleGroupPreviousAttributes}. A rule
         * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
         * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
         * rules, or send null where the field is clearable. Responses list rules before nested
         * groups. Under any, a nested group containing only one rule reads back as that rule.
         * Under all, nested groups keep their boundaries to preserve matched_items.subtotal scope.
         * These deterministic normalizations stabilize after one round trip.
         * matched_items.subtotal sums the line items matched by the line_item.* rules in the same
         * all group, including its nested groups. eligibility_rules.anyOf[2] (Value): null.
         * exclusivity (Optional): {@link PromotionExclusivityPreviousAttributes} or null. Optional
         * group and priority used to choose one promotion from competing promotions in the same
         * group. See Promotion for the evaluation order. exclusivity.anyOf[1] (Value): {@link
         * PromotionExclusivityPreviousAttributes}. exclusivity.anyOf[2] (Value): null.
         * external_reference_id (Optional): string or null. Caller-owned identifier for this
         * resource in an external system. external_reference_id.anyOf[1] (Value): string.
         * Caller-owned identifier for this resource in an external system. maxLength: 255.
         * Example: "warehouse-1842". external_reference_id.anyOf[2] (Value): null. max_uses
         * (Optional): integer or null. Maximum number of redemptions across all codes and
         * automatic applications. Omitted when there is no redemption limit. max_uses.anyOf[1]
         * (Value): integer. Maximum number of redemptions across all codes and automatic
         * applications. Omitted when there is no redemption limit. Format: int64.
         * max_uses.anyOf[2] (Value): null. max_uses_per_customer (Optional): integer or null.
         * Maximum reserved and redeemed uses per identified customer across every code and
         * automatic or ID-based application. Checked atomically when payment starts. Failed,
         * canceled, or expired attempts release their reservation; refunds do not restore uses.
         * Counts only within the same merchant and environment; live and test mode are separate.
         * Without an identified customer, returns 409 PROMOTION_DECLINED with reason
         * customer_required. Null when there is no per-customer limit.
         * max_uses_per_customer.anyOf[1] (Value): integer. Maximum reserved and redeemed uses per
         * identified customer across every code and automatic or ID-based application. Checked
         * atomically when payment starts. Failed, canceled, or expired attempts release their
         * reservation; refunds do not restore uses. Counts only within the same merchant and
         * environment; live and test mode are separate. Without an identified customer, returns
         * 409 PROMOTION_DECLINED with reason customer_required. Null when there is no per-customer
         * limit. Format: int64. minimum: 1. max_uses_per_customer.anyOf[2] (Value): null.
         * merchant_id (Optional): string or null. Identifier of the merchant that owns the
         * promotion. merchant_id.anyOf[1] (Value): string. Identifier of the merchant that owns
         * the promotion. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value):
         * null. metadata (Optional): {@link MetadataMap} or null. Key-value data you attach to the
         * promotion. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value):
         * null. name (Optional): string or null. Internal promotion name for dashboards,
         * searching, and reporting. name.anyOf[1] (Value): string. Internal promotion name for
         * dashboards, searching, and reporting. name.anyOf[2] (Value): null. promotion_id
         * (Optional): string or null. Unique identifier for the promotion. promotion_id.anyOf[1]
         * (Value): string. Unique identifier for the promotion. Example:
         * "promo_01KEZF7C00QQ8EZ74BDYSZ315V". promotion_id.anyOf[2] (Value): null. redemption_type
         * (Optional): string or null. Whether the promotion applies automatically when its rules
         * match or requires a promotion code. Value enum: "automatic", "code".
         * redemption_type.anyOf[1] (Value): string. Whether the promotion applies automatically
         * when its rules match or requires a promotion code. Value enum: "automatic", "code".
         * redemption_type.anyOf[2] (Value): null. schedule (Optional): {@link
         * PromotionSchedulePreviousAttributes} or null. Optional start and end times that limit
         * when the promotion can apply. schedule.anyOf[1] (Value): {@link
         * PromotionSchedulePreviousAttributes}. schedule.anyOf[2] (Value): null. status
         * (Optional): string or null. Lifecycle status. Set active or inactive with PATCH; DELETE
         * sets archived. An active promotion can still be unavailable: read available. Value enum:
         * "active", "inactive", "archived". status.anyOf[1] (Value): string. Lifecycle status. Set
         * active or inactive with PATCH; DELETE sets archived. An active promotion can still be
         * unavailable: read available. Value enum: "active", "inactive", "archived".
         * status.anyOf[2] (Value): null. unavailable_reason (Optional): string or null. Why
         * available is false. Present only when available is false. Value enum: "inactive",
         * "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
         * unavailable_reason.anyOf[1] (Value): string. Why available is false. Present only when
         * available is false. Value enum: "inactive", "archived", "not_yet_started", "expired",
         * "exhausted", "no_active_codes". unavailable_reason.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the promotion was last updated, as an RFC3339
         * timestamp. updated_at.anyOf[1] (Value): string. When the promotion was last updated, as
         * an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * updated_at.anyOf[2] (Value): null. uses_count (Optional): integer or null. Number of
         * times the promotion has been redeemed. uses_count.anyOf[1] (Value): integer. Number of
         * times the promotion has been redeemed. Format: int64. uses_count.anyOf[2] (Value): null.
         * version (Optional): integer or null. Persisted owned-state version. Clock-based
         * availability and expanded resources do not advance this counter. version.anyOf[1]
         * (Value): integer. Persisted owned-state version. Clock-based availability and expanded
         * resources do not advance this counter. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Discount effect and how it applies to eligible items or charges. anyOf[1] (Value):
             * {@link PromotionApplicationMethodPreviousAttributes}. A flat application method
             * whose type selects its effect fields. anyOf[2] (Value): null.
             */
            "application_method"?: ((PromotionApplicationMethodPreviousAttributes) | (null) | (unknown));
            /**
             * Whether the promotion can apply right now: it is active, inside its schedule, under
             * its max_uses, and, when code-gated, has at least one redeemable code. anyOf[1]
             * (Value): boolean. Whether the promotion can apply right now: it is active, inside
             * its schedule, under its max_uses, and, when code-gated, has at least one redeemable
             * code. anyOf[2] (Value): null.
             */
            "available"?: ((boolean) | (null));
            /**
             * Read-only rollup of this promotion's codes. Present only on code-gated promotions;
             * automatic promotions omit it. anyOf[1] (Value): {@link
             * PromotionCodesSummaryPreviousAttributes}. anyOf[2] (Value): null.
             */
            "codes_summary"?: ((PromotionCodesSummaryPreviousAttributes) | (null));
            /**
             * Which promotion discount classes this promotion may share an order with. Both
             * promotions must allow each other's class. Manual discounts are ignored. See
             * Promotion for the evaluation order. anyOf[1] (Value): {@link
             * PromotionCombinesWithPreviousAttributes}. anyOf[2] (Value): null.
             */
            "combines_with"?: ((PromotionCombinesWithPreviousAttributes) | (null));
            /**
             * When the promotion was created, as an RFC3339 timestamp. anyOf[1] (Value): string.
             * When the promotion was created, as an RFC3339 timestamp. Format: date-time. Example:
             * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Optional description of the promotion for your own records. anyOf[1] (Value):
             * string. Optional description of the promotion for your own records. anyOf[2]
             * (Value): null.
             */
            "description"?: ((string) | (null));
            /**
             * Whether the promotion discounts the order, individual line items, or service
             * charges. Value enum: "order", "line_item", "service_charge". anyOf[1] (Value):
             * string. Whether the promotion discounts the order, individual line items, or service
             * charges. Value enum: "order", "line_item", "service_charge". anyOf[2] (Value): null.
             */
            "discount_class"?: (("order" | "line_item" | "service_charge" | (string & {})) | (null));
            /**
             * Buyer-facing promotion name shown in checkout and order discount surfaces. anyOf[1]
             * (Value): string. Buyer-facing promotion name shown in checkout and order discount
             * surfaces. anyOf[2] (Value): null.
             */
            "display_name"?: ((string) | (null));
            /**
             * Conditions an order must satisfy for the promotion to apply. Omitted when the
             * promotion has no eligibility conditions. anyOf[1] (Value): {@link
             * PromotionRuleGroupPreviousAttributes}. A rule group is an object with exactly one
             * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
             * groups, and a rules key are invalid. Omit the field for no rules, or send null where
             * the field is clearable. Responses list rules before nested groups. Under any, a
             * nested group containing only one rule reads back as that rule. Under all, nested
             * groups keep their boundaries to preserve matched_items.subtotal scope. These
             * deterministic normalizations stabilize after one round trip. matched_items.subtotal
             * sums the line items matched by the line_item.* rules in the same all group,
             * including its nested groups. anyOf[2] (Value): null.
             */
            "eligibility_rules"?: ((PromotionRuleGroupPreviousAttributes) | (null) | (unknown));
            /**
             * Optional group and priority used to choose one promotion from competing promotions
             * in the same group. See Promotion for the evaluation order. anyOf[1] (Value): {@link
             * PromotionExclusivityPreviousAttributes}. anyOf[2] (Value): null.
             */
            "exclusivity"?: ((PromotionExclusivityPreviousAttributes) | (null));
            /**
             * Caller-owned identifier for this resource in an external system. anyOf[1] (Value):
             * string. Caller-owned identifier for this resource in an external system. maxLength:
             * 255. Example: "warehouse-1842". anyOf[2] (Value): null.
             */
            "external_reference_id"?: ((string) | (null));
            /**
             * Maximum number of redemptions across all codes and automatic applications. Omitted
             * when there is no redemption limit. anyOf[1] (Value): integer. Maximum number of
             * redemptions across all codes and automatic applications. Omitted when there is no
             * redemption limit. Format: int64. anyOf[2] (Value): null.
             */
            "max_uses"?: ((number) | (null));
            /**
             * Maximum reserved and redeemed uses per identified customer across every code and
             * automatic or ID-based application. Checked atomically when payment starts. Failed,
             * canceled, or expired attempts release their reservation; refunds do not restore
             * uses. Counts only within the same merchant and environment; live and test mode are
             * separate. Without an identified customer, returns 409 PROMOTION_DECLINED with reason
             * customer_required. Null when there is no per-customer limit. anyOf[1] (Value):
             * integer. Maximum reserved and redeemed uses per identified customer across every
             * code and automatic or ID-based application. Checked atomically when payment starts.
             * Failed, canceled, or expired attempts release their reservation; refunds do not
             * restore uses. Counts only within the same merchant and environment; live and test
             * mode are separate. Without an identified customer, returns 409 PROMOTION_DECLINED
             * with reason customer_required. Null when there is no per-customer limit. Format:
             * int64. minimum: 1. anyOf[2] (Value): null.
             */
            "max_uses_per_customer"?: ((number) | (null));
            /**
             * Identifier of the merchant that owns the promotion. anyOf[1] (Value): string.
             * Identifier of the merchant that owns the promotion. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Key-value data you attach to the promotion. anyOf[1] (Value): {@link MetadataMap}.
             * anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Internal promotion name for dashboards, searching, and reporting. anyOf[1] (Value):
             * string. Internal promotion name for dashboards, searching, and reporting. anyOf[2]
             * (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Unique identifier for the promotion. anyOf[1] (Value): string. Unique identifier for
             * the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". anyOf[2] (Value): null.
             */
            "promotion_id"?: ((string) | (null));
            /**
             * Whether the promotion applies automatically when its rules match or requires a
             * promotion code. Value enum: "automatic", "code". anyOf[1] (Value): string. Whether
             * the promotion applies automatically when its rules match or requires a promotion
             * code. Value enum: "automatic", "code". anyOf[2] (Value): null.
             */
            "redemption_type"?: (("automatic" | "code" | (string & {})) | (null));
            /**
             * Optional start and end times that limit when the promotion can apply. anyOf[1]
             * (Value): {@link PromotionSchedulePreviousAttributes}. anyOf[2] (Value): null.
             */
            "schedule"?: ((PromotionSchedulePreviousAttributes) | (null));
            /**
             * Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active
             * promotion can still be unavailable: read available. Value enum: "active",
             * "inactive", "archived". anyOf[1] (Value): string. Lifecycle status. Set active or
             * inactive with PATCH; DELETE sets archived. An active promotion can still be
             * unavailable: read available. Value enum: "active", "inactive", "archived". anyOf[2]
             * (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * Why available is false. Present only when available is false. Value enum:
             * "inactive", "archived", "not_yet_started", "expired", "exhausted",
             * "no_active_codes". anyOf[1] (Value): string. Why available is false. Present only
             * when available is false. Value enum: "inactive", "archived", "not_yet_started",
             * "expired", "exhausted", "no_active_codes". anyOf[2] (Value): null.
             */
            "unavailable_reason"?: (("inactive"
                | "archived"
                | "not_yet_started"
                | "expired"
                | "exhausted"
                | "no_active_codes"
                | (string & {}))
                | (null));
            /**
             * When the promotion was last updated, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the promotion was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Number of times the promotion has been redeemed. anyOf[1] (Value): integer. Number
             * of times the promotion has been redeemed. Format: int64. anyOf[2] (Value): null.
             */
            "uses_count"?: ((number) | (null));
            /**
             * Persisted owned-state version. Clock-based availability and expanded resources do
             * not advance this counter. anyOf[1] (Value): integer. Persisted owned-state version.
             * Clock-based availability and expanded resources do not advance this counter. Format:
             * uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
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
     * included by catalog target filters. pattern: ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: InputValue<string>;
    /**
     * Filter to promotions with an explicit variant target rule. Universal promotions are not
     * included by catalog target filters. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: InputValue<string>;
    /**
     * Filter to promotions with an explicit bundle target rule. Universal promotions are not
     * included by catalog target filters. pattern: ^bun_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
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
export type PublicDownloadPreviousAttributes = {
    /**
     * When the download stops working: 24 hours after the report succeeded. The report keeps
     * status succeeded and this download object afterward; create a new report to get the file
     * again. anyOf[1] (Value): string. When the download stops working: 24 hours after the report
     * succeeded. The report keeps status succeeded and this download object afterward; create a
     * new report to get the file again. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * anyOf[2] (Value): null.
     */
    "expires_at"?: ((string) | (null));
    /**
     * Identifier of this download, the last segment of url. anyOf[1] (Value): string. Identifier
     * of this download, the last segment of url. pattern: ^rdl_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "rdl_01KEZF7C003GGGDW1N5QT46JDZ". anyOf[2] (Value): null.
     */
    "report_download_id"?: ((string) | (null));
    /**
     * Flint API URL for the file, not the file itself. Call it with the same API key; Flint
     * answers 307 with a redirect to a private file URL that works for a few minutes. Request url
     * again each time you need the file. anyOf[1] (Value): string. Flint API URL for the file, not
     * the file itself. Call it with the same API key; Flint answers 307 with a redirect to a
     * private file URL that works for a few minutes. Request url again each time you need the
     * file. anyOf[2] (Value): null.
     */
    "url"?: ((string) | (null));
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
     * Largest amount a buyer can give on a donation link. Must be greater than zero and greater
     * than or equal to donation_min_amount_money. Omit on create for no maximum. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValue;
    /**
     * Smallest amount a buyer can give on a donation link. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValue;
    /**
     * Amounts a donation link offers as one-tap choices. Use the same currency for all suggested
     * amounts and both bounds. [] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
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
    /**
     * RFC3339 timestamp when buyers can first start a checkout from this link. Stored to
     * nanosecond precision. Before it, resolve fails with ACTION_NOT_ALLOWED and reason
     * sales_not_started. Must be earlier than the link’s sales end, including the event start when
     * no explicit end is set. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "sales_start_at"?: string;
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
    /** True before the payment link’s scheduled sales start. Omitted otherwise. */
    "is_before_sales_start"?: boolean;
    /**
     * True when the link's sales end has passed: payment_link.sales_end_at, or
     * event_config.event_at for an event link without sales_end_at. Resolve then fails with
     * `ACTION_NOT_ALLOWED` and reason `not_offered`.
     */
    "is_past_sales_end": boolean;
    /**
     * True for an event when its overall capacity or every tier's capacity is exhausted. For other
     * active links with tracked demand, true when any catalog line cannot be bought at its minimum
     * quantity from the effective routing source, including the single-Location fallback.
     * Untracked and ad hoc lines do not count. A choice line counts only when every offered
     * variant is sold out. Fixed locations use available stock; policies use their allocatable
     * locations. Stock is not reserved by this read.
     */
    "is_sold_out": boolean;
    /** The merchant's icon. An image with its URL, size, and alt text. */
    "merchant_icon"?: Image;
    /** The merchant's logo. An image with its URL, size, and alt text. */
    "merchant_logo"?: Image;
    /** The merchant's name. */
    "merchant_name"?: string;
    /**
     * How the buyer can reach the merchant for help: the support email, phone, and URL the
     * merchant set. Omitted when the merchant set none. The merchant's support contact. Each field
     * is omitted when the merchant has not set it.
     */
    "merchant_support"?: CheckoutMerchantSupport;
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
     * product name, variant name, SKU, selected options, and whether it is available for sale.
     */
    "variant"?: BundleComponentVariantSummary;
    /** ID of the component's variant. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
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
    /**
     * Current catalog reference unit price for sale display. Null when no variant compare-at price
     * is set. Does not affect the amount charged. anyOf[1] (Value): {@link MoneyValue}. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value):
     * null.
     */
    "compare_at_price_money": ((MoneyValue) | (null));
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
    /** Whether the buyer can select more than one unit of an option. Omitted when they can't. */
    "allow_quantities"?: boolean;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "max_quantity"?: number;
    /**
     * Most options the buyer can select from a list group. Omitted when the group sets no limit.
     * Format: int32.
     */
    "max_selected"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "max_total_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "min_quantity"?: number;
    /**
     * Fewest options the buyer must select from a list group. Omitted when the group sets no
     * minimum. Format: int32.
     */
    "min_selected"?: number;
    /** ID of the modifier group. Example: "mg_01KEZF7C00XKJJATARG7KDBYM9". */
    "modifier_group_id": string;
    /**
     * Whether the buyer chooses from a list of options or enters text. Value enum: "list", "text".
     */
    "modifier_group_type": "list" | "text" | (string & {});
    /** Name of the group shown to the buyer. */
    "name": string;
    /**
     * Options the buyer can choose from in a list group. Empty for a text group. [] (Value):
     * {@link PublicResolvedModifierOption}. One selectable option in a resolved modifier group,
     * with its price change, tax category, and whether it is available.
     */
    "options"?: Array<PublicResolvedModifierOption>;
    /**
     * Position of the group among the groups offered for the line item. Lower values appear first.
     * Format: int32.
     */
    "position"?: number;
    /**
     * How the price of a selected option scales with the line item's quantity. Value enum:
     * "per_item", "per_line".
     */
    "pricing_scope"?: "per_item" | "per_line" | (string & {});
    /**
     * Whether the buyer's selections from this group appear in fulfillment details. Omitted when
     * they don't.
     */
    "show_on_fulfillment"?: boolean;
    /**
     * Whether the buyer's selections from this group appear on receipts. Omitted when they don't.
     */
    "show_on_receipt"?: boolean;
    /**
     * Entry rules for a text group. Omitted for a list group. Input rules for a free-text modifier
     * group on a payment link line item: required, multiline, and length limits.
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
    "expected_return_policy_version": number;
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
    "expected_return_policy_version": number;
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
export type PurchasedGiftCardPreviousAttributes = {
    /**
     * ID of the gift card issued for the purchased unit. anyOf[1] (Value): string. ID of the gift
     * card issued for the purchased unit. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2]
     * (Value): null.
     */
    "gift_card_id"?: ((string) | (null));
    /**
     * Last four characters of the card's current code. anyOf[1] (Value): string. Last four
     * characters of the card's current code. anyOf[2] (Value): null.
     */
    "last4"?: ((string) | (null));
    /**
     * ID of the card that this card replaces. Set when restoring reversed value needed a
     * replacement card. anyOf[1] (Value): string. ID of the card that this card replaces. Set when
     * restoring reversed value needed a replacement card. Example:
     * "gc_01KEZF7C00RT1618WYBM1Y94CG". anyOf[2] (Value): null.
     */
    "original_gift_card_id"?: ((string) | (null));
    /**
     * What restored the reversed value onto a replacement card. Value enum: "manual_recollection",
     * "processor_recollection". anyOf[1] (Value): string. What restored the reversed value onto a
     * replacement card. Value enum: "manual_recollection", "processor_recollection". anyOf[2]
     * (Value): null.
     */
    "restoration_reason"?: (("manual_recollection" | "processor_recollection" | (string & {})) | (null));
    /**
     * Which unit of the line item's quantity this card was issued for, starting at 1. anyOf[1]
     * (Value): integer. Which unit of the line item's quantity this card was issued for, starting
     * at 1. Format: int64. minimum: 1. anyOf[2] (Value): null.
     */
    "unit_ordinal"?: ((number) | (null));
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
export type QuantityPriceBreakPreviousAttributes = {
    /**
     * Minimum whole-number quantity on one line for this price to apply; fractional quantities are
     * not supported. Must strictly increase between entries. anyOf[1] (Value): integer. Minimum
     * whole-number quantity on one line for this price to apply; fractional quantities are not
     * supported. Must strictly increase between entries. Format: int64. minimum: 2. anyOf[2]
     * (Value): null.
     */
    "minimum_quantity"?: ((number) | (null));
    /**
     * Net unit price in the base unit price's currency. Must be greater than zero and below the
     * preceding price, starting with the base unit price. anyOf[1] (Value): {@link
     * MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     */
    "unit_price_money"?: ((MoneyValuePreviousAttributes) | (null));
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
/** A card reader or Tap to Pay phone that takes in-person payments at a location. */
export type Reader = {
    /**
     * The payment intent presented on the reader now. Omitted while the reader is idle. It follows
     * the payment, so it doesn't advance the reader's `version` or send a reader event. Example:
     * "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "active_payment_intent_id"?: string;
    /**
     * Smart readers only, and omitted once the reader is archived. Observed reader state: it
     * changes without a write, doesn't advance `version`, and sends no event. Don't gate a sale on
     * it: Flint checks the reader itself before it sends a payment. Observed connectivity of a
     * smart reader. Flint refreshes it when it sends or cancels a payment or simulates one, and
     * every five minutes for active live smart readers.
     */
    "connectivity"?: ReaderConnectivity;
    /** When the reader was registered. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the
     * phone it runs on. Omitted when none is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     */
    "device_id"?: string;
    /**
     * `true` for a sandbox simulated reader, registered with `registration_code: simulated-s700`.
     */
    "is_simulated": boolean;
    /**
     * The location the reader is at. Set at registration and never changed: to move a reader,
     * archive it and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
    /**
     * Your key-value pairs for the reader. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata": MetadataMap;
    /**
     * The smart reader's model, read from the reader at registration. Smart readers only. Value
     * enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     */
    "model"?: "stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {});
    /** Your label for the reader. minLength: 1. maxLength: 255. */
    "name": string;
    /** Unique identifier for the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
    "reader_id": string;
    /**
     * The smart reader's serial number, read from the reader at registration. Smart readers only.
     */
    "serial_number"?: string;
    /** Whether the reader can take payments. Value enum: "active", "archived". */
    "status": "active" | "archived" | (string & {});
    /**
     * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay reader is
     * a phone driven by the Stripe Terminal SDK in your app. Value enum: "smart_reader",
     * "tap_to_pay".
     */
    "type": "smart_reader" | "tap_to_pay" | (string & {});
    /** When the reader last changed. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Persisted version of this resource's owned state. Expanded resources and external
     * observations can change independently. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type ReaderArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "is_simulated"?: ((boolean) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            "name"?: ((string) | (null));
            "reader_id"?: ((string) | (null));
            "serial_number"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "reader.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "is_simulated"?: ((boolean) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            "name"?: ((string) | (null));
            "reader_id"?: ((string) | (null));
            "serial_number"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "reader.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "reader.archived";
});
/**
 * The `reader.archived` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReaderArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookReader}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_intent_id`. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.connectivity (Optional): {@link
     * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
     * reader is archived. Observed reader state: it changes without a write, doesn't advance
     * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
     * before it sends a payment. previous_attributes.connectivity.anyOf[1] (Value): {@link
     * ReaderConnectivityPreviousAttributes}. previous_attributes.connectivity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the reader was
     * registered. previous_attributes.created_at.anyOf[1] (Value): string. When the reader was
     * registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.device_id
     * (Optional): string or null. The register, kiosk or phone the reader takes payments for; on a
     * Tap to Pay reader, the phone it runs on. Omitted when none is set.
     * previous_attributes.device_id.anyOf[1] (Value): string. The register, kiosk or phone the
     * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none
     * is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2]
     * (Value): null. previous_attributes.is_simulated (Optional): boolean or null. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[1] (Value): boolean. `true` for a sandbox simulated
     * reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[2] (Value): null. previous_attributes.location_id
     * (Optional): string or null. The location the reader is at. Set at registration and never
     * changed: to move a reader, archive it and register it again.
     * previous_attributes.location_id.anyOf[1] (Value): string. The location the reader is at. Set
     * at registration and never changed: to move a reader, archive it and register it again.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.location_id.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Your key-value
     * pairs for the reader. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.model (Optional):
     * string or null. The smart reader's model, read from the reader at registration. Smart
     * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     * previous_attributes.model.anyOf[1] (Value): string. The smart reader's model, read from the
     * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
     * "stripe_reader_s710", "other". previous_attributes.model.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Your label for the reader.
     * previous_attributes.name.anyOf[1] (Value): string. Your label for the reader. minLength: 1.
     * maxLength: 255. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.reader_id (Optional): string or null. Unique identifier for the reader.
     * previous_attributes.reader_id.anyOf[1] (Value): string. Unique identifier for the reader.
     * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". previous_attributes.reader_id.anyOf[2] (Value):
     * null. previous_attributes.serial_number (Optional): string or null. The smart reader's
     * serial number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[1] (Value): string. The smart reader's serial
     * number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Whether the reader can take payments. Value enum: "active",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Whether the reader can take
     * payments. Value enum: "active", "archived". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. What kind of reader it is. A
     * smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
     * previous_attributes.type.anyOf[1] (Value): string. What kind of reader it is. A smart reader
     * is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK
     * in your app. Value enum: "smart_reader", "tap_to_pay". previous_attributes.type.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. When the reader
     * last changed. previous_attributes.updated_at.anyOf[1] (Value): string. When the reader last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`.
         */
        "object": WebhookReader;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. connectivity (Optional): {@link
         * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
         * reader is archived. Observed reader state: it changes without a write, doesn't advance
         * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
         * before it sends a payment. connectivity.anyOf[1] (Value): {@link
         * ReaderConnectivityPreviousAttributes}. connectivity.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the reader was registered. created_at.anyOf[1] (Value):
         * string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. device_id (Optional): string
         * or null. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. device_id.anyOf[1] (Value):
         * string. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. Example:
         * "dev_01KEZF7C0051ZP8MZSGHP989F6". device_id.anyOf[2] (Value): null. is_simulated
         * (Optional): boolean or null. `true` for a sandbox simulated reader, registered with
         * `registration_code: simulated-s700`. is_simulated.anyOf[1] (Value): boolean. `true` for
         * a sandbox simulated reader, registered with `registration_code: simulated-s700`.
         * is_simulated.anyOf[2] (Value): null. location_id (Optional): string or null. The
         * location the reader is at. Set at registration and never changed: to move a reader,
         * archive it and register it again. location_id.anyOf[1] (Value): string. The location the
         * reader is at. Set at registration and never changed: to move a reader, archive it and
         * register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Your key-value pairs
         * for the reader. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. model (Optional): string or null. The smart reader's model, read from the
         * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". model.anyOf[1] (Value): string. The smart reader's model,
         * read from the reader at registration. Smart readers only. Value enum:
         * "stripe_reader_s700", "stripe_reader_s710", "other". model.anyOf[2] (Value): null. name
         * (Optional): string or null. Your label for the reader. name.anyOf[1] (Value): string.
         * Your label for the reader. minLength: 1. maxLength: 255. name.anyOf[2] (Value): null.
         * reader_id (Optional): string or null. Unique identifier for the reader.
         * reader_id.anyOf[1] (Value): string. Unique identifier for the reader. Example:
         * "rdr_01KEZF7C007JA0G24M7SD6P46C". reader_id.anyOf[2] (Value): null. serial_number
         * (Optional): string or null. The smart reader's serial number, read from the reader at
         * registration. Smart readers only. serial_number.anyOf[1] (Value): string. The smart
         * reader's serial number, read from the reader at registration. Smart readers only.
         * serial_number.anyOf[2] (Value): null. status (Optional): string or null. Whether the
         * reader can take payments. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Whether the reader can take payments. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. type (Optional): string or null. What kind of reader it
         * is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by
         * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
         * type.anyOf[1] (Value): string. What kind of reader it is. A smart reader is driven from
         * your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your
         * app. Value enum: "smart_reader", "tap_to_pay". type.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the reader last changed. updated_at.anyOf[1] (Value):
         * string. When the reader last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * anyOf[1] (Value): {@link ReaderConnectivityPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            /**
             * When the reader was registered. anyOf[1] (Value): string. When the reader was
             * registered. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. anyOf[1] (Value): string. The
             * register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the
             * phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`. anyOf[1] (Value): boolean. `true` for a sandbox simulated reader,
             * registered with `registration_code: simulated-s700`. anyOf[2] (Value): null.
             */
            "is_simulated"?: ((boolean) | (null));
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. anyOf[1] (Value): string. The location the
             * reader is at. Set at registration and never changed: to move a reader, archive it
             * and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Your key-value pairs for the reader. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other". anyOf[1] (Value):
             * string. The smart reader's model, read from the reader at registration. Smart
             * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             * anyOf[2] (Value): null.
             */
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            /**
             * Your label for the reader. anyOf[1] (Value): string. Your label for the reader.
             * minLength: 1. maxLength: 255. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Unique identifier for the reader. anyOf[1] (Value): string. Unique identifier for
             * the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". anyOf[2] (Value): null.
             */
            "reader_id"?: ((string) | (null));
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only. anyOf[1] (Value): string. The smart reader's serial number, read from
             * the reader at registration. Smart readers only. anyOf[2] (Value): null.
             */
            "serial_number"?: ((string) | (null));
            /**
             * Whether the reader can take payments. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Whether the reader can take payments. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay". anyOf[1] (Value): string. What kind of reader it is. A
             * smart reader is driven from your server; a Tap to Pay reader is a phone driven by
             * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
             * anyOf[2] (Value): null.
             */
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            /**
             * When the reader last changed. anyOf[1] (Value): string. When the reader last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "reader.archived". */
    "event_type"?: "reader.archived";
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
 * The `reader.archived` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReaderArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookReader}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_intent_id`. previous_attributes (Optional):
     * object. Previous values of changed top-level fields in data.object, at this delivery's API
     * version. Nested changes include the whole previous top-level value. A value is null when the
     * field was absent before the change. Omitted when Flint did not record the previous state,
     * including synthetic test events. previous_attributes.connectivity (Optional): {@link
     * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
     * reader is archived. Observed reader state: it changes without a write, doesn't advance
     * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
     * before it sends a payment. previous_attributes.connectivity.anyOf[1] (Value): {@link
     * ReaderConnectivityPreviousAttributes}. previous_attributes.connectivity.anyOf[2] (Value):
     * null. previous_attributes.created_at (Optional): string or null. When the reader was
     * registered. previous_attributes.created_at.anyOf[1] (Value): string. When the reader was
     * registered. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.created_at.anyOf[2] (Value): null. previous_attributes.device_id
     * (Optional): string or null. The register, kiosk or phone the reader takes payments for; on a
     * Tap to Pay reader, the phone it runs on. Omitted when none is set.
     * previous_attributes.device_id.anyOf[1] (Value): string. The register, kiosk or phone the
     * reader takes payments for; on a Tap to Pay reader, the phone it runs on. Omitted when none
     * is set. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". previous_attributes.device_id.anyOf[2]
     * (Value): null. previous_attributes.is_simulated (Optional): boolean or null. `true` for a
     * sandbox simulated reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[1] (Value): boolean. `true` for a sandbox simulated
     * reader, registered with `registration_code: simulated-s700`.
     * previous_attributes.is_simulated.anyOf[2] (Value): null. previous_attributes.location_id
     * (Optional): string or null. The location the reader is at. Set at registration and never
     * changed: to move a reader, archive it and register it again.
     * previous_attributes.location_id.anyOf[1] (Value): string. The location the reader is at. Set
     * at registration and never changed: to move a reader, archive it and register it again.
     * Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". previous_attributes.location_id.anyOf[2] (Value):
     * null. previous_attributes.metadata (Optional): {@link MetadataMap} or null. Your key-value
     * pairs for the reader. previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.model (Optional):
     * string or null. The smart reader's model, read from the reader at registration. Smart
     * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
     * previous_attributes.model.anyOf[1] (Value): string. The smart reader's model, read from the
     * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
     * "stripe_reader_s710", "other". previous_attributes.model.anyOf[2] (Value): null.
     * previous_attributes.name (Optional): string or null. Your label for the reader.
     * previous_attributes.name.anyOf[1] (Value): string. Your label for the reader. minLength: 1.
     * maxLength: 255. previous_attributes.name.anyOf[2] (Value): null.
     * previous_attributes.reader_id (Optional): string or null. Unique identifier for the reader.
     * previous_attributes.reader_id.anyOf[1] (Value): string. Unique identifier for the reader.
     * Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". previous_attributes.reader_id.anyOf[2] (Value):
     * null. previous_attributes.serial_number (Optional): string or null. The smart reader's
     * serial number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[1] (Value): string. The smart reader's serial
     * number, read from the reader at registration. Smart readers only.
     * previous_attributes.serial_number.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Whether the reader can take payments. Value enum: "active",
     * "archived". previous_attributes.status.anyOf[1] (Value): string. Whether the reader can take
     * payments. Value enum: "active", "archived". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.type (Optional): string or null. What kind of reader it is. A
     * smart reader is driven from your server; a Tap to Pay reader is a phone driven by the Stripe
     * Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
     * previous_attributes.type.anyOf[1] (Value): string. What kind of reader it is. A smart reader
     * is driven from your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK
     * in your app. Value enum: "smart_reader", "tap_to_pay". previous_attributes.type.anyOf[2]
     * (Value): null. previous_attributes.updated_at (Optional): string or null. When the reader
     * last changed. previous_attributes.updated_at.anyOf[1] (Value): string. When the reader last
     * changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * previous_attributes.updated_at.anyOf[2] (Value): null. previous_attributes.version
     * (Optional): integer or null. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted version of this resource's
     * owned state. Expanded resources and external observations can change independently. Format:
     * uint64. minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`.
         */
        "object": WebhookReader;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. connectivity (Optional): {@link
         * ReaderConnectivityPreviousAttributes} or null. Smart readers only, and omitted once the
         * reader is archived. Observed reader state: it changes without a write, doesn't advance
         * `version`, and sends no event. Don't gate a sale on it: Flint checks the reader itself
         * before it sends a payment. connectivity.anyOf[1] (Value): {@link
         * ReaderConnectivityPreviousAttributes}. connectivity.anyOf[2] (Value): null. created_at
         * (Optional): string or null. When the reader was registered. created_at.anyOf[1] (Value):
         * string. When the reader was registered. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at.anyOf[2] (Value): null. device_id (Optional): string
         * or null. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. device_id.anyOf[1] (Value):
         * string. The register, kiosk or phone the reader takes payments for; on a Tap to Pay
         * reader, the phone it runs on. Omitted when none is set. Example:
         * "dev_01KEZF7C0051ZP8MZSGHP989F6". device_id.anyOf[2] (Value): null. is_simulated
         * (Optional): boolean or null. `true` for a sandbox simulated reader, registered with
         * `registration_code: simulated-s700`. is_simulated.anyOf[1] (Value): boolean. `true` for
         * a sandbox simulated reader, registered with `registration_code: simulated-s700`.
         * is_simulated.anyOf[2] (Value): null. location_id (Optional): string or null. The
         * location the reader is at. Set at registration and never changed: to move a reader,
         * archive it and register it again. location_id.anyOf[1] (Value): string. The location the
         * reader is at. Set at registration and never changed: to move a reader, archive it and
         * register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". location_id.anyOf[2]
         * (Value): null. metadata (Optional): {@link MetadataMap} or null. Your key-value pairs
         * for the reader. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2]
         * (Value): null. model (Optional): string or null. The smart reader's model, read from the
         * reader at registration. Smart readers only. Value enum: "stripe_reader_s700",
         * "stripe_reader_s710", "other". model.anyOf[1] (Value): string. The smart reader's model,
         * read from the reader at registration. Smart readers only. Value enum:
         * "stripe_reader_s700", "stripe_reader_s710", "other". model.anyOf[2] (Value): null. name
         * (Optional): string or null. Your label for the reader. name.anyOf[1] (Value): string.
         * Your label for the reader. minLength: 1. maxLength: 255. name.anyOf[2] (Value): null.
         * reader_id (Optional): string or null. Unique identifier for the reader.
         * reader_id.anyOf[1] (Value): string. Unique identifier for the reader. Example:
         * "rdr_01KEZF7C007JA0G24M7SD6P46C". reader_id.anyOf[2] (Value): null. serial_number
         * (Optional): string or null. The smart reader's serial number, read from the reader at
         * registration. Smart readers only. serial_number.anyOf[1] (Value): string. The smart
         * reader's serial number, read from the reader at registration. Smart readers only.
         * serial_number.anyOf[2] (Value): null. status (Optional): string or null. Whether the
         * reader can take payments. Value enum: "active", "archived". status.anyOf[1] (Value):
         * string. Whether the reader can take payments. Value enum: "active", "archived".
         * status.anyOf[2] (Value): null. type (Optional): string or null. What kind of reader it
         * is. A smart reader is driven from your server; a Tap to Pay reader is a phone driven by
         * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
         * type.anyOf[1] (Value): string. What kind of reader it is. A smart reader is driven from
         * your server; a Tap to Pay reader is a phone driven by the Stripe Terminal SDK in your
         * app. Value enum: "smart_reader", "tap_to_pay". type.anyOf[2] (Value): null. updated_at
         * (Optional): string or null. When the reader last changed. updated_at.anyOf[1] (Value):
         * string. When the reader last changed. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null. version (Optional): integer
         * or null. Persisted version of this resource's owned state. Expanded resources and
         * external observations can change independently. version.anyOf[1] (Value): integer.
         * Persisted version of this resource's owned state. Expanded resources and external
         * observations can change independently. Format: uint64. minimum: 1. version.anyOf[2]
         * (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Smart readers only, and omitted once the reader is archived. Observed reader state:
             * it changes without a write, doesn't advance `version`, and sends no event. Don't
             * gate a sale on it: Flint checks the reader itself before it sends a payment.
             * anyOf[1] (Value): {@link ReaderConnectivityPreviousAttributes}. anyOf[2] (Value):
             * null.
             */
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            /**
             * When the reader was registered. anyOf[1] (Value): string. When the reader was
             * registered. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value):
             * null.
             */
            "created_at"?: ((string) | (null));
            /**
             * The register, kiosk or phone the reader takes payments for; on a Tap to Pay reader,
             * the phone it runs on. Omitted when none is set. anyOf[1] (Value): string. The
             * register, kiosk or phone the reader takes payments for; on a Tap to Pay reader, the
             * phone it runs on. Omitted when none is set. Example:
             * "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
             */
            "device_id"?: ((string) | (null));
            /**
             * `true` for a sandbox simulated reader, registered with `registration_code:
             * simulated-s700`. anyOf[1] (Value): boolean. `true` for a sandbox simulated reader,
             * registered with `registration_code: simulated-s700`. anyOf[2] (Value): null.
             */
            "is_simulated"?: ((boolean) | (null));
            /**
             * The location the reader is at. Set at registration and never changed: to move a
             * reader, archive it and register it again. anyOf[1] (Value): string. The location the
             * reader is at. Set at registration and never changed: to move a reader, archive it
             * and register it again. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value):
             * null.
             */
            "location_id"?: ((string) | (null));
            /**
             * Your key-value pairs for the reader. anyOf[1] (Value): {@link MetadataMap}. anyOf[2]
             * (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * The smart reader's model, read from the reader at registration. Smart readers only.
             * Value enum: "stripe_reader_s700", "stripe_reader_s710", "other". anyOf[1] (Value):
             * string. The smart reader's model, read from the reader at registration. Smart
             * readers only. Value enum: "stripe_reader_s700", "stripe_reader_s710", "other".
             * anyOf[2] (Value): null.
             */
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            /**
             * Your label for the reader. anyOf[1] (Value): string. Your label for the reader.
             * minLength: 1. maxLength: 255. anyOf[2] (Value): null.
             */
            "name"?: ((string) | (null));
            /**
             * Unique identifier for the reader. anyOf[1] (Value): string. Unique identifier for
             * the reader. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". anyOf[2] (Value): null.
             */
            "reader_id"?: ((string) | (null));
            /**
             * The smart reader's serial number, read from the reader at registration. Smart
             * readers only. anyOf[1] (Value): string. The smart reader's serial number, read from
             * the reader at registration. Smart readers only. anyOf[2] (Value): null.
             */
            "serial_number"?: ((string) | (null));
            /**
             * Whether the reader can take payments. Value enum: "active", "archived". anyOf[1]
             * (Value): string. Whether the reader can take payments. Value enum: "active",
             * "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "archived" | (string & {})) | (null));
            /**
             * What kind of reader it is. A smart reader is driven from your server; a Tap to Pay
             * reader is a phone driven by the Stripe Terminal SDK in your app. Value enum:
             * "smart_reader", "tap_to_pay". anyOf[1] (Value): string. What kind of reader it is. A
             * smart reader is driven from your server; a Tap to Pay reader is a phone driven by
             * the Stripe Terminal SDK in your app. Value enum: "smart_reader", "tap_to_pay".
             * anyOf[2] (Value): null.
             */
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            /**
             * When the reader last changed. anyOf[1] (Value): string. When the reader last
             * changed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Persisted version of this resource's owned state. Expanded resources and external
             * observations can change independently. anyOf[1] (Value): integer. Persisted version
             * of this resource's owned state. Expanded resources and external observations can
             * change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
             */
            "version"?: ((number) | (null));
        });
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "reader.archived". */
    "event_type"?: "reader.archived";
});
/**
 * A Tap to Pay connection session: a fresh single-use Stripe Terminal connection token for the
 * reader's location, returned only in the response that creates it.
 */
export type ReaderConnectionSession = {
    /**
     * What the Stripe Terminal SDK takes. Appears only in this response, never on the reader, in
     * lists or in webhooks. Stripe Terminal SDK inputs for one connection.
     */
    "client_session": ReaderConnectionSessionClientSession;
    /** The reader's Flint location. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". */
    "location_id": string;
    /** The Tap to Pay reader the session is for. Example: "rdr_01KEZF7C007JA0G24M7SD6P46C". */
    "reader_id": string;
};
/** Stripe Terminal SDK inputs for one connection. */
export type ReaderConnectionSessionClientSession = {
    /**
     * Inputs for the Stripe Terminal SDK. Return `connection_token` from the SDK's
     * `fetchConnectionToken` callback, and pass `location_id` to
     * `TapToPayConnectionConfiguration`.
     */
    "stripe": ReaderConnectionSessionStripe;
};
/** A response containing `ReaderConnectionSession` data. */
export type ReaderConnectionSessionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A Tap to Pay connection
     * session: a fresh single-use Stripe Terminal connection token for the reader's location,
     * returned only in the response that creates it.
     */
    "data": ReaderConnectionSession;
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
 * Return `connection_token` from the SDK's `fetchConnectionToken` callback, and pass `location_id`
 * to `TapToPayConnectionConfiguration`.
 */
export type ReaderConnectionSessionStripe = {
    /**
     * Single-use Stripe Terminal connection token, scoped to the reader's Stripe location. Create
     * another session when the SDK asks for a new token. minLength: 1.
     */
    "connection_token": string;
    /**
     * The Stripe Terminal location ID the SDK's Tap to Pay connection requires. This is a Stripe
     * ID, not a Flint location ID. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     */
    "location_id": string;
};
/**
 * Observed connectivity of a smart reader. Flint refreshes it when it sends or cancels a payment
 * or simulates one, and every five minutes for active live smart readers.
 */
export type ReaderConnectivity = {
    /**
     * When the reader last reached Stripe. Omitted when it never has. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "last_seen_at"?: string | null;
    /** When Flint observed this. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "observed_at": string;
    /**
     * Whether the reader was reaching Stripe when Flint last observed it. Value enum: "online",
     * "offline".
     */
    "status": "online" | "offline" | (string & {});
};
export type ReaderConnectivityPreviousAttributes = {
    /**
     * When the reader last reached Stripe. Omitted when it never has. anyOf[1] (Value): string.
     * When the reader last reached Stripe. Omitted when it never has. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "last_seen_at"?: ((string) | (null));
    /**
     * When Flint observed this. anyOf[1] (Value): string. When Flint observed this. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     */
    "observed_at"?: ((string) | (null));
    /**
     * Whether the reader was reaching Stripe when Flint last observed it. Value enum: "online",
     * "offline". anyOf[1] (Value): string. Whether the reader was reaching Stripe when Flint last
     * observed it. Value enum: "online", "offline". anyOf[2] (Value): null.
     */
    "status"?: (("online" | "offline" | (string & {})) | (null));
};
export type ReaderCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "reader.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "reader.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "reader.created";
});
/**
 * The `reader.created` webhook payload for the `installed_merchants` event source. Fields shared
 * by partner webhook payloads.
 */
export type ReaderCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookReader}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_intent_id`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`.
         */
        "object": WebhookReader;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "reader.created". */
    "event_type"?: "reader.created";
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
 * The `reader.created` webhook payload for the `merchant` event source. Fields shared by merchant
 * webhook payloads.
 */
export type ReaderCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookReader}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `active_payment_intent_id`.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit these fields:
         * `active_payment_intent_id`.
         */
        "object": WebhookReader;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "reader.created". */
    "event_type"?: "reader.created";
});
/** A page of `Reader` objects. */
export type ReaderListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * Reader}. A card reader or Tap to Pay phone that takes in-person payments at a location.
     */
    "data": Array<Reader>;
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
/** Tip collection settings for a payment presented on a smart reader. */
export type ReaderPaymentSourceTip = {
    /**
     * Show the smart reader's tip screen before the card. Not accepted on Tap to Pay readers, on
     * an order with a requested tip, or on a payment that already carries a tip. Default: false.
     */
    "enabled": boolean;
};
/** Tip collection settings for a payment presented on a smart reader. */
export type ReaderPaymentSourceTipInput = ReaderPaymentSourceTip;
/** A response containing `Reader` data. */
export type ReaderResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A card reader or Tap to
     * Pay phone that takes in-person payments at a location.
     */
    "data": Reader;
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
export type ReaderUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "is_simulated"?: ((boolean) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            "name"?: ((string) | (null));
            "reader_id"?: ((string) | (null));
            "serial_number"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "reader.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookReader;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "connectivity"?: ((ReaderConnectivityPreviousAttributes) | (null));
            "created_at"?: ((string) | (null));
            "device_id"?: ((string) | (null));
            "is_simulated"?: ((boolean) | (null));
            "location_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "model"?: (("stripe_reader_s700" | "stripe_reader_s710" | "other" | (string & {})) | (null));
            "name"?: ((string) | (null));
            "reader_id"?: ((string) | (null));
            "serial_number"?: ((string) | (null));
            "status"?: (("active" | "archived" | (string & {})) | (null));
            "type"?: (("smart_reader" | "tap_to_pay" | (string & {})) | (null));
            "updated_at"?: ((string) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "reader.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "reader.updated";
});

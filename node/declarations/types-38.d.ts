import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { Promotion } from './types-37.js';
import type { ResponseMeta } from './types-40.js';
import type { InputValue } from '../runtime.js';
import type { CreatePromotionCodeRequestInput, CreatePromotionRequestInput } from './types-8.js';
import type { UpdatePromotionCodeRequestInput, UpdatePromotionRequestInput } from './types-49.js';
import type { CheckoutCustomTextConfig } from './types-3.js';
import type { CheckoutPaymentConfig, CheckoutTheme } from './types-4.js';
import type { Image } from './types-19.js';
import type { LegalSettings } from './types-28.js';
import type { PaymentLinkCustomField, PaymentLinkEventConfig } from './types-35.js';
import type { PaymentLinkLineItem, PaymentLinkSubscriptionPreview } from './types-36.js';
import type { ThemeConfig, TextModifierConfigRequest } from './types-47.js';
import type { SelectedProductOption } from './types-44.js';
import type { ReturnPolicyRevisionRequest } from './types-41.js';
/**
 * Shape $ (Value): {@link PromotionBuyXGetYMethodRequest}. The `buy_x_get_y` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionBuyXGetYMethodRequest = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Which line items receive the discount.
     * Required for service_charge promotions, and for line_item promotions whose eligibility_rules
     * include any non-line-item condition (for example order.subtotal or a customer condition). It
     * is optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules": PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Shape $ (Value): integer. Maximum number of times the buy_x_get_y promotion can apply to one
     * order. Omit for no limit beyond the qualifying and reward quantities. Format: int32.
     * minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Rules that identify the items counted
     * toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with exactly
     * one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups,
     * and a rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "qualifying_item_rules": PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Shape $ (Value): string. Selects the buy_x_get_y discount effect and its allowed fields.
     * Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionBuyXGetYMethodRequestInput}. The `buy_x_get_y` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionBuyXGetYMethodRequestInput = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Shape $ (Value): integer. Number of qualifying units needed for one application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Which line items receive the
     * discount. Required for service_charge promotions, and for line_item promotions whose
     * eligibility_rules include any non-line-item condition (for example order.subtotal or a
     * customer condition). It is optional only when eligibility_rules consist entirely of
     * line_item.* conditions (plus matched_items.subtotal), in which case the matched items are
     * used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule
     * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     */
    "discounted_item_rules": PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): number. Percentage to discount from reward items, from 1 to 100. Use 100 to
     * make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Shape $ (Value): integer. Maximum number of reward units discounted per application of a
     * buy_x_get_y promotion. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Shape $ (Value): integer. Maximum number of times the buy_x_get_y promotion can apply to one
     * order. Omit for no limit beyond the qualifying and reward quantities. Format: int32.
     * minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Rules that identify the items
     * counted toward buy_min_quantity for a buy_x_get_y promotion. A rule group is an object with
     * exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty
     * groups, and a rules key are invalid. Omit the field for no rules, or send null where the
     * field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups.
     */
    "qualifying_item_rules": PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): {@link PromotionRecurrenceInput}. Optional recurrence for subscription
     * payments: once applies to the first charged payment, repeating applies for period_count
     * charged payments, and forever applies to every payment. One-time orders apply the promotion
     * once. How often a promotion's discount repeats on a subscription: once, for a number of
     * charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceInput;
    /**
     * Shape $ (Value): string. Which matching reward items receive the discount: the cheapest, the
     * highest priced, or those added first to the order. Defaults to cheapest. Default:
     * "cheapest". Value enum: "cheapest", "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added";
    /**
     * Shape $ (Value): string. Selects the buy_x_get_y discount effect and its allowed fields.
     * Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y";
};
/**
 * Shape $ (Value): {@link PromotionCandidate}. A promotion considered for an order, with its
 * discount amounts, its stacking rules, and why it was or was not applied.
 */
export type PromotionCandidate = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Calculated discount amount for this promotion candidate
     * before final application, when available. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Discount amount applied to the order for candidates in
     * applied[]. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "applied_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link PromotionCombinesWith}. Which kinds of discounts a promotion can
     * combine with: line item, order, and service charge discounts.
     */
    "combines_with"?: PromotionCombinesWith;
    /**
     * Shape $ (Value): {@link MoneyValue}. Current money amount counted toward threshold_money for
     * available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "current_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "customer_facing_name": string;
    /** Shape $ (Value): string.  Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionExclusivity}. Only one promotion in an exclusivity group
     * continues. See Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivity;
    /**
     * Shape $ (Value): {@link MoneyValue}. Additional money amount needed to reach threshold_money
     * for available[] candidates. Monetary amount represented as integer minor units plus an ISO
     * 4217 currency code.
     */
    "gap_money"?: MoneyValue;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "order_charge_ids"?: Array<string>;
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "order_line_item_ids"?: Array<string>;
    /** Shape $ (Value): string. */
    "promotion_code"?: string;
    /** Shape $ (Value): string. */
    "promotion_code_id"?: string;
    /**
     * Shape $ (Value): string. Value enum: "already_applied", "automatic_disabled",
     * "buy_item_missing", "code_invalid", "code_required", "codes_disabled", "currency_mismatch",
     * "exhausted", "expired", "inactive", "max_promotions_reached", "minimum_not_met",
     * "no_discountable_balance", "not_combinable", "not_eligible", "not_yet_started",
     * "superseded", "superseded_by_better_offer", "superseded_by_higher_priority", "unknown_type".
     */
    "promotion_decline_reason"?: "already_applied"
        | "automatic_disabled"
        | "buy_item_missing"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "currency_mismatch"
        | "exhausted"
        | "expired"
        | "inactive"
        | "max_promotions_reached"
        | "minimum_not_met"
        | "no_discountable_balance"
        | "not_combinable"
        | "not_eligible"
        | "not_yet_started"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "unknown_type"
        | (string & {});
    /** Shape $ (Value): string. */
    "promotion_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Minimum money amount required by a threshold rule for
     * available[] candidates. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "threshold_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Discount amount this candidate would have applied if it
     * had been eligible and won conflict resolution. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "would_have_applied_money"?: MoneyValue;
};
/** Shape $ (Value): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
export type PromotionCode = {
    /**
     * Shape $ (Value): boolean. Whether a buyer can redeem the code right now: the code is active,
     * not expired, and under its max_uses, and its promotion is available.
     */
    "available": boolean;
    /** Shape $ (Value): string. Code a buyer enters to redeem the promotion. */
    "code": string;
    /**
     * Shape $ (Value): string. When the promotion code was created, as an RFC3339 timestamp.
     * Format: date-time.
     */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. When the code stops being redeemable, as an absolute RFC3339
     * timestamp. Omitted when the code does not expire. Format: date-time.
     */
    "expires_at"?: string;
    /**
     * Shape $ (Value): integer string. Maximum number of times this code can be redeemed. Omitted
     * when the code has no redemption limit. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "max_uses"?: `${bigint}`;
    /** Shape $ (Value): string. Identifier of the merchant that owns the promotion code. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): Map of string. Key-value data you attach to the promotion code. Shape $.*
     * (Value): string.
     */
    "metadata"?: Record<string, string>;
    /**
     * Shape $ (Value): {@link Promotion}. The promotion this code belongs to. Present only when
     * the list request asked for expand=promotion. Promotion evaluation order: manual discounts
     * stay, do not count toward the cap, and are ignored by combines_with. Frozen
     * subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "promotion"?: Promotion;
    /** Shape $ (Value): string. Unique identifier for the promotion code. */
    "promotion_code_id": string;
    /** Shape $ (Value): string. Identifier of the promotion this code redeems. */
    "promotion_id": string;
    /**
     * Shape $ (Value): string. Lifecycle status: active, inactive, or archived. Set active or
     * inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read
     * available. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Shape $ (Value): string. IANA zone the code's times were entered in, used for display.
     * expires_at is an absolute timestamp, so this does not change when the code expires.
     */
    "timezone"?: string;
    /**
     * Shape $ (Value): string. Why available is false. Present only when available is false. The
     * code's own state is reported first; promotion_unavailable means the code is usable but its
     * promotion is not. Value enum: "archived", "inactive", "expired", "exhausted",
     * "promotion_unavailable".
     */
    "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
    /**
     * Shape $ (Value): string. When the promotion code was last updated, as an RFC3339 timestamp.
     * Format: date-time.
     */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Number of times this code has been redeemed. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64.
     */
    "uses_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Persisted owned-state version. Clock-based availability and
     * expanded resources do not advance this counter. Use an integer string (decimal digits), not
     * a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link PromotionCodeListResponse}. A page of `PromotionCode` objects. */
export type PromotionCodeListResponse = {
    /**
     * Shape $ (Value): Array of {@link PromotionCode}. Promotion codes returned in the requested
     * sort order. Shape $[] (Value): {@link PromotionCode}. A code a buyer enters to claim a
     * promotion.
     */
    "data": Array<PromotionCode>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/** Shape $ (Value): {@link PromotionCodeResponse}. A response containing `PromotionCode` data. */
export type PromotionCodeResponse = {
    /**
     * Shape $ (Value): {@link PromotionCode}. The requested promotion code. A code a buyer enters
     * to claim a promotion.
     */
    "data": PromotionCode;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PromotionCodesSummary}. A count of a promotion's codes, including how
 * many are redeemable now and the newest redeemable code.
 */
export type PromotionCodesSummary = {
    /**
     * Shape $ (Value): integer. Number of codes a buyer can redeem now: active, not expired, and
     * under their max_uses. When it is 0, a code-gated promotion is unavailable with
     * unavailable_reason no_active_codes. Format: int32.
     */
    "active_count": number;
    /**
     * Shape $ (Value): string. Most recently created redeemable code. Omitted when active_count is
     * zero.
     */
    "newest_active_code"?: string;
    /**
     * Shape $ (Value): integer. Number of codes on the promotion, excluding archived codes.
     * Format: int32.
     */
    "total_count": number;
};
/**
 * Shape $ (Value): {@link PromotionCombinesWith}. Which kinds of discounts a promotion can combine
 * with: line item, order, and service charge discounts.
 */
export type PromotionCombinesWith = {
    /**
     * Shape $ (Value): boolean. Allow line item promotions, subject to the evaluation order on
     * Promotion.
     */
    "line_item": boolean;
    /**
     * Shape $ (Value): boolean. Allow order promotions, subject to the evaluation order on
     * Promotion.
     */
    "order": boolean;
    /**
     * Shape $ (Value): boolean. Allow service charge promotions, subject to the evaluation order
     * on Promotion.
     */
    "service_charge": boolean;
};
/**
 * Shape $ (Value): {@link PromotionCombinesWithPatch}. Change which promotion discount classes
 * this promotion can combine with. Omitted classes keep their current values. minProperties: 1.
 */
export type PromotionCombinesWithPatch = {
    /**
     * Shape $ (Value): boolean. Allow line item promotions, subject to the evaluation order on
     * Promotion.
     */
    "line_item"?: boolean;
    /**
     * Shape $ (Value): boolean. Allow order promotions, subject to the evaluation order on
     * Promotion.
     */
    "order"?: boolean;
    /**
     * Shape $ (Value): boolean. Allow service charge promotions, subject to the evaluation order
     * on Promotion.
     */
    "service_charge"?: boolean;
};
/**
 * Shape $ (Value): {@link PromotionCombinesWithPatchInput}. Change which promotion discount
 * classes this promotion can combine with. Omitted classes keep their current values.
 * minProperties: 1.
 */
export type PromotionCombinesWithPatchInput = PromotionCombinesWithPatch;
/**
 * Shape $ (Value): {@link PromotionCombinesWithRequestInput}. Which promotion discount classes
 * this promotion can combine with. Omitted classes default to true.
 */
export type PromotionCombinesWithRequestInput = PromotionCombinesWithPatch;
/**
 * Shape $ (Value): {@link PromotionExclusivity}. Only one promotion in an exclusivity group
 * continues. See Promotion for the evaluation order.
 */
export type PromotionExclusivity = {
    /**
     * Shape $ (Value): string. Exact, case-sensitive group name, 1 to 100 characters after
     * trimming. minLength: 1. maxLength: 100.
     */
    "group": string;
    /**
     * Shape $ (Value): integer. Higher priority wins. Equal priorities favor the larger standalone
     * discount, then the earlier created_at, then the lower promotion_id. Format: int32. Default:
     * 0.
     */
    "priority": number;
};
/**
 * Shape $ (Value): {@link PromotionExclusivityPatch}. Send only fields to change. Omitted fields
 * keep their stored values. Send priority 0 to reset it. An empty object is invalid.
 * minProperties: 1.
 */
export type PromotionExclusivityPatch = {
    /**
     * Shape $ (Value): string. Exact, case-sensitive group name, 1 to 100 characters after
     * trimming. minLength: 1. maxLength: 100.
     */
    "group"?: string;
    /**
     * Shape $ (Value): integer. Higher priority wins. Equal priorities favor the larger standalone
     * discount, then the earlier created_at, then the lower promotion_id. Format: int32. Default:
     * 0.
     */
    "priority"?: number;
};
/**
 * Shape $ (Value): {@link PromotionExclusivityPatchInput}. Send only fields to change. Omitted
 * fields keep their stored values. Send priority 0 to reset it. An empty object is invalid.
 * minProperties: 1.
 */
export type PromotionExclusivityPatchInput = PromotionExclusivityPatch;
/**
 * Shape $ (Value): {@link PromotionExclusivityRequest}. Only one promotion in an exclusivity group
 * continues. See Promotion for the evaluation order.
 */
export type PromotionExclusivityRequest = {
    /**
     * Shape $ (Value): string. Exact, case-sensitive group name, 1 to 100 characters after
     * trimming. minLength: 1. maxLength: 100.
     */
    "group": string;
    /**
     * Shape $ (Value): integer. Higher priority wins. Equal priorities favor the larger standalone
     * discount, then the earlier created_at, then the lower promotion_id. Format: int32. Default:
     * 0.
     */
    "priority"?: number;
};
/**
 * Shape $ (Value): {@link PromotionExclusivityRequestInput}. Only one promotion in an exclusivity
 * group continues. See Promotion for the evaluation order.
 */
export type PromotionExclusivityRequestInput = PromotionExclusivityRequest;
/** Shape $ (Value): {@link PromotionListResponse}. A page of `Promotion` objects. */
export type PromotionListResponse = {
    /**
     * Shape $ (Value): Array of {@link Promotion}. Promotions returned in the requested sort
     * order. Shape $[] (Value): {@link Promotion}. Promotion evaluation order: manual discounts
     * stay, do not count toward the cap, and are ignored by combines_with. Frozen
     * subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data": Array<Promotion>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. Token for the next page. Omitted when there are no more results. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PromotionPercentOffMethod}. The `percent_off` variant of
 * `PromotionApplicationMethod`.
 */
export type PromotionPercentOffMethod = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionRuleGroup}. Which line items receive the discount. Required
     * for service_charge promotions, and for line_item promotions whose eligibility_rules include
     * any non-line-item condition (for example order.subtotal or a customer condition). It is
     * optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroup;
    /**
     * Shape $ (Value): integer. Maximum number of matched units that receive the discount. Only
     * valid when type is percent_off, and requires allocation each. Sending it with amount_off or
     * buy_x_get_y returns INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional
     * quantities are not supported. Flint discounts the first matched units in line-item order
     * (the order items were added), not the cheapest. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number;
    /**
     * Shape $ (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent_off": number;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Selects the percent_off discount effect and its allowed fields.
     * Value enum: "percent_off".
     */
    "type": "percent_off" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionPercentOffMethodRequest}. The `percent_off` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionPercentOffMethodRequest = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequest}. Which line items receive the discount.
     * Required for service_charge promotions, and for line_item promotions whose eligibility_rules
     * include any non-line-item condition (for example order.subtotal or a customer condition). It
     * is optional only when eligibility_rules consist entirely of line_item.* conditions (plus
     * matched_items.subtotal), in which case the matched items are used as the target. Omitting it
     * otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequest;
    /**
     * Shape $ (Value): integer. Maximum number of matched units that receive the discount. Only
     * valid when type is percent_off, and requires allocation each. Sending it with amount_off or
     * buy_x_get_y returns INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional
     * quantities are not supported. Flint discounts the first matched units in line-item order
     * (the order items were added), not the cheapest. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number;
    /**
     * Shape $ (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent_off": number;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. Optional recurrence for subscription payments:
     * once applies to the first charged payment, repeating applies for period_count charged
     * payments, and forever applies to every payment. One-time orders apply the promotion once.
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Shape $ (Value): string. Selects the percent_off discount effect and its allowed fields.
     * Value enum: "percent_off".
     */
    "type": "percent_off" | (string & {});
};
/**
 * Shape $ (Value): {@link PromotionPercentOffMethodRequestInput}. The `percent_off` variant of
 * `PromotionApplicationMethodInput`.
 */
export type PromotionPercentOffMethodRequestInput = {
    /**
     * Shape $ (Value): string. How the effect is applied across the matched items or charges. each
     * applies the effect to every matched item independently: a fixed amount_off is charged per
     * item (10 USD off 3 items discounts 30 USD, each capped at the item price), and a percent_off
     * is taken from each item. across applies the effect once to the matched set as a whole: a
     * fixed amount_off is the whole amount one time (10 USD off the group total, not prorated per
     * item), and a percent_off is taken from the combined subtotal. For percent_off the two
     * produce the same total and differ only in how the discount is attributed to individual line
     * items; for amount_off they differ by the number of matched items, so set it deliberately.
     * Defaults to each for line_item and service_charge promotions and across for order
     * promotions. max_discounted_quantity requires each. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Shape $ (Value): string. Basis for merchandise promotion calculations. Omit for
     * service_charge promotions because service-charge discounts are calculated from the targeted
     * charges. Value enum: "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. Which line items receive the
     * discount. Required for service_charge promotions, and for line_item promotions whose
     * eligibility_rules include any non-line-item condition (for example order.subtotal or a
     * customer condition). It is optional only when eligibility_rules consist entirely of
     * line_item.* conditions (plus matched_items.subtotal), in which case the matched items are
     * used as the target. Omitting it otherwise returns DISCOUNTED_ITEM_RULES_REQUIRED. A rule
     * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     */
    "discounted_item_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Shape $ (Value): integer. Maximum number of matched units that receive the discount. Only
     * valid when type is percent_off, and requires allocation each. Sending it with amount_off or
     * buy_x_get_y returns INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional
     * quantities are not supported. Flint discounts the first matched units in line-item order
     * (the order items were added), not the cheapest. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number;
    /**
     * Shape $ (Value): number. Percentage to discount, from 1 to 100. minimum: 1. maximum: 100.
     * multipleOf: 0.0001.
     */
    "percent_off": number;
    /**
     * Shape $ (Value): {@link PromotionRecurrenceInput}. Optional recurrence for subscription
     * payments: once applies to the first charged payment, repeating applies for period_count
     * charged payments, and forever applies to every payment. One-time orders apply the promotion
     * once. How often a promotion's discount repeats on a subscription: once, for a number of
     * charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceInput;
    /**
     * Shape $ (Value): string. Selects the percent_off discount effect and its allowed fields.
     * Value enum: "percent_off".
     */
    "type": "percent_off";
};
/**
 * Shape $ (Value): {@link PromotionRecurrence}. How often a promotion's discount repeats on a
 * subscription: once, for a number of charged payments, or forever.
 */
export type PromotionRecurrence = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "once", "repeating", "forever".
     */
    "type": "once" | "repeating" | "forever" | (string & {});
})
    & ((Exclude<PromotionRecurrenceOnce & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceRepeating & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceForever & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PromotionRecurrenceForever}. The `forever` variant of
 * `PromotionRecurrence`.
 */
export type PromotionRecurrenceForever = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "forever".
     */
    "type": "forever" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): any. Apply the promotion to every charged subscription payment. Value enum:
     * "forever".
     */
    "type": unknown;
}));
/**
 * Shape $ (Value): {@link PromotionRecurrenceForeverInput}. The `forever` variant of
 * `PromotionRecurrence`.
 */
export type PromotionRecurrenceForeverInput = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "forever".
     */
    "type": "forever";
})
    & (({
    /**
     * Shape $ (Value): any. Apply the promotion to every charged subscription payment. Value enum:
     * "forever".
     */
    "type": ("forever") & ("forever");
})
    & ({
    "period_count"?: never;
}));
/**
 * Shape $ (Value): {@link PromotionRecurrenceInput}. How often a promotion's discount repeats on a
 * subscription: once, for a number of charged payments, or forever.
 */
export type PromotionRecurrenceInput = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "once", "repeating", "forever".
     */
    "type": "once" | "repeating" | "forever";
})
    & ((Exclude<PromotionRecurrenceOnceInput & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceRepeatingInput & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceForeverInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link PromotionRecurrenceOnce}. The `once` variant of `PromotionRecurrence`.
 */
export type PromotionRecurrenceOnce = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "once".
     */
    "type": "once" | (string & {});
})
    & (({
    /**
     * Shape $ (Value): any. Apply the promotion to the first charged subscription payment. Value
     * enum: "once".
     */
    "type": unknown;
}));
/**
 * Shape $ (Value): {@link PromotionRecurrenceOnceInput}. The `once` variant of
 * `PromotionRecurrence`.
 */
export type PromotionRecurrenceOnceInput = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count"?: number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "once".
     */
    "type": "once";
})
    & (({
    /**
     * Shape $ (Value): any. Apply the promotion to the first charged subscription payment. Value
     * enum: "once".
     */
    "type": ("once") & ("once");
})
    & ({
    "period_count"?: never;
}));
/**
 * Shape $ (Value): {@link PromotionRecurrenceRepeating}. The `repeating` variant of
 * `PromotionRecurrence`.
 */
export type PromotionRecurrenceRepeating = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count": number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "repeating".
     */
    "type": "repeating" | (string & {});
})
    & ({
    /**
     * Shape $ (Value): any. Apply the promotion to period_count charged subscription payments.
     * Value enum: "repeating".
     */
    "type": unknown;
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count": number;
});
/**
 * Shape $ (Value): {@link PromotionRecurrenceRepeatingInput}. The `repeating` variant of
 * `PromotionRecurrence`.
 */
export type PromotionRecurrenceRepeatingInput = ({
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count": number;
    /**
     * Shape $ (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "repeating".
     */
    "type": "repeating";
})
    & ({
    /**
     * Shape $ (Value): any. Apply the promotion to period_count charged subscription payments.
     * Value enum: "repeating".
     */
    "type": ("repeating") & ("repeating");
    /**
     * Shape $ (Value): integer. Number of charged payments for repeating recurrence. Omit for once
     * and forever. minimum: 1.
     */
    "period_count": number;
});
/**
 * Shape $ (Value): {@link PromotionRefRequest}. Identifies the promotion to apply, by promotion
 * code or by promotion ID.
 */
export type PromotionRefRequest = ({
    /**
     * Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign
     * code. minLength: 1.
     */
    "promotion_code"?: string;
    /**
     * Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already
     * know the promotion, including code-gated promotions, which then apply without a code and
     * count only toward the promotion's `max_uses`. Checkout credentials must use
     * `promotion_code`. minLength: 1.
     */
    "promotion_id"?: string;
})
    & ((({
    /**
     * Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already
     * know the promotion, including code-gated promotions, which then apply without a code and
     * count only toward the promotion's `max_uses`. Checkout credentials must use
     * `promotion_code`. minLength: 1.
     */
    "promotion_id": string;
}))
    | (({
    /**
     * Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign
     * code. minLength: 1.
     */
    "promotion_code": string;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PromotionRefRequestInput}. Identifies the promotion to apply, by
 * promotion code or by promotion ID.
 */
export type PromotionRefRequestInput = ({
    /**
     * Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign
     * code. minLength: 1.
     */
    "promotion_code"?: string;
    /**
     * Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already
     * know the promotion, including code-gated promotions, which then apply without a code and
     * count only toward the promotion's `max_uses`. Checkout credentials must use
     * `promotion_code`. minLength: 1.
     */
    "promotion_id"?: string;
})
    & ((({
    /**
     * Shape $ (Value): string. Use `promotion_id` for server-side apply flows where you already
     * know the promotion, including code-gated promotions, which then apply without a code and
     * count only toward the promotion's `max_uses`. Checkout credentials must use
     * `promotion_code`. minLength: 1.
     */
    "promotion_id": string;
})
    & (({
    "promotion_code"?: never;
})))
    | (({
    /**
     * Shape $ (Value): string. Human-entered promotion code. Use this when redeeming a campaign
     * code. minLength: 1.
     */
    "promotion_code": string;
})
    & (({
    "promotion_id"?: never;
}))));
/** Shape $ (Value): {@link PromotionResponse}. A response containing `Promotion` data. */
export type PromotionResponse = {
    /**
     * Shape $ (Value): {@link Promotion}. The requested promotion. Promotion evaluation order:
     * manual discounts stay, do not count toward the cap, and are ignored by combines_with. Frozen
     * subscription-term promotions are admitted first and are exempt from exclusivity,
     * combines_with, and the cap. Candidates include codes being applied, existing promotion
     * discounts, and qualifying automatic promotions. Each exclusivity group keeps its
     * highest-priority member, then the larger standalone discount, earlier created_at, and lower
     * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
     * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
     * promotions do not allow each other's discount class. Admitted promotions price line item
     * first, then order, then service charge. A zero-value promotion is dropped and selection runs
     * again.
     */
    "data": Promotion;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Additional information about this response. Metadata
     * returned with a response: the `api_version`, `trace_id`, whether an idempotent request was
     * replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. Identifier of this API request, useful when contacting support.
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PromotionRule}. One condition in a promotion rule group, which tests an
 * attribute with an operator and values.
 */
export type PromotionRule = {
    /**
     * Shape $ (Value): string. Field the rule tests. The attribute fixes the value type and the
     * operators that are legal for it: money attributes accept comparison operators but not eq or
     * in, booleans accept eq only, and so on. The full attribute/type/operator matrix is
     * machine-readable in x-flint-rule-attributes on this schema. metadata.<key> reads a string
     * from the customer's metadata and accepts the string operators. A disallowed operator is
     * rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for
     * the attribute.
     */
    "attribute": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValue}. Alternative thresholds for money-valued rules,
     * keyed by currency code. Each Money currency must match its key. Shape $.* (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Shape $ (Value): string. Comparison to apply to the attribute. The attribute determines
     * which operators are allowed. Value enum: "eq", "ne", "gt", "gte", "lt", "lte", "in",
     * "contains", "is_defined".
     */
    "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined" | (string & {});
    /**
     * Shape $ (Value): Array of {@link PromotionRuleValue}. Comparison values with the type
     * required by the attribute. Omit for is_defined, which tests whether the attribute is
     * present. Shape $[] (Value): {@link PromotionRuleValue}. Rule comparison value. Use a
     * primitive string, number, boolean, or a money object.
     */
    "values"?: Array<PromotionRuleValue>;
};
/**
 * Shape $ (Value): {@link PromotionRuleGroup}. A rule group is an object with exactly one nonempty
 * all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are
 * invalid. Omit the field for no rules, or send null where the field is clearable. Responses list
 * rules before nested groups. Under any, a nested group containing only one rule reads back as
 * that rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal
 * scope. These deterministic normalizations stabilize after one round trip. matched_items.subtotal
 * sums the line items matched by the line_item.* rules in the same all group, including its nested
 * groups.
 */
export type PromotionRuleGroup = (({
    /**
     * Shape $ (Value): Array of ({@link PromotionRule} or {@link PromotionRuleGroup}). Rules and
     * nested groups that must all match. minItems: 1. Shape $[] (Value): {@link PromotionRule} or
     * {@link PromotionRuleGroup}. Shape $[].oneOf[1] (Value): {@link PromotionRule}. One condition
     * in a promotion rule group, which tests an attribute with an operator and values. Shape
     * $[].oneOf[2] (Value): {@link PromotionRuleGroup}. A rule group is an object with exactly one
     * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
     * rules key are invalid. Omit the field for no rules, or send null where the field is
     * clearable. Responses list rules before nested groups. Under any, a nested group containing
     * only one rule reads back as that rule. Under all, nested groups keep their boundaries to
     * preserve matched_items.subtotal scope. These deterministic normalizations stabilize after
     * one round trip. matched_items.subtotal sums the line items matched by the line_item.* rules
     * in the same all group, including its nested groups.
     */
    "all": Array<((PromotionRule) | (PromotionRuleGroup) | (unknown))>;
})
    | ({
    /**
     * Shape $ (Value): Array of ({@link PromotionRule} or {@link PromotionRuleGroup}). Rules and
     * nested groups of which at least one must match. minItems: 1. Shape $[] (Value): {@link
     * PromotionRule} or {@link PromotionRuleGroup}. Shape $[].oneOf[1] (Value): {@link
     * PromotionRule}. One condition in a promotion rule group, which tests an attribute with an
     * operator and values. Shape $[].oneOf[2] (Value): {@link PromotionRuleGroup}. A rule group is
     * an object with exactly one nonempty all (AND) or any (OR) array of rules or nested groups.
     * Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or send null
     * where the field is clearable. Responses list rules before nested groups. Under any, a nested
     * group containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups.
     */
    "any": Array<((PromotionRule) | (PromotionRuleGroup) | (unknown))>;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PromotionRuleGroupRequest}. A rule group is an object with exactly one
 * nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
 * rules key are invalid. Omit the field for no rules, or send null where the field is clearable.
 * Responses list rules before nested groups. Under any, a nested group containing only one rule
 * reads back as that rule. Under all, nested groups keep their boundaries to preserve
 * matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip.
 * matched_items.subtotal sums the line items matched by the line_item.* rules in the same all
 * group, including its nested groups.
 */
export type PromotionRuleGroupRequest = (({
    /**
     * Shape $ (Value): Array of ({@link PromotionRule} or {@link PromotionRuleGroupRequest}).
     * Rules and nested groups that must all match. minItems: 1. Shape $[] (Value): {@link
     * PromotionRule} or {@link PromotionRuleGroupRequest}. Shape $[].oneOf[1] (Value): {@link
     * PromotionRule}. One condition you set in a promotion rule group, which tests an attribute
     * with an operator and values. Shape $[].oneOf[2] (Value): {@link PromotionRuleGroupRequest}.
     * A rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "all": Array<((PromotionRule) | (PromotionRuleGroupRequest) | (unknown))>;
})
    | ({
    /**
     * Shape $ (Value): Array of ({@link PromotionRule} or {@link PromotionRuleGroupRequest}).
     * Rules and nested groups of which at least one must match. minItems: 1. Shape $[] (Value):
     * {@link PromotionRule} or {@link PromotionRuleGroupRequest}. Shape $[].oneOf[1] (Value):
     * {@link PromotionRule}. One condition you set in a promotion rule group, which tests an
     * attribute with an operator and values. Shape $[].oneOf[2] (Value): {@link
     * PromotionRuleGroupRequest}. A rule group is an object with exactly one nonempty all (AND) or
     * any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid.
     * Omit the field for no rules, or send null where the field is clearable. Responses list rules
     * before nested groups. Under any, a nested group containing only one rule reads back as that
     * rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal
     * scope. These deterministic normalizations stabilize after one round trip.
     * matched_items.subtotal sums the line items matched by the line_item.* rules in the same all
     * group, including its nested groups.
     */
    "any": Array<((PromotionRule) | (PromotionRuleGroupRequest) | (unknown))>;
})
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link PromotionRuleGroupRequestInput}. A rule group is an object with exactly
 * one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a
 * rules key are invalid. Omit the field for no rules, or send null where the field is clearable.
 * Responses list rules before nested groups. Under any, a nested group containing only one rule
 * reads back as that rule. Under all, nested groups keep their boundaries to preserve
 * matched_items.subtotal scope. These deterministic normalizations stabilize after one round trip.
 * matched_items.subtotal sums the line items matched by the line_item.* rules in the same all
 * group, including its nested groups.
 */
export type PromotionRuleGroupRequestInput = (({
    /**
     * Shape $ (Value): Array of ({@link PromotionRuleRequestInput} or {@link
     * PromotionRuleGroupRequestInput}). Rules and nested groups that must all match. minItems: 1.
     * Shape $[] (Value): {@link PromotionRuleRequestInput} or {@link
     * PromotionRuleGroupRequestInput}. Shape $[].oneOf[1] (Value): {@link
     * PromotionRuleRequestInput}. One condition you set in a promotion rule group, which tests an
     * attribute with an operator and values. Shape $[].oneOf[2] (Value): {@link
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
     * Shape $ (Value): Array of ({@link PromotionRuleRequestInput} or {@link
     * PromotionRuleGroupRequestInput}). Rules and nested groups of which at least one must match.
     * minItems: 1. Shape $[] (Value): {@link PromotionRuleRequestInput} or {@link
     * PromotionRuleGroupRequestInput}. Shape $[].oneOf[1] (Value): {@link
     * PromotionRuleRequestInput}. One condition you set in a promotion rule group, which tests an
     * attribute with an operator and values. Shape $[].oneOf[2] (Value): {@link
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
 * Shape $ (Value): {@link PromotionRuleRequestInput}. One condition you set in a promotion rule
 * group, which tests an attribute with an operator and values.
 */
export type PromotionRuleRequestInput = {
    /**
     * Shape $ (Value): string. Field the rule tests. The attribute fixes the value type and the
     * operators that are legal for it: money attributes accept comparison operators but not eq or
     * in, booleans accept eq only, and so on. The full attribute/type/operator matrix is
     * machine-readable in x-flint-rule-attributes on this schema. metadata.<key> reads a string
     * from the customer's metadata and accepts the string operators. A disallowed operator is
     * rejected at create time with INVALID_OPERATOR, whose message names the operators allowed for
     * the attribute. minLength: 1.
     */
    "attribute": string;
    /**
     * Shape $ (Value): Map of {@link MoneyValueInput}. Alternative thresholds for money-valued
     * rules, keyed by currency code. Each Money currency must match its key. Shape $.* (Value):
     * {@link MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Shape $ (Value): string. Comparison to apply to the attribute. The attribute determines
     * which operators are allowed. Value enum: "eq", "ne", "gt", "gte", "lt", "lte", "in",
     * "contains", "is_defined".
     */
    "operator": "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "in" | "contains" | "is_defined";
    /**
     * Shape $ (Value): Array of {@link PromotionRuleValueRequestInput}. Comparison values with the
     * type required by the attribute. Omit for is_defined, which tests whether the attribute is
     * present. Shape $[] (Value): {@link PromotionRuleValueRequestInput}. Rule comparison value.
     * Use a primitive string, number, boolean, or a money object.
     */
    "values"?: Array<PromotionRuleValueRequestInput>;
};
/**
 * Shape $ (Value): {@link PromotionRuleValue}. Rule comparison value. Use a primitive string,
 * number, boolean, or a money object.
 */
export type PromotionRuleValue = ((string) | (number) | (boolean) | (MoneyValue) | (unknown));
/**
 * Shape $ (Value): {@link PromotionRuleValueRequestInput}. Rule comparison value. Use a primitive
 * string, number, boolean, or a money object.
 */
export type PromotionRuleValueRequestInput = ((string) | (number) | (boolean) | (MoneyValueInput));
/**
 * Shape $ (Value): {@link PromotionSchedule}. When a promotion is active, with a start time, an
 * end time, and the time zone it was entered in.
 */
export type PromotionSchedule = {
    /**
     * Shape $ (Value): string. Time after which the promotion can no longer apply, as an absolute
     * RFC3339 timestamp. Omitted when it has no end time. Format: date-time. minLength: 1.
     */
    "ends_at"?: string;
    /**
     * Shape $ (Value): string. Earliest time the promotion can apply, as an absolute RFC3339
     * timestamp. Omitted when it has no start time. Format: date-time. minLength: 1.
     */
    "starts_at"?: string;
    /**
     * Shape $ (Value): string. IANA zone the schedule was entered in, used for display. starts_at
     * and ends_at are absolute timestamps, so this does not change when the promotion starts or
     * ends. minLength: 1. maxLength: 255.
     */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link PromotionScheduleInput}. When a promotion is active, with a start time,
 * an end time, and the time zone it was entered in.
 */
export type PromotionScheduleInput = {
    /**
     * Shape $ (Value): string. Time after which the promotion can no longer apply, as an absolute
     * RFC3339 timestamp. Omitted when it has no end time. Format: date-time. minLength: 1.
     */
    "ends_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Earliest time the promotion can apply, as an absolute RFC3339
     * timestamp. Omitted when it has no start time. Format: date-time. minLength: 1.
     */
    "starts_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. IANA zone the schedule was entered in, used for display. starts_at
     * and ends_at are absolute timestamps, so this does not change when the promotion starts or
     * ends. minLength: 1. maxLength: 255.
     */
    "timezone"?: string;
};
/**
 * Shape $ (Value): {@link PromotionSchedulePatch}. Send only fields to change. Omitted fields keep
 * their stored values. null clears nullable subfields. An empty object is invalid. minProperties:
 * 1.
 */
export type PromotionSchedulePatch = {
    /**
     * Shape $ (Value): string or null. Time after which the promotion can no longer apply, as an
     * absolute RFC3339 timestamp. Omission keeps the stored value; null clears it. Format:
     * date-time. minLength: 1.
     */
    "ends_at"?: string | null;
    /**
     * Shape $ (Value): string or null. Earliest time the promotion can apply, as an absolute
     * RFC3339 timestamp. Omission keeps the stored value; null clears it. Format: date-time.
     * minLength: 1.
     */
    "starts_at"?: string | null;
    /**
     * Shape $ (Value): string or null. IANA zone the schedule was entered in, used for display.
     * starts_at and ends_at are absolute timestamps, so this does not change when the promotion
     * starts or ends. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "timezone"?: string | null;
};
/**
 * Shape $ (Value): {@link PromotionSchedulePatchInput}. Send only fields to change. Omitted fields
 * keep their stored values. null clears nullable subfields. An empty object is invalid.
 * minProperties: 1.
 */
export type PromotionSchedulePatchInput = {
    /**
     * Shape $ (Value): string or null. Time after which the promotion can no longer apply, as an
     * absolute RFC3339 timestamp. Omission keeps the stored value; null clears it. Format:
     * date-time. minLength: 1.
     */
    "ends_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. Earliest time the promotion can apply, as an absolute
     * RFC3339 timestamp. Omission keeps the stored value; null clears it. Format: date-time.
     * minLength: 1.
     */
    "starts_at"?: string | globalThis.Date | null;
    /**
     * Shape $ (Value): string or null. IANA zone the schedule was entered in, used for display.
     * starts_at and ends_at are absolute timestamps, so this does not change when the promotion
     * starts or ends. Send null to clear it. minLength: 1. maxLength: 255.
     */
    "timezone"?: string | null;
};
/**
 * Shape $ (Value): {@link PromotionSettings}. Merchant promotion settings: whether automatic
 * promotions and codes are enabled, and how many promotions can apply to one order.
 */
export type PromotionSettings = {
    /** Shape $ (Value): boolean. */
    "automatic_enabled"?: boolean;
    /**
     * Shape $ (Value): boolean. Merchant promotion code redemption policy. Explicit false rejects
     * promotion-code application even when a checkout or payment link asks to show code entry.
     */
    "codes_enabled"?: boolean;
    /**
     * Shape $ (Value): integer. Maximum promotion discounts on an order, from 1 to 10, default 2.
     * Manual discounts do not count. See Promotion for the evaluation order. Format: int32.
     * minimum: 1. maximum: 10. Default: 2.
     */
    "max_promotions_per_order"?: number;
};
/**
 * Shape $ (Value): {@link PromotionSettingsInput}. Merchant promotion settings: whether automatic
 * promotions and codes are enabled, and how many promotions can apply to one order.
 */
export type PromotionSettingsInput = PromotionSettings;
export type PromotionsCreateCodeInput = {
    /** Shape $ (Value): string. */
    "promotion_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreatePromotionCodeRequestInput}. The request body for: Create
     * promotion code.
     */
    "body": InputValue<CreatePromotionCodeRequestInput>;
};
export type PromotionsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreatePromotionRequestInput}. The request body for: Create
     * promotion.
     */
    "body": InputValue<CreatePromotionRequestInput>;
};
export type PromotionsDeleteCodeInput = {
    /** Shape $ (Value): string. */
    "promotion_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. */
    "promotion_code_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type PromotionsGetCodeInput = {
    /** Shape $ (Value): string. */
    "promotion_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "promotion_code_id": InputValue<string>;
};
export type PromotionsGetInput = {
    /** Shape $ (Value): string. */
    "promotion_id": InputValue<string>;
};
export type PromotionsListCodesInput = {
    /** Shape $ (Value): string. */
    "promotion_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 100. */
    "code"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "available", "inactive", "expired",
     * "exhausted", "promotion_unavailable". Shape $[] (Value): string. Value enum: "available",
     * "inactive", "expired", "exhausted", "promotion_unavailable".
     */
    "availability"?: InputValue<Array<"available" | "inactive" | "expired" | "exhausted" | "promotion_unavailable">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at". */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Shape $ (Value): Array of string. [] enum: "promotion". Shape $[] (Value): string. Value
     * enum: "promotion".
     */
    "expand"?: InputValue<Array<"promotion">>;
};
export type PromotionsListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "available", "inactive", "archived",
     * "not_yet_started", "expired", "exhausted", "no_active_codes". Shape $[] (Value): string.
     * Value enum: "available", "inactive", "archived", "not_yet_started", "expired", "exhausted",
     * "no_active_codes".
     */
    "availability"?: InputValue<Array<"available"
        | "inactive"
        | "archived"
        | "not_yet_started"
        | "expired"
        | "exhausted"
        | "no_active_codes">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "product_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "variant_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "bundle_id"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "category_handle"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "automatic", "code". Shape $[]
     * (Value): string. Value enum: "automatic", "code".
     */
    "redemption_type"?: InputValue<Array<"automatic" | "code">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "order", "line_item",
     * "service_charge". Shape $[] (Value): string. Value enum: "order", "line_item",
     * "service_charge".
     */
    "discount_class"?: InputValue<Array<"order" | "line_item" | "service_charge">>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "name", "created_at",
     * "updated_at".
     */
    "sort_by"?: InputValue<"name" | "created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc". */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
};
export type PromotionsRemoveInput = {
    /** Shape $ (Value): string. */
    "promotion_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type PromotionsUpdateCodeInput = {
    /** Shape $ (Value): string. */
    "promotion_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "promotion_code_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePromotionCodeRequestInput}. The request body for: Update
     * promotion code.
     */
    "body": InputValue<UpdatePromotionCodeRequestInput>;
};
export type PromotionsUpdateInput = {
    /** Shape $ (Value): string. */
    "promotion_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdatePromotionRequestInput}. The request body for: Update
     * promotion.
     */
    "body": InputValue<UpdatePromotionRequestInput>;
};
/** Shape $ (Value): {@link PublicDownload}. A temporary link for downloading a generated report. */
export type PublicDownload = {
    /** Shape $ (Value): string. Download expiration instant. Format: date-time. */
    "expires_at": string;
    /** Shape $ (Value): string. pattern: ^rdl_[0-9A-HJKMNP-TV-Z]{26}$. */
    "report_download_id": string;
    /** Shape $ (Value): string. */
    "url": string;
};
/**
 * Shape $ (Value): {@link PublicPaymentLink}. The buyer-facing view of a payment link, with its
 * line items, custom fields, legal and payment settings, and status.
 */
export type PublicPaymentLink = {
    /** Shape $ (Value): integer. Format: int32. */
    "completed_count": number;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkCustomField}. Shape $[] (Value): {@link
     * PaymentLinkCustomField}. A custom field on a payment link that collects an answer from the
     * buyer, such as text, a dropdown, or a checkbox.
     */
    "custom_fields"?: Array<PaymentLinkCustomField>;
    /**
     * Shape $ (Value): {@link CheckoutCustomTextConfig}. Custom text shown in checkout: an order
     * summary message and a shipping address label.
     */
    "custom_text"?: CheckoutCustomTextConfig;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "donation_max_amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "donation_min_amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): Array of {@link MoneyValue}. Shape $[] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "donation_suggested_amount_money_options"?: Array<MoneyValue>;
    /**
     * Shape $ (Value): {@link PaymentLinkEventConfig}. Event settings on an event payment link,
     * such as its date, venue, ticket limit, and ticket emails.
     */
    "event_config"?: PaymentLinkEventConfig;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /** Shape $ (Value): string. */
    "inactive_message"?: string;
    /**
     * Shape $ (Value): {@link LegalSettings}. Legal settings for a checkout: whether buyers must
     * accept terms, and links to the terms, refund policy, shipping policy, and contract.
     */
    "legal"?: LegalSettings;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkLineItem}. Shape $[] (Value): {@link
     * PaymentLinkLineItem}. A line item on a payment link, sold from a catalog variant, a bundle,
     * or an ad hoc name and price, with quantity and price rules.
     */
    "line_items"?: Array<PaymentLinkLineItem>;
    /** Shape $ (Value): integer. Format: int32. */
    "max_completions"?: number;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): string. */
    "payment_link_id": string;
    /** Shape $ (Value): string.  Value enum: "standard", "donation", "event". */
    "payment_link_type"?: "standard" | "donation" | "event" | (string & {});
    /**
     * Shape $ (Value): {@link CheckoutPaymentConfig}. Payment settings for a checkout: the enabled
     * payment options and a note shown with payment.
     */
    "payments"?: CheckoutPaymentConfig;
    /**
     * Shape $ (Value): string. RFC3339 timestamp after which the link stops starting checkouts and
     * resolve returns PAYMENT_LINK_SALES_ENDED. Unset means sales do not end on their own, except
     * that an event link without sales_end_at stops selling at event_config.event_at. A checkout
     * opened before the end can still start payment for up to 15 minutes after it. Format:
     * date-time.
     */
    "sales_end_at"?: string;
    /** Shape $ (Value): string.  Value enum: "active", "inactive". */
    "status": "active" | "inactive" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): {@link ThemeConfig}. Colors and title applied to a payment link's checkout
     * page.
     */
    "theme"?: ThemeConfig;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link PublicPaymentLinkResponse}. A response containing
 * `PublicPaymentLinkResult` data.
 */
export type PublicPaymentLinkResponse = {
    /**
     * Shape $ (Value): {@link PublicPaymentLinkResult}. The result of resolving a public payment
     * link: the link, merchant branding, availability, resolved line items, and a resolution
     * context for starting checkout.
     */
    "data": PublicPaymentLinkResult;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link PublicPaymentLinkResult}. The result of resolving a public payment link:
 * the link, merchant branding, availability, resolved line items, and a resolution context for
 * starting checkout.
 */
export type PublicPaymentLinkResult = {
    /**
     * Shape $ (Value): {@link CheckoutTheme}. The theme a checkout opened from this link uses:
     * your checkout branding settings, with the link's own `theme` over them. Use it to style a
     * page that leads to the checkout. `payment_link.theme` is the link's own theme alone. Omitted
     * when neither sets a value. It includes the branding settings' `background_color`,
     * `text_color`, `font_family`, and `corner_radius`. Colors, corner radius, font family, and
     * title that style a checkout, taken from the session or link theme or the merchant's branding
     * settings.
     */
    "checkout_theme"?: CheckoutTheme;
    /** Shape $ (Value): boolean. */
    "is_sold_out": boolean;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "merchant_icon"?: Image;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "merchant_logo"?: Image;
    /** Shape $ (Value): string. */
    "merchant_name"?: string;
    /**
     * Shape $ (Value): {@link PublicPaymentLink}. The buyer-facing view of a payment link, with
     * its line items, custom fields, legal and payment settings, and status.
     */
    "payment_link": PublicPaymentLink;
    /**
     * Shape $ (Value): integer. Event links with a ticket limit: tickets left after tickets sold
     * and tickets held by payments in progress. Absent when the event has no ticket limit.
     * Whole-number quantity; fractional quantities are not supported. Format: int32.
     */
    "remaining_quantity"?: number;
    /** Shape $ (Value): string. */
    "resolution_context": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "resolution_context_expires_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "resolution_context_start_deadline_at": string;
    /**
     * Shape $ (Value): Array of {@link PublicResolvedLineItemInfo}. Shape $[] (Value): {@link
     * PublicResolvedLineItemInfo}. Current catalog details for a payment link line item, such as
     * its name, price, image, available modifiers, and bundle components.
     */
    "resolved_line_items"?: Array<PublicResolvedLineItemInfo>;
    /**
     * Shape $ (Value): boolean. True when the link's sales end has passed:
     * payment_link.sales_end_at, or event_config.event_at for an event link without sales_end_at.
     * Resolve then returns PAYMENT_LINK_SALES_ENDED.
     */
    "sales_ended": boolean;
    /**
     * Shape $ (Value): boolean. Whether Flint's hosted pages show the Powered by Flint mark for
     * this merchant. `false` when the merchant's agreement with Flint removes it.
     */
    "show_flint_mark": boolean;
    /**
     * Shape $ (Value): {@link PaymentLinkSubscriptionPreview}. Present for active plan-backed
     * payment links when authoritative subscription terms are available. Subscription terms shown
     * before an active plan-backed payment link creates a checkout session.
     */
    "subscription_preview"?: PaymentLinkSubscriptionPreview;
};
/**
 * Shape $ (Value): {@link PublicResolvedBundleComponent}. One component of a bundle on a resolved
 * payment link line item, with its variant and quantity.
 */
export type PublicResolvedBundleComponent = {
    /** Shape $ (Value): integer. Format: int32. */
    "position": number;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): {@link PublicResolvedBundleVariantSummary}. A summary of a bundle
     * component's variant, with its name, SKU, selected options, and whether it is available for
     * sale.
     */
    "variant"?: PublicResolvedBundleVariantSummary;
    /** Shape $ (Value): string. */
    "variant_id": string;
};
/**
 * Shape $ (Value): {@link PublicResolvedBundleVariantSummary}. A summary of a bundle component's
 * variant, with its name, SKU, selected options, and whether it is available for sale.
 */
export type PublicResolvedBundleVariantSummary = {
    /** Shape $ (Value): boolean. */
    "available_for_sale": boolean;
    /** Shape $ (Value): string. */
    "name"?: string;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string. */
    "variant_id": string;
};
/**
 * Shape $ (Value): {@link PublicResolvedLineItemInfo}. Current catalog details for a payment link
 * line item, such as its name, price, image, available modifiers, and bundle components.
 */
export type PublicResolvedLineItemInfo = {
    /**
     * Shape $ (Value): Array of {@link PublicResolvedModifierGroup}. Shape $[] (Value): {@link
     * PublicResolvedModifierGroup}. A modifier group as resolved for a payment link line item,
     * with its selection limits, display flags, and options or text settings.
     */
    "available_modifiers"?: Array<PublicResolvedModifierGroup>;
    /**
     * Shape $ (Value): Array of {@link PublicResolvedBundleComponent}. Shape $[] (Value): {@link
     * PublicResolvedBundleComponent}. One component of a bundle on a resolved payment link line
     * item, with its variant and quantity.
     */
    "bundle_components"?: Array<PublicResolvedBundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /** Shape $ (Value): string.  Value enum: "variant", "bundle". */
    "catalog_object_type"?: "variant" | "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /** Shape $ (Value): boolean. */
    "is_inventory_tracked"?: boolean;
    /** Shape $ (Value): string. */
    "key": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /** Shape $ (Value): string. */
    "resolved_description"?: string;
    /** Shape $ (Value): string. */
    "resolved_name"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "resolved_unit_price_money"?: MoneyValue;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link PublicResolvedModifierGroup}. A modifier group as resolved for a payment
 * link line item, with its selection limits, display flags, and options or text settings.
 */
export type PublicResolvedModifierGroup = {
    /** Shape $ (Value): boolean. */
    "allow_quantities"?: boolean;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "max_quantity"?: `${bigint}`;
    /** Shape $ (Value): integer. Format: int32. */
    "max_selected"?: number;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "max_total_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "min_quantity"?: `${bigint}`;
    /** Shape $ (Value): integer. Format: int32. */
    "min_selected"?: number;
    /** Shape $ (Value): string. */
    "modifier_group_id": string;
    /** Shape $ (Value): string.  Value enum: "list", "text". */
    "modifier_group_type": "list" | "text" | (string & {});
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link PublicResolvedModifierOption}. Shape $[] (Value): {@link
     * PublicResolvedModifierOption}. One selectable option in a resolved modifier group, with its
     * price change, tax category, and whether it is available.
     */
    "options"?: Array<PublicResolvedModifierOption>;
    /** Shape $ (Value): integer. Format: int32. */
    "position"?: number;
    /** Shape $ (Value): string.  Value enum: "per_item", "per_line". */
    "pricing_scope"?: "per_item" | "per_line" | (string & {});
    /** Shape $ (Value): boolean. */
    "show_on_fulfillment"?: boolean;
    /** Shape $ (Value): boolean. */
    "show_on_receipt"?: boolean;
    /**
     * Shape $ (Value): {@link TextModifierConfigRequest}. Input rules for a free-text modifier
     * group on a payment link line item: required, multiline, and length limits.
     */
    "text"?: TextModifierConfigRequest;
};
/**
 * Shape $ (Value): {@link PublicResolvedModifierOption}. One selectable option in a resolved
 * modifier group, with its price change, tax category, and whether it is available.
 */
export type PublicResolvedModifierOption = {
    /** Shape $ (Value): boolean. */
    "available": boolean;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "default_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
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
    /** Shape $ (Value): string. */
    "modifier_id": string;
    /** Shape $ (Value): string. */
    "name": string;
    /** Shape $ (Value): integer. Format: int32. */
    "position"?: number;
    /** Shape $ (Value): boolean. */
    "selected_by_default"?: boolean;
    /** Shape $ (Value): boolean. */
    "show_on_fulfillment"?: boolean;
    /** Shape $ (Value): boolean. */
    "show_on_receipt"?: boolean;
    /** Shape $ (Value): boolean. */
    "taxable"?: boolean;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_delta_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link PublishReturnPolicyRevisionRequest}. The request body for: Publish
 * return policy revision.
 */
export type PublishReturnPolicyRevisionRequest = {
    /**
     * Shape $ (Value): integer string. Required current version of the Return policy. A stale
     * value returns RETURN_VERSION_CONFLICT. Publishing increments the policy version. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version": `${bigint}`;
    /**
     * Shape $ (Value): {@link ReturnPolicyRevisionRequest}. The rules for a return policy
     * revision: scope, eligibility, return window, approval and resolution modes, shipping, and
     * restocking fee.
     */
    "revision": ReturnPolicyRevisionRequest;
};

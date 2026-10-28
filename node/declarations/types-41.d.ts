import type { PromotionRule } from './types-40.js';
import type { MoneyValueInput, MoneyValue } from './types-33.js';
import type { InputValue } from '../runtime.js';
import type { CreatePromotionCodeRequestInput, CreatePromotionRequestInput } from './types-9.js';
import type { UpdatePromotionCodeRequestInput, UpdatePromotionRequestInput } from './types-52.js';
import type { CheckoutCustomTextConfig, CheckoutPaymentConfig, CheckoutTheme } from './types-4.js';
import type { Image } from './types-21.js';
import type { LegalSettings } from './types-30.js';
import type { PaymentLinkCustomField, PaymentLinkEventConfig, PaymentLinkAvailableVariant } from './types-37.js';
import type { PaymentLinkLineItem, PaymentLinkSubscriptionPreview, PaymentLinkProductOption } from './types-38.js';
import type { ThemeConfig, TextModifierConfigRequest } from './types-50.js';
import type {
    ResponseMeta,
    RefundTaxBreakdownRefund,
    RefundTenderAllocation,
    RefundUnissuedGiftCardRecovery,
    RefundTaxBreakdownRefundIn,
    RefundLineItemModifierAllocation,
    RefundTaxBreakdownRefundInInput
} from './types-42.js';
import type { SelectedProductOption } from './types-47.js';
import type { ReturnPolicyRevisionRequest, ReturnPolicyRevisionRequestInput } from './types-43.js';
import type { ExpandedCustomerSummary, ExpandedOrderSummary, ExpandedPaymentIntentSummary } from './types-18.js';
import type { MetadataMap } from './types-32.js';
import type { PaymentRefund } from './types-39.js';
import type { CategoryReference } from './types-3.js';
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
 * Shape $ (Value): {@link PromotionScheduleRequestRequestInput}. When a promotion is active, with
 * a start time, an end time, and the time zone it was entered in.
 */
export type PromotionScheduleRequestRequestInput = {
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
 * Shape $ (Value): {@link PromotionSettingsRequestRequestInput}. Merchant promotion settings:
 * whether automatic promotions and codes are enabled, and how many promotions can apply to one
 * order.
 */
export type PromotionSettingsRequestRequestInput = PromotionSettings;
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
    "request_id": string;
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
    /**
     * Shape $ (Value): boolean. True for an event with no tickets remaining. For other active
     * links with inventory_routing_source, true when any catalog line cannot be bought at its
     * minimum quantity from that source. Untracked and ad hoc lines do not count. A choice line
     * counts only when every offered variant is sold out. Fixed locations use available stock;
     * policies use their allocatable locations. Stock is not reserved by this read.
     */
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
     * Shape $ (Value): Array of {@link PaymentLinkAvailableVariant}. Listed variants that can
     * currently be sold in the line currency, in variant_ids order. Inactive, archived,
     * unsellable, and other-currency variants are omitted. Each variant includes its advisory
     * sold-out state and its own modifiers. Present only on variant_ids lines. Shape $[] (Value):
     * {@link PaymentLinkAvailableVariant}. A listed payment link variant that can be sold in the
     * line currency, with its current price, options, image, modifiers, and advisory stock state.
     */
    "available_variants"?: Array<PaymentLinkAvailableVariant>;
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
    /**
     * Shape $ (Value): boolean. True when the fixed variant or bundle components cannot be bought
     * at the line minimum quantity from the link inventory_routing_source. The minimum is
     * min_quantity when quantity adjustment is enabled, otherwise quantity. For variant choice
     * lines, true only when every available_variants entry is sold out. Always false for untracked
     * and ad hoc lines. Exposes no stock counts and reserves no stock.
     */
    "is_sold_out": boolean;
    /** Shape $ (Value): string. */
    "key": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): Array of {@link PaymentLinkProductOption}. Active product options for a
     * variant_ids line, in option position order. Values include only those used by
     * available_variants and retain value position order. Empty when the product has no options;
     * omitted on fixed variant and bundle lines. Shape $[] (Value): {@link
     * PaymentLinkProductOption}. An active product option offered on a payment link, with values
     * used by its available variants.
     */
    "product_options"?: Array<PaymentLinkProductOption>;
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
     * value returns VERSION_CONFLICT. Publishing increments the policy version. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version": `${bigint}`;
    /**
     * Shape $ (Value): {@link ReturnPolicyRevisionRequest}. The rules for a return policy
     * revision: scope, eligibility, return window, approval and resolution modes, shipping, and
     * restocking fee.
     */
    "revision": ReturnPolicyRevisionRequest;
};
/**
 * Shape $ (Value): {@link PublishReturnPolicyRevisionRequestInput}. The request body for: Publish
 * return policy revision.
 */
export type PublishReturnPolicyRevisionRequestInput = {
    /**
     * Shape $ (Value): integer string. Required current version of the Return policy. A stale
     * value returns VERSION_CONFLICT. Publishing increments the policy version. Use an integer
     * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     */
    "expected_version": `${bigint}` | bigint;
    /**
     * Shape $ (Value): {@link ReturnPolicyRevisionRequestInput}. The rules for a return policy
     * revision: scope, eligibility, return window, approval and resolution modes, shipping, and
     * restocking fee.
     */
    "revision": ReturnPolicyRevisionRequestInput;
};
/**
 * Shape $ (Value): {@link PurchasedGiftCard}. A gift card issued for one unit of a purchased order
 * line item, with its last four code characters and any card it replaced.
 */
export type PurchasedGiftCard = {
    /** Shape $ (Value): string. */
    "gift_card_id": string;
    /** Shape $ (Value): string. Last four characters of the card's current code. */
    "last4": string;
    /** Shape $ (Value): string. */
    "original_gift_card_id"?: string;
    /** Shape $ (Value): string.  Value enum: "manual_recollection", "processor_recollection". */
    "restoration_reason"?: "manual_recollection" | "processor_recollection" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "unit_ordinal": `${bigint}`;
};
/**
 * Shape $ (Value): {@link QuotaDetails}. Storage usage and limits for a resource, returned in the
 * error details when an image quota is exhausted.
 */
export type QuotaDetails = {
    /**
     * Shape $ (Value): integer string. Maximum bytes available for the resource in the
     * authenticated scope. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64.
     */
    "limit_bytes": `${bigint}`;
    /**
     * Shape $ (Value): string. RFC 3339 time when the next ready unattached image becomes eligible
     * for cleanup, when known. Format: date-time.
     */
    "next_expiration_at"?: string;
    /**
     * Shape $ (Value): integer string. Stored bytes held by completed images that are not attached
     * to a resource. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "ready_unattached_bytes": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Bytes reserved by in-progress resource mutations. Use an
     * integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "reserved_bytes": `${bigint}`;
    /** Shape $ (Value): string. Stable resource name whose quota was exhausted. */
    "resource": string;
    /**
     * Shape $ (Value): integer string. Bytes currently stored for the resource in the
     * authenticated scope. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64.
     */
    "used_bytes": `${bigint}`;
};
/**
 * Shape $ (Value): {@link ReadinessAction}. A step that moves a merchant capability or readiness
 * axis forward, with the party that must do it (`owner`) and any required fields.
 */
export type ReadinessAction = {
    /**
     * Shape $ (Value): string. Value enum: "advance_onboarding", "create_api_key",
     * "create_merchant_account_session", "wait_for_review", "settle_flint_balance",
     * "set_tax_category", "contact_support", "other".
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
     * Shape $ (Value): {@link ReadinessMerchantAccountSession}. Settings for the merchant account
     * session a `ReadinessAction` calls for: which components to show and which requirements to
     * collect.
     */
    "merchant_account_session"?: ReadinessMerchantAccountSession;
    /** Shape $ (Value): string.  Value enum: "integrator", "merchant", "flint". */
    "owner": "integrator" | "merchant" | "flint" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "required_fields"?: Array<string>;
};
/**
 * Shape $ (Value): {@link ReadinessAxis}. Readiness for one area of a merchant account, with its
 * `status`, the reason for it, and the actions that would advance it.
 */
export type ReadinessAxis = {
    /**
     * Shape $ (Value): Array of {@link ReadinessAction}. Shape $[] (Value): {@link
     * ReadinessAction}. A step that moves a merchant capability or readiness axis forward, with
     * the party that must do it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /**
     * Shape $ (Value): string. Value enum: "ready", "pending", "blocked", "not_requested",
     * "not_available".
     */
    "status": "ready" | "pending" | "blocked" | "not_requested" | "not_available" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "onboarding_not_started", "requirements_due",
     * "requirements_past_due", "pending_verification", "account_rejected",
     * "disabled_by_platform_policy", "billing_suspended", "platform_review",
     * "processing_not_enabled", "platform_funding_unavailable", "tax_category_required",
     * "service_unavailable", "payment_option_access_not_provisioned",
     * "payment_option_activation_pending", "payment_option_not_in_plan",
     * "payment_option_not_available", "capability_not_active", "other".
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
 * Shape $ (Value): {@link ReadinessMerchantAccountSession}. Settings for the merchant account
 * session a `ReadinessAction` calls for: which components to show and which requirements to
 * collect.
 */
export type ReadinessMerchantAccountSession = {
    /** Shape $ (Value): string.  Value enum: "upfront", "incremental". */
    "collection_strategy": "upfront" | "incremental" | (string & {});
    /**
     * Shape $ (Value): Array of string. [] enum: "account_onboarding", "account_management",
     * "payouts", "balances", "tax_documents", "notification_banner". Shape $[] (Value): string.
     * Value enum: "account_onboarding", "account_management", "payouts", "balances",
     * "tax_documents", "notification_banner".
     */
    "components": Array<"account_onboarding"
        | "account_management"
        | "payouts"
        | "balances"
        | "tax_documents"
        | "notification_banner"
        | (string & {})>;
    /** Shape $ (Value): string.  Value enum: "omit", "include". */
    "future_requirements": "omit" | "include" | (string & {});
    /**
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
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
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
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
 * Shape $ (Value): {@link ReadinessRequirements}. Account information requirements for a merchant,
 * grouped as currently due, eventually due, past due, and pending verification.
 */
export type ReadinessRequirements = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "current_deadline_at"?: string;
    /**
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
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
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
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
     * Shape $ (Value): string. Value enum: "account_attention_required", "account_paused",
     * "account_rejected", "account_requirements_due", "account_under_review",
     * "requirements_past_due", "requirements_pending_verification".
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
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
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
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
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
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
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
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
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
     * Shape $ (Value): Array of string. Flint requirement codes. New codes can appear; treat an
     * unknown code as additional_account_information. [] enum: "additional_account_information",
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
     * "representative_tax_id_last_four". Shape $[] (Value): string. Value enum:
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
    /** Shape $ (Value): string.  Value enum: "flint", "payment_processor". */
    "rejected_by"?: "flint" | "payment_processor" | (string & {});
};
/**
 * Shape $ (Value): {@link ReceiptSettings}. Receipt settings: whether receipts are emailed
 * automatically, whether they are itemized, and the header and footer text.
 */
export type ReceiptSettings = {
    /**
     * Shape $ (Value): boolean. Whether Flint automatically emails a receipt after a successful
     * payment.
     */
    "auto_email_enabled"?: boolean;
    /** Shape $ (Value): string. */
    "footer_text"?: string;
    /** Shape $ (Value): string. */
    "header_text"?: string;
    /** Shape $ (Value): boolean. */
    "is_itemized"?: boolean;
};
/**
 * Shape $ (Value): {@link ReceiptSettingsRequest}. Receipt settings to change when updating
 * settings. Send null for `header_text` or `footer_text` to clear it.
 */
export type ReceiptSettingsRequest = {
    /**
     * Shape $ (Value): boolean. Whether Flint automatically emails a receipt after a successful
     * payment.
     */
    "auto_email_enabled"?: boolean;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "footer_text"?: string | null;
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. */
    "header_text"?: string | null;
    /** Shape $ (Value): boolean. */
    "is_itemized"?: boolean;
};
/**
 * Shape $ (Value): {@link ReceiptSettingsRequestInput}. Receipt settings to change when updating
 * settings. Send null for `header_text` or `footer_text` to clear it.
 */
export type ReceiptSettingsRequestInput = ReceiptSettingsRequest;
/**
 * Shape $ (Value): {@link RefreshCustomerSessionRequest}. The request body for: Refresh a customer
 * session.
 */
export type RefreshCustomerSessionRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "refresh_token": string;
};
/**
 * Shape $ (Value): {@link RefreshCustomerSessionRequestInput}. The request body for: Refresh a
 * customer session.
 */
export type RefreshCustomerSessionRequestInput = RefreshCustomerSessionRequest;
/** Shape $ (Value): {@link Refund}. Money returned against a collected payment. */
export type Refund = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "credit_note_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedCustomerSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer ID
     * when the customer is expanded. Shape $.anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    /** Shape $ (Value): string. */
    "customer_id"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Why a refund failed or a payment refund was canceled. Failed and
     * canceled amounts become refundable again. Fix the cause, then create a new refund with a new
     * idempotency key. Unknown provider values are returned as refund_failed. Value enum:
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
     * Shape $ (Value): string. Present only on refunds created through POST
     * /v1/credit-notes/{credit_note_id}/refunds: the Idempotency-Key of that call. Use it with GET
     * /v1/credit-notes/{credit_note_id}/refunds?idempotency_key= to recover a refund whose create
     * response was lost.
     */
    "idempotency_key"?: string;
    /** Shape $ (Value): string. */
    "invoice_id"?: string;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAllocation}. Shape $[] (Value): {@link
     * RefundLineItemAllocation}. How a refund applied to one order line item: quantity, refunded
     * amount, tax, adjustments, and modifier allocations.
     */
    "line_item_allocations"?: Array<RefundLineItemAllocation>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned key-value data stored on a resource. Keys
     * starting with flint_ are reserved for Flint and are not returned. Writes follow the limits
     * on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
     * them.
     */
    "metadata"?: MetadataMap;
    /**
     * Shape $ (Value): {@link ExpandedOrderSummary} or null. Shape $.anyOf[1] (Value): {@link
     * ExpandedOrderSummary}. An order's summary fields, including status, payment and refund
     * status, and pricing and settlement amounts, returned when the order is expanded. Shape
     * $.anyOf[2] (Value): null.
     */
    "order"?: ((ExpandedOrderSummary) | (null));
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /**
     * Shape $ (Value): {@link ExpandedPaymentIntentSummary} or null. Shape $.anyOf[1] (Value):
     * {@link ExpandedPaymentIntentSummary}. A payment intent's summary fields, including amount,
     * status, and capture method, returned when the payment intent is expanded. Shape $.anyOf[2]
     * (Value): null.
     */
    "payment_intent"?: ((ExpandedPaymentIntentSummary) | (null));
    /** Shape $ (Value): string. */
    "payment_intent_id"?: string;
    /**
     * Shape $ (Value): Array of {@link PaymentRefund}. Shape $[] (Value): {@link PaymentRefund}.
     * The part of a refund returned through one payment, with the amount, tip, status, and any
     * failure reason.
     */
    "payment_refunds"?: Array<PaymentRefund>;
    /** Shape $ (Value): string. */
    "payment_review_id"?: string;
    /**
     * Shape $ (Value): string or null. Value enum: "duplicate", "fraudulent",
     * "requested_by_customer", "defective_product", "wrong_item_shipped", "never_received",
     * "not_as_described", "arrived_too_late", "customer_changed_mind", "better_price_found",
     * "accidental_order", "other", null.
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
    /** Shape $ (Value): string. */
    "reason_message"?: string;
    /** Shape $ (Value): string. */
    "refund_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_tip_money": MoneyValue;
    /** Shape $ (Value): string. */
    "return_id"?: string;
    /** Shape $ (Value): string. */
    "return_resolution_id"?: string;
    /**
     * Shape $ (Value): string. Summary of payment_refunds and tender_allocations. Only failed is
     * final: succeeded and partially_succeeded can still change when a bank rejects a refund after
     * accepting it. Follow refund.updated. Value enum: "pending", "succeeded",
     * "partially_succeeded", "failed".
     */
    "status": "pending" | "succeeded" | "partially_succeeded" | "failed" | (string & {});
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefund}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /**
     * Shape $ (Value): Array of {@link RefundTenderAllocation}. Shape $[] (Value): {@link
     * RefundTenderAllocation}. One tender's share of a refund, listed in the refund's tender
     * allocations.
     */
    "tender_allocations"?: Array<RefundTenderAllocation>;
    /**
     * Shape $ (Value): Array of {@link RefundUnissuedGiftCardRecovery}. Cash returned after an
     * unissued gift card purchase refund failed. Return it through a new refund against
     * payment_intent_id and order_line_item_id. It does not issue another card. Source remaining
     * and pending amounts describe the entire original settlement allocation; repeated entries for
     * that source are not additive. Shape $[] (Value): {@link RefundUnissuedGiftCardRecovery}.
     * Details of a gift card purchase refunded before the card was issued, including the amounts
     * recovered.
     */
    "unissued_gift_card_recoveries"?: Array<RefundUnissuedGiftCardRecovery>;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Persisted version of this resource's owned state. Expanded
     * resources and external observations can change independently. Use an integer string (decimal
     * digits), not a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link RefundAdjustmentAudit}. Who made a manual tax adjustment on a refund
 * line item and where it came from, for audit purposes.
 */
export type RefundAdjustmentAudit = {
    /** Shape $ (Value): string. minLength: 1. */
    "actor_id": string;
    /** Shape $ (Value): string.  Value enum: "user", "system", "admin". */
    "actor_type": "user" | "system" | "admin" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "source": string;
};
/**
 * Shape $ (Value): {@link RefundAdjustmentAuditInput}. Who made a manual tax adjustment on a
 * refund line item and where it came from, for audit purposes.
 */
export type RefundAdjustmentAuditInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "actor_id": string;
    /** Shape $ (Value): string.  Value enum: "user", "system", "admin". */
    "actor_type": "user" | "system" | "admin";
    /** Shape $ (Value): string. minLength: 1. */
    "source": string;
};
/**
 * Shape $ (Value): {@link RefundAdjustmentReason}. The reason recorded for a refund line item
 * adjustment, as a `code` with an optional description.
 */
export type RefundAdjustmentReason = {
    /**
     * Shape $ (Value): string. Value enum: "customer_agreement", "jurisdiction_specific_rule",
     * "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction",
     * "other".
     */
    "code": "customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. */
    "description"?: string;
};
/**
 * Shape $ (Value): {@link RefundAdjustmentReasonRequestInput}. The reason to record for a refund
 * adjustment, as a `code` with an optional description.
 */
export type RefundAdjustmentReasonRequestInput = {
    /**
     * Shape $ (Value): string. Value enum: "customer_agreement", "jurisdiction_specific_rule",
     * "merchant_policy", "customer_request", "restocking_policy", "manual_tax_correction",
     * "other".
     */
    "code": "customer_agreement"
        | "jurisdiction_specific_rule"
        | "merchant_policy"
        | "customer_request"
        | "restocking_policy"
        | "manual_tax_correction"
        | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
};
/**
 * Shape $ (Value): {@link RefundCharge}. An order charge to refund when creating a refund, with an
 * optional amount to refund.
 */
export type RefundCharge = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "order_charge_id": string;
};
/**
 * Shape $ (Value): {@link RefundChargeInput}. An order charge to refund when creating a refund,
 * with an optional amount to refund.
 */
export type RefundChargeInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "order_charge_id": string;
};
/**
 * Shape $ (Value): {@link RefundDestinations}. Default refund destinations for payment intent and
 * gift card redemption allocations planned by Flint. Each tender type defaults to original when
 * omitted.
 */
export type RefundDestinations = {
    /**
     * Shape $ (Value): string. Where gift card redemption value is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards, including when the original is
     * closed or cannot accept the full credit. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_redemption"?: "original" | "new_gift_card" | (string & {});
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "payment_intent"?: "original" | "new_gift_card" | (string & {});
};
/**
 * Shape $ (Value): {@link RefundDestinationsInput}. Default refund destinations for payment intent
 * and gift card redemption allocations planned by Flint. Each tender type defaults to original
 * when omitted.
 */
export type RefundDestinationsInput = {
    /**
     * Shape $ (Value): string. Where gift card redemption value is refunded. original credits the
     * original gift card; new_gift_card issues new gift cards, including when the original is
     * closed or cannot accept the full credit. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "gift_card_redemption"?: "original" | "new_gift_card";
    /**
     * Shape $ (Value): string. Where this allocation is refunded. original returns value to the
     * tender that paid; new_gift_card issues new Flint gift cards. Payment intent store credit
     * requires a succeeded USD card, Apple Pay, Google Pay, or Link payment that belongs to an
     * order, with no open chargeback. Affirm, ACH debit, other payment options, non-USD payments,
     * and payments without an order return INVALID_REQUEST with a NOT_ALLOWED detail. Payment
     * chargebacks use the existing dispute refusal. Gift card redemption destinations are
     * unaffected by the payment restrictions. Default: "original". Value enum: "original",
     * "new_gift_card".
     */
    "payment_intent"?: "original" | "new_gift_card";
};
/**
 * Shape $ (Value): {@link RefundGiftCardCode}. The code of a gift card issued by a refund,
 * returned once in the refund result with its `gift_card_id`.
 */
export type RefundGiftCardCode = {
    /** Shape $ (Value): string. */
    "code": string;
    /** Shape $ (Value): string. */
    "gift_card_id": string;
};
/**
 * Shape $ (Value): {@link RefundLineItem}. An order line item to refund, with the quantity or
 * amount, tax handling, and any adjustments such as a restocking fee.
 */
export type RefundLineItem = {
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustmentRefundIn}. Shape $[] (Value):
     * {@link RefundLineItemAdjustmentRefundIn}. An amount to refund back against an earlier line
     * item adjustment, identified by `refund_line_item_adjustment_id`.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundIn>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustmentIn}. Shape $[] (Value): {@link
     * RefundLineItemAdjustmentIn}. An adjustment to apply to a refunded line item, such as a
     * restocking fee or withheld amount, and whether it applies to the gross amount or tax.
     */
    "refund_adjustments"?: Array<RefundLineItemAdjustmentIn>;
    /**
     * Shape $ (Value): {@link RefundAdjustmentAudit}. Who made a manual tax adjustment on a refund
     * line item and where it came from, for audit purposes.
     */
    "tax_adjustment_audit"?: RefundAdjustmentAudit;
    /**
     * Shape $ (Value): {@link RefundAdjustmentReason}. The reason to record for a refund
     * adjustment, as a `code` with an optional description.
     */
    "tax_adjustment_reason"?: RefundAdjustmentReason;
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefundIn}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefundIn}. The tax to refund for one tax breakdown, identified by
     * `tax_breakdown_id`, when setting tax refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundIn>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "automatic", "explicit". */
    "tax_refund_mode"?: "automatic" | "explicit" | (string & {});
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustment}. An adjustment on a refunded line item, such
 * as a restocking fee or withheld amount, with how much has been refunded and what remains.
 */
export type RefundLineItemAdjustment = {
    /**
     * Shape $ (Value): string. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax" | (string & {});
    /**
     * Shape $ (Value): {@link RefundAdjustmentReason}. The reason recorded for a refund line item
     * adjustment, as a `code` with an optional description.
     */
    "reason": RefundAdjustmentReason;
    /** Shape $ (Value): string. */
    "refund_line_item_adjustment_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "remaining_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustmentIn}. An adjustment to apply to a refunded line
 * item, such as a restocking fee or withheld amount, and whether it applies to the gross amount or
 * tax.
 */
export type RefundLineItemAdjustmentIn = {
    /**
     * Shape $ (Value): string. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string.  Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax" | (string & {});
    /**
     * Shape $ (Value): {@link RefundAdjustmentReason}. The reason to record for a refund
     * adjustment, as a `code` with an optional description.
     */
    "reason"?: RefundAdjustmentReason;
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustmentInInput}. An adjustment to apply to a refunded
 * line item, such as a restocking fee or withheld amount, and whether it applies to the gross
 * amount or tax.
 */
export type RefundLineItemAdjustmentInInput = {
    /**
     * Shape $ (Value): string. Value enum: "restocking_fee", "withheld_amount",
     * "refund_adjustment", "tax_adjustment".
     */
    "adjustment_type": "restocking_fee" | "withheld_amount" | "refund_adjustment" | "tax_adjustment";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "none", "gross", "tax". */
    "applies_to": "none" | "gross" | "tax";
    /**
     * Shape $ (Value): {@link RefundAdjustmentReasonRequestInput}. The reason to record for a
     * refund adjustment, as a `code` with an optional description.
     */
    "reason"?: RefundAdjustmentReasonRequestInput;
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustmentRefund}. An amount refunded back against an
 * earlier line item adjustment.
 */
export type RefundLineItemAdjustmentRefund = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "original_refund_line_item_adjustment_id": string;
    /** Shape $ (Value): string. */
    "refund_line_item_adjustment_refund_id": string;
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustmentRefundIn}. An amount to refund back against an
 * earlier line item adjustment, identified by `refund_line_item_adjustment_id`.
 */
export type RefundLineItemAdjustmentRefundIn = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "refund_line_item_adjustment_id": string;
};
/**
 * Shape $ (Value): {@link RefundLineItemAdjustmentRefundInInput}. An amount to refund back against
 * an earlier line item adjustment, identified by `refund_line_item_adjustment_id`.
 */
export type RefundLineItemAdjustmentRefundInInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "refund_line_item_adjustment_id": string;
};
/**
 * Shape $ (Value): {@link RefundLineItemAllocation}. How a refund applied to one order line item:
 * quantity, refunded amount, tax, adjustments, and modifier allocations.
 */
export type RefundLineItemAllocation = {
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustmentRefund}. Shape $[] (Value): {@link
     * RefundLineItemAdjustmentRefund}. An amount refunded back against an earlier line item
     * adjustment.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefund>;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustment}. Shape $[] (Value): {@link
     * RefundLineItemAdjustment}. An adjustment on a refunded line item, such as a restocking fee
     * or withheld amount, with how much has been refunded and what remains.
     */
    "adjustments"?: Array<RefundLineItemAdjustment>;
    /**
     * Shape $ (Value): {@link RefundLineItemAutomaticRefund}. The subtotal, discount, tax, and
     * total Flint calculated automatically for a refunded line item.
     */
    "automatic_refund": RefundLineItemAutomaticRefund;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. Shape $[] (Value): {@link
     * CategoryReference}. A reference to a product category by ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemModifierAllocation}. Shape $[] (Value):
     * {@link RefundLineItemModifierAllocation}. The part of a line item refund that applies to one
     * modifier, by quantity or amount.
     */
    "modifiers"?: Array<RefundLineItemModifierAllocation>;
    /** Shape $ (Value): string. */
    "order_line_item_id": string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string.  Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefund}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefund}. The tax refunded for one tax breakdown on an order.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefund>;
    /** Shape $ (Value): string.  Value enum: "automatic", "explicit". */
    "tax_refund_mode": "automatic" | "explicit" | (string & {});
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link RefundLineItemAutomaticRefund}. The subtotal, discount, tax, and total
 * Flint calculated automatically for a refunded line item.
 */
export type RefundLineItemAutomaticRefund = {
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
};
/**
 * Shape $ (Value): {@link RefundLineItemInput}. An order line item to refund, with the quantity or
 * amount, tax handling, and any adjustments such as a restocking fee.
 */
export type RefundLineItemInput = {
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustmentRefundInInput}. Shape $[] (Value):
     * {@link RefundLineItemAdjustmentRefundInInput}. An amount to refund back against an earlier
     * line item adjustment, identified by `refund_line_item_adjustment_id`.
     */
    "adjustment_refunds"?: Array<RefundLineItemAdjustmentRefundInInput>;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "order_line_item_id": string;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): Array of {@link RefundLineItemAdjustmentInInput}. Shape $[] (Value): {@link
     * RefundLineItemAdjustmentInInput}. An adjustment to apply to a refunded line item, such as a
     * restocking fee or withheld amount, and whether it applies to the gross amount or tax.
     */
    "refund_adjustments"?: Array<RefundLineItemAdjustmentInInput>;
    /**
     * Shape $ (Value): {@link RefundAdjustmentAuditInput}. Who made a manual tax adjustment on a
     * refund line item and where it came from, for audit purposes.
     */
    "tax_adjustment_audit"?: RefundAdjustmentAuditInput;
    /**
     * Shape $ (Value): {@link RefundAdjustmentReasonRequestInput}. The reason to record for a
     * refund adjustment, as a `code` with an optional description.
     */
    "tax_adjustment_reason"?: RefundAdjustmentReasonRequestInput;
    /**
     * Shape $ (Value): Array of {@link RefundTaxBreakdownRefundInInput}. Shape $[] (Value): {@link
     * RefundTaxBreakdownRefundInInput}. The tax to refund for one tax breakdown, identified by
     * `tax_breakdown_id`, when setting tax refunds explicitly.
     */
    "tax_breakdown_refunds"?: Array<RefundTaxBreakdownRefundInInput>;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "tax_money"?: MoneyValueInput;
    /** Shape $ (Value): string.  Value enum: "automatic", "explicit". */
    "tax_refund_mode"?: "automatic" | "explicit";
};

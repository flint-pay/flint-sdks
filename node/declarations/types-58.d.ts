import type {
    PromotionRuleGroupRequest,
    PromotionRecurrenceRequestInput,
    PromotionRuleGroupRequestInput,
    PromotionRuleGroupPreviousAttributes,
    PromotionSchedulePreviousAttributes,
    PromotionRuleGroup
} from './types-59.js';
import type {
    PromotionAmountOffMethodPreviousAttributes,
    PromotionAmountOffMethodRequest,
    PromotionAmountOffMethodRequestInput,
    Promotion
} from './types-57.js';
import type { MerchantWebhookEnvelope, MetadataMap, MetadataRequestInput } from './types-43.js';
import type { PartnerWebhookEnvelope } from './types-50.js';
import type { WebhookPromotion, WebhookPromotionCode } from './types-80.js';
import type { MoneyValue } from './types-44.js';
import type { ResponseMeta } from './types-63.js';
import type { InputValue } from '../runtime.js';
import type { CreatePromotionCodeRequestInput } from './types-12.js';
import type { CategoriesDeleteParams } from './types-5.js';
import type { DisputesAcceptParams } from './types-26.js';
import type { UpdatePromotionCodeRequestInput } from './types-78.js';
/**
 * Send only application_method fields to change. Omitted fields keep their stored values. Sending
 * a different type replaces the effect with the supplied effect fields; allocation,
 * calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and
 * discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options, and
 * each rule group are replaced whole when present. null clears only nullable fields.
 * discounted_item_rules cannot be null for buy_x_get_y. minProperties: 1.
 */
export type PromotionApplicationMethodPatch = {
    /**
     * How the effect is allocated. Omitted allocation keeps its stored value; it defaults by
     * discount_class only when no allocation is stored. Changing discount_class does not reset
     * allocation. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across" | (string & {});
    /**
     * Positive fixed discount in the primary currency. allocation determines whether it applies to
     * each matched item or once across the matched set. amount (Required): integer string.
     * Positive amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. currency
     * (Required): string. Three-letter uppercase ISO 4217 currency code for this amount, such as
     * USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "amount_off_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity"?: number;
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Send null to
     * clear it. Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | null | (string & {}) | null;
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): object. *.amount (Required): integer string. Positive amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. *.currency (Required): string.
     * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency_options"?: Record<string, {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}`;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    }>
        | null;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. anyOf[1] (Value): {@link PromotionRuleGroupRequest}. A rule
     * group is an object with exactly one nonempty all (AND) or any (OR) array of rules or nested
     * groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no rules, or
     * send null where the field is clearable. Responses list rules before nested groups. Under
     * any, a nested group containing only one rule reads back as that rule. Under all, nested
     * groups keep their boundaries to preserve matched_items.subtotal scope. These deterministic
     * normalizations stabilize after one round trip. matched_items.subtotal sums the line items
     * matched by the line_item.* rules in the same all group, including its nested groups.
     * anyOf[2] (Value): null.
     */
    "discounted_item_rules"?: ((PromotionRuleGroupRequest) | (null) | (unknown));
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off"?: number;
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "get_quantity"?: number;
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     */
    "max_applications_per_order"?: number | null;
    /**
     * Maximum matched units discounted, valid only for percent_off with allocation each. null
     * clears the limit. Fields belonging to another effect return INVALID_REQUEST; send type to
     * change effects. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number | null;
    /** Percentage to discount, from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001. */
    "percent_off"?: number;
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "qualifying_item_rules"?: PromotionRuleGroupRequest;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. anyOf[1] (Value): {@link PromotionRecurrence}. How
     * often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever. anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrence) | (null) | (unknown));
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest",
     * "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Discount effect: a percentage, a fixed amount, or a discount on reward items after
     * qualifying purchases. Value enum: "percent_off", "amount_off", "buy_x_get_y".
     */
    "type"?: "percent_off" | "amount_off" | "buy_x_get_y" | (string & {});
};
/**
 * Send only application_method fields to change. Omitted fields keep their stored values. Sending
 * a different type replaces the effect with the supplied effect fields; allocation,
 * calculation_basis, recurrence, and discounted_item_rules are preserved unless sent, and
 * discounted_item_rules: null clears the stored rules. Money, recurrence, currency_options, and
 * each rule group are replaced whole when present. null clears only nullable fields.
 * discounted_item_rules cannot be null for buy_x_get_y. minProperties: 1.
 */
export type PromotionApplicationMethodPatchInput = {
    /**
     * How the effect is allocated. Omitted allocation keeps its stored value; it defaults by
     * discount_class only when no allocation is stored. Changing discount_class does not reset
     * allocation. Value enum: "each", "across".
     */
    "allocation"?: "each" | "across";
    /**
     * Positive fixed discount in the primary currency. allocation determines whether it applies to
     * each matched item or once across the matched set. amount (Required): integer string.
     * Positive amount in the currency's minor unit, such as cents for USD. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64. minimum: 1. currency
     * (Required): string. Three-letter uppercase ISO 4217 currency code for this amount, such as
     * USD. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "amount_off_money"?: {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    };
    /**
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity"?: number;
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Send null to
     * clear it. Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | null;
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): object. *.amount (Required): integer string. Positive amount in the
     * currency's minor unit, such as cents for USD. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1. *.currency (Required): string.
     * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength: 3.
     * maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency_options"?: Record<string, {
        /**
         * Positive amount in the currency's minor unit, such as cents for USD. Use an integer
         * string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
         */
        "amount": `${bigint}` | bigint;
        /**
         * Three-letter uppercase ISO 4217 currency code for this amount, such as USD. minLength:
         * 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
         */
        "currency": string;
    }>
        | null;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. anyOf[1] (Value): {@link PromotionRuleGroupRequestInput}. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups. anyOf[2] (Value): null.
     */
    "discounted_item_rules"?: ((PromotionRuleGroupRequestInput) | (null));
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off"?: number;
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "get_quantity"?: number;
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     */
    "max_applications_per_order"?: number | null;
    /**
     * Maximum matched units discounted, valid only for percent_off with allocation each. null
     * clears the limit. Fields belonging to another effect return INVALID_REQUEST; send type to
     * change effects. Format: int32. minimum: 1.
     */
    "max_discounted_quantity"?: number | null;
    /** Percentage to discount, from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001. */
    "percent_off"?: number;
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "qualifying_item_rules"?: PromotionRuleGroupRequestInput;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. anyOf[1] (Value): {@link
     * PromotionRecurrenceRequestInput}. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever. anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrenceRequestInput) | (null));
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest",
     * "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added";
    /**
     * Discount effect: a percentage, a fixed amount, or a discount on reward items after
     * qualifying purchases. Value enum: "percent_off", "amount_off", "buy_x_get_y".
     */
    "type"?: "percent_off" | "amount_off" | "buy_x_get_y";
};
/** A flat application method whose type selects its effect fields. */
export type PromotionApplicationMethodPreviousAttributes = (((PromotionPercentOffMethodPreviousAttributes)
    | (PromotionAmountOffMethodPreviousAttributes)
    | (PromotionBuyXGetYMethodPreviousAttributes)
    | (unknown)));
/** A flat application method whose type selects its effect fields. */
export type PromotionApplicationMethodRequest = ((PromotionPercentOffMethodRequest)
    | (PromotionAmountOffMethodRequest)
    | (PromotionBuyXGetYMethodRequest)
    | (Record<string, unknown>));
/** A flat application method whose type selects its effect fields. */
export type PromotionApplicationMethodRequestInput = ((PromotionPercentOffMethodRequestInput)
    | (PromotionAmountOffMethodRequestInput)
    | (PromotionBuyXGetYMethodRequestInput));
export type PromotionArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    "event_type"?: "promotion.archived";
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
    "event_type"?: "promotion.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "promotion.archived";
});
/**
 * The `promotion.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "promotion.archived". */
    "event_type"?: "promotion.archived";
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
 * The `promotion.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "promotion.archived". */
    "event_type"?: "promotion.archived";
});
/** The `buy_x_get_y` variant of `PromotionApplicationMethod`. */
export type PromotionBuyXGetYMethod = {
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
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
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
    "discounted_item_rules": PromotionRuleGroup;
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "qualifying_item_rules": PromotionRuleGroup;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest",
     * "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Selects the buy_x_get_y discount effect and its allowed fields. Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y" | (string & {});
};
export type PromotionBuyXGetYMethodPreviousAttributes = {
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
     * max_discounted_quantity requires each. Value enum: "each", "across". anyOf[1] (Value):
     * string. How the effect is applied across the matched items or charges. each applies the
     * effect to every matched item independently: a fixed amount_off is charged per item (10 USD
     * off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken
     * from each item. across applies the effect once to the matched set as a whole: a fixed
     * amount_off is the whole amount one time (10 USD off the group total, not prorated per item),
     * and a percent_off is taken from the combined subtotal. For percent_off the two produce the
     * same total and differ only in how the discount is attributed to individual line items; for
     * amount_off they differ by the number of matched items, so set it deliberately. Defaults to
     * each for line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across". anyOf[2] (Value): null.
     */
    "allocation"?: (("each" | "across" | (string & {})) | (null));
    /**
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * anyOf[2] (Value): null.
     */
    "buy_min_quantity"?: ((number) | (null));
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax". anyOf[1] (Value): string. What a merchandise
     * discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge
     * promotions; sending it there returns `400 INVALID_REQUEST`. Value enum: "subtotal_pre_tax",
     * "subtotal_post_tax". anyOf[2] (Value): null.
     */
    "calculation_basis"?: (("subtotal_pre_tax" | "subtotal_post_tax" | (string & {})) | (null));
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. anyOf[1] (Value): {@link
     * PromotionRuleGroupPreviousAttributes}. A rule group is an object with exactly one nonempty
     * all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key
     * are invalid. Omit the field for no rules, or send null where the field is clearable.
     * Responses list rules before nested groups. Under any, a nested group containing only one
     * rule reads back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups. anyOf[2] (Value): null.
     */
    "discounted_item_rules"?: ((PromotionRuleGroupPreviousAttributes) | (null) | (unknown));
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. anyOf[1] (Value): number. Percentage to discount from reward items, from 1 to 100. Use
     * 100 to make the reward items free. minimum: 1. maximum: 100. multipleOf: 0.0001. anyOf[2]
     * (Value): null.
     */
    "get_percent_off"?: ((number) | (null));
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer.
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * anyOf[2] (Value): null.
     */
    "get_quantity"?: ((number) | (null));
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. anyOf[1] (Value): integer. Maximum number of
     * times the buy_x_get_y promotion can apply to one order. Omit for no limit beyond the
     * qualifying and reward quantities. Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_applications_per_order"?: ((number) | (null));
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion.
     * anyOf[1] (Value): {@link PromotionRuleGroupPreviousAttributes}. A rule group is an object
     * with exactly one nonempty all (AND) or any (OR) array of rules or nested groups. Arrays,
     * empty groups, and a rules key are invalid. Omit the field for no rules, or send null where
     * the field is clearable. Responses list rules before nested groups. Under any, a nested group
     * containing only one rule reads back as that rule. Under all, nested groups keep their
     * boundaries to preserve matched_items.subtotal scope. These deterministic normalizations
     * stabilize after one round trip. matched_items.subtotal sums the line items matched by the
     * line_item.* rules in the same all group, including its nested groups. anyOf[2] (Value):
     * null.
     */
    "qualifying_item_rules"?: ((PromotionRuleGroupPreviousAttributes) | (null) | (unknown));
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. anyOf[1] (Value): {@link
     * PromotionRecurrencePreviousAttributes}. anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrencePreviousAttributes) | (null));
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Value enum: "cheapest", "highest_price",
     * "first_added". anyOf[1] (Value): string. Which matching reward items receive the discount:
     * the cheapest, the highest priced, or those added first to the order. Defaults to cheapest.
     * Default: "cheapest". Value enum: "cheapest", "highest_price", "first_added". anyOf[2]
     * (Value): null.
     */
    "reward_selection"?: (("cheapest" | "highest_price" | "first_added" | (string & {})) | (null));
    /**
     * Selects the buy_x_get_y discount effect and its allowed fields. Value enum: "buy_x_get_y".
     * anyOf[1] (Value): string. Selects the buy_x_get_y discount effect and its allowed fields.
     * Value enum: "buy_x_get_y". anyOf[2] (Value): null.
     */
    "type"?: (("buy_x_get_y" | (string & {})) | (null));
};
/** The `buy_x_get_y` variant of `PromotionApplicationMethodInput`. */
export type PromotionBuyXGetYMethodRequest = {
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
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
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
    "discounted_item_rules": PromotionRuleGroupRequest;
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "qualifying_item_rules": PromotionRuleGroupRequest;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest",
     * "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added" | (string & {});
    /**
     * Selects the buy_x_get_y discount effect and its allowed fields. Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y" | (string & {});
};
/** The `buy_x_get_y` variant of `PromotionApplicationMethodInput`. */
export type PromotionBuyXGetYMethodRequestInput = {
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
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity": number;
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
    "discounted_item_rules": PromotionRuleGroupRequestInput;
    /**
     * Percentage to discount from reward items, from 1 to 100. Use 100 to make the reward items
     * free. minimum: 1. maximum: 100. multipleOf: 0.0001.
     */
    "get_percent_off": number;
    /**
     * Maximum number of reward units discounted per application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "get_quantity": number;
    /**
     * Maximum number of times the buy_x_get_y promotion can apply to one order. Omit for no limit
     * beyond the qualifying and reward quantities. Format: int32. minimum: 1.
     */
    "max_applications_per_order"?: number;
    /**
     * Rules that identify the items counted toward buy_min_quantity for a buy_x_get_y promotion. A
     * rule group is an object with exactly one nonempty all (AND) or any (OR) array of rules or
     * nested groups. Arrays, empty groups, and a rules key are invalid. Omit the field for no
     * rules, or send null where the field is clearable. Responses list rules before nested groups.
     * Under any, a nested group containing only one rule reads back as that rule. Under all,
     * nested groups keep their boundaries to preserve matched_items.subtotal scope. These
     * deterministic normalizations stabilize after one round trip. matched_items.subtotal sums the
     * line items matched by the line_item.* rules in the same all group, including its nested
     * groups.
     */
    "qualifying_item_rules": PromotionRuleGroupRequestInput;
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceRequestInput;
    /**
     * Which matching reward items receive the discount: the cheapest, the highest priced, or those
     * added first to the order. Defaults to cheapest. Default: "cheapest". Value enum: "cheapest",
     * "highest_price", "first_added".
     */
    "reward_selection"?: "cheapest" | "highest_price" | "first_added";
    /**
     * Selects the buy_x_get_y discount effect and its allowed fields. Value enum: "buy_x_get_y".
     */
    "type": "buy_x_get_y";
};
/**
 * A promotion considered for an order, with its discount amounts, its stacking rules, and why it
 * was or was not applied.
 */
export type PromotionCandidate = {
    /**
     * Calculated discount amount for this promotion candidate before final application, when
     * available. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Discount amount applied to the order for candidates in applied[]. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "applied_money"?: MoneyValue;
    /**
     * Which promotion discount classes this promotion may share an order with. Both promotions
     * must allow each other's class. Which kinds of discounts a promotion can combine with: line
     * item, order, and service charge discounts.
     */
    "combines_with"?: PromotionCombinesWith;
    /**
     * Current money amount counted toward threshold_money for available[] candidates. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "current_money"?: MoneyValue;
    /**
     * The name buyers see for the promotion: its `display_name`, or its `name` when it has no
     * display name.
     */
    "customer_facing_name": string;
    /**
     * Whether the promotion discounts the order, individual line items, or service charges. Value
     * enum: "order", "line_item", "service_charge".
     */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * The promotion's exclusivity group and priority. Promotions in the same group compete, and
     * only one of them applies. Only one promotion in an exclusivity group continues. See
     * Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivity;
    /**
     * Additional money amount needed to reach threshold_money for available[] candidates. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "gap_money"?: MoneyValue;
    /**
     * IDs of the order charges the discount applies to. Set for `service_charge` promotions. []
     * (Value): string. Example: "och_01KEZF7C00XX8AKACP0GHKFWWT".
     */
    "order_charge_ids"?: Array<string>;
    /**
     * IDs of the order line items the discount applies to. Omitted when it applies to none. []
     * (Value): string. Example: "li_01KEZF7C008YPRCK7VDKTGWR31".
     */
    "order_line_item_ids"?: Array<string>;
    /** The code the buyer entered. Omitted when the promotion applies automatically. */
    "promotion_code"?: string;
    /**
     * ID of the promotion code the buyer entered. Omitted when the promotion applies
     * automatically. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
     */
    "promotion_code_id"?: string;
    /**
     * Why the promotion did not apply, or stopped applying. Omitted for a promotion that applies.
     * Value enum: "already_applied", "automatic_disabled", "buy_item_missing", "code_invalid",
     * "code_required", "codes_disabled", "currency_mismatch", "customer_limit_reached",
     * "customer_mismatch", "customer_required", "exhausted", "expired", "inactive",
     * "max_promotions_reached", "minimum_not_met", "no_discountable_balance", "not_combinable",
     * "not_eligible", "not_yet_started", "recurrence_completed", "superseded",
     * "superseded_by_better_offer", "superseded_by_higher_priority", "unknown_type".
     */
    "promotion_decline_reason"?: "already_applied"
        | "automatic_disabled"
        | "buy_item_missing"
        | "code_invalid"
        | "code_required"
        | "codes_disabled"
        | "currency_mismatch"
        | "customer_limit_reached"
        | "customer_mismatch"
        | "customer_required"
        | "exhausted"
        | "expired"
        | "inactive"
        | "max_promotions_reached"
        | "minimum_not_met"
        | "no_discountable_balance"
        | "not_combinable"
        | "not_eligible"
        | "not_yet_started"
        | "recurrence_completed"
        | "superseded"
        | "superseded_by_better_offer"
        | "superseded_by_higher_priority"
        | "unknown_type"
        | (string & {});
    /** ID of the promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". */
    "promotion_id": string;
    /**
     * Minimum money amount required by a threshold rule for available[] candidates. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "threshold_money"?: MoneyValue;
    /**
     * Discount amount this candidate would have applied if it had been eligible and won conflict
     * resolution. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code.
     */
    "would_have_applied_money"?: MoneyValue;
};
/** A code a buyer enters to claim a promotion. */
export type PromotionCode = {
    /**
     * Whether a buyer can redeem the code right now: the code is active, not expired, and under
     * its max_uses, and its promotion is available.
     */
    "available": boolean;
    /** Code a buyer enters to redeem the promotion. */
    "code": string;
    /**
     * When the promotion code was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "created_at": string;
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Null when the code is unbound. Example:
     * "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Maximum number of times this code can be redeemed. Omitted when the code has no redemption
     * limit. Format: int64.
     */
    "max_uses"?: number;
    /**
     * Identifier of the merchant that owns the promotion code. Example:
     * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     */
    "merchant_id": string;
    /**
     * Key-value data you attach to the promotion code. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * The promotion this code belongs to. Present only when the list request asked for
     * expand=promotion. Promotion evaluation order: manual discounts stay, do not count toward the
     * cap, and are ignored by combines_with. Frozen subscription-term promotions are admitted
     * first and are exempt from exclusivity, combines_with, and the cap. Candidates include codes
     * being applied, existing promotion discounts, and qualifying automatic promotions. Each
     * exclusivity group keeps its highest-priority member, then the larger standalone discount,
     * earlier created_at, and lower promotion_id. Remaining candidates rank by standalone
     * discount, then earlier created_at and lower promotion_id; each is admitted unless
     * max_promotions_per_order is reached or both promotions do not allow each other's discount
     * class. Admitted promotions price line item first, then order, then service charge. A
     * zero-value promotion is dropped and selection runs again.
     */
    "promotion"?: Promotion;
    /** Unique identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". */
    "promotion_code_id": string;
    /**
     * Identifier of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
    /**
     * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH; DELETE
     * sets archived. An active code can still be unavailable: read available. Value enum:
     * "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires.
     */
    "timezone"?: string;
    /**
     * Why available is false. Present only when available is false. The code's own state is
     * reported first; promotion_unavailable means the code is usable but its promotion is not.
     * Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
     */
    "unavailable_reason"?: "archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {});
    /**
     * When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "updated_at": string;
    /** Number of times this code has been redeemed. Format: int64. */
    "uses_count": number;
    /**
     * Persisted owned-state version. Clock-based availability and expanded resources do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
export type PromotionCodeArchivedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPromotionCode;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "available"?: ((boolean) | (null));
            "code"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "max_uses"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "promotion_code_id"?: ((string) | (null));
            "promotion_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "timezone"?: ((string) | (null));
            "unavailable_reason"?: (("archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "uses_count"?: ((number) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "promotion_code.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPromotionCode;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "available"?: ((boolean) | (null));
            "code"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "max_uses"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "promotion_code_id"?: ((string) | (null));
            "promotion_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "timezone"?: ((string) | (null));
            "unavailable_reason"?: (("archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "uses_count"?: ((number) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "promotion_code.archived";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "promotion_code.archived";
});
/**
 * The `promotion_code.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCodeArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPromotionCode}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `promotion`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.available (Optional): boolean or null. Whether a
     * buyer can redeem the code right now: the code is active, not expired, and under its
     * max_uses, and its promotion is available. previous_attributes.available.anyOf[1] (Value):
     * boolean. Whether a buyer can redeem the code right now: the code is active, not expired, and
     * under its max_uses, and its promotion is available. previous_attributes.available.anyOf[2]
     * (Value): null. previous_attributes.code (Optional): string or null. Code a buyer enters to
     * redeem the promotion. previous_attributes.code.anyOf[1] (Value): string. Code a buyer enters
     * to redeem the promotion. previous_attributes.code.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the promotion code was
     * created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value): string.
     * When the promotion code was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.customer_id (Optional): string or null. Only this identified customer
     * can redeem the code. The customer must belong to the same merchant and environment. A
     * checkout may use its merchant-named or email-verified customer; a typed email does not
     * identify a customer. Null when the code is unbound. previous_attributes.customer_id.anyOf[1]
     * (Value): string. Only this identified customer can redeem the code. The customer must belong
     * to the same merchant and environment. A checkout may use its merchant-named or
     * email-verified customer; a typed email does not identify a customer. Null when the code is
     * unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When the code
     * stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
     * expire. previous_attributes.expires_at.anyOf[1] (Value): string. When the code stops being
     * redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.max_uses (Optional): integer or null. Maximum number of times this
     * code can be redeemed. Omitted when the code has no redemption limit.
     * previous_attributes.max_uses.anyOf[1] (Value): integer. Maximum number of times this code
     * can be redeemed. Omitted when the code has no redemption limit. Format: int64.
     * previous_attributes.max_uses.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. Identifier of the merchant that owns the promotion code.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier of the merchant that
     * owns the promotion code. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Key-value data you attach to the promotion code.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.promotion_code_id
     * (Optional): string or null. Unique identifier for the promotion code.
     * previous_attributes.promotion_code_id.anyOf[1] (Value): string. Unique identifier for the
     * promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
     * previous_attributes.promotion_code_id.anyOf[2] (Value): null.
     * previous_attributes.promotion_id (Optional): string or null. Identifier of the promotion
     * this code redeems. previous_attributes.promotion_id.anyOf[1] (Value): string. Identifier of
     * the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * previous_attributes.promotion_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Lifecycle status: active, inactive, or archived. Set active or
     * inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read
     * available. Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[1]
     * (Value): string. Lifecycle status: active, inactive, or archived. Set active or inactive
     * with PATCH; DELETE sets archived. An active code can still be unavailable: read available.
     * Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.timezone (Optional): string or null. IANA zone the code's times
     * were entered in, used for display. expires_at is an absolute timestamp, so this does not
     * change when the code expires. previous_attributes.timezone.anyOf[1] (Value): string. IANA
     * zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires.
     * previous_attributes.timezone.anyOf[2] (Value): null. previous_attributes.unavailable_reason
     * (Optional): string or null. Why available is false. Present only when available is false.
     * The code's own state is reported first; promotion_unavailable means the code is usable but
     * its promotion is not. Value enum: "archived", "inactive", "expired", "exhausted",
     * "promotion_unavailable". previous_attributes.unavailable_reason.anyOf[1] (Value): string.
     * Why available is false. Present only when available is false. The code's own state is
     * reported first; promotion_unavailable means the code is usable but its promotion is not.
     * Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
     * previous_attributes.unavailable_reason.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the promotion code was last
     * updated, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.uses_count (Optional): integer or null. Number of times this code has
     * been redeemed. previous_attributes.uses_count.anyOf[1] (Value): integer. Number of times
     * this code has been redeemed. Format: int64. previous_attributes.uses_count.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. */
        "object": WebhookPromotionCode;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. available (Optional): boolean or null. Whether a
         * buyer can redeem the code right now: the code is active, not expired, and under its
         * max_uses, and its promotion is available. available.anyOf[1] (Value): boolean. Whether a
         * buyer can redeem the code right now: the code is active, not expired, and under its
         * max_uses, and its promotion is available. available.anyOf[2] (Value): null. code
         * (Optional): string or null. Code a buyer enters to redeem the promotion. code.anyOf[1]
         * (Value): string. Code a buyer enters to redeem the promotion. code.anyOf[2] (Value):
         * null. created_at (Optional): string or null. When the promotion code was created, as an
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. When the promotion code was
         * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer_id (Optional): string or null. Only this
         * identified customer can redeem the code. The customer must belong to the same merchant
         * and environment. A checkout may use its merchant-named or email-verified customer; a
         * typed email does not identify a customer. Null when the code is unbound.
         * customer_id.anyOf[1] (Value): string. Only this identified customer can redeem the code.
         * The customer must belong to the same merchant and environment. A checkout may use its
         * merchant-named or email-verified customer; a typed email does not identify a customer.
         * Null when the code is unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. expires_at (Optional): string or null. When the code
         * stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
         * expire. expires_at.anyOf[1] (Value): string. When the code stops being redeemable, as an
         * absolute RFC3339 timestamp. Omitted when the code does not expire. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. max_uses (Optional):
         * integer or null. Maximum number of times this code can be redeemed. Omitted when the
         * code has no redemption limit. max_uses.anyOf[1] (Value): integer. Maximum number of
         * times this code can be redeemed. Omitted when the code has no redemption limit. Format:
         * int64. max_uses.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns the promotion code. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns the promotion code. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Key-value data you attach to the promotion
         * code. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * promotion_code_id (Optional): string or null. Unique identifier for the promotion code.
         * promotion_code_id.anyOf[1] (Value): string. Unique identifier for the promotion code.
         * Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". promotion_code_id.anyOf[2] (Value): null.
         * promotion_id (Optional): string or null. Identifier of the promotion this code redeems.
         * promotion_id.anyOf[1] (Value): string. Identifier of the promotion this code redeems.
         * Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". promotion_id.anyOf[2] (Value): null. status
         * (Optional): string or null. Lifecycle status: active, inactive, or archived. Set active
         * or inactive with PATCH; DELETE sets archived. An active code can still be unavailable:
         * read available. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value):
         * string. Lifecycle status: active, inactive, or archived. Set active or inactive with
         * PATCH; DELETE sets archived. An active code can still be unavailable: read available.
         * Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. timezone
         * (Optional): string or null. IANA zone the code's times were entered in, used for
         * display. expires_at is an absolute timestamp, so this does not change when the code
         * expires. timezone.anyOf[1] (Value): string. IANA zone the code's times were entered in,
         * used for display. expires_at is an absolute timestamp, so this does not change when the
         * code expires. timezone.anyOf[2] (Value): null. unavailable_reason (Optional): string or
         * null. Why available is false. Present only when available is false. The code's own state
         * is reported first; promotion_unavailable means the code is usable but its promotion is
         * not. Value enum: "archived", "inactive", "expired", "exhausted",
         * "promotion_unavailable". unavailable_reason.anyOf[1] (Value): string. Why available is
         * false. Present only when available is false. The code's own state is reported first;
         * promotion_unavailable means the code is usable but its promotion is not. Value enum:
         * "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
         * unavailable_reason.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * the promotion code was last updated, as an RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. When the promotion code was last updated, as an RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         * uses_count (Optional): integer or null. Number of times this code has been redeemed.
         * uses_count.anyOf[1] (Value): integer. Number of times this code has been redeemed.
         * Format: int64. uses_count.anyOf[2] (Value): null. version (Optional): integer or null.
         * Persisted owned-state version. Clock-based availability and expanded resources do not
         * advance this counter. version.anyOf[1] (Value): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available. anyOf[1] (Value): boolean.
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available. anyOf[2] (Value): null.
             */
            "available"?: ((boolean) | (null));
            /**
             * Code a buyer enters to redeem the promotion. anyOf[1] (Value): string. Code a buyer
             * enters to redeem the promotion. anyOf[2] (Value): null.
             */
            "code"?: ((string) | (null));
            /**
             * When the promotion code was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the promotion code was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Only this identified customer can redeem the code. The customer must belong to the
             * same merchant and environment. A checkout may use its merchant-named or
             * email-verified customer; a typed email does not identify a customer. Null when the
             * code is unbound. anyOf[1] (Value): string. Only this identified customer can redeem
             * the code. The customer must belong to the same merchant and environment. A checkout
             * may use its merchant-named or email-verified customer; a typed email does not
             * identify a customer. Null when the code is unbound. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when
             * the code does not expire. anyOf[1] (Value): string. When the code stops being
             * redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Maximum number of times this code can be redeemed. Omitted when the code has no
             * redemption limit. anyOf[1] (Value): integer. Maximum number of times this code can
             * be redeemed. Omitted when the code has no redemption limit. Format: int64. anyOf[2]
             * (Value): null.
             */
            "max_uses"?: ((number) | (null));
            /**
             * Identifier of the merchant that owns the promotion code. anyOf[1] (Value): string.
             * Identifier of the merchant that owns the promotion code. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Key-value data you attach to the promotion code. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Unique identifier for the promotion code. anyOf[1] (Value): string. Unique
             * identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
             * anyOf[2] (Value): null.
             */
            "promotion_code_id"?: ((string) | (null));
            /**
             * Identifier of the promotion this code redeems. anyOf[1] (Value): string. Identifier
             * of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
             * anyOf[2] (Value): null.
             */
            "promotion_id"?: ((string) | (null));
            /**
             * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH;
             * DELETE sets archived. An active code can still be unavailable: read available. Value
             * enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status:
             * active, inactive, or archived. Set active or inactive with PATCH; DELETE sets
             * archived. An active code can still be unavailable: read available. Value enum:
             * "active", "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * IANA zone the code's times were entered in, used for display. expires_at is an
             * absolute timestamp, so this does not change when the code expires. anyOf[1] (Value):
             * string. IANA zone the code's times were entered in, used for display. expires_at is
             * an absolute timestamp, so this does not change when the code expires. anyOf[2]
             * (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * Why available is false. Present only when available is false. The code's own state
             * is reported first; promotion_unavailable means the code is usable but its promotion
             * is not. Value enum: "archived", "inactive", "expired", "exhausted",
             * "promotion_unavailable". anyOf[1] (Value): string. Why available is false. Present
             * only when available is false. The code's own state is reported first;
             * promotion_unavailable means the code is usable but its promotion is not. Value enum:
             * "archived", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[2]
             * (Value): null.
             */
            "unavailable_reason"?: (("archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {}))
                | (null));
            /**
             * When the promotion code was last updated, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the promotion code was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Number of times this code has been redeemed. anyOf[1] (Value): integer. Number of
             * times this code has been redeemed. Format: int64. anyOf[2] (Value): null.
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
    /** Value enum: "promotion_code.archived". */
    "event_type"?: "promotion_code.archived";
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
 * The `promotion_code.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCodeArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPromotionCode}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `promotion`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.available (Optional): boolean or null. Whether a
     * buyer can redeem the code right now: the code is active, not expired, and under its
     * max_uses, and its promotion is available. previous_attributes.available.anyOf[1] (Value):
     * boolean. Whether a buyer can redeem the code right now: the code is active, not expired, and
     * under its max_uses, and its promotion is available. previous_attributes.available.anyOf[2]
     * (Value): null. previous_attributes.code (Optional): string or null. Code a buyer enters to
     * redeem the promotion. previous_attributes.code.anyOf[1] (Value): string. Code a buyer enters
     * to redeem the promotion. previous_attributes.code.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the promotion code was
     * created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value): string.
     * When the promotion code was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.customer_id (Optional): string or null. Only this identified customer
     * can redeem the code. The customer must belong to the same merchant and environment. A
     * checkout may use its merchant-named or email-verified customer; a typed email does not
     * identify a customer. Null when the code is unbound. previous_attributes.customer_id.anyOf[1]
     * (Value): string. Only this identified customer can redeem the code. The customer must belong
     * to the same merchant and environment. A checkout may use its merchant-named or
     * email-verified customer; a typed email does not identify a customer. Null when the code is
     * unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When the code
     * stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
     * expire. previous_attributes.expires_at.anyOf[1] (Value): string. When the code stops being
     * redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.max_uses (Optional): integer or null. Maximum number of times this
     * code can be redeemed. Omitted when the code has no redemption limit.
     * previous_attributes.max_uses.anyOf[1] (Value): integer. Maximum number of times this code
     * can be redeemed. Omitted when the code has no redemption limit. Format: int64.
     * previous_attributes.max_uses.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. Identifier of the merchant that owns the promotion code.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier of the merchant that
     * owns the promotion code. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Key-value data you attach to the promotion code.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.promotion_code_id
     * (Optional): string or null. Unique identifier for the promotion code.
     * previous_attributes.promotion_code_id.anyOf[1] (Value): string. Unique identifier for the
     * promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
     * previous_attributes.promotion_code_id.anyOf[2] (Value): null.
     * previous_attributes.promotion_id (Optional): string or null. Identifier of the promotion
     * this code redeems. previous_attributes.promotion_id.anyOf[1] (Value): string. Identifier of
     * the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * previous_attributes.promotion_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Lifecycle status: active, inactive, or archived. Set active or
     * inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read
     * available. Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[1]
     * (Value): string. Lifecycle status: active, inactive, or archived. Set active or inactive
     * with PATCH; DELETE sets archived. An active code can still be unavailable: read available.
     * Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.timezone (Optional): string or null. IANA zone the code's times
     * were entered in, used for display. expires_at is an absolute timestamp, so this does not
     * change when the code expires. previous_attributes.timezone.anyOf[1] (Value): string. IANA
     * zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires.
     * previous_attributes.timezone.anyOf[2] (Value): null. previous_attributes.unavailable_reason
     * (Optional): string or null. Why available is false. Present only when available is false.
     * The code's own state is reported first; promotion_unavailable means the code is usable but
     * its promotion is not. Value enum: "archived", "inactive", "expired", "exhausted",
     * "promotion_unavailable". previous_attributes.unavailable_reason.anyOf[1] (Value): string.
     * Why available is false. Present only when available is false. The code's own state is
     * reported first; promotion_unavailable means the code is usable but its promotion is not.
     * Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
     * previous_attributes.unavailable_reason.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the promotion code was last
     * updated, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.uses_count (Optional): integer or null. Number of times this code has
     * been redeemed. previous_attributes.uses_count.anyOf[1] (Value): integer. Number of times
     * this code has been redeemed. Format: int64. previous_attributes.uses_count.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. */
        "object": WebhookPromotionCode;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. available (Optional): boolean or null. Whether a
         * buyer can redeem the code right now: the code is active, not expired, and under its
         * max_uses, and its promotion is available. available.anyOf[1] (Value): boolean. Whether a
         * buyer can redeem the code right now: the code is active, not expired, and under its
         * max_uses, and its promotion is available. available.anyOf[2] (Value): null. code
         * (Optional): string or null. Code a buyer enters to redeem the promotion. code.anyOf[1]
         * (Value): string. Code a buyer enters to redeem the promotion. code.anyOf[2] (Value):
         * null. created_at (Optional): string or null. When the promotion code was created, as an
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. When the promotion code was
         * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer_id (Optional): string or null. Only this
         * identified customer can redeem the code. The customer must belong to the same merchant
         * and environment. A checkout may use its merchant-named or email-verified customer; a
         * typed email does not identify a customer. Null when the code is unbound.
         * customer_id.anyOf[1] (Value): string. Only this identified customer can redeem the code.
         * The customer must belong to the same merchant and environment. A checkout may use its
         * merchant-named or email-verified customer; a typed email does not identify a customer.
         * Null when the code is unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. expires_at (Optional): string or null. When the code
         * stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
         * expire. expires_at.anyOf[1] (Value): string. When the code stops being redeemable, as an
         * absolute RFC3339 timestamp. Omitted when the code does not expire. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. max_uses (Optional):
         * integer or null. Maximum number of times this code can be redeemed. Omitted when the
         * code has no redemption limit. max_uses.anyOf[1] (Value): integer. Maximum number of
         * times this code can be redeemed. Omitted when the code has no redemption limit. Format:
         * int64. max_uses.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns the promotion code. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns the promotion code. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Key-value data you attach to the promotion
         * code. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * promotion_code_id (Optional): string or null. Unique identifier for the promotion code.
         * promotion_code_id.anyOf[1] (Value): string. Unique identifier for the promotion code.
         * Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". promotion_code_id.anyOf[2] (Value): null.
         * promotion_id (Optional): string or null. Identifier of the promotion this code redeems.
         * promotion_id.anyOf[1] (Value): string. Identifier of the promotion this code redeems.
         * Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". promotion_id.anyOf[2] (Value): null. status
         * (Optional): string or null. Lifecycle status: active, inactive, or archived. Set active
         * or inactive with PATCH; DELETE sets archived. An active code can still be unavailable:
         * read available. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value):
         * string. Lifecycle status: active, inactive, or archived. Set active or inactive with
         * PATCH; DELETE sets archived. An active code can still be unavailable: read available.
         * Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. timezone
         * (Optional): string or null. IANA zone the code's times were entered in, used for
         * display. expires_at is an absolute timestamp, so this does not change when the code
         * expires. timezone.anyOf[1] (Value): string. IANA zone the code's times were entered in,
         * used for display. expires_at is an absolute timestamp, so this does not change when the
         * code expires. timezone.anyOf[2] (Value): null. unavailable_reason (Optional): string or
         * null. Why available is false. Present only when available is false. The code's own state
         * is reported first; promotion_unavailable means the code is usable but its promotion is
         * not. Value enum: "archived", "inactive", "expired", "exhausted",
         * "promotion_unavailable". unavailable_reason.anyOf[1] (Value): string. Why available is
         * false. Present only when available is false. The code's own state is reported first;
         * promotion_unavailable means the code is usable but its promotion is not. Value enum:
         * "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
         * unavailable_reason.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * the promotion code was last updated, as an RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. When the promotion code was last updated, as an RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         * uses_count (Optional): integer or null. Number of times this code has been redeemed.
         * uses_count.anyOf[1] (Value): integer. Number of times this code has been redeemed.
         * Format: int64. uses_count.anyOf[2] (Value): null. version (Optional): integer or null.
         * Persisted owned-state version. Clock-based availability and expanded resources do not
         * advance this counter. version.anyOf[1] (Value): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available. anyOf[1] (Value): boolean.
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available. anyOf[2] (Value): null.
             */
            "available"?: ((boolean) | (null));
            /**
             * Code a buyer enters to redeem the promotion. anyOf[1] (Value): string. Code a buyer
             * enters to redeem the promotion. anyOf[2] (Value): null.
             */
            "code"?: ((string) | (null));
            /**
             * When the promotion code was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the promotion code was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Only this identified customer can redeem the code. The customer must belong to the
             * same merchant and environment. A checkout may use its merchant-named or
             * email-verified customer; a typed email does not identify a customer. Null when the
             * code is unbound. anyOf[1] (Value): string. Only this identified customer can redeem
             * the code. The customer must belong to the same merchant and environment. A checkout
             * may use its merchant-named or email-verified customer; a typed email does not
             * identify a customer. Null when the code is unbound. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when
             * the code does not expire. anyOf[1] (Value): string. When the code stops being
             * redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Maximum number of times this code can be redeemed. Omitted when the code has no
             * redemption limit. anyOf[1] (Value): integer. Maximum number of times this code can
             * be redeemed. Omitted when the code has no redemption limit. Format: int64. anyOf[2]
             * (Value): null.
             */
            "max_uses"?: ((number) | (null));
            /**
             * Identifier of the merchant that owns the promotion code. anyOf[1] (Value): string.
             * Identifier of the merchant that owns the promotion code. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Key-value data you attach to the promotion code. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Unique identifier for the promotion code. anyOf[1] (Value): string. Unique
             * identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
             * anyOf[2] (Value): null.
             */
            "promotion_code_id"?: ((string) | (null));
            /**
             * Identifier of the promotion this code redeems. anyOf[1] (Value): string. Identifier
             * of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
             * anyOf[2] (Value): null.
             */
            "promotion_id"?: ((string) | (null));
            /**
             * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH;
             * DELETE sets archived. An active code can still be unavailable: read available. Value
             * enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status:
             * active, inactive, or archived. Set active or inactive with PATCH; DELETE sets
             * archived. An active code can still be unavailable: read available. Value enum:
             * "active", "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * IANA zone the code's times were entered in, used for display. expires_at is an
             * absolute timestamp, so this does not change when the code expires. anyOf[1] (Value):
             * string. IANA zone the code's times were entered in, used for display. expires_at is
             * an absolute timestamp, so this does not change when the code expires. anyOf[2]
             * (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * Why available is false. Present only when available is false. The code's own state
             * is reported first; promotion_unavailable means the code is usable but its promotion
             * is not. Value enum: "archived", "inactive", "expired", "exhausted",
             * "promotion_unavailable". anyOf[1] (Value): string. Why available is false. Present
             * only when available is false. The code's own state is reported first;
             * promotion_unavailable means the code is usable but its promotion is not. Value enum:
             * "archived", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[2]
             * (Value): null.
             */
            "unavailable_reason"?: (("archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {}))
                | (null));
            /**
             * When the promotion code was last updated, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the promotion code was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Number of times this code has been redeemed. anyOf[1] (Value): integer. Number of
             * times this code has been redeemed. Format: int64. anyOf[2] (Value): null.
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
    /** Value enum: "promotion_code.archived". */
    "event_type"?: "promotion_code.archived";
});
export type PromotionCodeCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPromotionCode;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "promotion_code.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPromotionCode;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "promotion_code.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "promotion_code.created";
});
/**
 * The `promotion_code.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCodeCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPromotionCode}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `promotion`.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. */
        "object": WebhookPromotionCode;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "promotion_code.created". */
    "event_type"?: "promotion_code.created";
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
 * The `promotion_code.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCodeCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPromotionCode}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `promotion`.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. */
        "object": WebhookPromotionCode;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "promotion_code.created". */
    "event_type"?: "promotion_code.created";
});
/** A page of `PromotionCode` objects. */
export type PromotionCodeListResponse = {
    /**
     * Promotion codes returned in the requested sort order. [] (Value): {@link PromotionCode}. A
     * code a buyer enters to claim a promotion.
     */
    "data": Array<PromotionCode>;
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
/** A promotion code to create inline with its promotion. The promotion supplies its parent ID. */
export type PromotionCodeRequest = {
    /** Code a buyer enters to redeem the promotion. minLength: 1. maxLength: 100. */
    "code": string;
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Omit or send null to create an unbound code.
     * minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string | null;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Maximum number of times this code can be redeemed. Omit for no redemption limit. Format:
     * int64.
     */
    "max_uses"?: number;
    /**
     * Key-value data you attach to the promotion code. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /**
     * Lifecycle status. Defaults to active; send inactive to create a code that cannot be
     * redeemed. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive" | (string & {});
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires. minLength: 1. maxLength: 255.
     */
    "timezone"?: string;
};
/** A promotion code to create inline with its promotion. The promotion supplies its parent ID. */
export type PromotionCodeRequestInput = {
    /** Code a buyer enters to redeem the promotion. minLength: 1. maxLength: 100. */
    "code": string;
    /**
     * Only this identified customer can redeem the code. The customer must belong to the same
     * merchant and environment. A checkout may use its merchant-named or email-verified customer;
     * a typed email does not identify a customer. Omit or send null to create an unbound code.
     * minLength: 1. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: string | null;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omit for no expiry.
     * Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Maximum number of times this code can be redeemed. Omit for no redemption limit. Format:
     * int64.
     */
    "max_uses"?: number;
    /**
     * Key-value data you attach to the promotion code. Caller-owned key-value data for a new or
     * replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode
     * code points, values are 1 to 4096 Unicode code points, and keys plus values total at most
     * 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved
     * for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /**
     * Lifecycle status. Defaults to active; send inactive to create a code that cannot be
     * redeemed. Default: "active". Value enum: "active", "inactive".
     */
    "status"?: "active" | "inactive";
    /**
     * IANA zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires. minLength: 1. maxLength: 255.
     */
    "timezone"?: string;
};
/** A response containing `PromotionCode` data. */
export type PromotionCodeResponse = {
    /** The requested promotion code. A code a buyer enters to claim a promotion. */
    "data": PromotionCode;
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
export type PromotionCodeUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPromotionCode;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "available"?: ((boolean) | (null));
            "code"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "max_uses"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "promotion_code_id"?: ((string) | (null));
            "promotion_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "timezone"?: ((string) | (null));
            "unavailable_reason"?: (("archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "uses_count"?: ((number) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "promotion_code.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPromotionCode;
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            "available"?: ((boolean) | (null));
            "code"?: ((string) | (null));
            "created_at"?: ((string) | (null));
            "customer_id"?: ((string) | (null));
            "expires_at"?: ((string) | (null));
            "max_uses"?: ((number) | (null));
            "merchant_id"?: ((string) | (null));
            "metadata"?: ((MetadataMap) | (null));
            "promotion_code_id"?: ((string) | (null));
            "promotion_id"?: ((string) | (null));
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            "timezone"?: ((string) | (null));
            "unavailable_reason"?: (("archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {}))
                | (null));
            "updated_at"?: ((string) | (null));
            "uses_count"?: ((number) | (null));
            "version"?: ((number) | (null));
        });
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "promotion_code.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "promotion_code.updated";
});
/**
 * The `promotion_code.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCodeUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPromotionCode}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `promotion`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.available (Optional): boolean or null. Whether a
     * buyer can redeem the code right now: the code is active, not expired, and under its
     * max_uses, and its promotion is available. previous_attributes.available.anyOf[1] (Value):
     * boolean. Whether a buyer can redeem the code right now: the code is active, not expired, and
     * under its max_uses, and its promotion is available. previous_attributes.available.anyOf[2]
     * (Value): null. previous_attributes.code (Optional): string or null. Code a buyer enters to
     * redeem the promotion. previous_attributes.code.anyOf[1] (Value): string. Code a buyer enters
     * to redeem the promotion. previous_attributes.code.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the promotion code was
     * created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value): string.
     * When the promotion code was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.customer_id (Optional): string or null. Only this identified customer
     * can redeem the code. The customer must belong to the same merchant and environment. A
     * checkout may use its merchant-named or email-verified customer; a typed email does not
     * identify a customer. Null when the code is unbound. previous_attributes.customer_id.anyOf[1]
     * (Value): string. Only this identified customer can redeem the code. The customer must belong
     * to the same merchant and environment. A checkout may use its merchant-named or
     * email-verified customer; a typed email does not identify a customer. Null when the code is
     * unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When the code
     * stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
     * expire. previous_attributes.expires_at.anyOf[1] (Value): string. When the code stops being
     * redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.max_uses (Optional): integer or null. Maximum number of times this
     * code can be redeemed. Omitted when the code has no redemption limit.
     * previous_attributes.max_uses.anyOf[1] (Value): integer. Maximum number of times this code
     * can be redeemed. Omitted when the code has no redemption limit. Format: int64.
     * previous_attributes.max_uses.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. Identifier of the merchant that owns the promotion code.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier of the merchant that
     * owns the promotion code. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Key-value data you attach to the promotion code.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.promotion_code_id
     * (Optional): string or null. Unique identifier for the promotion code.
     * previous_attributes.promotion_code_id.anyOf[1] (Value): string. Unique identifier for the
     * promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
     * previous_attributes.promotion_code_id.anyOf[2] (Value): null.
     * previous_attributes.promotion_id (Optional): string or null. Identifier of the promotion
     * this code redeems. previous_attributes.promotion_id.anyOf[1] (Value): string. Identifier of
     * the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * previous_attributes.promotion_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Lifecycle status: active, inactive, or archived. Set active or
     * inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read
     * available. Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[1]
     * (Value): string. Lifecycle status: active, inactive, or archived. Set active or inactive
     * with PATCH; DELETE sets archived. An active code can still be unavailable: read available.
     * Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.timezone (Optional): string or null. IANA zone the code's times
     * were entered in, used for display. expires_at is an absolute timestamp, so this does not
     * change when the code expires. previous_attributes.timezone.anyOf[1] (Value): string. IANA
     * zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires.
     * previous_attributes.timezone.anyOf[2] (Value): null. previous_attributes.unavailable_reason
     * (Optional): string or null. Why available is false. Present only when available is false.
     * The code's own state is reported first; promotion_unavailable means the code is usable but
     * its promotion is not. Value enum: "archived", "inactive", "expired", "exhausted",
     * "promotion_unavailable". previous_attributes.unavailable_reason.anyOf[1] (Value): string.
     * Why available is false. Present only when available is false. The code's own state is
     * reported first; promotion_unavailable means the code is usable but its promotion is not.
     * Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
     * previous_attributes.unavailable_reason.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the promotion code was last
     * updated, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.uses_count (Optional): integer or null. Number of times this code has
     * been redeemed. previous_attributes.uses_count.anyOf[1] (Value): integer. Number of times
     * this code has been redeemed. Format: int64. previous_attributes.uses_count.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. */
        "object": WebhookPromotionCode;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. available (Optional): boolean or null. Whether a
         * buyer can redeem the code right now: the code is active, not expired, and under its
         * max_uses, and its promotion is available. available.anyOf[1] (Value): boolean. Whether a
         * buyer can redeem the code right now: the code is active, not expired, and under its
         * max_uses, and its promotion is available. available.anyOf[2] (Value): null. code
         * (Optional): string or null. Code a buyer enters to redeem the promotion. code.anyOf[1]
         * (Value): string. Code a buyer enters to redeem the promotion. code.anyOf[2] (Value):
         * null. created_at (Optional): string or null. When the promotion code was created, as an
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. When the promotion code was
         * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer_id (Optional): string or null. Only this
         * identified customer can redeem the code. The customer must belong to the same merchant
         * and environment. A checkout may use its merchant-named or email-verified customer; a
         * typed email does not identify a customer. Null when the code is unbound.
         * customer_id.anyOf[1] (Value): string. Only this identified customer can redeem the code.
         * The customer must belong to the same merchant and environment. A checkout may use its
         * merchant-named or email-verified customer; a typed email does not identify a customer.
         * Null when the code is unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. expires_at (Optional): string or null. When the code
         * stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
         * expire. expires_at.anyOf[1] (Value): string. When the code stops being redeemable, as an
         * absolute RFC3339 timestamp. Omitted when the code does not expire. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. max_uses (Optional):
         * integer or null. Maximum number of times this code can be redeemed. Omitted when the
         * code has no redemption limit. max_uses.anyOf[1] (Value): integer. Maximum number of
         * times this code can be redeemed. Omitted when the code has no redemption limit. Format:
         * int64. max_uses.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns the promotion code. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns the promotion code. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Key-value data you attach to the promotion
         * code. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * promotion_code_id (Optional): string or null. Unique identifier for the promotion code.
         * promotion_code_id.anyOf[1] (Value): string. Unique identifier for the promotion code.
         * Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". promotion_code_id.anyOf[2] (Value): null.
         * promotion_id (Optional): string or null. Identifier of the promotion this code redeems.
         * promotion_id.anyOf[1] (Value): string. Identifier of the promotion this code redeems.
         * Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". promotion_id.anyOf[2] (Value): null. status
         * (Optional): string or null. Lifecycle status: active, inactive, or archived. Set active
         * or inactive with PATCH; DELETE sets archived. An active code can still be unavailable:
         * read available. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value):
         * string. Lifecycle status: active, inactive, or archived. Set active or inactive with
         * PATCH; DELETE sets archived. An active code can still be unavailable: read available.
         * Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. timezone
         * (Optional): string or null. IANA zone the code's times were entered in, used for
         * display. expires_at is an absolute timestamp, so this does not change when the code
         * expires. timezone.anyOf[1] (Value): string. IANA zone the code's times were entered in,
         * used for display. expires_at is an absolute timestamp, so this does not change when the
         * code expires. timezone.anyOf[2] (Value): null. unavailable_reason (Optional): string or
         * null. Why available is false. Present only when available is false. The code's own state
         * is reported first; promotion_unavailable means the code is usable but its promotion is
         * not. Value enum: "archived", "inactive", "expired", "exhausted",
         * "promotion_unavailable". unavailable_reason.anyOf[1] (Value): string. Why available is
         * false. Present only when available is false. The code's own state is reported first;
         * promotion_unavailable means the code is usable but its promotion is not. Value enum:
         * "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
         * unavailable_reason.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * the promotion code was last updated, as an RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. When the promotion code was last updated, as an RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         * uses_count (Optional): integer or null. Number of times this code has been redeemed.
         * uses_count.anyOf[1] (Value): integer. Number of times this code has been redeemed.
         * Format: int64. uses_count.anyOf[2] (Value): null. version (Optional): integer or null.
         * Persisted owned-state version. Clock-based availability and expanded resources do not
         * advance this counter. version.anyOf[1] (Value): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available. anyOf[1] (Value): boolean.
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available. anyOf[2] (Value): null.
             */
            "available"?: ((boolean) | (null));
            /**
             * Code a buyer enters to redeem the promotion. anyOf[1] (Value): string. Code a buyer
             * enters to redeem the promotion. anyOf[2] (Value): null.
             */
            "code"?: ((string) | (null));
            /**
             * When the promotion code was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the promotion code was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Only this identified customer can redeem the code. The customer must belong to the
             * same merchant and environment. A checkout may use its merchant-named or
             * email-verified customer; a typed email does not identify a customer. Null when the
             * code is unbound. anyOf[1] (Value): string. Only this identified customer can redeem
             * the code. The customer must belong to the same merchant and environment. A checkout
             * may use its merchant-named or email-verified customer; a typed email does not
             * identify a customer. Null when the code is unbound. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when
             * the code does not expire. anyOf[1] (Value): string. When the code stops being
             * redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Maximum number of times this code can be redeemed. Omitted when the code has no
             * redemption limit. anyOf[1] (Value): integer. Maximum number of times this code can
             * be redeemed. Omitted when the code has no redemption limit. Format: int64. anyOf[2]
             * (Value): null.
             */
            "max_uses"?: ((number) | (null));
            /**
             * Identifier of the merchant that owns the promotion code. anyOf[1] (Value): string.
             * Identifier of the merchant that owns the promotion code. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Key-value data you attach to the promotion code. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Unique identifier for the promotion code. anyOf[1] (Value): string. Unique
             * identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
             * anyOf[2] (Value): null.
             */
            "promotion_code_id"?: ((string) | (null));
            /**
             * Identifier of the promotion this code redeems. anyOf[1] (Value): string. Identifier
             * of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
             * anyOf[2] (Value): null.
             */
            "promotion_id"?: ((string) | (null));
            /**
             * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH;
             * DELETE sets archived. An active code can still be unavailable: read available. Value
             * enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status:
             * active, inactive, or archived. Set active or inactive with PATCH; DELETE sets
             * archived. An active code can still be unavailable: read available. Value enum:
             * "active", "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * IANA zone the code's times were entered in, used for display. expires_at is an
             * absolute timestamp, so this does not change when the code expires. anyOf[1] (Value):
             * string. IANA zone the code's times were entered in, used for display. expires_at is
             * an absolute timestamp, so this does not change when the code expires. anyOf[2]
             * (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * Why available is false. Present only when available is false. The code's own state
             * is reported first; promotion_unavailable means the code is usable but its promotion
             * is not. Value enum: "archived", "inactive", "expired", "exhausted",
             * "promotion_unavailable". anyOf[1] (Value): string. Why available is false. Present
             * only when available is false. The code's own state is reported first;
             * promotion_unavailable means the code is usable but its promotion is not. Value enum:
             * "archived", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[2]
             * (Value): null.
             */
            "unavailable_reason"?: (("archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {}))
                | (null));
            /**
             * When the promotion code was last updated, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the promotion code was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Number of times this code has been redeemed. anyOf[1] (Value): integer. Number of
             * times this code has been redeemed. Format: int64. anyOf[2] (Value): null.
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
    /** Value enum: "promotion_code.updated". */
    "event_type"?: "promotion_code.updated";
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
 * The `promotion_code.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCodeUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPromotionCode}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `promotion`. previous_attributes (Optional): object. Previous
     * values of changed top-level fields in data.object, at this delivery's API version. Nested
     * changes include the whole previous top-level value. A value is null when the field was
     * absent before the change. Omitted when Flint did not record the previous state, including
     * synthetic test events. previous_attributes.available (Optional): boolean or null. Whether a
     * buyer can redeem the code right now: the code is active, not expired, and under its
     * max_uses, and its promotion is available. previous_attributes.available.anyOf[1] (Value):
     * boolean. Whether a buyer can redeem the code right now: the code is active, not expired, and
     * under its max_uses, and its promotion is available. previous_attributes.available.anyOf[2]
     * (Value): null. previous_attributes.code (Optional): string or null. Code a buyer enters to
     * redeem the promotion. previous_attributes.code.anyOf[1] (Value): string. Code a buyer enters
     * to redeem the promotion. previous_attributes.code.anyOf[2] (Value): null.
     * previous_attributes.created_at (Optional): string or null. When the promotion code was
     * created, as an RFC3339 timestamp. previous_attributes.created_at.anyOf[1] (Value): string.
     * When the promotion code was created, as an RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes.created_at.anyOf[2] (Value): null.
     * previous_attributes.customer_id (Optional): string or null. Only this identified customer
     * can redeem the code. The customer must belong to the same merchant and environment. A
     * checkout may use its merchant-named or email-verified customer; a typed email does not
     * identify a customer. Null when the code is unbound. previous_attributes.customer_id.anyOf[1]
     * (Value): string. Only this identified customer can redeem the code. The customer must belong
     * to the same merchant and environment. A checkout may use its merchant-named or
     * email-verified customer; a typed email does not identify a customer. Null when the code is
     * unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". previous_attributes.customer_id.anyOf[2]
     * (Value): null. previous_attributes.expires_at (Optional): string or null. When the code
     * stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
     * expire. previous_attributes.expires_at.anyOf[1] (Value): string. When the code stops being
     * redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". previous_attributes.expires_at.anyOf[2] (Value):
     * null. previous_attributes.max_uses (Optional): integer or null. Maximum number of times this
     * code can be redeemed. Omitted when the code has no redemption limit.
     * previous_attributes.max_uses.anyOf[1] (Value): integer. Maximum number of times this code
     * can be redeemed. Omitted when the code has no redemption limit. Format: int64.
     * previous_attributes.max_uses.anyOf[2] (Value): null. previous_attributes.merchant_id
     * (Optional): string or null. Identifier of the merchant that owns the promotion code.
     * previous_attributes.merchant_id.anyOf[1] (Value): string. Identifier of the merchant that
     * owns the promotion code. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * previous_attributes.merchant_id.anyOf[2] (Value): null. previous_attributes.metadata
     * (Optional): {@link MetadataMap} or null. Key-value data you attach to the promotion code.
     * previous_attributes.metadata.anyOf[1] (Value): {@link MetadataMap}.
     * previous_attributes.metadata.anyOf[2] (Value): null. previous_attributes.promotion_code_id
     * (Optional): string or null. Unique identifier for the promotion code.
     * previous_attributes.promotion_code_id.anyOf[1] (Value): string. Unique identifier for the
     * promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
     * previous_attributes.promotion_code_id.anyOf[2] (Value): null.
     * previous_attributes.promotion_id (Optional): string or null. Identifier of the promotion
     * this code redeems. previous_attributes.promotion_id.anyOf[1] (Value): string. Identifier of
     * the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     * previous_attributes.promotion_id.anyOf[2] (Value): null. previous_attributes.status
     * (Optional): string or null. Lifecycle status: active, inactive, or archived. Set active or
     * inactive with PATCH; DELETE sets archived. An active code can still be unavailable: read
     * available. Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[1]
     * (Value): string. Lifecycle status: active, inactive, or archived. Set active or inactive
     * with PATCH; DELETE sets archived. An active code can still be unavailable: read available.
     * Value enum: "active", "inactive", "archived". previous_attributes.status.anyOf[2] (Value):
     * null. previous_attributes.timezone (Optional): string or null. IANA zone the code's times
     * were entered in, used for display. expires_at is an absolute timestamp, so this does not
     * change when the code expires. previous_attributes.timezone.anyOf[1] (Value): string. IANA
     * zone the code's times were entered in, used for display. expires_at is an absolute
     * timestamp, so this does not change when the code expires.
     * previous_attributes.timezone.anyOf[2] (Value): null. previous_attributes.unavailable_reason
     * (Optional): string or null. Why available is false. Present only when available is false.
     * The code's own state is reported first; promotion_unavailable means the code is usable but
     * its promotion is not. Value enum: "archived", "inactive", "expired", "exhausted",
     * "promotion_unavailable". previous_attributes.unavailable_reason.anyOf[1] (Value): string.
     * Why available is false. Present only when available is false. The code's own state is
     * reported first; promotion_unavailable means the code is usable but its promotion is not.
     * Value enum: "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
     * previous_attributes.unavailable_reason.anyOf[2] (Value): null.
     * previous_attributes.updated_at (Optional): string or null. When the promotion code was last
     * updated, as an RFC3339 timestamp. previous_attributes.updated_at.anyOf[1] (Value): string.
     * When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". previous_attributes.updated_at.anyOf[2] (Value): null.
     * previous_attributes.uses_count (Optional): integer or null. Number of times this code has
     * been redeemed. previous_attributes.uses_count.anyOf[1] (Value): integer. Number of times
     * this code has been redeemed. Format: int64. previous_attributes.uses_count.anyOf[2] (Value):
     * null. previous_attributes.version (Optional): integer or null. Persisted owned-state
     * version. Clock-based availability and expanded resources do not advance this counter.
     * previous_attributes.version.anyOf[1] (Value): integer. Persisted owned-state version.
     * Clock-based availability and expanded resources do not advance this counter. Format: uint64.
     * minimum: 1. previous_attributes.version.anyOf[2] (Value): null.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `promotion`. */
        "object": WebhookPromotionCode;
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events. available (Optional): boolean or null. Whether a
         * buyer can redeem the code right now: the code is active, not expired, and under its
         * max_uses, and its promotion is available. available.anyOf[1] (Value): boolean. Whether a
         * buyer can redeem the code right now: the code is active, not expired, and under its
         * max_uses, and its promotion is available. available.anyOf[2] (Value): null. code
         * (Optional): string or null. Code a buyer enters to redeem the promotion. code.anyOf[1]
         * (Value): string. Code a buyer enters to redeem the promotion. code.anyOf[2] (Value):
         * null. created_at (Optional): string or null. When the promotion code was created, as an
         * RFC3339 timestamp. created_at.anyOf[1] (Value): string. When the promotion code was
         * created, as an RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at.anyOf[2] (Value): null. customer_id (Optional): string or null. Only this
         * identified customer can redeem the code. The customer must belong to the same merchant
         * and environment. A checkout may use its merchant-named or email-verified customer; a
         * typed email does not identify a customer. Null when the code is unbound.
         * customer_id.anyOf[1] (Value): string. Only this identified customer can redeem the code.
         * The customer must belong to the same merchant and environment. A checkout may use its
         * merchant-named or email-verified customer; a typed email does not identify a customer.
         * Null when the code is unbound. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
         * customer_id.anyOf[2] (Value): null. expires_at (Optional): string or null. When the code
         * stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not
         * expire. expires_at.anyOf[1] (Value): string. When the code stops being redeemable, as an
         * absolute RFC3339 timestamp. Omitted when the code does not expire. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". expires_at.anyOf[2] (Value): null. max_uses (Optional):
         * integer or null. Maximum number of times this code can be redeemed. Omitted when the
         * code has no redemption limit. max_uses.anyOf[1] (Value): integer. Maximum number of
         * times this code can be redeemed. Omitted when the code has no redemption limit. Format:
         * int64. max_uses.anyOf[2] (Value): null. merchant_id (Optional): string or null.
         * Identifier of the merchant that owns the promotion code. merchant_id.anyOf[1] (Value):
         * string. Identifier of the merchant that owns the promotion code. Example:
         * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". merchant_id.anyOf[2] (Value): null. metadata
         * (Optional): {@link MetadataMap} or null. Key-value data you attach to the promotion
         * code. metadata.anyOf[1] (Value): {@link MetadataMap}. metadata.anyOf[2] (Value): null.
         * promotion_code_id (Optional): string or null. Unique identifier for the promotion code.
         * promotion_code_id.anyOf[1] (Value): string. Unique identifier for the promotion code.
         * Example: "pcode_01KEZF7C00JCC7QXWC262EF05T". promotion_code_id.anyOf[2] (Value): null.
         * promotion_id (Optional): string or null. Identifier of the promotion this code redeems.
         * promotion_id.anyOf[1] (Value): string. Identifier of the promotion this code redeems.
         * Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". promotion_id.anyOf[2] (Value): null. status
         * (Optional): string or null. Lifecycle status: active, inactive, or archived. Set active
         * or inactive with PATCH; DELETE sets archived. An active code can still be unavailable:
         * read available. Value enum: "active", "inactive", "archived". status.anyOf[1] (Value):
         * string. Lifecycle status: active, inactive, or archived. Set active or inactive with
         * PATCH; DELETE sets archived. An active code can still be unavailable: read available.
         * Value enum: "active", "inactive", "archived". status.anyOf[2] (Value): null. timezone
         * (Optional): string or null. IANA zone the code's times were entered in, used for
         * display. expires_at is an absolute timestamp, so this does not change when the code
         * expires. timezone.anyOf[1] (Value): string. IANA zone the code's times were entered in,
         * used for display. expires_at is an absolute timestamp, so this does not change when the
         * code expires. timezone.anyOf[2] (Value): null. unavailable_reason (Optional): string or
         * null. Why available is false. Present only when available is false. The code's own state
         * is reported first; promotion_unavailable means the code is usable but its promotion is
         * not. Value enum: "archived", "inactive", "expired", "exhausted",
         * "promotion_unavailable". unavailable_reason.anyOf[1] (Value): string. Why available is
         * false. Present only when available is false. The code's own state is reported first;
         * promotion_unavailable means the code is usable but its promotion is not. Value enum:
         * "archived", "inactive", "expired", "exhausted", "promotion_unavailable".
         * unavailable_reason.anyOf[2] (Value): null. updated_at (Optional): string or null. When
         * the promotion code was last updated, as an RFC3339 timestamp. updated_at.anyOf[1]
         * (Value): string. When the promotion code was last updated, as an RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". updated_at.anyOf[2] (Value): null.
         * uses_count (Optional): integer or null. Number of times this code has been redeemed.
         * uses_count.anyOf[1] (Value): integer. Number of times this code has been redeemed.
         * Format: int64. uses_count.anyOf[2] (Value): null. version (Optional): integer or null.
         * Persisted owned-state version. Clock-based availability and expanded resources do not
         * advance this counter. version.anyOf[1] (Value): integer. Persisted owned-state version.
         * Clock-based availability and expanded resources do not advance this counter. Format:
         * uint64. minimum: 1. version.anyOf[2] (Value): null.
         */
        "previous_attributes"?: ({
            [key: string]: unknown;
        })
            & ({
            /**
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available. anyOf[1] (Value): boolean.
             * Whether a buyer can redeem the code right now: the code is active, not expired, and
             * under its max_uses, and its promotion is available. anyOf[2] (Value): null.
             */
            "available"?: ((boolean) | (null));
            /**
             * Code a buyer enters to redeem the promotion. anyOf[1] (Value): string. Code a buyer
             * enters to redeem the promotion. anyOf[2] (Value): null.
             */
            "code"?: ((string) | (null));
            /**
             * When the promotion code was created, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the promotion code was created, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "created_at"?: ((string) | (null));
            /**
             * Only this identified customer can redeem the code. The customer must belong to the
             * same merchant and environment. A checkout may use its merchant-named or
             * email-verified customer; a typed email does not identify a customer. Null when the
             * code is unbound. anyOf[1] (Value): string. Only this identified customer can redeem
             * the code. The customer must belong to the same merchant and environment. A checkout
             * may use its merchant-named or email-verified customer; a typed email does not
             * identify a customer. Null when the code is unbound. Example:
             * "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
             */
            "customer_id"?: ((string) | (null));
            /**
             * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when
             * the code does not expire. anyOf[1] (Value): string. When the code stops being
             * redeemable, as an absolute RFC3339 timestamp. Omitted when the code does not expire.
             * Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "expires_at"?: ((string) | (null));
            /**
             * Maximum number of times this code can be redeemed. Omitted when the code has no
             * redemption limit. anyOf[1] (Value): integer. Maximum number of times this code can
             * be redeemed. Omitted when the code has no redemption limit. Format: int64. anyOf[2]
             * (Value): null.
             */
            "max_uses"?: ((number) | (null));
            /**
             * Identifier of the merchant that owns the promotion code. anyOf[1] (Value): string.
             * Identifier of the merchant that owns the promotion code. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E". anyOf[2] (Value): null.
             */
            "merchant_id"?: ((string) | (null));
            /**
             * Key-value data you attach to the promotion code. anyOf[1] (Value): {@link
             * MetadataMap}. anyOf[2] (Value): null.
             */
            "metadata"?: ((MetadataMap) | (null));
            /**
             * Unique identifier for the promotion code. anyOf[1] (Value): string. Unique
             * identifier for the promotion code. Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
             * anyOf[2] (Value): null.
             */
            "promotion_code_id"?: ((string) | (null));
            /**
             * Identifier of the promotion this code redeems. anyOf[1] (Value): string. Identifier
             * of the promotion this code redeems. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
             * anyOf[2] (Value): null.
             */
            "promotion_id"?: ((string) | (null));
            /**
             * Lifecycle status: active, inactive, or archived. Set active or inactive with PATCH;
             * DELETE sets archived. An active code can still be unavailable: read available. Value
             * enum: "active", "inactive", "archived". anyOf[1] (Value): string. Lifecycle status:
             * active, inactive, or archived. Set active or inactive with PATCH; DELETE sets
             * archived. An active code can still be unavailable: read available. Value enum:
             * "active", "inactive", "archived". anyOf[2] (Value): null.
             */
            "status"?: (("active" | "inactive" | "archived" | (string & {})) | (null));
            /**
             * IANA zone the code's times were entered in, used for display. expires_at is an
             * absolute timestamp, so this does not change when the code expires. anyOf[1] (Value):
             * string. IANA zone the code's times were entered in, used for display. expires_at is
             * an absolute timestamp, so this does not change when the code expires. anyOf[2]
             * (Value): null.
             */
            "timezone"?: ((string) | (null));
            /**
             * Why available is false. Present only when available is false. The code's own state
             * is reported first; promotion_unavailable means the code is usable but its promotion
             * is not. Value enum: "archived", "inactive", "expired", "exhausted",
             * "promotion_unavailable". anyOf[1] (Value): string. Why available is false. Present
             * only when available is false. The code's own state is reported first;
             * promotion_unavailable means the code is usable but its promotion is not. Value enum:
             * "archived", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[2]
             * (Value): null.
             */
            "unavailable_reason"?: (("archived" | "inactive" | "expired" | "exhausted" | "promotion_unavailable" | (string & {}))
                | (null));
            /**
             * When the promotion code was last updated, as an RFC3339 timestamp. anyOf[1] (Value):
             * string. When the promotion code was last updated, as an RFC3339 timestamp. Format:
             * date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
             */
            "updated_at"?: ((string) | (null));
            /**
             * Number of times this code has been redeemed. anyOf[1] (Value): integer. Number of
             * times this code has been redeemed. Format: int64. anyOf[2] (Value): null.
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
    /** Value enum: "promotion_code.updated". */
    "event_type"?: "promotion_code.updated";
});
export type PromotionCodesCreateParams = (InputValue<CreatePromotionCodeRequestInput>)
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
export type PromotionCodesDeleteParams = CategoriesDeleteParams;
export type PromotionCodesGetParams = DisputesAcceptParams;
export type PromotionCodesListParams = {
    /**
     * Exact match on the parent promotion ID. pattern: ^promo_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id"?: InputValue<string>;
    /**
     * Exact match on the customer bound to the code. Unbound codes are excluded. minLength: 1.
     * pattern: ^cus_[0-9A-HJKMNP-TV-Z]{26}$. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id"?: InputValue<string>;
    /**
     * Exact match that ignores case but distinguishes accents: CAFÉ matches café, but not CAFE.
     * This is the same rule that makes promotion codes unique. Codes preserve their original
     * spelling. Leading and trailing whitespace are rejected, not trimmed. minLength: 1.
     * maxLength: 100.
     */
    "code"?: InputValue<string>;
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
     * Filter by whether a code can be redeemed now or why it cannot. available matches available:
     * true; every other value matches unavailable_reason. Values are ORed and ANDed with status.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "available", "inactive", "expired", "exhausted", "promotion_unavailable". Value enum:
     * "available", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[1] (Value):
     * Array of string. minItems: 1. [] enum: "available", "inactive", "expired", "exhausted",
     * "promotion_unavailable". anyOf[1][] (Value): string. Value enum: "available", "inactive",
     * "expired", "exhausted", "promotion_unavailable". anyOf[2] (Value): string. Value enum:
     * "available", "inactive", "expired", "exhausted", "promotion_unavailable".
     */
    "availability"?: InputValue<("available" | "inactive" | "expired" | "exhausted" | "promotion_unavailable")
        | readonly ("available" | "inactive" | "expired" | "exhausted" | "promotion_unavailable")[]>;
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
     * Field to sort by. Defaults to created_at; ties are broken by promotion_code_id. Default:
     * "created_at". Value enum: "created_at", "updated_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at">;
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
     * Include related objects in the response. Supported expansions: promotion. Expand each code's
     * parent promotion. Expansion requires commerce.promotions.read. Limits: at most 10 unique
     * expand paths per request. [] enum: "promotion". Value enum: "promotion". anyOf[1] (Value):
     * Array of string. [] enum: "promotion". anyOf[1][] (Value): string. Value enum: "promotion".
     * anyOf[2] (Value): string. Value enum: "promotion".
     */
    "expand"?: InputValue<("promotion") | readonly ("promotion")[]>;
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
 * A count of a promotion's codes, including how many are redeemable now and the newest redeemable
 * code.
 */
export type PromotionCodesSummary = {
    /**
     * Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When
     * it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes.
     * Format: int32.
     */
    "active_count": number;
    /** Most recently created redeemable code. Omitted when active_count is zero. */
    "newest_active_code"?: string;
    /** Number of codes on the promotion, excluding archived codes. Format: int32. */
    "total_count": number;
};
export type PromotionCodesSummaryPreviousAttributes = {
    /**
     * Number of codes a buyer can redeem now: active, not expired, and under their max_uses. When
     * it is 0, a code-gated promotion is unavailable with unavailable_reason no_active_codes.
     * anyOf[1] (Value): integer. Number of codes a buyer can redeem now: active, not expired, and
     * under their max_uses. When it is 0, a code-gated promotion is unavailable with
     * unavailable_reason no_active_codes. Format: int32. anyOf[2] (Value): null.
     */
    "active_count"?: ((number) | (null));
    /**
     * Most recently created redeemable code. Omitted when active_count is zero. anyOf[1] (Value):
     * string. Most recently created redeemable code. Omitted when active_count is zero. anyOf[2]
     * (Value): null.
     */
    "newest_active_code"?: ((string) | (null));
    /**
     * Number of codes on the promotion, excluding archived codes. anyOf[1] (Value): integer.
     * Number of codes on the promotion, excluding archived codes. Format: int32. anyOf[2] (Value):
     * null.
     */
    "total_count"?: ((number) | (null));
};
export type PromotionCodesUpdateParams = (InputValue<UpdatePromotionCodeRequestInput>)
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
 * Which kinds of discounts a promotion can combine with: line item, order, and service charge
 * discounts.
 */
export type PromotionCombinesWith = {
    /** Allow line item promotions, subject to the evaluation order on Promotion. */
    "line_item": boolean;
    /** Allow order promotions, subject to the evaluation order on Promotion. */
    "order": boolean;
    /** Allow service charge promotions, subject to the evaluation order on Promotion. */
    "service_charge": boolean;
};
/**
 * Change which promotion discount classes this promotion can combine with. Omitted classes keep
 * their current values. minProperties: 1.
 */
export type PromotionCombinesWithPatch = {
    /** Allow line item promotions, subject to the evaluation order on Promotion. */
    "line_item"?: boolean;
    /** Allow order promotions, subject to the evaluation order on Promotion. */
    "order"?: boolean;
    /** Allow service charge promotions, subject to the evaluation order on Promotion. */
    "service_charge"?: boolean;
};
/**
 * Change which promotion discount classes this promotion can combine with. Omitted classes keep
 * their current values. minProperties: 1.
 */
export type PromotionCombinesWithPatchInput = PromotionCombinesWithPatch;
export type PromotionCombinesWithPreviousAttributes = {
    /**
     * Allow line item promotions, subject to the evaluation order on Promotion. anyOf[1] (Value):
     * boolean. Allow line item promotions, subject to the evaluation order on Promotion. anyOf[2]
     * (Value): null.
     */
    "line_item"?: ((boolean) | (null));
    /**
     * Allow order promotions, subject to the evaluation order on Promotion. anyOf[1] (Value):
     * boolean. Allow order promotions, subject to the evaluation order on Promotion. anyOf[2]
     * (Value): null.
     */
    "order"?: ((boolean) | (null));
    /**
     * Allow service charge promotions, subject to the evaluation order on Promotion. anyOf[1]
     * (Value): boolean. Allow service charge promotions, subject to the evaluation order on
     * Promotion. anyOf[2] (Value): null.
     */
    "service_charge"?: ((boolean) | (null));
};
/**
 * Which promotion discount classes this promotion can combine with. Omitted classes default to
 * true.
 */
export type PromotionCombinesWithRequestInput = PromotionCombinesWithPatch;
export type PromotionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPromotion;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "promotion.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": WebhookPromotion;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "promotion.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "promotion.created";
});
/**
 * The `promotion.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPromotion}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `codes`.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `codes`. */
        "object": WebhookPromotion;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "promotion.created". */
    "event_type"?: "promotion.created";
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
 * The `promotion.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): {@link WebhookPromotion}. The resource snapshot, without expansions.
     * Webhooks omit these fields: `codes`.
     */
    "data"?: {
        /** The resource snapshot, without expansions. Webhooks omit these fields: `codes`. */
        "object": WebhookPromotion;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "promotion.created". */
    "event_type"?: "promotion.created";
});
/** Only one promotion in an exclusivity group continues. See Promotion for the evaluation order. */
export type PromotionExclusivity = {
    /**
     * Exact, case-sensitive group name, 1 to 100 characters after trimming. minLength: 1.
     * maxLength: 100.
     */
    "group": string;
    /**
     * Higher priority wins. Equal priorities favor the larger standalone discount, then the
     * earlier created_at, then the lower promotion_id. Format: int32. Default: 0.
     */
    "priority": number;
};
/**
 * Send only fields to change. Omitted fields keep their stored values. Send priority 0 to reset
 * it. An empty object is invalid. minProperties: 1.
 */
export type PromotionExclusivityPatch = {
    /**
     * Exact, case-sensitive group name, 1 to 100 characters after trimming. minLength: 1.
     * maxLength: 100.
     */
    "group"?: string;
    /**
     * Higher priority wins. Equal priorities favor the larger standalone discount, then the
     * earlier created_at, then the lower promotion_id. Format: int32. Default: 0.
     */
    "priority"?: number;
};
/**
 * Send only fields to change. Omitted fields keep their stored values. Send priority 0 to reset
 * it. An empty object is invalid. minProperties: 1.
 */
export type PromotionExclusivityPatchInput = PromotionExclusivityPatch;
export type PromotionExclusivityPreviousAttributes = {
    /**
     * Exact, case-sensitive group name, 1 to 100 characters after trimming. anyOf[1] (Value):
     * string. Exact, case-sensitive group name, 1 to 100 characters after trimming. minLength: 1.
     * maxLength: 100. anyOf[2] (Value): null.
     */
    "group"?: ((string) | (null));
    /**
     * Higher priority wins. Equal priorities favor the larger standalone discount, then the
     * earlier created_at, then the lower promotion_id. anyOf[1] (Value): integer. Higher priority
     * wins. Equal priorities favor the larger standalone discount, then the earlier created_at,
     * then the lower promotion_id. Format: int32. Default: 0. anyOf[2] (Value): null.
     */
    "priority"?: ((number) | (null));
};
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
export type PromotionPercentOffMethodPreviousAttributes = {
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
     * max_discounted_quantity requires each. Value enum: "each", "across". anyOf[1] (Value):
     * string. How the effect is applied across the matched items or charges. each applies the
     * effect to every matched item independently: a fixed amount_off is charged per item (10 USD
     * off 3 items discounts 30 USD, each capped at the item price), and a percent_off is taken
     * from each item. across applies the effect once to the matched set as a whole: a fixed
     * amount_off is the whole amount one time (10 USD off the group total, not prorated per item),
     * and a percent_off is taken from the combined subtotal. For percent_off the two produce the
     * same total and differ only in how the discount is attributed to individual line items; for
     * amount_off they differ by the number of matched items, so set it deliberately. Defaults to
     * each for line_item and service_charge promotions and across for order promotions.
     * max_discounted_quantity requires each. Value enum: "each", "across". anyOf[2] (Value): null.
     */
    "allocation"?: (("each" | "across" | (string & {})) | (null));
    /**
     * What a merchandise discount is calculated from. Omitted means `subtotal_pre_tax`. Not used
     * by service_charge promotions; sending it there returns `400 INVALID_REQUEST`. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax". anyOf[1] (Value): string. What a merchandise
     * discount is calculated from. Omitted means `subtotal_pre_tax`. Not used by service_charge
     * promotions; sending it there returns `400 INVALID_REQUEST`. Value enum: "subtotal_pre_tax",
     * "subtotal_post_tax". anyOf[2] (Value): null.
     */
    "calculation_basis"?: (("subtotal_pre_tax" | "subtotal_post_tax" | (string & {})) | (null));
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns `400 INVALID_REQUEST`
     * with `param` naming this field. anyOf[1] (Value): {@link
     * PromotionRuleGroupPreviousAttributes}. A rule group is an object with exactly one nonempty
     * all (AND) or any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key
     * are invalid. Omit the field for no rules, or send null where the field is clearable.
     * Responses list rules before nested groups. Under any, a nested group containing only one
     * rule reads back as that rule. Under all, nested groups keep their boundaries to preserve
     * matched_items.subtotal scope. These deterministic normalizations stabilize after one round
     * trip. matched_items.subtotal sums the line items matched by the line_item.* rules in the
     * same all group, including its nested groups. anyOf[2] (Value): null.
     */
    "discounted_item_rules"?: ((PromotionRuleGroupPreviousAttributes) | (null) | (unknown));
    /**
     * Maximum number of matched units that receive the discount. Only valid when type is
     * percent_off, and requires allocation each. Sending it with amount_off or buy_x_get_y returns
     * `400 INVALID_REQUEST` naming this field. Whole-number quantity; fractional quantities are
     * not supported. Flint discounts the first matched units in line-item order (the order items
     * were added), not the cheapest. anyOf[1] (Value): integer. Maximum number of matched units
     * that receive the discount. Only valid when type is percent_off, and requires allocation
     * each. Sending it with amount_off or buy_x_get_y returns `400 INVALID_REQUEST` naming this
     * field. Whole-number quantity; fractional quantities are not supported. Flint discounts the
     * first matched units in line-item order (the order items were added), not the cheapest.
     * Format: int32. minimum: 1. anyOf[2] (Value): null.
     */
    "max_discounted_quantity"?: ((number) | (null));
    /**
     * Percentage to discount, from 1 to 100. anyOf[1] (Value): number. Percentage to discount,
     * from 1 to 100. minimum: 1. maximum: 100. multipleOf: 0.0001. anyOf[2] (Value): null.
     */
    "percent_off"?: ((number) | (null));
    /**
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. anyOf[1] (Value): {@link
     * PromotionRecurrencePreviousAttributes}. anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrencePreviousAttributes) | (null));
    /**
     * Selects the percent_off discount effect and its allowed fields. Value enum: "percent_off".
     * anyOf[1] (Value): string. Selects the percent_off discount effect and its allowed fields.
     * Value enum: "percent_off". anyOf[2] (Value): null.
     */
    "type"?: (("percent_off" | (string & {})) | (null));
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
export type PromotionRecurrenceForeverPreviousAttributes = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. anyOf[1]
     * (Value): integer. Number of charged payments for repeating recurrence. Omit for once and
     * forever. minimum: 1. anyOf[2] (Value): null.
     */
    "period_count"?: ((number) | (null));
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum:
     * "forever". anyOf[1] (Value): string. Use once for the first charged payment, repeating for a
     * fixed number of charged payments, or forever for every payment. period_count is required
     * only for repeating. Value enum: "forever". anyOf[2] (Value): null.
     */
    "type"?: (("forever" | (string & {})) | (null));
})
    & ({
    /**
     * Apply the promotion to every charged subscription payment. Value enum: "forever". anyOf[1]
     * (Value): any. Apply the promotion to every charged subscription payment. Value enum:
     * "forever". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
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
export type PromotionRecurrenceOncePreviousAttributes = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. anyOf[1]
     * (Value): integer. Number of charged payments for repeating recurrence. Omit for once and
     * forever. minimum: 1. anyOf[2] (Value): null.
     */
    "period_count"?: ((number) | (null));
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum: "once".
     * anyOf[1] (Value): string. Use once for the first charged payment, repeating for a fixed
     * number of charged payments, or forever for every payment. period_count is required only for
     * repeating. Value enum: "once". anyOf[2] (Value): null.
     */
    "type"?: (("once" | (string & {})) | (null));
})
    & ({
    /**
     * Apply the promotion to the first charged subscription payment. Value enum: "once". anyOf[1]
     * (Value): any. Apply the promotion to the first charged subscription payment. Value enum:
     * "once". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
});
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
export type PromotionRecurrencePreviousAttributes = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. anyOf[1]
     * (Value): integer. Number of charged payments for repeating recurrence. Omit for once and
     * forever. minimum: 1. anyOf[2] (Value): null.
     */
    "period_count"?: ((number) | (null));
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum: "once",
     * "repeating", "forever". anyOf[1] (Value): string. Use once for the first charged payment,
     * repeating for a fixed number of charged payments, or forever for every payment. period_count
     * is required only for repeating. Value enum: "once", "repeating", "forever". anyOf[2]
     * (Value): null.
     */
    "type"?: (("once" | "repeating" | "forever" | (string & {})) | (null));
})
    & (((Exclude<PromotionRecurrenceOncePreviousAttributes & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceRepeatingPreviousAttributes & object, readonly unknown[]>)
    | (Exclude<PromotionRecurrenceForeverPreviousAttributes & object, readonly unknown[]>)
    | (Record<string, unknown>)));
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
export type PromotionRecurrenceRepeatingPreviousAttributes = ({
    /**
     * Number of charged payments for repeating recurrence. Omit for once and forever. anyOf[1]
     * (Value): integer. Number of charged payments for repeating recurrence. Omit for once and
     * forever. minimum: 1. anyOf[2] (Value): null.
     */
    "period_count"?: ((number) | (null));
    /**
     * Use once for the first charged payment, repeating for a fixed number of charged payments, or
     * forever for every payment. period_count is required only for repeating. Value enum:
     * "repeating". anyOf[1] (Value): string. Use once for the first charged payment, repeating for
     * a fixed number of charged payments, or forever for every payment. period_count is required
     * only for repeating. Value enum: "repeating". anyOf[2] (Value): null.
     */
    "type"?: (("repeating" | (string & {})) | (null));
})
    & ({
    /**
     * Apply the promotion to period_count charged subscription payments. Value enum: "repeating".
     * anyOf[1] (Value): any. Apply the promotion to period_count charged subscription payments.
     * Value enum: "repeating". anyOf[2] (Value): null.
     */
    "type"?: ((unknown) | (null) | (unknown));
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

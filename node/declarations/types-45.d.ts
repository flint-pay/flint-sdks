import type { MerchantWebhookEnvelope, MetadataMap, MoneyValue, MoneyValueInput } from './types-35.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ProductVariant, ProductVariantRequestInput } from './types-44.js';
import type { CreateProductRequestInput } from './types-10.js';
import type { InputValue } from '../runtime.js';
import type { BundlesGetParams } from './types-1.js';
import type { UpdateProductRequestInput, UpdateProductVariantRequestInput } from './types-60.js';
import type {
    PromotionRuleGroup,
    PromotionSchedule,
    PromotionRuleGroupRequest,
    PromotionRecurrenceInput,
    PromotionRuleGroupRequestInput,
    PromotionRecurrenceOnce,
    PromotionRecurrenceRepeating
} from './types-46.js';
import type { ResponseMeta } from './types-48.js';
export type ProductVariantUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": ProductVariant;
    };
    "event_type"?: "product_variant.updated";
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
    "event_type": "product_variant.updated";
});
/**
 * The `product_variant.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type ProductVariantUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.updated". */
    "event_type"?: "product_variant.updated";
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
 * The `product_variant.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type ProductVariantUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link ProductVariant}. A specific purchasable version of a product. */
    "data"?: {
        /** A specific purchasable version of a product. */
        "object": ProductVariant;
    };
    /** Value enum: "product_variant.updated". */
    "event_type"?: "product_variant.updated";
});
export type ProductsCreateParams = (CreateProductRequestInput);
export type ProductsCreateVariantParams = (InputValue<ProductVariantRequestInput>);
export type ProductsDeleteParams = {
    /** Optional product version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type ProductsDeleteVariantParams = {
    /** Optional product variant version last read by the caller. Format: uint64. minimum: 1. */
    "expected_version"?: InputValue<number>;
};
export type ProductsGetOptionParams = {};
export type ProductsGetParams = BundlesGetParams;
export type ProductsGetVariantParams = BundlesGetParams;
export type ProductsListOptionsParams = {
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
};
export type ProductsListParams = {
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
     * Filter by product type. Accepts repeated keys, comma-separated values, or mixtures. Values
     * are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected.
     * Values within this filter are ORed; separate filters are ANDed. [] enum: "physical",
     * "service", "fee", "digital", "gift_card". Value enum: "physical", "service", "fee",
     * "digital", "gift_card". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "physical",
     * "service", "fee", "digital", "gift_card". anyOf[1][] (Value): string. Value enum:
     * "physical", "service", "fee", "digital", "gift_card". anyOf[2] (Value): string. Value enum:
     * "physical", "service", "fee", "digital", "gift_card".
     */
    "product_type"?: InputValue<("physical" | "service" | "fee" | "digital" | "gift_card")
        | readonly ("physical" | "service" | "fee" | "digital" | "gift_card")[]>;
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
    /** Filter by category handle. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "category_handle"?: InputValue<string>;
    /**
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Full-value match on ProductVariant.sku, case- and accent-insensitive, with no trimming. All
     * exact variant filters must match the same non-archived variant, including inactive variants.
     * matched_variant is the first matching variant by position, then variant_id; exact predicates
     * take precedence over query for this witness. minLength: 1. maxLength: 100.
     */
    "sku"?: InputValue<string>;
    /**
     * Byte-sensitive whole-value match on ProductVariant.external_reference_id, preserving
     * whitespace, casing, and Unicode. All exact variant filters must match the same non-archived
     * variant. matched_variant is one deterministic witness; page the nested variant list to
     * enumerate all matches. minLength: 1. maxLength: 255.
     */
    "variant_external_reference_id"?: InputValue<string>;
    /**
     * Exact match on ProductVariant.inventory_item_id. Multiple variants may share one inventory
     * item; this does not match or synchronize the inventory item's SKU. On products, all exact
     * variant filters must match the same non-archived variant. pattern:
     * ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Search across product ID, external reference ID, name, description, and SKU. Text fields
     * match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs
     * match from the start and need the type prefix, such as prod_01.
     */
    "query"?: InputValue<string>;
    /**
     * Filter products with at least one non-deleted variant assigned to this delivery profile.
     * Example: "dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Filter by aggregated delivery readiness across non-deleted variants. Accepts repeated keys,
     * comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen
     * order; empty or unknown entries are rejected. Values within this filter are ORed; separate
     * filters are ANDed. [] enum: "configured", "action_required", "not_applicable". Value enum:
     * "configured", "action_required", "not_applicable". anyOf[1] (Value): Array of string.
     * minItems: 1. [] enum: "configured", "action_required", "not_applicable". anyOf[1][] (Value):
     * string. Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value):
     * string. Value enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<("configured" | "action_required" | "not_applicable")
        | readonly ("configured" | "action_required" | "not_applicable")[]>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by product_id. Default:
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
     * Supported expansions: modifier_set. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. Pass expand=modifier_set. [] enum: "modifier_set". Value
     * enum: "modifier_set". anyOf[1] (Value): Array of string. [] enum: "modifier_set". anyOf[1][]
     * (Value): string. Value enum: "modifier_set". anyOf[2] (Value): string. Value enum:
     * "modifier_set".
     */
    "expand"?: InputValue<("modifier_set") | readonly ("modifier_set")[]>;
};
export type ProductsListVariantsParams = {
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
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Full-value match on ProductVariant.sku, case- and accent-insensitive, with no trimming. Does
     * not search the inventory item's SKU. minLength: 1. maxLength: 100.
     */
    "sku"?: InputValue<string>;
    /**
     * Exact match on ProductVariant.inventory_item_id. Multiple variants may share one inventory
     * item; this does not match or synchronize the inventory item's SKU. On products, all exact
     * variant filters must match the same non-archived variant. pattern:
     * ^invi_[0-9A-HJKMNP-TV-Z]{26}$. Example: "invi_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     */
    "inventory_item_id"?: InputValue<string>;
    /**
     * Search across variant ID, external reference ID, name, SKU, and barcode. Text fields match
     * any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from
     * the start and need the type prefix, such as var_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to position; ties are broken by variant_id. Default: "position".
     * Value enum: "position", "created_at", "updated_at", "unit_price_money".
     */
    "sort_by"?: InputValue<"position" | "created_at" | "updated_at" | "unit_price_money">;
    /**
     * Sort direction. Defaults to asc for position and desc for other sort fields. Default: "asc".
     * Value enum: "asc", "desc".
     */
    "sort_direction"?: InputValue<"asc" | "desc">;
    /** Filter by assigned delivery profile ID. Example: "dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "delivery_profile_id"?: InputValue<string>;
    /**
     * Filter by delivery readiness. Accepts repeated keys, comma-separated values, or mixtures.
     * Values are trimmed and deduplicated in first-seen order; empty or unknown entries are
     * rejected. Values within this filter are ORed; separate filters are ANDed. [] enum:
     * "configured", "action_required", "not_applicable". Value enum: "configured",
     * "action_required", "not_applicable". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "configured", "action_required", "not_applicable". anyOf[1][] (Value): string. Value
     * enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): string. Value
     * enum: "configured", "action_required", "not_applicable".
     */
    "delivery_configuration_status"?: InputValue<("configured" | "action_required" | "not_applicable")
        | readonly ("configured" | "action_required" | "not_applicable")[]>;
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "created_before"?: InputValue<string | globalThis.Date>;
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_after"?: InputValue<string | globalThis.Date>;
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "updated_before"?: InputValue<string | globalThis.Date>;
    /**
     * Supported expansions: modifier_set. Include the requested related resources using scoped
     * batch reads for this page. Each relationship requires its existing target read scopes.
     * Expansion changes the representation without changing pagination tokens. Limits: at most 10
     * unique expand paths per request. Pass expand=modifier_set. [] enum: "modifier_set". Value
     * enum: "modifier_set". anyOf[1] (Value): Array of string. [] enum: "modifier_set". anyOf[1][]
     * (Value): string. Value enum: "modifier_set". anyOf[2] (Value): string. Value enum:
     * "modifier_set".
     */
    "expand"?: InputValue<("modifier_set") | readonly ("modifier_set")[]>;
};
export type ProductsUpdateParams = (InputValue<UpdateProductRequestInput>);
export type ProductsUpdateVariantParams = (InputValue<UpdateProductVariantRequestInput>);
/**
 * Promotion evaluation order: manual discounts stay, do not count toward the cap, and are ignored
 * by combines_with. Frozen subscription-term promotions are admitted first and are exempt from
 * exclusivity, combines_with, and the cap. Candidates include codes being applied, existing
 * promotion discounts, and qualifying automatic promotions. Each exclusivity group keeps its
 * highest-priority member, then the larger standalone discount, earlier created_at, and lower
 * promotion_id. Remaining candidates rank by standalone discount, then earlier created_at and
 * lower promotion_id; each is admitted unless max_promotions_per_order is reached or both
 * promotions do not allow each other's discount class. Admitted promotions price line item first,
 * then order, then service charge. A zero-value promotion is dropped and selection runs again.
 */
export type Promotion = {
    /**
     * Discount effect and how it applies to eligible items or charges. A flat application method
     * whose type selects its effect fields.
     */
    "application_method": PromotionApplicationMethod;
    /**
     * Whether the promotion can apply right now: it is active, inside its schedule, under its
     * max_uses, and, when code-gated, has at least one redeemable code.
     */
    "available": boolean;
    /**
     * The codes this request created, in request order. Present only on the `POST /v1/promotions`
     * response, where it is `[]` for a promotion created without codes. Read codes later with `GET
     * /v1/promotion-codes?promotion_id=`. [] (Value): {@link PromotionCode}. A code a buyer enters
     * to claim a promotion.
     */
    "codes"?: Array<PromotionCode>;
    /**
     * Read-only rollup of this promotion's codes. Present only on code-gated promotions; automatic
     * promotions omit it. A count of a promotion's codes, including how many are redeemable now
     * and the newest redeemable code.
     */
    "codes_summary"?: PromotionCodesSummary;
    /**
     * Which promotion discount classes this promotion may share an order with. Both promotions
     * must allow each other's class. Manual discounts are ignored. See Promotion for the
     * evaluation order. Which kinds of discounts a promotion can combine with: line item, order,
     * and service charge discounts.
     */
    "combines_with": PromotionCombinesWith;
    /** When the promotion was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Optional description of the promotion for your own records. */
    "description"?: string;
    /**
     * Whether the promotion discounts the order, individual line items, or service charges. Value
     * enum: "order", "line_item", "service_charge".
     */
    "discount_class": "order" | "line_item" | "service_charge" | (string & {});
    /** Buyer-facing promotion name shown in checkout and order discount surfaces. */
    "display_name": string;
    /**
     * Conditions an order must satisfy for the promotion to apply. Omitted when the promotion has
     * no eligibility conditions. A rule group is an object with exactly one nonempty all (AND) or
     * any (OR) array of rules or nested groups. Arrays, empty groups, and a rules key are invalid.
     * Omit the field for no rules, or send null where the field is clearable. Responses list rules
     * before nested groups. Under any, a nested group containing only one rule reads back as that
     * rule. Under all, nested groups keep their boundaries to preserve matched_items.subtotal
     * scope. These deterministic normalizations stabilize after one round trip.
     * matched_items.subtotal sums the line items matched by the line_item.* rules in the same all
     * group, including its nested groups.
     */
    "eligibility_rules"?: PromotionRuleGroup;
    /**
     * Optional group and priority used to choose one promotion from competing promotions in the
     * same group. See Promotion for the evaluation order. Only one promotion in an exclusivity
     * group continues. See Promotion for the evaluation order.
     */
    "exclusivity"?: PromotionExclusivity;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Maximum number of redemptions across all codes and automatic applications. Omitted when
     * there is no redemption limit. Format: int64.
     */
    "max_uses"?: number;
    /** Identifier of the merchant that owns the promotion. */
    "merchant_id"?: string;
    /**
     * Key-value data you attach to the promotion. Caller-owned key-value data stored on a
     * resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes
     * follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits
     * may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Internal promotion name for dashboards, searching, and reporting. */
    "name": string;
    /** Unique identifier for the promotion. */
    "promotion_id": string;
    /**
     * Whether the promotion applies automatically when its rules match or requires a promotion
     * code. Value enum: "automatic", "code".
     */
    "redemption_type": "automatic" | "code" | (string & {});
    /**
     * Optional start and end times that limit when the promotion can apply. When a promotion is
     * active, with a start time, an end time, and the time zone it was entered in.
     */
    "schedule"?: PromotionSchedule;
    /**
     * Lifecycle status. Set active or inactive with PATCH; DELETE sets archived. An active
     * promotion can still be unavailable: read available. Value enum: "active", "inactive",
     * "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**
     * Why available is false. Present only when available is false. Value enum: "inactive",
     * "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     */
    "unavailable_reason"?: "inactive"
        | "archived"
        | "not_yet_started"
        | "expired"
        | "exhausted"
        | "no_active_codes"
        | (string & {});
    /** When the promotion was last updated, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Number of times the promotion has been redeemed. Format: int64. */
    "uses_count": number;
    /**
     * Persisted owned-state version. Clock-based availability and expanded resources do not
     * advance this counter. Format: uint64. minimum: 1.
     */
    "version": number;
};
/** The `amount_off` variant of `PromotionApplicationMethod`. */
export type PromotionAmountOffMethod = {
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
     * Positive fixed discount in the primary currency. allocation determines whether it applies to
     * each matched item or once across the matched set. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValue;
    /**
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /** Selects the amount_off discount effect and its allowed fields. Value enum: "amount_off". */
    "type": "amount_off" | (string & {});
};
/** The `amount_off` variant of `PromotionApplicationMethodInput`. */
export type PromotionAmountOffMethodRequest = {
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
     * Positive fixed discount in the primary currency. allocation determines whether it applies to
     * each matched item or once across the matched set. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValue;
    /**
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValue>;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrence;
    /** Selects the amount_off discount effect and its allowed fields. Value enum: "amount_off". */
    "type": "amount_off" | (string & {});
};
/** The `amount_off` variant of `PromotionApplicationMethodInput`. */
export type PromotionAmountOffMethodRequestInput = {
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
     * Positive fixed discount in the primary currency. allocation determines whether it applies to
     * each matched item or once across the matched set. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_off_money": MoneyValueInput;
    /**
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValueInput>;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * Optional recurrence for subscription payments: once applies to the first charged payment,
     * repeating applies for period_count charged payments, and forever applies to every payment.
     * One-time orders apply the promotion once. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence"?: PromotionRecurrenceInput;
    /** Selects the amount_off discount effect and its allowed fields. Value enum: "amount_off". */
    "type": "amount_off";
};
/** A flat application method whose type selects its effect fields. */
export type PromotionApplicationMethod = ((PromotionPercentOffMethod)
    | (PromotionAmountOffMethod)
    | (PromotionBuyXGetYMethod)
    | (Record<string, unknown>));
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
     * each matched item or once across the matched set. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_off_money"?: MoneyValue;
    /**
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity"?: number;
    /**
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Send null to clear it.
     * Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | null | (string & {}) | null;
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValue> | null;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. anyOf[1] (Value): {@link PromotionRuleGroupRequest}. A rule
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
     * each matched item or once across the matched set. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_off_money"?: MoneyValueInput;
    /**
     * Number of qualifying units needed for one application of a buy_x_get_y promotion.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     */
    "buy_min_quantity"?: number;
    /**
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Send null to clear it.
     * Value enum: "subtotal_pre_tax", "subtotal_post_tax", null.
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | null;
    /**
     * Alternative positive fixed discounts, keyed by currency code. Each Money currency must match
     * its key. * (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "currency_options"?: Record<string, MoneyValueInput> | null;
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. anyOf[1] (Value): {@link PromotionRuleGroupRequestInput}. A
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
     * PromotionRecurrenceInput}. How often a promotion's discount repeats on a subscription: once,
     * for a number of charged payments, or forever. anyOf[2] (Value): null.
     */
    "recurrence"?: ((PromotionRecurrenceInput) | (null));
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
        "object": Promotion;
    };
    "event_type"?: "promotion.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.archived";
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
    "event_type": "promotion.archived";
});
/**
 * The `promotion.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "promotion.archived". */
    "event_type"?: "promotion.archived";
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
 * The `promotion.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
    "recurrence"?: PromotionRecurrenceInput;
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
     * Which kinds of discounts a promotion can combine with: line item, order, and service charge
     * discounts.
     */
    "combines_with"?: PromotionCombinesWith;
    /**
     * Current money amount counted toward threshold_money for available[] candidates. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "current_money"?: MoneyValue;
    "customer_facing_name": string;
    /** Value enum: "order", "line_item", "service_charge". */
    "discount_class"?: "order" | "line_item" | "service_charge" | (string & {});
    /**
     * Only one promotion in an exclusivity group continues. See Promotion for the evaluation
     * order.
     */
    "exclusivity"?: PromotionExclusivity;
    /**
     * Additional money amount needed to reach threshold_money for available[] candidates. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "gap_money"?: MoneyValue;
    /**  [] (Value): string. */
    "order_charge_ids"?: Array<string>;
    /**  [] (Value): string. */
    "order_line_item_ids"?: Array<string>;
    "promotion_code"?: string;
    "promotion_code_id"?: string;
    /**
     * Value enum: "already_applied", "automatic_disabled", "buy_item_missing", "code_invalid",
     * "code_required", "codes_disabled", "currency_mismatch", "exhausted", "expired", "inactive",
     * "max_promotions_reached", "minimum_not_met", "no_discountable_balance", "not_combinable",
     * "not_eligible", "not_yet_started", "superseded", "superseded_by_better_offer",
     * "superseded_by_higher_priority", "unknown_type".
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
    /** When the promotion code was created, as an RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * When the code stops being redeemable, as an absolute RFC3339 timestamp. Omitted when the
     * code does not expire. Format: date-time.
     */
    "expires_at"?: string;
    /**
     * Maximum number of times this code can be redeemed. Omitted when the code has no redemption
     * limit. Format: int64.
     */
    "max_uses"?: number;
    /** Identifier of the merchant that owns the promotion code. */
    "merchant_id"?: string;
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
    /** Unique identifier for the promotion code. */
    "promotion_code_id": string;
    /** Identifier of the promotion this code redeems. */
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
    /** When the promotion code was last updated, as an RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
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
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.archived";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.archived";
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
    "event_type": "promotion_code.archived";
});
/**
 * The `promotion_code.archived` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCodeArchivedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
    "data"?: {
        /** A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Value enum: "promotion_code.archived". */
    "event_type"?: "promotion_code.archived";
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
 * The `promotion_code.archived` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCodeArchivedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
    "data"?: {
        /** A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Value enum: "promotion_code.archived". */
    "event_type"?: "promotion_code.archived";
});
export type PromotionCodeCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.created";
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
    "event_type": "promotion_code.created";
});
/**
 * The `promotion_code.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCodeCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
    "data"?: {
        /** A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Value enum: "promotion_code.created". */
    "event_type"?: "promotion_code.created";
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
 * The `promotion_code.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCodeCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
    "data"?: {
        /** A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
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
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": PromotionCode;
    };
    "event_type"?: "promotion_code.updated";
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
    "event_type": "promotion_code.updated";
});
/**
 * The `promotion_code.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCodeUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
    "data"?: {
        /** A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Value enum: "promotion_code.updated". */
    "event_type"?: "promotion_code.updated";
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
 * The `promotion_code.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCodeUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link PromotionCode}. A code a buyer enters to claim a promotion. */
    "data"?: {
        /** A code a buyer enters to claim a promotion. */
        "object": PromotionCode;
    };
    /** Value enum: "promotion_code.updated". */
    "event_type"?: "promotion_code.updated";
});
export type PromotionCodesListParams = {
    /** Exact match on the parent promotion ID. Example: "promo_01ARZ3NDEKTSV4RRFFQ69G5FAV". */
    "promotion_id"?: InputValue<string>;
    /**
     * Exact match that ignores case and accents: CAFÉ matches cafe. This is the same rule that
     * makes promotion codes unique. Codes preserve their original spelling. Leading and trailing
     * whitespace are rejected, not trimmed. minLength: 1. maxLength: 100.
     */
    "code"?: InputValue<string>;
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
     * Filter by whether a code can be redeemed now or why it cannot. available matches available:
     * true; every other value matches unavailable_reason. Values are ORed and ANDed with status.
     * Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and
     * deduplicated in first-seen order; empty or unknown entries are rejected. Values within this
     * filter are ORed; separate filters are ANDed. [] enum: "available", "inactive", "expired",
     * "exhausted", "promotion_unavailable". Value enum: "available", "inactive", "expired",
     * "exhausted", "promotion_unavailable". anyOf[1] (Value): Array of string. minItems: 1. []
     * enum: "available", "inactive", "expired", "exhausted", "promotion_unavailable". anyOf[1][]
     * (Value): string. Value enum: "available", "inactive", "expired", "exhausted",
     * "promotion_unavailable". anyOf[2] (Value): string. Value enum: "available", "inactive",
     * "expired", "exhausted", "promotion_unavailable".
     */
    "availability"?: InputValue<("available" | "inactive" | "expired" | "exhausted" | "promotion_unavailable")
        | readonly ("available" | "inactive" | "expired" | "exhausted" | "promotion_unavailable")[]>;
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
     * Supported expansions: promotion. Expand each code's parent promotion. Expansion requires
     * commerce.promotions.read. Limits: at most 10 unique expand paths per request. Pass
     * expand=promotion. [] enum: "promotion". Value enum: "promotion". anyOf[1] (Value): Array of
     * string. [] enum: "promotion". anyOf[1][] (Value): string. Value enum: "promotion". anyOf[2]
     * (Value): string. Value enum: "promotion".
     */
    "expand"?: InputValue<("promotion") | readonly ("promotion")[]>;
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
/**
 * Which promotion discount classes this promotion can combine with. Omitted classes default to
 * true.
 */
export type PromotionCombinesWithRequestInput = PromotionCombinesWithPatch;
export type PromotionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Promotion;
    };
    "event_type"?: "promotion.created";
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
    "event_type": "promotion.created";
});
/**
 * The `promotion.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type PromotionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
    /** Value enum: "promotion.created". */
    "event_type"?: "promotion.created";
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
 * The `promotion.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type PromotionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional quantities are not
     * supported. Flint discounts the first matched units in line-item order (the order items were
     * added), not the cheapest. Format: int32. minimum: 1.
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax" | (string & {});
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional quantities are not
     * supported. Flint discounts the first matched units in line-item order (the order items were
     * added), not the cheapest. Format: int32. minimum: 1.
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
     * Basis for merchandise promotion calculations. Omit for service_charge promotions because
     * service-charge discounts are calculated from the targeted charges. Value enum:
     * "subtotal_pre_tax", "subtotal_post_tax".
     */
    "calculation_basis"?: "subtotal_pre_tax" | "subtotal_post_tax";
    /**
     * Which line items receive the discount. Required for service_charge promotions, and for
     * line_item promotions whose eligibility_rules include any non-line-item condition (for
     * example order.subtotal or a customer condition). It is optional only when eligibility_rules
     * consist entirely of line_item.* conditions (plus matched_items.subtotal), in which case the
     * matched items are used as the target. Omitting it otherwise returns
     * DISCOUNTED_ITEM_RULES_REQUIRED. A rule group is an object with exactly one nonempty all
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
     * INVALID_MAX_DISCOUNTED_QUANTITY. Whole-number quantity; fractional quantities are not
     * supported. Flint discounts the first matched units in line-item order (the order items were
     * added), not the cheapest. Format: int32. minimum: 1.
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
    "recurrence"?: PromotionRecurrenceInput;
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
export type PromotionRecurrenceForeverInput = ({
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

import type { BuyerSubscription, BuyerSubscriptionLineItem } from './types-3.js';
import type { ResponseMeta } from './types-54.js';
import type { PaymentErrorSummary, PayOrderResponse } from './types-44.js';
import type { BuyerExpandedSubscriptionPlanSummary, BuyerOrder, BuyerOrderPaymentAttempt } from './types-2.js';
import type { CategoryReference } from './types-5.js';
import type { Image } from './types-28.js';
import type { MoneyValue, MoneyValueInput, Order } from './types-39.js';
import type { OrderLineItemTax } from './types-41.js';
import type { SelectedProductOption } from './types-59.js';
import type {
    SubscriptionPlanSwapVariant,
    SubscriptionPreview,
    SubscriptionQuantityChangePreview,
    SubscriptionRenewalPreview
} from './types-63.js';
import type { SubscriptionPlanChangePreview } from './types-62.js';
import type { Address, AcceptFulfillmentRequestInput, ApplyInventoryCountRequestInput } from './types-0.js';
import type { TipPaymentIntentAllocation, TipValueSettlementAllocation } from './types-66.js';
import type { ContextSummary } from './types-7.js';
import type { DeliveryWindowRequest, DeliveryWindowRequestInput } from './types-22.js';
import type { InventoryProvenanceRequest, InventoryProvenanceRequestInput } from './types-29.js';
import type { OrderEdit } from './types-40.js';
import type { GetReturnDispositionResponse } from './types-26.js';
/** A page of `BuyerSubscription` objects. */
export type BuyerSubscriptionListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerSubscription}. A customer's recurring purchase.
     */
    "data": Array<BuyerSubscription>;
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
/**
 * A retry of a past-due payment on the buyer's subscription. Includes, when available, its order,
 * payment intent and a failure the buyer can act on. Omits the store's idempotency key.
 */
export type BuyerSubscriptionPaymentRetry = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * Why the payment failed. Present only when the retry's status is `failed` and a payment
     * attempt was made. A summary of why a payment attempt failed, with a normalized error code, a
     * message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * ID of the renewal order the retry collects. Omitted until Flint records it, which can be
     * after processing starts. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     */
    "order_id"?: string;
    /**
     * The payment intent this retry started. Omitted before charging begins or when no payment
     * intent was created. Example: "pi_01KEZF7C00G8H9D509YEV22P7R".
     */
    "payment_intent_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /**
     * Where the retry is. Each value says what it means. Value enum: "pending", "processing",
     * "succeeded", "failed".
     */
    "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
    /**
     * ID of the past-due subscription whose payment this retry collects. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
    /**
     * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
     * "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     */
    "subscription_payment_retry_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
/** A page of `BuyerSubscriptionPaymentRetry` objects. */
export type BuyerSubscriptionPaymentRetryListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerSubscriptionPaymentRetry}. A retry of a past-due payment on the buyer's subscription.
     * Includes, when available, its order, payment intent and a failure the buyer can act on.
     * Omits the store's idempotency key.
     */
    "data": Array<BuyerSubscriptionPaymentRetry>;
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
/** A response containing `BuyerSubscriptionPaymentRetry` data. */
export type BuyerSubscriptionPaymentRetryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A retry of a past-due
     * payment on the buyer's subscription. Includes, when available, its order, payment intent and
     * a failure the buyer can act on. Omits the store's idempotency key.
     */
    "data": BuyerSubscriptionPaymentRetry;
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
 * A subscription plan this buyer may choose, with the store's billing timing and the target plan's
 * summary.
 */
export type BuyerSubscriptionPlanChangeOption = {
    /**
     * The store's billing timing for this target: now collects a new period with unused-time
     * credit; next_renewal changes the plan now and keeps the current paid period and next billing
     * date; period_end keeps the current plan until the next charged renewal; prorated_now charges
     * the difference for the rest of the current period and keeps the period and anchor. Value
     * enum: "now", "next_renewal", "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now" | (string & {});
    /**
     * The target plan's current summary. A subscription plan expanded on a buyer's order: billing
     * interval, setup fee, trial length, status, and line items.
     */
    "subscription_plan": BuyerExpandedSubscriptionPlanSummary;
    /**
     * The target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
};
/**
 * The subscription is the primary resource and expected_version target; the result uses the same
 * subscription and order fields as the corresponding /v1/me reads. The order and
 * order_payment_attempt are null when billing_starts is next_renewal or period_end, or the
 * prorated_now net charge is zero.
 */
export type BuyerSubscriptionPlanChangeResult = {
    /**
     * The resolved billing timing for this plan change. Value enum: "now", "next_renewal",
     * "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now" | (string & {});
    /**
     * The new period or proration order when billing_starts is now or prorated_now, including a
     * closed unpaid order when payment fails. Null when billing_starts is next_renewal or
     * period_end, or a prorated_now net charge is zero. anyOf[1] (Value): {@link BuyerOrder}. A
     * customer's purchase and its payment and fulfillment progress. anyOf[2] (Value): null.
     */
    "order": ((BuyerOrder) | (null));
    /**
     * The recorded payment attempt when billing_starts is now or prorated_now, including declines.
     * Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is
     * zero. anyOf[1] (Value): {@link BuyerOrderPaymentAttempt}. An attempt to pay an order.
     * anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((BuyerOrderPaymentAttempt) | (null));
    /**
     * The subscription after this request, including any scheduled plan change, or the unchanged
     * subscription when payment fails. A customer's recurring purchase.
     */
    "subscription": BuyerSubscription;
};
/** A response containing `BuyerSubscriptionPlanChangeResult` data. */
export type BuyerSubscriptionPlanChangeResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The subscription is the
     * primary resource and expected_version target; the result uses the same subscription and
     * order fields as the corresponding /v1/me reads. The order and order_payment_attempt are null
     * when billing_starts is next_renewal or period_end, or the prorated_now net charge is zero.
     */
    "data": BuyerSubscriptionPlanChangeResult;
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
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItem = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle the line sells. Present on a bundle line. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Catalog categories of the product or bundle, fixed when the line was added. Omitted on
     * custom lines. [] (Value): {@link CategoryReference}. A reference to a product category by
     * ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /**
     * Description of the line. A variant line uses the product description and a bundle line uses
     * the bundle description; Flint copied it when the line was added. A custom line uses the
     * description you sent. Omitted when there is none.
     */
    "description"?: string;
    /**
     * Primary image of the variant (or its product) or bundle, fixed when the line was added.
     * Omitted on custom lines and when the item has no image. An image with its URL, size, and alt
     * text.
     */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Name of the line. A variant line uses the product name, followed by the variant name when
     * the variant has options, and a bundle line uses the bundle name; Flint copied it when the
     * line was added. A custom line uses the name you sent.
     */
    "name"?: string;
    /**
     * ID of the product the line's variant belongs to. Present on a variant line; absent on bundle
     * and custom lines, which have no parent product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Option values that identify the variant, such as size and color, fixed when the line was
     * added. Omitted on bundle and custom lines. [] (Value): {@link SelectedProductOption}. An
     * option and value chosen for a product variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /**
     * SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and
     * when the item has no SKU.
     */
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * IDs of the variants a subscriber can swap this line to, in the order you set. Empty when
     * none are set, and always empty on bundle and custom lines. maxItems: 25. uniqueItems: true.
     * [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /**
     * How tax applies to the line. A variant line takes its taxable setting and tax category from
     * the variant, and a bundle line from its components; Flint copied them when the line was
     * added. A taxable variant or bundle line with no tax category gets your default line item tax
     * category, or `general`. A custom line has the tax you sent. A line item's tax category and
     * whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line.
     * Value enum: "variant", "bundle", "custom".
     */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or
     * bundle line keeps the catalog price from when the line was added. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant the line sells. Present on a variant line. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & ((Exclude<BuyerSubscriptionPlanLineItemVariant & object, readonly unknown[]>)
    | (Exclude<BuyerSubscriptionPlanLineItemBundle & object, readonly unknown[]>)
    | (Exclude<BuyerSubscriptionPlanLineItemCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItemBundle = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle the line sells. Present on a bundle line. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
    /**
     * Catalog categories of the product or bundle, fixed when the line was added. Omitted on
     * custom lines. [] (Value): {@link CategoryReference}. A reference to a product category by
     * ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /**
     * Description of the line. A variant line uses the product description and a bundle line uses
     * the bundle description; Flint copied it when the line was added. A custom line uses the
     * description you sent. Omitted when there is none.
     */
    "description"?: string;
    /**
     * Primary image of the variant (or its product) or bundle, fixed when the line was added.
     * Omitted on custom lines and when the item has no image. An image with its URL, size, and alt
     * text.
     */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Name of the line. A variant line uses the product name, followed by the variant name when
     * the variant has options, and a bundle line uses the bundle name; Flint copied it when the
     * line was added. A custom line uses the name you sent.
     */
    "name"?: string;
    /**
     * ID of the product the line's variant belongs to. Present on a variant line; absent on bundle
     * and custom lines, which have no parent product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Option values that identify the variant, such as size and color, fixed when the line was
     * added. Omitted on bundle and custom lines. [] (Value): {@link SelectedProductOption}. An
     * option and value chosen for a product variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /**
     * SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and
     * when the item has no SKU.
     */
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * IDs of the variants a subscriber can swap this line to, in the order you set. Empty when
     * none are set, and always empty on bundle and custom lines. maxItems: 25. uniqueItems: true.
     * [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /**
     * How tax applies to the line. A variant line takes its taxable setting and tax category from
     * the variant, and a bundle line from its components; Flint copied them when the line was
     * added. A taxable variant or bundle line with no tax category gets your default line item tax
     * category, or `general`. A custom line has the tax you sent. A line item's tax category and
     * whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line.
     * Value enum: "bundle".
     */
    "type": "bundle" | (string & {});
    /**
     * Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or
     * bundle line keeps the catalog price from when the line was added. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant the line sells. Present on a variant line. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line.
     * Value enum: "bundle".
     */
    "type": "bundle" | (string & {});
    /**
     * ID of the catalog bundle the line sells. Present on a bundle line. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id": string;
}));
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItemCustom = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle the line sells. Present on a bundle line. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Catalog categories of the product or bundle, fixed when the line was added. Omitted on
     * custom lines. [] (Value): {@link CategoryReference}. A reference to a product category by
     * ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /**
     * Description of the line. A variant line uses the product description and a bundle line uses
     * the bundle description; Flint copied it when the line was added. A custom line uses the
     * description you sent. Omitted when there is none.
     */
    "description"?: string;
    /**
     * Primary image of the variant (or its product) or bundle, fixed when the line was added.
     * Omitted on custom lines and when the item has no image. An image with its URL, size, and alt
     * text.
     */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Name of the line. A variant line uses the product name, followed by the variant name when
     * the variant has options, and a bundle line uses the bundle name; Flint copied it when the
     * line was added. A custom line uses the name you sent.
     */
    "name": string;
    /**
     * ID of the product the line's variant belongs to. Present on a variant line; absent on bundle
     * and custom lines, which have no parent product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Option values that identify the variant, such as size and color, fixed when the line was
     * added. Omitted on bundle and custom lines. [] (Value): {@link SelectedProductOption}. An
     * option and value chosen for a product variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /**
     * SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and
     * when the item has no SKU.
     */
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * IDs of the variants a subscriber can swap this line to, in the order you set. Empty when
     * none are set, and always empty on bundle and custom lines. maxItems: 25. uniqueItems: true.
     * [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /**
     * How tax applies to the line. A variant line takes its taxable setting and tax category from
     * the variant, and a bundle line from its components; Flint copied them when the line was
     * added. A taxable variant or bundle line with no tax category gets your default line item tax
     * category, or `general`. A custom line has the tax you sent. A line item's tax category and
     * whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line.
     * Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /**
     * Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or
     * bundle line keeps the catalog price from when the line was added. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /**
     * ID of the catalog variant the line sells. Present on a variant line. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id"?: string;
})
    & (({
    /**
     * How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line.
     * Value enum: "custom".
     */
    "type": "custom" | (string & {});
    /**
     * Name of the line. A variant line uses the product name, followed by the variant name when
     * the variant has options, and a bundle line uses the bundle name; Flint copied it when the
     * line was added. A custom line uses the name you sent.
     */
    "name": string;
    /**
     * Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or
     * bundle line keeps the catalog price from when the line was added. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
/** A line item on a subscription plan. */
export type BuyerSubscriptionPlanLineItemVariant = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**
     * ID of the catalog bundle the line sells. Present on a bundle line. Example:
     * "bun_01KEZF7C00TQ6S76Z6CVQF5SVN".
     */
    "bundle_id"?: string;
    /**
     * Catalog categories of the product or bundle, fixed when the line was added. Omitted on
     * custom lines. [] (Value): {@link CategoryReference}. A reference to a product category by
     * ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /**
     * Description of the line. A variant line uses the product description and a bundle line uses
     * the bundle description; Flint copied it when the line was added. A custom line uses the
     * description you sent. Omitted when there is none.
     */
    "description"?: string;
    /**
     * Primary image of the variant (or its product) or bundle, fixed when the line was added.
     * Omitted on custom lines and when the item has no image. An image with its URL, size, and alt
     * text.
     */
    "image"?: Image;
    /**
     * Maximum buyer quantity. Defaults to 9999. Merchants may set any line quantity from 1 to
     * 9999. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * minimum: 1. maximum: 9999. Default: 9999.
     */
    "max_quantity"?: number;
    /**
     * Minimum buyer quantity. Defaults to 1. The bounds must enclose the plan line quantity.
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 9999. Default: 1.
     */
    "min_quantity"?: number;
    /**
     * Name of the line. A variant line uses the product name, followed by the variant name when
     * the variant has options, and a bundle line uses the bundle name; Flint copied it when the
     * line was added. A custom line uses the name you sent.
     */
    "name"?: string;
    /**
     * ID of the product the line's variant belongs to. Present on a variant line; absent on bundle
     * and custom lines, which have no parent product. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Option values that identify the variant, such as size and color, fixed when the line was
     * added. Omitted on bundle and custom lines. [] (Value): {@link SelectedProductOption}. An
     * option and value chosen for a product variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /**
     * SKU of the variant or bundle, fixed when the line was added. Omitted on custom lines and
     * when the item has no SKU.
     */
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * IDs of the variants a subscriber can swap this line to, in the order you set. Empty when
     * none are set, and always empty on bundle and custom lines. maxItems: 25. uniqueItems: true.
     * [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /**
     * How tax applies to the line. A variant line takes its taxable setting and tax category from
     * the variant, and a bundle line from its components; Flint copied them when the line was
     * added. A taxable variant or bundle line with no tax category gets your default line item tax
     * category, or `general`. A custom line has the tax you sent. A line item's tax category and
     * whether it is taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line.
     * Value enum: "variant".
     */
    "type": "variant" | (string & {});
    /**
     * Price of one unit in the plan's currency, before modifiers, discounts, and tax. A variant or
     * bundle line keeps the catalog price from when the line was added. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /**
     * ID of the catalog variant the line sells. Present on a variant line. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
})
    & (({
    /**
     * How the line is sold: from a catalog variant, from a catalog bundle, or as a custom line.
     * Value enum: "variant".
     */
    "type": "variant" | (string & {});
    /**
     * ID of the catalog variant the line sells. Present on a variant line. Example:
     * "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
}));
/** The response for: Preview subscription. */
export type BuyerSubscriptionPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. oneOf[1] (Value): {@link
     * SubscriptionPreview}. Available subscription delivery methods shown to the buyer. oneOf[2]
     * (Value): {@link SubscriptionRenewalPreview}. A preview of a subscription's next renewal and
     * its estimated pricing. oneOf[3] (Value): {@link SubscriptionPlanChangePreview}. Estimated
     * pricing for a subscription plan change, including the recurring item subtotal and renewal
     * amounts. oneOf[4] (Value): {@link SubscriptionQuantityChangePreview}. Estimated pricing for
     * a quantity change that keeps the billing period and anchor.
     */
    "data": ((SubscriptionPreview)
        | (SubscriptionRenewalPreview)
        | (SubscriptionPlanChangePreview)
        | (SubscriptionQuantityChangePreview)
        | (Record<string, unknown>));
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
 * The subscription and any immediate prorated billing outcome. A decline leaves the subscription
 * unchanged.
 */
export type BuyerSubscriptionQuantityChangeResult = {
    /**
     * The resolved billing timing for this quantity change. Value enum: "prorated_now",
     * "next_renewal", "period_end".
     */
    "billing_starts": "prorated_now" | "next_renewal" | "period_end" | (string & {});
    /**
     * The proration order, including a closed unpaid order on decline. Null when billing_starts is
     * next_renewal or period_end, or the net charge is zero. anyOf[1] (Value): {@link BuyerOrder}.
     * A customer's purchase and its payment and fulfillment progress. anyOf[2] (Value): null.
     */
    "order": ((BuyerOrder) | (null));
    /**
     * The payment attempt, including declines. Null when billing_starts is next_renewal or
     * period_end, or the net charge is zero. anyOf[1] (Value): {@link BuyerOrderPaymentAttempt}.
     * An attempt to pay an order. anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((BuyerOrderPaymentAttempt) | (null));
    /**
     * The updated subscription, or the unchanged subscription when payment fails. A customer's
     * recurring purchase.
     */
    "subscription": BuyerSubscription;
};
/** A response containing `BuyerSubscriptionQuantityChangeResult` data. */
export type BuyerSubscriptionQuantityChangeResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The subscription and any
     * immediate prorated billing outcome. A decline leaves the subscription unchanged.
     */
    "data": BuyerSubscriptionQuantityChangeResult;
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
 * The subscription is the primary resource and expected_version target; the result uses the same
 * subscription and order fields as the corresponding /v1/me reads.
 */
export type BuyerSubscriptionRenewalResult = {
    /**
     * The renewal order the attempt charged. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "order": BuyerOrder;
    /**
     * The payment attempt that charged the renewal order, including when the payment was declined.
     * Read `last_payment_error` on it for a failed payment. An attempt to pay an order.
     */
    "order_payment_attempt": BuyerOrderPaymentAttempt;
    /** The subscription after the renewal attempt. A customer's recurring purchase. */
    "subscription": BuyerSubscription;
};
/** A response containing `BuyerSubscriptionRenewalResult` data. */
export type BuyerSubscriptionRenewalResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The subscription is the
     * primary resource and expected_version target; the result uses the same subscription and
     * order fields as the corresponding /v1/me reads.
     */
    "data": BuyerSubscriptionRenewalResult;
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
/** A response containing `BuyerSubscription` data. */
export type BuyerSubscriptionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's recurring
     * purchase.
     */
    "data": BuyerSubscription;
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
/** Frozen target terms that apply at the next charged renewal. */
export type BuyerSubscriptionScheduledPlanChange = {
    /** The frozen target billing interval. Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Number of target billing_interval units between charges. Format: int32. */
    "billing_interval_count": number;
    /**
     * Expected boundary from the current billing schedule. Null when the subscription is paused
     * without a scheduled resume or is waiting for an external billing date. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "effective_at": string | null;
    /**
     * Frozen target lines, including buyer quantity permissions and bounds. [] (Value): {@link
     * BuyerSubscriptionLineItem}. An item included in a customer's recurring purchase.
     */
    "line_items": Array<BuyerSubscriptionLineItem>;
    /**
     * Frozen item subtotal per target billing period, before discounts, shipping, and tax.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "recurring_subtotal_money": MoneyValue;
    /** Who scheduled the plan change. Value enum: "buyer", "merchant". */
    "requested_by": "buyer" | "merchant" | (string & {});
    /** When the plan change was scheduled. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "scheduled_at": string;
    /**
     * The scheduled target plan summary, including archived plans. A subscription plan expanded on
     * a buyer's order: billing interval, setup fee, trial length, status, and line items.
     */
    "subscription_plan": BuyerExpandedSubscriptionPlanSummary;
    /**
     * The scheduled target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
};
/** The customer address reference or address used as the buyer's subscription service location. */
export type BuyerSubscriptionServiceLocation = {
    /**
     * The address where the service is performed. Flint copies it when the subscription is
     * created, so later edits to the customer's saved address don't change it. A postal address.
     * Every address has country. Addresses Flint checked as complete (customer and saved
     * addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "address"?: Address;
    /**
     * Customer that owns customer_address_id. Null when customer_address_id is absent or withheld
     * from the buyer projection. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
};
/** One of the buyer's event tickets, with the admission code its QR code holds. */
export type BuyerTicket = {
    /**
     * The 16-character Crockford base32 admission code to show as a QR code and print as
     * XXXX-XXXX-XXXX-XXXX. A bearer secret. Absent when the ticket is voided, on orders whose
     * buyer_email differs from the email Flint verified, and for sessions Flint didn't verify:
     * merchant access links, customer sessions created with an API key, links emailed to another
     * address, and checkout links a merchant reads or requests after payment. minLength: 16.
     * maxLength: 16.
     */
    "admission_code"?: string;
    /** Attendee name. Null when none was given. minLength: 1. maxLength: 200. */
    "attendee_name": string | null;
    /**
     * When the ticket was admitted. Null when the ticket is not checked in. Format: date-time.
     * Example: "2026-08-02T16:00:00Z".
     */
    "checked_in_at": string | null;
    /** When the ticket was issued. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /**
     * The event details the order captured at checkout. Absent when the order didn't record them.
     * Event details captured when the ticket's order was placed.
     */
    "event"?: BuyerTicketEvent;
    /** The buyer's order that purchased this ticket. Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id": string;
    /** The admission lifecycle. Value enum: "issued", "checked_in", "voided". */
    "status": "issued" | "checked_in" | "voided" | (string & {});
    /** Unique ticket identity with the tkt_ prefix. Example: "tkt_01KEZF7C00AWVKS6GAX8RMEBZ8". */
    "ticket_id": string;
    /** The event prefix and sequence, such as GAL001. It doesn't admit anyone on its own. */
    "ticket_number": string;
};
/** Event details captured when the ticket's order was placed. */
export type BuyerTicketEvent = {
    /** Where the event takes place. */
    "location"?: string;
    /** Event name when the order was placed. */
    "name": string;
    /**
     * When the event starts. RFC 3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "starts_at"?: string;
    /** IANA time zone Flint shows the event in. */
    "timezone"?: string;
};
/** A page of `BuyerTicket` objects. */
export type BuyerTicketListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * BuyerTicket}. One of the buyer's event tickets, with the admission code its QR code holds.
     */
    "data": Array<BuyerTicket>;
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
/**
 * A tip on a buyer's order, with its requested, effective, settled, and refunded amounts and how
 * it was allocated to payments.
 */
export type BuyerTip = {
    /**
     * Fixed tip amount, when the tip is set as an amount. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** Optional description that stays on the tip for your reporting. */
    "description"?: string;
    /**
     * The tip amount the order collects. For a percent tip, the resolved amount. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "effective_amount_money": MoneyValue;
    /** Optional name that stays on the tip for your reporting. */
    "name"?: string;
    /** ID of the tip, prefixed `tip_`. Example: "tip_01KEZF7C00JRPYP11RTMB97MYH". */
    "order_tip_id": string;
    /**
     * How much of the tip each payment intent paid, one entry per payment intent. Flint adds an
     * entry when it records that payment's tip on the order. [] (Value): {@link
     * TipPaymentIntentAllocation}. The part of a tip paid through one payment intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /**
     * Tip percentage in percentage points, such as `18` for 18%, when the tip is set as a percent.
     * multipleOf: 0.0001.
     */
    "percent"?: number;
    /**
     * How much of the tip has been refunded. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * How much of the tip has been paid. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "settled_amount_money": MoneyValue;
    /**
     * Whether the tip is awaiting payment, paid in full, refunded in part or in full, or canceled
     * before collection. Value enum: "requested", "paid", "partially_refunded", "refunded",
     * "canceled".
     */
    "status": "requested" | "paid" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * How much of the tip gift cards paid, one entry per gift card redemption that included tip
     * money. Empty when no gift card paid any of the tip. [] (Value): {@link
     * TipValueSettlementAllocation}. The part of a tip paid through one value settlement.
     */
    "value_settlement_allocations": Array<TipValueSettlementAllocation>;
};
/** The request body for: List authorized CLI contexts. */
export type CLIContextsRequest = ({
    /**
     * The public client ID, always `flint-cli`. The client has no secret: a client_secret field or
     * an Authorization header returns invalid_client. Example: "flint-cli". Value enum:
     * "flint-cli".
     */
    "client_id": "flint-cli" | (string & {});
    /**
     * The session's current refresh token. This request reads the session and doesn't rotate the
     * token. An unknown, expired, or revoked token returns invalid_grant.
     */
    "refresh_token": string;
});
/** The request body for: List authorized CLI contexts. */
export type CLIContextsRequestInput = ({
    /**
     * The public client ID, always `flint-cli`. The client has no secret: a client_secret field or
     * an Authorization header returns invalid_client. Example: "flint-cli". Value enum:
     * "flint-cli".
     */
    "client_id": "flint-cli";
    /**
     * The session's current refresh token. This request reads the session and doesn't rotate the
     * token. An unknown, expired, or revoked token returns invalid_grant.
     */
    "refresh_token": string;
})
    & ({
    "client_secret"?: never;
});
/** The response for: List authorized CLI contexts. */
export type CLIContextsResponse = {
    /**
     * The contexts the user can use in this session, each a merchant and environment they
     * approved. Contexts that were removed or that the user can no longer access are left out. At
     * most 100. maxItems: 100. [] (Value): {@link ContextSummary}. A context the CLI is authorized
     * to use: a sandbox or live account, with its ID, merchant ID, and name.
     */
    "contexts": Array<ContextSummary>;
    /**
     * ID of the CLI session that holds these contexts. Token responses for the session carry the
     * same ID. Example:
     * "session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".
     */
    "oauth_session_id": string;
};
/** The request body for: Start CLI browser login. */
export type CLIDeviceRequest = ({
    /**
     * The public client ID, always `flint-cli`. The client has no secret: a client_secret field or
     * an Authorization header returns invalid_client. Example: "flint-cli". Value enum:
     * "flint-cli".
     */
    "client_id": "flint-cli" | (string & {});
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes.
     * Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /**
     * Creates a session with selectable merchant and environment contexts. Defaults to contexts
     * when omitted. Default: "contexts". Value enum: "contexts".
     */
    "session_mode"?: "contexts" | (string & {});
});
/** The request body for: Start CLI browser login. */
export type CLIDeviceRequestInput = ({
    /**
     * The public client ID, always `flint-cli`. The client has no secret: a client_secret field or
     * an Authorization header returns invalid_client. Example: "flint-cli". Value enum:
     * "flint-cli".
     */
    "client_id": "flint-cli";
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live";
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes.
     * Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /**
     * Creates a session with selectable merchant and environment contexts. Defaults to contexts
     * when omitted. Default: "contexts". Value enum: "contexts".
     */
    "session_mode"?: "contexts";
})
    & ({
    "client_secret"?: never;
});
/** The response for: Review CLI session consent; Start CLI browser login. */
export type CLIDeviceResponse = {
    /**
     * Secret code the CLI sends to the token endpoint with the device_code grant to collect the
     * tokens once the user approves. It stops working after expires_in seconds. minLength: 1.
     * maxLength: 4096.
     */
    "device_code": string;
    /**
     * Seconds until device_code and user_code expire. Flint issues 600, which is 10 minutes.
     * minimum: 1. maximum: 1800.
     */
    "expires_in": number;
    /**
     * Minimum seconds between the CLI's polls of the token endpoint. Flint issues 5. Polling
     * faster returns slow_down and adds five seconds to the interval. minimum: 1. maximum: 60.
     */
    "interval": number;
    /**
     * Short code, such as `ABCD-EFGH`, that the user checks against the browser approval page. It
     * stops working after expires_in seconds. minLength: 4. maxLength: 32. pattern: ^[!-~]+$.
     */
    "user_code": string;
    /** The page where the user enters user_code and approves or denies the login. */
    "verification_uri": string;
    /**
     * The verification_uri with user_code already filled in, for opening directly or showing as a
     * QR code.
     */
    "verification_uri_complete": string;
};
/** Non-secret metadata for the calling credential, selected by auth_type. */
export type CLILoginAuthContext = ({
    /**
     * Access level; scoped tokens always have restricted access. Value enum: "full", "read_only",
     * "restricted".
     */
    "access": "full" | "read_only" | "restricted" | (string & {});
    /** Credential type that selects this object's fields. Value enum: "cli_login". */
    "auth_type": "cli_login" | (string & {});
    /**
     * ID of the selected CLI context. Example:
     * "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id": string;
    /** Merchant the credential acts for. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /** Whether the credential acts in test or live mode. Value enum: "test", "live". */
    "mode": "test" | "live" | (string & {});
    /** Name of the key, CLI context, or workload identity. */
    "name": string;
    /** ID of the CLI login grant. Example: "clg_01KEZF7C00F8Q8XM1TZ6Y1GB31". */
    "oauth_grant_id": string;
    /**
     * ID of the CLI session. Example:
     * "session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".
     */
    "oauth_session_id": string;
    /**
     * Sandbox the credential is bound to, present only in test mode. Example:
     * "test_01KEZF7C00JC77HTMTB2XHNPE0".
     */
    "sandbox_id"?: string;
    /**
     * Current granted API scopes, resolved at request time for full and read_only keys. []
     * (Value): string.
     */
    "scopes": Array<string>;
    /** User the session acts for. Example: "usr_01KEZF7C00YC8757ZYP9727JM0". */
    "user_id": string;
})
    & ({
    /** Value enum: "restricted". */
    "access"?: unknown;
});
/** The request body for: Review CLI session consent. */
export type CLIReauthorizeRequest = ({
    /**
     * The public client ID, always `flint-cli`. The client has no secret: a client_secret field or
     * an Authorization header returns invalid_client. Example: "flint-cli". Value enum:
     * "flint-cli".
     */
    "client_id": "flint-cli" | (string & {});
    /**
     * ID of one of the session's contexts, from the `id` of an entry in the contexts list. An ID
     * that isn't in the session returns invalid_context. Required with scope_mode. minLength: 1.
     * Example: "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live" | (string & {});
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    /**
     * The session's current refresh token. This request reads the session and doesn't rotate the
     * token. An unknown, expired, or revoked token returns invalid_grant.
     */
    "refresh_token": string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes.
     * Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /**
     * Set to `additive` to ask for more scopes in the one context named by context_id. The
     * approved scopes are added to the scopes the context already has, and the session's other
     * contexts are kept. Requires context_id. Value enum: "additive".
     */
    "scope_mode"?: "additive" | (string & {});
    /**
     * Required, and must be `contexts`. Unless scope_mode is `additive`, the contexts the user
     * approves become the session's contexts: any other context is removed and its tokens stop
     * working. Value enum: "contexts".
     */
    "session_mode": "contexts" | (string & {});
});
/** The request body for: Review CLI session consent. */
export type CLIReauthorizeRequestInput = ({
    /**
     * The public client ID, always `flint-cli`. The client has no secret: a client_secret field or
     * an Authorization header returns invalid_client. Example: "flint-cli". Value enum:
     * "flint-cli".
     */
    "client_id": "flint-cli";
    /**
     * ID of one of the session's contexts, from the `id` of an entry in the contexts list. An ID
     * that isn't in the session returns invalid_context. Required with scope_mode. minLength: 1.
     * Example: "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     */
    "context_id"?: string;
    /**
     * Optional compatibility field for the computer name sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "device_name"?: string;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id"?: string;
    /** Environment used for this resource or request. Value enum: "test", "live". */
    "mode"?: "test" | "live";
    /**
     * Optional compatibility field for the operating system sent by released Flint CLI versions.
     * Accepted and ignored.
     */
    "platform"?: string;
    /**
     * The session's current refresh token. This request reads the session and doesn't rotate the
     * token. An unknown, expired, or revoked token returns invalid_grant.
     */
    "refresh_token": string;
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". */
    "sandbox_id"?: string;
    /**
     * Required space-separated public API scope names. Only requested scopes approved in the
     * browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes.
     * Unsupported scopes return invalid_scope. minLength: 1.
     */
    "scope": string;
    /**
     * Set to `additive` to ask for more scopes in the one context named by context_id. The
     * approved scopes are added to the scopes the context already has, and the session's other
     * contexts are kept. Requires context_id. Value enum: "additive".
     */
    "scope_mode"?: "additive";
    /**
     * Required, and must be `contexts`. Unless scope_mode is `additive`, the contexts the user
     * approves become the session's contexts: any other context is removed and its tokens stop
     * working. Value enum: "contexts".
     */
    "session_mode": "contexts";
})
    & ({
    "client_secret"?: never;
});
/**
 * The rate result you supply for one delivery method and choice group when creating a delivery
 * quote with caller-supplied pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequest = {
    /**
     * Choice group the outcome is for. minLength: 1. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
    /**
     * Revision of the delivery method the outcome is for. minLength: 1. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
    /**
     * Rate your integration supplies for this method and choice group. Your outcome for a
     * caller-priced delivery method, selected by `type`: available with a price and windows,
     * unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequest;
};
/**
 * The rate result you supply for one delivery method and choice group when creating a delivery
 * quote with caller-supplied pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequestInput = {
    /**
     * Choice group the outcome is for. minLength: 1. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8".
     */
    "delivery_choice_group_id": string;
    /**
     * Revision of the delivery method the outcome is for. minLength: 1. Example:
     * "dmetr_01KEZF7C001ZF9D92DY1G51GV9".
     */
    "delivery_method_revision_id": string;
    /**
     * Rate your integration supplies for this method and choice group. Your outcome for a
     * caller-priced delivery method, selected by `type`: available with a price and windows,
     * unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequestInput;
};
/**
 * Your outcome for a caller-priced delivery method, selected by `type`: available with a price and
 * windows, unavailable with a reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequest = ({
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. [] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable"?: boolean;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string;
    /** Buyer-visible service level of the rate. Send it with type `available`. minLength: 1. */
    "service_level"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available", "unavailable", "cannot_calculate".
     */
    "type": "available" | "unavailable" | "cannot_calculate" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestAvailable = ({
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. [] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string;
    /** Buyer-visible service level of the rate. Send it with type `available`. minLength: 1. */
    "service_level"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available".
     */
    "type": "available" | (string & {});
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string;
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string;
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available".
     */
    "type": "available" | (string & {});
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string;
})
    & (({
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at": string;
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at": string;
})
    | ({
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. minItems: 1.
     */
    "offered_windows": unknown;
})
    | (Record<string, unknown>)));
/** The `available` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestAvailableInput = ({
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string | globalThis.Date;
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. [] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string | globalThis.Date;
    /** Buyer-visible service level of the rate. Send it with type `available`. minLength: 1. */
    "service_level"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available".
     */
    "type": "available";
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | globalThis.Date;
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | globalThis.Date;
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available".
     */
    "type": "available";
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at": string | globalThis.Date;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at": string | globalThis.Date;
})
    & (({
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at": string | globalThis.Date;
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at": string | globalThis.Date;
})
    | ({
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. minItems: 1.
     */
    "offered_windows": unknown;
}))
    & (({
    "unavailable_reason"?: never;
})
    & ({
    "failure_category"?: never;
})
    & ({
    "retryable"?: never;
})));
/** The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculate = ({
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable": boolean;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "cannot_calculate".
     */
    "type": "cannot_calculate" | (string & {});
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "cannot_calculate".
     */
    "type": "cannot_calculate" | (string & {});
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified"
        | (string & {});
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable": boolean;
}));
/** The `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput = ({
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable": boolean;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "cannot_calculate".
     */
    "type": "cannot_calculate";
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "cannot_calculate".
     */
    "type": "cannot_calculate";
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category": "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable": boolean;
})
    & (({
    "amount_money"?: never;
})
    & ({
    "expires_at"?: never;
})
    & ({
    "selection_guarantee_expires_at"?: never;
})
    & ({
    "window_start_at"?: never;
})
    & ({
    "window_end_at"?: never;
})
    & ({
    "offered_windows"?: never;
})
    & ({
    "service_level"?: never;
})
    & ({
    "unavailable_reason"?: never;
})));
/**
 * Your outcome for a caller-priced delivery method, selected by `type`: available with a price and
 * windows, unavailable with a reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequestInput = ({
    /**
     * Price of the delivery. Send it with type `available`. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Last moment this rate can be offered in the quote. It must be later than the evaluation time
     * plus the method's minimum_option_lifetime_seconds and no later than the quote's expires_at.
     * Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "expires_at"?: string | globalThis.Date;
    /**
     * Why Flint could not calculate the method and the action that can make calculation succeed. -
     * `dependency_failure`: Retry after the dependent service recovers. - `timeout`: Retry after
     * the timed-out dependency recovers. - `malformed_response`: Fix the callback response so it
     * matches the documented response schema, then retry. - `pricing_failure`: Fix the method
     * pricing configuration or matching rate, then retry. - `schedule_failure`: Fix the method
     * schedule, timezone, or requested window, then retry. - `geography_failure`: Fix the
     * destination, origin, or geographic configuration, then retry. - `routing_failure`: Fix
     * inventory routing or origin assignment, then retry. - `address_verification_failed`: Correct
     * the address fields rejected by verification, then retry. - `address_could_not_be_verified`:
     * Confirm or correct the address, or retry when address verification is available. Value enum:
     * "dependency_failure", "timeout", "malformed_response", "pricing_failure",
     * "schedule_failure", "geography_failure", "routing_failure", "address_verification_failed",
     * "address_could_not_be_verified".
     */
    "failure_category"?: "dependency_failure"
        | "timeout"
        | "malformed_response"
        | "pricing_failure"
        | "schedule_failure"
        | "geography_failure"
        | "routing_failure"
        | "address_verification_failed"
        | "address_could_not_be_verified";
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Delivery windows the buyer can choose from. Send either `offered_windows` or both
     * `window_start_at` and `window_end_at` with type `available`. [] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /** Whether trying again later can succeed. Send it with type `cannot_calculate`. */
    "retryable"?: boolean;
    /**
     * Last moment a delivery selection can lock this rate for payment. It must be at or after
     * expires_at. Send it with type available. Format: date-time. minLength: 1. Example:
     * "2026-08-02T16:00:00Z".
     */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** Buyer-visible service level of the rate. Send it with type `available`. minLength: 1. */
    "service_level"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "available", "unavailable", "cannot_calculate".
     */
    "type": "available" | "unavailable" | "cannot_calculate";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /**
     * End of the delivery window for this rate. When present, send it with window_start_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_end_at"?: string | globalThis.Date;
    /**
     * Start of the delivery window for this rate. When present, send it with window_end_at,
     * including when offered_windows is supplied. Send it only with type available. Format:
     * date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     */
    "window_start_at"?: string | globalThis.Date;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput & object, readonly unknown[]>));
/** The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestUnavailable = ({
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "unavailable".
     */
    "type": "unavailable" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "unavailable".
     */
    "type": "unavailable" | (string & {});
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable"
        | (string & {});
}));
/** The `unavailable` variant of `CallerSuppliedDeliveryOutcomeRequest`. */
export type CallerSuppliedDeliveryOutcomeRequestUnavailableInput = ({
    /**
     * Your private reference for this rate, up to 500 characters, with no leading or trailing
     * spaces. Flint stores it with the buyer's selection and never shows it to buyers. minLength:
     * 1. maxLength: 500.
     */
    "merchant_reference"?: string;
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "unavailable".
     */
    "type": "unavailable";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
})
    & (({
    /**
     * Whether the method has a rate, is unavailable, or could not be priced. Value enum:
     * "unavailable".
     */
    "type": "unavailable";
    /**
     * Why the method is unavailable and the action that can make it eligible. -
     * `destination_not_served`: Use a destination covered by this method or choose another method.
     * - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`: The
     * origin or pickup location cannot supply the requested inventory. Reduce the quantity,
     * replenish inventory, or choose another origin or method. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
})
    & (({
    "amount_money"?: never;
})
    & ({
    "expires_at"?: never;
})
    & ({
    "selection_guarantee_expires_at"?: never;
})
    & ({
    "window_start_at"?: never;
})
    & ({
    "window_end_at"?: never;
})
    & ({
    "offered_windows"?: never;
})
    & ({
    "service_level"?: never;
})
    & ({
    "failure_category"?: never;
})
    & ({
    "retryable"?: never;
})));
/** Cancels fulfillment work that has not completed. */
export type CancelFulfillmentRequestInput = AcceptFulfillmentRequestInput;
/** The request body for: Cancel a gift card notification. */
export type CancelGiftCardNotificationRequestInput = {};
/** Closes an open physical count without changing stock. */
export type CancelInventoryCountRequestInput = ApplyInventoryCountRequestInput;
/** Cancels requested quantity that hasn't departed. */
export type CancelInventoryTransferRequest = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_canceled_quantity (Required): integer.
     * Cumulative quantity that should be canceled before departure. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be canceled before departure. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequest;
};
/** Cancels requested quantity that hasn't departed. */
export type CancelInventoryTransferRequestInput = {
    /** Transfer version the caller last read. Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Transfer lines this action changes, each with a cumulative target. 1 to 100 lines. minItems:
     * 1. maxItems: 100. [] (Value): object. [].inventory_transfer_line_id (Required): string.
     * Transfer line this action changes. minLength: 1. Example:
     * "invtrln_01KEZF7C00CK297J6QVV5J0PFV". [].target_canceled_quantity (Required): integer.
     * Cumulative quantity that should be canceled before departure. Whole-number quantity;
     * fractional quantities are not supported. Format: int64. minimum: 0.
     */
    "lines": Array<{
        /**
         * Transfer line this action changes. minLength: 1. Example:
         * "invtrln_01KEZF7C00CK297J6QVV5J0PFV".
         */
        "inventory_transfer_line_id": string;
        /**
         * Cumulative quantity that should be canceled before departure. Whole-number quantity;
         * fractional quantities are not supported. Format: int64. minimum: 0.
         */
        "target_canceled_quantity": number;
    }>;
    /**
     * When and where the stock moved. Optional; when omitted, the movements record the time Flint
     * received the command as occurred_at and a null source_system. Where and when an inventory
     * event happened: the source system, external actor, and time.
     */
    "provenance"?: InventoryProvenanceRequestInput;
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelMeSubscriptionRequest = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** Cancellation timing and the optional reason and comment recorded with the request. */
export type CancelMeSubscriptionRequestInput = {
    /**
     * When true, ends the subscription now. Otherwise, schedules cancellation at trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due, instead
     * of that charge. An active subscription with an expired renewal delivery hold ends now. A
     * scheduled, incomplete, or paused subscription, or a past_due subscription without
     * next_retry_at, requires cancel_immediately: true; otherwise returns 409 ACTION_NOT_ALLOWED
     * with reason period_end_unavailable. A buyer may cancel immediately when the store allows
     * buyer_chooses or no scheduled cancellation time is available. Under end_of_period, a trial
     * continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Free text about the cancellation, up to 500 characters after surrounding spaces are trimmed.
     * Recorded in cancellation_details.comment, which only merchant credentials read. minLength:
     * 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Optional. Why the subscription is being canceled. When the store lists
     * customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must be one
     * of them; merchant credentials may send any code. Recorded in
     * cancellation_details.reason_code. Value enum: "too_expensive", "missing_features",
     * "switched_service", "unused", "customer_service", "too_complex", "low_quality", "other".
     */
    "cancellation_reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other";
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** Cancel a pending order edit. */
export type CancelOrderEditRequestInput = {
    /**
     * The order edit version to cancel. A mismatch returns VERSION_CONFLICT before changes.
     * Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** A response containing `CancelOrderEditResult` data. */
export type CancelOrderEditResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The canceled edit and
     * current order.
     */
    "data": CancelOrderEditResult;
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
/** The canceled edit and current order. */
export type CancelOrderEditResult = {
    /**
     * The order after releasing the edit's holds. A customer's purchase and its payment and
     * fulfillment progress.
     */
    "order": Order;
    /**
     * The edit after cancellation. Nested child of an order with frozen item changes, balance and
     * refund amounts. A pending edit changes the order only when its balance payment succeeds.
     * Refund completion is tracked on the refunds.
     */
    "order_edit": OrderEdit;
};
/** The request body for: Cancel order payment attempt. */
export type CancelOrderPaymentAttemptRequest = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
};
/** The request body for: Cancel order payment attempt. */
export type CancelOrderPaymentAttemptRequestInput = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
};
export type CancelOrderPaymentAttemptResponse = PayOrderResponse;
/** The request body for: Cancel payment intent. */
export type CancelPaymentIntentRequest = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel payment intent. */
export type CancelPaymentIntentRequestInput = {
    /**
     * Optional merchant-supplied cancellation reason. Value enum: "requested_by_customer",
     * "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
    /**
     * Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with
     * the current version. Retrieve the resource and rebuild the request before retrying. Format:
     * uint64. minimum: 1.
     */
    "expected_version"?: number;
};
/** The request body for: Cancel a payout. */
export type CancelPayoutRequest = {};
/** The request body for: Cancel a payout. */
export type CancelPayoutRequestInput = {};
/** The request body for: Cancel return disposition. */
export type CancelReturnDispositionRequest = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return disposition. */
export type CancelReturnDispositionRequestInput = {
    /**
     * Optional. The disposition's current version; a stale value returns 409 VERSION_CONFLICT.
     * Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * Why it is being canceled. Value enum: "created_in_error", "changed_disposition",
     * "duplicate", "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
export type CancelReturnDispositionResponse = GetReturnDispositionResponse;
/** The request body for: Cancel return line item. */
export type CancelReturnLineItemRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * How many of the canceled units the buyer no longer has to send back, as a whole number;
     * fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower
     * it only as far as the canceled quantity requires. Format: int64.
     */
    "handback_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other" | (string & {});
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};
/** The request body for: Cancel return line item. */
export type CancelReturnLineItemRequestInput = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: int64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * How many of the canceled units the buyer no longer has to send back, as a whole number;
     * fractional quantities are not supported. Lowers return_required_quantity. Omit it to lower
     * it only as far as the canceled quantity requires. Format: int64.
     */
    "handback_quantity"?: number;
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. */
    "quantity": number;
    /**
     * Why it is being canceled. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other";
    /** Optional detail about `reason`, kept with the record. minLength: 1. */
    "reason_message"?: string;
};

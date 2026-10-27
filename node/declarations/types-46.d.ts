import type { ResponseMeta } from './types-40.js';
import type {
    SubscriptionPaymentRetry,
    SubscriptionDeliveryMethodCounts,
    SubscriptionIntervalOption,
    SubscriptionDeliveryOption,
    SubscriptionDeliveryMethodImpact,
    SubscriptionOfferTermsRequest,
    SubscriptionOfferTermsRequestInput
} from './types-45.js';
import type { ImageAttachment, Image } from './types-19.js';
import type { InventoryRoutingSource } from './types-25.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type {
    Order,
    OrderPaymentAttempt,
    OrderLineItemModifier,
    OrderLineItemTax,
    OrderLineItemModifierRequest,
    OrderLineItemModifierRequestInput,
    OrderLineItemTaxInput
} from './types-32.js';
import type {
    Subscription,
    SelectedProductOption,
    SubscriptionAddressVerification,
    SkipSubscriptionCycleRequestInput
} from './types-44.js';
import type { BundleComponent, Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { CategoryReference, ChangeSubscriptionPlanRequestInput } from './types-3.js';
import type { InputValue } from '../runtime.js';
import type {
    CreateSubscriptionPlanRequestInput,
    CreateSubscriptionPreviewRequestInput,
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionRequestInput,
    CreateSubscriptionLineItemRequestInput
} from './types-9.js';
import type { UpdateSubscriptionPlanRequestInput } from './types-50.js';
import type { ErrorDetail } from './types-16.js';
import type { PromotionRecurrence } from './types-38.js';
import type {
    MeCancelSubscriptionInput,
    MeChangeSubscriptionPaymentMethodInput,
    MeCreateSubscriptionPaymentRetryInput
} from './types-29.js';
import type {
    MeGetSubscriptionPaymentRetryInput,
    MeListSubscriptionPaymentRetriesInput,
    MePauseSubscriptionInput,
    MeReactivateSubscriptionInput,
    MeRenewSubscriptionInput
} from './types-30.js';
import type { UpdateSubscriptionBillingScheduleRequestInput } from './types-49.js';
/**
 * Shape $ (Value): {@link SubscriptionPaymentRetryListResponse}. A page of
 * `SubscriptionPaymentRetry` objects.
 */
export type SubscriptionPaymentRetryListResponse = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionPaymentRetry}. Shape $[] (Value): {@link
     * SubscriptionPaymentRetry}. An attempt to collect a subscription's overdue payment.
     */
    "data": Array<SubscriptionPaymentRetry>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link SubscriptionPaymentRetryResponse}. A response containing
 * `SubscriptionPaymentRetry` data.
 */
export type SubscriptionPaymentRetryResponse = {
    /**
     * Shape $ (Value): {@link SubscriptionPaymentRetry}. An attempt to collect a subscription's
     * overdue payment.
     */
    "data": SubscriptionPaymentRetry;
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
 * Shape $ (Value): {@link SubscriptionPlan}. The recurring price and billing terms offered to
 * customers.
 */
export type SubscriptionPlan = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. maxItems: 12. uniqueItems:
     * true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as
     * every 2 months, offered by a subscription plan.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): integer. A commitment period you agree with the buyer, 1 to 120 months.
     * Flint shows it at checkout and records it on each new subscription (contract_start_at,
     * contract_end_at). Flint does not stop the buyer from canceling earlier. Format: int32.
     * minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): Array of {@link SubscriptionDeliveryMethodCounts}. Shape $[] (Value):
     * {@link SubscriptionDeliveryMethodCounts}. Subscription counts by status for one delivery
     * method.
     */
    "delivery_method_subscription_counts": Array<SubscriptionDeliveryMethodCounts>;
    /** Shape $ (Value): boolean. */
    "delivery_required": boolean;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. A fee you agree the buyer owes for canceling before the
     * contract term ends. Flint shows it at checkout and records it on each new subscription, but
     * never charges it. To collect it, charge the buyer yourself, for example with an order on
     * their saved payment method. Requires contract_term_months. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): Array of {@link ImageAttachment}. Shape $[] (Value): {@link
     * ImageAttachment}. An image attached to a resource, with its display properties and
     * attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Shape $ (Value): {@link InventoryRoutingSource}. Where tracked demand from this plan is
     * routed. New subscriptions and payment links for the plan copy it. Absent when the plan has
     * no source. Where an order, payment link, or reservation routes inventory from: a fixed
     * Location, an inventory allocation policy, or one policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPlanLineItem}. Shape $[] (Value): {@link
     * SubscriptionPlanLineItem}. A line item on a subscription plan, from a variant or bundle,
     * with its quantity, price, and variants a subscriber can swap to.
     */
    "line_items"?: Array<SubscriptionPlanLineItem>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. */
    "metadata"?: Record<string, string>;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): Array of integer. maxItems: 10. uniqueItems: true. Shape $[] (Value):
     * integer. minimum: 1. maximum: 100.
     */
    "quantity_options": Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "setup_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Active plans accept new signups. Inactive plans refuse new signups
     * with PLAN_NOT_ACTIVE while existing subscriptions keep renewing. Archived plans are
     * read-only and their status is set only by DELETE
     * /v1/subscription-plans/{subscription_plan_id}. Value enum: "active", "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /** Shape $ (Value): Array of string. Shape $[] (Value): string. */
    "subscription_delivery_method_ids": Array<string>;
    /** Shape $ (Value): string. */
    "subscription_plan_id": string;
    /** Shape $ (Value): integer. Format: int32. */
    "trial_period_days"?: number;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link SubscriptionPlanChangePreview}. Estimated pricing for a subscription
 * plan change, including the recurring item subtotal and renewal amounts.
 */
export type SubscriptionPlanChangePreview = {
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "billing_interval_count": number;
    /** Shape $ (Value): string.  Value enum: "now", "next_renewal". */
    "billing_starts": "now" | "next_renewal" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Unused paid item time credited when
     * billing_starts is now; null for next_renewal. Shape $.anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape
     * $.anyOf[2] (Value): null.
     */
    "credit_money": ((MoneyValue) | (null));
    /** Shape $ (Value): string.  Value enum: "plan_change". */
    "mode": "plan_change" | (string & {});
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "recurring_subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link SubscriptionRenewalEstimate}. Estimated pricing and billing time for
     * a subscription's next renewal, including items, discounts, shipping, and tax.
     */
    "renewal": SubscriptionRenewalEstimate;
    /** Shape $ (Value): string. */
    "subscription_id": string;
    /** Shape $ (Value): string. */
    "subscription_plan_id": string;
};
/**
 * Shape $ (Value): {@link SubscriptionPlanChangeResult}. The result of changing a subscription
 * plan, including the subscription and any order and payment attempt created for immediate
 * billing.
 */
export type SubscriptionPlanChangeResult = {
    /**
     * Shape $ (Value): {@link Order} or null. The new period's order when billing_starts is now,
     * including a canceled order when payment fails. Null for next_renewal. Shape $.anyOf[1]
     * (Value): {@link Order}. A customer's purchase and its payment and fulfillment progress.
     * Shape $.anyOf[2] (Value): null.
     */
    "order": ((Order) | (null));
    /**
     * Shape $ (Value): {@link OrderPaymentAttempt} or null. The recorded payment attempt when
     * billing_starts is now, including declines. Null for next_renewal. Shape $.anyOf[1] (Value):
     * {@link OrderPaymentAttempt}. An attempt to pay an order. Shape $.anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((OrderPaymentAttempt) | (null));
    /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
    "subscription": Subscription;
};
/**
 * Shape $ (Value): {@link SubscriptionPlanChangeResultResponse}. A response containing
 * `SubscriptionPlanChangeResult` data.
 */
export type SubscriptionPlanChangeResultResponse = {
    /**
     * Shape $ (Value): {@link SubscriptionPlanChangeResult}. The result of changing a subscription
     * plan, including the subscription and any order and payment attempt created for immediate
     * billing.
     */
    "data": SubscriptionPlanChangeResult;
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
 * Shape $ (Value): {@link SubscriptionPlanLineItem}. A line item on a subscription plan, from a
 * variant or bundle, with its quantity, price, and variants a subscriber can swap to.
 */
export type SubscriptionPlanLineItem = ({
    /**
     * Shape $ (Value): Array of {@link BundleComponent}. Shape $[] (Value): {@link
     * BundleComponent}. An item included in a bundle.
     */
    "bundle_components"?: Array<BundleComponent>;
    /** Shape $ (Value): string. */
    "bundle_id"?: string;
    /**
     * Shape $ (Value): Array of {@link CategoryReference}. Shape $[] (Value): {@link
     * CategoryReference}. A reference to a product category by ID, handle, and name.
     */
    "categories"?: Array<CategoryReference>;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifier}. Shape $[] (Value): {@link
     * OrderLineItemModifier}. A modifier selected on an order line item, with its quantity, price
     * change, total, and display flags.
     */
    "modifiers"?: Array<OrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): string. */
    "product_id"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /** Shape $ (Value): string. */
    "subscription_plan_line_item_id": string;
    /**
     * Shape $ (Value): Array of string. maxItems: 25. uniqueItems: true. Shape $[] (Value):
     * string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids": Array<string>;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPlanSwapVariant}. Current sellable alternatives
     * in swap_variant_ids order, excluding the line's own variant and variants priced in a
     * different currency. Present on variant lines, including an empty array. maxItems: 25. Shape
     * $[] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber can swap to on a
     * plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /**
     * Shape $ (Value): {@link OrderLineItemTax}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. */
    "variant_id": string;
}))
    | (({
    /** Shape $ (Value): string. */
    "bundle_id": string;
}))
    | (({
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SubscriptionPlanLineItemRequest}. A line item to put on a new
 * subscription plan, from a variant, a bundle, or a custom name and price.
 */
export type SubscriptionPlanLineItemRequest = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequest}. Shape $[] (Value): {@link
     * OrderLineItemModifierRequest}. A modifier selection you supply on a line item: a catalog
     * modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional): Map of
     * string. Shape $[].metadata.* (Value): string. minLength: 1. Shape $[].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. minLength: 1. Shape
     * $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity
     * (Optional): integer string. Whole-number quantity; fractional quantities are not supported.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape
     * $[].text (Optional): {@link TextModifierRequest}. Text a buyer entered for a text modifier
     * group on an order line item. Shape $[].oneOf[1] (Value): any. Shape $[].oneOf[2] (Value):
     * any.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): Array of string. maxItems: 25. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Shape $ (Value): {@link OrderLineItemTax}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTax;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
}))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}))
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SubscriptionPlanLineItemRequestInput}. A line item to put on a new
 * subscription plan, from a variant, a bundle, or a custom name and price.
 */
export type SubscriptionPlanLineItemRequestInput = ({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "description"?: string;
    /**
     * Shape $ (Value): Array of {@link OrderLineItemModifierRequestInput}. Shape $[] (Value):
     * {@link OrderLineItemModifierRequestInput}. A modifier selection you supply on a line item: a
     * catalog modifier by ID or a text modifier, with a quantity. Shape $[].metadata (Optional):
     * Map of string. Shape $[].metadata.* (Value): string. minLength: 1. Shape $[].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. minLength: 1. Shape
     * $[].order_line_item_modifier_id (Optional): string. Existing selection ID to retain during
     * replacement. minLength: 1. pattern: ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Shape $[].quantity
     * (Optional): integer string. Whole-number quantity; fractional quantities are not supported.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64. Shape
     * $[].text (Optional): {@link TextModifierRequestInput}. Text a buyer entered for a text
     * modifier group on an order line item. Shape $[].oneOf[1] (Value): any. Shape $[].oneOf[2]
     * (Value): any.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** Shape $ (Value): string. minLength: 1. */
    "name"?: string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * Shape $ (Value): Array of string. maxItems: 25. uniqueItems: true. Shape $[] (Value):
     * string. minLength: 1. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     */
    "swap_variant_ids"?: Array<string>;
    /**
     * Shape $ (Value): {@link OrderLineItemTaxInput}. A line item's tax category and whether it is
     * taxable.
     */
    "tax"?: OrderLineItemTaxInput;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValueInput;
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id"?: string;
})
    & ((({
    /** Shape $ (Value): string. minLength: 1. */
    "variant_id": string;
})
    & (({
    "bundle_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "bundle_id": string;
})
    & (({
    "variant_id"?: never;
})
    & ({
    "name"?: never;
})
    & ({
    "unit_price_money"?: never;
})
    & ({
    "description"?: never;
})
    & ({
    "tax"?: never;
})))
    | (({
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
}))));
/** Shape $ (Value): {@link SubscriptionPlanListResponse}. A page of `SubscriptionPlan` objects. */
export type SubscriptionPlanListResponse = {
    /**
     * Shape $ (Value): Array of {@link SubscriptionPlan}. Shape $[] (Value): {@link
     * SubscriptionPlan}. The recurring price and billing terms offered to customers.
     */
    "data": Array<SubscriptionPlan>;
    /**
     * Shape $ (Value): {@link ResponseMeta}. Metadata returned with a response: the `api_version`,
     * `trace_id`, whether an idempotent request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /** Shape $ (Value): string. */
    "next_page_token"?: string;
    /**
     * Shape $ (Value): string. maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id"?: string;
};
/**
 * Shape $ (Value): {@link SubscriptionPlanResponse}. A response containing `SubscriptionPlan`
 * data.
 */
export type SubscriptionPlanResponse = {
    /**
     * Shape $ (Value): {@link SubscriptionPlan}. The recurring price and billing terms offered to
     * customers.
     */
    "data": SubscriptionPlan;
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
 * Shape $ (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber can swap to on a
 * plan line, with its name, options, and price.
 */
export type SubscriptionPlanSwapVariant = {
    /**
     * Shape $ (Value): {@link Image}. An image with its `url`, `width`, and `height`, and optional
     * `alt` text.
     */
    "image"?: Image;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): Array of {@link SelectedProductOption}. Shape $[] (Value): {@link
     * SelectedProductOption}. An option and value chosen for a product variant, such as size
     * Large.
     */
    "selected_options": Array<SelectedProductOption>;
    /** Shape $ (Value): string. */
    "sku"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Shape $.anyOf[1] (Value): {@link MoneyValue}.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape
     * $.anyOf[2] (Value): null.
     */
    "unit_price_money": ((MoneyValue) | (null));
    /** Shape $ (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. */
    "variant_id": string;
};
/**
 * Shape $ (Value): {@link SubscriptionPlanTermsRequest}. The `subscription_plan` variant of
 * `SubscriptionTermsInput`.
 */
export type SubscriptionPlanTermsRequest = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1. maximum: 100. Default: 1.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. */
    "subscription_plan_id": string;
    /** Shape $ (Value): string.  Value enum: "subscription_plan". */
    "type": "subscription_plan" | (string & {});
});
/**
 * Shape $ (Value): {@link SubscriptionPlanTermsRequestInput}. The `subscription_plan` variant of
 * `SubscriptionTermsInput`.
 */
export type SubscriptionPlanTermsRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Shape $ (Value): integer. Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32. minimum: 1. maximum: 100. Default: 1.
     */
    "quantity"?: number;
    /** Shape $ (Value): string. minLength: 1. */
    "subscription_plan_id": string;
    /** Shape $ (Value): string.  Value enum: "subscription_plan". */
    "type": "subscription_plan";
});
export type SubscriptionPlansCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateSubscriptionPlanRequestInput}. The request body for: Create
     * subscription plan.
     */
    "body": InputValue<CreateSubscriptionPlanRequestInput>;
};
export type SubscriptionPlansGetInput = {
    /** Shape $ (Value): string. */
    "subscription_plan_id": InputValue<string>;
};
export type SubscriptionPlansListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived".
     * Shape $[] (Value): string. Value enum: "active", "inactive", "archived".
     */
    "status"?: InputValue<Array<"active" | "inactive" | "archived">>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
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
export type SubscriptionPlansRemoveInput = {
    /** Shape $ (Value): string. */
    "subscription_plan_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type SubscriptionPlansUpdateInput = {
    /** Shape $ (Value): string. */
    "subscription_plan_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateSubscriptionPlanRequestInput}. The request body for: Update
     * subscription plan.
     */
    "body": InputValue<UpdateSubscriptionPlanRequestInput>;
};
/**
 * Shape $ (Value): {@link SubscriptionPreview}. A preview of a subscription. In `create` mode it
 * reports validity and errors; in `delivery_options` mode it lists delivery methods.
 */
export type SubscriptionPreview = {
    /**
     * Shape $ (Value): {@link SubscriptionAddressVerification}. The verification state of a
     * subscription's delivery address: `verified`, `unverified`, `needs_review`, or
     * `unverifiable`.
     */
    "address_verification"?: SubscriptionAddressVerification;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency"?: string;
    /**
     * Shape $ (Value): Array of {@link SubscriptionDeliveryOption}. Present in delivery_options
     * mode ([] when no method applies); absent in create mode. Shape $[] (Value): {@link
     * SubscriptionDeliveryOption}. A delivery method offered for a subscription, with its
     * availability, price, and the reason it is unavailable if it is.
     */
    "delivery_methods"?: Array<SubscriptionDeliveryOption>;
    /**
     * Shape $ (Value): {@link Address}. A postal address, as returned on customers, invoices, tax
     * locations, and fulfillment recipients.
     */
    "destination_address"?: Address;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPreviewError}. Present in create mode ([] when
     * the subscription is valid); absent in delivery_options mode. Shape $[] (Value): {@link
     * SubscriptionPreviewError}. An error found while previewing a subscription, with a `code`,
     * message, and the parameter at fault.
     */
    "errors"?: Array<SubscriptionPreviewError>;
    /** Shape $ (Value): boolean. Present in create mode; absent in delivery_options mode. */
    "is_valid"?: boolean;
    /** Shape $ (Value): string.  Value enum: "create", "delivery_options". */
    "mode": "create" | "delivery_options" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id"?: string;
};
/**
 * Shape $ (Value): {@link SubscriptionPreviewError}. An error found while previewing a
 * subscription, with a `code`, message, and the parameter at fault.
 */
export type SubscriptionPreviewError = {
    /** Shape $ (Value): string. */
    "code": string;
    /**
     * Shape $ (Value): Array of {@link ErrorDetail}. Shape $[] (Value): {@link ErrorDetail}. One
     * specific failure within an error, with a `code` and `message` plus fields that depend on the
     * code, such as the `param`, resource, quantity, or amount involved.
     */
    "details"?: Array<ErrorDetail>;
    /** Shape $ (Value): string. */
    "message": string;
    /** Shape $ (Value): string. */
    "param"?: string;
};
/** Shape $ (Value): {@link SubscriptionPreviewResponse}. The response for: Preview subscription. */
export type SubscriptionPreviewResponse = {
    /**
     * Shape $ (Value): {@link SubscriptionPreview} or {@link SubscriptionDeliveryMethodImpact} or
     * {@link SubscriptionRenewalPreview} or {@link SubscriptionPlanChangePreview}. Shape
     * $.oneOf[1] (Value): {@link SubscriptionPreview}. A preview of a subscription. In `create`
     * mode it reports validity and errors; in `delivery_options` mode it lists delivery methods.
     * Shape $.oneOf[2] (Value): {@link SubscriptionDeliveryMethodImpact}. How a delivery method
     * change affects subscriptions: current counts and how many would no longer be eligible. Shape
     * $.oneOf[3] (Value): {@link SubscriptionRenewalPreview}. A preview of a subscription's next
     * renewal and its estimated pricing. Shape $.oneOf[4] (Value): {@link
     * SubscriptionPlanChangePreview}. Estimated pricing for a subscription plan change, including
     * the recurring item subtotal and renewal amounts.
     */
    "data": ((SubscriptionPreview)
        | (SubscriptionDeliveryMethodImpact)
        | (SubscriptionRenewalPreview)
        | (SubscriptionPlanChangePreview)
        | (Record<string, unknown>));
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
export type SubscriptionPreviewsCreateInput = {
    /**
     * Shape $ (Value): {@link CreateSubscriptionPreviewRequestInput}. The request body for:
     * Preview subscription.
     */
    "body": InputValue<CreateSubscriptionPreviewRequestInput>;
};
/**
 * Shape $ (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
 * including its recurrence and remaining discounted cycles.
 */
export type SubscriptionPromotion = {
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): string or null. The attached promotion code ID; null when no promotion code
     * was used.
     */
    "promotion_code_id": string | null;
    /** Shape $ (Value): string. */
    "promotion_id": string;
    /**
     * Shape $ (Value): {@link PromotionRecurrence}. How often a promotion's discount repeats on a
     * subscription: once, for a number of charged payments, or forever.
     */
    "recurrence": PromotionRecurrence;
    /**
     * Shape $ (Value): integer string or null. Charged cycles remaining for a repeating promotion,
     * including the next cycle; null for a promotion that lasts forever. Use an integer string
     * (decimal digits), not a floating-point number. Format: int64.
     */
    "remaining_cycles": `${bigint}` | null;
};
/**
 * Shape $ (Value): {@link SubscriptionRenewalEstimate}. Estimated pricing and billing time for a
 * subscription's next renewal, including items, discounts, shipping, and tax.
 */
export type SubscriptionRenewalEstimate = {
    /**
     * Shape $ (Value): string or null. Expected billing time, or null when billing is not
     * scheduled. Format: date-time.
     */
    "billing_at": string | null;
    /**
     * Shape $ (Value): string. ISO 4217 currency code. minLength: 3. maxLength: 3. pattern:
     * ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link SubscriptionRenewalEstimateDiscount}. Shape $[] (Value):
     * {@link SubscriptionRenewalEstimateDiscount}. An estimated renewal discount from a promotion
     * or credit for a subscription plan change.
     */
    "discounts": Array<SubscriptionRenewalEstimateDiscount>;
    /**
     * Shape $ (Value): Array of {@link SubscriptionRenewalEstimateLineItem}. Shape $[] (Value):
     * {@link SubscriptionRenewalEstimateLineItem}. A subscription item's quantity, subtotal, and
     * discount in an estimated renewal.
     */
    "line_items": Array<SubscriptionRenewalEstimateLineItem>;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Estimated shipping; null for a digital
     * subscription. Shape $.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     */
    "shipping_money": ((MoneyValue) | (null));
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "subscription_cycle": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. Estimated tax; null when no tax address is
     * available. Shape $.anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     */
    "tax_money": ((MoneyValue) | (null));
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "total_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link SubscriptionRenewalEstimateDiscount}. An estimated renewal discount from
 * a promotion or credit for a subscription plan change.
 */
export type SubscriptionRenewalEstimateDiscount = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): string or null. Promotion ID for a promotion discount; null for unused-time
     * credit.
     */
    "promotion_id": string | null;
    /** Shape $ (Value): string.  Value enum: "promotion", "plan_change_credit". */
    "source": "promotion" | "plan_change_credit" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionRenewalEstimateLineItem}. A subscription item's quantity,
 * subtotal, and discount in an estimated renewal.
 */
export type SubscriptionRenewalEstimateLineItem = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported.
     * Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): string or null. The saved subscription line ID; null when previewing
     * replacement plan lines.
     */
    "subscription_line_item_id": string | null;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
};
/**
 * Shape $ (Value): {@link SubscriptionRenewalPreview}. A preview of a subscription's next renewal
 * and its estimated pricing.
 */
export type SubscriptionRenewalPreview = {
    /** Shape $ (Value): string.  Value enum: "next_renewal". */
    "mode": "next_renewal" | (string & {});
    /**
     * Shape $ (Value): {@link SubscriptionRenewalEstimate}. Estimated pricing and billing time for
     * a subscription's next renewal, including items, discounts, shipping, and tax.
     */
    "renewal": SubscriptionRenewalEstimate;
    /** Shape $ (Value): string. */
    "subscription_id": string;
};
/**
 * Shape $ (Value): {@link SubscriptionRenewalResult}. The subscription is the primary resource and
 * expected_version target; order and order_payment_attempt report the renewal outcome.
 */
export type SubscriptionRenewalResult = {
    /**
     * Shape $ (Value): {@link Order}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "order": Order;
    /**
     * Shape $ (Value): {@link OrderPaymentAttempt} or null. Shape $.anyOf[1] (Value): {@link
     * OrderPaymentAttempt}. An attempt to pay an order. Shape $.anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((OrderPaymentAttempt) | (null));
    /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
    "subscription": Subscription;
};
/**
 * Shape $ (Value): {@link SubscriptionRenewalResultResponse}. A response containing
 * `SubscriptionRenewalResult` data.
 */
export type SubscriptionRenewalResultResponse = {
    /**
     * Shape $ (Value): {@link SubscriptionRenewalResult}. The subscription is the primary resource
     * and expected_version target; order and order_payment_attempt report the renewal outcome.
     */
    "data": SubscriptionRenewalResult;
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
/** Shape $ (Value): {@link SubscriptionResponse}. A response containing `Subscription` data. */
export type SubscriptionResponse = {
    /** Shape $ (Value): {@link Subscription}. A customer's recurring purchase. */
    "data": Subscription;
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
 * Shape $ (Value): {@link SubscriptionServiceLocation}. The address where a subscription's service
 * is delivered, with the saved customer address it came from.
 */
export type SubscriptionServiceLocation = {
    /**
     * Shape $ (Value): {@link Address}. A postal address, as returned on customers, invoices, tax
     * locations, and fulfillment recipients.
     */
    "address"?: Address;
    /** Shape $ (Value): string. */
    "customer_address_id"?: string;
};
/**
 * Shape $ (Value): {@link SubscriptionServiceLocationInputAddress}. The `address` variant of
 * `SubscriptionServiceLocationInput`.
 */
export type SubscriptionServiceLocationInputAddress = {
    /**
     * Shape $ (Value): {@link AddressRequest}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "address": AddressRequest;
    /** Shape $ (Value): string.  Value enum: "address". */
    "source": "address" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionServiceLocationInputAddressInput}. The `address` variant of
 * `SubscriptionServiceLocationInput`.
 */
export type SubscriptionServiceLocationInputAddressInput = {
    /**
     * Shape $ (Value): {@link AddressRequestInput}. A postal address you supply when creating or
     * updating a customer, invoice, fulfillment, or delivery selection. Send null for `line2` to
     * clear it.
     */
    "address": AddressRequestInput;
    /** Shape $ (Value): string.  Value enum: "address". */
    "source": "address";
};
/**
 * Shape $ (Value): {@link SubscriptionServiceLocationInputCustomerAddress}. The `customer_address`
 * variant of `SubscriptionServiceLocationInput`.
 */
export type SubscriptionServiceLocationInputCustomerAddress = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_address_id": string;
    /** Shape $ (Value): string.  Value enum: "customer_address". */
    "source": "customer_address" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionServiceLocationInputCustomerAddressInput}. The
 * `customer_address` variant of `SubscriptionServiceLocationInput`.
 */
export type SubscriptionServiceLocationInputCustomerAddressInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_address_id": string;
    /** Shape $ (Value): string.  Value enum: "customer_address". */
    "source": "customer_address";
};
/**
 * Shape $ (Value): {@link SubscriptionServiceLocationRequest}. Where a subscription's service is
 * delivered: a saved customer address by ID, or a new address.
 */
export type SubscriptionServiceLocationRequest = ((SubscriptionServiceLocationInputCustomerAddress)
    | (SubscriptionServiceLocationInputAddress)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SubscriptionServiceLocationRequestInput}. Where a subscription's service
 * is delivered: a saved customer address by ID, or a new address.
 */
export type SubscriptionServiceLocationRequestInput = ((SubscriptionServiceLocationInputCustomerAddressInput)
    | (SubscriptionServiceLocationInputAddressInput));
/**
 * Shape $ (Value): {@link SubscriptionSettings}. Subscription settings: the default billing
 * schedule owner, dunning retry days and end action, and the backorder email.
 */
export type SubscriptionSettings = {
    /** Shape $ (Value): string.  Value enum: "flint", "external". */
    "default_billing_schedule_owner"?: "flint" | "external" | (string & {});
    /** Shape $ (Value): string.  Value enum: "cancel", "pause", "notify_only". */
    "dunning_end_action"?: "cancel" | "pause" | "notify_only" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "dunning_retry_days"?: number;
    /** Shape $ (Value): string.  Value enum: "cancel", "pause", "notify_only". */
    "external_dunning_end_action"?: "cancel" | "pause" | "notify_only" | (string & {});
    /** Shape $ (Value): boolean. */
    "send_backordered_email"?: boolean;
};
/**
 * Shape $ (Value): {@link SubscriptionSettingsInput}. Subscription settings: the default billing
 * schedule owner, dunning retry days and end action, and the backorder email.
 */
export type SubscriptionSettingsInput = {
    /** Shape $ (Value): string.  Value enum: "flint", "external". */
    "default_billing_schedule_owner"?: "flint" | "external";
    /** Shape $ (Value): string.  Value enum: "cancel", "pause", "notify_only". */
    "dunning_end_action"?: "cancel" | "pause" | "notify_only";
    /** Shape $ (Value): integer. Format: int32. */
    "dunning_retry_days"?: number;
    /** Shape $ (Value): string.  Value enum: "cancel", "pause", "notify_only". */
    "external_dunning_end_action"?: "cancel" | "pause" | "notify_only";
    /** Shape $ (Value): boolean. */
    "send_backordered_email"?: boolean;
};
/**
 * Shape $ (Value): {@link SubscriptionSnapshotMetrics}. The half-open period [period_start_at,
 * period_end_at) includes its start and excludes its end. Amounts and payments_count use currency;
 * customer and subscription counts span currencies.
 */
export type SubscriptionSnapshotMetrics = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Current mrr_money multiplied by 12, in currency;
     * independent of the requested period. The half-open period [period_start_at, period_end_at)
     * includes its start and excludes its end. Amounts and payments_count use currency; customer
     * and subscription counts span currencies. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "arr_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monthly recurring revenue from current billing
     * snapshots of active and past_due subscriptions, restricted to currency. Each subscription is
     * normalized and rounded separately; independent of the requested period. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "mrr_money": MoneyValue;
    /**
     * Shape $ (Value): {@link SubscriptionStatusCounts}. Current subscription counts by status
     * across currencies; independent of the requested period. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Counts of
     * current subscriptions by status, across currencies.
     */
    "status_counts": SubscriptionStatusCounts;
};
/**
 * Shape $ (Value): {@link SubscriptionStatusCounts}. Counts of current subscriptions by status,
 * across currencies.
 */
export type SubscriptionStatusCounts = {
    /**
     * Shape $ (Value): integer string. Current subscriptions with this status, across currencies.
     * Selected by current subscription status, independent of the requested half-open period. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "active_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Current subscriptions with this status, across currencies.
     * Selected by current subscription status, independent of the requested half-open period. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "canceled_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Current subscriptions with this status, across currencies.
     * Selected by current subscription status, independent of the requested half-open period. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "incomplete_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Current subscriptions with this status, across currencies.
     * Selected by current subscription status, independent of the requested half-open period. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "past_due_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Current subscriptions with this status, across currencies.
     * Selected by current subscription status, independent of the requested half-open period. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "paused_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Current subscriptions with this status, across currencies.
     * Selected by current subscription status, independent of the requested half-open period. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "scheduled_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Current subscriptions with this status, across currencies.
     * Selected by current subscription status, independent of the requested half-open period. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "trialing_count": `${bigint}`;
};
/**
 * Shape $ (Value): {@link SubscriptionTermsRequest}. Subscription terms from either a subscription
 * plan or subscription offers, selected by `type`.
 */
export type SubscriptionTermsRequest = ((SubscriptionPlanTermsRequest) | (SubscriptionOfferTermsRequest) | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link SubscriptionTermsRequestInput}. Subscription terms from either a
 * subscription plan or subscription offers, selected by `type`.
 */
export type SubscriptionTermsRequestInput = ((SubscriptionPlanTermsRequestInput) | (SubscriptionOfferTermsRequestInput));
/**
 * Shape $ (Value): {@link SubscriptionUpcomingDeliveryHold}. A delivery problem detected for an
 * upcoming renewal that will hold the subscription's delivery, and who can fix it.
 */
export type SubscriptionUpcomingDeliveryHold = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "detected_at": string;
    /** Shape $ (Value): string.  Value enum: "buyer", "merchant". */
    "fixable_by": "buyer" | "merchant" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "method_unavailable", "destination_not_served",
     * "rate_unavailable".
     */
    "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {});
    /**
     * Shape $ (Value): string. Time of the next renewal affected by this delivery issue. Format:
     * date-time.
     */
    "renewal_at": string;
};
/**
 * Shape $ (Value): {@link SubscriptionWindowMetrics}. The half-open period [period_start_at,
 * period_end_at) includes its start and excludes its end. Amounts and payments_count use currency;
 * customer and subscription counts span currencies.
 */
export type SubscriptionWindowMetrics = {
    /**
     * Shape $ (Value): integer string. Subscriptions selected by canceled_at in the period, across
     * currencies. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. Use an integer string (decimal digits), not a floating-point number.
     * Format: int64.
     */
    "canceled_subscriptions_count": `${bigint}`;
    /**
     * Shape $ (Value): {@link MoneyValue}. Subscription-sourced payment amounts with a succeeded
     * payment activity selected by activity created_at in the period, counted once per payment.
     * Includes recurring charges and setup fees, restricted to currency. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "collected_money": MoneyValue;
    /**
     * Shape $ (Value): integer string. Subscriptions selected by subscription created_at in the
     * period whose current status is trialing, active, paused, or past_due. Excludes incomplete
     * and canceled subscriptions; past counts can change with current status. Spans currencies.
     * The half-open period [period_start_at, period_end_at) includes its start and excludes its
     * end. Amounts and payments_count use currency; customer and subscription counts span
     * currencies. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "new_subscriptions_count": `${bigint}`;
};
export type SubscriptionsCancelInput = MeCancelSubscriptionInput;
export type SubscriptionsChangePaymentMethodInput = MeChangeSubscriptionPaymentMethodInput;
export type SubscriptionsChangePlanInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link ChangeSubscriptionPlanRequestInput}. The request body for: Change
     * subscription plan.
     */
    "body": InputValue<ChangeSubscriptionPlanRequestInput>;
};
export type SubscriptionsCreateAccessLinkInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateSubscriptionAccessLinkRequestInput}. The access a subscription
     * link gives its buyer. Omit the body or purpose for read-only access.
     */
    "body"?: InputValue<CreateSubscriptionAccessLinkRequestInput>;
};
export type SubscriptionsCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateSubscriptionRequestInput}. The request body for: Create
     * subscription.
     */
    "body": InputValue<CreateSubscriptionRequestInput>;
};
export type SubscriptionsCreateLineItemInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateSubscriptionLineItemRequestInput}. The request body for: Add
     * subscription line item.
     */
    "body": InputValue<CreateSubscriptionLineItemRequestInput>;
};
export type SubscriptionsCreatePaymentRetryInput = MeCreateSubscriptionPaymentRetryInput;
export type SubscriptionsDeleteLineItemInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "subscription_line_item_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type SubscriptionsGetInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "payment_method",
     * "subscription_plan". Shape $[] (Value): string. Value enum: "customer", "payment_method",
     * "subscription_plan".
     */
    "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>;
};
export type SubscriptionsGetPaymentRetryInput = MeGetSubscriptionPaymentRetryInput;
export type SubscriptionsListInput = {
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "idempotency_key"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "subscription_plan",
     * "subscription_offer". Shape $[] (Value): string. Value enum: "subscription_plan",
     * "subscription_offer".
     */
    "terms_type"?: InputValue<Array<"subscription_plan" | "subscription_offer">>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". Shape $[] (Value): string. Value enum:
     * "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     */
    "status"?: InputValue<Array<"trialing" | "active" | "paused" | "past_due" | "canceled" | "incomplete" | "scheduled">>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "flint", "external". Shape $[]
     * (Value): string. Value enum: "flint", "external".
     */
    "billing_schedule_owner"?: InputValue<Array<"flint" | "external">>;
    /** Shape $ (Value): boolean. */
    "awaiting_billing_schedule"?: InputValue<boolean>;
    /** Shape $ (Value): boolean. */
    "cancel_at_period_end"?: InputValue<boolean>;
    /** Shape $ (Value): string. */
    "customer_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "delivery_method_id"?: InputValue<string>;
    /**
     * Shape $ (Value): Array of string. minItems: 1. [] enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable". Shape $[] (Value): string. Value enum:
     * "method_unavailable", "destination_not_served", "rate_unavailable".
     */
    "hold_reason"?: InputValue<Array<"method_unavailable" | "destination_not_served" | "rate_unavailable">>;
    /** Shape $ (Value): string. */
    "subscription_offer_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "subscription_plan_id"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at",
     * "next_billing_at".
     */
    "sort_by"?: InputValue<"created_at" | "updated_at" | "next_billing_at">;
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
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "next_billing_after"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z". */
    "next_billing_before"?: InputValue<string | globalThis.Date>;
    /** Shape $ (Value): boolean. */
    "needs_attention"?: InputValue<boolean>;
    /**
     * Shape $ (Value): Array of string. [] enum: "customer", "payment_method",
     * "subscription_plan". Shape $[] (Value): string. Value enum: "customer", "payment_method",
     * "subscription_plan".
     */
    "expand"?: InputValue<Array<"customer" | "payment_method" | "subscription_plan">>;
};
export type SubscriptionsListPaymentRetriesInput = MeListSubscriptionPaymentRetriesInput;
export type SubscriptionsPauseInput = MePauseSubscriptionInput;
export type SubscriptionsReactivateInput = MeReactivateSubscriptionInput;
export type SubscriptionsRenewInput = MeRenewSubscriptionInput;
export type SubscriptionsResumeInput = MeReactivateSubscriptionInput;
export type SubscriptionsSkipCycleInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link SkipSubscriptionCycleRequestInput}. The request body for: Skip
     * subscription cycle.
     */
    "body": InputValue<SkipSubscriptionCycleRequestInput>;
};
export type SubscriptionsUpdateBillingScheduleInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateSubscriptionBillingScheduleRequestInput}. A closed
     * owner-specific billing schedule update.
     */
    "body": InputValue<UpdateSubscriptionBillingScheduleRequestInput>;
};

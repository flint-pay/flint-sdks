import type { BundleComponent } from './types-1.js';
import type { CategoryReference } from './types-3.js';
import type { Image } from './types-21.js';
import type { MoneyValue, Order, MoneyValueInput } from './types-33.js';
import type { OrderLineItemModifier, OrderLineItemTax, OrderPaymentAttempt } from './types-34.js';
import type {
    SelectedProductOption,
    SubscriptionAddressVerification,
    Subscription,
    SkipSubscriptionCycleRequestInput
} from './types-47.js';
import type { ResponseMeta } from './types-42.js';
import type {
    SubscriptionPlan,
    SubscriptionDeliveryOption,
    SubscriptionDeliveryMethodImpact,
    SubscriptionPlanChangePreview,
    SubscriptionDeliveryDestinationInputAddressInput,
    SubscriptionOfferTermsRequest,
    SubscriptionOfferTermsRequestInput
} from './types-48.js';
import type { InputValue } from '../runtime.js';
import type {
    CreateSubscriptionPlanRequestInput,
    CreateSubscriptionPreviewRequestInput,
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionRequestInput,
    CreateSubscriptionLineItemRequestInput
} from './types-10.js';
import type { UpdateSubscriptionPlanRequestInput, UpdateSubscriptionRequestInput } from './types-53.js';
import type { Address, AddressRequest } from './types-0.js';
import type { ErrorDetail } from './types-18.js';
import type { PromotionRecurrence } from './types-40.js';
import type {
    MeCancelSubscriptionInput,
    MeCreateSubscriptionPaymentRetryInput,
    MeGetSubscriptionPaymentRetryInput
} from './types-31.js';
import type { ChangeSubscriptionPlanRequestInput } from './types-4.js';
import type {
    MeListSubscriptionPaymentRetriesInput,
    MePauseSubscriptionInput,
    MeRenewSubscriptionInput,
    MeResumeSubscriptionInput
} from './types-32.js';
import type { UpdateSubscriptionLineItemRequestInput } from './types-52.js';
import type { TaxJurisdiction, TaxJurisdictionInput, TaxJurisdictionRequestRequestInput } from './types-50.js';
/**
 * Shape $ (Value): {@link SubscriptionPlanLineItemVariant}. The `variant` variant of
 * `SubscriptionPlanLineItem`.
 */
export type SubscriptionPlanLineItemVariant = ({
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
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id": string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Shape $ (Value): string. */
    "variant_id": string;
}));
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
    "request_id": string;
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
    "request_id": string;
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
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
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
    "request_id": string;
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
    "request_id": string;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link SubscriptionServiceLocation}. The address where a subscription's service
 * is delivered, with the saved customer address it came from.
 */
export type SubscriptionServiceLocation = {
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
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
     * Shape $ (Value): {@link AddressRequest}. A complete postal address. State and postal_code
     * are required for US addresses and optional for other countries. Send null or omit line2,
     * state, and postal_code when the address has none.
     */
    "address": AddressRequest;
    /** Shape $ (Value): string.  Value enum: "address". */
    "type": "address" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionServiceLocationInputAddressInput}. The `address` variant of
 * `SubscriptionServiceLocationInput`.
 */
export type SubscriptionServiceLocationInputAddressInput = SubscriptionDeliveryDestinationInputAddressInput;
/**
 * Shape $ (Value): {@link SubscriptionServiceLocationInputCustomerAddress}. The `customer_address`
 * variant of `SubscriptionServiceLocationInput`.
 */
export type SubscriptionServiceLocationInputCustomerAddress = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_address_id": string;
    /** Shape $ (Value): string.  Value enum: "customer_address". */
    "type": "customer_address" | (string & {});
};
/**
 * Shape $ (Value): {@link SubscriptionServiceLocationInputCustomerAddressInput}. The
 * `customer_address` variant of `SubscriptionServiceLocationInput`.
 */
export type SubscriptionServiceLocationInputCustomerAddressInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "customer_address_id": string;
    /** Shape $ (Value): string.  Value enum: "customer_address". */
    "type": "customer_address";
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
 * Shape $ (Value): {@link SubscriptionSettingsRequestRequestInput}. Subscription settings: the
 * default billing schedule owner, dunning retry days and end action, and the backorder email.
 */
export type SubscriptionSettingsRequestRequestInput = {
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
export type SubscriptionsRenewInput = MeRenewSubscriptionInput;
export type SubscriptionsResumeInput = MeResumeSubscriptionInput;
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
export type SubscriptionsUpdateInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateSubscriptionRequestInput}. The request body for: Update
     * subscription.
     */
    "body": InputValue<UpdateSubscriptionRequestInput>;
};
export type SubscriptionsUpdateLineItemInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): string. */
    "subscription_line_item_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateSubscriptionLineItemRequestInput}. The request body for:
     * Update subscription line item.
     */
    "body": InputValue<UpdateSubscriptionLineItemRequestInput>;
};
/**
 * Shape $ (Value): {@link TaxBreakdown}. The tax calculated for one jurisdiction on an order, line
 * item, or charge, with the taxable amount, rate or flat amount, and tax.
 */
export type TaxBreakdown = ({
    /** Shape $ (Value): string.  Value enum: "percentage", "flat_amount". */
    "calculation_type": "percentage" | "flat_amount" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "fulfillment_choice_group_id"?: string;
    /**
     * Shape $ (Value): {@link TaxJurisdiction}. A taxing jurisdiction with its level, such as
     * state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string. */
    "order_charge_id"?: string;
    /** Shape $ (Value): string. */
    "order_line_item_id"?: string;
    /** Shape $ (Value): number. minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
    /** Shape $ (Value): string. */
    "tax_breakdown_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "sales_tax", "use_tax", "retail_delivery_fee". */
    "tax_type": "sales_tax" | "use_tax" | "retail_delivery_fee" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "standard_rated", "not_taxable", "customer_exempt",
     * "tax_disabled", "location_required", "calculation_incomplete".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "taxable_money": MoneyValue;
})
    & ((Exclude<TaxBreakdownPercentage & object, readonly unknown[]>)
    | (Exclude<TaxBreakdownFlatAmount & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Shape $ (Value): {@link TaxBreakdownFlatAmount}. The `flat_amount` variant of `TaxBreakdown`. */
export type TaxBreakdownFlatAmount = ({
    /** Shape $ (Value): string.  Value enum: "flat_amount". */
    "calculation_type": "flat_amount" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "flat_money": MoneyValue;
    /** Shape $ (Value): string. */
    "fulfillment_choice_group_id"?: string;
    /**
     * Shape $ (Value): {@link TaxJurisdiction}. A taxing jurisdiction with its level, such as
     * state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string. */
    "order_charge_id"?: string;
    /** Shape $ (Value): string. */
    "order_line_item_id"?: string;
    /** Shape $ (Value): number. minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent"?: number;
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
    /** Shape $ (Value): string. */
    "tax_breakdown_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "sales_tax", "use_tax", "retail_delivery_fee". */
    "tax_type": "sales_tax" | "use_tax" | "retail_delivery_fee" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "standard_rated", "not_taxable", "customer_exempt",
     * "tax_disabled", "location_required", "calculation_incomplete".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "taxable_money": MoneyValue;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "flat_amount". */
    "calculation_type"?: "flat_amount" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "flat_money": MoneyValue;
}));
/** Shape $ (Value): {@link TaxBreakdownPercentage}. The `percentage` variant of `TaxBreakdown`. */
export type TaxBreakdownPercentage = ({
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "calculation_type": "percentage" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "fulfillment_choice_group_id"?: string;
    /**
     * Shape $ (Value): {@link TaxJurisdiction}. A taxing jurisdiction with its level, such as
     * state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /** Shape $ (Value): string. */
    "location_id"?: string;
    /** Shape $ (Value): string. */
    "order_charge_id"?: string;
    /** Shape $ (Value): string. */
    "order_line_item_id"?: string;
    /** Shape $ (Value): number. minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
    /** Shape $ (Value): string. */
    "tax_breakdown_id": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "tax_money": MoneyValue;
    /** Shape $ (Value): string.  Value enum: "sales_tax", "use_tax", "retail_delivery_fee". */
    "tax_type": "sales_tax" | "use_tax" | "retail_delivery_fee" | (string & {});
    /**
     * Shape $ (Value): string. Value enum: "standard_rated", "not_taxable", "customer_exempt",
     * "tax_disabled", "location_required", "calculation_incomplete".
     */
    "taxability_reason": "standard_rated"
        | "not_taxable"
        | "customer_exempt"
        | "tax_disabled"
        | "location_required"
        | "calculation_incomplete"
        | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "taxable_money": MoneyValue;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "calculation_type"?: "percentage" | (string & {});
    /** Shape $ (Value): number. minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
}));
/**
 * Shape $ (Value): {@link TaxCalculationRequest}. Tax you calculated yourself for a line or
 * charge: whether prices include tax, and the tax components.
 */
export type TaxCalculationRequest = {
    /**
     * Shape $ (Value): Array of {@link TaxComponentRequest}. minItems: 1. Shape $[] (Value):
     * {@link TaxComponentRequest}. One tax component in a `TaxCalculationInput`: a jurisdiction,
     * tax type, and percent.
     */
    "components": Array<TaxComponentRequest>;
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive" | (string & {});
};
/**
 * Shape $ (Value): {@link TaxCalculationRequestInput}. Tax you calculated yourself for a line or
 * charge: whether prices include tax, and the tax components.
 */
export type TaxCalculationRequestInput = {
    /**
     * Shape $ (Value): Array of {@link TaxComponentRequestInput}. minItems: 1. Shape $[] (Value):
     * {@link TaxComponentRequestInput}. One tax component in a `TaxCalculationInput`: a
     * jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequestInput>;
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * Shape $ (Value): {@link TaxCalculationRequestRequestInput}. Tax you calculated yourself for a
 * line or charge: whether prices include tax, and the tax components.
 */
export type TaxCalculationRequestRequestInput = {
    /**
     * Shape $ (Value): Array of {@link TaxComponentRequestRequestInput}. minItems: 1. Shape $[]
     * (Value): {@link TaxComponentRequestRequestInput}. One tax component in a
     * `TaxCalculationInput`: a jurisdiction, tax type, and percent.
     */
    "components": Array<TaxComponentRequestRequestInput>;
    /** Shape $ (Value): string.  Value enum: "additive", "inclusive". */
    "price_mode": "additive" | "inclusive";
};
/**
 * Shape $ (Value): {@link TaxComponentRequest}. One tax component in a `TaxCalculationInput`: a
 * jurisdiction, tax type, and percent.
 */
export type TaxComponentRequest = ({
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "calculation_type"?: "percentage" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValue;
    /**
     * Shape $ (Value): {@link TaxJurisdiction}. A taxing jurisdiction with its level, such as
     * state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdiction;
    /** Shape $ (Value): number. minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Shape $ (Value): string.  Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax" | (string & {});
});
/**
 * Shape $ (Value): {@link TaxComponentRequestInput}. One tax component in a `TaxCalculationInput`:
 * a jurisdiction, tax type, and percent.
 */
export type TaxComponentRequestInput = ({
    /** Shape $ (Value): string.  Value enum: "percentage". */
    "calculation_type"?: "percentage";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): {@link TaxJurisdictionInput}. A taxing jurisdiction with its level, such as
     * state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdictionInput;
    /** Shape $ (Value): number. minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Shape $ (Value): string.  Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax";
})
    & ({
    "flat_money"?: never;
});
/**
 * Shape $ (Value): {@link TaxComponentRequestRequestInput}. One tax component in a
 * `TaxCalculationInput`: a jurisdiction, tax type, and percent.
 */
export type TaxComponentRequestRequestInput = ({
    /** Shape $ (Value): string. Default: "percentage". Value enum: "percentage". */
    "calculation_type"?: "percentage";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "flat_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): {@link TaxJurisdictionRequestRequestInput}. A taxing jurisdiction with its
     * level, such as state or city, name, state, and country.
     */
    "jurisdiction": TaxJurisdictionRequestRequestInput;
    /** Shape $ (Value): number. minimum: 0. maximum: 100. multipleOf: 0.0001. */
    "percent": number;
    /** Shape $ (Value): string.  Value enum: "sales_tax", "use_tax". */
    "tax_type": "sales_tax" | "use_tax";
})
    & ({
    "flat_money"?: never;
});

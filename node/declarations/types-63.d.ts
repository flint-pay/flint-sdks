import type {
    SubscriptionPlanChangeLineItemRequest,
    SubscriptionPlanChangeLineItemRequestInput,
    SubscriptionPlanChangePreview,
    SubscriptionOfferTermsRequest,
    SubscriptionOfferTermsRequestInput
} from './types-62.js';
import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionPlanRequestInput, CreateSubscriptionPreviewRequestInput } from './types-13.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { UpdateSubscriptionPlanRequestInput } from './types-68.js';
import type { Address, AddressRequest, AddressRequestInput, ApplySubscriptionPromotionRequestInput } from './types-0.js';
import type {
    SubscriptionAddressVerification,
    SubscriptionCreatePreview,
    SubscriptionChargeEstimate,
    Subscription,
    SubscriptionCancellationDetails
} from './types-60.js';
import type {
    SubscriptionDeliveryOption,
    SubscriptionDeliveryMethodImpact,
    SubscriptionDelivery,
    SubscriptionDeliveryHold,
    SubscriptionEndAfter,
    SubscriptionGiftRecipient,
    SubscriptionIntervalOption,
    SubscriptionInventoryWait,
    SubscriptionLineItem
} from './types-61.js';
import type {
    ErrorDetail,
    ExpandedCustomerSummary,
    ExpandedPaymentMethodSummary,
    ExpandedSubscriptionPlanSummary
} from './types-24.js';
import type { ResponseMeta } from './types-54.js';
import type { PromotionRecurrence, PromotionRefRequest, PromotionRefRequestInput } from './types-51.js';
import type { MoneyValue, Order } from './types-39.js';
import type { OrderPaymentAttempt } from './types-41.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-38.js';
import type { PartnerWebhookEnvelope, PaymentErrorSummary } from './types-44.js';
import type { CheckoutTaxCalculation } from './types-6.js';
/** The `subscription_plan` variant of `SubscriptionTermsInput`. */
export type SubscriptionPlanTermsRequest = ({
    /**
     * Unit of the billing period to subscribe on. Send it with `billing_interval_count`, and only
     * a pair the plan offers in `billing_interval_options`; omit both to use the plan's default
     * pair. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Number of `billing_interval` units between charges. Send it with `billing_interval`. Format:
     * int32. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Optional quantities for distinct lines in this plan. Omitted lines keep their plan defaults.
     * Merchants may set any line to 1 through 9,999, regardless of its buyer quantity policy.
     * maxItems: 50. [] (Value): {@link SubscriptionPlanChangeLineItemRequest}. Quantity override
     * for a line in the target subscription plan.
     */
    "line_items"?: Array<SubscriptionPlanChangeLineItemRequest>;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 1. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of the plan to subscribe to. The plan must be active. minLength: 1. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
    /** Start the subscription from a subscription plan. Value enum: "subscription_plan". */
    "type": "subscription_plan" | (string & {});
});
/** The `subscription_plan` variant of `SubscriptionTermsInput`. */
export type SubscriptionPlanTermsRequestInput = ({
    /**
     * Unit of the billing period to subscribe on. Send it with `billing_interval_count`, and only
     * a pair the plan offers in `billing_interval_options`; omit both to use the plan's default
     * pair. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /**
     * Number of `billing_interval` units between charges. Send it with `billing_interval`. Format:
     * int32. minimum: 1. maximum: 365.
     */
    "billing_interval_count"?: number;
    /**
     * Optional quantities for distinct lines in this plan. Omitted lines keep their plan defaults.
     * Merchants may set any line to 1 through 9,999, regardless of its buyer quantity policy.
     * maxItems: 50. [] (Value): {@link SubscriptionPlanChangeLineItemRequestInput}. Quantity
     * override for a line in the target subscription plan.
     */
    "line_items"?: Array<SubscriptionPlanChangeLineItemRequestInput>;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 1. Default: 1.
     */
    "quantity"?: number;
    /**
     * ID of the plan to subscribe to. The plan must be active. minLength: 1. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
    /** Start the subscription from a subscription plan. Value enum: "subscription_plan". */
    "type": "subscription_plan";
});
export type SubscriptionPlansCreateParams = (InputValue<CreateSubscriptionPlanRequestInput>)
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
export type SubscriptionPlansDeleteParams = {
    /**
     * Optional subscription plan version last read by the caller. Format: uint64. minimum: 1.
     * maximum: 9007199254740991.
     */
    "expected_version"?: InputValue<number>;
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
export type SubscriptionPlansGetParams = DisputesAcceptParams;
export type SubscriptionPlansListParams = {
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
     * Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * Example: "warehouse-1842".
     */
    "external_reference_id"?: InputValue<string>;
    /**
     * Search across subscription plan ID, external reference ID, name, and description. Text
     * fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards.
     * IDs match from the start and need the type prefix, such as plan_01.
     */
    "query"?: InputValue<string>;
    /**
     * Field to sort by. Defaults to created_at; ties are broken by subscription_plan_id. Default:
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
export type SubscriptionPlansUpdateParams = (InputValue<UpdateSubscriptionPlanRequestInput>)
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
/** Delivery methods available for a proposed subscription destination. */
export type SubscriptionPreview = {
    /**
     * How far verification of the destination address got. Omitted when no verification state
     * applies. The verification state of a subscription's delivery address: `verified`,
     * `unverified`, `needs_review`, or `unverifiable`.
     */
    "address_verification"?: SubscriptionAddressVerification;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency"?: string;
    /**
     * Delivery methods available for the proposed destination. [] (Value): {@link
     * SubscriptionDeliveryOption}. A delivery method offered for a subscription, with its
     * availability, price, and the reason it is unavailable if it is.
     */
    "delivery_methods": Array<SubscriptionDeliveryOption>;
    /**
     * The destination address the delivery methods were evaluated for: the address you sent, or
     * the saved customer address you chose. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "destination_address"?: Address;
    /** The kind of subscription preview. Value enum: "delivery_options". */
    "mode": "delivery_options" | (string & {});
    /**
     * Sorted ISO 3166-1 alpha-2 countries potentially served by this subscription's shipping
     * methods, based on their delivery configuration and shipping zones. Restrict a country
     * selector with this list only when shipping_countries_complete is true. Empty when no
     * shipping coverage is available. Other address, cart, customer and rate checks still apply.
     * [] (Value): string.
     */
    "shipping_countries": Array<string>;
    /**
     * Whether shipping_countries is safe to use as a country restriction. False when a radius
     * without an explicit country boundary may serve addresses across a border; clients must not
     * restrict the country selector in that case. Other address, cart, customer and rate checks
     * still apply when true.
     */
    "shipping_countries_complete": boolean;
    /**
     * ID of the subscription the delivery methods were listed for. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id"?: string;
};
/**
 * An error found while previewing a subscription, with a `code`, message, and the parameter at
 * fault.
 */
export type SubscriptionPreviewError = {
    /** Stable code for this failure, as an error response would carry it. */
    "code": string;
    /**
     * Individual failures behind this error, as an error response would list them. Omitted when
     * there are none. [] (Value): {@link ErrorDetail}. One specific failure within an error, with
     * a `code` and `message` plus fields that depend on the code, such as the `param`, resource,
     * quantity, or amount involved.
     */
    "details"?: Array<ErrorDetail>;
    /** What is wrong with the proposed subscription. */
    "message": string;
    /**
     * Request field the failure applies to, as a path in the preview request, such as
     * `subscription.terms.billing_interval`. Omitted when the failure isn't tied to one field.
     */
    "param"?: string;
};
/** The response for: Preview subscription. */
export type SubscriptionPreviewResponse = {
    /**
     * Resource, collection, or operation result returned by this request. oneOf[1] (Value): {@link
     * SubscriptionCreatePreview}. Validation and estimates for the first and recurring collections
     * of a proposed subscription. oneOf[2] (Value): {@link SubscriptionPreview}. Delivery methods
     * available for a proposed subscription destination. oneOf[3] (Value): {@link
     * SubscriptionDeliveryMethodImpact}. How a delivery method change affects subscriptions:
     * current counts and how many would no longer be eligible. oneOf[4] (Value): {@link
     * SubscriptionRenewalPreview}. A preview of a subscription's next renewal and its estimated
     * pricing. oneOf[5] (Value): {@link SubscriptionPlanChangePreview}. Estimated pricing for a
     * subscription plan change, including the recurring item subtotal and renewal amounts.
     * oneOf[6] (Value): {@link SubscriptionQuantityChangePreview}. Estimated pricing for a
     * quantity change that keeps the billing period and anchor. oneOf[7] (Value): {@link
     * SubscriptionPromotionApplyPreview}. A proposed subscription promotion attachment and
     * estimated renewal for its first eligible charged cycle.
     */
    "data": ((SubscriptionCreatePreview)
        | (SubscriptionPreview)
        | (SubscriptionDeliveryMethodImpact)
        | (SubscriptionRenewalPreview)
        | (SubscriptionPlanChangePreview)
        | (SubscriptionQuantityChangePreview)
        | (SubscriptionPromotionApplyPreview)
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
export type SubscriptionPreviewsCreateParams = (CreateSubscriptionPreviewRequestInput)
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
 * A recurring promotion applied to a subscription, including its recurrence and remaining
 * discounted cycles.
 */
export type SubscriptionPromotion = {
    /** First charged cycle eligible for this promotion. Format: uint64. minimum: 1. */
    "first_cycle": number;
    /**
     * Name the promotion shows buyers: its display name, or its name when it has no display name.
     * Frozen when the promotion was attached.
     */
    "name": string;
    /**
     * ID of the promotion code used to attach the promotion. Null when no promotion code was used.
     * Example: "pcode_01KEZF7C00JCC7QXWC262EF05T".
     */
    "promotion_code_id": string | null;
    /**
     * ID of the promotion attached to the subscription. Example:
     * "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string;
    /**
     * How often the promotion's discount repeats, frozen when the promotion was attached. How
     * often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence": PromotionRecurrence;
    /**
     * Discounted paid cycles remaining, capped by any replacement handoff. Null when the promotion
     * lasts forever and no replacement limits it. With incomplete historical records, remaining
     * cycles may be lower than the unused allowance. If no reliable bound is available, the
     * allowance is treated as used up. Format: int64.
     */
    "remaining_cycles": number | null;
};
/**
 * A proposed subscription promotion attachment and estimated renewal for its first eligible
 * charged cycle.
 */
export type SubscriptionPromotionApplyPreview = {
    /** The kind of subscription pricing estimate. Value enum: "promotion_apply". */
    "mode": "promotion_apply" | (string & {});
    /**
     * The promotion as it would attach to this subscription. A recurring promotion applied to a
     * subscription, including its recurrence and remaining discounted cycles.
     */
    "promotion": SubscriptionPromotion;
    /**
     * Estimated renewal for the promotion's first_cycle. Estimated pricing and billing time for a
     * subscription renewal, including items, discounts, shipping, and tax.
     */
    "renewal": SubscriptionChargeEstimate;
    /**
     * ID of the subscription being previewed. pattern: ^sub_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
};
/** A promotion to attach when creating or importing a subscription. */
export type SubscriptionPromotionRequest = {
    /**
     * Cycles already discounted on the previous system. Accepted only when billing_start.type is
     * imported, even when 0; omit it otherwise. Defaults to 0. Must be less than period_count for
     * repeating promotions and 0 for once and forever. Flint applies the remaining discounted
     * cycles. Format: uint64. minimum: 0.
     */
    "consumed_cycles"?: number;
    /**
     * First charged cycle eligible for this promotion. Defaults to 1; for billing_start.type
     * imported, defaults to billing_start.completed_cycles + 1 and cannot be earlier. Format:
     * uint64. minimum: 1.
     */
    "first_cycle"?: number;
    /**
     * Promotion to attach, identified by exactly one of promotion_id or promotion_code. Its
     * current terms are frozen when attached. Identifies the promotion to apply, by promotion code
     * or by promotion ID.
     */
    "promotion": PromotionRefRequest;
};
/** A promotion to attach when creating or importing a subscription. */
export type SubscriptionPromotionRequestInput = {
    /**
     * Cycles already discounted on the previous system. Accepted only when billing_start.type is
     * imported, even when 0; omit it otherwise. Defaults to 0. Must be less than period_count for
     * repeating promotions and 0 for once and forever. Flint applies the remaining discounted
     * cycles. Format: uint64. minimum: 0.
     */
    "consumed_cycles"?: number;
    /**
     * First charged cycle eligible for this promotion. Defaults to 1; for billing_start.type
     * imported, defaults to billing_start.completed_cycles + 1 and cannot be earlier. Format:
     * uint64. minimum: 1.
     */
    "first_cycle"?: number;
    /**
     * Promotion to attach, identified by exactly one of promotion_id or promotion_code. Its
     * current terms are frozen when attached. Identifies the promotion to apply, by promotion code
     * or by promotion ID.
     */
    "promotion": PromotionRefRequestInput;
};
/** Quantity for an existing subscription line. */
export type SubscriptionQuantityChangeLineItemRequest = {
    /**
     * Whole-number line quantity; fractional quantities are not supported. minimum: 1. maximum:
     * 9999.
     */
    "quantity": number;
    /**
     * The existing subscription line to change. minLength: 1. pattern:
     * ^sli_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA".
     */
    "subscription_line_item_id": string;
};
/** Quantity for an existing subscription line. */
export type SubscriptionQuantityChangeLineItemRequestInput = SubscriptionQuantityChangeLineItemRequest;
/** Estimated pricing for a quantity change that keeps the billing period and anchor. */
export type SubscriptionQuantityChangePreview = {
    /** When this quantity change is billed. Value enum: "prorated_now". */
    "billing_starts": "prorated_now" | (string & {});
    /**
     * Credit for unused paid subscription time. Null when there is no paid period to credit.
     * anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "credit_adjustment_money": ((MoneyValue) | (null));
    /**
     * Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery
     * cadence is set. Prices of lines that ship are per delivery. Format: int32. minimum: 1.
     * maximum: 24.
     */
    "deliveries_per_period": number;
    /**
     * Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one
     * delivery is made per billing period. Value enum: "daily", "weekly", "monthly", "yearly",
     * null.
     */
    "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
    /**
     * Number of delivery intervals between deliveries. Null when no separate delivery cadence is
     * set. Format: int32. minimum: 1.
     */
    "delivery_interval_count": number | null;
    /**
     * When the quantities are expected to take effect. Null when no billing time is available.
     * Format: date-time. Example: "2026-08-02T16:00:00Z".
     */
    "effective_at": string | null;
    /**
     * The subscription billing interval after the quantity change. Value enum: "daily", "weekly",
     * "monthly", "yearly".
     */
    "interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** The number of interval units in each billing period. Format: int32. */
    "interval_count": number;
    /** The kind of subscription pricing estimate. Value enum: "quantity_change". */
    "mode": "quantity_change" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * The full-period recurring item subtotal after the quantity change, before discounts, tax, or
     * shipping. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "recurring_subtotal_money": MoneyValue;
    /**
     * Estimated charge for this quantity change, including proration, unused-time credit,
     * discounts, and tax. Estimated pricing and billing time for a subscription renewal, including
     * items, discounts, shipping, and tax.
     */
    "renewal": SubscriptionChargeEstimate;
    /**
     * The subscription whose quantities were estimated. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
};
/**
 * The subscription and any immediate prorated billing outcome. A decline leaves the subscription
 * unchanged.
 */
export type SubscriptionQuantityChangeResult = {
    /**
     * The resolved billing timing for this quantity change. Value enum: "prorated_now",
     * "next_renewal", "period_end".
     */
    "billing_starts": "prorated_now" | "next_renewal" | "period_end" | (string & {});
    /**
     * The proration order, including a closed unpaid order on decline. Null when billing_starts is
     * next_renewal or period_end, or the net charge is zero. anyOf[1] (Value): {@link Order}. A
     * customer's purchase and its payment and fulfillment progress. anyOf[2] (Value): null.
     */
    "order": ((Order) | (null));
    /**
     * The payment attempt, including declines. Null when billing_starts is next_renewal or
     * period_end, or the net charge is zero. anyOf[1] (Value): {@link OrderPaymentAttempt}. An
     * attempt to pay an order. anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((OrderPaymentAttempt) | (null));
    /**
     * The updated subscription, or the unchanged subscription when payment fails. A customer's
     * recurring purchase.
     */
    "subscription": Subscription;
};
/** A response containing `SubscriptionQuantityChangeResult` data. */
export type SubscriptionQuantityChangeResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The subscription and any
     * immediate prorated billing outcome. A decline leaves the subscription unchanged.
     */
    "data": SubscriptionQuantityChangeResult;
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
export type SubscriptionReactivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Subscription>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription.reactivated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Subscription>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription.reactivated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.reactivated";
});
/**
 * The `subscription.reactivated` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionReactivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward,
     * so the cancel response returns it as null. Retrieve the subscription again to get it.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. `null` when the subscription isn't
     * paused or no resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_cancel_at (Required): string or null. When the scheduled cancellation takes
     * effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at
     * while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.scheduled_plan_change (Required): {@link
     * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged renewal.
     * Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH;
     * replace through change-plan. object.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
     * renewal. object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions
     * (Required): Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles. object.scheduled_resume_at (Required): string or null. When a pause with
     * a length (pause_duration_cycles) resumes on its own: that many delivery intervals after
     * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_location (Optional): {@link
     * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. The address where a subscription's service is delivered,
     * with the saved customer address it came from. object.starts_at (Optional): string. When a
     * scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Where the subscription is in its lifecycle. Each value says what it means. Value
     * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * object.subscription_id (Required): string. Stable identifier of the subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Subscription plan ID. Omitted when
     * terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.supported_actions (Required): Array of string. Merchant actions allowed by the
     * subscription's state. A route can still refuse a listed action for a transient reason, such
     * as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Required): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. object.tax.anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. object.tax.anyOf[2]
     * (Value): null. object.terms_type (Required): string. Terms come from the subscription plan
     * in subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required):
         * boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at.
         * Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode. `null` when a
         * cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the
         * cancel response returns it as null. Retrieve the subscription again to get it.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions[] (Value): string. Value enum: "cancel", "pause",
         * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". tax (Required):
         * {@link SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan
         * change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax
         * the subscription's renewal, setup fee and plan change orders use. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[2] (Value): null.
         * terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Subscription>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription.reactivated". */
    "event_type"?: "subscription.reactivated";
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
 * The `subscription.reactivated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionReactivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward,
     * so the cancel response returns it as null. Retrieve the subscription again to get it.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. `null` when the subscription isn't
     * paused or no resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_cancel_at (Required): string or null. When the scheduled cancellation takes
     * effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at
     * while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.scheduled_plan_change (Required): {@link
     * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged renewal.
     * Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH;
     * replace through change-plan. object.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
     * renewal. object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions
     * (Required): Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles. object.scheduled_resume_at (Required): string or null. When a pause with
     * a length (pause_duration_cycles) resumes on its own: that many delivery intervals after
     * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_location (Optional): {@link
     * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. The address where a subscription's service is delivered,
     * with the saved customer address it came from. object.starts_at (Optional): string. When a
     * scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Where the subscription is in its lifecycle. Each value says what it means. Value
     * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * object.subscription_id (Required): string. Stable identifier of the subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Subscription plan ID. Omitted when
     * terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.supported_actions (Required): Array of string. Merchant actions allowed by the
     * subscription's state. A route can still refuse a listed action for a transient reason, such
     * as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Required): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. object.tax.anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. object.tax.anyOf[2]
     * (Value): null. object.terms_type (Required): string. Terms come from the subscription plan
     * in subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required):
         * boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at.
         * Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode. `null` when a
         * cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the
         * cancel response returns it as null. Retrieve the subscription again to get it.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions[] (Value): string. Value enum: "cancel", "pause",
         * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". tax (Required):
         * {@link SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan
         * change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax
         * the subscription's renewal, setup fee and plan change orders use. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[2] (Value): null.
         * terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Subscription>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription.reactivated". */
    "event_type"?: "subscription.reactivated";
});
/** An estimated renewal discount from a promotion or credit for a subscription plan change. */
export type SubscriptionRenewalEstimateDiscount = {
    /**
     * Amount the discount takes off the estimate. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** Customer-facing name of the discount, or its internal name when it has none. */
    "name": string;
    /**
     * Promotion ID for a promotion discount. `null` when the discount is unused-time credit or
     * proration, which have no promotion. Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V".
     */
    "promotion_id": string | null;
    /**
     * What the discount comes from. Each value says what it means. Value enum: "promotion",
     * "plan_change_credit", "proration".
     */
    "source": "promotion" | "plan_change_credit" | "proration" | (string & {});
};
/** A subscription item's quantity, subtotal, and discount in an estimated renewal. */
export type SubscriptionRenewalEstimateLineItem = {
    /**
     * Discount allocated to this item. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "discount_money": MoneyValue;
    /** Name of the item. */
    "name": string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     * Subscription that owns subscription_line_item_id. Null when subscription_line_item_id is
     * null for new or replacement lines. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string | null;
    /**
     * The saved subscription line ID. `null` when the line isn't a saved subscription line yet, as
     * in a plan change or create preview. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA".
     */
    "subscription_line_item_id": string | null;
    /**
     * Item subtotal including modifiers, before discounts, shipping, and tax. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
};
/** A preview of a subscription's next renewal and its estimated pricing. */
export type SubscriptionRenewalPreview = {
    /** The kind of subscription preview. Value enum: "next_renewal". */
    "mode": "next_renewal" | (string & {});
    /**
     * Estimated charge for the subscription's next renewal. Estimated pricing and billing time for
     * a subscription renewal, including items, discounts, shipping, and tax.
     */
    "renewal": SubscriptionChargeEstimate;
    /**
     * ID of the subscription the next renewal was estimated for. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     */
    "subscription_id": string;
};
/**
 * The subscription is the primary resource and expected_version target; order and
 * order_payment_attempt report the renewal outcome.
 */
export type SubscriptionRenewalResult = {
    /**
     * The renewal order the attempt charged. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "order": Order;
    /**
     * The payment attempt that charged the renewal order, including when the payment was declined.
     * Read `last_payment_error` on it for a failed payment. An attempt to pay an order.
     */
    "order_payment_attempt": OrderPaymentAttempt;
    /** The subscription after the renewal attempt. A customer's recurring purchase. */
    "subscription": Subscription;
};
/** A response containing `SubscriptionRenewalResult` data. */
export type SubscriptionRenewalResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The subscription is the
     * primary resource and expected_version target; order and order_payment_attempt report the
     * renewal outcome.
     */
    "data": SubscriptionRenewalResult;
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
export type SubscriptionRenewalUpcomingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription.renewal_upcoming";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription.renewal_upcoming";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.renewal_upcoming";
});
/**
 * The `subscription.renewal_upcoming` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionRenewalUpcomingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward,
     * so the cancel response returns it as null. Retrieve the subscription again to get it.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. `null` when the subscription isn't
     * paused or no resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_cancel_at (Required): string or null. When the scheduled cancellation takes
     * effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at
     * while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.scheduled_plan_change (Required): {@link
     * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged renewal.
     * Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH;
     * replace through change-plan. object.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
     * renewal. object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions
     * (Required): Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles. object.scheduled_resume_at (Required): string or null. When a pause with
     * a length (pause_duration_cycles) resumes on its own: that many delivery intervals after
     * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_location (Optional): {@link
     * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. The address where a subscription's service is delivered,
     * with the saved customer address it came from. object.starts_at (Optional): string. When a
     * scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Where the subscription is in its lifecycle. Each value says what it means. Value
     * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * object.subscription_id (Required): string. Stable identifier of the subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Subscription plan ID. Omitted when
     * terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.supported_actions (Required): Array of string. Merchant actions allowed by the
     * subscription's state. A route can still refuse a listed action for a transient reason, such
     * as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Required): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. object.tax.anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. object.tax.anyOf[2]
     * (Value): null. object.terms_type (Required): string. Terms come from the subscription plan
     * in subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required):
         * boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at.
         * Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode. `null` when a
         * cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the
         * cancel response returns it as null. Retrieve the subscription again to get it.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions[] (Value): string. Value enum: "cancel", "pause",
         * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". tax (Required):
         * {@link SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan
         * change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax
         * the subscription's renewal, setup fee and plan change orders use. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[2] (Value): null.
         * terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription.renewal_upcoming". */
    "event_type"?: "subscription.renewal_upcoming";
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
 * The `subscription.renewal_upcoming` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionRenewalUpcomingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward,
     * so the cancel response returns it as null. Retrieve the subscription again to get it.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. `null` when the subscription isn't
     * paused or no resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_cancel_at (Required): string or null. When the scheduled cancellation takes
     * effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at
     * while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.scheduled_plan_change (Required): {@link
     * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged renewal.
     * Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH;
     * replace through change-plan. object.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
     * renewal. object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions
     * (Required): Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles. object.scheduled_resume_at (Required): string or null. When a pause with
     * a length (pause_duration_cycles) resumes on its own: that many delivery intervals after
     * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_location (Optional): {@link
     * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. The address where a subscription's service is delivered,
     * with the saved customer address it came from. object.starts_at (Optional): string. When a
     * scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Where the subscription is in its lifecycle. Each value says what it means. Value
     * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * object.subscription_id (Required): string. Stable identifier of the subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Subscription plan ID. Omitted when
     * terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.supported_actions (Required): Array of string. Merchant actions allowed by the
     * subscription's state. A route can still refuse a listed action for a transient reason, such
     * as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Required): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. object.tax.anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. object.tax.anyOf[2]
     * (Value): null. object.terms_type (Required): string. Terms come from the subscription plan
     * in subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required):
         * boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at.
         * Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode. `null` when a
         * cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the
         * cancel response returns it as null. Retrieve the subscription again to get it.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions[] (Value): string. Value enum: "cancel", "pause",
         * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". tax (Required):
         * {@link SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan
         * change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax
         * the subscription's renewal, setup fee and plan change orders use. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[2] (Value): null.
         * terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription.renewal_upcoming". */
    "event_type"?: "subscription.renewal_upcoming";
});
/** A response containing `Subscription` data. */
export type SubscriptionResponse = {
    /**
     * Resource, collection, or operation result returned by this request. A customer's recurring
     * purchase.
     */
    "data": Subscription;
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
export type SubscriptionResumedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Subscription>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription.resumed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Subscription>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription.resumed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.resumed";
});
/**
 * The `subscription.resumed` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionResumedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward,
     * so the cancel response returns it as null. Retrieve the subscription again to get it.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. `null` when the subscription isn't
     * paused or no resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_cancel_at (Required): string or null. When the scheduled cancellation takes
     * effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at
     * while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.scheduled_plan_change (Required): {@link
     * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged renewal.
     * Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH;
     * replace through change-plan. object.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
     * renewal. object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions
     * (Required): Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles. object.scheduled_resume_at (Required): string or null. When a pause with
     * a length (pause_duration_cycles) resumes on its own: that many delivery intervals after
     * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_location (Optional): {@link
     * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. The address where a subscription's service is delivered,
     * with the saved customer address it came from. object.starts_at (Optional): string. When a
     * scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Where the subscription is in its lifecycle. Each value says what it means. Value
     * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * object.subscription_id (Required): string. Stable identifier of the subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Subscription plan ID. Omitted when
     * terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.supported_actions (Required): Array of string. Merchant actions allowed by the
     * subscription's state. A route can still refuse a listed action for a transient reason, such
     * as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Required): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. object.tax.anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. object.tax.anyOf[2]
     * (Value): null. object.terms_type (Required): string. Terms come from the subscription plan
     * in subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required):
         * boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at.
         * Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode. `null` when a
         * cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the
         * cancel response returns it as null. Retrieve the subscription again to get it.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions[] (Value): string. Value enum: "cancel", "pause",
         * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". tax (Required):
         * {@link SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan
         * change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax
         * the subscription's renewal, setup fee and plan change orders use. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[2] (Value): null.
         * terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Subscription>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription.resumed". */
    "event_type"?: "subscription.resumed";
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
 * The `subscription.resumed` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionResumedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward,
     * so the cancel response returns it as null. Retrieve the subscription again to get it.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. `null` when the subscription isn't
     * paused or no resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_cancel_at (Required): string or null. When the scheduled cancellation takes
     * effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at
     * while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.scheduled_plan_change (Required): {@link
     * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged renewal.
     * Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH;
     * replace through change-plan. object.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
     * renewal. object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions
     * (Required): Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles. object.scheduled_resume_at (Required): string or null. When a pause with
     * a length (pause_duration_cycles) resumes on its own: that many delivery intervals after
     * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_location (Optional): {@link
     * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. The address where a subscription's service is delivered,
     * with the saved customer address it came from. object.starts_at (Optional): string. When a
     * scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Where the subscription is in its lifecycle. Each value says what it means. Value
     * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * object.subscription_id (Required): string. Stable identifier of the subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Subscription plan ID. Omitted when
     * terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.supported_actions (Required): Array of string. Merchant actions allowed by the
     * subscription's state. A route can still refuse a listed action for a transient reason, such
     * as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Required): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. object.tax.anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. object.tax.anyOf[2]
     * (Value): null. object.terms_type (Required): string. Terms come from the subscription plan
     * in subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required):
         * boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at.
         * Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode. `null` when a
         * cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the
         * cancel response returns it as null. Retrieve the subscription again to get it.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions[] (Value): string. Value enum: "cancel", "pause",
         * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". tax (Required):
         * {@link SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan
         * change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax
         * the subscription's renewal, setup fee and plan change orders use. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[2] (Value): null.
         * terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Subscription>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription.resumed". */
    "event_type"?: "subscription.resumed";
});
/** Frozen target terms that apply at the next charged renewal. */
export type SubscriptionScheduledPlanChange = {
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
     * SubscriptionLineItem}. An item included in a customer's recurring purchase.
     */
    "line_items": Array<SubscriptionLineItem>;
    /**
     * The frozen target subscription quantity. Whole-number quantity; fractional quantities are
     * not supported. Format: int32.
     */
    "quantity": number;
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
     * The scheduled target subscription plan. pattern: ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
};
/**
 * The address where a subscription's service is delivered, with the saved customer address it came
 * from.
 */
export type SubscriptionServiceLocation = {
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
     * ID of the saved customer address the location was copied from. Omitted when the location was
     * sent as an inline address. Example: "caddr_01KEZF7C00K2Q127FBJAXWB0FP".
     */
    "customer_address_id"?: string;
    /**
     * Customer that owns customer_address_id. Null when customer_address_id is absent or withheld
     * from the buyer projection. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     */
    "customer_id": string | null;
};
/** The `address` variant of `SubscriptionServiceLocationInput`. */
export type SubscriptionServiceLocationInputAddress = {
    /**
     * The address where the service is performed. Flint copies it. A complete postal address.
     * State and postal_code are required for US addresses and optional for other countries. Send
     * null or omit line2, state, and postal_code when the address has none.
     */
    "address": AddressRequest;
    /**
     * How the service location is given: a saved customer address or an inline address. Value
     * enum: "address".
     */
    "type": "address" | (string & {});
};
/** The `address` variant of `SubscriptionServiceLocationInput`. */
export type SubscriptionServiceLocationInputAddressInput = {
    /**
     * The address where the service is performed. Flint copies it. A complete postal address.
     * State and postal_code are required for US addresses and optional for other countries. Send
     * null or omit line2, state, and postal_code when the address has none.
     */
    "address": AddressRequestInput;
    /**
     * How the service location is given: a saved customer address or an inline address. Value
     * enum: "address".
     */
    "type": "address";
};
/** The `customer_address` variant of `SubscriptionServiceLocationInput`. */
export type SubscriptionServiceLocationInputCustomerAddress = {
    /**
     * ID of a saved address of the subscription's customer. Flint copies the address. minLength:
     * 1. Example: "caddr_01KEZF7C00K2Q127FBJAXWB0FP".
     */
    "customer_address_id": string;
    /**
     * How the service location is given: a saved customer address or an inline address. Value
     * enum: "customer_address".
     */
    "type": "customer_address" | (string & {});
};
/** The `customer_address` variant of `SubscriptionServiceLocationInput`. */
export type SubscriptionServiceLocationInputCustomerAddressInput = {
    /**
     * ID of a saved address of the subscription's customer. Flint copies the address. minLength:
     * 1. Example: "caddr_01KEZF7C00K2Q127FBJAXWB0FP".
     */
    "customer_address_id": string;
    /**
     * How the service location is given: a saved customer address or an inline address. Value
     * enum: "customer_address".
     */
    "type": "customer_address";
};
/**
 * Where a subscription's service is delivered: a saved customer address by ID, or a new address.
 */
export type SubscriptionServiceLocationRequest = ((SubscriptionServiceLocationInputCustomerAddress)
    | (SubscriptionServiceLocationInputAddress)
    | (Record<string, unknown>));
/**
 * Where a subscription's service is delivered: a saved customer address by ID, or a new address.
 */
export type SubscriptionServiceLocationRequestInput = ((SubscriptionServiceLocationInputCustomerAddressInput)
    | (SubscriptionServiceLocationInputAddressInput));
/**
 * Subscription settings: the default billing schedule owner, dunning retry days and end action,
 * and the backorder email.
 */
export type SubscriptionSettings = {
    /**
     * Who sets billing dates for a new subscription that doesn't send `billing_schedule`. Defaults
     * to `flint`. Value enum: "flint", "external".
     */
    "default_billing_schedule_owner"?: "flint" | "external" | (string & {});
    /**
     * What happens to a subscription that Flint bills when every payment retry has failed.
     * Defaults to `cancel`. Value enum: "cancel", "pause", "notify_only".
     */
    "dunning_end_action"?: "cancel" | "pause" | "notify_only" | (string & {});
    /**
     * Days automatic payment retries run after a renewal fails, from 1 to 90. Defaults to 16.
     * Format: int32. minimum: 1. maximum: 90. Default: 16.
     */
    "dunning_retry_days"?: number;
    /**
     * What happens to a subscription with an external billing schedule when every payment retry
     * has failed. Defaults to `notify_only`. Value enum: "cancel", "pause", "notify_only".
     */
    "external_dunning_end_action"?: "cancel" | "pause" | "notify_only" | (string & {});
    /** Whether Flint emails the buyer when a renewal waits on stock. Defaults to false. */
    "send_backordered_email"?: boolean;
};
/**
 * Subscription settings: the default billing schedule owner, dunning retry days and end action,
 * and the backorder email.
 */
export type SubscriptionSettingsRequestInput = {
    /**
     * Who sets billing dates for a new subscription that doesn't send `billing_schedule`. Defaults
     * to `flint`. Value enum: "flint", "external".
     */
    "default_billing_schedule_owner"?: "flint" | "external";
    /**
     * What happens to a subscription that Flint bills when every payment retry has failed.
     * Defaults to `cancel`. Value enum: "cancel", "pause", "notify_only".
     */
    "dunning_end_action"?: "cancel" | "pause" | "notify_only";
    /**
     * Days automatic payment retries run after a renewal fails, from 1 to 90. Defaults to 16.
     * Format: int32. minimum: 1. maximum: 90. Default: 16.
     */
    "dunning_retry_days"?: number;
    /**
     * What happens to a subscription with an external billing schedule when every payment retry
     * has failed. Defaults to `notify_only`. Value enum: "cancel", "pause", "notify_only".
     */
    "external_dunning_end_action"?: "cancel" | "pause" | "notify_only";
    /** Whether Flint emails the buyer when a renewal waits on stock. Defaults to false. */
    "send_backordered_email"?: boolean;
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type SubscriptionSnapshotMetrics = {
    /**
     * Current mrr_money multiplied by 12, in currency; independent of the requested period. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "arr_money": MoneyValue;
    /**
     * Monthly recurring revenue from current billing snapshots of active and past_due
     * subscriptions, restricted to currency. Each subscription is normalized and rounded
     * separately; independent of the requested period. The half-open period [period_start_at,
     * period_end_at) includes its start and excludes its end. Amounts and payments_count use
     * currency; customer and subscription counts span currencies. Monetary amount represented as
     * integer minor units plus an ISO 4217 currency code.
     */
    "mrr_money": MoneyValue;
    /**
     * Current subscription counts by status across currencies; independent of the requested
     * period. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. Counts of current subscriptions by status, across currencies.
     */
    "status_counts": SubscriptionStatusCounts;
};
/** Counts of current subscriptions by status, across currencies. */
export type SubscriptionStatusCounts = {
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "active_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "canceled_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "incomplete_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "past_due_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "paused_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "scheduled_count": number;
    /**
     * Current subscriptions with this status, across currencies. Selected by current subscription
     * status, independent of the requested half-open period. Format: int64.
     */
    "trialing_count": number;
};
/**
 * A proposed item swap for a buyer renewal preview: the subscription line item and the variant to
 * price in its place.
 */
export type SubscriptionSwapPreviewRequest = {
    /**
     * Version last read from the resource returned in `data` (the primary resource for a result
     * object). The write fails with `VERSION_CONFLICT` if it has changed. Requiredness depends on
     * the operation and fields being changed. Format: uint64. minimum: 1.
     */
    "expected_version"?: number;
    /**
     * ID of the subscription line item to swap. minLength: 1. pattern:
     * ^sli_[0-9A-HJKMNP-TV-Z]{26}$. Example: "sli_01KEZF7C00PPWVJ2N321V84ASA".
     */
    "subscription_line_item_id": string;
    /**
     * ID of the variant to price in place of the line item's current variant. minLength: 1.
     * pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "variant_id": string;
};
/**
 * A proposed item swap for a buyer renewal preview: the subscription line item and the variant to
 * price in its place.
 */
export type SubscriptionSwapPreviewRequestInput = SubscriptionSwapPreviewRequest;
/**
 * The tax the subscription's renewal, setup fee and plan change orders use. Returned only to
 * merchant credentials; omitted for buyer credentials.
 */
export type SubscriptionTax = {
    /**
     * How the subscription's orders calculate tax. `null` when they use `tax.default_calculation`
     * from your settings, where a `provided` default means automatic. anyOf[1] (Value): {@link
     * CheckoutTaxCalculation}. Replaced as a whole: send every field you want to keep. `automatic`
     * calculates tax through your tax connection. `external` takes the tax your tax calculation
     * callback returns, and requires `components_source: callback`, because Flint creates the
     * subscription's orders and nobody can send their components. anyOf[2] (Value): null.
     */
    "calculation": ((CheckoutTaxCalculation) | (null));
    /** Whether the subscription's orders calculate tax. */
    "enabled": boolean;
};
/**
 * Replaced as a whole: send every field you want to keep. `automatic` calculates tax through your
 * tax connection. `external` takes the tax your tax calculation callback returns, and requires
 * `components_source: callback`, because Flint creates the subscription's orders and nobody can
 * send their components.
 */
export type SubscriptionTaxCalculationRequestInput = {
    /**
     * Where external tax comes from. Only `callback` is accepted: Flint asks the tax calculation
     * callback selected in `tax.calculation_callback_id`. Required with mode `external`; not
     * allowed with `automatic`. Value enum: "callback".
     */
    "components_source"?: "callback";
    /** How the subscription's orders calculate tax. Value enum: "automatic", "external". */
    "mode": "automatic" | "external";
};
/** Replaced as a whole: send every field you want to keep. */
export type SubscriptionTaxRequest = {
    /**
     * How the subscription's orders calculate tax while `enabled` is `true`. Omit it, or send
     * `null`, to use `tax.default_calculation` from your settings, where a `provided` default
     * means automatic. Not allowed while `enabled` is `false`. anyOf[1] (Value): {@link
     * CheckoutTaxCalculation}. Replaced as a whole: send every field you want to keep. `automatic`
     * calculates tax through your tax connection. `external` takes the tax your tax calculation
     * callback returns, and requires `components_source: callback`, because Flint creates the
     * subscription's orders and nobody can send their components. anyOf[2] (Value): null.
     */
    "calculation"?: ((CheckoutTaxCalculation) | (null));
    /** Whether the subscription's orders calculate tax. */
    "enabled": boolean;
};
/** Replaced as a whole: send every field you want to keep. */
export type SubscriptionTaxRequestInput = {
    /**
     * How the subscription's orders calculate tax while `enabled` is `true`. Omit it, or send
     * `null`, to use `tax.default_calculation` from your settings, where a `provided` default
     * means automatic. Not allowed while `enabled` is `false`. anyOf[1] (Value): {@link
     * SubscriptionTaxCalculationRequestInput}. Replaced as a whole: send every field you want to
     * keep. `automatic` calculates tax through your tax connection. `external` takes the tax your
     * tax calculation callback returns, and requires `components_source: callback`, because Flint
     * creates the subscription's orders and nobody can send their components. anyOf[2] (Value):
     * null.
     */
    "calculation"?: ((SubscriptionTaxCalculationRequestInput) | (null));
    /** Whether the subscription's orders calculate tax. */
    "enabled": boolean;
};
/**
 * Subscription terms from either a subscription plan or subscription offers, selected by `type`.
 */
export type SubscriptionTermsRequest = ((SubscriptionPlanTermsRequest) | (SubscriptionOfferTermsRequest) | (Record<string, unknown>));
/**
 * Subscription terms from either a subscription plan or subscription offers, selected by `type`.
 */
export type SubscriptionTermsRequestInput = ((SubscriptionPlanTermsRequestInput) | (SubscriptionOfferTermsRequestInput));
export type SubscriptionTrialEndingEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription.trial_ending";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription.trial_ending";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.trial_ending";
});
/**
 * The `subscription.trial_ending` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionTrialEndingInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward,
     * so the cancel response returns it as null. Retrieve the subscription again to get it.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. `null` when the subscription isn't
     * paused or no resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_cancel_at (Required): string or null. When the scheduled cancellation takes
     * effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at
     * while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.scheduled_plan_change (Required): {@link
     * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged renewal.
     * Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH;
     * replace through change-plan. object.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
     * renewal. object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions
     * (Required): Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles. object.scheduled_resume_at (Required): string or null. When a pause with
     * a length (pause_duration_cycles) resumes on its own: that many delivery intervals after
     * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_location (Optional): {@link
     * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. The address where a subscription's service is delivered,
     * with the saved customer address it came from. object.starts_at (Optional): string. When a
     * scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Where the subscription is in its lifecycle. Each value says what it means. Value
     * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * object.subscription_id (Required): string. Stable identifier of the subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Subscription plan ID. Omitted when
     * terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.supported_actions (Required): Array of string. Merchant actions allowed by the
     * subscription's state. A route can still refuse a listed action for a transient reason, such
     * as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Required): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. object.tax.anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. object.tax.anyOf[2]
     * (Value): null. object.terms_type (Required): string. Terms come from the subscription plan
     * in subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required):
         * boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at.
         * Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode. `null` when a
         * cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the
         * cancel response returns it as null. Retrieve the subscription again to get it.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions[] (Value): string. Value enum: "cancel", "pause",
         * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". tax (Required):
         * {@link SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan
         * change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax
         * the subscription's renewal, setup fee and plan change orders use. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[2] (Value): null.
         * terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription.trial_ending". */
    "event_type"?: "subscription.trial_ending";
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
 * The `subscription.trial_ending` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type SubscriptionTrialEndingMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward,
     * so the cancel response returns it as null. Retrieve the subscription again to get it.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. `null` when the subscription isn't
     * paused or no resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_cancel_at (Required): string or null. When the scheduled cancellation takes
     * effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at
     * while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.scheduled_plan_change (Required): {@link
     * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged renewal.
     * Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH;
     * replace through change-plan. object.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
     * renewal. object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions
     * (Required): Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles. object.scheduled_resume_at (Required): string or null. When a pause with
     * a length (pause_duration_cycles) resumes on its own: that many delivery intervals after
     * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_location (Optional): {@link
     * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. The address where a subscription's service is delivered,
     * with the saved customer address it came from. object.starts_at (Optional): string. When a
     * scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Where the subscription is in its lifecycle. Each value says what it means. Value
     * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * object.subscription_id (Required): string. Stable identifier of the subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Subscription plan ID. Omitted when
     * terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.supported_actions (Required): Array of string. Merchant actions allowed by the
     * subscription's state. A route can still refuse a listed action for a transient reason, such
     * as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Required): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. object.tax.anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. object.tax.anyOf[2]
     * (Value): null. object.terms_type (Required): string. Terms come from the subscription plan
     * in subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required):
         * boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at.
         * Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode. `null` when a
         * cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the
         * cancel response returns it as null. Retrieve the subscription again to get it.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions[] (Value): string. Value enum: "cancel", "pause",
         * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". tax (Required):
         * {@link SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan
         * change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax
         * the subscription's renewal, setup fee and plan change orders use. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[2] (Value): null.
         * terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription.trial_ending". */
    "event_type"?: "subscription.trial_ending";
});
/**
 * A delivery problem detected for an upcoming renewal that will hold the subscription's delivery,
 * and who can fix it.
 */
export type SubscriptionUpcomingDeliveryHold = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "detected_at": string;
    /**
     * Who can clear the problem. `method_unavailable` problems are `buyer` when buyers can update
     * delivery and another offered method can serve the subscription. They are `merchant` when
     * your `customer_account.buyer_capabilities.can_update_delivery` is false, or when the method
     * was revoked and no other offered method can serve the subscription. Value enum: "buyer",
     * "merchant".
     */
    "fixable_by": "buyer" | "merchant" | (string & {});
    /**
     * Why the subscription's delivery needs attention. Value enum: "method_unavailable",
     * "destination_not_served", "rate_unavailable".
     */
    "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {});
    /**
     * Time of the next renewal affected by this delivery issue. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "renewal_at": string;
};
export type SubscriptionUpdatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Subscription>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription.updated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            "completed_cycles": number;
            "contract_end_at"?: string;
            "contract_start_at"?: string;
            "created_at": string;
            "current_period_end_at"?: string;
            "current_period_start_at"?: string;
            "customer"?: ((ExpandedCustomerSummary) | (null));
            "customer_id": string;
            "deliveries_per_period": number;
            "delivery"?: SubscriptionDelivery;
            "delivery_hold"?: SubscriptionDeliveryHold;
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            "delivery_interval_count": number | null;
            "early_termination_fee_money"?: MoneyValue;
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            "expires_at": string | null;
            "external_reference_id"?: string;
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            "inventory_wait"?: SubscriptionInventoryWait;
            "is_awaiting_billing_schedule"?: boolean;
            "last_payment_error"?: PaymentErrorSummary;
            "line_items": Array<SubscriptionLineItem>;
            "merchant_id": string;
            "metadata"?: MetadataMap;
            "missed_billing_at"?: string;
            "next_billing_at"?: string;
            "next_delivery_at": string | null;
            "next_retry_at": string | null;
            "open_renewal_order_id"?: string;
            "outstanding_money"?: MoneyValue;
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            "paused_at"?: string;
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            "payment_method_due_at": string | null;
            "payment_method_id": string | null;
            "promotions": Array<SubscriptionPromotion>;
            "prorate_first_period": boolean;
            "quantity": number;
            "quantity_options"?: Array<number>;
            "recurring_subtotal_money": ((MoneyValue) | (null));
            "remaining_cycles": number | null;
            "remaining_prepaid_deliveries": number;
            "resume_requested_at": string | null;
            "scheduled_cancel_at": string | null;
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            "scheduled_promotions": Array<SubscriptionPromotion>;
            "scheduled_resume_at": string | null;
            "service_location"?: SubscriptionServiceLocation;
            "starts_at"?: string;
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            "subscription_id": string;
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            "subscription_plan_id"?: string;
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            "tax": ((SubscriptionTax) | (null));
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            "test_clock_id"?: string;
            "trial_end_at"?: string;
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            "updated_at": string;
            "version": number;
        };
        "previous_attributes"?: Partial<Subscription>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription.updated";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.updated";
});
/**
 * The `subscription.updated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionUpdatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward,
     * so the cancel response returns it as null. Retrieve the subscription again to get it.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. `null` when the subscription isn't
     * paused or no resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_cancel_at (Required): string or null. When the scheduled cancellation takes
     * effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at
     * while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.scheduled_plan_change (Required): {@link
     * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged renewal.
     * Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH;
     * replace through change-plan. object.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
     * renewal. object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions
     * (Required): Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles. object.scheduled_resume_at (Required): string or null. When a pause with
     * a length (pause_duration_cycles) resumes on its own: that many delivery intervals after
     * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_location (Optional): {@link
     * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. The address where a subscription's service is delivered,
     * with the saved customer address it came from. object.starts_at (Optional): string. When a
     * scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Where the subscription is in its lifecycle. Each value says what it means. Value
     * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * object.subscription_id (Required): string. Stable identifier of the subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Subscription plan ID. Omitted when
     * terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.supported_actions (Required): Array of string. Merchant actions allowed by the
     * subscription's state. A route can still refuse a listed action for a transient reason, such
     * as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Required): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. object.tax.anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. object.tax.anyOf[2]
     * (Value): null. object.terms_type (Required): string. Terms come from the subscription plan
     * in subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required):
         * boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at.
         * Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode. `null` when a
         * cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the
         * cancel response returns it as null. Retrieve the subscription again to get it.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions[] (Value): string. Value enum: "cancel", "pause",
         * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". tax (Required):
         * {@link SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan
         * change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax
         * the subscription's renewal, setup fee and plan change orders use. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[2] (Value): null.
         * terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Subscription>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription.updated". */
    "event_type"?: "subscription.updated";
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
 * The `subscription.updated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionUpdatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.billing_anchor_day (Optional): integer. UTC day of the month used
     * for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32.
     * minimum: 1. maximum: 31. object.billing_interval (Required): string. How often the
     * subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills
     * quarterly. A change applies from the next renewal that has not been paid; next_billing_at
     * does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * object.billing_interval_count (Required): integer. Number of billing_interval units between
     * charges. Changes with billing_interval. Format: int32. object.billing_interval_options
     * (Optional): Array of {@link SubscriptionIntervalOption}. Billing interval and count pairs
     * the subscription can switch to. For a subscription on a plan, they follow the plan's current
     * billing_interval_options. A subscription that came from an offer keeps the pairs the offer
     * had at signup. Prices of lines that ship are per delivery. Each option charges for all
     * deliveries in its period. Changing the interval does not change the per-delivery price.
     * maxItems: 12. uniqueItems: true. object.billing_interval_options[] (Value): {@link
     * SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer,
     * or subscription lets buyers choose. Prices of lines that ship are per delivery, and each
     * option charges for all deliveries in its period. Without a delivery cadence there is one
     * delivery per period, so every option bills the same line prices once per period. With a
     * delivery cadence, a longer period bills more deliveries of the lines that ship; other lines
     * bill once per period. For a different price per interval with no delivery cadence, create
     * separate plans. object.billing_schedule_owner (Required): string. Who supplies billing
     * dates: flint advances the schedule after each paid renewal; external uses dates you supply.
     * Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum:
     * "flint", "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancel_at_period_end
     * (Required): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false. object.canceled_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.cancellation_details
     * (Optional): {@link SubscriptionCancellationDetails}. Who asked to cancel, when, and why.
     * Present once a cancellation is requested, whether it takes effect at the end of the billing
     * period or right away. Omitted when no one asked, and removed when a scheduled cancellation
     * is undone. See cancellation_reason for voluntary and payment-related cancellations. The
     * cancellation request behind a scheduled or completed cancellation.
     * object.cancellation_reason (Optional): string. Why the subscription is canceled or scheduled
     * to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the
     * signup order, end_after_reached when the automatic ending agreement is reached,
     * cancellation_details.requested_by when recorded, payment_failed for other canceled
     * subscriptions without a requester, and other for a scheduled cancellation without a
     * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
     * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * object.completed_cycles (Required): integer. Billing cycles charged so far, including cycles
     * imported with `billing_start.completed_cycles`. The next renewal order's
     * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * object.contract_end_at (Optional): string. When the recorded contract term ends. Does not
     * move when the subscription pauses or changes plan. Flint does not stop the buyer from
     * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.contract_start_at (Optional): string. When the recorded contract term started. Does
     * not move when the subscription pauses or changes plan. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.current_period_end_at (Optional): string.
     * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.current_period_start_at (Optional): string. RFC3339 timestamp. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.customer (Optional): {@link ExpandedCustomerSummary}
     * or null. Present only when `expand` includes `customer`; `null` when expanded and there is
     * no related customer. object.customer.anyOf[1] (Value): {@link ExpandedCustomerSummary}. A
     * customer's summary fields, returned in place of a customer ID when the customer is expanded.
     * object.customer.anyOf[2] (Value): null. object.customer_id (Required): string. The customer
     * this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
     * object.deliveries_per_period (Required): integer. Deliveries paid for by one billing period,
     * from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are
     * per delivery. Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
     * SubscriptionDelivery}. Saved delivery preference with the current delivery method display.
     * Write responses use the same display as GET: fixed shipping reflects the current method
     * configuration, and quoted shipping shows the last paid shipping amount when available. A
     * subscription's saved delivery preference: method, destination, recipient, shipping cost, and
     * who last changed it. object.delivery_hold (Optional): {@link SubscriptionDeliveryHold}.
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it. object.delivery_interval (Required): string
     * or null. Delivery cadence frozen from the plan. Null when no separate delivery cadence is
     * set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly",
     * "yearly", null. object.delivery_interval_count (Required): integer or null. Number of
     * delivery intervals between deliveries. Null when no separate delivery cadence is set.
     * Format: int32. minimum: 1. object.early_termination_fee_money (Optional): {@link
     * MoneyValue}. The fee in the recorded contract terms. Present whenever those terms include a
     * fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later
     * plan changes do not change this fee. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code. object.end_after (Required): {@link SubscriptionEndAfter} or
     * null. Recorded automatic end condition. Null when no automatic end is set. Cycles count
     * charged billing periods, including imported completed_cycles. Pauses and skips do not use
     * cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
     * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
     * without consuming its entitlement. Ending never refunds. object.end_after.anyOf[1] (Value):
     * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
     * charged billing cycles or a saved local calendar date. object.end_after.anyOf[2] (Value):
     * null. object.expires_at (Required): string or null. Projected end under the current schedule
     * and committed plan changes, including an earlier scheduled cancellation. A date limit
     * preserves already-paid entitlement without requiring a future charge schedule. A reached
     * cycle limit uses the last paid period end, or current_period_end_at when no paid history
     * exists; that fallback includes any skip or pause extension. A cycle limit with cycles left
     * needs a future charge schedule unless a known scheduled cancellation determines the end.
     * Paid deliveries extend the end to the last paid delivery when it is later. An indefinite
     * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
     * determined or the subscription is canceled. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.external_reference_id (Optional): string. Caller-owned
     * identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842". object.gift_recipient (Required): {@link SubscriptionGiftRecipient} or
     * null. Who receives the gift, when this is a gift subscription. customer_id stays the
     * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
     * erased. Null when the subscription isn't a gift. object.gift_recipient.anyOf[1] (Value):
     * {@link SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
     * purchaser, who pays, gets receipts and reminders, and manages the subscription.
     * delivery.recipient stays the ship-to address. object.gift_recipient.anyOf[2] (Value): null.
     * object.inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for
     * stock. Buyers receive only started_at. Shows that a subscription renewal is waiting for
     * inventory, with the order and invoice involved and when the wait started.
     * object.is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
     * subscription on an external billing schedule has no next billing date.
     * object.last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
     * failure, present only while status is past_due and the latest payment failed. Buyer
     * responses omit merchant remediation and sensitive decline signals. A summary of why a
     * payment attempt failed, with a normalized error code, a message, the failure time, and
     * remediation. object.line_items (Required): Array of {@link SubscriptionLineItem}. What each
     * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that
     * variant's current catalog price, which then stays until the line changes again.
     * object.line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
     * recurring purchase. object.merchant_id (Required): string. ID of the merchant this resource
     * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". object.metadata (Optional): {@link
     * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value, and
     * size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are
     * reserved for Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     * object.missed_billing_at (Optional): string. The billing date whose payment failed, as an
     * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_billing_at (Optional): string. When Flint next starts a
     * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active
     * subscription has a billing date and isn't set to cancel at the end of its period. Absent
     * when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a
     * past_due one reports the failed billing date in missed_billing_at and retries at
     * next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at
     * starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting
     * a date reports is_awaiting_billing_schedule. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.next_delivery_at (Required): string or null. When the next
     * prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an
     * indefinite pause, no delivery is scheduled, or the subscription is canceled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.next_retry_at (Required): string or null.
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.open_renewal_order_id (Optional): string.
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.outstanding_money (Optional): {@link MoneyValue}.
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * object.pause_reason (Optional): string. Why the subscription is paused: merchant for a pause
     * made with your API key or dashboard, buyer for the buyer's own pause,
     * delivery_action_required for a pause during or after a delivery hold, and payment_failed
     * when renewal payment retries ran out and your dunning settings pause the subscription.
     * Omitted when the subscription is not paused. Value enum: "buyer",
     * "delivery_action_required", "merchant", "payment_failed". object.paused_at (Optional):
     * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only
     * when `expand` includes `payment_method`; `null` when expanded and there is no related
     * payment method. object.payment_method.anyOf[1] (Value): {@link
     * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type, status,
     * and card details, returned when the payment method is expanded.
     * object.payment_method.anyOf[2] (Value): null. object.payment_method_due_at (Required):
     * string or null. First charge boundary while no card is bound: the later of trial_end_at and
     * next_billing_at during a trial, or the next billing date for an imported period, even when
     * that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a
     * card at its boundary cancels without an order or payment attempt. At that boundary, an
     * imported subscription with a positive charge that still has no card enters its normal
     * dunning schedule without a payment attempt. For an imported subscription, a zero charge
     * completes the renewal without a card and the deadline advances to the following boundary.
     * Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel
     * at period end), an active or trialing subscription is in its final end_after cycle, or an
     * external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.payment_method_id (Required): string or null. Saved payment method used for renewal
     * charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing
     * the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * object.promotions (Required): Array of {@link SubscriptionPromotion}. Recurring promotions
     * applying to the next charged cycle. Scheduled attachments are listed in
     * scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are
     * excluded. object.promotions[] (Value): {@link SubscriptionPromotion}. A recurring promotion
     * applied to a subscription, including its recurrence and remaining discounted cycles.
     * object.prorate_first_period (Required): boolean. Whether this subscription was created to
     * prorate its first anchored paid period. Set at creation and never changes; starting on the
     * anchor day still bills a normal full period. object.quantity (Required): integer. How many
     * of each line the subscription bills each period, as a whole number; fractional quantities
     * are not supported. A change applies from the next renewal that has not been paid. Format:
     * int32. object.quantity_options (Optional): Array of integer. Quantities this subscription
     * can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of
     * these values, and the request is refused otherwise. A buyer can change quantity only when
     * more than one is listed. For a subscription on a plan, the list follows the plan's current
     * quantity_options. A subscription that came from an offer keeps the choices the offer had at
     * signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
     * object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
     * `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward,
     * so the cancel response returns it as null. Retrieve the subscription again to get it.
     * object.recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code.
     * object.recurring_subtotal_money.anyOf[2] (Value): null. object.remaining_cycles (Required):
     * integer or null. Charges left for a cycle limit, bounded by an earlier scheduled
     * cancellation. Null when there is no cycle limit or the subscription is canceled. Format:
     * uint64. minimum: 0. object.remaining_prepaid_deliveries (Required): integer. Paid deliveries
     * whose delivery order Flint hasn't created yet. A paid period starts with
     * deliveries_per_period minus one. When delivery_hold is present and this count is positive,
     * fixing delivery releases an already-paid delivery with shipping waived and no new charge. A
     * next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses
     * consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum:
     * 23. object.resume_requested_at (Required): string or null. When Flint accepted a pending
     * resume request. Set only while paused with a resume Flint has not applied yet. Clears when
     * Flint resumes the subscription or refuses the request. `null` when the subscription isn't
     * paused or no resume request is pending. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_cancel_at (Required): string or null. When the scheduled cancellation takes
     * effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at
     * while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * Example: "2026-08-02T16:00:00Z". object.scheduled_plan_change (Required): {@link
     * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged renewal.
     * Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH;
     * replace through change-plan. object.scheduled_plan_change.anyOf[1] (Value): {@link
     * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
     * renewal. object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions
     * (Required): Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is
     * after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
     * are scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles. object.scheduled_resume_at (Required): string or null. When a pause with
     * a length (pause_duration_cycles) resumes on its own: that many delivery intervals after
     * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
     * subscription is not paused or the pause has no length, such as a pause until you resume it
     * or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.service_location (Optional): {@link
     * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act for
     * the customer the buyer verified. The address where a subscription's service is delivered,
     * with the saved customer address it came from. object.starts_at (Optional): string. When a
     * scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Where the subscription is in its lifecycle. Each value says what it means. Value
     * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * object.subscription_id (Required): string. Stable identifier of the subscription. Example:
     * "sub_01KEZF7C00BVRE8YDBXQB74BBM". object.subscription_plan (Optional): {@link
     * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
     * `subscription_plan`; `null` when expanded and there is no related subscription plan.
     * object.subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. object.subscription_plan.anyOf[2] (Value): null.
     * object.subscription_plan_id (Optional): string. Subscription plan ID. Omitted when
     * terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * object.supported_actions (Required): Array of string. Merchant actions allowed by the
     * subscription's state. A route can still refuse a listed action for a transient reason, such
     * as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume",
     * "skip_cycle", "renew", "change_plan", "change_quantity". object.supported_actions[] (Value):
     * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
     * "change_quantity". object.tax (Required): {@link SubscriptionTax} or null. The tax the
     * subscription's renewal, setup fee and plan change orders use. `null` when they follow
     * `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to
     * merchant credentials; omitted for buyer credentials. object.tax.anyOf[1] (Value): {@link
     * SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change orders use.
     * Returned only to merchant credentials; omitted for buyer credentials. object.tax.anyOf[2]
     * (Value): null. object.terms_type (Required): string. Terms come from the subscription plan
     * in subscription_plan_id, or from subscription offers identified on each offer line by
     * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * object.test_clock_id (Optional): string. ID of the test clock the subscription's customer
     * was created on. The subscription bills at the clock's time. Present only when the customer
     * is on a test clock. Included only in merchant responses and omitted from buyer responses.
     * Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". object.trial_end_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.upcoming_delivery_hold
     * (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next
     * renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected
     * for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.version (Required): integer. Goes up with every change to the
     * subscription, including renewals and other changes Flint makes. Send it as
     * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * previous_attributes (Optional): object. Previous values of changed top-level fields in
     * data.object, at this delivery's API version. Nested changes include the whole previous
     * top-level value. A value is null when the field was absent before the change. Omitted when
     * Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * billing_anchor_day (Optional): integer. UTC day of the month used for monthly and yearly
         * billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
         * billing_interval (Required): string. How often the subscription bills now. Read with
         * billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from
         * the next renewal that has not been paid; next_billing_at does not move. Value enum:
         * "daily", "weekly", "monthly", "yearly". billing_interval_count (Required): integer.
         * Number of billing_interval units between charges. Changes with billing_interval. Format:
         * int32. billing_interval_options (Optional): Array of {@link SubscriptionIntervalOption}.
         * Billing interval and count pairs the subscription can switch to. For a subscription on a
         * plan, they follow the plan's current billing_interval_options. A subscription that came
         * from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per
         * delivery. Each option charges for all deliveries in its period. Changing the interval
         * does not change the per-delivery price. maxItems: 12. uniqueItems: true.
         * billing_interval_options[] (Value): {@link SubscriptionIntervalOption}. A billing
         * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
         * choose. Prices of lines that ship are per delivery, and each option charges for all
         * deliveries in its period. Without a delivery cadence there is one delivery per period,
         * so every option bills the same line prices once per period. With a delivery cadence, a
         * longer period bills more deliveries of the lines that ship; other lines bill once per
         * period. For a different price per interval with no delivery cadence, create separate
         * plans. billing_schedule_owner (Required): string. Who supplies billing dates: flint
         * advances the schedule after each paid renewal; external uses dates you supply. Change it
         * with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". cancel_at_period_end (Required):
         * boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at.
         * Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
         * cancel_at_period_end false. canceled_at (Optional): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * signup_order_refunded when an automatic inventory refund fully refunds the signup order,
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached", "signup_order_refunded".
         * completed_cycles (Required): integer. Billing cycles charged so far, including cycles
         * imported with `billing_start.completed_cycles`. The next renewal order's
         * `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
         * contract_end_at (Optional): string. When the recorded contract term ends. Does not move
         * when the subscription pauses or changes plan. Flint does not stop the buyer from
         * canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z". contract_start_at
         * (Optional): string. When the recorded contract term started. Does not move when the
         * subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * created_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_end_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_start_at (Optional):
         * string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". customer
         * (Optional): {@link ExpandedCustomerSummary} or null. Present only when `expand` includes
         * `customer`; `null` when expanded and there is no related customer. customer.anyOf[1]
         * (Value): {@link ExpandedCustomerSummary}. A customer's summary fields, returned in place
         * of a customer ID when the customer is expanded. customer.anyOf[2] (Value): null.
         * customer_id (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
         * delivery (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the
         * current delivery method display. Write responses use the same display as GET: fixed
         * shipping reflects the current method configuration, and quoted shipping shows the last
         * paid shipping amount when available. A subscription's saved delivery preference: method,
         * destination, recipient, shipping cost, and who last changed it. delivery_hold
         * (Optional): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
         * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
         * deliveries because its delivery method or destination no longer works, and who can fix
         * it. delivery_interval (Required): string or null. Delivery cadence frozen from the plan.
         * Null when no separate delivery cadence is set; one delivery is made per billing period.
         * Value enum: "daily", "weekly", "monthly", "yearly", null. delivery_interval_count
         * (Required): integer or null. Number of delivery intervals between deliveries. Null when
         * no separate delivery cadence is set. Format: int32. minimum: 1.
         * early_termination_fee_money (Optional): {@link MoneyValue}. The fee in the recorded
         * contract terms. Present whenever those terms include a fee. It applies only to a
         * cancellation before contract_end_at. Flint never charges it. Later plan changes do not
         * change this fee. Monetary amount represented as integer minor units plus an ISO 4217
         * currency code. end_after (Required): {@link SubscriptionEndAfter} or null. Recorded
         * automatic end condition. Null when no automatic end is set. Cycles count charged billing
         * periods, including imported completed_cycles. Pauses and skips do not use cycles.
         * Already-paid prepaid deliveries continue on their shifted dates, even beyond the end
         * date, and cancellation waits for the last remaining delivery. Skipping defers a delivery
         * without consuming its entitlement. Ending never refunds. end_after.anyOf[1] (Value):
         * {@link SubscriptionEndAfter}. The subscription's automatic end condition, measured by
         * charged billing cycles or a saved local calendar date. end_after.anyOf[2] (Value): null.
         * expires_at (Required): string or null. Projected end under the current schedule and
         * committed plan changes, including an earlier scheduled cancellation. A date limit
         * preserves already-paid entitlement without requiring a future charge schedule. A reached
         * cycle limit uses the last paid period end, or current_period_end_at when no paid history
         * exists; that fallback includes any skip or pause extension. A cycle limit with cycles
         * left needs a future charge schedule unless a known scheduled cancellation determines the
         * end. Paid deliveries extend the end to the last paid delivery when it is later. An
         * indefinite pause with paid deliveries owed makes the end unknown. Null when the end
         * cannot be determined or the subscription is canceled. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". external_reference_id (Optional): string. Caller-owned
         * identifier for this resource in an external system. maxLength: 255. Example:
         * "warehouse-1842". gift_recipient (Required): {@link SubscriptionGiftRecipient} or null.
         * Who receives the gift, when this is a gift subscription. customer_id stays the
         * purchaser. Flint clears it when the subscription ends and when the purchaser's data is
         * erased. Null when the subscription isn't a gift. gift_recipient.anyOf[1] (Value): {@link
         * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
         * purchaser, who pays, gets receipts and reminders, and manages the subscription.
         * delivery.recipient stays the ship-to address. gift_recipient.anyOf[2] (Value): null.
         * inventory_wait (Optional): {@link SubscriptionInventoryWait}. Renewal waiting for stock.
         * Buyers receive only started_at. Shows that a subscription renewal is waiting for
         * inventory, with the order and invoice involved and when the wait started.
         * is_awaiting_billing_schedule (Optional): boolean. True while an active or trialing
         * subscription on an external billing schedule has no next billing date.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. Latest renewal payment
         * failure, present only while status is past_due and the latest payment failed. Buyer
         * responses omit merchant remediation and sensitive decline signals. A summary of why a
         * payment attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. line_items (Required): Array of {@link SubscriptionLineItem}. What each
         * renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes
         * that variant's current catalog price, which then stays until the line changes again.
         * line_items[] (Value): {@link SubscriptionLineItem}. An item included in a customer's
         * recurring purchase. merchant_id (Required): string. ID of the merchant this resource
         * belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". metadata (Optional): {@link
         * MetadataMap}. Stored caller-owned key-value data. See `MetadataInput` for key, value,
         * and size rules. Caller-owned key-value data stored on a resource. Keys starting with
         * flint_ are reserved for Flint and are not returned. Writes follow the limits on
         * MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy
         * them. missed_billing_at (Optional): string. The billing date whose payment failed, as an
         * RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". next_billing_at (Optional): string. When Flint next starts a
         * scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or
         * active subscription has a billing date and isn't set to cancel at the end of its period.
         * Absent when no renewal is scheduled: a paused subscription resumes at
         * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at
         * and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled
         * start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an
         * external schedule awaiting a date reports is_awaiting_billing_schedule. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". next_delivery_at (Required): string or null.
         * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
         * subscription has an indefinite pause, no delivery is scheduled, or the subscription is
         * canceled. Format: date-time. Example: "2026-08-02T16:00:00Z". next_retry_at (Required):
         * string or null. Recorded automatic payment retry time. Null when no retry time is
         * available. Format: date-time. Example: "2026-08-02T16:00:00Z". open_renewal_order_id
         * (Optional): string. ID of the paid renewal order whose shipment has not been dispatched.
         * It keeps its committed delivery destination after preference changes and cancellation.
         * Absent when no such renewal order exists. Only renewal orders count; the signup order is
         * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A". outstanding_money (Optional):
         * {@link MoneyValue}. Unpaid balance of the failed renewal order, including tax, shipping
         * and discounts, after payments and credits. Present only while status is past_due and a
         * positive balance remains. Monetary amount represented as integer minor units plus an ISO
         * 4217 currency code. pause_reason (Optional): string. Why the subscription is paused:
         * merchant for a pause made with your API key or dashboard, buyer for the buyer's own
         * pause, delivery_action_required for a pause during or after a delivery hold, and
         * payment_failed when renewal payment retries ran out and your dunning settings pause the
         * subscription. Omitted when the subscription is not paused. Value enum: "buyer",
         * "delivery_action_required", "merchant", "payment_failed". paused_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method
         * (Optional): {@link ExpandedPaymentMethodSummary} or null. Present only when `expand`
         * includes `payment_method`; `null` when expanded and there is no related payment method.
         * payment_method.anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
         * method's summary fields, including type, status, and card details, returned when the
         * payment method is expanded. payment_method.anyOf[2] (Value): null. payment_method_due_at
         * (Required): string or null. First charge boundary while no card is bound: the later of
         * trial_end_at and next_billing_at during a trial, or the next billing date for an
         * imported period, even when that cycle's charge is zero. Recomputed when the schedule
         * changes. A trial still without a card at its boundary cancels without an order or
         * payment attempt. At that boundary, an imported subscription with a positive charge that
         * still has no card enters its normal dunning schedule without a payment attempt. For an
         * imported subscription, a zero charge completes the renewal without a card and the
         * deadline advances to the following boundary. Null when a card is bound, collection is
         * not scheduled (paused, canceled, or set to cancel at period end), an active or trialing
         * subscription is in its final end_after cycle, or an external schedule has no known
         * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z". payment_method_id
         * (Required): string or null. Saved payment method used for renewal charges. Null when no
         * card is bound. Bind a card to this subscription with PATCH; changing the customer's
         * default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ". promotions
         * (Required): Array of {@link SubscriptionPromotion}. Recurring promotions applying to the
         * next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when
         * none apply; signup-only and exhausted promotions are excluded. promotions[] (Value):
         * {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. prorate_first_period
         * (Required): boolean. Whether this subscription was created to prorate its first anchored
         * paid period. Set at creation and never changes; starting on the anchor day still bills a
         * normal full period. quantity (Required): integer. How many of each line the subscription
         * bills each period, as a whole number; fractional quantities are not supported. A change
         * applies from the next renewal that has not been paid. Format: int32. quantity_options
         * (Optional): Array of integer. Quantities this subscription can be changed to, from 1 to
         * 100, in ascending order. A change to quantity must send one of these values, and the
         * request is refused otherwise. A buyer can change quantity only when more than one is
         * listed. For a subscription on a plan, the list follows the plan's current
         * quantity_options. A subscription that came from an offer keeps the choices the offer had
         * at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true.
         * quantity_options[] (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money
         * (Required): {@link MoneyValue} or null. What one billing period's items cost before
         * discounts, shipping, and tax: each line's price with modifiers, times quantity. It
         * changes when items, quantity, or the plan change; editing the plan doesn't change it.
         * For the next charge, use a subscription preview in next_renewal mode. `null` when a
         * cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the
         * cancel response returns it as null. Retrieve the subscription again to get it.
         * recurring_subtotal_money.anyOf[1] (Value): {@link MoneyValue}. Monetary amount
         * represented as integer minor units plus an ISO 4217 currency code.
         * recurring_subtotal_money.anyOf[2] (Value): null. remaining_cycles (Required): integer or
         * null. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
         * when there is no cycle limit or the subscription is canceled. Format: uint64. minimum:
         * 0. remaining_prepaid_deliveries (Required): integer. Paid deliveries whose delivery
         * order Flint hasn't created yet. A paid period starts with deliveries_per_period minus
         * one. When delivery_hold is present and this count is positive, fixing delivery releases
         * an already-paid delivery with shipping waived and no new charge. A next_renewal preview
         * still estimates the next paid billing cycle. Skips, holds, and pauses consume none.
         * Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
         * resume_requested_at (Required): string or null. When Flint accepted a pending resume
         * request. Set only while paused with a resume Flint has not applied yet. Clears when
         * Flint resumes the subscription or refuses the request. `null` when the subscription
         * isn't paused or no resume request is pending. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". scheduled_cancel_at (Required): string or null. When the
         * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
         * while active, or next_retry_at while past_due. Paid deliveries extend it to the last
         * paid delivery when it is later. Null when cancel_at_period_end is false or no
         * cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
         * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
         * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
         * scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
         * target terms that apply at the next charged renewal. scheduled_plan_change.anyOf[2]
         * (Value): null. scheduled_promotions (Required): Array of {@link SubscriptionPromotion}.
         * Attached promotions whose first_cycle is after the next charged cycle, completed_cycles
         * + 1. Always present; empty when no promotions are scheduled. scheduled_promotions[]
         * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a subscription,
         * including its recurrence and remaining discounted cycles. scheduled_resume_at
         * (Required): string or null. When a pause with a length (pause_duration_cycles) resumes
         * on its own: that many delivery intervals after paused_at on a prepaid subscription, or
         * billing intervals otherwise. Null when the subscription is not paused or the pause has
         * no length, such as a pause until you resume it or the pause Flint starts when a delivery
         * hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z". service_location
         * (Optional): {@link SubscriptionServiceLocation}. Omitted for a checkout session
         * credential that doesn't act for the customer the buyer verified. The address where a
         * subscription's service is delivered, with the saved customer address it came from.
         * starts_at (Optional): string. When a scheduled start's first billing period begins.
         * Present only until that first payment succeeds. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Where the subscription is in its
         * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
         * "past_due", "canceled", "incomplete", "scheduled". subscription_id (Required): string.
         * Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
         * subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null. Present
         * only when `expand` includes `subscription_plan`; `null` when expanded and there is no
         * related subscription plan. subscription_plan.anyOf[1] (Value): {@link
         * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
         * billing interval, currency, and status, returned when the plan is expanded.
         * subscription_plan.anyOf[2] (Value): null. subscription_plan_id (Optional): string.
         * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
         * "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions (Required): Array of string.
         * Merchant actions allowed by the subscription's state. A route can still refuse a listed
         * action for a transient reason, such as a renewal already in progress, with its own
         * error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan",
         * "change_quantity". supported_actions[] (Value): string. Value enum: "cancel", "pause",
         * "resume", "skip_cycle", "renew", "change_plan", "change_quantity". tax (Required):
         * {@link SubscriptionTax} or null. The tax the subscription's renewal, setup fee and plan
         * change orders use. `null` when they follow `tax.default_enabled` and
         * `tax.default_calculation` from your settings. Returned only to merchant credentials;
         * omitted for buyer credentials. tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax
         * the subscription's renewal, setup fee and plan change orders use. Returned only to
         * merchant credentials; omitted for buyer credentials. tax.anyOf[2] (Value): null.
         * terms_type (Required): string. Terms come from the subscription plan in
         * subscription_plan_id, or from subscription offers identified on each offer line by
         * subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
         * test_clock_id (Optional): string. ID of the test clock the subscription's customer was
         * created on. The subscription bills at the clock's time. Present only when the customer
         * is on a test clock. Included only in merchant responses and omitted from buyer
         * responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ". trial_end_at (Optional): string.
         * RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
         * upcoming_delivery_hold (Optional): {@link SubscriptionUpcomingDeliveryHold}. Delivery
         * issue forecast for the next renewal at renewal_at. Mutually exclusive with
         * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
         * subscription's delivery, and who can fix it. updated_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". version (Required):
         * integer. Goes up with every change to the subscription, including renewals and other
         * changes Flint makes. Send it as `expected_version` to apply an update only if nothing
         * changed. Format: uint64. minimum: 0.
         */
        "object": {
            /**
             * UTC day of the month used for monthly and yearly billing. Applies only to
             * Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
             */
            "billing_anchor_day"?: number;
            /**
             * How often the subscription bills now. Read with billing_interval_count: monthly with
             * a count of 3 bills quarterly. A change applies from the next renewal that has not
             * been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly",
             * "yearly".
             */
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            /**
             * Number of billing_interval units between charges. Changes with billing_interval.
             * Format: int32.
             */
            "billing_interval_count": number;
            /**
             * Billing interval and count pairs the subscription can switch to. For a subscription
             * on a plan, they follow the plan's current billing_interval_options. A subscription
             * that came from an offer keeps the pairs the offer had at signup. Prices of lines
             * that ship are per delivery. Each option charges for all deliveries in its period.
             * Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
             * interval, such as every 2 months, that a plan, offer, or subscription lets buyers
             * choose. Prices of lines that ship are per delivery, and each option charges for all
             * deliveries in its period. Without a delivery cadence there is one delivery per
             * period, so every option bills the same line prices once per period. With a delivery
             * cadence, a longer period bills more deliveries of the lines that ship; other lines
             * bill once per period. For a different price per interval with no delivery cadence,
             * create separate plans.
             */
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            /**
             * Who supplies billing dates: flint advances the schedule after each paid renewal;
             * external uses dates you supply. Change it with billing_schedule on PATCH
             * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
             */
            "billing_schedule_owner": "flint" | "external" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "billing_schedule_waiting_started_at"?: string;
            /**
             * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule
             * with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and
             * cancel_at_period_end false.
             */
            "cancel_at_period_end": boolean;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "canceled_at"?: string;
            /**
             * Who asked to cancel, when, and why. Present once a cancellation is requested,
             * whether it takes effect at the end of the billing period or right away. Omitted when
             * no one asked, and removed when a scheduled cancellation is undone. See
             * cancellation_reason for voluntary and payment-related cancellations. The
             * cancellation request behind a scheduled or completed cancellation.
             */
            "cancellation_details"?: SubscriptionCancellationDetails;
            /**
             * Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded
             * when an automatic inventory refund fully refunds the signup order, end_after_reached
             * when the automatic ending agreement is reached, cancellation_details.requested_by
             * when recorded, payment_failed for other canceled subscriptions without a requester,
             * and other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached", "signup_order_refunded".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
                | "signup_order_refunded"
                | (string & {});
            /**
             * Billing cycles charged so far, including cycles imported with
             * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is
             * this number plus one. Format: uint64. minimum: 0.
             */
            "completed_cycles": number;
            /**
             * When the recorded contract term ends. Does not move when the subscription pauses or
             * changes plan. Flint does not stop the buyer from canceling earlier. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_end_at"?: string;
            /**
             * When the recorded contract term started. Does not move when the subscription pauses
             * or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "contract_start_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_end_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "current_period_start_at"?: string;
            /**
             * Present only when `expand` includes `customer`; `null` when expanded and there is no
             * related customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's
             * summary fields, returned in place of a customer ID when the customer is expanded.
             * anyOf[2] (Value): null.
             */
            "customer"?: ((ExpandedCustomerSummary) | (null));
            /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". */
            "customer_id": string;
            /**
             * Deliveries paid for by one billing period, from 1 to 24. One when no separate
             * delivery cadence is set. Prices of lines that ship are per delivery. Format: int32.
             * minimum: 1. maximum: 24.
             */
            "deliveries_per_period": number;
            /**
             * Saved delivery preference with the current delivery method display. Write responses
             * use the same display as GET: fixed shipping reflects the current method
             * configuration, and quoted shipping shows the last paid shipping amount when
             * available. A subscription's saved delivery preference: method, destination,
             * recipient, shipping cost, and who last changed it.
             */
            "delivery"?: SubscriptionDelivery;
            /**
             * Current delivery issue that blocks collection. Mutually exclusive with
             * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery
             * method or destination no longer works, and who can fix it.
             */
            "delivery_hold"?: SubscriptionDeliveryHold;
            /**
             * Delivery cadence frozen from the plan. Null when no separate delivery cadence is
             * set; one delivery is made per billing period. Value enum: "daily", "weekly",
             * "monthly", "yearly", null.
             */
            "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
            /**
             * Number of delivery intervals between deliveries. Null when no separate delivery
             * cadence is set. Format: int32. minimum: 1.
             */
            "delivery_interval_count": number | null;
            /**
             * The fee in the recorded contract terms. Present whenever those terms include a fee.
             * It applies only to a cancellation before contract_end_at. Flint never charges it.
             * Later plan changes do not change this fee. Monetary amount represented as integer
             * minor units plus an ISO 4217 currency code.
             */
            "early_termination_fee_money"?: MoneyValue;
            /**
             * Recorded automatic end condition. Null when no automatic end is set. Cycles count
             * charged billing periods, including imported completed_cycles. Pauses and skips do
             * not use cycles. Already-paid prepaid deliveries continue on their shifted dates,
             * even beyond the end date, and cancellation waits for the last remaining delivery.
             * Skipping defers a delivery without consuming its entitlement. Ending never refunds.
             * anyOf[1] (Value): {@link SubscriptionEndAfter}. The subscription's automatic end
             * condition, measured by charged billing cycles or a saved local calendar date.
             * anyOf[2] (Value): null.
             */
            "end_after": ((SubscriptionEndAfter) | (null) | (unknown));
            /**
             * Projected end under the current schedule and committed plan changes, including an
             * earlier scheduled cancellation. A date limit preserves already-paid entitlement
             * without requiring a future charge schedule. A reached cycle limit uses the last paid
             * period end, or current_period_end_at when no paid history exists; that fallback
             * includes any skip or pause extension. A cycle limit with cycles left needs a future
             * charge schedule unless a known scheduled cancellation determines the end. Paid
             * deliveries extend the end to the last paid delivery when it is later. An indefinite
             * pause with paid deliveries owed makes the end unknown. Null when the end cannot be
             * determined or the subscription is canceled. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "expires_at": string | null;
            /**
             * Caller-owned identifier for this resource in an external system. maxLength: 255.
             * Example: "warehouse-1842".
             */
            "external_reference_id"?: string;
            /**
             * Who receives the gift, when this is a gift subscription. customer_id stays the
             * purchaser. Flint clears it when the subscription ends and when the purchaser's data
             * is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@link
             * SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the
             * purchaser, who pays, gets receipts and reminders, and manages the subscription.
             * delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
             */
            "gift_recipient": ((SubscriptionGiftRecipient) | (null));
            /**
             * Renewal waiting for stock. Buyers receive only started_at. Shows that a subscription
             * renewal is waiting for inventory, with the order and invoice involved and when the
             * wait started.
             */
            "inventory_wait"?: SubscriptionInventoryWait;
            /**
             * True while an active or trialing subscription on an external billing schedule has no
             * next billing date.
             */
            "is_awaiting_billing_schedule"?: boolean;
            /**
             * Latest renewal payment failure, present only while status is past_due and the latest
             * payment failed. Buyer responses omit merchant remediation and sensitive decline
             * signals. A summary of why a payment attempt failed, with a normalized error code, a
             * message, the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /**
             * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a
             * line takes that variant's current catalog price, which then stays until the line
             * changes again. [] (Value): {@link SubscriptionLineItem}. An item included in a
             * customer's recurring purchase.
             */
            "line_items": Array<SubscriptionLineItem>;
            /**
             * ID of the merchant this resource belongs to. Example:
             * "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
             */
            "merchant_id": string;
            /**
             * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size
             * rules. Caller-owned key-value data stored on a resource. Keys starting with flint_
             * are reserved for Flint and are not returned. Writes follow the limits on
             * MetadataInput and MetadataPatchInput; maps written before those limits may not
             * satisfy them.
             */
            "metadata"?: MetadataMap;
            /**
             * The billing date whose payment failed, as an RFC3339 timestamp. Present only while
             * status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "missed_billing_at"?: string;
            /**
             * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present
             * only while a trialing or active subscription has a billing date and isn't set to
             * cancel at the end of its period. Absent when no renewal is scheduled: a paused
             * subscription resumes at scheduled_resume_at, a past_due one reports the failed
             * billing date in missed_billing_at and retries at next_retry_at, an incomplete one
             * retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel
             * ends at scheduled_cancel_at, and an external schedule awaiting a date reports
             * is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_billing_at"?: string;
            /**
             * When the next prepaid delivery order is due, shifted by a timed pause. Null when the
             * subscription has an indefinite pause, no delivery is scheduled, or the subscription
             * is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_delivery_at": string | null;
            /**
             * Recorded automatic payment retry time. Null when no retry time is available. Format:
             * date-time. Example: "2026-08-02T16:00:00Z".
             */
            "next_retry_at": string | null;
            /**
             * ID of the paid renewal order whose shipment has not been dispatched. It keeps its
             * committed delivery destination after preference changes and cancellation. Absent
             * when no such renewal order exists. Only renewal orders count; the signup order is
             * not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
             */
            "open_renewal_order_id"?: string;
            /**
             * Unpaid balance of the failed renewal order, including tax, shipping and discounts,
             * after payments and credits. Present only while status is past_due and a positive
             * balance remains. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code.
             */
            "outstanding_money"?: MoneyValue;
            /**
             * Why the subscription is paused: merchant for a pause made with your API key or
             * dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
             * during or after a delivery hold, and payment_failed when renewal payment retries ran
             * out and your dunning settings pause the subscription. Omitted when the subscription
             * is not paused. Value enum: "buyer", "delivery_action_required", "merchant",
             * "payment_failed".
             */
            "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "paused_at"?: string;
            /**
             * Present only when `expand` includes `payment_method`; `null` when expanded and there
             * is no related payment method. anyOf[1] (Value): {@link
             * ExpandedPaymentMethodSummary}. A payment method's summary fields, including type,
             * status, and card details, returned when the payment method is expanded. anyOf[2]
             * (Value): null.
             */
            "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
            /**
             * First charge boundary while no card is bound: the later of trial_end_at and
             * next_billing_at during a trial, or the next billing date for an imported period,
             * even when that cycle's charge is zero. Recomputed when the schedule changes. A trial
             * still without a card at its boundary cancels without an order or payment attempt. At
             * that boundary, an imported subscription with a positive charge that still has no
             * card enters its normal dunning schedule without a payment attempt. For an imported
             * subscription, a zero charge completes the renewal without a card and the deadline
             * advances to the following boundary. Null when a card is bound, collection is not
             * scheduled (paused, canceled, or set to cancel at period end), an active or trialing
             * subscription is in its final end_after cycle, or an external schedule has no known
             * boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "payment_method_due_at": string | null;
            /**
             * Saved payment method used for renewal charges. Null when no card is bound. Bind a
             * card to this subscription with PATCH; changing the customer's default alone does not
             * bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
             */
            "payment_method_id": string | null;
            /**
             * Recurring promotions applying to the next charged cycle. Scheduled attachments are
             * listed in scheduled_promotions. Empty when none apply; signup-only and exhausted
             * promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A recurring
             * promotion applied to a subscription, including its recurrence and remaining
             * discounted cycles.
             */
            "promotions": Array<SubscriptionPromotion>;
            /**
             * Whether this subscription was created to prorate its first anchored paid period. Set
             * at creation and never changes; starting on the anchor day still bills a normal full
             * period.
             */
            "prorate_first_period": boolean;
            /**
             * How many of each line the subscription bills each period, as a whole number;
             * fractional quantities are not supported. A change applies from the next renewal that
             * has not been paid. Format: int32.
             */
            "quantity": number;
            /**
             * Quantities this subscription can be changed to, from 1 to 100, in ascending order. A
             * change to quantity must send one of these values, and the request is refused
             * otherwise. A buyer can change quantity only when more than one is listed. For a
             * subscription on a plan, the list follows the plan's current quantity_options. A
             * subscription that came from an offer keeps the choices the offer had at signup. [1]
             * when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value):
             * integer. minimum: 1. maximum: 100.
             */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. `null` when a cancellation succeeds but
             * Flint couldn't load the billing snapshot afterward, so the cancel response returns
             * it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@link
             * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217
             * currency code. anyOf[2] (Value): null.
             */
            "recurring_subtotal_money": ((MoneyValue) | (null));
            /**
             * Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null
             * when there is no cycle limit or the subscription is canceled. Format: uint64.
             * minimum: 0.
             */
            "remaining_cycles": number | null;
            /**
             * Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts
             * with deliveries_per_period minus one. When delivery_hold is present and this count
             * is positive, fixing delivery releases an already-paid delivery with shipping waived
             * and no new charge. A next_renewal preview still estimates the next paid billing
             * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual
             * refunds. Format: int32. minimum: 0. maximum: 23.
             */
            "remaining_prepaid_deliveries": number;
            /**
             * When Flint accepted a pending resume request. Set only while paused with a resume
             * Flint has not applied yet. Clears when Flint resumes the subscription or refuses the
             * request. `null` when the subscription isn't paused or no resume request is pending.
             * Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "resume_requested_at": string | null;
            /**
             * When the scheduled cancellation takes effect: trial_end_at while trialing,
             * current_period_end_at while active, or next_retry_at while past_due. Paid deliveries
             * extend it to the last paid delivery when it is later. Null when cancel_at_period_end
             * is false or no cancellation time is available. Format: date-time. Example:
             * "2026-08-02T16:00:00Z".
             */
            "scheduled_cancel_at": string | null;
            /**
             * Frozen target terms for the next charged renewal. Null when no plan change is
             * scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through
             * change-plan. anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}. Frozen
             * target terms that apply at the next charged renewal. anyOf[2] (Value): null.
             */
            "scheduled_plan_change": ((SubscriptionScheduledPlanChange) | (null));
            /**
             * Attached promotions whose first_cycle is after the next charged cycle,
             * completed_cycles + 1. Always present; empty when no promotions are scheduled. []
             * (Value): {@link SubscriptionPromotion}. A recurring promotion applied to a
             * subscription, including its recurrence and remaining discounted cycles.
             */
            "scheduled_promotions": Array<SubscriptionPromotion>;
            /**
             * When a pause with a length (pause_duration_cycles) resumes on its own: that many
             * delivery intervals after paused_at on a prepaid subscription, or billing intervals
             * otherwise. Null when the subscription is not paused or the pause has no length, such
             * as a pause until you resume it or the pause Flint starts when a delivery hold runs
             * out. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "scheduled_resume_at": string | null;
            /**
             * Omitted for a checkout session credential that doesn't act for the customer the
             * buyer verified. The address where a subscription's service is delivered, with the
             * saved customer address it came from.
             */
            "service_location"?: SubscriptionServiceLocation;
            /**
             * When a scheduled start's first billing period begins. Present only until that first
             * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
             */
            "starts_at"?: string;
            /**
             * Where the subscription is in its lifecycle. Each value says what it means. Value
             * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
             * "scheduled".
             */
            "status": "trialing"
                | "active"
                | "paused"
                | "past_due"
                | "canceled"
                | "incomplete"
                | "scheduled"
                | (string & {});
            /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Present only when `expand` includes `subscription_plan`; `null` when expanded and
             * there is no related subscription plan. anyOf[1] (Value): {@link
             * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including
             * name, billing interval, currency, and status, returned when the plan is expanded.
             * anyOf[2] (Value): null.
             */
            "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
            /**
             * Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
             * "plan_01KEZF7C004CY5ZR33XST2AASV".
             */
            "subscription_plan_id"?: string;
            /**
             * Merchant actions allowed by the subscription's state. A route can still refuse a
             * listed action for a transient reason, such as a renewal already in progress, with
             * its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew",
             * "change_plan", "change_quantity". [] (Value): string. Value enum: "cancel", "pause",
             * "resume", "skip_cycle", "renew", "change_plan", "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "change_plan"
                | "change_quantity"
                | (string & {})>;
            /**
             * The tax the subscription's renewal, setup fee and plan change orders use. `null`
             * when they follow `tax.default_enabled` and `tax.default_calculation` from your
             * settings. Returned only to merchant credentials; omitted for buyer credentials.
             * anyOf[1] (Value): {@link SubscriptionTax}. The tax the subscription's renewal, setup
             * fee and plan change orders use. Returned only to merchant credentials; omitted for
             * buyer credentials. anyOf[2] (Value): null.
             */
            "tax": ((SubscriptionTax) | (null));
            /**
             * Terms come from the subscription plan in subscription_plan_id, or from subscription
             * offers identified on each offer line by subscription_offer_id. Value enum:
             * "subscription_plan", "subscription_offer".
             */
            "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
            /**
             * ID of the test clock the subscription's customer was created on. The subscription
             * bills at the clock's time. Present only when the customer is on a test clock.
             * Included only in merchant responses and omitted from buyer responses. Example:
             * "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
             */
            "test_clock_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "trial_end_at"?: string;
            /**
             * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
             * delivery_hold. A delivery problem detected for an upcoming renewal that will hold
             * the subscription's delivery, and who can fix it.
             */
            "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
            /**
             * Goes up with every change to the subscription, including renewals and other changes
             * Flint makes. Send it as `expected_version` to apply an update only if nothing
             * changed. Format: uint64. minimum: 0.
             */
            "version": number;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<Subscription>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription.updated". */
    "event_type"?: "subscription.updated";
});
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type SubscriptionWindowMetrics = {
    /**
     * Subscriptions selected by canceled_at in the period, across currencies. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Format:
     * int64.
     */
    "canceled_subscriptions_count": number;
    /**
     * Subscription-sourced payment amounts with a succeeded payment activity selected by activity
     * created_at in the period, counted once per payment. Includes recurring charges and setup
     * fees, restricted to currency. The half-open period [period_start_at, period_end_at) includes
     * its start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "collected_money": MoneyValue;
    /**
     * Subscriptions selected by subscription created_at in the period whose current status is
     * trialing, active, paused, or past_due. Excludes incomplete and canceled subscriptions; past
     * counts can change with current status. Spans currencies. The half-open period
     * [period_start_at, period_end_at) includes its start and excludes its end. Amounts and
     * payments_count use currency; customer and subscription counts span currencies. Format:
     * int64.
     */
    "new_subscriptions_count": number;
};
export type SubscriptionsApplyPromotionParams = (InputValue<ApplySubscriptionPromotionRequestInput>)
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

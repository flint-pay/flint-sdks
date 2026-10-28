import type { BuyerShipment, BuyerOrderLineItemModifier, BuyerOrderPaymentAttempt } from './types-2.js';
import type { ResponseMeta } from './types-42.js';
import type { BuyerAction, BuyerExpandedSubscriptionPlanSummary, BuyerOrder } from './types-1.js';
import type { MoneyValue, MoneyValueInput } from './types-33.js';
import type {
    SubscriptionDelivery,
    SubscriptionDeliveryHold,
    SubscriptionIntervalOption,
    SubscriptionDeliveryOption
} from './types-48.js';
import type {
    SubscriptionPromotion,
    SubscriptionUpcomingDeliveryHold,
    SubscriptionPlanSwapVariant,
    SubscriptionRenewalPreview
} from './types-49.js';
import type { Image, GiftCardTransaction } from './types-21.js';
import type { SelectedProductOption, SubscriptionAddressVerification } from './types-47.js';
import type { PaymentErrorSummary } from './types-37.js';
import type { OrderLineItemTax } from './types-34.js';
import type { Address } from './types-0.js';
import type { TipPaymentIntentAllocation, TipValueSettlementAllocation, UpdateCategoryRequestInput } from './types-50.js';
import type { DeliveryWindowRequest, DeliveryWindowRequestInput } from './types-16.js';
import type { ReadinessAction, ReadinessRequirements } from './types-41.js';
import type { GiftCard } from './types-20.js';
import type { InputValue } from '../runtime.js';
import type { CreateCategoryRequestInput } from './types-5.js';
import type { MetadataMap } from './types-32.js';
/** Shape $ (Value): {@link BuyerShipmentResponse}. A response containing `BuyerShipment` data. */
export type BuyerShipmentResponse = {
    /** Shape $ (Value): {@link BuyerShipment}. A shipment carrying fulfilled order items. */
    "data": BuyerShipment;
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
 * Shape $ (Value): {@link BuyerSkipCapability}. Whether buyers may skip renewals. Send at least
 * one field. minProperties: 1.
 */
export type BuyerSkipCapability = {
    /**
     * Shape $ (Value): boolean. Whether buyers may skip a renewal. Merchant credentials may always
     * skip an eligible cycle. Default: true.
     */
    "enabled"?: boolean;
    /**
     * Shape $ (Value): integer. Maximum consecutive cycles a buyer may skip. Omit it for no limit.
     * The count resets after a paid renewal. Format: int32. minimum: 1. maximum: 12.
     */
    "max_consecutive_skips"?: number;
};
/**
 * Shape $ (Value): {@link BuyerSkipCapabilityInput}. Whether buyers may skip renewals. Send at
 * least one field. minProperties: 1.
 */
export type BuyerSkipCapabilityInput = BuyerSkipCapability;
/** Shape $ (Value): {@link BuyerSubscription}. A customer's recurring purchase. */
export type BuyerSubscription = {
    /**
     * Shape $ (Value): boolean. True while an active or trialing subscription on an external
     * billing schedule has no next billing date.
     */
    "awaiting_billing_schedule"?: boolean;
    /**
     * Shape $ (Value): integer. UTC day of the month used for monthly and yearly billing. Applies
     * only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Shape $ (Value): integer. Number of billing_interval units between charges. Changes with
     * billing_interval. Format: int32.
     */
    "billing_interval_count": number;
    /**
     * Shape $ (Value): Array of {@link SubscriptionIntervalOption}. maxItems: 12. uniqueItems:
     * true. Shape $[] (Value): {@link SubscriptionIntervalOption}. A billing interval, such as
     * every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Shape $ (Value): string. Who supplies billing dates: flint advances the schedule after each
     * paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH
     * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
     */
    "billing_schedule_owner": "flint" | "external" | (string & {});
    /**
     * Shape $ (Value): Array of {@link BuyerAction}. What the buyer can do with the subscription,
     * in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, then renew,
     * under the store's buyer policy. The available cancel and pause actions carry the choices
     * they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's
     * buyer account, lists all twelve every time; a merchant read gets an empty list.
     * update_payment_method is required while a payment is past due, due by next_retry_at when a
     * retry is scheduled, and when the card expires before next_billing_at, due by then. Example:
     * []. Shape $[] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
     * subscription, invoice or return they read through /v1/me. Show the actions with is_required
     * as what needs the buyer's attention, and the first available action as the primary action on
     * the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * Shape $ (Value): boolean. True when the subscription is scheduled to cancel at
     * scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo
     * with PATCH and cancel_at_period_end false.
     */
    "cancel_at_period_end": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Shape $ (Value): {@link BuyerSubscriptionCancellationDetails}. Who asked to cancel, when,
     * and why. Present once a cancellation is requested, whether it takes effect at the end of the
     * billing period or right away. Omitted when no one asked, and removed when a scheduled
     * cancellation is undone. See cancellation_reason for voluntary and payment-related
     * cancellations. The cancellation request behind a scheduled or completed cancellation.
     */
    "cancellation_details"?: BuyerSubscriptionCancellationDetails;
    /**
     * Shape $ (Value): string. Why the subscription is canceled or scheduled to cancel. Uses
     * cancellation_details.requested_by when recorded, payment_failed for a canceled subscription
     * without a requester, and other for a scheduled cancellation without a requester. Omitted
     * otherwise. Value enum: "buyer", "merchant", "payment_failed", "other".
     */
    "cancellation_reason"?: "buyer" | "merchant" | "payment_failed" | "other" | (string & {});
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "completed_cycles": `${bigint}`;
    /**
     * Shape $ (Value): string. When the recorded contract term ends. Does not move when the
     * subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier.
     * Format: date-time.
     */
    "contract_end_at"?: string;
    /**
     * Shape $ (Value): string. When the recorded contract term started. Does not move when the
     * subscription pauses or changes plan. Format: date-time.
     */
    "contract_start_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "current_period_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "current_period_start_at"?: string;
    /** Shape $ (Value): string. */
    "customer_id": string;
    /**
     * Shape $ (Value): {@link SubscriptionDelivery}. Saved delivery preference with the current
     * delivery method display. Write responses use the same display as GET: fixed shipping
     * reflects the current method configuration, and quoted shipping shows the last paid shipping
     * amount when available. A subscription's saved delivery preference: method, destination,
     * recipient, shipping cost, and who last changed it.
     */
    "delivery"?: SubscriptionDelivery;
    /**
     * Shape $ (Value): {@link SubscriptionDeliveryHold}. Current delivery issue that blocks
     * collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's
     * deliveries because its delivery method or destination no longer works, and who can fix it.
     */
    "delivery_hold"?: SubscriptionDeliveryHold;
    /**
     * Shape $ (Value): {@link MoneyValue}. The fee in the recorded contract terms. Present
     * whenever those terms include a fee. It applies only to a cancellation before
     * contract_end_at. Flint never charges it. Later plan changes do not change this fee. Monetary
     * amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Shape $ (Value): object. Why the latest subscription renewal payment failed. Omits merchant
     * remediation and sensitive decline signals. Shape $.code (Required): string. Flint-normalized
     * payment failure code. Unknown provider values are returned as payment_failed. Value enum:
     * "card_declined", "insufficient_funds", "bank_account_closed", "bank_account_not_found",
     * "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded",
     * "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc",
     * "processing_error", "payment_method_unavailable", "payment_method_declined",
     * "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable",
     * "payment_failed". Shape $.failed_at (Required): string. Time the payment attempt concluded
     * in failure. Format: date-time. Shape $.message (Required): string. Flint-authored buyer-safe
     * payment failure message.
     */
    "last_payment_error"?: {
        /**
         * Shape $ (Value): string. Flint-normalized payment failure code. Unknown provider values
         * are returned as payment_failed. Value enum: "card_declined", "insufficient_funds",
         * "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized",
         * "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required",
         * "payment_blocked", "expired_card", "incorrect_cvc", "processing_error",
         * "payment_method_unavailable", "payment_method_declined", "payment_not_completed",
         * "payment_action_expired", "payment_method_temporarily_unavailable", "payment_failed".
         */
        "code": "card_declined"
            | "insufficient_funds"
            | "bank_account_closed"
            | "bank_account_not_found"
            | "bank_debit_not_authorized"
            | "bank_account_restricted"
            | "bank_debit_limit_exceeded"
            | "authentication_required"
            | "payment_blocked"
            | "expired_card"
            | "incorrect_cvc"
            | "processing_error"
            | "payment_method_unavailable"
            | "payment_method_declined"
            | "payment_not_completed"
            | "payment_action_expired"
            | "payment_method_temporarily_unavailable"
            | "payment_failed"
            | (string & {});
        /**
         * Shape $ (Value): string. Time the payment attempt concluded in failure. Format:
         * date-time.
         */
        "failed_at": string;
        /** Shape $ (Value): string. Flint-authored buyer-safe payment failure message. */
        "message": string;
    };
    /**
     * Shape $ (Value): Array of {@link BuyerSubscriptionLineItem}. What each renewal bills. Plan
     * edits do not change it. Adding, changing or swapping a line takes that variant's current
     * catalog price, which then stays until the line changes again. Shape $[] (Value): {@link
     * BuyerSubscriptionLineItem}. An item included in a customer's recurring purchase.
     */
    "line_items": Array<BuyerSubscriptionLineItem>;
    /** Shape $ (Value): string. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): string. The billing date whose payment failed, as an RFC3339 timestamp.
     * Present only while status is past_due. Format: date-time.
     */
    "missed_billing_at"?: string;
    /**
     * Shape $ (Value): string. When Flint next starts a scheduled renewal charge, as an RFC3339
     * timestamp. Present only while a trialing or active subscription has a billing date and isn't
     * set to cancel at the end of its period. Absent when no renewal is scheduled: a paused
     * subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date
     * in missed_billing_at and retries at next_retry_at, an incomplete one retries at
     * next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at
     * scheduled_cancel_at, and an external schedule awaiting a date reports
     * awaiting_billing_schedule. Format: date-time.
     */
    "next_billing_at"?: string;
    /**
     * Shape $ (Value): string or null. Recorded automatic payment retry time. Null when no retry
     * time is available. Format: date-time.
     */
    "next_retry_at": string | null;
    /**
     * Shape $ (Value): string. ID of the paid renewal order whose shipment has not been
     * dispatched. It keeps its committed delivery destination after preference changes and
     * cancellation. Absent when no such renewal order exists. Only renewal orders count; the
     * signup order is not included.
     */
    "open_renewal_order_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Unpaid balance of the failed renewal order, including
     * tax, shipping and discounts, after payments and credits. Present only while status is
     * past_due and a positive balance remains. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "outstanding_money"?: MoneyValue;
    /**
     * Shape $ (Value): string. Why the subscription is paused: merchant for a pause made with your
     * API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause
     * during or after a delivery hold, and payment_failed when renewal payment retries ran out and
     * your dunning settings pause the subscription. Omitted when the subscription is not paused.
     * Value enum: "buyer", "delivery_action_required", "merchant", "payment_failed".
     */
    "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "paused_at"?: string;
    /** Shape $ (Value): string. The saved payment method renewals charge. Change it with PATCH. */
    "payment_method_id": string;
    /**
     * Shape $ (Value): Array of {@link SubscriptionPromotion}. Recurring promotions applying to
     * the next charged cycle. Empty when none apply; signup-only and exhausted promotions are
     * excluded. Shape $[] (Value): {@link SubscriptionPromotion}. A recurring promotion applied to
     * a subscription, including its recurrence and remaining discounted cycles.
     */
    "promotions": Array<SubscriptionPromotion>;
    /**
     * Shape $ (Value): integer. How many of each line the subscription bills each period, as a
     * whole number; fractional quantities are not supported. A change applies from the next
     * renewal that has not been paid. Format: int32.
     */
    "quantity": number;
    /**
     * Shape $ (Value): Array of integer. maxItems: 10. uniqueItems: true. Shape $[] (Value):
     * integer. minimum: 1. maximum: 100.
     */
    "quantity_options"?: Array<number>;
    /**
     * Shape $ (Value): {@link MoneyValue} or null. What one billing period's items cost before
     * discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes
     * when items, quantity, or the plan change; editing the plan doesn't change it. For the next
     * charge, use a subscription preview in next_renewal mode. Shape $.anyOf[1] (Value): {@link
     * MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency
     * code. Shape $.anyOf[2] (Value): null.
     */
    "recurring_subtotal_money": ((MoneyValue) | (null));
    /**
     * Shape $ (Value): string or null. When Flint accepted a pending resume request. Set only
     * while paused with a resume Flint has not applied yet. Clears when Flint resumes the
     * subscription or refuses the request. Format: date-time.
     */
    "resume_requested_at": string | null;
    /**
     * Shape $ (Value): string or null. When the scheduled cancellation takes effect: trial_end_at
     * while trialing, current_period_end_at while active, or next_retry_at while past_due. Null
     * when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     */
    "scheduled_cancel_at": string | null;
    /**
     * Shape $ (Value): string or null. When a pause with a length (pause_duration_cycles) resumes
     * on its own: that many billing intervals after paused_at. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time.
     */
    "scheduled_resume_at": string | null;
    /**
     * Shape $ (Value): {@link BuyerSubscriptionServiceLocation}. Omitted for a checkout session
     * credential that doesn't act for the customer the buyer verified. The customer address
     * reference or address used as the buyer's subscription service location.
     */
    "service_location"?: BuyerSubscriptionServiceLocation;
    /**
     * Shape $ (Value): string. When a scheduled start's first billing period begins. Present only
     * until that first payment succeeds. Format: date-time.
     */
    "starts_at"?: string;
    /**
     * Shape $ (Value): string. Value enum: "trialing", "active", "paused", "past_due", "canceled",
     * "incomplete", "scheduled".
     */
    "status": "trialing"
        | "active"
        | "paused"
        | "past_due"
        | "canceled"
        | "incomplete"
        | "scheduled"
        | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id": string;
    /**
     * Shape $ (Value): {@link BuyerExpandedSubscriptionPlanSummary} or null. Shape $.anyOf[1]
     * (Value): {@link BuyerExpandedSubscriptionPlanSummary}. A subscription plan expanded on a
     * buyer's order: billing interval, setup fee, trial length, status, and line items. Shape
     * $.anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((BuyerExpandedSubscriptionPlanSummary) | (null));
    /**
     * Shape $ (Value): string. Subscription plan ID. Omitted when terms_type is
     * subscription_offer.
     */
    "subscription_plan_id"?: string;
    /**
     * Shape $ (Value): string. Terms come from the subscription plan in subscription_plan_id, or
     * from subscription offers identified on each offer line by subscription_offer_id. Value enum:
     * "subscription_plan", "subscription_offer".
     */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "trial_end_at"?: string;
    /**
     * Shape $ (Value): {@link SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the
     * next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem
     * detected for an upcoming renewal that will hold the subscription's delivery, and who can fix
     * it.
     */
    "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 0.
     */
    "version": `${bigint}`;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionCancellationDetails}. The cancellation request behind a
 * scheduled or completed cancellation.
 */
export type BuyerSubscriptionCancellationDetails = {
    /**
     * Shape $ (Value): string. The reason the requester chose. Omitted when none was given. Value
     * enum: "too_expensive", "missing_features", "switched_service", "unused", "customer_service",
     * "too_complex", "low_quality", "other".
     */
    "reason_code"?: "too_expensive"
        | "missing_features"
        | "switched_service"
        | "unused"
        | "customer_service"
        | "too_complex"
        | "low_quality"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. When the cancellation was requested. Format: date-time. */
    "requested_at": string;
    /**
     * Shape $ (Value): string. buyer: the buyer, in Flint's buyer account or with a customer
     * session. merchant: a merchant credential, such as an API key or the dashboard. Value enum:
     * "buyer", "merchant".
     */
    "requested_by": "buyer" | "merchant" | (string & {});
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionLineItem}. An item included in a customer's recurring
 * purchase.
 */
export type BuyerSubscriptionLineItem = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "base_subtotal_money": MoneyValue;
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
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "modifier_total_money": MoneyValue;
    /**
     * Shape $ (Value): Array of {@link BuyerOrderLineItemModifier}. Shape $[] (Value): {@link
     * BuyerOrderLineItemModifier}. A modifier on a buyer's order line item, either a catalog
     * modifier or entered text, with its quantity and price change.
     */
    "modifiers"?: Array<BuyerOrderLineItemModifier>;
    /** Shape $ (Value): string. */
    "name": string;
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
    /** Shape $ (Value): string.  Value enum: "variant", "bundle". */
    "source_type"?: "variant" | "bundle" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_line_item_id"?: string;
    /** Shape $ (Value): string. */
    "subscription_offer_id"?: string;
    /** Shape $ (Value): string. */
    "subscription_plan_line_item_id"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "subtotal_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionListResponse}. A page of `BuyerSubscription` objects.
 */
export type BuyerSubscriptionListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerSubscription}. Shape $[] (Value): {@link
     * BuyerSubscription}. A customer's recurring purchase.
     */
    "data": Array<BuyerSubscription>;
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
 * Shape $ (Value): {@link BuyerSubscriptionPaymentRetry}. A retry of a past-due payment on the
 * buyer's subscription. Includes, when available, the buyer's order and a failure they can act on.
 * Omits the store's idempotency keys and payment attempt IDs.
 */
export type BuyerSubscriptionPaymentRetry = {
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "completed_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at": string;
    /**
     * Shape $ (Value): {@link PaymentErrorSummary}. A summary of why a payment attempt failed,
     * with a normalized error code, a message, the failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Shape $ (Value): string. */
    "order_id"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "started_at"?: string;
    /** Shape $ (Value): string.  Value enum: "pending", "processing", "succeeded", "failed". */
    "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id": string;
    /** Shape $ (Value): string. */
    "subscription_payment_retry_id": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionPaymentRetryListResponse}. A page of
 * `BuyerSubscriptionPaymentRetry` objects.
 */
export type BuyerSubscriptionPaymentRetryListResponse = {
    /**
     * Shape $ (Value): Array of {@link BuyerSubscriptionPaymentRetry}. Shape $[] (Value): {@link
     * BuyerSubscriptionPaymentRetry}. A retry of a past-due payment on the buyer's subscription.
     * Includes, when available, the buyer's order and a failure they can act on. Omits the store's
     * idempotency keys and payment attempt IDs.
     */
    "data": Array<BuyerSubscriptionPaymentRetry>;
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
 * Shape $ (Value): {@link BuyerSubscriptionPaymentRetryResponse}. A response containing
 * `BuyerSubscriptionPaymentRetry` data.
 */
export type BuyerSubscriptionPaymentRetryResponse = {
    /**
     * Shape $ (Value): {@link BuyerSubscriptionPaymentRetry}. A retry of a past-due payment on the
     * buyer's subscription. Includes, when available, the buyer's order and a failure they can act
     * on. Omits the store's idempotency keys and payment attempt IDs.
     */
    "data": BuyerSubscriptionPaymentRetry;
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
 * Shape $ (Value): {@link BuyerSubscriptionPlanLineItem}. A line item of a subscription plan as a
 * buyer sees it: the product, bundle, or variant, quantity, unit price, and swap variants.
 */
export type BuyerSubscriptionPlanLineItem = ({
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
    /** Shape $ (Value): string.  Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
})
    & ((Exclude<BuyerSubscriptionPlanLineItemVariant & object, readonly unknown[]>)
    | (Exclude<BuyerSubscriptionPlanLineItemBundle & object, readonly unknown[]>)
    | (Exclude<BuyerSubscriptionPlanLineItemCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link BuyerSubscriptionPlanLineItemBundle}. The `bundle` variant of
 * `BuyerSubscriptionPlanLineItem`.
 */
export type BuyerSubscriptionPlanLineItemBundle = ({
    /** Shape $ (Value): string. */
    "bundle_id": string;
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
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money"?: MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Shape $ (Value): string. */
    "bundle_id": string;
}));
/**
 * Shape $ (Value): {@link BuyerSubscriptionPlanLineItemCustom}. The `custom` variant of
 * `BuyerSubscriptionPlanLineItem`.
 */
export type BuyerSubscriptionPlanLineItemCustom = ({
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
    /** Shape $ (Value): string. */
    "name": string;
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
    /** Shape $ (Value): string.  Value enum: "custom". */
    "type": "custom" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
    /** Shape $ (Value): string. */
    "variant_id"?: string;
})
    & (({
    /** Shape $ (Value): string.  Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Shape $ (Value): string. */
    "name": string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "unit_price_money": MoneyValue;
}));
/**
 * Shape $ (Value): {@link BuyerSubscriptionPlanLineItemVariant}. The `variant` variant of
 * `BuyerSubscriptionPlanLineItem`.
 */
export type BuyerSubscriptionPlanLineItemVariant = ({
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
/**
 * Shape $ (Value): {@link BuyerSubscriptionPreview}. Available subscription delivery methods shown
 * to the buyer.
 */
export type BuyerSubscriptionPreview = {
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
     * Shape $ (Value): string. Always delivery_options for buyer previews. Value enum:
     * "delivery_options".
     */
    "mode": "delivery_options" | (string & {});
    /** Shape $ (Value): string. */
    "subscription_id"?: string;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionPreviewResponse}. The response for: Preview
 * subscription.
 */
export type BuyerSubscriptionPreviewResponse = {
    /**
     * Shape $ (Value): {@link BuyerSubscriptionPreview} or {@link SubscriptionRenewalPreview}.
     * Shape $.oneOf[1] (Value): {@link BuyerSubscriptionPreview}. Available subscription delivery
     * methods shown to the buyer. Shape $.oneOf[2] (Value): {@link SubscriptionRenewalPreview}. A
     * preview of a subscription's next renewal and its estimated pricing.
     */
    "data": ((BuyerSubscriptionPreview) | (SubscriptionRenewalPreview) | (Record<string, unknown>));
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
 * Shape $ (Value): {@link BuyerSubscriptionRenewalResult}. The subscription is the primary
 * resource and expected_version target; the result uses the same subscription and order fields as
 * the corresponding /v1/me reads.
 */
export type BuyerSubscriptionRenewalResult = {
    /**
     * Shape $ (Value): {@link BuyerOrder}. A customer's purchase and its payment and fulfillment
     * progress.
     */
    "order": BuyerOrder;
    /**
     * Shape $ (Value): {@link BuyerOrderPaymentAttempt} or null. Shape $.anyOf[1] (Value): {@link
     * BuyerOrderPaymentAttempt}. An attempt to pay an order. Shape $.anyOf[2] (Value): null.
     */
    "order_payment_attempt": ((BuyerOrderPaymentAttempt) | (null));
    /** Shape $ (Value): {@link BuyerSubscription}. A customer's recurring purchase. */
    "subscription": BuyerSubscription;
};
/**
 * Shape $ (Value): {@link BuyerSubscriptionRenewalResultResponse}. A response containing
 * `BuyerSubscriptionRenewalResult` data.
 */
export type BuyerSubscriptionRenewalResultResponse = {
    /**
     * Shape $ (Value): {@link BuyerSubscriptionRenewalResult}. The subscription is the primary
     * resource and expected_version target; the result uses the same subscription and order fields
     * as the corresponding /v1/me reads.
     */
    "data": BuyerSubscriptionRenewalResult;
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
 * Shape $ (Value): {@link BuyerSubscriptionResponse}. A response containing `BuyerSubscription`
 * data.
 */
export type BuyerSubscriptionResponse = {
    /** Shape $ (Value): {@link BuyerSubscription}. A customer's recurring purchase. */
    "data": BuyerSubscription;
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
 * Shape $ (Value): {@link BuyerSubscriptionServiceLocation}. The customer address reference or
 * address used as the buyer's subscription service location.
 */
export type BuyerSubscriptionServiceLocation = {
    /**
     * Shape $ (Value): {@link Address}. A postal address. Every address has country. Addresses
     * Flint checked as complete (customer and saved addresses, merchant, location, invoice, order
     * delivery destination, tax identity, fulfillment recipient and pickup addresses) always have
     * line1 and city, and US ones always have state and postal_code. Delivery quote destinations,
     * buyer locations and postal-code tax locations hold only what was provided, such as
     * postal_code and country.
     */
    "address"?: Address;
};
/**
 * Shape $ (Value): {@link BuyerTip}. A tip on a buyer's order, with its requested, effective,
 * settled, and refunded amounts and how it was allocated to payments.
 */
export type BuyerTip = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** Shape $ (Value): string. */
    "description"?: string;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "effective_amount_money": MoneyValue;
    /** Shape $ (Value): string. */
    "name"?: string;
    /** Shape $ (Value): string. */
    "order_tip_id": string;
    /**
     * Shape $ (Value): Array of {@link TipPaymentIntentAllocation}. Shape $[] (Value): {@link
     * TipPaymentIntentAllocation}. The part of a tip paid through one payment intent.
     */
    "payment_intent_allocations": Array<TipPaymentIntentAllocation>;
    /** Shape $ (Value): number. multipleOf: 0.0001. */
    "percent"?: number;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "refunded_money": MoneyValue;
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "settled_amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Value enum: "requested", "settled", "partially_refunded",
     * "refunded", "canceled".
     */
    "status": "requested" | "settled" | "partially_refunded" | "refunded" | "canceled" | (string & {});
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /**
     * Shape $ (Value): Array of {@link TipValueSettlementAllocation}. Shape $[] (Value): {@link
     * TipValueSettlementAllocation}. The part of a tip paid through one value settlement.
     */
    "value_settlement_allocations": Array<TipValueSettlementAllocation>;
};
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryMethodResultRequest}. The rate result you supply
 * for one delivery method and choice group when creating a delivery quote with caller-supplied
 * pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequest = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id": string;
    /**
     * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequest}. Your outcome for a
     * caller-priced delivery method, selected by `type`: available with a price and windows,
     * unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequest;
};
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryMethodResultRequestInput}. The rate result you
 * supply for one delivery method and choice group when creating a delivery quote with
 * caller-supplied pricing.
 */
export type CallerSuppliedDeliveryMethodResultRequestInput = {
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_choice_group_id": string;
    /** Shape $ (Value): string. minLength: 1. */
    "delivery_method_revision_id": string;
    /**
     * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestInput}. Your outcome for a
     * caller-priced delivery method, selected by `type`: available with a price and windows,
     * unavailable with a reason, or cannot calculate.
     */
    "outcome": CallerSuppliedDeliveryOutcomeRequestInput;
};
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequest}. Your outcome for a caller-priced
 * delivery method, selected by `type`: available with a price and windows, unavailable with a
 * reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequest = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequest}. Shape $[] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "available", "unavailable", "cannot_calculate". */
    "type": "available" | "unavailable" | "cannot_calculate" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailable & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculate & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestAvailable}. The `available` variant
 * of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestAvailable = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequest}. Shape $[] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "available". */
    "type": "available" | (string & {});
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string;
});
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestAvailableInput}. The `available`
 * variant of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestAvailableInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string | globalThis.Date;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequestInput}. Shape $[] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "available". */
    "type": "available";
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "available". */
    "type": "available";
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at": string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at": string | globalThis.Date;
});
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestCannotCalculate}. The
 * `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculate = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequest}. Shape $[] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Shape $ (Value): boolean. */
    "retryable": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "cannot_calculate". */
    "type": "cannot_calculate" | (string & {});
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
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
    /** Shape $ (Value): boolean. */
    "retryable": boolean;
});
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput}. The
 * `cannot_calculate` variant of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequestInput}. Shape $[] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /** Shape $ (Value): boolean. */
    "retryable": boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "cannot_calculate". */
    "type": "cannot_calculate";
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "cannot_calculate". */
    "type": "cannot_calculate";
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
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
    /** Shape $ (Value): boolean. */
    "retryable": boolean;
});
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestInput}. Your outcome for a
 * caller-priced delivery method, selected by `type`: available with a price and windows,
 * unavailable with a reason, or cannot calculate.
 */
export type CallerSuppliedDeliveryOutcomeRequestInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequestInput}. Shape $[] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "available", "unavailable", "cannot_calculate". */
    "type": "available" | "unavailable" | "cannot_calculate";
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason"?: "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ((Exclude<CallerSuppliedDeliveryOutcomeRequestAvailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestUnavailableInput & object, readonly unknown[]>)
    | (Exclude<CallerSuppliedDeliveryOutcomeRequestCannotCalculateInput & object, readonly unknown[]>));
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestUnavailable}. The `unavailable`
 * variant of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestUnavailable = ({
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequest}. Shape $[] (Value): {@link
     * DeliveryWindowRequest}. A delivery window you supply in a caller-supplied delivery outcome,
     * with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequest>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
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
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "unavailable". */
    "type": "unavailable" | (string & {});
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
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
});
/**
 * Shape $ (Value): {@link CallerSuppliedDeliveryOutcomeRequestUnavailableInput}. The `unavailable`
 * variant of `CallerSuppliedDeliveryOutcomeRequest`.
 */
export type CallerSuppliedDeliveryOutcomeRequestUnavailableInput = ({
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "expires_at"?: string | globalThis.Date;
    /**
     * Shape $ (Value): string. Why Flint could not calculate the method and the action that can
     * make calculation succeed. - `dependency_failure`: Retry after the dependent service
     * recovers. - `timeout`: Retry after the timed-out dependency recovers. -
     * `malformed_response`: Fix the callback response so it matches the documented response
     * schema, then retry. - `pricing_failure`: Fix the method pricing configuration or matching
     * rate, then retry. - `schedule_failure`: Fix the method schedule, timezone, or requested
     * window, then retry. - `geography_failure`: Fix the destination, origin, or geographic
     * configuration, then retry. - `routing_failure`: Fix inventory routing or origin assignment,
     * then retry. - `address_verification_failed`: Correct the address fields rejected by
     * verification, then retry. - `address_could_not_be_verified`: Confirm or correct the address,
     * or retry when address verification is available. Value enum: "dependency_failure",
     * "timeout", "malformed_response", "pricing_failure", "schedule_failure", "geography_failure",
     * "routing_failure", "address_verification_failed", "address_could_not_be_verified".
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
    /** Shape $ (Value): string. minLength: 1. maxLength: 500. */
    "merchant_reference"?: string;
    /**
     * Shape $ (Value): Array of {@link DeliveryWindowRequestInput}. Shape $[] (Value): {@link
     * DeliveryWindowRequestInput}. A delivery window you supply in a caller-supplied delivery
     * outcome, with its time range, price, and the last moment a buyer can choose it.
     */
    "offered_windows"?: Array<DeliveryWindowRequestInput>;
    /** Shape $ (Value): boolean. */
    "retryable"?: boolean;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "selection_guarantee_expires_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. minLength: 1. */
    "service_level"?: string;
    /** Shape $ (Value): string.  Value enum: "unavailable". */
    "type": "unavailable";
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_end_at"?: string | globalThis.Date;
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1. */
    "window_start_at"?: string | globalThis.Date;
})
    & ({
    /** Shape $ (Value): string.  Value enum: "unavailable". */
    "type": "unavailable";
    /**
     * Shape $ (Value): string. Why the method is unavailable and the action that can make it
     * eligible. - `destination_not_served`: Use a destination covered by this method or choose
     * another method. - `pickup_unavailable`: Choose an available pickup method or location. -
     * `no_window_available`: Choose another offered window or a method with availability for the
     * requested time. - `eligibility_no_match`: Inspect eligibility_mismatches, then change the
     * relevant buyer facts or method eligibility rule. - `pricing_unavailable`: Add or activate a
     * matching rate, or provide the required caller-supplied price. - `inventory_unavailable`:
     * Choose an origin or method backed by available inventory. Value enum:
     * "destination_not_served", "pickup_unavailable", "no_window_available",
     * "eligibility_no_match", "pricing_unavailable", "inventory_unavailable".
     */
    "unavailable_reason": "destination_not_served"
        | "pickup_unavailable"
        | "no_window_available"
        | "eligibility_no_match"
        | "pricing_unavailable"
        | "inventory_unavailable";
});
/**
 * Shape $ (Value): {@link CancelGiftCardNotificationRequestInput}. The request body for: Cancel a
 * gift card notification.
 */
export type CancelGiftCardNotificationRequestInput = {};
/**
 * Shape $ (Value): {@link CancelOrderPaymentAttemptRequest}. The request body for: Cancel order
 * payment attempt.
 */
export type CancelOrderPaymentAttemptRequest = {
    /**
     * Shape $ (Value): string. Optional merchant-supplied cancellation reason. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
};
/**
 * Shape $ (Value): {@link CancelOrderPaymentAttemptRequestInput}. The request body for: Cancel
 * order payment attempt.
 */
export type CancelOrderPaymentAttemptRequestInput = {
    /**
     * Shape $ (Value): string. Optional merchant-supplied cancellation reason. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
};
/**
 * Shape $ (Value): {@link CancelPaymentIntentRequest}. The request body for: Cancel payment
 * intent.
 */
export type CancelPaymentIntentRequest = {
    /**
     * Shape $ (Value): string. Optional merchant-supplied cancellation reason. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned" | (string & {});
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CancelPaymentIntentRequestInput}. The request body for: Cancel payment
 * intent.
 */
export type CancelPaymentIntentRequestInput = {
    /**
     * Shape $ (Value): string. Optional merchant-supplied cancellation reason. Value enum:
     * "requested_by_customer", "duplicate", "fraudulent", "abandoned".
     */
    "cancellation_reason"?: "requested_by_customer" | "duplicate" | "fraudulent" | "abandoned";
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/** Shape $ (Value): {@link CancelPayoutRequest}. The request body for: Cancel a payout. */
export type CancelPayoutRequest = {};
/** Shape $ (Value): {@link CancelPayoutRequestInput}. The request body for: Cancel a payout. */
export type CancelPayoutRequestInput = {};
/**
 * Shape $ (Value): {@link CancelReturnDispositionRequest}. The request body for: Cancel return
 * disposition.
 */
export type CancelReturnDispositionRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "created_in_error", "changed_disposition", "duplicate",
     * "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnDispositionRequestInput}. The request body for: Cancel
 * return disposition.
 */
export type CancelReturnDispositionRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "created_in_error", "changed_disposition", "duplicate",
     * "other".
     */
    "reason": "created_in_error" | "changed_disposition" | "duplicate" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnLineItemRequest}. The request body for: Cancel return line
 * item.
 */
export type CancelReturnLineItemRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. How many of the canceled units the buyer no longer has to
     * send back, as a whole number; fractional quantities are not supported. Lowers
     * return_required_quantity. Omit it to lower it only as far as the canceled quantity requires.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "handback_quantity"?: `${bigint}`;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnLineItemRequestInput}. The request body for: Cancel return
 * line item.
 */
export type CancelReturnLineItemRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. How many of the canceled units the buyer no longer has to
     * send back, as a whole number; fractional quantities are not supported. Lowers
     * return_required_quantity. Omit it to lower it only as far as the canceled quantity requires.
     * Use an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "handback_quantity"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not
     * supported. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "quantity": `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "expired",
     * "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "expired" | "created_in_error" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnRequest}. The request body for: Cancel one of the current
 * buyer's Returns; Cancel return.
 */
export type CancelReturnRequest = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "reason": "buyer_request"
        | "merchant_request"
        | "duplicate"
        | "expired"
        | "created_in_error"
        | "other"
        | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnRequestInput}. The request body for: Cancel one of the
 * current buyer's Returns; Cancel return.
 */
export type CancelReturnRequestInput = {
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
    /**
     * Shape $ (Value): string. Value enum: "buyer_request", "merchant_request", "duplicate",
     * "expired", "created_in_error", "other".
     */
    "reason": "buyer_request" | "merchant_request" | "duplicate" | "expired" | "created_in_error" | "other";
    /** Shape $ (Value): string. minLength: 1. */
    "reason_message"?: string;
};
/**
 * Shape $ (Value): {@link CancelReturnResolutionRequestInput}. The request body for: Cancel return
 * resolution.
 */
export type CancelReturnResolutionRequestInput = CancelReturnRequestInput;
/**
 * Shape $ (Value): {@link CancelSubscriptionRequest}. The request body for: Cancel one of the
 * current buyer's subscriptions; Cancel subscription.
 */
export type CancelSubscriptionRequest = {
    /**
     * Shape $ (Value): boolean. When true, ends the subscription now. Otherwise, schedules
     * cancellation at trial_end_at while trialing, current_period_end_at while active, or
     * next_retry_at while past_due, instead of that charge. An active subscription with an expired
     * renewal delivery hold ends now. A scheduled, incomplete, or paused subscription, or a
     * past_due subscription without next_retry_at, requires cancel_immediately: true; otherwise
     * returns 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. A buyer may cancel
     * immediately when the store allows buyer_chooses or no scheduled cancellation time is
     * available. Under end_of_period, a trial continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Shape $ (Value): string. Free text about the cancellation, up to 500 characters after
     * surrounding spaces are trimmed. Recorded in cancellation_details.comment, which only
     * merchant credentials read. minLength: 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Shape $ (Value): string. Optional. Why the subscription is being canceled. When the store
     * lists customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must
     * be one of them; merchant credentials may send any code. Recorded in
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
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CancelSubscriptionRequestInput}. The request body for: Cancel one of the
 * current buyer's subscriptions; Cancel subscription.
 */
export type CancelSubscriptionRequestInput = {
    /**
     * Shape $ (Value): boolean. When true, ends the subscription now. Otherwise, schedules
     * cancellation at trial_end_at while trialing, current_period_end_at while active, or
     * next_retry_at while past_due, instead of that charge. An active subscription with an expired
     * renewal delivery hold ends now. A scheduled, incomplete, or paused subscription, or a
     * past_due subscription without next_retry_at, requires cancel_immediately: true; otherwise
     * returns 409 ACTION_NOT_ALLOWED with reason period_end_unavailable. A buyer may cancel
     * immediately when the store allows buyer_chooses or no scheduled cancellation time is
     * available. Under end_of_period, a trial continues until trial_end_at.
     */
    "cancel_immediately"?: boolean;
    /**
     * Shape $ (Value): string. Free text about the cancellation, up to 500 characters after
     * surrounding spaces are trimmed. Recorded in cancellation_details.comment, which only
     * merchant credentials read. minLength: 1. maxLength: 500.
     */
    "cancellation_comment"?: string;
    /**
     * Shape $ (Value): string. Optional. Why the subscription is being canceled. When the store
     * lists customer_account.buyer_capabilities.cancellation_reasons, a reason a buyer sends must
     * be one of them; merchant credentials may send any code. Recorded in
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
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CapabilityReadiness}. Merchant capability readiness for a payment or
 * money movement capability.
 */
export type CapabilityReadiness = {
    /**
     * Shape $ (Value): string. Flint-owned capability name. Payment capabilities describe
     * transaction acceptance readiness; money movement capabilities describe payout and balance
     * movement readiness. Value enum: "accept_card_payments", "save_payment_methods",
     * "accept_affirm_payments", "accept_ach_debit_payments", "receive_payouts",
     * "create_standard_payouts", "manage_payout_destinations", "manage_payout_settings".
     */
    "capability": "accept_card_payments"
        | "save_payment_methods"
        | "accept_affirm_payments"
        | "accept_ach_debit_payments"
        | "receive_payouts"
        | "create_standard_payouts"
        | "manage_payout_destinations"
        | "manage_payout_settings"
        | (string & {});
    /**
     * Shape $ (Value): string. Product domain this capability belongs to: payments for payment
     * acceptance or money_movement for balances and payouts. Value enum: "money_movement",
     * "payments".
     */
    "domain": "money_movement" | "payments" | (string & {});
    /**
     * Shape $ (Value): Array of {@link ReadinessAction}. Actions that can remediate or refresh
     * this capability when Flint can suggest one. Shape $[] (Value): {@link ReadinessAction}. A
     * step that moves a merchant capability or readiness axis forward, with the party that must do
     * it (`owner`) and any required fields.
     */
    "next_actions": Array<ReadinessAction>;
    /**
     * Shape $ (Value): {@link ReadinessRequirements}. Merchant requirements that affect this
     * capability. Account information requirements for a merchant, grouped as currently due,
     * eventually due, past due, and pending verification.
     */
    "requirements": ReadinessRequirements;
    /**
     * Shape $ (Value): string. Current readiness status for this capability. Value enum: "ready",
     * "pending", "blocked", "not_requested", "not_available".
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
 * Shape $ (Value): {@link CapturePaymentIntentRequest}. The request body for: Capture payment
 * intent.
 */
export type CapturePaymentIntentRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Amount to capture, in the authorization's currency.
     * Omit it to capture all of capturable_money. A smaller amount is a partial capture: Flint
     * releases the rest in the same request, and the payment intent can't be captured again. Must
     * be greater than zero and at most capturable_money. Affirm payments can only be captured in
     * full. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValue;
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CapturePaymentIntentRequestInput}. The request body for: Capture payment
 * intent.
 */
export type CapturePaymentIntentRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Amount to capture, in the authorization's
     * currency. Omit it to capture all of capturable_money. A smaller amount is a partial capture:
     * Flint releases the rest in the same request, and the payment intent can't be captured again.
     * Must be greater than zero and at most capturable_money. Affirm payments can only be captured
     * in full. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "amount_money"?: MoneyValueInput;
    /**
     * Shape $ (Value): integer string. Optional expected version of this resource. A stale value
     * returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the
     * request before retrying. Use an integer string (decimal digits), not a floating-point
     * number. Format: uint64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CardDetails}. Card details on a payment method: brand, expiration month
 * and year, last four digits, and the wallet when one was used.
 */
export type CardDetails = {
    /**
     * Shape $ (Value): string. Value enum: "visa", "mastercard", "amex", "discover", "diners",
     * "jcb", "unionpay".
     */
    "brand": "visa" | "mastercard" | "amex" | "discover" | "diners" | "jcb" | "unionpay" | (string & {});
    /** Shape $ (Value): integer. Format: int32. */
    "exp_month": number;
    /** Shape $ (Value): integer. Format: int32. */
    "exp_year": number;
    /** Shape $ (Value): string. */
    "last4": string;
    /** Shape $ (Value): string. */
    "wallet"?: string;
};
/** Shape $ (Value): {@link CashOutGiftCardRequest}. The request body for: Record a cash-out. */
export type CashOutGiftCardRequest = {
    /**
     * Shape $ (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus
     * an ISO 4217 currency code.
     */
    "amount_money": MoneyValue;
    /**
     * Shape $ (Value): string. Your reference for the cash you paid the buyer outside Flint, such
     * as a receipt number. Required; 1 to 255 characters. The value is preserved exactly as sent.
     * minLength: 1. maxLength: 255.
     */
    "cash_out_reference": string;
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}`;
};
/**
 * Shape $ (Value): {@link CashOutGiftCardRequestInput}. The request body for: Record a cash-out.
 */
export type CashOutGiftCardRequestInput = {
    /**
     * Shape $ (Value): {@link MoneyValueInput}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code.
     */
    "amount_money": MoneyValueInput;
    /**
     * Shape $ (Value): string. Your reference for the cash you paid the buyer outside Flint, such
     * as a receipt number. Required; 1 to 255 characters. The value is preserved exactly as sent.
     * minLength: 1. maxLength: 255.
     */
    "cash_out_reference": string;
    /**
     * Shape $ (Value): integer string. The gift card version last read. The command changes this
     * card only when its current version matches. Use an integer string (decimal digits), not a
     * floating-point number. Format: int64. minimum: 1.
     */
    "expected_version"?: `${bigint}` | bigint;
};
/**
 * Shape $ (Value): {@link CashOutGiftCardResult}. The result of recording a gift card cash-out:
 * the updated gift card and the transactions it created.
 */
export type CashOutGiftCardResult = {
    /**
     * Shape $ (Value): {@link GiftCard}. Merchant-issued purchased gift card. Posted balance
     * includes reserved value; available value is balance minus reservations. Frozen value remains
     * part of outstanding liability. Gift cards are independent resources and cannot be
     * transferred across merchants or currencies.
     */
    "gift_card": GiftCard;
    /**
     * Shape $ (Value): Array of {@link GiftCardTransaction}. Shape $[] (Value): {@link
     * GiftCardTransaction}. Immutable posted financial movement with signed amount, per-card
     * sequence, merchant sequence and balance snapshots. Corrections create new transactions.
     */
    "gift_card_transactions": Array<GiftCardTransaction>;
};
/**
 * Shape $ (Value): {@link CashOutGiftCardResultResponse}. A response containing
 * `CashOutGiftCardResult` data.
 */
export type CashOutGiftCardResultResponse = {
    /**
     * Shape $ (Value): {@link CashOutGiftCardResult}. The result of recording a gift card
     * cash-out: the updated gift card and the transactions it created.
     */
    "data": CashOutGiftCardResult;
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
export type CategoriesCreateInput = {
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link CreateCategoryRequestInput}. The request body for: Create category.
     */
    "body": InputValue<CreateCategoryRequestInput>;
};
export type CategoriesGetInput = {
    /** Shape $ (Value): string. */
    "category_id": InputValue<string>;
};
export type CategoriesListInput = {
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$. */
    "handle"?: InputValue<string>;
    /** Shape $ (Value): string. minLength: 1. maxLength: 255. */
    "external_reference_id"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "query"?: InputValue<string>;
    /**
     * Shape $ (Value): string. Default: "handle". Value enum: "handle", "created_at",
     * "updated_at".
     */
    "sort_by"?: InputValue<"handle" | "created_at" | "updated_at">;
    /** Shape $ (Value): string. Default: "asc". Value enum: "asc", "desc". */
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
export type CategoriesRemoveInput = {
    /** Shape $ (Value): string. */
    "category_id": InputValue<string>;
    /**
     * Shape $ (Value): integer string. Use an integer string (decimal digits), not a
     * floating-point number. Format: uint64. minimum: 1.
     */
    "expected_version"?: InputValue<`${bigint}` | bigint>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
};
export type CategoriesUpdateInput = {
    /** Shape $ (Value): string. */
    "category_id": InputValue<string>;
    /** Shape $ (Value): string. maxLength: 255. */
    "Idempotency-Key"?: InputValue<string>;
    /**
     * Shape $ (Value): {@link UpdateCategoryRequestInput}. The request body for: Update category.
     */
    "body": InputValue<UpdateCategoryRequestInput>;
};
/** Shape $ (Value): {@link Category}. A catalog grouping used to organize items. */
export type Category = {
    /**
     * Shape $ (Value): integer string. Number of bundles currently assigned to the category. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "assigned_bundle_count": `${bigint}`;
    /**
     * Shape $ (Value): integer string. Number of products currently assigned to the category. Use
     * an integer string (decimal digits), not a floating-point number. Format: int64.
     */
    "assigned_product_count": `${bigint}`;
    /** Shape $ (Value): string. Stable identifier of the category. */
    "category_id": string;
    /**
     * Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "created_at": string;
    /** Shape $ (Value): string. Description of the category. */
    "description"?: string;
    /**
     * Shape $ (Value): string. Caller-owned identifier for this resource in an external system.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Shape $ (Value): string. Immutable handle used to assign this category to products and
     * bundles.
     */
    "handle": string;
    /** Shape $ (Value): string. Identifier of the merchant that owns this resource. */
    "merchant_id"?: string;
    /**
     * Shape $ (Value): {@link MetadataMap}. Caller-owned metadata stored on this resource.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /** Shape $ (Value): string. Category name shown to buyers. */
    "name": string;
    /**
     * Shape $ (Value): string. Category lifecycle status. Active categories can be assigned;
     * deleted is returned only by DELETE. Value enum: "active", "deleted".
     */
    "status": "active" | "deleted" | (string & {});
    /**
     * Shape $ (Value): integer string. Number of live targeting references that prevent deleting
     * the category. Use an integer string (decimal digits), not a floating-point number. Format:
     * int64.
     */
    "targeting_reference_count": `${bigint}`;
    /**
     * Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format:
     * date-time.
     */
    "updated_at": string;
    /**
     * Shape $ (Value): integer string. Persisted owned-state version. Clock-based availability and
     * expanded resources do not advance this counter. Use an integer string (decimal digits), not
     * a floating-point number. Format: uint64. minimum: 1.
     */
    "version": `${bigint}`;
};
/** Shape $ (Value): {@link CategoryListResponse}. A page of `Category` objects. */
export type CategoryListResponse = {
    /**
     * Shape $ (Value): Array of {@link Category}. The requested category data. Shape $[] (Value):
     * {@link Category}. A catalog grouping used to organize items.
     */
    "data": Array<Category>;
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
    "request_id": string;
};
/**
 * Shape $ (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
 * name.
 */
export type CategoryReference = {
    /** Shape $ (Value): string. Stable identifier of the category. */
    "category_id": string;
    /** Shape $ (Value): string. Category handle recorded with this reference. */
    "handle": string;
    /** Shape $ (Value): string. Category name recorded with this reference. */
    "name": string;
};
/** Shape $ (Value): {@link CategoryResponse}. A response containing `Category` data. */
export type CategoryResponse = {
    /**
     * Shape $ (Value): {@link Category}. The requested category data. A catalog grouping used to
     * organize items.
     */
    "data": Category;
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
    "request_id": string;
};

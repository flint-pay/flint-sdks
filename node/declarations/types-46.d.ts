import type { InputValue } from '../runtime.js';
import type {
    UpdateSubscriptionPlanRequestInput,
    UpdateSubscriptionBillingScheduleRequestInput,
    UpdateSubscriptionRequestInput,
    UpdateSubscriptionLineItemRequestInput
} from './types-49.js';
import type { Address, AddressRequest, AddressRequestInput } from './types-0.js';
import type { SubscriptionAddressVerification, Subscription, SkipSubscriptionCycleRequestInput } from './types-44.js';
import type {
    SubscriptionDeliveryOption,
    SubscriptionDeliveryMethodImpact,
    SubscriptionPlanChangePreview,
    SubscriptionOfferTermsRequest,
    SubscriptionPlanTermsRequest,
    SubscriptionOfferTermsRequestInput,
    SubscriptionPlanTermsRequestInput
} from './types-45.js';
import type { ErrorDetail, DocumentTaxID, DocumentTaxIDInput } from './types-16.js';
import type { ResponseMeta } from './types-40.js';
import type {
    CreateSubscriptionPreviewRequestInput,
    CreateSubscriptionAccessLinkRequestInput,
    CreateSubscriptionRequestInput,
    CreateSubscriptionLineItemRequestInput
} from './types-9.js';
import type { PromotionRecurrence } from './types-38.js';
import type { MoneyValue, MoneyValueInput } from './types-31.js';
import type { Order, OrderPaymentAttempt } from './types-32.js';
import type {
    MeCancelSubscriptionInput,
    MeChangeSubscriptionPaymentMethodInput,
    MeCreateSubscriptionPaymentRetryInput,
    MeGetSubscriptionPaymentRetryInput
} from './types-29.js';
import type { ChangeSubscriptionPlanRequestInput } from './types-3.js';
import type { MePauseSubscriptionInput, MeReactivateSubscriptionInput, MeRenewSubscriptionInput } from './types-30.js';
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
export type SubscriptionsListPaymentRetriesInput = {
    /** Shape $ (Value): string. */
    "subscription_id": InputValue<string>;
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20. */
    "page_size"?: InputValue<number>;
    /** Shape $ (Value): string. */
    "page_token"?: InputValue<string>;
    /** Shape $ (Value): string. */
    "idempotency_key"?: InputValue<string>;
};
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
 * Shape $ (Value): {@link TaxIdentity}. Merchant-provided legal identity displayed on invoices and
 * credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned collection in
 * display order; replacing the array requires the parent's expected_version. Existing entries
 * retain their document_tax_id; omit an entry to remove it, or omit its ID to add one.
 */
export type TaxIdentity = {
    /** Shape $ (Value): string or null. minLength: 1. maxLength: 255. */
    "legal_name": string | null;
    /**
     * Shape $ (Value): {@link Address} or null. Replaced as a whole: send every field you want to
     * keep. Shape $.anyOf[1] (Value): {@link Address}. A postal address, as returned on customers,
     * invoices, tax locations, and fulfillment recipients. Shape $.anyOf[2] (Value): null.
     */
    "registered_address": ((Address) | (null));
    /**
     * Shape $ (Value): Array of {@link DocumentTaxID}. maxItems: 20. Shape $[] (Value): {@link
     * DocumentTaxID}. A tax identifier printed on documents, with its country, optional region,
     * identifier type, and value. Flint does not verify the value.
     */
    "tax_ids": Array<DocumentTaxID>;
};
/**
 * Shape $ (Value): {@link TaxIdentityPatch}. Merchant-provided legal identity displayed on
 * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
 * collection in display order; replacing the array requires the parent's expected_version.
 * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
 * one.
 */
export type TaxIdentityPatch = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255. */
    "legal_name"?: string | null;
    /**
     * Shape $ (Value): {@link AddressRequest} or null. Replaced as a whole: send every field you
     * want to keep. Shape $.anyOf[1] (Value): {@link AddressRequest}. A postal address you supply
     * when creating or updating a customer, invoice, fulfillment, or delivery selection. Send null
     * for `line2` to clear it. Shape $.anyOf[2] (Value): null.
     */
    "registered_address"?: ((AddressRequest) | (null));
    /**
     * Shape $ (Value): Array of {@link DocumentTaxID}. maxItems: 20. Shape $[] (Value): {@link
     * DocumentTaxID}. A tax identifier printed on documents, with its country, optional region,
     * identifier type, and value. Flint does not verify the value.
     */
    "tax_ids"?: Array<DocumentTaxID>;
};
/**
 * Shape $ (Value): {@link TaxIdentityPatchInput}. Merchant-provided legal identity displayed on
 * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
 * collection in display order; replacing the array requires the parent's expected_version.
 * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
 * one.
 */
export type TaxIdentityPatchInput = {
    /** Shape $ (Value): string or null. Send null to clear it. minLength: 1. maxLength: 255. */
    "legal_name"?: string | null;
    /**
     * Shape $ (Value): {@link AddressRequestInput} or null. Replaced as a whole: send every field
     * you want to keep. Shape $.anyOf[1] (Value): {@link AddressRequestInput}. A postal address
     * you supply when creating or updating a customer, invoice, fulfillment, or delivery
     * selection. Send null for `line2` to clear it. Shape $.anyOf[2] (Value): null.
     */
    "registered_address"?: ((AddressRequestInput) | (null));
    /**
     * Shape $ (Value): Array of {@link DocumentTaxIDInput}. maxItems: 20. Shape $[] (Value):
     * {@link DocumentTaxIDInput}. A tax identifier printed on documents, with its country,
     * optional region, identifier type, and value. Flint does not verify the value.
     */
    "tax_ids"?: Array<DocumentTaxIDInput>;
};
/**
 * Shape $ (Value): {@link TaxIdentityPatchInput}. Merchant-provided legal identity displayed on
 * invoices and credit notes. Does not verify IDs or change tax treatment. Tax IDs are an owned
 * collection in display order; replacing the array requires the parent's expected_version.
 * Existing entries retain their document_tax_id; omit an entry to remove it, or omit its ID to add
 * one.
 */
export type TaxIdentityRequestInput = TaxIdentityPatchInput;
/**
 * Shape $ (Value): {@link TaxJurisdiction}. A taxing jurisdiction with its level, such as state or
 * city, name, state, and country.
 */
export type TaxJurisdiction = {
    /**
     * Shape $ (Value): string. Stable opaque Flint jurisdiction key used for equality and report
     * grouping. minLength: 1.
     */
    "code": string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$.
     */
    "country": string;
    /** Shape $ (Value): string.  Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district" | (string & {});
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "state": string;
};
/**
 * Shape $ (Value): {@link TaxJurisdictionInput}. A taxing jurisdiction with its level, such as
 * state or city, name, state, and country.
 */
export type TaxJurisdictionInput = {
    /**
     * Shape $ (Value): string. Stable opaque Flint jurisdiction key used for equality and report
     * grouping. minLength: 1.
     */
    "code": string;
    /**
     * Shape $ (Value): string. ISO 3166-1 alpha-2 country code. minLength: 2. maxLength: 2.
     * pattern: ^[A-Z]{2}$.
     */
    "country": string;
    /** Shape $ (Value): string.  Value enum: "state", "county", "city", "district". */
    "level": "state" | "county" | "city" | "district";
    /** Shape $ (Value): string. minLength: 1. */
    "name": string;
    /** Shape $ (Value): string. minLength: 1. */
    "state": string;
};
/**
 * Shape $ (Value): {@link TaxSettings}. Tax settings: whether tax is calculated by default and the
 * default tax categories for line items and delivery charges.
 */
export type TaxSettings = {
    /**
     * Shape $ (Value): string or null. Charge category inherited by delivery methods that omit
     * charge_tax_category. Null derives the category from the method type. Value enum:
     * "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Shape $ (Value): boolean. Taxability inherited by delivery methods that omit taxable.
     * Defaults to true because Flint cannot yet derive delivery-charge taxability from category
     * and jurisdiction alone.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether new checkouts and orders calculate tax by default. This
     * does not decide whether an individual line item or delivery charge is taxable.
     */
    "default_enabled"?: boolean;
    /**
     * Shape $ (Value): string. Flint line-item tax category. Value enum: "general",
     * "physical_goods", "digital_goods", "software", "saas", "services", "professional_services",
     * "food", "prepared_food", "clothing", "medical_goods", "admission".
     */
    "default_line_item_tax_category"?: "general"
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
};
/**
 * Shape $ (Value): {@link TaxSettingsRequest}. Tax settings to change when updating settings. Send
 * null for a category to clear it.
 */
export type TaxSettingsRequest = {
    /**
     * Shape $ (Value): string or null. Charge category inherited by delivery methods that omit
     * charge_tax_category. Null derives the category from the method type. Send null to clear it.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null | (string & {}) | null;
    /**
     * Shape $ (Value): boolean. Taxability inherited by delivery methods that omit taxable.
     * Defaults to true because Flint cannot yet derive delivery-charge taxability from category
     * and jurisdiction alone.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether new checkouts and orders calculate tax by default. This
     * does not decide whether an individual line item or delivery charge is taxable.
     */
    "default_enabled"?: boolean;
    /**
     * Shape $ (Value): string or null. Flint line-item tax category. Send null to clear it. Value
     * enum: "general", "physical_goods", "digital_goods", "software", "saas", "services",
     * "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission",
     * null.
     */
    "default_line_item_tax_category"?: "general"
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
        | null
        | (string & {})
        | null;
};
/**
 * Shape $ (Value): {@link TaxSettingsRequestInput}. Tax settings to change when updating settings.
 * Send null for a category to clear it.
 */
export type TaxSettingsRequestInput = {
    /**
     * Shape $ (Value): string or null. Charge category inherited by delivery methods that omit
     * charge_tax_category. Null derives the category from the method type. Send null to clear it.
     * Value enum: "service_fee", "shipping", "delivery", "handling", "surcharge", null.
     */
    "default_delivery_tax_category"?: "service_fee" | "shipping" | "delivery" | "handling" | "surcharge" | null;
    /**
     * Shape $ (Value): boolean. Taxability inherited by delivery methods that omit taxable.
     * Defaults to true because Flint cannot yet derive delivery-charge taxability from category
     * and jurisdiction alone.
     */
    "default_delivery_taxable"?: boolean;
    /**
     * Shape $ (Value): boolean. Whether new checkouts and orders calculate tax by default. This
     * does not decide whether an individual line item or delivery charge is taxable.
     */
    "default_enabled"?: boolean;
    /**
     * Shape $ (Value): string or null. Flint line-item tax category. Send null to clear it. Value
     * enum: "general", "physical_goods", "digital_goods", "software", "saas", "services",
     * "professional_services", "food", "prepared_food", "clothing", "medical_goods", "admission",
     * null.
     */
    "default_line_item_tax_category"?: "general"
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
        | null;
};

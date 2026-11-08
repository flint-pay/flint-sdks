import type { DimensionsInput, Dimensions } from './types-20.js';
import type { MetadataRequestInput, MetadataMap, MoneyValue, MerchantWebhookEnvelope } from './types-35.js';
import type { WeightInput, Weight } from './types-62.js';
import type {
    SinglePackageCreateInputCreated,
    SinglePackageCreateInputShipped,
    SinglePackageCreateInputCreatedInput
} from './types-53.js';
import type { ConfigurationVersionRequestInput } from './types-6.js';
import type { BuyerAction } from './types-1.js';
import type { ExpandedCustomerSummary, ExpandedPaymentMethodSummary, ExpandedSubscriptionPlanSummary } from './types-21.js';
import type { PaymentErrorSummary } from './types-41.js';
import type {
    SubscriptionIntervalOption,
    SubscriptionInventoryWait,
    SubscriptionLineItem,
    SubscriptionDeliveryMethodSummary
} from './types-55.js';
import type { SubscriptionPromotion, SubscriptionServiceLocation, SubscriptionSnapshotMetrics } from './types-56.js';
import type { SubscriptionUpcomingDeliveryHold, SubscriptionWindowMetrics } from './types-57.js';
import type { PartnerWebhookEnvelope } from './types-40.js';
import type { ResponseMeta } from './types-48.js';
import type { DeliveryRecipientResource } from './types-19.js';
import type { Address, AddressRequestInput } from './types-0.js';
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateInputShippedInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: DimensionsInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "shipped".
     */
    "status": "shipped";
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: WeightInput;
})
    & (({
    "return_line_items"?: never;
}));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequest = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress" | (string & {});
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: Dimensions;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataMap;
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped" | (string & {});
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: Weight;
})
    & ((Exclude<SinglePackageCreateInputCreated & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShipped & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * The single package created with a shipment fulfillment. It receives the submitted fulfillment
 * line quantities. Set status to created or shipped; items and return_line_items are not accepted.
 */
export type SinglePackageCreateRequestInput = ({
    /**
     * Controls buyer email handling. Omit or use send to send when recipient, template, and
     * deduplication rules allow it. Use suppress when another system owns buyer messaging. Value
     * enum: "send", "suppress".
     */
    "buyer_notification_behavior"?: "send" | "suppress";
    /** minLength: 1. */
    "carrier"?: string;
    /** Package or item dimensions as `length`, `width`, and `height` in the given `unit`. */
    "dimensions"?: DimensionsInput;
    /**
     * When the carrier or merchant expects this package to arrive. Past dates are allowed. Send
     * null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time.
     * minLength: 1.
     */
    "expected_delivery_at"?: string | globalThis.Date | null;
    /**
     * Caller-owned identifier for this resource in an external system. Requires external_system.
     * External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * maxLength: 255.
     */
    "external_reference_id"?: string;
    /**
     * Name of the external system that external_reference_id belongs to. External references are
     * not unique. Use Idempotency-Key for retries. minLength: 1.
     */
    "external_system"?: string;
    /**
     * HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require
     * external_system for provenance. Flint does not host the label file. minLength: 1.
     */
    "label_url"?: string;
    /**
     * Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved
     * for Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50.
     */
    "metadata"?: MetadataRequestInput;
    /** minLength: 1. */
    "service_code"?: string;
    /**
     * Package handoff time. Defaults to request time. Only allowed with status shipped. Format:
     * date-time. minLength: 1.
     */
    "shipped_at"?: string | globalThis.Date;
    /**
     * Outbound packages can start as created or shipped. Return packages must start as created,
     * omit items, and include return_line_items. Use mark_shipped after the buyer hands over the
     * return package. Value enum: "created", "shipped".
     */
    "status": "created" | "shipped";
    /** minLength: 1. */
    "status_reason"?: string;
    /** minLength: 1. */
    "tracking_number"?: string;
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. */
    "tracking_url"?: string;
    /**
     * A weight value in grams, kilograms, ounces, or pounds, used in delivery profile
     * configuration.
     */
    "weight"?: WeightInput;
})
    & ((Exclude<SinglePackageCreateInputCreatedInput & object, readonly unknown[]>)
    | (Exclude<SinglePackageCreateInputShippedInput & object, readonly unknown[]>));
/** The request body for: Skip subscription cycle. */
export type SkipMeSubscriptionCycleRequestInput = ConfigurationVersionRequestInput;
/** The request body for: Skip subscription cycle. */
export type SkipSubscriptionCycleRequest = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Flint's skip
     * email to the buyer says the buyer skipped for buyer, and that the store skipped otherwise.
     * Default: "merchant". Value enum: "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration" | (string & {});
};
/** The request body for: Skip subscription cycle. */
export type SkipSubscriptionCycleRequestInput = {
    /** Format: uint64. minimum: 1. */
    "expected_version"?: number;
    /**
     * Who asked for the skip: buyer, merchant, or integration. Defaults to merchant. Flint's skip
     * email to the buyer says the buyer skipped for buyer, and that the store skipped otherwise.
     * Default: "merchant". Value enum: "buyer", "merchant", "integration".
     */
    "initiated_by"?: "buyer" | "merchant" | "integration";
};
/**
 * One-time client authority for the named Stripe object. This payload always names the Stripe.js
 * call and carries its client secret.
 */
export type StripeClientAuthority = {
    /** Stripe client secret for the named PaymentIntent or SetupIntent. */
    "client_secret": string;
    /**
     * Stripe.js operation to perform now. confirm_setup applies to client_setup. Standalone
     * PaymentIntents use payment_collection plus server confirmation instead of initial
     * confirm_payment authority. Value enum: "confirm_payment", "confirm_setup".
     */
    "stripe_js_call": "confirm_payment" | "confirm_setup" | (string & {});
};
/**
 * Stripe.js setup authority returned while saving a payment method. Follow its stripe_js_call now.
 * setup_collection is guidance instead and never carries a secret.
 */
export type StripeClientSetup = {
    /** Stripe.js initialization context and SetupIntent setup authority. */
    "stripe"?: StripeClientSetupStripe;
};
/** Stripe.js initialization context and SetupIntent setup authority. */
export type StripeClientSetupStripe = {
    /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. */
    "account_id"?: string;
    /**
     * Stripe publishable key for the active Flint payment mode; use this with account_id when
     * loading Stripe.js.
     */
    "publishable_key"?: string;
    /**
     * One-time client authority for the named Stripe object. This payload always names the
     * Stripe.js call and carries its client secret.
     */
    "setup_intent"?: StripeClientAuthority;
};
/**
 * Stripe.js initialization context plus one flow-specific authority object. Exactly one of
 * payment_intent or setup_intent is present.
 */
export type StripePaymentClientAction = {
    /** Stripe connected account ID to pass as stripeAccount when initializing Stripe.js. */
    "account_id": string;
    /**
     * PaymentIntent authority for an order payment authentication action. The client action for a
     * Stripe payment intent: the client secret to pass to Stripe.js `handleNextAction`.
     */
    "payment_intent"?: StripeSetupIntentClientAction;
    /**
     * Stripe publishable key for the active Flint payment mode; use this with account_id when
     * loading Stripe.js.
     */
    "publishable_key": string;
    /**
     * SetupIntent authority for a saved-payment-method authentication action. The client action
     * for a Stripe setup intent: the client secret to pass to Stripe.js `handleNextAction`.
     */
    "setup_intent"?: StripeSetupIntentClientAction;
};
/**
 * The client action for a Stripe setup intent: the client secret to pass to Stripe.js
 * `handleNextAction`.
 */
export type StripeSetupIntentClientAction = {
    /** SetupIntent client secret to pass to Stripe.js handleNextAction. */
    "client_secret": string;
    /**
     * Stripe.js operation to perform. Today this is handle_next_action. Value enum:
     * "handle_next_action".
     */
    "stripe_js_call": "handle_next_action" | (string & {});
};
/**
 * The subscription offer and billing interval an order line was bought under, with the recurring
 * amount.
 */
export type SubscribedLine = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count": number;
    /**
     * Line amount for the first renewal, including modifiers and recurring discounts, before
     * shipping and tax. Signup-only discounts are excluded. Monetary amount represented as integer
     * minor units plus an ISO 4217 currency code.
     */
    "recurring_amount_money"?: MoneyValue;
    "subscription_offer_id": string;
};
/**
 * Makes an order line a subscription purchase, with the subscription offer and billing interval.
 */
export type SubscribedLineRequest = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /** Active subscription offer for this catalog variant. minLength: 1. */
    "subscription_offer_id": string;
};
/**
 * Makes an order line a subscription purchase, with the subscription offer and billing interval.
 */
export type SubscribedLineRequestInput = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count": number;
    /** Active subscription offer for this catalog variant. minLength: 1. */
    "subscription_offer_id": string;
};
/** A customer's recurring purchase. */
export type Subscription = {
    /**
     * True while an active or trialing subscription on an external billing schedule has no next
     * billing date.
     */
    "awaiting_billing_schedule"?: boolean;
    /**
     * UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned
     * schedules. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /**
     * How often the subscription bills now. Read with billing_interval_count: monthly with a count
     * of 3 bills quarterly. A change applies from the next renewal that has not been paid;
     * next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /**
     * Number of billing_interval units between charges. Changes with billing_interval. Format:
     * int32.
     */
    "billing_interval_count": number;
    /**
     * maxItems: 12. uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing
     * interval, such as every 2 months, offered by a subscription plan.
     */
    "billing_interval_options"?: Array<SubscriptionIntervalOption>;
    /**
     * Who supplies billing dates: flint advances the schedule after each paid renewal; external
     * uses dates you supply. Change it with billing_schedule on PATCH
     * /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
     */
    "billing_schedule_owner": "flint" | "external" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "billing_schedule_waiting_started_at"?: string;
    /**
     * What the buyer can do with the subscription, in this order: cancel, pause, resume,
     * reactivate, update_payment_method, retry_payment, update_delivery, skip,
     * update_billing_interval, update_quantity, swap_items, then renew, under the store's buyer
     * policy. The available cancel and pause actions carry the choices they accept. A buyer's read
     * or change through a customer session on /v1/me, or in Flint's buyer account, lists all
     * twelve every time; a merchant read gets an empty list. update_payment_method is required
     * while a payment is past due, due by next_retry_at when a retry is scheduled, and when the
     * card expires before next_billing_at, due by then. Example: []. [] (Value): {@link
     * BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they
     * read through /v1/me. Show the actions with is_required as what needs the buyer's attention,
     * and the first available action as the primary action on the resource's page in your account.
     */
    "buyer_actions": Array<BuyerAction>;
    /**
     * True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     */
    "cancel_at_period_end": boolean;
    /** RFC3339 timestamp. Format: date-time. */
    "canceled_at"?: string;
    /**
     * Who asked to cancel, when, and why. Present once a cancellation is requested, whether it
     * takes effect at the end of the billing period or right away. Omitted when no one asked, and
     * removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and
     * payment-related cancellations. The cancellation request behind a scheduled or completed
     * cancellation.
     */
    "cancellation_details"?: SubscriptionCancellationDetails;
    /**
     * Why the subscription is canceled or scheduled to cancel. Uses
     * cancellation_details.requested_by when recorded, payment_failed for a canceled subscription
     * without a requester, and other for a scheduled cancellation without a requester. Omitted
     * otherwise. Value enum: "buyer", "merchant", "payment_failed", "other".
     */
    "cancellation_reason"?: "buyer" | "merchant" | "payment_failed" | "other" | (string & {});
    /** Format: uint64. minimum: 0. */
    "completed_cycles": number;
    /**
     * When the recorded contract term ends. Does not move when the subscription pauses or changes
     * plan. Flint does not stop the buyer from canceling earlier. Format: date-time.
     */
    "contract_end_at"?: string;
    /**
     * When the recorded contract term started. Does not move when the subscription pauses or
     * changes plan. Format: date-time.
     */
    "contract_start_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "created_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "current_period_end_at"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "current_period_start_at"?: string;
    /**
     * Present only when `expand` includes `customer`; `null` when expanded and there is no related
     * customer. anyOf[1] (Value): {@link ExpandedCustomerSummary}. A customer's summary fields,
     * returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     */
    "customer"?: ((ExpandedCustomerSummary) | (null));
    "customer_id": string;
    /**
     * Saved delivery preference with the current delivery method display. Write responses use the
     * same display as GET: fixed shipping reflects the current method configuration, and quoted
     * shipping shows the last paid shipping amount when available. A subscription's saved delivery
     * preference: method, destination, recipient, shipping cost, and who last changed it.
     */
    "delivery"?: SubscriptionDelivery;
    /**
     * Current delivery issue that blocks collection. Mutually exclusive with
     * upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or
     * destination no longer works, and who can fix it.
     */
    "delivery_hold"?: SubscriptionDeliveryHold;
    /**
     * The fee in the recorded contract terms. Present whenever those terms include a fee. It
     * applies only to a cancellation before contract_end_at. Flint never charges it. Later plan
     * changes do not change this fee. Monetary amount represented as integer minor units plus an
     * ISO 4217 currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. */
    "external_reference_id"?: string;
    /**
     * Renewal waiting for stock. Included only in merchant responses and omitted from buyer
     * responses. Shows that a subscription renewal is waiting for inventory, with the order and
     * invoice involved and when the wait started.
     */
    "inventory_wait"?: SubscriptionInventoryWait;
    /**
     * Latest renewal payment failure, present only while status is past_due and the latest payment
     * failed. Buyer responses omit merchant remediation and sensitive decline signals. A summary
     * of why a payment attempt failed, with a normalized error code, a message, the failure time,
     * and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /**
     * What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line
     * takes that variant's current catalog price, which then stays until the line changes again.
     * [] (Value): {@link SubscriptionLineItem}. An item included in a customer's recurring
     * purchase.
     */
    "line_items": Array<SubscriptionLineItem>;
    "merchant_id"?: string;
    /**
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    /**
     * The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is
     * past_due. Format: date-time.
     */
    "missed_billing_at"?: string;
    /**
     * When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only
     * while a trialing or active subscription has a billing date and isn't set to cancel at the
     * end of its period. Absent when no renewal is scheduled: a paused subscription resumes at
     * scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and
     * retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start
     * begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule
     * awaiting a date reports awaiting_billing_schedule. Format: date-time.
     */
    "next_billing_at"?: string;
    /**
     * Recorded automatic payment retry time. Null when no retry time is available. Format:
     * date-time.
     */
    "next_retry_at": string | null;
    /**
     * ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed
     * delivery destination after preference changes and cancellation. Absent when no such renewal
     * order exists. Only renewal orders count; the signup order is not included.
     */
    "open_renewal_order_id"?: string;
    /**
     * Unpaid balance of the failed renewal order, including tax, shipping and discounts, after
     * payments and credits. Present only while status is past_due and a positive balance remains.
     * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     */
    "outstanding_money"?: MoneyValue;
    /**
     * Why the subscription is paused: merchant for a pause made with your API key or dashboard,
     * buyer for the buyer's own pause, delivery_action_required for a pause during or after a
     * delivery hold, and payment_failed when renewal payment retries ran out and your dunning
     * settings pause the subscription. Omitted when the subscription is not paused. Value enum:
     * "buyer", "delivery_action_required", "merchant", "payment_failed".
     */
    "pause_reason"?: "buyer" | "delivery_action_required" | "merchant" | "payment_failed" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "paused_at"?: string;
    /**
     * Present only when `expand` includes `payment_method`; `null` when expanded and there is no
     * related payment method. anyOf[1] (Value): {@link ExpandedPaymentMethodSummary}. A payment
     * method's summary fields, including type, status, and card details, returned when the payment
     * method is expanded. anyOf[2] (Value): null.
     */
    "payment_method"?: ((ExpandedPaymentMethodSummary) | (null));
    /** The saved payment method renewals charge. Change it with PATCH. */
    "payment_method_id": string;
    /**
     * Recurring promotions applying to the next charged cycle. Empty when none apply; signup-only
     * and exhausted promotions are excluded. [] (Value): {@link SubscriptionPromotion}. A
     * recurring promotion applied to a subscription, including its recurrence and remaining
     * discounted cycles.
     */
    "promotions": Array<SubscriptionPromotion>;
    /**
     * How many of each line the subscription bills each period, as a whole number; fractional
     * quantities are not supported. A change applies from the next renewal that has not been paid.
     * Format: int32.
     */
    "quantity": number;
    /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
    "quantity_options"?: Array<number>;
    /**
     * What one billing period's items cost before discounts, shipping, and tax: each line's price
     * with modifiers, times quantity. It changes when items, quantity, or the plan change; editing
     * the plan doesn't change it. For the next charge, use a subscription preview in next_renewal
     * mode. anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor
     * units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "recurring_subtotal_money": ((MoneyValue) | (null));
    /**
     * When Flint accepted a pending resume request. Set only while paused with a resume Flint has
     * not applied yet. Clears when Flint resumes the subscription or refuses the request. Format:
     * date-time.
     */
    "resume_requested_at": string | null;
    /**
     * When the scheduled cancellation takes effect: trial_end_at while trialing,
     * current_period_end_at while active, or next_retry_at while past_due. Null when
     * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     */
    "scheduled_cancel_at": string | null;
    /**
     * When a pause with a length (pause_duration_cycles) resumes on its own: that many billing
     * intervals after paused_at. Null when the subscription is not paused or the pause has no
     * length, such as a pause until you resume it or the pause Flint starts when a delivery hold
     * runs out. Format: date-time.
     */
    "scheduled_resume_at": string | null;
    /**
     * Omitted for a checkout session credential that doesn't act for the customer the buyer
     * verified. The address where a subscription's service is delivered, with the saved customer
     * address it came from.
     */
    "service_location"?: SubscriptionServiceLocation;
    /**
     * When a scheduled start's first billing period begins. Present only until that first payment
     * succeeds. Format: date-time.
     */
    "starts_at"?: string;
    /**
     * Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete",
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
    "subscription_id": string;
    /**
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
     * subscription plan's summary fields, including name, billing interval, currency, and status,
     * returned when the plan is expanded. anyOf[2] (Value): null.
     */
    "subscription_plan"?: ((ExpandedSubscriptionPlanSummary) | (null));
    /** Subscription plan ID. Omitted when terms_type is subscription_offer. */
    "subscription_plan_id"?: string;
    /**
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan". []
     * (Value): string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew",
     * "retry_payment", "change_plan".
     */
    "supported_actions": Array<"cancel"
        | "pause"
        | "resume"
        | "skip_cycle"
        | "renew"
        | "retry_payment"
        | "change_plan"
        | (string & {})>;
    /**
     * Terms come from the subscription plan in subscription_plan_id, or from subscription offers
     * identified on each offer line by subscription_offer_id. Value enum: "subscription_plan",
     * "subscription_offer".
     */
    "terms_type": "subscription_plan" | "subscription_offer" | (string & {});
    /**
     * ID of the test clock the subscription's customer was created on. The subscription bills at
     * the clock's time. Present only when the customer is on a test clock. Included only in
     * merchant responses and omitted from buyer responses.
     */
    "test_clock_id"?: string;
    /** RFC3339 timestamp. Format: date-time. */
    "trial_end_at"?: string;
    /**
     * Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with
     * delivery_hold. A delivery problem detected for an upcoming renewal that will hold the
     * subscription's delivery, and who can fix it.
     */
    "upcoming_delivery_hold"?: SubscriptionUpcomingDeliveryHold;
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at"?: string;
    /** Format: uint64. minimum: 0. */
    "version": number;
};
export type SubscriptionActivatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.activated";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.activated";
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
    "event_type": "subscription.activated";
});
/**
 * The `subscription.activated` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionActivatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.activated". */
    "event_type"?: "subscription.activated";
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
 * The `subscription.activated` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionActivatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.activated". */
    "event_type"?: "subscription.activated";
});
/**
 * The verification state of a subscription's delivery address: `verified`, `unverified`,
 * `needs_review`, or `unverifiable`.
 */
export type SubscriptionAddressVerification = {
    /** Value enum: "verified", "unverified", "needs_review", "unverifiable". */
    "state": "verified" | "unverified" | "needs_review" | "unverifiable" | (string & {});
};
/**
 * The half-open period [period_start_at, period_end_at) includes its start and excludes its end.
 * Amounts and payments_count use currency; customer and subscription counts span currencies.
 */
export type SubscriptionAnalytics = {
    /**
     * Currencies of subscription payments selected by succeeded activity created_at in the period,
     * plus current active and past_due billing snapshots, regardless of the currency filter. The
     * half-open period [period_start_at, period_end_at) includes its start and excludes its end.
     * Amounts and payments_count use currency; customer and subscription counts span currencies.
     * [] (Value): string.
     */
    "currencies": Array<string>;
    /**
     * ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default
     * currency. The half-open period [period_start_at, period_end_at) includes its start and
     * excludes its end. Amounts and payments_count use currency; customer and subscription counts
     * span currencies. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     */
    "currency": string;
    /**
     * Exclusive resolved end instant. Omitted or future request ends resolve to the request time
     * truncated to the second. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time.
     */
    "period_end_at": string;
    /**
     * Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. Format: date-time.
     */
    "period_start_at": string;
    /**
     * Current persisted subscription state at computation time, cached briefly. Independent of the
     * requested period end. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies. The half-open period [period_start_at, period_end_at)
     * includes its start and excludes its end. Amounts and payments_count use currency; customer
     * and subscription counts span currencies.
     */
    "snapshot_metrics": SubscriptionSnapshotMetrics;
    /**
     * Subscription creation, cancellation, and payment success metrics selected within the
     * requested period. The half-open period [period_start_at, period_end_at) includes its start
     * and excludes its end. Amounts and payments_count use currency; customer and subscription
     * counts span currencies. The half-open period [period_start_at, period_end_at) includes its
     * start and excludes its end. Amounts and payments_count use currency; customer and
     * subscription counts span currencies.
     */
    "window_metrics": SubscriptionWindowMetrics;
};
/** A response containing `SubscriptionAnalytics` data. */
export type SubscriptionAnalyticsResponse = {
    /**
     * The half-open period [period_start_at, period_end_at) includes its start and excludes its
     * end. Amounts and payments_count use currency; customer and subscription counts span
     * currencies.
     */
    "data": SubscriptionAnalytics;
    /**
     * Metadata returned with a response: the `api_version`, `trace_id`, whether an idempotent
     * request was replayed, and any warnings.
     */
    "meta"?: ResponseMeta;
    /**
     * maxLength: 128. pattern: ^req_[0-9A-HJKMNP-TV-Z]{26}$. Example:
     * "req_01KWM6WAHG3N9Q8T2V5XRZ7C4D".
     */
    "request_id": string;
};
/** The `external` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputExternal = {
    /** Value enum: "external". */
    "owner": "external" | (string & {});
};
/** The `external` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputExternalInput = {
    /** Value enum: "external". */
    "owner": "external";
};
/** The `flint` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputFlint = {
    /** Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/** The `flint` variant of `SubscriptionBillingScheduleInput`. */
export type SubscriptionBillingScheduleInputFlintInput = {
    /** Value enum: "flint". */
    "owner": "flint";
};
/** Who owns the billing schedule when creating a subscription: Flint or an external system. */
export type SubscriptionBillingScheduleRequest = ({
    /** Value enum: "flint", "external". */
    "owner": "flint" | "external" | (string & {});
})
    & ((Exclude<SubscriptionBillingScheduleInputFlint & object, readonly unknown[]>)
    | (Exclude<SubscriptionBillingScheduleInputExternal & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** Who owns the billing schedule when creating a subscription: Flint or an external system. */
export type SubscriptionBillingScheduleRequestInput = ({
    /** Value enum: "flint", "external". */
    "owner": "flint" | "external";
})
    & ((Exclude<SubscriptionBillingScheduleInputFlintInput & object, readonly unknown[]>)
    | (Exclude<SubscriptionBillingScheduleInputExternalInput & object, readonly unknown[]>));
/** The `external` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputExternal = {
    /**
     * Future date at which Flint attempts the next charge. Omit to preserve the date or send null
     * to clear it. Format: date-time. minLength: 1.
     */
    "next_billing_at"?: string | null;
    /** Value enum: "external". */
    "owner": "external" | (string & {});
};
/** The `external` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputExternalInput = {
    /**
     * Future date at which Flint attempts the next charge. Omit to preserve the date or send null
     * to clear it. Format: date-time. minLength: 1.
     */
    "next_billing_at"?: string | globalThis.Date | null;
    /** Value enum: "external". */
    "owner": "external";
};
/** The `flint` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputFlint = {
    /**
     * UTC day of the month used for monthly and yearly billing. Overrides the day inferred from a
     * moved next_billing_at. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /** Future date at which Flint attempts the next charge. Format: date-time. minLength: 1. */
    "next_billing_at": string;
    /** Value enum: "flint". */
    "owner": "flint" | (string & {});
};
/** The `flint` variant of `SubscriptionBillingScheduleUpdateInput`. */
export type SubscriptionBillingScheduleUpdateInputFlintInput = {
    /**
     * UTC day of the month used for monthly and yearly billing. Overrides the day inferred from a
     * moved next_billing_at. Format: int32. minimum: 1. maximum: 31.
     */
    "billing_anchor_day"?: number;
    /** Future date at which Flint attempts the next charge. Format: date-time. minLength: 1. */
    "next_billing_at": string | globalThis.Date;
    /** Value enum: "flint". */
    "owner": "flint";
};
/** A closed owner-specific billing schedule update. */
export type SubscriptionBillingScheduleUpdateRequest = ((SubscriptionBillingScheduleUpdateInputFlint)
    | (SubscriptionBillingScheduleUpdateInputExternal)
    | (Record<string, unknown>));
/** A closed owner-specific billing schedule update. */
export type SubscriptionBillingScheduleUpdateRequestInput = ((SubscriptionBillingScheduleUpdateInputFlintInput)
    | (SubscriptionBillingScheduleUpdateInputExternalInput));
/** The `immediate` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImmediate = {
    /** Value enum: "immediate". */
    "type": "immediate" | (string & {});
};
/** The `immediate` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImmediateInput = {
    /** Value enum: "immediate". */
    "type": "immediate";
};
/** The `imported` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImported = {
    /**
     * Number of billing cycles already charged on the previous billing system, including the
     * current imported period. The subscription's completed_cycles starts here, and the next
     * renewal's subscription_cycle is this number plus one. minimum: 0. Default: 0.
     */
    "completed_cycles"?: number;
    /**
     * Start of the already-running billing period being imported. Format: date-time. minLength: 1.
     */
    "period_started_at": string;
    /** Value enum: "imported". */
    "type": "imported" | (string & {});
};
/** The `imported` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputImportedInput = {
    /**
     * Number of billing cycles already charged on the previous billing system, including the
     * current imported period. The subscription's completed_cycles starts here, and the next
     * renewal's subscription_cycle is this number plus one. minimum: 0. Default: 0.
     */
    "completed_cycles"?: number;
    /**
     * Start of the already-running billing period being imported. Format: date-time. minLength: 1.
     */
    "period_started_at": string | globalThis.Date;
    /** Value enum: "imported". */
    "type": "imported";
};
/** The `scheduled` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputScheduled = {
    /** Future instant when the first billing period starts. Format: date-time. minLength: 1. */
    "starts_at": string;
    /** Value enum: "scheduled". */
    "type": "scheduled" | (string & {});
};
/** The `scheduled` variant of `SubscriptionBillingStartInput`. */
export type SubscriptionBillingStartInputScheduledInput = {
    /** Future instant when the first billing period starts. Format: date-time. minLength: 1. */
    "starts_at": string | globalThis.Date;
    /** Value enum: "scheduled". */
    "type": "scheduled";
};
/** How billing begins. Send exactly one closed tagged-union branch. */
export type SubscriptionBillingStartRequest = ((SubscriptionBillingStartInputImmediate)
    | (SubscriptionBillingStartInputScheduled)
    | (SubscriptionBillingStartInputImported)
    | (Record<string, unknown>));
/** How billing begins. Send exactly one closed tagged-union branch. */
export type SubscriptionBillingStartRequestInput = ((SubscriptionBillingStartInputImmediateInput)
    | (SubscriptionBillingStartInputScheduledInput)
    | (SubscriptionBillingStartInputImportedInput));
export type SubscriptionCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.canceled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.canceled";
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
    "event_type": "subscription.canceled";
});
/**
 * The `subscription.canceled` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.canceled". */
    "event_type"?: "subscription.canceled";
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
 * The `subscription.canceled` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.canceled". */
    "event_type"?: "subscription.canceled";
});
/** The cancellation request behind a scheduled or completed cancellation. */
export type SubscriptionCancellationDetails = {
    /**
     * What the requester wrote. Only merchant credentials read it; buyers never receive it.
     * Omitted when none was given, and cleared when the customer is deleted. maxLength: 500.
     */
    "comment"?: string;
    /**
     * The reason the requester chose. Omitted when none was given. Value enum: "too_expensive",
     * "missing_features", "switched_service", "unused", "customer_service", "too_complex",
     * "low_quality", "other".
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
    /** When the cancellation was requested. Format: date-time. */
    "requested_at": string;
    /**
     * buyer: the buyer, in Flint's buyer account or with a customer session. merchant: a merchant
     * credential, such as an API key or the dashboard. Value enum: "buyer", "merchant".
     */
    "requested_by": "buyer" | "merchant" | (string & {});
};
export type SubscriptionCancellationScheduledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cancellation_scheduled";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cancellation_scheduled";
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
    "event_type": "subscription.cancellation_scheduled";
});
/**
 * The `subscription.cancellation_scheduled` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionCancellationScheduledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.cancellation_scheduled". */
    "event_type"?: "subscription.cancellation_scheduled";
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
 * The `subscription.cancellation_scheduled` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type SubscriptionCancellationScheduledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.cancellation_scheduled". */
    "event_type"?: "subscription.cancellation_scheduled";
});
/** Counts of subscriptions by status: active, past due, and paused. */
export type SubscriptionCounts = {
    /** Format: int64. */
    "active": number;
    /** Format: int64. */
    "past_due": number;
    /** Format: int64. */
    "paused": number;
};
export type SubscriptionCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.created";
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
    "event_type": "subscription.created";
});
/**
 * The `subscription.created` webhook payload for the `installed_merchants` event source. Fields
 * shared by partner webhook payloads.
 */
export type SubscriptionCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.created". */
    "event_type"?: "subscription.created";
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
 * The `subscription.created` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.created". */
    "event_type"?: "subscription.created";
});
export type SubscriptionCycleSkippedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cycle_skipped";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.cycle_skipped";
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
    "event_type": "subscription.cycle_skipped";
});
/**
 * The `subscription.cycle_skipped` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionCycleSkippedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.cycle_skipped". */
    "event_type"?: "subscription.cycle_skipped";
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
 * The `subscription.cycle_skipped` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type SubscriptionCycleSkippedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.cycle_skipped". */
    "event_type"?: "subscription.cycle_skipped";
});
/**
 * A subscription's saved delivery preference: method, destination, recipient, shipping cost, and
 * who last changed it.
 */
export type SubscriptionDelivery = {
    /**
     * The verification state of a subscription's delivery address: `verified`, `unverified`,
     * `needs_review`, or `unverifiable`.
     */
    "address_verification"?: SubscriptionAddressVerification;
    /**
     * A short summary of a subscription's delivery method: name, description, type, and whether
     * its price is fixed or quoted.
     */
    "delivery_method"?: SubscriptionDeliveryMethodSummary;
    "delivery_method_id": string;
    /** Version of the subscription's saved delivery preference. Format: uint64. minimum: 0. */
    "delivery_version": number;
    /**
     * The delivery address for a subscription's future shipments, with the saved customer address
     * it came from.
     */
    "destination": SubscriptionDeliveryDestination;
    /** The person receiving a delivery selection, with optional `name`, `email`, and `phone`. */
    "recipient"?: DeliveryRecipientResource;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "shipping_money"?: MoneyValue;
    /** Value enum: "shipment", "local_delivery". */
    "type": "shipment" | "local_delivery" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "updated_at": string;
    /**
     * Who last changed the delivery preference. Omitted until the preference changes after
     * creation. Pairs with updated_at. Value enum: "buyer", "merchant", "migration".
     */
    "updated_by"?: "buyer" | "merchant" | "migration" | (string & {});
};
export type SubscriptionDeliveryActionRequiredEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_action_required";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": Subscription;
    };
    "event_type"?: "subscription.delivery_action_required";
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
    "event_type": "subscription.delivery_action_required";
});
/**
 * The `subscription.delivery_action_required` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionDeliveryActionRequiredInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.delivery_action_required". */
    "event_type"?: "subscription.delivery_action_required";
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
 * The `subscription.delivery_action_required` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type SubscriptionDeliveryActionRequiredMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**  object (Required): {@link Subscription}. A customer's recurring purchase. */
    "data"?: {
        /** A customer's recurring purchase. */
        "object": Subscription;
    };
    /** Value enum: "subscription.delivery_action_required". */
    "event_type"?: "subscription.delivery_action_required";
});
/**
 * The delivery address for a subscription's future shipments, with the saved customer address it
 * came from.
 */
export type SubscriptionDeliveryDestination = {
    /**
     * Resolved delivery address used by future shipments. anyOf[1] (Value): {@link Address}. A
     * postal address. Every address has country. Addresses Flint checked as complete (customer and
     * saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country. anyOf[2] (Value):
     * null.
     */
    "address": ((Address) | (null));
    /**
     * Display reference to the saved customer address used when this destination was written.
     * Editing that saved address does not change the subscription destination.
     */
    "customer_address_id"?: string;
};
/** The `address` variant of `SubscriptionDeliveryDestinationInput`. */
export type SubscriptionDeliveryDestinationInputAddressInput = {
    /**
     * A complete postal address. State and postal_code are required for US addresses and optional
     * for other countries. Send null or omit line2, state, and postal_code when the address has
     * none.
     */
    "address": AddressRequestInput;
    /** Value enum: "address". */
    "type": "address";
};
/** The `customer_address` variant of `SubscriptionDeliveryDestinationInput`. */
export type SubscriptionDeliveryDestinationInputCustomerAddressInput = {
    /** minLength: 1. pattern: ^caddr_[0-9A-HJKMNP-TV-Z]{26}$. */
    "customer_address_id": string;
    /** Value enum: "customer_address". */
    "type": "customer_address";
};
/** Where to deliver a subscription: a saved customer address by ID, or a new address. */
export type SubscriptionDeliveryDestinationRequestInput = ((SubscriptionDeliveryDestinationInputCustomerAddressInput)
    | (SubscriptionDeliveryDestinationInputAddressInput));
/**
 * A hold on a subscription's deliveries because its delivery method or destination no longer
 * works, and who can fix it.
 */
export type SubscriptionDeliveryHold = {
    /** RFC3339 timestamp. Format: date-time. */
    "ends_at": string;
    /** Value enum: "buyer", "merchant". */
    "fixable_by": "buyer" | "merchant" | (string & {});
    /** Value enum: "method_unavailable", "destination_not_served", "rate_unavailable". */
    "reason": "method_unavailable" | "destination_not_served" | "rate_unavailable" | (string & {});
    /** RFC3339 timestamp. Format: date-time. */
    "started_at": string;
};

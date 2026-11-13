import type { BuyerAction, BundleComponent } from './types-1.js';
import type {
    ExpandedCustomerSummary,
    ExpandedPaymentMethodSummary,
    ExpandedSubscriptionPlanSummary,
    ErrorDetail
} from './types-24.js';
import type { MerchantWebhookEnvelope, MetadataMap } from './types-37.js';
import type { MoneyValue, MoneyValueInput } from './types-38.js';
import type { PaymentErrorSummary, PartnerWebhookEnvelope } from './types-44.js';
import type {
    Subscription,
    SubscriptionCancellationDetails,
    SubscriptionDelivery,
    SubscriptionDeliveryHold,
    SubscriptionChargeEstimate,
    SubscriptionAddressVerification,
    SubscriptionCreatePreview
} from './types-60.js';
import type {
    SubscriptionEndAfter,
    SubscriptionGiftRecipient,
    SubscriptionIntervalOption,
    SubscriptionInventoryWait,
    SubscriptionLineItem,
    SubscriptionDeliveryMethodCounts,
    SubscriptionEndAfterCycles,
    SubscriptionDeliveryOption,
    SubscriptionDeliveryMethodImpact
} from './types-61.js';
import type {
    SubscriptionScheduledPlanChange,
    SubscriptionServiceLocation,
    SubscriptionTax,
    SubscriptionUpcomingDeliveryHold,
    SubscriptionQuantityChangePreview,
    SubscriptionRenewalPreview
} from './types-63.js';
import type { ResponseMeta } from './types-54.js';
import type { ImageAttachment, Image } from './types-27.js';
import type { InventoryRoutingSource } from './types-30.js';
import type { Order } from './types-39.js';
import type { OrderPaymentAttempt } from './types-41.js';
import type { CategoryReference } from './types-5.js';
import type {
    OrderLineItemModifier,
    OrderLineItemTax,
    OrderLineItemModifierRequest,
    OrderLineItemModifierRequestModelInput,
    OrderLineItemTaxRequestInput
} from './types-40.js';
import type { SelectedProductOption } from './types-59.js';
import type { InputValue } from '../runtime.js';
import type { CreateSubscriptionPlanRequestInput, CreateSubscriptionPreviewRequestInput } from './types-13.js';
import type { DisputesAcceptParams } from './types-23.js';
import type { UpdateSubscriptionPlanRequestInput } from './types-68.js';
import type { Address } from './types-0.js';
import type { PromotionRecurrence, PromotionRefRequest, PromotionRefRequestInput } from './types-51.js';
/**
 * The `subscription.paused` webhook payload for the `merchant` event source. Fields shared by
 * merchant webhook payloads.
 */
export type SubscriptionPausedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * frozen from the plan or shared by the subscription offers. Line prices are per delivery.
     * Each option charges for all deliveries in its period. Changing the interval does not change
     * the per-delivery price. maxItems: 12. uniqueItems: true. object.billing_interval_options[]
     * (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a subscription
     * plan or offer. Every option bills the same line prices once per period; prices are not
     * scaled by the interval. For a different price per interval, create separate plans.
     * object.billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
     * the schedule after each paid renewal; external uses dates you supply. Change it with
     * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
     * "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached".
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
     * from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery.
     * Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
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
     * int32. object.quantity_options (Optional): Array of integer. maxItems: 10. uniqueItems:
     * true. object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
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
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
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
         * Billing interval and count pairs frozen from the plan or shared by the subscription
         * offers. Line prices are per delivery. Each option charges for all deliveries in its
         * period. Changing the interval does not change the per-delivery price. maxItems: 12.
         * uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer.
         * Every option bills the same line prices once per period; prices are not scaled by the
         * interval. For a different price per interval, create separate plans.
         * billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
         * the schedule after each paid renewal; external uses dates you supply. Change it with
         * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached". completed_cycles (Required): integer.
         * Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. Format: uint64. minimum: 0. contract_end_at (Optional): string. When
         * the recorded contract term ends. Does not move when the subscription pauses or changes
         * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". contract_start_at (Optional): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_start_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24. delivery
         * (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the current
         * delivery method display. Write responses use the same display as GET: fixed shipping
         * reflects the current method configuration, and quoted shipping shows the last paid
         * shipping amount when available. A subscription's saved delivery preference: method,
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
         * (Optional): Array of integer. maxItems: 10. uniqueItems: true. quantity_options[]
         * (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money (Required): {@link
         * MoneyValue} or null. What one billing period's items cost before discounts, shipping,
         * and tax: each line's price with modifiers, times quantity. It changes when items,
         * quantity, or the plan change; editing the plan doesn't change it. For the next charge,
         * use a subscription preview in next_renewal mode. recurring_subtotal_money.anyOf[1]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required):
         * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period
         * starts with deliveries_per_period minus one. When delivery_hold is present and this
         * count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null.
         * When Flint accepted a pending resume request. Set only while paused with a resume Flint
         * has not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required):
         * string or null. When the scheduled cancellation takes effect: trial_end_at while
         * trialing, current_period_end_at while active, or next_retry_at while past_due. Paid
         * deliveries extend it to the last paid delivery when it is later. Null when
         * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Required): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "retry_payment", "change_plan", "change_quantity". supported_actions[] (Value):
         * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". tax (Required): {@link SubscriptionTax} or null. The
         * tax the subscription's renewal, setup fee and plan change orders use. `null` when they
         * follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned
         * only to merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value):
         * {@link SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change
         * orders use. Returned only to merchant credentials; omitted for buyer credentials.
         * tax.anyOf[2] (Value): null. terms_type (Required): string. Terms come from the
         * subscription plan in subscription_plan_id, or from subscription offers identified on
         * each offer line by subscription_offer_id. Value enum: "subscription_plan",
         * "subscription_offer". test_clock_id (Optional): string. ID of the test clock the
         * subscription's customer was created on. The subscription bills at the clock's time.
         * Present only when the customer is on a test clock. Included only in merchant responses
         * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
         * trial_end_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next renewal at
         * renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an
         * upcoming renewal that will hold the subscription's delivery, and who can fix it.
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0.
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
             * Billing interval and count pairs frozen from the plan or shared by the subscription
             * offers. Line prices are per delivery. Each option charges for all deliveries in its
             * period. Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence
             * offered by a subscription plan or offer. Every option bills the same line prices
             * once per period; prices are not scaled by the interval. For a different price per
             * interval, create separate plans.
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
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
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
             * Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
             * delivery cadence is set. Line prices are per delivery. Format: int32. minimum: 1.
             * maximum: 24.
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
            /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
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
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
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
    /** Value enum: "subscription.paused". */
    "event_type"?: "subscription.paused";
});
/** An attempt to collect a subscription's overdue payment. */
export type SubscriptionPaymentRetry = {
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "completed_at"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    "idempotency_key": string;
    /**
     * A summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation.
     */
    "last_payment_error"?: PaymentErrorSummary;
    /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
    "order_id"?: string;
    /** Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
    "order_payment_attempt_id"?: string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "started_at"?: string;
    /** Value enum: "pending", "processing", "succeeded", "failed". */
    "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
    /** Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
    "subscription_id": string;
    /**
     * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
     * "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     */
    "subscription_payment_retry_id": string;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
};
export type SubscriptionPaymentRetryCreatedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "completed_at"?: string;
            "created_at": string;
            "idempotency_key": string;
            "last_payment_error"?: PaymentErrorSummary;
            "order_id"?: string;
            "order_payment_attempt_id"?: string;
            "started_at"?: string;
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            "subscription_id": string;
            "subscription_payment_retry_id": string;
            "updated_at": string;
        };
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription_payment_retry.created";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "completed_at"?: string;
            "created_at": string;
            "idempotency_key": string;
            "last_payment_error"?: PaymentErrorSummary;
            "order_id"?: string;
            "order_payment_attempt_id"?: string;
            "started_at"?: string;
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            "subscription_id": string;
            "subscription_payment_retry_id": string;
            "updated_at": string;
        };
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription_payment_retry.created";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription_payment_retry.created";
});
/**
 * The `subscription_payment_retry.created` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentRetryCreatedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.idempotency_key
     * (Required): string. object.last_payment_error (Optional): {@link PaymentErrorSummary}. A
     * summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation. object.order_id (Optional): string. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_payment_attempt_id (Optional): string.
     * Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Value enum: "pending", "processing", "succeeded", "failed". object.subscription_id
     * (Required): string. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_payment_retry_id (Required): string. Unique identifier for this
     * subscription payment retry, prefixed `spr_`. Example: "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". idempotency_key (Required): string.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. A summary of why a payment
         * attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. order_id (Optional): string. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_payment_attempt_id (Optional): string. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * started_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "pending", "processing",
         * "succeeded", "failed". subscription_id (Required): string. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_payment_retry_id (Required): string.
         * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
         * "spr_01KEZF7C00YXMSBXGYEMYDD0AA". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            "idempotency_key": string;
            /**
             * A summary of why a payment attempt failed, with a normalized error code, a message,
             * the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id"?: string;
            /** Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
            "order_payment_attempt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /** Value enum: "pending", "processing", "succeeded", "failed". */
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            /** Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
             * "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
             */
            "subscription_payment_retry_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription_payment_retry.created". */
    "event_type"?: "subscription_payment_retry.created";
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
 * The `subscription_payment_retry.created` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionPaymentRetryCreatedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.idempotency_key
     * (Required): string. object.last_payment_error (Optional): {@link PaymentErrorSummary}. A
     * summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation. object.order_id (Optional): string. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_payment_attempt_id (Optional): string.
     * Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Value enum: "pending", "processing", "succeeded", "failed". object.subscription_id
     * (Required): string. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_payment_retry_id (Required): string. Unique identifier for this
     * subscription payment retry, prefixed `spr_`. Example: "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z".
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". idempotency_key (Required): string.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. A summary of why a payment
         * attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. order_id (Optional): string. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_payment_attempt_id (Optional): string. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * started_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "pending", "processing",
         * "succeeded", "failed". subscription_id (Required): string. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_payment_retry_id (Required): string.
         * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
         * "spr_01KEZF7C00YXMSBXGYEMYDD0AA". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            "idempotency_key": string;
            /**
             * A summary of why a payment attempt failed, with a normalized error code, a message,
             * the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id"?: string;
            /** Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
            "order_payment_attempt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /** Value enum: "pending", "processing", "succeeded", "failed". */
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            /** Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
             * "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
             */
            "subscription_payment_retry_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription_payment_retry.created". */
    "event_type"?: "subscription_payment_retry.created";
});
export type SubscriptionPaymentRetryFailedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "completed_at"?: string;
            "created_at": string;
            "idempotency_key": string;
            "last_payment_error"?: PaymentErrorSummary;
            "order_id"?: string;
            "order_payment_attempt_id"?: string;
            "started_at"?: string;
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            "subscription_id": string;
            "subscription_payment_retry_id": string;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<SubscriptionPaymentRetry>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription_payment_retry.failed";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "completed_at"?: string;
            "created_at": string;
            "idempotency_key": string;
            "last_payment_error"?: PaymentErrorSummary;
            "order_id"?: string;
            "order_payment_attempt_id"?: string;
            "started_at"?: string;
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            "subscription_id": string;
            "subscription_payment_retry_id": string;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<SubscriptionPaymentRetry>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription_payment_retry.failed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription_payment_retry.failed";
});
/**
 * The `subscription_payment_retry.failed` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentRetryFailedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.idempotency_key
     * (Required): string. object.last_payment_error (Optional): {@link PaymentErrorSummary}. A
     * summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation. object.order_id (Optional): string. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_payment_attempt_id (Optional): string.
     * Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Value enum: "pending", "processing", "succeeded", "failed". object.subscription_id
     * (Required): string. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_payment_retry_id (Required): string. Unique identifier for this
     * subscription payment retry, prefixed `spr_`. Example: "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". idempotency_key (Required): string.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. A summary of why a payment
         * attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. order_id (Optional): string. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_payment_attempt_id (Optional): string. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * started_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "pending", "processing",
         * "succeeded", "failed". subscription_id (Required): string. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_payment_retry_id (Required): string.
         * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
         * "spr_01KEZF7C00YXMSBXGYEMYDD0AA". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            "idempotency_key": string;
            /**
             * A summary of why a payment attempt failed, with a normalized error code, a message,
             * the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id"?: string;
            /** Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
            "order_payment_attempt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /** Value enum: "pending", "processing", "succeeded", "failed". */
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            /** Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
             * "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
             */
            "subscription_payment_retry_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<SubscriptionPaymentRetry>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription_payment_retry.failed". */
    "event_type"?: "subscription_payment_retry.failed";
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
 * The `subscription_payment_retry.failed` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionPaymentRetryFailedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.idempotency_key
     * (Required): string. object.last_payment_error (Optional): {@link PaymentErrorSummary}. A
     * summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation. object.order_id (Optional): string. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_payment_attempt_id (Optional): string.
     * Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Value enum: "pending", "processing", "succeeded", "failed". object.subscription_id
     * (Required): string. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_payment_retry_id (Required): string. Unique identifier for this
     * subscription payment retry, prefixed `spr_`. Example: "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". idempotency_key (Required): string.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. A summary of why a payment
         * attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. order_id (Optional): string. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_payment_attempt_id (Optional): string. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * started_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "pending", "processing",
         * "succeeded", "failed". subscription_id (Required): string. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_payment_retry_id (Required): string.
         * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
         * "spr_01KEZF7C00YXMSBXGYEMYDD0AA". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            "idempotency_key": string;
            /**
             * A summary of why a payment attempt failed, with a normalized error code, a message,
             * the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id"?: string;
            /** Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
            "order_payment_attempt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /** Value enum: "pending", "processing", "succeeded", "failed". */
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            /** Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
             * "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
             */
            "subscription_payment_retry_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<SubscriptionPaymentRetry>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription_payment_retry.failed". */
    "event_type"?: "subscription_payment_retry.failed";
});
/** A page of `SubscriptionPaymentRetry` objects. */
export type SubscriptionPaymentRetryListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * SubscriptionPaymentRetry}. An attempt to collect a subscription's overdue payment.
     */
    "data": Array<SubscriptionPaymentRetry>;
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
/** A response containing `SubscriptionPaymentRetry` data. */
export type SubscriptionPaymentRetryResponse = {
    /**
     * Resource, collection, or operation result returned by this request. An attempt to collect a
     * subscription's overdue payment.
     */
    "data": SubscriptionPaymentRetry;
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
export type SubscriptionPaymentRetrySucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "completed_at"?: string;
            "created_at": string;
            "idempotency_key": string;
            "last_payment_error"?: PaymentErrorSummary;
            "order_id"?: string;
            "order_payment_attempt_id"?: string;
            "started_at"?: string;
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            "subscription_id": string;
            "subscription_payment_retry_id": string;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<SubscriptionPaymentRetry>;
    };
    "event_source"?: ("merchant") & ("merchant");
    "event_type"?: "subscription_payment_retry.succeeded";
}))
    | ((Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "completed_at"?: string;
            "created_at": string;
            "idempotency_key": string;
            "last_payment_error"?: PaymentErrorSummary;
            "order_id"?: string;
            "order_payment_attempt_id"?: string;
            "started_at"?: string;
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            "subscription_id": string;
            "subscription_payment_retry_id": string;
            "updated_at": string;
        };
        "previous_attributes"?: Partial<SubscriptionPaymentRetry>;
    };
    "event_source"?: ("installed_merchants") & ("installed_merchants");
    "event_type"?: "subscription_payment_retry.succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription_payment_retry.succeeded";
});
/**
 * The `subscription_payment_retry.succeeded` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentRetrySucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.idempotency_key
     * (Required): string. object.last_payment_error (Optional): {@link PaymentErrorSummary}. A
     * summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation. object.order_id (Optional): string. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_payment_attempt_id (Optional): string.
     * Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Value enum: "pending", "processing", "succeeded", "failed". object.subscription_id
     * (Required): string. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_payment_retry_id (Required): string. Unique identifier for this
     * subscription payment retry, prefixed `spr_`. Example: "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". idempotency_key (Required): string.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. A summary of why a payment
         * attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. order_id (Optional): string. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_payment_attempt_id (Optional): string. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * started_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "pending", "processing",
         * "succeeded", "failed". subscription_id (Required): string. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_payment_retry_id (Required): string.
         * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
         * "spr_01KEZF7C00YXMSBXGYEMYDD0AA". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            "idempotency_key": string;
            /**
             * A summary of why a payment attempt failed, with a normalized error code, a message,
             * the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id"?: string;
            /** Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
            "order_payment_attempt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /** Value enum: "pending", "processing", "succeeded", "failed". */
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            /** Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
             * "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
             */
            "subscription_payment_retry_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<SubscriptionPaymentRetry>;
    };
    /** Value enum: "installed_merchants". */
    "event_source"?: "installed_merchants" | (string & {});
    /** Value enum: "subscription_payment_retry.succeeded". */
    "event_type"?: "subscription_payment_retry.succeeded";
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
 * The `subscription_payment_retry.succeeded` webhook payload for the `merchant` event source.
 * Fields shared by merchant webhook payloads.
 */
export type SubscriptionPaymentRetrySucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    /**
     *  object (Required): object. The resource snapshot, without expansions. Webhooks omit no
     * additional fields. object.completed_at (Optional): string. RFC3339 timestamp. Format:
     * date-time. Example: "2026-08-02T16:00:00Z". object.created_at (Required): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.idempotency_key
     * (Required): string. object.last_payment_error (Optional): {@link PaymentErrorSummary}. A
     * summary of why a payment attempt failed, with a normalized error code, a message, the
     * failure time, and remediation. object.order_id (Optional): string. Example:
     * "ord_01KEZF7C0054GQKJ142A8X367A". object.order_payment_attempt_id (Optional): string.
     * Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". object.started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.status (Required):
     * string. Value enum: "pending", "processing", "succeeded", "failed". object.subscription_id
     * (Required): string. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_payment_retry_id (Required): string. Unique identifier for this
     * subscription payment retry, prefixed `spr_`. Example: "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
     * object.updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". previous_attributes (Optional): object. Previous values of changed
     * top-level fields in data.object, at this delivery's API version. Nested changes include the
     * whole previous top-level value. A value is null when the field was absent before the change.
     * Omitted when Flint did not record the previous state, including synthetic test events.
     */
    "data"?: {
        /**
         * The resource snapshot, without expansions. Webhooks omit no additional fields.
         * completed_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339 timestamp. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". idempotency_key (Required): string.
         * last_payment_error (Optional): {@link PaymentErrorSummary}. A summary of why a payment
         * attempt failed, with a normalized error code, a message, the failure time, and
         * remediation. order_id (Optional): string. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
         * order_payment_attempt_id (Optional): string. Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D".
         * started_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". status (Required): string. Value enum: "pending", "processing",
         * "succeeded", "failed". subscription_id (Required): string. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_payment_retry_id (Required): string.
         * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
         * "spr_01KEZF7C00YXMSBXGYEMYDD0AA". updated_at (Required): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z".
         */
        "object": {
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "completed_at"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "created_at": string;
            "idempotency_key": string;
            /**
             * A summary of why a payment attempt failed, with a normalized error code, a message,
             * the failure time, and remediation.
             */
            "last_payment_error"?: PaymentErrorSummary;
            /** Example: "ord_01KEZF7C0054GQKJ142A8X367A". */
            "order_id"?: string;
            /** Example: "opat_01KEZF7C00B5PW9F2R8A4YSH5D". */
            "order_payment_attempt_id"?: string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "started_at"?: string;
            /** Value enum: "pending", "processing", "succeeded", "failed". */
            "status": "pending" | "processing" | "succeeded" | "failed" | (string & {});
            /** Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
            "subscription_id": string;
            /**
             * Unique identifier for this subscription payment retry, prefixed `spr_`. Example:
             * "spr_01KEZF7C00YXMSBXGYEMYDD0AA".
             */
            "subscription_payment_retry_id": string;
            /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
            "updated_at": string;
        };
        /**
         * Previous values of changed top-level fields in data.object, at this delivery's API
         * version. Nested changes include the whole previous top-level value. A value is null when
         * the field was absent before the change. Omitted when Flint did not record the previous
         * state, including synthetic test events.
         */
        "previous_attributes"?: Partial<SubscriptionPaymentRetry>;
    };
    /** Value enum: "merchant". */
    "event_source"?: "merchant" | (string & {});
    /** Value enum: "subscription_payment_retry.succeeded". */
    "event_type"?: "subscription_payment_retry.succeeded";
});
export type SubscriptionPaymentSucceededEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "buyer_actions": Array<BuyerAction>;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
                | "retry_payment"
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
    "event_type"?: "subscription.payment_succeeded";
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
            "buyer_actions": Array<BuyerAction>;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
                | "retry_payment"
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
    "event_type"?: "subscription.payment_succeeded";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.payment_succeeded";
});
/**
 * The `subscription.payment_succeeded` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionPaymentSucceededInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * frozen from the plan or shared by the subscription offers. Line prices are per delivery.
     * Each option charges for all deliveries in its period. Changing the interval does not change
     * the per-delivery price. maxItems: 12. uniqueItems: true. object.billing_interval_options[]
     * (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a subscription
     * plan or offer. Every option bills the same line prices once per period; prices are not
     * scaled by the interval. For a different price per interval, create separate plans.
     * object.billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
     * the schedule after each paid renewal; external uses dates you supply. Change it with
     * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
     * "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached".
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
     * from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery.
     * Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
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
     * int32. object.quantity_options (Optional): Array of integer. maxItems: 10. uniqueItems:
     * true. object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
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
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
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
         * Billing interval and count pairs frozen from the plan or shared by the subscription
         * offers. Line prices are per delivery. Each option charges for all deliveries in its
         * period. Changing the interval does not change the per-delivery price. maxItems: 12.
         * uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer.
         * Every option bills the same line prices once per period; prices are not scaled by the
         * interval. For a different price per interval, create separate plans.
         * billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
         * the schedule after each paid renewal; external uses dates you supply. Change it with
         * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached". completed_cycles (Required): integer.
         * Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. Format: uint64. minimum: 0. contract_end_at (Optional): string. When
         * the recorded contract term ends. Does not move when the subscription pauses or changes
         * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". contract_start_at (Optional): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_start_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24. delivery
         * (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the current
         * delivery method display. Write responses use the same display as GET: fixed shipping
         * reflects the current method configuration, and quoted shipping shows the last paid
         * shipping amount when available. A subscription's saved delivery preference: method,
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
         * (Optional): Array of integer. maxItems: 10. uniqueItems: true. quantity_options[]
         * (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money (Required): {@link
         * MoneyValue} or null. What one billing period's items cost before discounts, shipping,
         * and tax: each line's price with modifiers, times quantity. It changes when items,
         * quantity, or the plan change; editing the plan doesn't change it. For the next charge,
         * use a subscription preview in next_renewal mode. recurring_subtotal_money.anyOf[1]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required):
         * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period
         * starts with deliveries_per_period minus one. When delivery_hold is present and this
         * count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null.
         * When Flint accepted a pending resume request. Set only while paused with a resume Flint
         * has not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required):
         * string or null. When the scheduled cancellation takes effect: trial_end_at while
         * trialing, current_period_end_at while active, or next_retry_at while past_due. Paid
         * deliveries extend it to the last paid delivery when it is later. Null when
         * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Required): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "retry_payment", "change_plan", "change_quantity". supported_actions[] (Value):
         * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". tax (Required): {@link SubscriptionTax} or null. The
         * tax the subscription's renewal, setup fee and plan change orders use. `null` when they
         * follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned
         * only to merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value):
         * {@link SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change
         * orders use. Returned only to merchant credentials; omitted for buyer credentials.
         * tax.anyOf[2] (Value): null. terms_type (Required): string. Terms come from the
         * subscription plan in subscription_plan_id, or from subscription offers identified on
         * each offer line by subscription_offer_id. Value enum: "subscription_plan",
         * "subscription_offer". test_clock_id (Optional): string. ID of the test clock the
         * subscription's customer was created on. The subscription bills at the clock's time.
         * Present only when the customer is on a test clock. Included only in merchant responses
         * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
         * trial_end_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next renewal at
         * renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an
         * upcoming renewal that will hold the subscription's delivery, and who can fix it.
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0.
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
             * Billing interval and count pairs frozen from the plan or shared by the subscription
             * offers. Line prices are per delivery. Each option charges for all deliveries in its
             * period. Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence
             * offered by a subscription plan or offer. Every option bills the same line prices
             * once per period; prices are not scaled by the interval. For a different price per
             * interval, create separate plans.
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
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
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
             * Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
             * delivery cadence is set. Line prices are per delivery. Format: int32. minimum: 1.
             * maximum: 24.
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
            /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
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
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
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
    /** Value enum: "subscription.payment_succeeded". */
    "event_type"?: "subscription.payment_succeeded";
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
 * The `subscription.payment_succeeded` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionPaymentSucceededMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * frozen from the plan or shared by the subscription offers. Line prices are per delivery.
     * Each option charges for all deliveries in its period. Changing the interval does not change
     * the per-delivery price. maxItems: 12. uniqueItems: true. object.billing_interval_options[]
     * (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a subscription
     * plan or offer. Every option bills the same line prices once per period; prices are not
     * scaled by the interval. For a different price per interval, create separate plans.
     * object.billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
     * the schedule after each paid renewal; external uses dates you supply. Change it with
     * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
     * "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached".
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
     * from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery.
     * Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
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
     * int32. object.quantity_options (Optional): Array of integer. maxItems: 10. uniqueItems:
     * true. object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
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
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
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
         * Billing interval and count pairs frozen from the plan or shared by the subscription
         * offers. Line prices are per delivery. Each option charges for all deliveries in its
         * period. Changing the interval does not change the per-delivery price. maxItems: 12.
         * uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer.
         * Every option bills the same line prices once per period; prices are not scaled by the
         * interval. For a different price per interval, create separate plans.
         * billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
         * the schedule after each paid renewal; external uses dates you supply. Change it with
         * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached". completed_cycles (Required): integer.
         * Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. Format: uint64. minimum: 0. contract_end_at (Optional): string. When
         * the recorded contract term ends. Does not move when the subscription pauses or changes
         * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". contract_start_at (Optional): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_start_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24. delivery
         * (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the current
         * delivery method display. Write responses use the same display as GET: fixed shipping
         * reflects the current method configuration, and quoted shipping shows the last paid
         * shipping amount when available. A subscription's saved delivery preference: method,
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
         * (Optional): Array of integer. maxItems: 10. uniqueItems: true. quantity_options[]
         * (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money (Required): {@link
         * MoneyValue} or null. What one billing period's items cost before discounts, shipping,
         * and tax: each line's price with modifiers, times quantity. It changes when items,
         * quantity, or the plan change; editing the plan doesn't change it. For the next charge,
         * use a subscription preview in next_renewal mode. recurring_subtotal_money.anyOf[1]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required):
         * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period
         * starts with deliveries_per_period minus one. When delivery_hold is present and this
         * count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null.
         * When Flint accepted a pending resume request. Set only while paused with a resume Flint
         * has not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required):
         * string or null. When the scheduled cancellation takes effect: trial_end_at while
         * trialing, current_period_end_at while active, or next_retry_at while past_due. Paid
         * deliveries extend it to the last paid delivery when it is later. Null when
         * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Required): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "retry_payment", "change_plan", "change_quantity". supported_actions[] (Value):
         * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". tax (Required): {@link SubscriptionTax} or null. The
         * tax the subscription's renewal, setup fee and plan change orders use. `null` when they
         * follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned
         * only to merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value):
         * {@link SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change
         * orders use. Returned only to merchant credentials; omitted for buyer credentials.
         * tax.anyOf[2] (Value): null. terms_type (Required): string. Terms come from the
         * subscription plan in subscription_plan_id, or from subscription offers identified on
         * each offer line by subscription_offer_id. Value enum: "subscription_plan",
         * "subscription_offer". test_clock_id (Optional): string. ID of the test clock the
         * subscription's customer was created on. The subscription bills at the clock's time.
         * Present only when the customer is on a test clock. Included only in merchant responses
         * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
         * trial_end_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next renewal at
         * renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an
         * upcoming renewal that will hold the subscription's delivery, and who can fix it.
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0.
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
             * Billing interval and count pairs frozen from the plan or shared by the subscription
             * offers. Line prices are per delivery. Each option charges for all deliveries in its
             * period. Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence
             * offered by a subscription plan or offer. Every option bills the same line prices
             * once per period; prices are not scaled by the interval. For a different price per
             * interval, create separate plans.
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
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
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
             * Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
             * delivery cadence is set. Line prices are per delivery. Format: int32. minimum: 1.
             * maximum: 24.
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
            /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
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
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
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
    /** Value enum: "subscription.payment_succeeded". */
    "event_type"?: "subscription.payment_succeeded";
});
/** The recurring price and billing terms offered to customers. */
export type SubscriptionPlan = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count": number;
    /**
     * Offered billing interval and count pairs, including the plan's default pair. Line prices are
     * per delivery. Each option charges for all deliveries in its period. Use separate plans or
     * promotions for different prices per interval. maxItems: 12. uniqueItems: true. [] (Value):
     * {@link SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or
     * offer. Every option bills the same line prices once per period; prices are not scaled by the
     * interval. For a different price per interval, create separate plans.
     */
    "billing_interval_options": Array<SubscriptionIntervalOption>;
    /**
     * A commitment period you agree with the buyer, 1 to 120 months. Flint shows it at checkout
     * and records it on each new subscription (contract_start_at, contract_end_at). Flint does not
     * stop the buyer from canceling earlier. Format: int32. minimum: 1. maximum: 120.
     */
    "contract_term_months"?: number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "created_at": string;
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD". */
    "currency": string;
    /**
     * Delivery cadence. Null when no separate delivery cadence is set; one delivery is made per
     * billing period. Every billing option must be a whole multiple in the same unit family
     * (days/weeks or months/years), with 1 to 24 deliveries per period. Existing subscriptions
     * keep their frozen cadence. Value enum: "daily", "weekly", "monthly", "yearly", null.
     */
    "delivery_interval": "daily" | "weekly" | "monthly" | "yearly" | null | (string & {}) | null;
    /**
     * Number of delivery intervals between deliveries. Null when no separate delivery cadence is
     * set. Format: int32. minimum: 1.
     */
    "delivery_interval_count": number | null;
    /**
     *  [] (Value): {@link SubscriptionDeliveryMethodCounts}. Subscription counts by status for one
     * delivery method.
     */
    "delivery_method_subscription_counts": Array<SubscriptionDeliveryMethodCounts>;
    "delivery_required": boolean;
    "description"?: string;
    /**
     * A fee you agree the buyer owes for canceling before the contract term ends. Flint shows it
     * at checkout and records it on each new subscription, but never charges it. To collect it,
     * charge the buyer yourself, for example with an order on their saved payment method. Requires
     * contract_term_months. Monetary amount represented as integer minor units plus an ISO 4217
     * currency code.
     */
    "early_termination_fee_money"?: MoneyValue;
    /**
     * Default automatic end for new subscriptions. Counts charged billing cycles, from 1 to 1200.
     * Send null for no automatic end. Existing subscriptions keep their recorded condition. Null
     * when no default automatic end is set. anyOf[1] (Value): {@link SubscriptionEndAfterCycles}.
     * A subscription automatic end measured by the total number of charged billing cycles.
     * anyOf[2] (Value): null.
     */
    "end_after": ((SubscriptionEndAfterCycles) | (null));
    /**
     * Caller-owned identifier for this resource in an external system. maxLength: 255. Example:
     * "warehouse-1842".
     */
    "external_reference_id"?: string;
    /**
     * Whether checkout buyers can name a gift recipient. Checkout sessions freeze it when they are
     * created. Defaults to false. You can set gift_recipient on a subscription through the API
     * either way.
     */
    "gifts_enabled": boolean;
    /**
     *  [] (Value): {@link ImageAttachment}. An image attached to a resource, with its display
     * properties and attachment metadata.
     */
    "images": Array<ImageAttachment>;
    /**
     * Where tracked demand from this plan is routed. New subscriptions and payment links for the
     * plan copy it. Absent when the plan has no source. Where an order, payment link, or
     * reservation routes inventory from: a fixed Location, an inventory allocation policy, or one
     * policy revision.
     */
    "inventory_routing_source"?: InventoryRoutingSource;
    /**  [] (Value): {@link SubscriptionPlanLineItem}. A line item on a subscription plan. */
    "line_items"?: Array<SubscriptionPlanLineItem>;
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E". */
    "merchant_id": string;
    /**
     * Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules.
     * Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for
     * Flint and are not returned. Writes follow the limits on MetadataInput and
     * MetadataPatchInput; maps written before those limits may not satisfy them.
     */
    "metadata"?: MetadataMap;
    "name": string;
    /**
     * Plans subscribers may switch to, in display order, with the billing timing for each target.
     * Empty means plan changes are off. Omission on PATCH keeps the options; an array replaces
     * them and requires expected_version. Send [] to clear. Null is invalid. maxItems: 25. []
     * (Value): {@link SubscriptionPlanChangeOption}. A target plan subscribers may switch to and
     * the billing timing for that change.
     */
    "plan_change_options": Array<SubscriptionPlanChangeOption>;
    /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
    "quantity_options": Array<number>;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "setup_fee_money"?: MoneyValue;
    /**
     * Active plans accept new signups. Inactive plans refuse new signups with ACTION_NOT_ALLOWED
     * while existing subscriptions keep renewing. Archived plans are read-only and their status is
     * set only by DELETE /v1/subscription-plans/{subscription_plan_id}. Value enum: "active",
     * "inactive", "archived".
     */
    "status": "active" | "inactive" | "archived" | (string & {});
    /**  [] (Value): string. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". */
    "subscription_delivery_method_ids": Array<string>;
    /**
     * Unique identifier for this subscription plan, prefixed `plan_`. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
    /** Format: int32. */
    "trial_period_days"?: number;
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". */
    "updated_at": string;
    /**
     * Current version of this resource's owned state. Send it as `expected_version` when changing
     * the resource to reject a stale write. Format: uint64. minimum: 0.
     */
    "version": number;
};
export type SubscriptionPlanChangeCanceledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "buyer_actions": Array<BuyerAction>;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
                | "retry_payment"
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
    "event_type"?: "subscription.plan_change_canceled";
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
            "buyer_actions": Array<BuyerAction>;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
                | "retry_payment"
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
    "event_type"?: "subscription.plan_change_canceled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.plan_change_canceled";
});
/**
 * The `subscription.plan_change_canceled` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPlanChangeCanceledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * frozen from the plan or shared by the subscription offers. Line prices are per delivery.
     * Each option charges for all deliveries in its period. Changing the interval does not change
     * the per-delivery price. maxItems: 12. uniqueItems: true. object.billing_interval_options[]
     * (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a subscription
     * plan or offer. Every option bills the same line prices once per period; prices are not
     * scaled by the interval. For a different price per interval, create separate plans.
     * object.billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
     * the schedule after each paid renewal; external uses dates you supply. Change it with
     * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
     * "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached".
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
     * from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery.
     * Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
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
     * int32. object.quantity_options (Optional): Array of integer. maxItems: 10. uniqueItems:
     * true. object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
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
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
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
         * Billing interval and count pairs frozen from the plan or shared by the subscription
         * offers. Line prices are per delivery. Each option charges for all deliveries in its
         * period. Changing the interval does not change the per-delivery price. maxItems: 12.
         * uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer.
         * Every option bills the same line prices once per period; prices are not scaled by the
         * interval. For a different price per interval, create separate plans.
         * billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
         * the schedule after each paid renewal; external uses dates you supply. Change it with
         * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached". completed_cycles (Required): integer.
         * Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. Format: uint64. minimum: 0. contract_end_at (Optional): string. When
         * the recorded contract term ends. Does not move when the subscription pauses or changes
         * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". contract_start_at (Optional): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_start_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24. delivery
         * (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the current
         * delivery method display. Write responses use the same display as GET: fixed shipping
         * reflects the current method configuration, and quoted shipping shows the last paid
         * shipping amount when available. A subscription's saved delivery preference: method,
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
         * (Optional): Array of integer. maxItems: 10. uniqueItems: true. quantity_options[]
         * (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money (Required): {@link
         * MoneyValue} or null. What one billing period's items cost before discounts, shipping,
         * and tax: each line's price with modifiers, times quantity. It changes when items,
         * quantity, or the plan change; editing the plan doesn't change it. For the next charge,
         * use a subscription preview in next_renewal mode. recurring_subtotal_money.anyOf[1]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required):
         * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period
         * starts with deliveries_per_period minus one. When delivery_hold is present and this
         * count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null.
         * When Flint accepted a pending resume request. Set only while paused with a resume Flint
         * has not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required):
         * string or null. When the scheduled cancellation takes effect: trial_end_at while
         * trialing, current_period_end_at while active, or next_retry_at while past_due. Paid
         * deliveries extend it to the last paid delivery when it is later. Null when
         * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Required): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "retry_payment", "change_plan", "change_quantity". supported_actions[] (Value):
         * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". tax (Required): {@link SubscriptionTax} or null. The
         * tax the subscription's renewal, setup fee and plan change orders use. `null` when they
         * follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned
         * only to merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value):
         * {@link SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change
         * orders use. Returned only to merchant credentials; omitted for buyer credentials.
         * tax.anyOf[2] (Value): null. terms_type (Required): string. Terms come from the
         * subscription plan in subscription_plan_id, or from subscription offers identified on
         * each offer line by subscription_offer_id. Value enum: "subscription_plan",
         * "subscription_offer". test_clock_id (Optional): string. ID of the test clock the
         * subscription's customer was created on. The subscription bills at the clock's time.
         * Present only when the customer is on a test clock. Included only in merchant responses
         * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
         * trial_end_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next renewal at
         * renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an
         * upcoming renewal that will hold the subscription's delivery, and who can fix it.
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0.
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
             * Billing interval and count pairs frozen from the plan or shared by the subscription
             * offers. Line prices are per delivery. Each option charges for all deliveries in its
             * period. Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence
             * offered by a subscription plan or offer. Every option bills the same line prices
             * once per period; prices are not scaled by the interval. For a different price per
             * interval, create separate plans.
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
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
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
             * Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
             * delivery cadence is set. Line prices are per delivery. Format: int32. minimum: 1.
             * maximum: 24.
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
            /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
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
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
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
    /** Value enum: "subscription.plan_change_canceled". */
    "event_type"?: "subscription.plan_change_canceled";
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
 * The `subscription.plan_change_canceled` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionPlanChangeCanceledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * frozen from the plan or shared by the subscription offers. Line prices are per delivery.
     * Each option charges for all deliveries in its period. Changing the interval does not change
     * the per-delivery price. maxItems: 12. uniqueItems: true. object.billing_interval_options[]
     * (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a subscription
     * plan or offer. Every option bills the same line prices once per period; prices are not
     * scaled by the interval. For a different price per interval, create separate plans.
     * object.billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
     * the schedule after each paid renewal; external uses dates you supply. Change it with
     * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
     * "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached".
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
     * from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery.
     * Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
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
     * int32. object.quantity_options (Optional): Array of integer. maxItems: 10. uniqueItems:
     * true. object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
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
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
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
         * Billing interval and count pairs frozen from the plan or shared by the subscription
         * offers. Line prices are per delivery. Each option charges for all deliveries in its
         * period. Changing the interval does not change the per-delivery price. maxItems: 12.
         * uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer.
         * Every option bills the same line prices once per period; prices are not scaled by the
         * interval. For a different price per interval, create separate plans.
         * billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
         * the schedule after each paid renewal; external uses dates you supply. Change it with
         * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached". completed_cycles (Required): integer.
         * Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. Format: uint64. minimum: 0. contract_end_at (Optional): string. When
         * the recorded contract term ends. Does not move when the subscription pauses or changes
         * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". contract_start_at (Optional): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_start_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24. delivery
         * (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the current
         * delivery method display. Write responses use the same display as GET: fixed shipping
         * reflects the current method configuration, and quoted shipping shows the last paid
         * shipping amount when available. A subscription's saved delivery preference: method,
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
         * (Optional): Array of integer. maxItems: 10. uniqueItems: true. quantity_options[]
         * (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money (Required): {@link
         * MoneyValue} or null. What one billing period's items cost before discounts, shipping,
         * and tax: each line's price with modifiers, times quantity. It changes when items,
         * quantity, or the plan change; editing the plan doesn't change it. For the next charge,
         * use a subscription preview in next_renewal mode. recurring_subtotal_money.anyOf[1]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required):
         * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period
         * starts with deliveries_per_period minus one. When delivery_hold is present and this
         * count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null.
         * When Flint accepted a pending resume request. Set only while paused with a resume Flint
         * has not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required):
         * string or null. When the scheduled cancellation takes effect: trial_end_at while
         * trialing, current_period_end_at while active, or next_retry_at while past_due. Paid
         * deliveries extend it to the last paid delivery when it is later. Null when
         * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Required): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "retry_payment", "change_plan", "change_quantity". supported_actions[] (Value):
         * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". tax (Required): {@link SubscriptionTax} or null. The
         * tax the subscription's renewal, setup fee and plan change orders use. `null` when they
         * follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned
         * only to merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value):
         * {@link SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change
         * orders use. Returned only to merchant credentials; omitted for buyer credentials.
         * tax.anyOf[2] (Value): null. terms_type (Required): string. Terms come from the
         * subscription plan in subscription_plan_id, or from subscription offers identified on
         * each offer line by subscription_offer_id. Value enum: "subscription_plan",
         * "subscription_offer". test_clock_id (Optional): string. ID of the test clock the
         * subscription's customer was created on. The subscription bills at the clock's time.
         * Present only when the customer is on a test clock. Included only in merchant responses
         * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
         * trial_end_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next renewal at
         * renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an
         * upcoming renewal that will hold the subscription's delivery, and who can fix it.
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0.
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
             * Billing interval and count pairs frozen from the plan or shared by the subscription
             * offers. Line prices are per delivery. Each option charges for all deliveries in its
             * period. Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence
             * offered by a subscription plan or offer. Every option bills the same line prices
             * once per period; prices are not scaled by the interval. For a different price per
             * interval, create separate plans.
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
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
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
             * Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
             * delivery cadence is set. Line prices are per delivery. Format: int32. minimum: 1.
             * maximum: 24.
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
            /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
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
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
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
    /** Value enum: "subscription.plan_change_canceled". */
    "event_type"?: "subscription.plan_change_canceled";
});
/** Quantity override for a line in the target subscription plan. */
export type SubscriptionPlanChangeLineItemRequest = {
    /**
     * Quantity of this target line. Whole-number quantity; fractional quantities are not
     * supported. minimum: 1. maximum: 9999.
     */
    "quantity": number;
    /**
     * A line in the target subscription plan. minLength: 1. pattern:
     * ^spli_[0-9A-HJKMNP-TV-Z]{26}$. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
};
/** Quantity override for a line in the target subscription plan. */
export type SubscriptionPlanChangeLineItemRequestInput = SubscriptionPlanChangeLineItemRequest;
/** A target plan subscribers may switch to and the billing timing for that change. */
export type SubscriptionPlanChangeOption = {
    /**
     * The store's billing timing for this target: now collects a new period with unused-time
     * credit; next_renewal changes the plan now and keeps the current paid period and next billing
     * date; period_end keeps the current plan until the next charged renewal; prorated_now charges
     * the difference for the rest of the current period and keeps the period and anchor. Value
     * enum: "now", "next_renewal", "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now" | (string & {});
    /**
     * The target subscription plan offered for buyer plan changes. minLength: 1. pattern:
     * ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
};
/** A target plan subscribers may switch to and the billing timing for that change. */
export type SubscriptionPlanChangeOptionRequestInput = {
    /**
     * The store's billing timing for this target: now collects a new period with unused-time
     * credit; next_renewal changes the plan now and keeps the current paid period and next billing
     * date; period_end keeps the current plan until the next charged renewal; prorated_now charges
     * the difference for the rest of the current period and keeps the period and anchor. Value
     * enum: "now", "next_renewal", "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now";
    /**
     * The target subscription plan offered for buyer plan changes. minLength: 1. pattern:
     * ^plan_[0-9A-HJKMNP-TV-Z]{26}$. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     */
    "subscription_plan_id": string;
};
/**
 * Estimated pricing for a subscription plan change, including the recurring item subtotal and
 * renewal amounts.
 */
export type SubscriptionPlanChangePreview = {
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. */
    "billing_interval_count": number;
    /** Value enum: "now", "next_renewal", "period_end", "prorated_now". */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now" | (string & {});
    /**
     * Unused paid item time credited when billing_starts is now or prorated_now; null for
     * next_renewal and period_end. anyOf[1] (Value): {@link MoneyValue}. Monetary amount
     * represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "credit_money": ((MoneyValue) | (null));
    /**
     * Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery
     * cadence is set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24.
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
     * When the plan is expected to take effect. Null when no billing time is scheduled. Format:
     * date-time. Example: "2026-08-02T16:00:00Z".
     */
    "effective_at": string | null;
    /** Value enum: "plan_change". */
    "mode": "plan_change" | (string & {});
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "recurring_subtotal_money": MoneyValue;
    /**
     * Estimated pricing and billing time for a subscription renewal, including items, discounts,
     * shipping, and tax.
     */
    "renewal": SubscriptionChargeEstimate;
    /** Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
    "subscription_id": string;
    /** Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id": string;
};
/**
 * The subscription is the primary resource and expected_version target; order and
 * order_payment_attempt report immediate billing and are null when billing_starts is next_renewal
 * or period_end, or the prorated_now net charge is zero.
 */
export type SubscriptionPlanChangeResult = {
    /**
     * The resolved billing timing for this plan change. Value enum: "now", "next_renewal",
     * "period_end", "prorated_now".
     */
    "billing_starts": "now" | "next_renewal" | "period_end" | "prorated_now" | (string & {});
    /**
     * The new period or proration order when billing_starts is now or prorated_now, including a
     * closed unpaid order when payment fails. Null when billing_starts is next_renewal or
     * period_end, or a prorated_now net charge is zero. anyOf[1] (Value): {@link Order}. A
     * customer's purchase and its payment and fulfillment progress. anyOf[2] (Value): null.
     */
    "order": ((Order) | (null));
    /**
     * The recorded payment attempt when billing_starts is now or prorated_now, including declines.
     * Null when billing_starts is next_renewal or period_end, or a prorated_now net charge is
     * zero. anyOf[1] (Value): {@link OrderPaymentAttempt}. An attempt to pay an order. anyOf[2]
     * (Value): null.
     */
    "order_payment_attempt": ((OrderPaymentAttempt) | (null));
    /**
     * The subscription after this request, including any scheduled plan change, or the unchanged
     * subscription when payment fails. A customer's recurring purchase.
     */
    "subscription": Subscription;
};
/** A response containing `SubscriptionPlanChangeResult` data. */
export type SubscriptionPlanChangeResultResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The subscription is the
     * primary resource and expected_version target; order and order_payment_attempt report
     * immediate billing and are null when billing_starts is next_renewal or period_end, or the
     * prorated_now net charge is zero.
     */
    "data": SubscriptionPlanChangeResult;
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
export type SubscriptionPlanChangeScheduledEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "buyer_actions": Array<BuyerAction>;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
                | "retry_payment"
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
    "event_type"?: "subscription.plan_change_scheduled";
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
            "buyer_actions": Array<BuyerAction>;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
                | "retry_payment"
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
    "event_type"?: "subscription.plan_change_scheduled";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.plan_change_scheduled";
});
/**
 * The `subscription.plan_change_scheduled` webhook payload for the `installed_merchants` event
 * source. Fields shared by partner webhook payloads.
 */
export type SubscriptionPlanChangeScheduledInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * frozen from the plan or shared by the subscription offers. Line prices are per delivery.
     * Each option charges for all deliveries in its period. Changing the interval does not change
     * the per-delivery price. maxItems: 12. uniqueItems: true. object.billing_interval_options[]
     * (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a subscription
     * plan or offer. Every option bills the same line prices once per period; prices are not
     * scaled by the interval. For a different price per interval, create separate plans.
     * object.billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
     * the schedule after each paid renewal; external uses dates you supply. Change it with
     * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
     * "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached".
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
     * from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery.
     * Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
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
     * int32. object.quantity_options (Optional): Array of integer. maxItems: 10. uniqueItems:
     * true. object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
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
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
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
         * Billing interval and count pairs frozen from the plan or shared by the subscription
         * offers. Line prices are per delivery. Each option charges for all deliveries in its
         * period. Changing the interval does not change the per-delivery price. maxItems: 12.
         * uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer.
         * Every option bills the same line prices once per period; prices are not scaled by the
         * interval. For a different price per interval, create separate plans.
         * billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
         * the schedule after each paid renewal; external uses dates you supply. Change it with
         * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached". completed_cycles (Required): integer.
         * Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. Format: uint64. minimum: 0. contract_end_at (Optional): string. When
         * the recorded contract term ends. Does not move when the subscription pauses or changes
         * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". contract_start_at (Optional): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_start_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24. delivery
         * (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the current
         * delivery method display. Write responses use the same display as GET: fixed shipping
         * reflects the current method configuration, and quoted shipping shows the last paid
         * shipping amount when available. A subscription's saved delivery preference: method,
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
         * (Optional): Array of integer. maxItems: 10. uniqueItems: true. quantity_options[]
         * (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money (Required): {@link
         * MoneyValue} or null. What one billing period's items cost before discounts, shipping,
         * and tax: each line's price with modifiers, times quantity. It changes when items,
         * quantity, or the plan change; editing the plan doesn't change it. For the next charge,
         * use a subscription preview in next_renewal mode. recurring_subtotal_money.anyOf[1]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required):
         * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period
         * starts with deliveries_per_period minus one. When delivery_hold is present and this
         * count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null.
         * When Flint accepted a pending resume request. Set only while paused with a resume Flint
         * has not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required):
         * string or null. When the scheduled cancellation takes effect: trial_end_at while
         * trialing, current_period_end_at while active, or next_retry_at while past_due. Paid
         * deliveries extend it to the last paid delivery when it is later. Null when
         * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Required): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "retry_payment", "change_plan", "change_quantity". supported_actions[] (Value):
         * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". tax (Required): {@link SubscriptionTax} or null. The
         * tax the subscription's renewal, setup fee and plan change orders use. `null` when they
         * follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned
         * only to merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value):
         * {@link SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change
         * orders use. Returned only to merchant credentials; omitted for buyer credentials.
         * tax.anyOf[2] (Value): null. terms_type (Required): string. Terms come from the
         * subscription plan in subscription_plan_id, or from subscription offers identified on
         * each offer line by subscription_offer_id. Value enum: "subscription_plan",
         * "subscription_offer". test_clock_id (Optional): string. ID of the test clock the
         * subscription's customer was created on. The subscription bills at the clock's time.
         * Present only when the customer is on a test clock. Included only in merchant responses
         * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
         * trial_end_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next renewal at
         * renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an
         * upcoming renewal that will hold the subscription's delivery, and who can fix it.
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0.
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
             * Billing interval and count pairs frozen from the plan or shared by the subscription
             * offers. Line prices are per delivery. Each option charges for all deliveries in its
             * period. Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence
             * offered by a subscription plan or offer. Every option bills the same line prices
             * once per period; prices are not scaled by the interval. For a different price per
             * interval, create separate plans.
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
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
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
             * Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
             * delivery cadence is set. Line prices are per delivery. Format: int32. minimum: 1.
             * maximum: 24.
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
            /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
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
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
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
    /** Value enum: "subscription.plan_change_scheduled". */
    "event_type"?: "subscription.plan_change_scheduled";
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
 * The `subscription.plan_change_scheduled` webhook payload for the `merchant` event source. Fields
 * shared by merchant webhook payloads.
 */
export type SubscriptionPlanChangeScheduledMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * frozen from the plan or shared by the subscription offers. Line prices are per delivery.
     * Each option charges for all deliveries in its period. Changing the interval does not change
     * the per-delivery price. maxItems: 12. uniqueItems: true. object.billing_interval_options[]
     * (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a subscription
     * plan or offer. Every option bills the same line prices once per period; prices are not
     * scaled by the interval. For a different price per interval, create separate plans.
     * object.billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
     * the schedule after each paid renewal; external uses dates you supply. Change it with
     * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
     * "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached".
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
     * from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery.
     * Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
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
     * int32. object.quantity_options (Optional): Array of integer. maxItems: 10. uniqueItems:
     * true. object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
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
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
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
         * Billing interval and count pairs frozen from the plan or shared by the subscription
         * offers. Line prices are per delivery. Each option charges for all deliveries in its
         * period. Changing the interval does not change the per-delivery price. maxItems: 12.
         * uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer.
         * Every option bills the same line prices once per period; prices are not scaled by the
         * interval. For a different price per interval, create separate plans.
         * billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
         * the schedule after each paid renewal; external uses dates you supply. Change it with
         * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached". completed_cycles (Required): integer.
         * Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. Format: uint64. minimum: 0. contract_end_at (Optional): string. When
         * the recorded contract term ends. Does not move when the subscription pauses or changes
         * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". contract_start_at (Optional): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_start_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24. delivery
         * (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the current
         * delivery method display. Write responses use the same display as GET: fixed shipping
         * reflects the current method configuration, and quoted shipping shows the last paid
         * shipping amount when available. A subscription's saved delivery preference: method,
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
         * (Optional): Array of integer. maxItems: 10. uniqueItems: true. quantity_options[]
         * (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money (Required): {@link
         * MoneyValue} or null. What one billing period's items cost before discounts, shipping,
         * and tax: each line's price with modifiers, times quantity. It changes when items,
         * quantity, or the plan change; editing the plan doesn't change it. For the next charge,
         * use a subscription preview in next_renewal mode. recurring_subtotal_money.anyOf[1]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required):
         * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period
         * starts with deliveries_per_period minus one. When delivery_hold is present and this
         * count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null.
         * When Flint accepted a pending resume request. Set only while paused with a resume Flint
         * has not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required):
         * string or null. When the scheduled cancellation takes effect: trial_end_at while
         * trialing, current_period_end_at while active, or next_retry_at while past_due. Paid
         * deliveries extend it to the last paid delivery when it is later. Null when
         * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Required): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "retry_payment", "change_plan", "change_quantity". supported_actions[] (Value):
         * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". tax (Required): {@link SubscriptionTax} or null. The
         * tax the subscription's renewal, setup fee and plan change orders use. `null` when they
         * follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned
         * only to merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value):
         * {@link SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change
         * orders use. Returned only to merchant credentials; omitted for buyer credentials.
         * tax.anyOf[2] (Value): null. terms_type (Required): string. Terms come from the
         * subscription plan in subscription_plan_id, or from subscription offers identified on
         * each offer line by subscription_offer_id. Value enum: "subscription_plan",
         * "subscription_offer". test_clock_id (Optional): string. ID of the test clock the
         * subscription's customer was created on. The subscription bills at the clock's time.
         * Present only when the customer is on a test clock. Included only in merchant responses
         * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
         * trial_end_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next renewal at
         * renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an
         * upcoming renewal that will hold the subscription's delivery, and who can fix it.
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0.
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
             * Billing interval and count pairs frozen from the plan or shared by the subscription
             * offers. Line prices are per delivery. Each option charges for all deliveries in its
             * period. Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence
             * offered by a subscription plan or offer. Every option bills the same line prices
             * once per period; prices are not scaled by the interval. For a different price per
             * interval, create separate plans.
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
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
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
             * Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
             * delivery cadence is set. Line prices are per delivery. Format: int32. minimum: 1.
             * maximum: 24.
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
            /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
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
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
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
    /** Value enum: "subscription.plan_change_scheduled". */
    "event_type"?: "subscription.plan_change_scheduled";
});
export type SubscriptionPlanChangedEvent = ((((Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
    & ({
    "data"?: {
        "object": {
            "billing_anchor_day"?: number;
            "billing_interval": "daily" | "weekly" | "monthly" | "yearly" | (string & {});
            "billing_interval_count": number;
            "billing_interval_options"?: Array<SubscriptionIntervalOption>;
            "billing_schedule_owner": "flint" | "external" | (string & {});
            "billing_schedule_waiting_started_at"?: string;
            "buyer_actions": Array<BuyerAction>;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
                | "retry_payment"
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
    "event_type"?: "subscription.plan_changed";
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
            "buyer_actions": Array<BuyerAction>;
            "cancel_at_period_end": boolean;
            "canceled_at"?: string;
            "cancellation_details"?: SubscriptionCancellationDetails;
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
                | "retry_payment"
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
    "event_type"?: "subscription.plan_changed";
    "source"?: ({
        "environment_grant_id": string;
        "merchant_id": string;
        "mode": "test" | "live" | (string & {});
        "partner_app_install_id": string;
        "sandbox_id"?: string;
    });
})))
    & {
    "event_type": "subscription.plan_changed";
});
/**
 * The `subscription.plan_changed` webhook payload for the `installed_merchants` event source.
 * Fields shared by partner webhook payloads.
 */
export type SubscriptionPlanChangedInstalledMerchantsEvent = (Exclude<PartnerWebhookEnvelope & object, readonly unknown[]>)
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
     * frozen from the plan or shared by the subscription offers. Line prices are per delivery.
     * Each option charges for all deliveries in its period. Changing the interval does not change
     * the per-delivery price. maxItems: 12. uniqueItems: true. object.billing_interval_options[]
     * (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a subscription
     * plan or offer. Every option bills the same line prices once per period; prices are not
     * scaled by the interval. For a different price per interval, create separate plans.
     * object.billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
     * the schedule after each paid renewal; external uses dates you supply. Change it with
     * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
     * "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached".
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
     * from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery.
     * Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
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
     * int32. object.quantity_options (Optional): Array of integer. maxItems: 10. uniqueItems:
     * true. object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
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
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
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
         * Billing interval and count pairs frozen from the plan or shared by the subscription
         * offers. Line prices are per delivery. Each option charges for all deliveries in its
         * period. Changing the interval does not change the per-delivery price. maxItems: 12.
         * uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer.
         * Every option bills the same line prices once per period; prices are not scaled by the
         * interval. For a different price per interval, create separate plans.
         * billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
         * the schedule after each paid renewal; external uses dates you supply. Change it with
         * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached". completed_cycles (Required): integer.
         * Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. Format: uint64. minimum: 0. contract_end_at (Optional): string. When
         * the recorded contract term ends. Does not move when the subscription pauses or changes
         * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". contract_start_at (Optional): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_start_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24. delivery
         * (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the current
         * delivery method display. Write responses use the same display as GET: fixed shipping
         * reflects the current method configuration, and quoted shipping shows the last paid
         * shipping amount when available. A subscription's saved delivery preference: method,
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
         * (Optional): Array of integer. maxItems: 10. uniqueItems: true. quantity_options[]
         * (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money (Required): {@link
         * MoneyValue} or null. What one billing period's items cost before discounts, shipping,
         * and tax: each line's price with modifiers, times quantity. It changes when items,
         * quantity, or the plan change; editing the plan doesn't change it. For the next charge,
         * use a subscription preview in next_renewal mode. recurring_subtotal_money.anyOf[1]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required):
         * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period
         * starts with deliveries_per_period minus one. When delivery_hold is present and this
         * count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null.
         * When Flint accepted a pending resume request. Set only while paused with a resume Flint
         * has not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required):
         * string or null. When the scheduled cancellation takes effect: trial_end_at while
         * trialing, current_period_end_at while active, or next_retry_at while past_due. Paid
         * deliveries extend it to the last paid delivery when it is later. Null when
         * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Required): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "retry_payment", "change_plan", "change_quantity". supported_actions[] (Value):
         * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". tax (Required): {@link SubscriptionTax} or null. The
         * tax the subscription's renewal, setup fee and plan change orders use. `null` when they
         * follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned
         * only to merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value):
         * {@link SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change
         * orders use. Returned only to merchant credentials; omitted for buyer credentials.
         * tax.anyOf[2] (Value): null. terms_type (Required): string. Terms come from the
         * subscription plan in subscription_plan_id, or from subscription offers identified on
         * each offer line by subscription_offer_id. Value enum: "subscription_plan",
         * "subscription_offer". test_clock_id (Optional): string. ID of the test clock the
         * subscription's customer was created on. The subscription bills at the clock's time.
         * Present only when the customer is on a test clock. Included only in merchant responses
         * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
         * trial_end_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next renewal at
         * renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an
         * upcoming renewal that will hold the subscription's delivery, and who can fix it.
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0.
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
             * Billing interval and count pairs frozen from the plan or shared by the subscription
             * offers. Line prices are per delivery. Each option charges for all deliveries in its
             * period. Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence
             * offered by a subscription plan or offer. Every option bills the same line prices
             * once per period; prices are not scaled by the interval. For a different price per
             * interval, create separate plans.
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
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
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
             * Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
             * delivery cadence is set. Line prices are per delivery. Format: int32. minimum: 1.
             * maximum: 24.
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
            /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
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
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
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
    /** Value enum: "subscription.plan_changed". */
    "event_type"?: "subscription.plan_changed";
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
 * The `subscription.plan_changed` webhook payload for the `merchant` event source. Fields shared
 * by merchant webhook payloads.
 */
export type SubscriptionPlanChangedMerchantEvent = (Exclude<MerchantWebhookEnvelope & object, readonly unknown[]>)
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
     * frozen from the plan or shared by the subscription offers. Line prices are per delivery.
     * Each option charges for all deliveries in its period. Changing the interval does not change
     * the per-delivery price. maxItems: 12. uniqueItems: true. object.billing_interval_options[]
     * (Value): {@link SubscriptionIntervalOption}. A billing cadence offered by a subscription
     * plan or offer. Every option bills the same line prices once per period; prices are not
     * scaled by the interval. For a different price per interval, create separate plans.
     * object.billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
     * the schedule after each paid renewal; external uses dates you supply. Change it with
     * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
     * "external". object.billing_schedule_waiting_started_at (Optional): string. RFC3339
     * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". object.buyer_actions
     * (Required): Array of {@link BuyerAction}. What the buyer can do with the subscription, in
     * this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment,
     * update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan,
     * cancel_plan_change, then renew, under the store's buyer policy. The available cancel and
     * pause actions carry the choices they accept. A buyer's read or change through a customer
     * session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant
     * read gets an empty list. update_payment_method is required while a payment is past due
     * without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
     * expires before next_billing_at, due by then. Example: []. object.buyer_actions[] (Value):
     * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return
     * they read through /v1/me. Show the actions with is_required as what needs the buyer's
     * attention, and the first available action as the primary action on the resource's page in
     * your account. object.cancel_at_period_end (Required): boolean. True when the subscription is
     * scheduled to cancel at scheduled_cancel_at. Schedule with POST
     * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * object.canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.cancellation_details (Optional): {@link
     * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
     * cancellation is requested, whether it takes effect at the end of the billing period or right
     * away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See
     * cancellation_reason for voluntary and payment-related cancellations. The cancellation
     * request behind a scheduled or completed cancellation. object.cancellation_reason (Optional):
     * string. Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
     * the automatic ending agreement is reached, cancellation_details.requested_by when recorded,
     * payment_failed for other canceled subscriptions without a requester, and other for a
     * scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer",
     * "merchant", "integration", "payment_failed", "other", "end_after_reached".
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
     * from 1 to 24. One when no separate delivery cadence is set. Line prices are per delivery.
     * Format: int32. minimum: 1. maximum: 24. object.delivery (Optional): {@link
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
     * int32. object.quantity_options (Optional): Array of integer. maxItems: 10. uniqueItems:
     * true. object.quantity_options[] (Value): integer. minimum: 1. maximum: 100.
     * object.recurring_subtotal_money (Required): {@link MoneyValue} or null. What one billing
     * period's items cost before discounts, shipping, and tax: each line's price with modifiers,
     * times quantity. It changes when items, quantity, or the plan change; editing the plan
     * doesn't change it. For the next charge, use a subscription preview in next_renewal mode.
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
     * Flint resumes the subscription or refuses the request. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.scheduled_cancel_at (Required): string or null. When the
     * scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at
     * while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid
     * delivery when it is later. Null when cancel_at_period_end is false or no cancellation time
     * is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.scheduled_plan_change (Required): {@link SubscriptionScheduledPlanChange} or null.
     * Frozen target terms for the next charged renewal. Null when no plan change is scheduled.
     * Cancel with scheduled_plan_change: null on PATCH; replace through change-plan.
     * object.scheduled_plan_change.anyOf[1] (Value): {@link SubscriptionScheduledPlanChange}.
     * Frozen target terms that apply at the next charged renewal.
     * object.scheduled_plan_change.anyOf[2] (Value): null. object.scheduled_promotions (Required):
     * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after the
     * next charged cycle, completed_cycles + 1. Always present; empty when no promotions are
     * scheduled. object.scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A recurring
     * promotion applied to a subscription, including its recurrence and remaining discounted
     * cycles. object.scheduled_resume_at (Required): string or null. When a pause with a length
     * (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on
     * a prepaid subscription, or billing intervals otherwise. Null when the subscription is not
     * paused or the pause has no length, such as a pause until you resume it or the pause Flint
     * starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * object.service_location (Optional): {@link SubscriptionServiceLocation}. Omitted for a
     * checkout session credential that doesn't act for the customer the buyer verified. The
     * address where a subscription's service is delivered, with the saved customer address it came
     * from. object.starts_at (Optional): string. When a scheduled start's first billing period
     * begins. Present only until that first payment succeeds. Format: date-time. Example:
     * "2026-08-02T16:00:00Z". object.status (Required): string. Where the subscription is in its
     * lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused",
     * "past_due", "canceled", "incomplete", "scheduled". object.subscription_id (Required):
     * string. Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * object.subscription_plan (Optional): {@link ExpandedSubscriptionPlanSummary} or null.
     * Present only when `expand` includes `subscription_plan`; `null` when expanded and there is
     * no related subscription plan. object.subscription_plan.anyOf[1] (Value): {@link
     * ExpandedSubscriptionPlanSummary}. A subscription plan's summary fields, including name,
     * billing interval, currency, and status, returned when the plan is expanded.
     * object.subscription_plan.anyOf[2] (Value): null. object.subscription_plan_id (Optional):
     * string. Subscription plan ID. Omitted when terms_type is subscription_offer. Example:
     * "plan_01KEZF7C004CY5ZR33XST2AASV". object.supported_actions (Required): Array of string.
     * Merchant actions allowed by the subscription's state. A route can still refuse a listed
     * action for a transient reason, such as a renewal already in progress, with its own error. []
     * enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
     * "change_quantity". object.supported_actions[] (Value): string. Value enum: "cancel",
     * "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * object.tax (Required): {@link SubscriptionTax} or null. The tax the subscription's renewal,
     * setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and
     * `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted
     * for buyer credentials. object.tax.anyOf[1] (Value): {@link SubscriptionTax}. The tax the
     * subscription's renewal, setup fee and plan change orders use. Returned only to merchant
     * credentials; omitted for buyer credentials. object.tax.anyOf[2] (Value): null.
     * object.terms_type (Required): string. Terms come from the subscription plan in
     * subscription_plan_id, or from subscription offers identified on each offer line by
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
         * Billing interval and count pairs frozen from the plan or shared by the subscription
         * offers. Line prices are per delivery. Each option charges for all deliveries in its
         * period. Changing the interval does not change the per-delivery price. maxItems: 12.
         * uniqueItems: true. billing_interval_options[] (Value): {@link
         * SubscriptionIntervalOption}. A billing cadence offered by a subscription plan or offer.
         * Every option bills the same line prices once per period; prices are not scaled by the
         * interval. For a different price per interval, create separate plans.
         * billing_schedule_owner (Required): string. Who supplies billing dates: flint advances
         * the schedule after each paid renewal; external uses dates you supply. Change it with
         * billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint",
         * "external". billing_schedule_waiting_started_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". buyer_actions (Required): Array of
         * {@link BuyerAction}. What the buyer can do with the subscription, in this order: cancel,
         * pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip,
         * update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change,
         * then renew, under the store's buyer policy. The available cancel and pause actions carry
         * the choices they accept. A buyer's read or change through a customer session on /v1/me,
         * or in Flint's buyer account, lists all fourteen every time; a merchant read gets an
         * empty list. update_payment_method is required while a payment is past due without an
         * inventory_wait, due by next_retry_at when a retry is scheduled, and when the card
         * expires before next_billing_at, due by then. Example: []. buyer_actions[] (Value):
         * {@link BuyerAction}. One thing a buyer can do with an order, subscription, invoice or
         * return they read through /v1/me. Show the actions with is_required as what needs the
         * buyer's attention, and the first available action as the primary action on the
         * resource's page in your account. cancel_at_period_end (Required): boolean. True when the
         * subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST
         * /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end
         * false. canceled_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". cancellation_details (Optional): {@link
         * SubscriptionCancellationDetails}. Who asked to cancel, when, and why. Present once a
         * cancellation is requested, whether it takes effect at the end of the billing period or
         * right away. Omitted when no one asked, and removed when a scheduled cancellation is
         * undone. See cancellation_reason for voluntary and payment-related cancellations. The
         * cancellation request behind a scheduled or completed cancellation. cancellation_reason
         * (Optional): string. Why the subscription is canceled or scheduled to cancel. Uses
         * end_after_reached when the automatic ending agreement is reached,
         * cancellation_details.requested_by when recorded, payment_failed for other canceled
         * subscriptions without a requester, and other for a scheduled cancellation without a
         * requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration",
         * "payment_failed", "other", "end_after_reached". completed_cycles (Required): integer.
         * Billing cycles charged so far, including cycles imported with
         * `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this
         * number plus one. Format: uint64. minimum: 0. contract_end_at (Optional): string. When
         * the recorded contract term ends. Does not move when the subscription pauses or changes
         * plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". contract_start_at (Optional): string. When the recorded contract
         * term started. Does not move when the subscription pauses or changes plan. Format:
         * date-time. Example: "2026-08-02T16:00:00Z". created_at (Required): string. RFC3339
         * timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". current_period_end_at
         * (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". current_period_start_at (Optional): string. RFC3339 timestamp.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". customer (Optional): {@link
         * ExpandedCustomerSummary} or null. Present only when `expand` includes `customer`; `null`
         * when expanded and there is no related customer. customer.anyOf[1] (Value): {@link
         * ExpandedCustomerSummary}. A customer's summary fields, returned in place of a customer
         * ID when the customer is expanded. customer.anyOf[2] (Value): null. customer_id
         * (Required): string. The customer this subscription bills. Example:
         * "cus_01KEZF7C006X9JK6NZNA2SM9XD". deliveries_per_period (Required): integer. Deliveries
         * paid for by one billing period, from 1 to 24. One when no separate delivery cadence is
         * set. Line prices are per delivery. Format: int32. minimum: 1. maximum: 24. delivery
         * (Optional): {@link SubscriptionDelivery}. Saved delivery preference with the current
         * delivery method display. Write responses use the same display as GET: fixed shipping
         * reflects the current method configuration, and quoted shipping shows the last paid
         * shipping amount when available. A subscription's saved delivery preference: method,
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
         * (Optional): Array of integer. maxItems: 10. uniqueItems: true. quantity_options[]
         * (Value): integer. minimum: 1. maximum: 100. recurring_subtotal_money (Required): {@link
         * MoneyValue} or null. What one billing period's items cost before discounts, shipping,
         * and tax: each line's price with modifiers, times quantity. It changes when items,
         * quantity, or the plan change; editing the plan doesn't change it. For the next charge,
         * use a subscription preview in next_renewal mode. recurring_subtotal_money.anyOf[1]
         * (Value): {@link MoneyValue}. Monetary amount represented as integer minor units plus an
         * ISO 4217 currency code. recurring_subtotal_money.anyOf[2] (Value): null.
         * remaining_cycles (Required): integer or null. Charges left for a cycle limit, bounded by
         * an earlier scheduled cancellation. Null when there is no cycle limit or the subscription
         * is canceled. Format: uint64. minimum: 0. remaining_prepaid_deliveries (Required):
         * integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period
         * starts with deliveries_per_period minus one. When delivery_hold is present and this
         * count is positive, fixing delivery releases an already-paid delivery with shipping
         * waived and no new charge. A next_renewal preview still estimates the next paid billing
         * cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds.
         * Format: int32. minimum: 0. maximum: 23. resume_requested_at (Required): string or null.
         * When Flint accepted a pending resume request. Set only while paused with a resume Flint
         * has not applied yet. Clears when Flint resumes the subscription or refuses the request.
         * Format: date-time. Example: "2026-08-02T16:00:00Z". scheduled_cancel_at (Required):
         * string or null. When the scheduled cancellation takes effect: trial_end_at while
         * trialing, current_period_end_at while active, or next_retry_at while past_due. Paid
         * deliveries extend it to the last paid delivery when it is later. Null when
         * cancel_at_period_end is false or no cancellation time is available. Format: date-time.
         * Example: "2026-08-02T16:00:00Z". scheduled_plan_change (Required): {@link
         * SubscriptionScheduledPlanChange} or null. Frozen target terms for the next charged
         * renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null
         * on PATCH; replace through change-plan. scheduled_plan_change.anyOf[1] (Value): {@link
         * SubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged
         * renewal. scheduled_plan_change.anyOf[2] (Value): null. scheduled_promotions (Required):
         * Array of {@link SubscriptionPromotion}. Attached promotions whose first_cycle is after
         * the next charged cycle, completed_cycles + 1. Always present; empty when no promotions
         * are scheduled. scheduled_promotions[] (Value): {@link SubscriptionPromotion}. A
         * recurring promotion applied to a subscription, including its recurrence and remaining
         * discounted cycles. scheduled_resume_at (Required): string or null. When a pause with a
         * length (pause_duration_cycles) resumes on its own: that many delivery intervals after
         * paused_at on a prepaid subscription, or billing intervals otherwise. Null when the
         * subscription is not paused or the pause has no length, such as a pause until you resume
         * it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". service_location (Optional): {@link
         * SubscriptionServiceLocation}. Omitted for a checkout session credential that doesn't act
         * for the customer the buyer verified. The address where a subscription's service is
         * delivered, with the saved customer address it came from. starts_at (Optional): string.
         * When a scheduled start's first billing period begins. Present only until that first
         * payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z". status (Required):
         * string. Where the subscription is in its lifecycle. Each value says what it means. Value
         * enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
         * subscription_id (Required): string. Stable identifier of the subscription. Example:
         * "sub_01KEZF7C00BVRE8YDBXQB74BBM". subscription_plan (Optional): {@link
         * ExpandedSubscriptionPlanSummary} or null. Present only when `expand` includes
         * `subscription_plan`; `null` when expanded and there is no related subscription plan.
         * subscription_plan.anyOf[1] (Value): {@link ExpandedSubscriptionPlanSummary}. A
         * subscription plan's summary fields, including name, billing interval, currency, and
         * status, returned when the plan is expanded. subscription_plan.anyOf[2] (Value): null.
         * subscription_plan_id (Optional): string. Subscription plan ID. Omitted when terms_type
         * is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". supported_actions
         * (Required): Array of string. Merchant actions allowed by the subscription's state. A
         * route can still refuse a listed action for a transient reason, such as a renewal already
         * in progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle",
         * "renew", "retry_payment", "change_plan", "change_quantity". supported_actions[] (Value):
         * string. Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment",
         * "change_plan", "change_quantity". tax (Required): {@link SubscriptionTax} or null. The
         * tax the subscription's renewal, setup fee and plan change orders use. `null` when they
         * follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned
         * only to merchant credentials; omitted for buyer credentials. tax.anyOf[1] (Value):
         * {@link SubscriptionTax}. The tax the subscription's renewal, setup fee and plan change
         * orders use. Returned only to merchant credentials; omitted for buyer credentials.
         * tax.anyOf[2] (Value): null. terms_type (Required): string. Terms come from the
         * subscription plan in subscription_plan_id, or from subscription offers identified on
         * each offer line by subscription_offer_id. Value enum: "subscription_plan",
         * "subscription_offer". test_clock_id (Optional): string. ID of the test clock the
         * subscription's customer was created on. The subscription bills at the clock's time.
         * Present only when the customer is on a test clock. Included only in merchant responses
         * and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
         * trial_end_at (Optional): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". upcoming_delivery_hold (Optional): {@link
         * SubscriptionUpcomingDeliveryHold}. Delivery issue forecast for the next renewal at
         * renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an
         * upcoming renewal that will hold the subscription's delivery, and who can fix it.
         * updated_at (Required): string. RFC3339 timestamp. Format: date-time. Example:
         * "2026-08-02T16:00:00Z". version (Required): integer. Goes up with every change to the
         * subscription, including renewals and other changes Flint makes. Send it as
         * `expected_version` to apply an update only if nothing changed. Format: uint64. minimum:
         * 0.
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
             * Billing interval and count pairs frozen from the plan or shared by the subscription
             * offers. Line prices are per delivery. Each option charges for all deliveries in its
             * period. Changing the interval does not change the per-delivery price. maxItems: 12.
             * uniqueItems: true. [] (Value): {@link SubscriptionIntervalOption}. A billing cadence
             * offered by a subscription plan or offer. Every option bills the same line prices
             * once per period; prices are not scaled by the interval. For a different price per
             * interval, create separate plans.
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
             * What the buyer can do with the subscription, in this order: cancel, pause, resume,
             * reactivate, update_payment_method, retry_payment, update_delivery, skip,
             * update_billing_interval, update_quantity, swap_items, change_plan,
             * cancel_plan_change, then renew, under the store's buyer policy. The available cancel
             * and pause actions carry the choices they accept. A buyer's read or change through a
             * customer session on /v1/me, or in Flint's buyer account, lists all fourteen every
             * time; a merchant read gets an empty list. update_payment_method is required while a
             * payment is past due without an inventory_wait, due by next_retry_at when a retry is
             * scheduled, and when the card expires before next_billing_at, due by then. Example:
             * []. [] (Value): {@link BuyerAction}. One thing a buyer can do with an order,
             * subscription, invoice or return they read through /v1/me. Show the actions with
             * is_required as what needs the buyer's attention, and the first available action as
             * the primary action on the resource's page in your account.
             */
            "buyer_actions": Array<BuyerAction>;
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
             * Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when
             * the automatic ending agreement is reached, cancellation_details.requested_by when
             * recorded, payment_failed for other canceled subscriptions without a requester, and
             * other for a scheduled cancellation without a requester. Omitted otherwise. Value
             * enum: "buyer", "merchant", "integration", "payment_failed", "other",
             * "end_after_reached".
             */
            "cancellation_reason"?: "buyer"
                | "merchant"
                | "integration"
                | "payment_failed"
                | "other"
                | "end_after_reached"
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
             * delivery cadence is set. Line prices are per delivery. Format: int32. minimum: 1.
             * maximum: 24.
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
            /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100. */
            "quantity_options"?: Array<number>;
            /**
             * What one billing period's items cost before discounts, shipping, and tax: each
             * line's price with modifiers, times quantity. It changes when items, quantity, or the
             * plan change; editing the plan doesn't change it. For the next charge, use a
             * subscription preview in next_renewal mode. anyOf[1] (Value): {@link MoneyValue}.
             * Monetary amount represented as integer minor units plus an ISO 4217 currency code.
             * anyOf[2] (Value): null.
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
             * request. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
             * "retry_payment", "change_plan", "change_quantity". [] (Value): string. Value enum:
             * "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan",
             * "change_quantity".
             */
            "supported_actions": Array<"cancel"
                | "pause"
                | "resume"
                | "skip_cycle"
                | "renew"
                | "retry_payment"
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
    /** Value enum: "subscription.plan_changed". */
    "event_type"?: "subscription.plan_changed";
});
/** A line item on a subscription plan. */
export type SubscriptionPlanLineItem = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components"?: Array<BundleComponent>;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
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
    /**  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item. */
    "modifiers"?: Array<OrderLineItemModifier>;
    "name"?: string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & ((Exclude<SubscriptionPlanLineItemVariant & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemBundle & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/** A line item on a subscription plan. */
export type SubscriptionPlanLineItemBundle = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components"?: Array<BundleComponent>;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
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
    /**  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item. */
    "modifiers"?: Array<OrderLineItemModifier>;
    "name"?: string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
}));
/** A line item on a subscription plan. */
export type SubscriptionPlanLineItemCustom = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components"?: Array<BundleComponent>;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
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
    /**  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item. */
    "modifiers"?: Array<OrderLineItemModifier>;
    "name": string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** The `bundle` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputBundle = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
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
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": "bundle" | (string & {});
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
}));
/** The `bundle` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputBundleInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id": string;
    /** minLength: 1. */
    "description"?: string;
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
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "bundle". */
    "type": "bundle";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "bundle". */
    "type": ("bundle") & ("bundle");
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
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
})));
/** The `custom` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputCustom = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
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
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": "custom" | (string & {});
    /** minLength: 1. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValue;
}));
/** The `custom` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputCustomInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
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
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name": string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "custom". */
    "type": "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & (({
    /** Value enum: "custom". */
    "type": ("custom") & ("custom");
    /** minLength: 1. */
    "name": string;
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money": MoneyValueInput;
})
    & (({
    "variant_id"?: never;
}) & ({
    "bundle_id"?: never;
})));
/** The `variant` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputVariant = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
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
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
}));
/** The `variant` variant of `SubscriptionPlanLineItemInput`. */
export type SubscriptionPlanLineItemInputVariantInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
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
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "variant". */
    "type": "variant";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": ("variant") & ("variant");
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
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
})));
/**
 * A line item to put on a new subscription plan, from a variant, a bundle, or a custom name and
 * price.
 */
export type SubscriptionPlanLineItemRequest = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
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
     *  [] (Value): {@link OrderLineItemModifierRequest}. A modifier selection you supply on a line
     * item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata (Optional):
     * {@link MetadataMap}. Caller-owned metadata for this selection, returned on the order line
     * item's modifier. Values can't be empty strings. Keys starting with flint_ are reserved for
     * Flint, are not returned, and cannot be written through the public API. Caller-owned
     * key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs.
     * Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys
     * plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys
     * starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id (Optional):
     * string. ID of the existing modifier. Treated as an opaque resource reference; accepted
     * spellings follow resource ID validation. Its resolved price and the resulting line subtotal
     * must satisfy the order money ceiling. The amount and every computed order amount must not
     * exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or calculation above
     * this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the responsible input field.
     * Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequest}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalog}. The `catalog` variant of
     * `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link OrderLineItemModifierInputText}.
     * The `text` variant of `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequest & object, readonly unknown[]>)>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & ((Exclude<SubscriptionPlanLineItemInputVariant & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemInputBundle & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemInputCustom & object, readonly unknown[]>)
    | (Record<string, unknown>));
/**
 * A line item to put on a new subscription plan, from a variant, a bundle, or a custom name and
 * price.
 */
export type SubscriptionPlanLineItemRequestInput = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /** minLength: 1. Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /** minLength: 1. */
    "description"?: string;
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
     *  [] (Value): {@link OrderLineItemModifierRequestModelInput}. A modifier selection you supply
     * on a line item: a catalog modifier by ID or a text modifier, with a quantity. [].metadata
     * (Optional): {@link MetadataRequestInput}. Caller-owned metadata for this selection, returned
     * on the order line item's modifier. Values can't be empty strings. Keys starting with flint_
     * are reserved for Flint, are not returned, and cannot be written through the public API.
     * Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50
     * key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code
     * points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings,
     * and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].modifier_id
     * (Optional): string. ID of the existing modifier. Treated as an opaque resource reference;
     * accepted spellings follow resource ID validation. Its resolved price and the resulting line
     * subtotal must satisfy the order money ceiling. The amount and every computed order amount
     * must not exceed 99999999 minor units ($999,999.99 USD). Flint rejects an input or
     * calculation above this ceiling with INVALID_REQUEST and detail INVALID_VALUE at the
     * responsible input field. Lower payment option limits can apply. minLength: 1. Example:
     * "mod_01KEZF7C00SAWDZBQJX5H0XW1S". [].order_line_item_modifier_id (Optional): string.
     * Existing selection ID to retain during replacement. minLength: 1. pattern:
     * ^olim_[0-9A-HJKMNP-TV-Z]{26}$. Example: "olim_01KEZF7C00YP0WSZGRAD25EB1Z". [].quantity
     * (Optional): integer. Whole-number quantity; fractional quantities are not supported. Format:
     * int64. [].text (Optional): {@link TextModifierRequestInput}. The text to use. Send it with a
     * `text` modifier. Text a buyer entered for a text modifier group on an order line item.
     * [].type (Required): string. Selects the type branch. Value enum: "catalog", "text".
     * [].oneOf[1] (Value): {@link OrderLineItemModifierInputCatalogRequestInput}. The `catalog`
     * variant of `OrderLineItemModifierInput`. [].oneOf[2] (Value): {@link
     * OrderLineItemModifierInputTextRequestInput}. The `text` variant of
     * `OrderLineItemModifierInput`.
     */
    "modifiers"?: Array<(Exclude<OrderLineItemModifierRequestModelInput & object, readonly unknown[]>)
        & (({
        "order_line_item_modifier_id"?: never;
    }))>;
    /** minLength: 1. */
    "name"?: string;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. Default: 1.
     */
    "quantity"?: number;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. minLength: 1. pattern:
     * ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids"?: Array<string>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTaxRequestInput;
    /** Value enum: "variant", "bundle", "custom". */
    "type": "variant" | "bundle" | "custom";
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValueInput;
    /** minLength: 1. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id"?: string;
})
    & ((Exclude<SubscriptionPlanLineItemInputVariantInput & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemInputBundleInput & object, readonly unknown[]>)
    | (Exclude<SubscriptionPlanLineItemInputCustomInput & object, readonly unknown[]>));
/** A line item on a subscription plan. */
export type SubscriptionPlanLineItemVariant = ({
    /**
     * Whether buyers may adjust this line quantity. Defaults to false. At most one line per plan
     * may allow adjustment. Default: false.
     */
    "allow_quantity_adjustment"?: boolean;
    /**  [] (Value): {@link BundleComponent}. An item included in a bundle. */
    "bundle_components"?: Array<BundleComponent>;
    /** Example: "bun_01KEZF7C00TQ6S76Z6CVQF5SVN". */
    "bundle_id"?: string;
    /**
     *  [] (Value): {@link CategoryReference}. A reference to a product category by ID, handle, and
     * name.
     */
    "categories"?: Array<CategoryReference>;
    "description"?: string;
    /** An image with its URL, size, and alt text. */
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
    /**  [] (Value): {@link OrderLineItemModifier}. A modifier selected on an order line item. */
    "modifiers"?: Array<OrderLineItemModifier>;
    "name"?: string;
    /** Example: "prod_01KEZF7C00BVSHCNWVH528HB66". */
    "product_id"?: string;
    /** Whole-number quantity; fractional quantities are not supported. Format: int32. */
    "quantity": number;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options"?: Array<SelectedProductOption>;
    "sku"?: string;
    /**
     * Unique identifier for this subscription plan line item, prefixed `spli_`. Example:
     * "spli_01KEZF7C00H9FGC2KBRF82H87N".
     */
    "subscription_plan_line_item_id": string;
    /**
     * maxItems: 25. uniqueItems: true. [] (Value): string. pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$.
     * Example: "var_01KEZF7C004GSH2KT8CNYVMHGX".
     */
    "swap_variant_ids": Array<string>;
    /**
     * Current sellable alternatives in swap_variant_ids order, excluding the line's own variant
     * and variants priced in a different currency. Present on variant lines, including an empty
     * array. maxItems: 25. [] (Value): {@link SubscriptionPlanSwapVariant}. A variant a subscriber
     * can swap to on a plan line, with its name, options, and price.
     */
    "swap_variants"?: Array<SubscriptionPlanSwapVariant>;
    /** A line item's tax category and whether it is taxable. */
    "tax"?: OrderLineItemTax;
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Monetary amount represented as integer minor units plus an ISO 4217 currency code. */
    "unit_price_money"?: MoneyValue;
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
})
    & (({
    /** Value enum: "variant". */
    "type": "variant" | (string & {});
    /** Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
}));
/** A page of `SubscriptionPlan` objects. */
export type SubscriptionPlanListResponse = {
    /**
     * Resource, collection, or operation result returned by this request. [] (Value): {@link
     * SubscriptionPlan}. The recurring price and billing terms offered to customers.
     */
    "data": Array<SubscriptionPlan>;
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
/** A response containing `SubscriptionPlan` data. */
export type SubscriptionPlanResponse = {
    /**
     * Resource, collection, or operation result returned by this request. The recurring price and
     * billing terms offered to customers.
     */
    "data": SubscriptionPlan;
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
/** A variant a subscriber can swap to on a plan line, with its name, options, and price. */
export type SubscriptionPlanSwapVariant = {
    /** An image with its URL, size, and alt text. */
    "image"?: Image;
    "name": string;
    /**
     * Identifier of the product the offered swap variant belongs to. pattern:
     * ^prod_[0-9A-HJKMNP-TV-Z]{26}$. Example: "prod_01KEZF7C00BVSHCNWVH528HB66".
     */
    "product_id": string;
    /**
     *  [] (Value): {@link SelectedProductOption}. An option and value chosen for a product
     * variant, such as size Large.
     */
    "selected_options": Array<SelectedProductOption>;
    "sku"?: string;
    /**
     *  anyOf[1] (Value): {@link MoneyValue}. Monetary amount represented as integer minor units
     * plus an ISO 4217 currency code. anyOf[2] (Value): null.
     */
    "unit_price_money": ((MoneyValue) | (null));
    /** pattern: ^var_[0-9A-HJKMNP-TV-Z]{26}$. Example: "var_01KEZF7C004GSH2KT8CNYVMHGX". */
    "variant_id": string;
};
/** The `subscription_plan` variant of `SubscriptionTermsInput`. */
export type SubscriptionPlanTermsRequest = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly" | (string & {});
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 100. Default: 1.
     */
    "quantity"?: number;
    /** minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id": string;
    /** Value enum: "subscription_plan". */
    "type": "subscription_plan" | (string & {});
});
/** The `subscription_plan` variant of `SubscriptionTermsInput`. */
export type SubscriptionPlanTermsRequestInput = ({
    /** Value enum: "daily", "weekly", "monthly", "yearly". */
    "billing_interval"?: "daily" | "weekly" | "monthly" | "yearly";
    /** Format: int32. minimum: 1. maximum: 365. */
    "billing_interval_count"?: number;
    /**
     * Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1.
     * maximum: 100. Default: 1.
     */
    "quantity"?: number;
    /** minLength: 1. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". */
    "subscription_plan_id": string;
    /** Value enum: "subscription_plan". */
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
     * The verification state of a subscription's delivery address: `verified`, `unverified`,
     * `needs_review`, or `unverifiable`.
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
     * A postal address. Every address has country. Addresses Flint checked as complete (customer
     * and saved addresses, merchant, location, invoice, order delivery destination, tax identity,
     * fulfillment recipient and pickup addresses) always have line1 and city, and US ones always
     * have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax
     * locations hold only what was provided, such as postal_code and country.
     */
    "destination_address"?: Address;
    /** Value enum: "delivery_options". */
    "mode": "delivery_options" | (string & {});
    /** Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM". */
    "subscription_id"?: string;
};
/**
 * An error found while previewing a subscription, with a `code`, message, and the parameter at
 * fault.
 */
export type SubscriptionPreviewError = {
    "code": string;
    /**
     *  [] (Value): {@link ErrorDetail}. One specific failure within an error, with a `code` and
     * `message` plus fields that depend on the code, such as the `param`, resource, quantity, or
     * amount involved.
     */
    "details"?: Array<ErrorDetail>;
    "message": string;
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
    "name": string;
    /**
     * The attached promotion code ID; null when no promotion code was used. Example:
     * "pcode_01KEZF7C00JCC7QXWC262EF05T".
     */
    "promotion_code_id": string | null;
    /** Example: "promo_01KEZF7C00QQ8EZ74BDYSZ315V". */
    "promotion_id": string;
    /**
     * How often a promotion's discount repeats on a subscription: once, for a number of charged
     * payments, or forever.
     */
    "recurrence": PromotionRecurrence;
    /**
     * Discounted paid cycles remaining; null for a promotion that lasts forever unless a
     * replacement limits it. With incomplete historical records, remaining cycles may be lower
     * than the unused allowance. If no reliable bound is available, the allowance is treated as
     * used up. Format: int64.
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

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?int $billing_anchor_day
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read ?list<SubscriptionIntervalOption> $billing_interval_options
 * @property-read string $billing_schedule_owner
 * @property-read list<BuyerAction> $buyer_actions
 * @property-read bool $cancel_at_period_end
 * @property-read ?string $canceled_at
 * @property-read ?BuyerSubscriptionCancellationDetails $cancellation_details
 * @property-read ?string $cancellation_reason
 * @property-read int $completed_cycles
 * @property-read ?string $contract_end_at
 * @property-read ?string $contract_start_at
 * @property-read string $created_at
 * @property-read ?string $current_period_end_at
 * @property-read ?string $current_period_start_at
 * @property-read string $customer_id
 * @property-read int $deliveries_per_period
 * @property-read ?SubscriptionDelivery $delivery
 * @property-read ?SubscriptionDeliveryHold $delivery_hold
 * @property-read string|null $delivery_interval
 * @property-read int|null $delivery_interval_count
 * @property-read ?MoneyValue $early_termination_fee_money
 * @property-read mixed $end_after
 * @property-read string|null $expires_at
 * @property-read SubscriptionGiftRecipient|null $gift_recipient
 * @property-read ?BuyerSubscriptionInventoryWait $inventory_wait
 * @property-read ?bool $is_awaiting_billing_schedule
 * @property-read ?BuyerSubscriptionLastPaymentError $last_payment_error
 * @property-read list<BuyerSubscriptionLineItem> $line_items
 * @property-read string $merchant_id
 * @property-read ?string $missed_billing_at
 * @property-read ?string $next_billing_at
 * @property-read string|null $next_delivery_at
 * @property-read string|null $next_retry_at
 * @property-read ?string $open_renewal_order_id
 * @property-read ?MoneyValue $outstanding_money
 * @property-read ?string $pause_reason
 * @property-read ?string $paused_at
 * @property-read string|null $payment_method_due_at
 * @property-read string|null $payment_method_id
 * @property-read list<BuyerSubscriptionPlanChangeOption> $plan_change_options
 * @property-read list<SubscriptionPromotion> $promotions
 * @property-read bool $prorate_first_period
 * @property-read int $quantity
 * @property-read ?list<int> $quantity_options
 * @property-read MoneyValue|null $recurring_subtotal_money
 * @property-read int|null $remaining_cycles
 * @property-read int $remaining_prepaid_deliveries
 * @property-read string|null $resume_requested_at
 * @property-read string|null $scheduled_cancel_at
 * @property-read BuyerSubscriptionScheduledPlanChange|null $scheduled_plan_change
 * @property-read list<SubscriptionPromotion> $scheduled_promotions
 * @property-read string|null $scheduled_resume_at
 * @property-read ?BuyerSubscriptionServiceLocation $service_location
 * @property-read ?string $starts_at
 * @property-read string $status
 * @property-read string $subscription_id
 * @property-read BuyerExpandedSubscriptionPlanSummary|null $subscription_plan
 * @property-read ?string $subscription_plan_id
 * @property-read string $terms_type
 * @property-read ?string $trial_end_at
 * @property-read ?SubscriptionUpcomingDeliveryHold $upcoming_delivery_hold
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class BuyerSubscription extends Model {
    /** @param array{'billing_anchor_day'?: int, 'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<mixed>, 'billing_schedule_owner': string, 'buyer_actions': list<mixed>, 'cancel_at_period_end': bool, 'canceled_at'?: string, 'cancellation_details'?: mixed, 'cancellation_reason'?: string, 'completed_cycles': int, 'contract_end_at'?: string, 'contract_start_at'?: string, 'created_at': string, 'current_period_end_at'?: string, 'current_period_start_at'?: string, 'customer_id': string, 'deliveries_per_period': int, 'delivery'?: mixed, 'delivery_hold'?: mixed, 'delivery_interval': string|null, 'delivery_interval_count': int|null, 'early_termination_fee_money'?: mixed, 'end_after': mixed, 'expires_at': string|null, 'gift_recipient': mixed, 'inventory_wait'?: mixed, 'is_awaiting_billing_schedule'?: bool, 'last_payment_error'?: object{'code': string, 'failed_at': string, 'message': string}, 'line_items': list<mixed>, 'merchant_id': string, 'missed_billing_at'?: string, 'next_billing_at'?: string, 'next_delivery_at': string|null, 'next_retry_at': string|null, 'open_renewal_order_id'?: string, 'outstanding_money'?: mixed, 'pause_reason'?: string, 'paused_at'?: string, 'payment_method_due_at': string|null, 'payment_method_id': string|null, 'plan_change_options': list<mixed>, 'promotions': list<mixed>, 'prorate_first_period': bool, 'quantity': int, 'quantity_options'?: list<int>, 'recurring_subtotal_money': mixed, 'remaining_cycles': int|null, 'remaining_prepaid_deliveries': int, 'resume_requested_at': string|null, 'scheduled_cancel_at': string|null, 'scheduled_plan_change': mixed, 'scheduled_promotions': list<mixed>, 'scheduled_resume_at': string|null, 'service_location'?: mixed, 'starts_at'?: string, 'status': string, 'subscription_id': string, 'subscription_plan'?: mixed, 'subscription_plan_id'?: string, 'terms_type': string, 'trial_end_at'?: string, 'upcoming_delivery_hold'?: mixed, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscription')); }
    /** UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     * @return ?int
     */
    public function getBillingAnchorDay(): ?int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of billing_interval units between charges. Changes with billing_interval. Format: int32.
     * @return int
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. maxItems: 12. uniqueItems: true. [] (Value): {@see SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery, and each option charges for all deliveries in its period. Without a delivery cadence there is one delivery per period, so every option bills the same line prices once per period. With a delivery cadence, a longer period bills more deliveries of the lines that ship; other lines bill once per period. For a different price per interval with no delivery cadence, create separate plans.
     * @return ?list<SubscriptionIntervalOption>
     */
    public function getBillingIntervalOptions(): ?array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates the merchant supplies. Read-only for buyers. Value enum: "flint", "external".
     * @return string
     */
    public function getBillingScheduleOwner(): string { return $this->get('billing_schedule_owner'); }
    public function hasBillingScheduleOwner(): bool { return $this->has('billing_schedule_owner'); }
    /** What the buyer can do with the subscription, in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change, then renew, under the store's buyer policy. The available cancel and pause actions carry the choices they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant read gets an empty list. update_payment_method is required while a payment is past due without an inventory_wait, due by next_retry_at when a retry is scheduled, and when the card expires before next_billing_at, due by then. [] (Value): {@see BuyerAction}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerAction>
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * @return bool
     */
    public function getCancelAtPeriodEnd(): bool { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCanceledAt(): ?string { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. The cancellation request behind a scheduled or completed cancellation.
     * @return ?BuyerSubscriptionCancellationDetails
     */
    public function getCancellationDetails(): ?BuyerSubscriptionCancellationDetails { return $this->get('cancellation_details'); }
    public function hasCancellationDetails(): bool { return $this->has('cancellation_details'); }
    /** Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration", "payment_failed", "other", "end_after_reached", "signup_order_refunded".
     * @return ?string
     */
    public function getCancellationReason(): ?string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * @return int
     */
    public function getCompletedCycles(): int { return $this->get('completed_cycles'); }
    public function hasCompletedCycles(): bool { return $this->has('completed_cycles'); }
    /** When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: date-time.
     * @return ?string
     */
    public function getContractEndAt(): ?string { return $this->get('contract_end_at'); }
    public function hasContractEndAt(): bool { return $this->has('contract_end_at'); }
    /** When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: date-time.
     * @return ?string
     */
    public function getContractStartAt(): ?string { return $this->get('contract_start_at'); }
    public function hasContractStartAt(): bool { return $this->has('contract_start_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCurrentPeriodEndAt(): ?string { return $this->get('current_period_end_at'); }
    public function hasCurrentPeriodEndAt(): bool { return $this->has('current_period_end_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCurrentPeriodStartAt(): ?string { return $this->get('current_period_start_at'); }
    public function hasCurrentPeriodStartAt(): bool { return $this->has('current_period_start_at'); }
    /** The customer this subscription bills.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
     * @return int
     */
    public function getDeliveriesPerPeriod(): int { return $this->get('deliveries_per_period'); }
    public function hasDeliveriesPerPeriod(): bool { return $this->has('deliveries_per_period'); }
    /** Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it.
     * @return ?SubscriptionDelivery
     */
    public function getDelivery(): ?SubscriptionDelivery { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or destination no longer works, and who can fix it.
     * @return ?SubscriptionDeliveryHold
     */
    public function getDeliveryHold(): ?SubscriptionDeliveryHold { return $this->get('delivery_hold'); }
    public function hasDeliveryHold(): bool { return $this->has('delivery_hold'); }
    /** Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly", "yearly", null.
     * @return string|null
     */
    public function getDeliveryInterval(): string|null { return $this->get('delivery_interval'); }
    public function hasDeliveryInterval(): bool { return $this->has('delivery_interval'); }
    /** Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: int32. minimum: 1.
     * @return int|null
     */
    public function getDeliveryIntervalCount(): int|null { return $this->get('delivery_interval_count'); }
    public function hasDeliveryIntervalCount(): bool { return $this->has('delivery_interval_count'); }
    /** The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getEarlyTerminationFeeMoney(): ?MoneyValue { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. anyOf[1] (Value): {@see SubscriptionEndAfter}. The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getEndAfter(): mixed { return $this->get('end_after'); }
    public function hasEndAfter(): bool { return $this->has('end_after'); }
    /** Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Format: date-time.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@see SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the purchaser, who pays, gets receipts and reminders, and manages the subscription. delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
     * @return SubscriptionGiftRecipient|null
     */
    public function getGiftRecipient(): SubscriptionGiftRecipient|null { return $this->get('gift_recipient'); }
    public function hasGiftRecipient(): bool { return $this->has('gift_recipient'); }
    /** The next renewal is waiting for an item to come back in stock. The buyer isn't charged until it ships. Nothing is wrong with the card. Shows when a subscription renewal started waiting for inventory.
     * @return ?BuyerSubscriptionInventoryWait
     */
    public function getInventoryWait(): ?BuyerSubscriptionInventoryWait { return $this->get('inventory_wait'); }
    public function hasInventoryWait(): bool { return $this->has('inventory_wait'); }
    /** True while an active or trialing subscription on an external billing schedule has no next billing date.
     * @return ?bool
     */
    public function getIsAwaitingBillingSchedule(): ?bool { return $this->get('is_awaiting_billing_schedule'); }
    public function hasIsAwaitingBillingSchedule(): bool { return $this->has('is_awaiting_billing_schedule'); }
    /** Why the latest subscription renewal payment failed. Omits merchant remediation and sensitive decline signals.
     * @return ?BuyerSubscriptionLastPaymentError
     */
    public function getLastPaymentError(): ?BuyerSubscriptionLastPaymentError { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. [] (Value): {@see BuyerSubscriptionLineItem}. An item included in a customer's recurring purchase.
     * @return list<BuyerSubscriptionLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** ID of the merchant this resource belongs to.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: date-time.
     * @return ?string
     */
    public function getMissedBillingAt(): ?string { return $this->get('missed_billing_at'); }
    public function hasMissedBillingAt(): bool { return $this->has('missed_billing_at'); }
    /** When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: date-time.
     * @return ?string
     */
    public function getNextBillingAt(): ?string { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. Format: date-time.
     * @return string|null
     */
    public function getNextDeliveryAt(): string|null { return $this->get('next_delivery_at'); }
    public function hasNextDeliveryAt(): bool { return $this->has('next_delivery_at'); }
    /** Recorded automatic payment retry time. Null when no retry time is available. Format: date-time.
     * @return string|null
     */
    public function getNextRetryAt(): string|null { return $this->get('next_retry_at'); }
    public function hasNextRetryAt(): bool { return $this->has('next_retry_at'); }
    /** ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included.
     * @return ?string
     */
    public function getOpenRenewalOrderId(): ?string { return $this->get('open_renewal_order_id'); }
    public function hasOpenRenewalOrderId(): bool { return $this->has('open_renewal_order_id'); }
    /** Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getOutstandingMoney(): ?MoneyValue { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Value enum: "buyer", "delivery_action_required", "merchant", "payment_failed".
     * @return ?string
     */
    public function getPauseReason(): ?string { return $this->get('pause_reason'); }
    public function hasPauseReason(): bool { return $this->has('pause_reason'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getPausedAt(): ?string { return $this->get('paused_at'); }
    public function hasPausedAt(): bool { return $this->has('paused_at'); }
    /** First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. Format: date-time.
     * @return string|null
     */
    public function getPaymentMethodDueAt(): string|null { return $this->get('payment_method_due_at'); }
    public function hasPaymentMethodDueAt(): bool { return $this->has('payment_method_due_at'); }
    /** Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it.
     * @return string|null
     */
    public function getPaymentMethodId(): string|null { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Plans this subscription may choose, in the store's display order. Includes only active plans with the same currency and delivery requirement whose billing timing is allowed in this subscription's current state. Empty when no plan change is available. maxItems: 25. [] (Value): {@see BuyerSubscriptionPlanChangeOption}. A subscription plan this buyer may choose, with the store's billing timing and the target plan's summary.
     * @return list<BuyerSubscriptionPlanChangeOption>
     */
    public function getPlanChangeOptions(): array { return $this->get('plan_change_options'); }
    public function hasPlanChangeOptions(): bool { return $this->has('plan_change_options'); }
    /** Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. [] (Value): {@see SubscriptionPromotion}. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.
     * @return list<SubscriptionPromotion>
     */
    public function getPromotions(): array { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period.
     * @return bool
     */
    public function getProrateFirstPeriod(): bool { return $this->get('prorate_first_period'); }
    public function hasProrateFirstPeriod(): bool { return $this->has('prorate_first_period'); }
    /** How many of each line the subscription bills each period, as a whole number; fractional quantities are not supported. A change applies from the next renewal that has not been paid. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Quantities this subscription can be changed to, from 1 to 100, in ascending order. A change to quantity must send one of these values, and the request is refused otherwise. A buyer can change quantity only when more than one is listed. For a subscription on a plan, the list follows the plan's current quantity_options. A subscription that came from an offer keeps the choices the offer had at signup. [1] when no other quantity is offered. maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100.
     * @return ?list<int>
     */
    public function getQuantityOptions(): ?array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. anyOf[1] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return MoneyValue|null
     */
    public function getRecurringSubtotalMoney(): MoneyValue|null { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Format: uint64. minimum: 0.
     * @return int|null
     */
    public function getRemainingCycles(): int|null { return $this->get('remaining_cycles'); }
    public function hasRemainingCycles(): bool { return $this->has('remaining_cycles'); }
    /** Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23.
     * @return int
     */
    public function getRemainingPrepaidDeliveries(): int { return $this->get('remaining_prepaid_deliveries'); }
    public function hasRemainingPrepaidDeliveries(): bool { return $this->has('remaining_prepaid_deliveries'); }
    /** When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. Format: date-time.
     * @return string|null
     */
    public function getResumeRequestedAt(): string|null { return $this->get('resume_requested_at'); }
    public function hasResumeRequestedAt(): bool { return $this->has('resume_requested_at'); }
    /** When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * @return string|null
     */
    public function getScheduledCancelAt(): string|null { return $this->get('scheduled_cancel_at'); }
    public function hasScheduledCancelAt(): bool { return $this->has('scheduled_cancel_at'); }
    /** Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. anyOf[1] (Value): {@see BuyerSubscriptionScheduledPlanChange}. Frozen target terms that apply at the next charged renewal. anyOf[2] (Value): null.
     * @return BuyerSubscriptionScheduledPlanChange|null
     */
    public function getScheduledPlanChange(): BuyerSubscriptionScheduledPlanChange|null { return $this->get('scheduled_plan_change'); }
    public function hasScheduledPlanChange(): bool { return $this->has('scheduled_plan_change'); }
    /** Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. [] (Value): {@see SubscriptionPromotion}. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.
     * @return list<SubscriptionPromotion>
     */
    public function getScheduledPromotions(): array { return $this->get('scheduled_promotions'); }
    public function hasScheduledPromotions(): bool { return $this->has('scheduled_promotions'); }
    /** When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: date-time.
     * @return string|null
     */
    public function getScheduledResumeAt(): string|null { return $this->get('scheduled_resume_at'); }
    public function hasScheduledResumeAt(): bool { return $this->has('scheduled_resume_at'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The customer address reference or address used as the buyer's subscription service location.
     * @return ?BuyerSubscriptionServiceLocation
     */
    public function getServiceLocation(): ?BuyerSubscriptionServiceLocation { return $this->get('service_location'); }
    public function hasServiceLocation(): bool { return $this->has('service_location'); }
    /** When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: date-time.
     * @return ?string
     */
    public function getStartsAt(): ?string { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** Where the subscription is in its lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Stable identifier of the subscription.
     * @return string
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /**  anyOf[1] (Value): {@see BuyerExpandedSubscriptionPlanSummary}. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items. anyOf[2] (Value): null.
     * @return BuyerExpandedSubscriptionPlanSummary|null
     */
    public function getSubscriptionPlan(): BuyerExpandedSubscriptionPlanSummary|null { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** Subscription plan ID. Omitted when terms_type is subscription_offer.
     * @return ?string
     */
    public function getSubscriptionPlanId(): ?string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * @return string
     */
    public function getTermsType(): string { return $this->get('terms_type'); }
    public function hasTermsType(): bool { return $this->has('terms_type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getTrialEndAt(): ?string { return $this->get('trial_end_at'); }
    public function hasTrialEndAt(): bool { return $this->has('trial_end_at'); }
    /** Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * @return ?SubscriptionUpcomingDeliveryHold
     */
    public function getUpcomingDeliveryHold(): ?SubscriptionUpcomingDeliveryHold { return $this->get('upcoming_delivery_hold'); }
    public function hasUpcomingDeliveryHold(): bool { return $this->has('upcoming_delivery_hold'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $awaiting_billing_schedule
 * @property-read int $billing_anchor_day
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass> $billing_interval_options
 * @property-read string $billing_schedule_owner
 * @property-read list<BuyerActionInput|array<array-key, mixed>|\stdClass> $buyer_actions
 * @property-read bool $cancel_at_period_end
 * @property-read string|\DateTimeInterface $canceled_at
 * @property-read BuyerSubscriptionCancellationDetailsInput|array<array-key, mixed>|\stdClass $cancellation_details
 * @property-read string $cancellation_reason
 * @property-read int $completed_cycles
 * @property-read string|\DateTimeInterface $contract_end_at
 * @property-read string|\DateTimeInterface $contract_start_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $current_period_end_at
 * @property-read string|\DateTimeInterface $current_period_start_at
 * @property-read string $customer_id
 * @property-read SubscriptionDeliveryInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read SubscriptionDeliveryHoldInput|array<array-key, mixed>|\stdClass $delivery_hold
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $early_termination_fee_money
 * @property-read array{'code': string, 'failed_at': string|\DateTimeInterface, 'message': string, ...}|object $last_payment_error
 * @property-read list<BuyerSubscriptionLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $merchant_id
 * @property-read string|\DateTimeInterface $missed_billing_at
 * @property-read string|\DateTimeInterface $next_billing_at
 * @property-read string|\DateTimeInterface|null $next_retry_at
 * @property-read string $open_renewal_order_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read string $pause_reason
 * @property-read string|\DateTimeInterface $paused_at
 * @property-read string $payment_method_id
 * @property-read list<SubscriptionPromotionInput|array<array-key, mixed>|\stdClass> $promotions
 * @property-read int $quantity
 * @property-read list<int> $quantity_options
 * @property-read array{'amount': string, 'currency': string}|object|null $recurring_subtotal_money
 * @property-read string|\DateTimeInterface|null $resume_requested_at
 * @property-read string|\DateTimeInterface|null $scheduled_cancel_at
 * @property-read string|\DateTimeInterface|null $scheduled_resume_at
 * @property-read BuyerSubscriptionServiceLocationInput|array<array-key, mixed>|\stdClass $service_location
 * @property-read string|\DateTimeInterface $starts_at
 * @property-read string $status
 * @property-read string $subscription_id
 * @property-read array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<BuyerSubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $subscription_plan
 * @property-read string $subscription_plan_id
 * @property-read string $terms_type
 * @property-read string|\DateTimeInterface $trial_end_at
 * @property-read SubscriptionUpcomingDeliveryHoldInput|array<array-key, mixed>|\stdClass $upcoming_delivery_hold
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class BuyerSubscriptionInput extends Model {
    /** @param array{'awaiting_billing_schedule'?: bool, 'billing_anchor_day'?: int, 'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'billing_schedule_owner': string, 'buyer_actions': list<BuyerActionInput|array<array-key, mixed>|\stdClass>, 'cancel_at_period_end': bool, 'canceled_at'?: string|\DateTimeInterface, 'cancellation_details'?: BuyerSubscriptionCancellationDetailsInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'completed_cycles': int, 'contract_end_at'?: string|\DateTimeInterface, 'contract_start_at'?: string|\DateTimeInterface, 'created_at'?: string|\DateTimeInterface, 'current_period_end_at'?: string|\DateTimeInterface, 'current_period_start_at'?: string|\DateTimeInterface, 'customer_id': string, 'delivery'?: SubscriptionDeliveryInput|array<array-key, mixed>|\stdClass, 'delivery_hold'?: SubscriptionDeliveryHoldInput|array<array-key, mixed>|\stdClass, 'early_termination_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'last_payment_error'?: array{'code': string, 'failed_at': string|\DateTimeInterface, 'message': string, ...}|object, 'line_items': list<BuyerSubscriptionLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_id'?: string, 'missed_billing_at'?: string|\DateTimeInterface, 'next_billing_at'?: string|\DateTimeInterface, 'next_retry_at': string|\DateTimeInterface|null, 'open_renewal_order_id'?: string, 'outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'pause_reason'?: string, 'paused_at'?: string|\DateTimeInterface, 'payment_method_id': string, 'promotions': list<SubscriptionPromotionInput|array<array-key, mixed>|\stdClass>, 'quantity': int, 'quantity_options'?: list<int>, 'recurring_subtotal_money': array{'amount': string, 'currency': string}|object|null, 'resume_requested_at': string|\DateTimeInterface|null, 'scheduled_cancel_at': string|\DateTimeInterface|null, 'scheduled_resume_at': string|\DateTimeInterface|null, 'service_location'?: BuyerSubscriptionServiceLocationInput|array<array-key, mixed>|\stdClass, 'starts_at'?: string|\DateTimeInterface, 'status': string, 'subscription_id': string, 'subscription_plan'?: array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<BuyerSubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'subscription_plan_id'?: string, 'terms_type': string, 'trial_end_at'?: string|\DateTimeInterface, 'upcoming_delivery_hold'?: SubscriptionUpcomingDeliveryHoldInput|array<array-key, mixed>|\stdClass, 'updated_at'?: string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerSubscriptionInput')); }
    /** True while an active or trialing subscription on an external billing schedule has no next billing date.
     * @return bool
     * @throws SdkError When awaiting_billing_schedule is omitted; use hasAwaitingBillingSchedule() or valueOrDefault().
     */
    public function getAwaitingBillingSchedule(): bool { return $this->get('awaiting_billing_schedule'); }
    public function hasAwaitingBillingSchedule(): bool { return $this->has('awaiting_billing_schedule'); }
    /** UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     * @return int
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of billing_interval units between charges. Changes with billing_interval. Format: int32.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** maxItems: 12. uniqueItems: true. [] (Value): {@see SubscriptionIntervalOptionInput}. A billing interval, such as every 2 months, offered by a subscription plan.
     * @return list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates the merchant supplies. Read-only for buyers. Value enum: "flint", "external".
     * @return string
     * @throws SdkError When billing_schedule_owner is omitted; use hasBillingScheduleOwner() or valueOrDefault().
     */
    public function getBillingScheduleOwner(): string { return $this->get('billing_schedule_owner'); }
    public function hasBillingScheduleOwner(): bool { return $this->has('billing_schedule_owner'); }
    /** What the buyer can do with the subscription, in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip, update_billing_interval, update_quantity, swap_items, then renew, under the store's buyer policy. The available cancel and pause actions carry the choices they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all twelve every time; a merchant read gets an empty list. update_payment_method is required while a payment is past due, due by next_retry_at when a retry is scheduled, and when the card expires before next_billing_at, due by then. Example: []. [] (Value): {@see BuyerActionInput}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
     * @return list<BuyerActionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When buyer_actions is omitted; use hasBuyerActions() or valueOrDefault().
     */
    public function getBuyerActions(): array { return $this->get('buyer_actions'); }
    public function hasBuyerActions(): bool { return $this->has('buyer_actions'); }
    /** True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false.
     * @return bool
     * @throws SdkError When cancel_at_period_end is omitted; use hasCancelAtPeriodEnd() or valueOrDefault().
     */
    public function getCancelAtPeriodEnd(): bool { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. The cancellation request behind a scheduled or completed cancellation.
     * @return BuyerSubscriptionCancellationDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When cancellation_details is omitted; use hasCancellationDetails() or valueOrDefault().
     */
    public function getCancellationDetails(): mixed { return $this->get('cancellation_details'); }
    public function hasCancellationDetails(): bool { return $this->has('cancellation_details'); }
    /** Why the subscription is canceled or scheduled to cancel. Uses cancellation_details.requested_by when recorded, payment_failed for a canceled subscription without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer", "merchant", "payment_failed", "other".
     * @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Format: uint64. minimum: 0.
     * @return int
     * @throws SdkError When completed_cycles is omitted; use hasCompletedCycles() or valueOrDefault().
     */
    public function getCompletedCycles(): int { return $this->get('completed_cycles'); }
    public function hasCompletedCycles(): bool { return $this->has('completed_cycles'); }
    /** When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When contract_end_at is omitted; use hasContractEndAt() or valueOrDefault().
     */
    public function getContractEndAt(): string|\DateTimeInterface { return $this->get('contract_end_at'); }
    public function hasContractEndAt(): bool { return $this->has('contract_end_at'); }
    /** When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When contract_start_at is omitted; use hasContractStartAt() or valueOrDefault().
     */
    public function getContractStartAt(): string|\DateTimeInterface { return $this->get('contract_start_at'); }
    public function hasContractStartAt(): bool { return $this->has('contract_start_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When current_period_end_at is omitted; use hasCurrentPeriodEndAt() or valueOrDefault().
     */
    public function getCurrentPeriodEndAt(): string|\DateTimeInterface { return $this->get('current_period_end_at'); }
    public function hasCurrentPeriodEndAt(): bool { return $this->has('current_period_end_at'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When current_period_start_at is omitted; use hasCurrentPeriodStartAt() or valueOrDefault().
     */
    public function getCurrentPeriodStartAt(): string|\DateTimeInterface { return $this->get('current_period_start_at'); }
    public function hasCurrentPeriodStartAt(): bool { return $this->has('current_period_start_at'); }
    /** customer_id
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. A subscription's saved delivery preference: method, destination, recipient, shipping cost, and who last changed it.
     * @return SubscriptionDeliveryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. A hold on a subscription's deliveries because its delivery method or destination no longer works, and who can fix it.
     * @return SubscriptionDeliveryHoldInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery_hold is omitted; use hasDeliveryHold() or valueOrDefault().
     */
    public function getDeliveryHold(): mixed { return $this->get('delivery_hold'); }
    public function hasDeliveryHold(): bool { return $this->has('delivery_hold'); }
    /** The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When early_termination_fee_money is omitted; use hasEarlyTerminationFeeMoney() or valueOrDefault().
     */
    public function getEarlyTerminationFeeMoney(): mixed { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** Why the latest subscription renewal payment failed. Omits merchant remediation and sensitive decline signals. code (Required): string. Flint-normalized payment failure code. Unknown provider values are returned as payment_failed. Value enum: "card_declined", "insufficient_funds", "bank_account_closed", "bank_account_not_found", "bank_debit_not_authorized", "bank_account_restricted", "bank_debit_limit_exceeded", "authentication_required", "payment_blocked", "expired_card", "incorrect_cvc", "processing_error", "payment_method_unavailable", "payment_method_declined", "payment_not_completed", "payment_action_expired", "payment_method_temporarily_unavailable", "payment_failed". failed_at (Required): string. Time the payment attempt concluded in failure. Format: date-time. message (Required): string. Flint-authored payment failure message written for the buyer. This is stable explanatory text, not raw provider copy.
     * @return array{'code': string, 'failed_at': string|\DateTimeInterface, 'message': string, ...}|object
     * @throws SdkError When last_payment_error is omitted; use hasLastPaymentError() or valueOrDefault().
     */
    public function getLastPaymentError(): array|object { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. [] (Value): {@see BuyerSubscriptionLineItemInput}. An item included in a customer's recurring purchase.
     * @return list<BuyerSubscriptionLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When missed_billing_at is omitted; use hasMissedBillingAt() or valueOrDefault().
     */
    public function getMissedBillingAt(): string|\DateTimeInterface { return $this->get('missed_billing_at'); }
    public function hasMissedBillingAt(): bool { return $this->has('missed_billing_at'); }
    /** When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports awaiting_billing_schedule. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When next_billing_at is omitted; use hasNextBillingAt() or valueOrDefault().
     */
    public function getNextBillingAt(): string|\DateTimeInterface { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** Recorded automatic payment retry time. Null when no retry time is available. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When next_retry_at is omitted; use hasNextRetryAt() or valueOrDefault().
     */
    public function getNextRetryAt(): string|\DateTimeInterface|null { return $this->get('next_retry_at'); }
    public function hasNextRetryAt(): bool { return $this->has('next_retry_at'); }
    /** ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included.
     * @return string
     * @throws SdkError When open_renewal_order_id is omitted; use hasOpenRenewalOrderId() or valueOrDefault().
     */
    public function getOpenRenewalOrderId(): string { return $this->get('open_renewal_order_id'); }
    public function hasOpenRenewalOrderId(): bool { return $this->has('open_renewal_order_id'); }
    /** Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outstanding_money is omitted; use hasOutstandingMoney() or valueOrDefault().
     */
    public function getOutstandingMoney(): mixed { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Value enum: "buyer", "delivery_action_required", "merchant", "payment_failed".
     * @return string
     * @throws SdkError When pause_reason is omitted; use hasPauseReason() or valueOrDefault().
     */
    public function getPauseReason(): string { return $this->get('pause_reason'); }
    public function hasPauseReason(): bool { return $this->has('pause_reason'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When paused_at is omitted; use hasPausedAt() or valueOrDefault().
     */
    public function getPausedAt(): string|\DateTimeInterface { return $this->get('paused_at'); }
    public function hasPausedAt(): bool { return $this->has('paused_at'); }
    /** The saved payment method renewals charge. Change it with PATCH.
     * @return string
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Recurring promotions applying to the next charged cycle. Empty when none apply; signup-only and exhausted promotions are excluded. [] (Value): {@see SubscriptionPromotionInput}. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.
     * @return list<SubscriptionPromotionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When promotions is omitted; use hasPromotions() or valueOrDefault().
     */
    public function getPromotions(): array { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** How many of each line the subscription bills each period, as a whole number; fractional quantities are not supported. A change applies from the next renewal that has not been paid. Format: int32.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** maxItems: 10. uniqueItems: true. [] (Value): integer. minimum: 1. maximum: 100.
     * @return list<int>
     * @throws SdkError When quantity_options is omitted; use hasQuantityOptions() or valueOrDefault().
     */
    public function getQuantityOptions(): array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When recurring_subtotal_money is omitted; use hasRecurringSubtotalMoney() or valueOrDefault().
     */
    public function getRecurringSubtotalMoney(): mixed { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When resume_requested_at is omitted; use hasResumeRequestedAt() or valueOrDefault().
     */
    public function getResumeRequestedAt(): string|\DateTimeInterface|null { return $this->get('resume_requested_at'); }
    public function hasResumeRequestedAt(): bool { return $this->has('resume_requested_at'); }
    /** When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Null when cancel_at_period_end is false or no cancellation time is available. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_cancel_at is omitted; use hasScheduledCancelAt() or valueOrDefault().
     */
    public function getScheduledCancelAt(): string|\DateTimeInterface|null { return $this->get('scheduled_cancel_at'); }
    public function hasScheduledCancelAt(): bool { return $this->has('scheduled_cancel_at'); }
    /** When a pause with a length (pause_duration_cycles) resumes on its own: that many billing intervals after paused_at. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_resume_at is omitted; use hasScheduledResumeAt() or valueOrDefault().
     */
    public function getScheduledResumeAt(): string|\DateTimeInterface|null { return $this->get('scheduled_resume_at'); }
    public function hasScheduledResumeAt(): bool { return $this->has('scheduled_resume_at'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The customer address reference or address used as the buyer's subscription service location.
     * @return BuyerSubscriptionServiceLocationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When service_location is omitted; use hasServiceLocation() or valueOrDefault().
     */
    public function getServiceLocation(): mixed { return $this->get('service_location'); }
    public function hasServiceLocation(): bool { return $this->has('service_location'); }
    /** When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): string|\DateTimeInterface { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** subscription_id
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /**  anyOf[1] (Value): {@see BuyerExpandedSubscriptionPlanSummaryInput}. A subscription plan expanded on a buyer's order: billing interval, setup fee, trial length, status, and line items. anyOf[2] (Value): null.
     * @return array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<BuyerSubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When subscription_plan is omitted; use hasSubscriptionPlan() or valueOrDefault().
     */
    public function getSubscriptionPlan(): mixed { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** Subscription plan ID. Omitted when terms_type is subscription_offer.
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * @return string
     * @throws SdkError When terms_type is omitted; use hasTermsType() or valueOrDefault().
     */
    public function getTermsType(): string { return $this->get('terms_type'); }
    public function hasTermsType(): bool { return $this->has('terms_type'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When trial_end_at is omitted; use hasTrialEndAt() or valueOrDefault().
     */
    public function getTrialEndAt(): string|\DateTimeInterface { return $this->get('trial_end_at'); }
    public function hasTrialEndAt(): bool { return $this->has('trial_end_at'); }
    /** Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. A delivery problem detected for an upcoming renewal that will hold the subscription's delivery, and who can fix it.
     * @return SubscriptionUpcomingDeliveryHoldInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When upcoming_delivery_hold is omitted; use hasUpcomingDeliveryHold() or valueOrDefault().
     */
    public function getUpcomingDeliveryHold(): mixed { return $this->get('upcoming_delivery_hold'); }
    public function hasUpcomingDeliveryHold(): bool { return $this->has('upcoming_delivery_hold'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: uint64. minimum: 0.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

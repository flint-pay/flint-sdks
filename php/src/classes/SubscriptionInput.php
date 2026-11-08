<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $billing_anchor_day
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass> $billing_interval_options
 * @property-read string $billing_schedule_owner
 * @property-read string|\DateTimeInterface $billing_schedule_waiting_started_at
 * @property-read list<BuyerActionInput|array<array-key, mixed>|\stdClass> $buyer_actions
 * @property-read bool $cancel_at_period_end
 * @property-read string|\DateTimeInterface $canceled_at
 * @property-read SubscriptionCancellationDetailsInput|array<array-key, mixed>|\stdClass $cancellation_details
 * @property-read string $cancellation_reason
 * @property-read int $completed_cycles
 * @property-read string|\DateTimeInterface $contract_end_at
 * @property-read string|\DateTimeInterface $contract_start_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $current_period_end_at
 * @property-read string|\DateTimeInterface $current_period_start_at
 * @property-read array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $customer
 * @property-read string $customer_id
 * @property-read SubscriptionDeliveryInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read SubscriptionDeliveryHoldInput|array<array-key, mixed>|\stdClass $delivery_hold
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $early_termination_fee_money
 * @property-read array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone': string, 'type': string}|object|null $end_after
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string $external_reference_id
 * @property-read SubscriptionInventoryWaitInput|array<array-key, mixed>|\stdClass $inventory_wait
 * @property-read bool $is_awaiting_billing_schedule
 * @property-read PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass $last_payment_error
 * @property-read list<SubscriptionLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read string $merchant_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string|\DateTimeInterface $missed_billing_at
 * @property-read string|\DateTimeInterface $next_billing_at
 * @property-read string|\DateTimeInterface|null $next_retry_at
 * @property-read string $open_renewal_order_id
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $outstanding_money
 * @property-read string $pause_reason
 * @property-read string|\DateTimeInterface $paused_at
 * @property-read array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $payment_method
 * @property-read string|\DateTimeInterface|null $payment_method_due_at
 * @property-read string|null $payment_method_id
 * @property-read list<SubscriptionPromotionInput|array<array-key, mixed>|\stdClass> $promotions
 * @property-read bool $prorate_first_period
 * @property-read int $quantity
 * @property-read list<int> $quantity_options
 * @property-read array{'amount': string, 'currency': string}|object|null $recurring_subtotal_money
 * @property-read int|null $remaining_cycles
 * @property-read string|\DateTimeInterface|null $resume_requested_at
 * @property-read string|\DateTimeInterface|null $scheduled_cancel_at
 * @property-read array{'billing_interval': string, 'billing_interval_count': int, 'effective_at': string|\DateTimeInterface|null, 'line_items': list<SubscriptionLineItemInput|array<array-key, mixed>|\stdClass>, 'quantity': int, 'recurring_subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_by': string, 'scheduled_at': string|\DateTimeInterface, 'subscription_plan_id': string, ...}|object|null $scheduled_plan_change
 * @property-read list<SubscriptionPromotionInput|array<array-key, mixed>|\stdClass> $scheduled_promotions
 * @property-read string|\DateTimeInterface|null $scheduled_resume_at
 * @property-read SubscriptionServiceLocationInput|array<array-key, mixed>|\stdClass $service_location
 * @property-read string|\DateTimeInterface $starts_at
 * @property-read string $status
 * @property-read string $subscription_id
 * @property-read array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<SubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $subscription_plan
 * @property-read string $subscription_plan_id
 * @property-read list<string> $supported_actions
 * @property-read string $terms_type
 * @property-read string $test_clock_id
 * @property-read string|\DateTimeInterface $trial_end_at
 * @property-read SubscriptionUpcomingDeliveryHoldInput|array<array-key, mixed>|\stdClass $upcoming_delivery_hold
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionInput extends Model {
    /** @param array{'billing_anchor_day'?: int, 'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'billing_schedule_owner': string, 'billing_schedule_waiting_started_at'?: string|\DateTimeInterface, 'buyer_actions': list<BuyerActionInput|array<array-key, mixed>|\stdClass>, 'cancel_at_period_end': bool, 'canceled_at'?: string|\DateTimeInterface, 'cancellation_details'?: SubscriptionCancellationDetailsInput|array<array-key, mixed>|\stdClass, 'cancellation_reason'?: string, 'completed_cycles': int, 'contract_end_at'?: string|\DateTimeInterface, 'contract_start_at'?: string|\DateTimeInterface, 'created_at': string|\DateTimeInterface, 'current_period_end_at'?: string|\DateTimeInterface, 'current_period_start_at'?: string|\DateTimeInterface, 'customer'?: array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'customer_id': string, 'delivery'?: SubscriptionDeliveryInput|array<array-key, mixed>|\stdClass, 'delivery_hold'?: SubscriptionDeliveryHoldInput|array<array-key, mixed>|\stdClass, 'early_termination_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'end_after': array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone': string, 'type': string}|object|null, 'expires_at': string|\DateTimeInterface|null, 'external_reference_id'?: string, 'inventory_wait'?: SubscriptionInventoryWaitInput|array<array-key, mixed>|\stdClass, 'is_awaiting_billing_schedule'?: bool, 'last_payment_error'?: PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass, 'line_items': list<SubscriptionLineItemInput|array<array-key, mixed>|\stdClass>, 'merchant_id': string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'missed_billing_at'?: string|\DateTimeInterface, 'next_billing_at'?: string|\DateTimeInterface, 'next_retry_at': string|\DateTimeInterface|null, 'open_renewal_order_id'?: string, 'outstanding_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'pause_reason'?: string, 'paused_at'?: string|\DateTimeInterface, 'payment_method'?: array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'payment_method_due_at': string|\DateTimeInterface|null, 'payment_method_id': string|null, 'promotions': list<SubscriptionPromotionInput|array<array-key, mixed>|\stdClass>, 'prorate_first_period': bool, 'quantity': int, 'quantity_options'?: list<int>, 'recurring_subtotal_money': array{'amount': string, 'currency': string}|object|null, 'remaining_cycles': int|null, 'resume_requested_at': string|\DateTimeInterface|null, 'scheduled_cancel_at': string|\DateTimeInterface|null, 'scheduled_plan_change': array{'billing_interval': string, 'billing_interval_count': int, 'effective_at': string|\DateTimeInterface|null, 'line_items': list<SubscriptionLineItemInput|array<array-key, mixed>|\stdClass>, 'quantity': int, 'recurring_subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_by': string, 'scheduled_at': string|\DateTimeInterface, 'subscription_plan_id': string, ...}|object|null, 'scheduled_promotions': list<SubscriptionPromotionInput|array<array-key, mixed>|\stdClass>, 'scheduled_resume_at': string|\DateTimeInterface|null, 'service_location'?: SubscriptionServiceLocationInput|array<array-key, mixed>|\stdClass, 'starts_at'?: string|\DateTimeInterface, 'status': string, 'subscription_id': string, 'subscription_plan'?: array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<SubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'subscription_plan_id'?: string, 'supported_actions': list<string>, 'terms_type': string, 'test_clock_id'?: string, 'trial_end_at'?: string|\DateTimeInterface, 'upcoming_delivery_hold'?: SubscriptionUpcomingDeliveryHoldInput|array<array-key, mixed>|\stdClass, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionInput')); }
    /** UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31.
     * @return int
     * @throws SdkError When billing_anchor_day is omitted; use hasBillingAnchorDay() or valueOrDefault().
     */
    public function getBillingAnchorDay(): int { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly".
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
    /** Billing interval and count pairs frozen from the plan or shared by the subscription offers. Every option bills the same recorded line prices once per period. Changing the interval does not scale those prices. maxItems: 12. uniqueItems: true. [] (Value): {@see SubscriptionIntervalOptionInput}. A billing cadence offered by a subscription plan or offer. Every option bills the same line prices once per period; prices are not scaled by the interval. For a different price per interval, create separate plans.
     * @return list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint", "external".
     * @return string
     * @throws SdkError When billing_schedule_owner is omitted; use hasBillingScheduleOwner() or valueOrDefault().
     */
    public function getBillingScheduleOwner(): string { return $this->get('billing_schedule_owner'); }
    public function hasBillingScheduleOwner(): bool { return $this->has('billing_schedule_owner'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When billing_schedule_waiting_started_at is omitted; use hasBillingScheduleWaitingStartedAt() or valueOrDefault().
     */
    public function getBillingScheduleWaitingStartedAt(): string|\DateTimeInterface { return $this->get('billing_schedule_waiting_started_at'); }
    public function hasBillingScheduleWaitingStartedAt(): bool { return $this->has('billing_schedule_waiting_started_at'); }
    /** What the buyer can do with the subscription, in this order: cancel, pause, resume, reactivate, update_payment_method, retry_payment, update_delivery, skip, update_billing_interval, update_quantity, swap_items, change_plan, cancel_plan_change, then renew, under the store's buyer policy. The available cancel and pause actions carry the choices they accept. A buyer's read or change through a customer session on /v1/me, or in Flint's buyer account, lists all fourteen every time; a merchant read gets an empty list. update_payment_method is required while a payment is past due, due by next_retry_at when a retry is scheduled, and when the card expires before next_billing_at, due by then. Example: []. [] (Value): {@see BuyerActionInput}. One thing a buyer can do with an order, subscription, invoice or return they read through /v1/me. Show the actions with is_required as what needs the buyer's attention, and the first available action as the primary action on the resource's page in your account.
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When canceled_at is omitted; use hasCanceledAt() or valueOrDefault().
     */
    public function getCanceledAt(): string|\DateTimeInterface { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. The cancellation request behind a scheduled or completed cancellation.
     * @return SubscriptionCancellationDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When cancellation_details is omitted; use hasCancellationDetails() or valueOrDefault().
     */
    public function getCancellationDetails(): mixed { return $this->get('cancellation_details'); }
    public function hasCancellationDetails(): bool { return $this->has('cancellation_details'); }
    /** Why the subscription is canceled or scheduled to cancel. Uses end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration", "payment_failed", "other", "end_after_reached".
     * @return string
     * @throws SdkError When cancellation_reason is omitted; use hasCancellationReason() or valueOrDefault().
     */
    public function getCancellationReason(): string { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0.
     * @return int
     * @throws SdkError When completed_cycles is omitted; use hasCompletedCycles() or valueOrDefault().
     */
    public function getCompletedCycles(): int { return $this->get('completed_cycles'); }
    public function hasCompletedCycles(): bool { return $this->has('completed_cycles'); }
    /** When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When contract_end_at is omitted; use hasContractEndAt() or valueOrDefault().
     */
    public function getContractEndAt(): string|\DateTimeInterface { return $this->get('contract_end_at'); }
    public function hasContractEndAt(): bool { return $this->has('contract_end_at'); }
    /** When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When contract_start_at is omitted; use hasContractStartAt() or valueOrDefault().
     */
    public function getContractStartAt(): string|\DateTimeInterface { return $this->get('contract_start_at'); }
    public function hasContractStartAt(): bool { return $this->has('contract_start_at'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When current_period_end_at is omitted; use hasCurrentPeriodEndAt() or valueOrDefault().
     */
    public function getCurrentPeriodEndAt(): string|\DateTimeInterface { return $this->get('current_period_end_at'); }
    public function hasCurrentPeriodEndAt(): bool { return $this->has('current_period_end_at'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When current_period_start_at is omitted; use hasCurrentPeriodStartAt() or valueOrDefault().
     */
    public function getCurrentPeriodStartAt(): string|\DateTimeInterface { return $this->get('current_period_start_at'); }
    public function hasCurrentPeriodStartAt(): bool { return $this->has('current_period_start_at'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryInput}. A customer's summary fields, returned in place of a customer ID when the customer is expanded. anyOf[2] (Value): null.
     * @return array{'created_at'?: string|\DateTimeInterface, 'customer_id': string, 'email': string|null, 'name': string|null, 'phone': string|null, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When customer is omitted; use hasCustomer() or valueOrDefault().
     */
    public function getCustomer(): mixed { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The customer this subscription bills. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD".
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
    /** Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. anyOf[1] (Value): {@see SubscriptionEndAfterInput}. The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date. anyOf[2] (Value): null.
     * @return array{'cycle_count': int, 'type': string}|object|array{'end_date': string, 'timezone': string, 'type': string}|object|null
     * @throws SdkError When end_after is omitted; use hasEndAfter() or valueOrDefault().
     */
    public function getEndAfter(): mixed { return $this->get('end_after'); }
    public function hasEndAfter(): bool { return $this->has('end_after'); }
    /** Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Null when the end cannot be determined or the subscription is canceled. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842".
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Renewal waiting for stock. Included only in merchant responses and omitted from buyer responses. Shows that a subscription renewal is waiting for inventory, with the order and invoice involved and when the wait started.
     * @return SubscriptionInventoryWaitInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_wait is omitted; use hasInventoryWait() or valueOrDefault().
     */
    public function getInventoryWait(): mixed { return $this->get('inventory_wait'); }
    public function hasInventoryWait(): bool { return $this->has('inventory_wait'); }
    /** True while an active or trialing subscription on an external billing schedule has no next billing date.
     * @return bool
     * @throws SdkError When is_awaiting_billing_schedule is omitted; use hasIsAwaitingBillingSchedule() or valueOrDefault().
     */
    public function getIsAwaitingBillingSchedule(): bool { return $this->get('is_awaiting_billing_schedule'); }
    public function hasIsAwaitingBillingSchedule(): bool { return $this->has('is_awaiting_billing_schedule'); }
    /** Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. A summary of why a payment attempt failed, with a normalized error code, a message, the failure time, and remediation.
     * @return PaymentErrorSummaryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When last_payment_error is omitted; use hasLastPaymentError() or valueOrDefault().
     */
    public function getLastPaymentError(): mixed { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. [] (Value): {@see SubscriptionLineItemInput}. An item included in a customer's recurring purchase.
     * @return list<SubscriptionLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When missed_billing_at is omitted; use hasMissedBillingAt() or valueOrDefault().
     */
    public function getMissedBillingAt(): string|\DateTimeInterface { return $this->get('missed_billing_at'); }
    public function hasMissedBillingAt(): bool { return $this->has('missed_billing_at'); }
    /** When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When next_billing_at is omitted; use hasNextBillingAt() or valueOrDefault().
     */
    public function getNextBillingAt(): string|\DateTimeInterface { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** Recorded automatic payment retry time. Null when no retry time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When next_retry_at is omitted; use hasNextRetryAt() or valueOrDefault().
     */
    public function getNextRetryAt(): string|\DateTimeInterface|null { return $this->get('next_retry_at'); }
    public function hasNextRetryAt(): bool { return $this->has('next_retry_at'); }
    /** ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When paused_at is omitted; use hasPausedAt() or valueOrDefault().
     */
    public function getPausedAt(): string|\DateTimeInterface { return $this->get('paused_at'); }
    public function hasPausedAt(): bool { return $this->has('paused_at'); }
    /** Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. anyOf[1] (Value): {@see ExpandedPaymentMethodSummaryInput}. A payment method's summary fields, including type, status, and card details, returned when the payment method is expanded. anyOf[2] (Value): null.
     * @return array{'card'?: CardDetailsInput|array<array-key, mixed>|\stdClass, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'payment_method_id': string, 'status': string, 'type': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When payment_method is omitted; use hasPaymentMethod() or valueOrDefault().
     */
    public function getPaymentMethod(): mixed { return $this->get('payment_method'); }
    public function hasPaymentMethod(): bool { return $this->has('payment_method'); }
    /** First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), or an external schedule has no known boundary. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When payment_method_due_at is omitted; use hasPaymentMethodDueAt() or valueOrDefault().
     */
    public function getPaymentMethodDueAt(): string|\DateTimeInterface|null { return $this->get('payment_method_due_at'); }
    public function hasPaymentMethodDueAt(): bool { return $this->has('payment_method_due_at'); }
    /** Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. Example: "pm_01KEZF7C0034B248TXXE4NXYFZ".
     * @return string|null
     * @throws SdkError When payment_method_id is omitted; use hasPaymentMethodId() or valueOrDefault().
     */
    public function getPaymentMethodId(): string|null { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. [] (Value): {@see SubscriptionPromotionInput}. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.
     * @return list<SubscriptionPromotionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When promotions is omitted; use hasPromotions() or valueOrDefault().
     */
    public function getPromotions(): array { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period.
     * @return bool
     * @throws SdkError When prorate_first_period is omitted; use hasProrateFirstPeriod() or valueOrDefault().
     */
    public function getProrateFirstPeriod(): bool { return $this->get('prorate_first_period'); }
    public function hasProrateFirstPeriod(): bool { return $this->has('prorate_first_period'); }
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
    /** Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Format: uint64. minimum: 0.
     * @return int|null
     * @throws SdkError When remaining_cycles is omitted; use hasRemainingCycles() or valueOrDefault().
     */
    public function getRemainingCycles(): int|null { return $this->get('remaining_cycles'); }
    public function hasRemainingCycles(): bool { return $this->has('remaining_cycles'); }
    /** When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When resume_requested_at is omitted; use hasResumeRequestedAt() or valueOrDefault().
     */
    public function getResumeRequestedAt(): string|\DateTimeInterface|null { return $this->get('resume_requested_at'); }
    public function hasResumeRequestedAt(): bool { return $this->has('resume_requested_at'); }
    /** When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Null when cancel_at_period_end is false or no cancellation time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_cancel_at is omitted; use hasScheduledCancelAt() or valueOrDefault().
     */
    public function getScheduledCancelAt(): string|\DateTimeInterface|null { return $this->get('scheduled_cancel_at'); }
    public function hasScheduledCancelAt(): bool { return $this->has('scheduled_cancel_at'); }
    /** Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. anyOf[1] (Value): {@see SubscriptionScheduledPlanChangeInput}. Frozen target terms that apply at the next charged renewal. anyOf[2] (Value): null.
     * @return array{'billing_interval': string, 'billing_interval_count': int, 'effective_at': string|\DateTimeInterface|null, 'line_items': list<SubscriptionLineItemInput|array<array-key, mixed>|\stdClass>, 'quantity': int, 'recurring_subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'requested_by': string, 'scheduled_at': string|\DateTimeInterface, 'subscription_plan_id': string, ...}|object|null
     * @throws SdkError When scheduled_plan_change is omitted; use hasScheduledPlanChange() or valueOrDefault().
     */
    public function getScheduledPlanChange(): mixed { return $this->get('scheduled_plan_change'); }
    public function hasScheduledPlanChange(): bool { return $this->has('scheduled_plan_change'); }
    /** Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. [] (Value): {@see SubscriptionPromotionInput}. A recurring promotion applied to a subscription, including its recurrence and remaining discounted cycles.
     * @return list<SubscriptionPromotionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When scheduled_promotions is omitted; use hasScheduledPromotions() or valueOrDefault().
     */
    public function getScheduledPromotions(): array { return $this->get('scheduled_promotions'); }
    public function hasScheduledPromotions(): bool { return $this->has('scheduled_promotions'); }
    /** When a pause with a length (pause_duration_cycles) resumes on its own: that many billing intervals after paused_at. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_resume_at is omitted; use hasScheduledResumeAt() or valueOrDefault().
     */
    public function getScheduledResumeAt(): string|\DateTimeInterface|null { return $this->get('scheduled_resume_at'); }
    public function hasScheduledResumeAt(): bool { return $this->has('scheduled_resume_at'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The address where a subscription's service is delivered, with the saved customer address it came from.
     * @return SubscriptionServiceLocationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When service_location is omitted; use hasServiceLocation() or valueOrDefault().
     */
    public function getServiceLocation(): mixed { return $this->get('service_location'); }
    public function hasServiceLocation(): bool { return $this->has('service_location'); }
    /** When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When starts_at is omitted; use hasStartsAt() or valueOrDefault().
     */
    public function getStartsAt(): string|\DateTimeInterface { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** Where the subscription is in its lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Stable identifier of the subscription. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. anyOf[1] (Value): {@see ExpandedSubscriptionPlanSummaryInput}. A subscription plan's summary fields, including name, billing interval, currency, and status, returned when the plan is expanded. anyOf[2] (Value): null.
     * @return array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options'?: list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'created_at'?: string|\DateTimeInterface, 'currency': string, 'description'?: string, 'line_items'?: list<SubscriptionPlanLineItemInput|array<array-key, mixed>|\stdClass>, 'name': string, 'quantity_options'?: list<int>, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'status': string, 'subscription_plan_id': string, 'trial_period_days'?: int, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When subscription_plan is omitted; use hasSubscriptionPlan() or valueOrDefault().
     */
    public function getSubscriptionPlan(): mixed { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** Subscription plan ID. Omitted when terms_type is subscription_offer. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity". [] (Value): string.  Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "retry_payment", "change_plan", "change_quantity".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Value enum: "subscription_plan", "subscription_offer".
     * @return string
     * @throws SdkError When terms_type is omitted; use hasTermsType() or valueOrDefault().
     */
    public function getTermsType(): string { return $this->get('terms_type'); }
    public function hasTermsType(): bool { return $this->has('terms_type'); }
    /** ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. Example: "tclk_01KEZF7C00J8YBNPS7XJ5FG5ZZ".
     * @return string
     * @throws SdkError When test_clock_id is omitted; use hasTestClockId() or valueOrDefault().
     */
    public function getTestClockId(): string { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

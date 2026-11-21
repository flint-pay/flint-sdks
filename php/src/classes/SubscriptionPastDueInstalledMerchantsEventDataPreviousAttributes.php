<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $billing_anchor_day
 * @property-read SubscriptionBillingHoldPreviousAttributes|null $billing_hold
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionPreviousAttributes>|null $billing_interval_options
 * @property-read string|null $billing_schedule_owner
 * @property-read string|null $billing_schedule_waiting_started_at
 * @property-read bool|null $cancel_at_period_end
 * @property-read string|null $canceled_at
 * @property-read SubscriptionCancellationDetailsPreviousAttributes|null $cancellation_details
 * @property-read string|null $cancellation_reason
 * @property-read int|null $completed_cycles
 * @property-read string|null $contract_end_at
 * @property-read string|null $contract_start_at
 * @property-read string|null $created_at
 * @property-read string|null $current_period_end_at
 * @property-read string|null $current_period_start_at
 * @property-read ExpandedCustomerSummaryPreviousAttributes|null $customer
 * @property-read string|null $customer_id
 * @property-read int|null $deliveries_per_period
 * @property-read SubscriptionDeliveryPreviousAttributes|null $delivery
 * @property-read SubscriptionDeliveryHoldPreviousAttributes|null $delivery_hold
 * @property-read string|null $delivery_interval
 * @property-read int|null $delivery_interval_count
 * @property-read MoneyValuePreviousAttributes|null $early_termination_fee_money
 * @property-read mixed $end_after
 * @property-read string|null $expires_at
 * @property-read string|null $external_reference_id
 * @property-read SubscriptionGiftRecipientPreviousAttributes|null $gift_recipient
 * @property-read string|null $idempotency_key
 * @property-read SubscriptionInventoryWaitPreviousAttributes|null $inventory_wait
 * @property-read bool|null $is_awaiting_billing_schedule
 * @property-read PaymentErrorSummaryPreviousAttributes|null $last_payment_error
 * @property-read list<SubscriptionLineItemPreviousAttributes>|null $line_items
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $missed_billing_at
 * @property-read string|null $next_billing_at
 * @property-read string|null $next_delivery_at
 * @property-read string|null $next_retry_at
 * @property-read string|null $open_renewal_order_id
 * @property-read MoneyValuePreviousAttributes|null $outstanding_money
 * @property-read string|null $pause_reason
 * @property-read string|null $paused_at
 * @property-read SubscriptionPausedDeliveryHoldPreviousAttributes|null $paused_delivery_hold
 * @property-read string|null $payment_link_id
 * @property-read ExpandedPaymentMethodSummaryPreviousAttributes|null $payment_method
 * @property-read string|null $payment_method_due_at
 * @property-read string|null $payment_method_id
 * @property-read list<SubscriptionPromotionPreviousAttributes>|null $promotions
 * @property-read bool|null $prorate_first_period
 * @property-read MoneyValuePreviousAttributes|null $recurring_subtotal_money
 * @property-read int|null $remaining_cycles
 * @property-read int|null $remaining_prepaid_deliveries
 * @property-read string|null $resume_requested_at
 * @property-read string|null $scheduled_cancel_at
 * @property-read SubscriptionScheduledPlanChangePreviousAttributes|null $scheduled_plan_change
 * @property-read list<SubscriptionPromotionPreviousAttributes>|null $scheduled_promotions
 * @property-read string|null $scheduled_resume_at
 * @property-read SubscriptionServiceLocationPreviousAttributes|null $service_location
 * @property-read string|null $starts_at
 * @property-read string|null $status
 * @property-read string|null $subscription_id
 * @property-read ExpandedSubscriptionPlanSummaryPreviousAttributes|null $subscription_plan
 * @property-read string|null $subscription_plan_id
 * @property-read list<string>|null $supported_actions
 * @property-read SubscriptionTaxPreviousAttributes|null $tax
 * @property-read string|null $terms_type
 * @property-read string|null $test_clock_id
 * @property-read string|null $trial_end_at
 * @property-read SubscriptionUpcomingDeliveryHoldPreviousAttributes|null $upcoming_delivery_hold
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionPastDueInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'billing_anchor_day'?: mixed, 'billing_hold'?: mixed, 'billing_interval'?: mixed, 'billing_interval_count'?: mixed, 'billing_interval_options'?: mixed, 'billing_schedule_owner'?: mixed, 'billing_schedule_waiting_started_at'?: mixed, 'cancel_at_period_end'?: mixed, 'canceled_at'?: mixed, 'cancellation_details'?: mixed, 'cancellation_reason'?: mixed, 'completed_cycles'?: mixed, 'contract_end_at'?: mixed, 'contract_start_at'?: mixed, 'created_at'?: mixed, 'current_period_end_at'?: mixed, 'current_period_start_at'?: mixed, 'customer'?: mixed, 'customer_id'?: mixed, 'deliveries_per_period'?: mixed, 'delivery'?: mixed, 'delivery_hold'?: mixed, 'delivery_interval'?: mixed, 'delivery_interval_count'?: mixed, 'early_termination_fee_money'?: mixed, 'end_after'?: mixed, 'expires_at'?: mixed, 'external_reference_id'?: mixed, 'gift_recipient'?: mixed, 'idempotency_key'?: mixed, 'inventory_wait'?: mixed, 'is_awaiting_billing_schedule'?: mixed, 'last_payment_error'?: mixed, 'line_items'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'missed_billing_at'?: mixed, 'next_billing_at'?: mixed, 'next_delivery_at'?: mixed, 'next_retry_at'?: mixed, 'open_renewal_order_id'?: mixed, 'outstanding_money'?: mixed, 'pause_reason'?: mixed, 'paused_at'?: mixed, 'paused_delivery_hold'?: mixed, 'payment_link_id'?: mixed, 'payment_method'?: mixed, 'payment_method_due_at'?: mixed, 'payment_method_id'?: mixed, 'promotions'?: mixed, 'prorate_first_period'?: mixed, 'recurring_subtotal_money'?: mixed, 'remaining_cycles'?: mixed, 'remaining_prepaid_deliveries'?: mixed, 'resume_requested_at'?: mixed, 'scheduled_cancel_at'?: mixed, 'scheduled_plan_change'?: mixed, 'scheduled_promotions'?: mixed, 'scheduled_resume_at'?: mixed, 'service_location'?: mixed, 'starts_at'?: mixed, 'status'?: mixed, 'subscription_id'?: mixed, 'subscription_plan'?: mixed, 'subscription_plan_id'?: mixed, 'supported_actions'?: mixed, 'tax'?: mixed, 'terms_type'?: mixed, 'test_clock_id'?: mixed, 'trial_end_at'?: mixed, 'upcoming_delivery_hold'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPastDueInstalledMerchantsEventDataPreviousAttributes')); }
    /** UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. anyOf[1] (Value): integer. UTC day of the month used for monthly and yearly billing. Applies only to Flint-owned schedules. Format: int32. minimum: 1. maximum: 31. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBillingAnchorDay(): int|null { return $this->get('billing_anchor_day'); }
    public function hasBillingAnchorDay(): bool { return $this->has('billing_anchor_day'); }
    /** Configuration issue or automatic retry delaying billing, with the first detection time. Flint retries automatically without starting payment recovery. Cleared when billing succeeds, the schedule is replaced, the subscription is paused or canceled, or a card decline starts payment recovery. Included only in merchant responses. anyOf[1] (Value): {@see SubscriptionBillingHoldPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionBillingHoldPreviousAttributes|null
     */
    public function getBillingHold(): SubscriptionBillingHoldPreviousAttributes|null { return $this->get('billing_hold'); }
    public function hasBillingHold(): bool { return $this->has('billing_hold'); }
    /** How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. How often the subscription bills now. Read with billing_interval_count: monthly with a count of 3 bills quarterly. A change applies from the next renewal that has not been paid; next_billing_at does not move. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBillingInterval(): string|null { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of billing_interval units between charges. Changes with billing_interval. anyOf[1] (Value): integer. Number of billing_interval units between charges. Changes with billing_interval. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBillingIntervalCount(): int|null { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. anyOf[1] (Value): Array of {@see SubscriptionIntervalOptionPreviousAttributes}. Billing interval and count pairs the subscription can switch to. For a subscription on a plan, they follow the plan's current billing_interval_options. A subscription that came from an offer keeps the pairs the offer had at signup. Prices of lines that ship are per delivery. Each option charges for all deliveries in its period. Changing the interval does not change the per-delivery price. maxItems: 12. uniqueItems: true. anyOf[1][] (Value): {@see SubscriptionIntervalOptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SubscriptionIntervalOptionPreviousAttributes>|null
     */
    public function getBillingIntervalOptions(): array|null { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint", "external". anyOf[1] (Value): string. Who supplies billing dates: flint advances the schedule after each paid renewal; external uses dates you supply. Change it with billing_schedule on PATCH /v1/subscriptions/{subscription_id}. Value enum: "flint", "external". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBillingScheduleOwner(): string|null { return $this->get('billing_schedule_owner'); }
    public function hasBillingScheduleOwner(): bool { return $this->has('billing_schedule_owner'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBillingScheduleWaitingStartedAt(): string|null { return $this->get('billing_schedule_waiting_started_at'); }
    public function hasBillingScheduleWaitingStartedAt(): bool { return $this->has('billing_schedule_waiting_started_at'); }
    /** True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. anyOf[1] (Value): boolean. True when the subscription is scheduled to cancel at scheduled_cancel_at. Schedule with POST /v1/subscriptions/{subscription_id}/cancel; undo with PATCH and cancel_at_period_end false. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getCancelAtPeriodEnd(): bool|null { return $this->get('cancel_at_period_end'); }
    public function hasCancelAtPeriodEnd(): bool { return $this->has('cancel_at_period_end'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCanceledAt(): string|null { return $this->get('canceled_at'); }
    public function hasCanceledAt(): bool { return $this->has('canceled_at'); }
    /** Who asked to cancel, when, and why. Present once a cancellation is requested, whether it takes effect at the end of the billing period or right away. Omitted when no one asked, and removed when a scheduled cancellation is undone. See cancellation_reason for voluntary and payment-related cancellations. anyOf[1] (Value): {@see SubscriptionCancellationDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionCancellationDetailsPreviousAttributes|null
     */
    public function getCancellationDetails(): SubscriptionCancellationDetailsPreviousAttributes|null { return $this->get('cancellation_details'); }
    public function hasCancellationDetails(): bool { return $this->has('cancellation_details'); }
    /** Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration", "payment_failed", "other", "end_after_reached", "signup_order_refunded". anyOf[1] (Value): string. Why the subscription is canceled or scheduled to cancel. Uses signup_order_refunded when an automatic inventory refund fully refunds the signup order, end_after_reached when the automatic ending agreement is reached, cancellation_details.requested_by when recorded, payment_failed for other canceled subscriptions without a requester, and other for a scheduled cancellation without a requester. Omitted otherwise. Value enum: "buyer", "merchant", "integration", "payment_failed", "other", "end_after_reached", "signup_order_refunded". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCancellationReason(): string|null { return $this->get('cancellation_reason'); }
    public function hasCancellationReason(): bool { return $this->has('cancellation_reason'); }
    /** Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. anyOf[1] (Value): integer. Billing cycles charged so far, including cycles imported with `billing_start.completed_cycles`. The next renewal order's `subscription_cycle` is this number plus one. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCompletedCycles(): int|null { return $this->get('completed_cycles'); }
    public function hasCompletedCycles(): bool { return $this->has('completed_cycles'); }
    /** When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. anyOf[1] (Value): string. When the recorded contract term ends. Does not move when the subscription pauses or changes plan. Flint does not stop the buyer from canceling earlier. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getContractEndAt(): string|null { return $this->get('contract_end_at'); }
    public function hasContractEndAt(): bool { return $this->has('contract_end_at'); }
    /** When the recorded contract term started. Does not move when the subscription pauses or changes plan. anyOf[1] (Value): string. When the recorded contract term started. Does not move when the subscription pauses or changes plan. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getContractStartAt(): string|null { return $this->get('contract_start_at'); }
    public function hasContractStartAt(): bool { return $this->has('contract_start_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrentPeriodEndAt(): string|null { return $this->get('current_period_end_at'); }
    public function hasCurrentPeriodEndAt(): bool { return $this->has('current_period_end_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCurrentPeriodStartAt(): string|null { return $this->get('current_period_start_at'); }
    public function hasCurrentPeriodStartAt(): bool { return $this->has('current_period_start_at'); }
    /** Present only when `expand` includes `customer`; `null` when expanded and there is no related customer. anyOf[1] (Value): {@see ExpandedCustomerSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedCustomerSummaryPreviousAttributes|null
     */
    public function getCustomer(): ExpandedCustomerSummaryPreviousAttributes|null { return $this->get('customer'); }
    public function hasCustomer(): bool { return $this->has('customer'); }
    /** The customer this subscription bills. anyOf[1] (Value): string. The customer this subscription bills. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. anyOf[1] (Value): integer. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDeliveriesPerPeriod(): int|null { return $this->get('deliveries_per_period'); }
    public function hasDeliveriesPerPeriod(): bool { return $this->has('deliveries_per_period'); }
    /** Saved delivery preference with the current delivery method display. Write responses use the same display as GET: fixed shipping reflects the current method configuration, and quoted shipping shows the last paid shipping amount when available. anyOf[1] (Value): {@see SubscriptionDeliveryPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionDeliveryPreviousAttributes|null
     */
    public function getDelivery(): SubscriptionDeliveryPreviousAttributes|null { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Current delivery issue that blocks collection. Mutually exclusive with upcoming_delivery_hold. anyOf[1] (Value): {@see SubscriptionDeliveryHoldPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionDeliveryHoldPreviousAttributes|null
     */
    public function getDeliveryHold(): SubscriptionDeliveryHoldPreviousAttributes|null { return $this->get('delivery_hold'); }
    public function hasDeliveryHold(): bool { return $this->has('delivery_hold'); }
    /** Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly", "yearly", null. anyOf[1] (Value): string. Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly", "yearly", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryInterval(): string|null { return $this->get('delivery_interval'); }
    public function hasDeliveryInterval(): bool { return $this->has('delivery_interval'); }
    /** Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. anyOf[1] (Value): integer. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: int32. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDeliveryIntervalCount(): int|null { return $this->get('delivery_interval_count'); }
    public function hasDeliveryIntervalCount(): bool { return $this->has('delivery_interval_count'); }
    /** The fee in the recorded contract terms. Present whenever those terms include a fee. It applies only to a cancellation before contract_end_at. Flint never charges it. Later plan changes do not change this fee. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getEarlyTerminationFeeMoney(): MoneyValuePreviousAttributes|null { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. anyOf[1] (Value): ({@see SubscriptionEndAfterPreviousAttributes} or null). Recorded automatic end condition. Null when no automatic end is set. Cycles count charged billing periods, including imported completed_cycles. Pauses and skips do not use cycles. Already-paid prepaid deliveries continue on their shifted dates, even beyond the end date, and cancellation waits for the last remaining delivery. Skipping defers a delivery without consuming its entitlement. Ending never refunds. anyOf[1].anyOf[1] (Value): {@see SubscriptionEndAfterPreviousAttributes}. The subscription's automatic end condition, measured by charged billing cycles or a saved local calendar date. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getEndAfter(): mixed { return $this->get('end_after'); }
    public function hasEndAfter(): bool { return $this->has('end_after'); }
    /** Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. anyOf[1] (Value): string. Projected end under the current schedule and committed plan changes, including an earlier scheduled cancellation. A date limit preserves already-paid entitlement without requiring a future charge schedule. A reached cycle limit uses the last paid period end, or current_period_end_at when no paid history exists; that fallback includes any skip or pause extension. A cycle limit with cycles left needs a future charge schedule unless a known scheduled cancellation determines the end. Paid deliveries extend the end to the last paid delivery when it is later. An indefinite pause with paid deliveries owed makes the end unknown. Null when the end cannot be determined or the subscription is canceled. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Who receives the gift, when this is a gift subscription. customer_id stays the purchaser. Flint clears it when the subscription ends and when the purchaser's data is erased. Null when the subscription isn't a gift. anyOf[1] (Value): {@see SubscriptionGiftRecipientPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionGiftRecipientPreviousAttributes|null
     */
    public function getGiftRecipient(): SubscriptionGiftRecipientPreviousAttributes|null { return $this->get('gift_recipient'); }
    public function hasGiftRecipient(): bool { return $this->has('gift_recipient'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Renewal or prepaid delivery waiting for stock. Buyers receive only started_at. anyOf[1] (Value): {@see SubscriptionInventoryWaitPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionInventoryWaitPreviousAttributes|null
     */
    public function getInventoryWait(): SubscriptionInventoryWaitPreviousAttributes|null { return $this->get('inventory_wait'); }
    public function hasInventoryWait(): bool { return $this->has('inventory_wait'); }
    /** True while an active or trialing subscription on an external billing schedule has no next billing date. anyOf[1] (Value): boolean. True while an active or trialing subscription on an external billing schedule has no next billing date. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getIsAwaitingBillingSchedule(): bool|null { return $this->get('is_awaiting_billing_schedule'); }
    public function hasIsAwaitingBillingSchedule(): bool { return $this->has('is_awaiting_billing_schedule'); }
    /** Latest renewal payment failure, present only while status is past_due and the latest payment failed. Buyer responses omit merchant remediation and sensitive decline signals. anyOf[1] (Value): {@see PaymentErrorSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return PaymentErrorSummaryPreviousAttributes|null
     */
    public function getLastPaymentError(): PaymentErrorSummaryPreviousAttributes|null { return $this->get('last_payment_error'); }
    public function hasLastPaymentError(): bool { return $this->has('last_payment_error'); }
    /** What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. anyOf[1] (Value): Array of {@see SubscriptionLineItemPreviousAttributes}. What each renewal bills. Plan edits do not change it. Adding, changing or swapping a line takes that variant's current catalog price, which then stays until the line changes again. anyOf[1][] (Value): {@see SubscriptionLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SubscriptionLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** ID of the merchant this resource belongs to. anyOf[1] (Value): string. ID of the merchant this resource belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Stored caller-owned key-value data. See `MetadataInput` for key, value, and size rules. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. anyOf[1] (Value): string. The billing date whose payment failed, as an RFC3339 timestamp. Present only while status is past_due. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMissedBillingAt(): string|null { return $this->get('missed_billing_at'); }
    public function hasMissedBillingAt(): bool { return $this->has('missed_billing_at'); }
    /** When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. anyOf[1] (Value): string. When Flint next starts a scheduled renewal charge, as an RFC3339 timestamp. Present only while a trialing or active subscription has a billing date and isn't set to cancel at the end of its period. Absent when no renewal is scheduled: a subscription in its final billing cycle ends at expires_at, a paused subscription resumes at scheduled_resume_at, a past_due one reports the failed billing date in missed_billing_at and retries at next_retry_at, an incomplete one retries at next_retry_at, a scheduled start begins at starts_at, one set to cancel ends at scheduled_cancel_at, and an external schedule awaiting a date reports is_awaiting_billing_schedule. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNextBillingAt(): string|null { return $this->get('next_billing_at'); }
    public function hasNextBillingAt(): bool { return $this->has('next_billing_at'); }
    /** When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. anyOf[1] (Value): string. When the next prepaid delivery order is due, shifted by a timed pause. Null when the subscription has an indefinite pause, no delivery is scheduled, or the subscription is canceled. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNextDeliveryAt(): string|null { return $this->get('next_delivery_at'); }
    public function hasNextDeliveryAt(): bool { return $this->has('next_delivery_at'); }
    /** Recorded automatic payment retry time. Null when no retry time is available. anyOf[1] (Value): string. Recorded automatic payment retry time. Null when no retry time is available. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNextRetryAt(): string|null { return $this->get('next_retry_at'); }
    public function hasNextRetryAt(): bool { return $this->has('next_retry_at'); }
    /** ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. anyOf[1] (Value): string. ID of the paid renewal order whose shipment has not been dispatched. It keeps its committed delivery destination after preference changes and cancellation. Absent when no such renewal order exists. Only renewal orders count; the signup order is not included. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOpenRenewalOrderId(): string|null { return $this->get('open_renewal_order_id'); }
    public function hasOpenRenewalOrderId(): bool { return $this->has('open_renewal_order_id'); }
    /** Unpaid balance of the failed renewal order, including tax, shipping and discounts, after payments and credits. Present only while status is past_due and a positive balance remains. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getOutstandingMoney(): MoneyValuePreviousAttributes|null { return $this->get('outstanding_money'); }
    public function hasOutstandingMoney(): bool { return $this->has('outstanding_money'); }
    /** Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Value enum: "buyer", "delivery_action_required", "merchant", "payment_failed". anyOf[1] (Value): string. Why the subscription is paused: merchant for a pause made with your API key or dashboard, buyer for the buyer's own pause, delivery_action_required for a pause during or after a delivery hold, and payment_failed when renewal payment retries ran out and your dunning settings pause the subscription. Omitted when the subscription is not paused. Value enum: "buyer", "delivery_action_required", "merchant", "payment_failed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPauseReason(): string|null { return $this->get('pause_reason'); }
    public function hasPauseReason(): bool { return $this->has('pause_reason'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPausedAt(): string|null { return $this->get('paused_at'); }
    public function hasPausedAt(): bool { return $this->has('paused_at'); }
    /** The delivery hold that expired and paused the subscription. Null when no stored expiry reason exists, including a manual pause during an active hold, or the subscription is no longer paused for delivery action. anyOf[1] (Value): {@see SubscriptionPausedDeliveryHoldPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionPausedDeliveryHoldPreviousAttributes|null
     */
    public function getPausedDeliveryHold(): SubscriptionPausedDeliveryHoldPreviousAttributes|null { return $this->get('paused_delivery_hold'); }
    public function hasPausedDeliveryHold(): bool { return $this->has('paused_delivery_hold'); }
    /** The payment link that started this subscription, when there was one. anyOf[1] (Value): string. The payment link that started this subscription, when there was one. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentLinkId(): string|null { return $this->get('payment_link_id'); }
    public function hasPaymentLinkId(): bool { return $this->has('payment_link_id'); }
    /** Present only when `expand` includes `payment_method`; `null` when expanded and there is no related payment method. anyOf[1] (Value): {@see ExpandedPaymentMethodSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedPaymentMethodSummaryPreviousAttributes|null
     */
    public function getPaymentMethod(): ExpandedPaymentMethodSummaryPreviousAttributes|null { return $this->get('payment_method'); }
    public function hasPaymentMethod(): bool { return $this->has('payment_method'); }
    /** First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. anyOf[1] (Value): string. First charge boundary while no card is bound: the later of trial_end_at and next_billing_at during a trial, or the next billing date for an imported period, even when that cycle's charge is zero. Recomputed when the schedule changes. A trial still without a card at its boundary cancels without an order or payment attempt. At that boundary, an imported subscription with a positive charge that still has no card enters its normal dunning schedule without a payment attempt. For an imported subscription, a zero charge completes the renewal without a card and the deadline advances to the following boundary. Null when a card is bound, collection is not scheduled (paused, canceled, or set to cancel at period end), an active or trialing subscription is in its final end_after cycle, or an external schedule has no known boundary. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentMethodDueAt(): string|null { return $this->get('payment_method_due_at'); }
    public function hasPaymentMethodDueAt(): bool { return $this->has('payment_method_due_at'); }
    /** Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. anyOf[1] (Value): string. Saved payment method used for renewal charges. Null when no card is bound. Bind a card to this subscription with PATCH; changing the customer's default alone does not bind it. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPaymentMethodId(): string|null { return $this->get('payment_method_id'); }
    public function hasPaymentMethodId(): bool { return $this->has('payment_method_id'); }
    /** Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. anyOf[1] (Value): Array of {@see SubscriptionPromotionPreviousAttributes}. Recurring promotions applying to the next charged cycle. Scheduled attachments are listed in scheduled_promotions. Empty when none apply; signup-only and exhausted promotions are excluded. anyOf[1][] (Value): {@see SubscriptionPromotionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SubscriptionPromotionPreviousAttributes>|null
     */
    public function getPromotions(): array|null { return $this->get('promotions'); }
    public function hasPromotions(): bool { return $this->has('promotions'); }
    /** Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. anyOf[1] (Value): boolean. Whether this subscription was created to prorate its first anchored paid period. Set at creation and never changes; starting on the anchor day still bills a normal full period. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getProrateFirstPeriod(): bool|null { return $this->get('prorate_first_period'); }
    public function hasProrateFirstPeriod(): bool { return $this->has('prorate_first_period'); }
    /** What one billing period's items cost before discounts, shipping, and tax: each line's price with modifiers, times quantity. It changes when items, quantity, or the plan change; editing the plan doesn't change it. For the next charge, use a subscription preview in next_renewal mode. `null` when a cancellation succeeds but Flint couldn't load the billing snapshot afterward, so the cancel response returns it as null. Retrieve the subscription again to get it. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRecurringSubtotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. anyOf[1] (Value): integer. Charges left for a cycle limit, bounded by an earlier scheduled cancellation. Null when there is no cycle limit or the subscription is canceled. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getRemainingCycles(): int|null { return $this->get('remaining_cycles'); }
    public function hasRemainingCycles(): bool { return $this->has('remaining_cycles'); }
    /** Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. anyOf[1] (Value): integer. Paid deliveries whose delivery order Flint hasn't created yet. A paid period starts with deliveries_per_period minus one. When delivery_hold is present and this count is positive, fixing delivery releases an already-paid delivery with shipping waived and no new charge. A next_renewal preview still estimates the next paid billing cycle. Skips, holds, and pauses consume none. Frozen on cancellation for manual refunds. Format: int32. minimum: 0. maximum: 23. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getRemainingPrepaidDeliveries(): int|null { return $this->get('remaining_prepaid_deliveries'); }
    public function hasRemainingPrepaidDeliveries(): bool { return $this->has('remaining_prepaid_deliveries'); }
    /** When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. anyOf[1] (Value): string. When Flint accepted a pending resume request. Set only while paused with a resume Flint has not applied yet. Clears when Flint resumes the subscription or refuses the request. `null` when the subscription isn't paused or no resume request is pending. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResumeRequestedAt(): string|null { return $this->get('resume_requested_at'); }
    public function hasResumeRequestedAt(): bool { return $this->has('resume_requested_at'); }
    /** When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. anyOf[1] (Value): string. When the scheduled cancellation takes effect: trial_end_at while trialing, current_period_end_at while active, or next_retry_at while past_due. Paid deliveries extend it to the last paid delivery when it is later. Null when cancel_at_period_end is false or no cancellation time is available. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getScheduledCancelAt(): string|null { return $this->get('scheduled_cancel_at'); }
    public function hasScheduledCancelAt(): bool { return $this->has('scheduled_cancel_at'); }
    /** Frozen target terms for the next charged renewal. Null when no plan change is scheduled. Cancel with scheduled_plan_change: null on PATCH; replace through change-plan. anyOf[1] (Value): {@see SubscriptionScheduledPlanChangePreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionScheduledPlanChangePreviousAttributes|null
     */
    public function getScheduledPlanChange(): SubscriptionScheduledPlanChangePreviousAttributes|null { return $this->get('scheduled_plan_change'); }
    public function hasScheduledPlanChange(): bool { return $this->has('scheduled_plan_change'); }
    /** Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. anyOf[1] (Value): Array of {@see SubscriptionPromotionPreviousAttributes}. Attached promotions whose first_cycle is after the next charged cycle, completed_cycles + 1. Always present; empty when no promotions are scheduled. anyOf[1][] (Value): {@see SubscriptionPromotionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SubscriptionPromotionPreviousAttributes>|null
     */
    public function getScheduledPromotions(): array|null { return $this->get('scheduled_promotions'); }
    public function hasScheduledPromotions(): bool { return $this->has('scheduled_promotions'); }
    /** When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. anyOf[1] (Value): string. When a pause with a length (pause_duration_cycles) resumes on its own: that many delivery intervals after paused_at on a prepaid subscription, or billing intervals otherwise. Null when the subscription is not paused or the pause has no length, such as a pause until you resume it or the pause Flint starts when a delivery hold runs out. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getScheduledResumeAt(): string|null { return $this->get('scheduled_resume_at'); }
    public function hasScheduledResumeAt(): bool { return $this->has('scheduled_resume_at'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): {@see SubscriptionServiceLocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionServiceLocationPreviousAttributes|null
     */
    public function getServiceLocation(): SubscriptionServiceLocationPreviousAttributes|null { return $this->get('service_location'); }
    public function hasServiceLocation(): bool { return $this->has('service_location'); }
    /** When a scheduled start's first billing period begins. Present only until that first payment succeeds. anyOf[1] (Value): string. When a scheduled start's first billing period begins. Present only until that first payment succeeds. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStartsAt(): string|null { return $this->get('starts_at'); }
    public function hasStartsAt(): bool { return $this->has('starts_at'); }
    /** Where the subscription is in its lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[1] (Value): string. Where the subscription is in its lifecycle. Each value says what it means. Value enum: "trialing", "active", "paused", "past_due", "canceled", "incomplete", "scheduled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Stable identifier of the subscription. anyOf[1] (Value): string. Stable identifier of the subscription. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionId(): string|null { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Present only when `expand` includes `subscription_plan`; `null` when expanded and there is no related subscription plan. anyOf[1] (Value): {@see ExpandedSubscriptionPlanSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedSubscriptionPlanSummaryPreviousAttributes|null
     */
    public function getSubscriptionPlan(): ExpandedSubscriptionPlanSummaryPreviousAttributes|null { return $this->get('subscription_plan'); }
    public function hasSubscriptionPlan(): bool { return $this->has('subscription_plan'); }
    /** Subscription plan ID. Omitted when terms_type is subscription_offer. anyOf[1] (Value): string. Subscription plan ID. Omitted when terms_type is subscription_offer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanId(): string|null { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[1] (Value): Array of string. Merchant actions allowed by the subscription's state. A route can still refuse a listed action for a transient reason, such as a renewal already in progress, with its own error. Always present with merchant credentials. [] enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[1][] (Value): string.  Value enum: "cancel", "pause", "resume", "skip_cycle", "renew", "change_plan", "change_quantity". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** The tax the subscription's renewal, setup fee and plan change orders use. `null` when they follow `tax.default_enabled` and `tax.default_calculation` from your settings. Returned only to merchant credentials; omitted for buyer credentials. Always present with merchant credentials. anyOf[1] (Value): {@see SubscriptionTaxPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionTaxPreviousAttributes|null
     */
    public function getTax(): SubscriptionTaxPreviousAttributes|null { return $this->get('tax'); }
    public function hasTax(): bool { return $this->has('tax'); }
    /** Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Value enum: "subscription_plan", "subscription_offer". anyOf[1] (Value): string. Terms come from the subscription plan in subscription_plan_id, or from subscription offers identified on each offer line by subscription_offer_id. Value enum: "subscription_plan", "subscription_offer". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTermsType(): string|null { return $this->get('terms_type'); }
    public function hasTermsType(): bool { return $this->has('terms_type'); }
    /** ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. anyOf[1] (Value): string. ID of the test clock the subscription's customer was created on. The subscription bills at the clock's time. Present only when the customer is on a test clock. Included only in merchant responses and omitted from buyer responses. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTestClockId(): string|null { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTrialEndAt(): string|null { return $this->get('trial_end_at'); }
    public function hasTrialEndAt(): bool { return $this->has('trial_end_at'); }
    /** Delivery issue forecast for the next renewal at renewal_at. Mutually exclusive with delivery_hold. anyOf[1] (Value): {@see SubscriptionUpcomingDeliveryHoldPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionUpcomingDeliveryHoldPreviousAttributes|null
     */
    public function getUpcomingDeliveryHold(): SubscriptionUpcomingDeliveryHoldPreviousAttributes|null { return $this->get('upcoming_delivery_hold'); }
    public function hasUpcomingDeliveryHold(): bool { return $this->has('upcoming_delivery_hold'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. anyOf[1] (Value): integer. Goes up with every change to the subscription, including renewals and other changes Flint makes. Send it as `expected_version` to apply an update only if nothing changed. Format: uint64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOption> $billing_interval_options
 * @property-read ?int $contract_term_months
 * @property-read int $deliveries_per_period
 * @property-read string|null $delivery_interval
 * @property-read int|null $delivery_interval_count
 * @property-read bool $delivery_required
 * @property-read ?MoneyValue $early_termination_fee_money
 * @property-read SubscriptionGiftRecipient|null $gift_recipient
 * @property-read bool $gifts_enabled
 * @property-read list<CheckoutSubscriptionTermsLineItemsItem> $line_items
 * @property-read string $plan_name
 * @property-read int $quantity
 * @property-read list<int> $quantity_options
 * @property-read ?CheckoutSubscriptionRecurringShipping $recurring_shipping
 * @property-read MoneyValue $recurring_total_money
 * @property-read ?MoneyValue $setup_fee_money
 * @property-read string $subscription_plan_id
 * @property-read ?int $trial_period_days
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSubscriptionTerms extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options': list<mixed>, 'contract_term_months'?: int, 'deliveries_per_period': int, 'delivery_interval': string|null, 'delivery_interval_count': int|null, 'delivery_required': bool, 'early_termination_fee_money'?: mixed, 'gift_recipient': mixed, 'gifts_enabled': bool, 'line_items': list<object{'allow_quantity_adjustment': bool, 'max_quantity': int, 'min_quantity': int, 'name': string, 'quantity': int, 'subscription_plan_line_item_id'?: string, 'unit_price_money': mixed}>, 'plan_name': string, 'quantity': int, 'quantity_options': list<int>, 'recurring_shipping'?: mixed, 'recurring_total_money': mixed, 'setup_fee_money'?: mixed, 'subscription_plan_id': string, 'trial_period_days'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionTerms')); }
    /** Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of billing intervals between recurring charges. Format: int32.
     * @return int
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** minItems: 1. [] (Value): {@see SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery, and each option charges for all deliveries in its period. Without a delivery cadence there is one delivery per period, so every option bills the same line prices once per period. With a delivery cadence, a longer period bills more deliveries of the lines that ship; other lines bill once per period. For a different price per interval with no delivery cadence, create separate plans.
     * @return list<SubscriptionIntervalOption>
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: int32.
     * @return ?int
     */
    public function getContractTermMonths(): ?int { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
     * @return int
     */
    public function getDeliveriesPerPeriod(): int { return $this->get('deliveries_per_period'); }
    public function hasDeliveriesPerPeriod(): bool { return $this->has('deliveries_per_period'); }
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
    /** Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value.
     * @return bool
     */
    public function getDeliveryRequired(): bool { return $this->get('delivery_required'); }
    public function hasDeliveryRequired(): bool { return $this->has('delivery_required'); }
    /** The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getEarlyTerminationFeeMoney(): ?MoneyValue { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. anyOf[1] (Value): {@see SubscriptionGiftRecipient}. Who receives a gift subscription. The customer stays the purchaser, who pays, gets receipts and reminders, and manages the subscription. delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
     * @return SubscriptionGiftRecipient|null
     */
    public function getGiftRecipient(): SubscriptionGiftRecipient|null { return $this->get('gift_recipient'); }
    public function hasGiftRecipient(): bool { return $this->has('gift_recipient'); }
    /** Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created.
     * @return bool
     */
    public function getGiftsEnabled(): bool { return $this->get('gifts_enabled'); }
    public function hasGiftsEnabled(): bool { return $this->has('gifts_enabled'); }
    /** Identified frozen plan lines with buyer quantity permissions and bounds. [] (Value): {@see CheckoutSubscriptionTermsLineItemsItem}.
     * @return list<CheckoutSubscriptionTermsLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Plan name shown to the buyer.
     * @return string
     */
    public function getPlanName(): string { return $this->get('plan_name'); }
    public function hasPlanName(): bool { return $this->has('plan_name'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** minItems: 1. [] (Value): integer. Format: int32.
     * @return list<int>
     */
    public function getQuantityOptions(): array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount.
     * @return ?CheckoutSubscriptionRecurringShipping
     */
    public function getRecurringShipping(): ?CheckoutSubscriptionRecurringShipping { return $this->get('recurring_shipping'); }
    public function hasRecurringShipping(): bool { return $this->has('recurring_shipping'); }
    /** Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRecurringTotalMoney(): MoneyValue { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** One-time fee charged with the first payment, when the plan has one. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getSetupFeeMoney(): ?MoneyValue { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Flint subscription plan ID the terms come from.
     * @return string
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Days before the first recurring charge, when the plan has a trial. Format: int32.
     * @return ?int
     */
    public function getTrialPeriodDays(): ?int { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
}

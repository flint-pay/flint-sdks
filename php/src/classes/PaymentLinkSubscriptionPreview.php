<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOption> $billing_interval_options
 * @property-read ?int $contract_term_months
 * @property-read bool $delivery_required
 * @property-read ?MoneyValue $early_termination_fee_money
 * @property-read list<PaymentLinkSubscriptionPreviewLineItemsItem> $line_items
 * @property-read ?Image $plan_image
 * @property-read string $plan_name
 * @property-read list<int> $quantity_options
 * @property-read MoneyValue $recurring_total_money
 * @property-read ?MoneyValue $setup_fee_money
 * @property-read ?int $trial_period_days
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkSubscriptionPreview extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options': list<mixed>, 'contract_term_months'?: int, 'delivery_required': bool, 'early_termination_fee_money'?: mixed, 'line_items': list<object{'allow_quantity_adjustment': bool, 'max_quantity': int, 'min_quantity': int, 'name': string, 'quantity': int, 'subscription_plan_line_item_id'?: string, 'unit_price_money': mixed}>, 'plan_image'?: mixed, 'plan_name': string, 'quantity_options': list<int>, 'recurring_total_money': mixed, 'setup_fee_money'?: mixed, 'trial_period_days'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkSubscriptionPreview')); }
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
    /** Billing intervals the plan offers, which the buyer chooses among on the checkout this link opens. The same values as the subscription plan's `billing_interval_options`. maxItems: 12. uniqueItems: true. [] (Value): {@see SubscriptionIntervalOption}. A billing interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery, and each option charges for all deliveries in its period. Without a delivery cadence there is one delivery per period, so every option bills the same line prices once per period. With a delivery cadence, a longer period bills more deliveries of the lines that ship; other lines bill once per period. For a different price per interval with no delivery cadence, create separate plans.
     * @return list<SubscriptionIntervalOption>
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: int32.
     * @return ?int
     */
    public function getContractTermMonths(): ?int { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** True when the plan has a line that ships or is delivered, so each renewal adds a shipping or delivery charge chosen at checkout. The amount is not known until the buyer enters an address and chooses a method.
     * @return bool
     */
    public function getDeliveryRequired(): bool { return $this->get('delivery_required'); }
    public function hasDeliveryRequired(): bool { return $this->has('delivery_required'); }
    /** The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getEarlyTerminationFeeMoney(): ?MoneyValue { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** Identified plan lines with buyer quantity permissions and bounds. The checkout freezes the terms when it is created. [] (Value): {@see PaymentLinkSubscriptionPreviewLineItemsItem}.
     * @return list<PaymentLinkSubscriptionPreviewLineItemsItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Plan image shown to the buyer, when configured. An image with its URL, size, and alt text.
     * @return ?Image
     */
    public function getPlanImage(): ?Image { return $this->get('plan_image'); }
    public function hasPlanImage(): bool { return $this->has('plan_image'); }
    /** Plan name shown to the buyer.
     * @return string
     */
    public function getPlanName(): string { return $this->get('plan_name'); }
    public function hasPlanName(): bool { return $this->has('plan_name'); }
    /** Quantities the plan offers, which the buyer chooses among on the checkout this link opens. The same values as the subscription plan's `quantity_options`. maxItems: 10. uniqueItems: true. [] (Value): integer. Format: int32. minimum: 1. maximum: 100.
     * @return list<int>
     */
    public function getQuantityOptions(): array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** Recurring total for one billing interval, including line quantities and resolved modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRecurringTotalMoney(): MoneyValue { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** Setup fee added to the first amount due, when configured. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return ?MoneyValue
     */
    public function getSetupFeeMoney(): ?MoneyValue { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Number of trial days before the first recurring charge, when configured. Format: int32.
     * @return ?int
     */
    public function getTrialPeriodDays(): ?int { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
}

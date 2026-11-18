<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionPreviousAttributes>|null $billing_interval_options
 * @property-read int|null $contract_term_months
 * @property-read int|null $deliveries_per_period
 * @property-read string|null $delivery_interval
 * @property-read int|null $delivery_interval_count
 * @property-read bool|null $delivery_required
 * @property-read MoneyValuePreviousAttributes|null $early_termination_fee_money
 * @property-read SubscriptionGiftRecipientPreviousAttributes|null $gift_recipient
 * @property-read bool|null $gifts_enabled
 * @property-read list<CheckoutSubscriptionTermsPreviousAttributesLineItemsItem>|null $line_items
 * @property-read string|null $plan_name
 * @property-read list<CheckoutSubscriptionPricePhasePreviousAttributes>|null $recurring_price_phases
 * @property-read CheckoutSubscriptionRecurringShippingPreviousAttributes|null $recurring_shipping
 * @property-read MoneyValuePreviousAttributes|null $recurring_total_money
 * @property-read MoneyValuePreviousAttributes|null $setup_fee_money
 * @property-read string|null $subscription_plan_id
 * @property-read int|null $trial_period_days
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutSubscriptionTermsPreviousAttributes extends Model {
    /** @param array{'billing_interval'?: mixed, 'billing_interval_count'?: mixed, 'billing_interval_options'?: mixed, 'contract_term_months'?: mixed, 'deliveries_per_period'?: mixed, 'delivery_interval'?: mixed, 'delivery_interval_count'?: mixed, 'delivery_required'?: mixed, 'early_termination_fee_money'?: mixed, 'gift_recipient'?: mixed, 'gifts_enabled'?: mixed, 'line_items'?: mixed, 'plan_name'?: mixed, 'recurring_price_phases'?: mixed, 'recurring_shipping'?: mixed, 'recurring_total_money'?: mixed, 'setup_fee_money'?: mixed, 'subscription_plan_id'?: mixed, 'trial_period_days'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionTermsPreviousAttributes')); }
    /** Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBillingInterval(): string|null { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of billing intervals between recurring charges. anyOf[1] (Value): integer. Number of billing intervals between recurring charges. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getBillingIntervalCount(): int|null { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Billing intervals the buyer can choose from, frozen from the plan when the session was created. anyOf[1] (Value): Array of {@see SubscriptionIntervalOptionPreviousAttributes}. Billing intervals the buyer can choose from, frozen from the plan when the session was created. minItems: 1. anyOf[1][] (Value): {@see SubscriptionIntervalOptionPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<SubscriptionIntervalOptionPreviousAttributes>|null
     */
    public function getBillingIntervalOptions(): array|null { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. anyOf[1] (Value): integer. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getContractTermMonths(): int|null { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. anyOf[1] (Value): integer. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDeliveriesPerPeriod(): int|null { return $this->get('deliveries_per_period'); }
    public function hasDeliveriesPerPeriod(): bool { return $this->has('deliveries_per_period'); }
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
    /** Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. anyOf[1] (Value): boolean. Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getDeliveryRequired(): bool|null { return $this->get('delivery_required'); }
    public function hasDeliveryRequired(): bool { return $this->has('delivery_required'); }
    /** The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getEarlyTerminationFeeMoney(): MoneyValuePreviousAttributes|null { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. anyOf[1] (Value): {@see SubscriptionGiftRecipientPreviousAttributes}. anyOf[2] (Value): null.
     * @return SubscriptionGiftRecipientPreviousAttributes|null
     */
    public function getGiftRecipient(): SubscriptionGiftRecipientPreviousAttributes|null { return $this->get('gift_recipient'); }
    public function hasGiftRecipient(): bool { return $this->has('gift_recipient'); }
    /** Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. anyOf[1] (Value): boolean. Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getGiftsEnabled(): bool|null { return $this->get('gifts_enabled'); }
    public function hasGiftsEnabled(): bool { return $this->has('gifts_enabled'); }
    /** Identified frozen plan lines with buyer quantity permissions and bounds. anyOf[1] (Value): Array of {@see CheckoutSubscriptionTermsPreviousAttributesLineItemsItem}. Identified frozen plan lines with buyer quantity permissions and bounds. anyOf[1][] (Value): {@see CheckoutSubscriptionTermsPreviousAttributesLineItemsItem}. anyOf[2] (Value): null.
     * @return list<CheckoutSubscriptionTermsPreviousAttributesLineItemsItem>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Plan name shown to the buyer. anyOf[1] (Value): string. Plan name shown to the buyer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPlanName(): string|null { return $this->get('plan_name'); }
    public function hasPlanName(): bool { return $this->has('plan_name'); }
    /** Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase. anyOf[1] (Value): Array of {@see CheckoutSubscriptionPricePhasePreviousAttributes}. Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count and continues until cancellation. Tax and shipping are additional. Always contains at least one phase. anyOf[1][] (Value): {@see CheckoutSubscriptionPricePhasePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<CheckoutSubscriptionPricePhasePreviousAttributes>|null
     */
    public function getRecurringPricePhases(): array|null { return $this->get('recurring_price_phases'); }
    public function hasRecurringPricePhases(): bool { return $this->has('recurring_price_phases'); }
    /** Shipping that renews with each charge, for the delivery method the buyer chose. Omitted when no delivery method applies to the plan's lines. anyOf[1] (Value): {@see CheckoutSubscriptionRecurringShippingPreviousAttributes}. anyOf[2] (Value): null.
     * @return CheckoutSubscriptionRecurringShippingPreviousAttributes|null
     */
    public function getRecurringShipping(): CheckoutSubscriptionRecurringShippingPreviousAttributes|null { return $this->get('recurring_shipping'); }
    public function hasRecurringShipping(): bool { return $this->has('recurring_shipping'); }
    /** Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getRecurringTotalMoney(): MoneyValuePreviousAttributes|null { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** One-time fee charged with the first payment, when the plan has one. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getSetupFeeMoney(): MoneyValuePreviousAttributes|null { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Flint subscription plan ID the terms come from. anyOf[1] (Value): string. Flint subscription plan ID the terms come from. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSubscriptionPlanId(): string|null { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Days before the first recurring charge, when the plan has a trial. anyOf[1] (Value): integer. Days before the first recurring charge, when the plan has a trial. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getTrialPeriodDays(): int|null { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
}

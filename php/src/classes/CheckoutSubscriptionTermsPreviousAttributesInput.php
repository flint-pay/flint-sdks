<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $billing_interval
 * @property-read int|null $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $billing_interval_options
 * @property-read int|null $contract_term_months
 * @property-read int|null $deliveries_per_period
 * @property-read string|null $delivery_interval
 * @property-read int|null $delivery_interval_count
 * @property-read bool|null $delivery_required
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $early_termination_fee_money
 * @property-read SubscriptionEndAfterCyclesPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $end_after
 * @property-read SubscriptionGiftRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $gift_recipient
 * @property-read bool|null $gifts_enabled
 * @property-read list<array{'allow_quantity_adjustment'?: bool|null, 'max_quantity'?: int|null, 'min_quantity'?: int|null, 'name'?: string|null, 'quantity'?: int|null, 'subscription_plan_line_item_id'?: string|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object>|null $line_items
 * @property-read string|null $plan_name
 * @property-read list<CheckoutSubscriptionPricePhasePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $recurring_price_phases
 * @property-read CheckoutSubscriptionRecurringShippingPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recurring_shipping
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recurring_total_money
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $setup_fee_money
 * @property-read string|null $subscription_plan_id
 * @property-read int|null $trial_period_days
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSubscriptionTermsPreviousAttributesInput extends Model {
    /** @param array{'billing_interval'?: string|null, 'billing_interval_count'?: int|null, 'billing_interval_options'?: list<SubscriptionIntervalOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'contract_term_months'?: int|null, 'deliveries_per_period'?: int|null, 'delivery_interval'?: string|null, 'delivery_interval_count'?: int|null, 'delivery_required'?: bool|null, 'early_termination_fee_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'end_after'?: SubscriptionEndAfterCyclesPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'gift_recipient'?: SubscriptionGiftRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'gifts_enabled'?: bool|null, 'line_items'?: list<array{'allow_quantity_adjustment'?: bool|null, 'max_quantity'?: int|null, 'min_quantity'?: int|null, 'name'?: string|null, 'quantity'?: int|null, 'subscription_plan_line_item_id'?: string|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object>|null, 'plan_name'?: string|null, 'recurring_price_phases'?: list<CheckoutSubscriptionPricePhasePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'recurring_shipping'?: CheckoutSubscriptionRecurringShippingPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'recurring_total_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'setup_fee_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'subscription_plan_id'?: string|null, 'trial_period_days'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionTermsPreviousAttributesInput')); }
    /** Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[1] (Value): string. Unit of the billing period this checkout currently charges on. It starts as the interval chosen when the checkout session was created, or the plan's default when none was chosen, and changes when the buyer picks another option. Read with `billing_interval_count`. Value enum: "daily", "weekly", "monthly", "yearly". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): mixed { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of billing intervals between recurring charges. anyOf[1] (Value): integer. Number of billing intervals between recurring charges. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): mixed { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Billing intervals the buyer can choose from, frozen from the plan when the session was created. anyOf[1] (Value): Array of {@see SubscriptionIntervalOptionPreviousAttributesInput}. Billing intervals the buyer can choose from, frozen from the plan when the session was created. minItems: 1. anyOf[1][] (Value): {@see SubscriptionIntervalOptionPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<SubscriptionIntervalOptionPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): mixed { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. anyOf[1] (Value): integer. The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When contract_term_months is omitted; use hasContractTermMonths() or valueOrDefault().
     */
    public function getContractTermMonths(): mixed { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. anyOf[1] (Value): integer. Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When deliveries_per_period is omitted; use hasDeliveriesPerPeriod() or valueOrDefault().
     */
    public function getDeliveriesPerPeriod(): mixed { return $this->get('deliveries_per_period'); }
    public function hasDeliveriesPerPeriod(): bool { return $this->has('deliveries_per_period'); }
    /** Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly", "yearly", null. anyOf[1] (Value): string. Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly", "yearly", null. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_interval is omitted; use hasDeliveryInterval() or valueOrDefault().
     */
    public function getDeliveryInterval(): mixed { return $this->get('delivery_interval'); }
    public function hasDeliveryInterval(): bool { return $this->has('delivery_interval'); }
    /** Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. anyOf[1] (Value): integer. Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: int32. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When delivery_interval_count is omitted; use hasDeliveryIntervalCount() or valueOrDefault().
     */
    public function getDeliveryIntervalCount(): mixed { return $this->get('delivery_interval_count'); }
    public function hasDeliveryIntervalCount(): bool { return $this->has('delivery_interval_count'); }
    /** Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. anyOf[1] (Value): boolean. Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When delivery_required is omitted; use hasDeliveryRequired() or valueOrDefault().
     */
    public function getDeliveryRequired(): mixed { return $this->get('delivery_required'); }
    public function hasDeliveryRequired(): bool { return $this->has('delivery_required'); }
    /** The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When early_termination_fee_money is omitted; use hasEarlyTerminationFeeMoney() or valueOrDefault().
     */
    public function getEarlyTerminationFeeMoney(): mixed { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** The automatic end condition frozen with the order. Omitted for subscriptions with no automatic end. anyOf[1] (Value): {@see SubscriptionEndAfterCyclesPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return SubscriptionEndAfterCyclesPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When end_after is omitted; use hasEndAfter() or valueOrDefault().
     */
    public function getEndAfter(): mixed { return $this->get('end_after'); }
    public function hasEndAfter(): bool { return $this->has('end_after'); }
    /** Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. anyOf[1] (Value): {@see SubscriptionGiftRecipientPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return SubscriptionGiftRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When gift_recipient is omitted; use hasGiftRecipient() or valueOrDefault().
     */
    public function getGiftRecipient(): mixed { return $this->get('gift_recipient'); }
    public function hasGiftRecipient(): bool { return $this->has('gift_recipient'); }
    /** Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. anyOf[1] (Value): boolean. Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When gifts_enabled is omitted; use hasGiftsEnabled() or valueOrDefault().
     */
    public function getGiftsEnabled(): mixed { return $this->get('gifts_enabled'); }
    public function hasGiftsEnabled(): bool { return $this->has('gifts_enabled'); }
    /** Identified frozen plan lines with buyer quantity permissions and bounds. anyOf[1] (Value): Array of object. Identified frozen plan lines with buyer quantity permissions and bounds. anyOf[1][] (Value): object. anyOf[1][].allow_quantity_adjustment (Optional): boolean or null. Whether the buyer may adjust this line quantity. anyOf[1][].allow_quantity_adjustment.anyOf[1] (Value): boolean. Whether the buyer may adjust this line quantity. anyOf[1][].allow_quantity_adjustment.anyOf[2] (Value): null. anyOf[1][].max_quantity (Optional): integer or null. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. anyOf[1][].max_quantity.anyOf[1] (Value): integer. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. anyOf[1][].max_quantity.anyOf[2] (Value): null. anyOf[1][].min_quantity (Optional): integer or null. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. anyOf[1][].min_quantity.anyOf[1] (Value): integer. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. anyOf[1][].min_quantity.anyOf[2] (Value): null. anyOf[1][].name (Optional): string or null. The captured line name. anyOf[1][].name.anyOf[1] (Value): string. The captured line name. anyOf[1][].name.anyOf[2] (Value): null. anyOf[1][].quantity (Optional): integer or null. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. anyOf[1][].quantity.anyOf[1] (Value): integer. The line quantity is the seat count. Nothing multiplies it. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. anyOf[1][].quantity.anyOf[2] (Value): null. anyOf[1][].subscription_plan_line_item_id (Optional): string or null. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. anyOf[1][].subscription_plan_line_item_id.anyOf[1] (Value): string. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: ^spli_[0-9A-HJKMNP-TV-Z]{26}$. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N". anyOf[1][].subscription_plan_line_item_id.anyOf[2] (Value): null. anyOf[1][].unit_price_money (Optional): {@see MoneyValuePreviousAttributesInput} or null. The captured unit price. anyOf[1][].unit_price_money.anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[1][].unit_price_money.anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return list<array{'allow_quantity_adjustment'?: bool|null, 'max_quantity'?: int|null, 'min_quantity'?: int|null, 'name'?: string|null, 'quantity'?: int|null, 'subscription_plan_line_item_id'?: string|null, 'unit_price_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, ...}|object>|null
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): mixed { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Plan name shown to the buyer. anyOf[1] (Value): string. Plan name shown to the buyer. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When plan_name is omitted; use hasPlanName() or valueOrDefault().
     */
    public function getPlanName(): mixed { return $this->get('plan_name'); }
    public function hasPlanName(): bool { return $this->has('plan_name'); }
    /** Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count. The subscription’s end_after condition can end any phase. Tax and shipping are additional. Always contains at least one phase. anyOf[1] (Value): Array of {@see CheckoutSubscriptionPricePhasePreviousAttributesInput}. Ordered recurring merchandise prices from the first paid billing period, after any trial, with frozen signup promotions applied. Each finite phase is followed by the next phase; the final phase has a null billing_period_count. The subscription’s end_after condition can end any phase. Tax and shipping are additional. Always contains at least one phase. anyOf[1][] (Value): {@see CheckoutSubscriptionPricePhasePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<CheckoutSubscriptionPricePhasePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When recurring_price_phases is omitted; use hasRecurringPricePhases() or valueOrDefault().
     */
    public function getRecurringPricePhases(): mixed { return $this->get('recurring_price_phases'); }
    public function hasRecurringPricePhases(): bool { return $this->has('recurring_price_phases'); }
    /** Shipping that renews with each charge, for the delivery method the buyer chose. Omitted when no delivery method applies to the plan's lines. anyOf[1] (Value): {@see CheckoutSubscriptionRecurringShippingPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return CheckoutSubscriptionRecurringShippingPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recurring_shipping is omitted; use hasRecurringShipping() or valueOrDefault().
     */
    public function getRecurringShipping(): mixed { return $this->get('recurring_shipping'); }
    public function hasRecurringShipping(): bool { return $this->has('recurring_shipping'); }
    /** Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recurring_total_money is omitted; use hasRecurringTotalMoney() or valueOrDefault().
     */
    public function getRecurringTotalMoney(): mixed { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** One-time fee charged with the first payment, when the plan has one. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When setup_fee_money is omitted; use hasSetupFeeMoney() or valueOrDefault().
     */
    public function getSetupFeeMoney(): mixed { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Flint subscription plan ID the terms come from. anyOf[1] (Value): string. Flint subscription plan ID the terms come from. Example: "plan_01KEZF7C004CY5ZR33XST2AASV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): mixed { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Days before the first recurring charge, when the plan has a trial. anyOf[1] (Value): integer. Days before the first recurring charge, when the plan has a trial. Format: int32. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When trial_period_days is omitted; use hasTrialPeriodDays() or valueOrDefault().
     */
    public function getTrialPeriodDays(): mixed { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass> $billing_interval_options
 * @property-read int $contract_term_months
 * @property-read int $deliveries_per_period
 * @property-read string|null $delivery_interval
 * @property-read int|null $delivery_interval_count
 * @property-read bool $delivery_required
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $early_termination_fee_money
 * @property-read array{'email': string, 'message': string|null, 'name': string|null, ...}|object|null $gift_recipient
 * @property-read bool $gifts_enabled
 * @property-read list<array{'allow_quantity_adjustment': bool, 'max_quantity': int, 'min_quantity': int, 'name': string, 'quantity': int, 'subscription_plan_line_item_id'?: string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object> $line_items
 * @property-read string $plan_name
 * @property-read int $quantity
 * @property-read list<int> $quantity_options
 * @property-read CheckoutSubscriptionRecurringShippingInput|array<array-key, mixed>|\stdClass $recurring_shipping
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $recurring_total_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $setup_fee_money
 * @property-read string $subscription_plan_id
 * @property-read int $trial_period_days
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutSubscriptionTermsInput extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options': list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'contract_term_months'?: int, 'deliveries_per_period': int, 'delivery_interval': string|null, 'delivery_interval_count': int|null, 'delivery_required': bool, 'early_termination_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'gift_recipient': array{'email': string, 'message': string|null, 'name': string|null, ...}|object|null, 'gifts_enabled': bool, 'line_items': list<array{'allow_quantity_adjustment': bool, 'max_quantity': int, 'min_quantity': int, 'name': string, 'quantity': int, 'subscription_plan_line_item_id'?: string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object>, 'plan_name': string, 'quantity': int, 'quantity_options': list<int>, 'recurring_shipping'?: CheckoutSubscriptionRecurringShippingInput|array<array-key, mixed>|\stdClass, 'recurring_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'subscription_plan_id': string, 'trial_period_days'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutSubscriptionTermsInput')); }
    /** Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Number of billing intervals between recurring charges. Format: int32.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** minItems: 1. [] (Value): {@see SubscriptionIntervalOptionInput}. A billing interval, such as every 2 months, that a plan, offer, or subscription lets buyers choose. Prices of lines that ship are per delivery, and each option charges for all deliveries in its period. Without a delivery cadence there is one delivery per period, so every option bills the same line prices once per period. With a delivery cadence, a longer period bills more deliveries of the lines that ship; other lines bill once per period. For a different price per interval with no delivery cadence, create separate plans.
     * @return list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When billing_interval_options is omitted; use hasBillingIntervalOptions() or valueOrDefault().
     */
    public function getBillingIntervalOptions(): array { return $this->get('billing_interval_options'); }
    public function hasBillingIntervalOptions(): bool { return $this->has('billing_interval_options'); }
    /** The term agreed with the buyer, in months, when configured. Flint records it on the subscription and does not stop the buyer from canceling earlier. Format: int32.
     * @return int
     * @throws SdkError When contract_term_months is omitted; use hasContractTermMonths() or valueOrDefault().
     */
    public function getContractTermMonths(): int { return $this->get('contract_term_months'); }
    public function hasContractTermMonths(): bool { return $this->has('contract_term_months'); }
    /** Deliveries paid for by one billing period, from 1 to 24. One when no separate delivery cadence is set. Prices of lines that ship are per delivery. Format: int32. minimum: 1. maximum: 24.
     * @return int
     * @throws SdkError When deliveries_per_period is omitted; use hasDeliveriesPerPeriod() or valueOrDefault().
     */
    public function getDeliveriesPerPeriod(): int { return $this->get('deliveries_per_period'); }
    public function hasDeliveriesPerPeriod(): bool { return $this->has('deliveries_per_period'); }
    /** Delivery cadence frozen from the plan. Null when no separate delivery cadence is set; one delivery is made per billing period. Value enum: "daily", "weekly", "monthly", "yearly", null.
     * @return string|null
     * @throws SdkError When delivery_interval is omitted; use hasDeliveryInterval() or valueOrDefault().
     */
    public function getDeliveryInterval(): string|null { return $this->get('delivery_interval'); }
    public function hasDeliveryInterval(): bool { return $this->has('delivery_interval'); }
    /** Number of delivery intervals between deliveries. Null when no separate delivery cadence is set. Format: int32. minimum: 1.
     * @return int|null
     * @throws SdkError When delivery_interval_count is omitted; use hasDeliveryIntervalCount() or valueOrDefault().
     */
    public function getDeliveryIntervalCount(): int|null { return $this->get('delivery_interval_count'); }
    public function hasDeliveryIntervalCount(): bool { return $this->has('delivery_interval_count'); }
    /** Whether any line in the subscription plan's frozen checkout terms requires delivery. Available before delivery selection. One-time order lines do not affect this value.
     * @return bool
     * @throws SdkError When delivery_required is omitted; use hasDeliveryRequired() or valueOrDefault().
     */
    public function getDeliveryRequired(): bool { return $this->get('delivery_required'); }
    public function hasDeliveryRequired(): bool { return $this->has('delivery_required'); }
    /** The fee agreed for canceling before the recorded term ends, when configured. Flint records it on the subscription but never charges it. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When early_termination_fee_money is omitted; use hasEarlyTerminationFeeMoney() or valueOrDefault().
     */
    public function getEarlyTerminationFeeMoney(): mixed { return $this->get('early_termination_fee_money'); }
    public function hasEarlyTerminationFeeMoney(): bool { return $this->has('early_termination_fee_money'); }
    /** Who receives the gift. The subscription this checkout starts gets it, and the buyer stays the purchaser. Null when the buyer hasn't named one. anyOf[1] (Value): {@see SubscriptionGiftRecipientInput}. Who receives a gift subscription. The customer stays the purchaser, who pays, gets receipts and reminders, and manages the subscription. delivery.recipient stays the ship-to address. anyOf[2] (Value): null.
     * @return array{'email': string, 'message': string|null, 'name': string|null, ...}|object|null
     * @throws SdkError When gift_recipient is omitted; use hasGiftRecipient() or valueOrDefault().
     */
    public function getGiftRecipient(): mixed { return $this->get('gift_recipient'); }
    public function hasGiftRecipient(): bool { return $this->has('gift_recipient'); }
    /** Whether the buyer can name a gift recipient, frozen from the plan's gifts_enabled when the session was created.
     * @return bool
     * @throws SdkError When gifts_enabled is omitted; use hasGiftsEnabled() or valueOrDefault().
     */
    public function getGiftsEnabled(): bool { return $this->get('gifts_enabled'); }
    public function hasGiftsEnabled(): bool { return $this->has('gifts_enabled'); }
    /** Identified frozen plan lines with buyer quantity permissions and bounds. [] (Value): object. [].allow_quantity_adjustment (Required): boolean. Whether the buyer may adjust this line quantity. [].max_quantity (Required): integer. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. [].min_quantity (Required): integer. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. [].name (Required): string. The captured line name. [].quantity (Required): integer. The line quantity, before the subscription quantity multiplier. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. [].subscription_plan_line_item_id (Optional): string. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: ^spli_[0-9A-HJKMNP-TV-Z]{26}$. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N". [].unit_price_money (Required): {@see MoneyValueInput}. The captured unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<array{'allow_quantity_adjustment': bool, 'max_quantity': int, 'min_quantity': int, 'name': string, 'quantity': int, 'subscription_plan_line_item_id'?: string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Plan name shown to the buyer.
     * @return string
     * @throws SdkError When plan_name is omitted; use hasPlanName() or valueOrDefault().
     */
    public function getPlanName(): string { return $this->get('plan_name'); }
    public function hasPlanName(): bool { return $this->has('plan_name'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** minItems: 1. [] (Value): integer. Format: int32.
     * @return list<int>
     * @throws SdkError When quantity_options is omitted; use hasQuantityOptions() or valueOrDefault().
     */
    public function getQuantityOptions(): array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** Recurring shipping charged on a checkout's subscription: the delivery method name, whether the price is fixed or quoted, and the amount.
     * @return CheckoutSubscriptionRecurringShippingInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurring_shipping is omitted; use hasRecurringShipping() or valueOrDefault().
     */
    public function getRecurringShipping(): mixed { return $this->get('recurring_shipping'); }
    public function hasRecurringShipping(): bool { return $this->has('recurring_shipping'); }
    /** Charge for one billing period before tax and shipping, including prepaid deliveries and modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurring_total_money is omitted; use hasRecurringTotalMoney() or valueOrDefault().
     */
    public function getRecurringTotalMoney(): mixed { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** One-time fee charged with the first payment, when the plan has one. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_fee_money is omitted; use hasSetupFeeMoney() or valueOrDefault().
     */
    public function getSetupFeeMoney(): mixed { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Flint subscription plan ID the terms come from. Example: "plan_01KEZF7C004CY5ZR33XST2AASV".
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
    /** Days before the first recurring charge, when the plan has a trial. Format: int32.
     * @return int
     * @throws SdkError When trial_period_days is omitted; use hasTrialPeriodDays() or valueOrDefault().
     */
    public function getTrialPeriodDays(): int { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass> $billing_interval_options
 * @property-read int $contract_term_months
 * @property-read bool $delivery_required
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $early_termination_fee_money
 * @property-read list<array{'allow_quantity_adjustment': bool, 'max_quantity': int, 'min_quantity': int, 'name': string, 'quantity': int, 'subscription_plan_line_item_id'?: string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object> $line_items
 * @property-read ImageInput|array<array-key, mixed>|\stdClass $plan_image
 * @property-read string $plan_name
 * @property-read list<int> $quantity_options
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $recurring_total_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $setup_fee_money
 * @property-read int $trial_period_days
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkSubscriptionPreviewInput extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_interval_options': list<SubscriptionIntervalOptionInput|array<array-key, mixed>|\stdClass>, 'contract_term_months'?: int, 'delivery_required': bool, 'early_termination_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'line_items': list<array{'allow_quantity_adjustment': bool, 'max_quantity': int, 'min_quantity': int, 'name': string, 'quantity': int, 'subscription_plan_line_item_id'?: string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object>, 'plan_image'?: ImageInput|array<array-key, mixed>|\stdClass, 'plan_name': string, 'quantity_options': list<int>, 'recurring_total_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'setup_fee_money'?: MoneyValueInput|array<array-key, mixed>|\stdClass, 'trial_period_days'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkSubscriptionPreviewInput')); }
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
    /** Billing intervals the plan offers, which the buyer chooses among on the checkout this link opens. The same values as the subscription plan's `billing_interval_options`. maxItems: 12. uniqueItems: true. [] (Value): {@see SubscriptionIntervalOptionInput}. A billing cadence offered by a subscription plan or offer. Every option bills the same line prices once per period; prices are not scaled by the interval. For a different price per interval, create separate plans.
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
    /** True when the plan has a line that ships or is delivered, so each renewal adds a shipping or delivery charge chosen at checkout. The amount is not known until the buyer enters an address and chooses a method.
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
    /** Identified plan lines with buyer quantity permissions and bounds. The checkout freezes the terms when it is created. [] (Value): object. [].allow_quantity_adjustment (Required): boolean. Whether the buyer may adjust this line quantity. [].max_quantity (Required): integer. Maximum buyer quantity, defaulting to 9999. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. [].min_quantity (Required): integer. Minimum buyer quantity, defaulting to 1. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. [].name (Required): string. The captured line name. [].quantity (Required): integer. The line quantity, before the subscription quantity multiplier. Whole-number quantity; fractional quantities are not supported. Format: int32. minimum: 1. maximum: 9999. [].subscription_plan_line_item_id (Optional): string. The plan line whose terms were captured. Absent when an older snapshot did not record its plan line ID. pattern: ^spli_[0-9A-HJKMNP-TV-Z]{26}$. Example: "spli_01KEZF7C00H9FGC2KBRF82H87N". [].unit_price_money (Required): {@see MoneyValueInput}. The captured unit price. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<array{'allow_quantity_adjustment': bool, 'max_quantity': int, 'min_quantity': int, 'name': string, 'quantity': int, 'subscription_plan_line_item_id'?: string, 'unit_price_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Plan image shown to the buyer, when configured. An image with its URL, size, and alt text.
     * @return ImageInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When plan_image is omitted; use hasPlanImage() or valueOrDefault().
     */
    public function getPlanImage(): mixed { return $this->get('plan_image'); }
    public function hasPlanImage(): bool { return $this->has('plan_image'); }
    /** Plan name shown to the buyer.
     * @return string
     * @throws SdkError When plan_name is omitted; use hasPlanName() or valueOrDefault().
     */
    public function getPlanName(): string { return $this->get('plan_name'); }
    public function hasPlanName(): bool { return $this->has('plan_name'); }
    /** Quantities the plan offers, which the buyer chooses among on the checkout this link opens. The same values as the subscription plan's `quantity_options`. maxItems: 10. uniqueItems: true. [] (Value): integer. Format: int32. minimum: 1. maximum: 100.
     * @return list<int>
     * @throws SdkError When quantity_options is omitted; use hasQuantityOptions() or valueOrDefault().
     */
    public function getQuantityOptions(): array { return $this->get('quantity_options'); }
    public function hasQuantityOptions(): bool { return $this->has('quantity_options'); }
    /** Recurring total for one billing interval, including line quantities and resolved modifiers. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurring_total_money is omitted; use hasRecurringTotalMoney() or valueOrDefault().
     */
    public function getRecurringTotalMoney(): mixed { return $this->get('recurring_total_money'); }
    public function hasRecurringTotalMoney(): bool { return $this->has('recurring_total_money'); }
    /** Setup fee added to the first amount due, when configured. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When setup_fee_money is omitted; use hasSetupFeeMoney() or valueOrDefault().
     */
    public function getSetupFeeMoney(): mixed { return $this->get('setup_fee_money'); }
    public function hasSetupFeeMoney(): bool { return $this->has('setup_fee_money'); }
    /** Number of trial days before the first recurring charge, when configured. Format: int32.
     * @return int
     * @throws SdkError When trial_period_days is omitted; use hasTrialPeriodDays() or valueOrDefault().
     */
    public function getTrialPeriodDays(): int { return $this->get('trial_period_days'); }
    public function hasTrialPeriodDays(): bool { return $this->has('trial_period_days'); }
}

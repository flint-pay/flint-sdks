<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_starts
 * @property-read array{'amount': string, 'currency': string}|object|null $credit_money
 * @property-read int $deliveries_per_period
 * @property-read string|null $delivery_interval
 * @property-read int|null $delivery_interval_count
 * @property-read string|\DateTimeInterface|null $effective_at
 * @property-read string $interval
 * @property-read int $interval_count
 * @property-read string $mode
 * @property-read int $quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $recurring_subtotal_money
 * @property-read SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass $renewal
 * @property-read string $subscription_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionQuantityChangePreviewInput extends Model {
    /** @param array{'billing_starts': string, 'credit_money': array{'amount': string, 'currency': string}|object|null, 'deliveries_per_period': int, 'delivery_interval': string|null, 'delivery_interval_count': int|null, 'effective_at': string|\DateTimeInterface|null, 'interval': string, 'interval_count': int, 'mode': string, 'quantity': int, 'recurring_subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'renewal': SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass, 'subscription_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionQuantityChangePreviewInput')); }
    /** When this quantity change is billed. Value enum: "prorated_now".
     * @return string
     * @throws SdkError When billing_starts is omitted; use hasBillingStarts() or valueOrDefault().
     */
    public function getBillingStarts(): string { return $this->get('billing_starts'); }
    public function hasBillingStarts(): bool { return $this->has('billing_starts'); }
    /** Credit for unused paid subscription time. Null when there is no paid period to credit. anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
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
    /** When the quantities are expected to take effect. Null when no billing time is available. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When effective_at is omitted; use hasEffectiveAt() or valueOrDefault().
     */
    public function getEffectiveAt(): string|\DateTimeInterface|null { return $this->get('effective_at'); }
    public function hasEffectiveAt(): bool { return $this->has('effective_at'); }
    /** The subscription billing interval after the quantity change. Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When interval is omitted; use hasInterval() or valueOrDefault().
     */
    public function getInterval(): string { return $this->get('interval'); }
    public function hasInterval(): bool { return $this->has('interval'); }
    /** The number of interval units in each billing period. Format: int32.
     * @return int
     * @throws SdkError When interval_count is omitted; use hasIntervalCount() or valueOrDefault().
     */
    public function getIntervalCount(): int { return $this->get('interval_count'); }
    public function hasIntervalCount(): bool { return $this->has('interval_count'); }
    /** The kind of subscription pricing estimate. Value enum: "quantity_change".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** The full-period recurring item subtotal after the quantity change, before discounts, tax, or shipping. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurring_subtotal_money is omitted; use hasRecurringSubtotalMoney() or valueOrDefault().
     */
    public function getRecurringSubtotalMoney(): mixed { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** Estimated charge for this quantity change, including proration, unused-time credit, discounts, and tax. Estimated pricing and billing time for a subscription renewal, including items, discounts, shipping, and tax.
     * @return SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When renewal is omitted; use hasRenewal() or valueOrDefault().
     */
    public function getRenewal(): mixed { return $this->get('renewal'); }
    public function hasRenewal(): bool { return $this->has('renewal'); }
    /** The subscription whose quantities were estimated. Example: "sub_01KEZF7C00BVRE8YDBXQB74BBM".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
}

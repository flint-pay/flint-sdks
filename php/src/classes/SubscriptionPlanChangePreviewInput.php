<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read string $billing_starts
 * @property-read array{'amount': string, 'currency': string}|object|null $credit_money
 * @property-read string $mode
 * @property-read int $quantity
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $recurring_subtotal_money
 * @property-read SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass $renewal
 * @property-read string $subscription_id
 * @property-read string $subscription_plan_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionPlanChangePreviewInput extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'billing_starts': string, 'credit_money': array{'amount': string, 'currency': string}|object|null, 'mode': string, 'quantity': int, 'recurring_subtotal_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'renewal': SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass, 'subscription_id': string, 'subscription_plan_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionPlanChangePreviewInput')); }
    /** Shape $ (Value): string.  Value enum: "daily", "weekly", "monthly", "yearly".
     * @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** Shape $ (Value): string.  Value enum: "now", "next_renewal".
     * @return string
     * @throws SdkError When billing_starts is omitted; use hasBillingStarts() or valueOrDefault().
     */
    public function getBillingStarts(): string { return $this->get('billing_starts'); }
    public function hasBillingStarts(): bool { return $this->has('billing_starts'); }
    /** Shape $ (Value): {@see MoneyValueInput} or null. Unused paid item time credited when billing_starts is now; null for next_renewal. Shape $.anyOf[1] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code. Shape $.anyOf[2] (Value): null.
     * @return array{'amount': string, 'currency': string}|object|null
     * @throws SdkError When credit_money is omitted; use hasCreditMoney() or valueOrDefault().
     */
    public function getCreditMoney(): mixed { return $this->get('credit_money'); }
    public function hasCreditMoney(): bool { return $this->has('credit_money'); }
    /** Shape $ (Value): string.  Value enum: "plan_change".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int32.
     * @return int
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): int { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recurring_subtotal_money is omitted; use hasRecurringSubtotalMoney() or valueOrDefault().
     */
    public function getRecurringSubtotalMoney(): mixed { return $this->get('recurring_subtotal_money'); }
    public function hasRecurringSubtotalMoney(): bool { return $this->has('recurring_subtotal_money'); }
    /** Shape $ (Value): {@see SubscriptionRenewalEstimateInput}. Estimated pricing and billing time for a subscription's next renewal, including items, discounts, shipping, and tax.
     * @return SubscriptionRenewalEstimateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When renewal is omitted; use hasRenewal() or valueOrDefault().
     */
    public function getRenewal(): mixed { return $this->get('renewal'); }
    public function hasRenewal(): bool { return $this->has('renewal'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_plan_id is omitted; use hasSubscriptionPlanId() or valueOrDefault().
     */
    public function getSubscriptionPlanId(): string { return $this->get('subscription_plan_id'); }
    public function hasSubscriptionPlanId(): bool { return $this->has('subscription_plan_id'); }
}

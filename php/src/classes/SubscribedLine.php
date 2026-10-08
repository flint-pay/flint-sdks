<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $billing_interval
 * @property-read int $billing_interval_count
 * @property-read MoneyValue $recurring_amount_money
 * @property-read string $subscription_offer_id
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscribedLine extends Model {
    /** @param array{'billing_interval': string, 'billing_interval_count': int, 'recurring_amount_money'?: mixed, 'subscription_offer_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscribedLine')); }
    /** @return string
     * @throws SdkError When billing_interval is omitted; use hasBillingInterval() or valueOrDefault().
     */
    public function getBillingInterval(): string { return $this->get('billing_interval'); }
    public function hasBillingInterval(): bool { return $this->has('billing_interval'); }
    /** @return int
     * @throws SdkError When billing_interval_count is omitted; use hasBillingIntervalCount() or valueOrDefault().
     */
    public function getBillingIntervalCount(): int { return $this->get('billing_interval_count'); }
    public function hasBillingIntervalCount(): bool { return $this->has('billing_interval_count'); }
    /** @return MoneyValue
     * @throws SdkError When recurring_amount_money is omitted; use hasRecurringAmountMoney() or valueOrDefault().
     */
    public function getRecurringAmountMoney(): MoneyValue { return $this->get('recurring_amount_money'); }
    public function hasRecurringAmountMoney(): bool { return $this->has('recurring_amount_money'); }
    /** @return string
     * @throws SdkError When subscription_offer_id is omitted; use hasSubscriptionOfferId() or valueOrDefault().
     */
    public function getSubscriptionOfferId(): string { return $this->get('subscription_offer_id'); }
    public function hasSubscriptionOfferId(): bool { return $this->has('subscription_offer_id'); }
}

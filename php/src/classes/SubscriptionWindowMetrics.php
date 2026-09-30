<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $canceled_subscriptions
 * @property-read string $new_subscriptions
 * @property-read list<MoneyValue> $subscription_collected_money_by_currency
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionWindowMetrics extends Model {
    /** @param array{'canceled_subscriptions': string, 'new_subscriptions': string, 'subscription_collected_money_by_currency'?: list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionWindowMetrics')); }
    /** @return string
     * @throws SdkError When canceled_subscriptions is omitted; use hasCanceledSubscriptions() or valueOrDefault().
     */
    public function getCanceledSubscriptions(): string { return $this->get('canceled_subscriptions'); }
    public function hasCanceledSubscriptions(): bool { return $this->has('canceled_subscriptions'); }
    /** @return string
     * @throws SdkError When new_subscriptions is omitted; use hasNewSubscriptions() or valueOrDefault().
     */
    public function getNewSubscriptions(): string { return $this->get('new_subscriptions'); }
    public function hasNewSubscriptions(): bool { return $this->has('new_subscriptions'); }
    /** @return list<MoneyValue>
     * @throws SdkError When subscription_collected_money_by_currency is omitted; use hasSubscriptionCollectedMoneyByCurrency() or valueOrDefault().
     */
    public function getSubscriptionCollectedMoneyByCurrency(): array { return $this->get('subscription_collected_money_by_currency'); }
    public function hasSubscriptionCollectedMoneyByCurrency(): bool { return $this->has('subscription_collected_money_by_currency'); }
}

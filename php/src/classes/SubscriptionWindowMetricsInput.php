<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $canceled_subscriptions
 * @property-read string $new_subscriptions
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $subscription_collected_money_by_currency
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionWindowMetricsInput extends Model {
    /** @param array{'canceled_subscriptions': string, 'new_subscriptions': string, 'subscription_collected_money_by_currency'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionWindowMetricsInput')); }
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
    /** @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When subscription_collected_money_by_currency is omitted; use hasSubscriptionCollectedMoneyByCurrency() or valueOrDefault().
     */
    public function getSubscriptionCollectedMoneyByCurrency(): array { return $this->get('subscription_collected_money_by_currency'); }
    public function hasSubscriptionCollectedMoneyByCurrency(): bool { return $this->has('subscription_collected_money_by_currency'); }
}

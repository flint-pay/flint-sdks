<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $canceled_subscriptions_count
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $collected_money
 * @property-read string $new_subscriptions_count
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionWindowMetricsInput extends Model {
    /** @param array{'canceled_subscriptions_count': string, 'collected_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'new_subscriptions_count': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionWindowMetricsInput')); }
    /** Shape $ (Value): integer string. Subscriptions selected by canceled_at in the period, across currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When canceled_subscriptions_count is omitted; use hasCanceledSubscriptionsCount() or valueOrDefault().
     */
    public function getCanceledSubscriptionsCount(): string { return $this->get('canceled_subscriptions_count'); }
    public function hasCanceledSubscriptionsCount(): bool { return $this->has('canceled_subscriptions_count'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Subscription-sourced payment amounts with a succeeded payment activity selected by activity created_at in the period, counted once per payment. Includes recurring charges and setup fees, restricted to currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When collected_money is omitted; use hasCollectedMoney() or valueOrDefault().
     */
    public function getCollectedMoney(): mixed { return $this->get('collected_money'); }
    public function hasCollectedMoney(): bool { return $this->has('collected_money'); }
    /** Shape $ (Value): integer string. Subscriptions selected by subscription created_at in the period whose current status is trialing, active, paused, or past_due. Excludes incomplete and canceled subscriptions; past counts can change with current status. Spans currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When new_subscriptions_count is omitted; use hasNewSubscriptionsCount() or valueOrDefault().
     */
    public function getNewSubscriptionsCount(): string { return $this->get('new_subscriptions_count'); }
    public function hasNewSubscriptionsCount(): bool { return $this->has('new_subscriptions_count'); }
}

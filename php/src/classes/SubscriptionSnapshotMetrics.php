<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValue $arr_money
 * @property-read MoneyValue $mrr_money
 * @property-read SubscriptionStatusCounts $status_counts
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionSnapshotMetrics extends Model {
    /** @param array{'arr_money': mixed, 'mrr_money': mixed, 'status_counts': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionSnapshotMetrics')); }
    /** Shape $ (Value): {@see MoneyValue}. Current mrr_money multiplied by 12, in currency; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getArrMoney(): MoneyValue { return $this->get('arr_money'); }
    public function hasArrMoney(): bool { return $this->has('arr_money'); }
    /** Shape $ (Value): {@see MoneyValue}. Monthly recurring revenue from current billing snapshots of active and past_due subscriptions, restricted to currency. Each subscription is normalized and rounded separately; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getMrrMoney(): MoneyValue { return $this->get('mrr_money'); }
    public function hasMrrMoney(): bool { return $this->has('mrr_money'); }
    /** Shape $ (Value): {@see SubscriptionStatusCounts}. Current subscription counts by status across currencies; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Counts of current subscriptions by status, across currencies.
     * @return SubscriptionStatusCounts
     */
    public function getStatusCounts(): SubscriptionStatusCounts { return $this->get('status_counts'); }
    public function hasStatusCounts(): bool { return $this->has('status_counts'); }
}

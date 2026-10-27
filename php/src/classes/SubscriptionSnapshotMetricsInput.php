<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $arr_money
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $mrr_money
 * @property-read SubscriptionStatusCountsInput|array<array-key, mixed>|\stdClass $status_counts
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionSnapshotMetricsInput extends Model {
    /** @param array{'arr_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'mrr_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'status_counts': SubscriptionStatusCountsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionSnapshotMetricsInput')); }
    /** Shape $ (Value): {@see MoneyValueInput}. Current mrr_money multiplied by 12, in currency; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When arr_money is omitted; use hasArrMoney() or valueOrDefault().
     */
    public function getArrMoney(): mixed { return $this->get('arr_money'); }
    public function hasArrMoney(): bool { return $this->has('arr_money'); }
    /** Shape $ (Value): {@see MoneyValueInput}. Monthly recurring revenue from current billing snapshots of active and past_due subscriptions, restricted to currency. Each subscription is normalized and rounded separately; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When mrr_money is omitted; use hasMrrMoney() or valueOrDefault().
     */
    public function getMrrMoney(): mixed { return $this->get('mrr_money'); }
    public function hasMrrMoney(): bool { return $this->has('mrr_money'); }
    /** Shape $ (Value): {@see SubscriptionStatusCountsInput}. Current subscription counts by status across currencies; independent of the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Counts of current subscriptions by status, across currencies.
     * @return SubscriptionStatusCountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When status_counts is omitted; use hasStatusCounts() or valueOrDefault().
     */
    public function getStatusCounts(): mixed { return $this->get('status_counts'); }
    public function hasStatusCounts(): bool { return $this->has('status_counts'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $arr_by_currency
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $mrr_by_currency
 * @property-read SubscriptionStatusCountsInput|array<array-key, mixed>|\stdClass $status_counts
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionSnapshotMetricsInput extends Model {
    /** @param array{'arr_by_currency'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'mrr_by_currency'?: list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'status_counts': SubscriptionStatusCountsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionSnapshotMetricsInput')); }
    /** @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When arr_by_currency is omitted; use hasArrByCurrency() or valueOrDefault().
     */
    public function getArrByCurrency(): array { return $this->get('arr_by_currency'); }
    public function hasArrByCurrency(): bool { return $this->has('arr_by_currency'); }
    /** @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When mrr_by_currency is omitted; use hasMrrByCurrency() or valueOrDefault().
     */
    public function getMrrByCurrency(): array { return $this->get('mrr_by_currency'); }
    public function hasMrrByCurrency(): bool { return $this->has('mrr_by_currency'); }
    /** @return SubscriptionStatusCountsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When status_counts is omitted; use hasStatusCounts() or valueOrDefault().
     */
    public function getStatusCounts(): mixed { return $this->get('status_counts'); }
    public function hasStatusCounts(): bool { return $this->has('status_counts'); }
}

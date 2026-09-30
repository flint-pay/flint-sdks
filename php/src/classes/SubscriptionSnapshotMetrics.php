<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<MoneyValue> $arr_by_currency
 * @property-read list<MoneyValue> $mrr_by_currency
 * @property-read SubscriptionStatusCounts $status_counts
 * Presence-aware response; omitted fields throw when accessed. */
final class SubscriptionSnapshotMetrics extends Model {
    /** @param array{'arr_by_currency'?: list<mixed>, 'mrr_by_currency'?: list<mixed>, 'status_counts': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionSnapshotMetrics')); }
    /** @return list<MoneyValue>
     * @throws SdkError When arr_by_currency is omitted; use hasArrByCurrency() or valueOrDefault().
     */
    public function getArrByCurrency(): array { return $this->get('arr_by_currency'); }
    public function hasArrByCurrency(): bool { return $this->has('arr_by_currency'); }
    /** @return list<MoneyValue>
     * @throws SdkError When mrr_by_currency is omitted; use hasMrrByCurrency() or valueOrDefault().
     */
    public function getMrrByCurrency(): array { return $this->get('mrr_by_currency'); }
    public function hasMrrByCurrency(): bool { return $this->has('mrr_by_currency'); }
    /** @return SubscriptionStatusCounts
     * @throws SdkError When status_counts is omitted; use hasStatusCounts() or valueOrDefault().
     */
    public function getStatusCounts(): SubscriptionStatusCounts { return $this->get('status_counts'); }
    public function hasStatusCounts(): bool { return $this->has('status_counts'); }
}

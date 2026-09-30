<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $label
 * @property-read CountMetric $payments_count
 * @property-read string $period_end
 * @property-read string $period_start
 * @property-read MoneyValue $previous_volume_money
 * @property-read MoneyValue $volume_money
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentVolumeBucket extends Model {
    /** @param array{'label': string, 'payments_count': mixed, 'period_end'?: string, 'period_start'?: string, 'previous_volume_money'?: mixed, 'volume_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentVolumeBucket')); }
    /** @return string
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** @return CountMetric
     * @throws SdkError When payments_count is omitted; use hasPaymentsCount() or valueOrDefault().
     */
    public function getPaymentsCount(): CountMetric { return $this->get('payments_count'); }
    public function hasPaymentsCount(): bool { return $this->has('payments_count'); }
    /** @return string
     * @throws SdkError When period_end is omitted; use hasPeriodEnd() or valueOrDefault().
     */
    public function getPeriodEnd(): string { return $this->get('period_end'); }
    public function hasPeriodEnd(): bool { return $this->has('period_end'); }
    /** @return string
     * @throws SdkError When period_start is omitted; use hasPeriodStart() or valueOrDefault().
     */
    public function getPeriodStart(): string { return $this->get('period_start'); }
    public function hasPeriodStart(): bool { return $this->has('period_start'); }
    /** @return MoneyValue
     * @throws SdkError When previous_volume_money is omitted; use hasPreviousVolumeMoney() or valueOrDefault().
     */
    public function getPreviousVolumeMoney(): MoneyValue { return $this->get('previous_volume_money'); }
    public function hasPreviousVolumeMoney(): bool { return $this->has('previous_volume_money'); }
    /** @return MoneyValue
     * @throws SdkError When volume_money is omitted; use hasVolumeMoney() or valueOrDefault().
     */
    public function getVolumeMoney(): MoneyValue { return $this->get('volume_money'); }
    public function hasVolumeMoney(): bool { return $this->has('volume_money'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CountMetricInput|array<array-key, mixed>|\stdClass $active_subscriptions
 * @property-read MoneyMetricInput|array<array-key, mixed>|\stdClass $average_payment
 * @property-read list<string> $currencies
 * @property-read MoneyMetricInput|array<array-key, mixed>|\stdClass $gross_volume
 * @property-read bool $has_multiple_currencies
 * @property-read MoneyMetricInput|array<array-key, mixed>|\stdClass $net_volume
 * @property-read CountMetricInput|array<array-key, mixed>|\stdClass $new_customers
 * @property-read CountMetricInput|array<array-key, mixed>|\stdClass $payments_count
 * @property-read string $range
 * @property-read MoneyMetricInput|array<array-key, mixed>|\stdClass $refunds_total
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class AnalyticsOverviewInput extends Model {
    /** @param array{'active_subscriptions': CountMetricInput|array<array-key, mixed>|\stdClass, 'average_payment': MoneyMetricInput|array<array-key, mixed>|\stdClass, 'currencies'?: list<string>, 'gross_volume': MoneyMetricInput|array<array-key, mixed>|\stdClass, 'has_multiple_currencies': bool, 'net_volume': MoneyMetricInput|array<array-key, mixed>|\stdClass, 'new_customers': CountMetricInput|array<array-key, mixed>|\stdClass, 'payments_count': CountMetricInput|array<array-key, mixed>|\stdClass, 'range': string, 'refunds_total': MoneyMetricInput|array<array-key, mixed>|\stdClass, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AnalyticsOverviewInput')); }
    /** @return CountMetricInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When active_subscriptions is omitted; use hasActiveSubscriptions() or valueOrDefault().
     */
    public function getActiveSubscriptions(): mixed { return $this->get('active_subscriptions'); }
    public function hasActiveSubscriptions(): bool { return $this->has('active_subscriptions'); }
    /** @return MoneyMetricInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When average_payment is omitted; use hasAveragePayment() or valueOrDefault().
     */
    public function getAveragePayment(): mixed { return $this->get('average_payment'); }
    public function hasAveragePayment(): bool { return $this->has('average_payment'); }
    /** @return list<string>
     * @throws SdkError When currencies is omitted; use hasCurrencies() or valueOrDefault().
     */
    public function getCurrencies(): array { return $this->get('currencies'); }
    public function hasCurrencies(): bool { return $this->has('currencies'); }
    /** @return MoneyMetricInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gross_volume is omitted; use hasGrossVolume() or valueOrDefault().
     */
    public function getGrossVolume(): mixed { return $this->get('gross_volume'); }
    public function hasGrossVolume(): bool { return $this->has('gross_volume'); }
    /** @return bool
     * @throws SdkError When has_multiple_currencies is omitted; use hasHasMultipleCurrencies() or valueOrDefault().
     */
    public function getHasMultipleCurrencies(): bool { return $this->get('has_multiple_currencies'); }
    public function hasHasMultipleCurrencies(): bool { return $this->has('has_multiple_currencies'); }
    /** @return MoneyMetricInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When net_volume is omitted; use hasNetVolume() or valueOrDefault().
     */
    public function getNetVolume(): mixed { return $this->get('net_volume'); }
    public function hasNetVolume(): bool { return $this->has('net_volume'); }
    /** @return CountMetricInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When new_customers is omitted; use hasNewCustomers() or valueOrDefault().
     */
    public function getNewCustomers(): mixed { return $this->get('new_customers'); }
    public function hasNewCustomers(): bool { return $this->has('new_customers'); }
    /** @return CountMetricInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When payments_count is omitted; use hasPaymentsCount() or valueOrDefault().
     */
    public function getPaymentsCount(): mixed { return $this->get('payments_count'); }
    public function hasPaymentsCount(): bool { return $this->has('payments_count'); }
    /** @return string
     * @throws SdkError When range is omitted; use hasRange() or valueOrDefault().
     */
    public function getRange(): string { return $this->get('range'); }
    public function hasRange(): bool { return $this->has('range'); }
    /** @return MoneyMetricInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunds_total is omitted; use hasRefundsTotal() or valueOrDefault().
     */
    public function getRefundsTotal(): mixed { return $this->get('refunds_total'); }
    public function hasRefundsTotal(): bool { return $this->has('refunds_total'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

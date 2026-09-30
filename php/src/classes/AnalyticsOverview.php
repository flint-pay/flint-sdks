<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read CountMetric $active_subscriptions
 * @property-read MoneyMetric $average_payment
 * @property-read list<string> $currencies
 * @property-read MoneyMetric $gross_volume
 * @property-read bool $has_multiple_currencies
 * @property-read MoneyMetric $net_volume
 * @property-read CountMetric $new_customers
 * @property-read CountMetric $payments_count
 * @property-read string $range
 * @property-read MoneyMetric $refunds_total
 * @property-read string $timezone
 * Presence-aware response; omitted fields throw when accessed. */
final class AnalyticsOverview extends Model {
    /** @param array{'active_subscriptions': mixed, 'average_payment': mixed, 'currencies'?: list<string>, 'gross_volume': mixed, 'has_multiple_currencies': bool, 'net_volume': mixed, 'new_customers': mixed, 'payments_count': mixed, 'range': string, 'refunds_total': mixed, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AnalyticsOverview')); }
    /** @return CountMetric
     * @throws SdkError When active_subscriptions is omitted; use hasActiveSubscriptions() or valueOrDefault().
     */
    public function getActiveSubscriptions(): CountMetric { return $this->get('active_subscriptions'); }
    public function hasActiveSubscriptions(): bool { return $this->has('active_subscriptions'); }
    /** @return MoneyMetric
     * @throws SdkError When average_payment is omitted; use hasAveragePayment() or valueOrDefault().
     */
    public function getAveragePayment(): MoneyMetric { return $this->get('average_payment'); }
    public function hasAveragePayment(): bool { return $this->has('average_payment'); }
    /** @return list<string>
     * @throws SdkError When currencies is omitted; use hasCurrencies() or valueOrDefault().
     */
    public function getCurrencies(): array { return $this->get('currencies'); }
    public function hasCurrencies(): bool { return $this->has('currencies'); }
    /** @return MoneyMetric
     * @throws SdkError When gross_volume is omitted; use hasGrossVolume() or valueOrDefault().
     */
    public function getGrossVolume(): MoneyMetric { return $this->get('gross_volume'); }
    public function hasGrossVolume(): bool { return $this->has('gross_volume'); }
    /** @return bool
     * @throws SdkError When has_multiple_currencies is omitted; use hasHasMultipleCurrencies() or valueOrDefault().
     */
    public function getHasMultipleCurrencies(): bool { return $this->get('has_multiple_currencies'); }
    public function hasHasMultipleCurrencies(): bool { return $this->has('has_multiple_currencies'); }
    /** @return MoneyMetric
     * @throws SdkError When net_volume is omitted; use hasNetVolume() or valueOrDefault().
     */
    public function getNetVolume(): MoneyMetric { return $this->get('net_volume'); }
    public function hasNetVolume(): bool { return $this->has('net_volume'); }
    /** @return CountMetric
     * @throws SdkError When new_customers is omitted; use hasNewCustomers() or valueOrDefault().
     */
    public function getNewCustomers(): CountMetric { return $this->get('new_customers'); }
    public function hasNewCustomers(): bool { return $this->has('new_customers'); }
    /** @return CountMetric
     * @throws SdkError When payments_count is omitted; use hasPaymentsCount() or valueOrDefault().
     */
    public function getPaymentsCount(): CountMetric { return $this->get('payments_count'); }
    public function hasPaymentsCount(): bool { return $this->has('payments_count'); }
    /** @return string
     * @throws SdkError When range is omitted; use hasRange() or valueOrDefault().
     */
    public function getRange(): string { return $this->get('range'); }
    public function hasRange(): bool { return $this->has('range'); }
    /** @return MoneyMetric
     * @throws SdkError When refunds_total is omitted; use hasRefundsTotal() or valueOrDefault().
     */
    public function getRefundsTotal(): MoneyMetric { return $this->get('refunds_total'); }
    public function hasRefundsTotal(): bool { return $this->has('refunds_total'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PaymentVolumeBucket> $buckets
 * @property-read list<string> $currencies
 * @property-read bool $has_multiple_currencies
 * @property-read string $range
 * @property-read string $timezone
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentVolumeTimeseries extends Model {
    /** @param array{'buckets': list<mixed>, 'currencies'?: list<string>, 'has_multiple_currencies': bool, 'range': string, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentVolumeTimeseries')); }
    /** @return list<PaymentVolumeBucket>
     * @throws SdkError When buckets is omitted; use hasBuckets() or valueOrDefault().
     */
    public function getBuckets(): array { return $this->get('buckets'); }
    public function hasBuckets(): bool { return $this->has('buckets'); }
    /** @return list<string>
     * @throws SdkError When currencies is omitted; use hasCurrencies() or valueOrDefault().
     */
    public function getCurrencies(): array { return $this->get('currencies'); }
    public function hasCurrencies(): bool { return $this->has('currencies'); }
    /** @return bool
     * @throws SdkError When has_multiple_currencies is omitted; use hasHasMultipleCurrencies() or valueOrDefault().
     */
    public function getHasMultipleCurrencies(): bool { return $this->get('has_multiple_currencies'); }
    public function hasHasMultipleCurrencies(): bool { return $this->has('has_multiple_currencies'); }
    /** @return string
     * @throws SdkError When range is omitted; use hasRange() or valueOrDefault().
     */
    public function getRange(): string { return $this->get('range'); }
    public function hasRange(): bool { return $this->has('range'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

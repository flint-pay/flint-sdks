<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string|\DateTimeInterface $period_start_at
 * @property-read string|\DateTimeInterface $period_end_at
 * @property-read string $currency
 * @property-read string $granularity
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class AnalyticsGetPaymentVolumeTimeseriesInput extends Model {
    /** @param array{'period_start_at': string|\DateTimeInterface, 'period_end_at'?: string|\DateTimeInterface, 'currency'?: string, 'granularity'?: string, 'timezone'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AnalyticsGetPaymentVolumeTimeseriesInput')); }
    /** Inclusive period start. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_start_at is omitted; use hasPeriodStartAt() or valueOrDefault().
     */
    public function getPeriodStartAt(): string|\DateTimeInterface { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** Exclusive period end. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_end_at is omitted; use hasPeriodEndAt() or valueOrDefault().
     */
    public function getPeriodEndAt(): string|\DateTimeInterface { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Bucket size: hour, day (default), week starting Monday, or month. Buckets follow local boundaries, clipped to the period. Repeated hours have two buckets; skipped hours and days have none. Empty buckets are included. Value enum: "hour", "day", "week", "month".
     * @return string
     * @throws SdkError When granularity is omitted; use hasGranularity() or valueOrDefault().
     */
    public function getGranularity(): string { return $this->get('granularity'); }
    public function hasGranularity(): bool { return $this->has('granularity'); }
    /** IANA timezone for bucket boundaries. Defaults to UTC. maxLength: 100.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

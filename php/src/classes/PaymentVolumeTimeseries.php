<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PaymentVolumeBucket> $buckets
 * @property-read list<string> $currencies
 * @property-read string $currency
 * @property-read string $granularity
 * @property-read string $period_end_at
 * @property-read string $period_start_at
 * @property-read string $timezone
 * Presence-aware response; omitted optional fields return null. */
final class PaymentVolumeTimeseries extends Model {
    /** @param array{'buckets': list<mixed>, 'currencies': list<string>, 'currency': string, 'granularity': string, 'period_end_at': string, 'period_start_at': string, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentVolumeTimeseries')); }
    /** Shape $ (Value): Array of {@see PaymentVolumeBucket}. Payment created_at buckets clipped to the period, including empty buckets. Repeated local hours produce two buckets; skipped hours and days produce none. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. Shape $[] (Value): {@see PaymentVolumeBucket}. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.
     * @return list<PaymentVolumeBucket>
     */
    public function getBuckets(): array { return $this->get('buckets'); }
    public function hasBuckets(): bool { return $this->has('buckets'); }
    /** Shape $ (Value): Array of string. Currencies of succeeded payments selected by payment created_at or counted refunds selected by refund created_at in the period, regardless of the currency filter. Empty when neither has rows. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getCurrencies(): array { return $this->get('currencies'); }
    public function hasCurrencies(): bool { return $this->has('currencies'); }
    /** Shape $ (Value): string. ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string. Local bucket size: hour, day, week starting Monday, or month. Defaults to day. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Value enum: "hour", "day", "week", "month".
     * @return string
     */
    public function getGranularity(): string { return $this->get('granularity'); }
    public function hasGranularity(): bool { return $this->has('granularity'); }
    /** Shape $ (Value): string. Exclusive resolved end instant. Omitted or future request ends resolve to the request time truncated to the second. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string
     */
    public function getPeriodEndAt(): string { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** Shape $ (Value): string. Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string
     */
    public function getPeriodStartAt(): string { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** Shape $ (Value): string. IANA timezone used only for local bucket boundaries. Defaults to UTC. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.
     * @return string
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<PaymentVolumeBucketInput|array<array-key, mixed>|\stdClass> $buckets
 * @property-read list<string> $currencies
 * @property-read string $currency
 * @property-read string $granularity
 * @property-read string|\DateTimeInterface $period_end_at
 * @property-read string|\DateTimeInterface $period_start_at
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentVolumeTimeseriesInput extends Model {
    /** @param array{'buckets': list<PaymentVolumeBucketInput|array<array-key, mixed>|\stdClass>, 'currencies': list<string>, 'currency': string, 'granularity': string, 'period_end_at': string|\DateTimeInterface, 'period_start_at': string|\DateTimeInterface, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentVolumeTimeseriesInput')); }
    /** Payment created_at buckets clipped to the period, including empty buckets. Repeated local hours produce two buckets; skipped hours and days produce none. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. [] (Value): {@see PaymentVolumeBucketInput}. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.
     * @return list<PaymentVolumeBucketInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When buckets is omitted; use hasBuckets() or valueOrDefault().
     */
    public function getBuckets(): array { return $this->get('buckets'); }
    public function hasBuckets(): bool { return $this->has('buckets'); }
    /** Currencies of succeeded payments selected by payment created_at or counted refunds selected by refund created_at in the period, regardless of the currency filter. Empty when neither has rows. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. [] (Value): string.
     * @return list<string>
     * @throws SdkError When currencies is omitted; use hasCurrencies() or valueOrDefault().
     */
    public function getCurrencies(): array { return $this->get('currencies'); }
    public function hasCurrencies(): bool { return $this->has('currencies'); }
    /** ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Local bucket size: hour, day, week starting Monday, or month. Defaults to day. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Value enum: "hour", "day", "week", "month".
     * @return string
     * @throws SdkError When granularity is omitted; use hasGranularity() or valueOrDefault().
     */
    public function getGranularity(): string { return $this->get('granularity'); }
    public function hasGranularity(): bool { return $this->has('granularity'); }
    /** Exclusive resolved end instant. Omitted or future request ends resolve to the request time truncated to the second. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_end_at is omitted; use hasPeriodEndAt() or valueOrDefault().
     */
    public function getPeriodEndAt(): string|\DateTimeInterface { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_start_at is omitted; use hasPeriodStartAt() or valueOrDefault().
     */
    public function getPeriodStartAt(): string|\DateTimeInterface { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** IANA timezone used only for local bucket boundaries. Defaults to UTC. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

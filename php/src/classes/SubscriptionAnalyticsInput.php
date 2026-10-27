<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $currencies
 * @property-read string $currency
 * @property-read string|\DateTimeInterface $period_end_at
 * @property-read string|\DateTimeInterface $period_start_at
 * @property-read SubscriptionSnapshotMetricsInput|array<array-key, mixed>|\stdClass $snapshot_metrics
 * @property-read SubscriptionWindowMetricsInput|array<array-key, mixed>|\stdClass $window_metrics
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionAnalyticsInput extends Model {
    /** @param array{'currencies': list<string>, 'currency': string, 'period_end_at': string|\DateTimeInterface, 'period_start_at': string|\DateTimeInterface, 'snapshot_metrics': SubscriptionSnapshotMetricsInput|array<array-key, mixed>|\stdClass, 'window_metrics': SubscriptionWindowMetricsInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionAnalyticsInput')); }
    /** Shape $ (Value): Array of string. Currencies of subscription payments selected by succeeded activity created_at in the period, plus current active and past_due billing snapshots, regardless of the currency filter. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When currencies is omitted; use hasCurrencies() or valueOrDefault().
     */
    public function getCurrencies(): array { return $this->get('currencies'); }
    public function hasCurrencies(): bool { return $this->has('currencies'); }
    /** Shape $ (Value): string. ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Shape $ (Value): string. Exclusive resolved end instant. Omitted or future request ends resolve to the request time truncated to the second. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_end_at is omitted; use hasPeriodEndAt() or valueOrDefault().
     */
    public function getPeriodEndAt(): string|\DateTimeInterface { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** Shape $ (Value): string. Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When period_start_at is omitted; use hasPeriodStartAt() or valueOrDefault().
     */
    public function getPeriodStartAt(): string|\DateTimeInterface { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** Shape $ (Value): {@see SubscriptionSnapshotMetricsInput}. Current persisted subscription state at computation time, cached briefly. Independent of the requested period end. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.
     * @return SubscriptionSnapshotMetricsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When snapshot_metrics is omitted; use hasSnapshotMetrics() or valueOrDefault().
     */
    public function getSnapshotMetrics(): mixed { return $this->get('snapshot_metrics'); }
    public function hasSnapshotMetrics(): bool { return $this->has('snapshot_metrics'); }
    /** Shape $ (Value): {@see SubscriptionWindowMetricsInput}. Subscription creation, cancellation, and payment success metrics selected within the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.
     * @return SubscriptionWindowMetricsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When window_metrics is omitted; use hasWindowMetrics() or valueOrDefault().
     */
    public function getWindowMetrics(): mixed { return $this->get('window_metrics'); }
    public function hasWindowMetrics(): bool { return $this->has('window_metrics'); }
}

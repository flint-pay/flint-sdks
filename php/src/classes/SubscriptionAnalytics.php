<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $currencies
 * @property-read string $currency
 * @property-read string $period_end_at
 * @property-read string $period_start_at
 * @property-read SubscriptionSnapshotMetrics $snapshot_metrics
 * @property-read SubscriptionWindowMetrics $window_metrics
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionAnalytics extends Model {
    /** @param array{'currencies': list<string>, 'currency': string, 'period_end_at': string, 'period_start_at': string, 'snapshot_metrics': mixed, 'window_metrics': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionAnalytics')); }
    /** Shape $ (Value): Array of string. Currencies of subscription payments selected by succeeded activity created_at in the period, plus current active and past_due billing snapshots, regardless of the currency filter. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getCurrencies(): array { return $this->get('currencies'); }
    public function hasCurrencies(): bool { return $this->has('currencies'); }
    /** Shape $ (Value): string. ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
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
    /** Shape $ (Value): {@see SubscriptionSnapshotMetrics}. Current persisted subscription state at computation time, cached briefly. Independent of the requested period end. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.
     * @return SubscriptionSnapshotMetrics
     */
    public function getSnapshotMetrics(): SubscriptionSnapshotMetrics { return $this->get('snapshot_metrics'); }
    public function hasSnapshotMetrics(): bool { return $this->has('snapshot_metrics'); }
    /** Shape $ (Value): {@see SubscriptionWindowMetrics}. Subscription creation, cancellation, and payment success metrics selected within the requested period. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.
     * @return SubscriptionWindowMetrics
     */
    public function getWindowMetrics(): SubscriptionWindowMetrics { return $this->get('window_metrics'); }
    public function hasWindowMetrics(): bool { return $this->has('window_metrics'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $currencies
 * @property-read string $currency
 * @property-read MoneyValue $gross_volume_money
 * @property-read int $new_customers_count
 * @property-read int $payments_count
 * @property-read string $period_end_at
 * @property-read string $period_start_at
 * @property-read MoneyValue $refunded_money
 * Presence-aware response; omitted optional fields return null. */
final class AnalyticsOverview extends Model {
    /** @param array{'currencies': list<string>, 'currency': string, 'gross_volume_money': mixed, 'new_customers_count': int, 'payments_count': int, 'period_end_at': string, 'period_start_at': string, 'refunded_money': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AnalyticsOverview')); }
    /** Currencies of succeeded payments captured in the period and qualifying refunds that succeeded in the period, regardless of the currency filter. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. [] (Value): string.
     * @return list<string>
     */
    public function getCurrencies(): array { return $this->get('currencies'); }
    public function hasCurrencies(): bool { return $this->has('currencies'); }
    /** ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Sum of captured amounts for succeeded payments captured in the period, in currency. Excludes gift card and store credit redemptions. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getGrossVolumeMoney(): MoneyValue { return $this->get('gross_volume_money'); }
    public function hasGrossVolumeMoney(): bool { return $this->has('gross_volume_money'); }
    /** Customers selected by customer created_at in the period, across all currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: int64.
     * @return int
     */
    public function getNewCustomersCount(): int { return $this->get('new_customers_count'); }
    public function hasNewCustomersCount(): bool { return $this->has('new_customers_count'); }
    /** Succeeded payments captured in the period, restricted to currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: int64.
     * @return int
     */
    public function getPaymentsCount(): int { return $this->get('payments_count'); }
    public function hasPaymentsCount(): bool { return $this->has('payments_count'); }
    /** Exclusive resolved end instant. Omitted or future request ends resolve to the request time truncated to the second. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string
     */
    public function getPeriodEndAt(): string { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time.
     * @return string
     */
    public function getPeriodStartAt(): string { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** Amount refunded to original payment methods, in currency, based on when the refund succeeded, regardless of when the payment was captured. Excludes amounts returned as gift card value or store credit. Each qualifying part of a split refund counts once. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
}

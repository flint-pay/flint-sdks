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
    /** Currencies of succeeded payments selected by payment created_at or counted refunds selected by refund created_at in the period, regardless of the currency filter. Empty when neither has rows. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. [] (Value): string.
     * @return list<string>
     */
    public function getCurrencies(): array { return $this->get('currencies'); }
    public function hasCurrencies(): bool { return $this->has('currencies'); }
    /** ISO 4217 currency for amounts and payment counts. Defaults to the merchant's default currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$.
     * @return string
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Sum of succeeded payment amounts selected by payment created_at in the period, in currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getGrossVolumeMoney(): MoneyValue { return $this->get('gross_volume_money'); }
    public function hasGrossVolumeMoney(): bool { return $this->has('gross_volume_money'); }
    /** Customers selected by customer created_at in the period, across all currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: int64.
     * @return int
     */
    public function getNewCustomersCount(): int { return $this->get('new_customers_count'); }
    public function hasNewCustomersCount(): bool { return $this->has('new_customers_count'); }
    /** Succeeded payments selected by payment created_at in the period, restricted to currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: int64.
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
    /** Refund amounts selected by refund created_at in the period, excluding failed and canceled refunds. Parent refunds with child executions count through the children once, regardless of payment creation time. Uses currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getRefundedMoney(): MoneyValue { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
}

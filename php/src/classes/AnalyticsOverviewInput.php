<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $currencies
 * @property-read string $currency
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $gross_volume_money
 * @property-read string $new_customers_count
 * @property-read string $payments_count
 * @property-read string|\DateTimeInterface $period_end_at
 * @property-read string|\DateTimeInterface $period_start_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * Presence-aware input; omitted fields throw when accessed. */
final class AnalyticsOverviewInput extends Model {
    /** @param array{'currencies': list<string>, 'currency': string, 'gross_volume_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'new_customers_count': string, 'payments_count': string, 'period_end_at': string|\DateTimeInterface, 'period_start_at': string|\DateTimeInterface, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AnalyticsOverviewInput')); }
    /** Shape $ (Value): Array of string. Currencies of succeeded payments selected by payment created_at or counted refunds selected by refund created_at in the period, regardless of the currency filter. Empty when neither has rows. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. Shape $[] (Value): string.
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
    /** Shape $ (Value): {@see MoneyValueInput}. Sum of succeeded payment amounts selected by payment created_at in the period, in currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gross_volume_money is omitted; use hasGrossVolumeMoney() or valueOrDefault().
     */
    public function getGrossVolumeMoney(): mixed { return $this->get('gross_volume_money'); }
    public function hasGrossVolumeMoney(): bool { return $this->has('gross_volume_money'); }
    /** Shape $ (Value): integer string. Customers selected by customer created_at in the period, across all currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When new_customers_count is omitted; use hasNewCustomersCount() or valueOrDefault().
     */
    public function getNewCustomersCount(): string { return $this->get('new_customers_count'); }
    public function hasNewCustomersCount(): bool { return $this->has('new_customers_count'); }
    /** Shape $ (Value): integer string. Succeeded payments selected by payment created_at in the period, restricted to currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When payments_count is omitted; use hasPaymentsCount() or valueOrDefault().
     */
    public function getPaymentsCount(): string { return $this->get('payments_count'); }
    public function hasPaymentsCount(): bool { return $this->has('payments_count'); }
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
    /** Shape $ (Value): {@see MoneyValueInput}. Refund amounts selected by refund created_at in the period, excluding failed and canceled refunds. Parent refunds with child executions count through the children once, regardless of payment creation time. Uses currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
}

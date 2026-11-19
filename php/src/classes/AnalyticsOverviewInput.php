<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $currencies
 * @property-read string $currency
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $gross_volume_money
 * @property-read int $new_customers_count
 * @property-read int $payments_count
 * @property-read string|\DateTimeInterface $period_end_at
 * @property-read string|\DateTimeInterface $period_start_at
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $refunded_money
 * Presence-aware input; omitted fields throw when accessed. */
final class AnalyticsOverviewInput extends Model {
    /** @param array{'currencies': list<string>, 'currency': string, 'gross_volume_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'new_customers_count': int, 'payments_count': int, 'period_end_at': string|\DateTimeInterface, 'period_start_at': string|\DateTimeInterface, 'refunded_money': MoneyValueInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AnalyticsOverviewInput')); }
    /** Currencies of succeeded payments captured in the period and qualifying refunds that succeeded in the period, regardless of the currency filter. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies. [] (Value): string.
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
    /** Sum of captured amounts for succeeded payments captured in the period, in currency. Excludes gift card and store credit redemptions. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When gross_volume_money is omitted; use hasGrossVolumeMoney() or valueOrDefault().
     */
    public function getGrossVolumeMoney(): mixed { return $this->get('gross_volume_money'); }
    public function hasGrossVolumeMoney(): bool { return $this->has('gross_volume_money'); }
    /** Customers selected by customer created_at in the period, across all currencies. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: int64.
     * @return int
     * @throws SdkError When new_customers_count is omitted; use hasNewCustomersCount() or valueOrDefault().
     */
    public function getNewCustomersCount(): int { return $this->get('new_customers_count'); }
    public function hasNewCustomersCount(): bool { return $this->has('new_customers_count'); }
    /** Succeeded payments captured in the period, restricted to currency. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: int64.
     * @return int
     * @throws SdkError When payments_count is omitted; use hasPaymentsCount() or valueOrDefault().
     */
    public function getPaymentsCount(): int { return $this->get('payments_count'); }
    public function hasPaymentsCount(): bool { return $this->has('payments_count'); }
    /** Exclusive resolved end instant. Omitted or future request ends resolve to the request time truncated to the second. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When period_end_at is omitted; use hasPeriodEndAt() or valueOrDefault().
     */
    public function getPeriodEndAt(): string|\DateTimeInterface { return $this->get('period_end_at'); }
    public function hasPeriodEndAt(): bool { return $this->has('period_end_at'); }
    /** Inclusive start instant. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When period_start_at is omitted; use hasPeriodStartAt() or valueOrDefault().
     */
    public function getPeriodStartAt(): string|\DateTimeInterface { return $this->get('period_start_at'); }
    public function hasPeriodStartAt(): bool { return $this->has('period_start_at'); }
    /** Amount refunded to original payment methods, in currency, based on when the refund succeeded, regardless of when the payment was captured. Excludes amounts returned as gift card value or store credit. Each qualifying part of a split refund counts once. The half-open period [period_start_at, period_end_at) includes its start and excludes its end. Amounts and payments_count use currency; customer and subscription counts span currencies.  Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When refunded_money is omitted; use hasRefundedMoney() or valueOrDefault().
     */
    public function getRefundedMoney(): mixed { return $this->get('refunded_money'); }
    public function hasRefundedMoney(): bool { return $this->has('refunded_money'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $computed_at
 * @property-read string $paid_order_count
 * @property-read list<MoneyValue> $paid_totals
 * @property-read list<MoneyValue> $refunded_totals
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkSalesSummary extends Model {
    /** @param array{'computed_at': string, 'paid_order_count': string, 'paid_totals': list<mixed>, 'refunded_totals': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkSalesSummary')); }
    /** Shape $ (Value): string. UTC time at which the summary was computed, at second precision. Format: date-time.
     * @return string
     */
    public function getComputedAt(): string { return $this->get('computed_at'); }
    public function hasComputedAt(): bool { return $this->has('computed_at'); }
    /** Shape $ (Value): integer string. Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getPaidOrderCount(): string { return $this->get('paid_order_count'); }
    public function hasPaidOrderCount(): bool { return $this->has('paid_order_count'); }
    /** Shape $ (Value): Array of {@see MoneyValue}. Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. Shape $[] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValue>
     */
    public function getPaidTotals(): array { return $this->get('paid_totals'); }
    public function hasPaidTotals(): bool { return $this->has('paid_totals'); }
    /** Shape $ (Value): Array of {@see MoneyValue}. Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. Shape $[] (Value): {@see MoneyValue}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValue>
     */
    public function getRefundedTotals(): array { return $this->get('refunded_totals'); }
    public function hasRefundedTotals(): bool { return $this->has('refunded_totals'); }
}

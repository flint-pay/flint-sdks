<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $computed_at
 * @property-read string $paid_order_count
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $paid_totals
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $refunded_totals
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkSalesSummaryInput extends Model {
    /** @param array{'computed_at': string|\DateTimeInterface, 'paid_order_count': string, 'paid_totals': list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'refunded_totals': list<MoneyValueInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkSalesSummaryInput')); }
    /** Shape $ (Value): string. UTC time at which the summary was computed, at second precision. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When computed_at is omitted; use hasComputedAt() or valueOrDefault().
     */
    public function getComputedAt(): string|\DateTimeInterface { return $this->get('computed_at'); }
    public function hasComputedAt(): bool { return $this->has('computed_at'); }
    /** Shape $ (Value): integer string. Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When paid_order_count is omitted; use hasPaidOrderCount() or valueOrDefault().
     */
    public function getPaidOrderCount(): string { return $this->get('paid_order_count'); }
    public function hasPaidOrderCount(): bool { return $this->has('paid_order_count'); }
    /** Shape $ (Value): Array of {@see MoneyValueInput}. Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. Shape $[] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When paid_totals is omitted; use hasPaidTotals() or valueOrDefault().
     */
    public function getPaidTotals(): array { return $this->get('paid_totals'); }
    public function hasPaidTotals(): bool { return $this->has('paid_totals'); }
    /** Shape $ (Value): Array of {@see MoneyValueInput}. Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. Shape $[] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When refunded_totals is omitted; use hasRefundedTotals() or valueOrDefault().
     */
    public function getRefundedTotals(): array { return $this->get('refunded_totals'); }
    public function hasRefundedTotals(): bool { return $this->has('refunded_totals'); }
}

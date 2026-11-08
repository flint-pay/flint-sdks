<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $checked_in_ticket_count
 * @property-read string|\DateTimeInterface $computed_at
 * @property-read int $paid_order_count
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $paid_totals
 * @property-read list<MoneyValueInput|array<array-key, mixed>|\stdClass> $refunded_totals
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkSalesSummaryInput extends Model {
    /** @param array{'checked_in_ticket_count': int, 'computed_at': string|\DateTimeInterface, 'paid_order_count': int, 'paid_totals': list<MoneyValueInput|array<array-key, mixed>|\stdClass>, 'refunded_totals': list<MoneyValueInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkSalesSummaryInput')); }
    /** Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. Format: int32. minimum: 0.
     * @return int
     * @throws SdkError When checked_in_ticket_count is omitted; use hasCheckedInTicketCount() or valueOrDefault().
     */
    public function getCheckedInTicketCount(): int { return $this->get('checked_in_ticket_count'); }
    public function hasCheckedInTicketCount(): bool { return $this->has('checked_in_ticket_count'); }
    /** UTC time at which the summary was computed, at second precision. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When computed_at is omitted; use hasComputedAt() or valueOrDefault().
     */
    public function getComputedAt(): string|\DateTimeInterface { return $this->get('computed_at'); }
    public function hasComputedAt(): bool { return $this->has('computed_at'); }
    /** Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Format: int64.
     * @return int
     * @throws SdkError When paid_order_count is omitted; use hasPaidOrderCount() or valueOrDefault().
     */
    public function getPaidOrderCount(): int { return $this->get('paid_order_count'); }
    public function hasPaidOrderCount(): bool { return $this->has('paid_order_count'); }
    /** Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. [] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When paid_totals is omitted; use hasPaidTotals() or valueOrDefault().
     */
    public function getPaidTotals(): array { return $this->get('paid_totals'); }
    public function hasPaidTotals(): bool { return $this->has('paid_totals'); }
    /** Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. [] (Value): {@see MoneyValueInput}. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return list<MoneyValueInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When refunded_totals is omitted; use hasRefundedTotals() or valueOrDefault().
     */
    public function getRefundedTotals(): array { return $this->get('refunded_totals'); }
    public function hasRefundedTotals(): bool { return $this->has('refunded_totals'); }
}

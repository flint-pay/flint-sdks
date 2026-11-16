<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $checked_in_ticket_count
 * @property-read string|null $computed_at
 * @property-read int|null $paid_order_count
 * @property-read list<MoneyValuePreviousAttributes>|null $paid_totals
 * @property-read list<MoneyValuePreviousAttributes>|null $refunded_totals
 * Presence-aware response; omitted optional fields return null. */
final class PaymentLinkSalesSummaryPreviousAttributes extends Model {
    /** @param array{'checked_in_ticket_count'?: mixed, 'computed_at'?: mixed, 'paid_order_count'?: mixed, 'paid_totals'?: mixed, 'refunded_totals'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkSalesSummaryPreviousAttributes')); }
    /** Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. anyOf[1] (Value): integer. Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. Format: int32. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCheckedInTicketCount(): int|null { return $this->get('checked_in_ticket_count'); }
    public function hasCheckedInTicketCount(): bool { return $this->has('checked_in_ticket_count'); }
    /** UTC time at which the summary was computed, at second precision. anyOf[1] (Value): string. UTC time at which the summary was computed, at second precision. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getComputedAt(): string|null { return $this->get('computed_at'); }
    public function hasComputedAt(): bool { return $this->has('computed_at'); }
    /** Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. anyOf[1] (Value): integer. Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPaidOrderCount(): int|null { return $this->get('paid_order_count'); }
    public function hasPaidOrderCount(): bool { return $this->has('paid_order_count'); }
    /** Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. anyOf[1] (Value): Array of {@see MoneyValuePreviousAttributes}. Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. anyOf[1][] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<MoneyValuePreviousAttributes>|null
     */
    public function getPaidTotals(): array|null { return $this->get('paid_totals'); }
    public function hasPaidTotals(): bool { return $this->has('paid_totals'); }
    /** Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. anyOf[1] (Value): Array of {@see MoneyValuePreviousAttributes}. Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. anyOf[1][] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<MoneyValuePreviousAttributes>|null
     */
    public function getRefundedTotals(): array|null { return $this->get('refunded_totals'); }
    public function hasRefundedTotals(): bool { return $this->has('refunded_totals'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $attempted_payment_count
 * @property-read int|null $checked_in_ticket_count
 * @property-read string|\DateTimeInterface|null $computed_at
 * @property-read int|null $failed_payment_count
 * @property-read int|null $paid_order_count
 * @property-read list<MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $paid_totals
 * @property-read list<MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $refunded_totals
 * Presence-aware input; omitted fields throw when accessed. */
final class PaymentLinkSalesSummaryPreviousAttributesInput extends Model {
    /** @param array{'attempted_payment_count'?: int|null, 'checked_in_ticket_count'?: int|null, 'computed_at'?: string|\DateTimeInterface|null, 'failed_payment_count'?: int|null, 'paid_order_count'?: int|null, 'paid_totals'?: list<MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'refunded_totals'?: list<MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkSalesSummaryPreviousAttributesInput')); }
    /** All recorded card attempts from this link, including pending attempts and retries. anyOf[1] (Value): integer. All recorded card attempts from this link, including pending attempts and retries. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When attempted_payment_count is omitted; use hasAttemptedPaymentCount() or valueOrDefault().
     */
    public function getAttemptedPaymentCount(): mixed { return $this->get('attempted_payment_count'); }
    public function hasAttemptedPaymentCount(): bool { return $this->has('attempted_payment_count'); }
    /** Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. anyOf[1] (Value): integer. Tickets for this payment link that are checked in now, counted when the summary is read. Undoing a check-in or voiding a ticket lowers it. 0 for links that have issued no tickets. Format: int32. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When checked_in_ticket_count is omitted; use hasCheckedInTicketCount() or valueOrDefault().
     */
    public function getCheckedInTicketCount(): mixed { return $this->get('checked_in_ticket_count'); }
    public function hasCheckedInTicketCount(): bool { return $this->has('checked_in_ticket_count'); }
    /** UTC time at which the summary was computed, at second precision. anyOf[1] (Value): string. UTC time at which the summary was computed, at second precision. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When computed_at is omitted; use hasComputedAt() or valueOrDefault().
     */
    public function getComputedAt(): mixed { return $this->get('computed_at'); }
    public function hasComputedAt(): bool { return $this->has('computed_at'); }
    /** Recorded failed card attempts from this link. A successful retry does not erase previous failures. anyOf[1] (Value): integer. Recorded failed card attempts from this link. A successful retry does not erase previous failures. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When failed_payment_count is omitted; use hasFailedPaymentCount() or valueOrDefault().
     */
    public function getFailedPaymentCount(): mixed { return $this->get('failed_payment_count'); }
    public function hasFailedPaymentCount(): bool { return $this->has('failed_payment_count'); }
    /** Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. anyOf[1] (Value): integer. Number of orders whose collection has completed, across all currencies, including fully and partially refunded orders. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When paid_order_count is omitted; use hasPaidOrderCount() or valueOrDefault().
     */
    public function getPaidOrderCount(): mixed { return $this->get('paid_order_count'); }
    public function hasPaidOrderCount(): bool { return $this->has('paid_order_count'); }
    /** Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. anyOf[1] (Value): Array of {@see MoneyValuePreviousAttributesInput}. Gross paid totals in integer minor units, one Money object per currency with paid orders, sorted by currency. Refunds are not subtracted. Empty array when there are no paid orders. anyOf[1][] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When paid_totals is omitted; use hasPaidTotals() or valueOrDefault().
     */
    public function getPaidTotals(): mixed { return $this->get('paid_totals'); }
    public function hasPaidTotals(): bool { return $this->has('paid_totals'); }
    /** Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. anyOf[1] (Value): Array of {@see MoneyValuePreviousAttributesInput}. Refunded totals in integer minor units on the same paid orders as paid_totals. One Money object per currency with paid orders, sorted by currency, including zero when nothing was refunded. Empty array when there are no paid orders. anyOf[1][] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When refunded_totals is omitted; use hasRefundedTotals() or valueOrDefault().
     */
    public function getRefundedTotals(): mixed { return $this->get('refunded_totals'); }
    public function hasRefundedTotals(): bool { return $this->has('refunded_totals'); }
}

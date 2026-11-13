<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $status
 * @property-read string $order_id
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string $due_date_from
 * @property-read string $due_date_to
 * @property-read bool $is_overdue
 * @property-read bool $has_outstanding_balance
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * Presence-aware input; omitted fields throw when accessed. */
final class MeListInvoicesInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: list<string>|string, 'order_id'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'due_date_from'?: string, 'due_date_to'?: string, 'is_overdue'?: bool, 'has_outstanding_balance'?: bool, 'sort_by'?: string, 'sort_direction'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeListInvoicesInput')); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque, signed next_page_token from the previous response, bound to the list and caller. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An altered, invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Filter by invoice status. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "open", "partially_paid", "paid", "voided", "uncollectible", "credited". Value enum: "open", "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "open", "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[1][] (Value): string.  Value enum: "open", "partially_paid", "paid", "voided", "uncollectible", "credited". anyOf[2] (Value): string.  Value enum: "open", "partially_paid", "paid", "voided", "uncollectible", "credited".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by Flint order ID. pattern: ^ord_[0-9A-HJKMNP-TV-Z]{26}$. Example: "ord_01KEZF7C0054GQKJ142A8X367A".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Inclusive lower bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Exclusive upper bound on created_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Inclusive lower bound on due_date, in YYYY-MM-DD format. Compares each invoice calendar date in its timezone (UTC when absent). Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When due_date_from is omitted; use hasDueDateFrom() or valueOrDefault().
     */
    public function getDueDateFrom(): string { return $this->get('due_date_from'); }
    public function hasDueDateFrom(): bool { return $this->has('due_date_from'); }
    /** Exclusive upper bound on due_date, in YYYY-MM-DD format. Compares each invoice calendar date in its timezone (UTC when absent). Format: date. Example: "2026-08-02".
     * @return string
     * @throws SdkError When due_date_to is omitted; use hasDueDateTo() or valueOrDefault().
     */
    public function getDueDateTo(): string { return $this->get('due_date_to'); }
    public function hasDueDateTo(): bool { return $this->has('due_date_to'); }
    /** Filter by whether an open or partially_paid invoice has an outstanding balance after its due date ends in its timezone (UTC when absent). With a schedule, matches when any entry is overdue.
     * @return bool
     * @throws SdkError When is_overdue is omitted; use hasIsOverdue() or valueOrDefault().
     */
    public function getIsOverdue(): bool { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** Filter by whether outstanding_money is greater than zero.
     * @return bool
     * @throws SdkError When has_outstanding_balance is omitted; use hasHasOutstandingBalance() or valueOrDefault().
     */
    public function getHasOutstandingBalance(): bool { return $this->get('has_outstanding_balance'); }
    public function hasHasOutstandingBalance(): bool { return $this->has('has_outstanding_balance'); }
    /** Field to sort by. Defaults to created_at; ties are broken by invoice_id. Default: "created_at". Value enum: "created_at", "updated_at", "due_date", "invoice_number", "outstanding_money".
     * @return string
     * @throws SdkError When sort_by is omitted; use hasSortBy() or valueOrDefault().
     */
    public function getSortBy(): string { return $this->get('sort_by'); }
    public function hasSortBy(): bool { return $this->has('sort_by'); }
    /** Sort direction. Defaults to desc. Default: "desc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
}

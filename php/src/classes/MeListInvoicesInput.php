<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string> $status
 * @property-read string $order_id
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $due_after
 * @property-read string|\DateTimeInterface $due_before
 * @property-read bool $is_overdue
 * @property-read bool $has_outstanding_balance
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * Presence-aware input; omitted fields throw when accessed. */
final class MeListInvoicesInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: list<string>, 'order_id'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'due_after'?: string|\DateTimeInterface, 'due_before'?: string|\DateTimeInterface, 'is_overdue'?: bool, 'has_outstanding_balance'?: bool, 'sort_by'?: string, 'sort_direction'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeListInvoicesInput')); }
    /** Shape $ (Value): integer. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "open", "partially_paid", "paid", "void", "uncollectible", "credited". Shape $[] (Value): string.  Value enum: "open", "partially_paid", "paid", "void", "uncollectible", "credited".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_after is omitted; use hasCreatedAfter() or valueOrDefault().
     */
    public function getCreatedAfter(): string|\DateTimeInterface { return $this->get('created_after'); }
    public function hasCreatedAfter(): bool { return $this->has('created_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_before is omitted; use hasCreatedBefore() or valueOrDefault().
     */
    public function getCreatedBefore(): string|\DateTimeInterface { return $this->get('created_before'); }
    public function hasCreatedBefore(): bool { return $this->has('created_before'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When due_after is omitted; use hasDueAfter() or valueOrDefault().
     */
    public function getDueAfter(): string|\DateTimeInterface { return $this->get('due_after'); }
    public function hasDueAfter(): bool { return $this->has('due_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When due_before is omitted; use hasDueBefore() or valueOrDefault().
     */
    public function getDueBefore(): string|\DateTimeInterface { return $this->get('due_before'); }
    public function hasDueBefore(): bool { return $this->has('due_before'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When is_overdue is omitted; use hasIsOverdue() or valueOrDefault().
     */
    public function getIsOverdue(): bool { return $this->get('is_overdue'); }
    public function hasIsOverdue(): bool { return $this->has('is_overdue'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When has_outstanding_balance is omitted; use hasHasOutstandingBalance() or valueOrDefault().
     */
    public function getHasOutstandingBalance(): bool { return $this->get('has_outstanding_balance'); }
    public function hasHasOutstandingBalance(): bool { return $this->has('has_outstanding_balance'); }
    /** Shape $ (Value): string. Default: "created_at". Value enum: "created_at", "updated_at", "due_at", "invoice_number", "outstanding_money".
     * @return string
     * @throws SdkError When sort_by is omitted; use hasSortBy() or valueOrDefault().
     */
    public function getSortBy(): string { return $this->get('sort_by'); }
    public function hasSortBy(): bool { return $this->has('sort_by'); }
    /** Shape $ (Value): string. Default: "desc". Value enum: "asc", "desc".
     * @return string
     * @throws SdkError When sort_direction is omitted; use hasSortDirection() or valueOrDefault().
     */
    public function getSortDirection(): string { return $this->get('sort_direction'); }
    public function hasSortDirection(): bool { return $this->has('sort_direction'); }
}

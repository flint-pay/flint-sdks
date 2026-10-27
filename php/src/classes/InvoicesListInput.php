<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string> $status
 * @property-read string $customer_id
 * @property-read string $order_id
 * @property-read string $subscription_id
 * @property-read string $external_reference_id
 * @property-read string $invoice_number
 * @property-read list<string> $collection_mode
 * @property-read string|\DateTimeInterface $issued_after
 * @property-read string|\DateTimeInterface $issued_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $due_after
 * @property-read string|\DateTimeInterface $due_before
 * @property-read bool $is_overdue
 * @property-read bool $has_outstanding_balance
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string $query
 * @property-read list<string> $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: list<string>, 'customer_id'?: string, 'order_id'?: string, 'subscription_id'?: string, 'external_reference_id'?: string, 'invoice_number'?: string, 'collection_mode'?: list<string>, 'issued_after'?: string|\DateTimeInterface, 'issued_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'due_after'?: string|\DateTimeInterface, 'due_before'?: string|\DateTimeInterface, 'is_overdue'?: bool, 'has_outstanding_balance'?: bool, 'sort_by'?: string, 'sort_direction'?: string, 'query'?: string, 'expand'?: list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesListInput')); }
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
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited". Shape $[] (Value): string.  Value enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When invoice_number is omitted; use hasInvoiceNumber() or valueOrDefault().
     */
    public function getInvoiceNumber(): string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "buyer_initiated", "automatic", "external". Shape $[] (Value): string.  Value enum: "buyer_initiated", "automatic", "external".
     * @return list<string>
     * @throws SdkError When collection_mode is omitted; use hasCollectionMode() or valueOrDefault().
     */
    public function getCollectionMode(): array { return $this->get('collection_mode'); }
    public function hasCollectionMode(): bool { return $this->has('collection_mode'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When issued_after is omitted; use hasIssuedAfter() or valueOrDefault().
     */
    public function getIssuedAfter(): string|\DateTimeInterface { return $this->get('issued_after'); }
    public function hasIssuedAfter(): bool { return $this->has('issued_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When issued_before is omitted; use hasIssuedBefore() or valueOrDefault().
     */
    public function getIssuedBefore(): string|\DateTimeInterface { return $this->get('issued_before'); }
    public function hasIssuedBefore(): bool { return $this->has('issued_before'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Shape $ (Value): string. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
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
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Shape $ (Value): Array of string.  [] enum: "customer", "order". Shape $[] (Value): string.  Value enum: "customer", "order".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}

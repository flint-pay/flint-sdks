<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $status
 * @property-read string $idempotency_key
 * @property-read string $customer_id
 * @property-read string $order_id
 * @property-read string $subscription_id
 * @property-read string $external_reference_id
 * @property-read string $invoice_number
 * @property-read list<string>|string $collection_mode
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
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoicesListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: list<string>|string, 'idempotency_key'?: string, 'customer_id'?: string, 'order_id'?: string, 'subscription_id'?: string, 'external_reference_id'?: string, 'invoice_number'?: string, 'collection_mode'?: list<string>|string, 'issued_after'?: string|\DateTimeInterface, 'issued_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'due_after'?: string|\DateTimeInterface, 'due_before'?: string|\DateTimeInterface, 'is_overdue'?: bool, 'has_outstanding_balance'?: bool, 'sort_by'?: string, 'sort_direction'?: string, 'query'?: string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoicesListInput')); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. minimum: 1. maximum: 100. Default: 20.
     * @return int
     * @throws SdkError When page_size is omitted; use hasPageSize() or valueOrDefault().
     */
    public function getPageSize(): int { return $this->get('page_size'); }
    public function hasPageSize(): bool { return $this->has('page_size'); }
    /** Opaque next_page_token from the previous response. Omit on the first request. You may change `page_size` between pages. Reuse it with the same endpoint, filters, sort, and request context. Do not parse or construct tokens. An invalid, expired, or mismatched token returns a validation error.
     * @return string
     * @throws SdkError When page_token is omitted; use hasPageToken() or valueOrDefault().
     */
    public function getPageToken(): string { return $this->get('page_token'); }
    public function hasPageToken(): bool { return $this->has('page_token'); }
    /** Filter by invoice status. Repeat the parameter or pass comma-separated values to match multiple statuses. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited". Value enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited". anyOf[1][] (Value): string.  Value enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited". anyOf[2] (Value): string.  Value enum: "draft", "open", "partially_paid", "paid", "void", "uncollectible", "credited".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Filter by Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Filter by Flint order ID. Example: "ord_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Exact-match filter on the backing order subscription ID. Example: "sub_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When subscription_id is omitted; use hasSubscriptionId() or valueOrDefault().
     */
    public function getSubscriptionId(): string { return $this->get('subscription_id'); }
    public function hasSubscriptionId(): bool { return $this->has('subscription_id'); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Exact, byte-sensitive whole invoice number. Preserves casing, accents, and whitespace; drafts without a number do not match. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When invoice_number is omitted; use hasInvoiceNumber() or valueOrDefault().
     */
    public function getInvoiceNumber(): string { return $this->get('invoice_number'); }
    public function hasInvoiceNumber(): bool { return $this->has('invoice_number'); }
    /** Filter by the effective collection mode. Repeat the parameter or pass comma-separated values to match multiple modes. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "buyer_initiated", "automatic", "external". Value enum: "buyer_initiated", "automatic", "external". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "buyer_initiated", "automatic", "external". anyOf[1][] (Value): string.  Value enum: "buyer_initiated", "automatic", "external". anyOf[2] (Value): string.  Value enum: "buyer_initiated", "automatic", "external".
     * @return list<string>|string
     * @throws SdkError When collection_mode is omitted; use hasCollectionMode() or valueOrDefault().
     */
    public function getCollectionMode(): mixed { return $this->get('collection_mode'); }
    public function hasCollectionMode(): bool { return $this->has('collection_mode'); }
    /** Inclusive lower bound on issued_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When issued_after is omitted; use hasIssuedAfter() or valueOrDefault().
     */
    public function getIssuedAfter(): string|\DateTimeInterface { return $this->get('issued_after'); }
    public function hasIssuedAfter(): bool { return $this->has('issued_after'); }
    /** Exclusive upper bound on issued_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When issued_before is omitted; use hasIssuedBefore() or valueOrDefault().
     */
    public function getIssuedBefore(): string|\DateTimeInterface { return $this->get('issued_before'); }
    public function hasIssuedBefore(): bool { return $this->has('issued_before'); }
    /** Inclusive lower bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_after is omitted; use hasUpdatedAfter() or valueOrDefault().
     */
    public function getUpdatedAfter(): string|\DateTimeInterface { return $this->get('updated_after'); }
    public function hasUpdatedAfter(): bool { return $this->has('updated_after'); }
    /** Exclusive upper bound on updated_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_before is omitted; use hasUpdatedBefore() or valueOrDefault().
     */
    public function getUpdatedBefore(): string|\DateTimeInterface { return $this->get('updated_before'); }
    public function hasUpdatedBefore(): bool { return $this->has('updated_before'); }
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
    /** Inclusive lower bound on due_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When due_after is omitted; use hasDueAfter() or valueOrDefault().
     */
    public function getDueAfter(): string|\DateTimeInterface { return $this->get('due_after'); }
    public function hasDueAfter(): bool { return $this->has('due_after'); }
    /** Exclusive upper bound on due_at. Format: date-time. Example: "2026-03-17T14:30:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When due_before is omitted; use hasDueBefore() or valueOrDefault().
     */
    public function getDueBefore(): string|\DateTimeInterface { return $this->get('due_before'); }
    public function hasDueBefore(): bool { return $this->has('due_before'); }
    /** Filter by whether the invoice is overdue.
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
    /** Field to sort by. Defaults to created_at; ties are broken by invoice_id. Default: "created_at". Value enum: "created_at", "updated_at", "due_at", "invoice_number", "outstanding_money".
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
    /** Search across invoice_id, invoice_number, external_reference_id, recipient_email, reference, po_number, and the customer name and email on the invoice. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as inv_01.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Supported expansions: customer, order. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=customer&expand=order, or pass one comma-separated value. [] enum: "customer", "order". Value enum: "customer", "order". anyOf[1] (Value): Array of string.  [] enum: "customer", "order". anyOf[1][] (Value): string.  Value enum: "customer", "order". anyOf[2] (Value): string.  Value enum: "customer", "order".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}

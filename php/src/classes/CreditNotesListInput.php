<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string $invoice_id
 * @property-read string $customer_id
 * @property-read list<string>|string $reason
 * @property-read string $external_reference_id
 * @property-read string $query
 * @property-read list<string>|string $status
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class CreditNotesListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'invoice_id'?: string, 'customer_id'?: string, 'reason'?: list<string>|string, 'external_reference_id'?: string, 'query'?: string, 'status'?: list<string>|string, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreditNotesListInput')); }
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
    /** Filter by invoice. Example: "inv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When invoice_id is omitted; use hasInvoiceId() or valueOrDefault().
     */
    public function getInvoiceId(): string { return $this->get('invoice_id'); }
    public function hasInvoiceId(): bool { return $this->has('invoice_id'); }
    /** Filter by the source invoice's current customer_id. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Filter by credit note reason. Repeat the parameter or pass comma-separated values to match multiple reasons. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[1][] (Value): string.  Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other". anyOf[2] (Value): string.  Value enum: "returned_goods", "order_adjustment", "billing_error", "goodwill", "other".
     * @return list<string>|string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Search across credit note ID, credit note number, memo, and external reference ID. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as cn_01.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Filter by status. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "draft", "issued", "void". Value enum: "draft", "issued", "void". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "draft", "issued", "void". anyOf[1][] (Value): string.  Value enum: "draft", "issued", "void". anyOf[2] (Value): string.  Value enum: "draft", "issued", "void".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Supported expansions: invoice. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=invoice. [] enum: "invoice". Value enum: "invoice". anyOf[1] (Value): Array of string.  [] enum: "invoice". anyOf[1][] (Value): string.  Value enum: "invoice". anyOf[2] (Value): string.  Value enum: "invoice".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}

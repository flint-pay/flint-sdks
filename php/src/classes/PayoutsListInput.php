<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $idempotency_key
 * @property-read string $currency
 * @property-read list<string>|string $expand
 * @property-read list<string>|string $method
 * @property-read list<string>|string $balance_source_type
 * @property-read string $payout_destination_id
 * @property-read string $external_reference_id
 * @property-read string $query
 * @property-read list<string>|string $status
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string $arrival_date_from
 * @property-read string $arrival_date_to
 * @property-read int $page_size
 * @property-read string $page_token
 * Presence-aware input; omitted fields throw when accessed. */
final class PayoutsListInput extends Model {
    /** @param array{'idempotency_key'?: string, 'currency'?: string, 'expand'?: list<string>|string, 'method'?: list<string>|string, 'balance_source_type'?: list<string>|string, 'payout_destination_id'?: string, 'external_reference_id'?: string, 'query'?: string, 'status'?: list<string>|string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'arrival_date_from'?: string, 'arrival_date_to'?: string, 'page_size'?: int, 'page_token'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PayoutsListInput')); }
    /** Filter by the original Idempotency-Key, after trimming surrounding whitespace. Matching is exact and case-sensitive. Returns current authorized resources, not the recorded response. A pending resource does not prove that the operation succeeded, and an empty list does not prove that it had no effect. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** ISO 4217 currency code. minLength: 3. maxLength: 3. pattern: ^[A-Z]{3}$. Example: "USD".
     * @return string
     * @throws SdkError When currency is omitted; use hasCurrency() or valueOrDefault().
     */
    public function getCurrency(): string { return $this->get('currency'); }
    public function hasCurrency(): bool { return $this->has('currency'); }
    /** Supported expansions: original_payout, payout_destination, reversed_by_payout. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=original_payout&expand=payout_destination, or pass one comma-separated value. [] enum: "original_payout", "payout_destination", "reversed_by_payout". Value enum: "original_payout", "payout_destination", "reversed_by_payout". anyOf[1] (Value): Array of string.  [] enum: "original_payout", "payout_destination", "reversed_by_payout". anyOf[1][] (Value): string.  Value enum: "original_payout", "payout_destination", "reversed_by_payout". anyOf[2] (Value): string.  Value enum: "original_payout", "payout_destination", "reversed_by_payout".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** Optional payout method filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "standard", "instant", "other". Value enum: "standard", "instant", "other". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "standard", "instant", "other". anyOf[1][] (Value): string.  Value enum: "standard", "instant", "other". anyOf[2] (Value): string.  Value enum: "standard", "instant", "other".
     * @return list<string>|string
     * @throws SdkError When method is omitted; use hasMethod() or valueOrDefault().
     */
    public function getMethod(): mixed { return $this->get('method'); }
    public function hasMethod(): bool { return $this->has('method'); }
    /** Optional Flint balance source type filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "card", "bank_account". Value enum: "card", "bank_account". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "card", "bank_account". anyOf[1][] (Value): string.  Value enum: "card", "bank_account". anyOf[2] (Value): string.  Value enum: "card", "bank_account".
     * @return list<string>|string
     * @throws SdkError When balance_source_type is omitted; use hasBalanceSourceType() or valueOrDefault().
     */
    public function getBalanceSourceType(): mixed { return $this->get('balance_source_type'); }
    public function hasBalanceSourceType(): bool { return $this->has('balance_source_type'); }
    /** Optional payout destination ID filter. Example: "pdest_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When payout_destination_id is omitted; use hasPayoutDestinationId() or valueOrDefault().
     */
    public function getPayoutDestinationId(): string { return $this->get('payout_destination_id'); }
    public function hasPayoutDestinationId(): bool { return $this->has('payout_destination_id'); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Search across payout ID, external reference ID, description, and statement descriptor. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as po_01.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Optional payout status filter. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "pending", "in_transit", "paid", "failed", "canceled". Value enum: "pending", "in_transit", "paid", "failed", "canceled". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "pending", "in_transit", "paid", "failed", "canceled". anyOf[1][] (Value): string.  Value enum: "pending", "in_transit", "paid", "failed", "canceled". anyOf[2] (Value): string.  Value enum: "pending", "in_transit", "paid", "failed", "canceled".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
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
    /** Inclusive lower bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: date.
     * @return string
     * @throws SdkError When arrival_date_from is omitted; use hasArrivalDateFrom() or valueOrDefault().
     */
    public function getArrivalDateFrom(): string { return $this->get('arrival_date_from'); }
    public function hasArrivalDateFrom(): bool { return $this->has('arrival_date_from'); }
    /** Exclusive upper bound on arrival_date at midnight UTC. Use YYYY-MM-DD. Format: date.
     * @return string
     * @throws SdkError When arrival_date_to is omitted; use hasArrivalDateTo() or valueOrDefault().
     */
    public function getArrivalDateTo(): string { return $this->get('arrival_date_to'); }
    public function hasArrivalDateTo(): bool { return $this->has('arrival_date_to'); }
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
}

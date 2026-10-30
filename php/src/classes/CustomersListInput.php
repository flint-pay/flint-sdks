<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read list<string>|string $status
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read string $external_reference_id
 * @property-read string $email
 * @property-read string $segment
 * @property-read bool $is_merchant_verified
 * @property-read string $phone
 * @property-read string $test_clock_id
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersListInput extends Model {
    /** @param array{'status'?: list<string>|string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'email'?: string, 'segment'?: string, 'is_merchant_verified'?: bool, 'phone'?: string, 'test_clock_id'?: string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersListInput')); }
    /** Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out deleted rows; name deleted to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "deletion_processing", "deleted". Value enum: "active", "deletion_processing", "deleted". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "deletion_processing", "deleted". anyOf[1][] (Value): string.  Value enum: "active", "deletion_processing", "deleted". anyOf[2] (Value): string.  Value enum: "active", "deletion_processing", "deleted".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
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
    /** Search across customer_id, name, email, phone number, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as cus_01.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Exact whole-address match after trimming surrounding whitespace, ignoring case and accents.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Byte-sensitive whole-value match on the opaque customer segment. Whitespace, casing, Unicode, and commas are literal. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When segment is omitted; use hasSegment() or valueOrDefault().
     */
    public function getSegment(): string { return $this->get('segment'); }
    public function hasSegment(): bool { return $this->has('segment'); }
    /** Filter by merchant verification, independently of email verification.
     * @return bool
     * @throws SdkError When is_merchant_verified is omitted; use hasIsMerchantVerified() or valueOrDefault().
     */
    public function getIsMerchantVerified(): bool { return $this->get('is_merchant_verified'); }
    public function hasIsMerchantVerified(): bool { return $this->has('is_merchant_verified'); }
    /** Exact match on a full E.164 phone number. Encode the leading plus as %2B. minLength: 1. pattern: ^\+[1-9][0-9]{1,14}$.
     * @return string
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Sandbox only. Exact-match filter on `test_clock_id`. A live credential gets `403 FORBIDDEN` with reason `test_mode_required`. minLength: 1. pattern: ^tclk_[0-9A-HJKMNP-TV-Z]{26}$. Example: "tclk_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When test_clock_id is omitted; use hasTestClockId() or valueOrDefault().
     */
    public function getTestClockId(): string { return $this->get('test_clock_id'); }
    public function hasTestClockId(): bool { return $this->has('test_clock_id'); }
    /** Field to sort by. Defaults to created_at; ties are broken by customer_id. Default: "created_at". Value enum: "name", "email", "created_at", "updated_at".
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
    /** Supported expansions: default_payment_method, receivables. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Repeat expand, for example expand=default_payment_method&expand=receivables, or pass one comma-separated value. [] enum: "default_payment_method", "receivables". Value enum: "default_payment_method", "receivables". anyOf[1] (Value): Array of string.  [] enum: "default_payment_method", "receivables". anyOf[1][] (Value): string.  Value enum: "default_payment_method", "receivables". anyOf[2] (Value): string.  Value enum: "default_payment_method", "receivables".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}

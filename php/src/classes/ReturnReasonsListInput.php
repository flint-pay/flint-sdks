<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $external_reference_id
 * @property-read string $handle
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read list<string>|string $source
 * @property-read list<string>|string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnReasonsListInput extends Model {
    /** @param array{'external_reference_id'?: string, 'handle'?: string, 'page_size'?: int, 'page_token'?: string, 'query'?: string, 'source'?: list<string>|string, 'status'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnReasonsListInput')); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Exact, case-sensitive match on the reason's handle, for Flint and merchant reasons.
     * @return string
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Maximum number of results to return, from 1 to 100. Defaults to 20. Format: int32. minimum: 1. maximum: 100. Default: 20.
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
    /** Search by return reason ID, handle, name, description, or external reference ID.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Filter by source. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "flint", "merchant". Value enum: "flint", "merchant". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "flint", "merchant". anyOf[1][] (Value): string.  Value enum: "flint", "merchant". anyOf[2] (Value): string.  Value enum: "flint", "merchant".
     * @return list<string>|string
     * @throws SdkError When source is omitted; use hasSource() or valueOrDefault().
     */
    public function getSource(): mixed { return $this->get('source'); }
    public function hasSource(): bool { return $this->has('source'); }
    /** Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "archived", "inactive". Value enum: "active", "archived", "inactive". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived", "inactive". anyOf[1][] (Value): string.  Value enum: "active", "archived", "inactive". anyOf[2] (Value): string.  Value enum: "active", "archived", "inactive".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

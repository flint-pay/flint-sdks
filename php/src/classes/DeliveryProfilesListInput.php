<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $query
 * @property-read string $external_reference_id
 * @property-read list<string>|string $status
 * @property-read bool $is_default
 * @property-read list<string>|string $resolution_mode
 * @property-read bool $include_diagnostics
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryProfilesListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'query'?: string, 'external_reference_id'?: string, 'status'?: list<string>|string, 'is_default'?: bool, 'resolution_mode'?: list<string>|string, 'include_diagnostics'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfilesListInput')); }
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
    /** Search across delivery_profile_id, name, and external_reference_id. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as dprof_01. maxLength: 255.
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
    /** Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][] (Value): string.  Value enum: "active", "archived". anyOf[2] (Value): string.  Value enum: "active", "archived".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by whether the profile is the current physical catalog default. Accepts a single true or false value.
     * @return bool
     * @throws SdkError When is_default is omitted; use hasIsDefault() or valueOrDefault().
     */
    public function getIsDefault(): bool { return $this->get('is_default'); }
    public function hasIsDefault(): bool { return $this->has('is_default'); }
    /** Filter by profile resolution mode. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "quote", "manual". Value enum: "quote", "manual". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "quote", "manual". anyOf[1][] (Value): string.  Value enum: "quote", "manual". anyOf[2] (Value): string.  Value enum: "quote", "manual".
     * @return list<string>|string
     * @throws SdkError When resolution_mode is omitted; use hasResolutionMode() or valueOrDefault().
     */
    public function getResolutionMode(): mixed { return $this->get('resolution_mode'); }
    public function hasResolutionMode(): bool { return $this->has('resolution_mode'); }
    /** Compute catalog and delivery-configuration diagnostics for every profile returned. Default: false.
     * @return bool
     * @throws SdkError When include_diagnostics is omitted; use hasIncludeDiagnostics() or valueOrDefault().
     */
    public function getIncludeDiagnostics(): bool { return $this->get('include_diagnostics'); }
    public function hasIncludeDiagnostics(): bool { return $this->has('include_diagnostics'); }
}

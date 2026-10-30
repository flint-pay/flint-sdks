<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $status
 * @property-read string $location_id
 * @property-read string $hardware_fingerprint
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * Presence-aware input; omitted fields throw when accessed. */
final class DevicesListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: list<string>|string, 'location_id'?: string, 'hardware_fingerprint'?: string, 'sort_by'?: string, 'sort_direction'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DevicesListInput')); }
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
    /** Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "archived". Value enum: "active", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "archived". anyOf[1][] (Value): string.  Value enum: "active", "archived". anyOf[2] (Value): string.  Value enum: "active", "archived".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by assigned Flint location ID. Example: "loc_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Exact, case-sensitive match. Archived devices release their fingerprint, so this finds at most the one active device that holds it. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When hardware_fingerprint is omitted; use hasHardwareFingerprint() or valueOrDefault().
     */
    public function getHardwareFingerprint(): string { return $this->get('hardware_fingerprint'); }
    public function hasHardwareFingerprint(): bool { return $this->has('hardware_fingerprint'); }
    /** Field to sort by. Defaults to created_at; ties are broken by device_id. Default: "created_at". Value enum: "name", "created_at", "updated_at".
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

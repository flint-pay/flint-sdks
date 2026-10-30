<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read string $external_reference_id
 * @property-read string $sku
 * @property-read string $query
 * @property-read string $category_handle
 * @property-read list<string>|string $status
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string $delivery_profile_id
 * @property-read list<string>|string $delivery_configuration_status
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class BundlesListParams extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'external_reference_id'?: string, 'sku'?: string, 'query'?: string, 'category_handle'?: string, 'status'?: list<string>|string, 'sort_by'?: string, 'sort_direction'?: string, 'delivery_profile_id'?: string, 'delivery_configuration_status'?: list<string>|string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface, 'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BundlesListParams')); }
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
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Filter by exact SKU. maxLength: 100.
     * @return string
     * @throws SdkError When sku is omitted; use hasSku() or valueOrDefault().
     */
    public function getSku(): string { return $this->get('sku'); }
    public function hasSku(): bool { return $this->has('sku'); }
    /** Search across bundle ID, external reference ID, name, description, SKU, and barcode. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as bun_01.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Filter by category handle. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     * @return string
     * @throws SdkError When category_handle is omitted; use hasCategoryHandle() or valueOrDefault().
     */
    public function getCategoryHandle(): string { return $this->get('category_handle'); }
    public function hasCategoryHandle(): bool { return $this->has('category_handle'); }
    /** Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value): string.  Value enum: "active", "inactive", "archived". anyOf[2] (Value): string.  Value enum: "active", "inactive", "archived".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Field to sort by. Defaults to created_at; ties are broken by bundle_id. Default: "created_at". Value enum: "created_at", "updated_at", "name".
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
    /** Filter bundles with at least one component assigned to this delivery profile. Example: "dprof_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When delivery_profile_id is omitted; use hasDeliveryProfileId() or valueOrDefault().
     */
    public function getDeliveryProfileId(): string { return $this->get('delivery_profile_id'); }
    public function hasDeliveryProfileId(): bool { return $this->has('delivery_profile_id'); }
    /** Filter by aggregated delivery readiness across bundle components. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "configured", "action_required", "not_applicable". Value enum: "configured", "action_required", "not_applicable". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "configured", "action_required", "not_applicable". anyOf[1][] (Value): string.  Value enum: "configured", "action_required", "not_applicable". anyOf[2] (Value): string.  Value enum: "configured", "action_required", "not_applicable".
     * @return list<string>|string
     * @throws SdkError When delivery_configuration_status is omitted; use hasDeliveryConfigurationStatus() or valueOrDefault().
     */
    public function getDeliveryConfigurationStatus(): mixed { return $this->get('delivery_configuration_status'); }
    public function hasDeliveryConfigurationStatus(): bool { return $this->has('delivery_configuration_status'); }
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
    /** Supported expansions: modifier_set. Include the requested related resources using scoped batch reads for this page. Each relationship requires its existing target read scopes. Expansion changes the representation without changing pagination tokens. Limits: at most 10 unique expand paths per request. Pass expand=modifier_set. [] enum: "modifier_set". Value enum: "modifier_set". anyOf[1] (Value): Array of string.  [] enum: "modifier_set". anyOf[1][] (Value): string.  Value enum: "modifier_set". anyOf[2] (Value): string.  Value enum: "modifier_set".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}

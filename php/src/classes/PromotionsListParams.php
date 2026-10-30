<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string>|string $status
 * @property-read list<string>|string $availability
 * @property-read string $external_reference_id
 * @property-read string $query
 * @property-read string $product_id
 * @property-read string $variant_id
 * @property-read string $bundle_id
 * @property-read string $category_handle
 * @property-read list<string>|string $redemption_type
 * @property-read list<string>|string $discount_class
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionsListParams extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: list<string>|string, 'availability'?: list<string>|string, 'external_reference_id'?: string, 'query'?: string, 'product_id'?: string, 'variant_id'?: string, 'bundle_id'?: string, 'category_handle'?: string, 'redemption_type'?: list<string>|string, 'discount_class'?: list<string>|string, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionsListParams')); }
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
    /** Filter by status. Repeat the parameter or send comma-separated values to match any of several. Omitted, the list leaves out archived rows; name archived to include them. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "active", "inactive", "archived". Value enum: "active", "inactive", "archived". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived". anyOf[1][] (Value): string.  Value enum: "active", "inactive", "archived". anyOf[2] (Value): string.  Value enum: "active", "inactive", "archived".
     * @return list<string>|string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Filter by whether a promotion can apply now or why it cannot. available matches available: true; every other value matches unavailable_reason. Repeat the parameter or pass comma-separated values; values are ORed. This filter is ANDed with status. Archived promotions still require status=archived. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "available", "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes". Value enum: "available", "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "available", "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes". anyOf[1][] (Value): string.  Value enum: "available", "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes". anyOf[2] (Value): string.  Value enum: "available", "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     * @return list<string>|string
     * @throws SdkError When availability is omitted; use hasAvailability() or valueOrDefault().
     */
    public function getAvailability(): mixed { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
    /** Exact-match filter on the caller-owned external reference ID. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Search across promotion ID, external reference ID, name, display name, description, and promotion codes. Text fields match any part of the value, and %, _ and \ are ordinary characters, not wildcards. IDs match from the start and need the type prefix, such as promo_01.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Filter to promotions with an explicit product target rule. Universal promotions are not included by catalog target filters. Example: "prod_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Filter to promotions with an explicit variant target rule. Universal promotions are not included by catalog target filters. Example: "var_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Filter to promotions with an explicit bundle target rule. Universal promotions are not included by catalog target filters. Example: "bun_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Filter to promotions with an explicit category target rule. Universal promotions are not included by catalog target filters. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     * @return string
     * @throws SdkError When category_handle is omitted; use hasCategoryHandle() or valueOrDefault().
     */
    public function getCategoryHandle(): string { return $this->get('category_handle'); }
    public function hasCategoryHandle(): bool { return $this->has('category_handle'); }
    /** Filter by promotion redemption type. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "automatic", "code". Value enum: "automatic", "code". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "automatic", "code". anyOf[1][] (Value): string.  Value enum: "automatic", "code". anyOf[2] (Value): string.  Value enum: "automatic", "code".
     * @return list<string>|string
     * @throws SdkError When redemption_type is omitted; use hasRedemptionType() or valueOrDefault().
     */
    public function getRedemptionType(): mixed { return $this->get('redemption_type'); }
    public function hasRedemptionType(): bool { return $this->has('redemption_type'); }
    /** Filter by promotion discount class. Accepts repeated keys, comma-separated values, or mixtures. Values are trimmed and deduplicated in first-seen order; empty or unknown entries are rejected. Values within this filter are ORed; separate filters are ANDed. [] enum: "order", "line_item", "service_charge". Value enum: "order", "line_item", "service_charge". anyOf[1] (Value): Array of string. minItems: 1. [] enum: "order", "line_item", "service_charge". anyOf[1][] (Value): string.  Value enum: "order", "line_item", "service_charge". anyOf[2] (Value): string.  Value enum: "order", "line_item", "service_charge".
     * @return list<string>|string
     * @throws SdkError When discount_class is omitted; use hasDiscountClass() or valueOrDefault().
     */
    public function getDiscountClass(): mixed { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Field to sort by. Defaults to created_at; ties are broken by promotion_id. Default: "created_at". Value enum: "name", "created_at", "updated_at".
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
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $page_size
 * @property-read string $page_token
 * @property-read list<string> $status
 * @property-read list<string> $availability
 * @property-read string $external_reference_id
 * @property-read string $query
 * @property-read string $product_id
 * @property-read string $variant_id
 * @property-read string $bundle_id
 * @property-read string $category_handle
 * @property-read list<string> $redemption_type
 * @property-read list<string> $discount_class
 * @property-read string $sort_by
 * @property-read string $sort_direction
 * @property-read string|\DateTimeInterface $created_after
 * @property-read string|\DateTimeInterface $created_before
 * @property-read string|\DateTimeInterface $updated_after
 * @property-read string|\DateTimeInterface $updated_before
 * Presence-aware input; omitted fields throw when accessed. */
final class PromotionsListInput extends Model {
    /** @param array{'page_size'?: int, 'page_token'?: string, 'status'?: list<string>, 'availability'?: list<string>, 'external_reference_id'?: string, 'query'?: string, 'product_id'?: string, 'variant_id'?: string, 'bundle_id'?: string, 'category_handle'?: string, 'redemption_type'?: list<string>, 'discount_class'?: list<string>, 'sort_by'?: string, 'sort_direction'?: string, 'created_after'?: string|\DateTimeInterface, 'created_before'?: string|\DateTimeInterface, 'updated_after'?: string|\DateTimeInterface, 'updated_before'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PromotionsListInput')); }
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
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "active", "inactive", "archived". Shape $[] (Value): string.  Value enum: "active", "inactive", "archived".
     * @return list<string>
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): array { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "available", "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes". Shape $[] (Value): string.  Value enum: "available", "inactive", "archived", "not_yet_started", "expired", "exhausted", "no_active_codes".
     * @return list<string>
     * @throws SdkError When availability is omitted; use hasAvailability() or valueOrDefault().
     */
    public function getAvailability(): array { return $this->get('availability'); }
    public function hasAvailability(): bool { return $this->has('availability'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When query is omitted; use hasQuery() or valueOrDefault().
     */
    public function getQuery(): string { return $this->get('query'); }
    public function hasQuery(): bool { return $this->has('query'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When product_id is omitted; use hasProductId() or valueOrDefault().
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When variant_id is omitted; use hasVariantId() or valueOrDefault().
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When bundle_id is omitted; use hasBundleId() or valueOrDefault().
     */
    public function getBundleId(): string { return $this->get('bundle_id'); }
    public function hasBundleId(): bool { return $this->has('bundle_id'); }
    /** Shape $ (Value): string. maxLength: 100. pattern: ^[a-z0-9]+(-[a-z0-9]+)*$.
     * @return string
     * @throws SdkError When category_handle is omitted; use hasCategoryHandle() or valueOrDefault().
     */
    public function getCategoryHandle(): string { return $this->get('category_handle'); }
    public function hasCategoryHandle(): bool { return $this->has('category_handle'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "automatic", "code". Shape $[] (Value): string.  Value enum: "automatic", "code".
     * @return list<string>
     * @throws SdkError When redemption_type is omitted; use hasRedemptionType() or valueOrDefault().
     */
    public function getRedemptionType(): array { return $this->get('redemption_type'); }
    public function hasRedemptionType(): bool { return $this->has('redemption_type'); }
    /** Shape $ (Value): Array of string. minItems: 1. [] enum: "order", "line_item", "service_charge". Shape $[] (Value): string.  Value enum: "order", "line_item", "service_charge".
     * @return list<string>
     * @throws SdkError When discount_class is omitted; use hasDiscountClass() or valueOrDefault().
     */
    public function getDiscountClass(): array { return $this->get('discount_class'); }
    public function hasDiscountClass(): bool { return $this->has('discount_class'); }
    /** Shape $ (Value): string. Default: "created_at". Value enum: "name", "created_at", "updated_at".
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
}

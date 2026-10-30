<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $assigned_bundle_count
 * @property-read int $assigned_product_count
 * @property-read string $category_id
 * @property-read string $created_at
 * @property-read ?string $description
 * @property-read ?string $external_reference_id
 * @property-read string $handle
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read int $targeting_reference_count
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class CategoryCreatedMerchantEventDataObject extends Model {
    /** @param array{'assigned_bundle_count': int, 'assigned_product_count': int, 'category_id': string, 'created_at': string, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'merchant_id'?: string, 'metadata'?: mixed, 'name': string, 'status': string, 'targeting_reference_count': int, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryCreatedMerchantEventDataObject')); }
    /** Number of bundles currently assigned to the category. Format: int64.
     * @return int
     */
    public function getAssignedBundleCount(): int { return $this->get('assigned_bundle_count'); }
    public function hasAssignedBundleCount(): bool { return $this->has('assigned_bundle_count'); }
    /** Number of products currently assigned to the category. Format: int64.
     * @return int
     */
    public function getAssignedProductCount(): int { return $this->get('assigned_product_count'); }
    public function hasAssignedProductCount(): bool { return $this->has('assigned_product_count'); }
    /** Stable identifier of the category.
     * @return string
     */
    public function getCategoryId(): string { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** When this resource was created, as an RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Description of the category.
     * @return ?string
     */
    public function getDescription(): ?string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Immutable handle used to assign this category to products and bundles.
     * @return string
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Identifier of the merchant that owns this resource.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this resource. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Category name shown to buyers.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64.
     * @return int
     */
    public function getTargetingReferenceCount(): int { return $this->get('targeting_reference_count'); }
    public function hasTargetingReferenceCount(): bool { return $this->has('targeting_reference_count'); }
    /** When this resource last changed, as an RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

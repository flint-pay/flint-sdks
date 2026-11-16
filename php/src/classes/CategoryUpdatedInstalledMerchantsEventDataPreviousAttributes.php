<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $assigned_bundle_count
 * @property-read int|null $assigned_product_count
 * @property-read string|null $category_id
 * @property-read string|null $created_at
 * @property-read string|null $description
 * @property-read string|null $external_reference_id
 * @property-read string|null $handle
 * @property-read string|null $merchant_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read string|null $status
 * @property-read int|null $targeting_reference_count
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class CategoryUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'assigned_bundle_count'?: mixed, 'assigned_product_count'?: mixed, 'category_id'?: mixed, 'created_at'?: mixed, 'description'?: mixed, 'external_reference_id'?: mixed, 'handle'?: mixed, 'merchant_id'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'status'?: mixed, 'targeting_reference_count'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Number of bundles currently assigned to the category. anyOf[1] (Value): integer. Number of bundles currently assigned to the category. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getAssignedBundleCount(): int|null { return $this->get('assigned_bundle_count'); }
    public function hasAssignedBundleCount(): bool { return $this->has('assigned_bundle_count'); }
    /** Number of products currently assigned to the category. anyOf[1] (Value): integer. Number of products currently assigned to the category. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getAssignedProductCount(): int|null { return $this->get('assigned_product_count'); }
    public function hasAssignedProductCount(): bool { return $this->has('assigned_product_count'); }
    /** Stable identifier of the category. anyOf[1] (Value): string. Stable identifier of the category. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCategoryId(): string|null { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** When this resource was created, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Description of the category. anyOf[1] (Value): string. Description of the category. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDescription(): string|null { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Immutable handle used to assign this category to products and bundles. anyOf[1] (Value): string. Immutable handle used to assign this category to products and bundles. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getHandle(): string|null { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Identifier of the merchant that owns this resource. anyOf[1] (Value): string. Identifier of the merchant that owns this resource. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantId(): string|null { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Caller-owned metadata stored on this resource. anyOf[1] (Value): {@see MetadataMap}. Caller-owned metadata stored on this resource. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Category name shown to buyers. anyOf[1] (Value): string. Category name shown to buyers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted". anyOf[1] (Value): string. Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. anyOf[1] (Value): integer. Number of promotions, return reasons and return policy versions that reference this category. Deleting the category is refused with `409 RESOURCE_IN_USE` while this or `assigned_product_count` or `assigned_bundle_count` is above zero. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getTargetingReferenceCount(): int|null { return $this->get('targeting_reference_count'); }
    public function hasTargetingReferenceCount(): bool { return $this->has('targeting_reference_count'); }
    /** When this resource last changed, as an RFC3339 timestamp. anyOf[1] (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. anyOf[1] (Value): integer. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

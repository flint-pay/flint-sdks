<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $assigned_bundle_count
 * @property-read string $assigned_product_count
 * @property-read string $category_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $description
 * @property-read string $external_reference_id
 * @property-read string $handle
 * @property-read string $merchant_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string $targeting_reference_count
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class CategoryInput extends Model {
    /** @param array{'assigned_bundle_count': string, 'assigned_product_count': string, 'category_id': string, 'created_at': string|\DateTimeInterface, 'description'?: string, 'external_reference_id'?: string, 'handle': string, 'merchant_id'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status': string, 'targeting_reference_count': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CategoryInput')); }
    /** Shape $ (Value): integer string. Number of bundles currently assigned to the category. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When assigned_bundle_count is omitted; use hasAssignedBundleCount() or valueOrDefault().
     */
    public function getAssignedBundleCount(): string { return $this->get('assigned_bundle_count'); }
    public function hasAssignedBundleCount(): bool { return $this->has('assigned_bundle_count'); }
    /** Shape $ (Value): integer string. Number of products currently assigned to the category. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When assigned_product_count is omitted; use hasAssignedProductCount() or valueOrDefault().
     */
    public function getAssignedProductCount(): string { return $this->get('assigned_product_count'); }
    public function hasAssignedProductCount(): bool { return $this->has('assigned_product_count'); }
    /** Shape $ (Value): string. Stable identifier of the category.
     * @return string
     * @throws SdkError When category_id is omitted; use hasCategoryId() or valueOrDefault().
     */
    public function getCategoryId(): string { return $this->get('category_id'); }
    public function hasCategoryId(): bool { return $this->has('category_id'); }
    /** Shape $ (Value): string. When this resource was created, as an RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Description of the category.
     * @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Immutable handle used to assign this category to products and bundles.
     * @return string
     * @throws SdkError When handle is omitted; use hasHandle() or valueOrDefault().
     */
    public function getHandle(): string { return $this->get('handle'); }
    public function hasHandle(): bool { return $this->has('handle'); }
    /** Shape $ (Value): string. Identifier of the merchant that owns this resource.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata stored on this resource. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Category name shown to buyers.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Category lifecycle status. Active categories can be assigned; deleted is returned only by DELETE. Value enum: "active", "deleted".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): integer string. Number of live targeting references that prevent deleting the category. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When targeting_reference_count is omitted; use hasTargetingReferenceCount() or valueOrDefault().
     */
    public function getTargetingReferenceCount(): string { return $this->get('targeting_reference_count'); }
    public function hasTargetingReferenceCount(): bool { return $this->has('targeting_reference_count'); }
    /** Shape $ (Value): string. When this resource last changed, as an RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Persisted owned-state version. Clock-based availability and expanded resources do not advance this counter. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

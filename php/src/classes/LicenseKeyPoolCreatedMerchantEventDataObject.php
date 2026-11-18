<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $available_quantity
 * @property-read string $created_at
 * @property-read int $held_quantity
 * @property-read int $issued_quantity
 * @property-read string $license_key_pool_id
 * @property-read int|null $low_stock_threshold
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read int $pending_quantity
 * @property-read bool $public_validation_enabled
 * @property-read int $removed_quantity
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyPoolCreatedMerchantEventDataObject extends Model {
    /** @param array{'available_quantity': int, 'created_at': string, 'held_quantity': int, 'issued_quantity': int, 'license_key_pool_id': string, 'low_stock_threshold': int|null, 'metadata': mixed, 'name': string, 'pending_quantity': int, 'public_validation_enabled': bool, 'removed_quantity': int, 'status': string, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolCreatedMerchantEventDataObject')); }
    /** Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getAvailableQuantity(): int { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** When the pool was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getHeldQuantity(): int { return $this->get('held_quantity'); }
    public function hasHeldQuantity(): bool { return $this->has('held_quantity'); }
    /** Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getIssuedQuantity(): int { return $this->get('issued_quantity'); }
    public function hasIssuedQuantity(): bool { return $this->has('issued_quantity'); }
    /** The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$.
     * @return string
     */
    public function getLicenseKeyPoolId(): string { return $this->get('license_key_pool_id'); }
    public function hasLicenseKeyPoolId(): bool { return $this->has('license_key_pool_id'); }
    /** Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
     * @return int|null
     */
    public function getLowStockThreshold(): int|null { return $this->get('low_stock_threshold'); }
    public function hasLowStockThreshold(): bool { return $this->has('low_stock_threshold'); }
    /** Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The name of the pool. minLength: 1. maxLength: 255.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getPendingQuantity(): int { return $this->get('pending_quantity'); }
    public function hasPendingQuantity(): bool { return $this->has('pending_quantity'); }
    /** Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters.
     * @return bool
     */
    public function getPublicValidationEnabled(): bool { return $this->get('public_validation_enabled'); }
    public function hasPublicValidationEnabled(): bool { return $this->has('public_validation_enabled'); }
    /** Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getRemovedQuantity(): int { return $this->get('removed_quantity'); }
    public function hasRemovedQuantity(): bool { return $this->has('removed_quantity'); }
    /** Whether the pool is active or archived. Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the pool's version last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

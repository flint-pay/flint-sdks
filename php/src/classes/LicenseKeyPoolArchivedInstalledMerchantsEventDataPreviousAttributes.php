<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $available_quantity
 * @property-read string|null $created_at
 * @property-read int|null $held_quantity
 * @property-read int|null $issued_quantity
 * @property-read string|null $license_key_pool_id
 * @property-read int|null $low_stock_threshold
 * @property-read array<array-key, string>|null $metadata
 * @property-read string|null $name
 * @property-read int|null $pending_quantity
 * @property-read bool|null $public_validation_enabled
 * @property-read int|null $removed_quantity
 * @property-read string|null $status
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyPoolArchivedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'available_quantity'?: mixed, 'created_at'?: mixed, 'held_quantity'?: mixed, 'issued_quantity'?: mixed, 'license_key_pool_id'?: mixed, 'low_stock_threshold'?: mixed, 'metadata'?: mixed, 'name'?: mixed, 'pending_quantity'?: mixed, 'public_validation_enabled'?: mixed, 'removed_quantity'?: mixed, 'status'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolArchivedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. anyOf[1] (Value): integer. Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getAvailableQuantity(): int|null { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** When the pool was created. anyOf[1] (Value): string. When the pool was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. anyOf[1] (Value): integer. Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getHeldQuantity(): int|null { return $this->get('held_quantity'); }
    public function hasHeldQuantity(): bool { return $this->has('held_quantity'); }
    /** Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. anyOf[1] (Value): integer. Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getIssuedQuantity(): int|null { return $this->get('issued_quantity'); }
    public function hasIssuedQuantity(): bool { return $this->has('issued_quantity'); }
    /** The license key pool ID. anyOf[1] (Value): string. The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLicenseKeyPoolId(): string|null { return $this->get('license_key_pool_id'); }
    public function hasLicenseKeyPoolId(): bool { return $this->has('license_key_pool_id'); }
    /** Available quantity at or below which the pool is low on stock. Null when no threshold is set. anyOf[1] (Value): integer. Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getLowStockThreshold(): int|null { return $this->get('low_stock_threshold'); }
    public function hasLowStockThreshold(): bool { return $this->has('low_stock_threshold'); }
    /** Merchant-defined key-value pairs. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The name of the pool. anyOf[1] (Value): string. The name of the pool. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. anyOf[1] (Value): integer. Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPendingQuantity(): int|null { return $this->get('pending_quantity'); }
    public function hasPendingQuantity(): bool { return $this->has('pending_quantity'); }
    /** Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. anyOf[1] (Value): boolean. Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters. anyOf[2] (Value): null.
     * @return bool|null
     */
    public function getPublicValidationEnabled(): bool|null { return $this->get('public_validation_enabled'); }
    public function hasPublicValidationEnabled(): bool { return $this->has('public_validation_enabled'); }
    /** Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. anyOf[1] (Value): integer. Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getRemovedQuantity(): int|null { return $this->get('removed_quantity'); }
    public function hasRemovedQuantity(): bool { return $this->has('removed_quantity'); }
    /** Whether the pool is active or archived. Value enum: "active", "archived". anyOf[1] (Value): string. Whether the pool is active or archived. Value enum: "active", "archived". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the pool's version last changed. anyOf[1] (Value): string. When the pool's version last changed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. anyOf[1] (Value): integer. Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

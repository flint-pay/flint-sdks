<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $available_quantity
 * @property-read string|\DateTimeInterface $created_at
 * @property-read int $held_quantity
 * @property-read int $issued_quantity
 * @property-read string $license_key_pool_id
 * @property-read int|null $low_stock_threshold
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read int $pending_quantity
 * @property-read bool $public_validation_enabled
 * @property-read int $removed_quantity
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeyPoolInput extends Model {
    /** @param array{'available_quantity': int, 'created_at': string|\DateTimeInterface, 'held_quantity': int, 'issued_quantity': int, 'license_key_pool_id': string, 'low_stock_threshold': int|null, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'pending_quantity': int, 'public_validation_enabled': bool, 'removed_quantity': int, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolInput')); }
    /** Count of keys still for sale, expressed as a whole number because fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When available_quantity is omitted; use hasAvailableQuantity() or valueOrDefault().
     */
    public function getAvailableQuantity(): int { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** When the pool was created. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Count of keys reserved for payments in progress, expressed as a whole number because fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When held_quantity is omitted; use hasHeldQuantity() or valueOrDefault().
     */
    public function getHeldQuantity(): int { return $this->get('held_quantity'); }
    public function hasHeldQuantity(): bool { return $this->has('held_quantity'); }
    /** Count of keys assigned to licenses, expressed as a whole number because fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When issued_quantity is omitted; use hasIssuedQuantity() or valueOrDefault().
     */
    public function getIssuedQuantity(): int { return $this->get('issued_quantity'); }
    public function hasIssuedQuantity(): bool { return $this->has('issued_quantity'); }
    /** The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     * @return string
     * @throws SdkError When license_key_pool_id is omitted; use hasLicenseKeyPoolId() or valueOrDefault().
     */
    public function getLicenseKeyPoolId(): string { return $this->get('license_key_pool_id'); }
    public function hasLicenseKeyPoolId(): bool { return $this->has('license_key_pool_id'); }
    /** Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
     * @return int|null
     * @throws SdkError When low_stock_threshold is omitted; use hasLowStockThreshold() or valueOrDefault().
     */
    public function getLowStockThreshold(): int|null { return $this->get('low_stock_threshold'); }
    public function hasLowStockThreshold(): bool { return $this->has('low_stock_threshold'); }
    /** Merchant-defined key-value pairs. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The name of the pool. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Count of paid units waiting for a key, expressed as a whole number because fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When pending_quantity is omitted; use hasPendingQuantity() or valueOrDefault().
     */
    public function getPendingQuantity(): int { return $this->get('pending_quantity'); }
    public function hasPendingQuantity(): bool { return $this->has('pending_quantity'); }
    /** Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters.
     * @return bool
     * @throws SdkError When public_validation_enabled is omitted; use hasPublicValidationEnabled() or valueOrDefault().
     */
    public function getPublicValidationEnabled(): bool { return $this->get('public_validation_enabled'); }
    public function hasPublicValidationEnabled(): bool { return $this->has('public_validation_enabled'); }
    /** Count of keys withdrawn from stock, expressed as a whole number because fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When removed_quantity is omitted; use hasRemovedQuantity() or valueOrDefault().
     */
    public function getRemovedQuantity(): int { return $this->get('removed_quantity'); }
    public function hasRemovedQuantity(): bool { return $this->has('removed_quantity'); }
    /** Whether the pool is active or archived. Value enum: "active", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** When the pool's version last changed. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Persisted version of this resource's owned state. Expanded resources and external observations can change independently. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

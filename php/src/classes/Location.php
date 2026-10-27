<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LocationAddress|null $address
 * @property-read ?LocationCoordinate $coordinate
 * @property-read string|null $coordinate_source
 * @property-read string $created_at
 * @property-read ?string $external_reference_id
 * @property-read string $geography_version
 * @property-read bool $inventory_allocation_enabled
 * @property-read string $location_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read ?LocationAddress $normalized_address
 * @property-read string $status
 * @property-read string $timezone
 * @property-read string $updated_at
 * @property-read string $validation_status
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class Location extends Model {
    /** @param array{'address': mixed, 'coordinate'?: mixed, 'coordinate_source'?: string|null, 'created_at': string, 'external_reference_id'?: string, 'geography_version': string, 'inventory_allocation_enabled': bool, 'location_id': string, 'metadata': \stdClass, 'name': string, 'normalized_address'?: mixed, 'status': string, 'timezone': string, 'updated_at': string, 'validation_status': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Location')); }
    /** Shape $ (Value): {@see LocationAddress} or null. Published postal address. Shape $.anyOf[1] (Value): {@see LocationAddress}. The street address of a merchant location. Shape $.anyOf[2] (Value): null.
     * @return LocationAddress|null
     */
    public function getAddress(): LocationAddress|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): {@see LocationCoordinate}. Published geographic coordinate. A latitude and longitude for a merchant location.
     * @return ?LocationCoordinate
     */
    public function getCoordinate(): ?LocationCoordinate { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Shape $ (Value): string or null. Source of the stored latitude and longitude. Value enum: "merchant_supplied", "geocoded", null.
     * @return string|null
     */
    public function getCoordinateSource(): string|null { return $this->get('coordinate_source'); }
    public function hasCoordinateSource(): bool { return $this->has('coordinate_source'); }
    /** Shape $ (Value): string. Time the Location was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): integer string. Read-only version that advances only on geography changes and is pinned by tax and delivery dependencies. It is not a request fence. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     */
    public function getGeographyVersion(): string { return $this->get('geography_version'); }
    public function hasGeographyVersion(): bool { return $this->has('geography_version'); }
    /** Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Always present, including false when allocation is not configured.
     * @return bool
     */
    public function getInventoryAllocationEnabled(): bool { return $this->get('inventory_allocation_enabled'); }
    public function hasInventoryAllocationEnabled(): bool { return $this->has('inventory_allocation_enabled'); }
    /** Shape $ (Value): string. Stable Location ID.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. maxProperties: 50. Shape $.* (Value): string. maxLength: 4096.
     * @return array<array-key, string>
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Merchant-facing Location name. minLength: 1. maxLength: 255.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): {@see LocationAddress}. Provider-normalized address used for geography evaluation. The street address of a merchant location.
     * @return ?LocationAddress
     */
    public function getNormalizedAddress(): ?LocationAddress { return $this->get('normalized_address'); }
    public function hasNormalizedAddress(): bool { return $this->has('normalized_address'); }
    /** Shape $ (Value): string. Current Location lifecycle status. Value enum: "active", "inactive", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. IANA timezone for local schedules.
     * @return string
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Shape $ (Value): string. Time the Location last changed. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): string. Address validation status. Value enum: "not_validated", "validated", "merchant_verified".
     * @return string
     */
    public function getValidationStatus(): string { return $this->get('validation_status'); }
    public function hasValidationStatus(): bool { return $this->has('validation_status'); }
    /** Shape $ (Value): integer string. Optimistic-concurrency version that advances on every Location change. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

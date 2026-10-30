<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null $address
 * @property-read LocationCoordinateInput|array<array-key, mixed>|\stdClass $coordinate
 * @property-read string|null $coordinate_source
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $external_reference_id
 * @property-read int $geography_version
 * @property-read bool $inventory_allocation_enabled
 * @property-read string $location_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $normalized_address
 * @property-read string $status
 * @property-read string $timezone
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $validation_status
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class LocationInput extends Model {
    /** @param array{'address': array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null, 'coordinate'?: LocationCoordinateInput|array<array-key, mixed>|\stdClass, 'coordinate_source'?: string|null, 'created_at': string|\DateTimeInterface, 'external_reference_id'?: string, 'geography_version': int, 'inventory_allocation_enabled': bool, 'location_id': string, 'metadata': MetadataMapInput|array<array-key, mixed>|\stdClass, 'name': string, 'normalized_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'status': string, 'timezone': string, 'updated_at': string|\DateTimeInterface, 'validation_status': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationInput')); }
    /** Published postal address. anyOf[1] (Value): {@see AddressInput}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. anyOf[2] (Value): null.
     * @return array{'city'?: string, 'country': string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object|null
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Published geographic coordinate. A latitude and longitude for a merchant location.
     * @return LocationCoordinateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): mixed { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Source of the stored latitude and longitude. Value enum: "merchant_supplied", "geocoded", null.
     * @return string|null
     * @throws SdkError When coordinate_source is omitted; use hasCoordinateSource() or valueOrDefault().
     */
    public function getCoordinateSource(): string|null { return $this->get('coordinate_source'); }
    public function hasCoordinateSource(): bool { return $this->has('coordinate_source'); }
    /** Time the Location was created. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Read-only version that advances only on geography changes and is pinned by tax and delivery dependencies. It is not a request fence. Format: uint64. minimum: 0.
     * @return int
     * @throws SdkError When geography_version is omitted; use hasGeographyVersion() or valueOrDefault().
     */
    public function getGeographyVersion(): int { return $this->get('geography_version'); }
    public function hasGeographyVersion(): bool { return $this->has('geography_version'); }
    /** Whether this Location accepts inventory allocation. Always present, including false when allocation is not configured.
     * @return bool
     * @throws SdkError When inventory_allocation_enabled is omitted; use hasInventoryAllocationEnabled() or valueOrDefault().
     */
    public function getInventoryAllocationEnabled(): bool { return $this->get('inventory_allocation_enabled'); }
    public function hasInventoryAllocationEnabled(): bool { return $this->has('inventory_allocation_enabled'); }
    /** Stable Location ID.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Caller-owned metadata. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Merchant-facing Location name. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Provider-normalized address used for geography evaluation. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When normalized_address is omitted; use hasNormalizedAddress() or valueOrDefault().
     */
    public function getNormalizedAddress(): mixed { return $this->get('normalized_address'); }
    public function hasNormalizedAddress(): bool { return $this->has('normalized_address'); }
    /** Current Location lifecycle status. Value enum: "active", "inactive", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** IANA timezone for local schedules.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Time the Location last changed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Address validation status. Value enum: "not_validated", "validated", "merchant_verified".
     * @return string
     * @throws SdkError When validation_status is omitted; use hasValidationStatus() or valueOrDefault().
     */
    public function getValidationStatus(): string { return $this->get('validation_status'); }
    public function hasValidationStatus(): bool { return $this->has('validation_status'); }
    /** Optimistic-concurrency version that advances on every Location change. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

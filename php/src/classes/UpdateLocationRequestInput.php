<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LocationAddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read array{'latitude': int|float, 'longitude': int|float, ...}|object|null $coordinate
 * @property-read string|null $coordinate_source
 * @property-read string $expected_version
 * @property-read string|null $external_reference_id
 * @property-read bool $inventory_allocation_enabled
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateLocationRequestInput extends Model {
    /** @param array{'address'?: LocationAddressRequestInput|array<array-key, mixed>|\stdClass, 'coordinate'?: array{'latitude': int|float, 'longitude': int|float, ...}|object|null, 'coordinate_source'?: string|null, 'expected_version'?: string, 'external_reference_id'?: string|null, 'inventory_allocation_enabled'?: bool, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string, 'timezone'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateLocationRequestInput')); }
    /** Shape $ (Value): {@see LocationAddressRequestInput}. Complete replacement postal address, validated as on create. Requires coordinate in the same request, including null to clear it. The street address you supply when creating or updating a merchant location. Send null on an optional field to clear it.
     * @return LocationAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): {@see LocationCoordinateInput} or null. Complete replacement coordinate. Send null to clear both coordinate and coordinate_source. A non-null value requires coordinate_source in the same request. Shape $.anyOf[1] (Value): {@see LocationCoordinateInput}. A latitude and longitude for a merchant location. Shape $.anyOf[2] (Value): null.
     * @return array{'latitude': int|float, 'longitude': int|float, ...}|object|null
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): mixed { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Shape $ (Value): string or null. Source of the coordinate sent in the same request. A non-null coordinate requires merchant_supplied or geocoded. Send null only with coordinate: null to clear both fields. Value enum: "merchant_supplied", "geocoded", null.
     * @return string|null
     * @throws SdkError When coordinate_source is omitted; use hasCoordinateSource() or valueOrDefault().
     */
    public function getCoordinateSource(): string|null { return $this->get('coordinate_source'); }
    public function hasCoordinateSource(): bool { return $this->has('coordinate_source'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Caller-owned identifier for this resource in an external system. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory_locations.write in addition to the route scope.
     * @return bool
     * @throws SdkError When inventory_allocation_enabled is omitted; use hasInventoryAllocationEnabled() or valueOrDefault().
     */
    public function getInventoryAllocationEnabled(): bool { return $this->get('inventory_allocation_enabled'); }
    public function hasInventoryAllocationEnabled(): bool { return $this->has('inventory_allocation_enabled'); }
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. maxProperties: 50. Shape $.* (Value): string or null. minLength: 1. maxLength: 4096.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.  Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. IANA timezone for local schedules, validated as on create. Can be updated without address. minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

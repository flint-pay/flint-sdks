<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LocationAddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read LocationCoordinateInput|array<array-key, mixed>|\stdClass $coordinate
 * @property-read string|null $coordinate_source
 * @property-read string $external_reference_id
 * @property-read bool $inventory_allocation_enabled
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateLocationRequestInput extends Model {
    /** @param array{'address': LocationAddressRequestInput|array<array-key, mixed>|\stdClass, 'coordinate'?: LocationCoordinateInput|array<array-key, mixed>|\stdClass, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory_allocation_enabled'?: bool, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status'?: string, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateLocationRequestInput')); }
    /** Shape $ (Value): {@see LocationAddressRequestInput}. The street address you supply when creating or updating a merchant location. Send null on an optional field to clear it.
     * @return LocationAddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): {@see LocationCoordinateInput}. A latitude and longitude for a merchant location.
     * @return LocationCoordinateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): mixed { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Shape $ (Value): string or null. Send null to clear it. Value enum: "merchant_supplied", "geocoded", null.
     * @return string|null
     * @throws SdkError When coordinate_source is omitted; use hasCoordinateSource() or valueOrDefault().
     */
    public function getCoordinateSource(): string|null { return $this->get('coordinate_source'); }
    public function hasCoordinateSource(): bool { return $this->has('coordinate_source'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): boolean. Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory_locations.write in addition to the route scope. Default: false.
     * @return bool
     * @throws SdkError When inventory_allocation_enabled is omitted; use hasInventoryAllocationEnabled() or valueOrDefault().
     */
    public function getInventoryAllocationEnabled(): bool { return $this->get('inventory_allocation_enabled'); }
    public function hasInventoryAllocationEnabled(): bool { return $this->has('inventory_allocation_enabled'); }
    /** Shape $ (Value): Map of string. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. maxProperties: 50. Shape $.* (Value): string. minLength: 1. maxLength: 4096.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read LocationCoordinateRequestInput|array<array-key, mixed>|\stdClass $coordinate
 * @property-read string|null $coordinate_source
 * @property-read string $external_reference_id
 * @property-read bool $inventory_allocation_enabled
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateLocationRequestInput extends Model {
    /** @param array{'address': AddressRequestInput|array<array-key, mixed>|\stdClass, 'coordinate'?: LocationCoordinateRequestInput|array<array-key, mixed>|\stdClass, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory_allocation_enabled'?: bool, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'status'?: string, 'timezone': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateLocationRequestInput')); }
    /** A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** A latitude and longitude for a merchant location.
     * @return LocationCoordinateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): mixed { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** Send null to clear it. Value enum: "merchant_supplied", "geocoded", null.
     * @return string|null
     * @throws SdkError When coordinate_source is omitted; use hasCoordinateSource() or valueOrDefault().
     */
    public function getCoordinateSource(): string|null { return $this->get('coordinate_source'); }
    public function hasCoordinateSource(): bool { return $this->has('coordinate_source'); }
    /** Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Whether this Location accepts inventory allocation. Sending this field requires commerce.inventory.allocation.write in addition to the route scope. Default: false.
     * @return bool
     * @throws SdkError When inventory_allocation_enabled is omitted; use hasInventoryAllocationEnabled() or valueOrDefault().
     */
    public function getInventoryAllocationEnabled(): bool { return $this->get('inventory_allocation_enabled'); }
    public function hasInventoryAllocationEnabled(): bool { return $this->has('inventory_allocation_enabled'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Default: "active". Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

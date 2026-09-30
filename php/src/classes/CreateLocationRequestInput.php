<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LocationAddressInput|array<array-key, mixed>|\stdClass $address
 * @property-read LocationCoordinateInput|array<array-key, mixed>|\stdClass $coordinate
 * @property-read string|null $coordinate_source
 * @property-read string $external_reference_id
 * @property-read LocationInventoryRequestInput|array<array-key, mixed>|\stdClass $inventory
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateLocationRequestInput extends Model {
    /** @param array{'address': LocationAddressInput|array<array-key, mixed>|\stdClass, 'coordinate'?: LocationCoordinateInput|array<array-key, mixed>|\stdClass, 'coordinate_source'?: string|null, 'external_reference_id'?: string, 'inventory'?: LocationInventoryRequestInput|array<array-key, mixed>|\stdClass, 'metadata'?: array<array-key, string>|\stdClass, 'name': string, 'status'?: string, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateLocationRequestInput')); }
    /** @return LocationAddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return LocationCoordinateInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): mixed { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** @return string|null
     * @throws SdkError When coordinate_source is omitted; use hasCoordinateSource() or valueOrDefault().
     */
    public function getCoordinateSource(): string|null { return $this->get('coordinate_source'); }
    public function hasCoordinateSource(): bool { return $this->has('coordinate_source'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return LocationInventoryRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory is omitted; use hasInventory() or valueOrDefault().
     */
    public function getInventory(): mixed { return $this->get('inventory'); }
    public function hasInventory(): bool { return $this->has('inventory'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

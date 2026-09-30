<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object $address
 * @property-read array{'latitude'?: int|float, 'longitude'?: int|float, ...}|object $coordinate
 * @property-read string|null $coordinate_source
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $external_reference_id
 * @property-read string $geography_revision
 * @property-read array{'allocation_status': string, 'created_at': string|\DateTimeInterface, 'inventory_revision': string, 'updated_at': string|\DateTimeInterface, ...}|object $inventory
 * @property-read string $location_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string $name
 * @property-read array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object $normalized_address
 * @property-read string $status
 * @property-read string $timezone
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $validation_failure_reason
 * @property-read string $validation_status
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class LocationInput extends Model {
    /** @param array{'address'?: array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object, 'coordinate'?: array{'latitude'?: int|float, 'longitude'?: int|float, ...}|object, 'coordinate_source'?: string|null, 'created_at': string|\DateTimeInterface, 'external_reference_id'?: string, 'geography_revision': string, 'inventory'?: array{'allocation_status': string, 'created_at': string|\DateTimeInterface, 'inventory_revision': string, 'updated_at': string|\DateTimeInterface, ...}|object, 'location_id': string, 'metadata': array<array-key, string>|\stdClass, 'name': string, 'normalized_address'?: array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object, 'status': string, 'timezone': string, 'updated_at': string|\DateTimeInterface, 'validation_failure_reason'?: string, 'validation_status': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationInput')); }
    /** @return array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): array|object { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return array{'latitude'?: int|float, 'longitude'?: int|float, ...}|object
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): array|object { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** @return string|null
     * @throws SdkError When coordinate_source is omitted; use hasCoordinateSource() or valueOrDefault().
     */
    public function getCoordinateSource(): string|null { return $this->get('coordinate_source'); }
    public function hasCoordinateSource(): bool { return $this->has('coordinate_source'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When geography_revision is omitted; use hasGeographyRevision() or valueOrDefault().
     */
    public function getGeographyRevision(): string { return $this->get('geography_revision'); }
    public function hasGeographyRevision(): bool { return $this->has('geography_revision'); }
    /** @return array{'allocation_status': string, 'created_at': string|\DateTimeInterface, 'inventory_revision': string, 'updated_at': string|\DateTimeInterface, ...}|object
     * @throws SdkError When inventory is omitted; use hasInventory() or valueOrDefault().
     */
    public function getInventory(): array|object { return $this->get('inventory'); }
    public function hasInventory(): bool { return $this->has('inventory'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
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
    /** @return array{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string, ...}|object
     * @throws SdkError When normalized_address is omitted; use hasNormalizedAddress() or valueOrDefault().
     */
    public function getNormalizedAddress(): array|object { return $this->get('normalized_address'); }
    public function hasNormalizedAddress(): bool { return $this->has('normalized_address'); }
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
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When validation_failure_reason is omitted; use hasValidationFailureReason() or valueOrDefault().
     */
    public function getValidationFailureReason(): string { return $this->get('validation_failure_reason'); }
    public function hasValidationFailureReason(): bool { return $this->has('validation_failure_reason'); }
    /** @return string
     * @throws SdkError When validation_status is omitted; use hasValidationStatus() or valueOrDefault().
     */
    public function getValidationStatus(): string { return $this->get('validation_status'); }
    public function hasValidationStatus(): bool { return $this->has('validation_status'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LocationAddress $address
 * @property-read LocationCoordinate $coordinate
 * @property-read string|null $coordinate_source
 * @property-read string $created_at
 * @property-read string $external_reference_id
 * @property-read string $geography_revision
 * @property-read LocationInventory $inventory
 * @property-read string $location_id
 * @property-read array<array-key, string> $metadata
 * @property-read string $name
 * @property-read LocationAddress $normalized_address
 * @property-read string $status
 * @property-read string $timezone
 * @property-read string $updated_at
 * @property-read string $validation_failure_reason
 * @property-read string $validation_status
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class Location extends Model {
    /** @param array{'address'?: object{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string}, 'coordinate'?: object{'latitude'?: float, 'longitude'?: float}, 'coordinate_source'?: string|null, 'created_at': string, 'external_reference_id'?: string, 'geography_revision': string, 'inventory'?: object{'allocation_status': string, 'created_at': string, 'inventory_revision': string, 'updated_at': string}, 'location_id': string, 'metadata': \stdClass, 'name': string, 'normalized_address'?: object{'city'?: string, 'country'?: string, 'line1'?: string, 'line2'?: string, 'postal_code'?: string, 'state'?: string}, 'status': string, 'timezone': string, 'updated_at': string, 'validation_failure_reason'?: string, 'validation_status': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Location')); }
    /** @return LocationAddress
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): LocationAddress { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return LocationCoordinate
     * @throws SdkError When coordinate is omitted; use hasCoordinate() or valueOrDefault().
     */
    public function getCoordinate(): LocationCoordinate { return $this->get('coordinate'); }
    public function hasCoordinate(): bool { return $this->has('coordinate'); }
    /** @return string|null
     * @throws SdkError When coordinate_source is omitted; use hasCoordinateSource() or valueOrDefault().
     */
    public function getCoordinateSource(): string|null { return $this->get('coordinate_source'); }
    public function hasCoordinateSource(): bool { return $this->has('coordinate_source'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
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
    /** @return LocationInventory
     * @throws SdkError When inventory is omitted; use hasInventory() or valueOrDefault().
     */
    public function getInventory(): LocationInventory { return $this->get('inventory'); }
    public function hasInventory(): bool { return $this->has('inventory'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return LocationAddress
     * @throws SdkError When normalized_address is omitted; use hasNormalizedAddress() or valueOrDefault().
     */
    public function getNormalizedAddress(): LocationAddress { return $this->get('normalized_address'); }
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
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
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

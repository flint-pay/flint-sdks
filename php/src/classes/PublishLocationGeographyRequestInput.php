<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read LocationAddressInput|array<array-key, mixed>|\stdClass $address
 * @property-read LocationCoordinateInput|array<array-key, mixed>|\stdClass $coordinate
 * @property-read string|null $coordinate_source
 * @property-read string $expected_geography_revision
 * @property-read string $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class PublishLocationGeographyRequestInput extends Model {
    /** @param array{'address': LocationAddressInput|array<array-key, mixed>|\stdClass, 'coordinate'?: LocationCoordinateInput|array<array-key, mixed>|\stdClass, 'coordinate_source'?: string|null, 'expected_geography_revision': string, 'timezone': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PublishLocationGeographyRequestInput')); }
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
     * @throws SdkError When expected_geography_revision is omitted; use hasExpectedGeographyRevision() or valueOrDefault().
     */
    public function getExpectedGeographyRevision(): string { return $this->get('expected_geography_revision'); }
    public function hasExpectedGeographyRevision(): bool { return $this->has('expected_geography_revision'); }
    /** @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

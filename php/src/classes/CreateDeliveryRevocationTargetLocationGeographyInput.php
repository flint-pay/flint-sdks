<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $location_geography_version
 * @property-read string $location_id
 * @property-read string $target_type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeliveryRevocationTargetLocationGeographyInput extends Model {
    /** @param array{'location_geography_version': int, 'location_id': string, 'target_type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeliveryRevocationTargetLocationGeographyInput')); }
    /** Exact recorded geography version of location_id to fence. Future and unrecorded versions are not accepted. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When location_geography_version is omitted; use hasLocationGeographyVersion() or valueOrDefault().
     */
    public function getLocationGeographyVersion(): int { return $this->get('location_geography_version'); }
    public function hasLocationGeographyVersion(): bool { return $this->has('location_geography_version'); }
    /** ID of the Location that recorded the targeted geography version. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Fences one geography version recorded by the named Location. Value enum: "location_geography".
     * @return string
     * @throws SdkError When target_type is omitted; use hasTargetType() or valueOrDefault().
     */
    public function getTargetType(): string { return $this->get('target_type'); }
    public function hasTargetType(): bool { return $this->has('target_type'); }
}

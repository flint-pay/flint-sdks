<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|float $latitude
 * @property-read int|float $longitude
 * Presence-aware input; omitted fields throw when accessed. */
final class LocationCoordinateInput extends Model {
    /** @param array{'latitude'?: int|float, 'longitude'?: int|float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationCoordinateInput')); }
    /** @return int|float
     * @throws SdkError When latitude is omitted; use hasLatitude() or valueOrDefault().
     */
    public function getLatitude(): int|float { return $this->get('latitude'); }
    public function hasLatitude(): bool { return $this->has('latitude'); }
    /** @return int|float
     * @throws SdkError When longitude is omitted; use hasLongitude() or valueOrDefault().
     */
    public function getLongitude(): int|float { return $this->get('longitude'); }
    public function hasLongitude(): bool { return $this->has('longitude'); }
}

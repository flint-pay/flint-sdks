<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read float $latitude
 * @property-read float $longitude
 * Presence-aware response; omitted optional fields return null. */
final class LocationCoordinate extends Model {
    /** @param array{'latitude': float, 'longitude': float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationCoordinate')); }
    /** Latitude between -90 and 90. Responses always include this field, including 0.
     * @return float
     */
    public function getLatitude(): float { return $this->get('latitude'); }
    public function hasLatitude(): bool { return $this->has('latitude'); }
    /** Longitude between -180 and 180. Responses always include this field, including 0.
     * @return float
     */
    public function getLongitude(): float { return $this->get('longitude'); }
    public function hasLongitude(): bool { return $this->has('longitude'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read float $latitude
 * @property-read float $longitude
 * Presence-aware response; omitted fields throw when accessed. */
final class LocationCoordinate extends Model {
    /** @param array{'latitude'?: float, 'longitude'?: float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LocationCoordinate')); }
    /** @return float
     * @throws SdkError When latitude is omitted; use hasLatitude() or valueOrDefault().
     */
    public function getLatitude(): float { return $this->get('latitude'); }
    public function hasLatitude(): bool { return $this->has('latitude'); }
    /** @return float
     * @throws SdkError When longitude is omitted; use hasLongitude() or valueOrDefault().
     */
    public function getLongitude(): float { return $this->get('longitude'); }
    public function hasLongitude(): bool { return $this->has('longitude'); }
}

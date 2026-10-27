<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read float $latitude
 * @property-read float $longitude
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryQuoteBuyerLocationAddressCoordinate extends Model {
    /** @param array{'latitude': float, 'longitude': float, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryQuoteBuyerLocationAddressCoordinate')); }
    /** Shape $ (Value): number. minimum: -90. maximum: 90.
     * @return float
     */
    public function getLatitude(): float { return $this->get('latitude'); }
    public function hasLatitude(): bool { return $this->has('latitude'); }
    /** Shape $ (Value): number. minimum: -180. maximum: 180.
     * @return float
     */
    public function getLongitude(): float { return $this->get('longitude'); }
    public function hasLongitude(): bool { return $this->has('longitude'); }
}

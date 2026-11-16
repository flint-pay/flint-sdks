<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|float|null $latitude
 * @property-read int|float|null $longitude
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryCoordinateRequestPreviousAttributesInput extends Model {
    /** @param array{'latitude'?: int|float|null, 'longitude'?: int|float|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryCoordinateRequestPreviousAttributesInput')); }
    /** Latitude in degrees, from -90 to 90. anyOf[1] (Value): number. Latitude in degrees, from -90 to 90. minimum: -90. maximum: 90. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When latitude is omitted; use hasLatitude() or valueOrDefault().
     */
    public function getLatitude(): mixed { return $this->get('latitude'); }
    public function hasLatitude(): bool { return $this->has('latitude'); }
    /** Longitude in degrees, from -180 to 180. anyOf[1] (Value): number. Longitude in degrees, from -180 to 180. minimum: -180. maximum: 180. anyOf[2] (Value): null.
     * @return int|float|null
     * @throws SdkError When longitude is omitted; use hasLongitude() or valueOrDefault().
     */
    public function getLongitude(): mixed { return $this->get('longitude'); }
    public function hasLongitude(): bool { return $this->has('longitude'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $location_id
 * @property-read bool|null $method_origin
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRadiusOriginPreviousAttributesInput extends Model {
    /** @param array{'location_id'?: string|null, 'method_origin'?: bool|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRadiusOriginPreviousAttributesInput')); }
    /** ID of the Location to measure from. Send either `location_id` or `method_origin`. anyOf[1] (Value): string. ID of the Location to measure from. Send either `location_id` or `method_origin`. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): mixed { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`. anyOf[1] (Value): boolean. Send `true` to measure from the origin of the delivery method. Send either `location_id` or `method_origin`. anyOf[2] (Value): null.
     * @return bool|null
     * @throws SdkError When method_origin is omitted; use hasMethodOrigin() or valueOrDefault().
     */
    public function getMethodOrigin(): mixed { return $this->get('method_origin'); }
    public function hasMethodOrigin(): bool { return $this->has('method_origin'); }
}

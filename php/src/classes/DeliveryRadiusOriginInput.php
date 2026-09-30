<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $location_id
 * @property-read bool $method_origin
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryRadiusOriginInput extends Model {
    /** @param array{'location_id'?: string, 'method_origin'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRadiusOriginInput')); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return bool
     * @throws SdkError When method_origin is omitted; use hasMethodOrigin() or valueOrDefault().
     */
    public function getMethodOrigin(): bool { return $this->get('method_origin'); }
    public function hasMethodOrigin(): bool { return $this->has('method_origin'); }
}

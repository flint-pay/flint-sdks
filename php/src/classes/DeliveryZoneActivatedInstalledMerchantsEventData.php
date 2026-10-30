<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryZoneActivatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneActivatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneActivatedInstalledMerchantsEventData')); }
    /** A geographic area served by a delivery method.
     * @return DeliveryZoneActivatedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryZoneActivatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

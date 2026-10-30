<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryZoneDeactivatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneDeactivatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneDeactivatedInstalledMerchantsEventData')); }
    /** A geographic area served by a delivery method.
     * @return DeliveryZoneDeactivatedInstalledMerchantsEventDataObject
     */
    public function getObject(): DeliveryZoneDeactivatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

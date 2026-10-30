<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ShipmentCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ShipmentCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentCreatedInstalledMerchantsEventData')); }
    /** A shipment carrying fulfilled order items.
     * @return ShipmentCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): ShipmentCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ShipmentCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ShipmentCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentCreatedMerchantEventData')); }
    /** A shipment carrying fulfilled order items.
     * @return ShipmentCreatedMerchantEventDataObject
     */
    public function getObject(): ShipmentCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

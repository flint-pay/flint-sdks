<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ShipmentUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class ShipmentUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ShipmentUpdatedMerchantEventData')); }
    /** A shipment carrying fulfilled order items.
     * @return ShipmentUpdatedMerchantEventDataObject
     */
    public function getObject(): ShipmentUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

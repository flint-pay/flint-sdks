<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryZoneDeactivatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneDeactivatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneDeactivatedMerchantEventData')); }
    /** A geographic area served by a delivery method.
     * @return DeliveryZoneDeactivatedMerchantEventDataObject
     */
    public function getObject(): DeliveryZoneDeactivatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

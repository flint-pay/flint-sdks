<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryZoneUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneUpdatedMerchantEventData')); }
    /** A geographic area served by a delivery method.
     * @return DeliveryZoneUpdatedMerchantEventDataObject
     */
    public function getObject(): DeliveryZoneUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

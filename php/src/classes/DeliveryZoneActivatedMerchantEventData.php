<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryZoneActivatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneActivatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneActivatedMerchantEventData')); }
    /** A geographic area served by a delivery method.
     * @return DeliveryZoneActivatedMerchantEventDataObject
     */
    public function getObject(): DeliveryZoneActivatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

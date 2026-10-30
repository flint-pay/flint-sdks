<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryZoneCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneCreatedMerchantEventData')); }
    /** A geographic area served by a delivery method.
     * @return DeliveryZoneCreatedMerchantEventDataObject
     */
    public function getObject(): DeliveryZoneCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryZoneArchivedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryZoneArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryZoneArchivedMerchantEventData')); }
    /** A geographic area served by a delivery method.
     * @return DeliveryZoneArchivedMerchantEventDataObject
     */
    public function getObject(): DeliveryZoneArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

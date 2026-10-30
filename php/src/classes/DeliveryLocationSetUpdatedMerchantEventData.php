<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryLocationSetUpdatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryLocationSetUpdatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryLocationSetUpdatedMerchantEventData')); }
    /** The locations available to a delivery method.
     * @return DeliveryLocationSetUpdatedMerchantEventDataObject
     */
    public function getObject(): DeliveryLocationSetUpdatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

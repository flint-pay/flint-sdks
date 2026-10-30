<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryMethodCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodCreatedMerchantEventData')); }
    /** A configured shipping, pickup, local delivery, or service option.
     * @return DeliveryMethodCreatedMerchantEventDataObject
     */
    public function getObject(): DeliveryMethodCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

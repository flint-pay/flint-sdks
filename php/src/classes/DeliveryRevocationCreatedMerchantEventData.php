<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryRevocationCreatedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryRevocationCreatedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryRevocationCreatedMerchantEventData')); }
    /** A withdrawal of a previously available delivery choice.
     * @return DeliveryRevocationCreatedMerchantEventDataObject
     */
    public function getObject(): DeliveryRevocationCreatedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

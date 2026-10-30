<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryMethodArchivedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryMethodArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryMethodArchivedMerchantEventData')); }
    /** A configured shipping, pickup, local delivery, or service option.
     * @return DeliveryMethodArchivedMerchantEventDataObject
     */
    public function getObject(): DeliveryMethodArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read DeliveryProfileArchivedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryProfileArchivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryProfileArchivedMerchantEventData')); }
    /** Reusable delivery rules assigned to catalog items.
     * @return DeliveryProfileArchivedMerchantEventDataObject
     */
    public function getObject(): DeliveryProfileArchivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryReservationActionRequiredMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationActionRequiredMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationActionRequiredMerchantEventData')); }
    /** A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.
     * @return InventoryReservationActionRequiredMerchantEventDataObject
     */
    public function getObject(): InventoryReservationActionRequiredMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

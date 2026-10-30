<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryReservationCommittedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationCommittedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationCommittedMerchantEventData')); }
    /** A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.
     * @return InventoryReservationCommittedMerchantEventDataObject
     */
    public function getObject(): InventoryReservationCommittedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

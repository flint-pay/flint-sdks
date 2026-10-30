<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryReservationReleasedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationReleasedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationReleasedMerchantEventData')); }
    /** A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.
     * @return InventoryReservationReleasedMerchantEventDataObject
     */
    public function getObject(): InventoryReservationReleasedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

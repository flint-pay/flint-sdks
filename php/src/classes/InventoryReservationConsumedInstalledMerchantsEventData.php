<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryReservationConsumedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationConsumedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationConsumedInstalledMerchantsEventData')); }
    /** A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.
     * @return InventoryReservationConsumedInstalledMerchantsEventDataObject
     */
    public function getObject(): InventoryReservationConsumedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

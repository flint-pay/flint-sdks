<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryCountAppliedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryCountAppliedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountAppliedInstalledMerchantsEventData')); }
    /** A physical count used to reconcile stock.
     * @return InventoryCountAppliedInstalledMerchantsEventDataObject
     */
    public function getObject(): InventoryCountAppliedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

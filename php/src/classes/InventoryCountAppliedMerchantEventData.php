<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryCountAppliedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryCountAppliedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountAppliedMerchantEventData')); }
    /** A physical count used to reconcile stock.
     * @return InventoryCountAppliedMerchantEventDataObject
     */
    public function getObject(): InventoryCountAppliedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

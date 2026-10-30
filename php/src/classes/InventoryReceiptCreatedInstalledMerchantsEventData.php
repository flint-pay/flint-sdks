<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryReceiptCreatedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReceiptCreatedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReceiptCreatedInstalledMerchantsEventData')); }
    /** Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them.
     * @return InventoryReceiptCreatedInstalledMerchantsEventDataObject
     */
    public function getObject(): InventoryReceiptCreatedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

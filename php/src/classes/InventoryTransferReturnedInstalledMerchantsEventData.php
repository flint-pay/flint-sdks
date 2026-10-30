<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryTransferReturnedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferReturnedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferReturnedInstalledMerchantsEventData')); }
    /** Stock moving between locations.
     * @return InventoryTransferReturnedInstalledMerchantsEventDataObject
     */
    public function getObject(): InventoryTransferReturnedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

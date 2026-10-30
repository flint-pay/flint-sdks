<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryTransferClosedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferClosedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferClosedInstalledMerchantsEventData')); }
    /** Stock moving between locations.
     * @return InventoryTransferClosedInstalledMerchantsEventDataObject
     */
    public function getObject(): InventoryTransferClosedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

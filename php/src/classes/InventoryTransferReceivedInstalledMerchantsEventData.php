<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryTransferReceivedInstalledMerchantsEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferReceivedInstalledMerchantsEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferReceivedInstalledMerchantsEventData')); }
    /** Stock moving between locations.
     * @return InventoryTransferReceivedInstalledMerchantsEventDataObject
     */
    public function getObject(): InventoryTransferReceivedInstalledMerchantsEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryTransferClosedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferClosedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferClosedMerchantEventData')); }
    /** Stock moving between locations.
     * @return InventoryTransferClosedMerchantEventDataObject
     */
    public function getObject(): InventoryTransferClosedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

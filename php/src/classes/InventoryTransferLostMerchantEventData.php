<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryTransferLostMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferLostMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferLostMerchantEventData')); }
    /** Stock moving between locations.
     * @return InventoryTransferLostMerchantEventDataObject
     */
    public function getObject(): InventoryTransferLostMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryTransferReceivedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferReceivedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferReceivedMerchantEventData')); }
    /** Stock moving between locations.
     * @return InventoryTransferReceivedMerchantEventDataObject
     */
    public function getObject(): InventoryTransferReceivedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

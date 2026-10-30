<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryTransferReturnedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferReturnedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferReturnedMerchantEventData')); }
    /** Stock moving between locations.
     * @return InventoryTransferReturnedMerchantEventDataObject
     */
    public function getObject(): InventoryTransferReturnedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

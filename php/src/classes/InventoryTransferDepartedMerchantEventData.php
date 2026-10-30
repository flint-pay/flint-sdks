<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryTransferDepartedMerchantEventDataObject $object
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferDepartedMerchantEventData extends Model {
    /** @param array{'object': \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferDepartedMerchantEventData')); }
    /** Stock moving between locations.
     * @return InventoryTransferDepartedMerchantEventDataObject
     */
    public function getObject(): InventoryTransferDepartedMerchantEventDataObject { return $this->get('object'); }
    public function hasObject(): bool { return $this->has('object'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_item_id
 * @property-read string $physical_condition
 * @property-read string $requested_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferLineRequestInput extends Model {
    /** @param array{'inventory_item_id': string, 'physical_condition'?: string, 'requested_quantity': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferLineRequestInput')); }
    /** @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** @return string
     * @throws SdkError When physical_condition is omitted; use hasPhysicalCondition() or valueOrDefault().
     */
    public function getPhysicalCondition(): string { return $this->get('physical_condition'); }
    public function hasPhysicalCondition(): bool { return $this->has('physical_condition'); }
    /** @return string
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): string { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $canceled_quantity
 * @property-read string $departed_quantity
 * @property-read string $inventory_item_id
 * @property-read string $inventory_transfer_line_id
 * @property-read string $lost_quantity
 * @property-read string $physical_condition
 * @property-read string $received_damaged_quantity
 * @property-read string $received_quality_control_quantity
 * @property-read string $received_quantity
 * @property-read string $received_quarantined_quantity
 * @property-read string $received_sellable_quantity
 * @property-read string $requested_quantity
 * @property-read string $returned_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferLineInput extends Model {
    /** @param array{'canceled_quantity': string, 'departed_quantity': string, 'inventory_item_id': string, 'inventory_transfer_line_id': string, 'lost_quantity': string, 'physical_condition': string, 'received_damaged_quantity': string, 'received_quality_control_quantity': string, 'received_quantity': string, 'received_quarantined_quantity': string, 'received_sellable_quantity': string, 'requested_quantity': string, 'returned_quantity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferLineInput')); }
    /** @return string
     * @throws SdkError When canceled_quantity is omitted; use hasCanceledQuantity() or valueOrDefault().
     */
    public function getCanceledQuantity(): string { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** @return string
     * @throws SdkError When departed_quantity is omitted; use hasDepartedQuantity() or valueOrDefault().
     */
    public function getDepartedQuantity(): string { return $this->get('departed_quantity'); }
    public function hasDepartedQuantity(): bool { return $this->has('departed_quantity'); }
    /** @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** @return string
     * @throws SdkError When inventory_transfer_line_id is omitted; use hasInventoryTransferLineId() or valueOrDefault().
     */
    public function getInventoryTransferLineId(): string { return $this->get('inventory_transfer_line_id'); }
    public function hasInventoryTransferLineId(): bool { return $this->has('inventory_transfer_line_id'); }
    /** @return string
     * @throws SdkError When lost_quantity is omitted; use hasLostQuantity() or valueOrDefault().
     */
    public function getLostQuantity(): string { return $this->get('lost_quantity'); }
    public function hasLostQuantity(): bool { return $this->has('lost_quantity'); }
    /** @return string
     * @throws SdkError When physical_condition is omitted; use hasPhysicalCondition() or valueOrDefault().
     */
    public function getPhysicalCondition(): string { return $this->get('physical_condition'); }
    public function hasPhysicalCondition(): bool { return $this->has('physical_condition'); }
    /** @return string
     * @throws SdkError When received_damaged_quantity is omitted; use hasReceivedDamagedQuantity() or valueOrDefault().
     */
    public function getReceivedDamagedQuantity(): string { return $this->get('received_damaged_quantity'); }
    public function hasReceivedDamagedQuantity(): bool { return $this->has('received_damaged_quantity'); }
    /** @return string
     * @throws SdkError When received_quality_control_quantity is omitted; use hasReceivedQualityControlQuantity() or valueOrDefault().
     */
    public function getReceivedQualityControlQuantity(): string { return $this->get('received_quality_control_quantity'); }
    public function hasReceivedQualityControlQuantity(): bool { return $this->has('received_quality_control_quantity'); }
    /** @return string
     * @throws SdkError When received_quantity is omitted; use hasReceivedQuantity() or valueOrDefault().
     */
    public function getReceivedQuantity(): string { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** @return string
     * @throws SdkError When received_quarantined_quantity is omitted; use hasReceivedQuarantinedQuantity() or valueOrDefault().
     */
    public function getReceivedQuarantinedQuantity(): string { return $this->get('received_quarantined_quantity'); }
    public function hasReceivedQuarantinedQuantity(): bool { return $this->has('received_quarantined_quantity'); }
    /** @return string
     * @throws SdkError When received_sellable_quantity is omitted; use hasReceivedSellableQuantity() or valueOrDefault().
     */
    public function getReceivedSellableQuantity(): string { return $this->get('received_sellable_quantity'); }
    public function hasReceivedSellableQuantity(): bool { return $this->has('received_sellable_quantity'); }
    /** @return string
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): string { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** @return string
     * @throws SdkError When returned_quantity is omitted; use hasReturnedQuantity() or valueOrDefault().
     */
    public function getReturnedQuantity(): string { return $this->get('returned_quantity'); }
    public function hasReturnedQuantity(): bool { return $this->has('returned_quantity'); }
}

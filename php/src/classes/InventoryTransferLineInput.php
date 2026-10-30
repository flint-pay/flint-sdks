<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $canceled_quantity
 * @property-read string $condition
 * @property-read int $departed_quantity
 * @property-read string $inventory_item_id
 * @property-read string $inventory_transfer_line_id
 * @property-read int $lost_quantity
 * @property-read int $received_damaged_quantity
 * @property-read int $received_quality_control_quantity
 * @property-read int $received_quantity
 * @property-read int $received_quarantined_quantity
 * @property-read int $received_sellable_quantity
 * @property-read int $requested_quantity
 * @property-read int $returned_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferLineInput extends Model {
    /** @param array{'canceled_quantity': int, 'condition': string, 'departed_quantity': int, 'inventory_item_id': string, 'inventory_transfer_line_id': string, 'lost_quantity': int, 'received_damaged_quantity': int, 'received_quality_control_quantity': int, 'received_quantity': int, 'received_quarantined_quantity': int, 'received_sellable_quantity': int, 'requested_quantity': int, 'returned_quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferLineInput')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When canceled_quantity is omitted; use hasCanceledQuantity() or valueOrDefault().
     */
    public function getCanceledQuantity(): int { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** Value enum: "sellable", "quality_control", "damaged", "quarantined".
     * @return string
     * @throws SdkError When condition is omitted; use hasCondition() or valueOrDefault().
     */
    public function getCondition(): string { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When departed_quantity is omitted; use hasDepartedQuantity() or valueOrDefault().
     */
    public function getDepartedQuantity(): int { return $this->get('departed_quantity'); }
    public function hasDepartedQuantity(): bool { return $this->has('departed_quantity'); }
    /** inventory_item_id
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** inventory_transfer_line_id
     * @return string
     * @throws SdkError When inventory_transfer_line_id is omitted; use hasInventoryTransferLineId() or valueOrDefault().
     */
    public function getInventoryTransferLineId(): string { return $this->get('inventory_transfer_line_id'); }
    public function hasInventoryTransferLineId(): bool { return $this->has('inventory_transfer_line_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When lost_quantity is omitted; use hasLostQuantity() or valueOrDefault().
     */
    public function getLostQuantity(): int { return $this->get('lost_quantity'); }
    public function hasLostQuantity(): bool { return $this->has('lost_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When received_damaged_quantity is omitted; use hasReceivedDamagedQuantity() or valueOrDefault().
     */
    public function getReceivedDamagedQuantity(): int { return $this->get('received_damaged_quantity'); }
    public function hasReceivedDamagedQuantity(): bool { return $this->has('received_damaged_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When received_quality_control_quantity is omitted; use hasReceivedQualityControlQuantity() or valueOrDefault().
     */
    public function getReceivedQualityControlQuantity(): int { return $this->get('received_quality_control_quantity'); }
    public function hasReceivedQualityControlQuantity(): bool { return $this->has('received_quality_control_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When received_quantity is omitted; use hasReceivedQuantity() or valueOrDefault().
     */
    public function getReceivedQuantity(): int { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When received_quarantined_quantity is omitted; use hasReceivedQuarantinedQuantity() or valueOrDefault().
     */
    public function getReceivedQuarantinedQuantity(): int { return $this->get('received_quarantined_quantity'); }
    public function hasReceivedQuarantinedQuantity(): bool { return $this->has('received_quarantined_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When received_sellable_quantity is omitted; use hasReceivedSellableQuantity() or valueOrDefault().
     */
    public function getReceivedSellableQuantity(): int { return $this->get('received_sellable_quantity'); }
    public function hasReceivedSellableQuantity(): bool { return $this->has('received_sellable_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): int { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When returned_quantity is omitted; use hasReturnedQuantity() or valueOrDefault().
     */
    public function getReturnedQuantity(): int { return $this->get('returned_quantity'); }
    public function hasReturnedQuantity(): bool { return $this->has('returned_quantity'); }
}

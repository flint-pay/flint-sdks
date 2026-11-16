<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $canceled_quantity
 * @property-read string|null $condition
 * @property-read int|null $departed_quantity
 * @property-read string|null $inventory_item_id
 * @property-read string|null $inventory_transfer_line_id
 * @property-read int|null $lost_quantity
 * @property-read int|null $received_damaged_quantity
 * @property-read int|null $received_quality_control_quantity
 * @property-read int|null $received_quantity
 * @property-read int|null $received_quarantined_quantity
 * @property-read int|null $received_sellable_quantity
 * @property-read int|null $requested_quantity
 * @property-read int|null $returned_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferLinePreviousAttributesInput extends Model {
    /** @param array{'canceled_quantity'?: int|null, 'condition'?: string|null, 'departed_quantity'?: int|null, 'inventory_item_id'?: string|null, 'inventory_transfer_line_id'?: string|null, 'lost_quantity'?: int|null, 'received_damaged_quantity'?: int|null, 'received_quality_control_quantity'?: int|null, 'received_quantity'?: int|null, 'received_quarantined_quantity'?: int|null, 'received_sellable_quantity'?: int|null, 'requested_quantity'?: int|null, 'returned_quantity'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferLinePreviousAttributesInput')); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When canceled_quantity is omitted; use hasCanceledQuantity() or valueOrDefault().
     */
    public function getCanceledQuantity(): mixed { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** Condition of the units being moved. Value enum: "sellable", "quality_control", "damaged", "quarantined". anyOf[1] (Value): string. Condition of the units being moved. Value enum: "sellable", "quality_control", "damaged", "quarantined". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When condition is omitted; use hasCondition() or valueOrDefault().
     */
    public function getCondition(): mixed { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When departed_quantity is omitted; use hasDepartedQuantity() or valueOrDefault().
     */
    public function getDepartedQuantity(): mixed { return $this->get('departed_quantity'); }
    public function hasDepartedQuantity(): bool { return $this->has('departed_quantity'); }
    /** ID of the inventory item to move. anyOf[1] (Value): string. ID of the inventory item to move. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): mixed { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Unique identifier for this inventory transfer line, prefixed `invtrln_`. anyOf[1] (Value): string. Unique identifier for this inventory transfer line, prefixed `invtrln_`. Example: "invtrln_01KEZF7C00CK297J6QVV5J0PFV". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_transfer_line_id is omitted; use hasInventoryTransferLineId() or valueOrDefault().
     */
    public function getInventoryTransferLineId(): mixed { return $this->get('inventory_transfer_line_id'); }
    public function hasInventoryTransferLineId(): bool { return $this->has('inventory_transfer_line_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When lost_quantity is omitted; use hasLostQuantity() or valueOrDefault().
     */
    public function getLostQuantity(): mixed { return $this->get('lost_quantity'); }
    public function hasLostQuantity(): bool { return $this->has('lost_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When received_damaged_quantity is omitted; use hasReceivedDamagedQuantity() or valueOrDefault().
     */
    public function getReceivedDamagedQuantity(): mixed { return $this->get('received_damaged_quantity'); }
    public function hasReceivedDamagedQuantity(): bool { return $this->has('received_damaged_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When received_quality_control_quantity is omitted; use hasReceivedQualityControlQuantity() or valueOrDefault().
     */
    public function getReceivedQualityControlQuantity(): mixed { return $this->get('received_quality_control_quantity'); }
    public function hasReceivedQualityControlQuantity(): bool { return $this->has('received_quality_control_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When received_quantity is omitted; use hasReceivedQuantity() or valueOrDefault().
     */
    public function getReceivedQuantity(): mixed { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When received_quarantined_quantity is omitted; use hasReceivedQuarantinedQuantity() or valueOrDefault().
     */
    public function getReceivedQuarantinedQuantity(): mixed { return $this->get('received_quarantined_quantity'); }
    public function hasReceivedQuarantinedQuantity(): bool { return $this->has('received_quarantined_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When received_sellable_quantity is omitted; use hasReceivedSellableQuantity() or valueOrDefault().
     */
    public function getReceivedSellableQuantity(): mixed { return $this->get('received_sellable_quantity'); }
    public function hasReceivedSellableQuantity(): bool { return $this->has('received_sellable_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When requested_quantity is omitted; use hasRequestedQuantity() or valueOrDefault().
     */
    public function getRequestedQuantity(): mixed { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When returned_quantity is omitted; use hasReturnedQuantity() or valueOrDefault().
     */
    public function getReturnedQuantity(): mixed { return $this->get('returned_quantity'); }
    public function hasReturnedQuantity(): bool { return $this->has('returned_quantity'); }
}

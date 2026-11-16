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
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferLinePreviousAttributes extends Model {
    /** @param array{'canceled_quantity'?: mixed, 'condition'?: mixed, 'departed_quantity'?: mixed, 'inventory_item_id'?: mixed, 'inventory_transfer_line_id'?: mixed, 'lost_quantity'?: mixed, 'received_damaged_quantity'?: mixed, 'received_quality_control_quantity'?: mixed, 'received_quantity'?: mixed, 'received_quarantined_quantity'?: mixed, 'received_sellable_quantity'?: mixed, 'requested_quantity'?: mixed, 'returned_quantity'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferLinePreviousAttributes')); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCanceledQuantity(): int|null { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** Condition of the units being moved. Value enum: "sellable", "quality_control", "damaged", "quarantined". anyOf[1] (Value): string. Condition of the units being moved. Value enum: "sellable", "quality_control", "damaged", "quarantined". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCondition(): string|null { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDepartedQuantity(): int|null { return $this->get('departed_quantity'); }
    public function hasDepartedQuantity(): bool { return $this->has('departed_quantity'); }
    /** ID of the inventory item to move. anyOf[1] (Value): string. ID of the inventory item to move. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryItemId(): string|null { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Unique identifier for this inventory transfer line, prefixed `invtrln_`. anyOf[1] (Value): string. Unique identifier for this inventory transfer line, prefixed `invtrln_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryTransferLineId(): string|null { return $this->get('inventory_transfer_line_id'); }
    public function hasInventoryTransferLineId(): bool { return $this->has('inventory_transfer_line_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getLostQuantity(): int|null { return $this->get('lost_quantity'); }
    public function hasLostQuantity(): bool { return $this->has('lost_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReceivedDamagedQuantity(): int|null { return $this->get('received_damaged_quantity'); }
    public function hasReceivedDamagedQuantity(): bool { return $this->has('received_damaged_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReceivedQualityControlQuantity(): int|null { return $this->get('received_quality_control_quantity'); }
    public function hasReceivedQualityControlQuantity(): bool { return $this->has('received_quality_control_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReceivedQuantity(): int|null { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReceivedQuarantinedQuantity(): int|null { return $this->get('received_quarantined_quantity'); }
    public function hasReceivedQuarantinedQuantity(): bool { return $this->has('received_quarantined_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReceivedSellableQuantity(): int|null { return $this->get('received_sellable_quantity'); }
    public function hasReceivedSellableQuantity(): bool { return $this->has('received_sellable_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getRequestedQuantity(): int|null { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getReturnedQuantity(): int|null { return $this->get('returned_quantity'); }
    public function hasReturnedQuantity(): bool { return $this->has('returned_quantity'); }
}

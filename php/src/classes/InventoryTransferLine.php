<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $canceled_quantity
 * @property-read string $condition
 * @property-read string $departed_quantity
 * @property-read string $inventory_item_id
 * @property-read string $inventory_transfer_line_id
 * @property-read string $lost_quantity
 * @property-read string $received_damaged_quantity
 * @property-read string $received_quality_control_quantity
 * @property-read string $received_quantity
 * @property-read string $received_quarantined_quantity
 * @property-read string $received_sellable_quantity
 * @property-read string $requested_quantity
 * @property-read string $returned_quantity
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferLine extends Model {
    /** @param array{'canceled_quantity': string, 'condition': string, 'departed_quantity': string, 'inventory_item_id': string, 'inventory_transfer_line_id': string, 'lost_quantity': string, 'received_damaged_quantity': string, 'received_quality_control_quantity': string, 'received_quantity': string, 'received_quarantined_quantity': string, 'received_sellable_quantity': string, 'requested_quantity': string, 'returned_quantity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferLine')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getCanceledQuantity(): string { return $this->get('canceled_quantity'); }
    public function hasCanceledQuantity(): bool { return $this->has('canceled_quantity'); }
    /** Shape $ (Value): string.  Value enum: "sellable", "quality_control", "damaged", "quarantined".
     * @return string
     */
    public function getCondition(): string { return $this->get('condition'); }
    public function hasCondition(): bool { return $this->has('condition'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getDepartedQuantity(): string { return $this->get('departed_quantity'); }
    public function hasDepartedQuantity(): bool { return $this->has('departed_quantity'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryTransferLineId(): string { return $this->get('inventory_transfer_line_id'); }
    public function hasInventoryTransferLineId(): bool { return $this->has('inventory_transfer_line_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getLostQuantity(): string { return $this->get('lost_quantity'); }
    public function hasLostQuantity(): bool { return $this->has('lost_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getReceivedDamagedQuantity(): string { return $this->get('received_damaged_quantity'); }
    public function hasReceivedDamagedQuantity(): bool { return $this->has('received_damaged_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getReceivedQualityControlQuantity(): string { return $this->get('received_quality_control_quantity'); }
    public function hasReceivedQualityControlQuantity(): bool { return $this->has('received_quality_control_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getReceivedQuantity(): string { return $this->get('received_quantity'); }
    public function hasReceivedQuantity(): bool { return $this->has('received_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getReceivedQuarantinedQuantity(): string { return $this->get('received_quarantined_quantity'); }
    public function hasReceivedQuarantinedQuantity(): bool { return $this->has('received_quarantined_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getReceivedSellableQuantity(): string { return $this->get('received_sellable_quantity'); }
    public function hasReceivedSellableQuantity(): bool { return $this->has('received_sellable_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getRequestedQuantity(): string { return $this->get('requested_quantity'); }
    public function hasRequestedQuantity(): bool { return $this->has('requested_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getReturnedQuantity(): string { return $this->get('returned_quantity'); }
    public function hasReturnedQuantity(): bool { return $this->has('returned_quantity'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $allocated_quantity
 * @property-read int $at_risk_committed_quantity
 * @property-read int $at_risk_held_quantity
 * @property-read int $backordered_quantity
 * @property-read ?string $bundle_component_id
 * @property-read int $committed_quantity
 * @property-read int $consumed_quantity
 * @property-read string $demand_key
 * @property-read int $held_quantity
 * @property-read string $inventory_item_id
 * @property-read string $inventory_reservation_line_id
 * @property-read string $location_id
 * @property-read ?string $order_line_item_id
 * @property-read int $reallocated_quantity
 * @property-read int $released_from_backordered_quantity
 * @property-read int $released_from_committed_quantity
 * @property-read int $released_from_held_quantity
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationLine extends Model {
    /** @param array{'allocated_quantity': int, 'at_risk_committed_quantity': int, 'at_risk_held_quantity': int, 'backordered_quantity': int, 'bundle_component_id'?: string, 'committed_quantity': int, 'consumed_quantity': int, 'demand_key': string, 'held_quantity': int, 'inventory_item_id': string, 'inventory_reservation_line_id': string, 'location_id': string, 'order_line_item_id'?: string, 'reallocated_quantity': int, 'released_from_backordered_quantity': int, 'released_from_committed_quantity': int, 'released_from_held_quantity': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationLine')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getAllocatedQuantity(): int { return $this->get('allocated_quantity'); }
    public function hasAllocatedQuantity(): bool { return $this->has('allocated_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getAtRiskCommittedQuantity(): int { return $this->get('at_risk_committed_quantity'); }
    public function hasAtRiskCommittedQuantity(): bool { return $this->has('at_risk_committed_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getAtRiskHeldQuantity(): int { return $this->get('at_risk_held_quantity'); }
    public function hasAtRiskHeldQuantity(): bool { return $this->has('at_risk_held_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     */
    public function getBackorderedQuantity(): int { return $this->get('backordered_quantity'); }
    public function hasBackorderedQuantity(): bool { return $this->has('backordered_quantity'); }
    /** ID of the bundle component this line covers. Absent when the line isn't for a bundle component.
     * @return ?string
     */
    public function getBundleComponentId(): ?string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getCommittedQuantity(): int { return $this->get('committed_quantity'); }
    public function hasCommittedQuantity(): bool { return $this->has('committed_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getConsumedQuantity(): int { return $this->get('consumed_quantity'); }
    public function hasConsumedQuantity(): bool { return $this->has('consumed_quantity'); }
    /** Key of the demand this line serves. Matches the `demand_key` you sent, or the inventory item ID when you sent none.
     * @return string
     */
    public function getDemandKey(): string { return $this->get('demand_key'); }
    public function hasDemandKey(): bool { return $this->has('demand_key'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getHeldQuantity(): int { return $this->get('held_quantity'); }
    public function hasHeldQuantity(): bool { return $this->has('held_quantity'); }
    /** ID of the inventory item to reserve.
     * @return string
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Unique identifier for this inventory reservation line, prefixed `invrln_`.
     * @return string
     */
    public function getInventoryReservationLineId(): string { return $this->get('inventory_reservation_line_id'); }
    public function hasInventoryReservationLineId(): bool { return $this->has('inventory_reservation_line_id'); }
    /** ID of the Location the stock is allocated from.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** ID of the order line item this line covers. Absent unless an order holds the reservation.
     * @return ?string
     */
    public function getOrderLineItemId(): ?string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getReallocatedQuantity(): int { return $this->get('reallocated_quantity'); }
    public function hasReallocatedQuantity(): bool { return $this->has('reallocated_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     */
    public function getReleasedFromBackorderedQuantity(): int { return $this->get('released_from_backordered_quantity'); }
    public function hasReleasedFromBackorderedQuantity(): bool { return $this->has('released_from_backordered_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getReleasedFromCommittedQuantity(): int { return $this->get('released_from_committed_quantity'); }
    public function hasReleasedFromCommittedQuantity(): bool { return $this->has('released_from_committed_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getReleasedFromHeldQuantity(): int { return $this->get('released_from_held_quantity'); }
    public function hasReleasedFromHeldQuantity(): bool { return $this->has('released_from_held_quantity'); }
}

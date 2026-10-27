<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocated_quantity
 * @property-read string $at_risk_committed_quantity
 * @property-read string $at_risk_held_quantity
 * @property-read ?string $bundle_component_id
 * @property-read string $committed_quantity
 * @property-read string $consumed_quantity
 * @property-read string $demand_key
 * @property-read string $held_quantity
 * @property-read string $inventory_item_id
 * @property-read string $inventory_reservation_line_id
 * @property-read string $location_id
 * @property-read ?string $order_line_item_id
 * @property-read string $reallocated_quantity
 * @property-read string $released_from_committed_quantity
 * @property-read string $released_from_held_quantity
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationLine extends Model {
    /** @param array{'allocated_quantity': string, 'at_risk_committed_quantity': string, 'at_risk_held_quantity': string, 'bundle_component_id'?: string, 'committed_quantity': string, 'consumed_quantity': string, 'demand_key': string, 'held_quantity': string, 'inventory_item_id': string, 'inventory_reservation_line_id': string, 'location_id': string, 'order_line_item_id'?: string, 'reallocated_quantity': string, 'released_from_committed_quantity': string, 'released_from_held_quantity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationLine')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getAllocatedQuantity(): string { return $this->get('allocated_quantity'); }
    public function hasAllocatedQuantity(): bool { return $this->has('allocated_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getAtRiskCommittedQuantity(): string { return $this->get('at_risk_committed_quantity'); }
    public function hasAtRiskCommittedQuantity(): bool { return $this->has('at_risk_committed_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getAtRiskHeldQuantity(): string { return $this->get('at_risk_held_quantity'); }
    public function hasAtRiskHeldQuantity(): bool { return $this->has('at_risk_held_quantity'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getBundleComponentId(): ?string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getCommittedQuantity(): string { return $this->get('committed_quantity'); }
    public function hasCommittedQuantity(): bool { return $this->has('committed_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getConsumedQuantity(): string { return $this->get('consumed_quantity'); }
    public function hasConsumedQuantity(): bool { return $this->has('consumed_quantity'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDemandKey(): string { return $this->get('demand_key'); }
    public function hasDemandKey(): bool { return $this->has('demand_key'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getHeldQuantity(): string { return $this->get('held_quantity'); }
    public function hasHeldQuantity(): bool { return $this->has('held_quantity'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryReservationLineId(): string { return $this->get('inventory_reservation_line_id'); }
    public function hasInventoryReservationLineId(): bool { return $this->has('inventory_reservation_line_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getOrderLineItemId(): ?string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getReallocatedQuantity(): string { return $this->get('reallocated_quantity'); }
    public function hasReallocatedQuantity(): bool { return $this->has('reallocated_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getReleasedFromCommittedQuantity(): string { return $this->get('released_from_committed_quantity'); }
    public function hasReleasedFromCommittedQuantity(): bool { return $this->has('released_from_committed_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getReleasedFromHeldQuantity(): string { return $this->get('released_from_held_quantity'); }
    public function hasReleasedFromHeldQuantity(): bool { return $this->has('released_from_held_quantity'); }
}

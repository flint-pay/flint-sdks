<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $allocated_quantity
 * @property-read string $at_risk_committed_quantity
 * @property-read string $at_risk_held_quantity
 * @property-read string $bundle_component_id
 * @property-read string $committed_quantity
 * @property-read string $consumed_quantity
 * @property-read string $demand_key
 * @property-read string $geography_revision
 * @property-read string $held_quantity
 * @property-read string $inventory_item_id
 * @property-read string $inventory_reservation_line_id
 * @property-read string $location_id
 * @property-read string $order_line_item_id
 * @property-read string $reallocated_quantity
 * @property-read string $released_from_committed_quantity
 * @property-read string $released_from_held_quantity
 * Presence-aware input; omitted fields throw when accessed. */
final class ReservationLineInput extends Model {
    /** @param array{'allocated_quantity': string, 'at_risk_committed_quantity': string, 'at_risk_held_quantity': string, 'bundle_component_id'?: string, 'committed_quantity': string, 'consumed_quantity': string, 'demand_key': string, 'geography_revision': string, 'held_quantity': string, 'inventory_item_id': string, 'inventory_reservation_line_id': string, 'location_id': string, 'order_line_item_id'?: string, 'reallocated_quantity': string, 'released_from_committed_quantity': string, 'released_from_held_quantity': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReservationLineInput')); }
    /** @return string
     * @throws SdkError When allocated_quantity is omitted; use hasAllocatedQuantity() or valueOrDefault().
     */
    public function getAllocatedQuantity(): string { return $this->get('allocated_quantity'); }
    public function hasAllocatedQuantity(): bool { return $this->has('allocated_quantity'); }
    /** @return string
     * @throws SdkError When at_risk_committed_quantity is omitted; use hasAtRiskCommittedQuantity() or valueOrDefault().
     */
    public function getAtRiskCommittedQuantity(): string { return $this->get('at_risk_committed_quantity'); }
    public function hasAtRiskCommittedQuantity(): bool { return $this->has('at_risk_committed_quantity'); }
    /** @return string
     * @throws SdkError When at_risk_held_quantity is omitted; use hasAtRiskHeldQuantity() or valueOrDefault().
     */
    public function getAtRiskHeldQuantity(): string { return $this->get('at_risk_held_quantity'); }
    public function hasAtRiskHeldQuantity(): bool { return $this->has('at_risk_held_quantity'); }
    /** @return string
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** @return string
     * @throws SdkError When committed_quantity is omitted; use hasCommittedQuantity() or valueOrDefault().
     */
    public function getCommittedQuantity(): string { return $this->get('committed_quantity'); }
    public function hasCommittedQuantity(): bool { return $this->has('committed_quantity'); }
    /** @return string
     * @throws SdkError When consumed_quantity is omitted; use hasConsumedQuantity() or valueOrDefault().
     */
    public function getConsumedQuantity(): string { return $this->get('consumed_quantity'); }
    public function hasConsumedQuantity(): bool { return $this->has('consumed_quantity'); }
    /** @return string
     * @throws SdkError When demand_key is omitted; use hasDemandKey() or valueOrDefault().
     */
    public function getDemandKey(): string { return $this->get('demand_key'); }
    public function hasDemandKey(): bool { return $this->has('demand_key'); }
    /** @return string
     * @throws SdkError When geography_revision is omitted; use hasGeographyRevision() or valueOrDefault().
     */
    public function getGeographyRevision(): string { return $this->get('geography_revision'); }
    public function hasGeographyRevision(): bool { return $this->has('geography_revision'); }
    /** @return string
     * @throws SdkError When held_quantity is omitted; use hasHeldQuantity() or valueOrDefault().
     */
    public function getHeldQuantity(): string { return $this->get('held_quantity'); }
    public function hasHeldQuantity(): bool { return $this->has('held_quantity'); }
    /** @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** @return string
     * @throws SdkError When inventory_reservation_line_id is omitted; use hasInventoryReservationLineId() or valueOrDefault().
     */
    public function getInventoryReservationLineId(): string { return $this->get('inventory_reservation_line_id'); }
    public function hasInventoryReservationLineId(): bool { return $this->has('inventory_reservation_line_id'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** @return string
     * @throws SdkError When reallocated_quantity is omitted; use hasReallocatedQuantity() or valueOrDefault().
     */
    public function getReallocatedQuantity(): string { return $this->get('reallocated_quantity'); }
    public function hasReallocatedQuantity(): bool { return $this->has('reallocated_quantity'); }
    /** @return string
     * @throws SdkError When released_from_committed_quantity is omitted; use hasReleasedFromCommittedQuantity() or valueOrDefault().
     */
    public function getReleasedFromCommittedQuantity(): string { return $this->get('released_from_committed_quantity'); }
    public function hasReleasedFromCommittedQuantity(): bool { return $this->has('released_from_committed_quantity'); }
    /** @return string
     * @throws SdkError When released_from_held_quantity is omitted; use hasReleasedFromHeldQuantity() or valueOrDefault().
     */
    public function getReleasedFromHeldQuantity(): string { return $this->get('released_from_held_quantity'); }
    public function hasReleasedFromHeldQuantity(): bool { return $this->has('released_from_held_quantity'); }
}

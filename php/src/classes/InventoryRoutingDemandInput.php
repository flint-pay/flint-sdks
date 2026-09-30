<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_location_ids
 * @property-read string $bundle_component_id
 * @property-read string $demand_key
 * @property-read string $forced_location_id
 * @property-read string $inventory_item_id
 * @property-read string $order_line_item_id
 * @property-read string $quantity
 * @property-read string $splitting_behavior
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryRoutingDemandInput extends Model {
    /** @param array{'allowed_location_ids'?: list<string>, 'bundle_component_id'?: string, 'demand_key': string, 'forced_location_id'?: string, 'inventory_item_id': string, 'order_line_item_id'?: string, 'quantity': string, 'splitting_behavior': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryRoutingDemandInput')); }
    /** @return list<string>
     * @throws SdkError When allowed_location_ids is omitted; use hasAllowedLocationIds() or valueOrDefault().
     */
    public function getAllowedLocationIds(): array { return $this->get('allowed_location_ids'); }
    public function hasAllowedLocationIds(): bool { return $this->has('allowed_location_ids'); }
    /** @return string
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** @return string
     * @throws SdkError When demand_key is omitted; use hasDemandKey() or valueOrDefault().
     */
    public function getDemandKey(): string { return $this->get('demand_key'); }
    public function hasDemandKey(): bool { return $this->has('demand_key'); }
    /** @return string
     * @throws SdkError When forced_location_id is omitted; use hasForcedLocationId() or valueOrDefault().
     */
    public function getForcedLocationId(): string { return $this->get('forced_location_id'); }
    public function hasForcedLocationId(): bool { return $this->has('forced_location_id'); }
    /** @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** @return string
     * @throws SdkError When order_line_item_id is omitted; use hasOrderLineItemId() or valueOrDefault().
     */
    public function getOrderLineItemId(): string { return $this->get('order_line_item_id'); }
    public function hasOrderLineItemId(): bool { return $this->has('order_line_item_id'); }
    /** @return string
     * @throws SdkError When quantity is omitted; use hasQuantity() or valueOrDefault().
     */
    public function getQuantity(): string { return $this->get('quantity'); }
    public function hasQuantity(): bool { return $this->has('quantity'); }
    /** @return string
     * @throws SdkError When splitting_behavior is omitted; use hasSplittingBehavior() or valueOrDefault().
     */
    public function getSplittingBehavior(): string { return $this->get('splitting_behavior'); }
    public function hasSplittingBehavior(): bool { return $this->has('splitting_behavior'); }
}

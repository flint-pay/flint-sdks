<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $bundle_component_id
 * @property-read ?string $component_snapshot_id
 * @property-read string $inventory_item_id
 * @property-read int $quantity_per_line_item_unit
 * Presence-aware response; omitted optional fields return null. */
final class LineItemInventoryDemand extends Model {
    /** @param array{'bundle_component_id'?: string, 'component_snapshot_id'?: string, 'inventory_item_id': string, 'quantity_per_line_item_unit': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemInventoryDemand')); }
    /** bundle_component_id
     * @return ?string
     */
    public function getBundleComponentId(): ?string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** component_snapshot_id
     * @return ?string
     */
    public function getComponentSnapshotId(): ?string { return $this->get('component_snapshot_id'); }
    public function hasComponentSnapshotId(): bool { return $this->has('component_snapshot_id'); }
    /** inventory_item_id
     * @return string
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuantityPerLineItemUnit(): int { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}

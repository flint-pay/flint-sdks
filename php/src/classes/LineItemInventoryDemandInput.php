<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $bundle_component_id
 * @property-read string $component_snapshot_id
 * @property-read string $inventory_item_id
 * @property-read int $quantity_per_line_item_unit
 * Presence-aware input; omitted fields throw when accessed. */
final class LineItemInventoryDemandInput extends Model {
    /** @param array{'bundle_component_id'?: string, 'component_snapshot_id'?: string, 'inventory_item_id': string, 'quantity_per_line_item_unit': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemInventoryDemandInput')); }
    /** Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1".
     * @return string
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): string { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Example: "component-1842".
     * @return string
     * @throws SdkError When component_snapshot_id is omitted; use hasComponentSnapshotId() or valueOrDefault().
     */
    public function getComponentSnapshotId(): string { return $this->get('component_snapshot_id'); }
    public function hasComponentSnapshotId(): bool { return $this->has('component_snapshot_id'); }
    /** ID of the inventory item each unit of the line item uses. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY".
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quantity_per_line_item_unit is omitted; use hasQuantityPerLineItemUnit() or valueOrDefault().
     */
    public function getQuantityPerLineItemUnit(): int { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}

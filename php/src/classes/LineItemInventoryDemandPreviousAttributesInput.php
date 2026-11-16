<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_component_id
 * @property-read string|null $component_snapshot_id
 * @property-read string|null $inventory_item_id
 * @property-read int|null $quantity_per_line_item_unit
 * Presence-aware input; omitted fields throw when accessed. */
final class LineItemInventoryDemandPreviousAttributesInput extends Model {
    /** @param array{'bundle_component_id'?: string|null, 'component_snapshot_id'?: string|null, 'inventory_item_id'?: string|null, 'quantity_per_line_item_unit'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemInventoryDemandPreviousAttributesInput')); }
    /** ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. anyOf[1] (Value): string. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. Example: "bunc_01KEZF7C00CQASEZGAPEANTGD1". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When bundle_component_id is omitted; use hasBundleComponentId() or valueOrDefault().
     */
    public function getBundleComponentId(): mixed { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. anyOf[1] (Value): string. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. Example: "component-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When component_snapshot_id is omitted; use hasComponentSnapshotId() or valueOrDefault().
     */
    public function getComponentSnapshotId(): mixed { return $this->get('component_snapshot_id'); }
    public function hasComponentSnapshotId(): bool { return $this->has('component_snapshot_id'); }
    /** ID of the inventory item each unit of the line item uses. anyOf[1] (Value): string. ID of the inventory item each unit of the line item uses. Example: "invi_01KEZF7C00A6YEM25MTHW2MPZY". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): mixed { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When quantity_per_line_item_unit is omitted; use hasQuantityPerLineItemUnit() or valueOrDefault().
     */
    public function getQuantityPerLineItemUnit(): mixed { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}

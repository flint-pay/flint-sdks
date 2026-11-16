<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $bundle_component_id
 * @property-read string|null $component_snapshot_id
 * @property-read string|null $inventory_item_id
 * @property-read int|null $quantity_per_line_item_unit
 * Presence-aware response; omitted optional fields return null. */
final class LineItemInventoryDemandPreviousAttributes extends Model {
    /** @param array{'bundle_component_id'?: mixed, 'component_snapshot_id'?: mixed, 'inventory_item_id'?: mixed, 'quantity_per_line_item_unit'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemInventoryDemandPreviousAttributes')); }
    /** ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. anyOf[1] (Value): string. ID of the bundle component this demand comes from. Present only on a line item that sells a bundle. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getBundleComponentId(): string|null { return $this->get('bundle_component_id'); }
    public function hasBundleComponentId(): bool { return $this->has('bundle_component_id'); }
    /** Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. anyOf[1] (Value): string. Identifier of the bundle component as it was frozen on the line item. Present only when the bundle component has one. Inventory reservations for the demand use it in place of `bundle_component_id`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getComponentSnapshotId(): string|null { return $this->get('component_snapshot_id'); }
    public function hasComponentSnapshotId(): bool { return $this->has('component_snapshot_id'); }
    /** ID of the inventory item each unit of the line item uses. anyOf[1] (Value): string. ID of the inventory item each unit of the line item uses. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryItemId(): string|null { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuantityPerLineItemUnit(): int|null { return $this->get('quantity_per_line_item_unit'); }
    public function hasQuantityPerLineItemUnit(): bool { return $this->has('quantity_per_line_item_unit'); }
}

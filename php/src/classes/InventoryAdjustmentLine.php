<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $damaged_quantity_delta
 * @property-read string $inventory_item_id
 * @property-read string|null $inventory_movement_id
 * @property-read string $location_id
 * @property-read string $on_hand_quantity_delta
 * @property-read string $quality_control_quantity_delta
 * @property-read string $quarantined_quantity_delta
 * Presence-aware response; omitted optional fields return null. */
final class InventoryAdjustmentLine extends Model {
    /** @param array{'damaged_quantity_delta': string, 'inventory_item_id': string, 'inventory_movement_id': string|null, 'location_id': string, 'on_hand_quantity_delta': string, 'quality_control_quantity_delta': string, 'quarantined_quantity_delta': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentLine')); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getDamagedQuantityDelta(): string { return $this->get('damaged_quantity_delta'); }
    public function hasDamagedQuantityDelta(): bool { return $this->has('damaged_quantity_delta'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string or null. Movement this line wrote, or `null` when the line changed nothing.
     * @return string|null
     */
    public function getInventoryMovementId(): string|null { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getOnHandQuantityDelta(): string { return $this->get('on_hand_quantity_delta'); }
    public function hasOnHandQuantityDelta(): bool { return $this->has('on_hand_quantity_delta'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQualityControlQuantityDelta(): string { return $this->get('quality_control_quantity_delta'); }
    public function hasQualityControlQuantityDelta(): bool { return $this->has('quality_control_quantity_delta'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getQuarantinedQuantityDelta(): string { return $this->get('quarantined_quantity_delta'); }
    public function hasQuarantinedQuantityDelta(): bool { return $this->has('quarantined_quantity_delta'); }
}

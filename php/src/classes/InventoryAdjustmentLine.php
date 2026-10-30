<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $damaged_quantity_delta
 * @property-read string $inventory_item_id
 * @property-read string|null $inventory_movement_id
 * @property-read string $location_id
 * @property-read int $on_hand_quantity_delta
 * @property-read int $quality_control_quantity_delta
 * @property-read int $quarantined_quantity_delta
 * Presence-aware response; omitted optional fields return null. */
final class InventoryAdjustmentLine extends Model {
    /** @param array{'damaged_quantity_delta': int, 'inventory_item_id': string, 'inventory_movement_id': string|null, 'location_id': string, 'on_hand_quantity_delta': int, 'quality_control_quantity_delta': int, 'quarantined_quantity_delta': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentLine')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getDamagedQuantityDelta(): int { return $this->get('damaged_quantity_delta'); }
    public function hasDamagedQuantityDelta(): bool { return $this->has('damaged_quantity_delta'); }
    /** inventory_item_id
     * @return string
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Movement this line wrote, or `null` when the line changed nothing.
     * @return string|null
     */
    public function getInventoryMovementId(): string|null { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** location_id
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getOnHandQuantityDelta(): int { return $this->get('on_hand_quantity_delta'); }
    public function hasOnHandQuantityDelta(): bool { return $this->has('on_hand_quantity_delta'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQualityControlQuantityDelta(): int { return $this->get('quality_control_quantity_delta'); }
    public function hasQualityControlQuantityDelta(): bool { return $this->has('quality_control_quantity_delta'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getQuarantinedQuantityDelta(): int { return $this->get('quarantined_quantity_delta'); }
    public function hasQuarantinedQuantityDelta(): bool { return $this->has('quarantined_quantity_delta'); }
}

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
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAdjustmentLineInput extends Model {
    /** @param array{'damaged_quantity_delta': int, 'inventory_item_id': string, 'inventory_movement_id': string|null, 'location_id': string, 'on_hand_quantity_delta': int, 'quality_control_quantity_delta': int, 'quarantined_quantity_delta': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentLineInput')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When damaged_quantity_delta is omitted; use hasDamagedQuantityDelta() or valueOrDefault().
     */
    public function getDamagedQuantityDelta(): int { return $this->get('damaged_quantity_delta'); }
    public function hasDamagedQuantityDelta(): bool { return $this->has('damaged_quantity_delta'); }
    /** inventory_item_id
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Movement this line wrote, or `null` when the line changed nothing.
     * @return string|null
     * @throws SdkError When inventory_movement_id is omitted; use hasInventoryMovementId() or valueOrDefault().
     */
    public function getInventoryMovementId(): string|null { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** location_id
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When on_hand_quantity_delta is omitted; use hasOnHandQuantityDelta() or valueOrDefault().
     */
    public function getOnHandQuantityDelta(): int { return $this->get('on_hand_quantity_delta'); }
    public function hasOnHandQuantityDelta(): bool { return $this->has('on_hand_quantity_delta'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quality_control_quantity_delta is omitted; use hasQualityControlQuantityDelta() or valueOrDefault().
     */
    public function getQualityControlQuantityDelta(): int { return $this->get('quality_control_quantity_delta'); }
    public function hasQualityControlQuantityDelta(): bool { return $this->has('quality_control_quantity_delta'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When quarantined_quantity_delta is omitted; use hasQuarantinedQuantityDelta() or valueOrDefault().
     */
    public function getQuarantinedQuantityDelta(): int { return $this->get('quarantined_quantity_delta'); }
    public function hasQuarantinedQuantityDelta(): bool { return $this->has('quarantined_quantity_delta'); }
}

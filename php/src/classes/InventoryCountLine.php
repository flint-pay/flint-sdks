<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $captured_physical_version
 * @property-read ?int $counted_damaged_quantity
 * @property-read ?int $counted_on_hand_quantity
 * @property-read ?int $counted_quality_control_quantity
 * @property-read ?int $counted_quarantined_quantity
 * @property-read ?int $damaged_variance
 * @property-read ?int $expected_damaged_quantity
 * @property-read ?int $expected_on_hand_quantity
 * @property-read ?int $expected_quality_control_quantity
 * @property-read ?int $expected_quarantined_quantity
 * @property-read string $inventory_count_line_id
 * @property-read string $inventory_item_id
 * @property-read ?string $inventory_movement_id
 * @property-read ?int $on_hand_variance
 * @property-read ?int $quality_control_variance
 * @property-read ?int $quarantined_variance
 * @property-read ?int $source_observation_sequence
 * Presence-aware response; omitted optional fields return null. */
final class InventoryCountLine extends Model {
    /** @param array{'captured_physical_version': int, 'counted_damaged_quantity'?: int, 'counted_on_hand_quantity'?: int, 'counted_quality_control_quantity'?: int, 'counted_quarantined_quantity'?: int, 'damaged_variance'?: int, 'expected_damaged_quantity'?: int, 'expected_on_hand_quantity'?: int, 'expected_quality_control_quantity'?: int, 'expected_quarantined_quantity'?: int, 'inventory_count_line_id': string, 'inventory_item_id': string, 'inventory_movement_id'?: string, 'on_hand_variance'?: int, 'quality_control_variance'?: int, 'quarantined_variance'?: int, 'source_observation_sequence'?: int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountLine')); }
    /** Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. Format: int64. minimum: 0.
     * @return int
     */
    public function getCapturedPhysicalVersion(): int { return $this->get('captured_physical_version'); }
    public function hasCapturedPhysicalVersion(): bool { return $this->has('captured_physical_version'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getCountedDamagedQuantity(): ?int { return $this->get('counted_damaged_quantity'); }
    public function hasCountedDamagedQuantity(): bool { return $this->has('counted_damaged_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getCountedOnHandQuantity(): ?int { return $this->get('counted_on_hand_quantity'); }
    public function hasCountedOnHandQuantity(): bool { return $this->has('counted_on_hand_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getCountedQualityControlQuantity(): ?int { return $this->get('counted_quality_control_quantity'); }
    public function hasCountedQualityControlQuantity(): bool { return $this->has('counted_quality_control_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getCountedQuarantinedQuantity(): ?int { return $this->get('counted_quarantined_quantity'); }
    public function hasCountedQuarantinedQuantity(): bool { return $this->has('counted_quarantined_quantity'); }
    /** The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. Format: int64.
     * @return ?int
     */
    public function getDamagedVariance(): ?int { return $this->get('damaged_variance'); }
    public function hasDamagedVariance(): bool { return $this->has('damaged_variance'); }
    /** The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getExpectedDamagedQuantity(): ?int { return $this->get('expected_damaged_quantity'); }
    public function hasExpectedDamagedQuantity(): bool { return $this->has('expected_damaged_quantity'); }
    /** The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getExpectedOnHandQuantity(): ?int { return $this->get('expected_on_hand_quantity'); }
    public function hasExpectedOnHandQuantity(): bool { return $this->has('expected_on_hand_quantity'); }
    /** The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getExpectedQualityControlQuantity(): ?int { return $this->get('expected_quality_control_quantity'); }
    public function hasExpectedQualityControlQuantity(): bool { return $this->has('expected_quality_control_quantity'); }
    /** The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return ?int
     */
    public function getExpectedQuarantinedQuantity(): ?int { return $this->get('expected_quarantined_quantity'); }
    public function hasExpectedQuarantinedQuantity(): bool { return $this->has('expected_quarantined_quantity'); }
    /** inventory_count_line_id
     * @return string
     */
    public function getInventoryCountLineId(): string { return $this->get('inventory_count_line_id'); }
    public function hasInventoryCountLineId(): bool { return $this->has('inventory_count_line_id'); }
    /** inventory_item_id
     * @return string
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** inventory_movement_id
     * @return ?string
     */
    public function getInventoryMovementId(): ?string { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. Format: int64.
     * @return ?int
     */
    public function getOnHandVariance(): ?int { return $this->get('on_hand_variance'); }
    public function hasOnHandVariance(): bool { return $this->has('on_hand_variance'); }
    /** The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. Format: int64.
     * @return ?int
     */
    public function getQualityControlVariance(): ?int { return $this->get('quality_control_variance'); }
    public function hasQualityControlVariance(): bool { return $this->has('quality_control_variance'); }
    /** The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. Format: int64.
     * @return ?int
     */
    public function getQuarantinedVariance(): ?int { return $this->get('quarantined_variance'); }
    public function hasQuarantinedVariance(): bool { return $this->has('quarantined_variance'); }
    /** Format: int64. minimum: 0.
     * @return ?int
     */
    public function getSourceObservationSequence(): ?int { return $this->get('source_observation_sequence'); }
    public function hasSourceObservationSequence(): bool { return $this->has('source_observation_sequence'); }
}

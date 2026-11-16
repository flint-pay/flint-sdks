<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $captured_physical_version
 * @property-read int|null $counted_damaged_quantity
 * @property-read int|null $counted_on_hand_quantity
 * @property-read int|null $counted_quality_control_quantity
 * @property-read int|null $counted_quarantined_quantity
 * @property-read int|null $damaged_variance
 * @property-read int|null $expected_damaged_quantity
 * @property-read int|null $expected_on_hand_quantity
 * @property-read int|null $expected_quality_control_quantity
 * @property-read int|null $expected_quarantined_quantity
 * @property-read string|null $inventory_count_line_id
 * @property-read string|null $inventory_item_id
 * @property-read string|null $inventory_movement_id
 * @property-read int|null $on_hand_variance
 * @property-read int|null $physical_version
 * @property-read int|null $quality_control_variance
 * @property-read int|null $quarantined_variance
 * @property-read int|null $source_observation_sequence
 * Presence-aware response; omitted optional fields return null. */
final class InventoryCountLinePreviousAttributes extends Model {
    /** @param array{'captured_physical_version'?: mixed, 'counted_damaged_quantity'?: mixed, 'counted_on_hand_quantity'?: mixed, 'counted_quality_control_quantity'?: mixed, 'counted_quarantined_quantity'?: mixed, 'damaged_variance'?: mixed, 'expected_damaged_quantity'?: mixed, 'expected_on_hand_quantity'?: mixed, 'expected_quality_control_quantity'?: mixed, 'expected_quarantined_quantity'?: mixed, 'inventory_count_line_id'?: mixed, 'inventory_item_id'?: mixed, 'inventory_movement_id'?: mixed, 'on_hand_variance'?: mixed, 'physical_version'?: mixed, 'quality_control_variance'?: mixed, 'quarantined_variance'?: mixed, 'source_observation_sequence'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountLinePreviousAttributes')); }
    /** Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. anyOf[1] (Value): integer. Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCapturedPhysicalVersion(): int|null { return $this->get('captured_physical_version'); }
    public function hasCapturedPhysicalVersion(): bool { return $this->has('captured_physical_version'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCountedDamagedQuantity(): int|null { return $this->get('counted_damaged_quantity'); }
    public function hasCountedDamagedQuantity(): bool { return $this->has('counted_damaged_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCountedOnHandQuantity(): int|null { return $this->get('counted_on_hand_quantity'); }
    public function hasCountedOnHandQuantity(): bool { return $this->has('counted_on_hand_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCountedQualityControlQuantity(): int|null { return $this->get('counted_quality_control_quantity'); }
    public function hasCountedQualityControlQuantity(): bool { return $this->has('counted_quality_control_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getCountedQuarantinedQuantity(): int|null { return $this->get('counted_quarantined_quantity'); }
    public function hasCountedQuarantinedQuantity(): bool { return $this->has('counted_quarantined_quantity'); }
    /** The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. anyOf[1] (Value): integer. The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getDamagedVariance(): int|null { return $this->get('damaged_variance'); }
    public function hasDamagedVariance(): bool { return $this->has('damaged_variance'); }
    /** The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getExpectedDamagedQuantity(): int|null { return $this->get('expected_damaged_quantity'); }
    public function hasExpectedDamagedQuantity(): bool { return $this->has('expected_damaged_quantity'); }
    /** The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getExpectedOnHandQuantity(): int|null { return $this->get('expected_on_hand_quantity'); }
    public function hasExpectedOnHandQuantity(): bool { return $this->has('expected_on_hand_quantity'); }
    /** The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getExpectedQualityControlQuantity(): int|null { return $this->get('expected_quality_control_quantity'); }
    public function hasExpectedQualityControlQuantity(): bool { return $this->has('expected_quality_control_quantity'); }
    /** The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. anyOf[1] (Value): integer. The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getExpectedQuarantinedQuantity(): int|null { return $this->get('expected_quarantined_quantity'); }
    public function hasExpectedQuarantinedQuantity(): bool { return $this->has('expected_quarantined_quantity'); }
    /** Unique identifier for this inventory count line, prefixed `invcln_`. anyOf[1] (Value): string. Unique identifier for this inventory count line, prefixed `invcln_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryCountLineId(): string|null { return $this->get('inventory_count_line_id'); }
    public function hasInventoryCountLineId(): bool { return $this->has('inventory_count_line_id'); }
    /** ID of the inventory item counted. anyOf[1] (Value): string. ID of the inventory item counted. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryItemId(): string|null { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Movement this line wrote when the count was applied. Absent on a draft or canceled count. anyOf[1] (Value): string. Movement this line wrote when the count was applied. Absent on a draft or canceled count. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryMovementId(): string|null { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. anyOf[1] (Value): integer. The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getOnHandVariance(): int|null { return $this->get('on_hand_variance'); }
    public function hasOnHandVariance(): bool { return $this->has('on_hand_variance'); }
    /** Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. anyOf[1] (Value): integer. Live physical version of the level, read alongside expected quantities on draft lines. Evidence of current stock, not a fence captured at count creation. `null` when the count is applied or canceled. Format: uint64. minimum: 0. maximum: 9007199254740991. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getPhysicalVersion(): int|null { return $this->get('physical_version'); }
    public function hasPhysicalVersion(): bool { return $this->has('physical_version'); }
    /** The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. anyOf[1] (Value): integer. The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQualityControlVariance(): int|null { return $this->get('quality_control_variance'); }
    public function hasQualityControlVariance(): bool { return $this->has('quality_control_variance'); }
    /** The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. anyOf[1] (Value): integer. The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getQuarantinedVariance(): int|null { return $this->get('quarantined_variance'); }
    public function hasQuarantinedVariance(): bool { return $this->has('quarantined_variance'); }
    /**  anyOf[1] (Value): integer. Format: int64. minimum: 0. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getSourceObservationSequence(): int|null { return $this->get('source_observation_sequence'); }
    public function hasSourceObservationSequence(): bool { return $this->has('source_observation_sequence'); }
}

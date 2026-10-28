<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $captured_physical_version
 * @property-read string $counted_damaged_quantity
 * @property-read string $counted_on_hand_quantity
 * @property-read string $counted_quality_control_quantity
 * @property-read string $counted_quarantined_quantity
 * @property-read string $damaged_variance
 * @property-read string $expected_damaged_quantity
 * @property-read string $expected_on_hand_quantity
 * @property-read string $expected_quality_control_quantity
 * @property-read string $expected_quarantined_quantity
 * @property-read string $inventory_count_line_id
 * @property-read string $inventory_item_id
 * @property-read string $inventory_movement_id
 * @property-read string $on_hand_variance
 * @property-read string $quality_control_variance
 * @property-read string $quarantined_variance
 * @property-read string $source_observation_sequence
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountLineInput extends Model {
    /** @param array{'captured_physical_version': string, 'counted_damaged_quantity'?: string, 'counted_on_hand_quantity'?: string, 'counted_quality_control_quantity'?: string, 'counted_quarantined_quantity'?: string, 'damaged_variance'?: string, 'expected_damaged_quantity'?: string, 'expected_on_hand_quantity'?: string, 'expected_quality_control_quantity'?: string, 'expected_quarantined_quantity'?: string, 'inventory_count_line_id': string, 'inventory_item_id': string, 'inventory_movement_id'?: string, 'on_hand_variance'?: string, 'quality_control_variance'?: string, 'quarantined_variance'?: string, 'source_observation_sequence'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountLineInput')); }
    /** Shape $ (Value): integer string. Physical version accepted with the latest saved observation. Meaningful once counted_on_hand_quantity is present. Applying the count requires the same physical version. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When captured_physical_version is omitted; use hasCapturedPhysicalVersion() or valueOrDefault().
     */
    public function getCapturedPhysicalVersion(): string { return $this->get('captured_physical_version'); }
    public function hasCapturedPhysicalVersion(): bool { return $this->has('captured_physical_version'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When counted_damaged_quantity is omitted; use hasCountedDamagedQuantity() or valueOrDefault().
     */
    public function getCountedDamagedQuantity(): string { return $this->get('counted_damaged_quantity'); }
    public function hasCountedDamagedQuantity(): bool { return $this->has('counted_damaged_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When counted_on_hand_quantity is omitted; use hasCountedOnHandQuantity() or valueOrDefault().
     */
    public function getCountedOnHandQuantity(): string { return $this->get('counted_on_hand_quantity'); }
    public function hasCountedOnHandQuantity(): bool { return $this->has('counted_on_hand_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When counted_quality_control_quantity is omitted; use hasCountedQualityControlQuantity() or valueOrDefault().
     */
    public function getCountedQualityControlQuantity(): string { return $this->get('counted_quality_control_quantity'); }
    public function hasCountedQualityControlQuantity(): bool { return $this->has('counted_quality_control_quantity'); }
    /** Shape $ (Value): integer string. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When counted_quarantined_quantity is omitted; use hasCountedQuarantinedQuantity() or valueOrDefault().
     */
    public function getCountedQuarantinedQuantity(): string { return $this->get('counted_quarantined_quantity'); }
    public function hasCountedQuarantinedQuantity(): bool { return $this->has('counted_quarantined_quantity'); }
    /** Shape $ (Value): integer string. The difference this line applied to the damaged quantity. Present once the count is applied. A draft or canceled count omits it. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When damaged_variance is omitted; use hasDamagedVariance() or valueOrDefault().
     */
    public function getDamagedVariance(): string { return $this->get('damaged_variance'); }
    public function hasDamagedVariance(): bool { return $this->has('damaged_variance'); }
    /** Shape $ (Value): integer string. The damaged quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When expected_damaged_quantity is omitted; use hasExpectedDamagedQuantity() or valueOrDefault().
     */
    public function getExpectedDamagedQuantity(): string { return $this->get('expected_damaged_quantity'); }
    public function hasExpectedDamagedQuantity(): bool { return $this->has('expected_damaged_quantity'); }
    /** Shape $ (Value): integer string. The on-hand quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When expected_on_hand_quantity is omitted; use hasExpectedOnHandQuantity() or valueOrDefault().
     */
    public function getExpectedOnHandQuantity(): string { return $this->get('expected_on_hand_quantity'); }
    public function hasExpectedOnHandQuantity(): bool { return $this->has('expected_on_hand_quantity'); }
    /** Shape $ (Value): integer string. The quality-control quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When expected_quality_control_quantity is omitted; use hasExpectedQualityControlQuantity() or valueOrDefault().
     */
    public function getExpectedQualityControlQuantity(): string { return $this->get('expected_quality_control_quantity'); }
    public function hasExpectedQualityControlQuantity(): bool { return $this->has('expected_quality_control_quantity'); }
    /** Shape $ (Value): integer string. The quarantined quantity Flint holds for this item at this location right now. Present while the count is unapplied, on every line whether or not it has been counted. Applying the count sets the level to the counted quantities, and the apply is rejected if the level changed since the line was captured. An applied or canceled count omits it. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When expected_quarantined_quantity is omitted; use hasExpectedQuarantinedQuantity() or valueOrDefault().
     */
    public function getExpectedQuarantinedQuantity(): string { return $this->get('expected_quarantined_quantity'); }
    public function hasExpectedQuarantinedQuantity(): bool { return $this->has('expected_quarantined_quantity'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_count_line_id is omitted; use hasInventoryCountLineId() or valueOrDefault().
     */
    public function getInventoryCountLineId(): string { return $this->get('inventory_count_line_id'); }
    public function hasInventoryCountLineId(): bool { return $this->has('inventory_count_line_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_movement_id is omitted; use hasInventoryMovementId() or valueOrDefault().
     */
    public function getInventoryMovementId(): string { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** Shape $ (Value): integer string. The difference this line applied to the on-hand quantity. Present once the count is applied. A draft or canceled count omits it. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When on_hand_variance is omitted; use hasOnHandVariance() or valueOrDefault().
     */
    public function getOnHandVariance(): string { return $this->get('on_hand_variance'); }
    public function hasOnHandVariance(): bool { return $this->has('on_hand_variance'); }
    /** Shape $ (Value): integer string. The difference this line applied to the quality-control quantity. Present once the count is applied. A draft or canceled count omits it. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quality_control_variance is omitted; use hasQualityControlVariance() or valueOrDefault().
     */
    public function getQualityControlVariance(): string { return $this->get('quality_control_variance'); }
    public function hasQualityControlVariance(): bool { return $this->has('quality_control_variance'); }
    /** Shape $ (Value): integer string. The difference this line applied to the quarantined quantity. Present once the count is applied. A draft or canceled count omits it. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     * @throws SdkError When quarantined_variance is omitted; use hasQuarantinedVariance() or valueOrDefault().
     */
    public function getQuarantinedVariance(): string { return $this->get('quarantined_variance'); }
    public function hasQuarantinedVariance(): bool { return $this->has('quarantined_variance'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When source_observation_sequence is omitted; use hasSourceObservationSequence() or valueOrDefault().
     */
    public function getSourceObservationSequence(): string { return $this->get('source_observation_sequence'); }
    public function hasSourceObservationSequence(): bool { return $this->has('source_observation_sequence'); }
}

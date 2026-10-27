<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $damaged_quantity
 * @property-read string $expected_physical_version
 * @property-read string $inventory_item_id
 * @property-read string $location_id
 * @property-read string $on_hand_quantity
 * @property-read string $quality_control_quantity
 * @property-read string $quarantined_quantity
 * @property-read string $source_observation_sequence
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAdjustmentSetLineRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentSetLineRequestInput')); }
    /** Shape $ (Value): integer string. Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When damaged_quantity is omitted; use hasDamagedQuantity() or valueOrDefault().
     */
    public function getDamagedQuantity(): string { return $this->get('damaged_quantity'); }
    public function hasDamagedQuantity(): bool { return $this->has('damaged_quantity'); }
    /** Shape $ (Value): integer string. Refuse the line unless the level's `physical_version` still equals this value. A level that doesn't exist yet has physical version 0. Holds and commitments do not change it. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When expected_physical_version is omitted; use hasExpectedPhysicalVersion() or valueOrDefault().
     */
    public function getExpectedPhysicalVersion(): string { return $this->get('expected_physical_version'); }
    public function hasExpectedPhysicalVersion(): bool { return $this->has('expected_physical_version'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): integer string. Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When on_hand_quantity is omitted; use hasOnHandQuantity() or valueOrDefault().
     */
    public function getOnHandQuantity(): string { return $this->get('on_hand_quantity'); }
    public function hasOnHandQuantity(): bool { return $this->has('on_hand_quantity'); }
    /** Shape $ (Value): integer string. Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When quality_control_quantity is omitted; use hasQualityControlQuantity() or valueOrDefault().
     */
    public function getQualityControlQuantity(): string { return $this->get('quality_control_quantity'); }
    public function hasQualityControlQuantity(): bool { return $this->has('quality_control_quantity'); }
    /** Shape $ (Value): integer string. Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 0.
     * @return string
     * @throws SdkError When quarantined_quantity is omitted; use hasQuarantinedQuantity() or valueOrDefault().
     */
    public function getQuarantinedQuantity(): string { return $this->get('quarantined_quantity'); }
    public function hasQuarantinedQuantity(): bool { return $this->has('quarantined_quantity'); }
    /** Shape $ (Value): integer string. Monotonic sequence of this observation in the source system. Flint refuses a value that is not greater than the last accepted one for the same source, item, and Location. Use an integer string (decimal digits), not a floating-point number. Format: int64. minimum: 1.
     * @return string
     * @throws SdkError When source_observation_sequence is omitted; use hasSourceObservationSequence() or valueOrDefault().
     */
    public function getSourceObservationSequence(): string { return $this->get('source_observation_sequence'); }
    public function hasSourceObservationSequence(): bool { return $this->has('source_observation_sequence'); }
}

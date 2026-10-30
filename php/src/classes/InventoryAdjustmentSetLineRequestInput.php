<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $damaged_quantity
 * @property-read int $expected_physical_version
 * @property-read string $inventory_item_id
 * @property-read string $location_id
 * @property-read int $on_hand_quantity
 * @property-read int $quality_control_quantity
 * @property-read int $quarantined_quantity
 * @property-read int $source_observation_sequence
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAdjustmentSetLineRequestInput extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentSetLineRequestInput')); }
    /** Absolute damaged quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When damaged_quantity is omitted; use hasDamagedQuantity() or valueOrDefault().
     */
    public function getDamagedQuantity(): int { return $this->get('damaged_quantity'); }
    public function hasDamagedQuantity(): bool { return $this->has('damaged_quantity'); }
    /** Refuse the line unless the level's `physical_version` still equals this value. A level that doesn't exist yet has physical version 0. Holds and commitments do not change it. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When expected_physical_version is omitted; use hasExpectedPhysicalVersion() or valueOrDefault().
     */
    public function getExpectedPhysicalVersion(): int { return $this->get('expected_physical_version'); }
    public function hasExpectedPhysicalVersion(): bool { return $this->has('expected_physical_version'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Absolute on-hand quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When on_hand_quantity is omitted; use hasOnHandQuantity() or valueOrDefault().
     */
    public function getOnHandQuantity(): int { return $this->get('on_hand_quantity'); }
    public function hasOnHandQuantity(): bool { return $this->has('on_hand_quantity'); }
    /** Absolute quality-control quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When quality_control_quantity is omitted; use hasQualityControlQuantity() or valueOrDefault().
     */
    public function getQualityControlQuantity(): int { return $this->get('quality_control_quantity'); }
    public function hasQualityControlQuantity(): bool { return $this->has('quality_control_quantity'); }
    /** Absolute quarantined quantity to record. Omit to leave it unchanged. Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When quarantined_quantity is omitted; use hasQuarantinedQuantity() or valueOrDefault().
     */
    public function getQuarantinedQuantity(): int { return $this->get('quarantined_quantity'); }
    public function hasQuarantinedQuantity(): bool { return $this->has('quarantined_quantity'); }
    /** Monotonic sequence of this observation in the source system. Flint refuses a value that is not greater than the last accepted one for the same source, item, and Location. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When source_observation_sequence is omitted; use hasSourceObservationSequence() or valueOrDefault().
     */
    public function getSourceObservationSequence(): int { return $this->get('source_observation_sequence'); }
    public function hasSourceObservationSequence(): bool { return $this->has('source_observation_sequence'); }
}

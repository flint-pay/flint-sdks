<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $counted_damaged_quantity
 * @property-read int $counted_on_hand_quantity
 * @property-read int $counted_quality_control_quantity
 * @property-read int $counted_quarantined_quantity
 * @property-read int $expected_physical_version
 * @property-read string $inventory_item_id
 * @property-read int $source_observation_sequence
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountObservationRequestInput extends Model {
    /** @param array{'counted_damaged_quantity'?: int, 'counted_on_hand_quantity': int, 'counted_quality_control_quantity'?: int, 'counted_quarantined_quantity'?: int, 'expected_physical_version': int, 'inventory_item_id': string, 'source_observation_sequence'?: int}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountObservationRequestInput')); }
    /** Whole-number quantity; fractional quantities are not supported. When omitted, keeps the line's expected_damaged_quantity from the same locked physical snapshot whose version was checked; the saved line reports that value as counted. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When counted_damaged_quantity is omitted; use hasCountedDamagedQuantity() or valueOrDefault().
     */
    public function getCountedDamagedQuantity(): int { return $this->get('counted_damaged_quantity'); }
    public function hasCountedDamagedQuantity(): bool { return $this->has('counted_damaged_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When counted_on_hand_quantity is omitted; use hasCountedOnHandQuantity() or valueOrDefault().
     */
    public function getCountedOnHandQuantity(): int { return $this->get('counted_on_hand_quantity'); }
    public function hasCountedOnHandQuantity(): bool { return $this->has('counted_on_hand_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. When omitted, keeps the line's expected_quality_control_quantity from the same locked physical snapshot whose version was checked; the saved line reports that value as counted. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When counted_quality_control_quantity is omitted; use hasCountedQualityControlQuantity() or valueOrDefault().
     */
    public function getCountedQualityControlQuantity(): int { return $this->get('counted_quality_control_quantity'); }
    public function hasCountedQualityControlQuantity(): bool { return $this->has('counted_quality_control_quantity'); }
    /** Whole-number quantity; fractional quantities are not supported. When omitted, keeps the line's expected_quarantined_quantity from the same locked physical snapshot whose version was checked; the saved line reports that value as counted. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When counted_quarantined_quantity is omitted; use hasCountedQuarantinedQuantity() or valueOrDefault().
     */
    public function getCountedQuarantinedQuantity(): int { return $this->get('counted_quarantined_quantity'); }
    public function hasCountedQuarantinedQuantity(): bool { return $this->has('counted_quarantined_quantity'); }
    /** Physical version read before counting this item. Zero is valid for a missing level. Recount after physical stock changes, even when the count is unchanged; never refresh only the token. Format: int64. minimum: 0.
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
    /** Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When source_observation_sequence is omitted; use hasSourceObservationSequence() or valueOrDefault().
     */
    public function getSourceObservationSequence(): int { return $this->get('source_observation_sequence'); }
    public function hasSourceObservationSequence(): bool { return $this->has('source_observation_sequence'); }
}

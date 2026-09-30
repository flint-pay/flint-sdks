<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $counted_damaged_quantity
 * @property-read string $counted_on_hand_quantity
 * @property-read string $counted_quality_control_quantity
 * @property-read string $counted_quarantined_quantity
 * @property-read string $inventory_item_id
 * @property-read string $source_observation_sequence
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountObservationRequestInput extends Model {
    /** @param array{'counted_damaged_quantity': string, 'counted_on_hand_quantity': string, 'counted_quality_control_quantity': string, 'counted_quarantined_quantity': string, 'inventory_item_id': string, 'source_observation_sequence'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountObservationRequestInput')); }
    /** @return string
     * @throws SdkError When counted_damaged_quantity is omitted; use hasCountedDamagedQuantity() or valueOrDefault().
     */
    public function getCountedDamagedQuantity(): string { return $this->get('counted_damaged_quantity'); }
    public function hasCountedDamagedQuantity(): bool { return $this->has('counted_damaged_quantity'); }
    /** @return string
     * @throws SdkError When counted_on_hand_quantity is omitted; use hasCountedOnHandQuantity() or valueOrDefault().
     */
    public function getCountedOnHandQuantity(): string { return $this->get('counted_on_hand_quantity'); }
    public function hasCountedOnHandQuantity(): bool { return $this->has('counted_on_hand_quantity'); }
    /** @return string
     * @throws SdkError When counted_quality_control_quantity is omitted; use hasCountedQualityControlQuantity() or valueOrDefault().
     */
    public function getCountedQualityControlQuantity(): string { return $this->get('counted_quality_control_quantity'); }
    public function hasCountedQualityControlQuantity(): bool { return $this->has('counted_quality_control_quantity'); }
    /** @return string
     * @throws SdkError When counted_quarantined_quantity is omitted; use hasCountedQuarantinedQuantity() or valueOrDefault().
     */
    public function getCountedQuarantinedQuantity(): string { return $this->get('counted_quarantined_quantity'); }
    public function hasCountedQuarantinedQuantity(): bool { return $this->has('counted_quarantined_quantity'); }
    /** @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** @return string
     * @throws SdkError When source_observation_sequence is omitted; use hasSourceObservationSequence() or valueOrDefault().
     */
    public function getSourceObservationSequence(): string { return $this->get('source_observation_sequence'); }
    public function hasSourceObservationSequence(): bool { return $this->has('source_observation_sequence'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $committed_quantity_delta
 * @property-read string $created_at
 * @property-read string $created_by
 * @property-read string $damaged_quantity_delta
 * @property-read string $external_actor_id
 * @property-read string $held_quantity_delta
 * @property-read string $idempotency_key
 * @property-read string $incoming_quantity_delta
 * @property-read InventoryItem $inventory_item
 * @property-read string $inventory_item_id
 * @property-read string $inventory_level_claim_revision
 * @property-read string $inventory_level_id
 * @property-read string $inventory_level_physical_revision
 * @property-read string $inventory_level_revision
 * @property-read string $inventory_movement_id
 * @property-read string $location_id
 * @property-read string $note
 * @property-read string $occurred_at
 * @property-read string $on_hand_quantity_delta
 * @property-read string $quality_control_quantity_delta
 * @property-read string $quarantined_quantity_delta
 * @property-read string $reason
 * @property-read InventoryLevel $resulting_inventory_level
 * @property-read string $return_disposition_id
 * @property-read string $return_id
 * @property-read string $safety_stock_quantity_delta
 * @property-read string $source_observation_sequence
 * @property-read InventorySourceReference $source_reference
 * @property-read InventorySourceSystem|null $source_system
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class InventoryMovement extends Model {
    /** @param array{'committed_quantity_delta': string, 'created_at': string, 'created_by': string, 'damaged_quantity_delta': string, 'external_actor_id'?: string, 'held_quantity_delta': string, 'idempotency_key'?: string, 'incoming_quantity_delta': string, 'inventory_item'?: mixed, 'inventory_item_id': string, 'inventory_level_claim_revision': string, 'inventory_level_id': string, 'inventory_level_physical_revision': string, 'inventory_level_revision': string, 'inventory_movement_id': string, 'location_id': string, 'note'?: string, 'occurred_at': string, 'on_hand_quantity_delta': string, 'quality_control_quantity_delta': string, 'quarantined_quantity_delta': string, 'reason': string, 'resulting_inventory_level': mixed, 'return_disposition_id'?: string, 'return_id'?: string, 'safety_stock_quantity_delta': string, 'source_observation_sequence'?: string, 'source_reference'?: mixed, 'source_system': mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryMovement')); }
    /** @return string
     * @throws SdkError When committed_quantity_delta is omitted; use hasCommittedQuantityDelta() or valueOrDefault().
     */
    public function getCommittedQuantityDelta(): string { return $this->get('committed_quantity_delta'); }
    public function hasCommittedQuantityDelta(): bool { return $this->has('committed_quantity_delta'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): string { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** @return string
     * @throws SdkError When damaged_quantity_delta is omitted; use hasDamagedQuantityDelta() or valueOrDefault().
     */
    public function getDamagedQuantityDelta(): string { return $this->get('damaged_quantity_delta'); }
    public function hasDamagedQuantityDelta(): bool { return $this->has('damaged_quantity_delta'); }
    /** @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** @return string
     * @throws SdkError When held_quantity_delta is omitted; use hasHeldQuantityDelta() or valueOrDefault().
     */
    public function getHeldQuantityDelta(): string { return $this->get('held_quantity_delta'); }
    public function hasHeldQuantityDelta(): bool { return $this->has('held_quantity_delta'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return string
     * @throws SdkError When incoming_quantity_delta is omitted; use hasIncomingQuantityDelta() or valueOrDefault().
     */
    public function getIncomingQuantityDelta(): string { return $this->get('incoming_quantity_delta'); }
    public function hasIncomingQuantityDelta(): bool { return $this->has('incoming_quantity_delta'); }
    /** @return InventoryItem
     * @throws SdkError When inventory_item is omitted; use hasInventoryItem() or valueOrDefault().
     */
    public function getInventoryItem(): InventoryItem { return $this->get('inventory_item'); }
    public function hasInventoryItem(): bool { return $this->has('inventory_item'); }
    /** @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** @return string
     * @throws SdkError When inventory_level_claim_revision is omitted; use hasInventoryLevelClaimRevision() or valueOrDefault().
     */
    public function getInventoryLevelClaimRevision(): string { return $this->get('inventory_level_claim_revision'); }
    public function hasInventoryLevelClaimRevision(): bool { return $this->has('inventory_level_claim_revision'); }
    /** @return string
     * @throws SdkError When inventory_level_id is omitted; use hasInventoryLevelId() or valueOrDefault().
     */
    public function getInventoryLevelId(): string { return $this->get('inventory_level_id'); }
    public function hasInventoryLevelId(): bool { return $this->has('inventory_level_id'); }
    /** @return string
     * @throws SdkError When inventory_level_physical_revision is omitted; use hasInventoryLevelPhysicalRevision() or valueOrDefault().
     */
    public function getInventoryLevelPhysicalRevision(): string { return $this->get('inventory_level_physical_revision'); }
    public function hasInventoryLevelPhysicalRevision(): bool { return $this->has('inventory_level_physical_revision'); }
    /** @return string
     * @throws SdkError When inventory_level_revision is omitted; use hasInventoryLevelRevision() or valueOrDefault().
     */
    public function getInventoryLevelRevision(): string { return $this->get('inventory_level_revision'); }
    public function hasInventoryLevelRevision(): bool { return $this->has('inventory_level_revision'); }
    /** @return string
     * @throws SdkError When inventory_movement_id is omitted; use hasInventoryMovementId() or valueOrDefault().
     */
    public function getInventoryMovementId(): string { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return string
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** @return string
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** @return string
     * @throws SdkError When on_hand_quantity_delta is omitted; use hasOnHandQuantityDelta() or valueOrDefault().
     */
    public function getOnHandQuantityDelta(): string { return $this->get('on_hand_quantity_delta'); }
    public function hasOnHandQuantityDelta(): bool { return $this->has('on_hand_quantity_delta'); }
    /** @return string
     * @throws SdkError When quality_control_quantity_delta is omitted; use hasQualityControlQuantityDelta() or valueOrDefault().
     */
    public function getQualityControlQuantityDelta(): string { return $this->get('quality_control_quantity_delta'); }
    public function hasQualityControlQuantityDelta(): bool { return $this->has('quality_control_quantity_delta'); }
    /** @return string
     * @throws SdkError When quarantined_quantity_delta is omitted; use hasQuarantinedQuantityDelta() or valueOrDefault().
     */
    public function getQuarantinedQuantityDelta(): string { return $this->get('quarantined_quantity_delta'); }
    public function hasQuarantinedQuantityDelta(): bool { return $this->has('quarantined_quantity_delta'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return InventoryLevel
     * @throws SdkError When resulting_inventory_level is omitted; use hasResultingInventoryLevel() or valueOrDefault().
     */
    public function getResultingInventoryLevel(): InventoryLevel { return $this->get('resulting_inventory_level'); }
    public function hasResultingInventoryLevel(): bool { return $this->has('resulting_inventory_level'); }
    /** @return string
     * @throws SdkError When return_disposition_id is omitted; use hasReturnDispositionId() or valueOrDefault().
     */
    public function getReturnDispositionId(): string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** @return string
     * @throws SdkError When safety_stock_quantity_delta is omitted; use hasSafetyStockQuantityDelta() or valueOrDefault().
     */
    public function getSafetyStockQuantityDelta(): string { return $this->get('safety_stock_quantity_delta'); }
    public function hasSafetyStockQuantityDelta(): bool { return $this->has('safety_stock_quantity_delta'); }
    /** @return string
     * @throws SdkError When source_observation_sequence is omitted; use hasSourceObservationSequence() or valueOrDefault().
     */
    public function getSourceObservationSequence(): string { return $this->get('source_observation_sequence'); }
    public function hasSourceObservationSequence(): bool { return $this->has('source_observation_sequence'); }
    /** @return InventorySourceReference
     * @throws SdkError When source_reference is omitted; use hasSourceReference() or valueOrDefault().
     */
    public function getSourceReference(): InventorySourceReference { return $this->get('source_reference'); }
    public function hasSourceReference(): bool { return $this->has('source_reference'); }
    /** @return InventorySourceSystem|null
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): InventorySourceSystem|null { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

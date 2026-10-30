<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $committed_quantity_delta
 * @property-read string $created_at
 * @property-read ResourceReference|null $created_by
 * @property-read int $damaged_quantity_delta
 * @property-read ?string $external_actor_id
 * @property-read int $held_quantity_delta
 * @property-read ?string $idempotency_key
 * @property-read int $incoming_quantity_delta
 * @property-read ?InventoryItem $inventory_item
 * @property-read string $inventory_item_id
 * @property-read int $inventory_level_claim_version
 * @property-read string $inventory_level_id
 * @property-read int $inventory_level_physical_version
 * @property-read int $inventory_level_version
 * @property-read string $inventory_movement_id
 * @property-read string $location_id
 * @property-read ?string $note
 * @property-read string $occurred_at
 * @property-read int $on_hand_quantity_delta
 * @property-read int $quality_control_quantity_delta
 * @property-read int $quarantined_quantity_delta
 * @property-read ?string $reason
 * @property-read InventoryLevel $resulting_inventory_level
 * @property-read ?string $return_disposition_id
 * @property-read ?string $return_id
 * @property-read int $safety_stock_quantity_delta
 * @property-read ?int $source_observation_sequence
 * @property-read ResourceReference $source_reference
 * @property-read InventorySourceSystem|null $source_system
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InventoryMovement extends Model {
    /** @param array{'committed_quantity_delta': int, 'created_at': string, 'created_by': mixed, 'damaged_quantity_delta': int, 'external_actor_id'?: string, 'held_quantity_delta': int, 'idempotency_key'?: string, 'incoming_quantity_delta': int, 'inventory_item'?: mixed, 'inventory_item_id': string, 'inventory_level_claim_version': int, 'inventory_level_id': string, 'inventory_level_physical_version': int, 'inventory_level_version': int, 'inventory_movement_id': string, 'location_id': string, 'note'?: string, 'occurred_at': string, 'on_hand_quantity_delta': int, 'quality_control_quantity_delta': int, 'quarantined_quantity_delta': int, 'reason'?: string, 'resulting_inventory_level': mixed, 'return_disposition_id'?: string, 'return_id'?: string, 'safety_stock_quantity_delta': int, 'source_observation_sequence'?: int, 'source_reference': mixed, 'source_system': mixed, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryMovement')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getCommittedQuantityDelta(): int { return $this->get('committed_quantity_delta'); }
    public function hasCommittedQuantityDelta(): bool { return $this->has('committed_quantity_delta'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The credential that recorded this movement. null when Flint recorded it on its own, such as an expired hold or a fulfillment handoff. anyOf[1] (Value): {@see ResourceReference}. A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     * @return ResourceReference|null
     */
    public function getCreatedBy(): ResourceReference|null { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getDamagedQuantityDelta(): int { return $this->get('damaged_quantity_delta'); }
    public function hasDamagedQuantityDelta(): bool { return $this->has('damaged_quantity_delta'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255.
     * @return ?string
     */
    public function getExternalActorId(): ?string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getHeldQuantityDelta(): int { return $this->get('held_quantity_delta'); }
    public function hasHeldQuantityDelta(): bool { return $this->has('held_quantity_delta'); }
    /** The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key.
     * @return ?string
     */
    public function getIdempotencyKey(): ?string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getIncomingQuantityDelta(): int { return $this->get('incoming_quantity_delta'); }
    public function hasIncomingQuantityDelta(): bool { return $this->has('incoming_quantity_delta'); }
    /** The inventory item this movement is about. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.
     * @return ?InventoryItem
     */
    public function getInventoryItem(): ?InventoryItem { return $this->get('inventory_item'); }
    public function hasInventoryItem(): bool { return $this->has('inventory_item'); }
    /** inventory_item_id
     * @return string
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Claim version of the inventory level after this movement. Advances when held or committed quantities change. Format: int64. minimum: 0.
     * @return int
     */
    public function getInventoryLevelClaimVersion(): int { return $this->get('inventory_level_claim_version'); }
    public function hasInventoryLevelClaimVersion(): bool { return $this->has('inventory_level_claim_version'); }
    /** inventory_level_id
     * @return string
     */
    public function getInventoryLevelId(): string { return $this->get('inventory_level_id'); }
    public function hasInventoryLevelId(): bool { return $this->has('inventory_level_id'); }
    /** Physical version of the inventory level after this movement. Advances when on-hand or condition quantities change. Format: int64. minimum: 0.
     * @return int
     */
    public function getInventoryLevelPhysicalVersion(): int { return $this->get('inventory_level_physical_version'); }
    public function hasInventoryLevelPhysicalVersion(): bool { return $this->has('inventory_level_physical_version'); }
    /** Version of the inventory level after this movement. Format: int64. minimum: 1.
     * @return int
     */
    public function getInventoryLevelVersion(): int { return $this->get('inventory_level_version'); }
    public function hasInventoryLevelVersion(): bool { return $this->has('inventory_level_version'); }
    /** inventory_movement_id
     * @return string
     */
    public function getInventoryMovementId(): string { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** location_id
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** note
     * @return ?string
     */
    public function getNote(): ?string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
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
    /** The adjustment's reason. Present only on adjustment movements; other movement types already describe what happened. Value enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted", "correction".
     * @return ?string
     */
    public function getReason(): ?string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The quantity state of one inventory item at one Location.
     * @return InventoryLevel
     */
    public function getResultingInventoryLevel(): InventoryLevel { return $this->get('resulting_inventory_level'); }
    public function hasResultingInventoryLevel(): bool { return $this->has('resulting_inventory_level'); }
    /** return_disposition_id
     * @return ?string
     */
    public function getReturnDispositionId(): ?string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** return_id
     * @return ?string
     */
    public function getReturnId(): ?string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     */
    public function getSafetyStockQuantityDelta(): int { return $this->get('safety_stock_quantity_delta'); }
    public function hasSafetyStockQuantityDelta(): bool { return $this->has('safety_stock_quantity_delta'); }
    /** Format: int64. minimum: 0.
     * @return ?int
     */
    public function getSourceObservationSequence(): ?int { return $this->get('source_observation_sequence'); }
    public function hasSourceObservationSequence(): bool { return $this->has('source_observation_sequence'); }
    /** The GET-able resource whose write recorded this movement. A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReference
     */
    public function getSourceReference(): ResourceReference { return $this->get('source_reference'); }
    public function hasSourceReference(): bool { return $this->has('source_reference'); }
    /**  anyOf[1] (Value): {@see InventorySourceSystem}. The system an inventory event came from, such as manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it applies. anyOf[2] (Value): null.
     * @return InventorySourceSystem|null
     */
    public function getSourceSystem(): InventorySourceSystem|null { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
    /** Value enum: "adjustment", "count_applied", "reservation_consumed", "reservation_committed", "reservation_commitment_released", "reservation_expired", "reservation_held", "reservation_hold_released", "reservation_reallocated_in", "reservation_reallocated_out", "return_received", "safety_stock_change", "transfer_departed", "transfer_received", "transfer_returned", "transfer_lost".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

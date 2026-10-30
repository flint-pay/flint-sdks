<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $committed_quantity_delta
 * @property-read string|\DateTimeInterface $created_at
 * @property-read array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null $created_by
 * @property-read int $damaged_quantity_delta
 * @property-read string $external_actor_id
 * @property-read int $held_quantity_delta
 * @property-read string $idempotency_key
 * @property-read int $incoming_quantity_delta
 * @property-read InventoryItemInput|array<array-key, mixed>|\stdClass $inventory_item
 * @property-read string $inventory_item_id
 * @property-read int $inventory_level_claim_version
 * @property-read string $inventory_level_id
 * @property-read int $inventory_level_physical_version
 * @property-read int $inventory_level_version
 * @property-read string $inventory_movement_id
 * @property-read string $location_id
 * @property-read string $note
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read int $on_hand_quantity_delta
 * @property-read int $quality_control_quantity_delta
 * @property-read int $quarantined_quantity_delta
 * @property-read string $reason
 * @property-read InventoryLevelInput|array<array-key, mixed>|\stdClass $resulting_inventory_level
 * @property-read string $return_disposition_id
 * @property-read string $return_id
 * @property-read int $safety_stock_quantity_delta
 * @property-read int $source_observation_sequence
 * @property-read ResourceReferenceInput|array<array-key, mixed>|\stdClass $source_reference
 * @property-read array{'external_source_id'?: string, 'type': string, ...}|object|null $source_system
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryMovementInput extends Model {
    /** @param array{'committed_quantity_delta': int, 'created_at': string|\DateTimeInterface, 'created_by': array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null, 'damaged_quantity_delta': int, 'external_actor_id'?: string, 'held_quantity_delta': int, 'idempotency_key'?: string, 'incoming_quantity_delta': int, 'inventory_item'?: InventoryItemInput|array<array-key, mixed>|\stdClass, 'inventory_item_id': string, 'inventory_level_claim_version': int, 'inventory_level_id': string, 'inventory_level_physical_version': int, 'inventory_level_version': int, 'inventory_movement_id': string, 'location_id': string, 'note'?: string, 'occurred_at': string|\DateTimeInterface, 'on_hand_quantity_delta': int, 'quality_control_quantity_delta': int, 'quarantined_quantity_delta': int, 'reason'?: string, 'resulting_inventory_level': InventoryLevelInput|array<array-key, mixed>|\stdClass, 'return_disposition_id'?: string, 'return_id'?: string, 'safety_stock_quantity_delta': int, 'source_observation_sequence'?: int, 'source_reference': ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'source_system': array{'external_source_id'?: string, 'type': string, ...}|object|null, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryMovementInput')); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When committed_quantity_delta is omitted; use hasCommittedQuantityDelta() or valueOrDefault().
     */
    public function getCommittedQuantityDelta(): int { return $this->get('committed_quantity_delta'); }
    public function hasCommittedQuantityDelta(): bool { return $this->has('committed_quantity_delta'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The credential that recorded this movement. null when Flint recorded it on its own, such as an expired hold or a fulfillment handoff. anyOf[1] (Value): {@see ResourceReferenceInput}. A reference to another resource by `resource_type` and `resource_id`. anyOf[2] (Value): null.
     * @return array{'resource_id': string, 'resource_type': ResourceTypeInput|array<array-key, mixed>|\stdClass}|object|null
     * @throws SdkError When created_by is omitted; use hasCreatedBy() or valueOrDefault().
     */
    public function getCreatedBy(): mixed { return $this->get('created_by'); }
    public function hasCreatedBy(): bool { return $this->has('created_by'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When damaged_quantity_delta is omitted; use hasDamagedQuantityDelta() or valueOrDefault().
     */
    public function getDamagedQuantityDelta(): int { return $this->get('damaged_quantity_delta'); }
    public function hasDamagedQuantityDelta(): bool { return $this->has('damaged_quantity_delta'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When held_quantity_delta is omitted; use hasHeldQuantityDelta() or valueOrDefault().
     */
    public function getHeldQuantityDelta(): int { return $this->get('held_quantity_delta'); }
    public function hasHeldQuantityDelta(): bool { return $this->has('held_quantity_delta'); }
    /** The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When incoming_quantity_delta is omitted; use hasIncomingQuantityDelta() or valueOrDefault().
     */
    public function getIncomingQuantityDelta(): int { return $this->get('incoming_quantity_delta'); }
    public function hasIncomingQuantityDelta(): bool { return $this->has('incoming_quantity_delta'); }
    /** The inventory item this movement is about. Present only when the list request asked for expand=inventory_item. A stock-keeping unit that inventory quantities are tracked against. Catalog variants reference an inventory item rather than carrying their own counter.
     * @return InventoryItemInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_item is omitted; use hasInventoryItem() or valueOrDefault().
     */
    public function getInventoryItem(): mixed { return $this->get('inventory_item'); }
    public function hasInventoryItem(): bool { return $this->has('inventory_item'); }
    /** inventory_item_id
     * @return string
     * @throws SdkError When inventory_item_id is omitted; use hasInventoryItemId() or valueOrDefault().
     */
    public function getInventoryItemId(): string { return $this->get('inventory_item_id'); }
    public function hasInventoryItemId(): bool { return $this->has('inventory_item_id'); }
    /** Claim version of the inventory level after this movement. Advances when held or committed quantities change. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When inventory_level_claim_version is omitted; use hasInventoryLevelClaimVersion() or valueOrDefault().
     */
    public function getInventoryLevelClaimVersion(): int { return $this->get('inventory_level_claim_version'); }
    public function hasInventoryLevelClaimVersion(): bool { return $this->has('inventory_level_claim_version'); }
    /** inventory_level_id
     * @return string
     * @throws SdkError When inventory_level_id is omitted; use hasInventoryLevelId() or valueOrDefault().
     */
    public function getInventoryLevelId(): string { return $this->get('inventory_level_id'); }
    public function hasInventoryLevelId(): bool { return $this->has('inventory_level_id'); }
    /** Physical version of the inventory level after this movement. Advances when on-hand or condition quantities change. Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When inventory_level_physical_version is omitted; use hasInventoryLevelPhysicalVersion() or valueOrDefault().
     */
    public function getInventoryLevelPhysicalVersion(): int { return $this->get('inventory_level_physical_version'); }
    public function hasInventoryLevelPhysicalVersion(): bool { return $this->has('inventory_level_physical_version'); }
    /** Version of the inventory level after this movement. Format: int64. minimum: 1.
     * @return int
     * @throws SdkError When inventory_level_version is omitted; use hasInventoryLevelVersion() or valueOrDefault().
     */
    public function getInventoryLevelVersion(): int { return $this->get('inventory_level_version'); }
    public function hasInventoryLevelVersion(): bool { return $this->has('inventory_level_version'); }
    /** inventory_movement_id
     * @return string
     * @throws SdkError When inventory_movement_id is omitted; use hasInventoryMovementId() or valueOrDefault().
     */
    public function getInventoryMovementId(): string { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
    /** location_id
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** note
     * @return string
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
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
    /** The adjustment's reason. Present only on adjustment movements; other movement types already describe what happened. Value enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted", "correction".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The quantity state of one inventory item at one Location.
     * @return InventoryLevelInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When resulting_inventory_level is omitted; use hasResultingInventoryLevel() or valueOrDefault().
     */
    public function getResultingInventoryLevel(): mixed { return $this->get('resulting_inventory_level'); }
    public function hasResultingInventoryLevel(): bool { return $this->has('resulting_inventory_level'); }
    /** return_disposition_id
     * @return string
     * @throws SdkError When return_disposition_id is omitted; use hasReturnDispositionId() or valueOrDefault().
     */
    public function getReturnDispositionId(): string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** return_id
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Whole-number quantity; fractional quantities are not supported. Format: int64.
     * @return int
     * @throws SdkError When safety_stock_quantity_delta is omitted; use hasSafetyStockQuantityDelta() or valueOrDefault().
     */
    public function getSafetyStockQuantityDelta(): int { return $this->get('safety_stock_quantity_delta'); }
    public function hasSafetyStockQuantityDelta(): bool { return $this->has('safety_stock_quantity_delta'); }
    /** Format: int64. minimum: 0.
     * @return int
     * @throws SdkError When source_observation_sequence is omitted; use hasSourceObservationSequence() or valueOrDefault().
     */
    public function getSourceObservationSequence(): int { return $this->get('source_observation_sequence'); }
    public function hasSourceObservationSequence(): bool { return $this->has('source_observation_sequence'); }
    /** The GET-able resource whose write recorded this movement. A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReferenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source_reference is omitted; use hasSourceReference() or valueOrDefault().
     */
    public function getSourceReference(): mixed { return $this->get('source_reference'); }
    public function hasSourceReference(): bool { return $this->has('source_reference'); }
    /**  anyOf[1] (Value): {@see InventorySourceSystemInput}. The system an inventory event came from, such as manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it applies. anyOf[2] (Value): null.
     * @return array{'external_source_id'?: string, 'type': string, ...}|object|null
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
    /** Value enum: "adjustment", "count_applied", "reservation_consumed", "reservation_committed", "reservation_commitment_released", "reservation_expired", "reservation_held", "reservation_hold_released", "reservation_reallocated_in", "reservation_reallocated_out", "return_received", "safety_stock_change", "transfer_departed", "transfer_received", "transfer_returned", "transfer_lost".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

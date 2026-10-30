<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read ?string $external_actor_id
 * @property-read ?string $idempotency_key
 * @property-read string $inventory_adjustment_id
 * @property-read list<InventoryAdjustmentLine> $lines
 * @property-read ?string $note
 * @property-read string $occurred_at
 * @property-read string $reason
 * @property-read InventorySourceSystem|null $source_system
 * Presence-aware response; omitted optional fields return null. */
final class InventoryAdjustment extends Model {
    /** @param array{'created_at': string, 'external_actor_id'?: string, 'idempotency_key'?: string, 'inventory_adjustment_id': string, 'lines': list<mixed>, 'note'?: string, 'occurred_at': string, 'reason': string, 'source_system': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustment')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255.
     * @return ?string
     */
    public function getExternalActorId(): ?string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key.
     * @return ?string
     */
    public function getIdempotencyKey(): ?string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** inventory_adjustment_id
     * @return string
     */
    public function getInventoryAdjustmentId(): string { return $this->get('inventory_adjustment_id'); }
    public function hasInventoryAdjustmentId(): bool { return $this->has('inventory_adjustment_id'); }
    /**  [] (Value): {@see InventoryAdjustmentLine}. One line of an inventory adjustment, with the item, Location, movement written, and the change in on-hand and each non-sellable quantity.
     * @return list<InventoryAdjustmentLine>
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
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
    /** Value enum: "received", "returned", "sold", "theft", "loss", "condition_changed", "counted", "correction".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /**  anyOf[1] (Value): {@see InventorySourceSystem}. The system an inventory event came from, such as manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it applies. anyOf[2] (Value): null.
     * @return InventorySourceSystem|null
     */
    public function getSourceSystem(): InventorySourceSystem|null { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

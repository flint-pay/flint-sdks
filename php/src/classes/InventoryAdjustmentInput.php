<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $external_actor_id
 * @property-read string $idempotency_key
 * @property-read string $inventory_adjustment_id
 * @property-read list<AdjustmentLineInput|array<array-key, mixed>|\stdClass> $lines
 * @property-read string $note
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $reason
 * @property-read array{'external_source_id'?: string, 'type': string, ...}|object|null $source_system
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAdjustmentInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'idempotency_key': string, 'inventory_adjustment_id': string, 'lines': list<AdjustmentLineInput|array<array-key, mixed>|\stdClass>, 'note'?: string, 'occurred_at': string|\DateTimeInterface, 'reason': string, 'source_system': array{'external_source_id'?: string, 'type': string, ...}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return string
     * @throws SdkError When inventory_adjustment_id is omitted; use hasInventoryAdjustmentId() or valueOrDefault().
     */
    public function getInventoryAdjustmentId(): string { return $this->get('inventory_adjustment_id'); }
    public function hasInventoryAdjustmentId(): bool { return $this->has('inventory_adjustment_id'); }
    /** @return list<AdjustmentLineInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** @return string
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return array{'external_source_id'?: string, 'type': string, ...}|object|null
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

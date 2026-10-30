<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read string $external_actor_id
 * @property-read list<array{'counted_damaged_quantity'?: int, 'counted_on_hand_quantity': int, 'counted_quality_control_quantity'?: int, 'counted_quarantined_quantity'?: int, 'expected_physical_version': int, 'inventory_item_id': string, 'source_observation_sequence'?: int}|object> $observations
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass $source_system
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountsUpdateParams extends Model {
    /** @param array{'expected_version': int, 'external_actor_id'?: string, 'observations': list<array{'counted_damaged_quantity'?: int, 'counted_on_hand_quantity': int, 'counted_quality_control_quantity'?: int, 'counted_quarantined_quantity'?: int, 'expected_physical_version': int, 'inventory_item_id': string, 'source_observation_sequence'?: int}|object>, 'occurred_at'?: string|\DateTimeInterface, 'source_system'?: InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountsUpdateParams')); }
    /** Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Complete replacement containing every count item exactly once. Every physical version must match current stock or the entire save is refused. Recount affected items before submitting fresh fences. minItems: 1. maxItems: 100. [] (Value): {@see InventoryCountObservationRequestInput}. A counted quantity for one item in an inventory count, with the physical version it was read at.
     * @return list<array{'counted_damaged_quantity'?: int, 'counted_on_hand_quantity': int, 'counted_quality_control_quantity'?: int, 'counted_quarantined_quantity'?: int, 'expected_physical_version': int, 'inventory_item_id': string, 'source_observation_sequence'?: int}|object>
     * @throws SdkError When observations is omitted; use hasObservations() or valueOrDefault().
     */
    public function getObservations(): array { return $this->get('observations'); }
    public function hasObservations(): bool { return $this->has('observations'); }
    /** When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies.
     * @return InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

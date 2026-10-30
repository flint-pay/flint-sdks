<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_actor_id
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read array{'external_source_id'?: string, 'type': string, ...}|object|null $source_system
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountObservationProvenanceInput extends Model {
    /** @param array{'external_actor_id'?: string, 'occurred_at'?: string|\DateTimeInterface, 'source_system': array{'external_source_id'?: string, 'type': string, ...}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountObservationProvenanceInput')); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /**  anyOf[1] (Value): {@see InventorySourceSystemInput}. The system an inventory event came from, such as manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it applies. anyOf[2] (Value): null.
     * @return array{'external_source_id'?: string, 'type': string, ...}|object|null
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

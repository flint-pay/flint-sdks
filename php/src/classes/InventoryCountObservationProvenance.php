<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $external_actor_id
 * @property-read ?string $occurred_at
 * @property-read InventorySourceSystem|null $source_system
 * Presence-aware response; omitted optional fields return null. */
final class InventoryCountObservationProvenance extends Model {
    /** @param array{'external_actor_id'?: string, 'occurred_at'?: string, 'source_system': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountObservationProvenance')); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255.
     * @return ?string
     */
    public function getExternalActorId(): ?string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: date-time.
     * @return ?string
     */
    public function getOccurredAt(): ?string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /**  anyOf[1] (Value): {@see InventorySourceSystem}. The system an inventory event came from, such as manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it applies. anyOf[2] (Value): null.
     * @return InventorySourceSystem|null
     */
    public function getSourceSystem(): InventorySourceSystem|null { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

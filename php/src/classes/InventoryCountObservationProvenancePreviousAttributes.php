<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $external_actor_id
 * @property-read string|null $occurred_at
 * @property-read InventorySourceSystemPreviousAttributes|null $source_system
 * Presence-aware response; omitted optional fields return null. */
final class InventoryCountObservationProvenancePreviousAttributes extends Model {
    /** @param array{'external_actor_id'?: mixed, 'occurred_at'?: mixed, 'source_system'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountObservationProvenancePreviousAttributes')); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. anyOf[1] (Value): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalActorId(): string|null { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. anyOf[1] (Value): string. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOccurredAt(): string|null { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. anyOf[1] (Value): {@see InventorySourceSystemPreviousAttributes}. anyOf[2] (Value): null.
     * @return InventorySourceSystemPreviousAttributes|null
     */
    public function getSourceSystem(): InventorySourceSystemPreviousAttributes|null { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

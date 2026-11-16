<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $external_actor_id
 * @property-read string|\DateTimeInterface|null $occurred_at
 * @property-read InventorySourceSystemPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null $source_system
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountObservationProvenancePreviousAttributesInput extends Model {
    /** @param array{'external_actor_id'?: string|null, 'occurred_at'?: string|\DateTimeInterface|null, 'source_system'?: InventorySourceSystemPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountObservationProvenancePreviousAttributesInput')); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. anyOf[1] (Value): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): mixed { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. anyOf[1] (Value): string. When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): mixed { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. anyOf[1] (Value): ({@see InventorySourceSystemPreviousAttributesInput} or null). System the change came from, such as a point-of-sale or warehouse system. `null` when the request named no source system. anyOf[1].anyOf[1] (Value): {@see InventorySourceSystemPreviousAttributesInput}. anyOf[1].anyOf[2] (Value): null. anyOf[2] (Value): null.
     * @return InventorySourceSystemPreviousAttributesInput|array<array-key, mixed>|\stdClass|null|null
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

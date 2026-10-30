<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_actor_id
 * @property-read list<InventoryAdjustmentConditionChangeLineRequestInput|array<array-key, mixed>|\stdClass> $lines
 * @property-read string $note
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $reason
 * @property-read InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass $source_system
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInventoryAdjustmentConditionChangeRequestInput extends Model {
    /** @param array{'external_actor_id'?: string, 'lines': list<InventoryAdjustmentConditionChangeLineRequestInput|array<array-key, mixed>|\stdClass>, 'note'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason': string, 'source_system'?: InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInventoryAdjustmentConditionChangeRequestInput')); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** minItems: 1. maxItems: 100. [] (Value): {@see InventoryAdjustmentConditionChangeLineRequestInput}. One line of an inventory condition change: moves a `quantity` of an item at a Location from one condition to another.
     * @return list<InventoryAdjustmentConditionChangeLineRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When note is omitted; use hasNote() or valueOrDefault().
     */
    public function getNote(): string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** When the event occurred, at most 5 minutes in the future. Required when source_system.type is pos, wms, erp, or other. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Value enum: "condition_changed".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The source system you report for an inventory event, such as manual, pos, wms, erp, or other, with your identifier when it applies.
     * @return InventorySourceSystemRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

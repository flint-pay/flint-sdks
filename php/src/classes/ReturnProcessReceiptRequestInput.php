<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_actor_id
 * @property-read string $external_reference_id
 * @property-read string|\DateTimeInterface $received_at
 * @property-read string $receiving_location_id
 * @property-read ReturnSourceSystemInput|array<array-key, mixed>|\stdClass $source_system
 * Presence-aware input; omitted fields throw when accessed. */
final class ReturnProcessReceiptRequestInput extends Model {
    /** @param array{'external_actor_id'?: string, 'external_reference_id'?: string, 'received_at': string|\DateTimeInterface, 'receiving_location_id': string, 'source_system'?: ReturnSourceSystemInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnProcessReceiptRequestInput')); }
    /** Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. When the event occurred, at most 5 minutes in the future. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When received_at is omitted; use hasReceivedAt() or valueOrDefault().
     */
    public function getReceivedAt(): string|\DateTimeInterface { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When receiving_location_id is omitted; use hasReceivingLocationId() or valueOrDefault().
     */
    public function getReceivingLocationId(): string { return $this->get('receiving_location_id'); }
    public function hasReceivingLocationId(): bool { return $this->has('receiving_location_id'); }
    /** Shape $ (Value): {@see ReturnSourceSystemInput}. The system a return event came from, such as a point of sale or warehouse system, with its own identifier.
     * @return ReturnSourceSystemInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

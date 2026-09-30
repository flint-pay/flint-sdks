<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $actor_id
 * @property-read string $actor_type
 * @property-read string $description
 * @property-read string $event_type
 * @property-read string $invoice_event_id
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read string|\DateTimeInterface $occurred_at
 * Presence-aware input; omitted fields throw when accessed. */
final class InvoiceEventInput extends Model {
    /** @param array{'actor_id'?: string, 'actor_type'?: string, 'description': string, 'event_type': string, 'invoice_event_id': string, 'metadata'?: array<array-key, string>|\stdClass, 'occurred_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InvoiceEventInput')); }
    /** @return string
     * @throws SdkError When actor_id is omitted; use hasActorId() or valueOrDefault().
     */
    public function getActorId(): string { return $this->get('actor_id'); }
    public function hasActorId(): bool { return $this->has('actor_id'); }
    /** @return string
     * @throws SdkError When actor_type is omitted; use hasActorType() or valueOrDefault().
     */
    public function getActorType(): string { return $this->get('actor_type'); }
    public function hasActorType(): bool { return $this->has('actor_type'); }
    /** @return string
     * @throws SdkError When description is omitted; use hasDescription() or valueOrDefault().
     */
    public function getDescription(): string { return $this->get('description'); }
    public function hasDescription(): bool { return $this->has('description'); }
    /** @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** @return string
     * @throws SdkError When invoice_event_id is omitted; use hasInvoiceEventId() or valueOrDefault().
     */
    public function getInvoiceEventId(): string { return $this->get('invoice_event_id'); }
    public function hasInvoiceEventId(): bool { return $this->has('invoice_event_id'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
}

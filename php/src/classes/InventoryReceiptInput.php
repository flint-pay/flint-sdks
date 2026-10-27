<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $external_actor_id
 * @property-read string $idempotency_key
 * @property-read string $inventory_receipt_id
 * @property-read list<InventoryReceiptLineInput|array<array-key, mixed>|\stdClass> $lines
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $return_disposition_id
 * @property-read string $return_id
 * @property-read array{'external_source_id'?: string, 'type': string, ...}|object|null $source_system
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReceiptInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'external_actor_id'?: string, 'idempotency_key': string, 'inventory_receipt_id': string, 'lines': list<InventoryReceiptLineInput|array<array-key, mixed>|\stdClass>, 'occurred_at': string|\DateTimeInterface, 'return_disposition_id'?: string, 'return_id'?: string, 'source_system': array{'external_source_id'?: string, 'type': string, ...}|object|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReceiptInput')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255.
     * @return string
     * @throws SdkError When external_actor_id is omitted; use hasExternalActorId() or valueOrDefault().
     */
    public function getExternalActorId(): string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_receipt_id is omitted; use hasInventoryReceiptId() or valueOrDefault().
     */
    public function getInventoryReceiptId(): string { return $this->get('inventory_receipt_id'); }
    public function hasInventoryReceiptId(): bool { return $this->has('inventory_receipt_id'); }
    /** Shape $ (Value): Array of {@see InventoryReceiptLineInput}. Shape $[] (Value): {@see InventoryReceiptLineInput}. One line of an inventory receipt: a quantity of an item received at a Location with its disposition.
     * @return list<InventoryReceiptLineInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_disposition_id is omitted; use hasReturnDispositionId() or valueOrDefault().
     */
    public function getReturnDispositionId(): string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): {@see InventorySourceSystemInput} or null. Shape $.anyOf[1] (Value): {@see InventorySourceSystemInput}. The system an inventory event came from, such as manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it applies. Shape $.anyOf[2] (Value): null.
     * @return array{'external_source_id'?: string, 'type': string, ...}|object|null
     * @throws SdkError When source_system is omitted; use hasSourceSystem() or valueOrDefault().
     */
    public function getSourceSystem(): mixed { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

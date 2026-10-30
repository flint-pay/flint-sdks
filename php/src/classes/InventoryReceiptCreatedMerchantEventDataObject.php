<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read ?string $external_actor_id
 * @property-read ?string $idempotency_key
 * @property-read string $inventory_receipt_id
 * @property-read list<InventoryReceiptLine> $lines
 * @property-read string $occurred_at
 * @property-read ?string $return_disposition_id
 * @property-read ?string $return_id
 * @property-read InventorySourceSystem|null $source_system
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReceiptCreatedMerchantEventDataObject extends Model {
    /** @param array{'created_at': string, 'external_actor_id'?: string, 'idempotency_key'?: string, 'inventory_receipt_id': string, 'lines': list<mixed>, 'occurred_at': string, 'return_disposition_id'?: string, 'return_id'?: string, 'source_system': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReceiptCreatedMerchantEventDataObject')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Your identifier for the actor who recorded the event. Don't put secrets in this field. maxLength: 255.
     * @return ?string
     */
    public function getExternalActorId(): ?string { return $this->get('external_actor_id'); }
    public function hasExternalActorId(): bool { return $this->has('external_actor_id'); }
    /** The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key.
     * @return ?string
     */
    public function getIdempotencyKey(): ?string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** inventory_receipt_id
     * @return string
     */
    public function getInventoryReceiptId(): string { return $this->get('inventory_receipt_id'); }
    public function hasInventoryReceiptId(): bool { return $this->has('inventory_receipt_id'); }
    /**  [] (Value): {@see InventoryReceiptLine}. One line of an inventory receipt: a quantity of an item received at a Location with its disposition.
     * @return list<InventoryReceiptLine>
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** return_disposition_id
     * @return ?string
     */
    public function getReturnDispositionId(): ?string { return $this->get('return_disposition_id'); }
    public function hasReturnDispositionId(): bool { return $this->has('return_disposition_id'); }
    /** return_id
     * @return ?string
     */
    public function getReturnId(): ?string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /**  anyOf[1] (Value): {@see InventorySourceSystem}. The system an inventory event came from, such as manual entry, a point of sale, a warehouse system, or Flint, with your source identifier when it applies. anyOf[2] (Value): null.
     * @return InventorySourceSystem|null
     */
    public function getSourceSystem(): InventorySourceSystem|null { return $this->get('source_system'); }
    public function hasSourceSystem(): bool { return $this->has('source_system'); }
}

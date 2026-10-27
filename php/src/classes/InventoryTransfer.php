<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $closed_at
 * @property-read string|null $closed_reason
 * @property-read string $created_at
 * @property-read ?string $departed_at
 * @property-read string $destination_location_id
 * @property-read ?string $external_reference_id
 * @property-read ?string $idempotency_key
 * @property-read string $inventory_transfer_id
 * @property-read list<InventoryTransferLine> $lines
 * @property-read ?string $note
 * @property-read string $origin_location_id
 * @property-read ?string $received_at
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransfer extends Model {
    /** @param array{'closed_at'?: string, 'closed_reason'?: string|null, 'created_at': string, 'departed_at'?: string, 'destination_location_id': string, 'external_reference_id'?: string, 'idempotency_key'?: string, 'inventory_transfer_id': string, 'lines': list<mixed>, 'note'?: string, 'origin_location_id': string, 'received_at'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransfer')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getClosedAt(): ?string { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** Shape $ (Value): string or null.  Value enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed", null.
     * @return string|null
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getDepartedAt(): ?string { return $this->get('departed_at'); }
    public function hasDepartedAt(): bool { return $this->has('departed_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDestinationLocationId(): string { return $this->get('destination_location_id'); }
    public function hasDestinationLocationId(): bool { return $this->has('destination_location_id'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key.
     * @return ?string
     */
    public function getIdempotencyKey(): ?string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryTransferId(): string { return $this->get('inventory_transfer_id'); }
    public function hasInventoryTransferId(): bool { return $this->has('inventory_transfer_id'); }
    /** Shape $ (Value): Array of {@see InventoryTransferLine}. Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. Shape $[] (Value): {@see InventoryTransferLine}. One line of an inventory transfer, with the requested quantity and how much has departed, been received by condition, canceled, lost, or returned.
     * @return list<InventoryTransferLine>
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getNote(): ?string { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOriginLocationId(): string { return $this->get('origin_location_id'); }
    public function hasOriginLocationId(): bool { return $this->has('origin_location_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getReceivedAt(): ?string { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** Shape $ (Value): string.  Value enum: "draft", "in_transit", "partially_resolved", "closed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string.  [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". Shape $[] (Value): string.  Value enum: "depart", "receive", "return_to_origin", "report_loss", "cancel".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

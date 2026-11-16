<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $closed_at
 * @property-read mixed $closed_reason
 * @property-read string|null $created_at
 * @property-read string|null $departed_at
 * @property-read string|null $destination_location_id
 * @property-read string|null $external_reference_id
 * @property-read string|null $idempotency_key
 * @property-read string|null $inventory_transfer_id
 * @property-read list<InventoryTransferLinePreviousAttributes>|null $lines
 * @property-read string|null $note
 * @property-read string|null $origin_location_id
 * @property-read string|null $received_at
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class InventoryTransferUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'closed_at'?: mixed, 'closed_reason'?: mixed, 'created_at'?: mixed, 'departed_at'?: mixed, 'destination_location_id'?: mixed, 'external_reference_id'?: mixed, 'idempotency_key'?: mixed, 'inventory_transfer_id'?: mixed, 'lines'?: mixed, 'note'?: mixed, 'origin_location_id'?: mixed, 'received_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getClosedAt(): string|null { return $this->get('closed_at'); }
    public function hasClosedAt(): bool { return $this->has('closed_at'); }
    /** How the transfer ended. `null` when the transfer isn't closed. Value enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed", null. anyOf[1] (Value): string or null. How the transfer ended. `null` when the transfer isn't closed. Value enum: "received", "canceled", "received_with_cancellation", "returned", "lost", "mixed", null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getClosedReason(): mixed { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDepartedAt(): string|null { return $this->get('departed_at'); }
    public function hasDepartedAt(): bool { return $this->has('departed_at'); }
    /** ID of the Location the stock goes to. anyOf[1] (Value): string. ID of the Location the stock goes to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDestinationLocationId(): string|null { return $this->get('destination_location_id'); }
    public function hasDestinationLocationId(): bool { return $this->has('destination_location_id'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[1] (Value): string. Unique identifier for this inventory transfer, prefixed `invtr_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryTransferId(): string|null { return $this->get('inventory_transfer_id'); }
    public function hasInventoryTransferId(): bool { return $this->has('inventory_transfer_id'); }
    /** Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. anyOf[1] (Value): Array of {@see InventoryTransferLinePreviousAttributes}. Owned collection of transfer lines. Lines have no lifecycle outside this transfer; PATCH replaces the full collection. anyOf[1][] (Value): {@see InventoryTransferLinePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<InventoryTransferLinePreviousAttributes>|null
     */
    public function getLines(): array|null { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Free-text note about the transfer. anyOf[1] (Value): string. Free-text note about the transfer. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getNote(): string|null { return $this->get('note'); }
    public function hasNote(): bool { return $this->has('note'); }
    /** ID of the Location the stock leaves. anyOf[1] (Value): string. ID of the Location the stock leaves. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOriginLocationId(): string|null { return $this->get('origin_location_id'); }
    public function hasOriginLocationId(): bool { return $this->has('origin_location_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReceivedAt(): string|null { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed". anyOf[1] (Value): string. Where the transfer stands, worked out from the quantities that have left the origin and have since been received, returned, or reported lost. Value enum: "draft", "in_transit", "partially_resolved", "closed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[1] (Value): Array of string. Actions that can change this transfer now. `depart` and `cancel` need units that haven't left the origin. `receive`, `return_to_origin`, and `report_loss` need units in transit. Empty once the transfer is closed. [] enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[1][] (Value): string.  Value enum: "depart", "receive", "return_to_origin", "report_loss", "cancel". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

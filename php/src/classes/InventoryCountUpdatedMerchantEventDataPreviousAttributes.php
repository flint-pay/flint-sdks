<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $applied_at
 * @property-read string|null $created_at
 * @property-read string|null $idempotency_key
 * @property-read string|null $inventory_count_id
 * @property-read list<InventoryCountLine>|null $lines
 * @property-read string|null $location_id
 * @property-read InventoryCountObservationProvenance|null $observation_provenance
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class InventoryCountUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'applied_at'?: mixed, 'created_at'?: mixed, 'idempotency_key'?: mixed, 'inventory_count_id'?: mixed, 'lines'?: mixed, 'location_id'?: mixed, 'observation_provenance'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountUpdatedMerchantEventDataPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAppliedAt(): string|null { return $this->get('applied_at'); }
    public function hasAppliedAt(): bool { return $this->has('applied_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Unique identifier for this inventory count, prefixed `invc_`. anyOf[1] (Value): string. Unique identifier for this inventory count, prefixed `invc_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryCountId(): string|null { return $this->get('inventory_count_id'); }
    public function hasInventoryCountId(): bool { return $this->has('inventory_count_id'); }
    /** Count lines, one for each inventory item being counted. anyOf[1] (Value): Array of {@see InventoryCountLine}. Count lines, one for each inventory item being counted. anyOf[1][] (Value): {@see InventoryCountLine}. One item's line in an inventory count, with the quantities Flint expected, the quantities counted, and the variance applied. anyOf[2] (Value): null.
     * @return list<InventoryCountLine>|null
     */
    public function getLines(): array|null { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** ID of the Location whose stock is counted. anyOf[1] (Value): string. ID of the Location whose stock is counted. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Source system, actor, and time reported with the count's observations. anyOf[1] (Value): {@see InventoryCountObservationProvenance}. Source system, actor, and time reported with the count's observations. anyOf[2] (Value): null.
     * @return InventoryCountObservationProvenance|null
     */
    public function getObservationProvenance(): InventoryCountObservationProvenance|null { return $this->get('observation_provenance'); }
    public function hasObservationProvenance(): bool { return $this->has('observation_provenance'); }
    /** Whether the count is still open. Applying or canceling a `draft` count ends it. Value enum: "draft", "applied", "canceled". anyOf[1] (Value): string. Whether the count is still open. Applying or canceling a `draft` count ends it. Value enum: "draft", "applied", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. [] enum: "apply", "cancel". anyOf[1] (Value): Array of string. Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. [] enum: "apply", "cancel". anyOf[1][] (Value): string.  Value enum: "apply", "cancel". anyOf[2] (Value): null.
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

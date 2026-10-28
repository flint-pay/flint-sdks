<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $applied_at
 * @property-read string $created_at
 * @property-read ?string $idempotency_key
 * @property-read string $inventory_count_id
 * @property-read list<InventoryCountLine> $lines
 * @property-read string $location_id
 * @property-read ?InventoryCountObservationProvenance $observation_provenance
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class InventoryCount extends Model {
    /** @param array{'applied_at'?: string, 'created_at': string, 'idempotency_key'?: string, 'inventory_count_id': string, 'lines': list<mixed>, 'location_id': string, 'observation_provenance'?: mixed, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCount')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getAppliedAt(): ?string { return $this->get('applied_at'); }
    public function hasAppliedAt(): bool { return $this->has('applied_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key.
     * @return ?string
     */
    public function getIdempotencyKey(): ?string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryCountId(): string { return $this->get('inventory_count_id'); }
    public function hasInventoryCountId(): bool { return $this->has('inventory_count_id'); }
    /** Shape $ (Value): Array of {@see InventoryCountLine}. Shape $[] (Value): {@see InventoryCountLine}. One item's line in an inventory count, with the quantities Flint expected, the quantities counted, and the variance applied.
     * @return list<InventoryCountLine>
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): {@see InventoryCountObservationProvenance}. Where an inventory count came from: the source system, an external actor ID, and when the event occurred.
     * @return ?InventoryCountObservationProvenance
     */
    public function getObservationProvenance(): ?InventoryCountObservationProvenance { return $this->get('observation_provenance'); }
    public function hasObservationProvenance(): bool { return $this->has('observation_provenance'); }
    /** Shape $ (Value): string.  Value enum: "draft", "applied", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. [] enum: "apply", "cancel". Shape $[] (Value): string.  Value enum: "apply", "cancel".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

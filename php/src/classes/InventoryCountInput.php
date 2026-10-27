<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $applied_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $idempotency_key
 * @property-read string $inventory_count_id
 * @property-read list<InventoryCountLineInput|array<array-key, mixed>|\stdClass> $lines
 * @property-read string $location_id
 * @property-read InventoryCountObservationProvenanceInput|array<array-key, mixed>|\stdClass $observation_provenance
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountInput extends Model {
    /** @param array{'applied_at'?: string|\DateTimeInterface, 'created_at': string|\DateTimeInterface, 'idempotency_key'?: string, 'inventory_count_id': string, 'lines': list<InventoryCountLineInput|array<array-key, mixed>|\stdClass>, 'location_id': string, 'observation_provenance'?: InventoryCountObservationProvenanceInput|array<array-key, mixed>|\stdClass, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountInput')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When applied_at is omitted; use hasAppliedAt() or valueOrDefault().
     */
    public function getAppliedAt(): string|\DateTimeInterface { return $this->get('applied_at'); }
    public function hasAppliedAt(): bool { return $this->has('applied_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_count_id is omitted; use hasInventoryCountId() or valueOrDefault().
     */
    public function getInventoryCountId(): string { return $this->get('inventory_count_id'); }
    public function hasInventoryCountId(): bool { return $this->has('inventory_count_id'); }
    /** Shape $ (Value): Array of {@see InventoryCountLineInput}. Shape $[] (Value): {@see InventoryCountLineInput}. One item's line in an inventory count, with the quantities Flint expected, the quantities counted, and the variance applied.
     * @return list<InventoryCountLineInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): {@see InventoryCountObservationProvenanceInput}. Where an inventory count came from: the source system, an external actor ID, and when the event occurred.
     * @return InventoryCountObservationProvenanceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When observation_provenance is omitted; use hasObservationProvenance() or valueOrDefault().
     */
    public function getObservationProvenance(): mixed { return $this->get('observation_provenance'); }
    public function hasObservationProvenance(): bool { return $this->has('observation_provenance'); }
    /** Shape $ (Value): string.  Value enum: "draft", "applied", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. Actions that can change this count now. A draft can be canceled, and applied once every line has an observation. Empty after the count is applied or canceled. [] enum: "apply", "cancel". Shape $[] (Value): string.  Value enum: "apply", "cancel".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

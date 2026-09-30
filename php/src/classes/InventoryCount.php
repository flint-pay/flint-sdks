<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $applied_at
 * @property-read string $created_at
 * @property-read string $idempotency_key
 * @property-read string $inventory_count_id
 * @property-read list<InventoryCountLine> $lines
 * @property-read string $location_id
 * @property-read CountProvenance $observation_provenance
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class InventoryCount extends Model {
    /** @param array{'applied_at'?: string, 'created_at': string, 'idempotency_key': string, 'inventory_count_id': string, 'lines': list<mixed>, 'location_id': string, 'observation_provenance'?: mixed, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCount')); }
    /** @return string
     * @throws SdkError When applied_at is omitted; use hasAppliedAt() or valueOrDefault().
     */
    public function getAppliedAt(): string { return $this->get('applied_at'); }
    public function hasAppliedAt(): bool { return $this->has('applied_at'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return string
     * @throws SdkError When inventory_count_id is omitted; use hasInventoryCountId() or valueOrDefault().
     */
    public function getInventoryCountId(): string { return $this->get('inventory_count_id'); }
    public function hasInventoryCountId(): bool { return $this->has('inventory_count_id'); }
    /** @return list<InventoryCountLine>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return CountProvenance
     * @throws SdkError When observation_provenance is omitted; use hasObservationProvenance() or valueOrDefault().
     */
    public function getObservationProvenance(): CountProvenance { return $this->get('observation_provenance'); }
    public function hasObservationProvenance(): bool { return $this->has('observation_provenance'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

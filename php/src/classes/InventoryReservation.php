<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $closed_reason
 * @property-read string $created_at
 * @property-read string $idempotency_key
 * @property-read InventoryActionRequired $inventory_action_required
 * @property-read string $inventory_reservation_id
 * @property-read InventoryRoutingSource $inventory_routing_source
 * @property-read list<ReservationLine> $lines
 * @property-read InventoryReservationOwner $owner
 * @property-read string $replacement_inventory_reservation_id
 * @property-read string $source_inventory_reservation_id
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class InventoryReservation extends Model {
    /** @param array{'closed_reason'?: string|null, 'created_at': string, 'idempotency_key': string, 'inventory_action_required'?: mixed, 'inventory_reservation_id': string, 'inventory_routing_source': mixed, 'lines': list<mixed>, 'owner': mixed, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservation')); }
    /** @return string|null
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
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
    /** @return InventoryActionRequired
     * @throws SdkError When inventory_action_required is omitted; use hasInventoryActionRequired() or valueOrDefault().
     */
    public function getInventoryActionRequired(): InventoryActionRequired { return $this->get('inventory_action_required'); }
    public function hasInventoryActionRequired(): bool { return $this->has('inventory_action_required'); }
    /** @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** @return InventoryRoutingSource
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): InventoryRoutingSource { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** @return list<ReservationLine>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** @return InventoryReservationOwner
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): InventoryReservationOwner { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** @return string
     * @throws SdkError When replacement_inventory_reservation_id is omitted; use hasReplacementInventoryReservationId() or valueOrDefault().
     */
    public function getReplacementInventoryReservationId(): string { return $this->get('replacement_inventory_reservation_id'); }
    public function hasReplacementInventoryReservationId(): bool { return $this->has('replacement_inventory_reservation_id'); }
    /** @return string
     * @throws SdkError When source_inventory_reservation_id is omitted; use hasSourceInventoryReservationId() or valueOrDefault().
     */
    public function getSourceInventoryReservationId(): string { return $this->get('source_inventory_reservation_id'); }
    public function hasSourceInventoryReservationId(): bool { return $this->has('source_inventory_reservation_id'); }
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

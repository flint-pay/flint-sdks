<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $closed_reason
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $idempotency_key
 * @property-read InventoryActionRequiredInput|array<array-key, mixed>|\stdClass $inventory_action_required
 * @property-read string $inventory_reservation_id
 * @property-read InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read list<ReservationLineInput|array<array-key, mixed>|\stdClass> $lines
 * @property-read InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass $owner
 * @property-read string $replacement_inventory_reservation_id
 * @property-read string $source_inventory_reservation_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationInput extends Model {
    /** @param array{'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'idempotency_key': string, 'inventory_action_required'?: InventoryActionRequiredInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_id': string, 'inventory_routing_source': InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'lines': list<ReservationLineInput|array<array-key, mixed>|\stdClass>, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationInput')); }
    /** @return string|null
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return InventoryActionRequiredInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_action_required is omitted; use hasInventoryActionRequired() or valueOrDefault().
     */
    public function getInventoryActionRequired(): mixed { return $this->get('inventory_action_required'); }
    public function hasInventoryActionRequired(): bool { return $this->has('inventory_action_required'); }
    /** @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** @return InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** @return list<ReservationLineInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** @return InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): mixed { return $this->get('owner'); }
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
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

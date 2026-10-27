<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $closed_reason
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string $idempotency_key
 * @property-read InventoryActionRequiredInput|array<array-key, mixed>|\stdClass $inventory_action_required
 * @property-read string $inventory_reservation_id
 * @property-read InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass> $lines
 * @property-read InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass $owner
 * @property-read string $replacement_inventory_reservation_id
 * @property-read string $source_inventory_reservation_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationInput extends Model {
    /** @param array{'closed_reason'?: string|null, 'created_at': string|\DateTimeInterface, 'expires_at': string|\DateTimeInterface|null, 'idempotency_key'?: string, 'inventory_action_required'?: InventoryActionRequiredInput|array<array-key, mixed>|\stdClass, 'inventory_reservation_id': string, 'inventory_routing_source': InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass, 'lines': list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass>, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationInput')); }
    /** Shape $ (Value): string or null. How the reservation ended. mixed when more than one terminal outcome applied. Value enum: "consumed", "released", "expired", "reallocated", "mixed", null.
     * @return string|null
     * @throws SdkError When closed_reason is omitted; use hasClosedReason() or valueOrDefault().
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string or null. When held quantity is released if it isn't committed first. null once no line holds quantity. Committed and consumed quantity never expire. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string. The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key.
     * @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Shape $ (Value): {@see InventoryActionRequiredInput}. Present when the claim needs a merchant action before commerce can continue. Says that an inventory reservation needs action, with the `reason` and the reservation lines affected.
     * @return InventoryActionRequiredInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_action_required is omitted; use hasInventoryActionRequired() or valueOrDefault().
     */
    public function getInventoryActionRequired(): mixed { return $this->get('inventory_action_required'); }
    public function hasInventoryActionRequired(): bool { return $this->has('inventory_action_required'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** Shape $ (Value): {@see InventoryRoutingSourceInput}. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.
     * @return InventoryRoutingSourceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Shape $ (Value): Array of {@see InventoryReservationLineInput}. Shape $[] (Value): {@see InventoryReservationLineInput}. One item's location allocation within a reservation.
     * @return list<InventoryReservationLineInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When lines is omitted; use hasLines() or valueOrDefault().
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Shape $ (Value): {@see InventoryReservationOwnerInput}. Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order.
     * @return InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): mixed { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** Shape $ (Value): string. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity.
     * @return string
     * @throws SdkError When replacement_inventory_reservation_id is omitted; use hasReplacementInventoryReservationId() or valueOrDefault().
     */
    public function getReplacementInventoryReservationId(): string { return $this->get('replacement_inventory_reservation_id'); }
    public function hasReplacementInventoryReservationId(): bool { return $this->has('replacement_inventory_reservation_id'); }
    /** Shape $ (Value): string. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * @return string
     * @throws SdkError When source_inventory_reservation_id is omitted; use hasSourceInventoryReservationId() or valueOrDefault().
     */
    public function getSourceInventoryReservationId(): string { return $this->get('source_inventory_reservation_id'); }
    public function hasSourceInventoryReservationId(): bool { return $this->has('source_inventory_reservation_id'); }
    /** Shape $ (Value): string. active while any held or committed quantity remains; closed once none does. Value enum: "active", "closed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. [] enum: "commit", "consume", "release". Shape $[] (Value): string.  Value enum: "commit", "consume", "release".
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
    /** Shape $ (Value): integer string. The reservation version. Send it as expected_version to reject a write if the reservation changed. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 0.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $closed_reason
 * @property-read string $created_at
 * @property-read string|null $expires_at
 * @property-read ?string $idempotency_key
 * @property-read ?InventoryActionRequired $inventory_action_required
 * @property-read string $inventory_reservation_id
 * @property-read InventoryRoutingSource $inventory_routing_source
 * @property-read list<InventoryReservationLine> $lines
 * @property-read InventoryReservationCommittedMerchantEventDataObjectOwnerMerchant|InventoryReservationCommittedMerchantEventDataObjectOwnerOrder|\stdClass $owner
 * @property-read ?string $replacement_inventory_reservation_id
 * @property-read ?string $source_inventory_reservation_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationCommittedMerchantEventDataObject extends Model {
    /** @param array{'closed_reason'?: string|null, 'created_at': string, 'expires_at': string|null, 'idempotency_key'?: string, 'inventory_action_required'?: mixed, 'inventory_reservation_id': string, 'inventory_routing_source': mixed, 'lines': list<mixed>, 'owner': mixed, 'replacement_inventory_reservation_id'?: string, 'source_inventory_reservation_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationCommittedMerchantEventDataObject')); }
    /** How the reservation ended. mixed when more than one terminal outcome applied. Value enum: "consumed", "released", "expired", "reallocated", "mixed", null.
     * @return string|null
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When held quantity is released if it isn't committed first. null once no line holds quantity. Committed and consumed quantity never expire. Format: date-time.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The Idempotency-Key of the request that created this resource; on a movement, of the command that wrote it. Omitted when that request had no key.
     * @return ?string
     */
    public function getIdempotencyKey(): ?string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Present when the claim needs a merchant action before commerce can continue. Says that an inventory reservation needs action, with the `reason` and the reservation lines affected.
     * @return ?InventoryActionRequired
     */
    public function getInventoryActionRequired(): ?InventoryActionRequired { return $this->get('inventory_action_required'); }
    public function hasInventoryActionRequired(): bool { return $this->has('inventory_action_required'); }
    /** inventory_reservation_id
     * @return string
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision.
     * @return InventoryRoutingSource
     */
    public function getInventoryRoutingSource(): InventoryRoutingSource { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /**  [] (Value): {@see InventoryReservationLine}. One item's location allocation within a reservation.
     * @return list<InventoryReservationLine>
     */
    public function getLines(): array { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order.
     * @return InventoryReservationCommittedMerchantEventDataObjectOwnerMerchant|InventoryReservationCommittedMerchantEventDataObjectOwnerOrder|\stdClass
     */
    public function getOwner(): InventoryReservationCommittedMerchantEventDataObjectOwnerMerchant|InventoryReservationCommittedMerchantEventDataObjectOwnerOrder|\stdClass { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity.
     * @return ?string
     */
    public function getReplacementInventoryReservationId(): ?string { return $this->get('replacement_inventory_reservation_id'); }
    public function hasReplacementInventoryReservationId(): bool { return $this->has('replacement_inventory_reservation_id'); }
    /** Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity.
     * @return ?string
     */
    public function getSourceInventoryReservationId(): ?string { return $this->get('source_inventory_reservation_id'); }
    public function hasSourceInventoryReservationId(): bool { return $this->has('source_inventory_reservation_id'); }
    /** active while any held or committed quantity remains; closed once none does. Value enum: "active", "closed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. [] enum: "commit", "consume", "release". [] (Value): string.  Value enum: "commit", "consume", "release".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** The reservation version. Send it as expected_version to reject a write if the reservation changed. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

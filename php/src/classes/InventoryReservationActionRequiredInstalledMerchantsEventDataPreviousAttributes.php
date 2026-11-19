<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $closed_reason
 * @property-read string|null $created_at
 * @property-read string|null $expires_at
 * @property-read string|null $idempotency_key
 * @property-read InventoryActionRequiredPreviousAttributes|null $inventory_action_required
 * @property-read string|null $inventory_reservation_id
 * @property-read InventoryRoutingSourcePreviousAttributes|null $inventory_routing_source
 * @property-read list<InventoryReservationLinePreviousAttributes>|null $lines
 * @property-read mixed $owner
 * @property-read string|null $replacement_inventory_reservation_id
 * @property-read string|null $source_inventory_reservation_id
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationActionRequiredInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'closed_reason'?: mixed, 'created_at'?: mixed, 'expires_at'?: mixed, 'idempotency_key'?: mixed, 'inventory_action_required'?: mixed, 'inventory_reservation_id'?: mixed, 'inventory_routing_source'?: mixed, 'lines'?: mixed, 'owner'?: mixed, 'replacement_inventory_reservation_id'?: mixed, 'source_inventory_reservation_id'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationActionRequiredInstalledMerchantsEventDataPreviousAttributes')); }
    /** How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null. anyOf[1] (Value): string. How the reservation ended. adopted when its remaining held stock moved to a delivery selection. mixed when more than one terminal outcome applied. `null` when the reservation isn't closed. Value enum: "consumed", "released", "expired", "reallocated", "adopted", "mixed", null. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getClosedReason(): string|null { return $this->get('closed_reason'); }
    public function hasClosedReason(): bool { return $this->has('closed_reason'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Deadline for held or unconfirmed backordered quantity. While an order payment waits for a buyer action, this is the earlier of the stock hold deadline and the payment attempt deadline. Flint can keep stock held while the payment outcome is uncertain. `null` when no line holds quantity or has unconfirmed backordered quantity. anyOf[1] (Value): string. Deadline for held or unconfirmed backordered quantity. While an order payment waits for a buyer action, this is the earlier of the stock hold deadline and the payment attempt deadline. Flint can keep stock held while the payment outcome is uncertain. `null` when no line holds quantity or has unconfirmed backordered quantity. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getIdempotencyKey(): string|null { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Present when the claim needs a merchant action before commerce can continue. anyOf[1] (Value): {@see InventoryActionRequiredPreviousAttributes}. anyOf[2] (Value): null.
     * @return InventoryActionRequiredPreviousAttributes|null
     */
    public function getInventoryActionRequired(): InventoryActionRequiredPreviousAttributes|null { return $this->get('inventory_action_required'); }
    public function hasInventoryActionRequired(): bool { return $this->has('inventory_action_required'); }
    /** Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[1] (Value): string. Unique identifier for this inventory reservation, prefixed `invr_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryReservationId(): string|null { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** How Flint chooses the Locations that serve the reservation: one fixed Location, an allocation policy, or a specific policy revision. anyOf[1] (Value): {@see InventoryRoutingSourcePreviousAttributes}. anyOf[2] (Value): null.
     * @return InventoryRoutingSourcePreviousAttributes|null
     */
    public function getInventoryRoutingSource(): InventoryRoutingSourcePreviousAttributes|null { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Allocations of the reserved stock, one for each item and Location. anyOf[1] (Value): Array of {@see InventoryReservationLinePreviousAttributes}. Allocations of the reserved stock, one for each item and Location. anyOf[1][] (Value): {@see InventoryReservationLinePreviousAttributes}. anyOf[2] (Value): null.
     * @return list<InventoryReservationLinePreviousAttributes>|null
     */
    public function getLines(): array|null { return $this->get('lines'); }
    public function hasLines(): bool { return $this->has('lines'); }
    /** Who holds the reservation: a `key` you choose, or an order Flint holds the stock for. anyOf[1] (Value): {@see InventoryReservationOwnerPreviousAttributes}. Who holds an inventory reservation: either a merchant claim identified by your `key`, or an order. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getOwner(): mixed { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
    /** Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. anyOf[1] (Value): string. Set on a reservation whose claim Flint moved when it rerouted an order: the replacement reservation that now holds the quantity named in this reservation's reallocated_quantity. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReplacementInventoryReservationId(): string|null { return $this->get('replacement_inventory_reservation_id'); }
    public function hasReplacementInventoryReservationId(): bool { return $this->has('replacement_inventory_reservation_id'); }
    /** Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. anyOf[1] (Value): string. Set on a replacement reservation: the reservation whose claim Flint moved here when it rerouted an order. This reservation holds the quantity that reservation reports as reallocated_quantity. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSourceInventoryReservationId(): string|null { return $this->get('source_inventory_reservation_id'); }
    public function hasSourceInventoryReservationId(): bool { return $this->has('source_inventory_reservation_id'); }
    /** active while any held, committed, or backordered quantity remains; closed once none does. Value enum: "active", "closed". anyOf[1] (Value): string. active while any held, committed, or backordered quantity remains; closed once none does. Value enum: "active", "closed". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. [] enum: "commit", "consume", "release". anyOf[1] (Value): Array of string. Actions that can change this reservation now. Empty for a closed reservation and for one Flint holds for an order. Resending targets already applied succeeds in any status. Computed when Flint produced this response or event, so replays and webhooks keep their original value. [] enum: "commit", "consume", "release". anyOf[1][] (Value): string.  Value enum: "commit", "consume", "release". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** The reservation version. Send it as expected_version to reject a write if the reservation changed. anyOf[1] (Value): integer. The reservation version. Send it as expected_version to reject a write if the reservation changed. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

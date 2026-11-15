<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read string $inventory_reservation_id
 * @property-read string $owner_type
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryInventoryReservationSummary extends Model {
    /** @param array{'expires_at': string, 'inventory_reservation_id': string, 'owner_type': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInventoryReservationSummary')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** ID of the inventory reservation holding stock for the selection.
     * @return string
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** Which kind of owner holds the reservation. Value enum: "order".
     * @return string
     */
    public function getOwnerType(): string { return $this->get('owner_type'); }
    public function hasOwnerType(): bool { return $this->has('owner_type'); }
    /** Whether the reservation is still holding stock. Value enum: "active", "closed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

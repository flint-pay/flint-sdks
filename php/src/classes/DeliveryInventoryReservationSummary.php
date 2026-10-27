<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expires_at
 * @property-read string $inventory_reservation_id
 * @property-read string $owner_type
 * @property-read ?string $required_next_action
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryInventoryReservationSummary extends Model {
    /** @param array{'expires_at': string, 'inventory_reservation_id': string, 'owner_type': string, 'required_next_action'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInventoryReservationSummary')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getExpiresAt(): string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** Shape $ (Value): string.  Value enum: "delivery_selection", "payment_attempt", "order_balance_hold".
     * @return string
     */
    public function getOwnerType(): string { return $this->get('owner_type'); }
    public function hasOwnerType(): bool { return $this->has('owner_type'); }
    /** Shape $ (Value): string.  Value enum: "none", "retry_payment", "replace_selection", "contact_merchant".
     * @return ?string
     */
    public function getRequiredNextAction(): ?string { return $this->get('required_next_action'); }
    public function hasRequiredNextAction(): bool { return $this->has('required_next_action'); }
    /** Shape $ (Value): string.  Value enum: "active", "closed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

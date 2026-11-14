<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $inventory_reservation_id
 * @property-read string $owner_type
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryInventoryReservationSummaryInput extends Model {
    /** @param array{'expires_at': string|\DateTimeInterface, 'inventory_reservation_id': string, 'owner_type': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInventoryReservationSummaryInput')); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** ID of the inventory reservation holding stock for the selection. Example: "invr_01KEZF7C0041ENRR0C2NF3AP12".
     * @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** Which kind of owner holds the reservation. Value enum: "order".
     * @return string
     * @throws SdkError When owner_type is omitted; use hasOwnerType() or valueOrDefault().
     */
    public function getOwnerType(): string { return $this->get('owner_type'); }
    public function hasOwnerType(): bool { return $this->has('owner_type'); }
    /** Whether the reservation is still holding stock. Value enum: "active", "closed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

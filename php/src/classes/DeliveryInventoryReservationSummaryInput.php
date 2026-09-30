<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $inventory_reservation_id
 * @property-read string $owner_type
 * @property-read string $required_next_action
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliveryInventoryReservationSummaryInput extends Model {
    /** @param array{'expires_at': string|\DateTimeInterface, 'inventory_reservation_id': string, 'owner_type': string, 'required_next_action'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryInventoryReservationSummaryInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
    /** @return string
     * @throws SdkError When owner_type is omitted; use hasOwnerType() or valueOrDefault().
     */
    public function getOwnerType(): string { return $this->get('owner_type'); }
    public function hasOwnerType(): bool { return $this->has('owner_type'); }
    /** @return string
     * @throws SdkError When required_next_action is omitted; use hasRequiredNextAction() or valueOrDefault().
     */
    public function getRequiredNextAction(): string { return $this->get('required_next_action'); }
    public function hasRequiredNextAction(): bool { return $this->has('required_next_action'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

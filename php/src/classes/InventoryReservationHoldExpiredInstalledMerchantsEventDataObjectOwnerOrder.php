<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $order_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationHoldExpiredInstalledMerchantsEventDataObjectOwnerOrder extends Model {
    /** @param array{'order_id'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationHoldExpiredInstalledMerchantsEventDataObjectOwnerOrder')); }
    /** The order Flint holds the stock for. Absent only on a closed reservation whose order Flint can no longer identify.
     * @return ?string
     */
    public function getOrderId(): ?string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Value enum: "order".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

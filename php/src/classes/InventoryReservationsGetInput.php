<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_reservation_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsGetInput extends Model {
    /** @param array{'inventory_reservation_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsGetInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_reservation_id is omitted; use hasInventoryReservationId() or valueOrDefault().
     */
    public function getInventoryReservationId(): string { return $this->get('inventory_reservation_id'); }
    public function hasInventoryReservationId(): bool { return $this->has('inventory_reservation_id'); }
}

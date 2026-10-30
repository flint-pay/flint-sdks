<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<InventoryLevelInput|array<array-key, mixed>|\stdClass> $inventory_levels
 * @property-read InventoryReservationInput|array<array-key, mixed>|\stdClass $inventory_reservation
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationResultInput extends Model {
    /** @param array{'inventory_levels': list<InventoryLevelInput|array<array-key, mixed>|\stdClass>, 'inventory_reservation': InventoryReservationInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationResultInput')); }
    /** Post-commit state of every level this command touched, so no follow-up read is needed. A replay returns the levels the original command produced. [] (Value): {@see InventoryLevelInput}. The quantity state of one inventory item at one Location.
     * @return list<InventoryLevelInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When inventory_levels is omitted; use hasInventoryLevels() or valueOrDefault().
     */
    public function getInventoryLevels(): array { return $this->get('inventory_levels'); }
    public function hasInventoryLevels(): bool { return $this->has('inventory_levels'); }
    /** A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.
     * @return InventoryReservationInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_reservation is omitted; use hasInventoryReservation() or valueOrDefault().
     */
    public function getInventoryReservation(): mixed { return $this->get('inventory_reservation'); }
    public function hasInventoryReservation(): bool { return $this->has('inventory_reservation'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<InventoryLevel> $inventory_levels
 * @property-read InventoryReservation $inventory_reservation
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReservationResult extends Model {
    /** @param array{'inventory_levels': list<mixed>, 'inventory_reservation': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationResult')); }
    /** Post-commit state of every level this command touched, so no follow-up read is needed. A replay returns the levels the original command produced. [] (Value): {@see InventoryLevel}. The quantity state of one inventory item at one Location.
     * @return list<InventoryLevel>
     */
    public function getInventoryLevels(): array { return $this->get('inventory_levels'); }
    public function hasInventoryLevels(): bool { return $this->has('inventory_levels'); }
    /** A claim on stock. Quantity moves from held to committed to consumed, and can be released or reallocated.
     * @return InventoryReservation
     */
    public function getInventoryReservation(): InventoryReservation { return $this->get('inventory_reservation'); }
    public function hasInventoryReservation(): bool { return $this->has('inventory_reservation'); }
}

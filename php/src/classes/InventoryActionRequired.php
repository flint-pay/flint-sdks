<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $inventory_reservation_line_ids
 * @property-read string $reason
 * Presence-aware response; omitted optional fields return null. */
final class InventoryActionRequired extends Model {
    /** @param array{'inventory_reservation_line_ids': list<string>, 'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryActionRequired')); }
    /**  [] (Value): string.
     * @return list<string>
     */
    public function getInventoryReservationLineIds(): array { return $this->get('inventory_reservation_line_ids'); }
    public function hasInventoryReservationLineIds(): bool { return $this->has('inventory_reservation_line_ids'); }
    /** Value enum: "inventory_shortage", "hold_expired", "payment_pending", "other".
     * @return string
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}

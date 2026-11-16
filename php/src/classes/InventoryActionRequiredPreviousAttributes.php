<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $inventory_reservation_line_ids
 * @property-read string|null $reason
 * Presence-aware response; omitted optional fields return null. */
final class InventoryActionRequiredPreviousAttributes extends Model {
    /** @param array{'inventory_reservation_line_ids'?: mixed, 'reason'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryActionRequiredPreviousAttributes')); }
    /** IDs of the reservation lines that need action. anyOf[1] (Value): Array of string. IDs of the reservation lines that need action. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getInventoryReservationLineIds(): array|null { return $this->get('inventory_reservation_line_ids'); }
    public function hasInventoryReservationLineIds(): bool { return $this->has('inventory_reservation_line_ids'); }
    /** Why the reservation needs action. Value enum: "inventory_shortage", "hold_expired", "payment_pending", "other". anyOf[1] (Value): string. Why the reservation needs action. Value enum: "inventory_shortage", "hold_expired", "payment_pending", "other". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReason(): string|null { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}

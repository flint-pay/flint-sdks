<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|null $inventory_reservation_line_ids
 * @property-read string|null $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryActionRequiredPreviousAttributesInput extends Model {
    /** @param array{'inventory_reservation_line_ids'?: list<string>|null, 'reason'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryActionRequiredPreviousAttributesInput')); }
    /** IDs of the reservation lines that need action. anyOf[1] (Value): Array of string. IDs of the reservation lines that need action. anyOf[1][] (Value): string. Example: "invrln_01KEZF7C002JCDA729XDSNWGY5". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When inventory_reservation_line_ids is omitted; use hasInventoryReservationLineIds() or valueOrDefault().
     */
    public function getInventoryReservationLineIds(): mixed { return $this->get('inventory_reservation_line_ids'); }
    public function hasInventoryReservationLineIds(): bool { return $this->has('inventory_reservation_line_ids'); }
    /** Why the reservation needs action. Value enum: "inventory_shortage", "hold_expired", "payment_pending", "other". anyOf[1] (Value): string. Why the reservation needs action. Value enum: "inventory_shortage", "hold_expired", "payment_pending", "other". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): mixed { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}

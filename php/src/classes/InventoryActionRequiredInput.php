<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $inventory_reservation_line_ids
 * @property-read string $reason
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryActionRequiredInput extends Model {
    /** @param array{'inventory_reservation_line_ids': list<string>, 'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryActionRequiredInput')); }
    /** IDs of the reservation lines that need action. [] (Value): string. Example: "invrln_01KEZF7C002JCDA729XDSNWGY5".
     * @return list<string>
     * @throws SdkError When inventory_reservation_line_ids is omitted; use hasInventoryReservationLineIds() or valueOrDefault().
     */
    public function getInventoryReservationLineIds(): array { return $this->get('inventory_reservation_line_ids'); }
    public function hasInventoryReservationLineIds(): bool { return $this->has('inventory_reservation_line_ids'); }
    /** Why the reservation needs action. Value enum: "inventory_shortage", "hold_expired", "payment_pending", "other".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}

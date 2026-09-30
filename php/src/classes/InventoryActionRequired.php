<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $inventory_reservation_line_ids
 * @property-read list<string> $next_actions
 * @property-read string $reason
 * Presence-aware response; omitted fields throw when accessed. */
final class InventoryActionRequired extends Model {
    /** @param array{'inventory_reservation_line_ids': list<string>, 'next_actions': list<string>, 'reason': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryActionRequired')); }
    /** @return list<string>
     * @throws SdkError When inventory_reservation_line_ids is omitted; use hasInventoryReservationLineIds() or valueOrDefault().
     */
    public function getInventoryReservationLineIds(): array { return $this->get('inventory_reservation_line_ids'); }
    public function hasInventoryReservationLineIds(): bool { return $this->has('inventory_reservation_line_ids'); }
    /** @return list<string>
     * @throws SdkError When next_actions is omitted; use hasNextActions() or valueOrDefault().
     */
    public function getNextActions(): array { return $this->get('next_actions'); }
    public function hasNextActions(): bool { return $this->has('next_actions'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
}

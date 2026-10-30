<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<InventoryLevelInput|array<array-key, mixed>|\stdClass> $inventory_levels
 * @property-read InventoryTransferInput|array<array-key, mixed>|\stdClass $inventory_transfer
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferResultInput extends Model {
    /** @param array{'inventory_levels': list<InventoryLevelInput|array<array-key, mixed>|\stdClass>, 'inventory_transfer': InventoryTransferInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferResultInput')); }
    /** Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. [] (Value): {@see InventoryLevelInput}. The quantity state of one inventory item at one Location.
     * @return list<InventoryLevelInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When inventory_levels is omitted; use hasInventoryLevels() or valueOrDefault().
     */
    public function getInventoryLevels(): array { return $this->get('inventory_levels'); }
    public function hasInventoryLevels(): bool { return $this->has('inventory_levels'); }
    /** Stock moving between locations.
     * @return InventoryTransferInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_transfer is omitted; use hasInventoryTransfer() or valueOrDefault().
     */
    public function getInventoryTransfer(): mixed { return $this->get('inventory_transfer'); }
    public function hasInventoryTransfer(): bool { return $this->has('inventory_transfer'); }
}

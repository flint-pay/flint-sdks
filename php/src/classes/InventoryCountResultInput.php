<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryCountInput|array<array-key, mixed>|\stdClass $inventory_count
 * @property-read list<InventoryLevelInput|array<array-key, mixed>|\stdClass> $inventory_levels
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryCountResultInput extends Model {
    /** @param array{'inventory_count': InventoryCountInput|array<array-key, mixed>|\stdClass, 'inventory_levels': list<InventoryLevelInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountResultInput')); }
    /** A physical count used to reconcile stock.
     * @return InventoryCountInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_count is omitted; use hasInventoryCount() or valueOrDefault().
     */
    public function getInventoryCount(): mixed { return $this->get('inventory_count'); }
    public function hasInventoryCount(): bool { return $this->has('inventory_count'); }
    /** Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. [] (Value): {@see InventoryLevelInput}. The quantity state of one inventory item at one Location.
     * @return list<InventoryLevelInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When inventory_levels is omitted; use hasInventoryLevels() or valueOrDefault().
     */
    public function getInventoryLevels(): array { return $this->get('inventory_levels'); }
    public function hasInventoryLevels(): bool { return $this->has('inventory_levels'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryCount $inventory_count
 * @property-read list<InventoryLevel> $inventory_levels
 * Presence-aware response; omitted optional fields return null. */
final class InventoryCountResult extends Model {
    /** @param array{'inventory_count': mixed, 'inventory_levels': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryCountResult')); }
    /** A physical count used to reconcile stock.
     * @return InventoryCount
     */
    public function getInventoryCount(): InventoryCount { return $this->get('inventory_count'); }
    public function hasInventoryCount(): bool { return $this->has('inventory_count'); }
    /** Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. [] (Value): {@see InventoryLevel}. The quantity state of one inventory item at one Location.
     * @return list<InventoryLevel>
     */
    public function getInventoryLevels(): array { return $this->get('inventory_levels'); }
    public function hasInventoryLevels(): bool { return $this->has('inventory_levels'); }
}

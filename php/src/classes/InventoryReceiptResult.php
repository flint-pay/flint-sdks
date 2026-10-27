<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<InventoryLevel> $inventory_levels
 * @property-read InventoryReceipt $inventory_receipt
 * Presence-aware response; omitted optional fields return null. */
final class InventoryReceiptResult extends Model {
    /** @param array{'inventory_levels': list<mixed>, 'inventory_receipt': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReceiptResult')); }
    /** Shape $ (Value): Array of {@see InventoryLevel}. Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. Shape $[] (Value): {@see InventoryLevel}. The quantity state of one inventory item at one Location.
     * @return list<InventoryLevel>
     */
    public function getInventoryLevels(): array { return $this->get('inventory_levels'); }
    public function hasInventoryLevels(): bool { return $this->has('inventory_levels'); }
    /** Shape $ (Value): {@see InventoryReceipt}. Returned units received into Inventory, from a Return disposition or against the reservation line that consumed them.
     * @return InventoryReceipt
     */
    public function getInventoryReceipt(): InventoryReceipt { return $this->get('inventory_receipt'); }
    public function hasInventoryReceipt(): bool { return $this->has('inventory_receipt'); }
}

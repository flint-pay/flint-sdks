<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryAdjustmentInput|array<array-key, mixed>|\stdClass $inventory_adjustment
 * @property-read list<InventoryLevelInput|array<array-key, mixed>|\stdClass> $inventory_levels
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAdjustmentResultInput extends Model {
    /** @param array{'inventory_adjustment': InventoryAdjustmentInput|array<array-key, mixed>|\stdClass, 'inventory_levels': list<InventoryLevelInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentResultInput')); }
    /** A recorded stock change with its reason and the quantity changes Flint computed.
     * @return InventoryAdjustmentInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_adjustment is omitted; use hasInventoryAdjustment() or valueOrDefault().
     */
    public function getInventoryAdjustment(): mixed { return $this->get('inventory_adjustment'); }
    public function hasInventoryAdjustment(): bool { return $this->has('inventory_adjustment'); }
    /** Post-commit state of every level this command touched, one entry per level. A replay returns the levels the original command produced. Empty when no levels changed. [] (Value): {@see InventoryLevelInput}. The quantity state of one inventory item at one Location.
     * @return list<InventoryLevelInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When inventory_levels is omitted; use hasInventoryLevels() or valueOrDefault().
     */
    public function getInventoryLevels(): array { return $this->get('inventory_levels'); }
    public function hasInventoryLevels(): bool { return $this->has('inventory_levels'); }
}

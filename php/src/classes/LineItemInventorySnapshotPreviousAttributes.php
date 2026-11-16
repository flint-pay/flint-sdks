<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<LineItemInventoryDemandPreviousAttributes>|null $demands
 * @property-read string|null $inventory_tracking
 * Presence-aware response; omitted optional fields return null. */
final class LineItemInventorySnapshotPreviousAttributes extends Model {
    /** @param array{'demands'?: mixed, 'inventory_tracking'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemInventorySnapshotPreviousAttributes')); }
    /** The inventory items and quantities each unit of the line item uses. anyOf[1] (Value): Array of {@see LineItemInventoryDemandPreviousAttributes}. The inventory items and quantities each unit of the line item uses. anyOf[1][] (Value): {@see LineItemInventoryDemandPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<LineItemInventoryDemandPreviousAttributes>|null
     */
    public function getDemands(): array|null { return $this->get('demands'); }
    public function hasDemands(): bool { return $this->has('demands'); }
    /** Whether the line item draws on tracked stock. Value enum: "not_tracked", "tracked". anyOf[1] (Value): string. Whether the line item draws on tracked stock. Value enum: "not_tracked", "tracked". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryTracking(): string|null { return $this->get('inventory_tracking'); }
    public function hasInventoryTracking(): bool { return $this->has('inventory_tracking'); }
}

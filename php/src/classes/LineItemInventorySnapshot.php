<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<LineItemInventoryDemand> $demands
 * @property-read string $inventory_tracking
 * Presence-aware response; omitted optional fields return null. */
final class LineItemInventorySnapshot extends Model {
    /** @param array{'demands': list<mixed>, 'inventory_tracking': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemInventorySnapshot')); }
    /**  [] (Value): {@see LineItemInventoryDemand}. The quantity of one inventory item that each unit of an order line item uses.
     * @return list<LineItemInventoryDemand>
     */
    public function getDemands(): array { return $this->get('demands'); }
    public function hasDemands(): bool { return $this->has('demands'); }
    /** Value enum: "not_tracked", "tracked".
     * @return string
     */
    public function getInventoryTracking(): string { return $this->get('inventory_tracking'); }
    public function hasInventoryTracking(): bool { return $this->has('inventory_tracking'); }
}

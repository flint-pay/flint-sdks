<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<LineItemInventoryDemand> $demands
 * @property-read string $inventory_tracking
 * Presence-aware response; omitted fields throw when accessed. */
final class LineItemInventorySnapshot extends Model {
    /** @param array{'demands': list<mixed>, 'inventory_tracking': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemInventorySnapshot')); }
    /** @return list<LineItemInventoryDemand>
     * @throws SdkError When demands is omitted; use hasDemands() or valueOrDefault().
     */
    public function getDemands(): array { return $this->get('demands'); }
    public function hasDemands(): bool { return $this->has('demands'); }
    /** @return string
     * @throws SdkError When inventory_tracking is omitted; use hasInventoryTracking() or valueOrDefault().
     */
    public function getInventoryTracking(): string { return $this->get('inventory_tracking'); }
    public function hasInventoryTracking(): bool { return $this->has('inventory_tracking'); }
}

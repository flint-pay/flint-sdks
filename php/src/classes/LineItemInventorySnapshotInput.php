<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<LineItemInventoryDemandInput|array<array-key, mixed>|\stdClass> $demands
 * @property-read string $inventory_tracking
 * Presence-aware input; omitted fields throw when accessed. */
final class LineItemInventorySnapshotInput extends Model {
    /** @param array{'demands': list<LineItemInventoryDemandInput|array<array-key, mixed>|\stdClass>, 'inventory_tracking': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LineItemInventorySnapshotInput')); }
    /** @return list<LineItemInventoryDemandInput|array<array-key, mixed>|\stdClass>
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

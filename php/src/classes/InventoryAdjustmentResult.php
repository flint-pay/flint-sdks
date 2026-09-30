<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $idempotency_key
 * @property-read InventoryAdjustment $inventory_adjustment
 * @property-read list<string> $inventory_movement_ids
 * @property-read list<InventoryLevel> $resulting_inventory_levels
 * Presence-aware response; omitted fields throw when accessed. */
final class InventoryAdjustmentResult extends Model {
    /** @param array{'idempotency_key': string, 'inventory_adjustment': mixed, 'inventory_movement_ids': list<string>, 'resulting_inventory_levels': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAdjustmentResult')); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return InventoryAdjustment
     * @throws SdkError When inventory_adjustment is omitted; use hasInventoryAdjustment() or valueOrDefault().
     */
    public function getInventoryAdjustment(): InventoryAdjustment { return $this->get('inventory_adjustment'); }
    public function hasInventoryAdjustment(): bool { return $this->has('inventory_adjustment'); }
    /** @return list<string>
     * @throws SdkError When inventory_movement_ids is omitted; use hasInventoryMovementIds() or valueOrDefault().
     */
    public function getInventoryMovementIds(): array { return $this->get('inventory_movement_ids'); }
    public function hasInventoryMovementIds(): bool { return $this->has('inventory_movement_ids'); }
    /** @return list<InventoryLevel>
     * @throws SdkError When resulting_inventory_levels is omitted; use hasResultingInventoryLevels() or valueOrDefault().
     */
    public function getResultingInventoryLevels(): array { return $this->get('resulting_inventory_levels'); }
    public function hasResultingInventoryLevels(): bool { return $this->has('resulting_inventory_levels'); }
}

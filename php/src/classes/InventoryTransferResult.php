<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $idempotency_key
 * @property-read list<string> $inventory_movement_ids
 * @property-read InventoryTransfer $inventory_transfer
 * @property-read list<InventoryLevel> $resulting_inventory_levels
 * Presence-aware response; omitted fields throw when accessed. */
final class InventoryTransferResult extends Model {
    /** @param array{'idempotency_key': string, 'inventory_movement_ids': list<string>, 'inventory_transfer': mixed, 'resulting_inventory_levels': list<mixed>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferResult')); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return list<string>
     * @throws SdkError When inventory_movement_ids is omitted; use hasInventoryMovementIds() or valueOrDefault().
     */
    public function getInventoryMovementIds(): array { return $this->get('inventory_movement_ids'); }
    public function hasInventoryMovementIds(): bool { return $this->has('inventory_movement_ids'); }
    /** @return InventoryTransfer
     * @throws SdkError When inventory_transfer is omitted; use hasInventoryTransfer() or valueOrDefault().
     */
    public function getInventoryTransfer(): InventoryTransfer { return $this->get('inventory_transfer'); }
    public function hasInventoryTransfer(): bool { return $this->has('inventory_transfer'); }
    /** @return list<InventoryLevel>
     * @throws SdkError When resulting_inventory_levels is omitted; use hasResultingInventoryLevels() or valueOrDefault().
     */
    public function getResultingInventoryLevels(): array { return $this->get('resulting_inventory_levels'); }
    public function hasResultingInventoryLevels(): bool { return $this->has('resulting_inventory_levels'); }
}

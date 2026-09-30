<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $idempotency_key
 * @property-read list<string> $inventory_movement_ids
 * @property-read InventoryTransferInput|array<array-key, mixed>|\stdClass $inventory_transfer
 * @property-read list<InventoryLevelInput|array<array-key, mixed>|\stdClass> $resulting_inventory_levels
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryTransferResultInput extends Model {
    /** @param array{'idempotency_key': string, 'inventory_movement_ids': list<string>, 'inventory_transfer': InventoryTransferInput|array<array-key, mixed>|\stdClass, 'resulting_inventory_levels': list<InventoryLevelInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryTransferResultInput')); }
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
    /** @return InventoryTransferInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_transfer is omitted; use hasInventoryTransfer() or valueOrDefault().
     */
    public function getInventoryTransfer(): mixed { return $this->get('inventory_transfer'); }
    public function hasInventoryTransfer(): bool { return $this->has('inventory_transfer'); }
    /** @return list<InventoryLevelInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When resulting_inventory_levels is omitted; use hasResultingInventoryLevels() or valueOrDefault().
     */
    public function getResultingInventoryLevels(): array { return $this->get('resulting_inventory_levels'); }
    public function hasResultingInventoryLevels(): bool { return $this->has('resulting_inventory_levels'); }
}

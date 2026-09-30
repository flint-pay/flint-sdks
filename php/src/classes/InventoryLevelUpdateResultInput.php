<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $idempotency_key
 * @property-read InventoryLevelInput|array<array-key, mixed>|\stdClass $inventory_level
 * @property-read list<string> $inventory_movement_ids
 * @property-read list<InventoryLevelInput|array<array-key, mixed>|\stdClass> $resulting_inventory_levels
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryLevelUpdateResultInput extends Model {
    /** @param array{'idempotency_key': string, 'inventory_level': InventoryLevelInput|array<array-key, mixed>|\stdClass, 'inventory_movement_ids': list<string>, 'resulting_inventory_levels': list<InventoryLevelInput|array<array-key, mixed>|\stdClass>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryLevelUpdateResultInput')); }
    /** @return string
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): string { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** @return InventoryLevelInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_level is omitted; use hasInventoryLevel() or valueOrDefault().
     */
    public function getInventoryLevel(): mixed { return $this->get('inventory_level'); }
    public function hasInventoryLevel(): bool { return $this->has('inventory_level'); }
    /** @return list<string>
     * @throws SdkError When inventory_movement_ids is omitted; use hasInventoryMovementIds() or valueOrDefault().
     */
    public function getInventoryMovementIds(): array { return $this->get('inventory_movement_ids'); }
    public function hasInventoryMovementIds(): bool { return $this->has('inventory_movement_ids'); }
    /** @return list<InventoryLevelInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When resulting_inventory_levels is omitted; use hasResultingInventoryLevels() or valueOrDefault().
     */
    public function getResultingInventoryLevels(): array { return $this->get('resulting_inventory_levels'); }
    public function hasResultingInventoryLevels(): bool { return $this->has('resulting_inventory_levels'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read list<string>|string $expand
 * @property-read string $inventory_movement_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryMovementsGetInput extends Model {
    /** @param array{'expand'?: list<string>|string, 'inventory_movement_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryMovementsGetInput')); }
    /** Supported expansions: inventory_item. Include the full inventory item with expand=inventory_item. Requires commerce.inventory.read. Limits: at most 10 unique expand paths per request. Pass expand=inventory_item. [] enum: "inventory_item". Value enum: "inventory_item". anyOf[1] (Value): Array of string.  [] enum: "inventory_item". anyOf[1][] (Value): string.  Value enum: "inventory_item". anyOf[2] (Value): string.  Value enum: "inventory_item".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** Flint inventory movement ID. Example: "invm_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_movement_id is omitted; use hasInventoryMovementId() or valueOrDefault().
     */
    public function getInventoryMovementId(): string { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
}

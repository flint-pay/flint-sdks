<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $expand
 * @property-read string $inventory_movement_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryMovementsGetInput extends Model {
    /** @param array{'expand'?: list<string>, 'inventory_movement_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryMovementsGetInput')); }
    /** Shape $ (Value): Array of string.  [] enum: "inventory_item". Shape $[] (Value): string.  Value enum: "inventory_item".
     * @return list<string>
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): array { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When inventory_movement_id is omitted; use hasInventoryMovementId() or valueOrDefault().
     */
    public function getInventoryMovementId(): string { return $this->get('inventory_movement_id'); }
    public function hasInventoryMovementId(): bool { return $this->has('inventory_movement_id'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string>|string $expand
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryMovementsGetParams extends Model {
    /** @param array{'expand'?: list<string>|string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryMovementsGetParams')); }
    /** Supported expansions: inventory_item. Include the full inventory item with expand=inventory_item. Requires commerce.inventory.read. Limits: at most 10 unique expand paths per request. Pass expand=inventory_item. [] enum: "inventory_item". Value enum: "inventory_item". anyOf[1] (Value): Array of string.  [] enum: "inventory_item". anyOf[1][] (Value): string.  Value enum: "inventory_item". anyOf[2] (Value): string.  Value enum: "inventory_item".
     * @return list<string>|string
     * @throws SdkError When expand is omitted; use hasExpand() or valueOrDefault().
     */
    public function getExpand(): mixed { return $this->get('expand'); }
    public function hasExpand(): bool { return $this->has('expand'); }
}

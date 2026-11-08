<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $available_quantity
 * @property-read InventoryRoutingSource|null $inventory_routing_source
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class ProductVariantInventoryAvailability extends Model {
    /** @param array{'available_quantity'?: int|null, 'inventory_routing_source': mixed, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantInventoryAvailability')); }
    /** The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. Format: int64. minimum: 0. maximum: 9999.
     * @return int|null
     */
    public function getAvailableQuantity(): int|null { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set. anyOf[1] (Value): {@see InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. anyOf[2] (Value): null.
     * @return InventoryRoutingSource|null
     */
    public function getInventoryRoutingSource(): InventoryRoutingSource|null { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Whether one order line can buy the variant now. Value enum: "in_stock", "out_of_stock", "not_tracked", "routing_source_required".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

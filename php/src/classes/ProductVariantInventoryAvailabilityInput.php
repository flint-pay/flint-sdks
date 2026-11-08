<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $available_quantity
 * @property-read array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null $inventory_routing_source
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductVariantInventoryAvailabilityInput extends Model {
    /** @param array{'available_quantity'?: int|null, 'inventory_routing_source': array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantInventoryAvailabilityInput')); }
    /** The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is counted out, as pay counts it. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. Format: int64. minimum: 0. maximum: 9999.
     * @return int|null
     * @throws SdkError When available_quantity is omitted; use hasAvailableQuantity() or valueOrDefault().
     */
    public function getAvailableQuantity(): int|null { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** The routing source evaluated: the merchant's default, with `inventory_allocation_policy_revision_id` set to the revision current at the read when it is a policy. `null` when nothing was evaluated, because `status` is `not_tracked` or no default is set. anyOf[1] (Value): {@see InventoryRoutingSourceInput}. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. anyOf[2] (Value): null.
     * @return array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Whether one order line can buy the variant now. Value enum: "in_stock", "out_of_stock", "not_tracked", "routing_source_required".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

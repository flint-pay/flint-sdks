<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $available_quantity
 * @property-read InventoryRoutingSourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $inventory_routing_source
 * @property-read string|null $status
 * Presence-aware input; omitted fields throw when accessed. */
final class ProductVariantInventoryAvailabilityPreviousAttributesInput extends Model {
    /** @param array{'available_quantity'?: int|null, 'inventory_routing_source'?: InventoryRoutingSourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'status'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ProductVariantInventoryAvailabilityPreviousAttributesInput')); }
    /** The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is excluded. The quantity includes backorders that shipping checkout can accept. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. anyOf[1] (Value): integer. The largest quantity of this variant one order line could route from `inventory_routing_source` now, capped at 9,999, the order line maximum. Held and committed stock is excluded. The quantity includes backorders that shipping checkout can accept. `null` when `status` is `not_tracked` or `routing_source_required`. Returned to Dashboard users and to API keys and partner tokens that hold `commerce.inventory.read` or `commerce.inventory.write`; omitted for other credentials, which still receive `status`. Format: int64. minimum: 0. maximum: 9999. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When available_quantity is omitted; use hasAvailableQuantity() or valueOrDefault().
     */
    public function getAvailableQuantity(): mixed { return $this->get('available_quantity'); }
    public function hasAvailableQuantity(): bool { return $this->has('available_quantity'); }
    /** The merchant's default routing source or the Location Flint selected when no default is set. For a policy, `inventory_allocation_policy_revision_id` names the revision used. `null` when the variant is untracked or when neither a default nor an eligible Location applies. anyOf[1] (Value): {@see InventoryRoutingSourcePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return InventoryRoutingSourcePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Whether one order line can buy the variant now. Value enum: "in_stock", "out_of_stock", "not_tracked", "routing_source_required". anyOf[1] (Value): string. Whether one order line can buy the variant now. Value enum: "in_stock", "out_of_stock", "not_tracked", "routing_source_required". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

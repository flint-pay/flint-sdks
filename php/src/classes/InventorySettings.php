<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryRoutingSource|null $default_routing_source
 * @property-read ?int $low_stock_threshold
 * @property-read ?array<array-key, InventoryOriginPolicy> $origin_policies
 * Presence-aware response; omitted optional fields return null. */
final class InventorySettings extends Model {
    /** @param array{'default_routing_source'?: mixed, 'low_stock_threshold'?: int, 'origin_policies'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventorySettings')); }
    /** Where tracked demand is routed when a request omits `inventory_routing_source`: a fixed Location, an allocation policy, or one policy revision. It applies to orders, line items added to orders, quick pay invoices, payment links, subscription plans, inventory reservations, and delivery previews. The request stores the resolved source on the resource it creates or changes, as if the caller had sent it, so changing or clearing this default never moves routing for existing orders, payment links, plans, or reservations. A source the request sends always wins. `null` when no default is set, which means callers must send `inventory_routing_source` on each request with tracked items. anyOf[1] (Value): {@see InventoryRoutingSource}. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. anyOf[2] (Value): null.
     * @return InventoryRoutingSource|null
     */
    public function getDefaultRoutingSource(): InventoryRoutingSource|null { return $this->get('default_routing_source'); }
    public function hasDefaultRoutingSource(): bool { return $this->has('default_routing_source'); }
    /** Available quantity your team treats as low stock, zero or greater. The Dashboard shows this setting. It does not change allocation, filter API results, or send events. Format: int32. minimum: 0.
     * @return ?int
     */
    public function getLowStockThreshold(): ?int { return $this->get('low_stock_threshold'); }
    public function hasLowStockThreshold(): bool { return $this->has('low_stock_threshold'); }
    /** Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. * (Value): {@see InventoryOriginPolicy}. How Flint handles inventory failures for one order source: the action after a post-payment inventory failure and for a blocked subscription.
     * @return ?array<array-key, InventoryOriginPolicy>
     */
    public function getOriginPolicies(): ?array { return $this->get('origin_policies'); }
    public function hasOriginPolicies(): bool { return $this->has('origin_policies'); }
}

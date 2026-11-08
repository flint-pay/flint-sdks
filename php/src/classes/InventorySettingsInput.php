<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null $default_routing_source
 * @property-read int $low_stock_threshold
 * @property-read array<array-key, InventoryOriginPolicyInput|array<array-key, mixed>|\stdClass>|\stdClass $origin_policies
 * Presence-aware input; omitted fields throw when accessed. */
final class InventorySettingsInput extends Model {
    /** @param array{'default_routing_source'?: array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null, 'low_stock_threshold'?: int, 'origin_policies'?: array<array-key, InventoryOriginPolicyInput|array<array-key, mixed>|\stdClass>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventorySettingsInput')); }
    /** Where tracked demand is routed when a request omits `inventory_routing_source`: a fixed Location, an allocation policy, or one policy revision. It applies to orders, line items added to orders, quick pay invoices, payment links, subscription plans, inventory reservations, and delivery previews. The request stores the resolved source on the resource it creates or changes, as if the caller had sent it, so changing or clearing this default never moves routing for existing orders, payment links, plans, or reservations. A source the request sends always wins. `null` when no default is set, which means callers must send `inventory_routing_source` on each request with tracked items. anyOf[1] (Value): {@see InventoryRoutingSourceInput}. Where an order, payment link, or reservation routes inventory from: a fixed Location, an inventory allocation policy, or one policy revision. anyOf[2] (Value): null.
     * @return array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object|null
     * @throws SdkError When default_routing_source is omitted; use hasDefaultRoutingSource() or valueOrDefault().
     */
    public function getDefaultRoutingSource(): mixed { return $this->get('default_routing_source'); }
    public function hasDefaultRoutingSource(): bool { return $this->has('default_routing_source'); }
    /** Available quantity your team treats as low stock, zero or greater. The Dashboard shows this setting. It does not change allocation, filter API results, or send events. Format: int32. minimum: 0.
     * @return int
     * @throws SdkError When low_stock_threshold is omitted; use hasLowStockThreshold() or valueOrDefault().
     */
    public function getLowStockThreshold(): int { return $this->get('low_stock_threshold'); }
    public function hasLowStockThreshold(): bool { return $this->has('low_stock_threshold'); }
    /** Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. * (Value): {@see InventoryOriginPolicyInput}. How Flint handles inventory failures for one order source: the action after a post-payment inventory failure and for a blocked subscription.
     * @return array<array-key, InventoryOriginPolicyInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When origin_policies is omitted; use hasOriginPolicies() or valueOrDefault().
     */
    public function getOriginPolicies(): array|object { return $this->get('origin_policies'); }
    public function hasOriginPolicies(): bool { return $this->has('origin_policies'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?int $low_stock_threshold
 * @property-read ?array<array-key, InventoryOriginPolicy> $origin_policies
 * Presence-aware response; omitted optional fields return null. */
final class InventorySettings extends Model {
    /** @param array{'low_stock_threshold'?: int, 'origin_policies'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventorySettings')); }
    /** Shape $ (Value): integer. Format: int32.
     * @return ?int
     */
    public function getLowStockThreshold(): ?int { return $this->get('low_stock_threshold'); }
    public function hasLowStockThreshold(): bool { return $this->has('low_stock_threshold'); }
    /** Shape $ (Value): Map of {@see InventoryOriginPolicy}. Map replaced as a whole: the keys you send become the full map. Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. Shape $.* (Value): {@see InventoryOriginPolicy}. How Flint handles inventory failures for one order source: the action after a post-payment inventory failure and for a blocked subscription.
     * @return ?array<array-key, InventoryOriginPolicy>
     */
    public function getOriginPolicies(): ?array { return $this->get('origin_policies'); }
    public function hasOriginPolicies(): bool { return $this->has('origin_policies'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $low_stock_threshold
 * @property-read array<array-key, InventoryOriginPolicyInput|array<array-key, mixed>|\stdClass>|\stdClass $origin_policies
 * Presence-aware input; omitted fields throw when accessed. */
final class InventorySettingsInput extends Model {
    /** @param array{'low_stock_threshold'?: int, 'origin_policies'?: array<array-key, InventoryOriginPolicyInput|array<array-key, mixed>|\stdClass>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventorySettingsInput')); }
    /** Shape $ (Value): integer. Format: int32.
     * @return int
     * @throws SdkError When low_stock_threshold is omitted; use hasLowStockThreshold() or valueOrDefault().
     */
    public function getLowStockThreshold(): int { return $this->get('low_stock_threshold'); }
    public function hasLowStockThreshold(): bool { return $this->has('low_stock_threshold'); }
    /** Shape $ (Value): Map of {@see InventoryOriginPolicyInput}. Map replaced as a whole: the keys you send become the full map. Inventory failure handling keyed by order source: checkout, payment_link, api, subscription, virtual_terminal, or default. The source-specific entry wins; default applies to the rest. Shape $.* (Value): {@see InventoryOriginPolicyInput}. How Flint handles inventory failures for one order source: the action after a post-payment inventory failure and for a blocked subscription.
     * @return array<array-key, InventoryOriginPolicyInput|array<array-key, mixed>|\stdClass>|\stdClass
     * @throws SdkError When origin_policies is omitted; use hasOriginPolicies() or valueOrDefault().
     */
    public function getOriginPolicies(): array|object { return $this->get('origin_policies'); }
    public function hasOriginPolicies(): bool { return $this->has('origin_policies'); }
}

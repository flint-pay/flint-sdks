<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $low_stock_threshold
 * @property-read array<array-key, InventoryOriginPolicy> $origin_policies
 * Presence-aware response; omitted fields throw when accessed. */
final class InventorySettings extends Model {
    /** @param array{'low_stock_threshold'?: int, 'origin_policies'?: \stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventorySettings')); }
    /** @return int
     * @throws SdkError When low_stock_threshold is omitted; use hasLowStockThreshold() or valueOrDefault().
     */
    public function getLowStockThreshold(): int { return $this->get('low_stock_threshold'); }
    public function hasLowStockThreshold(): bool { return $this->has('low_stock_threshold'); }
    /** @return array<array-key, InventoryOriginPolicy>
     * @throws SdkError When origin_policies is omitted; use hasOriginPolicies() or valueOrDefault().
     */
    public function getOriginPolicies(): array { return $this->get('origin_policies'); }
    public function hasOriginPolicies(): bool { return $this->has('origin_policies'); }
}

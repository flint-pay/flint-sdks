<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_allocation_policy_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAllocationPoliciesGetInput extends Model {
    /** @param array{'inventory_allocation_policy_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationPoliciesGetInput')); }
    /** @return string
     * @throws SdkError When inventory_allocation_policy_id is omitted; use hasInventoryAllocationPolicyId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyId(): string { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
}

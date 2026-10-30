<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_allocation_policy_id
 * @property-read string $inventory_allocation_policy_revision_id
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAllocationPoliciesGetRevisionInput extends Model {
    /** @param array{'inventory_allocation_policy_id': string, 'inventory_allocation_policy_revision_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationPoliciesGetRevisionInput')); }
    /** Flint inventory allocation policy ID. Example: "invp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_allocation_policy_id is omitted; use hasInventoryAllocationPolicyId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyId(): string { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** Flint inventory allocation policy revision ID. Example: "invpv_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_allocation_policy_revision_id is omitted; use hasInventoryAllocationPolicyRevisionId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyRevisionId(): string { return $this->get('inventory_allocation_policy_revision_id'); }
    public function hasInventoryAllocationPolicyRevisionId(): bool { return $this->has('inventory_allocation_policy_revision_id'); }
}

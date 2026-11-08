<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_allocation_policy_id
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryRoutingSourceInputPolicyInput extends Model {
    /** @param array{'inventory_allocation_policy_id': string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryRoutingSourceInputPolicyInput')); }
    /** ID of the allocation policy that routes demand. minLength: 1. Example: "invp_01KEZF7C0076BZX855WAGC5SQK".
     * @return string
     * @throws SdkError When inventory_allocation_policy_id is omitted; use hasInventoryAllocationPolicyId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyId(): string { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** How Flint routes demand to Locations. Value enum: "policy".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

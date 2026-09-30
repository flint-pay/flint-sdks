<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_allocation_policy_version_id
 * @property-read string $type
 * Presence-aware response; omitted fields throw when accessed. */
final class PaymentLinkInventoryRoutingSourcePolicyVersion extends Model {
    /** @param array{'inventory_allocation_policy_version_id': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PaymentLinkInventoryRoutingSourcePolicyVersion')); }
    /** @return string
     * @throws SdkError When inventory_allocation_policy_version_id is omitted; use hasInventoryAllocationPolicyVersionId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyVersionId(): string { return $this->get('inventory_allocation_policy_version_id'); }
    public function hasInventoryAllocationPolicyVersionId(): bool { return $this->has('inventory_allocation_policy_version_id'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

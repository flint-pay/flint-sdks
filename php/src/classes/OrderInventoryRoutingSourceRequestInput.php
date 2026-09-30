<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $inventory_allocation_policy_id
 * @property-read string $inventory_allocation_policy_version_id
 * @property-read string $location_id
 * @property-read list<string> $location_ids
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderInventoryRoutingSourceRequestInput extends Model {
    /** @param array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_version_id'?: string, 'location_id'?: string, 'location_ids'?: list<string>, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderInventoryRoutingSourceRequestInput')); }
    /** @return string
     * @throws SdkError When inventory_allocation_policy_id is omitted; use hasInventoryAllocationPolicyId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyId(): string { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** @return string
     * @throws SdkError When inventory_allocation_policy_version_id is omitted; use hasInventoryAllocationPolicyVersionId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyVersionId(): string { return $this->get('inventory_allocation_policy_version_id'); }
    public function hasInventoryAllocationPolicyVersionId(): bool { return $this->has('inventory_allocation_policy_version_id'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return list<string>
     * @throws SdkError When location_ids is omitted; use hasLocationIds() or valueOrDefault().
     */
    public function getLocationIds(): array { return $this->get('location_ids'); }
    public function hasLocationIds(): bool { return $this->has('location_ids'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

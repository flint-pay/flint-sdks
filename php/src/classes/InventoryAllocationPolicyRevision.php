<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read InventoryAllocationConfigurationValue $configuration
 * @property-read string $created_at
 * @property-read string $inventory_allocation_policy_id
 * @property-read string $inventory_allocation_policy_revision_id
 * Presence-aware response; omitted optional fields return null. */
final class InventoryAllocationPolicyRevision extends Model {
    /** @param array{'configuration': mixed, 'created_at': string, 'inventory_allocation_policy_id': string, 'inventory_allocation_policy_revision_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationPolicyRevision')); }
    /** Routing rules for an inventory allocation policy: ranked groups of Locations, whether demand can be split, and how many Locations one assignment may use.
     * @return InventoryAllocationConfigurationValue
     */
    public function getConfiguration(): InventoryAllocationConfigurationValue { return $this->get('configuration'); }
    public function hasConfiguration(): bool { return $this->has('configuration'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** inventory_allocation_policy_id
     * @return string
     */
    public function getInventoryAllocationPolicyId(): string { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** inventory_allocation_policy_revision_id
     * @return string
     */
    public function getInventoryAllocationPolicyRevisionId(): string { return $this->get('inventory_allocation_policy_revision_id'); }
    public function hasInventoryAllocationPolicyRevisionId(): bool { return $this->has('inventory_allocation_policy_revision_id'); }
}

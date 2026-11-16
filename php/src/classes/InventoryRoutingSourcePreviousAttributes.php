<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $inventory_allocation_policy_id
 * @property-read string|null $inventory_allocation_policy_revision_id
 * @property-read string|null $location_id
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class InventoryRoutingSourcePreviousAttributes extends Model {
    /** @param array{'inventory_allocation_policy_id'?: mixed, 'inventory_allocation_policy_revision_id'?: mixed, 'location_id'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryRoutingSourcePreviousAttributes')); }
    /** ID of the allocation policy that routes demand. anyOf[1] (Value): string. ID of the allocation policy that routes demand. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryAllocationPolicyId(): string|null { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** ID of the allocation policy revision that routes demand. anyOf[1] (Value): string. ID of the allocation policy revision that routes demand. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getInventoryAllocationPolicyRevisionId(): string|null { return $this->get('inventory_allocation_policy_revision_id'); }
    public function hasInventoryAllocationPolicyRevisionId(): bool { return $this->has('inventory_allocation_policy_revision_id'); }
    /** ID of the fixed Location that serves all demand. anyOf[1] (Value): string. ID of the fixed Location that serves all demand. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** How Flint routes demand to Locations. Value enum: "fixed_location", "policy", "policy_revision". anyOf[1] (Value): string. How Flint routes demand to Locations. Value enum: "fixed_location", "policy", "policy_revision". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

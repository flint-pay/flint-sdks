<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $inventory_allocation_policy_id
 * @property-read ?string $inventory_allocation_policy_revision_id
 * @property-read ?string $location_id
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class InventoryRoutingSource extends Model {
    /** @param array{'inventory_allocation_policy_id'?: string, 'inventory_allocation_policy_revision_id'?: string, 'location_id'?: string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryRoutingSource')); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getInventoryAllocationPolicyId(): ?string { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getInventoryAllocationPolicyRevisionId(): ?string { return $this->get('inventory_allocation_policy_revision_id'); }
    public function hasInventoryAllocationPolicyRevisionId(): bool { return $this->has('inventory_allocation_policy_revision_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): string.  Value enum: "fixed_location", "policy", "policy_revision".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

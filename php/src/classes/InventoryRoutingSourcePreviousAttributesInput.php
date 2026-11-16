<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $inventory_allocation_policy_id
 * @property-read string|null $inventory_allocation_policy_revision_id
 * @property-read string|null $location_id
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryRoutingSourcePreviousAttributesInput extends Model {
    /** @param array{'inventory_allocation_policy_id'?: string|null, 'inventory_allocation_policy_revision_id'?: string|null, 'location_id'?: string|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryRoutingSourcePreviousAttributesInput')); }
    /** ID of the allocation policy that routes demand. anyOf[1] (Value): string. ID of the allocation policy that routes demand. Example: "invp_01KEZF7C0076BZX855WAGC5SQK". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_allocation_policy_id is omitted; use hasInventoryAllocationPolicyId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyId(): mixed { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** ID of the allocation policy revision that routes demand. anyOf[1] (Value): string. ID of the allocation policy revision that routes demand. Example: "invpv_01KEZF7C00JSFTTBKC1JY614JJ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When inventory_allocation_policy_revision_id is omitted; use hasInventoryAllocationPolicyRevisionId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyRevisionId(): mixed { return $this->get('inventory_allocation_policy_revision_id'); }
    public function hasInventoryAllocationPolicyRevisionId(): bool { return $this->has('inventory_allocation_policy_revision_id'); }
    /** ID of the fixed Location that serves all demand. anyOf[1] (Value): string. ID of the fixed Location that serves all demand. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): mixed { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** How Flint routes demand to Locations. Value enum: "fixed_location", "policy", "policy_revision". anyOf[1] (Value): string. How Flint routes demand to Locations. Value enum: "fixed_location", "policy", "policy_revision". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

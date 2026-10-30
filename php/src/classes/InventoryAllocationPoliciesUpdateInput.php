<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $inventory_allocation_policy_id
 * @property-read array{'configuration'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAllocationPoliciesUpdateInput extends Model {
    /** @param array{'inventory_allocation_policy_id': string, 'body': array{'configuration'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationPoliciesUpdateInput')); }
    /** Flint inventory allocation policy ID. Example: "invp_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When inventory_allocation_policy_id is omitted; use hasInventoryAllocationPolicyId() or valueOrDefault().
     */
    public function getInventoryAllocationPolicyId(): string { return $this->get('inventory_allocation_policy_id'); }
    public function hasInventoryAllocationPolicyId(): bool { return $this->has('inventory_allocation_policy_id'); }
    /** The request body for: Update inventory allocation policy. Example: {"configuration":{"location_groups":[{"group_priority":1,"location_id":"loc_01K0P7W6A4N9F3J2T8Q5R1C6XM"},{"group_priority":2,"location_id":"loc_01K0P7W6A4N9F3J2T8Q5R1C6YN"}],"maximum_locations_per_assignment":3,"splitting_behavior":"split_when_required","within_group_order":"location_id_ascending"},"expected_version":2}.
     * @return array{'configuration'?: mixed, 'expected_version'?: int, 'external_reference_id'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}

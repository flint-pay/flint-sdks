<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'configuration': array{'location_groups': list<array{'group_priority': int, 'location_id': string}|object>, 'maximum_locations_per_assignment'?: int, 'splitting_behavior': string, 'within_group_order'?: string}|object, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'status'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryAllocationPoliciesCreateInput extends Model {
    /** @param array{'body': array{'configuration': array{'location_groups': list<array{'group_priority': int, 'location_id': string}|object>, 'maximum_locations_per_assignment'?: int, 'splitting_behavior': string, 'within_group_order'?: string}|object, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'status'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryAllocationPoliciesCreateInput')); }
    /** The request body for: Create inventory allocation policy. Example: {"configuration":{"location_groups":[{"group_priority":1,"location_id":"loc_01K0P7W6A4N9F3J2T8Q5R1C6XM"}],"maximum_locations_per_assignment":3,"splitting_behavior":"split_when_required","within_group_order":"location_id_ascending"},"name":"US retail routing","status":"active"}.
     * @return array{'configuration': array{'location_groups': list<array{'group_priority': int, 'location_id': string}|object>, 'maximum_locations_per_assignment'?: int, 'splitting_behavior': string, 'within_group_order'?: string}|object, 'external_reference_id'?: string, 'metadata'?: mixed, 'name': string, 'status'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}

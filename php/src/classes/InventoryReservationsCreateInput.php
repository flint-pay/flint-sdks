<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read array{'demands': list<array{'allowed_location_ids'?: list<string>, 'demand_key'?: string, 'forced_location_id'?: string, 'inventory_item_id': string, 'quantity': int, 'splitting_behavior'?: string}|object>, 'expires_at'?: string|\DateTimeInterface, 'inventory_routing_source': array{'location_id': string, 'type': string}|object|array{'inventory_allocation_policy_id': string, 'type': string}|object|array{'inventory_allocation_policy_revision_id': string, 'type': string}|object, 'owner': mixed}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsCreateInput extends Model {
    /** @param array{'body': array{'demands': list<array{'allowed_location_ids'?: list<string>, 'demand_key'?: string, 'forced_location_id'?: string, 'inventory_item_id': string, 'quantity': int, 'splitting_behavior'?: string}|object>, 'expires_at'?: string|\DateTimeInterface, 'inventory_routing_source': array{'location_id': string, 'type': string}|object|array{'inventory_allocation_policy_id': string, 'type': string}|object|array{'inventory_allocation_policy_revision_id': string, 'type': string}|object, 'owner': mixed}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsCreateInput')); }
    /** The request body for: Create inventory reservation. Example: {"demands":[{"inventory_item_id":"invi_01K0P7W6A4N9F3J2T8Q5R1C6XM","quantity":2}],"inventory_routing_source":{"inventory_allocation_policy_id":"invp_01K0P7W6A4N9F3J2T8Q5R1C6XM","type":"policy"},"owner":{"key":"cart_1842"}}.
     * @return array{'demands': list<array{'allowed_location_ids'?: list<string>, 'demand_key'?: string, 'forced_location_id'?: string, 'inventory_item_id': string, 'quantity': int, 'splitting_behavior'?: string}|object>, 'expires_at'?: string|\DateTimeInterface, 'inventory_routing_source': array{'location_id': string, 'type': string}|object|array{'inventory_allocation_policy_id': string, 'type': string}|object|array{'inventory_allocation_policy_revision_id': string, 'type': string}|object, 'owner': mixed}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}

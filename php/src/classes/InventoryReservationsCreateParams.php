<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<array{'allowed_location_ids'?: list<string>, 'demand_key'?: string, 'forced_location_id'?: string, 'inventory_item_id': string, 'quantity': int, 'splitting_behavior'?: string}|object> $demands
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read array{'location_id': string, 'type': string}|object|array{'inventory_allocation_policy_id': string, 'type': string}|object|array{'inventory_allocation_policy_revision_id': string, 'type': string}|object $inventory_routing_source
 * @property-read InventoryReservationOwnerRequestInput|array<array-key, mixed>|\stdClass $owner
 * Presence-aware input; omitted fields throw when accessed. */
final class InventoryReservationsCreateParams extends Model {
    /** @param array{'demands': list<array{'allowed_location_ids'?: list<string>, 'demand_key'?: string, 'forced_location_id'?: string, 'inventory_item_id': string, 'quantity': int, 'splitting_behavior'?: string}|object>, 'expires_at'?: string|\DateTimeInterface, 'inventory_routing_source': array{'location_id': string, 'type': string}|object|array{'inventory_allocation_policy_id': string, 'type': string}|object|array{'inventory_allocation_policy_revision_id': string, 'type': string}|object, 'owner': InventoryReservationOwnerRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('InventoryReservationsCreateParams')); }
    /** minItems: 1. maxItems: 100. [] (Value): {@see InventoryRoutingDemandInput}. Stock you ask to reserve for one item: the item and quantity, plus optional Location limits and splitting behavior.
     * @return list<array{'allowed_location_ids'?: list<string>, 'demand_key'?: string, 'forced_location_id'?: string, 'inventory_item_id': string, 'quantity': int, 'splitting_behavior'?: string}|object>
     * @throws SdkError When demands is omitted; use hasDemands() or valueOrDefault().
     */
    public function getDemands(): array { return $this->get('demands'); }
    public function hasDemands(): bool { return $this->has('demands'); }
    /** Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after creation. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * @return array{'location_id': string, 'type': string}|object|array{'inventory_allocation_policy_id': string, 'type': string}|object|array{'inventory_allocation_policy_revision_id': string, 'type': string}|object
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** The owner of a merchant inventory reservation you create: your `key` for what holds the stock.
     * @return InventoryReservationOwnerRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): mixed { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
}

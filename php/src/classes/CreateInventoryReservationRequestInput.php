<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<InventoryRoutingDemandInput|array<array-key, mixed>|\stdClass> $demands
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read InventoryReservationOwnerRequestInput|array<array-key, mixed>|\stdClass $owner
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInventoryReservationRequestInput extends Model {
    /** @param array{'demands': list<InventoryRoutingDemandInput|array<array-key, mixed>|\stdClass>, 'expires_at'?: string|\DateTimeInterface, 'inventory_routing_source': InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'owner': InventoryReservationOwnerRequestInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInventoryReservationRequestInput')); }
    /** Shape $ (Value): Array of {@see InventoryRoutingDemandInput}. Shape $[] (Value): {@see InventoryRoutingDemandInput}. Stock you ask to reserve for one item: the item and quantity, plus optional Location limits and splitting behavior.
     * @return list<InventoryRoutingDemandInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When demands is omitted; use hasDemands() or valueOrDefault().
     */
    public function getDemands(): array { return $this->get('demands'); }
    public function hasDemands(): bool { return $this->has('demands'); }
    /** Shape $ (Value): string. Hold deadline, after now and at most 24 hours from now. Defaults to 15 minutes after creation. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): {@see InventoryRoutingSourceRequestInput}. Where you want inventory routed from: a fixed Location, an inventory allocation policy, or one policy revision, selected by `type`.
     * @return InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** Shape $ (Value): {@see InventoryReservationOwnerRequestInput}. The owner of a merchant inventory reservation you create: your `key` for what holds the stock.
     * @return InventoryReservationOwnerRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): mixed { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
}

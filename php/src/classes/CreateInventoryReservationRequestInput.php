<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<InventoryAssignmentInput|array<array-key, mixed>|\stdClass> $assignments
 * @property-read list<InventoryRoutingDemandInput|array<array-key, mixed>|\stdClass> $demands
 * @property-read string $destination_fingerprint
 * @property-read InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass $inventory_routing_source
 * @property-read InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass $owner
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateInventoryReservationRequestInput extends Model {
    /** @param array{'assignments'?: list<InventoryAssignmentInput|array<array-key, mixed>|\stdClass>, 'demands': list<InventoryRoutingDemandInput|array<array-key, mixed>|\stdClass>, 'destination_fingerprint'?: string, 'inventory_routing_source': InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass, 'owner': InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateInventoryReservationRequestInput')); }
    /** @return list<InventoryAssignmentInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When assignments is omitted; use hasAssignments() or valueOrDefault().
     */
    public function getAssignments(): array { return $this->get('assignments'); }
    public function hasAssignments(): bool { return $this->has('assignments'); }
    /** @return list<InventoryRoutingDemandInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When demands is omitted; use hasDemands() or valueOrDefault().
     */
    public function getDemands(): array { return $this->get('demands'); }
    public function hasDemands(): bool { return $this->has('demands'); }
    /** @return string
     * @throws SdkError When destination_fingerprint is omitted; use hasDestinationFingerprint() or valueOrDefault().
     */
    public function getDestinationFingerprint(): string { return $this->get('destination_fingerprint'); }
    public function hasDestinationFingerprint(): bool { return $this->has('destination_fingerprint'); }
    /** @return InventoryRoutingSourceRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When inventory_routing_source is omitted; use hasInventoryRoutingSource() or valueOrDefault().
     */
    public function getInventoryRoutingSource(): mixed { return $this->get('inventory_routing_source'); }
    public function hasInventoryRoutingSource(): bool { return $this->has('inventory_routing_source'); }
    /** @return InventoryReservationOwnerInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When owner is omitted; use hasOwner() or valueOrDefault().
     */
    public function getOwner(): mixed { return $this->get('owner'); }
    public function hasOwner(): bool { return $this->has('owner'); }
}

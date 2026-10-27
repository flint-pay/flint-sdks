<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?DeliveryAddressResource $address
 * @property-read string $location_id
 * @property-read string $name
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPickupAvailabilityLocationSummary extends Model {
    /** @param array{'address'?: mixed, 'location_id': string, 'name': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPickupAvailabilityLocationSummary')); }
    /** Shape $ (Value): {@see DeliveryAddressResource}. An address as returned on delivery quotes, selections, previews, and pickup locations.
     * @return ?DeliveryAddressResource
     */
    public function getAddress(): ?DeliveryAddressResource { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}

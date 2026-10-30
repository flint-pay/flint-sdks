<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $address
 * @property-read string $destination_type
 * @property-read ?string $location_id
 * @property-read ?string $name
 * Presence-aware response; omitted optional fields return null. */
final class ReturnHandoffDestination extends Model {
    /** @param array{'address'?: mixed, 'destination_type': string, 'location_id'?: string, 'name'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ReturnHandoffDestination')); }
    /** A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getAddress(): ?Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Value enum: "buyer_address", "location", "external_location".
     * @return string
     */
    public function getDestinationType(): string { return $this->get('destination_type'); }
    public function hasDestinationType(): bool { return $this->has('destination_type'); }
    /** location_id
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** name
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}

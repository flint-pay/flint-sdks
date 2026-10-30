<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $address
 * @property-read string $address_source
 * @property-read string $address_type
 * @property-read ?string $customer_id
 * @property-read ?string $device_id
 * @property-read ?string $fulfillment_id
 * @property-read ?string $location_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxLocation extends Model {
    /** @param array{'address'?: mixed, 'address_source': string, 'address_type': string, 'customer_id'?: string, 'device_id'?: string, 'fulfillment_id'?: string, 'location_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxLocation')); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getAddress(): ?Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Value enum: "provided", "fulfillment", "customer", "device", "location", "merchant".
     * @return string
     */
    public function getAddressSource(): string { return $this->get('address_source'); }
    public function hasAddressSource(): bool { return $this->has('address_source'); }
    /** Value enum: "postal_code", "tax_address", "billing_address", "shipping_address", "business_address".
     * @return string
     */
    public function getAddressType(): string { return $this->get('address_type'); }
    public function hasAddressType(): bool { return $this->has('address_type'); }
    /** customer_id
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** device_id
     * @return ?string
     */
    public function getDeviceId(): ?string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** fulfillment_id
     * @return ?string
     */
    public function getFulfillmentId(): ?string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** location_id
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}

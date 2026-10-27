<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $address
 * @property-read string $address_source
 * @property-read ?string $address_type
 * @property-read ?string $customer_id
 * @property-read ?string $device_id
 * @property-read ?string $fulfillment_id
 * @property-read ?string $location_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxLocation extends Model {
    /** @param array{'address'?: mixed, 'address_source': string, 'address_type'?: string, 'customer_id'?: string, 'device_id'?: string, 'fulfillment_id'?: string, 'location_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxLocation')); }
    /** Shape $ (Value): {@see Address}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getAddress(): ?Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string.  Value enum: "provided", "fulfillment", "customer", "device", "location", "merchant".
     * @return string
     */
    public function getAddressSource(): string { return $this->get('address_source'); }
    public function hasAddressSource(): bool { return $this->has('address_source'); }
    /** Shape $ (Value): string.  Value enum: "postal_code", "tax_address", "billing_address", "shipping_address", "business_address".
     * @return ?string
     */
    public function getAddressType(): ?string { return $this->get('address_type'); }
    public function hasAddressType(): bool { return $this->has('address_type'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDeviceId(): ?string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getFulfillmentId(): ?string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}

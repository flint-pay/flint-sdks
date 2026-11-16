<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $address
 * @property-read string|null $address_source
 * @property-read string|null $address_type
 * @property-read string|null $customer_id
 * @property-read string|null $fulfillment_id
 * @property-read string|null $location_id
 * Presence-aware response; omitted optional fields return null. */
final class OrderTaxLocationPreviousAttributes extends Model {
    /** @param array{'address'?: mixed, 'address_source'?: mixed, 'address_type'?: mixed, 'customer_id'?: mixed, 'fulfillment_id'?: mixed, 'location_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxLocationPreviousAttributes')); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getAddress(): AddressPreviousAttributes|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Where the tax address came from. Value enum: "provided", "fulfillment", "customer", "location", "merchant". anyOf[1] (Value): string. Where the tax address came from. Value enum: "provided", "fulfillment", "customer", "location", "merchant". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAddressSource(): string|null { return $this->get('address_source'); }
    public function hasAddressSource(): bool { return $this->has('address_source'); }
    /** The kind of address Flint used to calculate tax. Value enum: "postal_code", "tax_address", "billing_address", "shipping_address", "business_address". anyOf[1] (Value): string. The kind of address Flint used to calculate tax. Value enum: "postal_code", "tax_address", "billing_address", "shipping_address", "business_address". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAddressType(): string|null { return $this->get('address_type'); }
    public function hasAddressType(): bool { return $this->has('address_type'); }
    /** ID of the customer whose saved address Flint used, when `address_source` is `customer`. anyOf[1] (Value): string. ID of the customer whose saved address Flint used, when `address_source` is `customer`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. anyOf[1] (Value): string. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentId(): string|null { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** ID of the pickup store whose address Flint used, when `address_source` is `location`. anyOf[1] (Value): string. ID of the pickup store whose address Flint used, when `address_source` is `location`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $address
 * @property-read string|null $address_source
 * @property-read string|null $address_type
 * @property-read string|null $customer_id
 * @property-read string|null $fulfillment_id
 * @property-read string|null $location_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxLocationPreviousAttributesInput extends Model {
    /** @param array{'address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'address_source'?: string|null, 'address_type'?: string|null, 'customer_id'?: string|null, 'fulfillment_id'?: string|null, 'location_id'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxLocationPreviousAttributesInput')); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Where the tax address came from. Value enum: "provided", "fulfillment", "customer", "location", "merchant". anyOf[1] (Value): string. Where the tax address came from. Value enum: "provided", "fulfillment", "customer", "location", "merchant". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When address_source is omitted; use hasAddressSource() or valueOrDefault().
     */
    public function getAddressSource(): mixed { return $this->get('address_source'); }
    public function hasAddressSource(): bool { return $this->has('address_source'); }
    /** The kind of address Flint used to calculate tax. Value enum: "postal_code", "tax_address", "billing_address", "shipping_address", "business_address". anyOf[1] (Value): string. The kind of address Flint used to calculate tax. Value enum: "postal_code", "tax_address", "billing_address", "shipping_address", "business_address". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When address_type is omitted; use hasAddressType() or valueOrDefault().
     */
    public function getAddressType(): mixed { return $this->get('address_type'); }
    public function hasAddressType(): bool { return $this->has('address_type'); }
    /** ID of the customer whose saved address Flint used, when `address_source` is `customer`. anyOf[1] (Value): string. ID of the customer whose saved address Flint used, when `address_source` is `customer`. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. anyOf[1] (Value): string. ID of the fulfillment whose shipping address Flint used. Absent when the address is the order's `delivery_destination`. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): mixed { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** ID of the pickup store whose address Flint used, when `address_source` is `location`. anyOf[1] (Value): string. ID of the pickup store whose address Flint used, when `address_source` is `location`. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): mixed { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}

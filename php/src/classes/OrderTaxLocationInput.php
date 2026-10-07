<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object $address
 * @property-read string $address_source
 * @property-read string $address_type
 * @property-read string $customer_id
 * @property-read string $device_id
 * @property-read string $fulfillment_id
 * @property-read string $location_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OrderTaxLocationInput extends Model {
    /** @param array{'address'?: array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object, 'address_source': string, 'address_type'?: string, 'customer_id'?: string, 'device_id'?: string, 'fulfillment_id'?: string, 'location_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OrderTaxLocationInput')); }
    /** @return array{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string, ...}|object
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): array|object { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return string
     * @throws SdkError When address_source is omitted; use hasAddressSource() or valueOrDefault().
     */
    public function getAddressSource(): string { return $this->get('address_source'); }
    public function hasAddressSource(): bool { return $this->has('address_source'); }
    /** @return string
     * @throws SdkError When address_type is omitted; use hasAddressType() or valueOrDefault().
     */
    public function getAddressType(): string { return $this->get('address_type'); }
    public function hasAddressType(): bool { return $this->has('address_type'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
}

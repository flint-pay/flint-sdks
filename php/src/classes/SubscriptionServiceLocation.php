<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $address
 * @property-read ?string $customer_address_id
 * @property-read string|null $customer_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionServiceLocation extends Model {
    /** @param array{'address'?: mixed, 'customer_address_id'?: string, 'customer_id': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionServiceLocation')); }
    /** A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getAddress(): ?Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** customer_address_id
     * @return ?string
     */
    public function getCustomerAddressId(): ?string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
    /** Customer that owns customer_address_id. Null when customer_address_id is absent or withheld from the buyer projection.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
}

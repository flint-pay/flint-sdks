<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Address|null $address
 * @property-read ?string $customer_address_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionDeliveryDestination extends Model {
    /** @param array{'address': mixed, 'customer_address_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryDestination')); }
    /** Shape $ (Value): {@see Address} or null. Resolved delivery address used by future shipments. Shape $.anyOf[1] (Value): {@see Address}. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country. Shape $.anyOf[2] (Value): null.
     * @return Address|null
     */
    public function getAddress(): Address|null { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string. Display reference to the saved customer address used when this destination was written. Editing that saved address does not change the subscription destination.
     * @return ?string
     */
    public function getCustomerAddressId(): ?string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $address
 * @property-read ?string $customer_address_id
 * Presence-aware response; omitted optional fields return null. */
final class SubscriptionServiceLocation extends Model {
    /** @param array{'address'?: mixed, 'customer_address_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionServiceLocation')); }
    /** Shape $ (Value): {@see Address}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getAddress(): ?Address { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getCustomerAddressId(): ?string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddressInput|array<array-key, mixed>|\stdClass $address
 * @property-read string $customer_address_id
 * Presence-aware input; omitted fields throw when accessed. */
final class SubscriptionDeliveryDestinationInput extends Model {
    /** @param array{'address': PostalAddressInput|array<array-key, mixed>|\stdClass, 'customer_address_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('SubscriptionDeliveryDestinationInput')); }
    /** @return PostalAddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return string
     * @throws SdkError When customer_address_id is omitted; use hasCustomerAddressId() or valueOrDefault().
     */
    public function getCustomerAddressId(): string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
}

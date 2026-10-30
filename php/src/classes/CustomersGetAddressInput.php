<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $customer_id
 * @property-read string $customer_address_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersGetAddressInput extends Model {
    /** @param array{'customer_id': string, 'customer_address_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersGetAddressInput')); }
    /** Flint customer ID. Example: "cus_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Flint customer address ID. Example: "caddr_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When customer_address_id is omitted; use hasCustomerAddressId() or valueOrDefault().
     */
    public function getCustomerAddressId(): string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
}

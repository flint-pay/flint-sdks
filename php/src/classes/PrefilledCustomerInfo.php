<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddress $billing_address
 * @property-read string $email
 * @property-read string $phone
 * @property-read PostalAddress $shipping_address
 * Presence-aware response; omitted fields throw when accessed. */
final class PrefilledCustomerInfo extends Model {
    /** @param array{'billing_address'?: mixed, 'email'?: string, 'phone'?: string, 'shipping_address'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PrefilledCustomerInfo')); }
    /** @return PostalAddress
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): PostalAddress { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** @return string
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** @return PostalAddress
     * @throws SdkError When shipping_address is omitted; use hasShippingAddress() or valueOrDefault().
     */
    public function getShippingAddress(): PostalAddress { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
}

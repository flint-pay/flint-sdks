<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddressInput|array<array-key, mixed>|\stdClass $billing_address
 * @property-read string $email
 * @property-read string $phone
 * @property-read PostalAddressInput|array<array-key, mixed>|\stdClass $shipping_address
 * Presence-aware input; omitted fields throw when accessed. */
final class PrefilledCustomerInfoInput extends Model {
    /** @param array{'billing_address'?: PostalAddressInput|array<array-key, mixed>|\stdClass, 'email'?: string, 'phone'?: string, 'shipping_address'?: PostalAddressInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PrefilledCustomerInfoInput')); }
    /** @return PostalAddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): mixed { return $this->get('billing_address'); }
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
    /** @return PostalAddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipping_address is omitted; use hasShippingAddress() or valueOrDefault().
     */
    public function getShippingAddress(): mixed { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
}

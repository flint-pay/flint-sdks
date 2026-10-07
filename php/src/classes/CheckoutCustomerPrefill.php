<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read Address $billing_address
 * @property-read string $email
 * @property-read Address $shipping_address
 * @property-read string $shipping_recipient_name
 * Presence-aware response; omitted fields throw when accessed. */
final class CheckoutCustomerPrefill extends Model {
    /** @param array{'billing_address'?: object{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string}, 'email': string, 'shipping_address'?: object{'city': string, 'country': string, 'line1': string, 'line2'?: string, 'postal_code': string, 'state': string}, 'shipping_recipient_name'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutCustomerPrefill')); }
    /** @return Address
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): Address { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** @return Address
     * @throws SdkError When shipping_address is omitted; use hasShippingAddress() or valueOrDefault().
     */
    public function getShippingAddress(): Address { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** @return string
     * @throws SdkError When shipping_recipient_name is omitted; use hasShippingRecipientName() or valueOrDefault().
     */
    public function getShippingRecipientName(): string { return $this->get('shipping_recipient_name'); }
    public function hasShippingRecipientName(): bool { return $this->has('shipping_recipient_name'); }
}

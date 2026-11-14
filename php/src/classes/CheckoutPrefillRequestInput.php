<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $billing_address
 * @property-read string $email
 * @property-read string $phone
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $shipping_address
 * @property-read string $shipping_recipient_name
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutPrefillRequestInput extends Model {
    /** @param array{'billing_address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'email'?: string, 'phone'?: string, 'shipping_address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'shipping_recipient_name'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPrefillRequestInput')); }
    /** The billing address to fill in. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): mixed { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** The buyer's email address to fill in. minLength: 1.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** The buyer's phone number to fill in. minLength: 1.
     * @return string
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** The shipping address to fill in. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipping_address is omitted; use hasShippingAddress() or valueOrDefault().
     */
    public function getShippingAddress(): mixed { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** The name of the person receiving the delivery, to fill in with the shipping address. minLength: 1. maxLength: 200.
     * @return string
     * @throws SdkError When shipping_recipient_name is omitted; use hasShippingRecipientName() or valueOrDefault().
     */
    public function getShippingRecipientName(): string { return $this->get('shipping_recipient_name'); }
    public function hasShippingRecipientName(): bool { return $this->has('shipping_recipient_name'); }
}

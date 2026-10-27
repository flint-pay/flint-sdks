<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $billing_address
 * @property-read string $email
 * @property-read AddressInput|array<array-key, mixed>|\stdClass $shipping_address
 * @property-read string $shipping_recipient_name
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutCustomerPrefillInput extends Model {
    /** @param array{'billing_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'email': string, 'shipping_address'?: AddressInput|array<array-key, mixed>|\stdClass, 'shipping_recipient_name'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutCustomerPrefillInput')); }
    /** Shape $ (Value): {@see AddressInput}. The customer's default billing address. Omitted when the customer has none. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): mixed { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** Shape $ (Value): string. The customer's email.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): {@see AddressInput}. The customer's default shipping address. Omitted when the customer has none. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return AddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipping_address is omitted; use hasShippingAddress() or valueOrDefault().
     */
    public function getShippingAddress(): mixed { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** Shape $ (Value): string. Recipient name saved with the customer's default shipping address. Present only with `shipping_address`; omitted when that address was set on the customer without a saved recipient.
     * @return string
     * @throws SdkError When shipping_recipient_name is omitted; use hasShippingRecipientName() or valueOrDefault().
     */
    public function getShippingRecipientName(): string { return $this->get('shipping_recipient_name'); }
    public function hasShippingRecipientName(): bool { return $this->has('shipping_recipient_name'); }
}

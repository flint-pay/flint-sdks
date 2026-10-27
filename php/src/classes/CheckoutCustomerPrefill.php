<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $billing_address
 * @property-read string $email
 * @property-read ?Address $shipping_address
 * @property-read ?string $shipping_recipient_name
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutCustomerPrefill extends Model {
    /** @param array{'billing_address'?: mixed, 'email': string, 'shipping_address'?: mixed, 'shipping_recipient_name'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutCustomerPrefill')); }
    /** Shape $ (Value): {@see Address}. The customer's default billing address. Omitted when the customer has none. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getBillingAddress(): ?Address { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** Shape $ (Value): string. The customer's email.
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): {@see Address}. The customer's default shipping address. Omitted when the customer has none. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getShippingAddress(): ?Address { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** Shape $ (Value): string. Recipient name saved with the customer's default shipping address. Present only with `shipping_address`; omitted when that address was set on the customer without a saved recipient.
     * @return ?string
     */
    public function getShippingRecipientName(): ?string { return $this->get('shipping_recipient_name'); }
    public function hasShippingRecipientName(): bool { return $this->has('shipping_recipient_name'); }
}

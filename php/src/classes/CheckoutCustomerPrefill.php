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
    /** The customer's default billing address. Omitted when the customer has none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getBillingAddress(): ?Address { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** The customer's email.
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** The customer's default shipping address. Omitted when the customer has none. A postal address. Every address has country. Addresses Flint checked as complete (customer and saved addresses, merchant, location, invoice, order delivery destination, tax identity, fulfillment recipient and pickup addresses) always have line1 and city, and US ones always have state and postal_code. Delivery quote destinations, buyer locations and postal-code tax locations hold only what was provided, such as postal_code and country.
     * @return ?Address
     */
    public function getShippingAddress(): ?Address { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** Recipient name of the customer's default shipping address. Present whenever `shipping_address` is.
     * @return ?string
     */
    public function getShippingRecipientName(): ?string { return $this->get('shipping_recipient_name'); }
    public function hasShippingRecipientName(): bool { return $this->has('shipping_recipient_name'); }
}

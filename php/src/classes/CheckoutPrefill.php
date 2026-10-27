<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?Address $billing_address
 * @property-read ?string $email
 * @property-read ?string $phone
 * @property-read ?Address $shipping_address
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutPrefill extends Model {
    /** @param array{'billing_address'?: mixed, 'email'?: string, 'phone'?: string, 'shipping_address'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPrefill')); }
    /** Shape $ (Value): {@see Address}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getBillingAddress(): ?Address { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getEmail(): ?string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getPhone(): ?string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Shape $ (Value): {@see Address}. A postal address, as returned on customers, invoices, tax locations, and fulfillment recipients.
     * @return ?Address
     */
    public function getShippingAddress(): ?Address { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
}

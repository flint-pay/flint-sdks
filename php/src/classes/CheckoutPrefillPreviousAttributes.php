<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributes|null $billing_address
 * @property-read string|null $email
 * @property-read string|null $phone
 * @property-read AddressPreviousAttributes|null $shipping_address
 * @property-read string|null $shipping_recipient_name
 * Presence-aware response; omitted optional fields return null. */
final class CheckoutPrefillPreviousAttributes extends Model {
    /** @param array{'billing_address'?: mixed, 'email'?: mixed, 'phone'?: mixed, 'shipping_address'?: mixed, 'shipping_recipient_name'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPrefillPreviousAttributes')); }
    /** The billing address to fill in. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getBillingAddress(): AddressPreviousAttributes|null { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** The buyer's email address to fill in. anyOf[1] (Value): string. The buyer's email address to fill in. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** The buyer's phone number to fill in. anyOf[1] (Value): string. The buyer's phone number to fill in. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** The shipping address to fill in. anyOf[1] (Value): {@see AddressPreviousAttributes}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributes|null
     */
    public function getShippingAddress(): AddressPreviousAttributes|null { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** The name of the person receiving the delivery, to fill in with the shipping address. anyOf[1] (Value): string. The name of the person receiving the delivery, to fill in with the shipping address. minLength: 1. maxLength: 200. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShippingRecipientName(): string|null { return $this->get('shipping_recipient_name'); }
    public function hasShippingRecipientName(): bool { return $this->has('shipping_recipient_name'); }
}

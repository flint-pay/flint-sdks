<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $billing_address
 * @property-read string|null $email
 * @property-read string|null $phone
 * @property-read AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $shipping_address
 * @property-read string|null $shipping_recipient_name
 * Presence-aware input; omitted fields throw when accessed. */
final class CheckoutPrefillPreviousAttributesInput extends Model {
    /** @param array{'billing_address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'email'?: string|null, 'phone'?: string|null, 'shipping_address'?: AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'shipping_recipient_name'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CheckoutPrefillPreviousAttributesInput')); }
    /** The billing address to fill in. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When billing_address is omitted; use hasBillingAddress() or valueOrDefault().
     */
    public function getBillingAddress(): mixed { return $this->get('billing_address'); }
    public function hasBillingAddress(): bool { return $this->has('billing_address'); }
    /** The buyer's email address to fill in. anyOf[1] (Value): string. The buyer's email address to fill in. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): mixed { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** The buyer's phone number to fill in. anyOf[1] (Value): string. The buyer's phone number to fill in. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): mixed { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** The shipping address to fill in. anyOf[1] (Value): {@see AddressPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return AddressPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When shipping_address is omitted; use hasShippingAddress() or valueOrDefault().
     */
    public function getShippingAddress(): mixed { return $this->get('shipping_address'); }
    public function hasShippingAddress(): bool { return $this->has('shipping_address'); }
    /** The name of the person receiving the delivery, to fill in with the shipping address. anyOf[1] (Value): string. The name of the person receiving the delivery, to fill in with the shipping address. minLength: 1. maxLength: 200. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When shipping_recipient_name is omitted; use hasShippingRecipientName() or valueOrDefault().
     */
    public function getShippingRecipientName(): mixed { return $this->get('shipping_recipient_name'); }
    public function hasShippingRecipientName(): bool { return $this->has('shipping_recipient_name'); }
}

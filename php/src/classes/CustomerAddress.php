<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddress $address
 * @property-read string $created_at
 * @property-read string $customer_address_id
 * @property-read string $customer_id
 * @property-read bool $is_default_billing
 * @property-read bool $is_default_shipping
 * @property-read ?string $label
 * @property-read ?string $phone
 * @property-read string $recipient_name
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class CustomerAddress extends Model {
    /** @param array{'address': mixed, 'created_at': string, 'customer_address_id': string, 'customer_id': string, 'is_default_billing': bool, 'is_default_shipping': bool, 'label'?: string, 'phone'?: string, 'recipient_name': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAddress')); }
    /** Shape $ (Value): {@see PostalAddress}. A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country.
     * @return PostalAddress
     */
    public function getAddress(): PostalAddress { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getCustomerAddressId(): string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsDefaultBilling(): bool { return $this->get('is_default_billing'); }
    public function hasIsDefaultBilling(): bool { return $this->has('is_default_billing'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getIsDefaultShipping(): bool { return $this->get('is_default_shipping'); }
    public function hasIsDefaultShipping(): bool { return $this->has('is_default_shipping'); }
    /** Shape $ (Value): string. Limited to 100 characters (Unicode code points). maxLength: 100.
     * @return ?string
     */
    public function getLabel(): ?string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** Shape $ (Value): string. E.164 phone number. Limited to 30 characters (Unicode code points). maxLength: 30.
     * @return ?string
     */
    public function getPhone(): ?string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Shape $ (Value): string. Limited to 255 characters (Unicode code points). maxLength: 255.
     * @return string
     */
    public function getRecipientName(): string { return $this->get('recipient_name'); }
    public function hasRecipientName(): bool { return $this->has('recipient_name'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

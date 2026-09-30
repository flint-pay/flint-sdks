<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddressInput|array<array-key, mixed>|\stdClass $address
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $customer_address_id
 * @property-read string $customer_id
 * @property-read bool $is_default_billing
 * @property-read bool $is_default_shipping
 * @property-read string $label
 * @property-read string $phone
 * @property-read string $recipient_name
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomerAddressInput extends Model {
    /** @param array{'address': PostalAddressInput|array<array-key, mixed>|\stdClass, 'created_at': string|\DateTimeInterface, 'customer_address_id': string, 'customer_id': string, 'is_default_billing': bool, 'is_default_shipping': bool, 'label'?: string, 'phone'?: string, 'recipient_name': string, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomerAddressInput')); }
    /** @return PostalAddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When customer_address_id is omitted; use hasCustomerAddressId() or valueOrDefault().
     */
    public function getCustomerAddressId(): string { return $this->get('customer_address_id'); }
    public function hasCustomerAddressId(): bool { return $this->has('customer_address_id'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return bool
     * @throws SdkError When is_default_billing is omitted; use hasIsDefaultBilling() or valueOrDefault().
     */
    public function getIsDefaultBilling(): bool { return $this->get('is_default_billing'); }
    public function hasIsDefaultBilling(): bool { return $this->has('is_default_billing'); }
    /** @return bool
     * @throws SdkError When is_default_shipping is omitted; use hasIsDefaultShipping() or valueOrDefault().
     */
    public function getIsDefaultShipping(): bool { return $this->get('is_default_shipping'); }
    public function hasIsDefaultShipping(): bool { return $this->has('is_default_shipping'); }
    /** @return string
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** @return string
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** @return string
     * @throws SdkError When recipient_name is omitted; use hasRecipientName() or valueOrDefault().
     */
    public function getRecipientName(): string { return $this->get('recipient_name'); }
    public function hasRecipientName(): bool { return $this->has('recipient_name'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}

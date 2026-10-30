<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read bool $is_default_billing
 * @property-read bool $is_default_shipping
 * @property-read string $label
 * @property-read string $phone
 * @property-read string $recipient_name
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersCreateAddressParams extends Model {
    /** @param array{'address': AddressRequestInput|array<array-key, mixed>|\stdClass, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string, 'phone'?: string, 'recipient_name': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersCreateAddressParams')); }
    /** A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** is_default_billing
     * @return bool
     * @throws SdkError When is_default_billing is omitted; use hasIsDefaultBilling() or valueOrDefault().
     */
    public function getIsDefaultBilling(): bool { return $this->get('is_default_billing'); }
    public function hasIsDefaultBilling(): bool { return $this->has('is_default_billing'); }
    /** is_default_shipping
     * @return bool
     * @throws SdkError When is_default_shipping is omitted; use hasIsDefaultShipping() or valueOrDefault().
     */
    public function getIsDefaultShipping(): bool { return $this->get('is_default_shipping'); }
    public function hasIsDefaultShipping(): bool { return $this->has('is_default_shipping'); }
    /** Limited to 100 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): string { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** E.164 phone number. Limited to 30 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 30.
     * @return string
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Limited to 255 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When recipient_name is omitted; use hasRecipientName() or valueOrDefault().
     */
    public function getRecipientName(): string { return $this->get('recipient_name'); }
    public function hasRecipientName(): bool { return $this->has('recipient_name'); }
}

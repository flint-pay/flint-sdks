<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read AddressRequestInput|array<array-key, mixed>|\stdClass $address
 * @property-read int $expected_version
 * @property-read bool $is_default_billing
 * @property-read bool $is_default_shipping
 * @property-read string|null $label
 * @property-read string|null $phone
 * @property-read string $recipient_name
 * Presence-aware input; omitted fields throw when accessed. */
final class CustomersUpdateAddressParams extends Model {
    /** @param array{'address'?: AddressRequestInput|array<array-key, mixed>|\stdClass, 'expected_version'?: int, 'is_default_billing'?: bool, 'is_default_shipping'?: bool, 'label'?: string|null, 'phone'?: string|null, 'recipient_name'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CustomersUpdateAddressParams')); }
    /** Replaces the whole postal address. Send every field you want to keep; omitted optional fields such as line2 are removed. A complete postal address. State and postal_code are required for US addresses and optional for other countries. Send null or omit line2, state, and postal_code when the address has none.
     * @return AddressRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Set true to make this the default billing address and remove that default from any other saved address. Set false to clear this default if this address holds it; no other address becomes the default.
     * @return bool
     * @throws SdkError When is_default_billing is omitted; use hasIsDefaultBilling() or valueOrDefault().
     */
    public function getIsDefaultBilling(): bool { return $this->get('is_default_billing'); }
    public function hasIsDefaultBilling(): bool { return $this->has('is_default_billing'); }
    /** Set true to make this the default shipping address and remove that default from any other saved address. Set false to clear this default if this address holds it; no other address becomes the default.
     * @return bool
     * @throws SdkError When is_default_shipping is omitted; use hasIsDefaultShipping() or valueOrDefault().
     */
    public function getIsDefaultShipping(): bool { return $this->get('is_default_shipping'); }
    public function hasIsDefaultShipping(): bool { return $this->has('is_default_shipping'); }
    /** Limited to 100 characters (Unicode code points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 100.
     * @return string|null
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): string|null { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** E.164 phone number. Limited to 30 characters (Unicode code points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 30.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Limited to 255 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When recipient_name is omitted; use hasRecipientName() or valueOrDefault().
     */
    public function getRecipientName(): string { return $this->get('recipient_name'); }
    public function hasRecipientName(): bool { return $this->has('recipient_name'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read PostalAddressInput|array<array-key, mixed>|\stdClass $address
 * @property-read string|null $label
 * @property-read string|null $phone
 * @property-read string $recipient_name
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateCustomerAddressRequestInput extends Model {
    /** @param array{'address'?: PostalAddressInput|array<array-key, mixed>|\stdClass, 'label'?: string|null, 'phone'?: string|null, 'recipient_name'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateCustomerAddressRequestInput')); }
    /** Shape $ (Value): {@see PostalAddressInput}. Replaces the whole postal address. Send every field you want to keep; omitted optional fields such as line2 are removed. A postal address for a customer, with line 1, optional line 2, city, state, postal code, and country.
     * @return PostalAddressInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When address is omitted; use hasAddress() or valueOrDefault().
     */
    public function getAddress(): mixed { return $this->get('address'); }
    public function hasAddress(): bool { return $this->has('address'); }
    /** Shape $ (Value): string or null. Limited to 100 characters (Unicode code points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 100.
     * @return string|null
     * @throws SdkError When label is omitted; use hasLabel() or valueOrDefault().
     */
    public function getLabel(): string|null { return $this->get('label'); }
    public function hasLabel(): bool { return $this->has('label'); }
    /** Shape $ (Value): string or null. E.164 phone number. Limited to 30 characters (Unicode code points), counted before surrounding whitespace is trimmed. Send null to clear it. minLength: 1. maxLength: 30.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
    /** Shape $ (Value): string. Limited to 255 characters (Unicode code points), counted before surrounding whitespace is trimmed. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When recipient_name is omitted; use hasRecipientName() or valueOrDefault().
     */
    public function getRecipientName(): string { return $this->get('recipient_name'); }
    public function hasRecipientName(): bool { return $this->has('recipient_name'); }
}

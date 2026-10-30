<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read string|null $name
 * @property-read string|null $phone
 * Presence-aware input; omitted fields throw when accessed. */
final class DeliverySelectionRecipientRequestInput extends Model {
    /** @param array{'email'?: string|null, 'name'?: string|null, 'phone'?: string|null}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliverySelectionRecipientRequestInput')); }
    /** Recipient email address. Limited to 254 characters (Unicode code points), counted before surrounding whitespace is trimmed. When the selected delivery option requires it, payment needs it: send it with this selection or a later one. Send null to clear it. Format: email. minLength: 1. maxLength: 254.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Recipient name. Limited to 200 characters (Unicode code points), counted before surrounding whitespace is trimmed. When the selected delivery option requires it, payment needs it: send it with this selection or a later one. Send null to clear it. minLength: 1. maxLength: 200.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Recipient phone number. After surrounding whitespace is trimmed, use + followed by 7 through 15 ASCII digits, with a nonzero first digit. Limited to 16 characters (Unicode code points), counted before trimming. When the selected delivery option requires it, payment needs it: send it with this selection or a later one. Send null to clear it. minLength: 1. maxLength: 16.
     * @return string|null
     * @throws SdkError When phone is omitted; use hasPhone() or valueOrDefault().
     */
    public function getPhone(): string|null { return $this->get('phone'); }
    public function hasPhone(): bool { return $this->has('phone'); }
}

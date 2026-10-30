<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * @property-read string|null $message
 * @property-read string|null $name
 * @property-read string|\DateTimeInterface $send_at
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseRecipientPatchRequestInput extends Model {
    /** @param array{'email': string, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRecipientPatchRequestInput')); }
    /** Format: email. minLength: 1. maxLength: 254.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Send null to clear it. minLength: 1. maxLength: 200.
     * @return string|null
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string|null { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When send_at is omitted; use hasSendAt() or valueOrDefault().
     */
    public function getSendAt(): string|\DateTimeInterface { return $this->get('send_at'); }
    public function hasSendAt(): bool { return $this->has('send_at'); }
}

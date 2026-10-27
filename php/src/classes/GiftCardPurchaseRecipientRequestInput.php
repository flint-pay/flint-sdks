<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * @property-read string $message
 * @property-read string $name
 * @property-read string|\DateTimeInterface $send_at
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardPurchaseRecipientRequestInput extends Model {
    /** @param array{'email': string, 'message'?: string, 'name'?: string, 'send_at'?: string|\DateTimeInterface}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRecipientRequestInput')); }
    /** Shape $ (Value): string. Format: email. minLength: 1. maxLength: 254.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 200.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When send_at is omitted; use hasSendAt() or valueOrDefault().
     */
    public function getSendAt(): string|\DateTimeInterface { return $this->get('send_at'); }
    public function hasSendAt(): bool { return $this->has('send_at'); }
}

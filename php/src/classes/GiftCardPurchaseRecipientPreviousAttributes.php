<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read string|null $message
 * @property-read string|null $name
 * @property-read string|null $send_at
 * @property-read string|null $sender_name
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardPurchaseRecipientPreviousAttributes extends Model {
    /** @param array{'email'?: mixed, 'message'?: mixed, 'name'?: mixed, 'send_at'?: mixed, 'sender_name'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardPurchaseRecipientPreviousAttributes')); }
    /** Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes). anyOf[1] (Value): string. Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: email. minLength: 1. maxLength: 254. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Personal message included with the gift card. anyOf[1] (Value): string. Personal message included with the gift card. maxLength: 200. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMessage(): string|null { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Name of the person receiving the gift card. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. anyOf[1] (Value): string. Name of the person receiving the gift card. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. anyOf[1] (Value): string. Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSendAt(): string|null { return $this->get('send_at'); }
    public function hasSendAt(): bool { return $this->has('send_at'); }
    /** Name to show as the sender in the gift card email, when provided. anyOf[1] (Value): string. Name to show as the sender in the gift card email, when provided. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSenderName(): string|null { return $this->get('sender_name'); }
    public function hasSenderName(): bool { return $this->has('sender_name'); }
}

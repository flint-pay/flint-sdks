<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read string|null $message
 * @property-read string|null $name
 * @property-read string|null $send_at
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationRecipientPreviousAttributes extends Model {
    /** @param array{'email'?: mixed, 'message'?: mixed, 'name'?: mixed, 'send_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationRecipientPreviousAttributes')); }
    /** Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). anyOf[1] (Value): string. Email address the notification is sent to. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: email. minLength: 1. maxLength: 254. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Message included in the notification. anyOf[1] (Value): string. Message included in the notification. minLength: 1. maxLength: 200. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMessage(): string|null { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. anyOf[1] (Value): string. Name of the person the notification is addressed to. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Optional whole-second send time between now and 90 days from now. anyOf[1] (Value): string. Optional whole-second send time between now and 90 days from now. Format: date-time. minLength: 1. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSendAt(): string|null { return $this->get('send_at'); }
    public function hasSendAt(): bool { return $this->has('send_at'); }
}

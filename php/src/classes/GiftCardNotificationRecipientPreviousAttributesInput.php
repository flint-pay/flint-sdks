<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read string|null $message
 * @property-read string|null $name
 * @property-read string|\DateTimeInterface|null $send_at
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationRecipientPreviousAttributesInput extends Model {
    /** @param array{'email'?: string|null, 'message'?: string|null, 'name'?: string|null, 'send_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationRecipientPreviousAttributesInput')); }
    /** Email address the notification is sent to. anyOf[1] (Value): string. Email address the notification is sent to. Format: email. minLength: 1. maxLength: 254. Example: "buyer@example.com". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): mixed { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Message included in the notification. anyOf[1] (Value): string. Message included in the notification. minLength: 1. maxLength: 200. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): mixed { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Name of the person the notification is addressed to. anyOf[1] (Value): string. Name of the person the notification is addressed to. minLength: 1. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): mixed { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Optional whole-second send time between now and 90 days from now. anyOf[1] (Value): string. Optional whole-second send time between now and 90 days from now. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When send_at is omitted; use hasSendAt() or valueOrDefault().
     */
    public function getSendAt(): mixed { return $this->get('send_at'); }
    public function hasSendAt(): bool { return $this->has('send_at'); }
}

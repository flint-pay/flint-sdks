<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * @property-read string $message
 * @property-read string $name
 * @property-read string $send_at
 * Presence-aware response; omitted fields throw when accessed. */
final class GiftCardNotificationRecipient extends Model {
    /** @param array{'email': string, 'message'?: string, 'name'?: string, 'send_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationRecipient')); }
    /** @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** @return string
     * @throws SdkError When send_at is omitted; use hasSendAt() or valueOrDefault().
     */
    public function getSendAt(): string { return $this->get('send_at'); }
    public function hasSendAt(): bool { return $this->has('send_at'); }
}

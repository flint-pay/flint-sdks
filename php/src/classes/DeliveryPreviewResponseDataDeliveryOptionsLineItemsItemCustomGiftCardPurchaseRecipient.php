<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $email
 * @property-read ?string $message
 * @property-read ?string $name
 * @property-read ?string $send_at
 * @property-read ?string $sender_name
 * Presence-aware response; omitted optional fields return null. */
final class DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient extends Model {
    /** @param array{'email': string, 'message'?: string, 'name'?: string, 'send_at'?: string, 'sender_name'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeliveryPreviewResponseDataDeliveryOptionsLineItemsItemCustomGiftCardPurchaseRecipient')); }
    /** Email address the gift card is delivered to. The local part before @ must be at most 64 octets (UTF-8 bytes). Format: email. minLength: 1. maxLength: 254.
     * @return string
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** Personal message included with the gift card. maxLength: 200.
     * @return ?string
     */
    public function getMessage(): ?string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Name of the person receiving the gift card. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. maxLength: 255.
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Optional send time between now and 90 days from now. Omission requests immediate recipient notification after funding. Format: date-time.
     * @return ?string
     */
    public function getSendAt(): ?string { return $this->get('send_at'); }
    public function hasSendAt(): bool { return $this->has('send_at'); }
    /** Name to show as the sender in the gift card email, when provided. maxLength: 255.
     * @return ?string
     */
    public function getSenderName(): ?string { return $this->get('sender_name'); }
    public function hasSenderName(): bool { return $this->has('sender_name'); }
}

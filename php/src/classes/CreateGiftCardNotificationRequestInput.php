<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $gift_card_id
 * @property-read GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read string $resend_of_notification_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateGiftCardNotificationRequestInput extends Model {
    /** @param array{'gift_card_id': string, 'recipient': GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass, 'resend_of_notification_id'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateGiftCardNotificationRequestInput')); }
    /** @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** @return GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return string
     * @throws SdkError When resend_of_notification_id is omitted; use hasResendOfNotificationId() or valueOrDefault().
     */
    public function getResendOfNotificationId(): string { return $this->get('resend_of_notification_id'); }
    public function hasResendOfNotificationId(): bool { return $this->has('resend_of_notification_id'); }
}

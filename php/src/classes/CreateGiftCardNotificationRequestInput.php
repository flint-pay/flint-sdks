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
    /** ID of the gift card the notification is about. minLength: 1. Example: "gc_01KEZF7C00RT1618WYBM1Y94CG".
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Who the notification is sent to. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** ID of the earlier notification this one sends again. minLength: 1. Example: "ntf_01KEZF7C00X0DP9KT950FYXHQ1".
     * @return string
     * @throws SdkError When resend_of_notification_id is omitted; use hasResendOfNotificationId() or valueOrDefault().
     */
    public function getResendOfNotificationId(): string { return $this->get('resend_of_notification_id'); }
    public function hasResendOfNotificationId(): bool { return $this->has('resend_of_notification_id'); }
}

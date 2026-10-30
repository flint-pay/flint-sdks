<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read GiftCardNotificationDeliveryInput|array<array-key, mixed>|\stdClass $delivery
 * @property-read string $gift_card_id
 * @property-read string $gift_card_notification_id
 * @property-read GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read string $resend_of_notification_id
 * @property-read string|\DateTimeInterface $sent_at
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read int $version
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'delivery'?: GiftCardNotificationDeliveryInput|array<array-key, mixed>|\stdClass, 'gift_card_id': string, 'gift_card_notification_id': string, 'recipient': GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass, 'resend_of_notification_id'?: string, 'sent_at'?: string|\DateTimeInterface, 'status': string, 'updated_at': string|\DateTimeInterface, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. Delivery history of a gift card notification email: its send attempts and delivery events, and whether more of each exist.
     * @return GiftCardNotificationDeliveryInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When delivery is omitted; use hasDelivery() or valueOrDefault().
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** gift_card_id
     * @return string
     * @throws SdkError When gift_card_id is omitted; use hasGiftCardId() or valueOrDefault().
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** gift_card_notification_id
     * @return string
     * @throws SdkError When gift_card_notification_id is omitted; use hasGiftCardNotificationId() or valueOrDefault().
     */
    public function getGiftCardNotificationId(): string { return $this->get('gift_card_notification_id'); }
    public function hasGiftCardNotificationId(): bool { return $this->has('gift_card_notification_id'); }
    /** Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return GiftCardNotificationRecipientInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** resend_of_notification_id
     * @return string
     * @throws SdkError When resend_of_notification_id is omitted; use hasResendOfNotificationId() or valueOrDefault().
     */
    public function getResendOfNotificationId(): string { return $this->get('resend_of_notification_id'); }
    public function hasResendOfNotificationId(): bool { return $this->has('resend_of_notification_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When sent_at is omitted; use hasSentAt() or valueOrDefault().
     */
    public function getSentAt(): string|\DateTimeInterface { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** Value enum: "scheduled", "queued", "sending", "sent", "failed", "unconfirmed", "bounced", "canceled".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Format: int64.
     * @return int
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

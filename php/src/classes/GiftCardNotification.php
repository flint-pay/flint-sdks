<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read ?GiftCardNotificationDelivery $delivery
 * @property-read string $gift_card_id
 * @property-read string $gift_card_notification_id
 * @property-read GiftCardNotificationRecipient $recipient
 * @property-read ?string $resend_of_notification_id
 * @property-read ?string $sent_at
 * @property-read string $status
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotification extends Model {
    /** @param array{'created_at': string, 'delivery'?: mixed, 'gift_card_id': string, 'gift_card_notification_id': string, 'recipient': mixed, 'resend_of_notification_id'?: string, 'sent_at'?: string, 'status': string, 'updated_at': string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotification')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): {@see GiftCardNotificationDelivery}. Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. Delivery history of a gift card notification email: its send attempts and delivery events, and whether more of each exist.
     * @return ?GiftCardNotificationDelivery
     */
    public function getDelivery(): ?GiftCardNotificationDelivery { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getGiftCardNotificationId(): string { return $this->get('gift_card_notification_id'); }
    public function hasGiftCardNotificationId(): bool { return $this->has('gift_card_notification_id'); }
    /** Shape $ (Value): {@see GiftCardNotificationRecipient}. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return GiftCardNotificationRecipient
     */
    public function getRecipient(): GiftCardNotificationRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getResendOfNotificationId(): ?string { return $this->get('resend_of_notification_id'); }
    public function hasResendOfNotificationId(): bool { return $this->has('resend_of_notification_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getSentAt(): ?string { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** Shape $ (Value): string.  Value enum: "scheduled", "queued", "sending", "sent", "failed", "unconfirmed", "bounced", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

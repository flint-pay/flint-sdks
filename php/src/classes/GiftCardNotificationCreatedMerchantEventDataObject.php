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
 * @property-read string|null $status_reason
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read int $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationCreatedMerchantEventDataObject extends Model {
    /** @param array{'created_at': string, 'delivery'?: mixed, 'gift_card_id': string, 'gift_card_notification_id': string, 'recipient': mixed, 'resend_of_notification_id'?: string, 'sent_at'?: string, 'status': string, 'status_reason': string|null, 'supported_actions': list<string>, 'updated_at': string, 'version': int, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationCreatedMerchantEventDataObject')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. Delivery history of a gift card notification email: its send attempts and delivery events, and whether more of each exist.
     * @return ?GiftCardNotificationDelivery
     */
    public function getDelivery(): ?GiftCardNotificationDelivery { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** ID of the gift card the notification is about.
     * @return string
     */
    public function getGiftCardId(): string { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Unique identifier for this gift card notification, prefixed `gcn_`.
     * @return string
     */
    public function getGiftCardNotificationId(): string { return $this->get('gift_card_notification_id'); }
    public function hasGiftCardNotificationId(): bool { return $this->has('gift_card_notification_id'); }
    /** Who the notification is sent to. Who receives a gift card notification: their `email`, optional `name` and `message`, and an optional `send_at` time.
     * @return GiftCardNotificationRecipient
     */
    public function getRecipient(): GiftCardNotificationRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** ID of the earlier notification this one sends again.
     * @return ?string
     */
    public function getResendOfNotificationId(): ?string { return $this->get('resend_of_notification_id'); }
    public function hasResendOfNotificationId(): bool { return $this->has('resend_of_notification_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getSentAt(): ?string { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Value enum: "scheduled", "pending", "sent", "failed", "unconfirmed", "canceled".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Value enum: "credential_rotated", null.
     * @return string|null
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. [] enum: "cancel". [] (Value): string.  Value enum: "cancel".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

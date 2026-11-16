<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read mixed $delivery
 * @property-read string|null $gift_card_id
 * @property-read string|null $gift_card_notification_id
 * @property-read mixed $recipient
 * @property-read string|null $resend_of_notification_id
 * @property-read string|null $sent_at
 * @property-read string|null $status
 * @property-read mixed $status_reason
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'delivery'?: mixed, 'gift_card_id'?: mixed, 'gift_card_notification_id'?: mixed, 'recipient'?: mixed, 'resend_of_notification_id'?: mixed, 'sent_at'?: mixed, 'status'?: mixed, 'status_reason'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationUpdatedMerchantEventDataPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Included on notification retrieval. Contains the most recent sending attempts and delivery events, newest first. A failed attempt describes the send call; use notification.status to determine whether acceptance remains unconfirmed. anyOf[1] (Value): {@see GiftCardNotificationDeliveryPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getDelivery(): mixed { return $this->get('delivery'); }
    public function hasDelivery(): bool { return $this->has('delivery'); }
    /** ID of the gift card the notification is about. anyOf[1] (Value): string. ID of the gift card the notification is about. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardId(): string|null { return $this->get('gift_card_id'); }
    public function hasGiftCardId(): bool { return $this->has('gift_card_id'); }
    /** Unique identifier for this gift card notification, prefixed `gcn_`. anyOf[1] (Value): string. Unique identifier for this gift card notification, prefixed `gcn_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getGiftCardNotificationId(): string|null { return $this->get('gift_card_notification_id'); }
    public function hasGiftCardNotificationId(): bool { return $this->has('gift_card_notification_id'); }
    /** Who the notification is sent to. anyOf[1] (Value): {@see GiftCardNotificationRecipientPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** ID of the earlier notification this one sends again. anyOf[1] (Value): string. ID of the earlier notification this one sends again. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getResendOfNotificationId(): string|null { return $this->get('resend_of_notification_id'); }
    public function hasResendOfNotificationId(): bool { return $this->has('resend_of_notification_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSentAt(): string|null { return $this->get('sent_at'); }
    public function hasSentAt(): bool { return $this->has('sent_at'); }
    /** Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Value enum: "scheduled", "pending", "sent", "failed", "unconfirmed", "canceled". anyOf[1] (Value): string. Where sending the notification stands. Read `delivery` for the attempts and email events behind it. Value enum: "scheduled", "pending", "sent", "failed", "unconfirmed", "canceled". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Value enum: "credential_rotated", null. anyOf[1] (Value): string or null. Why the notification has its current status. credential_rotated means code rotation canceled an unsent notification for the previous code. Null when no reason applies. Value enum: "credential_rotated", null. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getStatusReason(): mixed { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. [] enum: "cancel". anyOf[1] (Value): Array of string. Lifecycle actions accepted for this notification's stored state, independent of the caller's credentials. Empty when none are available. [] enum: "cancel". anyOf[1][] (Value): string.  Value enum: "cancel". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. anyOf[1] (Value): integer. Current version of this resource's owned state. Send it as `expected_version` when changing the resource to reject a stale write. Format: int64. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

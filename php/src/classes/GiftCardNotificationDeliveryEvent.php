<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_attempt_id
 * @property-read string $occurred_at
 * @property-read string $received_at
 * @property-read string $type
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationDeliveryEvent extends Model {
    /** @param array{'delivery_attempt_id': string, 'occurred_at': string, 'received_at': string, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryEvent')); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDeliveryAttemptId(): string { return $this->get('delivery_attempt_id'); }
    public function hasDeliveryAttemptId(): bool { return $this->has('delivery_attempt_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getReceivedAt(): string { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** Shape $ (Value): string. accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Value enum: "accepted", "delivered", "bounced", "dropped".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

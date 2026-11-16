<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_attempt_id
 * @property-read string|null $occurred_at
 * @property-read string|null $received_at
 * @property-read string|null $type
 * Presence-aware response; omitted optional fields return null. */
final class GiftCardNotificationDeliveryEventPreviousAttributes extends Model {
    /** @param array{'delivery_attempt_id'?: mixed, 'occurred_at'?: mixed, 'received_at'?: mixed, 'type'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryEventPreviousAttributes')); }
    /** ID of the delivery attempt the event belongs to. anyOf[1] (Value): string. ID of the delivery attempt the event belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryAttemptId(): string|null { return $this->get('delivery_attempt_id'); }
    public function hasDeliveryAttemptId(): bool { return $this->has('delivery_attempt_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOccurredAt(): string|null { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReceivedAt(): string|null { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Value enum: "accepted", "delivered", "bounced", "dropped". anyOf[1] (Value): string. accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Value enum: "accepted", "delivered", "bounced", "dropped". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

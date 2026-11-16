<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $delivery_attempt_id
 * @property-read string|\DateTimeInterface|null $occurred_at
 * @property-read string|\DateTimeInterface|null $received_at
 * @property-read string|null $type
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationDeliveryEventPreviousAttributesInput extends Model {
    /** @param array{'delivery_attempt_id'?: string|null, 'occurred_at'?: string|\DateTimeInterface|null, 'received_at'?: string|\DateTimeInterface|null, 'type'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryEventPreviousAttributesInput')); }
    /** ID of the delivery attempt the event belongs to. anyOf[1] (Value): string. ID of the delivery attempt the event belongs to. Example: "edat_01KEZF7C00AX45366QP3FMY6VH". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_attempt_id is omitted; use hasDeliveryAttemptId() or valueOrDefault().
     */
    public function getDeliveryAttemptId(): mixed { return $this->get('delivery_attempt_id'); }
    public function hasDeliveryAttemptId(): bool { return $this->has('delivery_attempt_id'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): mixed { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When received_at is omitted; use hasReceivedAt() or valueOrDefault().
     */
    public function getReceivedAt(): mixed { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Value enum: "accepted", "delivered", "bounced", "dropped". anyOf[1] (Value): string. accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Value enum: "accepted", "delivered", "bounced", "dropped". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

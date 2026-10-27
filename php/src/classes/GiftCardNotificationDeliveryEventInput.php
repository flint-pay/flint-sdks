<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $delivery_attempt_id
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string|\DateTimeInterface $received_at
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class GiftCardNotificationDeliveryEventInput extends Model {
    /** @param array{'delivery_attempt_id': string, 'occurred_at': string|\DateTimeInterface, 'received_at': string|\DateTimeInterface, 'type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('GiftCardNotificationDeliveryEventInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When delivery_attempt_id is omitted; use hasDeliveryAttemptId() or valueOrDefault().
     */
    public function getDeliveryAttemptId(): string { return $this->get('delivery_attempt_id'); }
    public function hasDeliveryAttemptId(): bool { return $this->has('delivery_attempt_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When received_at is omitted; use hasReceivedAt() or valueOrDefault().
     */
    public function getReceivedAt(): string|\DateTimeInterface { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** Shape $ (Value): string. accepted means Flint's email service accepted the message for delivery; delivered means it reached the recipient's mail server; bounced means delivery failed; dropped means the message was not sent. Value enum: "accepted", "delivered", "bounced", "dropped".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

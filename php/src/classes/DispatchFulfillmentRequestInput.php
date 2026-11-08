<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_notification_behavior
 * @property-read int $expected_version
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class DispatchFulfillmentRequestInput extends Model {
    /** @param array{'buyer_notification_behavior'?: string, 'expected_version'?: int, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DispatchFulfillmentRequestInput')); }
    /** Whether to send or suppress the buyer notification for this action. Value enum: "send", "suppress".
     * @return string
     * @throws SdkError When buyer_notification_behavior is omitted; use hasBuyerNotificationBehavior() or valueOrDefault().
     */
    public function getBuyerNotificationBehavior(): string { return $this->get('buyer_notification_behavior'); }
    public function hasBuyerNotificationBehavior(): bool { return $this->has('buyer_notification_behavior'); }
    /** Resource version the caller last read. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** When the action occurred, as an RFC 3339 timestamp. On complete, also records completion evidence. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Your note explaining this transition. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_notification_behavior
 * @property-read string $expected_version
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $reason_message
 * Presence-aware input; omitted fields throw when accessed. */
final class VoidShipmentRequestInput extends Model {
    /** @param array{'buyer_notification_behavior'?: string, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('VoidShipmentRequestInput')); }
    /** Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * @return string
     * @throws SdkError When buyer_notification_behavior is omitted; use hasBuyerNotificationBehavior() or valueOrDefault().
     */
    public function getBuyerNotificationBehavior(): string { return $this->get('buyer_notification_behavior'); }
    public function hasBuyerNotificationBehavior(): bool { return $this->has('buyer_notification_behavior'); }
    /** Shape $ (Value): integer string. Optional resource version last read by the caller. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. Void event timestamp. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): string. Your note explaining this action. minLength: 1.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
}

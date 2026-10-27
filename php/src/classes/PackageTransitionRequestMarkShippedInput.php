<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $action
 * @property-read string $buyer_notification_behavior
 * @property-read string $carrier
 * @property-read string|\DateTimeInterface|null $expected_delivery_at
 * @property-read string $expected_version
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read string $reason_message
 * @property-read string $service_code
 * @property-read string $tracking_number
 * @property-read string $tracking_url
 * Presence-aware input; omitted fields throw when accessed. */
final class PackageTransitionRequestMarkShippedInput extends Model {
    /** @param array{'action': string, 'buyer_notification_behavior'?: string, 'carrier'?: string, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'expected_version'?: string, 'occurred_at'?: string|\DateTimeInterface, 'reason_message'?: string, 'service_code'?: string, 'tracking_number'?: string, 'tracking_url'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageTransitionRequestMarkShippedInput')); }
    /** Shape $ (Value): string.  Value enum: "mark_shipped".
     * @return string
     * @throws SdkError When action is omitted; use hasAction() or valueOrDefault().
     */
    public function getAction(): string { return $this->get('action'); }
    public function hasAction(): bool { return $this->has('action'); }
    /** Shape $ (Value): string.  Value enum: "send", "suppress".
     * @return string
     * @throws SdkError When buyer_notification_behavior is omitted; use hasBuyerNotificationBehavior() or valueOrDefault().
     */
    public function getBuyerNotificationBehavior(): string { return $this->get('buyer_notification_behavior'); }
    public function hasBuyerNotificationBehavior(): bool { return $this->has('buyer_notification_behavior'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When carrier is omitted; use hasCarrier() or valueOrDefault().
     */
    public function getCarrier(): string { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Shape $ (Value): string or null. When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expected_delivery_at is omitted; use hasExpectedDeliveryAt() or valueOrDefault().
     */
    public function getExpectedDeliveryAt(): string|\DateTimeInterface|null { return $this->get('expected_delivery_at'); }
    public function hasExpectedDeliveryAt(): bool { return $this->has('expected_delivery_at'); }
    /** Shape $ (Value): integer string. Resource version the caller last read. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): string. Your note explaining this transition. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 100.
     * @return string
     * @throws SdkError When service_code is omitted; use hasServiceCode() or valueOrDefault().
     */
    public function getServiceCode(): string { return $this->get('service_code'); }
    public function hasServiceCode(): bool { return $this->has('service_code'); }
    /** Shape $ (Value): string. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When tracking_number is omitted; use hasTrackingNumber() or valueOrDefault().
     */
    public function getTrackingNumber(): string { return $this->get('tracking_number'); }
    public function hasTrackingNumber(): bool { return $this->has('tracking_number'); }
    /** Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. maxLength: 2048.
     * @return string
     * @throws SdkError When tracking_url is omitted; use hasTrackingUrl() or valueOrDefault().
     */
    public function getTrackingUrl(): string { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_notification_behavior
 * @property-read array<array-key, string>|\stdClass $custom_details
 * @property-read string $event_type
 * @property-read string $external_event_id
 * @property-read string $external_status
 * @property-read string $external_system
 * @property-read string $location_description
 * @property-read string $message
 * @property-read string|\DateTimeInterface $occurred_at
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentEventInput extends Model {
    /** @param array{'buyer_notification_behavior': string, 'custom_details'?: array<array-key, string>|\stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentEventInput')); }
    /** @return string
     * @throws SdkError When buyer_notification_behavior is omitted; use hasBuyerNotificationBehavior() or valueOrDefault().
     */
    public function getBuyerNotificationBehavior(): string { return $this->get('buyer_notification_behavior'); }
    public function hasBuyerNotificationBehavior(): bool { return $this->has('buyer_notification_behavior'); }
    /** @return array<array-key, string>|\stdClass
     * @throws SdkError When custom_details is omitted; use hasCustomDetails() or valueOrDefault().
     */
    public function getCustomDetails(): array|object { return $this->get('custom_details'); }
    public function hasCustomDetails(): bool { return $this->has('custom_details'); }
    /** @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** @return string
     * @throws SdkError When external_event_id is omitted; use hasExternalEventId() or valueOrDefault().
     */
    public function getExternalEventId(): string { return $this->get('external_event_id'); }
    public function hasExternalEventId(): bool { return $this->has('external_event_id'); }
    /** @return string
     * @throws SdkError When external_status is omitted; use hasExternalStatus() or valueOrDefault().
     */
    public function getExternalStatus(): string { return $this->get('external_status'); }
    public function hasExternalStatus(): bool { return $this->has('external_status'); }
    /** @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** @return string
     * @throws SdkError When location_description is omitted; use hasLocationDescription() or valueOrDefault().
     */
    public function getLocationDescription(): string { return $this->get('location_description'); }
    public function hasLocationDescription(): bool { return $this->has('location_description'); }
    /** @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
}

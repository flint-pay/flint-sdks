<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_notification_behavior
 * @property-read string $created_at
 * @property-read string $current_status
 * @property-read array<array-key, string> $custom_details
 * @property-read string $event_type
 * @property-read string $external_event_id
 * @property-read string $external_status
 * @property-read string $external_system
 * @property-read string $fulfillment_event_id
 * @property-read string $fulfillment_id
 * @property-read string $location_description
 * @property-read string $message
 * @property-read string $occurred_at
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read string $package_id
 * @property-read string $previous_status
 * @property-read string $quantity_effect
 * @property-read string $reason
 * @property-read string $received_at
 * @property-read string $shipment_id
 * @property-read string $subject_type
 * Presence-aware response; omitted fields throw when accessed. */
final class FulfillmentEvent extends Model {
    /** @param array{'buyer_notification_behavior': string, 'created_at'?: string, 'current_status'?: string, 'custom_details'?: \stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'fulfillment_event_id': string, 'fulfillment_id': string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string, 'order'?: mixed, 'order_id': string, 'package_id'?: string, 'previous_status'?: string, 'quantity_effect'?: string, 'reason'?: string, 'received_at'?: string, 'shipment_id'?: string, 'subject_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentEvent')); }
    /** @return string
     * @throws SdkError When buyer_notification_behavior is omitted; use hasBuyerNotificationBehavior() or valueOrDefault().
     */
    public function getBuyerNotificationBehavior(): string { return $this->get('buyer_notification_behavior'); }
    public function hasBuyerNotificationBehavior(): bool { return $this->has('buyer_notification_behavior'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When current_status is omitted; use hasCurrentStatus() or valueOrDefault().
     */
    public function getCurrentStatus(): string { return $this->get('current_status'); }
    public function hasCurrentStatus(): bool { return $this->has('current_status'); }
    /** @return array<array-key, string>
     * @throws SdkError When custom_details is omitted; use hasCustomDetails() or valueOrDefault().
     */
    public function getCustomDetails(): array { return $this->get('custom_details'); }
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
     * @throws SdkError When fulfillment_event_id is omitted; use hasFulfillmentEventId() or valueOrDefault().
     */
    public function getFulfillmentEventId(): string { return $this->get('fulfillment_event_id'); }
    public function hasFulfillmentEventId(): bool { return $this->has('fulfillment_event_id'); }
    /** @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
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
    /** @return string
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** @return ExpandedOrderSummary|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** @return string
     * @throws SdkError When previous_status is omitted; use hasPreviousStatus() or valueOrDefault().
     */
    public function getPreviousStatus(): string { return $this->get('previous_status'); }
    public function hasPreviousStatus(): bool { return $this->has('previous_status'); }
    /** @return string
     * @throws SdkError When quantity_effect is omitted; use hasQuantityEffect() or valueOrDefault().
     */
    public function getQuantityEffect(): string { return $this->get('quantity_effect'); }
    public function hasQuantityEffect(): bool { return $this->has('quantity_effect'); }
    /** @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** @return string
     * @throws SdkError When received_at is omitted; use hasReceivedAt() or valueOrDefault().
     */
    public function getReceivedAt(): string { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** @return string
     * @throws SdkError When subject_type is omitted; use hasSubjectType() or valueOrDefault().
     */
    public function getSubjectType(): string { return $this->get('subject_type'); }
    public function hasSubjectType(): bool { return $this->has('subject_type'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_notification_behavior
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $current_status
 * @property-read array<array-key, string>|\stdClass $custom_details
 * @property-read string $event_type
 * @property-read string $external_event_id
 * @property-read string $external_status
 * @property-read string $external_system
 * @property-read string $fulfillment_event_id
 * @property-read string $fulfillment_id
 * @property-read string $location_description
 * @property-read string $message
 * @property-read string|\DateTimeInterface $occurred_at
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read string $package_id
 * @property-read string $previous_status
 * @property-read string $quantity_effect
 * @property-read string $reason
 * @property-read string $reason_message
 * @property-read string|\DateTimeInterface $received_at
 * @property-read string $shipment_id
 * @property-read string $subject_type
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentEventInput extends Model {
    /** @param array{'buyer_notification_behavior': string, 'created_at'?: string|\DateTimeInterface, 'current_status'?: string, 'custom_details'?: array<array-key, string>|\stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'fulfillment_event_id': string, 'fulfillment_id': string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string|\DateTimeInterface, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_id'?: string, 'previous_status'?: string, 'quantity_effect'?: string, 'reason'?: string, 'reason_message'?: string, 'received_at'?: string|\DateTimeInterface, 'shipment_id'?: string, 'subject_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentEventInput')); }
    /** Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * @return string
     * @throws SdkError When buyer_notification_behavior is omitted; use hasBuyerNotificationBehavior() or valueOrDefault().
     */
    public function getBuyerNotificationBehavior(): string { return $this->get('buyer_notification_behavior'); }
    public function hasBuyerNotificationBehavior(): bool { return $this->has('buyer_notification_behavior'); }
    /** Shape $ (Value): string. Timeline entry creation timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.  Value enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return string
     * @throws SdkError When current_status is omitted; use hasCurrentStatus() or valueOrDefault().
     */
    public function getCurrentStatus(): string { return $this->get('current_status'); }
    public function hasCurrentStatus(): bool { return $this->has('current_status'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When custom_details is omitted; use hasCustomDetails() or valueOrDefault().
     */
    public function getCustomDetails(): array|object { return $this->get('custom_details'); }
    public function hasCustomDetails(): bool { return $this->has('custom_details'); }
    /** Shape $ (Value): string.  Value enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom", "accepted", "preparing", "picked", "packed", "ready", "dispatched", "completed", "canceled", "failed", "no_show".
     * @return string
     * @throws SdkError When event_type is omitted; use hasEventType() or valueOrDefault().
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When external_event_id is omitted; use hasExternalEventId() or valueOrDefault().
     */
    public function getExternalEventId(): string { return $this->get('external_event_id'); }
    public function hasExternalEventId(): bool { return $this->has('external_event_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When external_status is omitted; use hasExternalStatus() or valueOrDefault().
     */
    public function getExternalStatus(): string { return $this->get('external_status'); }
    public function hasExternalStatus(): bool { return $this->has('external_status'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_event_id is omitted; use hasFulfillmentEventId() or valueOrDefault().
     */
    public function getFulfillmentEventId(): string { return $this->get('fulfillment_event_id'); }
    public function hasFulfillmentEventId(): bool { return $this->has('fulfillment_event_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When location_description is omitted; use hasLocationDescription() or valueOrDefault().
     */
    public function getLocationDescription(): string { return $this->get('location_description'); }
    public function hasLocationDescription(): bool { return $this->has('location_description'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When message is omitted; use hasMessage() or valueOrDefault().
     */
    public function getMessage(): string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Shape $ (Value): string. Provider event timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When occurred_at is omitted; use hasOccurredAt() or valueOrDefault().
     */
    public function getOccurredAt(): string|\DateTimeInterface { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Shape $ (Value): {@see ExpandedOrderSummaryInput} or null. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Shape $ (Value): string.  Value enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return string
     * @throws SdkError When previous_status is omitted; use hasPreviousStatus() or valueOrDefault().
     */
    public function getPreviousStatus(): string { return $this->get('previous_status'); }
    public function hasPreviousStatus(): bool { return $this->has('previous_status'); }
    /** Shape $ (Value): string.  Value enum: "preserve", "fulfill", "release".
     * @return string
     * @throws SdkError When quantity_effect is omitted; use hasQuantityEffect() or valueOrDefault().
     */
    public function getQuantityEffect(): string { return $this->get('quantity_effect'); }
    public function hasQuantityEffect(): bool { return $this->has('quantity_effect'); }
    /** Shape $ (Value): string.  Value enum: "address_issue", "customer_no_show", "customer_request", "fraud_review", "inventory_issue", "location_unavailable", "other", "payment_review", "provider_issue", "provider_no_show", "scheduling_error", "scheduling_issue".
     * @return string
     * @throws SdkError When reason is omitted; use hasReason() or valueOrDefault().
     */
    public function getReason(): string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** Shape $ (Value): string. The note supplied when this action was requested.
     * @return string
     * @throws SdkError When reason_message is omitted; use hasReasonMessage() or valueOrDefault().
     */
    public function getReasonMessage(): string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Shape $ (Value): string. Flint receive timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When received_at is omitted; use hasReceivedAt() or valueOrDefault().
     */
    public function getReceivedAt(): string|\DateTimeInterface { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Shape $ (Value): string.  Value enum: "fulfillment", "shipment", "package".
     * @return string
     * @throws SdkError When subject_type is omitted; use hasSubjectType() or valueOrDefault().
     */
    public function getSubjectType(): string { return $this->get('subject_type'); }
    public function hasSubjectType(): bool { return $this->has('subject_type'); }
}

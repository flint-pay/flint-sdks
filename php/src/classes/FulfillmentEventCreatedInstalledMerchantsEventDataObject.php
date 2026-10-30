<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_notification_behavior
 * @property-read ?string $created_at
 * @property-read ?string $current_status
 * @property-read ?array<array-key, string> $custom_details
 * @property-read string $event_type
 * @property-read ?string $external_event_id
 * @property-read ?string $external_status
 * @property-read ?string $external_system
 * @property-read string $fulfillment_event_id
 * @property-read string $fulfillment_id
 * @property-read ?string $location_description
 * @property-read ?string $message
 * @property-read ?string $occurred_at
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read ?string $package_id
 * @property-read ?string $previous_status
 * @property-read ?string $quantity_effect
 * @property-read ?string $reason
 * @property-read ?string $reason_message
 * @property-read ?string $received_at
 * @property-read ?string $shipment_id
 * @property-read string $subject_type
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentEventCreatedInstalledMerchantsEventDataObject extends Model {
    /** @param array{'buyer_notification_behavior': string, 'created_at'?: string, 'current_status'?: string, 'custom_details'?: \stdClass, 'event_type': string, 'external_event_id'?: string, 'external_status'?: string, 'external_system'?: string, 'fulfillment_event_id': string, 'fulfillment_id': string, 'location_description'?: string, 'message'?: string, 'occurred_at'?: string, 'order'?: mixed, 'order_id': string, 'package_id'?: string, 'previous_status'?: string, 'quantity_effect'?: string, 'reason'?: string, 'reason_message'?: string, 'received_at'?: string, 'shipment_id'?: string, 'subject_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentEventCreatedInstalledMerchantsEventDataObject')); }
    /** Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * @return string
     */
    public function getBuyerNotificationBehavior(): string { return $this->get('buyer_notification_behavior'); }
    public function hasBuyerNotificationBehavior(): bool { return $this->has('buyer_notification_behavior'); }
    /** Timeline entry creation timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Subject status after the recorded transition. Value enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return ?string
     */
    public function getCurrentStatus(): ?string { return $this->get('current_status'); }
    public function hasCurrentStatus(): bool { return $this->has('current_status'); }
    /**  * (Value): string.
     * @return ?array<array-key, string>
     */
    public function getCustomDetails(): ?array { return $this->get('custom_details'); }
    public function hasCustomDetails(): bool { return $this->has('custom_details'); }
    /** The delivery or fulfillment event recorded by this entry. Value enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom", "accepted", "preparing", "picked", "packed", "ready", "dispatched", "completed", "canceled", "failed", "no_show".
     * @return string
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Event identifier assigned by that integration.
     * @return ?string
     */
    public function getExternalEventId(): ?string { return $this->get('external_event_id'); }
    public function hasExternalEventId(): bool { return $this->has('external_event_id'); }
    /** Status supplied by that integration before mapping to Flint's public status.
     * @return ?string
     */
    public function getExternalStatus(): ?string { return $this->get('external_status'); }
    public function hasExternalStatus(): bool { return $this->has('external_status'); }
    /** Integration that supplied the event.
     * @return ?string
     */
    public function getExternalSystem(): ?string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** fulfillment_event_id
     * @return string
     */
    public function getFulfillmentEventId(): string { return $this->get('fulfillment_event_id'); }
    public function hasFulfillmentEventId(): bool { return $this->has('fulfillment_event_id'); }
    /** fulfillment_id
     * @return string
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** location_description
     * @return ?string
     */
    public function getLocationDescription(): ?string { return $this->get('location_description'); }
    public function hasLocationDescription(): bool { return $this->has('location_description'); }
    /** message
     * @return ?string
     */
    public function getMessage(): ?string { return $this->get('message'); }
    public function hasMessage(): bool { return $this->has('message'); }
    /** Provider event timestamp. Format: date-time.
     * @return ?string
     */
    public function getOccurredAt(): ?string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** order_id
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** package_id
     * @return ?string
     */
    public function getPackageId(): ?string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Subject status before the recorded transition. Value enum: "pending", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return ?string
     */
    public function getPreviousStatus(): ?string { return $this->get('previous_status'); }
    public function hasPreviousStatus(): bool { return $this->has('previous_status'); }
    /** How the transition changes fulfillment quantities. - `preserve`: Keeps the quantity assigned without marking it fulfilled. - `fulfill`: Moves the quantity from assigned to fulfilled. - `release`: Returns the assigned quantity for reassignment. Value enum: "preserve", "fulfill", "release".
     * @return ?string
     */
    public function getQuantityEffect(): ?string { return $this->get('quantity_effect'); }
    public function hasQuantityEffect(): bool { return $this->has('quantity_effect'); }
    /** Value enum: "address_issue", "customer_no_show", "customer_request", "fraud_review", "inventory_issue", "location_unavailable", "other", "payment_review", "provider_issue", "provider_no_show", "scheduling_error", "scheduling_issue".
     * @return ?string
     */
    public function getReason(): ?string { return $this->get('reason'); }
    public function hasReason(): bool { return $this->has('reason'); }
    /** The note supplied when this action was requested.
     * @return ?string
     */
    public function getReasonMessage(): ?string { return $this->get('reason_message'); }
    public function hasReasonMessage(): bool { return $this->has('reason_message'); }
    /** Flint receive timestamp. Format: date-time.
     * @return ?string
     */
    public function getReceivedAt(): ?string { return $this->get('received_at'); }
    public function hasReceivedAt(): bool { return $this->has('received_at'); }
    /** shipment_id
     * @return ?string
     */
    public function getShipmentId(): ?string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Which resource current_status and previous_status describe. - `fulfillment`: The status belongs to the fulfillment named by fulfillment_id. - `shipment`: The status belongs to the shipment named by shipment_id. - `package`: The status belongs to the package named by package_id. Value enum: "fulfillment", "shipment", "package".
     * @return string
     */
    public function getSubjectType(): string { return $this->get('subject_type'); }
    public function hasSubjectType(): bool { return $this->has('subject_type'); }
}

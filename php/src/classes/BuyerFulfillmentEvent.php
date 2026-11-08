<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read ?string $current_status
 * @property-read string $event_type
 * @property-read string $fulfillment_event_id
 * @property-read string $fulfillment_id
 * @property-read ?string $location_description
 * @property-read string $occurred_at
 * @property-read string $order_id
 * @property-read ?string $package_id
 * @property-read ?string $previous_status
 * @property-read ?string $shipment_id
 * Presence-aware response; omitted optional fields return null. */
final class BuyerFulfillmentEvent extends Model {
    /** @param array{'created_at': string, 'current_status'?: string, 'event_type': string, 'fulfillment_event_id': string, 'fulfillment_id': string, 'location_description'?: string, 'occurred_at': string, 'order_id': string, 'package_id'?: string, 'previous_status'?: string, 'shipment_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerFulfillmentEvent')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Status of the same subject immediately after this event, using the vocabulary selected by subject_type. This is the status recorded at occurred_at, which may differ from the resource's current status. Omitted when the event does not record a status change. Value enum: "pending", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return ?string
     */
    public function getCurrentStatus(): ?string { return $this->get('current_status'); }
    public function hasCurrentStatus(): bool { return $this->has('current_status'); }
    /** The delivery or fulfillment event recorded by this entry. - `carrier_scan`: A carrier reported a tracking observation. - `status_changed`: The fulfillment, shipment, or package changed status; current_status and previous_status identify the transition and subject_type identifies the resource. - `shipped`: The package was handed to the carrier. - `in_transit`: The package is moving through the carrier's network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The package reached its destination. - `delivery_attempted`: The carrier attempted delivery without completing it. - `tracking_updated`: The package's tracking information changed. - `exception`: A delivery problem interrupted the package's progress. - `returned`: The package was returned to its sender. - `custom`: The merchant or its integration recorded a custom observation. Value enum: "carrier_scan", "status_changed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "tracking_updated", "exception", "returned", "custom".
     * @return string
     */
    public function getEventType(): string { return $this->get('event_type'); }
    public function hasEventType(): bool { return $this->has('event_type'); }
    /** Unique identifier for this fulfillment event, prefixed `fev_`.
     * @return string
     */
    public function getFulfillmentEventId(): string { return $this->get('fulfillment_event_id'); }
    public function hasFulfillmentEventId(): bool { return $this->has('fulfillment_event_id'); }
    /** ID of the fulfillment the event belongs to.
     * @return string
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Where the event happened, such as `Louisville, KY`.
     * @return ?string
     */
    public function getLocationDescription(): ?string { return $this->get('location_description'); }
    public function hasLocationDescription(): bool { return $this->has('location_description'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getOccurredAt(): string { return $this->get('occurred_at'); }
    public function hasOccurredAt(): bool { return $this->has('occurred_at'); }
    /** ID of the order the fulfillment belongs to.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** ID of the package the event is attached to. Absent when it isn't attached to a package.
     * @return ?string
     */
    public function getPackageId(): ?string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Status of the subject immediately before this event. subject_type selects the fulfillment, shipment, or package status vocabulary; fulfillment_id, shipment_id, or package_id identifies that resource. Omitted when the event does not record a status change. Value enum: "pending", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "accepted", "preparing", "picked", "packed", "dispatched", "no_show", "created", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return ?string
     */
    public function getPreviousStatus(): ?string { return $this->get('previous_status'); }
    public function hasPreviousStatus(): bool { return $this->has('previous_status'); }
    /** ID of the shipment the event is attached to. Absent when it isn't attached to a shipment.
     * @return ?string
     */
    public function getShipmentId(): ?string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
}

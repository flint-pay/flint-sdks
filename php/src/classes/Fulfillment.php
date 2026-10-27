<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?FulfillmentHold $active_hold
 * @property-read ?list<FulfillmentChargeLink> $charges
 * @property-read ?string $completed_at
 * @property-read ?string $created_at
 * @property-read ?string $customer_id
 * @property-read ?string $device_id
 * @property-read ?DigitalFulfillmentDetails $digital_details
 * @property-read ?string $dispatched_at
 * @property-read ?string $external_reference_id
 * @property-read string $fulfillment_id
 * @property-read list<FulfillmentLineItem> $line_items
 * @property-read ?DeliveryFulfillmentDetails $local_delivery_details
 * @property-read ?string $location_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read ?string $order_number
 * @property-read ?FulfillmentOutcome $outcome
 * @property-read ?list<ExpandedPackageSummary> $packages
 * @property-read ?string $packed_at
 * @property-read ?string $picked_at
 * @property-read ?PickupFulfillmentDetails $pickup_details
 * @property-read ?FulfillmentRecipient $recipient
 * @property-read string|null $scheduled_start_at
 * @property-read ?ServiceFulfillmentDetails $service_details
 * @property-read ?ShipmentFulfillmentDetails $shipment_details
 * @property-read ?list<ExpandedShipmentSummary> $shipments
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read ?string $terminal_at
 * @property-read string $type
 * @property-read ?string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class Fulfillment extends Model {
    /** @param array{'active_hold'?: mixed, 'charges'?: list<mixed>, 'completed_at'?: string, 'created_at'?: string, 'customer_id'?: string, 'device_id'?: string, 'digital_details'?: mixed, 'dispatched_at'?: string, 'external_reference_id'?: string, 'fulfillment_id': string, 'line_items': list<mixed>, 'local_delivery_details'?: mixed, 'location_id'?: string, 'metadata'?: \stdClass, 'order'?: mixed, 'order_id': string, 'order_number'?: string, 'outcome'?: mixed, 'packages'?: list<mixed>, 'packed_at'?: string, 'picked_at'?: string, 'pickup_details'?: mixed, 'recipient'?: mixed, 'scheduled_start_at': string|null, 'service_details'?: mixed, 'shipment_details'?: mixed, 'shipments'?: list<mixed>, 'status': string, 'supported_actions': list<string>, 'terminal_at'?: string, 'type': string, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Fulfillment')); }
    /** Shape $ (Value): {@see FulfillmentHold}. Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active.
     * @return ?FulfillmentHold
     */
    public function getActiveHold(): ?FulfillmentHold { return $this->get('active_hold'); }
    public function hasActiveHold(): bool { return $this->has('active_hold'); }
    /** Shape $ (Value): Array of {@see FulfillmentChargeLink}. Order charges associated with this fulfillment. Shape $[] (Value): {@see FulfillmentChargeLink}. Links a fulfillment to an order charge by `order_charge_id`.
     * @return ?list<FulfillmentChargeLink>
     */
    public function getCharges(): ?array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** Shape $ (Value): string. Completion evidence timestamp. Format: date-time.
     * @return ?string
     */
    public function getCompletedAt(): ?string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Shape $ (Value): string. When the fulfillment was created, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Customer receiving this fulfillment, when one is set.
     * @return ?string
     */
    public function getCustomerId(): ?string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string. Device associated with the fulfillment, when one is recorded.
     * @return ?string
     */
    public function getDeviceId(): ?string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** Shape $ (Value): {@see DigitalFulfillmentDetails}. Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
     * @return ?DigitalFulfillmentDetails
     */
    public function getDigitalDetails(): ?DigitalFulfillmentDetails { return $this->get('digital_details'); }
    public function hasDigitalDetails(): bool { return $this->has('digital_details'); }
    /** Shape $ (Value): string. First time this fulfillment reached dispatched. Format: date-time.
     * @return ?string
     */
    public function getDispatchedAt(): ?string { return $this->get('dispatched_at'); }
    public function hasDispatchedAt(): bool { return $this->has('dispatched_at'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return ?string
     */
    public function getExternalReferenceId(): ?string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Stable identifier of the fulfillment.
     * @return string
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): Array of {@see FulfillmentLineItem}. Order lines and quantities allocated to this fulfillment. Shape $[] (Value): {@see FulfillmentLineItem}. An order line item and quantity included in a fulfillment, with the modifiers applied to it.
     * @return list<FulfillmentLineItem>
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): {@see DeliveryFulfillmentDetails}. Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer.
     * @return ?DeliveryFulfillmentDetails
     */
    public function getLocalDeliveryDetails(): ?DeliveryFulfillmentDetails { return $this->get('local_delivery_details'); }
    public function hasLocalDeliveryDetails(): bool { return $this->has('local_delivery_details'); }
    /** Shape $ (Value): string. Merchant location responsible for this fulfillment.
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): Map of string. Caller-owned key-value metadata associated with the fulfillment. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see ExpandedOrderSummary} or null. Order summary returned when the order relationship is expanded. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummary}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return ExpandedOrderSummary|null
     */
    public function getOrder(): ExpandedOrderSummary|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string. Order whose items this fulfillment delivers.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number.
     * @return ?string
     */
    public function getOrderNumber(): ?string { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** Shape $ (Value): {@see FulfillmentOutcome}. Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * @return ?FulfillmentOutcome
     */
    public function getOutcome(): ?FulfillmentOutcome { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** Shape $ (Value): Array of {@see ExpandedPackageSummary}. Packages associated with this fulfillment. Shape $[] (Value): {@see ExpandedPackageSummary}. A package's summary fields, including carrier, tracking, status, and supported actions, returned when the package is expanded.
     * @return ?list<ExpandedPackageSummary>
     */
    public function getPackages(): ?array { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** Shape $ (Value): string. First time this fulfillment reached packed. Format: date-time.
     * @return ?string
     */
    public function getPackedAt(): ?string { return $this->get('packed_at'); }
    public function hasPackedAt(): bool { return $this->has('packed_at'); }
    /** Shape $ (Value): string. First time this fulfillment reached picked. Format: date-time.
     * @return ?string
     */
    public function getPickedAt(): ?string { return $this->get('picked_at'); }
    public function hasPickedAt(): bool { return $this->has('picked_at'); }
    /** Shape $ (Value): {@see PickupFulfillmentDetails}. Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions.
     * @return ?PickupFulfillmentDetails
     */
    public function getPickupDetails(): ?PickupFulfillmentDetails { return $this->get('pickup_details'); }
    public function hasPickupDetails(): bool { return $this->has('pickup_details'); }
    /** Shape $ (Value): {@see FulfillmentRecipient}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions.
     * @return ?FulfillmentRecipient
     */
    public function getRecipient(): ?FulfillmentRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Shape $ (Value): string or null. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: date-time.
     * @return string|null
     */
    public function getScheduledStartAt(): string|null { return $this->get('scheduled_start_at'); }
    public function hasScheduledStartAt(): bool { return $this->has('scheduled_start_at'); }
    /** Shape $ (Value): {@see ServiceFulfillmentDetails}. Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes.
     * @return ?ServiceFulfillmentDetails
     */
    public function getServiceDetails(): ?ServiceFulfillmentDetails { return $this->get('service_details'); }
    public function hasServiceDetails(): bool { return $this->has('service_details'); }
    /** Shape $ (Value): {@see ShipmentFulfillmentDetails}. Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier.
     * @return ?ShipmentFulfillmentDetails
     */
    public function getShipmentDetails(): ?ShipmentFulfillmentDetails { return $this->get('shipment_details'); }
    public function hasShipmentDetails(): bool { return $this->has('shipment_details'); }
    /** Shape $ (Value): Array of {@see ExpandedShipmentSummary}. Shipments associated with this fulfillment. Shape $[] (Value): {@see ExpandedShipmentSummary}. A shipment's summary fields, including direction, status, and package count, returned when the shipment is expanded.
     * @return ?list<ExpandedShipmentSummary>
     */
    public function getShipments(): ?array { return $this->get('shipments'); }
    public function hasShipments(): bool { return $this->has('shipments'); }
    /** Shape $ (Value): string. Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: The pickup or appointment was missed. Read outcome for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. Read-only actions currently supported for this fulfillment. [] enum: "complete", "cancel", "hold", "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold". Shape $[] (Value): string.  Value enum: "complete", "cancel", "hold", "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): string. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: date-time.
     * @return ?string
     */
    public function getTerminalAt(): ?string { return $this->get('terminal_at'); }
    public function hasTerminalAt(): bool { return $this->has('terminal_at'); }
    /** Shape $ (Value): string. How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     * @return string
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. When the fulfillment was last updated, in RFC3339 format. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Monotonic fulfillment version for expected_version checks. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

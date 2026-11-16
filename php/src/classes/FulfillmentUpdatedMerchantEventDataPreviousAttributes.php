<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentHoldPreviousAttributes|null $active_hold
 * @property-read list<FulfillmentChargeLinkPreviousAttributes>|null $charges
 * @property-read string|null $completed_at
 * @property-read string|null $created_at
 * @property-read string|null $customer_id
 * @property-read string|null $delivery_choice_group_id
 * @property-read string|null $delivery_execution_leg_id
 * @property-read string|null $delivery_method_id
 * @property-read string|null $delivery_selection_id
 * @property-read string|null $device_id
 * @property-read DigitalFulfillmentDetailsPreviousAttributes|null $digital_details
 * @property-read string|null $dispatched_at
 * @property-read string|null $external_reference_id
 * @property-read string|null $fulfillment_id
 * @property-read list<FulfillmentLineItemPreviousAttributes>|null $line_items
 * @property-read DeliveryFulfillmentDetailsPreviousAttributes|null $local_delivery_details
 * @property-read string|null $location_id
 * @property-read array<array-key, string>|null $metadata
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_id
 * @property-read string|null $order_number
 * @property-read FulfillmentOutcomePreviousAttributes|null $outcome
 * @property-read list<ExpandedPackageSummaryPreviousAttributes>|null $packages
 * @property-read string|null $packed_at
 * @property-read string|null $picked_at
 * @property-read PickupFulfillmentDetailsPreviousAttributes|null $pickup_details
 * @property-read FulfillmentRecipientPreviousAttributes|null $recipient
 * @property-read string|null $scheduled_start_at
 * @property-read ServiceFulfillmentDetailsPreviousAttributes|null $service_details
 * @property-read ShipmentFulfillmentDetailsPreviousAttributes|null $shipment_details
 * @property-read list<ExpandedShipmentSummaryPreviousAttributes>|null $shipments
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $terminal_at
 * @property-read string|null $type
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class FulfillmentUpdatedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'active_hold'?: mixed, 'charges'?: mixed, 'completed_at'?: mixed, 'created_at'?: mixed, 'customer_id'?: mixed, 'delivery_choice_group_id'?: mixed, 'delivery_execution_leg_id'?: mixed, 'delivery_method_id'?: mixed, 'delivery_selection_id'?: mixed, 'device_id'?: mixed, 'digital_details'?: mixed, 'dispatched_at'?: mixed, 'external_reference_id'?: mixed, 'fulfillment_id'?: mixed, 'line_items'?: mixed, 'local_delivery_details'?: mixed, 'location_id'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'order_number'?: mixed, 'outcome'?: mixed, 'packages'?: mixed, 'packed_at'?: mixed, 'picked_at'?: mixed, 'pickup_details'?: mixed, 'recipient'?: mixed, 'scheduled_start_at'?: mixed, 'service_details'?: mixed, 'shipment_details'?: mixed, 'shipments'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'terminal_at'?: mixed, 'type'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentUpdatedMerchantEventDataPreviousAttributes')); }
    /** Current hold details. Present exactly when status is on_hold. anyOf[1] (Value): {@see FulfillmentHoldPreviousAttributes}. anyOf[2] (Value): null.
     * @return FulfillmentHoldPreviousAttributes|null
     */
    public function getActiveHold(): FulfillmentHoldPreviousAttributes|null { return $this->get('active_hold'); }
    public function hasActiveHold(): bool { return $this->has('active_hold'); }
    /** Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@see FulfillmentChargeLinkPreviousAttributes}. Order charges associated with this fulfillment. anyOf[1][] (Value): {@see FulfillmentChargeLinkPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<FulfillmentChargeLinkPreviousAttributes>|null
     */
    public function getCharges(): array|null { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. anyOf[1] (Value): string. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, and service_details.completed_at for service fulfillments. Omitted until a completion time is recorded. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCompletedAt(): string|null { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When the fulfillment was created, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string. Customer receiving this fulfillment, when one is set. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCustomerId(): string|null { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. anyOf[1] (Value): string. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryChoiceGroupId(): string|null { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. anyOf[1] (Value): string. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryExecutionLegId(): string|null { return $this->get('delivery_execution_leg_id'); }
    public function hasDeliveryExecutionLegId(): bool { return $this->has('delivery_execution_leg_id'); }
    /** Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. anyOf[1] (Value): string. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveryMethodId(): string|null { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. anyOf[1] (Value): string. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliverySelectionId(): string|null { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Device associated with the fulfillment, when one is recorded. anyOf[1] (Value): string. Device associated with the fulfillment, when one is recorded. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeviceId(): string|null { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@see DigitalFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return DigitalFulfillmentDetailsPreviousAttributes|null
     */
    public function getDigitalDetails(): DigitalFulfillmentDetailsPreviousAttributes|null { return $this->get('digital_details'); }
    public function hasDigitalDetails(): bool { return $this->has('digital_details'); }
    /** First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time this fulfillment reached dispatched. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDispatchedAt(): string|null { return $this->get('dispatched_at'); }
    public function hasDispatchedAt(): bool { return $this->has('dispatched_at'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of the fulfillment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentId(): string|null { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of {@see FulfillmentLineItemPreviousAttributes}. Order lines and quantities allocated to this fulfillment. anyOf[1][] (Value): {@see FulfillmentLineItemPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<FulfillmentLineItemPreviousAttributes>|null
     */
    public function getLineItems(): array|null { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Courier, delivery window, and handoff details for a local delivery fulfillment. anyOf[1] (Value): {@see DeliveryFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return DeliveryFulfillmentDetailsPreviousAttributes|null
     */
    public function getLocalDeliveryDetails(): DeliveryFulfillmentDetailsPreviousAttributes|null { return $this->get('local_delivery_details'); }
    public function hasLocalDeliveryDetails(): bool { return $this->has('local_delivery_details'); }
    /** Merchant location responsible for this fulfillment. anyOf[1] (Value): string. Merchant location responsible for this fulfillment. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLocationId(): string|null { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose items this fulfillment delivers. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. anyOf[1] (Value): string. Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderNumber(): string|null { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value): {@see FulfillmentOutcomePreviousAttributes}. anyOf[2] (Value): null.
     * @return FulfillmentOutcomePreviousAttributes|null
     */
    public function getOutcome(): FulfillmentOutcomePreviousAttributes|null { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** Packages associated with this fulfillment. anyOf[1] (Value): Array of {@see ExpandedPackageSummaryPreviousAttributes}. Packages associated with this fulfillment. anyOf[1][] (Value): {@see ExpandedPackageSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ExpandedPackageSummaryPreviousAttributes>|null
     */
    public function getPackages(): array|null { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** First time this fulfillment reached packed. anyOf[1] (Value): string. First time this fulfillment reached packed. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPackedAt(): string|null { return $this->get('packed_at'); }
    public function hasPackedAt(): bool { return $this->has('packed_at'); }
    /** First time this fulfillment reached picked. anyOf[1] (Value): string. First time this fulfillment reached picked. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPickedAt(): string|null { return $this->get('picked_at'); }
    public function hasPickedAt(): bool { return $this->has('picked_at'); }
    /** Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1] (Value): {@see PickupFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return PickupFulfillmentDetailsPreviousAttributes|null
     */
    public function getPickupDetails(): PickupFulfillmentDetailsPreviousAttributes|null { return $this->get('pickup_details'); }
    public function hasPickupDetails(): bool { return $this->has('pickup_details'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): {@see FulfillmentRecipientPreviousAttributes}. anyOf[2] (Value): null.
     * @return FulfillmentRecipientPreviousAttributes|null
     */
    public function getRecipient(): FulfillmentRecipientPreviousAttributes|null { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. anyOf[1] (Value): string. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getScheduledStartAt(): string|null { return $this->get('scheduled_start_at'); }
    public function hasScheduledStartAt(): bool { return $this->has('scheduled_start_at'); }
    /** Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@see ServiceFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return ServiceFulfillmentDetailsPreviousAttributes|null
     */
    public function getServiceDetails(): ServiceFulfillmentDetailsPreviousAttributes|null { return $this->get('service_details'); }
    public function hasServiceDetails(): bool { return $this->has('service_details'); }
    /** Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. anyOf[1] (Value): {@see ShipmentFulfillmentDetailsPreviousAttributes}. anyOf[2] (Value): null.
     * @return ShipmentFulfillmentDetailsPreviousAttributes|null
     */
    public function getShipmentDetails(): ShipmentFulfillmentDetailsPreviousAttributes|null { return $this->get('shipment_details'); }
    public function hasShipmentDetails(): bool { return $this->has('shipment_details'); }
    /** Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@see ExpandedShipmentSummaryPreviousAttributes}. Shipments associated with this fulfillment. anyOf[1][] (Value): {@see ExpandedShipmentSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ExpandedShipmentSummaryPreviousAttributes>|null
     */
    public function getShipments(): array|null { return $this->get('shipments'); }
    public function hasShipments(): bool { return $this->has('shipments'); }
    /** Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[1] (Value): string. Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start". anyOf[1] (Value): Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string.  Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. anyOf[1] (Value): string. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTerminalAt(): string|null { return $this->get('terminal_at'); }
    public function hasTerminalAt(): bool { return $this->has('terminal_at'); }
    /** How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover". anyOf[1] (Value): string. How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getType(): string|null { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string. When the fulfillment was last updated, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Monotonic fulfillment version for expected_version checks. anyOf[1] (Value): integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

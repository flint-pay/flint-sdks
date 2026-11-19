<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentHoldPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $active_hold
 * @property-read list<FulfillmentChargeLinkPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $charges
 * @property-read string|\DateTimeInterface|null $completed_at
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $customer_id
 * @property-read string|null $delivery_choice_group_id
 * @property-read string|null $delivery_execution_leg_id
 * @property-read string|null $delivery_method_id
 * @property-read string|null $delivery_selection_id
 * @property-read string|null $device_id
 * @property-read DigitalFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $digital_details
 * @property-read string|\DateTimeInterface|null $dispatched_at
 * @property-read string|null $external_reference_id
 * @property-read string|null $fulfillment_id
 * @property-read string|null $idempotency_key
 * @property-read list<FulfillmentLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $line_items
 * @property-read DeliveryFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $local_delivery_details
 * @property-read string|null $location_id
 * @property-read MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $metadata
 * @property-read ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $order
 * @property-read string|null $order_id
 * @property-read string|null $order_number
 * @property-read FulfillmentOutcomePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $outcome
 * @property-read list<ExpandedPackageSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $packages
 * @property-read string|\DateTimeInterface|null $packed_at
 * @property-read string|\DateTimeInterface|null $picked_at
 * @property-read PickupFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $pickup_details
 * @property-read FulfillmentRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $recipient
 * @property-read string|\DateTimeInterface|null $scheduled_start_at
 * @property-read ServiceFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $service_details
 * @property-read ShipmentFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $shipment_details
 * @property-read list<ExpandedShipmentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $shipments
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|\DateTimeInterface|null $terminal_at
 * @property-read string|null $type
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class WebhookSnapshotFulfillmentPreviousAttributesInput extends Model {
    /** @param array{'active_hold'?: FulfillmentHoldPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'charges'?: list<FulfillmentChargeLinkPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'completed_at'?: string|\DateTimeInterface|null, 'created_at'?: string|\DateTimeInterface|null, 'customer_id'?: string|null, 'delivery_choice_group_id'?: string|null, 'delivery_execution_leg_id'?: string|null, 'delivery_method_id'?: string|null, 'delivery_selection_id'?: string|null, 'device_id'?: string|null, 'digital_details'?: DigitalFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'dispatched_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string|null, 'fulfillment_id'?: string|null, 'idempotency_key'?: string|null, 'line_items'?: list<FulfillmentLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'local_delivery_details'?: DeliveryFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'location_id'?: string|null, 'metadata'?: MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'order'?: ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'order_id'?: string|null, 'order_number'?: string|null, 'outcome'?: FulfillmentOutcomePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'packages'?: list<ExpandedPackageSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'packed_at'?: string|\DateTimeInterface|null, 'picked_at'?: string|\DateTimeInterface|null, 'pickup_details'?: PickupFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'recipient'?: FulfillmentRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'scheduled_start_at'?: string|\DateTimeInterface|null, 'service_details'?: ServiceFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'shipment_details'?: ShipmentFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'shipments'?: list<ExpandedShipmentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, 'terminal_at'?: string|\DateTimeInterface|null, 'type'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookSnapshotFulfillmentPreviousAttributesInput')); }
    /** Current hold details. Present exactly when status is on_hold. anyOf[1] (Value): {@see FulfillmentHoldPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return FulfillmentHoldPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When active_hold is omitted; use hasActiveHold() or valueOrDefault().
     */
    public function getActiveHold(): mixed { return $this->get('active_hold'); }
    public function hasActiveHold(): bool { return $this->has('active_hold'); }
    /** Order charges associated with this fulfillment. anyOf[1] (Value): Array of {@see FulfillmentChargeLinkPreviousAttributesInput}. Order charges associated with this fulfillment. anyOf[1][] (Value): {@see FulfillmentChargeLinkPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<FulfillmentChargeLinkPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): mixed { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at for service fulfillments, and the order's paid_at for handovers completed at payment. Omitted until a completion time is recorded. anyOf[1] (Value): string. When the fulfillment was completed. Mirrors the completion time for its type: delivered_at for shipment, local delivery, and digital fulfillments, picked_up_at for pickup, service_details.completed_at for service fulfillments, and the order's paid_at for handovers completed at payment. Omitted until a completion time is recorded. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): mixed { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** When the fulfillment was created, in RFC3339 format. anyOf[1] (Value): string. When the fulfillment was created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Customer receiving this fulfillment, when one is set. anyOf[1] (Value): string. Customer receiving this fulfillment, when one is set. Example: "cus_01KEZF7C006X9JK6NZNA2SM9XD". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): mixed { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. anyOf[1] (Value): string. Delivery choice group that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: "dcgrp_01KEZF7C00KYKJQ897HWM86AT8". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_choice_group_id is omitted; use hasDeliveryChoiceGroupId() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupId(): mixed { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. anyOf[1] (Value): string. Execution leg of the selected delivery option that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: "dleg_01KEZF7C00VB59BKTRC8W4KR4M". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_execution_leg_id is omitted; use hasDeliveryExecutionLegId() or valueOrDefault().
     */
    public function getDeliveryExecutionLegId(): mixed { return $this->get('delivery_execution_leg_id'); }
    public function hasDeliveryExecutionLegId(): bool { return $this->has('delivery_execution_leg_id'); }
    /** Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. anyOf[1] (Value): string. Delivery method chosen for this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Also `null` when it was created before this field was added. Always present with merchant credentials. Example: "dmet_01KEZF7C00YSG3X2D1TZJ36TM0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): mixed { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. anyOf[1] (Value): string. Delivery selection that created this fulfillment. `null` when the merchant created the fulfillment or checkout created it without a delivery quote. Always present with merchant credentials. Example: "dsel_01KEZF7C00QC35XBXVXQSCEB2D". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When delivery_selection_id is omitted; use hasDeliverySelectionId() or valueOrDefault().
     */
    public function getDeliverySelectionId(): mixed { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Device associated with the fulfillment, when one is recorded. anyOf[1] (Value): string. Device associated with the fulfillment, when one is recorded. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): mixed { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** Delivery URL and completion time for a digital fulfillment. anyOf[1] (Value): {@see DigitalFulfillmentDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DigitalFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When digital_details is omitted; use hasDigitalDetails() or valueOrDefault().
     */
    public function getDigitalDetails(): mixed { return $this->get('digital_details'); }
    public function hasDigitalDetails(): bool { return $this->has('digital_details'); }
    /** First time this fulfillment reached dispatched. anyOf[1] (Value): string. First time this fulfillment reached dispatched. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When dispatched_at is omitted; use hasDispatchedAt() or valueOrDefault().
     */
    public function getDispatchedAt(): mixed { return $this->get('dispatched_at'); }
    public function hasDispatchedAt(): bool { return $this->has('dispatched_at'); }
    /** Caller-owned identifier for this resource in an external system. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255. Example: "warehouse-1842". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): mixed { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Stable identifier of the fulfillment. anyOf[1] (Value): string. Stable identifier of the fulfillment. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): mixed { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[1] (Value): string. The Idempotency-Key of the request that created this resource. `null` when that request sent no key, Flint created the resource, the reader isn't the caller that created it (another app install, a buyer, or the merchant reading an app's or buyer's record), or the caller that created an older record is unknown. Filter its list with `idempotency_key` to find it. Recorded payloads, including replayed responses and webhook events, can return `null`. To find a key that a replay returns as `null`, read the resource. Buyer sessions on routes shared with merchants get `null`. `/v1/me` responses do not include this field. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When idempotency_key is omitted; use hasIdempotencyKey() or valueOrDefault().
     */
    public function getIdempotencyKey(): mixed { return $this->get('idempotency_key'); }
    public function hasIdempotencyKey(): bool { return $this->has('idempotency_key'); }
    /** Order lines and quantities allocated to this fulfillment. anyOf[1] (Value): Array of {@see FulfillmentLineItemPreviousAttributesInput}. Order lines and quantities allocated to this fulfillment. anyOf[1][] (Value): {@see FulfillmentLineItemPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<FulfillmentLineItemPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): mixed { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Courier, delivery window, and handoff details for a local delivery fulfillment. anyOf[1] (Value): {@see DeliveryFulfillmentDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return DeliveryFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When local_delivery_details is omitted; use hasLocalDeliveryDetails() or valueOrDefault().
     */
    public function getLocalDeliveryDetails(): mixed { return $this->get('local_delivery_details'); }
    public function hasLocalDeliveryDetails(): bool { return $this->has('local_delivery_details'); }
    /** Merchant location responsible for this fulfillment. anyOf[1] (Value): string. Merchant location responsible for this fulfillment. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): mixed { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Caller-owned key-value metadata associated with the fulfillment. anyOf[1] (Value): {@see MetadataMapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MetadataMapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Order whose items this fulfillment delivers. anyOf[1] (Value): string. Order whose items this fulfillment delivers. Example: "ord_01KEZF7C0054GQKJ142A8X367A". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): mixed { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. anyOf[1] (Value): string. Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When order_number is omitted; use hasOrderNumber() or valueOrDefault().
     */
    public function getOrderNumber(): mixed { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** Terminal outcome details. Present exactly when status is no_show. anyOf[1] (Value): {@see FulfillmentOutcomePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return FulfillmentOutcomePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): mixed { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** Packages associated with this fulfillment. anyOf[1] (Value): Array of {@see ExpandedPackageSummaryPreviousAttributesInput}. Packages associated with this fulfillment. anyOf[1][] (Value): {@see ExpandedPackageSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ExpandedPackageSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When packages is omitted; use hasPackages() or valueOrDefault().
     */
    public function getPackages(): mixed { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** First time this fulfillment reached packed. anyOf[1] (Value): string. First time this fulfillment reached packed. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When packed_at is omitted; use hasPackedAt() or valueOrDefault().
     */
    public function getPackedAt(): mixed { return $this->get('packed_at'); }
    public function hasPackedAt(): bool { return $this->has('packed_at'); }
    /** First time this fulfillment reached picked. anyOf[1] (Value): string. First time this fulfillment reached picked. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When picked_at is omitted; use hasPickedAt() or valueOrDefault().
     */
    public function getPickedAt(): mixed { return $this->get('picked_at'); }
    public function hasPickedAt(): bool { return $this->has('picked_at'); }
    /** Pickup window, pickup mode, and handoff times for a pickup fulfillment. anyOf[1] (Value): {@see PickupFulfillmentDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PickupFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When pickup_details is omitted; use hasPickupDetails() or valueOrDefault().
     */
    public function getPickupDetails(): mixed { return $this->get('pickup_details'); }
    public function hasPickupDetails(): bool { return $this->has('pickup_details'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): {@see FulfillmentRecipientPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return FulfillmentRecipientPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. anyOf[1] (Value): string. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Sorting by scheduled_start_at puts nulls first ascending and last descending. Sorting by due_at compares this same value with nulls last ascending and first descending. Ties use fulfillment_id in the same direction. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_start_at is omitted; use hasScheduledStartAt() or valueOrDefault().
     */
    public function getScheduledStartAt(): mixed { return $this->get('scheduled_start_at'); }
    public function hasScheduledStartAt(): bool { return $this->has('scheduled_start_at'); }
    /** Schedule and completion details for a service fulfillment. anyOf[1] (Value): {@see ServiceFulfillmentDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ServiceFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When service_details is omitted; use hasServiceDetails() or valueOrDefault().
     */
    public function getServiceDetails(): mixed { return $this->get('service_details'); }
    public function hasServiceDetails(): bool { return $this->has('service_details'); }
    /** Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. anyOf[1] (Value): {@see ShipmentFulfillmentDetailsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return ShipmentFulfillmentDetailsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When shipment_details is omitted; use hasShipmentDetails() or valueOrDefault().
     */
    public function getShipmentDetails(): mixed { return $this->get('shipment_details'); }
    public function hasShipmentDetails(): bool { return $this->has('shipment_details'); }
    /** Shipments associated with this fulfillment. anyOf[1] (Value): Array of {@see ExpandedShipmentSummaryPreviousAttributesInput}. Shipments associated with this fulfillment. anyOf[1][] (Value): {@see ExpandedShipmentSummaryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<ExpandedShipmentSummaryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When shipments is omitted; use hasShipments() or valueOrDefault().
     */
    public function getShipments(): mixed { return $this->get('shipments'); }
    public function hasShipments(): bool { return $this->has('shipments'); }
    /** Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[1] (Value): string. Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: A service appointment was missed. Read outcome for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start". anyOf[1] (Value): Array of string. Read-only lifecycle actions accepted now, based on the fulfillment, its order payment status, holds, and shipment progress. Empty when none are available. Values name the verb route with hyphens replaced by underscores. Always present with merchant credentials. [] enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start". anyOf[1][] (Value): string.  Value enum: "accept", "cancel", "complete", "dispatch", "fail", "hold", "mark_no_show", "mark_packed", "mark_picked", "mark_preparing", "mark_ready", "release_hold", "schedule", "start". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. anyOf[1] (Value): string. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When terminal_at is omitted; use hasTerminalAt() or valueOrDefault().
     */
    public function getTerminalAt(): mixed { return $this->get('terminal_at'); }
    public function hasTerminalAt(): bool { return $this->has('terminal_at'); }
    /** How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover". anyOf[1] (Value): string. How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service", "handover". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): mixed { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** When the fulfillment was last updated, in RFC3339 format. anyOf[1] (Value): string. When the fulfillment was last updated, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Monotonic fulfillment version for expected_version checks. anyOf[1] (Value): integer. Monotonic fulfillment version for expected_version checks. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

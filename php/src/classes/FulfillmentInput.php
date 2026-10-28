<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentHoldInput|array<array-key, mixed>|\stdClass $active_hold
 * @property-read list<FulfillmentChargeLinkInput|array<array-key, mixed>|\stdClass> $charges
 * @property-read string|\DateTimeInterface $completed_at
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $customer_id
 * @property-read string|null $delivery_choice_group_id
 * @property-read string|null $delivery_execution_leg_id
 * @property-read string|null $delivery_method_id
 * @property-read string|null $delivery_selection_id
 * @property-read string $device_id
 * @property-read DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass $digital_details
 * @property-read string|\DateTimeInterface $dispatched_at
 * @property-read string $external_reference_id
 * @property-read string $fulfillment_id
 * @property-read list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass> $line_items
 * @property-read DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass $local_delivery_details
 * @property-read string $location_id
 * @property-read MetadataMapInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read string $order_number
 * @property-read FulfillmentOutcomeInput|array<array-key, mixed>|\stdClass $outcome
 * @property-read list<ExpandedPackageSummaryInput|array<array-key, mixed>|\stdClass> $packages
 * @property-read string|\DateTimeInterface $packed_at
 * @property-read string|\DateTimeInterface $picked_at
 * @property-read PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass $pickup_details
 * @property-read FulfillmentRecipientInput|array<array-key, mixed>|\stdClass $recipient
 * @property-read string|\DateTimeInterface|null $scheduled_start_at
 * @property-read ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass $service_details
 * @property-read ShipmentFulfillmentDetailsInput|array<array-key, mixed>|\stdClass $shipment_details
 * @property-read list<ExpandedShipmentSummaryInput|array<array-key, mixed>|\stdClass> $shipments
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $terminal_at
 * @property-read string $type
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentInput extends Model {
    /** @param array{'active_hold'?: FulfillmentHoldInput|array<array-key, mixed>|\stdClass, 'charges'?: list<FulfillmentChargeLinkInput|array<array-key, mixed>|\stdClass>, 'completed_at'?: string|\DateTimeInterface, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'delivery_choice_group_id': string|null, 'delivery_execution_leg_id': string|null, 'delivery_method_id': string|null, 'delivery_selection_id': string|null, 'device_id'?: string, 'digital_details'?: DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'dispatched_at'?: string|\DateTimeInterface, 'external_reference_id'?: string, 'fulfillment_id': string, 'line_items': list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass>, 'local_delivery_details'?: DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'location_id'?: string, 'metadata'?: MetadataMapInput|array<array-key, mixed>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'order_number'?: string, 'outcome'?: FulfillmentOutcomeInput|array<array-key, mixed>|\stdClass, 'packages'?: list<ExpandedPackageSummaryInput|array<array-key, mixed>|\stdClass>, 'packed_at'?: string|\DateTimeInterface, 'picked_at'?: string|\DateTimeInterface, 'pickup_details'?: PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'recipient'?: FulfillmentRecipientInput|array<array-key, mixed>|\stdClass, 'scheduled_start_at': string|\DateTimeInterface|null, 'service_details'?: ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'shipment_details'?: ShipmentFulfillmentDetailsInput|array<array-key, mixed>|\stdClass, 'shipments'?: list<ExpandedShipmentSummaryInput|array<array-key, mixed>|\stdClass>, 'status': string, 'supported_actions': list<string>, 'terminal_at'?: string|\DateTimeInterface, 'type': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentInput')); }
    /** Shape $ (Value): {@see FulfillmentHoldInput}. Current hold details. Present exactly when status is on_hold. A hold on a fulfillment, with its reason, who placed it, and when it became active.
     * @return FulfillmentHoldInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When active_hold is omitted; use hasActiveHold() or valueOrDefault().
     */
    public function getActiveHold(): mixed { return $this->get('active_hold'); }
    public function hasActiveHold(): bool { return $this->has('active_hold'); }
    /** Shape $ (Value): Array of {@see FulfillmentChargeLinkInput}. Order charges associated with this fulfillment. Shape $[] (Value): {@see FulfillmentChargeLinkInput}. Links a fulfillment to an order charge by `order_charge_id`.
     * @return list<FulfillmentChargeLinkInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** Shape $ (Value): string. Completion evidence timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string|\DateTimeInterface { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** Shape $ (Value): string. When the fulfillment was created, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Customer receiving this fulfillment, when one is set.
     * @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** Shape $ (Value): string or null. Delivery choice group that created this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote.
     * @return string|null
     * @throws SdkError When delivery_choice_group_id is omitted; use hasDeliveryChoiceGroupId() or valueOrDefault().
     */
    public function getDeliveryChoiceGroupId(): string|null { return $this->get('delivery_choice_group_id'); }
    public function hasDeliveryChoiceGroupId(): bool { return $this->has('delivery_choice_group_id'); }
    /** Shape $ (Value): string or null. Execution leg of the selected delivery option that created this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote.
     * @return string|null
     * @throws SdkError When delivery_execution_leg_id is omitted; use hasDeliveryExecutionLegId() or valueOrDefault().
     */
    public function getDeliveryExecutionLegId(): string|null { return $this->get('delivery_execution_leg_id'); }
    public function hasDeliveryExecutionLegId(): bool { return $this->has('delivery_execution_leg_id'); }
    /** Shape $ (Value): string or null. Delivery method chosen for this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote. Also null for fulfillments created before this field was added.
     * @return string|null
     * @throws SdkError When delivery_method_id is omitted; use hasDeliveryMethodId() or valueOrDefault().
     */
    public function getDeliveryMethodId(): string|null { return $this->get('delivery_method_id'); }
    public function hasDeliveryMethodId(): bool { return $this->has('delivery_method_id'); }
    /** Shape $ (Value): string or null. Delivery selection that created this fulfillment. Null for fulfillments created by the merchant or through checkout without a delivery quote.
     * @return string|null
     * @throws SdkError When delivery_selection_id is omitted; use hasDeliverySelectionId() or valueOrDefault().
     */
    public function getDeliverySelectionId(): string|null { return $this->get('delivery_selection_id'); }
    public function hasDeliverySelectionId(): bool { return $this->has('delivery_selection_id'); }
    /** Shape $ (Value): string. Device associated with the fulfillment, when one is recorded.
     * @return string
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** Shape $ (Value): {@see DigitalFulfillmentDetailsInput}. Delivery URL and completion time for a digital fulfillment. Details of a digital fulfillment: when it was delivered (`delivered_at`) and its `delivery_url`.
     * @return DigitalFulfillmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When digital_details is omitted; use hasDigitalDetails() or valueOrDefault().
     */
    public function getDigitalDetails(): mixed { return $this->get('digital_details'); }
    public function hasDigitalDetails(): bool { return $this->has('digital_details'); }
    /** Shape $ (Value): string. First time this fulfillment reached dispatched. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When dispatched_at is omitted; use hasDispatchedAt() or valueOrDefault().
     */
    public function getDispatchedAt(): string|\DateTimeInterface { return $this->get('dispatched_at'); }
    public function hasDispatchedAt(): bool { return $this->has('dispatched_at'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Stable identifier of the fulfillment.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): Array of {@see FulfillmentLineItemInput}. Order lines and quantities allocated to this fulfillment. Shape $[] (Value): {@see FulfillmentLineItemInput}. An order line item and quantity included in a fulfillment, with the modifiers applied to it.
     * @return list<FulfillmentLineItemInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** Shape $ (Value): {@see DeliveryFulfillmentDetailsInput}. Courier, delivery window, and handoff details for a local delivery fulfillment. Details of a local delivery fulfillment: courier, timing window, instructions, and tracking. Some fields are omitted for credentials that don't act for the verified customer.
     * @return DeliveryFulfillmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When local_delivery_details is omitted; use hasLocalDeliveryDetails() or valueOrDefault().
     */
    public function getLocalDeliveryDetails(): mixed { return $this->get('local_delivery_details'); }
    public function hasLocalDeliveryDetails(): bool { return $this->has('local_delivery_details'); }
    /** Shape $ (Value): string. Merchant location responsible for this fulfillment.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): {@see MetadataMapInput}. Caller-owned key-value metadata associated with the fulfillment. Caller-owned key-value data stored on a resource. Keys starting with flint_ are reserved for Flint and are not returned. Writes follow the limits on MetadataInput and MetadataPatchInput; maps written before those limits may not satisfy them.
     * @return MetadataMapInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see ExpandedOrderSummaryInput} or null. Order summary returned when the order relationship is expanded. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'governing_delivery_selection_id': string|null, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string. Order whose items this fulfillment delivers.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. Human-readable number of the order this fulfillment belongs to. Omitted when the order has no number.
     * @return string
     * @throws SdkError When order_number is omitted; use hasOrderNumber() or valueOrDefault().
     */
    public function getOrderNumber(): string { return $this->get('order_number'); }
    public function hasOrderNumber(): bool { return $this->has('order_number'); }
    /** Shape $ (Value): {@see FulfillmentOutcomeInput}. Terminal outcome details. Present exactly when status is no_show. The terminal outcome recorded for a fulfillment, such as a no-show, with its reason, notes, and when it occurred.
     * @return FulfillmentOutcomeInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): mixed { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** Shape $ (Value): Array of {@see ExpandedPackageSummaryInput}. Packages associated with this fulfillment. Shape $[] (Value): {@see ExpandedPackageSummaryInput}. A package's summary fields, including carrier, tracking, status, and supported actions, returned when the package is expanded.
     * @return list<ExpandedPackageSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When packages is omitted; use hasPackages() or valueOrDefault().
     */
    public function getPackages(): array { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** Shape $ (Value): string. First time this fulfillment reached packed. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When packed_at is omitted; use hasPackedAt() or valueOrDefault().
     */
    public function getPackedAt(): string|\DateTimeInterface { return $this->get('packed_at'); }
    public function hasPackedAt(): bool { return $this->has('packed_at'); }
    /** Shape $ (Value): string. First time this fulfillment reached picked. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When picked_at is omitted; use hasPickedAt() or valueOrDefault().
     */
    public function getPickedAt(): string|\DateTimeInterface { return $this->get('picked_at'); }
    public function hasPickedAt(): bool { return $this->has('picked_at'); }
    /** Shape $ (Value): {@see PickupFulfillmentDetailsInput}. Pickup window, pickup mode, and handoff times for a pickup fulfillment. Pickup details. For a pickup that checkout creates, location_name, address, and instructions name the store the buyer chose and the delivery method's pickup instructions. The note the buyer left for the store is in recipient.instructions.
     * @return PickupFulfillmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When pickup_details is omitted; use hasPickupDetails() or valueOrDefault().
     */
    public function getPickupDetails(): mixed { return $this->get('pickup_details'); }
    public function hasPickupDetails(): bool { return $this->has('pickup_details'); }
    /** Shape $ (Value): {@see FulfillmentRecipientInput}. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. The recipient of a fulfillment, with name, email, phone, address, and handling instructions.
     * @return FulfillmentRecipientInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): mixed { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** Shape $ (Value): string or null. Derived start of the service schedule or pickup, local delivery, or shipment window. Null when no schedule is booked, including digital fulfillments. Details remain the authoritative schedule inputs. Nulls sort first ascending and last descending, then by fulfillment_id in the same direction. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When scheduled_start_at is omitted; use hasScheduledStartAt() or valueOrDefault().
     */
    public function getScheduledStartAt(): string|\DateTimeInterface|null { return $this->get('scheduled_start_at'); }
    public function hasScheduledStartAt(): bool { return $this->has('scheduled_start_at'); }
    /** Shape $ (Value): {@see ServiceFulfillmentDetailsInput}. Schedule and completion details for a service fulfillment. Details of a service fulfillment: the scheduled start and end, timezone, completion time, and notes.
     * @return ServiceFulfillmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When service_details is omitted; use hasServiceDetails() or valueOrDefault().
     */
    public function getServiceDetails(): mixed { return $this->get('service_details'); }
    public function hasServiceDetails(): bool { return $this->has('service_details'); }
    /** Shape $ (Value): {@see ShipmentFulfillmentDetailsInput}. Shipping schedule and ship time for a shipment fulfillment. Present only on shipment fulfillments with at least one value. Details of a shipment fulfillment: the shipping window, timezone, and when the shipment was handed to the carrier.
     * @return ShipmentFulfillmentDetailsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When shipment_details is omitted; use hasShipmentDetails() or valueOrDefault().
     */
    public function getShipmentDetails(): mixed { return $this->get('shipment_details'); }
    public function hasShipmentDetails(): bool { return $this->has('shipment_details'); }
    /** Shape $ (Value): Array of {@see ExpandedShipmentSummaryInput}. Shipments associated with this fulfillment. Shape $[] (Value): {@see ExpandedShipmentSummaryInput}. A shipment's summary fields, including direction, status, and package count, returned when the shipment is expanded.
     * @return list<ExpandedShipmentSummaryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When shipments is omitted; use hasShipments() or valueOrDefault().
     */
    public function getShipments(): array { return $this->get('shipments'); }
    public function hasShipments(): bool { return $this->has('shipments'); }
    /** Shape $ (Value): string. Current fulfillment lifecycle status. Read supported_actions for available transitions. - `pending`: Work has not started and has not been accepted. Approval may be required before work can begin. - `accepted`: The provider accepted the fulfillment; work has not started. - `on_hold`: Work is paused. Release the hold to restore active_hold.previous_status, or use a supported forward action. - `in_progress`: Work has started and is not yet ready or complete. - `ready`: The fulfillment is ready for pickup, handoff, or completion. - `completed`: All fulfillment work completed successfully. - `canceled`: The fulfillment was intentionally canceled and will not continue. - `failed`: The fulfillment could not be completed. Resolve the recorded reason before creating replacement work. - `scheduled`: The fulfillment is scheduled for its recorded service window. - `preparing`: Warehouse or provider preparation is underway. - `picked`: The assigned items have been picked. - `packed`: The assigned items have been packed. - `dispatched`: The fulfillment left its origin for delivery or handoff. - `no_show`: The pickup or appointment was missed. Read outcome for the recorded reason. Value enum: "pending", "accepted", "on_hold", "in_progress", "ready", "completed", "canceled", "failed", "scheduled", "preparing", "picked", "packed", "dispatched", "no_show".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): Array of string. Read-only actions currently supported for this fulfillment. [] enum: "complete", "cancel", "hold", "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold". Shape $[] (Value): string.  Value enum: "complete", "cancel", "hold", "start", "mark_ready", "fail", "schedule", "accept", "mark_preparing", "mark_picked", "mark_packed", "dispatch", "mark_no_show", "release_hold".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): string. When the fulfillment entered a terminal state: completed, canceled, failed, or no_show. This records the state transition; completed_at records completion evidence supplied for the fulfillment. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When terminal_at is omitted; use hasTerminalAt() or valueOrDefault().
     */
    public function getTerminalAt(): string|\DateTimeInterface { return $this->get('terminal_at'); }
    public function hasTerminalAt(): bool { return $this->has('terminal_at'); }
    /** Shape $ (Value): string. How the items are delivered: shipment, pickup, local delivery, digital delivery, or service. Value enum: "shipment", "pickup", "local_delivery", "digital", "service".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** Shape $ (Value): string. When the fulfillment was last updated, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Monotonic fulfillment version for expected_version checks. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

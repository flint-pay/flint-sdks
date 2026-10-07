<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read FulfillmentHold $active_hold
 * @property-read list<FulfillmentChargeLink> $charges
 * @property-read string $completed_at
 * @property-read string $created_at
 * @property-read string $customer_id
 * @property-read string $device_id
 * @property-read DigitalFulfillmentDetails $digital_details
 * @property-read string $dispatched_at
 * @property-read string $external_reference_id
 * @property-read string $fulfillment_id
 * @property-read list<FulfillmentLineItem> $line_items
 * @property-read DeliveryFulfillmentDetails $local_delivery_details
 * @property-read string $location_id
 * @property-read array<array-key, string> $metadata
 * @property-read ExpandedOrderSummary|null $order
 * @property-read string $order_id
 * @property-read FulfillmentOutcome $outcome
 * @property-read list<ExpandedPackageSummary> $packages
 * @property-read string $packed_at
 * @property-read string $picked_at
 * @property-read PickupFulfillmentDetails $pickup_details
 * @property-read string $quantity_effect
 * @property-read FulfillmentRecipient $recipient
 * @property-read string $request_status
 * @property-read ServiceFulfillmentDetails $service_details
 * @property-read list<ExpandedShipmentSummary> $shipments
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $terminal_at
 * @property-read string $type
 * @property-read string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted fields throw when accessed. */
final class Fulfillment extends Model {
    /** @param array{'active_hold'?: mixed, 'charges'?: list<mixed>, 'completed_at'?: string, 'created_at'?: string, 'customer_id'?: string, 'device_id'?: string, 'digital_details'?: mixed, 'dispatched_at'?: string, 'external_reference_id'?: string, 'fulfillment_id': string, 'line_items': list<mixed>, 'local_delivery_details'?: mixed, 'location_id'?: string, 'metadata'?: \stdClass, 'order'?: mixed, 'order_id': string, 'outcome'?: mixed, 'packages'?: list<mixed>, 'packed_at'?: string, 'picked_at'?: string, 'pickup_details'?: mixed, 'quantity_effect'?: string, 'recipient'?: mixed, 'request_status': string, 'service_details'?: mixed, 'shipments'?: list<mixed>, 'status': string, 'supported_actions': list<string>, 'terminal_at'?: string, 'type': string, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Fulfillment')); }
    /** @return FulfillmentHold
     * @throws SdkError When active_hold is omitted; use hasActiveHold() or valueOrDefault().
     */
    public function getActiveHold(): FulfillmentHold { return $this->get('active_hold'); }
    public function hasActiveHold(): bool { return $this->has('active_hold'); }
    /** @return list<FulfillmentChargeLink>
     * @throws SdkError When charges is omitted; use hasCharges() or valueOrDefault().
     */
    public function getCharges(): array { return $this->get('charges'); }
    public function hasCharges(): bool { return $this->has('charges'); }
    /** @return string
     * @throws SdkError When completed_at is omitted; use hasCompletedAt() or valueOrDefault().
     */
    public function getCompletedAt(): string { return $this->get('completed_at'); }
    public function hasCompletedAt(): bool { return $this->has('completed_at'); }
    /** @return string
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return string
     * @throws SdkError When customer_id is omitted; use hasCustomerId() or valueOrDefault().
     */
    public function getCustomerId(): string { return $this->get('customer_id'); }
    public function hasCustomerId(): bool { return $this->has('customer_id'); }
    /** @return string
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** @return DigitalFulfillmentDetails
     * @throws SdkError When digital_details is omitted; use hasDigitalDetails() or valueOrDefault().
     */
    public function getDigitalDetails(): DigitalFulfillmentDetails { return $this->get('digital_details'); }
    public function hasDigitalDetails(): bool { return $this->has('digital_details'); }
    /** @return string
     * @throws SdkError When dispatched_at is omitted; use hasDispatchedAt() or valueOrDefault().
     */
    public function getDispatchedAt(): string { return $this->get('dispatched_at'); }
    public function hasDispatchedAt(): bool { return $this->has('dispatched_at'); }
    /** @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** @return list<FulfillmentLineItem>
     * @throws SdkError When line_items is omitted; use hasLineItems() or valueOrDefault().
     */
    public function getLineItems(): array { return $this->get('line_items'); }
    public function hasLineItems(): bool { return $this->has('line_items'); }
    /** @return DeliveryFulfillmentDetails
     * @throws SdkError When local_delivery_details is omitted; use hasLocalDeliveryDetails() or valueOrDefault().
     */
    public function getLocalDeliveryDetails(): DeliveryFulfillmentDetails { return $this->get('local_delivery_details'); }
    public function hasLocalDeliveryDetails(): bool { return $this->has('local_delivery_details'); }
    /** @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** @return array<array-key, string>
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
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
    /** @return FulfillmentOutcome
     * @throws SdkError When outcome is omitted; use hasOutcome() or valueOrDefault().
     */
    public function getOutcome(): FulfillmentOutcome { return $this->get('outcome'); }
    public function hasOutcome(): bool { return $this->has('outcome'); }
    /** @return list<ExpandedPackageSummary>
     * @throws SdkError When packages is omitted; use hasPackages() or valueOrDefault().
     */
    public function getPackages(): array { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** @return string
     * @throws SdkError When packed_at is omitted; use hasPackedAt() or valueOrDefault().
     */
    public function getPackedAt(): string { return $this->get('packed_at'); }
    public function hasPackedAt(): bool { return $this->has('packed_at'); }
    /** @return string
     * @throws SdkError When picked_at is omitted; use hasPickedAt() or valueOrDefault().
     */
    public function getPickedAt(): string { return $this->get('picked_at'); }
    public function hasPickedAt(): bool { return $this->has('picked_at'); }
    /** @return PickupFulfillmentDetails
     * @throws SdkError When pickup_details is omitted; use hasPickupDetails() or valueOrDefault().
     */
    public function getPickupDetails(): PickupFulfillmentDetails { return $this->get('pickup_details'); }
    public function hasPickupDetails(): bool { return $this->has('pickup_details'); }
    /** @return string
     * @throws SdkError When quantity_effect is omitted; use hasQuantityEffect() or valueOrDefault().
     */
    public function getQuantityEffect(): string { return $this->get('quantity_effect'); }
    public function hasQuantityEffect(): bool { return $this->has('quantity_effect'); }
    /** @return FulfillmentRecipient
     * @throws SdkError When recipient is omitted; use hasRecipient() or valueOrDefault().
     */
    public function getRecipient(): FulfillmentRecipient { return $this->get('recipient'); }
    public function hasRecipient(): bool { return $this->has('recipient'); }
    /** @return string
     * @throws SdkError When request_status is omitted; use hasRequestStatus() or valueOrDefault().
     */
    public function getRequestStatus(): string { return $this->get('request_status'); }
    public function hasRequestStatus(): bool { return $this->has('request_status'); }
    /** @return ServiceFulfillmentDetails
     * @throws SdkError When service_details is omitted; use hasServiceDetails() or valueOrDefault().
     */
    public function getServiceDetails(): ServiceFulfillmentDetails { return $this->get('service_details'); }
    public function hasServiceDetails(): bool { return $this->has('service_details'); }
    /** @return list<ExpandedShipmentSummary>
     * @throws SdkError When shipments is omitted; use hasShipments() or valueOrDefault().
     */
    public function getShipments(): array { return $this->get('shipments'); }
    public function hasShipments(): bool { return $this->has('shipments'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** @return string
     * @throws SdkError When terminal_at is omitted; use hasTerminalAt() or valueOrDefault().
     */
    public function getTerminalAt(): string { return $this->get('terminal_at'); }
    public function hasTerminalAt(): bool { return $this->has('terminal_at'); }
    /** @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
    /** @return string
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

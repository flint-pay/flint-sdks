<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $carrier
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $delivered_at
 * @property-read DimensionsInput|array<array-key, mixed>|\stdClass $dimensions
 * @property-read string|\DateTimeInterface|null $expected_delivery_at
 * @property-read string $external_reference_id
 * @property-read string $external_system
 * @property-read string $fulfillment_id
 * @property-read string $label_url
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null $order
 * @property-read string $order_id
 * @property-read string $package_id
 * @property-read string $return_id
 * @property-read list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass> $return_line_items
 * @property-read string $service_code
 * @property-read string $shipment_id
 * @property-read string|\DateTimeInterface $shipped_at
 * @property-read string $status
 * @property-read string $status_reason
 * @property-read list<string> $supported_actions
 * @property-read string $tracking_number
 * @property-read string $tracking_url
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * @property-read WeightInput|array<array-key, mixed>|\stdClass $weight
 * Presence-aware input; omitted fields throw when accessed. */
final class PackageInput extends Model {
    /** @param array{'carrier'?: string, 'created_at'?: string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'fulfillment_id': string, 'label_url'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'order'?: array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null, 'order_id': string, 'package_id': string, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>, 'service_code'?: string, 'shipment_id': string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'supported_actions': list<string>, 'tracking_number'?: string, 'tracking_url'?: string, 'updated_at'?: string|\DateTimeInterface, 'version': string, 'weight'?: WeightInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageInput')); }
    /** Shape $ (Value): string. Carrier transporting the package.
     * @return string
     * @throws SdkError When carrier is omitted; use hasCarrier() or valueOrDefault().
     */
    public function getCarrier(): string { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Shape $ (Value): string. Creation timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. Package delivery timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Shape $ (Value): {@see DimensionsInput}. Physical length, width, and height of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return DimensionsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When dimensions is omitted; use hasDimensions() or valueOrDefault().
     */
    public function getDimensions(): mixed { return $this->get('dimensions'); }
    public function hasDimensions(): bool { return $this->has('dimensions'); }
    /** Shape $ (Value): string or null. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expected_delivery_at is omitted; use hasExpectedDeliveryAt() or valueOrDefault().
     */
    public function getExpectedDeliveryAt(): string|\DateTimeInterface|null { return $this->get('expected_delivery_at'); }
    public function hasExpectedDeliveryAt(): bool { return $this->has('expected_delivery_at'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries.
     * @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Shape $ (Value): string. Fulfillment whose items are in the package.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for authenticated merchant workflows. Non-Flint URLs must include external_system for provenance. Flint does not currently manage label file hosting or buyer-facing label downloads. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return string
     * @throws SdkError When label_url is omitted; use hasLabelUrl() or valueOrDefault().
     */
    public function getLabelUrl(): string { return $this->get('label_url'); }
    public function hasLabelUrl(): bool { return $this->has('label_url'); }
    /** Shape $ (Value): Map of string. Caller-owned key-value metadata associated with the package. Shape $.* (Value): string.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see ExpandedOrderSummaryInput} or null. Order summary returned when the order relationship is expanded. Shape $.anyOf[1] (Value): {@see ExpandedOrderSummaryInput}. An order's summary fields, including status, payment and refund status, and pricing and settlement amounts, returned when the order is expanded. Shape $.anyOf[2] (Value): null.
     * @return array{'buyer_contact'?: CheckoutBuyerContactInput|array<array-key, mixed>|\stdClass, 'closed_at'?: string|\DateTimeInterface, 'closed_reason'?: string, 'created_at'?: string|\DateTimeInterface, 'customer_id'?: string, 'fulfillment_status'?: string, 'order_id': string, 'order_number'?: string, 'payment_intent_ids'?: list<string>, 'payment_status': string, 'pricing_amounts': PricingAmountsInput|array<array-key, mixed>|\stdClass, 'refund_status': string, 'settlement_amounts': SettlementAmountsInput|array<array-key, mixed>|\stdClass, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object|null
     * @throws SdkError When order is omitted; use hasOrder() or valueOrDefault().
     */
    public function getOrder(): mixed { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Shape $ (Value): string. Order whose items are in the package.
     * @return string
     * @throws SdkError When order_id is omitted; use hasOrderId() or valueOrDefault().
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Shape $ (Value): string. Stable identifier of the package.
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Shape $ (Value): string. Return this package belongs to. Present only on packages of return shipments.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Shape $ (Value): Array of {@see ReturnShipmentLineItemAllocationInput}. Return line quantities allocated to this parcel. Present only on packages of return shipments. Shape $[] (Value): {@see ReturnShipmentLineItemAllocationInput}. A return line and the quantity placed in a return shipment or package.
     * @return list<ReturnShipmentLineItemAllocationInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_line_items is omitted; use hasReturnLineItems() or valueOrDefault().
     */
    public function getReturnLineItems(): array { return $this->get('return_line_items'); }
    public function hasReturnLineItems(): bool { return $this->has('return_line_items'); }
    /** Shape $ (Value): string. Carrier service used for the package.
     * @return string
     * @throws SdkError When service_code is omitted; use hasServiceCode() or valueOrDefault().
     */
    public function getServiceCode(): string { return $this->get('service_code'); }
    public function hasServiceCode(): bool { return $this->has('service_code'); }
    /** Shape $ (Value): string. Shipment carrying this package.
     * @return string
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Shape $ (Value): string. Package handoff timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When shipped_at is omitted; use hasShippedAt() or valueOrDefault().
     */
    public function getShippedAt(): string|\DateTimeInterface { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Shape $ (Value): string. Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. Additional explanation of the package's current status.
     * @return string
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Shape $ (Value): Array of string. Read-only actions currently supported for this package. [] enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped". Shape $[] (Value): string.  Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Shape $ (Value): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return string
     * @throws SdkError When tracking_number is omitted; use hasTrackingNumber() or valueOrDefault().
     */
    public function getTrackingNumber(): string { return $this->get('tracking_number'); }
    public function hasTrackingNumber(): bool { return $this->has('tracking_number'); }
    /** Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return string
     * @throws SdkError When tracking_url is omitted; use hasTrackingUrl() or valueOrDefault().
     */
    public function getTrackingUrl(): string { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** Shape $ (Value): string. Last update timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Monotonic package version for expected_version checks. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): {@see WeightInput}. Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return WeightInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When weight is omitted; use hasWeight() or valueOrDefault().
     */
    public function getWeight(): mixed { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}

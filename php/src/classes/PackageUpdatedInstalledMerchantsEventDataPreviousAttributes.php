<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $carrier
 * @property-read string|null $created_at
 * @property-read string|null $delivered_at
 * @property-read DimensionsPreviousAttributes|null $dimensions
 * @property-read string|null $expected_delivery_at
 * @property-read string|null $external_reference_id
 * @property-read string|null $external_system
 * @property-read string|null $fulfillment_id
 * @property-read string|null $label_url
 * @property-read array<array-key, string>|null $metadata
 * @property-read ExpandedOrderSummaryPreviousAttributes|null $order
 * @property-read string|null $order_id
 * @property-read string|null $package_id
 * @property-read string|null $return_id
 * @property-read list<ReturnShipmentLineItemAllocationPreviousAttributes>|null $return_line_items
 * @property-read string|null $service_code
 * @property-read string|null $shipment_id
 * @property-read string|null $shipped_at
 * @property-read string|null $status
 * @property-read string|null $status_reason
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $tracking_number
 * @property-read string|null $tracking_url
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * @property-read WeightPreviousAttributes|null $weight
 * Presence-aware response; omitted optional fields return null. */
final class PackageUpdatedInstalledMerchantsEventDataPreviousAttributes extends Model {
    /** @param array{'carrier'?: mixed, 'created_at'?: mixed, 'delivered_at'?: mixed, 'dimensions'?: mixed, 'expected_delivery_at'?: mixed, 'external_reference_id'?: mixed, 'external_system'?: mixed, 'fulfillment_id'?: mixed, 'label_url'?: mixed, 'metadata'?: mixed, 'order'?: mixed, 'order_id'?: mixed, 'package_id'?: mixed, 'return_id'?: mixed, 'return_line_items'?: mixed, 'service_code'?: mixed, 'shipment_id'?: mixed, 'shipped_at'?: mixed, 'status'?: mixed, 'status_reason'?: mixed, 'supported_actions'?: mixed, 'tracking_number'?: mixed, 'tracking_url'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, 'weight'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageUpdatedInstalledMerchantsEventDataPreviousAttributes')); }
    /** Carrier transporting the package. anyOf[1] (Value): string. Carrier transporting the package. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCarrier(): string|null { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Creation timestamp. anyOf[1] (Value): string. Creation timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Package delivery timestamp. anyOf[1] (Value): string. Package delivery timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveredAt(): string|null { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Physical length, width, and height of the package. anyOf[1] (Value): {@see DimensionsPreviousAttributes}. anyOf[2] (Value): null.
     * @return DimensionsPreviousAttributes|null
     */
    public function getDimensions(): DimensionsPreviousAttributes|null { return $this->get('dimensions'); }
    public function hasDimensions(): bool { return $this->has('dimensions'); }
    /** When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. anyOf[1] (Value): string. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpectedDeliveryAt(): string|null { return $this->get('expected_delivery_at'); }
    public function hasExpectedDeliveryAt(): bool { return $this->has('expected_delivery_at'); }
    /** Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. anyOf[1] (Value): string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. maxLength: 255. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalReferenceId(): string|null { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. anyOf[1] (Value): string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExternalSystem(): string|null { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Fulfillment whose items are in the package. anyOf[1] (Value): string. Fulfillment whose items are in the package. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentId(): string|null { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLabelUrl(): string|null { return $this->get('label_url'); }
    public function hasLabelUrl(): bool { return $this->has('label_url'); }
    /** Caller-owned key-value metadata associated with the package. anyOf[1] (Value): {@see MetadataMapPreviousAttributes}. anyOf[2] (Value): null.
     * @return array<array-key, string>|null
     */
    public function getMetadata(): array|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Order summary returned when the order relationship is expanded. Present only when `expand` includes `order`; `null` when expanded and there is no related order. anyOf[1] (Value): {@see ExpandedOrderSummaryPreviousAttributes}. anyOf[2] (Value): null.
     * @return ExpandedOrderSummaryPreviousAttributes|null
     */
    public function getOrder(): ExpandedOrderSummaryPreviousAttributes|null { return $this->get('order'); }
    public function hasOrder(): bool { return $this->has('order'); }
    /** Order whose items are in the package. anyOf[1] (Value): string. Order whose items are in the package. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getOrderId(): string|null { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Stable identifier of the package. anyOf[1] (Value): string. Stable identifier of the package. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPackageId(): string|null { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Return this package belongs to. Present only on packages of return shipments. anyOf[1] (Value): string. Return this package belongs to. Present only on packages of return shipments. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReturnId(): string|null { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Return line quantities allocated to this parcel. Present only on packages of return shipments. anyOf[1] (Value): Array of {@see ReturnShipmentLineItemAllocationPreviousAttributes}. Return line quantities allocated to this parcel. Present only on packages of return shipments. anyOf[1][] (Value): {@see ReturnShipmentLineItemAllocationPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<ReturnShipmentLineItemAllocationPreviousAttributes>|null
     */
    public function getReturnLineItems(): array|null { return $this->get('return_line_items'); }
    public function hasReturnLineItems(): bool { return $this->has('return_line_items'); }
    /** Carrier service used for the package. anyOf[1] (Value): string. Carrier service used for the package. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getServiceCode(): string|null { return $this->get('service_code'); }
    public function hasServiceCode(): bool { return $this->has('service_code'); }
    /** Shipment carrying this package. anyOf[1] (Value): string. Shipment carrying this package. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShipmentId(): string|null { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Package handoff timestamp. anyOf[1] (Value): string. Package handoff timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShippedAt(): string|null { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1] (Value): string. Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Additional explanation of the package's current status. anyOf[1] (Value): string. Additional explanation of the package's current status. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatusReason(): string|null { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. [] enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". anyOf[1][] (Value): string.  Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTrackingNumber(): string|null { return $this->get('tracking_number'); }
    public function hasTrackingNumber(): bool { return $this->has('tracking_number'); }
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTrackingUrl(): string|null { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** Last update timestamp. anyOf[1] (Value): string. Last update timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Monotonic package version for expected_version checks. anyOf[1] (Value): integer. Monotonic package version for expected_version checks. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Physical weight of the package. anyOf[1] (Value): {@see WeightPreviousAttributes}. anyOf[2] (Value): null.
     * @return WeightPreviousAttributes|null
     */
    public function getWeight(): WeightPreviousAttributes|null { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $carrier
 * @property-read ?string $created_at
 * @property-read ?string $delivered_at
 * @property-read ?Dimensions $dimensions
 * @property-read string|null $expected_delivery_at
 * @property-read string $fulfillment_id
 * @property-read ?string $label_url
 * @property-read string $order_id
 * @property-read string $package_id
 * @property-read ?string $return_id
 * @property-read ?list<ReturnShipmentLineItemAllocation> $return_line_items
 * @property-read ?string $service_code
 * @property-read string $shipment_id
 * @property-read ?string $shipped_at
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read ?string $tracking_number
 * @property-read ?string $tracking_url
 * @property-read ?string $updated_at
 * @property-read int $version
 * @property-read ?Weight $weight
 * Presence-aware response; omitted optional fields return null. */
final class BuyerPackage extends Model {
    /** @param array{'carrier'?: string, 'created_at'?: string, 'delivered_at'?: string, 'dimensions'?: mixed, 'expected_delivery_at'?: string|null, 'fulfillment_id': string, 'label_url'?: string, 'order_id': string, 'package_id': string, 'return_id'?: string, 'return_line_items'?: list<mixed>, 'service_code'?: string, 'shipment_id': string, 'shipped_at'?: string, 'status': string, 'supported_actions': list<string>, 'tracking_number'?: string, 'tracking_url'?: string, 'updated_at'?: string, 'version': int, 'weight'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('BuyerPackage')); }
    /** Carrier transporting the package.
     * @return ?string
     */
    public function getCarrier(): ?string { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Creation timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Package delivery timestamp. Format: date-time.
     * @return ?string
     */
    public function getDeliveredAt(): ?string { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Physical length, width, and height of the package. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return ?Dimensions
     */
    public function getDimensions(): ?Dimensions { return $this->get('dimensions'); }
    public function hasDimensions(): bool { return $this->has('dimensions'); }
    /** When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: date-time.
     * @return string|null
     */
    public function getExpectedDeliveryAt(): string|null { return $this->get('expected_delivery_at'); }
    public function hasExpectedDeliveryAt(): bool { return $this->has('expected_delivery_at'); }
    /** Fulfillment whose items are in the package.
     * @return string
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Return-label URL supplied by the merchant's integration. Included for return packages; omitted for outbound packages. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return ?string
     */
    public function getLabelUrl(): ?string { return $this->get('label_url'); }
    public function hasLabelUrl(): bool { return $this->has('label_url'); }
    /** Order whose items are in the package.
     * @return string
     */
    public function getOrderId(): string { return $this->get('order_id'); }
    public function hasOrderId(): bool { return $this->has('order_id'); }
    /** Stable identifier of the package.
     * @return string
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Return this package belongs to. Present only on packages of return shipments.
     * @return ?string
     */
    public function getReturnId(): ?string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** Return line quantities allocated to this parcel. Present only on packages of return shipments. [] (Value): {@see ReturnShipmentLineItemAllocation}. A return line and the quantity placed in a return shipment or package.
     * @return ?list<ReturnShipmentLineItemAllocation>
     */
    public function getReturnLineItems(): ?array { return $this->get('return_line_items'); }
    public function hasReturnLineItems(): bool { return $this->has('return_line_items'); }
    /** Carrier service used for the package.
     * @return ?string
     */
    public function getServiceCode(): ?string { return $this->get('service_code'); }
    public function hasServiceCode(): bool { return $this->has('service_code'); }
    /** Shipment carrying this package.
     * @return string
     */
    public function getShipmentId(): string { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** Package handoff timestamp. Format: date-time.
     * @return ?string
     */
    public function getShippedAt(): ?string { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Current package lifecycle state. Package states are the source used to derive shipment status. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Always empty for buyer credentials. maxItems: 0. [] enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped". [] (Value): string.  Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return ?string
     */
    public function getTrackingNumber(): ?string { return $this->get('tracking_number'); }
    public function hasTrackingNumber(): bool { return $this->has('tracking_number'); }
    /** Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return ?string
     */
    public function getTrackingUrl(): ?string { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** Last update timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Monotonic package version for expected_version checks. Format: uint64. minimum: 1.
     * @return int
     */
    public function getVersion(): int { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Physical weight of the package. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return ?Weight
     */
    public function getWeight(): ?Weight { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}

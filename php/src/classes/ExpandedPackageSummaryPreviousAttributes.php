<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $carrier
 * @property-read string|null $created_at
 * @property-read string|null $delivered_at
 * @property-read string|null $expected_delivery_at
 * @property-read string|null $fulfillment_id
 * @property-read string|null $package_id
 * @property-read string|null $service_code
 * @property-read string|null $shipment_id
 * @property-read string|null $shipped_at
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $tracking_number
 * @property-read string|null $tracking_url
 * @property-read string|null $updated_at
 * @property-read int|null $version
 * Presence-aware response; omitted optional fields return null. */
final class ExpandedPackageSummaryPreviousAttributes extends Model {
    /** @param array{'carrier'?: mixed, 'created_at'?: mixed, 'delivered_at'?: mixed, 'expected_delivery_at'?: mixed, 'fulfillment_id'?: mixed, 'package_id'?: mixed, 'service_code'?: mixed, 'shipment_id'?: mixed, 'shipped_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'tracking_number'?: mixed, 'tracking_url'?: mixed, 'updated_at'?: mixed, 'version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPackageSummaryPreviousAttributes')); }
    /** Carrier transporting the package. anyOf[1] (Value): string. Carrier transporting the package. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCarrier(): string|null { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** When the package was created, in RFC3339 format. anyOf[1] (Value): string. When the package was created, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When the package was delivered, in RFC3339 format. anyOf[1] (Value): string. When the package was delivered, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getDeliveredAt(): string|null { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. anyOf[1] (Value): string. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getExpectedDeliveryAt(): string|null { return $this->get('expected_delivery_at'); }
    public function hasExpectedDeliveryAt(): bool { return $this->has('expected_delivery_at'); }
    /** Fulfillment whose items are in the package. anyOf[1] (Value): string. Fulfillment whose items are in the package. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFulfillmentId(): string|null { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Stable identifier of the expanded package. anyOf[1] (Value): string. Stable identifier of the expanded package. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPackageId(): string|null { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
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
    /** When the package was shipped, in RFC3339 format. anyOf[1] (Value): string. When the package was shipped, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getShippedAt(): string|null { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1] (Value): string. Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Always present with merchant credentials. [] enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Always present with merchant credentials. [] enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". anyOf[1][] (Value): string.  Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTrackingNumber(): string|null { return $this->get('tracking_number'); }
    public function hasTrackingNumber(): bool { return $this->has('tracking_number'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getTrackingUrl(): string|null { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** When the package was last updated, in RFC3339 format. anyOf[1] (Value): string. When the package was last updated, in RFC3339 format. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Monotonic package version for expected_version checks. anyOf[1] (Value): integer. Monotonic package version for expected_version checks. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getVersion(): int|null { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

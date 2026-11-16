<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $carrier
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|\DateTimeInterface|null $delivered_at
 * @property-read string|\DateTimeInterface|null|null $expected_delivery_at
 * @property-read string|null $fulfillment_id
 * @property-read string|null $package_id
 * @property-read string|null $service_code
 * @property-read string|null $shipment_id
 * @property-read string|\DateTimeInterface|null $shipped_at
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $tracking_number
 * @property-read string|null $tracking_url
 * @property-read string|\DateTimeInterface|null $updated_at
 * @property-read int|null $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedPackageSummaryPreviousAttributesInput extends Model {
    /** @param array{'carrier'?: string|null, 'created_at'?: string|\DateTimeInterface|null, 'delivered_at'?: string|\DateTimeInterface|null, 'expected_delivery_at'?: string|\DateTimeInterface|null|null, 'fulfillment_id'?: string|null, 'package_id'?: string|null, 'service_code'?: string|null, 'shipment_id'?: string|null, 'shipped_at'?: string|\DateTimeInterface|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, 'tracking_number'?: string|null, 'tracking_url'?: string|null, 'updated_at'?: string|\DateTimeInterface|null, 'version'?: int|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPackageSummaryPreviousAttributesInput')); }
    /** Carrier transporting the package. anyOf[1] (Value): string. Carrier transporting the package. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When carrier is omitted; use hasCarrier() or valueOrDefault().
     */
    public function getCarrier(): mixed { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** When the package was created, in RFC3339 format. anyOf[1] (Value): string. When the package was created, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** When the package was delivered, in RFC3339 format. anyOf[1] (Value): string. When the package was delivered, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): mixed { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. anyOf[1] (Value): string or null. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null|null
     * @throws SdkError When expected_delivery_at is omitted; use hasExpectedDeliveryAt() or valueOrDefault().
     */
    public function getExpectedDeliveryAt(): mixed { return $this->get('expected_delivery_at'); }
    public function hasExpectedDeliveryAt(): bool { return $this->has('expected_delivery_at'); }
    /** Fulfillment whose items are in the package. anyOf[1] (Value): string. Fulfillment whose items are in the package. Example: "ful_01KEZF7C00F24WVSTTWR1FQX5T". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): mixed { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Stable identifier of the expanded package. anyOf[1] (Value): string. Stable identifier of the expanded package. Example: "pkg_01KEZF7C00ZZA16BJCEJBWKJ5R". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): mixed { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
    /** Carrier service used for the package. anyOf[1] (Value): string. Carrier service used for the package. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When service_code is omitted; use hasServiceCode() or valueOrDefault().
     */
    public function getServiceCode(): mixed { return $this->get('service_code'); }
    public function hasServiceCode(): bool { return $this->has('service_code'); }
    /** Shipment carrying this package. anyOf[1] (Value): string. Shipment carrying this package. Example: "shp_01KEZF7C00Q2AFXWXHMCDR3F68". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When shipment_id is omitted; use hasShipmentId() or valueOrDefault().
     */
    public function getShipmentId(): mixed { return $this->get('shipment_id'); }
    public function hasShipmentId(): bool { return $this->has('shipment_id'); }
    /** When the package was shipped, in RFC3339 format. anyOf[1] (Value): string. When the package was shipped, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When shipped_at is omitted; use hasShippedAt() or valueOrDefault().
     */
    public function getShippedAt(): mixed { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[1] (Value): string. Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Always present with merchant credentials. [] enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now. mark_in_transit can repeat while in transit to refresh expected_delivery_at. Always present with merchant credentials. [] enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". anyOf[1][] (Value): string.  Value enum: "mark_delivered", "mark_delivery_attempted", "mark_exception", "mark_in_transit", "mark_out_for_delivery", "mark_packed", "mark_returned", "mark_shipped", "void". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When tracking_number is omitted; use hasTrackingNumber() or valueOrDefault().
     */
    public function getTrackingNumber(): mixed { return $this->get('tracking_number'); }
    public function hasTrackingNumber(): bool { return $this->has('tracking_number'); }
    /** Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[1] (Value): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When tracking_url is omitted; use hasTrackingUrl() or valueOrDefault().
     */
    public function getTrackingUrl(): mixed { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** When the package was last updated, in RFC3339 format. anyOf[1] (Value): string. When the package was last updated, in RFC3339 format. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Monotonic package version for expected_version checks. anyOf[1] (Value): integer. Monotonic package version for expected_version checks. Format: uint64. minimum: 1. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): mixed { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

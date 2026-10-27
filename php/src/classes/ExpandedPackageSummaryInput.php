<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $carrier
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string|\DateTimeInterface $delivered_at
 * @property-read string|\DateTimeInterface|null $expected_delivery_at
 * @property-read string $fulfillment_id
 * @property-read string $package_id
 * @property-read string $service_code
 * @property-read string $shipment_id
 * @property-read string|\DateTimeInterface $shipped_at
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $tracking_number
 * @property-read string $tracking_url
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * Presence-aware input; omitted fields throw when accessed. */
final class ExpandedPackageSummaryInput extends Model {
    /** @param array{'carrier'?: string, 'created_at'?: string|\DateTimeInterface, 'delivered_at'?: string|\DateTimeInterface, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'fulfillment_id': string, 'package_id': string, 'service_code'?: string, 'shipment_id': string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'supported_actions': list<string>, 'tracking_number'?: string, 'tracking_url'?: string, 'updated_at'?: string|\DateTimeInterface, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('ExpandedPackageSummaryInput')); }
    /** Shape $ (Value): string. Carrier transporting the package.
     * @return string
     * @throws SdkError When carrier is omitted; use hasCarrier() or valueOrDefault().
     */
    public function getCarrier(): string { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Shape $ (Value): string. When the package was created, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string. When the package was delivered, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When delivered_at is omitted; use hasDeliveredAt() or valueOrDefault().
     */
    public function getDeliveredAt(): string|\DateTimeInterface { return $this->get('delivered_at'); }
    public function hasDeliveredAt(): bool { return $this->has('delivered_at'); }
    /** Shape $ (Value): string or null. When the carrier or merchant expects this package to arrive. Null when no estimate is set. Retained after delivery as history. This estimate is separate from the fulfillment's promised shipment window. Format: date-time.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expected_delivery_at is omitted; use hasExpectedDeliveryAt() or valueOrDefault().
     */
    public function getExpectedDeliveryAt(): string|\DateTimeInterface|null { return $this->get('expected_delivery_at'); }
    public function hasExpectedDeliveryAt(): bool { return $this->has('expected_delivery_at'); }
    /** Shape $ (Value): string. Fulfillment whose items are in the package.
     * @return string
     * @throws SdkError When fulfillment_id is omitted; use hasFulfillmentId() or valueOrDefault().
     */
    public function getFulfillmentId(): string { return $this->get('fulfillment_id'); }
    public function hasFulfillmentId(): bool { return $this->has('fulfillment_id'); }
    /** Shape $ (Value): string. Stable identifier of the expanded package.
     * @return string
     * @throws SdkError When package_id is omitted; use hasPackageId() or valueOrDefault().
     */
    public function getPackageId(): string { return $this->get('package_id'); }
    public function hasPackageId(): bool { return $this->has('package_id'); }
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
    /** Shape $ (Value): string. When the package was shipped, in RFC3339 format. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When shipped_at is omitted; use hasShippedAt() or valueOrDefault().
     */
    public function getShippedAt(): string|\DateTimeInterface { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Shape $ (Value): string. Current package lifecycle state. - `created`: The package record exists but has not been packed or handed off. - `packed`: The package is packed and awaiting carrier handoff. - `shipped`: The package was handed to the carrier. - `in_transit`: The carrier is moving the package through its network. - `out_for_delivery`: The package is on its final delivery route. - `delivered`: The carrier reported successful delivery. - `delivery_attempted`: The carrier attempted delivery but did not complete it. Follow the carrier instructions before retrying delivery. - `exception`: A carrier exception is blocking normal progress. Resolve the carrier-reported issue. - `returned`: The package was returned toward or to its origin. - `voided`: The package was voided and will not continue through delivery. Value enum: "created", "packed", "shipped", "in_transit", "out_for_delivery", "delivered", "delivery_attempted", "exception", "returned", "voided".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
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
    /** Shape $ (Value): string. Omitted for a checkout session credential that doesn't act for the customer the buyer verified.
     * @return string
     * @throws SdkError When tracking_url is omitted; use hasTrackingUrl() or valueOrDefault().
     */
    public function getTrackingUrl(): string { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** Shape $ (Value): string. When the package was last updated, in RFC3339 format. Format: date-time.
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
}

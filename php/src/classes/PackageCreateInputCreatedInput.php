<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $buyer_notification_behavior
 * @property-read string $carrier
 * @property-read DimensionsInput|array<array-key, mixed>|\stdClass $dimensions
 * @property-read string|\DateTimeInterface|null $expected_delivery_at
 * @property-read string $external_reference_id
 * @property-read string $external_system
 * @property-read list<CreatePackageItemRequestInput|array<array-key, mixed>|\stdClass> $items
 * @property-read string $label_url
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read list<ReturnShipmentLineItemAllocationRequestRequestInput|array<array-key, mixed>|\stdClass> $return_line_items
 * @property-read string $service_code
 * @property-read string|\DateTimeInterface $shipped_at
 * @property-read string $status
 * @property-read string $status_reason
 * @property-read string $tracking_number
 * @property-read string $tracking_url
 * @property-read WeightInput|array<array-key, mixed>|\stdClass $weight
 * Presence-aware input; omitted fields throw when accessed. */
final class PackageCreateInputCreatedInput extends Model {
    /** @param array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<CreatePackageItemRequestInput|array<array-key, mixed>|\stdClass>, 'label_url'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'return_line_items'?: list<ReturnShipmentLineItemAllocationRequestRequestInput|array<array-key, mixed>|\stdClass>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: WeightInput|array<array-key, mixed>|\stdClass}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PackageCreateInputCreatedInput')); }
    /** Shape $ (Value): string. Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress".
     * @return string
     * @throws SdkError When buyer_notification_behavior is omitted; use hasBuyerNotificationBehavior() or valueOrDefault().
     */
    public function getBuyerNotificationBehavior(): string { return $this->get('buyer_notification_behavior'); }
    public function hasBuyerNotificationBehavior(): bool { return $this->has('buyer_notification_behavior'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When carrier is omitted; use hasCarrier() or valueOrDefault().
     */
    public function getCarrier(): string { return $this->get('carrier'); }
    public function hasCarrier(): bool { return $this->has('carrier'); }
    /** Shape $ (Value): {@see DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given `unit`.
     * @return DimensionsInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When dimensions is omitted; use hasDimensions() or valueOrDefault().
     */
    public function getDimensions(): mixed { return $this->get('dimensions'); }
    public function hasDimensions(): bool { return $this->has('dimensions'); }
    /** Shape $ (Value): string or null. When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expected_delivery_at is omitted; use hasExpectedDeliveryAt() or valueOrDefault().
     */
    public function getExpectedDeliveryAt(): string|\DateTimeInterface|null { return $this->get('expected_delivery_at'); }
    public function hasExpectedDeliveryAt(): bool { return $this->has('expected_delivery_at'); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Shape $ (Value): Array of {@see CreatePackageItemRequestInput}. Independent package-item collection. Inline creation uses the child-create shape and commits atomically; edit items through the package item routes after creation. Each order line may appear once. minItems: 1. maxItems: 100. Shape $[] (Value): {@see CreatePackageItemRequestInput}. The request body for: Create package item.
     * @return list<CreatePackageItemRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When items is omitted; use hasItems() or valueOrDefault().
     */
    public function getItems(): array { return $this->get('items'); }
    public function hasItems(): bool { return $this->has('items'); }
    /** Shape $ (Value): string. Merchant or integration supplied HTTPS shipping-label URL for authenticated merchant workflows. Non-Flint URLs must include external_system for provenance. Flint does not currently manage label file hosting or buyer-facing label downloads. minLength: 1.
     * @return string
     * @throws SdkError When label_url is omitted; use hasLabelUrl() or valueOrDefault().
     */
    public function getLabelUrl(): string { return $this->get('label_url'); }
    public function hasLabelUrl(): bool { return $this->has('label_url'); }
    /** Shape $ (Value): {@see MetadataRequestInput}. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): Array of {@see ReturnShipmentLineItemAllocationRequestRequestInput}. Required for a package on a return shipment: allocates quantities from the shipment's return_line_items to this parcel. Rejected on outbound shipments. Shape $[] (Value): {@see ReturnShipmentLineItemAllocationRequestRequestInput}. A return line and the quantity placed in a return shipment or package.
     * @return list<ReturnShipmentLineItemAllocationRequestRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_line_items is omitted; use hasReturnLineItems() or valueOrDefault().
     */
    public function getReturnLineItems(): array { return $this->get('return_line_items'); }
    public function hasReturnLineItems(): bool { return $this->has('return_line_items'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When service_code is omitted; use hasServiceCode() or valueOrDefault().
     */
    public function getServiceCode(): string { return $this->get('service_code'); }
    public function hasServiceCode(): bool { return $this->has('service_code'); }
    /** Shape $ (Value): string. Package handoff time. Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface
     * @throws SdkError When shipped_at is omitted; use hasShippedAt() or valueOrDefault().
     */
    public function getShippedAt(): string|\DateTimeInterface { return $this->get('shipped_at'); }
    public function hasShippedAt(): bool { return $this->has('shipped_at'); }
    /** Shape $ (Value): string.  Value enum: "created".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When status_reason is omitted; use hasStatusReason() or valueOrDefault().
     */
    public function getStatusReason(): string { return $this->get('status_reason'); }
    public function hasStatusReason(): bool { return $this->has('status_reason'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When tracking_number is omitted; use hasTrackingNumber() or valueOrDefault().
     */
    public function getTrackingNumber(): string { return $this->get('tracking_number'); }
    public function hasTrackingNumber(): bool { return $this->has('tracking_number'); }
    /** Shape $ (Value): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1.
     * @return string
     * @throws SdkError When tracking_url is omitted; use hasTrackingUrl() or valueOrDefault().
     */
    public function getTrackingUrl(): string { return $this->get('tracking_url'); }
    public function hasTrackingUrl(): bool { return $this->has('tracking_url'); }
    /** Shape $ (Value): {@see WeightInput}. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration.
     * @return WeightInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When weight is omitted; use hasWeight() or valueOrDefault().
     */
    public function getWeight(): mixed { return $this->get('weight'); }
    public function hasWeight(): bool { return $this->has('weight'); }
}

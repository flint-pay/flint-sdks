<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_reference_id
 * @property-read string $external_system
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read SinglePackageCreateRequestInput|array<array-key, mixed>|\stdClass $package
 * @property-read list<array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<CreatePackageItemRequestInput|array<array-key, mixed>|\stdClass>, 'label_url'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'return_line_items'?: list<ReturnShipmentLineItemAllocationRequestInput|array<array-key, mixed>|\stdClass>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: WeightInput|array<array-key, mixed>|\stdClass}|object> $packages
 * @property-read string $packaging
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentSinglePackageRequestInput extends Model {
    /** @param array{'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'package': SinglePackageCreateRequestInput|array<array-key, mixed>|\stdClass, 'packages'?: list<array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<CreatePackageItemRequestInput|array<array-key, mixed>|\stdClass>, 'label_url'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'return_line_items'?: list<ReturnShipmentLineItemAllocationRequestInput|array<array-key, mixed>|\stdClass>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: WeightInput|array<array-key, mixed>|\stdClass}|object>, 'packaging': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentSinglePackageRequestInput')); }
    /** Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The single package created with a shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to created or shipped; items and return_line_items are not accepted.
     * @return SinglePackageCreateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When package is omitted; use hasPackage() or valueOrDefault().
     */
    public function getPackage(): mixed { return $this->get('package'); }
    public function hasPackage(): bool { return $this->has('package'); }
    /** minItems: 1. maxItems: 20. [] (Value): {@see PackageCreateRequestInput}. The request body for: Create package. [].buyer_notification_behavior (Optional): string. Controls buyer email handling. Omit or use send to send when recipient, template, and deduplication rules allow it. Use suppress when another system owns buyer messaging. Value enum: "send", "suppress". [].carrier (Optional): string. minLength: 1. [].dimensions (Optional): {@see DimensionsInput}. Package or item dimensions as `length`, `width`, and `height` in the given `unit`. [].expected_delivery_at (Optional): string or null. When the carrier or merchant expects this package to arrive. Past dates are allowed. Send null to clear it; omit to leave it unchanged on updates and transitions. Format: date-time. minLength: 1. [].external_reference_id (Optional): string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: 1. maxLength: 255. [].external_system (Optional): string. Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: 1. [].items (Required): Array of {@see CreatePackageItemRequestInput}. Independent package-item collection. Inline creation uses the child-create shape and commits atomically; edit items through the package item routes after creation. Each order line may appear once. minItems: 1. maxItems: 100. [].items[] (Value): {@see CreatePackageItemRequestInput}. The request body for: Create package item. [].label_url (Optional): string. HTTPS shipping-label URL supplied by your integration. Non-Flint URLs require external_system for provenance. Flint does not host the label file. minLength: 1. [].metadata (Optional): {@see MetadataRequestInput}. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50. [].return_line_items (Optional): Array of {@see ReturnShipmentLineItemAllocationRequestInput}. Required for a package on a return shipment: allocates quantities from the shipment's return_line_items to this parcel. Rejected on outbound shipments. [].return_line_items[] (Value): {@see ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a return shipment or package. [].service_code (Optional): string. minLength: 1. [].shipped_at (Optional): string. Package handoff time. Defaults to request time. Only allowed with status shipped. Format: date-time. minLength: 1. [].status (Required): string. Outbound packages can start as created or shipped. Return packages must start as created, omit items, and include return_line_items. Use mark_shipped after the buyer hands over the return package. Value enum: "created", "shipped". [].status_reason (Optional): string. minLength: 1. [].tracking_number (Optional): string. minLength: 1. [].tracking_url (Optional): string. Absolute HTTPS carrier tracking URL. Embedded URL credentials are rejected. minLength: 1. [].weight (Optional): {@see WeightInput}. A weight value in grams, kilograms, ounces, or pounds, used in delivery profile configuration. [].oneOf[1] (Value): {@see PackageCreateInputCreatedInput}. The `created` variant of `PackageCreateInput`. [].oneOf[2] (Value): {@see PackageCreateInputShippedInput}. The `shipped` variant of `PackageCreateInput`.
     * @return list<array{'buyer_notification_behavior'?: string, 'carrier'?: string, 'dimensions'?: DimensionsInput|array<array-key, mixed>|\stdClass, 'expected_delivery_at'?: string|\DateTimeInterface|null, 'external_reference_id'?: string, 'external_system'?: string, 'items'?: list<CreatePackageItemRequestInput|array<array-key, mixed>|\stdClass>, 'label_url'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'return_line_items'?: list<ReturnShipmentLineItemAllocationRequestInput|array<array-key, mixed>|\stdClass>, 'service_code'?: string, 'shipped_at'?: string|\DateTimeInterface, 'status': string, 'status_reason'?: string, 'tracking_number'?: string, 'tracking_url'?: string, 'weight'?: WeightInput|array<array-key, mixed>|\stdClass}|object>
     * @throws SdkError When packages is omitted; use hasPackages() or valueOrDefault().
     */
    public function getPackages(): array { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** Value enum: "single_package".
     * @return string
     * @throws SdkError When packaging is omitted; use hasPackaging() or valueOrDefault().
     */
    public function getPackaging(): string { return $this->get('packaging'); }
    public function hasPackaging(): bool { return $this->has('packaging'); }
}

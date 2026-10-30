<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $direction
 * @property-read string $external_reference_id
 * @property-read string $external_system
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read list<PackageCreateRequestInput|array<array-key, mixed>|\stdClass> $packages
 * @property-read string $return_id
 * @property-read list<ReturnShipmentLineItemAllocationRequestInput|array<array-key, mixed>|\stdClass> $return_line_items
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateShipmentRequestInput extends Model {
    /** @param array{'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'packages'?: list<PackageCreateRequestInput|array<array-key, mixed>|\stdClass>, 'return_id'?: string, 'return_line_items'?: list<ReturnShipmentLineItemAllocationRequestInput|array<array-key, mixed>|\stdClass>}|object|array{'direction': string, 'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'packages'?: list<PackageCreateRequestInput|array<array-key, mixed>|\stdClass>, 'return_id': string, 'return_line_items': list<ReturnShipmentLineItemAllocationRequestInput|array<array-key, mixed>|\stdClass>}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateShipmentRequestInput')); }
    /** Value enum: "outbound", "return".
     * @return string
     * @throws SdkError When direction is omitted; use hasDirection() or valueOrDefault().
     */
    public function getDirection(): string { return $this->get('direction'); }
    public function hasDirection(): bool { return $this->has('direction'); }
    /** Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Name of the external system that external_reference_id belongs to. External references are not unique. Use Idempotency-Key for retries. minLength: 1.
     * @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Creates packages atomically with an outbound shipment. Items are optional per package. Created packages are included in the response. minItems: 1. maxItems: 20. [] (Value): {@see PackageCreateRequestInput}. The request body for: Create package.
     * @return list<PackageCreateRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When packages is omitted; use hasPackages() or valueOrDefault().
     */
    public function getPackages(): array { return $this->get('packages'); }
    public function hasPackages(): bool { return $this->has('packages'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When return_id is omitted; use hasReturnId() or valueOrDefault().
     */
    public function getReturnId(): string { return $this->get('return_id'); }
    public function hasReturnId(): bool { return $this->has('return_id'); }
    /** minItems: 1. [] (Value): {@see ReturnShipmentLineItemAllocationRequestInput}. A return line and the quantity placed in a return shipment or package.
     * @return list<ReturnShipmentLineItemAllocationRequestInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When return_line_items is omitted; use hasReturnLineItems() or valueOrDefault().
     */
    public function getReturnLineItems(): array { return $this->get('return_line_items'); }
    public function hasReturnLineItems(): bool { return $this->has('return_line_items'); }
}

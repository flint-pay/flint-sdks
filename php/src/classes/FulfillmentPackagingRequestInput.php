<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $external_reference_id
 * @property-read string $external_system
 * @property-read array<array-key, string>|\stdClass $metadata
 * @property-read SinglePackageCreateRequestInput|array<array-key, mixed>|\stdClass $package
 * @property-read string $packaging
 * Presence-aware input; omitted fields throw when accessed. */
final class FulfillmentPackagingRequestInput extends Model {
    /** @param array{'external_reference_id'?: string, 'external_system'?: string, 'metadata'?: array<array-key, string>|\stdClass, 'package': SinglePackageCreateRequestInput|array<array-key, mixed>|\stdClass, 'packaging': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('FulfillmentPackagingRequestInput')); }
    /** Shape $ (Value): string. Caller-owned identifier for this resource in an external system. Requires external_system. External references are not unique. Use Idempotency-Key for retries. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When external_reference_id is omitted; use hasExternalReferenceId() or valueOrDefault().
     */
    public function getExternalReferenceId(): string { return $this->get('external_reference_id'); }
    public function hasExternalReferenceId(): bool { return $this->has('external_reference_id'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When external_system is omitted; use hasExternalSystem() or valueOrDefault().
     */
    public function getExternalSystem(): string { return $this->get('external_system'); }
    public function hasExternalSystem(): bool { return $this->has('external_system'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string. minLength: 1.
     * @return array<array-key, string>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): {@see SinglePackageCreateRequestInput}. The single package created with a shipment fulfillment. It receives the submitted fulfillment line quantities. Set status to created or shipped; items and return_line_items are not accepted.
     * @return SinglePackageCreateRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When package is omitted; use hasPackage() or valueOrDefault().
     */
    public function getPackage(): mixed { return $this->get('package'); }
    public function hasPackage(): bool { return $this->has('package'); }
    /** Shape $ (Value): string.  Value enum: "single_package".
     * @return string
     * @throws SdkError When packaging is omitted; use hasPackaging() or valueOrDefault().
     */
    public function getPackaging(): string { return $this->get('packaging'); }
    public function hasPackaging(): bool { return $this->has('packaging'); }
}

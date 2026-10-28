<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $hardware_fingerprint
 * @property-read string $location_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateDeviceRequestInput extends Model {
    /** @param array{'hardware_fingerprint'?: string, 'location_id'?: string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateDeviceRequestInput')); }
    /** Shape $ (Value): string. Stable hardware identity. Must have no leading or trailing whitespace and is compared exactly, including case and accents. Only one active device in this merchant and environment can hold it. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When hardware_fingerprint is omitted; use hasHardwareFingerprint() or valueOrDefault().
     */
    public function getHardwareFingerprint(): string { return $this->get('hardware_fingerprint'); }
    public function hasHardwareFingerprint(): bool { return $this->has('hardware_fingerprint'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): {@see MetadataRequestInput}. Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. minLength: 1.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
}

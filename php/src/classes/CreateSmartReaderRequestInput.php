<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $device_id
 * @property-read string $location_id
 * @property-read MetadataRequestInput|array<array-key, mixed>|\stdClass $metadata
 * @property-read string $name
 * @property-read string $registration_code
 * @property-read string $type
 * Presence-aware input; omitted fields throw when accessed. */
final class CreateSmartReaderRequestInput extends Model {
    /** @param array{'device_id'?: string, 'location_id': string, 'metadata'?: MetadataRequestInput|array<array-key, mixed>|\stdClass, 'name': string, 'registration_code': string, 'type': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CreateSmartReaderRequestInput')); }
    /** The register, kiosk or phone the reader takes payments for. Needs `accounts.devices.read` as well. When the device has a location, it must be the reader's. A device holds at most one active Tap to Pay reader. minLength: 1. Example: "dev_01KEZF7C0051ZP8MZSGHP989F6".
     * @return string
     * @throws SdkError When device_id is omitted; use hasDeviceId() or valueOrDefault().
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** An active location with a complete US address (`line1`, `city`, `state`, `postal_code`, `country: US`). Stripe requires every reader to have one. minLength: 1. Example: "loc_01KEZF7C00CMHRRYA3MV996JB2".
     * @return string
     * @throws SdkError When location_id is omitted; use hasLocationId() or valueOrDefault().
     */
    public function getLocationId(): string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Caller-owned metadata. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Caller-owned key-value data for a new or replaced map. Omit it for no metadata. Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. maxProperties: 50.
     * @return MetadataRequestInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Your label for the reader. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The pairing code the reader shows under Settings. In a sandbox, `simulated-s700` registers a simulated Stripe Reader S700. Never returned. A code works once, so send an `Idempotency-Key` and retry with it. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When registration_code is omitted; use hasRegistrationCode() or valueOrDefault().
     */
    public function getRegistrationCode(): string { return $this->get('registration_code'); }
    public function hasRegistrationCode(): bool { return $this->has('registration_code'); }
    /** `smart_reader`. Value enum: "smart_reader".
     * @return string
     * @throws SdkError When type is omitted; use hasType() or valueOrDefault().
     */
    public function getType(): string { return $this->get('type'); }
    public function hasType(): bool { return $this->has('type'); }
}

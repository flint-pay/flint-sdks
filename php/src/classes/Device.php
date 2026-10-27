<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read string $device_id
 * @property-read ?string $hardware_fingerprint
 * @property-read ?string $location_id
 * @property-read ?string $merchant_id
 * @property-read ?array<array-key, string> $metadata
 * @property-read string $name
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class Device extends Model {
    /** @param array{'created_at'?: string, 'device_id': string, 'hardware_fingerprint'?: string, 'location_id'?: string, 'merchant_id'?: string, 'metadata'?: \stdClass, 'name': string, 'status': string, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('Device')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getDeviceId(): string { return $this->get('device_id'); }
    public function hasDeviceId(): bool { return $this->has('device_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getHardwareFingerprint(): ?string { return $this->get('hardware_fingerprint'); }
    public function hasHardwareFingerprint(): bool { return $this->has('hardware_fingerprint'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getLocationId(): ?string { return $this->get('location_id'); }
    public function hasLocationId(): bool { return $this->has('location_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getMerchantId(): ?string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): Map of string. Shape $.* (Value): string.
     * @return ?array<array-key, string>
     */
    public function getMetadata(): ?array { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.  Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Persisted device configuration version. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

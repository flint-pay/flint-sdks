<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read int|null $low_stock_threshold
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $name
 * @property-read bool $public_validation_enabled
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdateLicenseKeyPoolRequestInput extends Model {
    /** @param array{'expected_version'?: int, 'low_stock_threshold'?: int|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'name'?: string, 'public_validation_enabled'?: bool}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdateLicenseKeyPoolRequestInput')); }
    /** Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Available quantity at or below which the pool is low on stock. Null when no threshold is set. Format: int64. minimum: 1. maximum: 9007199254740991.
     * @return int|null
     * @throws SdkError When low_stock_threshold is omitted; use hasLowStockThreshold() or valueOrDefault().
     */
    public function getLowStockThreshold(): int|null { return $this->get('low_stock_threshold'); }
    public function hasLowStockThreshold(): bool { return $this->has('low_stock_threshold'); }
    /** Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** The name of the pool. Surrounding whitespace is trimmed before length validation. A supplied value cannot be blank; use null where clearing is supported. minLength: 1. maxLength: 255.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Whether the pool permits validation without a credential. All keys that have not been removed must have at least 16 characters.
     * @return bool
     * @throws SdkError When public_validation_enabled is omitted; use hasPublicValidationEnabled() or valueOrDefault().
     */
    public function getPublicValidationEnabled(): bool { return $this->get('public_validation_enabled'); }
    public function hasPublicValidationEnabled(): bool { return $this->has('public_validation_enabled'); }
}

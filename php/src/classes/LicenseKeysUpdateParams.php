<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $activation_limit
 * @property-read int $expected_version
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeysUpdateParams extends Model {
    /** @param mixed $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeysUpdateParams')); }
    /** Maximum active installations. Send null to clear the limit. Format: int32. minimum: 1. maximum: 10000.
     * @return int|null
     * @throws SdkError When activation_limit is omitted; use hasActivationLimit() or valueOrDefault().
     */
    public function getActivationLimit(): int|null { return $this->get('activation_limit'); }
    public function hasActivationLimit(): bool { return $this->has('activation_limit'); }
    /** Optional expected version of this resource. A stale value returns 409 VERSION_CONFLICT with the current version. Retrieve the resource and rebuild the request before retrying. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Expiry for an assigned order key. Send null to clear it. Format: date-time. minLength: 1. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Merchant-defined key-value patch. Send null to clear all merchant metadata. anyOf[1] (Value): {@see MetadataPatchRequestInput}. Changes to a caller-owned metadata map. Omit the field to leave metadata unchanged. Each key sets a value, a null value deletes the key, and an empty object makes no change; send null for the whole field to clear all caller-owned metadata. The resulting map is limited the same way as MetadataInput: Up to 50 key-value pairs. Keys are 1 to 256 Unicode code points, values are 1 to 4096 Unicode code points, and keys plus values total at most 32768 UTF-8 bytes. Deleting a key that does not exist is allowed, so the number of operations is not itself the stored-map limit. Values can't be empty strings, and keys starting with flint_ are reserved for Flint. anyOf[2] (Value): null.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): mixed { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
}

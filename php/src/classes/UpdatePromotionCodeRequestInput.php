<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $expected_version
 * @property-read string|\DateTimeInterface|null $expires_at
 * @property-read string|null $max_uses
 * @property-read array<array-key, string|null>|\stdClass|null $metadata
 * @property-read string $status
 * @property-read string|null $timezone
 * Presence-aware input; omitted fields throw when accessed. */
final class UpdatePromotionCodeRequestInput extends Model {
    /** @param array{'expected_version'?: string, 'expires_at'?: string|\DateTimeInterface|null, 'max_uses'?: string|null, 'metadata'?: array<array-key, string|null>|\stdClass|null, 'status'?: string, 'timezone'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('UpdatePromotionCodeRequestInput')); }
    /** Shape $ (Value): integer string. Promotion code version last read by the caller. Optional for updates. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): string { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** Shape $ (Value): string or null. Absolute RFC3339 expiry timestamp. Omission keeps the stored value; null clears it. Format: date-time. minLength: 1.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): integer string or null. Maximum number of times this code can be redeemed. Send null to remove the redemption limit. Use an integer string (decimal digits), not a floating-point number. Format: int64.
     * @return string|null
     * @throws SdkError When max_uses is omitted; use hasMaxUses() or valueOrDefault().
     */
    public function getMaxUses(): string|null { return $this->get('max_uses'); }
    public function hasMaxUses(): bool { return $this->has('max_uses'); }
    /** Shape $ (Value): Map of (string or null) or null. Caller-owned metadata. Omit this field to leave metadata unchanged. Send an object to merge by key, set a key to null to remove it, or set metadata to null to clear all caller-owned metadata. An empty object makes no change. Values can't be empty strings. Keys starting with flint_ are reserved for Flint, are not returned, and cannot be written through the public API. Shape $.* (Value): string or null. minLength: 1.
     * @return array<array-key, string|null>|\stdClass|null
     * @throws SdkError When metadata is omitted; use hasMetadata() or valueOrDefault().
     */
    public function getMetadata(): array|object|null { return $this->get('metadata'); }
    public function hasMetadata(): bool { return $this->has('metadata'); }
    /** Shape $ (Value): string. Lifecycle status: active or inactive. Value enum: "active", "inactive".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string or null. IANA zone the code's times were entered in, used for display. expires_at is an absolute timestamp, so this does not change when the code expires. Send null to clear it. minLength: 1. maxLength: 255.
     * @return string|null
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string|null { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
}

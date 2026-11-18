<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $activation_limit
 * @property-read ?int $active_activation_count
 * @property-read string|null $expires_at
 * @property-read ?string $invalid_reason
 * @property-read bool $is_valid
 * @property-read ?LicenseKeyActivation $license_key_activation
 * @property-read ?string $license_key_id
 * @property-read ?string $product_id
 * @property-read ?string $status
 * @property-read ?string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyValidation extends Model {
    /** @param array{'activation_limit'?: int|null, 'active_activation_count'?: int, 'expires_at'?: string|null, 'invalid_reason'?: string, 'is_valid': bool, 'license_key_activation'?: mixed, 'license_key_id'?: string, 'product_id'?: string, 'status'?: string, 'variant_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyValidation')); }
    /** Maximum active installations for the matched key. Null when unlimited. Omitted when no key matches. Format: int32.
     * @return int|null
     */
    public function getActivationLimit(): int|null { return $this->get('activation_limit'); }
    public function hasActivationLimit(): bool { return $this->has('activation_limit'); }
    /** The number of active installations for the matched key, when found. Format: int32.
     * @return ?int
     */
    public function getActiveActivationCount(): ?int { return $this->get('active_activation_count'); }
    public function hasActiveActivationCount(): bool { return $this->has('active_activation_count'); }
    /** The expiry of the matched key. Null when the key has no expiry. Omitted when no key matches. Format: date-time.
     * @return string|null
     */
    public function getExpiresAt(): string|null { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Why the key or activation could not be used. Value enum: "not_found", "disabled", "expired", "activation_not_found".
     * @return ?string
     */
    public function getInvalidReason(): ?string { return $this->get('invalid_reason'); }
    public function hasInvalidReason(): bool { return $this->has('invalid_reason'); }
    /** Whether the key and any supplied activation are active.
     * @return bool
     */
    public function getIsValid(): bool { return $this->get('is_valid'); }
    public function hasIsValid(): bool { return $this->has('is_valid'); }
    /** The active installation when the request supplied its ID and it belongs to this key. A top-level child of a license key representing an installation.
     * @return ?LicenseKeyActivation
     */
    public function getLicenseKeyActivation(): ?LicenseKeyActivation { return $this->get('license_key_activation'); }
    public function hasLicenseKeyActivation(): bool { return $this->has('license_key_activation'); }
    /** The matched license key ID, when found.
     * @return ?string
     */
    public function getLicenseKeyId(): ?string { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The listed product that the key belongs to, when found.
     * @return ?string
     */
    public function getProductId(): ?string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** The effective status of the matched key, when found. Value enum: "pending", "active", "disabled", "expired".
     * @return ?string
     */
    public function getStatus(): ?string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** The variant that the key belongs to, when found.
     * @return ?string
     */
    public function getVariantId(): ?string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}

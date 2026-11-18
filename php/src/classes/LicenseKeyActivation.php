<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string|null $fingerprint
 * @property-read string|null $last_validated_at
 * @property-read string $license_key_activation_id
 * @property-read string $license_key_id
 * @property-read string|null $name
 * @property-read string $product_id
 * @property-read string|null $released_at
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyActivation extends Model {
    /** @param array{'created_at': string, 'fingerprint': string|null, 'last_validated_at': string|null, 'license_key_activation_id': string, 'license_key_id': string, 'name': string|null, 'product_id': string, 'released_at': string|null, 'status': string, 'supported_actions': list<string>, 'variant_id': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyActivation')); }
    /** When the activation was created. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The identifier supplied by the app. Null when absent or erased.
     * @return string|null
     */
    public function getFingerprint(): string|null { return $this->get('fingerprint'); }
    public function hasFingerprint(): bool { return $this->has('fingerprint'); }
    /** When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: date-time.
     * @return string|null
     */
    public function getLastValidatedAt(): string|null { return $this->get('last_validated_at'); }
    public function hasLastValidatedAt(): bool { return $this->has('last_validated_at'); }
    /** The activation ID.
     * @return string
     */
    public function getLicenseKeyActivationId(): string { return $this->get('license_key_activation_id'); }
    public function hasLicenseKeyActivationId(): bool { return $this->has('license_key_activation_id'); }
    /** The activated license key ID.
     * @return string
     */
    public function getLicenseKeyId(): string { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The name supplied by the app. Null when erased.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The product this installation can use.
     * @return string
     */
    public function getProductId(): string { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** When the activation was released. Null when it is active. Format: date-time.
     * @return string|null
     */
    public function getReleasedAt(): string|null { return $this->get('released_at'); }
    public function hasReleasedAt(): bool { return $this->has('released_at'); }
    /** The activation state. Value enum: "active", "released".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions available for this activation. [] enum: "release". [] (Value): string.  Value enum: "release".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** The variant this installation can use.
     * @return string
     */
    public function getVariantId(): string { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}

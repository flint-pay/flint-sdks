<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $fingerprint
 * @property-read string|null $last_validated_at
 * @property-read string|null $license_key_activation_id
 * @property-read string|null $license_key_id
 * @property-read string|null $name
 * @property-read string|null $product_id
 * @property-read string|null $released_at
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $variant_id
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'fingerprint'?: mixed, 'last_validated_at'?: mixed, 'license_key_activation_id'?: mixed, 'license_key_id'?: mixed, 'name'?: mixed, 'product_id'?: mixed, 'released_at'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'variant_id'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyActivationReleasedMerchantEventDataPreviousAttributes')); }
    /** When the activation was created. anyOf[1] (Value): string. When the activation was created. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The identifier supplied by the app. Null when absent or erased. anyOf[1] (Value): string. The identifier supplied by the app. Null when absent or erased. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getFingerprint(): string|null { return $this->get('fingerprint'); }
    public function hasFingerprint(): bool { return $this->has('fingerprint'); }
    /** When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. anyOf[1] (Value): string. When the activation was last checked, updated at most once an hour. Null when the activation has never been checked. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLastValidatedAt(): string|null { return $this->get('last_validated_at'); }
    public function hasLastValidatedAt(): bool { return $this->has('last_validated_at'); }
    /** The activation ID. anyOf[1] (Value): string. The activation ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLicenseKeyActivationId(): string|null { return $this->get('license_key_activation_id'); }
    public function hasLicenseKeyActivationId(): bool { return $this->has('license_key_activation_id'); }
    /** The activated license key ID. anyOf[1] (Value): string. The activated license key ID. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getLicenseKeyId(): string|null { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The name supplied by the app. Null when erased. anyOf[1] (Value): string. The name supplied by the app. Null when erased. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getName(): string|null { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** The product this installation can use. anyOf[1] (Value): string. The product this installation can use. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductId(): string|null { return $this->get('product_id'); }
    public function hasProductId(): bool { return $this->has('product_id'); }
    /** When the activation was released. Null when it is active. anyOf[1] (Value): string. When the activation was released. Null when it is active. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getReleasedAt(): string|null { return $this->get('released_at'); }
    public function hasReleasedAt(): bool { return $this->has('released_at'); }
    /** The activation state. Value enum: "active", "released". anyOf[1] (Value): string. The activation state. Value enum: "active", "released". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Actions available for this activation. [] enum: "release". anyOf[1] (Value): Array of string. Actions available for this activation. [] enum: "release". anyOf[1][] (Value): string.  Value enum: "release". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** The variant this installation can use. anyOf[1] (Value): string. The variant this installation can use. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getVariantId(): string|null { return $this->get('variant_id'); }
    public function hasVariantId(): bool { return $this->has('variant_id'); }
}

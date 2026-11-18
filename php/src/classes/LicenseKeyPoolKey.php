<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $key_last4
 * @property-read string|null $license_key_id
 * @property-read string $license_key_pool_id
 * @property-read string $license_key_pool_key_id
 * @property-read string $status
 * Presence-aware response; omitted optional fields return null. */
final class LicenseKeyPoolKey extends Model {
    /** @param array{'created_at': string, 'key_last4': string, 'license_key_id': string|null, 'license_key_pool_id': string, 'license_key_pool_key_id': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolKey')); }
    /** When the key was uploaded. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Last four characters of the uploaded key.
     * @return string
     */
    public function getKeyLast4(): string { return $this->get('key_last4'); }
    public function hasKeyLast4(): bool { return $this->has('key_last4'); }
    /** The assigned license ID. Null when the key has not been issued.
     * @return string|null
     */
    public function getLicenseKeyId(): string|null { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$.
     * @return string
     */
    public function getLicenseKeyPoolId(): string { return $this->get('license_key_pool_id'); }
    public function hasLicenseKeyPoolId(): bool { return $this->has('license_key_pool_id'); }
    /** The pool key ID. pattern: ^lkpk_[0-7][0-9A-HJKMNP-TV-Z]{25}$.
     * @return string
     */
    public function getLicenseKeyPoolKeyId(): string { return $this->get('license_key_pool_key_id'); }
    public function hasLicenseKeyPoolKeyId(): bool { return $this->has('license_key_pool_key_id'); }
    /** The disposition of the key. Value enum: "available", "held", "issued", "removed".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $key_last4
 * @property-read string|null $license_key_id
 * @property-read string $license_key_pool_id
 * @property-read string $license_key_pool_key_id
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeyPoolKeyInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'key_last4': string, 'license_key_id': string|null, 'license_key_pool_id': string, 'license_key_pool_key_id': string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyPoolKeyInput')); }
    /** When the key was uploaded. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Last four characters of the uploaded key.
     * @return string
     * @throws SdkError When key_last4 is omitted; use hasKeyLast4() or valueOrDefault().
     */
    public function getKeyLast4(): string { return $this->get('key_last4'); }
    public function hasKeyLast4(): bool { return $this->has('key_last4'); }
    /** The assigned license ID. Null when the key has not been issued. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * @return string|null
     * @throws SdkError When license_key_id is omitted; use hasLicenseKeyId() or valueOrDefault().
     */
    public function getLicenseKeyId(): string|null { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The license key pool ID. pattern: ^lkp_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkp_01KEZF7C00AQV1X2DPWG2NXS7H".
     * @return string
     * @throws SdkError When license_key_pool_id is omitted; use hasLicenseKeyPoolId() or valueOrDefault().
     */
    public function getLicenseKeyPoolId(): string { return $this->get('license_key_pool_id'); }
    public function hasLicenseKeyPoolId(): bool { return $this->has('license_key_pool_id'); }
    /** The pool key ID. pattern: ^lkpk_[0-7][0-9A-HJKMNP-TV-Z]{25}$. Example: "lkpk_01KEZF7C004XWT0EAW2ZQGG93S".
     * @return string
     * @throws SdkError When license_key_pool_key_id is omitted; use hasLicenseKeyPoolKeyId() or valueOrDefault().
     */
    public function getLicenseKeyPoolKeyId(): string { return $this->get('license_key_pool_key_id'); }
    public function hasLicenseKeyPoolKeyId(): bool { return $this->has('license_key_pool_key_id'); }
    /** The disposition of the key. Value enum: "available", "held", "issued", "removed".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $license_key_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeResendLicenseKeyInput extends Model {
    /** @param array{'license_key_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeResendLicenseKeyInput')); }
    /** The license key ID. Must be a valid ID with prefix lk_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * @return string
     * @throws SdkError When license_key_id is omitted; use hasLicenseKeyId() or valueOrDefault().
     */
    public function getLicenseKeyId(): string { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
}

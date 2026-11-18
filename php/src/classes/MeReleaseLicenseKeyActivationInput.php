<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $license_key_activation_id
 * Presence-aware input; omitted fields throw when accessed. */
final class MeReleaseLicenseKeyActivationInput extends Model {
    /** @param array{'license_key_activation_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MeReleaseLicenseKeyActivationInput')); }
    /** The activation ID. Must be a valid ID with prefix lka_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ".
     * @return string
     * @throws SdkError When license_key_activation_id is omitted; use hasLicenseKeyActivationId() or valueOrDefault().
     */
    public function getLicenseKeyActivationId(): string { return $this->get('license_key_activation_id'); }
    public function hasLicenseKeyActivationId(): bool { return $this->has('license_key_activation_id'); }
}

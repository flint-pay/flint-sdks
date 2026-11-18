<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $license_key_id
 * @property-read mixed $body
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeysUpdateInput extends Model {
    /** @param array{'license_key_id': string, 'body': mixed}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeysUpdateInput')); }
    /** The license key ID. Must be a valid ID with prefix lk_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * @return string
     * @throws SdkError When license_key_id is omitted; use hasLicenseKeyId() or valueOrDefault().
     */
    public function getLicenseKeyId(): string { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The request body for: Update a license key. Example: {"activation_limit":5,"expected_version":1}.
     * @return mixed
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): mixed { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}

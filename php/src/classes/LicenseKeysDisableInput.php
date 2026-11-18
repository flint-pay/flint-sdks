<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $license_key_id
 * @property-read array{'expected_version'?: int, 'reason'?: string}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeysDisableInput extends Model {
    /** @param array{'license_key_id': string, 'body'?: array{'expected_version'?: int, 'reason'?: string}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeysDisableInput')); }
    /** The license key ID. Must be a valid ID with prefix lk_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "lk_01KEZF7C000QD7VJ83G43V0NSN".
     * @return string
     * @throws SdkError When license_key_id is omitted; use hasLicenseKeyId() or valueOrDefault().
     */
    public function getLicenseKeyId(): string { return $this->get('license_key_id'); }
    public function hasLicenseKeyId(): bool { return $this->has('license_key_id'); }
    /** The request body for: Disable a license key. Example: {"expected_version":1,"reason":"suspected_abuse"}.
     * @return array{'expected_version'?: int, 'reason'?: string}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}

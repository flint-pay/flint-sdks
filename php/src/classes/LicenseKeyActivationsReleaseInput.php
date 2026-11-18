<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $license_key_activation_id
 * @property-read array{'key'?: string, 'product_ids'?: list<string>}|object $body
 * Presence-aware input; omitted fields throw when accessed. */
final class LicenseKeyActivationsReleaseInput extends Model {
    /** @param array{'license_key_activation_id': string, 'body'?: array{'key'?: string, 'product_ids'?: list<string>}|object}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('LicenseKeyActivationsReleaseInput')); }
    /** The activation to release. Must be a valid ID with prefix lka_. Malformed IDs return 400 INVALID_REQUEST with detail INVALID_VALUE; well-formed IDs that do not exist return 404 RESOURCE_NOT_FOUND. Example: "lka_01KEZF7C00NZEZVCZW3SRDMHTZ".
     * @return string
     * @throws SdkError When license_key_activation_id is omitted; use hasLicenseKeyActivationId() or valueOrDefault().
     */
    public function getLicenseKeyActivationId(): string { return $this->get('license_key_activation_id'); }
    public function hasLicenseKeyActivationId(): bool { return $this->has('license_key_activation_id'); }
    /** The request body for: Release a license key activation. Example: {}.
     * @return array{'key'?: string, 'product_ids'?: list<string>}|object
     * @throws SdkError When body is omitted; use hasBody() or valueOrDefault().
     */
    public function getBody(): array|object { return $this->get('body'); }
    public function hasBody(): bool { return $this->has('body'); }
}

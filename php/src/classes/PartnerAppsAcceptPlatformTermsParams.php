<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $expected_version
 * @property-read string $platform_terms_version
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppsAcceptPlatformTermsParams extends Model {
    /** @param array{'expected_version'?: int, 'platform_terms_version': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppsAcceptPlatformTermsParams')); }
    /** Accept only if this matches the app's current version. A mismatch returns HTTP 409 VERSION_CONFLICT. Format: uint64. minimum: 1.
     * @return int
     * @throws SdkError When expected_version is omitted; use hasExpectedVersion() or valueOrDefault().
     */
    public function getExpectedVersion(): int { return $this->get('expected_version'); }
    public function hasExpectedVersion(): bool { return $this->has('expected_version'); }
    /** The platform terms version you accept. It must be the current version; any other value returns 400 INVALID_REQUEST with detail INVALID_VALUE. The current version is 2026-11-01. minLength: 1.
     * @return string
     * @throws SdkError When platform_terms_version is omitted; use hasPlatformTermsVersion() or valueOrDefault().
     */
    public function getPlatformTermsVersion(): string { return $this->get('platform_terms_version'); }
    public function hasPlatformTermsVersion(): bool { return $this->has('platform_terms_version'); }
}

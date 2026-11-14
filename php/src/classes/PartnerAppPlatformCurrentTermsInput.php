<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $acceptance_due_at
 * @property-read string $platform_terms_version
 * @property-read string|null $url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformCurrentTermsInput extends Model {
    /** @param array{'acceptance_due_at'?: string|\DateTimeInterface, 'platform_terms_version': string, 'url': string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformCurrentTermsInput')); }
    /** When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When acceptance_due_at is omitted; use hasAcceptanceDueAt() or valueOrDefault().
     */
    public function getAcceptanceDueAt(): string|\DateTimeInterface { return $this->get('acceptance_due_at'); }
    public function hasAcceptanceDueAt(): bool { return $this->has('acceptance_due_at'); }
    /** The current platform terms version. Send it as platform_terms_version to accept-platform-terms.
     * @return string
     * @throws SdkError When platform_terms_version is omitted; use hasPlatformTermsVersion() or valueOrDefault().
     */
    public function getPlatformTermsVersion(): string { return $this->get('platform_terms_version'); }
    public function hasPlatformTermsVersion(): bool { return $this->has('platform_terms_version'); }
    /** Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. Format: uri. Example: "https://example.com/receipt".
     * @return string|null
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): string|null { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}

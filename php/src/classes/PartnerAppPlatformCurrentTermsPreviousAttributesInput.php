<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $acceptance_due_at
 * @property-read string|null $platform_terms_version
 * @property-read string|null|null $url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformCurrentTermsPreviousAttributesInput extends Model {
    /** @param array{'acceptance_due_at'?: string|\DateTimeInterface|null, 'platform_terms_version'?: string|null, 'url'?: string|null|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformCurrentTermsPreviousAttributesInput')); }
    /** When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. anyOf[1] (Value): string. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When acceptance_due_at is omitted; use hasAcceptanceDueAt() or valueOrDefault().
     */
    public function getAcceptanceDueAt(): mixed { return $this->get('acceptance_due_at'); }
    public function hasAcceptanceDueAt(): bool { return $this->has('acceptance_due_at'); }
    /** The current platform terms version. Send it as platform_terms_version to accept-platform-terms. anyOf[1] (Value): string. The current platform terms version. Send it as platform_terms_version to accept-platform-terms. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When platform_terms_version is omitted; use hasPlatformTermsVersion() or valueOrDefault().
     */
    public function getPlatformTermsVersion(): mixed { return $this->get('platform_terms_version'); }
    public function hasPlatformTermsVersion(): bool { return $this->has('platform_terms_version'); }
    /** Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. anyOf[1] (Value): string or null. Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. Format: uri. Example: "https://example.com/receipt". anyOf[2] (Value): null.
     * @return string|null|null
     * @throws SdkError When url is omitted; use hasUrl() or valueOrDefault().
     */
    public function getUrl(): mixed { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}

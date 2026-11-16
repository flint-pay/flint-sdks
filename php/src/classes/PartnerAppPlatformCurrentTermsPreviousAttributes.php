<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $acceptance_due_at
 * @property-read string|null $platform_terms_version
 * @property-read string|null $url
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformCurrentTermsPreviousAttributes extends Model {
    /** @param array{'acceptance_due_at'?: mixed, 'platform_terms_version'?: mixed, 'url'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformCurrentTermsPreviousAttributes')); }
    /** When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. anyOf[1] (Value): string. When accepting this version becomes required. Until then an earlier accepted version keeps the platform_terms requirement met; from then the app needs this one. Absent when this version is already required. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAcceptanceDueAt(): string|null { return $this->get('acceptance_due_at'); }
    public function hasAcceptanceDueAt(): bool { return $this->has('acceptance_due_at'); }
    /** The current platform terms version. Send it as platform_terms_version to accept-platform-terms. anyOf[1] (Value): string. The current platform terms version. Send it as platform_terms_version to accept-platform-terms. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPlatformTermsVersion(): string|null { return $this->get('platform_terms_version'); }
    public function hasPlatformTermsVersion(): bool { return $this->has('platform_terms_version'); }
    /** Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. anyOf[1] (Value): string. Where Flint publishes this version's text: the Flint Platform Agreement. `null` when the version has no published text. Format: uri. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUrl(): string|null { return $this->get('url'); }
    public function hasUrl(): bool { return $this->has('url'); }
}

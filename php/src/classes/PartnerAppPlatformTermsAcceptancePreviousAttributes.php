<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $accepted_at
 * @property-read ResourceReferencePreviousAttributes|null $accepted_by
 * @property-read string|null $platform_terms_version
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformTermsAcceptancePreviousAttributes extends Model {
    /** @param array{'accepted_at'?: mixed, 'accepted_by'?: mixed, 'platform_terms_version'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformTermsAcceptancePreviousAttributes')); }
    /** When Flint recorded the acceptance. anyOf[1] (Value): string. When Flint recorded the acceptance. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getAcceptedAt(): string|null { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** The credential that accepted: a user for a Dashboard session, or an api_key. anyOf[1] (Value): {@see ResourceReferencePreviousAttributes}. anyOf[2] (Value): null.
     * @return ResourceReferencePreviousAttributes|null
     */
    public function getAcceptedBy(): ResourceReferencePreviousAttributes|null { return $this->get('accepted_by'); }
    public function hasAcceptedBy(): bool { return $this->has('accepted_by'); }
    /** The platform terms version accepted. anyOf[1] (Value): string. The platform terms version accepted. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPlatformTermsVersion(): string|null { return $this->get('platform_terms_version'); }
    public function hasPlatformTermsVersion(): bool { return $this->has('platform_terms_version'); }
}

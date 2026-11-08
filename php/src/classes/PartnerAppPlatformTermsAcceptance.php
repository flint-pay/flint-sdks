<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $accepted_at
 * @property-read ResourceReference $accepted_by
 * @property-read string $platform_terms_version
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformTermsAcceptance extends Model {
    /** @param array{'accepted_at': string, 'accepted_by': mixed, 'platform_terms_version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformTermsAcceptance')); }
    /** When Flint recorded the acceptance. Format: date-time.
     * @return string
     */
    public function getAcceptedAt(): string { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** The credential that accepted: a user for a Dashboard session, or an api_key. A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReference
     */
    public function getAcceptedBy(): ResourceReference { return $this->get('accepted_by'); }
    public function hasAcceptedBy(): bool { return $this->has('accepted_by'); }
    /** The platform terms version accepted.
     * @return string
     */
    public function getPlatformTermsVersion(): string { return $this->get('platform_terms_version'); }
    public function hasPlatformTermsVersion(): bool { return $this->has('platform_terms_version'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $accepted_at
 * @property-read ResourceReferenceInput|array<array-key, mixed>|\stdClass $accepted_by
 * @property-read string $platform_terms_version
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformTermsAcceptanceInput extends Model {
    /** @param array{'accepted_at': string|\DateTimeInterface, 'accepted_by': ResourceReferenceInput|array<array-key, mixed>|\stdClass, 'platform_terms_version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformTermsAcceptanceInput')); }
    /** When Flint recorded the acceptance. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When accepted_at is omitted; use hasAcceptedAt() or valueOrDefault().
     */
    public function getAcceptedAt(): string|\DateTimeInterface { return $this->get('accepted_at'); }
    public function hasAcceptedAt(): bool { return $this->has('accepted_at'); }
    /** The credential that accepted: a user for a Dashboard session, or an api_key. A reference to another resource by `resource_type` and `resource_id`.
     * @return ResourceReferenceInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When accepted_by is omitted; use hasAcceptedBy() or valueOrDefault().
     */
    public function getAcceptedBy(): mixed { return $this->get('accepted_by'); }
    public function hasAcceptedBy(): bool { return $this->has('accepted_by'); }
    /** The platform terms version accepted.
     * @return string
     * @throws SdkError When platform_terms_version is omitted; use hasPlatformTermsVersion() or valueOrDefault().
     */
    public function getPlatformTermsVersion(): string { return $this->get('platform_terms_version'); }
    public function hasPlatformTermsVersion(): bool { return $this->has('platform_terms_version'); }
}

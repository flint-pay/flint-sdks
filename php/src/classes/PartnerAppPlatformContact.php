<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $support_email
 * @property-read ?string $support_phone
 * @property-read string $website_url
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformContact extends Model {
    /** @param array{'support_email': string, 'support_phone'?: string, 'website_url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformContact')); }
    /** Where the platform's merchants get support. Format: email. maxLength: 320.
     * @return string
     */
    public function getSupportEmail(): string { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** Support phone number in E.164 format, such as +14155550123. Optional. pattern: ^\+[1-9][0-9]{1,14}$.
     * @return ?string
     */
    public function getSupportPhone(): ?string { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** The platform's website, as an https URL. Format: uri. maxLength: 2048.
     * @return string
     */
    public function getWebsiteUrl(): string { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}

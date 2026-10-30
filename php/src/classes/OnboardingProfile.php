<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $email
 * @property-read ?string $support_email
 * @property-read ?string $support_phone
 * @property-read ?string $support_url
 * @property-read ?string $website_url
 * Presence-aware response; omitted optional fields return null. */
final class OnboardingProfile extends Model {
    /** @param array{'email': string|null, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'website_url'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingProfile')); }
    /** email
     * @return string|null
     */
    public function getEmail(): string|null { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** support_email
     * @return ?string
     */
    public function getSupportEmail(): ?string { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** support_phone
     * @return ?string
     */
    public function getSupportPhone(): ?string { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** support_url
     * @return ?string
     */
    public function getSupportUrl(): ?string { return $this->get('support_url'); }
    public function hasSupportUrl(): bool { return $this->has('support_url'); }
    /** website_url
     * @return ?string
     */
    public function getWebsiteUrl(): ?string { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $business_name
 * @property-read string $email
 * @property-read string $first_name
 * @property-read string $last_name
 * @property-read string $support_email
 * @property-read string $support_phone
 * @property-read string $support_url
 * @property-read string $timezone
 * @property-read string $website_url
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingStartRequestInput extends Model {
    /** @param array{'business_name'?: string, 'email': string, 'first_name': string, 'last_name': string, 'support_email'?: string, 'support_phone'?: string, 'support_url'?: string, 'timezone'?: string, 'website_url'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingStartRequestInput')); }
    /** Business name buyers see. Applied only when verification creates a merchant; existing merchants keep their profile. Surrounding whitespace is trimmed. minLength: 1. maxLength: 120.
     * @return string
     * @throws SdkError When business_name is omitted; use hasBusinessName() or valueOrDefault().
     */
    public function getBusinessName(): string { return $this->get('business_name'); }
    public function hasBusinessName(): bool { return $this->has('business_name'); }
    /** Email address to verify. Flint emails a verification code to it. minLength: 1.
     * @return string
     * @throws SdkError When email is omitted; use hasEmail() or valueOrDefault().
     */
    public function getEmail(): string { return $this->get('email'); }
    public function hasEmail(): bool { return $this->has('email'); }
    /** First name of the person signing up. minLength: 1.
     * @return string
     * @throws SdkError When first_name is omitted; use hasFirstName() or valueOrDefault().
     */
    public function getFirstName(): string { return $this->get('first_name'); }
    public function hasFirstName(): bool { return $this->has('first_name'); }
    /** Last name of the person signing up. minLength: 1.
     * @return string
     * @throws SdkError When last_name is omitted; use hasLastName() or valueOrDefault().
     */
    public function getLastName(): string { return $this->get('last_name'); }
    public function hasLastName(): bool { return $this->has('last_name'); }
    /** Support email shown to buyers. Applied only to a newly created merchant. minLength: 1.
     * @return string
     * @throws SdkError When support_email is omitted; use hasSupportEmail() or valueOrDefault().
     */
    public function getSupportEmail(): string { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** Support phone shown to buyers, in E.164 format. Applied only to a newly created merchant. minLength: 1. maxLength: 16. pattern: ^\+[1-9][0-9]{6,14}$.
     * @return string
     * @throws SdkError When support_phone is omitted; use hasSupportPhone() or valueOrDefault().
     */
    public function getSupportPhone(): string { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** Support URL shown to buyers. Applied only to a newly created merchant. minLength: 1.
     * @return string
     * @throws SdkError When support_url is omitted; use hasSupportUrl() or valueOrDefault().
     */
    public function getSupportUrl(): string { return $this->get('support_url'); }
    public function hasSupportUrl(): bool { return $this->has('support_url'); }
    /** IANA business time zone for a newly created merchant, such as America/Chicago. Used for reports and business dates. Omit to leave it unset. Existing merchants keep their time zone. minLength: 1.
     * @return string
     * @throws SdkError When timezone is omitted; use hasTimezone() or valueOrDefault().
     */
    public function getTimezone(): string { return $this->get('timezone'); }
    public function hasTimezone(): bool { return $this->has('timezone'); }
    /** Public business website URL. Applied only to a newly created merchant. minLength: 1.
     * @return string
     * @throws SdkError When website_url is omitted; use hasWebsiteUrl() or valueOrDefault().
     */
    public function getWebsiteUrl(): string { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}

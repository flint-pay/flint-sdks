<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $estimated_merchant_count
 * @property-read MoneyValue $estimated_monthly_volume_money
 * @property-read string $merchant_description
 * @property-read string $merchant_onboarding_description
 * @property-read string $product_description
 * @property-read string $support_email
 * @property-read ?string $support_phone
 * @property-read string $website_url
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformProfile extends Model {
    /** @param array{'estimated_merchant_count': int, 'estimated_monthly_volume_money': mixed, 'merchant_description': string, 'merchant_onboarding_description': string, 'product_description': string, 'support_email': string, 'support_phone'?: string, 'website_url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformProfile')); }
    /** Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: int64. minimum: 1. maximum: 1000000.
     * @return int
     */
    public function getEstimatedMerchantCount(): int { return $this->get('estimated_merchant_count'); }
    public function hasEstimatedMerchantCount(): bool { return $this->has('estimated_merchant_count'); }
    /** Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValue
     */
    public function getEstimatedMonthlyVolumeMoney(): MoneyValue { return $this->get('estimated_monthly_volume_money'); }
    public function hasEstimatedMonthlyVolumeMoney(): bool { return $this->has('estimated_monthly_volume_money'); }
    /** The kinds of merchants the platform serves, in 1 to 500 characters. minLength: 1. maxLength: 500.
     * @return string
     */
    public function getMerchantDescription(): string { return $this->get('merchant_description'); }
    public function hasMerchantDescription(): bool { return $this->has('merchant_description'); }
    /** How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: 1. maxLength: 2000.
     * @return string
     */
    public function getMerchantOnboardingDescription(): string { return $this->get('merchant_onboarding_description'); }
    public function hasMerchantOnboardingDescription(): bool { return $this->has('merchant_onboarding_description'); }
    /** What the platform's product does, in 1 to 1,000 characters. minLength: 1. maxLength: 1000.
     * @return string
     */
    public function getProductDescription(): string { return $this->get('product_description'); }
    public function hasProductDescription(): bool { return $this->has('product_description'); }
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

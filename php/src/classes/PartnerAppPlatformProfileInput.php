<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int $estimated_merchant_count
 * @property-read MoneyValueInput|array<array-key, mixed>|\stdClass $estimated_monthly_volume_money
 * @property-read string $merchant_description
 * @property-read string $merchant_onboarding_description
 * @property-read string $product_description
 * @property-read string $support_email
 * @property-read string $support_phone
 * @property-read string $website_url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformProfileInput extends Model {
    /** @param array{'estimated_merchant_count': int, 'estimated_monthly_volume_money': MoneyValueInput|array<array-key, mixed>|\stdClass, 'merchant_description': string, 'merchant_onboarding_description': string, 'product_description': string, 'support_email': string, 'support_phone'?: string, 'website_url': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformProfileInput')); }
    /** Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: int64. minimum: 1. maximum: 1000000.
     * @return int
     * @throws SdkError When estimated_merchant_count is omitted; use hasEstimatedMerchantCount() or valueOrDefault().
     */
    public function getEstimatedMerchantCount(): int { return $this->get('estimated_merchant_count'); }
    public function hasEstimatedMerchantCount(): bool { return $this->has('estimated_merchant_count'); }
    /** Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. Monetary amount represented as integer minor units plus an ISO 4217 currency code.
     * @return MoneyValueInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When estimated_monthly_volume_money is omitted; use hasEstimatedMonthlyVolumeMoney() or valueOrDefault().
     */
    public function getEstimatedMonthlyVolumeMoney(): mixed { return $this->get('estimated_monthly_volume_money'); }
    public function hasEstimatedMonthlyVolumeMoney(): bool { return $this->has('estimated_monthly_volume_money'); }
    /** The kinds of merchants the platform serves, in 1 to 500 characters. minLength: 1. maxLength: 500.
     * @return string
     * @throws SdkError When merchant_description is omitted; use hasMerchantDescription() or valueOrDefault().
     */
    public function getMerchantDescription(): string { return $this->get('merchant_description'); }
    public function hasMerchantDescription(): bool { return $this->has('merchant_description'); }
    /** How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: 1. maxLength: 2000.
     * @return string
     * @throws SdkError When merchant_onboarding_description is omitted; use hasMerchantOnboardingDescription() or valueOrDefault().
     */
    public function getMerchantOnboardingDescription(): string { return $this->get('merchant_onboarding_description'); }
    public function hasMerchantOnboardingDescription(): bool { return $this->has('merchant_onboarding_description'); }
    /** What the platform's product does, in 1 to 1,000 characters. minLength: 1. maxLength: 1000.
     * @return string
     * @throws SdkError When product_description is omitted; use hasProductDescription() or valueOrDefault().
     */
    public function getProductDescription(): string { return $this->get('product_description'); }
    public function hasProductDescription(): bool { return $this->has('product_description'); }
    /** Where the platform's merchants get support. Format: email. maxLength: 320. Example: "buyer@example.com".
     * @return string
     * @throws SdkError When support_email is omitted; use hasSupportEmail() or valueOrDefault().
     */
    public function getSupportEmail(): string { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** Support phone number in E.164 format, such as +14155550123. Optional. pattern: ^\+[1-9][0-9]{1,14}$.
     * @return string
     * @throws SdkError When support_phone is omitted; use hasSupportPhone() or valueOrDefault().
     */
    public function getSupportPhone(): string { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** The platform's website, as an https URL. Format: uri. maxLength: 2048. Example: "https://example.com/receipt".
     * @return string
     * @throws SdkError When website_url is omitted; use hasWebsiteUrl() or valueOrDefault().
     */
    public function getWebsiteUrl(): string { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}

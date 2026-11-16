<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $estimated_merchant_count
 * @property-read MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null $estimated_monthly_volume_money
 * @property-read string|null $merchant_description
 * @property-read string|null $merchant_onboarding_description
 * @property-read string|null $product_description
 * @property-read string|null $support_email
 * @property-read string|null $support_phone
 * @property-read string|null $website_url
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppPlatformProfilePreviousAttributesInput extends Model {
    /** @param array{'estimated_merchant_count'?: int|null, 'estimated_monthly_volume_money'?: MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'merchant_description'?: string|null, 'merchant_onboarding_description'?: string|null, 'product_description'?: string|null, 'support_email'?: string|null, 'support_phone'?: string|null, 'website_url'?: string|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformProfilePreviousAttributesInput')); }
    /** Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. anyOf[1] (Value): integer. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: int64. minimum: 1. maximum: 1000000. anyOf[2] (Value): null.
     * @return int|null
     * @throws SdkError When estimated_merchant_count is omitted; use hasEstimatedMerchantCount() or valueOrDefault().
     */
    public function getEstimatedMerchantCount(): mixed { return $this->get('estimated_merchant_count'); }
    public function hasEstimatedMerchantCount(): bool { return $this->has('estimated_merchant_count'); }
    /** Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. anyOf[1] (Value): {@see MoneyValuePreviousAttributesInput}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When estimated_monthly_volume_money is omitted; use hasEstimatedMonthlyVolumeMoney() or valueOrDefault().
     */
    public function getEstimatedMonthlyVolumeMoney(): mixed { return $this->get('estimated_monthly_volume_money'); }
    public function hasEstimatedMonthlyVolumeMoney(): bool { return $this->has('estimated_monthly_volume_money'); }
    /** The kinds of merchants the platform serves, in 1 to 500 characters. anyOf[1] (Value): string. The kinds of merchants the platform serves, in 1 to 500 characters. minLength: 1. maxLength: 500. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When merchant_description is omitted; use hasMerchantDescription() or valueOrDefault().
     */
    public function getMerchantDescription(): mixed { return $this->get('merchant_description'); }
    public function hasMerchantDescription(): bool { return $this->has('merchant_description'); }
    /** How the platform onboards and monitors its merchants, in 1 to 2,000 characters. anyOf[1] (Value): string. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: 1. maxLength: 2000. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When merchant_onboarding_description is omitted; use hasMerchantOnboardingDescription() or valueOrDefault().
     */
    public function getMerchantOnboardingDescription(): mixed { return $this->get('merchant_onboarding_description'); }
    public function hasMerchantOnboardingDescription(): bool { return $this->has('merchant_onboarding_description'); }
    /** What the platform's product does, in 1 to 1,000 characters. anyOf[1] (Value): string. What the platform's product does, in 1 to 1,000 characters. minLength: 1. maxLength: 1000. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When product_description is omitted; use hasProductDescription() or valueOrDefault().
     */
    public function getProductDescription(): mixed { return $this->get('product_description'); }
    public function hasProductDescription(): bool { return $this->has('product_description'); }
    /** Where the platform's merchants get support. anyOf[1] (Value): string. Where the platform's merchants get support. Format: email. maxLength: 320. Example: "buyer@example.com". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When support_email is omitted; use hasSupportEmail() or valueOrDefault().
     */
    public function getSupportEmail(): mixed { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** Support phone number in E.164 format, such as +14155550123. Optional. anyOf[1] (Value): string. Support phone number in E.164 format, such as +14155550123. Optional. pattern: ^\+[1-9][0-9]{1,14}$. anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When support_phone is omitted; use hasSupportPhone() or valueOrDefault().
     */
    public function getSupportPhone(): mixed { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** The platform's website, as an https URL. anyOf[1] (Value): string. The platform's website, as an https URL. Format: uri. maxLength: 2048. Example: "https://example.com/receipt". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When website_url is omitted; use hasWebsiteUrl() or valueOrDefault().
     */
    public function getWebsiteUrl(): mixed { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}

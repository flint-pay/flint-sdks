<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read int|null $estimated_merchant_count
 * @property-read MoneyValuePreviousAttributes|null $estimated_monthly_volume_money
 * @property-read string|null $merchant_description
 * @property-read string|null $merchant_onboarding_description
 * @property-read string|null $product_description
 * @property-read string|null $support_email
 * @property-read string|null $support_phone
 * @property-read string|null $website_url
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppPlatformProfilePreviousAttributes extends Model {
    /** @param array{'estimated_merchant_count'?: mixed, 'estimated_monthly_volume_money'?: mixed, 'merchant_description'?: mixed, 'merchant_onboarding_description'?: mixed, 'product_description'?: mixed, 'support_email'?: mixed, 'support_phone'?: mixed, 'website_url'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppPlatformProfilePreviousAttributes')); }
    /** Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. anyOf[1] (Value): integer. Merchants the platform expects to serve on Flint in the next 12 months, from 1 to 1,000,000. Format: int64. minimum: 1. maximum: 1000000. anyOf[2] (Value): null.
     * @return int|null
     */
    public function getEstimatedMerchantCount(): int|null { return $this->get('estimated_merchant_count'); }
    public function hasEstimatedMerchantCount(): bool { return $this->has('estimated_merchant_count'); }
    /** Monthly payment volume the platform expects across those merchants in 12 months. Above zero, in USD. anyOf[1] (Value): {@see MoneyValuePreviousAttributes}. anyOf[2] (Value): null.
     * @return MoneyValuePreviousAttributes|null
     */
    public function getEstimatedMonthlyVolumeMoney(): MoneyValuePreviousAttributes|null { return $this->get('estimated_monthly_volume_money'); }
    public function hasEstimatedMonthlyVolumeMoney(): bool { return $this->has('estimated_monthly_volume_money'); }
    /** The kinds of merchants the platform serves, in 1 to 500 characters. anyOf[1] (Value): string. The kinds of merchants the platform serves, in 1 to 500 characters. minLength: 1. maxLength: 500. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantDescription(): string|null { return $this->get('merchant_description'); }
    public function hasMerchantDescription(): bool { return $this->has('merchant_description'); }
    /** How the platform onboards and monitors its merchants, in 1 to 2,000 characters. anyOf[1] (Value): string. How the platform onboards and monitors its merchants, in 1 to 2,000 characters. minLength: 1. maxLength: 2000. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMerchantOnboardingDescription(): string|null { return $this->get('merchant_onboarding_description'); }
    public function hasMerchantOnboardingDescription(): bool { return $this->has('merchant_onboarding_description'); }
    /** What the platform's product does, in 1 to 1,000 characters. anyOf[1] (Value): string. What the platform's product does, in 1 to 1,000 characters. minLength: 1. maxLength: 1000. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getProductDescription(): string|null { return $this->get('product_description'); }
    public function hasProductDescription(): bool { return $this->has('product_description'); }
    /** Where the platform's merchants get support. anyOf[1] (Value): string. Where the platform's merchants get support. Format: email. maxLength: 320. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSupportEmail(): string|null { return $this->get('support_email'); }
    public function hasSupportEmail(): bool { return $this->has('support_email'); }
    /** Support phone number in E.164 format, such as +14155550123. Optional. anyOf[1] (Value): string. Support phone number in E.164 format, such as +14155550123. Optional. pattern: ^\+[1-9][0-9]{1,14}$. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSupportPhone(): string|null { return $this->get('support_phone'); }
    public function hasSupportPhone(): bool { return $this->has('support_phone'); }
    /** The platform's website, as an https URL. anyOf[1] (Value): string. The platform's website, as an https URL. Format: uri. maxLength: 2048. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getWebsiteUrl(): string|null { return $this->get('website_url'); }
    public function hasWebsiteUrl(): bool { return $this->has('website_url'); }
}

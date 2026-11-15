<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $ip_address
 * @property-read string $merchant_terms_version
 * @property-read string $user_agent
 * Presence-aware input; omitted fields throw when accessed. */
final class MerchantSignupTermsAcceptanceRequestInput extends Model {
    /** @param array{'ip_address': string, 'merchant_terms_version': string, 'user_agent': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('MerchantSignupTermsAcceptanceRequestInput')); }
    /** The owner's browser IP address, IPv4 or IPv6. Request logs redact it. minLength: 2. maxLength: 64.
     * @return string
     * @throws SdkError When ip_address is omitted; use hasIpAddress() or valueOrDefault().
     */
    public function getIpAddress(): string { return $this->get('ip_address'); }
    public function hasIpAddress(): bool { return $this->has('ip_address'); }
    /** Must equal the signup's `merchant_terms.version`. minLength: 1.
     * @return string
     * @throws SdkError When merchant_terms_version is omitted; use hasMerchantTermsVersion() or valueOrDefault().
     */
    public function getMerchantTermsVersion(): string { return $this->get('merchant_terms_version'); }
    public function hasMerchantTermsVersion(): bool { return $this->has('merchant_terms_version'); }
    /** The owner's browser user agent, 1 to 1,024 characters. Request logs redact it. minLength: 1. maxLength: 1024.
     * @return string
     * @throws SdkError When user_agent is omitted; use hasUserAgent() or valueOrDefault().
     */
    public function getUserAgent(): string { return $this->get('user_agent'); }
    public function hasUserAgent(): bool { return $this->has('user_agent'); }
}

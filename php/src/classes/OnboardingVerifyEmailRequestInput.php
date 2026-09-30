<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $merchant_id
 * @property-read string $verification_code
 * @property-read string $verification_token
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingVerifyEmailRequestInput extends Model {
    /** @param array{'merchant_id'?: string, 'verification_code': string, 'verification_token': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingVerifyEmailRequestInput')); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return string
     * @throws SdkError When verification_code is omitted; use hasVerificationCode() or valueOrDefault().
     */
    public function getVerificationCode(): string { return $this->get('verification_code'); }
    public function hasVerificationCode(): bool { return $this->has('verification_code'); }
    /** @return string
     * @throws SdkError When verification_token is omitted; use hasVerificationToken() or valueOrDefault().
     */
    public function getVerificationToken(): string { return $this->get('verification_token'); }
    public function hasVerificationToken(): bool { return $this->has('verification_token'); }
}

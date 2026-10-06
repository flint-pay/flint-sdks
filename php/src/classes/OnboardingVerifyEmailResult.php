<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_issue_api_key
 * @property-read string $default_sandbox_id
 * @property-read Merchant $merchant
 * @property-read bool $merchant_created
 * @property-read OnboardingNextStep $next_step
 * @property-read string $onboarding_session_expires_at
 * @property-read string $onboarding_session_token
 * @property-read User $user
 * Presence-aware response; omitted fields throw when accessed. */
final class OnboardingVerifyEmailResult extends Model {
    /** @param array{'can_issue_api_key': bool, 'default_sandbox_id'?: string, 'merchant': mixed, 'merchant_created': bool, 'next_step'?: mixed, 'onboarding_session_expires_at': string, 'onboarding_session_token': string, 'user': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingVerifyEmailResult')); }
    /** @return bool
     * @throws SdkError When can_issue_api_key is omitted; use hasCanIssueApiKey() or valueOrDefault().
     */
    public function getCanIssueApiKey(): bool { return $this->get('can_issue_api_key'); }
    public function hasCanIssueApiKey(): bool { return $this->has('can_issue_api_key'); }
    /** @return string
     * @throws SdkError When default_sandbox_id is omitted; use hasDefaultSandboxId() or valueOrDefault().
     */
    public function getDefaultSandboxId(): string { return $this->get('default_sandbox_id'); }
    public function hasDefaultSandboxId(): bool { return $this->has('default_sandbox_id'); }
    /** @return Merchant
     * @throws SdkError When merchant is omitted; use hasMerchant() or valueOrDefault().
     */
    public function getMerchant(): Merchant { return $this->get('merchant'); }
    public function hasMerchant(): bool { return $this->has('merchant'); }
    /** @return bool
     * @throws SdkError When merchant_created is omitted; use hasMerchantCreated() or valueOrDefault().
     */
    public function getMerchantCreated(): bool { return $this->get('merchant_created'); }
    public function hasMerchantCreated(): bool { return $this->has('merchant_created'); }
    /** @return OnboardingNextStep
     * @throws SdkError When next_step is omitted; use hasNextStep() or valueOrDefault().
     */
    public function getNextStep(): OnboardingNextStep { return $this->get('next_step'); }
    public function hasNextStep(): bool { return $this->has('next_step'); }
    /** @return string
     * @throws SdkError When onboarding_session_expires_at is omitted; use hasOnboardingSessionExpiresAt() or valueOrDefault().
     */
    public function getOnboardingSessionExpiresAt(): string { return $this->get('onboarding_session_expires_at'); }
    public function hasOnboardingSessionExpiresAt(): bool { return $this->has('onboarding_session_expires_at'); }
    /** @return string
     * @throws SdkError When onboarding_session_token is omitted; use hasOnboardingSessionToken() or valueOrDefault().
     */
    public function getOnboardingSessionToken(): string { return $this->get('onboarding_session_token'); }
    public function hasOnboardingSessionToken(): bool { return $this->has('onboarding_session_token'); }
    /** @return User
     * @throws SdkError When user is omitted; use hasUser() or valueOrDefault().
     */
    public function getUser(): User { return $this->get('user'); }
    public function hasUser(): bool { return $this->has('user'); }
}

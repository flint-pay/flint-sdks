<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_issue_api_key
 * @property-read ?string $default_sandbox_id
 * @property-read Merchant $merchant
 * @property-read bool $merchant_created
 * @property-read ?OnboardingNextStep $next_step
 * @property-read string $onboarding_session_expires_at
 * @property-read string $onboarding_session_token
 * @property-read User $user
 * Presence-aware response; omitted optional fields return null. */
final class OnboardingVerifyEmailResult extends Model {
    /** @param array{'can_issue_api_key': bool, 'default_sandbox_id'?: string, 'merchant': mixed, 'merchant_created': bool, 'next_step'?: mixed, 'onboarding_session_expires_at': string, 'onboarding_session_token': string, 'user': mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingVerifyEmailResult')); }
    /** Shape $ (Value): boolean. Whether the merchant has no external API key and a default sandbox exists.
     * @return bool
     */
    public function getCanIssueApiKey(): bool { return $this->get('can_issue_api_key'); }
    public function hasCanIssueApiKey(): bool { return $this->has('can_issue_api_key'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getDefaultSandboxId(): ?string { return $this->get('default_sandbox_id'); }
    public function hasDefaultSandboxId(): bool { return $this->has('default_sandbox_id'); }
    /** Shape $ (Value): {@see Merchant}. The business accepting payments.
     * @return Merchant
     */
    public function getMerchant(): Merchant { return $this->get('merchant'); }
    public function hasMerchant(): bool { return $this->has('merchant'); }
    /** Shape $ (Value): boolean.
     * @return bool
     */
    public function getMerchantCreated(): bool { return $this->get('merchant_created'); }
    public function hasMerchantCreated(): bool { return $this->has('merchant_created'); }
    /** Shape $ (Value): {@see OnboardingNextStep}. The next step to move onboarding forward, with who owns it, whether a machine can complete it, and the endpoint to submit to.
     * @return ?OnboardingNextStep
     */
    public function getNextStep(): ?OnboardingNextStep { return $this->get('next_step'); }
    public function hasNextStep(): bool { return $this->has('next_step'); }
    /** Shape $ (Value): string. Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to get a new one. Format: date-time.
     * @return string
     */
    public function getOnboardingSessionExpiresAt(): string { return $this->get('onboarding_session_expires_at'); }
    public function hasOnboardingSessionExpiresAt(): bool { return $this->has('onboarding_session_expires_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getOnboardingSessionToken(): string { return $this->get('onboarding_session_token'); }
    public function hasOnboardingSessionToken(): bool { return $this->has('onboarding_session_token'); }
    /** Shape $ (Value): {@see User}. A user with access to merchant accounts.
     * @return User
     */
    public function getUser(): User { return $this->get('user'); }
    public function hasUser(): bool { return $this->has('user'); }
}

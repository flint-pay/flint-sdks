<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read bool $can_issue_api_key
 * @property-read string $default_sandbox_id
 * @property-read MerchantInput|array<array-key, mixed>|\stdClass $merchant
 * @property-read bool $merchant_created
 * @property-read string|\DateTimeInterface $onboarding_session_expires_at
 * @property-read string $onboarding_session_token
 * @property-read UserInput|array<array-key, mixed>|\stdClass $user
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingVerifyEmailResultInput extends Model {
    /** @param array{'can_issue_api_key': bool, 'default_sandbox_id'?: string, 'merchant': MerchantInput|array<array-key, mixed>|\stdClass, 'merchant_created': bool, 'onboarding_session_expires_at': string|\DateTimeInterface, 'onboarding_session_token': string, 'user': UserInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingVerifyEmailResultInput')); }
    /** Shape $ (Value): boolean. Whether the merchant has no external API key and a default sandbox exists.
     * @return bool
     * @throws SdkError When can_issue_api_key is omitted; use hasCanIssueApiKey() or valueOrDefault().
     */
    public function getCanIssueApiKey(): bool { return $this->get('can_issue_api_key'); }
    public function hasCanIssueApiKey(): bool { return $this->has('can_issue_api_key'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When default_sandbox_id is omitted; use hasDefaultSandboxId() or valueOrDefault().
     */
    public function getDefaultSandboxId(): string { return $this->get('default_sandbox_id'); }
    public function hasDefaultSandboxId(): bool { return $this->has('default_sandbox_id'); }
    /** Shape $ (Value): {@see MerchantInput}. The business accepting payments.
     * @return MerchantInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant is omitted; use hasMerchant() or valueOrDefault().
     */
    public function getMerchant(): mixed { return $this->get('merchant'); }
    public function hasMerchant(): bool { return $this->has('merchant'); }
    /** Shape $ (Value): boolean.
     * @return bool
     * @throws SdkError When merchant_created is omitted; use hasMerchantCreated() or valueOrDefault().
     */
    public function getMerchantCreated(): bool { return $this->get('merchant_created'); }
    public function hasMerchantCreated(): bool { return $this->has('merchant_created'); }
    /** Shape $ (Value): string. Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to get a new one. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When onboarding_session_expires_at is omitted; use hasOnboardingSessionExpiresAt() or valueOrDefault().
     */
    public function getOnboardingSessionExpiresAt(): string|\DateTimeInterface { return $this->get('onboarding_session_expires_at'); }
    public function hasOnboardingSessionExpiresAt(): bool { return $this->has('onboarding_session_expires_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When onboarding_session_token is omitted; use hasOnboardingSessionToken() or valueOrDefault().
     */
    public function getOnboardingSessionToken(): string { return $this->get('onboarding_session_token'); }
    public function hasOnboardingSessionToken(): bool { return $this->has('onboarding_session_token'); }
    /** Shape $ (Value): {@see UserInput}. A user with access to merchant accounts.
     * @return UserInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When user is omitted; use hasUser() or valueOrDefault().
     */
    public function getUser(): mixed { return $this->get('user'); }
    public function hasUser(): bool { return $this->has('user'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $default_sandbox_id
 * @property-read string|\DateTimeInterface $fresh_verification_expires_at
 * @property-read MerchantInput|array<array-key, mixed>|\stdClass $merchant
 * @property-read string|\DateTimeInterface $onboarding_session_expires_at
 * @property-read string $onboarding_session_token
 * @property-read UserInput|array<array-key, mixed>|\stdClass $user
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingVerifyEmailResultInput extends Model {
    /** @param array{'default_sandbox_id'?: string, 'fresh_verification_expires_at': string|\DateTimeInterface, 'merchant': MerchantInput|array<array-key, mixed>|\stdClass, 'onboarding_session_expires_at': string|\DateTimeInterface, 'onboarding_session_token': string, 'user': UserInput|array<array-key, mixed>|\stdClass, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingVerifyEmailResultInput')); }
    /** ID of the merchant's default sandbox for testing API calls. Omitted when the merchant has no default sandbox. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When default_sandbox_id is omitted; use hasDefaultSandboxId() or valueOrDefault().
     */
    public function getDefaultSandboxId(): string { return $this->get('default_sandbox_id'); }
    public function hasDefaultSandboxId(): bool { return $this->has('default_sandbox_id'); }
    /** The last instant this session counts as freshly verified, 5 minutes after verification. Until then it can create keys with full or read_only access or with accounts.api_keys.write, accounts.workload_identities.write or commerce.gift_cards.secrets.write. Create the first sandbox key with POST /v1/api-keys before this time; afterward verify the email again for a fresh session. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When fresh_verification_expires_at is omitted; use hasFreshVerificationExpiresAt() or valueOrDefault().
     */
    public function getFreshVerificationExpiresAt(): string|\DateTimeInterface { return $this->get('fresh_verification_expires_at'); }
    public function hasFreshVerificationExpiresAt(): bool { return $this->has('fresh_verification_expires_at'); }
    /** The merchant the onboarding session acts for, whether newly provisioned or already associated with the user. Its readiness describes the default sandbox identified by default_sandbox_id, matching GET /v1/merchant with this onboarding session. The business accepting payments.
     * @return MerchantInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant is omitted; use hasMerchant() or valueOrDefault().
     */
    public function getMerchant(): mixed { return $this->get('merchant'); }
    public function hasMerchant(): bool { return $this->has('merchant'); }
    /** Expiry of onboarding_session_token. The token cannot be refreshed; verify the email again to get a new one. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When onboarding_session_expires_at is omitted; use hasOnboardingSessionExpiresAt() or valueOrDefault().
     */
    public function getOnboardingSessionExpiresAt(): string|\DateTimeInterface { return $this->get('onboarding_session_expires_at'); }
    public function hasOnboardingSessionExpiresAt(): bool { return $this->has('onboarding_session_expires_at'); }
    /** Bearer token for the verified user's onboarding session. Keep it secret and send it in the Authorization header for subsequent onboarding calls.
     * @return string
     * @throws SdkError When onboarding_session_token is omitted; use hasOnboardingSessionToken() or valueOrDefault().
     */
    public function getOnboardingSessionToken(): string { return $this->get('onboarding_session_token'); }
    public function hasOnboardingSessionToken(): bool { return $this->has('onboarding_session_token'); }
    /** The user signed in by the verified email address. A user with access to merchant accounts.
     * @return UserInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When user is omitted; use hasUser() or valueOrDefault().
     */
    public function getUser(): mixed { return $this->get('user'); }
    public function hasUser(): bool { return $this->has('user'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $auth_type
 * @property-read bool $can_manage_api_keys
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string|\DateTimeInterface $fresh_verification_expires_at
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $sandbox_id
 * @property-read string $user_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OnboardingSessionAuthContextInput extends Model {
    /** @param array{'auth_type': string, 'can_manage_api_keys': bool, 'expires_at': string|\DateTimeInterface, 'fresh_verification_expires_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'sandbox_id': string, 'user_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OnboardingSessionAuthContextInput')); }
    /** Credential type that selects this object's fields. Value enum: "onboarding_session".
     * @return string
     * @throws SdkError When auth_type is omitted; use hasAuthType() or valueOrDefault().
     */
    public function getAuthType(): string { return $this->get('auth_type'); }
    public function hasAuthType(): bool { return $this->has('auth_type'); }
    /** Whether the onboarding user's role permits managing API keys.
     * @return bool
     * @throws SdkError When can_manage_api_keys is omitted; use hasCanManageApiKeys() or valueOrDefault().
     */
    public function getCanManageApiKeys(): bool { return $this->get('can_manage_api_keys'); }
    public function hasCanManageApiKeys(): bool { return $this->has('can_manage_api_keys'); }
    /** Time the credential expires; absent for keys without an expiry. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Time fresh identity verification expires; it may be in the past. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When fresh_verification_expires_at is omitted; use hasFreshVerificationExpiresAt() or valueOrDefault().
     */
    public function getFreshVerificationExpiresAt(): string|\DateTimeInterface { return $this->get('fresh_verification_expires_at'); }
    public function hasFreshVerificationExpiresAt(): bool { return $this->has('fresh_verification_expires_at'); }
    /** Merchant the credential acts for. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Whether the credential acts in test or live mode. Value enum: "test".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Sandbox the credential is bound to, present only in test mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** User the session acts for. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     * @return string
     * @throws SdkError When user_id is omitted; use hasUserId() or valueOrDefault().
     */
    public function getUserId(): string { return $this->get('user_id'); }
    public function hasUserId(): bool { return $this->has('user_id'); }
}

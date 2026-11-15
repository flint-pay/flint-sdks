<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $access
 * @property-read string $api_key_id
 * @property-read string $auth_type
 * @property-read bool $can_manage_api_keys
 * @property-read string $context_id
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string|\DateTimeInterface $fresh_verification_expires_at
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $name
 * @property-read string $oauth_grant_id
 * @property-read string $oauth_session_id
 * @property-read string $organization_id
 * @property-read string $partner_app_id
 * @property-read string|null $partner_app_install_id
 * @property-read string $sandbox_id
 * @property-read list<string> $scopes
 * @property-read string $user_id
 * @property-read string $workload_identity_id
 * Presence-aware input; omitted fields throw when accessed. */
final class AuthContextInput extends Model {
    /** @param array{'access': string, 'api_key_id': string, 'auth_type': string, 'expires_at'?: string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'name': string, 'organization_id'?: string, 'partner_app_install_id': string|null, 'sandbox_id'?: string, 'scopes': list<string>}|object|array{'access': string, 'auth_type': string, 'context_id': string, 'merchant_id': string, 'mode': string, 'name': string, 'oauth_grant_id': string, 'oauth_session_id': string, 'sandbox_id'?: string, 'scopes': list<string>, 'user_id': string}|object|array{'access': string, 'auth_type': string, 'expires_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'name': string, 'sandbox_id'?: string, 'scopes': list<string>, 'workload_identity_id': string}|object|array{'access': string, 'auth_type': string, 'expires_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'partner_app_id': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'scopes': list<string>}|object|array{'auth_type': string, 'can_manage_api_keys': bool, 'expires_at': string|\DateTimeInterface, 'fresh_verification_expires_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'sandbox_id': string, 'user_id': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AuthContextInput')); }
    /** Access level; scoped tokens always have restricted access. Value enum: "full", "read_only", "restricted".
     * @return string
     * @throws SdkError When access is omitted; use hasAccess() or valueOrDefault().
     */
    public function getAccess(): string { return $this->get('access'); }
    public function hasAccess(): bool { return $this->has('access'); }
    /** ID of the API key. Example: "key_01KEZF7C008CTC2G5V6J08M6S7".
     * @return string
     * @throws SdkError When api_key_id is omitted; use hasApiKeyId() or valueOrDefault().
     */
    public function getApiKeyId(): string { return $this->get('api_key_id'); }
    public function hasApiKeyId(): bool { return $this->has('api_key_id'); }
    /** Credential type that selects this object's fields. Value enum: "api_key", "cli_login", "workload_identity", "partner_app", "onboarding_session".
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
    /** ID of the selected CLI context. Example: "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     * @return string
     * @throws SdkError When context_id is omitted; use hasContextId() or valueOrDefault().
     */
    public function getContextId(): string { return $this->get('context_id'); }
    public function hasContextId(): bool { return $this->has('context_id'); }
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
    /** Whether the credential acts in test or live mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Name of the key, CLI context, or workload identity.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the CLI login grant. Example: "clg_01KEZF7C00F8Q8XM1TZ6Y1GB31".
     * @return string
     * @throws SdkError When oauth_grant_id is omitted; use hasOauthGrantId() or valueOrDefault().
     */
    public function getOauthGrantId(): string { return $this->get('oauth_grant_id'); }
    public function hasOauthGrantId(): bool { return $this->has('oauth_grant_id'); }
    /** ID of the CLI session. Example: "session_aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa".
     * @return string
     * @throws SdkError When oauth_session_id is omitted; use hasOauthSessionId() or valueOrDefault().
     */
    public function getOauthSessionId(): string { return $this->get('oauth_session_id'); }
    public function hasOauthSessionId(): bool { return $this->has('oauth_session_id'); }
    /** Organization selected by the key's access scope, when available. Example: "org_01KEZF7C00EA57F19C2ZFWA7HJ".
     * @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** ID of the partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** ID of the partner app install. Null when the API key is not linked to an install. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     * @return string|null
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string|null { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** Sandbox the credential is bound to, present only in test mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Current granted API scopes, resolved at request time for full and read_only keys. [] (Value): string.
     * @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** User the session acts for. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     * @return string
     * @throws SdkError When user_id is omitted; use hasUserId() or valueOrDefault().
     */
    public function getUserId(): string { return $this->get('user_id'); }
    public function hasUserId(): bool { return $this->has('user_id'); }
    /** ID of the workload identity. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     * @return string
     * @throws SdkError When workload_identity_id is omitted; use hasWorkloadIdentityId() or valueOrDefault().
     */
    public function getWorkloadIdentityId(): string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $access
 * @property-read string $api_key_id
 * @property-read string $auth_type
 * @property-read ?bool $can_manage_api_keys
 * @property-read ?string $context_id
 * @property-read ?string $expires_at
 * @property-read ?string $fresh_verification_expires_at
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $name
 * @property-read ?string $oauth_grant_id
 * @property-read ?string $oauth_session_id
 * @property-read ?string $organization_id
 * @property-read ?string $partner_app_id
 * @property-read string|null $partner_app_install_id
 * @property-read ?string $sandbox_id
 * @property-read list<string> $scopes
 * @property-read ?string $user_id
 * @property-read ?string $workload_identity_id
 * Presence-aware response; omitted optional fields return null. */
final class AuthContextResponseDataApiKey extends Model {
    /** @param array{'access': string, 'api_key_id': string, 'auth_type': string, 'can_manage_api_keys'?: bool, 'context_id'?: string, 'expires_at'?: string, 'fresh_verification_expires_at'?: string, 'merchant_id': string, 'mode': string, 'name': string, 'oauth_grant_id'?: string, 'oauth_session_id'?: string, 'organization_id'?: string, 'partner_app_id'?: string, 'partner_app_install_id': string|null, 'sandbox_id'?: string, 'scopes': list<string>, 'user_id'?: string, 'workload_identity_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AuthContextResponseDataApiKey')); }
    /** Access level; scoped tokens always have restricted access. Value enum: "full", "read_only", "restricted".
     * @return string
     */
    public function getAccess(): string { return $this->get('access'); }
    public function hasAccess(): bool { return $this->has('access'); }
    /** ID of the API key.
     * @return string
     */
    public function getApiKeyId(): string { return $this->get('api_key_id'); }
    public function hasApiKeyId(): bool { return $this->has('api_key_id'); }
    /** Credential type that selects this object's fields. Value enum: "api_key".
     * @return string
     */
    public function getAuthType(): string { return $this->get('auth_type'); }
    public function hasAuthType(): bool { return $this->has('auth_type'); }
    /** Whether the onboarding user's role permits managing API keys.
     * @return ?bool
     */
    public function getCanManageApiKeys(): ?bool { return $this->get('can_manage_api_keys'); }
    public function hasCanManageApiKeys(): bool { return $this->has('can_manage_api_keys'); }
    /** ID of the selected CLI context.
     * @return ?string
     */
    public function getContextId(): ?string { return $this->get('context_id'); }
    public function hasContextId(): bool { return $this->has('context_id'); }
    /** Time the credential expires; absent for keys without an expiry. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Time fresh identity verification expires; it may be in the past. Format: date-time.
     * @return ?string
     */
    public function getFreshVerificationExpiresAt(): ?string { return $this->get('fresh_verification_expires_at'); }
    public function hasFreshVerificationExpiresAt(): bool { return $this->has('fresh_verification_expires_at'); }
    /** Merchant the credential acts for.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Whether the credential acts in test or live mode. Value enum: "test", "live".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Name of the key, CLI context, or workload identity.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** ID of the CLI login grant.
     * @return ?string
     */
    public function getOauthGrantId(): ?string { return $this->get('oauth_grant_id'); }
    public function hasOauthGrantId(): bool { return $this->has('oauth_grant_id'); }
    /** ID of the CLI session.
     * @return ?string
     */
    public function getOauthSessionId(): ?string { return $this->get('oauth_session_id'); }
    public function hasOauthSessionId(): bool { return $this->has('oauth_session_id'); }
    /** Organization selected by the key's access scope, when available.
     * @return ?string
     */
    public function getOrganizationId(): ?string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** ID of the partner app.
     * @return ?string
     */
    public function getPartnerAppId(): ?string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /**  anyOf[1] (Value): (string or null). ID of the partner app install. Null when the API key is not linked to an install. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppInstallId(): string|null { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** Sandbox the credential is bound to, present only in test mode.
     * @return ?string
     */
    public function getSandboxId(): ?string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Current granted API scopes, resolved at request time for full and read_only keys. [] (Value): string.
     * @return list<string>
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** User the session acts for.
     * @return ?string
     */
    public function getUserId(): ?string { return $this->get('user_id'); }
    public function hasUserId(): bool { return $this->has('user_id'); }
    /** ID of the workload identity.
     * @return ?string
     */
    public function getWorkloadIdentityId(): ?string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $api_key_id
 * @property-read string $auth_type
 * @property-read ?string $context_id
 * @property-read string $environment
 * @property-read ?string $expires_at
 * @property-read string $merchant_id
 * @property-read ?string $name
 * @property-read ?string $oauth_grant_id
 * @property-read ?string $oauth_session_id
 * @property-read ?string $organization_id
 * @property-read ?string $sandbox_id
 * @property-read list<string> $scopes
 * @property-read ?string $workload_identity_id
 * Presence-aware response; omitted optional fields return null. */
final class AuthContext extends Model {
    /** @param array{'api_key_id'?: string, 'auth_type': string, 'context_id'?: string, 'environment': string, 'expires_at'?: string, 'merchant_id': string, 'name'?: string, 'oauth_grant_id'?: string, 'oauth_session_id'?: string, 'organization_id'?: string, 'sandbox_id'?: string, 'scopes': list<string>, 'workload_identity_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('AuthContext')); }
    /** api_key_id
     * @return ?string
     */
    public function getApiKeyId(): ?string { return $this->get('api_key_id'); }
    public function hasApiKeyId(): bool { return $this->has('api_key_id'); }
    /** Value enum: "api_key", "oauth", "workload_identity".
     * @return string
     */
    public function getAuthType(): string { return $this->get('auth_type'); }
    public function hasAuthType(): bool { return $this->has('auth_type'); }
    /** context_id
     * @return ?string
     */
    public function getContextId(): ?string { return $this->get('context_id'); }
    public function hasContextId(): bool { return $this->has('context_id'); }
    /** Value enum: "sandbox", "live".
     * @return string
     */
    public function getEnvironment(): string { return $this->get('environment'); }
    public function hasEnvironment(): bool { return $this->has('environment'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getExpiresAt(): ?string { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** merchant_id
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** name
     * @return ?string
     */
    public function getName(): ?string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** oauth_grant_id
     * @return ?string
     */
    public function getOauthGrantId(): ?string { return $this->get('oauth_grant_id'); }
    public function hasOauthGrantId(): bool { return $this->has('oauth_grant_id'); }
    /** oauth_session_id
     * @return ?string
     */
    public function getOauthSessionId(): ?string { return $this->get('oauth_session_id'); }
    public function hasOauthSessionId(): bool { return $this->has('oauth_session_id'); }
    /** organization_id
     * @return ?string
     */
    public function getOrganizationId(): ?string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** sandbox_id
     * @return ?string
     */
    public function getSandboxId(): ?string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /**  [] (Value): string.
     * @return list<string>
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** workload_identity_id
     * @return ?string
     */
    public function getWorkloadIdentityId(): ?string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
}

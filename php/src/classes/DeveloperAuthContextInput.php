<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $api_key_id
 * @property-read string $auth_type
 * @property-read string $context_id
 * @property-read string $environment
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $merchant_id
 * @property-read string $name
 * @property-read string $oauth_grant_id
 * @property-read string $oauth_session_id
 * @property-read string $organization_id
 * @property-read string $sandbox_id
 * @property-read list<string> $scopes
 * @property-read string $workload_identity_id
 * Presence-aware input; omitted fields throw when accessed. */
final class DeveloperAuthContextInput extends Model {
    /** @param array{'api_key_id'?: string, 'auth_type': string, 'context_id'?: string, 'environment': string, 'expires_at'?: string|\DateTimeInterface, 'merchant_id': string, 'name'?: string, 'oauth_grant_id'?: string, 'oauth_session_id'?: string, 'organization_id'?: string, 'sandbox_id'?: string, 'scopes': list<string>, 'workload_identity_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('DeveloperAuthContextInput')); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When api_key_id is omitted; use hasApiKeyId() or valueOrDefault().
     */
    public function getApiKeyId(): string { return $this->get('api_key_id'); }
    public function hasApiKeyId(): bool { return $this->has('api_key_id'); }
    /** Shape $ (Value): string.  Value enum: "api_key", "oauth", "workload_identity".
     * @return string
     * @throws SdkError When auth_type is omitted; use hasAuthType() or valueOrDefault().
     */
    public function getAuthType(): string { return $this->get('auth_type'); }
    public function hasAuthType(): bool { return $this->has('auth_type'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When context_id is omitted; use hasContextId() or valueOrDefault().
     */
    public function getContextId(): string { return $this->get('context_id'); }
    public function hasContextId(): bool { return $this->has('context_id'); }
    /** Shape $ (Value): string.  Value enum: "sandbox", "live".
     * @return string
     * @throws SdkError When environment is omitted; use hasEnvironment() or valueOrDefault().
     */
    public function getEnvironment(): string { return $this->get('environment'); }
    public function hasEnvironment(): bool { return $this->has('environment'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When oauth_grant_id is omitted; use hasOauthGrantId() or valueOrDefault().
     */
    public function getOauthGrantId(): string { return $this->get('oauth_grant_id'); }
    public function hasOauthGrantId(): bool { return $this->has('oauth_grant_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When oauth_session_id is omitted; use hasOauthSessionId() or valueOrDefault().
     */
    public function getOauthSessionId(): string { return $this->get('oauth_session_id'); }
    public function hasOauthSessionId(): bool { return $this->has('oauth_session_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When organization_id is omitted; use hasOrganizationId() or valueOrDefault().
     */
    public function getOrganizationId(): string { return $this->get('organization_id'); }
    public function hasOrganizationId(): bool { return $this->has('organization_id'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When workload_identity_id is omitted; use hasWorkloadIdentityId() or valueOrDefault().
     */
    public function getWorkloadIdentityId(): string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
}

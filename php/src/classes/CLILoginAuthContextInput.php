<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $access
 * @property-read string $auth_type
 * @property-read string $context_id
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $name
 * @property-read string $oauth_grant_id
 * @property-read string $oauth_session_id
 * @property-read string $sandbox_id
 * @property-read list<string> $scopes
 * @property-read string $user_id
 * Presence-aware input; omitted fields throw when accessed. */
final class CLILoginAuthContextInput extends Model {
    /** @param array{'access': string, 'auth_type': string, 'context_id': string, 'merchant_id': string, 'mode': string, 'name': string, 'oauth_grant_id': string, 'oauth_session_id': string, 'sandbox_id'?: string, 'scopes': list<string>, 'user_id': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CLILoginAuthContextInput')); }
    /** Access level; scoped tokens always have restricted access. Value enum: "restricted".
     * @return string
     * @throws SdkError When access is omitted; use hasAccess() or valueOrDefault().
     */
    public function getAccess(): string { return $this->get('access'); }
    public function hasAccess(): bool { return $this->has('access'); }
    /** Credential type that selects this object's fields. Value enum: "cli_login".
     * @return string
     * @throws SdkError When auth_type is omitted; use hasAuthType() or valueOrDefault().
     */
    public function getAuthType(): string { return $this->get('auth_type'); }
    public function hasAuthType(): bool { return $this->has('auth_type'); }
    /** ID of the selected CLI context. Example: "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     * @return string
     * @throws SdkError When context_id is omitted; use hasContextId() or valueOrDefault().
     */
    public function getContextId(): string { return $this->get('context_id'); }
    public function hasContextId(): bool { return $this->has('context_id'); }
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
}

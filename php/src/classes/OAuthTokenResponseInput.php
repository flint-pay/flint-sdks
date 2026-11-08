<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $access_token
 * @property-read string $context_id
 * @property-read string $environment_grant_id
 * @property-read int $expires_in
 * @property-read string $issued_token_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $oauth_session_id
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $refresh_token
 * @property-read string $sandbox_id
 * @property-read string $scope
 * @property-read string $token_type
 * @property-read string $workload_identity_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OAuthTokenResponseInput extends Model {
    /** @param array{'access_token': string, 'context_id'?: string, 'environment_grant_id'?: string, 'expires_in': int, 'issued_token_type'?: string, 'merchant_id'?: string, 'mode'?: string, 'oauth_session_id'?: string, 'partner_app_id'?: string, 'partner_app_install_id'?: string, 'refresh_token'?: string, 'sandbox_id'?: string, 'scope': string, 'token_type': string, 'workload_identity_id'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OAuthTokenResponseInput')); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When access_token is omitted; use hasAccessToken() or valueOrDefault().
     */
    public function getAccessToken(): string { return $this->get('access_token'); }
    public function hasAccessToken(): bool { return $this->has('access_token'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When context_id is omitted; use hasContextId() or valueOrDefault().
     */
    public function getContextId(): string { return $this->get('context_id'); }
    public function hasContextId(): bool { return $this->has('context_id'); }
    /** environment_grant_id
     * @return string
     * @throws SdkError When environment_grant_id is omitted; use hasEnvironmentGrantId() or valueOrDefault().
     */
    public function getEnvironmentGrantId(): string { return $this->get('environment_grant_id'); }
    public function hasEnvironmentGrantId(): bool { return $this->has('environment_grant_id'); }
    /** minimum: 1. maximum: 86400.
     * @return int
     * @throws SdkError When expires_in is omitted; use hasExpiresIn() or valueOrDefault().
     */
    public function getExpiresIn(): int { return $this->get('expires_in'); }
    public function hasExpiresIn(): bool { return $this->has('expires_in'); }
    /** Present for workload identity token exchange. Identifies the issued credential as an access token. Value enum: "urn:ietf:params:oauth:token-type:access_token".
     * @return string
     * @throws SdkError When issued_token_type is omitted; use hasIssuedTokenType() or valueOrDefault().
     */
    public function getIssuedTokenType(): string { return $this->get('issued_token_type'); }
    public function hasIssuedTokenType(): bool { return $this->has('issued_token_type'); }
    /** merchant_id
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** minLength: 1.
     * @return string
     * @throws SdkError When oauth_session_id is omitted; use hasOauthSessionId() or valueOrDefault().
     */
    public function getOauthSessionId(): string { return $this->get('oauth_session_id'); }
    public function hasOauthSessionId(): bool { return $this->has('oauth_session_id'); }
    /** partner_app_id
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** partner_app_install_id
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** Rotating refresh token for partner apps and flint-cli. Absent for workload access tokens. minLength: 1.
     * @return string
     * @throws SdkError When refresh_token is omitted; use hasRefreshToken() or valueOrDefault().
     */
    public function getRefreshToken(): string { return $this->get('refresh_token'); }
    public function hasRefreshToken(): bool { return $this->has('refresh_token'); }
    /** Present exactly when mode is test.
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Space-separated granted scope, in the vocabulary the client requested: permission IDs for partner apps, API scope names for flint-cli and workload identities. Empty when a workload identity has no scopes.
     * @return string
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** Value enum: "Bearer".
     * @return string
     * @throws SdkError When token_type is omitted; use hasTokenType() or valueOrDefault().
     */
    public function getTokenType(): string { return $this->get('token_type'); }
    public function hasTokenType(): bool { return $this->has('token_type'); }
    /** Workload identity that authorized the token exchange. Present only for workload access tokens.
     * @return string
     * @throws SdkError When workload_identity_id is omitted; use hasWorkloadIdentityId() or valueOrDefault().
     */
    public function getWorkloadIdentityId(): string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_assertion
 * @property-read string $client_assertion_type
 * @property-read string $client_id
 * @property-read string $client_secret
 * @property-read string $code
 * @property-read string $code_verifier
 * @property-read string $context_id
 * @property-read string $device_code
 * @property-read string $grant_type
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $redirect_uri
 * @property-read string $refresh_token
 * @property-read string $requested_token_type
 * @property-read string $scope
 * @property-read string $subject_token
 * @property-read string $subject_token_type
 * @property-read string $workload_identity_id
 * Presence-aware input; omitted fields throw when accessed. */
final class OauthExchangeTokenParams extends Model {
    /** @param array{'client_assertion'?: string, 'client_assertion_type'?: string, 'client_id'?: string, 'client_secret'?: string, 'code': string, 'code_verifier': string, 'context_id'?: string, 'device_code'?: string, 'grant_type': string, 'merchant_id'?: string, 'mode'?: string, 'redirect_uri': string, 'refresh_token'?: string, 'requested_token_type'?: string, 'scope'?: string, 'subject_token'?: string, 'subject_token_type'?: string, 'workload_identity_id'?: string, ...}|object|array{'client_assertion'?: string, 'client_assertion_type'?: string, 'client_id'?: string, 'client_secret'?: string, 'code'?: string, 'code_verifier'?: string, 'context_id'?: string, 'device_code'?: string, 'grant_type': string, 'merchant_id'?: string, 'mode': string, 'redirect_uri'?: string, 'refresh_token'?: string, 'requested_token_type'?: string, 'scope'?: string, 'subject_token'?: string, 'subject_token_type'?: string, 'workload_identity_id'?: string, ...}|object|array{'client_assertion'?: string, 'client_assertion_type'?: string, 'client_id'?: string, 'client_secret'?: string, 'code'?: string, 'code_verifier'?: string, 'context_id'?: string, 'device_code'?: string, 'grant_type': string, 'merchant_id'?: string, 'mode'?: string, 'redirect_uri'?: string, 'refresh_token': string, 'requested_token_type'?: string, 'scope'?: string, 'subject_token'?: string, 'subject_token_type'?: string, 'workload_identity_id'?: string, ...}|object|array{'client_assertion'?: string, 'client_assertion_type'?: string, 'client_id'?: string, 'client_secret'?: string, 'code'?: string, 'code_verifier'?: string, 'context_id'?: string, 'device_code': string, 'grant_type': string, 'merchant_id'?: string, 'mode'?: string, 'redirect_uri'?: string, 'refresh_token'?: string, 'requested_token_type'?: string, 'scope'?: string, 'subject_token'?: string, 'subject_token_type'?: string, 'workload_identity_id'?: string, ...}|object|array{'client_assertion'?: string, 'client_assertion_type'?: string, 'client_id'?: string, 'client_secret'?: string, 'code'?: string, 'code_verifier'?: string, 'context_id'?: string, 'device_code'?: string, 'grant_type': string, 'merchant_id'?: string, 'mode'?: string, 'redirect_uri'?: string, 'refresh_token'?: string, 'requested_token_type'?: string, 'scope'?: string, 'subject_token': string, 'subject_token_type': string, 'workload_identity_id': string}|object $values */
    public function __construct(mixed $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OauthExchangeTokenParams')); }
    /** Signed RFC 7523 JWT for partner client authentication. Send client_id and client_assertion_type, without HTTP Basic or client_secret. minLength: 1. maxLength: 8192.
     * @return string
     * @throws SdkError When client_assertion is omitted; use hasClientAssertion() or valueOrDefault().
     */
    public function getClientAssertion(): string { return $this->get('client_assertion'); }
    public function hasClientAssertion(): bool { return $this->has('client_assertion'); }
    /** Required with client_assertion for partner private_key_jwt authentication. Value enum: "urn:ietf:params:oauth:client-assertion-type:jwt-bearer".
     * @return string
     * @throws SdkError When client_assertion_type is omitted; use hasClientAssertionType() or valueOrDefault().
     */
    public function getClientAssertionType(): string { return $this->get('client_assertion_type'); }
    public function hasClientAssertionType(): bool { return $this->has('client_assertion_type'); }
    /** Partner app client ID when using client_secret_post; flint-cli sends flint-cli. Omit when HTTP Basic supplies the partner client ID. Forbidden for workload identity token exchange. Example: "flint-cli".
     * @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Partner app secret for client_secret_post. Omit when using HTTP Basic. flint-cli never sends a secret. Forbidden for workload identity token exchange.
     * @return string
     * @throws SdkError When client_secret is omitted; use hasClientSecret() or valueOrDefault().
     */
    public function getClientSecret(): string { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
    /** Partner authorization code, required for authorization_code.
     * @return string
     * @throws SdkError When code is omitted; use hasCode() or valueOrDefault().
     */
    public function getCode(): string { return $this->get('code'); }
    public function hasCode(): bool { return $this->has('code'); }
    /** Partner PKCE verifier for the S256 challenge, required for authorization_code. minLength: 43. maxLength: 128. pattern: ^[A-Za-z0-9\-._~]+$.
     * @return string
     * @throws SdkError When code_verifier is omitted; use hasCodeVerifier() or valueOrDefault().
     */
    public function getCodeVerifier(): string { return $this->get('code_verifier'); }
    public function hasCodeVerifier(): bool { return $this->has('code_verifier'); }
    /** flint-cli only. Example: "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     * @return string
     * @throws SdkError When context_id is omitted; use hasContextId() or valueOrDefault().
     */
    public function getContextId(): string { return $this->get('context_id'); }
    public function hasContextId(): bool { return $this->has('context_id'); }
    /** flint-cli device code, required for the device_code grant.
     * @return string
     * @throws SdkError When device_code is omitted; use hasDeviceCode() or valueOrDefault().
     */
    public function getDeviceCode(): string { return $this->get('device_code'); }
    public function hasDeviceCode(): bool { return $this->has('device_code'); }
    /** OAuth grant to exchange. Partner apps use client_credentials or authorization_code; flint-cli uses device_code or refresh_token; workload identities use token-exchange. Value enum: "authorization_code", "client_credentials", "refresh_token", "urn:ietf:params:oauth:grant-type:device_code", "urn:ietf:params:oauth:grant-type:token-exchange".
     * @return string
     * @throws SdkError When grant_type is omitted; use hasGrantType() or valueOrDefault().
     */
    public function getGrantType(): string { return $this->get('grant_type'); }
    public function hasGrantType(): bool { return $this->has('grant_type'); }
    /** Binds the minted partner app token to this merchant, for client_credentials. Omit for an app-level token that names the merchant in Flint-Merchant-Id on each request. Flint checks only the ID's format here. pattern: ^mer_[0-9A-HJKMNP-TV-Z]{26}$. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Mode of the partner app token to mint, test or live. Required for client_credentials. Each token is for one mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Partner redirect URI used in authorization, required for authorization_code.
     * @return string
     * @throws SdkError When redirect_uri is omitted; use hasRedirectUri() or valueOrDefault().
     */
    public function getRedirectUri(): string { return $this->get('redirect_uri'); }
    public function hasRedirectUri(): bool { return $this->has('redirect_uri'); }
    /** flint-cli refresh token, required for refresh_token. Partner apps don't receive refresh tokens; a partner client that sends this grant gets unauthorized_client.
     * @return string
     * @throws SdkError When refresh_token is omitted; use hasRefreshToken() or valueOrDefault().
     */
    public function getRefreshToken(): string { return $this->get('refresh_token'); }
    public function hasRefreshToken(): bool { return $this->has('refresh_token'); }
    /** Optional requested credential type for token exchange. Only access tokens are supported. Value enum: "urn:ietf:params:oauth:token-type:access_token".
     * @return string
     * @throws SdkError When requested_token_type is omitted; use hasRequestedTokenType() or valueOrDefault().
     */
    public function getRequestedTokenType(): string { return $this->get('requested_token_type'); }
    public function hasRequestedTokenType(): bool { return $this->has('requested_token_type'); }
    /** flint-cli and workload identities: optional subset of API scope names for this access token. Partner apps: omit. Partner app tokens carry each install's granted permissions, and client_credentials refuses scope with invalid_scope.
     * @return string
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** JWT from the workload identity's external issuer. Required for token exchange. minLength: 1. maxLength: 8192.
     * @return string
     * @throws SdkError When subject_token is omitted; use hasSubjectToken() or valueOrDefault().
     */
    public function getSubjectToken(): string { return $this->get('subject_token'); }
    public function hasSubjectToken(): bool { return $this->has('subject_token'); }
    /** Format of subject_token. Required for token exchange. Value enum: "urn:ietf:params:oauth:token-type:jwt", "urn:ietf:params:oauth:token-type:id_token".
     * @return string
     * @throws SdkError When subject_token_type is omitted; use hasSubjectTokenType() or valueOrDefault().
     */
    public function getSubjectTokenType(): string { return $this->get('subject_token_type'); }
    public function hasSubjectTokenType(): bool { return $this->has('subject_token_type'); }
    /** Configured workload identity to match against the verified subject token. Required for token exchange. Example: "wid_01KEZF7C00GKCN7Y1482VY8TWP".
     * @return string
     * @throws SdkError When workload_identity_id is omitted; use hasWorkloadIdentityId() or valueOrDefault().
     */
    public function getWorkloadIdentityId(): string { return $this->get('workload_identity_id'); }
    public function hasWorkloadIdentityId(): bool { return $this->has('workload_identity_id'); }
}

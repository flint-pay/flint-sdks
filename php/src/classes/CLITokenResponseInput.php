<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $access_token
 * @property-read string $context_id
 * @property-read int $expires_in
 * @property-read string $oauth_session_id
 * @property-read string $refresh_token
 * @property-read string $scope
 * @property-read string $token_type
 * Presence-aware input; omitted fields throw when accessed. */
final class CLITokenResponseInput extends Model {
    /** @param array{'access_token': string, 'context_id'?: string, 'expires_in': int, 'oauth_session_id'?: string, 'refresh_token': string, 'scope': string, 'token_type': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CLITokenResponseInput')); }
    /** @return string
     * @throws SdkError When access_token is omitted; use hasAccessToken() or valueOrDefault().
     */
    public function getAccessToken(): string { return $this->get('access_token'); }
    public function hasAccessToken(): bool { return $this->has('access_token'); }
    /** @return string
     * @throws SdkError When context_id is omitted; use hasContextId() or valueOrDefault().
     */
    public function getContextId(): string { return $this->get('context_id'); }
    public function hasContextId(): bool { return $this->has('context_id'); }
    /** @return int
     * @throws SdkError When expires_in is omitted; use hasExpiresIn() or valueOrDefault().
     */
    public function getExpiresIn(): int { return $this->get('expires_in'); }
    public function hasExpiresIn(): bool { return $this->has('expires_in'); }
    /** @return string
     * @throws SdkError When oauth_session_id is omitted; use hasOauthSessionId() or valueOrDefault().
     */
    public function getOauthSessionId(): string { return $this->get('oauth_session_id'); }
    public function hasOauthSessionId(): bool { return $this->has('oauth_session_id'); }
    /** @return string
     * @throws SdkError When refresh_token is omitted; use hasRefreshToken() or valueOrDefault().
     */
    public function getRefreshToken(): string { return $this->get('refresh_token'); }
    public function hasRefreshToken(): bool { return $this->has('refresh_token'); }
    /** @return string
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** @return string
     * @throws SdkError When token_type is omitted; use hasTokenType() or valueOrDefault().
     */
    public function getTokenType(): string { return $this->get('token_type'); }
    public function hasTokenType(): bool { return $this->has('token_type'); }
}

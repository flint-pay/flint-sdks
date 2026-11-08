<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_assertion
 * @property-read string $client_assertion_type
 * @property-read string $client_id
 * @property-read string $client_secret
 * @property-read string $token
 * @property-read string $token_type_hint
 * Presence-aware input; omitted fields throw when accessed. */
final class OAuthRevokeRequestInput extends Model {
    /** @param array{'client_assertion'?: string, 'client_assertion_type'?: string, 'client_id'?: string, 'client_secret'?: string, 'token': string, 'token_type_hint'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OAuthRevokeRequestInput')); }
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
    /** Partner client ID for client_secret_post, or flint-cli for the public CLI client. Example: "fpc_00112233445566778899aabbccddeeff".
     * @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Partner client secret for client_secret_post. Omit when using HTTP Basic; flint-cli never sends a secret.
     * @return string
     * @throws SdkError When client_secret is omitted; use hasClientSecret() or valueOrDefault().
     */
    public function getClientSecret(): string { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
    /** Partner app token, or flint-cli access or refresh token, to revoke.
     * @return string
     * @throws SdkError When token is omitted; use hasToken() or valueOrDefault().
     */
    public function getToken(): string { return $this->get('token'); }
    public function hasToken(): bool { return $this->has('token'); }
    /** Optional token lookup hint. Value enum: "refresh_token", "access_token".
     * @return string
     * @throws SdkError When token_type_hint is omitted; use hasTokenTypeHint() or valueOrDefault().
     */
    public function getTokenTypeHint(): string { return $this->get('token_type_hint'); }
    public function hasTokenTypeHint(): bool { return $this->has('token_type_hint'); }
}

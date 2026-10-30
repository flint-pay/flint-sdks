<?php
declare(strict_types=1);
namespace Flint;
/**
 * @internal
 *
 * @property-read string $response_type
 * @property-read string $client_id
 * @property-read string $redirect_uri
 * @property-read string $mode
 * @property-read string $code_challenge
 * @property-read string $code_challenge_method
 * @property-read string $scope
 * @property-read string $sandbox_id
 * @property-read string $state
 * Presence-aware input; omitted fields throw when accessed. */
final class OauthPreviewPartnerInstallAuthorizationInput extends Model {
    /** @param array{'response_type'?: string, 'client_id': string, 'redirect_uri': string, 'mode': string, 'code_challenge'?: string, 'code_challenge_method'?: string, 'scope'?: string, 'sandbox_id'?: string, 'state'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OauthPreviewPartnerInstallAuthorizationInput')); }
    /** OAuth response type. Must be code. Value enum: "code".
     * @return string
     * @throws SdkError When response_type is omitted; use hasResponseType() or valueOrDefault().
     */
    public function getResponseType(): string { return $this->get('response_type'); }
    public function hasResponseType(): bool { return $this->has('response_type'); }
    /** Partner app client ID.
     * @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Registered redirect URI for the partner app.
     * @return string
     * @throws SdkError When redirect_uri is omitted; use hasRedirectUri() or valueOrDefault().
     */
    public function getRedirectUri(): string { return $this->get('redirect_uri'); }
    public function hasRedirectUri(): bool { return $this->has('redirect_uri'); }
    /** Install mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Base64url-encoded SHA-256 hash of your code_verifier, without padding (RFC 7636).
     * @return string
     * @throws SdkError When code_challenge is omitted; use hasCodeChallenge() or valueOrDefault().
     */
    public function getCodeChallenge(): string { return $this->get('code_challenge'); }
    public function hasCodeChallenge(): bool { return $this->has('code_challenge'); }
    /** PKCE challenge method. Value enum: "S256".
     * @return string
     * @throws SdkError When code_challenge_method is omitted; use hasCodeChallengeMethod() or valueOrDefault().
     */
    public function getCodeChallengeMethod(): string { return $this->get('code_challenge_method'); }
    public function hasCodeChallengeMethod(): bool { return $this->has('code_challenge_method'); }
    /** Space-separated permission IDs from your app's permission manifest. Omit to request default_requested_permissions. Required permissions are always granted.
     * @return string
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** Optional active merchant sandbox ID, accepted only with mode=test. When omitted in test mode, Flint uses the merchant's default sandbox. Example: "test_01ARZ3NDEKTSV4RRFFQ69G5FAV".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Opaque state value returned to the partner callback.
     * @return string
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
}

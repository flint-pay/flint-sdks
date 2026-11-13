<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_id
 * @property-read string $context_id
 * @property-read string $device_name
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $platform
 * @property-read string $refresh_token
 * @property-read string $sandbox_id
 * @property-read string $scope
 * @property-read string $scope_mode
 * @property-read string $session_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class CLIReauthorizeRequestInput extends Model {
    /** @param array{'client_id': string, 'context_id'?: string, 'device_name'?: string, 'merchant_id'?: string, 'mode'?: string, 'platform'?: string, 'refresh_token': string, 'sandbox_id'?: string, 'scope': string, 'scope_mode'?: string, 'session_mode': string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CLIReauthorizeRequestInput')); }
    /** Example: "flint-cli". Value enum: "flint-cli".
     * @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** minLength: 1. Example: "ctx_bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb".
     * @return string
     * @throws SdkError When context_id is omitted; use hasContextId() or valueOrDefault().
     */
    public function getContextId(): string { return $this->get('context_id'); }
    public function hasContextId(): bool { return $this->has('context_id'); }
    /** Optional compatibility field for the computer name sent by released Flint CLI versions. Accepted and ignored.
     * @return string
     * @throws SdkError When device_name is omitted; use hasDeviceName() or valueOrDefault().
     */
    public function getDeviceName(): string { return $this->get('device_name'); }
    public function hasDeviceName(): bool { return $this->has('device_name'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Optional compatibility field for the operating system sent by released Flint CLI versions. Accepted and ignored.
     * @return string
     * @throws SdkError When platform is omitted; use hasPlatform() or valueOrDefault().
     */
    public function getPlatform(): string { return $this->get('platform'); }
    public function hasPlatform(): bool { return $this->has('platform'); }
    /** refresh_token
     * @return string
     * @throws SdkError When refresh_token is omitted; use hasRefreshToken() or valueOrDefault().
     */
    public function getRefreshToken(): string { return $this->get('refresh_token'); }
    public function hasRefreshToken(): bool { return $this->has('refresh_token'); }
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Required space-separated public API scope names. Only requested scopes approved in the browser are granted. Request the scopes the CLI needs from x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: 1.
     * @return string
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** Value enum: "additive".
     * @return string
     * @throws SdkError When scope_mode is omitted; use hasScopeMode() or valueOrDefault().
     */
    public function getScopeMode(): string { return $this->get('scope_mode'); }
    public function hasScopeMode(): bool { return $this->has('scope_mode'); }
    /** Value enum: "contexts".
     * @return string
     * @throws SdkError When session_mode is omitted; use hasSessionMode() or valueOrDefault().
     */
    public function getSessionMode(): string { return $this->get('session_mode'); }
    public function hasSessionMode(): bool { return $this->has('session_mode'); }
}

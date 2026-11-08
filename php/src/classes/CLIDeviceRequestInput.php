<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $client_id
 * @property-read string $device_name
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $platform
 * @property-read string $sandbox_id
 * @property-read string $scope
 * @property-read string $session_mode
 * Presence-aware input; omitted fields throw when accessed. */
final class CLIDeviceRequestInput extends Model {
    /** @param array{'client_id': string, 'device_name'?: string, 'merchant_id'?: string, 'mode'?: string, 'platform'?: string, 'sandbox_id'?: string, 'scope': string, 'session_mode'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('CLIDeviceRequestInput')); }
    /** Value enum: "flint-cli".
     * @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Optional compatibility field for the computer name sent by released Flint CLI versions. Accepted and ignored.
     * @return string
     * @throws SdkError When device_name is omitted; use hasDeviceName() or valueOrDefault().
     */
    public function getDeviceName(): string { return $this->get('device_name'); }
    public function hasDeviceName(): bool { return $this->has('device_name'); }
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
    /** Optional compatibility field for the operating system sent by released Flint CLI versions. Accepted and ignored.
     * @return string
     * @throws SdkError When platform is omitted; use hasPlatform() or valueOrDefault().
     */
    public function getPlatform(): string { return $this->get('platform'); }
    public function hasPlatform(): bool { return $this->has('platform'); }
    /** sandbox_id
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Required space-separated public API scope names. Only requested scopes approved in the browser are granted. Normal login sends x-flint-cli-bootstrap-scopes; explicit requests may use x-flint-cli-allowed-scopes. Unsupported scopes return invalid_scope. minLength: 1.
     * @return string
     * @throws SdkError When scope is omitted; use hasScope() or valueOrDefault().
     */
    public function getScope(): string { return $this->get('scope'); }
    public function hasScope(): bool { return $this->has('scope'); }
    /** Value enum: "contexts".
     * @return string
     * @throws SdkError When session_mode is omitted; use hasSessionMode() or valueOrDefault().
     */
    public function getSessionMode(): string { return $this->get('session_mode'); }
    public function hasSessionMode(): bool { return $this->has('session_mode'); }
}

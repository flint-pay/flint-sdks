<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $response_type
 * @property-read string $client_id
 * @property-read string $redirect_uri
 * @property-read string $mode
 * @property-read string $permission_ids
 * @property-read string $environment_id
 * @property-read string $merchant_id
 * @property-read string $state
 * Presence-aware input; omitted fields throw when accessed. */
final class OauthAuthorizePartnerInstallInput extends Model {
    /** @param array{'response_type': string, 'client_id': string, 'redirect_uri': string, 'mode': string, 'permission_ids'?: string, 'environment_id'?: string, 'merchant_id'?: string, 'state': string, 'Flint-Version'?: string}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('OauthAuthorizePartnerInstallInput')); }
    /** @return string
     * @throws SdkError When response_type is omitted; use hasResponseType() or valueOrDefault().
     */
    public function getResponseType(): string { return $this->get('response_type'); }
    public function hasResponseType(): bool { return $this->has('response_type'); }
    /** @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** @return string
     * @throws SdkError When redirect_uri is omitted; use hasRedirectUri() or valueOrDefault().
     */
    public function getRedirectUri(): string { return $this->get('redirect_uri'); }
    public function hasRedirectUri(): bool { return $this->has('redirect_uri'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return string
     * @throws SdkError When permission_ids is omitted; use hasPermissionIds() or valueOrDefault().
     */
    public function getPermissionIds(): string { return $this->get('permission_ids'); }
    public function hasPermissionIds(): bool { return $this->has('permission_ids'); }
    /** @return string
     * @throws SdkError When environment_id is omitted; use hasEnvironmentId() or valueOrDefault().
     */
    public function getEnvironmentId(): string { return $this->get('environment_id'); }
    public function hasEnvironmentId(): bool { return $this->has('environment_id'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return string
     * @throws SdkError When state is omitted; use hasState() or valueOrDefault().
     */
    public function getState(): string { return $this->get('state'); }
    public function hasState(): bool { return $this->has('state'); }
    /** @return string
     * @throws SdkError When Flint-Version is omitted; use hasFlintVersion() or valueOrDefault().
     */
    public function getFlintVersion(): string { return $this->get('Flint-Version'); }
    public function hasFlintVersion(): bool { return $this->has('Flint-Version'); }
}

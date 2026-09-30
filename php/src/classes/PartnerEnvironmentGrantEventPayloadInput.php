<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $environment_grant_id
 * @property-read string $environment_id
 * @property-read list<string> $granted_scopes
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $revoked_by_user_id
 * @property-read string $status
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerEnvironmentGrantEventPayloadInput extends Model {
    /** @param array{'environment_grant_id': string, 'environment_id'?: string, 'granted_scopes': list<string>, 'merchant_id': string, 'mode': string, 'partner_app_id': string, 'partner_app_install_id': string, 'revoked_by_user_id'?: string, 'status': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerEnvironmentGrantEventPayloadInput')); }
    /** @return string
     * @throws SdkError When environment_grant_id is omitted; use hasEnvironmentGrantId() or valueOrDefault().
     */
    public function getEnvironmentGrantId(): string { return $this->get('environment_grant_id'); }
    public function hasEnvironmentGrantId(): bool { return $this->has('environment_grant_id'); }
    /** @return string
     * @throws SdkError When environment_id is omitted; use hasEnvironmentId() or valueOrDefault().
     */
    public function getEnvironmentId(): string { return $this->get('environment_id'); }
    public function hasEnvironmentId(): bool { return $this->has('environment_id'); }
    /** @return list<string>
     * @throws SdkError When granted_scopes is omitted; use hasGrantedScopes() or valueOrDefault().
     */
    public function getGrantedScopes(): array { return $this->get('granted_scopes'); }
    public function hasGrantedScopes(): bool { return $this->has('granted_scopes'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** @return string
     * @throws SdkError When revoked_by_user_id is omitted; use hasRevokedByUserId() or valueOrDefault().
     */
    public function getRevokedByUserId(): string { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
}

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass> $environment_grants
 * @property-read list<string> $granted_scopes
 * @property-read string $installed_by_user_id
 * @property-read string $merchant_id
 * @property-read string $partner_app_install_id
 * @property-read string|\DateTimeInterface $revoked_at
 * @property-read string $revoked_by_user_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppInstallInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface, 'environment_grants'?: list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>, 'granted_scopes': list<string>, 'installed_by_user_id'?: string, 'merchant_id': string, 'partner_app_install_id': string, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by_user_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallInput')); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** @return list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When environment_grants is omitted; use hasEnvironmentGrants() or valueOrDefault().
     */
    public function getEnvironmentGrants(): array { return $this->get('environment_grants'); }
    public function hasEnvironmentGrants(): bool { return $this->has('environment_grants'); }
    /** @return list<string>
     * @throws SdkError When granted_scopes is omitted; use hasGrantedScopes() or valueOrDefault().
     */
    public function getGrantedScopes(): array { return $this->get('granted_scopes'); }
    public function hasGrantedScopes(): bool { return $this->has('granted_scopes'); }
    /** @return string
     * @throws SdkError When installed_by_user_id is omitted; use hasInstalledByUserId() or valueOrDefault().
     */
    public function getInstalledByUserId(): string { return $this->get('installed_by_user_id'); }
    public function hasInstalledByUserId(): bool { return $this->has('installed_by_user_id'); }
    /** @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** @return string|\DateTimeInterface
     * @throws SdkError When revoked_at is omitted; use hasRevokedAt() or valueOrDefault().
     */
    public function getRevokedAt(): string|\DateTimeInterface { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
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
    /** @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}

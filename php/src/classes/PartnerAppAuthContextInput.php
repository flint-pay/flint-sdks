<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $access
 * @property-read string $auth_type
 * @property-read string|\DateTimeInterface $expires_at
 * @property-read string $merchant_id
 * @property-read string $mode
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $sandbox_id
 * @property-read list<string> $scopes
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppAuthContextInput extends Model {
    /** @param array{'access': string, 'auth_type': string, 'expires_at': string|\DateTimeInterface, 'merchant_id': string, 'mode': string, 'partner_app_id': string, 'partner_app_install_id': string, 'sandbox_id'?: string, 'scopes': list<string>}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppAuthContextInput')); }
    /** Access level; scoped tokens always have restricted access. Value enum: "restricted".
     * @return string
     * @throws SdkError When access is omitted; use hasAccess() or valueOrDefault().
     */
    public function getAccess(): string { return $this->get('access'); }
    public function hasAccess(): bool { return $this->has('access'); }
    /** Credential type that selects this object's fields. Value enum: "partner_app".
     * @return string
     * @throws SdkError When auth_type is omitted; use hasAuthType() or valueOrDefault().
     */
    public function getAuthType(): string { return $this->get('auth_type'); }
    public function hasAuthType(): bool { return $this->has('auth_type'); }
    /** Time the credential expires; absent for keys without an expiry. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When expires_at is omitted; use hasExpiresAt() or valueOrDefault().
     */
    public function getExpiresAt(): string|\DateTimeInterface { return $this->get('expires_at'); }
    public function hasExpiresAt(): bool { return $this->has('expires_at'); }
    /** Merchant the credential acts for. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Whether the credential acts in test or live mode. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** ID of the partner app. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** ID of the partner app install. Null when the API key is not linked to an install. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** Sandbox the credential is bound to, present only in test mode. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Current granted API scopes, resolved at request time for full and read_only keys. [] (Value): string.
     * @return list<string>
     * @throws SdkError When scopes is omitted; use hasScopes() or valueOrDefault().
     */
    public function getScopes(): array { return $this->get('scopes'); }
    public function hasScopes(): bool { return $this->has('scopes'); }
}

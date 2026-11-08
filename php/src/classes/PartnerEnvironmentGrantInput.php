<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $environment_grant_id
 * @property-read list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass> $granted_permissions
 * @property-read list<string> $granted_scopes
 * @property-read PartnerAppMerchantReadinessInput|array<array-key, mixed>|\stdClass $merchant_readiness
 * @property-read string $mode
 * @property-read string $partner_app_install_id
 * @property-read string|\DateTimeInterface $revoked_at
 * @property-read string $revoked_by_user_id
 * @property-read string $sandbox_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerEnvironmentGrantInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'environment_grant_id': string, 'granted_permissions': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'granted_scopes': list<string>, 'merchant_readiness'?: PartnerAppMerchantReadinessInput|array<array-key, mixed>|\stdClass, 'mode': string, 'partner_app_install_id': string, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by_user_id'?: string, 'sandbox_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerEnvironmentGrantInput')); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY".
     * @return string
     * @throws SdkError When environment_grant_id is omitted; use hasEnvironmentGrantId() or valueOrDefault().
     */
    public function getEnvironmentGrantId(): string { return $this->get('environment_grant_id'); }
    public function hasEnvironmentGrantId(): bool { return $this->has('environment_grant_id'); }
    /** The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. [] (Value): {@see PartnerAppPermissionManifestEntryInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When granted_permissions is omitted; use hasGrantedPermissions() or valueOrDefault().
     */
    public function getGrantedPermissions(): array { return $this->get('granted_permissions'); }
    public function hasGrantedPermissions(): bool { return $this->has('granted_permissions'); }
    /**  [] (Value): string.
     * @return list<string>
     * @throws SdkError When granted_scopes is omitted; use hasGrantedScopes() or valueOrDefault().
     */
    public function getGrantedScopes(): array { return $this->get('granted_scopes'); }
    public function hasGrantedScopes(): bool { return $this->has('granted_scopes'); }
    /** The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. An installed merchant's payments and payouts readiness in one environment, summarized for the partner app's owner.
     * @return PartnerAppMerchantReadinessInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When merchant_readiness is omitted; use hasMerchantReadiness() or valueOrDefault().
     */
    public function getMerchantReadiness(): mixed { return $this->get('merchant_readiness'); }
    public function hasMerchantReadiness(): bool { return $this->has('merchant_readiness'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** ID of the install this grant belongs to. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When revoked_at is omitted; use hasRevokedAt() or valueOrDefault().
     */
    public function getRevokedAt(): string|\DateTimeInterface { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     * @return string
     * @throws SdkError When revoked_by_user_id is omitted; use hasRevokedByUserId() or valueOrDefault().
     */
    public function getRevokedByUserId(): string { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0".
     * @return string
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Value enum: "pending_exchange", "active", "revoked".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. [] enum: "revoke". [] (Value): string.  Value enum: "revoke".
     * @return list<string>
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}

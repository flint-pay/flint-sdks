<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read string $environment_grant_id
 * @property-read list<PartnerAppPermissionManifestEntry> $granted_permissions
 * @property-read list<string> $granted_scopes
 * @property-read ?PartnerAppMerchantReadiness $merchant_readiness
 * @property-read string $mode
 * @property-read string $partner_app_install_id
 * @property-read ?string $revoked_at
 * @property-read ?string $revoked_by_user_id
 * @property-read ?string $sandbox_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class EnvironmentGrantCreatedEventDataObject extends Model {
    /** @param array{'created_at': string, 'environment_grant_id': string, 'granted_permissions': list<mixed>, 'granted_scopes': list<string>, 'merchant_readiness'?: mixed, 'mode': string, 'partner_app_install_id': string, 'revoked_at'?: string, 'revoked_by_user_id'?: string, 'sandbox_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('EnvironmentGrantCreatedEventDataObject')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** environment_grant_id
     * @return string
     */
    public function getEnvironmentGrantId(): string { return $this->get('environment_grant_id'); }
    public function hasEnvironmentGrantId(): bool { return $this->has('environment_grant_id'); }
    /** The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. [] (Value): {@see PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntry>
     */
    public function getGrantedPermissions(): array { return $this->get('granted_permissions'); }
    public function hasGrantedPermissions(): bool { return $this->has('granted_permissions'); }
    /**  [] (Value): string.
     * @return list<string>
     */
    public function getGrantedScopes(): array { return $this->get('granted_scopes'); }
    public function hasGrantedScopes(): bool { return $this->has('granted_scopes'); }
    /** The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. An installed merchant's payments and payouts readiness in one environment, summarized for the partner app's owner.
     * @return ?PartnerAppMerchantReadiness
     */
    public function getMerchantReadiness(): ?PartnerAppMerchantReadiness { return $this->get('merchant_readiness'); }
    public function hasMerchantReadiness(): bool { return $this->has('merchant_readiness'); }
    /** Environment used for this resource or request. Value enum: "test", "live".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** ID of the install this grant belongs to.
     * @return string
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getRevokedAt(): ?string { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** revoked_by_user_id
     * @return ?string
     */
    public function getRevokedByUserId(): ?string { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** ID of the sandbox this resource belongs to.
     * @return ?string
     */
    public function getSandboxId(): ?string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Value enum: "pending_exchange", "active", "revoked".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. [] enum: "revoke". [] (Value): string.  Value enum: "revoke".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}

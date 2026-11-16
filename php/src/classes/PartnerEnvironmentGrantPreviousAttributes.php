<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|null $created_at
 * @property-read string|null $environment_grant_id
 * @property-read list<PartnerAppPermissionManifestEntryPreviousAttributes>|null $granted_permissions
 * @property-read list<string>|null $granted_scopes
 * @property-read mixed $merchant_readiness
 * @property-read string|null $mode
 * @property-read string|null $partner_app_install_id
 * @property-read mixed $payment_splits
 * @property-read mixed $platform_fee_cap
 * @property-read string|null $revoked_at
 * @property-read string|null $revoked_by_user_id
 * @property-read string|null $sandbox_id
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|null $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class PartnerEnvironmentGrantPreviousAttributes extends Model {
    /** @param array{'created_at'?: mixed, 'environment_grant_id'?: mixed, 'granted_permissions'?: mixed, 'granted_scopes'?: mixed, 'merchant_readiness'?: mixed, 'mode'?: mixed, 'partner_app_install_id'?: mixed, 'payment_splits'?: mixed, 'platform_fee_cap'?: mixed, 'revoked_at'?: mixed, 'revoked_by_user_id'?: mixed, 'sandbox_id'?: mixed, 'status'?: mixed, 'supported_actions'?: mixed, 'updated_at'?: mixed, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerEnvironmentGrantPreviousAttributes')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getCreatedAt(): string|null { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier for this environment grant, prefixed `egrt_`. anyOf[1] (Value): string. Unique identifier for this environment grant, prefixed `egrt_`. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getEnvironmentGrantId(): string|null { return $this->get('environment_grant_id'); }
    public function hasEnvironmentGrantId(): bool { return $this->has('environment_grant_id'); }
    /** The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. anyOf[1] (Value): Array of {@see PartnerAppPermissionManifestEntryPreviousAttributes}. The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. anyOf[1][] (Value): {@see PartnerAppPermissionManifestEntryPreviousAttributes}. anyOf[2] (Value): null.
     * @return list<PartnerAppPermissionManifestEntryPreviousAttributes>|null
     */
    public function getGrantedPermissions(): array|null { return $this->get('granted_permissions'); }
    public function hasGrantedPermissions(): bool { return $this->has('granted_permissions'); }
    /** The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. anyOf[1] (Value): Array of string. The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getGrantedScopes(): array|null { return $this->get('granted_scopes'); }
    public function hasGrantedScopes(): bool { return $this->has('granted_scopes'); }
    /** The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. anyOf[1] (Value): {@see PartnerAppMerchantReadinessPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getMerchantReadiness(): mixed { return $this->get('merchant_readiness'); }
    public function hasMerchantReadiness(): bool { return $this->has('merchant_readiness'); }
    /** Environment used for this resource or request. Value enum: "test", "live". anyOf[1] (Value): string. Environment used for this resource or request. Value enum: "test", "live". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getMode(): string|null { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** ID of the install this grant belongs to. anyOf[1] (Value): string. ID of the install this grant belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getPartnerAppInstallId(): string|null { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The merchant's approval to receive split funds from the app in this mode, present while it lasts. A merchant approves by authorizing an app that declares payment_splits. The approval ends when the app removes payment_splits, or when the merchant or you revoke this grant or the install; authorizing again approves again. A payment's splits to this seller need the approval in the payment's mode. anyOf[1] (Value): {@see PartnerEnvironmentGrantPaymentSplitsPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPaymentSplits(): mixed { return $this->get('payment_splits'); }
    public function hasPaymentSplits(): bool { return $this->has('payment_splits'); }
    /** The platform fee cap the merchant approved for this mode: what the app's cap was when the merchant approved it, lowered at once whenever the app lowers its cap. Absent when the merchant approved none. A higher app cap applies only after the merchant authorizes again. No request accepts a platform fee yet. anyOf[1] (Value): {@see PlatformFeeCapPreviousAttributes}. anyOf[2] (Value): null.
     * @return mixed
     */
    public function getPlatformFeeCap(): mixed { return $this->get('platform_fee_cap'); }
    public function hasPlatformFeeCap(): bool { return $this->has('platform_fee_cap'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRevokedAt(): string|null { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. anyOf[1] (Value): string. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getRevokedByUserId(): string|null { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** ID of the sandbox this resource belongs to. anyOf[1] (Value): string. ID of the sandbox this resource belongs to. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getSandboxId(): string|null { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Value enum: "pending_exchange", "active", "revoked". anyOf[1] (Value): string. Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Value enum: "pending_exchange", "active", "revoked". anyOf[2] (Value): null.
     * @return string|null
     */
    public function getStatus(): string|null { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. [] enum: "revoke". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. [] enum: "revoke". anyOf[1][] (Value): string.  Value enum: "revoke". anyOf[2] (Value): null.
     * @return list<string>|null
     */
    public function getSupportedActions(): array|null { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. anyOf[2] (Value): null.
     * @return string|null
     */
    public function getUpdatedAt(): string|null { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}

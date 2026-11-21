<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface|null $created_at
 * @property-read string|null $environment_grant_id
 * @property-read list<PartnerAppPermissionManifestEntryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null $granted_permissions
 * @property-read list<string>|null $granted_scopes
 * @property-read PartnerAppMerchantReadinessPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $merchant_readiness
 * @property-read string|null $mode
 * @property-read string|null $partner_app_install_id
 * @property-read PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $payment_splits
 * @property-read PlatformFeeCapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null $platform_fee_cap
 * @property-read string|\DateTimeInterface|null $revoked_at
 * @property-read string|null $revoked_by_user_id
 * @property-read string|null $sandbox_id
 * @property-read string|null $status
 * @property-read list<string>|null $supported_actions
 * @property-read string|\DateTimeInterface|null $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerEnvironmentGrantPreviousAttributesInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface|null, 'environment_grant_id'?: string|null, 'granted_permissions'?: list<PartnerAppPermissionManifestEntryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null, 'granted_scopes'?: list<string>|null, 'merchant_readiness'?: PartnerAppMerchantReadinessPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'mode'?: string|null, 'partner_app_install_id'?: string|null, 'payment_splits'?: PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'platform_fee_cap'?: PlatformFeeCapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null, 'revoked_at'?: string|\DateTimeInterface|null, 'revoked_by_user_id'?: string|null, 'sandbox_id'?: string|null, 'status'?: string|null, 'supported_actions'?: list<string>|null, 'updated_at'?: string|\DateTimeInterface|null, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerEnvironmentGrantPreviousAttributesInput')); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): mixed { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Unique identifier for this environment grant, prefixed `egrt_`. anyOf[1] (Value): string. Unique identifier for this environment grant, prefixed `egrt_`. Example: "egrt_01KEZF7C00MQQDDB7YWGXV3MXY". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When environment_grant_id is omitted; use hasEnvironmentGrantId() or valueOrDefault().
     */
    public function getEnvironmentGrantId(): mixed { return $this->get('environment_grant_id'); }
    public function hasEnvironmentGrantId(): bool { return $this->has('environment_grant_id'); }
    /** The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. anyOf[1] (Value): Array of {@see PartnerAppPermissionManifestEntryPreviousAttributesInput}. The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the code exchange's scope. anyOf[1][] (Value): {@see PartnerAppPermissionManifestEntryPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return list<PartnerAppPermissionManifestEntryPreviousAttributesInput|array<array-key, mixed>|\stdClass>|null
     * @throws SdkError When granted_permissions is omitted; use hasGrantedPermissions() or valueOrDefault().
     */
    public function getGrantedPermissions(): mixed { return $this->get('granted_permissions'); }
    public function hasGrantedPermissions(): bool { return $this->has('granted_permissions'); }
    /** The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. anyOf[1] (Value): Array of string. The Flint API scopes the grant allows: the union of the required scopes of its granted permissions. Narrowed at once when the app removes scopes from a permission. anyOf[1][] (Value): string. anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When granted_scopes is omitted; use hasGrantedScopes() or valueOrDefault().
     */
    public function getGrantedScopes(): mixed { return $this->get('granted_scopes'); }
    public function hasGrantedScopes(): bool { return $this->has('granted_scopes'); }
    /** The installed merchant’s payments and payouts readiness in this grant’s environment, summarized for the app’s owner: the `status` and `status_reason` that a partner app token in the grant’s mode reads from `readiness` on GET /v1/merchant for this merchant, without requirement names or next actions. Present when the app’s owner lists installs or gets one, on an active grant of an active install of an active app, when the grant holds `merchants.profile.read` or `merchants.profile.write` within the app’s `allowed_scopes` and the merchant and the grant’s environment are active. Absent on other grants, on the installing merchant’s own install reads, on revoke results, and in webhook events. To see which requirements are due, read the merchant with a partner app token in the grant’s mode. anyOf[1] (Value): {@see PartnerAppMerchantReadinessPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PartnerAppMerchantReadinessPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When merchant_readiness is omitted; use hasMerchantReadiness() or valueOrDefault().
     */
    public function getMerchantReadiness(): mixed { return $this->get('merchant_readiness'); }
    public function hasMerchantReadiness(): bool { return $this->has('merchant_readiness'); }
    /** Environment used for this resource or request. Value enum: "test", "live". anyOf[1] (Value): string. Environment used for this resource or request. Value enum: "test", "live". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): mixed { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** ID of the install this grant belongs to. anyOf[1] (Value): string. ID of the install this grant belongs to. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): mixed { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The merchant's approval to receive split funds from the app in this mode, present while it lasts. A merchant approves by authorizing an app that declares payment_splits. The approval ends when the app removes payment_splits, or when the merchant or you revoke this grant or the install; authorizing again approves again. A payment's splits to this seller need the approval in the payment's mode. anyOf[1] (Value): {@see PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PartnerEnvironmentGrantPaymentSplitsPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When payment_splits is omitted; use hasPaymentSplits() or valueOrDefault().
     */
    public function getPaymentSplits(): mixed { return $this->get('payment_splits'); }
    public function hasPaymentSplits(): bool { return $this->has('payment_splits'); }
    /** The platform fee cap the merchant approved for this mode: what the app's cap was when the merchant approved it, lowered at once whenever the app lowers its cap. Absent when the merchant approved none. A higher app cap applies only after the merchant authorizes again. anyOf[1] (Value): {@see PlatformFeeCapPreviousAttributesInput}. anyOf[2] (Value): null.
     * @return PlatformFeeCapPreviousAttributesInput|array<array-key, mixed>|\stdClass|null
     * @throws SdkError When platform_fee_cap is omitted; use hasPlatformFeeCap() or valueOrDefault().
     */
    public function getPlatformFeeCap(): mixed { return $this->get('platform_fee_cap'); }
    public function hasPlatformFeeCap(): bool { return $this->has('platform_fee_cap'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When revoked_at is omitted; use hasRevokedAt() or valueOrDefault().
     */
    public function getRevokedAt(): mixed { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. anyOf[1] (Value): string. ID of the user who revoked the grant, or the install it belongs to. Omitted when the grant isn't revoked or no user performed the revoke. Example: "usr_01KEZF7C00YC8757ZYP9727JM0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When revoked_by_user_id is omitted; use hasRevokedByUserId() or valueOrDefault().
     */
    public function getRevokedByUserId(): mixed { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** ID of the sandbox this resource belongs to. anyOf[1] (Value): string. ID of the sandbox this resource belongs to. Example: "test_01KEZF7C00JC77HTMTB2XHNPE0". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When sandbox_id is omitted; use hasSandboxId() or valueOrDefault().
     */
    public function getSandboxId(): mixed { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
    /** Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Value enum: "pending_exchange", "active", "revoked". anyOf[1] (Value): string. Where the grant is in its lifecycle. Only an active grant gives the app access to its environment. Value enum: "pending_exchange", "active", "revoked". anyOf[2] (Value): null.
     * @return string|null
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): mixed { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. [] enum: "revoke". anyOf[1] (Value): Array of string. Lifecycle actions Flint accepts now. Revoke is accepted for pending and active grants and returns the current grant when it is already revoked. [] enum: "revoke". anyOf[1][] (Value): string.  Value enum: "revoke". anyOf[2] (Value): null.
     * @return list<string>|null
     * @throws SdkError When supported_actions is omitted; use hasSupportedActions() or valueOrDefault().
     */
    public function getSupportedActions(): mixed { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. anyOf[1] (Value): string. RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z". anyOf[2] (Value): null.
     * @return string|\DateTimeInterface|null
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): mixed { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}

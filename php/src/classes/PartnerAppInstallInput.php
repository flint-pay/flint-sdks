<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass> $environment_grants
 * @property-read string $installed_by_user_id
 * @property-read string $merchant_id
 * @property-read string $merchant_signup_id
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $partner_app_name
 * @property-read PartnerAppPlatformContactInput|array<array-key, mixed>|\stdClass $platform_contact
 * @property-read string|\DateTimeInterface $revoked_at
 * @property-read string $revoked_by
 * @property-read string $revoked_by_user_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppInstallInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'environment_grants'?: list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>, 'installed_by_user_id'?: string, 'merchant_id': string, 'merchant_signup_id'?: string, 'partner_app_id': string, 'partner_app_install_id': string, 'partner_app_name': string, 'platform_contact'?: PartnerAppPlatformContactInput|array<array-key, mixed>|\stdClass, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by'?: string, 'revoked_by_user_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallInput')); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** The install's environment grants, at most one for each mode, live and test, that the merchant approved. Omitted when the install has none. [] (Value): {@see PartnerEnvironmentGrantInput}. A partner application's authorization to access an environment.
     * @return list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When environment_grants is omitted; use hasEnvironmentGrants() or valueOrDefault().
     */
    public function getEnvironmentGrants(): array { return $this->get('environment_grants'); }
    public function hasEnvironmentGrants(): bool { return $this->has('environment_grants'); }
    /** ID of the user who approved the install, or the signup's owner for an install a merchant signup created. Omitted when no user is recorded. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     * @return string
     * @throws SdkError When installed_by_user_id is omitted; use hasInstalledByUserId() or valueOrDefault().
     */
    public function getInstalledByUserId(): string { return $this->get('installed_by_user_id'); }
    public function hasInstalledByUserId(): bool { return $this->has('installed_by_user_id'); }
    /** ID of the merchant this resource belongs to. Example: "mer_01KEZF7C00KPYH1DDFPCCX3B6E".
     * @return string
     * @throws SdkError When merchant_id is omitted; use hasMerchantId() or valueOrDefault().
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** The merchant signup that created the merchant and this install, when one did. The installing merchant reads it too. A merchant has at most one such install. It stays after a revoke, as history, but Flint's emails lead to the app only until the install's first revoke. Example: "msu_01KEZF7C00SRGYRMBPKRKW8V9J".
     * @return string
     * @throws SdkError When merchant_signup_id is omitted; use hasMerchantSignupId() or valueOrDefault().
     */
    public function getMerchantSignupId(): string { return $this->get('merchant_signup_id'); }
    public function hasMerchantSignupId(): bool { return $this->has('merchant_signup_id'); }
    /** ID of the partner app the merchant installed. Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Unique identifier for this partner app install, prefixed `pinst_`. Example: "pinst_01KEZF7C003HVKZR3GZAW6AFAZ".
     * @return string
     * @throws SdkError When partner_app_install_id is omitted; use hasPartnerAppInstallId() or valueOrDefault().
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The app’s current name.
     * @return string
     * @throws SdkError When partner_app_name is omitted; use hasPartnerAppName() or valueOrDefault().
     */
    public function getPartnerAppName(): string { return $this->get('partner_app_name'); }
    public function hasPartnerAppName(): bool { return $this->has('partner_app_name'); }
    /** The platform's current support contact, read live from platform_profile. Absent when the app has no platform profile, and in webhook event payloads. The platform's support contact shown to merchants.
     * @return PartnerAppPlatformContactInput|array<array-key, mixed>|\stdClass
     * @throws SdkError When platform_contact is omitted; use hasPlatformContact() or valueOrDefault().
     */
    public function getPlatformContact(): mixed { return $this->get('platform_contact'); }
    public function hasPlatformContact(): bool { return $this->has('platform_contact'); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When revoked_at is omitted; use hasRevokedAt() or valueOrDefault().
     */
    public function getRevokedAt(): string|\DateTimeInterface { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Who ended the install. Omitted while the install isn't revoked, and cleared when the merchant authorizes the app again. Value enum: "merchant", "partner_app".
     * @return string
     * @throws SdkError When revoked_by is omitted; use hasRevokedBy() or valueOrDefault().
     */
    public function getRevokedBy(): string { return $this->get('revoked_by'); }
    public function hasRevokedBy(): bool { return $this->has('revoked_by'); }
    /** ID of the user who revoked the install. Omitted when the install isn't revoked or no user performed the revoke, as when the app's deletion ended it. Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     * @return string
     * @throws SdkError When revoked_by_user_id is omitted; use hasRevokedByUserId() or valueOrDefault().
     */
    public function getRevokedByUserId(): string { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** Where the install is in its lifecycle. Value enum: "pending_exchange", "active", "revoked".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. [] enum: "revoke". [] (Value): string.  Value enum: "revoke".
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

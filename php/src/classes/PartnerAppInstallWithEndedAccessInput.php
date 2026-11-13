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
 * @property-read string|\DateTimeInterface $revoked_at
 * @property-read string $revoked_by
 * @property-read string $revoked_by_user_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read list<string> $deleted_webhook_endpoint_ids
 * @property-read list<string> $revoked_api_key_ids
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppInstallWithEndedAccessInput extends Model {
    /** @param array{'created_at': string|\DateTimeInterface, 'environment_grants'?: list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>, 'installed_by_user_id'?: string, 'merchant_id': string, 'merchant_signup_id'?: string, 'partner_app_id': string, 'partner_app_install_id': string, 'partner_app_name': string, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by'?: string, 'revoked_by_user_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string|\DateTimeInterface, 'deleted_webhook_endpoint_ids': list<string>, 'revoked_api_key_ids': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallWithEndedAccessInput')); }
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /**  [] (Value): {@see PartnerEnvironmentGrantInput}. A partner application's authorization to access an environment.
     * @return list<PartnerEnvironmentGrantInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When environment_grants is omitted; use hasEnvironmentGrants() or valueOrDefault().
     */
    public function getEnvironmentGrants(): array { return $this->get('environment_grants'); }
    public function hasEnvironmentGrants(): bool { return $this->has('environment_grants'); }
    /** Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
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
    /** Example: "papp_01KEZF7C00Y8VMXYZ1GNPP3WHV".
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
    /** RFC3339 timestamp. Format: date-time. Example: "2026-08-02T16:00:00Z".
     * @return string|\DateTimeInterface
     * @throws SdkError When revoked_at is omitted; use hasRevokedAt() or valueOrDefault().
     */
    public function getRevokedAt(): string|\DateTimeInterface { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Value enum: "merchant", "partner_app".
     * @return string
     * @throws SdkError When revoked_by is omitted; use hasRevokedBy() or valueOrDefault().
     */
    public function getRevokedBy(): string { return $this->get('revoked_by'); }
    public function hasRevokedBy(): bool { return $this->has('revoked_by'); }
    /** Example: "usr_01KEZF7C00YC8757ZYP9727JM0".
     * @return string
     * @throws SdkError When revoked_by_user_id is omitted; use hasRevokedByUserId() or valueOrDefault().
     */
    public function getRevokedByUserId(): string { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** Value enum: "pending_exchange", "active", "revoked".
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
    /** Webhook endpoints this request deleted because they were linked to this install. Sandbox endpoints stop receiving events immediately and are removed within seconds. Empty when no endpoints ended. maxItems: 50. [] (Value): string. pattern: ^whep_[0-9A-HJKMNP-TV-Z]{26}$. Example: "whep_01KEZF7C006FXYTAJRZCGCBJTN".
     * @return list<string>
     * @throws SdkError When deleted_webhook_endpoint_ids is omitted; use hasDeletedWebhookEndpointIds() or valueOrDefault().
     */
    public function getDeletedWebhookEndpointIds(): array { return $this->get('deleted_webhook_endpoint_ids'); }
    public function hasDeletedWebhookEndpointIds(): bool { return $this->has('deleted_webhook_endpoint_ids'); }
    /** API keys this request revoked because they were linked to this install, live keys first. Empty when no keys ended or a previous request already revoked them. maxItems: 50. [] (Value): string. pattern: ^key_[0-9A-HJKMNP-TV-Z]{26}$. Example: "key_01KEZF7C008CTC2G5V6J08M6S7".
     * @return list<string>
     * @throws SdkError When revoked_api_key_ids is omitted; use hasRevokedApiKeyIds() or valueOrDefault().
     */
    public function getRevokedApiKeyIds(): array { return $this->get('revoked_api_key_ids'); }
    public function hasRevokedApiKeyIds(): bool { return $this->has('revoked_api_key_ids'); }
}

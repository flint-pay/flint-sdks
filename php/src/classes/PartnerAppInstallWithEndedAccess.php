<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string $created_at
 * @property-read ?list<PartnerEnvironmentGrant> $environment_grants
 * @property-read ?string $installed_by_user_id
 * @property-read string $merchant_id
 * @property-read string $partner_app_id
 * @property-read string $partner_app_install_id
 * @property-read string $partner_app_name
 * @property-read ?string $revoked_at
 * @property-read ?string $revoked_by
 * @property-read ?string $revoked_by_user_id
 * @property-read string $status
 * @property-read list<string> $supported_actions
 * @property-read string $updated_at
 * @property-read list<string> $deleted_webhook_endpoint_ids
 * @property-read list<string> $revoked_api_key_ids
 * Presence-aware response; omitted optional fields return null. */
final class PartnerAppInstallWithEndedAccess extends Model {
    /** @param array{'created_at': string, 'environment_grants'?: list<mixed>, 'installed_by_user_id'?: string, 'merchant_id': string, 'partner_app_id': string, 'partner_app_install_id': string, 'partner_app_name': string, 'revoked_at'?: string, 'revoked_by'?: string, 'revoked_by_user_id'?: string, 'status': string, 'supported_actions': list<string>, 'updated_at': string, 'deleted_webhook_endpoint_ids': list<string>, 'revoked_api_key_ids': list<string>, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppInstallWithEndedAccess')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getCreatedAt(): string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /**  [] (Value): {@see PartnerEnvironmentGrant}. A partner application's authorization to access an environment.
     * @return ?list<PartnerEnvironmentGrant>
     */
    public function getEnvironmentGrants(): ?array { return $this->get('environment_grants'); }
    public function hasEnvironmentGrants(): bool { return $this->has('environment_grants'); }
    /** installed_by_user_id
     * @return ?string
     */
    public function getInstalledByUserId(): ?string { return $this->get('installed_by_user_id'); }
    public function hasInstalledByUserId(): bool { return $this->has('installed_by_user_id'); }
    /** ID of the merchant this resource belongs to.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** partner_app_id
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Unique identifier for this partner app install, prefixed `pinst_`.
     * @return string
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** The app’s current name.
     * @return string
     */
    public function getPartnerAppName(): string { return $this->get('partner_app_name'); }
    public function hasPartnerAppName(): bool { return $this->has('partner_app_name'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getRevokedAt(): ?string { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Value enum: "merchant", "partner_app".
     * @return ?string
     */
    public function getRevokedBy(): ?string { return $this->get('revoked_by'); }
    public function hasRevokedBy(): bool { return $this->has('revoked_by'); }
    /** revoked_by_user_id
     * @return ?string
     */
    public function getRevokedByUserId(): ?string { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** Value enum: "pending_exchange", "active", "revoked".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Lifecycle actions Flint accepts now. Revoke is accepted for pending and active installations and returns the current installation when it is already revoked. [] enum: "revoke". [] (Value): string.  Value enum: "revoke".
     * @return list<string>
     */
    public function getSupportedActions(): array { return $this->get('supported_actions'); }
    public function hasSupportedActions(): bool { return $this->has('supported_actions'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string
     */
    public function getUpdatedAt(): string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Webhook endpoints this request deleted because they were linked to this install. Sandbox endpoints stop receiving events immediately and are removed within seconds. Empty when no endpoints ended. maxItems: 50. [] (Value): string. pattern: ^whep_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return list<string>
     */
    public function getDeletedWebhookEndpointIds(): array { return $this->get('deleted_webhook_endpoint_ids'); }
    public function hasDeletedWebhookEndpointIds(): bool { return $this->has('deleted_webhook_endpoint_ids'); }
    /** API keys this request revoked because they were linked to this install, live keys first. Empty when no keys ended or a previous request already revoked them. maxItems: 50. [] (Value): string. pattern: ^key_[0-9A-HJKMNP-TV-Z]{26}$.
     * @return list<string>
     */
    public function getRevokedApiKeyIds(): array { return $this->get('revoked_api_key_ids'); }
    public function hasRevokedApiKeyIds(): bool { return $this->has('revoked_api_key_ids'); }
}

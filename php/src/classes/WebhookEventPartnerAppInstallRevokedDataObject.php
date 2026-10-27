<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
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
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventPartnerAppInstallRevokedDataObject extends Model {
    /** @param array{'created_at'?: string, 'environment_grants'?: list<mixed>, 'installed_by_user_id'?: string, 'merchant_id': string, 'partner_app_id': string, 'partner_app_install_id': string, 'partner_app_name': string, 'revoked_at'?: string, 'revoked_by'?: string, 'revoked_by_user_id'?: string, 'status': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventPartnerAppInstallRevokedDataObject')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): Array of {@see PartnerEnvironmentGrant}. Shape $[] (Value): {@see PartnerEnvironmentGrant}. A partner application's authorization to access an environment.
     * @return ?list<PartnerEnvironmentGrant>
     */
    public function getEnvironmentGrants(): ?array { return $this->get('environment_grants'); }
    public function hasEnvironmentGrants(): bool { return $this->has('environment_grants'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getInstalledByUserId(): ?string { return $this->get('installed_by_user_id'); }
    public function hasInstalledByUserId(): bool { return $this->has('installed_by_user_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getMerchantId(): string { return $this->get('merchant_id'); }
    public function hasMerchantId(): bool { return $this->has('merchant_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPartnerAppInstallId(): string { return $this->get('partner_app_install_id'); }
    public function hasPartnerAppInstallId(): bool { return $this->has('partner_app_install_id'); }
    /** Shape $ (Value): string. The app’s current name.
     * @return string
     */
    public function getPartnerAppName(): string { return $this->get('partner_app_name'); }
    public function hasPartnerAppName(): bool { return $this->has('partner_app_name'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getRevokedAt(): ?string { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Shape $ (Value): string.  Value enum: "merchant", "partner_app".
     * @return ?string
     */
    public function getRevokedBy(): ?string { return $this->get('revoked_by'); }
    public function hasRevokedBy(): bool { return $this->has('revoked_by'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getRevokedByUserId(): ?string { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** Shape $ (Value): string.  Value enum: "pending_exchange", "active", "revoked".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}

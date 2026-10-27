<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read ?string $created_at
 * @property-read string $environment_grant_id
 * @property-read list<PartnerAppPermissionManifestEntry> $granted_permissions
 * @property-read list<string> $granted_scopes
 * @property-read string $mode
 * @property-read ?string $revoked_at
 * @property-read ?string $revoked_by_user_id
 * @property-read ?string $sandbox_id
 * @property-read string $status
 * @property-read ?string $updated_at
 * Presence-aware response; omitted optional fields return null. */
final class WebhookEventEnvironmentGrantCreatedDataObject extends Model {
    /** @param array{'created_at'?: string, 'environment_grant_id': string, 'granted_permissions': list<mixed>, 'granted_scopes': list<string>, 'mode': string, 'revoked_at'?: string, 'revoked_by_user_id'?: string, 'sandbox_id'?: string, 'status': string, 'updated_at'?: string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('WebhookEventEnvironmentGrantCreatedDataObject')); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getEnvironmentGrantId(): string { return $this->get('environment_grant_id'); }
    public function hasEnvironmentGrantId(): bool { return $this->has('environment_grant_id'); }
    /** Shape $ (Value): Array of {@see PartnerAppPermissionManifestEntry}. The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the token scope. Shape $[] (Value): {@see PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntry>
     */
    public function getGrantedPermissions(): array { return $this->get('granted_permissions'); }
    public function hasGrantedPermissions(): bool { return $this->has('granted_permissions'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getGrantedScopes(): array { return $this->get('granted_scopes'); }
    public function hasGrantedScopes(): bool { return $this->has('granted_scopes'); }
    /** Shape $ (Value): string.  Value enum: "test", "live".
     * @return string
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getRevokedAt(): ?string { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getRevokedByUserId(): ?string { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getSandboxId(): ?string { return $this->get('sandbox_id'); }
    public function hasSandboxId(): bool { return $this->has('sandbox_id'); }
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

<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read string|\DateTimeInterface $created_at
 * @property-read string $environment_grant_id
 * @property-read list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass> $granted_permissions
 * @property-read list<string> $granted_scopes
 * @property-read string $mode
 * @property-read string|\DateTimeInterface $revoked_at
 * @property-read string $revoked_by_user_id
 * @property-read string $sandbox_id
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerEnvironmentGrantInput extends Model {
    /** @param array{'created_at'?: string|\DateTimeInterface, 'environment_grant_id': string, 'granted_permissions': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'granted_scopes': list<string>, 'mode': string, 'revoked_at'?: string|\DateTimeInterface, 'revoked_by_user_id'?: string, 'sandbox_id'?: string, 'status': string, 'updated_at'?: string|\DateTimeInterface, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerEnvironmentGrantInput')); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** environment_grant_id
     * @return string
     * @throws SdkError When environment_grant_id is omitted; use hasEnvironmentGrantId() or valueOrDefault().
     */
    public function getEnvironmentGrantId(): string { return $this->get('environment_grant_id'); }
    public function hasEnvironmentGrantId(): bool { return $this->has('environment_grant_id'); }
    /** The app’s permissions this grant holds, from the app’s current manifest. Their permission IDs are the token scope. [] (Value): {@see PartnerAppPermissionManifestEntryInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
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
    /** Value enum: "test", "live".
     * @return string
     * @throws SdkError When mode is omitted; use hasMode() or valueOrDefault().
     */
    public function getMode(): string { return $this->get('mode'); }
    public function hasMode(): bool { return $this->has('mode'); }
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When revoked_at is omitted; use hasRevokedAt() or valueOrDefault().
     */
    public function getRevokedAt(): string|\DateTimeInterface { return $this->get('revoked_at'); }
    public function hasRevokedAt(): bool { return $this->has('revoked_at'); }
    /** revoked_by_user_id
     * @return string
     * @throws SdkError When revoked_by_user_id is omitted; use hasRevokedByUserId() or valueOrDefault().
     */
    public function getRevokedByUserId(): string { return $this->get('revoked_by_user_id'); }
    public function hasRevokedByUserId(): bool { return $this->has('revoked_by_user_id'); }
    /** sandbox_id
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
    /** RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
}

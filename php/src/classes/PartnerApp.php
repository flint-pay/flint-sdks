<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_scopes
 * @property-read string $api_version
 * @property-read ?string $api_version_changed_at
 * @property-read ?string $api_version_previous
 * @property-read string $client_id
 * @property-read ?string $created_at
 * @property-read list<string> $default_requested_permissions
 * @property-read string $name
 * @property-read string $partner_app_id
 * @property-read list<PartnerAppPermissionManifestEntry> $permission_manifest
 * @property-read ?string $previous_secret_expires_at
 * @property-read list<string> $redirect_uris
 * @property-read string $status
 * @property-read ?string $updated_at
 * @property-read string $version
 * Presence-aware response; omitted optional fields return null. */
final class PartnerApp extends Model {
    /** @param array{'allowed_scopes': list<string>, 'api_version': string, 'api_version_changed_at'?: string, 'api_version_previous'?: string, 'client_id': string, 'created_at'?: string, 'default_requested_permissions': list<string>, 'name': string, 'partner_app_id': string, 'permission_manifest': list<mixed>, 'previous_secret_expires_at'?: string, 'redirect_uris': list<string>, 'status': string, 'updated_at'?: string, 'version': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], true, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerApp')); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getAllowedScopes(): array { return $this->get('allowed_scopes'); }
    public function hasAllowedScopes(): bool { return $this->has('allowed_scopes'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getApiVersionChangedAt(): ?string { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** Shape $ (Value): string.
     * @return ?string
     */
    public function getApiVersionPrevious(): ?string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getCreatedAt(): ?string { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getDefaultRequestedPermissions(): array { return $this->get('default_requested_permissions'); }
    public function hasDefaultRequestedPermissions(): bool { return $this->has('default_requested_permissions'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): Array of {@see PartnerAppPermissionManifestEntry}. Shape $[] (Value): {@see PartnerAppPermissionManifestEntry}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntry>
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getPreviousSecretExpiresAt(): ?string { return $this->get('previous_secret_expires_at'); }
    public function hasPreviousSecretExpiresAt(): bool { return $this->has('previous_secret_expires_at'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     */
    public function getRedirectUris(): array { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
    /** Shape $ (Value): string.  Value enum: "active", "archived".
     * @return string
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return ?string
     */
    public function getUpdatedAt(): ?string { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
}

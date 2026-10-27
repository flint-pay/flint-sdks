<?php
declare(strict_types=1);
namespace Flint;
/**
 * @property-read list<string> $allowed_scopes
 * @property-read string $api_version
 * @property-read string|\DateTimeInterface $api_version_changed_at
 * @property-read string $api_version_previous
 * @property-read string $client_id
 * @property-read string|\DateTimeInterface $created_at
 * @property-read list<string> $default_requested_permissions
 * @property-read string $name
 * @property-read string $partner_app_id
 * @property-read list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass> $permission_manifest
 * @property-read string|\DateTimeInterface $previous_secret_expires_at
 * @property-read list<string> $redirect_uris
 * @property-read string $status
 * @property-read string|\DateTimeInterface $updated_at
 * @property-read string $version
 * @property-read string $client_secret
 * Presence-aware input; omitted fields throw when accessed. */
final class PartnerAppWithSecretInput extends Model {
    /** @param array{'allowed_scopes': list<string>, 'api_version': string, 'api_version_changed_at'?: string|\DateTimeInterface, 'api_version_previous'?: string, 'client_id': string, 'created_at'?: string|\DateTimeInterface, 'default_requested_permissions': list<string>, 'name': string, 'partner_app_id': string, 'permission_manifest': list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>, 'previous_secret_expires_at'?: string|\DateTimeInterface, 'redirect_uris': list<string>, 'status': string, 'updated_at'?: string|\DateTimeInterface, 'version': string, 'client_secret': string, ...}|object $values */
    public function __construct(array|object $values = [], array $redactFields = []) { parent::__construct($values, [], false, $redactFields, ['constraints' => true] + SchemaRegistry::source()->model('PartnerAppWithSecretInput')); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When allowed_scopes is omitted; use hasAllowedScopes() or valueOrDefault().
     */
    public function getAllowedScopes(): array { return $this->get('allowed_scopes'); }
    public function hasAllowedScopes(): bool { return $this->has('allowed_scopes'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When api_version is omitted; use hasApiVersion() or valueOrDefault().
     */
    public function getApiVersion(): string { return $this->get('api_version'); }
    public function hasApiVersion(): bool { return $this->has('api_version'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When api_version_changed_at is omitted; use hasApiVersionChangedAt() or valueOrDefault().
     */
    public function getApiVersionChangedAt(): string|\DateTimeInterface { return $this->get('api_version_changed_at'); }
    public function hasApiVersionChangedAt(): bool { return $this->has('api_version_changed_at'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When api_version_previous is omitted; use hasApiVersionPrevious() or valueOrDefault().
     */
    public function getApiVersionPrevious(): string { return $this->get('api_version_previous'); }
    public function hasApiVersionPrevious(): bool { return $this->has('api_version_previous'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When client_id is omitted; use hasClientId() or valueOrDefault().
     */
    public function getClientId(): string { return $this->get('client_id'); }
    public function hasClientId(): bool { return $this->has('client_id'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When created_at is omitted; use hasCreatedAt() or valueOrDefault().
     */
    public function getCreatedAt(): string|\DateTimeInterface { return $this->get('created_at'); }
    public function hasCreatedAt(): bool { return $this->has('created_at'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When default_requested_permissions is omitted; use hasDefaultRequestedPermissions() or valueOrDefault().
     */
    public function getDefaultRequestedPermissions(): array { return $this->get('default_requested_permissions'); }
    public function hasDefaultRequestedPermissions(): bool { return $this->has('default_requested_permissions'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When name is omitted; use hasName() or valueOrDefault().
     */
    public function getName(): string { return $this->get('name'); }
    public function hasName(): bool { return $this->has('name'); }
    /** Shape $ (Value): string.
     * @return string
     * @throws SdkError When partner_app_id is omitted; use hasPartnerAppId() or valueOrDefault().
     */
    public function getPartnerAppId(): string { return $this->get('partner_app_id'); }
    public function hasPartnerAppId(): bool { return $this->has('partner_app_id'); }
    /** Shape $ (Value): Array of {@see PartnerAppPermissionManifestEntryInput}. Shape $[] (Value): {@see PartnerAppPermissionManifestEntryInput}. One permission a partner app can request, with a title, a description, and the Flint scopes it grants.
     * @return list<PartnerAppPermissionManifestEntryInput|array<array-key, mixed>|\stdClass>
     * @throws SdkError When permission_manifest is omitted; use hasPermissionManifest() or valueOrDefault().
     */
    public function getPermissionManifest(): array { return $this->get('permission_manifest'); }
    public function hasPermissionManifest(): bool { return $this->has('permission_manifest'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When previous_secret_expires_at is omitted; use hasPreviousSecretExpiresAt() or valueOrDefault().
     */
    public function getPreviousSecretExpiresAt(): string|\DateTimeInterface { return $this->get('previous_secret_expires_at'); }
    public function hasPreviousSecretExpiresAt(): bool { return $this->has('previous_secret_expires_at'); }
    /** Shape $ (Value): Array of string. Shape $[] (Value): string.
     * @return list<string>
     * @throws SdkError When redirect_uris is omitted; use hasRedirectUris() or valueOrDefault().
     */
    public function getRedirectUris(): array { return $this->get('redirect_uris'); }
    public function hasRedirectUris(): bool { return $this->has('redirect_uris'); }
    /** Shape $ (Value): string.  Value enum: "active", "archived".
     * @return string
     * @throws SdkError When status is omitted; use hasStatus() or valueOrDefault().
     */
    public function getStatus(): string { return $this->get('status'); }
    public function hasStatus(): bool { return $this->has('status'); }
    /** Shape $ (Value): string. RFC3339 timestamp. Format: date-time.
     * @return string|\DateTimeInterface
     * @throws SdkError When updated_at is omitted; use hasUpdatedAt() or valueOrDefault().
     */
    public function getUpdatedAt(): string|\DateTimeInterface { return $this->get('updated_at'); }
    public function hasUpdatedAt(): bool { return $this->has('updated_at'); }
    /** Shape $ (Value): integer string. Use an integer string (decimal digits), not a floating-point number. Format: uint64. minimum: 1.
     * @return string
     * @throws SdkError When version is omitted; use hasVersion() or valueOrDefault().
     */
    public function getVersion(): string { return $this->get('version'); }
    public function hasVersion(): bool { return $this->has('version'); }
    /** Shape $ (Value): string. One-time client secret returned when the partner app is created or its secret is rotated.
     * @return string
     * @throws SdkError When client_secret is omitted; use hasClientSecret() or valueOrDefault().
     */
    public function getClientSecret(): string { return $this->get('client_secret'); }
    public function hasClientSecret(): bool { return $this->has('client_secret'); }
}
